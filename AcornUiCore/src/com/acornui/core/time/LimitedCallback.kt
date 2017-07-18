package com.acornui.core.time

import com.acornui.core.*
import com.acornui.core.di.Owned
import com.acornui.core.di.Scoped
import com.acornui.core.di.inject

class LimitedCallback(val timeDriver: TimeDriver, val duration: Float, val callback: () -> Unit) : DrivableChildBase(), DrivableChild, Disposable {

	private var currentTime: Float = 0f
	private var callAgain: Boolean = false

	override fun update(stepTime: Float) {
		currentTime += stepTime
		if (currentTime > duration) {
			currentTime = 0f
			remove()
			if (callAgain) {
				callAgain = false
				callback()
			}
		}
	}

	operator fun invoke() {
		if (!isActive) {
			timeDriver.addChild(this)
			callback()
		} else {
			callAgain = true
		}
	}

}

fun Scoped.limitedCallback(duration: Float, callback: () -> Unit): LimitedCallback {
	return LimitedCallback(inject(TimeDriver), duration, callback)
}

class DelayedCallback(val timeDriver: TimeDriver, val duration: Float, val callback: () -> Unit) : DrivableChildBase(), DrivableChild, Disposable {

	private var currentTime: Float = 0f

	override fun update(stepTime: Float) {
		currentTime += stepTime
		if (currentTime > duration) {
			currentTime = 0f
			remove()
			callback()
		}
	}

	operator fun invoke() {
		if (!isActive) {
			timeDriver.addChild(this)
		} else {
			currentTime = 0f
		}
	}

}

fun Scoped.delayedCallback(duration: Float, callback: () -> Unit): DelayedCallback {
	return DelayedCallback(inject(TimeDriver), duration, callback)
}