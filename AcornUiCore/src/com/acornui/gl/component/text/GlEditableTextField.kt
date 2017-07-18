/*
 * Copyright 2017 Nicholas Bilyk
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

package com.acornui.gl.component.text

import com.acornui.component.BoxStyle
import com.acornui.component.scroll.ScrollPolicy
import com.acornui.component.scroll.ScrollModelImpl
import com.acornui.component.text.EditableTextField
import com.acornui.component.text.TextCommander
import com.acornui.core.di.Owned
import com.acornui.graphics.Color

open class GlEditableTextField(owner: Owned) : GlTextField(owner), EditableTextField {

	override val boxStyle: BoxStyle = bind(BoxStyle())
	override val hScrollModel = ScrollModelImpl()
	override val vScrollModel = ScrollModelImpl()
	override var hScrollPolicy = ScrollPolicy.OFF
	override var vScrollPolicy = ScrollPolicy.OFF

	override var editable: Boolean = true

	init {
		styleTags.add(EditableTextField)
		hScrollPolicy = ScrollPolicy.AUTO
		vScrollPolicy = ScrollPolicy.AUTO
	}

	override val textCommander: TextCommander = GlTextCommander(this)

	override fun dispose() {
		super.dispose()
		hScrollModel.dispose()
		vScrollModel.dispose()
	}
}


class GlTextCommander(private val textField: GlEditableTextField) : TextCommander {
	override fun exec(commandName: String, value: String): Boolean {
		return false
	}

	override fun queryBool(commandId: String): Boolean {
		return false
	}

	override fun queryString(commandId: String): String {
		return ""
	}

	override fun queryColor(commandId: String): Color {
		return Color()
	}
}