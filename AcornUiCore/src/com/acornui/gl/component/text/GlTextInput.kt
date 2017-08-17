package com.acornui.gl.component.text

import com.acornui.component.*
import com.acornui.component.layout.algorithm.FlowLayoutStyle
import com.acornui.component.layout.setSize
import com.acornui.component.style.set
import com.acornui.component.text.*
import com.acornui.core.di.Owned
import com.acornui.core.focus.blurred
import com.acornui.core.focus.focused
import com.acornui.core.input.char
import com.acornui.core.selection.selectAll
import com.acornui.core.selection.unselect
import com.acornui.math.Bounds
import com.acornui.signal.Signal0

@Suppress("LeakingThis")
open class GlTextInput(owner: Owned) : ContainerImpl(owner), TextInput {

	override val input: Signal0 = Signal0()
	override val changed: Signal0 = Signal0()

	override var editable: Boolean = true

	override var focusEnabled: Boolean = true
	override var focusOrder: Float = 0f
	override var highlight: UiComponent? by createSlot()

	override var maxLength: Int? = null

	protected val background = addChild(rect())
	protected val tF = addChild(GlTextField(this).apply { selectionTarget = this@GlTextInput })

	override var text: String
		get() = tF.text ?: ""
		set(value) {
			tF.text = value
		}

	override var placeholder: String = ""
	override var restrictPattern: String? = null

	override final val charStyle: CharStyle = tF.charStyle
	override final val boxStyle: BoxStyle = bind(BoxStyle())
	override final val flowStyle: FlowLayoutStyle = tF.flowStyle
	override final val textInputStyle = bind(TextInputStyle())

	private var _password = false
	override var password: Boolean
		get() = _password
		set(value) {
			_password
		}

	init {
		styleTags.add(TextInput)
		watch(boxStyle) {
			background.style.set(it)
		}
		watch(textInputStyle) {
			invalidateLayout()
		}
		focused().add(this::selectAll)
		blurred().add(this::unselect)
		char().add {
			println("Char ${it.char}")
		}
	}

	override fun updateLayout(explicitWidth: Float?, explicitHeight: Float?, out: Bounds) {
		val pad = boxStyle.padding
		val margin = boxStyle.margin
		val w = margin.reduceWidth2(pad.reduceWidth2(explicitWidth ?: textInputStyle.defaultWidth))
		val h = margin.reduceHeight(pad.reduceHeight(explicitHeight))
		tF.setSize(w, h)
		tF.setPosition(margin.left + pad.left, margin.top + pad.top)
		out.set(explicitWidth ?: textInputStyle.defaultWidth, explicitHeight ?: margin.expandHeight2(pad.expandHeight2(tF.height)))
		background.setSize(margin.reduceWidth2(out.width), margin.reduceHeight(out.height))
		background.setPosition(margin.left, margin.top)
		highlight?.setSize(background.bounds)
		highlight?.setPosition(margin.left, margin.top)
	}
}

open class GlTextArea(owner: Owned) : GlTextInput(owner), TextArea {

	init {
		styleTags.add(TextArea)
	}
}