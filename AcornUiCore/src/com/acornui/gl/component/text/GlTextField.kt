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

import com.acornui._assert
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
import com.acornui.core.TreeWalk
import com.acornui.core.childWalkLevelOrder
import com.acornui.core.cursor.RollOverCursor
import com.acornui.core.cursor.StandardCursors
import com.acornui.core.di.Owned
import com.acornui.core.di.inject
import com.acornui.core.graphics.BlendMode
import com.acornui.core.input.interaction.DragInteraction
import com.acornui.core.input.interaction.dragAttachment
import com.acornui.core.round
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
import com.acornui.math.Rectangle
import com.acornui.math.Vector3
import com.acornui.observe.bind
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

	private val drag = dragAttachment(0f)

	/**
	 * The Selectable target to use for the selection range.
	 */
	var selectionTarget: Selectable = this

	protected var _contents: UiComponent? = null
	var contents: UiComponent?
		get() = _contents
		set(value) {
			_contents?.dispose()
			_contents = value
			addOptionalChild(value)
		}

	private val _leaves = ArrayList<TextFieldLeaf>()

	init {
		addStyleRule(flowStyle)
		addStyleRule(charStyle)
		styleTags.add(TextField)
		BitmapFontRegistry.fontRegistered.add(this::fontRegisteredHandler)

		watch(charStyle) {
			refreshCursor()
			drag.enabled = it.selectable
		}

		validation.addNode(TextValidationFlags.SELECTION, this::updateSelection)

		selectionManager.selectionChanged.add(this::selectionChangedHandler)

		drag.drag.add(this::dragHandler)
	}

	override fun updateHierarchyAscending() {
		_leaves.clear()
		childWalkLevelOrder<UiComponent> {
			if (it is TextFieldLeaf)
				_leaves.add(it)
			TreeWalk.CONTINUE
		}
	}

	private fun selectionChangedHandler(old: List<SelectionRange>, new: List<SelectionRange>) {
		invalidate(TextValidationFlags.SELECTION)
	}

	private fun dragHandler(event: DragInteraction) {
//		val p1 = event.startPositionLocal
//		val p2 = event.positionLocal
//		val p1A = _contents.getSelectionIndex(p1.x, p1.y)
//		val p2A = _contents.getSelectionIndex(p2.x, p2.y)
//		if (p2A > p1A) {
//			selectionManager.selection = listOf(SelectionRange(selectionTarget, p1A, p2A))
//		} else {
//			selectionManager.selection = listOf(SelectionRange(selectionTarget, p2A, p1A))
//		}
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

	override var text: String?
		get() {
			validate(ValidationFlags.HIERARCHY_ASCENDING)
			val builder = StringBuilder()
			for (i in 0.._leaves.lastIndex) {
				_leaves[i].buildText(builder)
			}
			return builder.toString()
		}
		set(value) {
			contents = textFlow {
				+span {
					+value
				}
			}
		}

	override var htmlText: String?
		get() = ""
		set(value) {
		}

	private fun fontRegisteredHandler(registeredFont: BitmapFont) {
		invalidateStyles()
	}


	protected open fun updateSelection() {
		var rangeStart = 0
		for (i in 0.._leaves.lastIndex) {
			val leaf = _leaves[i]
			leaf.setSelection(rangeStart, selectionManager.selection.filter { it.target == selectionTarget })
			rangeStart += leaf.size
		}
	}

	override fun updateLayout(explicitWidth: Float?, explicitHeight: Float?, out: Bounds) {
		val contents = _contents ?: return
		contents.setSize(explicitWidth, explicitHeight)
		out.set(contents.bounds)

		val lineHeight = BitmapFontRegistry.getFont(charStyle)?.data?.lineHeight?.toFloat() ?: 0f
		if (out.height < lineHeight) out.height = lineHeight

		if (explicitWidth != null) out.width = explicitWidth
		if (explicitHeight != null) out.height = explicitHeight
	}

	override fun dispose() {
		_contents = null
		super.dispose()
		BitmapFontRegistry.fontRegistered.remove(this::fontRegisteredHandler)
		_selectionCursor?.dispose()
		_selectionCursor = null
		selectionManager.selectionChanged.remove(this::selectionChangedHandler)
	}
}

object TextValidationFlags {
	const val SELECTION = 1 shl 16
	const val VERTICES = 1 shl 17
}

class TfCharStyle {
	var font: BitmapFont? = null
	val selectedTextColorTint: Color = Color()
	val selectedBackgroundColor: Color = Color()
	val textColorTint: Color = Color()
	val backgroundColor: Color = Color()
}

interface TextSpanElement : ElementParent<SpanPart>, Styleable {
	var parent: Container?
	val font: BitmapFont?

	fun validateStyles()
	fun setColorTint(concatenatedColorTint: ColorRo)

	fun char(char: Char): SpanPart

	operator fun String?.unaryPlus() {
		if (this == null) return
		for (i in 0..length - 1) {
			addElement(char(this[i]))
		}
	}
}

class TextSpanElementImpl : TextSpanElement {

	private val _styleTags = ActiveList<StyleTag>()
	override val styleTags: MutableList<StyleTag>
		get() = _styleTags
	private val _styleRules = ActiveList<StyleRule<*>>()
	override val styleRules: MutableList<StyleRule<*>>
		get() = _styleRules

	override fun <T : Style> getRulesByType(type: StyleType<T>, out: MutableList<StyleRule<T>>) {
		out.clear()
		@Suppress("UNCHECKED_CAST")
		(styleRules as Iterable<StyleRule<T>>).filterTo(out, { it.style.type == type })
	}

	override var parent: Container? = null

	override val styleParent: Styleable?
		get() = parent

	override fun invalidateStyles() {
		styleParent?.invalidateStyles()
	}

	private val _elements = ArrayList<SpanPart>()
	override val elements: List<SpanPart>
		get() = _elements

	val charStyle = CharStyle()

	private val tfCharStyle = TfCharStyle()

	private val bubblingFlags = ValidationFlags.HIERARCHY_ASCENDING or ValidationFlags.LAYOUT

	init {
		_styleTags.bind(this::invalidateStyles)
		_styleRules.bind(this::invalidateStyles)
	}

	override val font: BitmapFont?
		get() = tfCharStyle.font

	operator fun Char?.unaryPlus() {
		if (this == null) return
		addElement(TfChar(this, tfCharStyle))
	}

	override fun <S : SpanPart> addElement(index: Int, element: S): S {
		element.parent = this
		_elements.add(index, element)
		parent?.invalidate(bubblingFlags)
		return element
	}

	override fun removeElement(index: Int): SpanPart {
		val element = _elements.removeAt(index)
		element.parent = null
		parent?.invalidate(bubblingFlags)
		return element
	}

	override fun clearElements(dispose: Boolean) {
		iterateElements {
			it.parent = null
			true
		}
		_elements.clear()
		parent?.invalidate(bubblingFlags)
	}

	override fun validateStyles() {
		CascadingStyleCalculator.calculate(charStyle, this)
		tfCharStyle.font = BitmapFontRegistry.getFont(charStyle)
	}

	override fun setColorTint(concatenatedColorTint: ColorRo) {
		tfCharStyle.selectedTextColorTint.set(concatenatedColorTint).mul(charStyle.selectedColorTint)
		tfCharStyle.selectedBackgroundColor.set(concatenatedColorTint).mul(charStyle.selectedBackgroundColor)
		tfCharStyle.textColorTint.set(concatenatedColorTint).mul(charStyle.colorTint)
		tfCharStyle.backgroundColor.set(concatenatedColorTint).mul(charStyle.backgroundColor)
	}

	override fun char(char: Char): SpanPart {
		return TfChar(char, tfCharStyle)
	}
}

interface SpanPart {

	/**
	 * Set by the TextSpanElement when this is part is added.
	 */
	var parent: TextSpanElement?

	val char: Char?

	var x: Float
	var y: Float

	val xAdvance: Float

	/**
	 *
	 */
	val lineHeight: Float

	/**
	 * If the [TextFlowStyle] vertical alignment is BASELINE, this property will be used to vertically align the
	 * elements.
	 */
	val baseLine: Float

	fun getKerning(next: SpanPart): Float

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

	fun setSelected(value: Boolean)
	fun validateVertices(transform: Matrix4Ro, leftClip: Float, topClip: Float, rightClip: Float, bottomClip: Float)
	fun render(glState: GlState)

}

private fun span(init: ComponentInit<TextSpanElement>): TextSpanElement {
	val s = TextSpanElementImpl()
	s.init()
	return s
}

interface TextFieldLeaf {

	/**
	 * The number of selectable objects this leaf represents.
	 */
	val size: Int

	/**
	 * Appends this leaf's text to the builder.
	 */
	fun buildText(stringBuilder: StringBuilder)

	/**
	 * Sets the text selection.
	 * @param rangeStart The starting index of this leaf.
	 * @param selection A list of ranges that are selected.
	 */
	fun setSelection(rangeStart: Int, selection: List<SelectionRange>)

	/**
	 * Returns the relative index of the object nearest [x,y]. The object index will be separated at the half-width of
	 * the character.
	 */
	fun getSelectionIndex(x: Float, y: Float): Int

	/**
	 * Populates a rectangle representing the size and position of the object at the given index.
	 * @param index The index of the object relative to this leaf. This must be in the range of [index] < [size]
	 */
	fun getBoundsAt(index: Int, out: Rectangle)
}

/**
 * A TextFlow component is a container of styleable text spans, to be used inside of a TextField.
 */
class TextFlow(owner: Owned) : ContainerImpl(owner), ElementParent<TextSpanElement>, TextFieldLeaf {

	val flowStyle = bind(TextFlowStyle())

	init {
		validation.addNode(TextValidationFlags.VERTICES, ValidationFlags.LAYOUT or ValidationFlags.CONCATENATED_TRANSFORM or ValidationFlags.STYLES, 0, this::updateVertices)
	}

	private val _elements = ArrayList<TextSpanElement>()
	override val elements: List<TextSpanElement>
		get() = _elements

	private val _lines = ArrayList<LineInfo>()

	/**
	 * The list of current lines. This is valid after a layout.
	 */
	val lines: List<LineInfoRo>
		get() = _lines

	private val _parts = ArrayList<SpanPart>()

	override val size: Int
		get() {
			validate(ValidationFlags.HIERARCHY_ASCENDING)
			return _parts.size
		}

	@Suppress("FINAL_UPPER_BOUND")
	override fun <S : TextSpanElement> addElement(index: Int, element: S): S {
		_assert(element.styleParent == null)
		_elements.add(index, element)
		element.parent = this
		invalidate(bubblingFlags)
		return element
	}

	override fun removeElement(index: Int): TextSpanElement {
		val element = _elements.removeAt(index)
		element.parent = null
		invalidate(bubblingFlags)
		return element
	}

	override fun clearElements(dispose: Boolean) {
		val c = _elements
		while (c.isNotEmpty()) {
			removeElement(_elements.lastIndex)
		}
	}

	private inline fun iterateParts(inner: (SpanPart) -> Unit) {
		for (i in 0.._parts.lastIndex) {
			inner(_parts[i])
		}
	}

	override fun updateHierarchyAscending() {
		super.updateHierarchyAscending()
		_parts.clear()
		for (i in 0.._elements.lastIndex) {
			_parts.addAll(_elements[i].elements)
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
		// Calculate lines
		var x = 0f
		var currentLine = linesPool.obtain()

		var spanPartIndex = 0
		while (spanPartIndex < _parts.size) {
			val part = _parts[spanPartIndex]
			part.x = x

			val partW = part.xAdvance

			// If this is multiline text and we extend beyond the right edge,then push the current line and start a new one.
			val extendsEdge = flowStyle.multiline && (!part.overhangs && availableWidth != null && x + partW > availableWidth)
			val isLast = spanPartIndex == _parts.lastIndex
			if (isLast || part.clearsLine || extendsEdge) {
				if (isLast) {
					spanPartIndex++
					currentLine.width = x + partW
					currentLine.endIndex = spanPartIndex
				} else {
					// Find the last good breaking point.
					var breakIndex = _parts.indexOfLast2(spanPartIndex, currentLine.startIndex) { it.isBreaking }
					if (breakIndex == -1) breakIndex = spanPartIndex - 1
					val breakPart = _parts[breakIndex]
					currentLine.width = breakPart.x + breakPart.xAdvance
					val endIndex = _parts.indexOfFirst2(breakIndex + 1, spanPartIndex) { !it.overhangs }
					currentLine.endIndex = if (endIndex == -1) spanPartIndex + 1
					else endIndex
					spanPartIndex = currentLine.endIndex
				}
				_lines.add(currentLine)
				currentLine = linesPool.obtain()
				currentLine.startIndex = spanPartIndex
				x = 0f
			} else {
				val nextPart = _parts.getOrNull(spanPartIndex + 1)
				val kerning = if (nextPart == null) 0f else part.getKerning(nextPart)
				x += partW + kerning

				if (part.clearsTabstop) {
					val font = part.parent!!.font
					if (font != null) {
						val spaceSize = (font.data.glyphs[' ']?.advanceX?.toFloat() ?: 6f)
						val tabSize = spaceSize * flowStyle.tabSize
						val tabIndex = floor(x / tabSize) + 1
						x = tabIndex * tabSize
					}
				}
				spanPartIndex++
			}
		}
		linesPool.free(currentLine)

		var y = padding.top
		var measuredWidth = 0f
		for (i in 0.._lines.lastIndex) {
			val line = _lines[i]
			line.y = y
			if (line.width > measuredWidth)
				measuredWidth = line.width
			for (j in line.startIndex..line.endIndex - 1) {
				val part = _parts[j]
				if (part.baseLine > line.baseline) line.baseline = part.baseLine
				if (part.lineHeight > line.height) line.height = part.lineHeight
			}
			positionPartsInLine(line, availableWidth)
			y += line.height + flowStyle.verticalGap
		}
		val measuredHeight = y - flowStyle.verticalGap + padding.bottom
		measuredWidth += padding.left + padding.right
		if (measuredWidth > out.width) out.width = measuredWidth
		if (measuredHeight > out.height) out.height = measuredHeight
	}

	private fun positionPartsInLine(line: LineInfoRo, availableWidth: Float?) {


//		val hGap: Float
		val xOffset: Float
		if (availableWidth != null) {
			val remainingSpace = availableWidth - line.width
			xOffset = flowStyle.padding.left + when (flowStyle.horizontalAlign) {
				FlowHAlign.LEFT -> 0f
				FlowHAlign.CENTER -> (remainingSpace * 0.5f).round()
				FlowHAlign.RIGHT -> remainingSpace
				FlowHAlign.JUSTIFY -> 0f
			}

//			if (flowStyle.horizontalAlign == FlowHAlign.JUSTIFY &&
//					line.size > 1 &&
//					//!isLastLine &&
//					//!elements[line.endIndex - 1].clearsLine() &&
//					//!elements[line.endIndex].startsNewLine()
//					) {
//				// Apply JUSTIFY spacing if this is not the last line, and there are more than one elements.
//				hGap = (flowStyle.horizontalGap + remainingSpace / (line.endIndex - line.startIndex - 1)).floor()
//			} else {
//				hGap = flowStyle.horizontalGap
//			}
		} else {
			xOffset = flowStyle.padding.left
//			hGap = flowStyle.horizontalGap
		}

		for (j in line.startIndex..line.endIndex - 1) {
			val part = _parts[j]

			val yOffset = when (flowStyle.verticalAlign) {
				FlowVAlign.TOP -> 0f
				FlowVAlign.MIDDLE -> round((line.height - part.lineHeight) * 0.5f).toFloat()
				FlowVAlign.BOTTOM -> line.height - part.lineHeight
				FlowVAlign.BASELINE -> line.baseline - part.baseLine
			}

			part.x += xOffset
			part.y = line.y + yOffset
		}
	}


	override fun setSelection(rangeStart: Int, selection: List<SelectionRange>) {
		var index = rangeStart
		iterateParts {
			val selected = selection.indexOfFirst2 { it.contains(index++) } != -1
			it.setSelected(selected)
		}
	}

	private fun updateVertices() {
		val padding = flowStyle.padding
		val leftClip = padding.left
		val topClip = padding.top
		val rightClip = (explicitWidth ?: Float.MAX_VALUE) - padding.right
		val bottomClip = (explicitHeight ?: Float.MAX_VALUE) - padding.bottom
		iterateParts {
			it.validateVertices(concatenatedTransform, leftClip, topClip, rightClip, bottomClip)
		}
	}

	override fun getSelectionIndex(x: Float, y: Float): Int {
//		if (y <= 0f) return rangeStart
//		if (y >= height) return rangeEnd
//		if (x <= 0f) return rangeStart
//		if (x >= width) return rangeEnd
//		return rangeStart + chars.sortedInsertionIndex(x, { o1: Float, char: TfChar ->
//			o1.compareTo(char.x + char.width * 0.5f)
//		}, matchForwards = true)
		return 0
	}

	override fun getBoundsAt(index: Int, out: Rectangle) {
//		val char = chars[index - rangeStart]
//		val glyph = char.glyph ?: return out.clear()
//		out.x = char.x
//		out.y = 0f
//		out.width = glyph.advanceX.toFloat()
//		out.height = glyph.lineHeight.toFloat()
	}

	override fun updateConcatenatedColorTransform() {
		super.updateConcatenatedColorTransform()
		for (i in 0.._elements.lastIndex) {
			_elements[i].setColorTint(_concatenatedColorTint)
		}
	}

	override fun buildText(stringBuilder: StringBuilder) {
		iterateParts {
			val char = it.char
			if (char != null)
				stringBuilder.append(char)
		}
	}

	private val glState = inject(GlState)

	override fun draw() {
		glState.camera(camera)
		iterateParts {
			it.render(glState)
		}
		super.draw()
	}

	companion object {
		private val linesPool = ClearableObjectPool { LineInfo() }
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
class TfChar(
		override var char: Char,
		private val style: TfCharStyle
) : SpanPart {

	override var parent: TextSpanElement? = null

	val glyph: Glyph?
		get() {
			return style.font?.getGlyphSafe(char)
		}

	override var x: Float = 0f
	override var y: Float = 0f

	override val xAdvance: Float
		get() = (glyph?.advanceX?.toFloat() ?: 0f)

	override val lineHeight: Float
		get() = (parent?.font?.data?.lineHeight?.toFloat() ?: 0f)

	override val baseLine: Float
		get() = (parent?.font?.data?.baseLine?.toFloat() ?: 0f)

	override fun getKerning(next: SpanPart): Float {
		val d = glyph?.data ?: return 0f
		val c = next.char ?: return 0f
		return d.getKerning(c).toFloat()
	}

	private var u = 0f
	private var v = 0f
	private var u2 = 0f
	private var v2 = 0f

	private var visible = true

	/**
	 * A cache of the vertex positions in world space.
	 */
	private val vertexPoints: Array<Vector3> = arrayOf(Vector3(), Vector3(), Vector3(), Vector3())
	private val normal = Vector3()

	private val backgroundVertices: Array<Vector3> = arrayOf(Vector3(), Vector3(), Vector3(), Vector3())

	private var fontColor = Color.BLACK
	private var backgroundColor = Color.CLEAR

	override val clearsLine: Boolean
		get() = char == '\n'
	override val clearsTabstop: Boolean
		get() = char == '\t'
	override val isBreaking: Boolean
		get() = char.isBreaking()
	override val overhangs: Boolean
		get() = char == ' '

	override fun setSelected(value: Boolean) {
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

		visible = charL < rightClip && charT < bottomClip && charR > leftClip && charB > topClip
		if (!visible)
			return


		val bgL = maxOf(leftClip, x)
		val bgT = maxOf(topClip, y)
		val bgR = minOf(rightClip, x + xAdvance)
		val bgB = minOf(bottomClip, y + lineHeight)

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

		if (u == u2 || v == v2)
			return
		if (xAdvance <= 0f || lineHeight <= 0f) return // Nothing to draw
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

		if (glyph.width <= 0f || glyph.height <= 0f) return // Nothing to draw
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
}

