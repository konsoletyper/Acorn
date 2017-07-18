package com.acornui.core.time

import com.acornui.component.UiComponent
import com.acornui.core.Disposable
import com.acornui.core.DrivableChildBase
import com.acornui.core.Lifecycle
import com.acornui.core.di.inject

private class OnTick(private val component: UiComponent, private val callback: (stepTime: Float)->Unit) : DrivableChildBase() {

	private val timeDriver = component.inject(TimeDriver)

	private val componentActivatedHandler: (Lifecycle) -> Unit = {
		timeDriver.addChild(this)
	}

	private val componentDeactivatedHandler: (Lifecycle) -> Unit = {
		timeDriver.removeChild(this)
	}

	private val componentDisposedHandler: (Disposable) -> Unit = {
		dispose()
	}

	init {
		component.activated.add(componentActivatedHandler)
		component.deactivated.add(componentDeactivatedHandler)
		component.disposed.add(componentDisposedHandler)

		if (component.isActive) {
			timeDriver.addChild(this)
		}
	}

	override fun update(stepTime: Float) {
		callback(stepTime)
	}

	override fun dispose() {
		super.dispose()
		component.activated.remove(componentActivatedHandler)
		component.deactivated.remove(componentDeactivatedHandler)
		component.disposed.remove(componentDisposedHandler)
	}
}

fun UiComponent.onTick(callback: (stepTime: Float)->Unit): Disposable {
	return OnTick(this, callback)
}