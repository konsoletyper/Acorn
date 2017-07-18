package com.acornui.component

import com.acornui.core.di.DKey
import com.acornui.core.di.DependencyKeyImpl
import com.acornui.core.di.Owned

interface Rect : UiComponent {

	val style: BoxStyle

	companion object {
		val FACTORY_KEY: DKey<(owner: Owned) -> Rect> = DependencyKeyImpl()
	}
}

fun Owned.rect(init: ComponentInit<Rect> = {}): Rect {
	val r = injector.inject(Rect.FACTORY_KEY)(this)
	r.init()
	return r
}