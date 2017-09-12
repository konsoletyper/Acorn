@file:Suppress("unused")

package com.acornui.component

import com.acornui.collection.CyclicList
import com.acornui.collection.cyclicListPool
import com.acornui.core.Disposable
import com.acornui.core.TreeWalk
import com.acornui.core.di.Owned
import com.acornui.core.di.inject
import com.acornui.math.Bounds

inline fun <reified T : UiComponent> ElementContainer.createOrReuseContents(factory: Owned.() -> T): T {
	val existing: T
	val contents = elements.getOrNull(0)
	if (contents !is T) {
		removeElement(contents)
		contents?.dispose()
		existing = factory()
		addElement(existing)
	} else {
		existing = contents
	}
	return existing
}

interface ElementParent<out T> {

	val elements: List<T>

}

/**
 * An element parent is an interface that externally exposes the ability to add and remove elements.
 */
interface MutableElementParent<T> : ElementParent<T> {

	/**
	 * Syntax sugar for addElement.
	 */
	operator fun <P : T> P.unaryPlus(): P {
		this@MutableElementParent.addElement(this@MutableElementParent.elements.size, this)
		return this
	}

	operator fun <P : T> P.unaryMinus(): P {
		this@MutableElementParent.removeElement(this)
		return this
	}

	fun <S : T> addElement(child: S): S = addElement(elements.size, child)
	fun <S : T> addOptionalElement(child: S?): S? {
		if (child == null) return null
		return addElement(child)
	}

	fun <S : T> addOptionalElement(index: Int, child: S?): S? {
		if (child == null) return null
		return addElement(index, child)
	}

	fun <S : T> addElement(index: Int, element: S): S
	fun removeElement(element: T?): Boolean {
		if (element == null) return false
		val index = elements.indexOf(element)
		if (index == -1) return false
		removeElement(index)
		return true
	}

	fun removeElement(index: Int): T

	fun clearElements(dispose: Boolean = true)

	/**
	 * Adds an element after the provided element.
	 */
	fun addElementAfter(element: T, after: T): Int {
		val index = elements.indexOf(after)
		if (index == -1) return -1
		addElement(index + 1, element)
		return index + 1
	}

	/**
	 * Adds an element before the provided element.
	 */
	fun addElementBefore(element: T, before: T): Int {
		val index = elements.indexOf(before)
		if (index == -1) return -1
		addElement(index, element)
		return index
	}
}


inline fun <T> ElementParent<T>.iterateElements(body: (T) -> Boolean, reversed: Boolean) {
	if (reversed) {
		for (i in elements.lastIndex downTo 0) {
			body(elements[i])
		}
	} else {
		for (i in 0..elements.lastIndex) {
			body(elements[i])
		}
	}
}

inline fun <T> ElementParent<T>.iterateElements(body: (T) -> Boolean) {
	for (i in 0..elements.lastIndex) {
		body(elements[i])
	}
}

/**
 * An ElementContainer is a container that can be provided a list of components as part of its external API.
 * It is up to this element container how to treat added elements. It may add them as children, it may provide the
 * element to a child element container.
 */
interface ElementContainer : Container, MutableElementParent<UiComponent>

inline fun <T> MutableElementParent<T>.iterateElementsReversed(body: (T) -> Boolean) {
	for (i in elements.lastIndex downTo 0) {
		body(elements[i])
	}
}

@Suppress("UNCHECKED_CAST") inline fun ElementContainer.elementWalkPreOrder(callback: (UiComponent) -> TreeWalk) {
	elementWalkPreOrder(callback, false)
}

@Suppress("UNCHECKED_CAST") inline fun ElementContainer.elementWalkPreOrderReversed(callback: (UiComponent) -> TreeWalk) {
	elementWalkPreOrder(callback, true)
}
/**
 * A pre-order child walk.
 *
 * @param callback The callback to invoke on each child.
 */
@Suppress("UNCHECKED_CAST") inline fun ElementContainer.elementWalkPreOrder(callback: (UiComponent) -> TreeWalk, reversed: Boolean) {
	val openList = cyclicListPool.obtain() as CyclicList<UiComponent>
	openList.add(this)
	loop@ while (openList.isNotEmpty()) {
		val next = openList.pop()
		val treeWalk = callback(next)
		when (treeWalk) {
			TreeWalk.HALT -> break@loop
			TreeWalk.SKIP -> continue@loop
			TreeWalk.ISOLATE -> {
				openList.clear()
			}
			else -> {
			}
		}
		(next as? ElementContainer)?.iterateElements({
			openList.add(it)
			true
		}, !reversed)
	}
	cyclicListPool.free(openList)
}

/**
 * @author nbilyk
 */
open class ElementContainerImpl(
		owner: Owned,
		override val native: NativeContainer = owner.inject(NativeContainer.FACTORY_KEY)(owner)
) : ContainerImpl(owner, native), ElementContainer {

	//-------------------------------------------------------------------------------------------------
	// Element methods.
	//-------------------------------------------------------------------------------------------------

	protected val _elements = ArrayList<UiComponent>()
	override val elements: List<UiComponent>
		get() = _elements

	override fun <S : UiComponent> addElement(index: Int, element: S): S {
		var newIndex = index
		val oldIndex = elements.indexOf(element)
		if (oldIndex != -1) {
			// Handle the case where after the element is removed, the new index needs to decrement to compensate.
			if (newIndex == oldIndex) return element
			if (oldIndex < newIndex)
				newIndex--
		}
		_elements.add(newIndex, element)
		element.disposed.add(this::elementDisposedHandler)
		onElementAdded(newIndex, element)
		return element
	}

	private fun elementDisposedHandler(element: Disposable) {
		removeElement(element as UiComponent)
	}

	/**
	 * Invoked when an external element has been added. If this is overriden and the [addChild] is delegated, the
	 * [onElementRemoved] should mirror the delegation.
	 *
	 * Example:
	 *
	 * private val otherContainer = addChild(container())
	 *
	 * override fun onElementAdded(index: Int, child: UiComponent) { otherContainer.addElement(child) }
	 * override fun onElementRemoved(index: Int, child: UiComponent) { otherContainer.removeElement(child) }
	 */
	protected open fun onElementAdded(index: Int, element: UiComponent) {
		if (index == elements.size - 1) {
			addChild(element)
		} else if (index == 0) {
			val nextElement = _elements[index + 1]
			addChildBefore(element, nextElement)
		} else {
			val previousElement = _elements[index - 1]
			addChildAfter(element, previousElement)
		}
	}

	override fun removeElement(index: Int): UiComponent {
		val element = _elements.removeAt(index)
		element.disposed.remove(this::elementDisposedHandler)
		onElementRemoved(index, element)
		if (element.parent != null) throw Exception("Removing an element should remove from the display.")
		return element
	}

	protected open fun onElementRemoved(index: Int, element: UiComponent) {
		removeChild(element)
	}

	override fun clearElements(dispose: Boolean) {
		val c = elements
		while (c.isNotEmpty()) {
			val element = removeElement(elements.size - 1)
			if (dispose) element.dispose()
		}
	}

	/**
	 * A Container implementation will measure its children for dimensions that were not explicit.
	 */
	override fun updateLayout(explicitWidth: Float?, explicitHeight: Float?, out: Bounds) {
		if (explicitWidth != null && explicitHeight != null) return // Use explicit dimensions.
		iterateElements {
			if (it.shouldLayout) {
				if (explicitWidth == null) {
					if (it.right > out.width)
						out.width = it.right
				}
				if (explicitHeight == null) {
					if (it.bottom > out.height)
						out.height = it.bottom
				}
			}
			true
		}
	}

	@Deprecated("use component?.dispose()", ReplaceWith("component?.dispose()"))
	override fun dispose(component: UiComponent?) {
		if (component == null) return
		removeElement(component)
		component.dispose()
	}

	/**
	 * Disposes this container and all its children.
	 */
	override fun dispose() {
		_elements.clear()
		super.dispose()
	}
}