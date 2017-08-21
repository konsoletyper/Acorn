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
import com.acornui.gl.component.drawing.dynamicMeshC
import com.acornui.gl.component.drawing.fillStyle
import com.acornui.gl.component.drawing.lineStyle
import com.acornui.gl.component.drawing.quad
import com.acornui.graphics.Color
import com.acornui.math.Bounds
import com.acornui.math.Rectangle
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
	protected val caret = addChild(dynamicMeshC {
		buildMesh {
			lineStyle.isVisible = false
			fillStyle.colorTint.set(Color.RED)
			+quad(0f, 0f, 1f, 0f, 1f, 1f, 0f, 1f)
			fillStyle.colorTint.set(Color.WHITE)
			+quad(1f, 0f, 2f, 0f, 2f, 1f, 1f, 1f)
		}
		scaleY = 20f
	})

	/**
	 * Returns the text displayed, accounting for text restrictions or password masking.
	 */
	val displayedText: String
		get() = tF.text ?: ""

	private var _text: String = ""
	override var text: String
		get() = _text
		set(value) {
			_text = value
			refreshText()
		}

	override var placeholder: String = ""

	private var _restrictPattern: String? = null

	override var restrictPattern: String?
		get() = _restrictPattern
		set(value) {
			if (_restrictPattern == value) return
			_restrictPattern = value
			refreshText()
		}

	private fun refreshText() {
		var v = if (multiline) _text else _text.replace("\n", "")
		if (_restrictPattern != null)
			v = v.replace(Regex(_restrictPattern!!), "")
		tF.text = if (_password) v.toPassword() else v
	}

	override final val charStyle: CharStyle = tF.charStyle
	override final val boxStyle: BoxStyle = bind(BoxStyle())
	override final val flowStyle: FlowLayoutStyle = tF.flowStyle
	override final val textInputStyle = bind(TextInputStyle())

	/**
	 * The mask to use as replacement characters when [password] is set to true.
	 */
	var passwordMask = "*"

	private var _password = false
	override var password: Boolean
		get() = _password
		set(value) {
			if (value == _password) return
			_password = value
			refreshText()
		}

	/**
	 * If true, this text input can have text on multiple lines.
	 */
	var multiline = false

	private val selectionManager = inject(SelectionManager)

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
		blurred().add {
			caret.visible = false
			unselect()
		}
		char().add {
			it.handled = true
			replaceSelection(it.char.toString())
		}

		keyDown().add {
			if (it.keyCode == Ascii.BACKSPACE) {
				it.handled = true
				backspace()
			} else if (it.keyCode == Ascii.DELETE) {
				it.handled = true
				delete()
			} else if (multiline && (it.keyCode == Ascii.ENTER || it.keyCode == Ascii.RETURN)) {
				replaceSelection("\n")
			}
		}

		selectionManager.selectionChanged.add(this::selectionChangedHandler)

	}

	private val firstSelection: SelectionRange?
		get() = selectionManager.selection.firstOrNull { it.target == this }

	private fun backspace() {
		val sel = firstSelection ?: return
		if (sel.startIndex != sel.endIndex) {
			replaceTextRange(sel.startIndex, sel.endIndex, "")
			selectionManager.selection = listOf(SelectionRange(this, sel.startIndex, sel.startIndex))
		} else if (sel.startIndex > 0) {
			replaceTextRange(sel.startIndex - 1, sel.startIndex, "")
			selectionManager.selection = listOf(SelectionRange(this, sel.startIndex - 1, sel.startIndex - 1))
		}
	}

	private fun delete() {
		val sel = firstSelection ?: return
		if (sel.startIndex != sel.endIndex) {
			replaceTextRange(sel.startIndex, sel.endIndex, "")
			selectionManager.selection = listOf(SelectionRange(this, sel.startIndex, sel.startIndex))
		} else if (sel.startIndex < _text.length) {
			replaceTextRange(sel.startIndex, sel.startIndex + 1, "")
			selectionManager.selection = listOf(SelectionRange(this, sel.startIndex, sel.startIndex))
		}
	}

	private fun replaceSelection(str: String) {
		val sel = firstSelection ?: return
		replaceTextRange(sel.startIndex, sel.endIndex, str)
		selectionManager.selection = listOf(SelectionRange(this, sel.startIndex + str.length, sel.startIndex + str.length))
	}

	private fun String.toPassword(): String? {
		return passwordMask.repeat2(length)
	}

	private fun selectionChangedHandler(old: List<SelectionRange>, new: List<SelectionRange>) {
		val sel = firstSelection
		if (sel != null && sel.startIndex == sel.endIndex) {
			caret.visible = true
			// TODO
			tF.getCharAt(sel.startIndex)
		} else {
			caret.visible = false
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

	override fun dispose() {
		super.dispose()
		selectionManager.selectionChanged.remove(this::selectionChangedHandler)
	}
}


open class GlTextArea(owner: Owned) : GlTextInput(owner), TextArea {

	init {
		multiline = true
		styleTags.add(TextArea)
	}
}