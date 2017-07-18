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

package com.acornui.core.cursor

import com.acornui.collection.ObjectPool
import com.acornui.collection.ClearableObjectPool
import com.acornui.collection.Clearable
import com.acornui.collection.sortedInsertionIndex
import com.acornui.core.Lifecycle
import com.acornui.core.di.DKey
import kotlin.properties.Delegates

interface CursorManager {

	/**
	 * Adds a cursor at the given index in the stack. (Only the last cursor will be displayed.)
	 * @param cursor The cursor to add. Use [createCursor] to create the cursor object.
	 * @param index The index in the stack to insert the cursor.
	 * @return Returns the index of the cursor added.
	 */
	fun addCursor(cursor: Cursor, priority: Float = 0f): CursorReference

	fun removeCursor(cursorReference: CursorReference)

	companion object : DKey<CursorManager> {}
}

interface Cursor : Lifecycle {
}

class CursorReference() : Clearable, Comparable<CursorReference> {
	var cursor: Cursor? = null
	var priority: Float = 0f

	var manager: CursorManager? = null

	fun remove() {
		manager!!.removeCursor(this)
		manager = null
	}

	override fun clear() {
		cursor = null
		manager = null
		priority = 0f
	}

	fun free() {
		pool.free(this)
	}

	override fun compareTo(other: CursorReference): Int {
		return priority.compareTo(other.priority)
	}

	companion object {
		private val pool = ClearableObjectPool { CursorReference() }

		fun obtain(cursor: Cursor, priority: Float): CursorReference {
			val r = pool.obtain()
			r.cursor = cursor
			r.priority = priority
			return r
		}
	}
}

/**
 * A [CursorManager] implementation without the platform-specific cursor factory methods.
 */
abstract class CursorManagerBase : CursorManager {

	private val cursorStack = ArrayList<CursorReference>()

	private var _currentCursor: CursorReference? = null

	override fun addCursor(cursor: Cursor, priority: Float): CursorReference {
		val cursorReference = CursorReference.obtain(cursor, priority)
		cursorReference.manager = this
		val index = cursorStack.sortedInsertionIndex(cursorReference)
		cursorStack.add(index, cursorReference)
		currentCursor(cursorStack.lastOrNull())
		return cursorReference
	}

	override fun removeCursor(cursorReference: CursorReference) {
		cursorStack.remove(cursorReference)
		currentCursor(cursorStack.lastOrNull())
		cursorReference.free()
	}

	private fun currentCursor(value: CursorReference?) {
		if (_currentCursor == value) return
		if (_currentCursor?.cursor?.isActive ?: false) {
			_currentCursor?.cursor?.deactivate()
		}
		_currentCursor = value
		if (!(_currentCursor?.cursor?.isActive ?: false)) {
			_currentCursor?.cursor?.activate()
		}
	}

}

/**
 * A suite of cursors that standard components should be able to rely on existing.
 */
object StandardCursors {
	var ALIAS: Cursor by Delegates.notNull()
	var ALL_SCROLL: Cursor by Delegates.notNull()
	var CELL: Cursor by Delegates.notNull()
	var COPY: Cursor by Delegates.notNull()
	var CROSSHAIR: Cursor by Delegates.notNull()
	var DEFAULT: Cursor by Delegates.notNull()
	var HAND: Cursor by Delegates.notNull()
	var HELP: Cursor by Delegates.notNull()
	var IBEAM: Cursor by Delegates.notNull()
	var MOVE: Cursor by Delegates.notNull()
	var NONE: Cursor by Delegates.notNull()
	var NOT_ALLOWED: Cursor by Delegates.notNull()
	var POINTER_WAIT: Cursor by Delegates.notNull()
	var RESIZE_E: Cursor by Delegates.notNull()
	var RESIZE_N: Cursor by Delegates.notNull()
	var RESIZE_NE: Cursor by Delegates.notNull()
	var RESIZE_SE: Cursor by Delegates.notNull()
	var WAIT: Cursor by Delegates.notNull()
}

object CursorPriority {
	var PASSIVE: Float = 0f
	var ACTIVE: Float = 10f
	var POINTER_WAIT: Float = 50f
	var WAIT: Float = 100f
	var NOT_ALLOWED: Float = 1000f
}