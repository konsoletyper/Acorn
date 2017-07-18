//package com.acornui.js.dom
//
//import com.acornui.collection.ListBase
//import com.acornui.component.text.*
//import com.acornui.js.html.MutationObserver2
//import com.acornui.js.html.mutationObserverOptions
//import com.acornui.js.html.mutationObserversSupported
//import com.acornui.signal.Signal1
//import org.w3c.dom.MutationRecord
//import org.w3c.dom.Node
//
///**
// * An implementation of [MutationObserver] that wraps a native HTML MutationObserver.
// */
//class DomMutationObserver(
//		private val root: TextField,
//		private val node: Node) : MutationObserver {
//
//	override val changed: Signal1<List<HtmlMutationRecord>> = Signal1()
//
//	private var _isConnected: Boolean = false
//
//	override val isConnected: Boolean
//		get() = _isConnected
//
//	private val observer: MutationObserver2?
//
//	init {
//		if (mutationObserversSupported) {
//			observer = MutationObserver2() {
//				records, observer ->
//				if (changed.isNotEmpty()) {
//					changed.dispatch(DomHtmlMutationRecordList(root, records))
//				}
//			}
//		} else {
//			observer = null
//		}
//	}
//
//	override fun connect(options: MutationObserverInit): Boolean {
//		if (_isConnected) throw Exception("Already connected.")
//		if (observer == null) return false
//		_isConnected = true
//		observer.observe(node,
//				mutationObserverOptions(
//						options.childList,
//						options.attributes,
//						options.characterData,
//						options.subtree,
//						options.attributeOldValue,
//						options.characterDataOldValue,
//						options.attributeFilter
//				)
//		)
//		return true
//	}
//
//	override fun disconnect() {
//		if (!_isConnected) return
//		_isConnected = false
//		observer?.disconnect()
//	}
//}
//
//class DomHtmlMutationRecord(
//		private val root: TextField,
//		internal val record: MutationRecord
//) : HtmlMutationRecord {
//
//	override val type: HtmlMutationType
//
//	override val target by lazy { createDomNode(root, record.target) }
//
//	override val addedNodes by lazy { DomNodeList(root, record.addedNodes) }
//
//	override val removedNodes by lazy { DomNodeList(root, record.removedNodes) }
//
//	override val previousSibling by lazy {
//		if (record.previousSibling == null) null else createDomNode(root, record.previousSibling!!)
//	}
//
//	override val nextSibling by lazy {
//		if (record.nextSibling == null) null else createDomNode(root, record.nextSibling!!)
//	}
//
//	override val attributeName: String?
//		get() = record.attributeName
//
//	override val attributeNamespace: String?
//		get() = record.attributeNamespace
//
//	override val oldValue: String?
//		get() = record.oldValue
//
//	init {
//		type = when (record.type) {
//			"childList" -> HtmlMutationType.CHILD_LIST
//			"attributes" -> HtmlMutationType.ATTRIBUTES
//			"characterData" -> HtmlMutationType.CHARACTER_DATA
//			else -> HtmlMutationType.UNKNOWN
//		}
//	}
//}
//
//class DomHtmlMutationRecordList(
//		private val root: TextField,
//		private val target: Array<MutationRecord>,
//		private val fromIndex: Int = 0,
//		private val toIndex: Int = Int.MAX_VALUE
//) : ListBase<DomHtmlMutationRecord>() {
//
//	override fun get(index: Int): DomHtmlMutationRecord {
//		return DomHtmlMutationRecord(root, target[index + fromIndex])
//	}
//
//	override val size: Int
//		get() {
//			val s = toIndex - fromIndex
//			val len = target.size
//			if (s < len) return s
//			return len
//		}
//
//	override fun indexOf(element: DomHtmlMutationRecord): Int {
//		val f = element.record
//		for (i in 0..lastIndex) {
//			if (target[i + fromIndex] == f) return i
//		}
//		return -1
//	}
//
//	override fun lastIndexOf(element: DomHtmlMutationRecord): Int {
//		val f = element.record
//		for (i in lastIndex downTo 0) {
//			if (target[i + fromIndex] == f) return i
//		}
//		return -1
//	}
//
//	override fun subList(fromIndex: Int, toIndex: Int): List<DomHtmlMutationRecord> {
//		return DomHtmlMutationRecordList(root, target, fromIndex + this.fromIndex, toIndex + this.fromIndex)
//	}
//}