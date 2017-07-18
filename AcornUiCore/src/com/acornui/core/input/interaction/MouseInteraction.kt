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

package com.acornui.core.input.interaction

import com.acornui.component.InteractiveElement
import com.acornui.core.input.InteractionEventBase
import com.acornui.core.input.InteractionType
import com.acornui.core.input.WhichButton
import com.acornui.math.Vector2

/**
 * A data class representing a mouse event, as provided to [InteractiveElement] objects by the [InteractivityManager]
 * @author nbilyk
 */
open class MouseInteraction : InteractionEventBase() {

	/**
	 * The x position of the mouse event relative to the root canvas.
	 */
	var canvasX: Float = 0f

	/**
	 * The y position of the mouse event relative to the root canvas.
	 */
	var canvasY: Float = 0f

	private var _localPositionIsValid = false
	private val _localPosition: Vector2 = Vector2()

	/**
	 * The position of the mouse event relative to the [currentTarget].
	 * This is calculated the first time it's requested.
	 */
	private fun localPosition(): Vector2 {
		if (!_localPositionIsValid) {
			_localPositionIsValid = true
			_localPosition.set(canvasX, canvasY)
			currentTarget!!.windowToLocal(_localPosition)
		}
		return _localPosition
	}

	/**
	 * The x position of the mouse event relative to the [currentTarget].
	 */
	val localX: Float
		get() = localPosition().x

	/**
	 * The y position of the mouse event relative to the [currentTarget].
	 */
	val localY: Float
		get() = localPosition().y

	/**
	 * On a mouse out interaction, the relatedTarget will be the new over target (or null if there isn't one)
	 * On a mouse over interaction, the relatedTarget will be the previous over target (or null if there wasn't one)
	 */
	var relatedTarget: InteractiveElement? = null

	var button: WhichButton = WhichButton.UNKNOWN

	/**
	 * The number of milliseconds from the Unix epoch.
	 */
	var timestamp: Long = 0

	/**
	 * If true, this interaction was triggered from code, not real user input.
	 */
	var isFabricated: Boolean = false

	/**
	 * Calculates the average velocity in pixels per millisecond of this touch event compared to a previous touch event.
	 */
	fun velocity(previous: MouseInteraction): Float {
		val xDiff = previous.canvasX - canvasX
		val yDiff = previous.canvasY - canvasY
		val distance = Math.sqrt((xDiff * xDiff + yDiff * yDiff).toDouble()).toFloat()
		val time = timestamp - previous.timestamp
		return distance / time
	}

	open fun set(event: MouseInteraction) {
		type = event.type
		canvasX = event.canvasX
		canvasY = event.canvasY
		button = event.button
		timestamp = event.timestamp
	}

	override fun localize(currentTarget: InteractiveElement) {
		super.localize(currentTarget)
		_localPositionIsValid = false
	}

	override fun clear() {
		super.clear()
		canvasX = 0f
		canvasY = 0f
		_localPositionIsValid = false
		_localPosition.clear()
		relatedTarget = null
		button = WhichButton.UNKNOWN
		timestamp = 0
		isFabricated = false
	}

	companion object {
		val MOUSE_DOWN = InteractionType<MouseInteraction>("mouseDown")
		val MOUSE_UP = InteractionType<MouseInteraction>("mouseUp")
		val MOUSE_MOVE = InteractionType<MouseInteraction>("mouseMove")

		val MOUSE_OVER = InteractionType<MouseInteraction>("mouseOver")
		val MOUSE_OUT = InteractionType<MouseInteraction>("mouseOut")
	}
}

class WheelInteraction : MouseInteraction() {

	var deltaX: Float = 0f
	var deltaY: Float = 0f
	var deltaZ: Float = 0f

	override fun set(event: MouseInteraction) {
		(event as WheelInteraction)
		super.set(event)
		deltaX = event.deltaX
		deltaY = event.deltaY
		deltaZ = event.deltaZ
	}

	override fun clear() {
		super.clear()
		deltaX = 0f
		deltaY = 0f
		deltaZ = 0f
	}

	companion object {
		val MOUSE_WHEEL = InteractionType<WheelInteraction>("mouseWheel")
	}
}