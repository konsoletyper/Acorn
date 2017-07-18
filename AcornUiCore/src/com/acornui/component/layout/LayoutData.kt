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

package com.acornui.component.layout

import com.acornui.core.Disposable
import com.acornui.signal.Signal0
import kotlin.properties.Delegates
import kotlin.properties.ReadWriteProperty

/**
 * A class representing extra layout data, specific to use with LayoutAlgorithm objects.
 */
abstract class LayoutData : Disposable {

	val changed: Signal0 = Signal0()

	protected fun <T> bindable(initial: T): ReadWriteProperty<Any?, T> {
		return Delegates.observable(initial) {
			meta, old, new ->
			if (old != new) changed.dispatch()
		}
	}

	override fun dispose() {
		changed.dispose()
	}
}