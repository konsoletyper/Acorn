package com.acornui.core.selection

import com.acornui.core.Disposable
import com.acornui.core.di.DKey
import com.acornui.signal.Signal0

interface SelectionManager : Disposable {

	val selectionChanged: Signal0

	companion object : DKey<SelectionManager> {}
}

class SelectionManagerImpl : SelectionManager {
	override val selectionChanged = Signal0()

	override fun dispose() {
		selectionChanged.dispose()
	}
}