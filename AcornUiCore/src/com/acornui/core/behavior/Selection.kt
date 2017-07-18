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

package com.acornui.core.behavior

import com.acornui.core.Disposable
import com.acornui.signal.Cancel
import com.acornui.signal.Signal2
import com.acornui.signal.Signal3


/**
 * An object for tracking selection state.
 * This is typically paired with a selection controller.
 * @author nbilyk
 */
abstract class Selection<E> : Disposable {

	/**
	 * Dispatched when an item's selection status is about to change. This provides an opportunity to cancel the
	 * selection change.
	 */
	val changing: Signal3<E, Boolean, Cancel> = Signal3()
	private val cancel = Cancel()

	/**
	 * Dispatched when the selection status of an item has changed.
	 * The handler should have the signature:
	 * item: E, newState: Boolean
	 */
	val changed: Signal2<E, Boolean> = Signal2()

	private val _selectedMap = HashMap<E, Boolean>()

	/**
	 * Walks all selectable items, in order.
	 */
	abstract protected fun walkSelectableItems(callback: (item: E) -> Unit)

	/**
	 * Populates the [out] list with the selected items.
	 * @param out The list to fill with the selected items.
	 * @param ordered If true, the list will be ordered. (Slower)
	 */
	fun selectedItems(out: MutableList<E>, ordered: Boolean) {
		out.clear()
		if (ordered) {
			walkSelectableItems {
				if (getItemIsSelected(it)) out.add(it)
			}
		} else {
			for (item in _selectedMap.keys) {
				out.add(item)
			}
		}
	}

	/**
	 * The first selected item.
	 */
	var selectedItem: E?
		get() {
			return _selectedMap.keys.firstOrNull()
		}
		set(value) {
			if (value == null && _selectedMap.isEmpty()) return
			else if (value != null && getItemIsSelected(value)) return
			clearSelection()
			if (value != null)
				setItemIsSelected(value, true)
		}

	fun isEmpty(): Boolean {
		return _selectedMap.isEmpty()
	}

	fun isNotEmpty(): Boolean {
		return _selectedMap.isNotEmpty()
	}

	fun selectedItemsCount(): Int {
		return _selectedMap.size
	}

	fun getItemIsSelected(item: E): Boolean {
		return _selectedMap[item] ?: false
	}

	fun setItemIsSelected(item: E, value: Boolean) {
		if (getItemIsSelected(item) == value) return // no-op
		if (changing.isNotEmpty()) {
			changing.dispatch(item, value, cancel.reset())
			if (cancel.canceled()) return
		}
		if (value)
			_selectedMap[item] = value
		else
			_selectedMap.remove(item)
		onItemSelectionChanged(item, value)
		changed.dispatch(item, value)
	}

	abstract protected fun onItemSelectionChanged(item: E, selected: Boolean)

	fun setSelectedItems(items: HashMap<E, Boolean>) {
		for (item in _selectedMap.keys) {
			if (!items.containsKey(item) || items[item] == false) {
				setItemIsSelected(item, false)
			}
		}
		for (i in items.keys) {
			setItemIsSelected(i, true)
		}
	}

	fun clearSelection() {
		for (key in _selectedMap.keys) {
			setItemIsSelected(key, false)
		}
	}

	fun selectAll() {
		walkSelectableItems {
			setItemIsSelected(it, true)
		}
	}

	override fun dispose() {
		changing.dispose()
		changed.dispose()
		clearSelection()
	}

}
