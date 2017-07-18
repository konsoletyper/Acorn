/*
 * Copyright 2016 Nicholas Bilyk
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

package com.acornui.component.layout.algorithm.virtual

import com.acornui.collection.ActiveList
import com.acornui.collection.ObservableList
import com.acornui.component.ComponentInit
import com.acornui.component.ItemRenderer
import com.acornui.component.layout.LayoutElement
import com.acornui.component.layout.DataScroller
import com.acornui.component.layout.HAlign
import com.acornui.component.layout.algorithm.LayoutDataProvider
import com.acornui.component.layout.algorithm.VerticalLayoutData
import com.acornui.core.di.Owned
import com.acornui.core.floor
import com.acornui.math.Bounds
import com.acornui.math.Pad
import com.acornui.signal.Signal0


class VirtualizedVerticalLayout : VirtualLayoutAlgorithm<VerticalLayoutData> {

	override val changed = Signal0()

	override val direction: VirtualDirection = VirtualDirection.VERTICAL

	var gap by bindable(5f)

	/**
	 * If there was an explicit height, this represents the percent of that height out of bounds an element can be
	 * before being recycled.
	 */
	var buffer: Float by bindable(0.15f)

	/**
	 * The Padding object with left, bottom, top, and right padding.
	 */
	var padding by bindable(Pad())
	var horizontalAlign by bindable(HAlign.LEFT)

	override fun getOffset(width: Float, height: Float, element: LayoutElement, index: Int, lastIndex: Int, isReversed: Boolean): Float {
		if (isReversed) {
			return (height - padding.bottom - (element.y + element.height)) / (element.height + gap)
		} else {
			return (element.y - padding.top) / (element.height + gap)
		}
	}

	override fun updateLayoutEntry(explicitWidth: Float?, explicitHeight: Float?, element: LayoutElement, currentIndex: Int, startIndex: Float, lastIndex: Int, previousElement: LayoutElement?, isReversed: Boolean) {
		val childAvailableWidth = padding.reduceWidth(explicitWidth)
		val childAvailableHeight = padding.reduceHeight(explicitHeight)

		// Size the element
		val layoutData = element.layoutData as VerticalLayoutData?
		val w = layoutData?.getPreferredWidth(childAvailableWidth)
		val h = layoutData?.getPreferredHeight(childAvailableHeight)
		element.setSize(w, h)

		// Position the element
		val y: Float
		if (previousElement == null) {
			val startY = (currentIndex - startIndex) * (element.height + gap)
			if (isReversed) {
				y = (childAvailableHeight ?: 0f) - padding.bottom + startY - element.height
			} else {
				y = padding.top + startY
			}
		} else {
			if (isReversed) {
				y = previousElement.y - gap - element.height
			} else {
				y = previousElement.y + previousElement.height + gap
			}
		}

		if (childAvailableWidth == null) {
			element.setPosition(padding.left, y)
		} else {
			when (layoutData?.horizontalAlign ?: horizontalAlign) {
				HAlign.LEFT ->
					element.setPosition(padding.left, y)
				HAlign.CENTER ->
					element.setPosition(padding.left + ((childAvailableWidth - element.width) * 0.5f).floor(), y)
				HAlign.RIGHT ->
					element.setPosition(padding.left + (childAvailableWidth - element.width), y)
			}
		}
	}

	override fun measure(explicitWidth: Float?, explicitHeight: Float?, elements: List<LayoutElement>, out: Bounds) {
		super.measure(explicitWidth, explicitHeight, elements, out)
		out.add(padding.right, padding.bottom)
	}

	override fun shouldShowRenderer(explicitWidth: Float?, explicitHeight: Float?, element: LayoutElement): Boolean {
		if (explicitHeight != null) {
			val bottom = element.y + element.height
			val bufferY = explicitHeight * buffer
			if (bottom < -bufferY ||
					element.y > explicitHeight + bufferY) {
				return false
			}
		}
		return true
	}

	override fun createLayoutData(): VerticalLayoutData = VerticalLayoutData()
}

/**
 * Creates a virtualized data scroller with a vertical layout.
 */
fun <E> Owned.vDataScroller(
		rendererFactory: LayoutDataProvider<VerticalLayoutData>.() -> ItemRenderer<E>,
		data: ObservableList<E> = ActiveList(ArrayList()),
		init: ComponentInit<DataScroller<E, VerticalLayoutData, VirtualizedVerticalLayout>> = {}
): DataScroller<E, VerticalLayoutData, VirtualizedVerticalLayout> {
	val layoutAlgorithm = VirtualizedVerticalLayout()
	val c = DataScroller(this, rendererFactory, layoutAlgorithm, data)
	c.init()
	return c
}