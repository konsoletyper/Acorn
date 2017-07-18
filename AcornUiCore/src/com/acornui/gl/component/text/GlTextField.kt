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

import com.acornui.component.ContainerImpl
import com.acornui.component.UiComponent
import com.acornui.component.ValidationFlags
import com.acornui.component.invalidateLayout
import com.acornui.component.layout.BasicLayoutElement
import com.acornui.component.layout.BasicLayoutElementImpl
import com.acornui.component.layout.algorithm.FlowLayout
import com.acornui.component.layout.algorithm.FlowLayoutData
import com.acornui.component.layout.algorithm.FlowLayoutStyle
import com.acornui.component.layout.algorithm.LayoutDataProvider
import com.acornui.component.text.CharStyle
import com.acornui.component.text.TextField
import com.acornui.component.text.TextSelection
import com.acornui.core.cursor.RollOverCursor
import com.acornui.core.cursor.StandardCursors
import com.acornui.core.di.Owned
import com.acornui.core.di.inject
import com.acornui.core.di.own
import com.acornui.core.focus.Focusable
import com.acornui.core.graphics.BlendMode
import com.acornui.gl.core.GlState
import com.acornui.gl.core.pushQuadIndices
import com.acornui.graphics.Color
import com.acornui.math.Bounds
import com.acornui.math.Matrix4Ro
import com.acornui.math.Vector3
import com.acornui.string.isBreaking


/**
 * A TextField implementation for the OpenGL back-ends.
 * @author nbilyk
 */
@Suppress("LeakingThis")
open class GlTextField(owner: Owned) : ContainerImpl(owner), TextField, Focusable {

	override var focusEnabled = false
	override var focusOrder = 0f
	override var highlight: UiComponent? by createSlot()

	override final val charStyle = bind(CharStyle())
	override final val flowStyle = bind(FlowLayoutStyle())

	override final val selection = own(TextSelection())

	private val fontStyle = FontStyle("[Unknown]", 12)
	private val glState = inject(GlState)

	private var _textContent: String? = null

	protected val tfParts = ArrayList<TfPart>()
	protected val tfCharStyle = TfCharStyle()

	protected var _selectionCursor: RollOverCursor? = null

	init {
		styleTags.add(TextField)
		BitmapFontRegistry.fontRegistered.add(this::fontRegisteredHandler)

		watch(charStyle) {
			fontStyle.face = it.face
			fontStyle.size = it.size
			fontStyle.bold = it.bold
			fontStyle.italic = it.italic
			refreshCursor()
			font = BitmapFontRegistry.getFont(fontStyle)
		}

		validation.addNode(TextValidationFlags.COMPONENTS, 0, ValidationFlags.LAYOUT, this::updateTfParts)
		validation.addNode(TextValidationFlags.SELECTION, TextValidationFlags.COMPONENTS, 0, this::updateSelection)
		validation.addNode(TextValidationFlags.VERTICES, TextValidationFlags.SELECTION or TextValidationFlags.COMPONENTS or ValidationFlags.LAYOUT or ValidationFlags.CONCATENATED_TRANSFORM or ValidationFlags.STYLES, 0, this::updateVertices)
		validation.addNode(TextValidationFlags.COLOR, ValidationFlags.CONCATENATED_COLOR_TRANSFORM or ValidationFlags.STYLES, 0, this::updateTextColor)

		selection.changed.add { invalidate(TextValidationFlags.SELECTION) }
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

	private var font: BitmapFont?
		get() = tfCharStyle.font
		set(value) {
			tfCharStyle.font = value
			for (i in 0..tfParts.lastIndex) {
				tfParts[i].invalidateLayout()
			}
			invalidateLayout()
		}

	override var text: String?
		get() = _textContent
		set(value) {
			if (_textContent == value) return
			_textContent = value
			invalidate(TextValidationFlags.COMPONENTS)
		}

	override var htmlText: String?
		get() = ""
		set(value) {
		}

	/**
	 * A Font has finished loading, check if it is one we're waiting for.
	 */
	private fun fontRegisteredHandler(registeredFont: BitmapFont) {
		if (fontStyle == registeredFont.data.fontStyle) {
			font = registeredFont
		}
	}

	protected open fun updateTfParts() {
		tfParts.clear()

		val text = _textContent ?: return
		if (text.isEmpty()) return
		val chars = ArrayList<TfChar>()
		var prevChar: Char? = null
		for (i in 0..text.lastIndex) {
			val char = text[i]
			val wasSpace = prevChar == ' '
			val isSpace = char == ' '
			if (isSpace != wasSpace) flushWord(chars)
			chars.add(TfChar(char, i, tfCharStyle))

			if (char.isBreaking()) {
				flushWord(chars)
			}
			prevChar = char
		}
		flushWord(chars)
	}

	protected fun flushWord(chars: ArrayList<TfChar>) {
		if (chars.isEmpty()) return
		val word = TfWord(chars.toTypedArray())

		val lastChar = chars.last().char
		if (lastChar == '\n') {
			word.layout {
				clearsLine = true
			}
		} else if (lastChar == '\t') {
			word.layout {
				clearsTabstop = true
			}
		} else if (lastChar == ' ') {
			word.layout {
				overhangs = true
			}
		}
		tfParts.add(word)
		chars.clear()
	}

	protected open fun updateSelection() {
		for (i in 0..tfParts.lastIndex) {
			tfParts[i].validateSelection(selection)
		}
	}

	protected open fun updateVertices() {
		for (i in 0..tfParts.lastIndex) {
			tfParts[i].validateVertices(concatenatedTransform, explicitWidth ?: Float.MAX_VALUE, explicitHeight ?: Float.MAX_VALUE)
		}
	}

	protected open fun updateTextColor() {
		tfCharStyle.selectedTextColorTint.set(concatenatedColorTint).mul(charStyle.selectedColorTint)
		tfCharStyle.selectedBackgroundColor.set(concatenatedColorTint).mul(charStyle.selectedBackgroundColor)
		tfCharStyle.textColorTint.set(concatenatedColorTint).mul(charStyle.colorTint)
		tfCharStyle.backgroundColor.set(concatenatedColorTint).mul(charStyle.backgroundColor)
	}

	override fun updateLayout(explicitWidth: Float?, explicitHeight: Float?, out: Bounds) {
		FlowLayout.basicLayout(explicitWidth, explicitHeight, tfParts, flowStyle, out)
		val lineHeight = tfCharStyle.font?.data?.lineHeight?.toFloat() ?: 0f
		if (out.height < lineHeight) out.height = lineHeight
		if (explicitWidth != null) out.width = explicitWidth
		if (explicitHeight != null) out.height = explicitHeight
		highlight?.setSize(out.width, out.height)
	}

	override fun draw() {
		glState.camera(camera)
		for (i in 0..tfParts.lastIndex) {
			tfParts[i].render(glState)
		}
	}

	/**
	 * Constructs a new layout data object and applies it to the receiver layout element.
	 */
	protected infix fun <R : BasicLayoutElement> R.layout(init: FlowLayoutData.() -> Unit): R {
		val layoutData = FlowLayoutData()
		layoutData.init()
		this.layoutData = layoutData
		return this
	}

	override fun dispose() {
		super.dispose()
		BitmapFontRegistry.fontRegistered.remove(this::fontRegisteredHandler)
		_selectionCursor?.dispose()
		_selectionCursor = null
	}
}

private object TextValidationFlags {
	const val COMPONENTS = 1 shl 16
	const val SELECTION = 1 shl 17
	const val VERTICES = 1 shl 18
	const val COLOR = 1 shl 19
}

class TfCharStyle {
	var font: BitmapFont? = null
	val selectedTextColorTint: Color = Color()
	val selectedBackgroundColor: Color = Color()
	val textColorTint: Color = Color()
	val backgroundColor: Color = Color()
}

interface TfPart : BasicLayoutElement {

	/**
	 * The start index of this section (inclusive)
	 */
	val rangeStart: Int

	/**
	 * The end index of this section (exclusive)
	 */
	val rangeEnd: Int

	fun invalidateLayout()

	fun validateSelection(selection: TextSelection)

	fun validateVertices(transform: Matrix4Ro, rightClip: Float, bottomClip: Float)

	fun render(glState: GlState)
}

class TfContainer : BasicLayoutElementImpl(), TfPart, LayoutDataProvider<FlowLayoutData> {

	override fun createLayoutData(): FlowLayoutData = FlowLayoutData()

	val flowStyle = FlowLayoutStyle()
	val children = ArrayList<TfPart>()

	override val rangeStart: Int
		get() = if (children.isEmpty()) -1 else children.first().rangeStart

	override val rangeEnd: Int
		get() = if (children.isEmpty()) 0 else children.last().rangeEnd

	override fun validateSelection(selection: TextSelection) {
		for (i in 0..children.lastIndex) {
			children[i].validateSelection(selection)
		}
	}

	override fun updateLayout(width: Float?, height: Float?, out: Bounds) {
		FlowLayout.basicLayout(width, height, children, flowStyle, out)
	}

	override fun validateVertices(transform: Matrix4Ro, rightClip: Float, bottomClip: Float) {
		for (i in 0..children.lastIndex) {
			children[i].validateVertices(transform, rightClip, bottomClip)
		}
	}

	override fun render(glState: GlState) {
		for (i in 0..children.lastIndex) {
			children[i].render(glState)
		}
	}
}


/**
 * An unbreakable segment of characters in a [GlTextField].
 */
class TfWord(
		val chars: Array<TfChar>
) : BasicLayoutElementImpl(), TfPart {

	override val rangeStart: Int
		get() = chars.first().index

	override val rangeEnd: Int
		get() = chars.last().index + 1

	override fun updateLayout(width: Float?, height: Float?, out: Bounds) {
		var x = 0
		var maxHeight = 0
		for (i in 0..chars.lastIndex) {
			val char = chars[i]
			val glyph = char.glyph ?: continue
			maxHeight = maxOf(maxHeight, glyph.lineHeight)
			char.x = x
			x += glyph.advanceX
			if (i < chars.lastIndex) {
				x += glyph.data.getKerning(chars[i + 1].char)
			}
		}
		for (i in 0..chars.lastIndex) {
			val char = chars[i]
			val glyph = char.glyph ?: continue
			char.y = (maxHeight - glyph.lineHeight)
		}
		out.width = x.toFloat()
		out.height = maxHeight.toFloat()
	}

	override fun validateSelection(selection: TextSelection) {
		for (i in 0..chars.lastIndex) {
			chars[i].validateSelection(selection)
		}
	}

	override fun validateVertices(transform: Matrix4Ro, rightClip: Float, bottomClip: Float) {
		for (i in 0..chars.lastIndex) {
			chars[i].validateVertices(transform, x, y, rightClip, bottomClip)
		}
	}

	override fun render(glState: GlState) {
		for (i in 0..chars.lastIndex) {
			chars[i].render(glState)
		}
	}
}

/**
 * Represents a single character, typically within a [TfWord].
 */
class TfChar(
		val char: Char,
		var index: Int,
		val style: TfCharStyle
) {

	val glyph: Glyph?
		get() {
			return style.font?.getGlyphSafe(char)
		}

	var x: Int = 0
	var y: Int = 0

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

	fun validateSelection(selection: TextSelection) {
		if (selection.inRange(index)) {
			fontColor = style.selectedTextColorTint
			backgroundColor = style.selectedBackgroundColor
		} else {
			fontColor = style.textColorTint
			backgroundColor = style.backgroundColor
		}
	}

	fun validateVertices(transform: Matrix4Ro, wordX: Float, wordY: Float, rightClip: Float, bottomClip: Float) {
		val glyph = glyph ?: return

		val bgL = maxOf(0f, x + wordX)
		val bgT = maxOf(0f, y + wordY)
		val bgR = minOf(rightClip, x + wordX + glyph.advanceX)
		val bgB = minOf(bottomClip, y + wordY + glyph.lineHeight)

		visible = bgL < bgR && bgT < bgB
		if (!visible)
			return

		var charL = x + glyph.offsetX + wordX
		var charT = y + glyph.offsetY + wordY
		var charR = charL + glyph.width
		var charB = charT + glyph.height

		val region = glyph.region
		val textureW = glyph.texture.width().toFloat()
		val textureH = glyph.texture.height().toFloat()

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
			if (glyph.isRotated) regionX -= charL
			else regionY -= charL
			charT = 0f
		}
		if (charR > rightClip) {
			if (glyph.isRotated) regionB -= (charR - rightClip)
			else regionR -= (charR - rightClip)
			charR = rightClip
		}
		if (charB > bottomClip) {
			if (glyph.isRotated) regionR -= (charB - bottomClip)
			else regionB -= (charB - bottomClip)
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

	fun render(glState: GlState) {
		if (!visible) return
		val glyph = glyph ?: return
		val batch = glState.batch
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

