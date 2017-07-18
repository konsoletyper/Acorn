//package com.acornui.js.dom
//
//import com.acornui.collection.ListBase
//import com.acornui.component.text.Node
//import com.acornui.component.text.TextField
//import com.acornui.js.dom.component.DomComponent
//import org.w3c.dom.NodeList
//import kotlin.browser.document
//import org.w3c.dom.Node as W3cNode
//import org.w3c.dom.HTMLElement as W3cHtmlElement
//
//open class DomNode internal constructor(
//		internal val root: TextField,
//		internal val node: W3cNode
//) : Node {
//
//	override val parent: DomNode? by lazy {
//		if (node == (root.native as DomComponent).element) null
//		else if (node.parentNode == null) null
//		else createDomNode(root, node.parentNode!!)
//	}
//
//	override val nodeType: Short = node.nodeType
//	override val nodeName: String = node.nodeName
//
//	override val children: List<DomNode> by lazy { DomNodeList(root, node.childNodes) }
//
//	override var nodeValue: String?
//		get() = node.nodeValue
//		set(value) {
//			node.nodeValue = value
//		}
//	override var textContent: String?
//		get() = node.textContent
//		set(value) {
//			node.textContent = value
//		}
//
//	override fun normalize() {
//		node.normalize()
//	}
//
//	override fun cloneNode(deep: Boolean): Node {
//		return createDomNode(root, node.cloneNode(deep))
//	}
//
//	override fun isEqualNode(otherNode: Node?): Boolean {
//		return isEqualNode(otherNode)
//	}
//
//	override fun compareDocumentPosition(other: Node): Short {
//		return node.compareDocumentPosition((other as DomNode).node)
//	}
//
//	override fun lookupNamespaceURI(prefix: String?): String? {
//		return node.lookupNamespaceURI(prefix)
//	}
//
//	override fun lookupPrefix(namespace: String?): String? {
//		return node.lookupPrefix(namespace)
//	}
//
//	override fun isDefaultNamespace(namespace: String?): Boolean {
//		return node.isDefaultNamespace(namespace)
//	}
//
//	override fun <S : Node> addChild(index: Int, child: S): S {
//		val n = (child as DomNode).node
//		if (index == children.size) node.appendChild(n)
//		else node.insertBefore(n, node.childNodes[index])
//		return child
//	}
//
//	override fun removeChild(index: Int): Node {
//		val child = node.childNodes[index] ?: throw Exception("index $index is out of bounds.")
//		node.removeChild(child)
//		return createDomNode(root, child)
//	}
//
//	override fun swapChildren(indexA: Int, indexB: Int) {
//		val size = node.childNodes.length
//		if (size <= indexA) throw Exception("indexA $indexA is out of bounds.")
//		if (size <= indexB) throw Exception("indexB $indexB is out of bounds.")
//		if (placeholder == null) placeholder = document.createElement("span")
//		val nodeA = node.childNodes[indexA]!!
//		val nodeB = node.childNodes[indexB]!!
//		node.replaceChild(placeholder!!, nodeB) // Replace nodeB with a placeholder
//		node.replaceChild(nodeB, nodeA) // Replace nodeA with nodeB
//		node.replaceChild(nodeA, placeholder!!) // Replace the placeholder with nodeA
//	}
//
//	override fun equals(other: Any?): Boolean {
//		return this === other || this.node === (other as DomNode).node
//	}
//
//	override fun hashCode(): Int {
//		return 31 + node.hashCode()
//	}
//
//	companion object {
//		private var placeholder: W3cNode? = null
//	}
//}
//
///**
// * Provides a List<HtmlNode> interface to a native dom NodeList.
// */
//class DomNodeList(
//		private val root: TextField,
//		private val list: NodeList,
//		private val fromIndex: Int = 0,
//		private val toIndex: Int = Int.MAX_VALUE) : ListBase<DomNode>() {
//
//	override fun get(index: Int): DomNode {
//		return createDomNode(root, list[index + fromIndex]!!)
//	}
//
//	override val size: Int
//		get() {
//			val s = toIndex - fromIndex
//			val len = list.length
//			if (s < len) return s
//			return len
//		}
//
//	override fun indexOf(element: DomNode): Int {
//		val f = element.node
//		for (i in 0..lastIndex) {
//			if (list[i + fromIndex] == f) return i
//		}
//		return -1
//	}
//
//	override fun lastIndexOf(element: DomNode): Int {
//		val f = element.node
//		for (i in lastIndex downTo 0) {
//			if (list[i + fromIndex] == f) return i
//		}
//		return -1
//	}
//
//	override fun subList(fromIndex: Int, toIndex: Int): List<DomNode> {
//		return DomNodeList(root, list, fromIndex + this.fromIndex, toIndex + this.fromIndex)
//	}
//}
//
//open class DomHtmlElement internal constructor(
//		root: TextField,
//		val element: W3cHtmlElement
//) : DomNode(root, element) {
//
//}
//
//fun createDomNode(root: TextField, node: W3cNode): DomNode {
//	if (node is W3cHtmlElement) {
//		return DomHtmlElement(root, node)
//
//	} else {
//		return DomNode(root, node)
//	}
//
//}