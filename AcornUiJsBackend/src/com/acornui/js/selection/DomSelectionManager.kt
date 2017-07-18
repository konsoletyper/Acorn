package com.acornui.js.selection

import com.acornui.core.selection.SelectionManager
import com.acornui.signal.Signal0
import org.w3c.dom.HTMLElement
import org.w3c.dom.events.Event
import kotlin.browser.document

class DomSelectionManager(
		private val root: HTMLElement
) : SelectionManager {

	override val selectionChanged: Signal0 = Signal0()

	private val selectionChangedHandler = {
		event: Event ->
		selectionChanged.dispatch()
	}

	init {
		document.addEventListener("selectionchange", selectionChangedHandler)
	}

	override fun dispose() {
		document.removeEventListener("selectionchange", selectionChangedHandler)
		selectionChanged.dispose()
	}
}