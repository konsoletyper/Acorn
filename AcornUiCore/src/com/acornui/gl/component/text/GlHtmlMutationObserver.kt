//package com.acornui.gl.component.text
//
//import com.acornui.component.text.MutationObserver
//import com.acornui.component.text.MutationObserverInit
//import com.acornui.component.text.HtmlMutationRecord
//import com.acornui.signal.Signal1
//
//class GlHtmlMutationObserver : MutationObserver {
//
//	override val changed: Signal1<List<HtmlMutationRecord>> = Signal1()
//	override val isConnected: Boolean = false
//
//	override fun connect(options: MutationObserverInit): Boolean {
//		return false
//	}
//
//	override fun disconnect() {
//	}
//}