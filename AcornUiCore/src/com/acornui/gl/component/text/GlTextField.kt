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

package com.acornui.gl.component.text

import com.acornui.collection.*
import com.acornui.component.*
import com.acornui.component.layout.algorithm.FlowHAlign
import com.acornui.component.layout.algorithm.FlowVAlign
import com.acornui.component.layout.algorithm.LineInfo
import com.acornui.component.layout.algorithm.LineInfoRo
import com.acornui.component.style.*
import com.acornui.component.text.CharStyle
import com.acornui.component.text.TextField
import com.acornui.component.text.TextFlowStyle
import com.acornui.core.Disposable
import com.acornui.core.cursor.RollOverCursor
import com.acornui.core.cursor.StandardCursors
import com.acornui.core.di.Owned
import com.acornui.core.di.inject
import com.acornui.core.floor
import com.acornui.core.graphics.BlendMode
import com.acornui.core.input.interaction.DragAttachment
import com.acornui.core.input.interaction.DragInteraction
import com.acornui.core.selection.Selectable
import com.acornui.core.selection.SelectionManager
import com.acornui.core.selection.SelectionRange
import com.acornui.gl.core.GlState
import com.acornui.gl.core.pushQuadIndices
import com.acornui.graphics.Color
import com.acornui.graphics.ColorRo
import com.acornui.math.Bounds
import com.acornui.math.MathUtils.floor
import com.acornui.math.MathUtils.round
import com.acornui.math.Matrix4Ro
import com.acornui.math.Vector3
import com.acornui.math.ceil
import com.acornui.string.isBreaking

/**
 * A TextField implementation for the OpenGL back-ends.
 * @author nbilyk
 */
@Suppress("LeakingThis", "UNUSED_PARAMETER")
open class GlTextField(owner: Owned) : ContainerImpl(owner), TextField {

	override final val flowStyle = bind(TextFlowStyle())
	override final val charStyle = bind(CharStyle())

	private val selectionManager = inject(SelectionManager)

	protected var _selectionCursor: RollOverCursor? = null

	/**
	 * The Selectable target to use for the selection range.
	 */
	var selectionTarget: Selectable = this

	private val _textSpan = span()
	private val _textContents = textFlow { +_textSpan }
	protected var _contents: TextNodeComponent = addChild(_textContents)

	/**
	 * The TextField contents.
	 */
	val contents: TextNodeRo
		get() = _contents

	/**
	 * Sets the contents of this textfield.
	 * This will remove the existing contents, but does not dispose.
	 */
	fun <T : TextNodeComponent> contents(value: T): T {
		if (_contents == value) return value
		removeChild(_contents)
		_contents = value
		addChild(value)
		return value
	}

	init {
		addStyleRule(flowStyle)
		addStyleRule(charStyle)
		styleTags.add(TextField)
		BitmapFontRegistry.fontRegistered.add(this::fontRegisteredHandler)

		watch(charStyle) {
			refreshCursor()
			if (it.selectable) {
				createOrReuseAttachment(TEXT_DRAG_ATTACHMENT, {
					val d = DragAttachment(this, 0f)
					d.drag.add(this::dragHandler)
					d
				})
			} else {
				removeAttachment<DragAttachment>(TEXT_DRAG_ATTACHMENT)?.dispose()
			}
		}

		validation.addNode(TextValidationFlags.SELECTION, ValidationFlags.HIERARCHY_ASCENDING, this::updateSelection)

		selectionManager.selectionChanged.add(this::selectionChangedHandler)
	}

	private fun selectionChangedHandler(old: List<SelectionRange>, new: List<SelectionRange>) {
		invalidate(TextValidationFlags.SELECTION)
	}

	private fun dragHandler(event: DragInteraction) {
		if (!charStyle.selectable) return
		selectionManager.selection = getNewSelection(event) ?: emptyList()
	}

	private fun getNewSelection(event: DragInteraction): List<SelectionRange>? {
		val contents = _contents
		val p1 = event.startPositionLocal
		val p2 = event.positionLocal
		val p1A = contents.getSelectionIndex(p1.x, p1.y)
		val p2A = contents.getSelectionIndex(p2.x, p2.y)
		if (p2A > p1A) {
			return listOf(SelectionRange(selectionTarget, p1A, p2A))
		} else {
			return listOf(SelectionRange(selectionTarget, p2A, p1A))
		}
	}

	protected open fun refreshCursor() {
		if (charStyle.selectable) {
			if (_selectionCursor == null)
				_selectionCursor = RollOverCursor(this, StandardCursors.IBEAM)
		} else {
			_selectionCursor?.dispose()
			_selectionCursor = null
		}
	}

	override var text: String
		get() {
			val builder = StringBuilder()
			_contents.toString(builder)
			return builder.toString()
		}
		set(value) {
			_textSpan.text = value
			contents(_textContents)
		}

	private fun fontRegisteredHandler(registeredFont: BitmapFont) {
		invalidateStyles()
	}

	protected open fun updateSelection() {
		_contents.setSelection(0, selectionManager.selection.filter { it.target == selectionTarget })
	}

	override fun updateLayout(explicitWidth: Float?, explicitHeight: Float?, out: Bounds) {
		val contents = _contents
		contents.setSize(explicitWidth, explicitHeight)
		out.set(contents.bounds)

		val minHeight = flowStyle.padding.expandHeight(BitmapFontRegistry.getFont(charStyle)?.data?.lineHeight?.toFloat()) ?: 0f
		if (out.height < minHeight) out.height = minHeight

		if (explicitWidth != null) out.width = explicitWidth
		if (explicitHeight != null) out.height = explicitHeight
	}

	override fun dispose() {
		super.dispose()
		BitmapFontRegistry.fontRegistered.remove(this::fontRegisteredHandler)
		_selectionCursor?.dispose()
		_selectionCursor = null
		selectionManager.selectionChanged.remove(this::selectionChangedHandler)
	}

	companion object {
		private val TEXT_DRAG_ATTACHMENT: Any = object {}
	}
}

object TextValidationFlags {
	const val SELECTION = 1 shl 16
}

class TfCharStyle {
	var font: BitmapFont? = null
	val selectedTextColorTint: Color = Color()
	val selectedBackgroundColor: Color = Color()
	val textColorTint: Color = Color()
	val backgroundColor: Color = Color()
}

interface TextSpanElementRo<out T : TextElementRo> : ElementParentRo<T> {

	val parent: UiComponentRo?

	/**
	 * The height of the text line.
	 */
	val lineHeight: Float

	/**
	 * If the [TextFlowStyle] vertical alignment is BASELINE, this property will be used to vertically align the
	 * elements.
	 */
	val baseline: Float

	/**
	 * The size of a space.
	 */
	val spaceSize: Float

}

interface TextSpanElement : TextSpanElementRo<TextElement> {

	override var parent: UiComponent?

	fun validateStyles()
	fun validateCharStyle()
}

@Suppress("LeakingThis")
open class TextSpanElementImpl : TextSpanElement, ElementParent<TextElement>, Styleable {

	override var parent: UiComponent? = null

	override val styleParent: StyleableRo?
		get() = parent

	private val _elements = ArrayList<TextElement>()

	override val elements: List<TextElement>
		get() = _elements

	protected val styles = StylesImpl(this)

	val charStyle = styles.bind(CharStyle())

	private val tfCharStyle = TfCharStyle()

	init {
	}

	//-------------------------------------------------------
	// Styleable
	//-------------------------------------------------------

	override final val styleTags: MutableList<StyleTag>
		get() = styles.styleTags

	override final val styleRules: MutableList<StyleRule<*>>
		get() = styles.styleRules

	override fun <T : StyleRo> getRulesByType(type: StyleType<T>, out: MutableList<StyleRule<T>>) = styles.getRulesByType(type, out)

	override fun invalidateStyles() {
		parent?.invalidate(ValidationFlags.STYLES)
	}

	override fun validateStyles() {
		styles.validateStyles()
		tfCharStyle.font = BitmapFontRegistry.getFont(charStyle)
	}

	private val font: BitmapFont?
		get() = tfCharStyle.font

	override val lineHeight: Float
		get() = (font?.data?.lineHeight?.toFloat() ?: 0f)

	override val baseline: Float
		get() = (font?.data?.baseline?.toFloat() ?: 0f)

	override val spaceSize: Float
		get() {
			val font = font ?: return 6f
			return (font.data.glyphs[' ']?.advanceX?.toFloat() ?: 6f)
		}

	operator fun Char?.unaryPlus() {
		if (this == null) return
		addElement(char(this))
	}

	protected var bubblingFlags =
			ValidationFlags.HIERARCHY_ASCENDING or
					ValidationFlags.LAYOUT

	override fun <S : TextElement> addElement(index: Int, element: S): S {
		element.parent = this
		_elements.add(index, element)
		parent?.invalidate(bubblingFlags)
		return element
	}

	override fun removeElement(index: Int): TextElement {
		val element = _elements.removeAt(index)
		element.parent = null
		parent?.invalidate(bubblingFlags)
		return element
	}

	/**
	 * Clears all elements in this span.
	 * @param dispose If dispose is true, the elements will be disposed.
	 */
	override fun clearElements(dispose: Boolean) {
		for (i in 0.._elements.lastIndex) {
			val e = _elements[i]
			e.parent = null
			if (dispose)
				e.dispose()
		}
		_elements.clear()
		parent?.invalidate(bubblingFlags)
	}

	fun char(char: Char): TextElement {
		return TfChar.obtain(char, tfCharStyle)
	}

	operator fun String?.unaryPlus() {
		if (this == null) return
		for (i in 0..length - 1) {
			val c = this[i]
			if (c != '\r')
				addElement(char(c))
		}
	}

	/**
	 * A utility variable that when set, clears/disposes the current elements and replaces them with the new text.
	 */
	var text: String
		get() {
			val elements = elements
			val builder = StringBuilder()
			for (i in 0..elements.lastIndex) {
				val char = elements[i].char
				if (char != null)
					builder.append(char)
			}
			return builder.toString()
		}
		set(value) {
			clearElements(true)
			+value
		}

	override fun validateCharStyle() {
		val concatenatedColorTint = parent?.concatenatedColorTint ?: return
		tfCharStyle.selectedTextColorTint.set(concatenatedColorTint).mul(charStyle.selectedColorTint)
		tfCharStyle.selectedBackgroundColor.set(concatenatedColorTint).mul(charStyle.selectedBackgroundColor)
		tfCharStyle.textColorTint.set(concatenatedColorTint).mul(charStyle.colorTint)
		tfCharStyle.backgroundColor.set(concatenatedColorTint).mul(charStyle.backgroundColor)
	}
}



/**
 * The smallest unit that can be inside of a TextField.
 * This can be a single character, or a more complex object.
 */
interface TextElementRo {

	/**
	 * Set by the TextSpanElement when this is part is added.
	 */
	val parent: TextSpanElementRo<TextElementRo>?

	val char: Char?

	val x: Float
	val y: Float

	/**
	 * The amount of horizontal space to advance after this part.
	 */
	val xAdvance: Float

	/**
	 * If set, this part should be drawn to fit this width.
	 */
	val explicitWidth: Float?

	/**
	 * The explicit width, if it's set, or the xAdvance.
	 */
	val width: Float
		get() = explicitWidth ?: xAdvance

	/**
	 * Returns the amount of horizontal space to offset this part from the next part.
	 */
	fun getKerning(next: TextElementRo): Float

	/**
	 * If true, this element will cause the line to break after this element.
	 */
	val clearsLine: Boolean

	/**
	 * If true, the tabstop should be cleared after placing this element.
	 */
	val clearsTabstop: Boolean

	/**
	 * If true, this part may be used as a word break. (The part after this part may be placed on the next line).
	 */
	val isBreaking: Boolean

	/**
	 * If true, this part will not cause a wrap.
	 */
	val overhangs: Boolean
}

interface TextElement : TextElementRo, Disposable {

	/**
	 * Set by the TextSpanElement when this is part is added.
	 */
	override var parent: TextSpanElementRo<TextElementRo>?

	override var x: Float
	override var y: Float

	/**
	 * If set, this element should be drawn to fit this width.
	 */
	override var explicitWidth: Float?

	/**
	 * If set to true, this part will be rendered using the selected styling.
	 */
	fun setSelected(value: Boolean)

	/**
	 * Finalizes the vertices for rendering.
	 */
	fun validateVertices(transform: Matrix4Ro, leftClip: Float, topClip: Float, rightClip: Float, bottomClip: Float)

	/**
	 * Draws this element.
	 */
	fun render(glState: GlState)

}

fun span(init: ComponentInit<TextSpanElement> = {}): TextSpanElementImpl {
	val s = TextSpanElementImpl()
	s.init()
	return s
}

interface TextNodeRo : Validatable, StyleableRo {

	/**
	 * The number of [TextElement] objects within this node's hierarchy. (This will be a recursive total)
	 */
	val size: Int

	/**
	 * @param x The relative x coordinate
	 * @param y The relative y coordinate
	 * @return Returns the relative index of the text element nearest [x,y]. The text element index will be separated at
	 * the half-width of the element. This range will be between [0, size]
	 */
	fun getSelectionIndex(x: Float, y: Float): Int

	/**
	 * Writes this node's contents to a string builder.
	 */
	fun toString(builder: StringBuilder)
}

interface TextNode : TextNodeRo {

	/**
	 * Sets the text selection.
	 * @param rangeStart The starting index of this leaf.
	 * @param selection A list of ranges that are selected.
	 */
	fun setSelection(rangeStart: Int, selection: List<SelectionRange>)

}

interface TextNodeComponent : TextNode, UiComponent

/**
 * A TextFlow component is a container of styleable text spans, to be used inside of a TextField.
 */
class TextFlow(owner: Owned) : UiComponentImpl(owner), TextNodeComponent, ElementParent<TextSpanElement> {

	val flowStyle = bind(TextFlowStyle())

	private val _lines = ArrayList<LineInfo>()

	private val _textElements = ArrayList<TextElement>()

	val textElements: List<TextElementRo>
		get() {
			validate(ValidationFlags.HIERARCHY_ASCENDING)
			return _textElements
		}

	override val size: Int
		get() {
			validate(ValidationFlags.HIERARCHY_ASCENDING)
			return _textElements.size
		}

	init {
		validation.addNode(VERTICES, ValidationFlags.LAYOUT or ValidationFlags.CONCATENATED_TRANSFORM or ValidationFlags.STYLES, 0, this::updateVertices)
		validation.addNode(CHAR_STYLE, ValidationFlags.CONCATENATED_COLOR_TRANSFORM or ValidationFlags.STYLES, 0, this::updateCharStyle)
	}

	//-------------------------------------------------------------------------------------------------
	// Element methods.
	//-------------------------------------------------------------------------------------------------

	/**
	 * The validation flags that, if a child has invalidated, will cause the same flags on this container to become
	 * invalidated.
	 * If this container doesn't lay its children out, it is a good practice to set this property to just
	 * [ValidationFlags.HIERARCHY_ASCENDING]
	 */
	private val bubblingFlags =
			ValidationFlags.HIERARCHY_ASCENDING or
					ValidationFlags.LAYOUT or
					ValidationFlags.SIZE_CONSTRAINTS

	private val _elements = ArrayList<TextSpanElement>()
	override val elements: List<TextSpanElement>
		get() = _elements

	override fun <S : TextSpanElement> addElement(index: Int, element: S): S {
		var newIndex = index
		val oldIndex = elements.indexOf(element)
		if (oldIndex != -1) {
			if (newIndex == oldIndex) return element // Element was added in the same spot it previously was.
			// Handle the case where after the element is removed, the new index needs to decrement to compensate.
			if (oldIndex < newIndex)
				newIndex--
			removeElement(oldIndex)
		}
		_elements.add(newIndex, element)
		invalidate(bubblingFlags)
		element.parent = this
		return element
	}

	override fun removeElement(index: Int): TextSpanElement {
		val element = _elements.removeAt(index)
		element.parent = null
		invalidate(bubblingFlags)
		return element
	}

	override fun clearElements(dispose: Boolean) {
		_elements.clear()
		invalidate(bubblingFlags)
	}

	override fun updateHierarchyAscending() {
		super.updateHierarchyAscending()
		_textElements.clear()
		for (i in 0.._elements.lastIndex) {
			_textElements.addAll(_elements[i].elements)
		}
	}

	override fun updateStyles() {
		super.updateStyles()
		for (i in 0.._elements.lastIndex) {
			_elements[i].validateStyles()
		}
	}

	override fun updateLayout(explicitWidth: Float?, explicitHeight: Float?, out: Bounds) {
		val padding = flowStyle.padding
		val availableWidth: Float? = padding.reduceWidth(explicitWidth)

		_lines.freeTo(linesPool)

		// To keep tab sizes consistent across the whole text field, we only use the first span's space size.
		val spaceSize = _elements.firstOrNull()?.spaceSize ?: 6f
		val tabSize = spaceSize * flowStyle.tabSize

		// Calculate lines
		var x = 0f
		var currentLine = linesPool.obtain()

		var spanPartIndex = 0
		while (spanPartIndex < _textElements.size) {
			val part = _textElements[spanPartIndex]
			part.explicitWidth = null
			part.x = x

			if (part.clearsTabstop) {
				val tabIndex = floor(x / tabSize) + 1
				var w = tabIndex * tabSize - x
				// I'm not sure what standard text flows do for this, but if the tab size is too small, skip to
				// the next tabstop.
				if (w < spaceSize * 0.9f) w += tabSize
				part.explicitWidth = w
			}

			val partW = part.width

			// If this is multiline text and we extend beyond the right edge,then push the current line and start a new one.
			val extendsEdge = flowStyle.multiline && (!part.overhangs && availableWidth != null && x + partW > availableWidth)
			val isLast = spanPartIndex == _textElements.lastIndex
			if (isLast || part.clearsLine || extendsEdge) {
				if (extendsEdge) {
					// Find the last good breaking point.
					var breakIndex = _textElements.indexOfLast2(spanPartIndex, currentLine.startIndex) { it.isBreaking }
					if (breakIndex == -1) breakIndex = spanPartIndex - 1
					val endIndex = _textElements.indexOfFirst2(breakIndex + 1, spanPartIndex) { !it.overhangs }
					currentLine.endIndex = if (endIndex == -1) spanPartIndex + 1
					else endIndex
					spanPartIndex = currentLine.endIndex
				} else {
					spanPartIndex++
					currentLine.endIndex = spanPartIndex
				}
				_lines.add(currentLine)
				currentLine = linesPool.obtain()
				currentLine.startIndex = spanPartIndex
				x = 0f
			} else {
				val nextPart = _textElements.getOrNull(spanPartIndex + 1)
				val kerning = if (nextPart == null) 0f else part.getKerning(nextPart)
				x += partW + kerning
				spanPartIndex++
			}
		}
		linesPool.free(currentLine)

		// We now have the elements per line; measure the line heights/widths and position the elements within the line.
		var y = padding.top
		var measuredWidth = 0f
		for (i in 0.._lines.lastIndex) {
			val line = _lines[i]
			line.y = y

			var belowBaseline = 0f
			for (j in line.startIndex..line.endIndex - 1) {
				val part = _textElements[j]
				val b = part.lineHeight - part.baseline
				if (b > belowBaseline) belowBaseline = b
				if (part.baseline > line.baseline) line.baseline = part.baseline
				if (!part.overhangs) line.width = part.x + part.xAdvance
			}
			line.height = line.baseline + belowBaseline
			if (line.width > measuredWidth)
				measuredWidth = line.width
			positionPartsInLine(line, availableWidth)
			y += line.height + flowStyle.verticalGap
		}
		val measuredHeight = y - flowStyle.verticalGap + padding.bottom
		measuredWidth += padding.left + padding.right
		if (measuredWidth > out.width) out.width = measuredWidth
		if (measuredHeight > out.height) out.height = measuredHeight
	}

	private fun positionPartsInLine(line: LineInfoRo, availableWidth: Float?) {
		val xOffset: Float
		if (availableWidth != null) {
			val remainingSpace = availableWidth - line.width
			xOffset = flowStyle.padding.left + when (flowStyle.horizontalAlign) {
				FlowHAlign.LEFT -> 0f
				FlowHAlign.CENTER -> (remainingSpace * 0.5f).floor()
				FlowHAlign.RIGHT -> remainingSpace
				FlowHAlign.JUSTIFY -> 0f
			}

			if (flowStyle.horizontalAlign == FlowHAlign.JUSTIFY &&
					line.size > 1 &&
					_lines.last() != line &&
					!_textElements[line.endIndex - 1].clearsLine
					) {
				// Apply JUSTIFY spacing if this is not the last line, and there are more than one elements.
				val lastIndex = _textElements.indexOfLast2(line.endIndex - 1, line.startIndex) { !it.overhangs }
				val numSpaces = _textElements.count2(line.startIndex, lastIndex) { it.char == ' ' }
				if (numSpaces > 0) {
					val hGap = remainingSpace / numSpaces
					var justifyOffset = 0f
					for (i in line.startIndex..line.endIndex - 1) {
						val part = _textElements[i]
						part.x = (part.x + justifyOffset).floor()
						if (i < lastIndex && part.char == ' ') {
							part.explicitWidth = part.xAdvance + hGap.ceil()
							justifyOffset += hGap
						}
					}
				}
			}
		} else {
			xOffset = flowStyle.padding.left
		}

		for (i in line.startIndex..line.endIndex - 1) {
			val part = _textElements[i]

			val yOffset = when (flowStyle.verticalAlign) {
				FlowVAlign.TOP -> 0f
				FlowVAlign.MIDDLE -> round((line.height - part.lineHeight) * 0.5f).toFloat()
				FlowVAlign.BOTTOM -> line.height - part.lineHeight
				FlowVAlign.BASELINE -> line.baseline - part.baseline
			}

			part.x += xOffset
			part.y = line.y + yOffset
		}
	}

	private val TextElementRo.lineHeight: Float
		get() = (parent?.lineHeight ?: 0f)

	private val TextElementRo.baseline: Float
		get() = (parent?.baseline ?: 0f)

	override fun getSelectionIndex(x: Float, y: Float): Int {
		if (_lines.isEmpty()) return 0
		if (y < _lines.first().y) return 0
		if (y >= _lines.last().bottom) return textElements.size
		val lineIndex = _lines.sortedInsertionIndex(y, {
			y, line ->
			y.compareTo(line.bottom)
		})
		val line = _lines[lineIndex]
		return textElements.sortedInsertionIndex(x, {
			x, part ->
			if (part.clearsLine) -1 else x.compareTo(part.x + part.width / 2f)
		}, line.startIndex, line.endIndex)
	}

	private fun updateVertices() {
		val padding = flowStyle.padding
		val leftClip = padding.left
		val topClip = padding.top
		val rightClip = (explicitWidth ?: Float.MAX_VALUE) - padding.right
		val bottomClip = (explicitHeight ?: Float.MAX_VALUE) - padding.bottom
		for (i in 0.._textElements.lastIndex) {
			_textElements[i].validateVertices(concatenatedTransform, leftClip, topClip, rightClip, bottomClip)
		}
	}

	override fun setSelection(rangeStart: Int, selection: List<SelectionRange>) {
		validate(ValidationFlags.HIERARCHY_ASCENDING)
		for (i in 0.._textElements.lastIndex) {
			val selected = selection.indexOfFirst2 { it.contains(i + rangeStart) } != -1
			_textElements[i].setSelected(selected)
		}
	}

	private fun updateCharStyle() {
		for (i in 0.._elements.lastIndex) {
			_elements[i].validateCharStyle()
		}
	}

	override fun toString(builder: StringBuilder) {
		val textElements = textElements
		for (i in 0..textElements.lastIndex) {
			val char = textElements[i].char
			if (char != null)
				builder.append(char)
		}
	}

	private val glState = inject(GlState)

	override fun draw() {
		glState.camera(camera)
		for (i in 0.._textElements.lastIndex) {
			_textElements[i].render(glState)
		}
	}

	companion object {
		private val linesPool = ClearableObjectPool { LineInfo() }

		private const val VERTICES = 1 shl 16
		private const val CHAR_STYLE = 1 shl 17
	}
}

private fun Owned.textFlow(init: ComponentInit<TextFlow>): TextFlow {
	val f = TextFlow(this)
	f.init()
	return f
}

/**
 * Represents a single character, typically within a [TextSpanElement].
 */
class TfChar private constructor() : TextElement, Clearable {

	override var char: Char = CHAR_PLACEHOLDER
	var style: TfCharStyle? = null

	override var parent: TextSpanElementRo<TextElementRo>? = null

	val glyph: Glyph?
		get() {
			return style?.font?.getGlyphSafe(char)
		}

	override var x: Float = 0f
	override var y: Float = 0f

	override val xAdvance: Float
		get() = (glyph?.advanceX?.toFloat() ?: 0f)

	override var explicitWidth: Float? = null

	override fun getKerning(next: TextElementRo): Float {
		val d = glyph?.data ?: return 0f
		val c = next.char ?: return 0f
		return d.getKerning(c).toFloat()
	}

	private var u = 0f
	private var v = 0f
	private var u2 = 0f
	private var v2 = 0f

	private var visible = false

	/**
	 * A cache of the vertex positions in world space.
	 */
	private val vertexPoints: Array<Vector3> = arrayOf(Vector3(), Vector3(), Vector3(), Vector3())
	private val normal = Vector3()

	private val backgroundVertices: Array<Vector3> = arrayOf(Vector3(), Vector3(), Vector3(), Vector3())

	// By reference
	private var fontColor: ColorRo = Color.BLACK
	// By reference
	private var backgroundColor: ColorRo = Color.CLEAR

	override val clearsLine: Boolean
		get() = char == '\n'
	override val clearsTabstop: Boolean
		get() = char == '\t'
	override val isBreaking: Boolean
		get() = char.isBreaking()
	override val overhangs: Boolean
		get() = char == ' '

	override fun setSelected(value: Boolean) {
		val style = style ?: return
		if (value) {
			fontColor = style.selectedTextColorTint
			backgroundColor = style.selectedBackgroundColor
		} else {
			fontColor = style.textColorTint
			backgroundColor = style.backgroundColor
		}
	}

	override fun validateVertices(transform: Matrix4Ro, leftClip: Float, topClip: Float, rightClip: Float, bottomClip: Float) {
		val x = x
		val y = y
		val glyph = glyph ?: return

		var charL = glyph.offsetX + x
		var charT = glyph.offsetY + y
		var charR = charL + glyph.width
		var charB = charT + glyph.height

		val bgL = maxOf(leftClip, x)
		val bgT = maxOf(topClip, y)
		val bgR = minOf(rightClip, x + width)
		val lineHeight = parent?.lineHeight ?: 0f
		val bgB = minOf(bottomClip, y + lineHeight)

		visible = bgL < rightClip && bgT < bottomClip && bgR > leftClip && bgB > topClip
		if (!visible)
			return

		val region = glyph.region
		val textureW = glyph.texture.width.toFloat()
		val textureH = glyph.texture.height.toFloat()

		var regionX = region.x.toFloat()
		var regionY = region.y.toFloat()
		var regionR = region.right.toFloat()
		var regionB = region.bottom.toFloat()

		if (charL < leftClip) {
			if (glyph.isRotated) regionY += leftClip - charL
			else regionX += leftClip - charL
			charL = leftClip
		}
		if (charT < topClip) {
			if (glyph.isRotated) regionX += topClip - charT
			else regionY -= topClip - charT
			charT = topClip
		}
		if (charR > rightClip) {
			if (glyph.isRotated) regionB -= charR - rightClip
			else regionR -= charR - rightClip
			charR = rightClip
		}
		if (charB > bottomClip) {
			if (glyph.isRotated) regionR -= charB - bottomClip
			else regionB -= charB - bottomClip
			charB = bottomClip
		}

		u = regionX / textureW
		v = regionY / textureH
		u2 = regionR / textureW
		v2 = regionB / textureH

		// Transform vertex coordinates from local to global
		transform.prj(vertexPoints[0].set(charL, charT, 0f))
		transform.prj(vertexPoints[1].set(charR, charT, 0f))
		transform.prj(vertexPoints[2].set(charR, charB, 0f))
		transform.prj(vertexPoints[3].set(charL, charB, 0f))

		// Background vertices
		transform.prj(backgroundVertices[0].set(bgL, bgT, 0f))
		transform.prj(backgroundVertices[1].set(bgR, bgT, 0f))
		transform.prj(backgroundVertices[2].set(bgR, bgB, 0f))
		transform.prj(backgroundVertices[3].set(bgL, bgB, 0f))

		transform.rot(normal.set(Vector3.NEG_Z)).nor()
	}

	override fun render(glState: GlState) {
		if (!visible) return
		val glyph = glyph ?: return
		val batch = glState.batch

		if (backgroundColor.a > 0f) {
			batch.begin()
			glState.setTexture(glState.whitePixel)
			glState.blendMode(BlendMode.NORMAL, false)
			// Top left
			batch.putVertex(backgroundVertices[0], normal, backgroundColor, 0f, 0f)
			// Top right
			batch.putVertex(backgroundVertices[1], normal, backgroundColor, 0f, 0f)
			// Bottom right
			batch.putVertex(backgroundVertices[2], normal, backgroundColor, 0f, 0f)
			// Bottom left
			batch.putVertex(backgroundVertices[3], normal, backgroundColor, 0f, 0f)
			batch.pushQuadIndices()
		}

		if (u == u2 || v == v2 || glyph.width <= 0f || glyph.height <= 0f) return // Nothing to draw
		batch.begin()
		glState.setTexture(glyph.texture)
		glState.blendMode(BlendMode.NORMAL, glyph.premultipliedAlpha)

		if (glyph.isRotated) {
			// Top left
			batch.putVertex(vertexPoints[0], normal, fontColor, u2, v)
			// Top right
			batch.putVertex(vertexPoints[1], normal, fontColor, u2, v2)
			// Bottom right
			batch.putVertex(vertexPoints[2], normal, fontColor, u, v2)
			// Bottom left
			batch.putVertex(vertexPoints[3], normal, fontColor, u, v)
		} else {
			// Top left
			batch.putVertex(vertexPoints[0], normal, fontColor, u, v)
			// Top right
			batch.putVertex(vertexPoints[1], normal, fontColor, u2, v)
			// Bottom right
			batch.putVertex(vertexPoints[2], normal, fontColor, u2, v2)
			// Bottom left
			batch.putVertex(vertexPoints[3], normal, fontColor, u, v2)
		}

		batch.pushQuadIndices()
	}

	override fun dispose() {
		pool.free(this)
	}

	override fun clear() {
		explicitWidth = null
		char = CHAR_PLACEHOLDER
		style = null
		parent = null
		x = 0f
		y = 0f
		u = 0f
		v = 0f
		u2 = 0f
		v2 = 0f
		visible = false
	}

	companion object {
		private const val CHAR_PLACEHOLDER = 'a'
		private val pool = ClearableObjectPool { TfChar() }

		fun obtain(char: Char, charStyle: TfCharStyle): TfChar {
			val c = pool.obtain()
			c.char = char
			c.style = charStyle
			return c
		}
	}
}

class LastTextElement(override val parent: TextSpanElement) : TextElementRo {

	override val char: Char? = null
	override var x = 0f
	override var y = 0f

	override val xAdvance = 0f

	override val explicitWidth = 0f

	override fun getKerning(next: TextElementRo) = 0f

	override val clearsLine = false
	override val clearsTabstop = false
	override val isBreaking = false
	override val overhangs = false
}
