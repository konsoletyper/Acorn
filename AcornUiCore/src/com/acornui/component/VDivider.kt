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

package com.acornui.component

import com.acornui.component.layout.SizeConstraints
import com.acornui.component.layout.clampHeight
import com.acornui.component.style.*
import com.acornui.core.cursor.StandardCursors
import com.acornui.core.cursor.cursor
import com.acornui.core.di.Owned
import com.acornui.core.floor
import com.acornui.core.input.interaction.DragInteraction
import com.acornui.core.input.interaction.drag
import com.acornui.math.Bounds
import com.acornui.math.MathUtils
import com.acornui.math.Vector2
import com.acornui.math.maxOf4

open class VDivider(owner: Owned) : ElementContainerImpl<UiComponent>(owner) {


	val style = bind(DividerStyle())

	private var _dividerBar: UiComponent? = null
	private var _handle: UiComponent? = null
	private var _top: UiComponent? = null
	private var _bottom: UiComponent? = null

	private var _split: Float = 0.5f

	private val _mouse = Vector2()

	init {
		styleTags.add(VDivider)
		watch(style) {
			_dividerBar?.dispose()
			_handle?.dispose()

			val dividerBar = addChild(it.divideBar(this))
			_dividerBar = dividerBar
			dividerBar.drag().add(this::dividerDragHandler)
			dividerBar.cursor(StandardCursors.RESIZE_N)
			val handle = addChild(it.handle(this))
			handle.interactivityMode = InteractivityMode.NONE
			_handle = handle
		}
	}

	private fun dividerDragHandler(event: DragInteraction) {
		mousePosition(_mouse)
		split(_mouse.y / height)
	}

	override fun onElementAdded(index: Int, element: UiComponent) {
		super.onElementAdded(index, element)
		refreshParts()
	}

	override fun onElementRemoved(index: Int, element: UiComponent) {
		super.onElementRemoved(index, element)
		refreshParts()
	}

	private fun refreshParts() {
		_top = _children.getOrNull(0)
		_bottom = _children.getOrNull(1)
	}

	fun split(): Float = _split

	/**
	 * The split is a 0f-1f range representing the percent of the explicit height to divide this container between
	 * the [_top] and [_bottom] components.
	 */
	fun split(value: Float) {
		val clamped = MathUtils.clamp(value, 0f, 1f)
		if (_split == clamped) return
		_split = clamped
		invalidate(ValidationFlags.LAYOUT)
	}

	override fun updateSizeConstraints(out: SizeConstraints) {
		var mH: Float = 0f
		if (_top != null) {
			out.width.bound(_top!!.sizeConstraints.width)
			mH += _top!!.minHeight ?: 0f
		}
		mH += _handle?.height ?: 0f
		if (_bottom != null) {
			out.width.bound(_bottom!!.sizeConstraints.width)
			mH += _bottom!!.minHeight ?: 0f
		}
		out.height.min = mH
	}

	override fun updateLayout(explicitWidth: Float?, explicitHeight: Float?, out: Bounds) {
		_dividerBar?.setSize(explicitWidth, null)

		val dividerBarHeight = _dividerBar?.height ?: 0f
		val topHeight: Float
		val bottomHeight: Float
		if (explicitHeight != null) {
			// Bound the bottom side first, then bound the top. Top side trumps bottom.
			val h = explicitHeight - dividerBarHeight
			val bH = _bottom?.clampHeight(h * (1f - _split)) ?: 0f
			topHeight = (_top?.clampHeight(h - bH) ?: 0f).floor()
			bottomHeight = minOf(bH, h - topHeight)
			_top?.setSize(explicitWidth, topHeight)
			_bottom?.setSize(explicitWidth, bottomHeight)
		} else {
			_top?.setSize(explicitWidth, null)
			_bottom?.setSize(explicitWidth, null)
			topHeight = _top?.height ?: 0f
			bottomHeight = _bottom?.height ?: 0f
		}
		out.width = maxOf4(explicitWidth ?: 0f, _top?.width ?: 0f, _bottom?.width ?: 0f, _handle?.minWidth ?: 0f)
		out.height = maxOf(explicitHeight ?: 0f, topHeight + dividerBarHeight + bottomHeight)
		_top?.moveTo(0f, 0f)
		if (_dividerBar != null)
			_dividerBar!!.moveTo(0f, (topHeight + dividerBarHeight * 0.5f) - _dividerBar!!.height * 0.5f)
		if (_handle != null) {
			val handle = _handle!!
			handle.setSize(null, null)
			if (handle.width > out.width) handle.setSize(out.width, null) // Don't let the handle be too large.
			handle.moveTo((out.width - handle.width) * 0.5f, (topHeight + dividerBarHeight * 0.5f) - handle.height * 0.5f)
		}
		_bottom?.moveTo(0f, topHeight + dividerBarHeight)
	}

	companion object : StyleTag

}

class DividerStyle() : StyleBase() {

	override val type: StyleType<DividerStyle> = DividerStyle

	/**
	 * A factory for the vertical bar dividing the two sections.
	 */
	var divideBar by prop(noSkin)

	/**
	 * A factory for the handle asset that will be centered on the divider bar.
	 */
	var handle by prop(noSkin)

	companion object : StyleType<DividerStyle>
}

fun Owned.vDivider(init: ComponentInit<VDivider>): VDivider {
	val v = VDivider(this)
	v.init()
	return v
}
