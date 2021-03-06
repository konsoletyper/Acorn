/*
 * Copyright 2015 Nicholas Bilyk
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.acornui.component

import com.acornui._assert
import com.acornui.core.ParentRo
import com.acornui.core.di.DKey
import com.acornui.core.di.DependencyKeyImpl
import com.acornui.core.di.Owned
import com.acornui.core.di.inject
import com.acornui.graphics.Color
import com.acornui.math.Bounds
import com.acornui.math.Matrix4
import com.acornui.math.RayRo

import kotlin.properties.Delegates
import kotlin.properties.ReadWriteProperty

interface ContainerRo: UiComponentRo, ParentRo<UiComponentRo>

/**
 * An interface for a ui component that has child components.
 */
interface Container : UiComponent, ContainerRo


/**
 * @author nbilyk
 */
open class ContainerImpl(
		owner: Owned,
		override val native: NativeContainer = owner.inject(NativeContainer.FACTORY_KEY)(owner)
) : UiComponentImpl(owner, native), Container {

	protected val _children = ArrayList<UiComponent>()
	override val children: List<UiComponentRo>
		get() = _children


	protected fun <T : UiComponent> addChild(child: T): T {
		return addChild(_children.size, child)
	}

	protected fun <T : UiComponent> addOptionalChild(child: T?): T? {
		return addOptionalChild(_children.size, child)
	}

	protected fun <T : UiComponent> addOptionalChild(index: Int, child: T?): T? {
		if (child == null) return child
		return addChild(index, child)
	}

	/**
	 * Adds the specified child to this container.
	 * @param index The index of where to insert the child. By default this is the end of the list.
	 */
	protected fun <T : UiComponent> addChild(index: Int, child: T): T {
		_assert(!isDisposed, "This Container is disposed.")
		_assert(!child.isDisposed, "Added child is disposed.")
		_assert(child.parent == null, "Remove child first.")
		if (index < 0 || index > _children.size)
			throw Exception("index is out of bounds.")

		child.parent = this
		_children.add(index, child)
		native.addChild(child.native, index)
		child.invalidated.add(this::childInvalidatedHandler)
		child.disposed.add(this::childDisposedHandler)

		if (isActive) {
			child.activate()
		}
		invalidate(bubblingFlags)
		child.invalidate(cascadingFlags)
		return child
	}

	/**
	 * Adds a child after the [after] child.
	 */
	protected fun addChildAfter(child: UiComponent, after: UiComponent): Int {
		val index = _children.indexOf(after)
		if (index == -1) return -1
		addChild(index + 1, child)
		return index + 1
	}

	/**
	 * Adds a child before the [before] child.
	 */
	protected fun addChildBefore(child: UiComponent, before: UiComponent): Int {
		val index = _children.indexOf(before)
		if (index == -1) return -1
		addChild(index, child)
		return index
	}

	protected fun removeChild(child: UiComponent?): Boolean {
		if (child == null) return false
		val index = _children.indexOf(child)
		if (index == -1) return false
		removeChild(index)
		return true
	}

	/**
	 * Removes a child at the given index from this container.
	 * @return Returns true if a child was removed, or false if the index was out of range.
	 */
	protected fun removeChild(index: Int): UiComponent {
		_assert(!isDisposed, "This Container is disposed.")

		val child = _children.removeAt(index)
		child.parent = null

		child.invalidated.remove(this::childInvalidatedHandler)
		child.disposed.remove(this::childDisposedHandler)
		if (child.isActive) {
			child.deactivate()
		}
		native.removeChild(index)
		invalidate(bubblingFlags)
		child.invalidate(cascadingFlags)

		return child
	}

	protected fun clearChildren(dispose: Boolean = true) {
		val c = _children
		while (c.isNotEmpty()) {
			val child = removeChild(_children.size - 1)
			if (dispose) child.dispose()
		}
	}

	//-----------------------------------------------------------------------

	override fun onActivated() {
		super.onActivated()
		for (i in 0.._children.lastIndex) {
			val child = _children[i]
			if (!child.isActive) {
				child.activate()
			}
		}
	}

	//-------------------------------------------------------------------------------------------------

	/**
	 * These flags, when invalidated, will cascade down to this container's children.
	 */
	protected var cascadingFlags =
			ValidationFlags.STYLES or
			ValidationFlags.HIERARCHY_DESCENDING or
			ValidationFlags.CONCATENATED_COLOR_TRANSFORM or
			ValidationFlags.CONCATENATED_TRANSFORM or
			ValidationFlags.INTERACTIVITY_MODE

	override fun onInvalidated(flagsInvalidated: Int) {
		val flagsToCascade = flagsInvalidated and cascadingFlags
		if (flagsToCascade > 0) {
			// This component has flags that have been invalidated that must cascade down to the children.
			_isInvalidatingChildren = true
			for (i in 0.._children.lastIndex) {
				_children[i].invalidate(flagsToCascade)
			}
			_isInvalidatingChildren = false
		}
	}

	override fun update() {
		super.update()

		for (i in 0.._children.lastIndex) {
			_children[i].update()
		}
	}

	override fun draw() {
		for (i in 0.._children.lastIndex) {
			_children[i].render()
		}
	}

	override fun onDeactivated() {
		for (i in 0.._children.lastIndex) {
			val child = _children[i]
			if (child.isActive) {
				child.deactivate()
			}
		}
	}

	/**
	 * If this container is currently invalidating the children, ignore the child invalidated signals.
	 */
	private var _isInvalidatingChildren: Boolean = false
	protected val isInvalidatingChildren: Boolean
		get() = _isInvalidatingChildren

	/**
	 * The validation flags that, if a child has invalidated, will cause this container's layout to become invalidated.
	 */
	protected var layoutInvalidatingFlags =
			ValidationFlags.TRANSFORM or
			ValidationFlags.HIERARCHY_ASCENDING or
			ValidationFlags.LAYOUT

	/**
	 * The validation flags that, if a child has invalidated, will cause the same flags on this container to become
	 * invalidated.
	 * If this container doesn't lay its children out, it is a good practice to set this property to just
	 * [ValidationFlags.HIERARCHY_ASCENDING]
	 */
	protected var bubblingFlags =
			ValidationFlags.HIERARCHY_ASCENDING or
			ValidationFlags.LAYOUT or
			ValidationFlags.SIZE_CONSTRAINTS

	//-----------------------------------------------------
	// Interactivity utility methods
	//-----------------------------------------------------

	override fun getChildrenUnderRay(globalRay: RayRo, out: MutableList<UiComponentRo>, onlyInteractive: Boolean, returnAll: Boolean) {
		if (!visible || (onlyInteractive && inheritedInteractivityMode == InteractivityMode.NONE)) return
		if (!intersectsGlobalRay(globalRay)) {
			return
		}
		if ((returnAll || out.isEmpty())) {
			iterateChildrenReversed {
				child: UiComponentRo ->
				child.getChildrenUnderRay(globalRay, out, onlyInteractive, returnAll)
				// Continue iterating if we haven't found an intersecting child yet, or if returnAll is true.
				returnAll || out.isEmpty()
			}
		}
		if ((returnAll || out.isEmpty()) && (!onlyInteractive || interactivityEnabled)) {
			// This component intersects with the ray, but none of its children do.
			out.add(this)
		}
	}

	//-----------------------------------------------------
	// Utility
	//-----------------------------------------------------

	/**
	 * Creates a dummy placeholder component which maintains the child index position.
	 */
	protected fun <T : UiComponent> createSlot(): ReadWriteProperty<Any?, T?> {
		val placeholder = addChild(UiComponentImpl(this))
		return Delegates.observable(null as T?) {
			_, oldValue, newValue ->
			val index = children.indexOf(oldValue ?: placeholder)
			removeChild(index)
			addChild(index, newValue ?: placeholder)
		}
	}

	protected open fun childInvalidatedHandler(child: UiComponentRo, flagsInvalidated: Int) {
		if (!_isInvalidatingChildren) {
			if (flagsInvalidated and layoutInvalidatingFlags > 0) {
				if (child.includeInLayout || flagsInvalidated and ValidationFlags.HIERARCHY_ASCENDING > 0) {
					invalidate(ValidationFlags.SIZE_CONSTRAINTS)
				}
			}
			val bubblingFlags = flagsInvalidated and bubblingFlags
			if (bubblingFlags > 0) {
				invalidate(bubblingFlags)
			}
		}
	}

	protected open fun childDisposedHandler(child: UiComponent) {
		removeChild(child)
	}

	//-----------------------------------------------------
	// Disposable
	//-----------------------------------------------------

	@Deprecated("use component?.dispose()", ReplaceWith("component?.dispose()"))
	open protected fun dispose(component: UiComponent?) {
		if (component == null) return
		if (component.parent != null) {
			if (component.parent == this) removeChild(component)
			else throw Exception("target component is not a child of this")
		}
		component.dispose()
	}

	/**
	 * Disposes this container and all its children.
	 */
	override fun dispose() {
		clearChildren(dispose = false)
		super.dispose()
	}
}

interface NativeContainer : NativeComponent {

	fun addChild(native: NativeComponent, index: Int)

	fun removeChild(index: Int)

	companion object {
		val FACTORY_KEY: DKey<(owner: Owned) -> NativeContainer> = DependencyKeyImpl()
	}
}

object NativeContainerDummy : NativeContainer {

	override var interactivityEnabled: Boolean = true

	override var visible: Boolean = true

	override val bounds: Bounds
		get() = throw UnsupportedOperationException("NativeComponentDummy does not have bounds.")

	override fun setSize(width: Float?, height: Float?) {
	}

	override fun setTransform(value: Matrix4) {
	}

	override fun setSimpleTranslate(x: Float, y: Float) {
	}

	override fun setConcatenatedTransform(value: Matrix4) {
	}

	override fun setColorTint(value: Color) {
	}

	override fun setConcatenatedColorTint(value: Color) {
	}

	override fun dispose() {
	}

	override fun addChild(native: NativeComponent, index: Int) {
	}

	override fun removeChild(index: Int) {
	}

}

fun Owned.container(init: ComponentInit<ElementContainerImpl<UiComponent>> = {}): ElementContainerImpl<UiComponent> {
	val c = ElementContainerImpl<UiComponent>(this)
	c.init()
	return c
}
