package com.acornui.component.layout

import com.acornui.collection.*
import com.acornui.component.*
import com.acornui.component.layout.algorithm.virtual.ItemRendererOwner
import com.acornui.component.layout.algorithm.virtual.VirtualLayoutAlgorithm
import com.acornui.core.behavior.Selection
import com.acornui.core.di.Owned
import com.acornui.core.focus.FocusContainer
import com.acornui.math.Bounds
import com.acornui.math.MathUtils


/**
 * A virtualized list of components, with no clipping or scrolling. This is a lower-level component, used by the [DataScroller].
 */
class VirtualList<E, out T : LayoutData, out S : VirtualLayoutAlgorithm<T>>(
		owner: Owned,
		rendererFactory: ItemRendererOwner<T>.() -> ItemRenderer<E>,
		val layoutAlgorithm: S,
		val data: ObservableList<E>
) : ContainerImpl(owner), FocusContainer, ItemRendererOwner<T> {

	override fun createLayoutData(): T {
		return layoutAlgorithm.createLayoutData()
	}

	override var focusOrder: Float = 0f

	private var _visiblePosition: Float? = null

	/**
	 * Returns the index of the first visible renderer. This is represented as a fraction, so for example if the
	 * renderer representing index 3 is the first item visible, and it is half within bounds (including the gap),
	 * then 3.5 will be returned.
	 */
	val visiblePosition: Float
		get() {
			if (_visiblePosition == null) {
				// Calculate the current position.
				validate(ValidationFlags.LAYOUT)
				val lastIndex = data.lastIndex
				_visiblePosition = 0f
				for (i in 0.._activeRenderers.lastIndex) {
					val renderer = _activeRenderers[i]
					val itemOffset = layoutAlgorithm.getOffset(width, height, renderer, renderer.index, lastIndex, isReversed = false)
					_visiblePosition = renderer.index - itemOffset
					if (itemOffset > -1) {
						break
					}
				}
			}
			return _visiblePosition!!
		}

	private var _visibleBottomPosition: Float? = null

	/**
	 * Returns the index of the last visible renderer. This is represented as a fraction, so for example if the
	 * renderer representing index 9 is the last item visible, and it is half within bounds (including the gap),
	 * then 8.5 will be returned.
	 */
	val visibleBottomPosition: Float
		get() {
			if (_visibleBottomPosition == null) {
				// Calculate the current bottomPosition.
				validate(ValidationFlags.LAYOUT)
				_visibleBottomPosition = data.lastIndex.toFloat()
				val lastIndex = data.lastIndex
				for (i in _activeRenderers.lastIndex downTo 0) {
					val renderer = _activeRenderers[i]
					val itemOffset = layoutAlgorithm.getOffset(width, height, renderer, renderer.index, lastIndex, isReversed = true)
					_visibleBottomPosition = renderer.index + itemOffset
					if (itemOffset > -1) {
						break
					}
				}
			}
			return _visibleBottomPosition!!
		}

	//---------------------------------------------------
	// Properties
	//---------------------------------------------------

	var maxItems by validationProp(15, ValidationFlags.LAYOUT)

	/**
	 * The percent buffer out of bounds an item renderer can be before it is recycled.
	 */
	var buffer by validationProp(0.15f, ValidationFlags.LAYOUT)

	private var _indexPosition: Float? = null

	/**
	 * If set, then the layout will start with an item represented by the data at this index, then work its way
	 * forwards.
	 */
	var indexPosition: Float?
		get() = _indexPosition
		set(value) {
			if (_indexPosition == value) return
			_indexPosition = value
			_bottomIndexPosition = null
			invalidate(ValidationFlags.LAYOUT)
		}

	private var _bottomIndexPosition: Float? = null

	/**
	 * If this is set, then the layout will start with the last item represented by this bottomIndexPosition, and
	 * work its way backwards.
	 */
	var bottomIndexPosition: Float?
		get() = _bottomIndexPosition
		set(value) {
			if (_bottomIndexPosition == value) return
			_bottomIndexPosition = value
			_indexPosition = null
			invalidate(ValidationFlags.LAYOUT)
		}

	//---------------------------------------------------
	// Item Renderer Pooling
	//---------------------------------------------------

	private val pool = VirtualListPool {
		rendererFactory()
	}

	private val cache = SmartCache(pool)

	/**
	 * If set, this is invoked when an item renderer has been obtained from the pool.
	 */
	var onRendererObtained: ((ItemRenderer<E>) -> Unit)?
		get() = pool.onObtained
		set(value) {
			pool.onObtained = value
		}

	/**
	 * If set, this is invoked when an item renderer has been returned to the pool.
	 */
	var onRendererFreed: ((ItemRenderer<E>) -> Unit)?
		get() = pool.onFreed
		set(value) {
			pool.onFreed = value
		}


	//---------------------------------------------------
	// Children
	//---------------------------------------------------

	private val _activeRenderers = ArrayList<ItemRenderer<E>>()

	/**
	 * Returns a list of currently active renderers. There will be renderers in this list beyond the visible bounds,
	 * but within the buffer.
	 */
	val activeRenderers: List<ItemRenderer<E>>
		get() = _activeRenderers

	val selection: Selection<E> = VirtualListSelection(data, _activeRenderers)

	private val layoutAlgorithmChangedHandler = {
		invalidate(ValidationFlags.SIZE_CONSTRAINTS)
		Unit
	}

	private val dataAddedHandler = {
		index: Int, element: E ->
		invalidate(ValidationFlags.LAYOUT)
		Unit
	}

	private val dataRemovedHandler = {
		index: Int, element: E ->
		invalidate(ValidationFlags.LAYOUT)
		Unit
	}

	private val dataChangedHandler = {
		index: Int, oldElement: E, newElement: E ->
		invalidate(ValidationFlags.LAYOUT)
		Unit
	}

	private val dataResetHandler = {
		invalidate(ValidationFlags.LAYOUT)
		Unit
	}

	init {
		layoutAlgorithm.changed.add(layoutAlgorithmChangedHandler)
		// Invalidate the layout on any dataView changes.
		data.added.add(dataAddedHandler)
		data.removed.add(dataRemovedHandler)
		data.changed.add(dataChangedHandler)
		data.reset.add(dataResetHandler)
	}

	private val laidOutRenderers = ArrayList<ItemRenderer<E>>()

	override fun updateLayout(explicitWidth: Float?, explicitHeight: Float?, out: Bounds) {
		// Clear the cached visible position and visible bottom position.
		_visiblePosition = null
		_visibleBottomPosition = null

		cache.hold(_activeRenderers)
		_activeRenderers.clear()

		val isReversed = _bottomIndexPosition != null
		val startIndex = MathUtils.clamp(if (isReversed) _bottomIndexPosition!! else _indexPosition ?: 0f, 0f, data.lastIndex.toFloat())

		// Starting at the set position, render as many items as we can until we go out of bounds,
		// then go back to the beginning and reverse direction until we go out of bounds again.
		val currentIndex = if (isReversed) MathUtils.ceil(startIndex) else MathUtils.floor(startIndex)
		renderItems(explicitWidth, explicitHeight, currentIndex, startIndex, isReversed, previousElement = null, laidOutRenderers = laidOutRenderers)

		val first = if (isReversed) laidOutRenderers.lastOrNull() else laidOutRenderers.firstOrNull()

		val resumeIndex = if (isReversed) currentIndex + 1 else currentIndex - 1
		renderItems(explicitWidth, explicitHeight, resumeIndex, startIndex, !isReversed, previousElement = first, laidOutRenderers = laidOutRenderers)

		out.clear()
		layoutAlgorithm.measure(explicitWidth, explicitHeight, laidOutRenderers, out)
		if (explicitWidth != null && explicitWidth > out.width) out.width = explicitWidth
		if (explicitHeight != null && explicitHeight > out.height) out.height = explicitHeight

		laidOutRenderers.clear() // We don't need to keep this list, it was just for measurement.

		// Deactivate and remove all old entries if they haven't been recycled.
		cache.forEach {
			removeChild(it)
		}
		cache.flush()
	}

	/**
	 * Renders the items starting at the given index until no more items will fit in the available dimensions.
	 *
	 * @param explicitWidth
	 * @param explicitHeight
	 * @param currentIndex
	 * @param startIndex
	 * @param isReversed
	 *
	 * @param laidOutRenderers The list to fill with the item renderers that were laid out by this call.
	 * [activeRenderers] is populated with the item renderers that were created by this call.
	 *
	 * @return
	 */
	private fun renderItems(explicitWidth: Float?, explicitHeight: Float?, currentIndex: Int, startIndex: Float, isReversed: Boolean, previousElement: LayoutElement?, laidOutRenderers: ArrayList<ItemRenderer<E>>) {
		val n = data.size
		var skipped = 0
		val d = if (isReversed) -1 else 1
		@Suppress("NAME_SHADOWING") var previousElement = previousElement
		@Suppress("NAME_SHADOWING") var currentIndex = currentIndex
		var displayIndex = currentIndex
		while (currentIndex >= 0 && currentIndex < n && skipped < MAX_SKIPPED && _activeRenderers.size < maxItems) {
			val data: E = data[currentIndex]
			val element = cache.obtain(currentIndex, isReversed)
			if (currentIndex != element.index) element.index = currentIndex
			if (data != element.data) element.data = data

			val elementSelected = selection.getItemIsSelected(data)
			if (element.selected != elementSelected) {
				element.selected = elementSelected
			}

			if (element.parent == null)
				addChild(element)
			if (isReversed) _activeRenderers.add(0, element)
			else _activeRenderers.add(element)

			if (element.shouldLayout) {
				layoutAlgorithm.updateLayoutEntry(explicitWidth, explicitHeight, element, displayIndex, startIndex, n - 1, previousElement, isReversed)
				previousElement = element

				if (layoutAlgorithm.shouldShowRenderer(explicitWidth, explicitHeight, element)) {
					// Within bounds and good to show.
					skipped = 0

					if (isReversed) laidOutRenderers.add(0, element)
					else laidOutRenderers.add(element)
					displayIndex += d
				} else {
					// We went out of bounds, time to stop iteration.
					break
				}
			} else {
				skipped++
			}
			currentIndex += d
		}
	}

	override fun dispose() {
		super.dispose()
		layoutAlgorithm.changed.remove(layoutAlgorithmChangedHandler)
		data.added.remove(dataAddedHandler)
		data.removed.remove(dataRemovedHandler)
		data.changed.remove(dataChangedHandler)
		data.reset.remove(dataResetHandler)
		selection.dispose()
		pool.disposeAndClear()
	}

	companion object {
		private val MAX_SKIPPED = 5
	}
}

/**
 * A layer between the creation and the pool that first seeks items from the same index, thus reducing the frequency
 * of changes to the data and index properties on the item renderers.
 */
private class SmartCache<E>(private val pool: Pool<ItemRenderer<E>>) {

	var enabled: Boolean = true

	private val cache = HashMap<Int, ItemRenderer<E>>()
	private val indices = ArrayList<Int>()

	fun obtain(index: Int, isReversed: Boolean): ItemRenderer<E> {
		if (!enabled) return pool.obtain()
		val existing = cache[index]
		if (existing == null) {
			// We don't have the exact item, but take the next one least likely to be used.
			if (cache.isEmpty()) {
				return pool.obtain()
			} else {
				val index2 = indices[if (isReversed) indices.indexOfFirst2 { cache.containsKey(it) } else indices.indexOfLast2 { cache.containsKey(it) }]
				val existing2 = cache[index2]!!
				cache.remove(index2)
				return existing2
			}
		} else {
			cache.remove(index)
			return existing
		}
	}

	fun hold(elements: List<ItemRenderer<E>>) {
		for (i in 0..elements.lastIndex) {
			hold(elements[i])
		}
	}

	/**
	 * Holds onto the element until the next [flush]
	 */
	fun hold(element: ItemRenderer<E>) {
		val i = element.index
		cache[i] = element
		indices.add(i)
	}

	/**
	 * Iterates over each held item in the cache.
	 */
	fun forEach(callback: (renderer: ItemRenderer<E>) -> Unit) {
		for (i in 0..indices.lastIndex) {
			val index = indices[i]
			val element = cache[index]
			if (element != null)
				callback(element)
		}
	}

	/**
	 * Returns all unused held items to the pool.
	 */
	fun flush() {
		if (indices.isNotEmpty()) {
			for (i in 0..indices.lastIndex) {
				// Returns all elements that were not reused back to the provider.
				val index = indices[i]
				val element = cache[index]
				if (element != null) {
					element.index = -1
					element.data = null
					pool.free(element)
				}
			}
			cache.clear()
			indices.clear()
		}
	}
}

fun <E, T : LayoutData, S : VirtualLayoutAlgorithm<T>> Owned.virtualList(
		rendererFactory: ItemRendererOwner<T>.() -> ItemRenderer<E>,
		layoutAlgorithm: S,
		data: ObservableList<E>, init: ComponentInit<VirtualList<E, T, S>> = {}): VirtualList<E, T, S> {
	val c = VirtualList(this, rendererFactory, layoutAlgorithm, data)
	c.init()
	return c
}

class VirtualListSelection<E>(private val data: List<E>, private val activeRenderers: List<ItemRenderer<E>>) : Selection<E>() {
	override fun walkSelectableItems(callback: (E) -> Unit) {
		for (i in 0..data.lastIndex) {
			callback(data[i])
		}
	}

	override fun onItemSelectionChanged(item: E, selected: Boolean) {
		for (i in 0..activeRenderers.lastIndex) {
			val renderer = activeRenderers[i]
			if (renderer.data == item) {
				renderer.selected = selected
				break
			}
		}
	}
}

private class VirtualListPool<E>(factory: () -> ItemRenderer<E>) : ObjectPool<ItemRenderer<E>>(8, factory) {

	/**
	 * If set, this is invoked when an object has been obtained from the pool.
	 */
	var onObtained: ((ItemRenderer<E>) -> Unit)? = null

	/**
	 * If set, this is invoked when an object has been returned to the pool.
	 */
	var onFreed: ((ItemRenderer<E>) -> Unit)? = null

	override fun obtain(): ItemRenderer<E> {
		val obj = super.obtain()
		onObtained?.invoke(obj)
		return obj
	}

	override fun free(obj: ItemRenderer<E>) {
		onFreed?.invoke(obj)
		super.free(obj)
	}
}