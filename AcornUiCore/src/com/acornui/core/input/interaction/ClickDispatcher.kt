package com.acornui.core.input.interaction

import com.acornui.collection.arrayListPool
import com.acornui.component.Stage
import com.acornui.component.UiComponent
import com.acornui.core.Disposable
import com.acornui.core.ancestry
import com.acornui.core.di.Injector
import com.acornui.core.di.Scoped
import com.acornui.core.di.inject
import com.acornui.core.input.*
import com.acornui.core.time.Timer
import com.acornui.core.time.timer


/**
 * Watches the stage for mouse and touch events that constitute a 'click', then dispatches the click event on the
 * interactivity manager.
 *
 * This will respond to mouse and touch, but not both.
 */
open class ClickDispatcher(
		override val injector: Injector
) : Scoped, Disposable {

	private val root: UiComponent = inject(Stage)
	private val interactivity = inject(InteractivityManager)

	var multiClickSpeed: Int = 400

	private val downButtons: Array<ArrayList<UiComponent>?> = Array(6, { null }) // TODO: Kotlin bug: Enum.values.size not working.
	private val clickEvent = ClickInteraction()

	private var lastTarget: UiComponent? = null
	private var currentCount = 0
	private var previousTimestamp = 0L

	private var touchMode = false

	private var pendingClick = false

	private fun rootMouseDownHandler(event: MouseInteraction) {
		if (!touchMode) {
			val downElement = root.getChildUnderPoint(event.canvasX, event.canvasY, onlyInteractive = true)
			if (downElement != null) {
				setDownElement(downElement, event.button.ordinal)
			}
		}
	}

	private fun rootTouchStartHandler(event: TouchInteraction) {
		val first = event.changedTouches.first()
		val downElement = root.getChildUnderPoint(first.canvasX, first.canvasY, onlyInteractive = true)
		if (downElement != null) {
			setDownElement(downElement, WhichButton.LEFT.ordinal)
		}
	}

	private fun setDownElement(downElement: UiComponent, ordinal: Int) {
		if (lastTarget != downElement) {
			lastTarget = downElement
			currentCount = 1
		}
		@Suppress("UNCHECKED_CAST")
		val ancestry = arrayListPool.obtain() as ArrayList<UiComponent>
		downElement.ancestry(ancestry)
		downButtons[ordinal] = ancestry
	}

	private var preventMouseTimer: Timer? = null

	private fun  rootTouchEndHandler(event: TouchInteraction) {
		val first = event.changedTouches.first()
		release(WhichButton.LEFT, first.canvasX, first.canvasY, event.timestamp)
		touchMode = true
		preventMouseTimer?.stop()
		preventMouseTimer = timer(2.5f, 1) {
			touchMode = false
			preventMouseTimer = null
		}
	}

	private fun rootTouchCancelHandler(event: TouchInteraction) {
		val downElements = downButtons[WhichButton.LEFT.ordinal]
		if (downElements != null) {
			downButtons[WhichButton.LEFT.ordinal] = null
			arrayListPool.free(downElements)
		}
	}

	private fun rootMouseUpHandler(event: MouseInteraction) {
		if (!touchMode && !event.isFabricated) {
			release(event.button, event.canvasX, event.canvasY, event.timestamp)
		}
	}

	fun release(button: WhichButton, canvasX: Float, canvasY: Float, timestamp: Long) {
		val downElements = downButtons[button.ordinal]
		if (downElements != null) {
			downButtons[button.ordinal] = null
			for (i in 0..downElements.lastIndex) {
				val downElement = downElements[i]
				if (downElement.containsCanvasPoint(canvasX, canvasY)) {
					if (timestamp - previousTimestamp <= multiClickSpeed) {
						currentCount++
					} else {
						// Not fast enough to be considered a multi-click
						currentCount = 1
					}
					previousTimestamp = timestamp
					clickEvent.clear()
					clickEvent.type = getClickType(button)
					clickEvent.target = downElement
					clickEvent.button = button
					clickEvent.timestamp = timestamp
					clickEvent.count = currentCount
					clickEvent.canvasX = canvasX
					clickEvent.canvasY = canvasY
					pendingClick = true
					break
				}
			}
			arrayListPool.free(downElements)
		}
	}

	private fun getClickType(button: WhichButton): InteractionType<ClickInteraction> {
		return when(button) {
			WhichButton.LEFT -> ClickInteraction.LEFT_CLICK
			WhichButton.RIGHT -> ClickInteraction.RIGHT_CLICK
			WhichButton.MIDDLE -> ClickInteraction.MIDDLE_CLICK
			WhichButton.BACK -> ClickInteraction.BACK_CLICK
			WhichButton.FORWARD -> ClickInteraction.FORWARD_CLICK
			else -> throw Exception("Unknown click type.")
		}
	}

	fun init() {
		root.mouseDown(isCapture = true).add(this::rootMouseDownHandler)
		root.touchStart(isCapture = true).add(this::rootTouchStartHandler)
		root.mouseUp().add(this::rootMouseUpHandler)
		root.touchEnd().add(this::rootTouchEndHandler)
		root.touchCancel(isCapture = true).add(this::rootTouchCancelHandler)
		addClickHandlers()
	}

	protected fun fireHandler(event: Any) {
		if (!pendingClick) return
		pendingClick = false
		interactivity.dispatch(clickEvent.target!!, clickEvent)
	}

	protected open fun addClickHandlers() {
		root.mouseUp().add(this::fireHandler)
		root.touchEnd().add(this::fireHandler)
	}

	protected open fun removeClickHandlers() {
		root.mouseUp().remove(this::fireHandler)
		root.touchEnd().remove(this::fireHandler)
	}

	override fun dispose() {
		removeClickHandlers()
		root.mouseDown(isCapture = true).remove(this::rootMouseDownHandler)
		root.mouseUp().remove(this::rootMouseUpHandler)
		root.touchEnd().remove(this::rootTouchEndHandler)
		for (i in 0..downButtons.lastIndex) {
			val list = downButtons[i]
			if (list != null) {
				list.clear()
				arrayListPool.free(list)
			}
		}
	}
}


fun Scoped.clickDispatcher(): ClickDispatcher {
	return ClickDispatcher(injector)
}