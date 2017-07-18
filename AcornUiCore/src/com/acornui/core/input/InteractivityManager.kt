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

import com.acornui.collection.Clearable
import com.acornui.component.InteractiveElement
import com.acornui.component.UiComponent
import com.acornui.core.Disposable
import com.acornui.core.di.DKey
import com.acornui.signal.Stoppable
import com.acornui.signal.StoppableSignal

/**
 * A manager that feeds user input as events to layout elements.
 * @author nbilyk
 */
interface InteractivityManager : Disposable {

	/**
	 * Initializes the interactivity manager with the root element for dispatching.
	 */
	fun init(root: UiComponent)

	/**
	 * Produces a new Signal for the specified interaction type.
	 */
	fun <T : InteractionEvent> getSignal(host: InteractiveElement, type: InteractionType<T>, isCapture: Boolean): StoppableSignal<T>

	/**
	 * Dispatches an interaction for the layout element at the given stage position.
	 * @param canvasX The x coordinate relative to the canvas.
	 * @param canvasY The y coordinate relative to the canvas.
	 * @param event The interaction event to dispatch.
	 */
	fun dispatch(canvasX: Float, canvasY: Float, event: InteractionEvent, useCapture: Boolean = true, useBubble: Boolean = true)

	/**
	 * Dispatches an interaction for a single interactive element.
	 * This will first dispatch a capture event from the stage down to the given target, and then
	 * a bubbling event up to the stage.
	 * @param target The target for the event.
	 * @param event The event to dispatch on each ancestor.
	 * @param useCapture If true, there will be a capture phase. That is, starting from the highest ancestor
	 * (the Stage if the target is active) the event will be dispatched on each ancestor down to (and including)
	 * the target.
	 * @param useBubble If true, there will be a bubble phase. That is, starting from the target, each ancestor
	 * will have the event dispatched.
	 * If both [useCapture] and [useBubble] are false, only the target will have the event dispatched. (Using the
	 * bubble-phase signal)
	 */
	fun dispatch(target: InteractiveElement, event: InteractionEvent, useCapture: Boolean = true, useBubble: Boolean = true)

	companion object : DKey<InteractivityManager>
}

data class InteractionType<out T : InteractionEvent>(val displayName: String) {

	override fun toString(): String {
		return "InteractionType($displayName)"
	}

	companion object
}

interface InteractionEvent : Clearable, Stoppable {

	var type: InteractionType<InteractionEvent>

	/**
	 * True if this event was used in an interaction.
	 */
	var handled: Boolean

	val propagation: Propagation

	override fun isStopped(): Boolean {
		return propagation.immediatePropagationStopped()
	}

	var target: InteractiveElement?
	var currentTarget: InteractiveElement?

	/**
	 * Changes the local properties of this interaction to be relative to the given target. (Such as touch x, y)
	 */
	fun localize(currentTarget: InteractiveElement)

	fun defaultPrevented(): Boolean

	fun preventDefault()

	override fun clear()
}

/**
 * A convenient base class for [InteractionEvent] implementations.
 */
abstract class InteractionEventBase : InteractionEvent {

	override var type: InteractionType<InteractionEvent> = UNKNOWN

	override var handled: Boolean = false

	override var target: InteractiveElement? = null
	override var currentTarget: InteractiveElement? = null

	override fun localize(currentTarget: InteractiveElement) {
		this.currentTarget = currentTarget
	}

	override val propagation: Propagation = Propagation()

	protected var _defaultPrevented: Boolean = false

	override fun defaultPrevented(): Boolean = _defaultPrevented

	/**
	 * Flags this event to indicate that default behavior should be ignored.
	 */
	override fun preventDefault() {
		_defaultPrevented = true
	}

	override fun clear() {
		type = UNKNOWN
		propagation.clear()
		handled = false
		target = null
		currentTarget = null
		_defaultPrevented = false
	}

	companion object {
		val UNKNOWN = InteractionType<InteractionEvent>("unknown")
	}
}