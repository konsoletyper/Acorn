//package com.acornui.component.text
//
//import com.acornui.core.Disposable
//import com.acornui.signal.Signal1
//
//data class MutationObserverInit(
//
//		/**
//		 * Set to true if additions and removals of the target node's child elements (including text nodes)
//		 * are to be observed.
//		 */
//		val childList: Boolean = false,
//
//		/**
//		 * Set to true if mutations to target's attributes are to be observed.
//		 */
//		val attributes: Boolean = false,
//
//		/**
//		 * Set to true if mutations to target's data are to be observed.
//		 */
//		val characterData: Boolean = false,
//
//		/**
//		 * 	Set to true if mutations to not just target, but also target's descendants are to be observed.
//		 */
//		val subtree: Boolean = false,
//
//		/**
//		 * 	Set to true if attributes is set to true and target's attribute value before the mutation needs
//		 * 	to be recorded.
//		 */
//		val attributeOldValue: Boolean = false,
//
//		/**
//		 * Set to true if characterData is set to true and target's data before the mutation needs to be recorded.
//		 */
//		val characterDataOldValue: Boolean = false,
//
//		/**
//		 * Set to an array of attribute local names (without namespace) if not all attribute mutations need to be
//		 * observed.
//		 */
//		@Suppress("ArrayInDataClass")
//		val attributeFilter: Array<String>? = null
//
//) {}
//
///**
// * A mutation observer watches changes in a node tree, invoking a callback whenever something changes.
// *
// * @see TextField.createMutationObserver
// */
//interface MutationObserver : Disposable {
//
//	/**
//	 * Dispatched when there have been mutations.
//	 */
//	val changed: Signal1<List<HtmlMutationRecord>>
//
//	val isConnected: Boolean
//
//	/**
//	 * Begins watching for html mutations.
//	 * When there are, the [changed] signal will be dispatched.
//	 * @return True if the connection was successful.
//	 */
//	fun connect(options: MutationObserverInit): Boolean
//
//	/**
//	 * Ends watching for html mutations.
//	 */
//	fun disconnect()
//
//	override fun dispose() {
//		if (isConnected) disconnect()
//		changed.dispose()
//	}
//}
//
//interface HtmlMutationRecord {
//
//	val type: HtmlMutationType
//
//	/**
//	 * Returns the node the mutation affected, depending on the MutationRecord.type.
//	 * For attributes, it is the element whose attribute changed.
//	 * For characterData, it is the CharacterData node.
//	 * For childList, it is the node whose children changed.
//	 */
//	val target: Node
//
//	/**
//	 * Return the nodes added. Will be an empty NodeList if no nodes were added.
//	 */
//	val addedNodes: List<Node>
//
//	/**
//	 * Return the nodes removed. Will be an empty NodeList if no nodes were removed.
//	 */
//	val removedNodes: List<Node>
//
//	/**
//	 * Return the previous sibling of the added or removed nodes, or null.
//	 */
//	val previousSibling: Node?
//
//	/**
//	 * Return the next sibling of the added or removed nodes, or null.
//	 */
//	val nextSibling: Node?
//
//	/**
//	 * Returns the local name of the changed attribute, or null.
//	 */
//	val attributeName: String?
//
//	/**
//	 * Returns the namespace of the changed attribute, or null.
//	 */
//	val attributeNamespace: String?
//
//	/**
//	 * The return value depends on the MutationRecord.type.
//	 * For attributes, it is the value of the changed attribute before the change.
//	 * For characterData, it is the data of the changed node before the change.
//	 * For childList, it is null.
//	 */
//	val oldValue: String?
//}
//
//enum class HtmlMutationType {
//
//	CHILD_LIST,
//
//	ATTRIBUTES,
//
//	CHARACTER_DATA,
//
//	/**
//	 * Used only when the browser has a mutation type completely unknown.
//	 */
//	UNKNOWN
//}