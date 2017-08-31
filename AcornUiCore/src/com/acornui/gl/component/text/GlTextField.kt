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
import com.acornui.collection.ActiveList
import com.acornui.collection.ClearableObjectPool
import com.acornui.collection.freeTo
import com.acornui.collection.indexOfFirst2
import com.acornui.component.*
import com.acornui.component.layout.algorithm.FlowLayoutStyle
import com.acornui.component.layout.algorithm.LineInfo
import com.acornui.component.layout.algorithm.LineInfoRo
import com.acornui.component.style.*
import com.acornui.component.text.CharStyle
import com.acornui.component.text.TextField
import com.acornui.core.TreeWalk
import com.acornui.core.childWalkLevelOrder
import com.acornui.core.cursor.RollOverCursor
import com.acornui.core.cursor.StandardCursors
import com.acornui.core.di.Owned
import com.acornui.core.di.inject
import com.acornui.core.graphics.BlendMode
import com.acornui.core.input.interaction.DragInteraction
import com.acornui.core.input.interaction.dragAttachment
import com.acornui.core.selection.Selectable
import com.acornui.core.selection.SelectionManager
import com.acornui.core.selection.SelectionRange
import com.acornui.gl.core.GlState
import com.acornui.gl.core.pushQuadIndices
import com.acornui.graphics.Color
import com.acornui.graphics.ColorRo
import com.acornui.math.Bounds
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

	override final val flowStyle = bind(FlowLayoutStyle())
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

class TextSpanElement : ElementParent<SpanPart>, Styleable {

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

	var parent: Container? = null

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

	operator fun String?.unaryPlus() {
		if (this == null) return
		for (i in 0..length - 1) {
			_elements.add(TfChar(this[i], tfCharStyle))
		}
		parent?.invalidate(bubblingFlags)
	}

	operator fun Char?.unaryPlus() {
		if (this == null) return
		+TfChar(this, tfCharStyle)
	}

	operator fun SpanPart.unaryPlus() {
		_elements.add(this)
		parent?.invalidate(bubblingFlags)
	}

	operator fun SpanPart.unaryMinus() {
		_elements.remove(this)
		parent?.invalidate(bubblingFlags)
	}

	override fun <S : SpanPart> addElement(index: Int, element: S): S {
		_elements.add(index, element)
		parent?.invalidate(bubblingFlags)
		return element
	}

	override fun removeElement(index: Int): SpanPart {
		val element = _elements.removeAt(index)
		parent?.invalidate(bubblingFlags)
		return element
	}

	override fun clearElements(dispose: Boolean) {
		_elements.clear()
		parent?.invalidate(bubblingFlags)
	}

	fun validateStyles() {
		CascadingStyleCalculator.calculate(charStyle, this)
		tfCharStyle.font = BitmapFontRegistry.getFont(charStyle)
	}

	fun setColorTint(concatenatedColorTint: ColorRo) {
		tfCharStyle.selectedTextColorTint.set(concatenatedColorTint).mul(charStyle.selectedColorTint)
		tfCharStyle.selectedBackgroundColor.set(concatenatedColorTint).mul(charStyle.selectedBackgroundColor)
		tfCharStyle.textColorTint.set(concatenatedColorTint).mul(charStyle.colorTint)
		tfCharStyle.backgroundColor.set(concatenatedColorTint).mul(charStyle.backgroundColor)
	}
}

interface SpanPart {

	val char: Char?

	var x: Float
	var y: Float
	val width: Float
	val height: Float
	val lineHeight: Float
	val advanceX: Float

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
	val overhangs: Boolean

	fun setSelected(value: Boolean)
	fun validateVertices(transform: Matrix4Ro, rightClip: Float, bottomClip: Float)
	fun render(glState: GlState)
}

private fun span(init: ComponentInit<TextSpanElement>): TextSpanElement {
	val s = TextSpanElement()
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

	val flowStyle = bind(FlowLayoutStyle())

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

	override val size: Int
		get() {
			var c = 0
			for (i in 0.._elements.lastIndex) {
				c += _elements[i].elements.size
			}
			return c
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
		for (i in 0.._elements.lastIndex) {
			val e = _elements[i]
			for (j in 0..e.elements.lastIndex) {
				inner(e.elements[j])
			}
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
		val childAvailableWidth: Float? = padding.reduceWidth(explicitWidth)
		val childAvailableHeight: Float? = padding.reduceHeight(explicitHeight)

		_lines.freeTo(linesPool)
		// Create lines
		var x = 0f
		var maxHeight = 0f
		var line = linesPool.obtain()
		var index = 0
		for (i in 0.._elements.lastIndex) {
			val e = _elements[i].elements
			for (j in 0..e.lastIndex) {
				val part = e[j]

				maxHeight = maxOf(maxHeight, part.lineHeight)
				part.x = x
				x += part.advanceX
				if (j < e.lastIndex) {
					x += part.getKerning(e[j + 1])
				}
			}
		}

		var measuredW = 0f

		iterateParts {
			it.y = maxHeight - it.lineHeight
		}
		out.width = x
		out.height = maxHeight
	}

//	private fun positionLine(line: LineInfoRo, availableWidth: Float?, elements: List<LayoutElement>) {
//		val hGap: Float
//		val xOffset: Float
//		if (availableWidth != null) {
//			val remainingSpace = availableWidth - line.width
//			xOffset = when (flowStyle.horizontalAlign) {
//				FlowHAlign.LEFT -> 0f
//				FlowHAlign.CENTER -> (remainingSpace * 0.5f).round()
//				FlowHAlign.RIGHT -> remainingSpace
//				FlowHAlign.JUSTIFY -> 0f
//			}
//
//			if (flowStyle.horizontalAlign == FlowHAlign.JUSTIFY &&
//					line.endIndex != line.startIndex &&
//					line.endIndex != elements.size &&
//					!elements[line.endIndex - 1].clearsLine() &&
//					!elements[line.endIndex].startsNewLine()) {
//				// Apply JUSTIFY spacing if this is not the last line, and there are more than one elements.
//				hGap = (flowStyle.horizontalGap + remainingSpace / (line.endIndex - line.startIndex - 1)).floor()
//			} else {
//				hGap = flowStyle.horizontalGap
//			}
//		} else {
//			xOffset = 0f
//			hGap = flowStyle.horizontalGap
//		}
//
//		var x = flowStyle.padding.left
//		for (j in line.startIndex..line.endIndex - 1) {
//			val element = elements[j]
//
//			val layoutData = element.layoutData as FlowLayoutData?
//			val yOffset = when (layoutData?.verticalAlign ?: flowStyle.verticalAlign) {
//				FlowVAlign.TOP -> 0f
//				FlowVAlign.MIDDLE -> MathUtils.round((line.height - element.height) * 0.5f).toFloat()
//				FlowVAlign.BOTTOM -> (line.height - element.height)
//				FlowVAlign.BASELINE -> (line.baseline - (layoutData?.baseline ?: element.height))
//			}
//
//			element.moveTo(x + xOffset, line.y + yOffset)
//			x += element.width + hGap
//
//			if (layoutData?.clearsTabstop ?: false) {
//				val tabIndex = MathUtils.floor(x / flowStyle.tabSize) + 1
//				x = tabIndex * flowStyle.tabSize
//			}
//		}
//	}


	//---------------------

//	override fun layout(explicitWidth: Float?, explicitHeight: Float?, elements: List<LayoutElement>, out: Bounds) {
//		val padding = flowStyle.padding
//		val childAvailableWidth: Float? = padding.reduceWidth(explicitWidth)
//		val childAvailableHeight: Float? = padding.reduceHeight(explicitHeight)
//
//		var measuredW: Float = 0f
//		_lines.freeTo(linesPool)
//		var line = linesPool.obtain()
//		var x = 0f
//		var y = 0f
//		var previousElement: LayoutElement? = null
//
//		for (i in 0..elements.lastIndex) {
//			val element = elements[i]
//			val layoutData = element.layoutData as FlowLayoutData?
//
////			element.setSize(layoutData?.getPreferredWidth(childAvailableWidth), layoutData?.getPreferredHeight(childAvailableHeight))
//
//			val w = element.width
//			val h = element.height
//			val doesOverhang = layoutData?.overhangs ?: false
//
//			if (flowStyle.multiline && i > line.startIndex &&
//					(previousElement!!.clearsLine() || element.startsNewLine() ||
//							(childAvailableWidth != null && !doesOverhang && x + w > childAvailableWidth))) {
//				line.endIndex = i
//				positionLine(line, childAvailableWidth, elements)
//				_lines.add(line)
//				x = 0f
//				y += line.height + flowStyle.verticalGap
//				// New line
//				line = linesPool.obtain()
//				line.startIndex = i
//				line.y = y + padding.top
//			}
//			x += w
//
//			if (layoutData?.clearsTabstop ?: false) {
//				val tabIndex = MathUtils.floor(x / flowStyle.tabSize) + 1
//				x = tabIndex * flowStyle.tabSize
//			}
//
//			if (!doesOverhang) {
//				line.width = x
//				if (x > measuredW) measuredW = x
//			}
//			x += flowStyle.horizontalGap
//			if (h > line.height) line.height = h
//			val baseline = layoutData?.baseline ?: h
//			if (baseline > line.baseline) line.baseline = baseline
//			previousElement = element
//		}
//		line.endIndex = elements.size
//		positionLine(line, childAvailableWidth, elements)
//		_lines.add(line)
//		measuredW += padding.left + padding.right
//		if (measuredW > out.width) out.width = measuredW // Use the measured width if it is larger than the explicit.
//		val measuredH = y + line.height + padding.top + padding.bottom
//		if (measuredH > out.height) out.height = measuredH
//	}
//
//	/**
//	 * Adjusts the elements within a line to apply the horizontal and vertical alignment.
//	 */
//	private fun positionLine(line: LineInfoRo, availableWidth: Float?, elements: List<LayoutElement>) {
//		if (line.startIndex > line.endIndex) return
//
//		val hGap: Float
//		val xOffset: Float
//		if (availableWidth != null) {
//			val remainingSpace = availableWidth - line.width
//			xOffset = when (flowStyle.horizontalAlign) {
//				FlowHAlign.LEFT -> 0f
//				FlowHAlign.CENTER -> (remainingSpace * 0.5f).round()
//				FlowHAlign.RIGHT -> remainingSpace
//				FlowHAlign.JUSTIFY -> 0f
//			}
//
//			if (flowStyle.horizontalAlign == FlowHAlign.JUSTIFY &&
//					line.endIndex != line.startIndex &&
//					line.endIndex != elements.size &&
//					!elements[line.endIndex - 1].clearsLine() &&
//					!elements[line.endIndex].startsNewLine()) {
//				// Apply JUSTIFY spacing if this is not the last line, and there are more than one elements.
//				hGap = (flowStyle.horizontalGap + remainingSpace / (line.endIndex - line.startIndex - 1)).floor()
//			} else {
//				hGap = flowStyle.horizontalGap
//			}
//		} else {
//			xOffset = 0f
//			hGap = flowStyle.horizontalGap
//		}
//
//		var x = flowStyle.padding.left
//		for (j in line.startIndex..line.endIndex - 1) {
//			val element = elements[j]
//
//			val layoutData = element.layoutData as FlowLayoutData?
//			val yOffset = when (layoutData?.verticalAlign ?: flowStyle.verticalAlign) {
//				FlowVAlign.TOP -> 0f
//				FlowVAlign.MIDDLE -> MathUtils.round((line.height - element.height) * 0.5f).toFloat()
//				FlowVAlign.BOTTOM -> (line.height - element.height)
//				FlowVAlign.BASELINE -> (line.baseline - (layoutData?.baseline ?: element.height))
//			}
//
//			element.moveTo(x + xOffset, line.y + yOffset)
//			x += element.width + hGap
//
//			if (layoutData?.clearsTabstop ?: false) {
//				val tabIndex = MathUtils.floor(x / flowStyle.tabSize) + 1
//				x = tabIndex * flowStyle.tabSize
//			}
//		}
//	}
//
//	private fun LayoutElement.clearsLine(): Boolean {
//		return (layoutData as FlowLayoutData?)?.clearsLine ?: false
//	}
//
//	private fun LayoutElement.startsNewLine(): Boolean {
//		return (layoutData as FlowLayoutData?)?.startsNewLine ?: false
//	}

	//---------------------


	override fun setSelection(rangeStart: Int, selection: List<SelectionRange>) {
		var index = rangeStart
		iterateParts {
			val selected = selection.indexOfFirst2 { it.contains(index++) } != -1
			it.setSelected(selected)
		}
	}

	private fun updateVertices() {
		val rightClip = explicitWidth ?: Float.MAX_VALUE
		val bottomClip = explicitHeight ?: Float.MAX_VALUE
		iterateParts {
			it.validateVertices(concatenatedTransform, rightClip, bottomClip)
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

	val glyph: Glyph?
		get() {
			return style.font?.getGlyphSafe(char)
		}

	override var x: Float = 0f
	override var y: Float = 0f
	override val width: Float
		get() = glyph?.width?.toFloat() ?: 0f
	override val height: Float
		get() = glyph?.height?.toFloat() ?: 0f
	override val lineHeight: Float
		get() = glyph?.lineHeight?.toFloat() ?: 0f

	override val advanceX: Float
		get() = (glyph?.advanceX?.toFloat() ?: 0f)

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
		get() = char.isWhitespace()

	override fun setSelected(value: Boolean) {
		if (value) {
			fontColor = style.selectedTextColorTint
			backgroundColor = style.selectedBackgroundColor
		} else {
			fontColor = style.textColorTint
			backgroundColor = style.backgroundColor
		}
	}

	override fun validateVertices(transform: Matrix4Ro, rightClip: Float, bottomClip: Float) {
		val x = x
		val y = y
		val glyph = glyph ?: return

		val bgL = maxOf(0f, x)
		val bgT = maxOf(0f, y)
		val bgR = minOf(rightClip, x + glyph.advanceX)
		val bgB = minOf(bottomClip, y + glyph.lineHeight)

		visible = bgL < bgR && bgT < bgB
		if (!visible)
			return

		var charL = glyph.offsetX + x
		var charT = glyph.offsetY + y
		var charR = charL + glyph.width
		var charB = charT + glyph.height

		val region = glyph.region
		val textureW = glyph.texture.width.toFloat()
		val textureH = glyph.texture.height.toFloat()

		var regionX = region.x.toFloat()
		var regionY = region.y.toFloat()
		var regionR = region.right.toFloat()
		var regionB = region.bottom.toFloat()

		if (charL < 0f) {
			if (glyph.isRotated) regionY -= charL
			else regionX -= charL
			charL = 0f
		}
		if (charT < 0f) {
			if (glyph.isRotated) regionX -= charT
			else regionY -= charT
			charT = 0f
		}
		if (charR > rightClip) {
			if (glyph.isRotated) regionB -= (charR - rightClip)
			else regionR -= charR - rightClip
			charR = rightClip
		}
		if (charB > bottomClip) {
			if (glyph.isRotated) regionR -= (charB - bottomClip)
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
		if (glyph.advanceX <= 0f || glyph.lineHeight <= 0f) return // Nothing to draw
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

