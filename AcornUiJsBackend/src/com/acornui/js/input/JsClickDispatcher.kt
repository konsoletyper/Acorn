package com.acornui.js.input

import com.acornui.core.di.Injector
import com.acornui.core.input.interaction.ClickDispatcher
import org.w3c.dom.HTMLElement

/**
 * An implementation of ClickDispatcher that doesn't fire the click event until the browser fires the click event.
 */
class JsClickDispatcher(
		injector: Injector,
		private val rootElement: HTMLElement
) : ClickDispatcher(injector) {

	override fun addClickHandlers() {
		rootElement.addEventListener("click", this::fireHandler, true)
	}

	override fun removeClickHandlers() {
		rootElement.removeEventListener("click", this::fireHandler, true)
	}
}