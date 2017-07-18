package com.acornui.core.input.interaction

import com.acornui.collection.ClearableObjectPool
import com.acornui.collection.Clearable
import com.acornui.component.InteractiveElement
import com.acornui.core.input.InteractionEventBase
import com.acornui.core.input.InteractionType
import com.acornui.math.MathUtils
import com.acornui.math.Vector2
import com.acornui.math.Vector2Ro


class TouchInteraction : InteractionEventBase() {

	/**
	 * The number of milliseconds from the Unix epoch.
	 */
	var timestamp: Long = 0

	/**
	 * A list of all the Touch objects that are both currently in contact with the touch surface and were also started
	 * on the same element that is the target of the event.
	 */
	val targetTouches = ArrayList<Touch>()

	/**
	 * A list of all the Touch objects representing individual points of contact whose states changed between the
	 * previous touch event and this one.
	 */
	val changedTouches = ArrayList<Touch>()

	/**
	 * A list of all the Touch objects representing all current points of contact with the surface, regardless of
	 * target or changed status.
	 */
	val touches = ArrayList<Touch>()

	override fun localize(currentTarget: InteractiveElement) {
		super.localize(currentTarget)
		for (targetTouch in targetTouches) {
			targetTouch.localize(currentTarget)
		}
		for (changedTouch in changedTouches) {
			changedTouch.localize(currentTarget)
		}
		for (touch in touches) {
			touch.localize(currentTarget)
		}
	}

	fun set(event: TouchInteraction) {
		type = event.type
		clearTouches()
		targetTouches.addTouches(event.targetTouches)
		changedTouches.addTouches(event.changedTouches)
		touches.addTouches(event.touches)

		timestamp = event.timestamp
	}

	fun clearTouches() {
		clearTouches(targetTouches)
		clearTouches(changedTouches)
		clearTouches(touches)
	}

	private fun clearTouches(touches: MutableList<Touch>) {
		for (i in 0..touches.lastIndex) {
			touches[i].free()
		}
		touches.clear()
	}

	override fun clear() {
		super.clear()
		timestamp = 0L
		clearTouches()
	}

	companion object {
		val TOUCH_START = InteractionType<TouchInteraction>("touchStart")
		val TOUCH_MOVE = InteractionType<TouchInteraction>("touchMove")
		val TOUCH_ENTER = InteractionType<TouchInteraction>("touchEnter")
		val TOUCH_LEAVE = InteractionType<TouchInteraction>("touchLeave")
		val TOUCH_END = InteractionType<TouchInteraction>("touchEnd")
		val TOUCH_CANCEL = InteractionType<TouchInteraction>("touchCancel")

		/**
		 * Fills the [toList] with clones of the touches in [fromList]
		 */
		fun MutableList<Touch>.addTouches(fromList: List<Touch>) {
			for (i in 0..fromList.lastIndex) {
				val fromTouch = fromList[i]
				val newTouch = Touch.obtain()
				newTouch.set(fromTouch)
				add(newTouch)
			}
		}
	}

}

class Touch : Clearable {

	/**
	 * The x position of the mouse event relative to the root canvas.
	 */
	var canvasX: Float = 0f

	/**
	 * The y position of the mouse event relative to the root canvas.
	 */
	var canvasY: Float = 0f

	var radiusX: Float = 0f
	var radiusY: Float = 0f
	var rotationAngle: Float = 0f

	var target: InteractiveElement? = null
	var currentTarget: InteractiveElement? = null

	private var _localPositionIsValid = false
	private val _localPosition: Vector2 = Vector2()

	/**
	 * The position of the mouse event relative to the [target].
	 */
	private fun localPosition(): Vector2Ro {
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

	fun localize(currentTarget: InteractiveElement) {
		this.currentTarget = currentTarget
		_localPositionIsValid = false
	}

	/**
	 * The distance of this touch point to the other touch point (in canvas coordinates)
	 */
	fun dst(other: Touch): Float {
		val xD = other.canvasX - canvasX
		val yD = other.canvasY - canvasY
		return MathUtils.sqrt((xD * xD + yD * yD))
	}

	override fun clear() {
		canvasX = 0f
		canvasY = 0f
		radiusX = 0f
		radiusY = 0f
		rotationAngle = 0f
		target = null
		currentTarget = null
		_localPositionIsValid = false
	}

	fun set(otherTouch: Touch) {
		canvasX = otherTouch.canvasX
		canvasY = otherTouch.canvasY
		radiusX = otherTouch.radiusX
		radiusY = otherTouch.radiusY
		rotationAngle = otherTouch.rotationAngle
		target = otherTouch.target
		currentTarget = otherTouch.currentTarget
		_localPositionIsValid = false
	}

	fun free() {
		pool.free(this)
	}

	companion object {

		private val pool = ClearableObjectPool { Touch() }
		fun obtain(): Touch = pool.obtain()
	}
}