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
import com.acornui.component.layout.DataScroller
import com.acornui.component.layout.LayoutElement
import com.acornui.component.layout.ListItemRenderer
import com.acornui.component.layout.VAlign
import com.acornui.component.layout.algorithm.HorizontalLayoutData
import com.acornui.component.layout.algorithm.LayoutDataProvider
import com.acornui.core.di.Owned
import com.acornui.math.Bounds
import com.acornui.math.Pad
import com.acornui.signal.Signal0


class VirtualHorizontalLayout : VirtualLayoutAlgorithm<HorizontalLayoutData> {

	override val changed = Signal0()

	override val direction: VirtualDirection = VirtualDirection.HORIZONTAL

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
	var verticalAlign by bindable(VAlign.BOTTOM)

	override fun getOffset(width: Float, height: Float, element: LayoutElement, index: Int, lastIndex: Int, isReversed: Boolean): Float {
		if (isReversed) {
			return (width - padding.right - (element.x + element.width)) / (element.width + gap)
		} else {
			return (element.x - padding.bottom) / (element.width + gap)
		}
	}

	override fun updateLayoutEntry(explicitWidth: Float?, explicitHeight: Float?, element: LayoutElement, currentIndex: Int, startIndex: Float, lastIndex: Int, previousElement: LayoutElement?, isReversed: Boolean) {
		val childAvailableWidth = padding.reduceWidth(explicitWidth)
		val childAvailableHeight = padding.reduceHeight(explicitHeight)

		// Size the element
		val layoutData = element.layoutData as HorizontalLayoutData?
		val w = layoutData?.getPreferredWidth(childAvailableWidth)
		val h = layoutData?.getPreferredHeight(childAvailableHeight)
		element.setSize(w, h)

		// Position the element
		val x: Float
		if (previousElement == null) {
			val startX = (currentIndex - startIndex) * (element.width + gap)
			if (isReversed) {
				x = (childAvailableWidth ?: 0f) - padding.right + startX - element.width
			} else {
				x = padding.left + startX
			}
		} else {
			if (isReversed) {
				x = previousElement.x - gap - element.width
			} else {
				x = previousElement.x + previousElement.width + gap
			}
		}

		if (childAvailableHeight == null) {
			element.setPosition(x, padding.top)
		} else {
			when (layoutData?.verticalAlign ?: verticalAlign) {
				VAlign.TOP ->
					element.setPosition(x, padding.top)
				VAlign.MIDDLE ->
					element.setPosition(x, padding.top + (childAvailableHeight - element.height) * 0.5f)
				VAlign.BOTTOM ->
					element.setPosition(x, padding.top + (childAvailableHeight - element.height))
			}
		}
	}

	override fun measure(explicitWidth: Float?, explicitHeight: Float?, elements: List<LayoutElement>, out: Bounds) {
		super.measure(explicitWidth, explicitHeight, elements, out)
		out.add(padding.right, padding.bottom)
	}

	override fun shouldShowRenderer(explicitWidth: Float?, explicitHeight: Float?, element: LayoutElement): Boolean {
		if (explicitWidth != null) {
			val right = element.x + element.width
			val bufferX = explicitWidth * buffer
			if (right < -bufferX ||
					element.x > explicitWidth + bufferX) {
				return false
			}
		}
		return true
	}

	override fun createLayoutData(): HorizontalLayoutData = HorizontalLayoutData()
}

/**
 * Creates a virtualized data scroller with a horizontal layout.
 */
fun <E> Owned.hDataScroller(
		rendererFactory: LayoutDataProvider<HorizontalLayoutData>.() -> ListItemRenderer<E>,
		data: ObservableList<E> = ActiveList(ArrayList()),
		init: ComponentInit<DataScroller<E, HorizontalLayoutData, VirtualHorizontalLayout>> = {}
): DataScroller<E, HorizontalLayoutData, VirtualHorizontalLayout> {
	val layoutAlgorithm = VirtualHorizontalLayout()
	val c = DataScroller(this, rendererFactory, layoutAlgorithm, data)
	c.init()
	return c
}