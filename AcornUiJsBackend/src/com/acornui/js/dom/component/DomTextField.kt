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

package com.acornui.js.dom.component

import com.acornui.component.*
import com.acornui.component.layout.algorithm.FlowDisplay
import com.acornui.component.layout.algorithm.FlowHAlign
import com.acornui.component.layout.algorithm.FlowLayoutStyle
import com.acornui.component.layout.setSize
import com.acornui.component.text.*
import com.acornui.core.di.Owned
import com.acornui.core.di.inject
import com.acornui.core.di.own
import com.acornui.core.input.keyDown
import com.acornui.core.input.keyUp
import com.acornui.core.selection.SelectionManager
import com.acornui.core.selection.SelectionTarget
import com.acornui.math.Bounds
import com.acornui.signal.Signal0
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLTextAreaElement
import kotlin.browser.document
import kotlin.text.Regex

open class DomTextField(
		owner: Owned,
		protected val element: HTMLElement = document.createElement("div") as HTMLDivElement,
		protected val domContainer: DomContainer = DomContainer(element)
) : ContainerImpl(owner, domContainer), TextField {

	override final val charStyle = bind(CharStyle())
	override final val flowStyle = bind(FlowLayoutStyle())

	// TODO: DomTextSelection
	override final val selection = own(SelectionTarget(this, inject(SelectionManager)))

	init {
		styleTags.add(TextField)
		nativeAutoSize = false
		element.style.apply {
			overflowX = "hidden"
			overflowY = "hidden"
		}
		watch(charStyle) {
			it.applyCss(element)
		}
		watch(flowStyle) {
			it.applyCss(element)
		}
	}

	override fun onAncestorVisibleChanged(uiComponent: UiComponent, value: Boolean) {
		invalidate(ValidationFlags.LAYOUT)
	}

	override var text: String?
		get() {
			return element.textContent
		}
		set(value) {
			if (element.textContent == value) return
			element.textContent = value
			invalidate(ValidationFlags.LAYOUT)
		}

	override var htmlText: String?
		get() = element.innerHTML
		set(value) {
			element.innerHTML = value ?: ""
			invalidate(ValidationFlags.LAYOUT)
		}

	override fun updateLayout(explicitWidth: Float?, explicitHeight: Float?, out: Bounds) {
		if (!flowStyle.multiline || explicitWidth == null && (domContainer.display == FlowDisplay.BLOCK || domContainer.display == FlowDisplay.INLINE_BLOCK)) {
			element.style.whiteSpace = "nowrap"
		} else {
			element.style.whiteSpace = "normal"
		}
		native.setSize(explicitWidth, explicitHeight)
		out.set(native.bounds)
	}

}

open class DomTextInput(
		owner: Owned,
		val inputElement: HTMLInputElement = document.createElement("input") as HTMLInputElement
) : ContainerImpl(owner, DomContainer(inputElement)), TextInput {

	override final val charStyle = bind(CharStyle())
	override final val flowStyle = bind(FlowLayoutStyle())
	override final val boxStyle = bind(BoxStyle())
	override final val textInputStyle = bind(TextInputStyle())

	override var focusEnabled: Boolean = true
	override var focusOrder: Float = 0f
	override var highlight: UiComponent? by createSlot<UiComponent>()

	override val input: Signal0 = Signal0()
	override val changed: Signal0 = Signal0()

	private var _editable: Boolean = true
	private var _maxLength: Int? = null

	override final val selection = own(TextSelection())

	private fun refreshSelection() {
		if (!isActive) return // IE has a problem setting the selection range on elements not yet active.
		try {
			inputElement.setSelectionRange(selection.startIndex, selection.endIndex)
		} catch (e: Throwable) {
			// IE can puke on setSelectionRange...
		}
	}

	override fun onAncestorVisibleChanged(uiComponent: UiComponent, value: Boolean) {
		invalidate(ValidationFlags.LAYOUT)
	}

	override var editable: Boolean
		get() = _editable
		set(value) {
			if (_editable == value) return
			_editable = value
			inputElement.readOnly = !value
		}

	override var maxLength: Int?
		get() = _maxLength
		set(value) {
			if (_maxLength == value) return
			_maxLength = value
			if (value != null) {
				inputElement.maxLength = value
			} else {
				inputElement.removeAttribute("maxlength")
			}
		}

	init {
		styleTags.add(TextField)
		styleTags.add(TextInput)
		nativeAutoSize = false
		keyDown().add({ it.handled = true })
		keyUp().add({ it.handled = true })

		selection.changed.add(this::refreshSelection)

		inputElement.autofocus = false
		inputElement.tabIndex = 0
		inputElement.onchange = {
			restrict()
			changed.dispatch()
		}
		inputElement.oninput = {
			restrict()
			input.dispatch()
		}

		watch(charStyle) {
			it.applyCss(inputElement)
		}
		watch(flowStyle) {
			it.applyCss(inputElement)
		}
		watch(boxStyle) {
			it.applyCss(inputElement)
			it.applyBox(native as DomComponent)
		}
	}

	override fun onActivated() {
		super.onActivated()
		refreshSelection()
	}

	private fun restrict() {
		if (_restrict == null) return
		inputElement.value = inputElement.value.replace(_restrict!!, "")
	}

	override var text: String
		get() = inputElement.value
		set(value) {
			inputElement.value = value
			refreshSelection()
		}

	override var placeholder: String
		get() = inputElement.placeholder
		set(value) {
			inputElement.placeholder
		}

	private var _restrict: Regex? = null
	override var restrictPattern: String?
		get() = _restrict?.pattern
		set(value) {
			_restrict = if (value == null) null else Regex(value)
		}

	override var password: Boolean
		get() = inputElement.type == "password"
		set(value) {
			inputElement.type = if (value) "password" else "text"
		}

	override fun onFocused() {
		super.onFocused()
		refreshSelection()
	}

	override fun updateLayout(explicitWidth: Float?, explicitHeight: Float?, out: Bounds) {
		native.setSize(explicitWidth ?: textInputStyle.defaultWidth, explicitHeight)
		out.set(native.bounds)
		highlight?.setSize(out)
	}

	override fun dispose() {
		super.dispose()
		inputElement.oninput = null
	}
}

open class DomTextArea(
		owner: Owned,
		private val areaElement: HTMLTextAreaElement = document.createElement("textarea") as HTMLTextAreaElement
) : ContainerImpl(owner, DomContainer(areaElement)), TextArea {

	override final val charStyle = bind(CharStyle())
	override final val flowStyle = bind(FlowLayoutStyle())
	override final val boxStyle = bind(BoxStyle())
	override final val textInputStyle = bind(TextInputStyle())

	override var focusEnabled: Boolean = true
	override var focusOrder: Float = 0f
	override var highlight: UiComponent? by createSlot<UiComponent>()

	override val changed: Signal0 = Signal0()

	private var _editable: Boolean = true

	override var editable: Boolean
		get() = _editable
		set(value) {
			if (_editable == value) return
			_editable = value
			areaElement.readOnly = !value
		}

	init {
		styleTags.add(TextField)
		styleTags.add(TextArea)
		nativeAutoSize = false
		keyDown().add({ it.handled = true })

		areaElement.autofocus = false
		areaElement.tabIndex = 0
		areaElement.onchange = {
			changed.dispatch()
		}
		areaElement.style.resize = "none"

		watch(charStyle) {
			it.applyCss(areaElement)
		}
		watch(flowStyle) {
			it.applyCss(areaElement)
		}
		watch(boxStyle) {
			it.applyCss(areaElement)
			it.applyBox(native as DomComponent)
		}
		watch(textInputStyle) {
			invalidateLayout()
		}
	}

	override fun onAncestorVisibleChanged(uiComponent: UiComponent, value: Boolean) {
		invalidate(ValidationFlags.LAYOUT)
	}

	override var text: String
		get() = areaElement.textContent ?: ""
		set(value) {
			areaElement.textContent = value
			invalidateLayout()
		}

	override fun updateLayout(explicitWidth: Float?, explicitHeight: Float?, out: Bounds) {
		native.setSize(explicitWidth ?: textInputStyle.defaultWidth, explicitHeight)
		out.set(native.bounds)
		highlight?.setSize(out)
	}

	override fun dispose() {
		super.dispose()
		areaElement.oninput = null
	}

}

fun FlowLayoutStyle.applyCss(element: HTMLElement) {
//	element.style.verticalAlign = when (verticalAlign) {
//
//	}
	element.style.textAlign = when (horizontalAlign) {
		FlowHAlign.LEFT -> "left"
		FlowHAlign.CENTER -> "center"
		FlowHAlign.RIGHT -> "right"
		FlowHAlign.JUSTIFY -> "justify"
	}
}

fun CharStyle.applyCss(element: HTMLElement) {
	element.style.apply {
		fontFamily = face
		fontSize = "${size}px"
		fontWeight = if (bold) "bold" else "normal"
		fontStyle = if (italic) "italic" else "normal"
		textDecoration = if (isUnderlined) "underline" else "none"
		color = colorTint.toCssString()

		val selectable = selectable
		userSelect(selectable)
		cursor = if (selectable) "text" else "default"
	}
}
