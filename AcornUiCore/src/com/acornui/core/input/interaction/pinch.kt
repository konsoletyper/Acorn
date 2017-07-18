//package com.acornui.core.input.interaction
//
//import com.acornui.component.UiComponent
//import com.acornui.component.createOrReuseAttachment
//import com.acornui.component.stage
//import com.acornui.core.Disposable
//import com.acornui.core.Lifecycle
//import com.acornui.core.input.*
//import com.acornui.core.time.callLater
//import com.acornui.signal.Signal
//import com.acornui.signal.Signal1
//
//
//interface Pinch : Disposable {
//
//	/**
//	 * Dispatched when the pinch has begun. For typical implementations this will be after the pinch has passed the
//	 * affordance value.
//	 */
//	val pinchStart: Signal<(PinchInteraction) -> Unit>
//
//	/**
//	 * Dispatched on each move during a pinch.
//	 * This will not be dispatched if the target is not on the stage.
//	 */
//	val pinch: Signal<(PinchInteraction) -> Unit>
//
//	/**
//	 * Dispatched when the pinch has completed.
//	 */
//	val pinchEnd: Signal<(PinchInteraction) -> Unit>
//
//	/**
//	 * If true, pinch operations are enabled.
//	 */
//	var enabled: Boolean
//
//	/**
//	 * True if the user is currently pinching.
//	 */
//	val isPinching: Boolean
//
//	companion object {
//
//		/**
//		 * The manhattan distance the target must be pinched before the pinchStart and pinch events begin.
//		 */
//		val DEFAULT_AFFORDANCE: Float = 5f
//
//	}
//}
//
//class PinchInteraction : InteractionEventBase() {
//
//	var startDistance: Float = 0f
//	var distance: Float = 0f
//
//	val distanceDelta: Float
//		get() = distance - startDistance
//
//	override fun clear() {
//		super.clear()
//		distance = 0f
//	}
//
//	companion object {
//		val PINCH_START = InteractionType<PinchInteraction>("pinchStart")
//		val PINCH = InteractionType<PinchInteraction>("pinch")
//		val PINCH_END = InteractionType<PinchInteraction>("pinchEnd")
//	}
//}
//
//class PinchImpl(val target: UiComponent, var affordance: Float) : Pinch {
//
//	private val stage = target.stage
//
//	private var watchingTouch = false
//
//	/**
//	 * The movement has passed the affordance, and is currently pinching.
//	 */
//	private var _isPinching = false
//	override val isPinching: Boolean
//		get() = _isPinching
//
//	private val pinchEvent: PinchInteraction = PinchInteraction()
//
//	private val _pinchStart = Signal1<PinchInteraction>()
//
//	/**
//	 * Dispatched when the pinch has passed the [affordance] distance.
//	 */
//	override val pinchStart: Signal<(PinchInteraction) -> Unit>
//		get() = _pinchStart
//
//	private val _pinch = Signal1<PinchInteraction>()
//
//	override val pinch: Signal<(PinchInteraction) -> Unit>
//		get() = _pinch
//
//	private val _pinchEnd = Signal1<PinchInteraction>()
//
//	override val pinchEnd: Signal<(PinchInteraction) -> Unit>
//		get() = _pinchEnd
//
//
//	private var startDistance = 0f
//	private var distance = 0f
//
//	private fun targetDeactivatedHandler(c: Lifecycle) {
//		stop()
//	}
//
//	private fun clickBlocker(event: ClickInteraction) {
//		event.handled = true
//		event.preventDefault()
//	}
//
//	//--------------------------------------------------------------
//	// Touch UX
//	//--------------------------------------------------------------
//
//	private fun touchStartHandler(event: TouchInteraction) {
//		if (!watchingTouch && allowTouchStart(event)) {
//			setWatchingTouch(true)
//			event.handled = true
//			val t = event.touches.first()
//			startPosition.set(t.canvasX, t.canvasY)
//			position.set(startPosition)
//			startPositionLocal.set(t.localX, t.localY)
//			if (!_isPinching && allowTouchPinchStart(event)) {
//				setIsPinching(true)
//			}
//		}
//	}
//
//	/**
//	 * Return true if the pinch should start watching movement.
//	 * This does not determine if a pinch start may begin.
//	 * @see allowTouchPinchStart
//	 */
//	private fun allowTouchStart(event: TouchInteraction): Boolean {
//		return enabled && !event.handled
//	}
//
//	private fun allowTouchPinchStart(event: TouchInteraction): Boolean {
//		return position.manhattanDst(startPosition) >= affordance
//	}
//
//	private fun allowTouchEnd(event: TouchInteraction): Boolean {
//		return event.touches.isEmpty()
//	}
//
//
//	private fun setWatchingTouch(value: Boolean) {
//		if (watchingTouch == value) return
//		watchingTouch = value
//		if (value) {
//			stage.touchMove().add(this::stageTouchMoveHandler)
//			stage.touchEnd().add(this::stageTouchEndHandler)
//		} else {
//			stage.touchMove().remove(this::stageTouchMoveHandler)
//			stage.touchEnd().remove(this::stageTouchEndHandler)
//		}
//
//	}
//
//	private fun stageTouchMoveHandler(event: TouchInteraction) {
//		val t = event.touches.first()
//		position.set(t.canvasX, t.canvasY)
//
//		if (_isPinching) {
//			event.handled = true
//			event.preventDefault()
//			dispatchPinchEvent(PinchInteraction.PINCH, _pinch)
//		} else {
//			if (!_isPinching && allowTouchPinchStart(event)) {
//				setIsPinching(true)
//			}
//		}
//	}
//
//	private fun stageTouchEndHandler(event: TouchInteraction) {
//		if (allowTouchEnd(event)) {
//			event.handled = true
//			setWatchingTouch(false)
//			setIsPinching(false)
//		}
//		Unit
//	}
//
//	//--------------------------------------------------------------
//	// Pinch
//	//--------------------------------------------------------------
//
//	private fun setIsPinching(value: Boolean) {
//		if (_isPinching == value) return
//		_isPinching = value
//		if (value) {
//			dispatchPinchEvent(PinchInteraction.PINCH_START, _pinchStart)
//			if (pinchEvent.defaultPrevented()) {
//				_isPinching = false
//			} else {
//				stage.click(isCapture = true).add(this::clickBlocker, true) // Set the next click to be marked as handled.
//				dispatchPinchEvent(PinchInteraction.PINCH, _pinch)
//			}
//		} else {
//			if (target.isActive) {
//				dispatchPinchEvent(PinchInteraction.PINCH, _pinch)
//			}
//			dispatchPinchEvent(PinchInteraction.PINCH_END, _pinchEnd)
//
//			target.callLater { stage.click(isCapture = true).remove(this::clickBlocker) }
//		}
//	}
//
//	private fun dispatchPinchEvent(type: InteractionType<PinchInteraction>, signal: Signal1<PinchInteraction>) {
//		pinchEvent.clear()
//		pinchEvent.target = target
//		pinchEvent.currentTarget = target
//		pinchEvent.type = type
//		pinchEvent.startDistance = startDistance
//		pinchEvent.distance = distance
//		signal.dispatch(pinchEvent)
//	}
//
//	private var _enabled = true
//	override var enabled: Boolean
//		get() = _enabled
//		set(value) {
//			if (_enabled == value) return
//			_enabled = value
//			if (!value) stop()
//		}
//
//	fun stop() {
//		setWatchingTouch(false)
//		setIsPinching(false)
//	}
//
//	init {
//		target.deactivated.add(this::targetDeactivatedHandler)
//		target.touchStart().add(this::touchStartHandler)
//	}
//
//	override fun dispose() {
//		stop()
//		_pinchStart.dispose()
//		_pinch.dispose()
//		_pinchEnd.dispose()
//
//		target.deactivated.remove(this::targetDeactivatedHandler)
//		target.touchStart().remove(this::touchStartHandler)
//	}
//}
//
//
//fun UiComponent.pinchAttachment(affordance: Float = Pinch.DEFAULT_AFFORDANCE): Pinch {
//	return createOrReuseAttachment(Pinch, { PinchImpl(this, affordance) })
//}
//
///**
// * @see Pinch.pinchStart
// */
//fun UiComponent.pinchStart(): Signal<(PinchInteraction) -> Unit> {
//	return pinchAttachment().pinchStart
//}
//
///**
// * @see Pinch.pinch
// */
//fun UiComponent.pinch(): Signal<(PinchInteraction) -> Unit> {
//	return pinchAttachment().pinch
//}
//
///**
// * @see Pinch.pinchEnd
// */
//fun UiComponent.pinchEnd(): Signal<(PinchInteraction) -> Unit> {
//	return pinchAttachment().pinchEnd
//}