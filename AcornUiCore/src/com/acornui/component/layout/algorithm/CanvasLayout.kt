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

import com.acornui.component.ComponentInit
import com.acornui.component.layout.*
import com.acornui.component.style.NoopStyle
import com.acornui.core.di.Owned
import com.acornui.math.Bounds

class CanvasLayout : LayoutAlgorithm<Any, CanvasLayoutData> {

	//-----------------------------------
	// Getters / setters
	//-----------------------------------

	override fun calculateSizeConstraints(elements: List<LayoutElementRo>, props: Any, out: SizeConstraints) {
		var minWidth: Float = 0f
		var minHeight: Float = 0f
		for (i in 0..elements.lastIndex) {
			val element = elements[i]
			val sC = element.sizeConstraints
			val layoutData = element.layoutData as CanvasLayoutData?
			minWidth = maxOf((sC.width.min ?: 0f) + (layoutData?.left ?: 0f) + (layoutData?.right ?: 0f) + (layoutData?.horizontalCenter ?: 0f), minWidth)
			minHeight = maxOf((sC.height.min ?: 0f) + (layoutData?.top ?: 0f) + (layoutData?.bottom ?: 0f) + (layoutData?.verticalCenter ?: 0f), minHeight)
		}
		out.width.min = minWidth
		out.height.min = minHeight
	}

	override fun layout(explicitWidth: Float?, explicitHeight: Float?, elements: List<LayoutElement>, props: Any, out: Bounds) {
		val w = explicitWidth ?: 0f
		val h = explicitHeight ?: 0f

		for (i in 0..elements.lastIndex) {
			val element = elements[i]
			val layoutData = element.layoutData as CanvasLayoutData?
			element.setSize(layoutData?.getPreferredWidth(explicitWidth), layoutData?.getPreferredHeight(explicitHeight))
		}

		for (i in 0..elements.lastIndex) {
			val element = elements[i]
			val layoutData = element.layoutData as CanvasLayoutData?

			if (layoutData == null) {
				element.moveTo(0f, 0f)
				out.ext(element.width, element.height)
			} else {
				val x: Float
				val y: Float
				if (layoutData.left != null) {
					x = layoutData.left!!
				} else if (layoutData.right != null) {
					x = w - layoutData.right!! - element.width
				} else if (layoutData.horizontalCenter != null) {
					x = (w - element.width) * 0.5f + layoutData.horizontalCenter!!
				} else {
					x = 0f
				}
				if (layoutData.top != null) {
					y = layoutData.top!!
				} else if (layoutData.bottom != null) {
					y = h - layoutData.bottom!! - element.height
				} else if (layoutData.verticalCenter != null) {
					y = (h - element.height) * 0.5f + layoutData.verticalCenter!!
				} else {
					y = 0f
				}
				element.moveTo(x, y)
				out.ext(element.right + (layoutData.right ?: 0f), element.bottom + (layoutData.bottom ?: 0f))
			}
		}
	}

	override fun createLayoutData() = CanvasLayoutData()
}

open class CanvasLayoutContainer(owner: Owned) : LayoutContainerImpl<NoopStyle, CanvasLayoutData>(owner, CanvasLayout(), NoopStyle())

fun Owned.canvas(init: ComponentInit<CanvasLayoutContainer> = {}): CanvasLayoutContainer {
	val canvasContainer = CanvasLayoutContainer(this)
	canvasContainer.init()
	return canvasContainer
}

open class CanvasLayoutData : BasicLayoutData() {

	var top: Float? by bindable(null)
	var right: Float? by bindable(null)
	var bottom: Float? by bindable(null)
	var left: Float? by bindable(null)
	var horizontalCenter: Float? by bindable(null)
	var verticalCenter: Float? by bindable(null)

	/**
	 * Sets the horizontal and vertical center to 0f
	 */
	fun center() {
		horizontalCenter = 0f
		verticalCenter = 0f
	}

	override fun getPreferredWidth(availableWidth: Float?): Float? {
		if (availableWidth != null) {
			if (left != null && horizontalCenter != null) return (availableWidth * 0.5f + horizontalCenter!!) - left!!
			if (right != null && horizontalCenter != null) return 0.5f * availableWidth - right!! - horizontalCenter!!
			else if (left != null && right != null) return availableWidth - right!! - left!!
		}
		return super.getPreferredWidth(availableWidth)
	}

	override fun getPreferredHeight(availableHeight: Float?): Float? {
		if (availableHeight != null) {
			if (top != null && verticalCenter != null) return (availableHeight * 0.5f + verticalCenter!!) - top!!
			if (bottom != null && verticalCenter != null) return 0.5f * availableHeight - bottom!! - verticalCenter!!
			else if (top != null && bottom != null) return availableHeight - bottom!! - top!!
		}
		return super.getPreferredHeight(availableHeight)
	}
}

fun canvasLayoutData(init: CanvasLayoutData.() -> Unit = {}): CanvasLayoutData {
	val c = CanvasLayoutData()
	c.init()
	return c
}