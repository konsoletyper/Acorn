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

package com.acornui.core.input

import com.acornui._assert
import com.acornui.collection.arrayListObtain
import com.acornui.collection.arrayListPool
import com.acornui.component.InteractiveElement
import com.acornui.component.InteractiveElementRo
import com.acornui.component.UiComponent
import com.acornui.component.UiComponentRo
import com.acornui.core.ancestry
import com.acornui.core.focus.FocusManager
import com.acornui.core.input.interaction.*
import com.acornui.core.time.time
import com.acornui.signal.StoppableSignalImpl


// TODO: possibly add a re-validation when the HIERARCHY has been invalidated. (use case: when an element has moved out from underneath the mouse)
/**
 * An implementation of InteractivityManager
 *
 * Must set the root ui component to use when propagating input.
 * @author nbilyk
 */
open class InteractivityManagerImpl(
		private val mouseInput: MouseInput,
		private val keyInput: KeyInput,
		private val focus: FocusManager) : InteractivityManager {

	private var _root: UiComponentRo? = null
	private val root: UiComponentRo
		get() = _root!!

	private val mouse = MouseInteraction()
	private val touch = TouchInteraction()
	private val wheel = WheelInteraction()
	private val key = KeyInteraction()
	private val char = CharInteraction()

	private val overTargets = ArrayList<InteractiveElementRo>()

	private val overCanvasChangedHandler = {
		overCanvas: Boolean ->
		if (!overCanvas)
			overTarget(null)
	}

	private val rawTouchStartHandler = {
		event: TouchInteraction ->
		touchHandler(TouchInteraction.TOUCH_START, event)
	}

	private val rawTouchEndHandler = {
		event: TouchInteraction ->
		touchHandler(TouchInteraction.TOUCH_END, event)
	}

	private val rawTouchMoveHandler = {
		event: TouchInteraction ->
		touchHandler(TouchInteraction.TOUCH_MOVE, event)
		overTarget(touch.target)
	}

	private val rawMouseDownHandler = {
		event: MouseInteraction ->
		mouseHandler(MouseInteraction.MOUSE_DOWN, event)
	}

	private val rawMouseUpHandler = {
		event: MouseInteraction ->
		mouseHandler(MouseInteraction.MOUSE_UP, event)
	}

	private val rawMouseMoveHandler = {
		event: MouseInteraction ->
		mouseHandler(MouseInteraction.MOUSE_MOVE, event)
		overTarget(mouse.target)
	}

	private val rawWheelHandler = {
		event: WheelInteraction ->
		wheel.clear()
		wheel.set(event)
		wheel.type = WheelInteraction.MOUSE_WHEEL
		dispatch(event.canvasX + 0.5f, event.canvasY + 0.5f, wheel)
		if (wheel.defaultPrevented())
			event.preventDefault()
	}

	private fun <T : MouseInteraction> mouseHandler(type: InteractionType<T>, event: MouseInteraction) {
		mouse.clear()
		mouse.set(event)
		mouse.type = type
		dispatch(event.canvasX + 0.5f, event.canvasY + 0.5f, mouse)
		if (mouse.defaultPrevented())
			event.preventDefault()
	}

	private fun touchHandler(type: InteractionType<TouchInteraction>, event: TouchInteraction) {
		touch.clear()
		touch.set(event)
		touch.type = type
		val first = event.changedTouches.first()
		dispatch(first.canvasX + 0.5f, first.canvasY + 0.5f, touch)
		if (touch.defaultPrevented())
			event.preventDefault()
	}

	private val keyDownHandler = {
		event: KeyInteraction ->
		keyHandler(KeyInteraction.KEY_DOWN, event)
	}

	private val keyUpHandler = {
		event: KeyInteraction ->
		keyHandler(KeyInteraction.KEY_UP, event)
	}

	private val charHandler = {
		event: CharInteraction ->
		charHandler(CharInteraction.CHAR, event)
	}

	private fun <T : KeyInteraction> keyHandler(type: InteractionType<T>, event: KeyInteraction) {
		val f = focus.focused() ?: return
		key.clear()
		key.type = type
		key.set(event)
		dispatch(f, key)
		if (key.defaultPrevented()) event.preventDefault()
	}

	private fun <T : CharInteraction> charHandler(type: InteractionType<T>, event: CharInteraction) {
		val f = focus.focused() ?: return
		char.clear()
		char.type = CharInteraction.CHAR
		char.set(event)
		dispatch(f, char)
		if (char.defaultPrevented()) event.preventDefault()
	}

	override fun init(root: UiComponentRo) {
		_assert(_root == null, "Already initialized.")
		_root = root
		mouseInput.overCanvasChanged.add(overCanvasChangedHandler)
		mouseInput.mouseDown.add(rawMouseDownHandler)
		mouseInput.mouseUp.add(rawMouseUpHandler)
		mouseInput.mouseMove.add(rawMouseMoveHandler)
		mouseInput.mouseWheel.add(rawWheelHandler)

		mouseInput.touchStart.add(rawTouchStartHandler)
		mouseInput.touchEnd.add(rawTouchEndHandler)
		mouseInput.touchMove.add(rawTouchMoveHandler)

		keyInput.keyDown.add(keyDownHandler)
		keyInput.keyUp.add(keyUpHandler)
		keyInput.char.add(charHandler)
	}

	private fun overTarget(target: InteractiveElementRo?) {
		val previousOverTarget = overTargets.firstOrNull()
		if (target == previousOverTarget) return

		mouse.canvasX = mouseInput.canvasX()
		mouse.canvasY = mouseInput.canvasY()
		mouse.button = WhichButton.UNKNOWN
		mouse.timestamp = time.nowMs()

		if (previousOverTarget != null) {
			mouse.relatedTarget = target
			mouse.target = previousOverTarget
			mouse.type = MouseInteraction.MOUSE_OUT
			dispatch(overTargets, mouse)
		}
		if (target != null) {
			target.ancestry(overTargets)
			mouse.relatedTarget = previousOverTarget
			mouse.target = target
			mouse.type = MouseInteraction.MOUSE_OVER
			dispatch(overTargets, mouse)
		} else {
			overTargets.clear()
		}
	}

	override fun <T : InteractionEvent> getSignal(host: InteractiveElementRo, type: InteractionType<T>, isCapture: Boolean): StoppableSignalImpl<T> {
		return StoppableSignalImpl()
	}

	/**
	 * Dispatches an interaction for the layout element at the given stage position.
	 * @param canvasX The x coordinate relative to the canvas.
	 * @param canvasY The y coordinate relative to the canvas.
	 * @param event The interaction event to dispatch.
	 */
	override fun dispatch(canvasX: Float, canvasY: Float, event: InteractionEvent, useCapture: Boolean, useBubble: Boolean) {
		val ele = root.getChildUnderPoint(canvasX, canvasY, onlyInteractive = true) ?: root
		dispatch(ele, event, useCapture, useBubble)
	}

	/**
	 * Dispatches an interaction for a single interactive element.
	 * This will first dispatch a capture event from the stage down to the given target, and then
	 * a bubbling event up to the stage.
	 */
	override fun dispatch(target: InteractiveElementRo, event: InteractionEvent, useCapture: Boolean, useBubble: Boolean) {
		val rawAncestry = arrayListObtain<InteractiveElementRo>()
		event.target = target
		if (!useCapture && !useBubble) {
			// Dispatch only for current target.
			dispatchForCurrentTarget(target, event, isCapture = false)
		} else {
			target.ancestry(rawAncestry)
			dispatch(rawAncestry, event, useCapture, useBubble)
		}
		arrayListPool.free(rawAncestry)
	}

	private fun dispatch(rawAncestry: List<InteractiveElementRo>, event: InteractionEvent, useCapture: Boolean = true, useBubble: Boolean = true) {
		// Capture phase
		if (useCapture) {
			for (i in rawAncestry.lastIndex downTo 0) {
				if (event.propagation.propagationStopped()) break
				dispatchForCurrentTarget(rawAncestry[i], event, isCapture = true)
			}
		}
		// Bubble phase
		if (useBubble) {
			for (i in 0..rawAncestry.lastIndex) {
				if (event.propagation.propagationStopped()) break
				dispatchForCurrentTarget(rawAncestry[i], event, isCapture = false)
			}
		}
	}

	private fun dispatchForCurrentTarget(currentTarget: InteractiveElementRo, event: InteractionEvent, isCapture: Boolean) {
		val signal = currentTarget.getInteractionSignal(event.type, isCapture) as StoppableSignalImpl?
		if (signal != null && signal.isNotEmpty()) {
			event.localize(currentTarget)
			signal.dispatch(event)
		}
	}

	override fun dispose() {
		overTarget(null)

		val mouse = mouseInput
		mouse.mouseDown.remove(rawMouseDownHandler)
		mouse.mouseUp.remove(rawMouseUpHandler)
		mouse.mouseMove.remove(rawMouseMoveHandler)
		mouse.mouseWheel.remove(rawWheelHandler)

		mouseInput.touchStart.remove(rawTouchStartHandler)
		mouseInput.touchEnd.remove(rawTouchEndHandler)
		mouseInput.touchMove.remove(rawTouchMoveHandler)

		val key = keyInput
		key.keyDown.remove(keyDownHandler)
		key.keyUp.remove(keyUpHandler)
		key.char.remove(charHandler)
	}
}