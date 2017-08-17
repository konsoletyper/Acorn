package com.acornui.gl.component.text

import com.acornui.component.*
import com.acornui.component.layout.algorithm.FlowLayoutStyle
import com.acornui.component.layout.setSize
import com.acornui.component.style.set
import com.acornui.component.text.*
import com.acornui.core.di.Owned
import com.acornui.core.di.inject
import com.acornui.core.focus.blurred
import com.acornui.core.focus.focused
import com.acornui.core.input.Ascii
import com.acornui.core.input.char
import com.acornui.core.input.keyDown
import com.acornui.core.repeat2
import com.acornui.core.selection.SelectionManager
import com.acornui.core.selection.SelectionRange
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

	private var _text: String = ""
	override var text: String
		get() = _text
		set(value) {
			tF.text = if (_password) value.toPassword() else value
			_text = value
		}

	override var placeholder: String = ""
	override var restrictPattern: String? = null

	override final val charStyle: CharStyle = tF.charStyle
	override final val boxStyle: BoxStyle = bind(BoxStyle())
	override final val flowStyle: FlowLayoutStyle = tF.flowStyle
	override final val textInputStyle = bind(TextInputStyle())

	private val selectionManager = inject(SelectionManager)

	/**
	 * The mask to use as replacement characters when [password] is set to true.
	 */
	var passwordMask = "*"

	private var _password = false
	override var password: Boolean
		get() = _password
		set(value) {
			if (value == _password) return
			_password
			if (value) {
				tF.text = _text.toPassword()
			} else {
				tF.text = _text
			}
		}

	init {
		styleTags.add(TextInput)
		watch(boxStyle) {
			background.style.set(it)
		}
		watch(textInputStyle) {
			invalidateLayout()
		}
		focused().add {
			selectAll()
			// todo: open mobile keyboard
		}
		blurred().add(this::unselect)
		char().add {
			replaceSelection(it.char.toString())
		}

		keyDown().add {
			if (it.keyCode == Ascii.BACKSPACE) {
				backspace()
			} else if (it.keyCode == Ascii.DELETE) {
				delete()
			}
		}

	}

	private fun backspace() {
		val sel = selectionManager.selection.firstOrNull { it.target == this } ?: return
		if (sel.startIndex != sel.endIndex) {
			replaceTextRange(sel.startIndex, sel.endIndex, "")
			selectionManager.selection = listOf(SelectionRange(this, sel.startIndex, sel.startIndex))
		} else if (sel.startIndex > 0) {
			replaceTextRange(sel.startIndex - 1, sel.startIndex, "")
			selectionManager.selection = listOf(SelectionRange(this, sel.startIndex - 1, sel.startIndex - 1))
		}
	}

	private fun delete() {
		val sel = selectionManager.selection.firstOrNull { it.target == this } ?: return
		if (sel.startIndex != sel.endIndex) {
			replaceTextRange(sel.startIndex, sel.endIndex, "")
			selectionManager.selection = listOf(SelectionRange(this, sel.startIndex, sel.startIndex))
		} else if (sel.startIndex < _text.length) {
			replaceTextRange(sel.startIndex, sel.startIndex + 1, "")
			selectionManager.selection = listOf(SelectionRange(this, sel.startIndex, sel.startIndex))
		}
	}

	private fun replaceSelection(str: String) {
		val sel = selectionManager.selection.firstOrNull { it.target == this } ?: return
		replaceTextRange(sel.startIndex, sel.endIndex, str)
		selectionManager.selection = listOf(SelectionRange(this, sel.startIndex + str.length, sel.startIndex + str.length))
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

	private fun String.toPassword(): String? {
		return passwordMask.repeat2(this.length)
	}
}


open class GlTextArea(owner: Owned) : GlTextInput(owner), TextArea {

	init {
		styleTags.add(TextArea)
	}
}