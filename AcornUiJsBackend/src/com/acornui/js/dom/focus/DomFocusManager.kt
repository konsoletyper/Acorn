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

package com.acornui.js.dom.focus

import com.acornui.core.focus.FocusManagerImpl
import com.acornui.core.focus.Focusable
import com.acornui.js.dom.component.DomComponent

/**
 * @author nbilyk
 */
open class DomFocusManager: FocusManagerImpl() {

	override fun onFocusedChanged(oldFocused: Focusable?, value: Focusable?) {
		if (oldFocused != null) {
			oldFocused.onBlurred()
			(oldFocused.native as DomComponent).blur()
		}
		if (value != null) {
			(value.native as DomComponent).focus()
			value.onFocused()
		}
	}
}



