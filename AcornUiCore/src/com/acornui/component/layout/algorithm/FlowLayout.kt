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

package com.acornui.component.layout.algorithm

import com.acornui.collection.Clearable
import com.acornui.component.ComponentInit
import com.acornui.component.layout.BasicLayoutElement
import com.acornui.component.layout.LayoutContainerImpl
import com.acornui.component.layout.LayoutElement
import com.acornui.component.layout.SizeConstraints
import com.acornui.component.style.StyleBase
import com.acornui.component.style.StyleType
import com.acornui.core.di.Owned
import com.acornui.core.floor
import com.acornui.math.Bounds
import com.acornui.math.MathUtils
import com.acornui.math.Pad
import com.acornui.math.PadRo

/**
 * A layout where the elements are placed left to right, then wraps before reaching the explicit width of the container.
 */
object FlowLayout : LayoutAlgorithm<FlowLayoutStyle, FlowLayoutData>, BasicLayoutAlgorithm<FlowLayoutStyle, FlowLayoutData> {

	private val line = LineInfo()

	override fun calculateSizeConstraints(elements: List<LayoutElement>, props: FlowLayoutStyle, out: SizeConstraints) {
		val padding = props.padding
		var minWidth = 0f
		for (i in 0..elements.lastIndex) {
			minWidth = maxOf(minWidth, elements[i].minWidth ?: 0f)
		}
		out.width.min = minWidth + padding.left + padding.right
	}

	override fun layout(explicitWidth: Float?, explicitHeight: Float?, elements: List<LayoutElement>, props: FlowLayoutStyle, out: Bounds) = basicLayout(explicitWidth, explicitHeight, elements, props, out)

	override fun basicLayout(explicitWidth: Float?, explicitHeight: Float?, elements: List<BasicLayoutElement>, props: FlowLayoutStyle, out: Bounds) {
		val padding = props.padding
		val childAvailableWidth: Float? = padding.reduceWidth(explicitWidth)
		val childAvailableHeight: Float? = padding.reduceHeight(explicitHeight)

		var measuredW: Float = 0f
		line.clear()
		var x = 0f
		var y = 0f
		var previousChild: BasicLayoutElement? = null

		val lastIndex = elements.lastIndex
		for (i in 0..lastIndex) {
			val child = elements[i]
			val layoutData = child.layoutData as FlowLayoutData?
			child.setSize(layoutData?.getPreferredWidth(childAvailableWidth), layoutData?.getPreferredHeight(childAvailableHeight))
			if (childAvailableWidth != null && child.width > childAvailableWidth) {
				child.width(childAvailableWidth)
			}
			val w = child.width
			val h = child.height
			val doesOverhang = (layoutData?.overhangs ?: false)

			if (props.multiline && i > line.startIndex && (previousChild!!.clearsLine() ||
					child.startsNewLine() ||
					(childAvailableWidth != null && !doesOverhang && x + w > childAvailableWidth))) {
				// New line
				line.endIndex = i - 1
				positionLine(line, childAvailableWidth, props, elements)
				x = 0f
				y += line.height + props.verticalGap
				line.width = 0f
				line.height = 0f
				line.baseline = 0f
				line.startIndex = i
			}
			child.moveTo(padding.left + x, padding.top + y)
			x += w

			if (layoutData?.clearsTabstop ?: false) {
				val tabIndex = MathUtils.floor(x / props.tabSize) + 1
				x = tabIndex * props.tabSize
			}

			if (!doesOverhang) {
				line.width = x
				if (x > measuredW) measuredW = x
			}
			x += props.horizontalGap
			if (h > line.height) line.height = h
			val baseline = layoutData?.baseline ?: h
			if (baseline > line.baseline) line.baseline = baseline
			previousChild = child
		}
		line.endIndex = lastIndex
		positionLine(line, childAvailableWidth, props, elements)
		measuredW += padding.left + padding.right
		if (measuredW > out.width) out.width = measuredW // Use the measured width if it is larger than the explicit.
		val measuredH = y + line.height + padding.top + padding.bottom
		if (measuredH > out.height) out.height = measuredH
	}

	/**
	 * Adjusts the elements within a line to apply the horizontal and vertical alignment.
	 */
	private fun positionLine(line: LineInfo, availableWidth: Float?, props: FlowLayoutStyle, elements: List<BasicLayoutElement>) {
		if (line.startIndex > line.endIndex) return

		if (availableWidth != null) {
			val remainingSpace = availableWidth - line.width
			val xOffset = when (props.horizontalAlign) {
				FlowHAlign.LEFT -> 0f
				FlowHAlign.CENTER -> MathUtils.round(remainingSpace * 0.5f).toFloat()
				FlowHAlign.RIGHT -> remainingSpace
				FlowHAlign.JUSTIFY -> 0f
			}

			if (props.horizontalAlign == FlowHAlign.JUSTIFY &&
					line.endIndex != line.startIndex &&
					line.endIndex != elements.lastIndex &&
					!elements[line.endIndex].clearsLine() &&
					!elements[line.endIndex + 1].startsNewLine()) {
				// Apply JUSTIFY spacing if this is not the last line, and there are more than one elements.
				val gapOffset = remainingSpace / (line.endIndex - line.startIndex)
				for (j in line.startIndex..line.endIndex) {
					val child = elements[j]
					child.x = ((child.x + xOffset + (j - line.startIndex) * gapOffset).floor())
				}
			} else {
				for (j in line.startIndex..line.endIndex) {
					val child = elements[j]
					child.x += xOffset
				}
			}
		}

		for (j in line.startIndex..line.endIndex) {
			val child = elements[j]
			val layoutData = child.layoutData as FlowLayoutData?
			val yOffset = when (layoutData?.verticalAlign ?: props.verticalAlign) {
				FlowVAlign.TOP -> 0f
				FlowVAlign.MIDDLE -> MathUtils.round((line.height - child.height) * 0.5f).toFloat()
				FlowVAlign.BOTTOM -> (line.height - child.height)
				FlowVAlign.BASELINE -> (line.baseline - (layoutData?.baseline ?: child.height))
			}
			if (yOffset != 0f) child.y = (child.y + yOffset)
		}
	}

	override fun createLayoutData(): FlowLayoutData {
		return FlowLayoutData()
	}

	private fun BasicLayoutElement.clearsLine(): Boolean {
		return (layoutData as FlowLayoutData?)?.clearsLine ?: false
	}

	private fun BasicLayoutElement.startsNewLine(): Boolean {
		return (layoutData as FlowLayoutData?)?.display == FlowDisplay.BLOCK
	}
}

class LineInfo : Clearable {
	var startIndex: Int = 0
	var endIndex: Int = 0
	var width: Float = 0f
	var height: Float = 0f
	var baseline: Float = 0f

	override fun clear() {
		startIndex = 0
		endIndex = 0
		width = 0f
		height = 0f
		baseline = 0f
	}
}

class FlowLayoutStyle : StyleBase() {

	override val type = Companion

	var horizontalGap by prop(5f)
	var verticalGap by prop(5f)
	var tabSize by prop(24f)

	/**
	 * The Padding object with left, bottom, top, and right padding.
	 */
	var padding: PadRo by prop(Pad())
	var horizontalAlign by prop(FlowHAlign.LEFT)
	var verticalAlign by prop(FlowVAlign.TOP)
	var multiline by prop(true)

	companion object : StyleType<FlowLayoutStyle>
}

class FlowLayoutData : BasicLayoutData() {

	/**
	 * If true, this element will cause the line to break.
	 */
	var clearsLine by bindable(false)

	/**
	 * True if this layout element can overhang off the edge of the boundaries.
	 */
	var overhangs by bindable(false)

	/**
	 * If true, the tabstop should be cleared after placing this element.
	 */
	var clearsTabstop by bindable(false)

	/**
	 * If set, the vertical align of this element overrides the default of the flow layout algorithm.
	 */
	var verticalAlign: FlowVAlign? by bindable(null)

	/**
	 * @see FlowDisplay
	 */
	var display by bindable(FlowDisplay.INLINE_BLOCK)

	/**
	 * A child whose vertical alignment is [FlowVAlign.BASELINE] will be positioned so that the baseline attribute
	 * will align with the baseline position on its line. If left null, the height will be used.
	 */
	var baseline by bindable<Float?>(null)

}

enum class FlowDisplay {

	/**
	 * Inline-block display elements will not reset a line and will be laid out as a rectangular child.
	 */
	INLINE_BLOCK,

	/**
	 * Inline display elements will have the container's children displayed within the parent FlowLayout.
	 */
	INLINE,

	/**
	 * Block display elements will start on their own line.
	 */
	BLOCK
}


enum class FlowHAlign {
	LEFT,
	CENTER,
	RIGHT,
	JUSTIFY
}

enum class FlowVAlign {
	TOP,
	MIDDLE,
	BOTTOM,
	BASELINE

}

open class FlowLayoutContainer(owner: Owned) : LayoutContainerImpl<FlowLayoutStyle, FlowLayoutData>(owner, FlowLayout, FlowLayoutStyle())

fun Owned.flow(init: ComponentInit<FlowLayoutContainer> = {}): FlowLayoutContainer {
	val flowContainer = FlowLayoutContainer(this)
	flowContainer.init()
	return flowContainer
}