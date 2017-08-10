package com.acornui.core.selection

import com.acornui.collection.Clearable
import com.acornui.core.Disposable
import com.acornui.core.di.DKey
import com.acornui.core.di.Injector
import com.acornui.signal.Signal
import com.acornui.signal.Signal0
import com.acornui.signal.Signal2

interface SelectionManager : Disposable {

	/**
	 * Dispatched when the [selection] value changes.
	 * The handler should be (oldSelection: List<SelectionRange>, newSelection: List<SelectionRange>)
	 */
	val selectionChanged: Signal<(List<SelectionRange>, List<SelectionRange>) -> Unit>

	var selection: List<SelectionRange>

	companion object : DKey<SelectionManager> {
		override fun factory(injector: Injector): SelectionManager? {
			return SelectionManagerImpl()
		}
	}
}

class SelectionManagerImpl : SelectionManager {

	private val _selectionChanged = Signal2<List<SelectionRange>, List<SelectionRange>>()
	override val selectionChanged: Signal2<List<SelectionRange>, List<SelectionRange>>
		get() = _selectionChanged

	private var _selection: List<SelectionRange> = ArrayList()
	override var selection: List<SelectionRange>
		get() = _selection
		set(value) {
			val old = _selection
			_selection = value
			selectionChanged.dispatch(old, value)
		}

	override fun dispose() {
		selectionChanged.dispose()
	}
}

data class SelectionRange(val target: Any, val startIndex: Int, val endIndex: Int) {

	fun inRange(i: Int): Boolean {
		return i >= startIndex && i < endIndex
	}
}

class SelectionTarget(
		private val target: Any,
		private val selectionManager: SelectionManager
) : Clearable, Disposable {

	private val _changed = Signal2<SelectionRange?, SelectionRange?>()

	/**
	 * Dispatched when the selection for the given target has changed.
	 */
	val changed: Signal<(SelectionRange?, SelectionRange?)->Unit>
		get() = _changed

	/**
	 * Returns true if the target has a selection associated with it.
	 */
	val hasSelection: Boolean
		get() = selectionRange != null

	/**
	 * The beginning character index of the selection. (Inclusive)
	 * If [hasSelection] is false, [startIndex] and [endIndex] will both return -1
	 */
	var startIndex: Int
		get() = _selectionRange?.startIndex ?: -1
		set(value) {
			if (value == _selectionRange?.startIndex) return
			setSelection(value, endIndex)
		}

	/**
	 * The ending character index of the selection. (Exclusive)
	 * If [hasSelection] is false, [startIndex] and [endIndex] will both return -1
	 */
	var endIndex: Int
		get() = _selectionRange?.endIndex ?: -1
		set(value) {
			if (value == _selectionRange?.endIndex) return
			setSelection(startIndex, value)
		}

	private var _selectionRange: SelectionRange? = null
	private var selectionRange: SelectionRange?
		get() = _selectionRange
		set(value) {
			val old = _selectionRange
			if (value == old) return
			_selectionRange = value
			_changed.dispatch(old, value)
		}

	private fun setSelection(startIndex: Int, endIndex: Int) {
		selectionManager.selection = selectionManager.selection.filterNot { it.target == target } + SelectionRange(target, startIndex, endIndex)
	}

	init {
		selectionManager.selectionChanged.add(this::selectionChangedHandler)
		selectionRange = selectionManager.selection.firstOrNull { it.target == target }
	}

	private fun selectionChangedHandler(old: List<SelectionRange>, new: List<SelectionRange>) {
		selectionRange = new.firstOrNull { it.target == target }
	}

	override fun clear() {
		selectionManager.selection = selectionManager.selection.filterNot { it.target == target }
	}

	/**
	 * Sets the selection range to 0, MAX_VALUE.
	 */
	fun selectAll() {
		setSelection(0, Int.MAX_VALUE)
	}

	fun inRange(i: Int): Boolean {
		return i >= startIndex && i < endIndex
	}

	override fun dispose() {
		_changed.dispose()
		selectionManager.selectionChanged.remove(this::selectionChangedHandler)
	}
}
