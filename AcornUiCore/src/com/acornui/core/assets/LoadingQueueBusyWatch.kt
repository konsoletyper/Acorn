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

package com.acornui.core.assets

import com.acornui.action.ActionRo
import com.acornui.action.ActionStatus
import com.acornui.core.cursor.CursorManager
import com.acornui.core.cursor.CursorPriority
import com.acornui.core.cursor.CursorReference
import com.acornui.core.cursor.StandardCursors
import com.acornui.core.di.Injector
import com.acornui.core.di.Owned

/**
 * A utility to watch the loading queue for status changes, creating a busy cursor when it's loading something.
 */
class LoadingQueueBusyWatch(injector: Injector) {

	private val assets = injector.inject(AssetManager)
	private val cursor = injector.inject(CursorManager)

	private var _busyCursor: CursorReference? = null
	private var _isRunning = false

	private val loadingQueueStatusChangeHandler = {
		a: ActionRo, oldStatus: ActionStatus, newStatus: ActionStatus, error: Throwable? ->
		if (assets.loadingQueue.isRunning()) {
			setBusy(true)
		} else {
			setBusy(false)
		}
	}

	fun start() {
		if (_isRunning) return
		setBusy(true) // No matter what, toggle the busy cursor so we don't have an endless loop with the loading queue loading the cursor itself.
		if (!assets.loadingQueue.isRunning()) {
			setBusy(false)
		}
		assets.loadingQueue.statusChanged.add(loadingQueueStatusChangeHandler)
	}

	fun stop() {
		if (!_isRunning) return
		setBusy(false)
		assets.loadingQueue.statusChanged.remove(loadingQueueStatusChangeHandler)
	}

	private fun setBusy(value: Boolean) {
		if ((_busyCursor != null) == value) return
		if (value) {
			_busyCursor = cursor.addCursor(StandardCursors.POINTER_WAIT, CursorPriority.POINTER_WAIT)
		} else {
			_busyCursor?.remove()
			_busyCursor = null
		}
	}
}

fun Owned.loadingQueueBusyWatch(): LoadingQueueBusyWatch {
	return LoadingQueueBusyWatch(injector)
}