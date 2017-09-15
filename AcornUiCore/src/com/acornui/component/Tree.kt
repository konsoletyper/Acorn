/*
 * Copyright 2017 Nicholas Bilyk
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.acornui.component

import com.acornui.collection.pop
import com.acornui.component.layout.SizeConstraints
import com.acornui.component.layout.algorithm.hGroup
import com.acornui.component.layout.algorithm.vGroup
import com.acornui.component.style.StyleBase
import com.acornui.component.style.StyleTag
import com.acornui.component.style.StyleType
import com.acornui.component.style.noSkin
import com.acornui.component.text.text
import com.acornui.core.Parent
import com.acornui.core.ParentBase
import com.acornui.core.ParentRo
import com.acornui.core.cache.recycle
import com.acornui.core.cursor.StandardCursors
import com.acornui.core.cursor.cursor
import com.acornui.core.di.Owned
import com.acornui.core.di.own
import com.acornui.core.input.interaction.click
import com.acornui.math.Bounds
import com.acornui.signal.*

/**
 * A Tree component represents a hierarchy of parent/children relationships.
 */
class Tree<E : ParentRo<E>>(owner: Owned, rootFactory: (tree: Tree<E>) -> TreeItemRenderer<E> = { DefaultTreeItemRenderer(it, it) }) : ContainerImpl(owner) {

	private val toggledChangeRequestedCancel = Cancel()
	private val _nodeToggledChanging = own(Signal3<E, Boolean, Cancel>())

	/**
	 * A tree node toggled change is being requested. This may be prevented by calling [Cancel.cancel].
	 */
	val nodeToggledChanging: Signal<(node: ParentRo<E>, newValue: Boolean, cancel: Cancel) -> Unit>
		get() = _nodeToggledChanging

	private val _nodeToggledChanged = own(Signal2<E, Boolean>())

	/**
	 * A tree node toggled value has changed.
	 * @see getNodeToggled
	 */
	val nodeToggledChanged: Signal<(node: E, newValue: Boolean) -> Unit>
		get() = _nodeToggledChanged

	private val _root: TreeItemRenderer<E> = addChild(rootFactory(this))
	val root: TreeItemRendererRo<E>
		get() = _root

	var data: E?
		get() = _root.data
		set(value) {
			_root.data = value
		}

	var nodeToString: (node: E) -> String = { it.toString() }

	init {
		cascadingFlags = cascadingFlags or ValidationFlags.PROPERTIES
		styleTags.add(Companion)
	}

	/**
	 * Requests that a node be toggled.
	 */
	fun setNodeToggled(node: E, toggled: Boolean) {
		val renderer = _root.findElement { it.data == node } ?: return
		_nodeToggledChanging.dispatch(node, toggled, toggledChangeRequestedCancel.reset())
		if (toggledChangeRequestedCancel.canceled()) return
		renderer.toggled = toggled
		_nodeToggledChanged.dispatch(node, toggled)
	}

	/**
	 * Returns true if the renderer for the given node is currently opened.
	 * (This returns false if the node could not be found.
	 */
	fun getNodeToggled(node: E): Boolean {
		return _root.findElement { it.data == node }?.toggled == true
	}

	override fun updateSizeConstraints(out: SizeConstraints) {
		out.set(_root.sizeConstraints)
	}

	override fun updateLayout(explicitWidth: Float?, explicitHeight: Float?, out: Bounds) {
		_root.setSize(explicitWidth, explicitHeight)
		out.set(_root.bounds)
	}

	private fun TreeItemRenderer<E>.findElement(callback: (TreeItemRenderer<E>) -> Boolean): TreeItemRenderer<E>? {
		if (callback(this)) return this
		for (i in 0..elements.lastIndex) {
			val found = elements[i].findElement(callback)
			if (found != null) return found
		}
		return null
	}

	companion object : StyleTag
}

interface TreeItemRendererRo<out E : ParentRo<E>> : ItemRendererRo<E>, ToggleableRo {

	val elements: List<TreeItemRendererRo<E>>

}

interface TreeItemRenderer<E : ParentRo<E>> : TreeItemRendererRo<E>, ItemRenderer<E>, Toggleable {

	override val elements: List<TreeItemRenderer<E>>

}

open class DefaultTreeItemRenderer<E : ParentRo<E>>(owner: Owned, protected val tree: Tree<E>) : ContainerImpl(owner), TreeItemRenderer<E> {

	private var _data: E? = null
	override var data: E?
		get() = _data
		set(value) {
			if (_data == value) return
			_data = value
			invalidateProperties()
		}

	val style = bind(DefaultTreeItemRendererStyle())

	protected var openedFolderIcon: UiComponent? = null
	protected var closedFolderIcon: UiComponent? = null
	protected var leafIcon: UiComponent? = null

	protected val hGroup = addChild(hGroup())
	protected val textField = hGroup.addElement(text())
	protected val childrenContainer = addChild(vGroup())

	private val _elements = ArrayList<TreeItemRenderer<E>>()
	override val elements: List<TreeItemRenderer<E>>
		get() = _elements

	init {
		cascadingFlags = cascadingFlags or ValidationFlags.PROPERTIES
		styleTags.add(Companion)

		hGroup.cursor(StandardCursors.HAND)
		hGroup.click().add {
			val d = _data
			if (d != null && !isLeaf)
				tree.setNodeToggled(d, !toggled)
		}

		watch(style) {
			openedFolderIcon?.dispose()
			openedFolderIcon = hGroup.addElement(0, it.openedFolderIcon(this))
			closedFolderIcon?.dispose()
			closedFolderIcon = hGroup.addElement(0, it.closedFolderIcon(this))
			leafIcon?.dispose()
			leafIcon = if (it.useLeaf) hGroup.addElement(0, it.leafIcon(this)) else null
		}
	}

	private var _toggled = false
	override var toggled: Boolean
		get() = _toggled
		set(value) {
			if (_toggled == value) return
			_toggled = value
			invalidateProperties()
		}

	protected open val isLeaf: Boolean
		get() = _data == null || _data!!.children.isEmpty()

	override fun updateProperties() {
		openedFolderIcon?.visible = false
		closedFolderIcon?.visible = false
		leafIcon?.visible = false
		if (style.useLeaf && isLeaf) {
			leafIcon?.visible = true
		} else {
			if (toggled) {
				openedFolderIcon?.visible = true
			} else {
				closedFolderIcon?.visible = true
			}
		}
		updateText()
		updateChildren()
	}

	protected open fun updateText() {
		textField.text = if (_data == null) "" else tree.nodeToString(_data!!)
	}

	protected open fun updateChildren() {
		recycle(_data?.children, _elements, this::createChildRenderer, {
			element, item, index ->
			if (item !== element.data) {
				element.data = item
				element.toggled = false
			}
			childrenContainer.addElement(index, element)
		}, {
			it.dispose()
		})
		childrenContainer.visible = toggled
	}

	protected open fun createChildRenderer(): TreeItemRenderer<E> {
		return DefaultTreeItemRenderer(this, tree)
	}

	override fun updateLayout(explicitWidth: Float?, explicitHeight: Float?, out: Bounds) {
		hGroup.setSize(explicitWidth, null)
		childrenContainer.setSize(
				if (explicitWidth == null) null else explicitWidth - style.indent,
				if (explicitHeight == null) null else explicitHeight - hGroup.height - style.verticalGap)

		childrenContainer.setPosition(style.indent, hGroup.height + style.verticalGap)
		if (toggled && childrenContainer.elements.isNotEmpty())
			out.set(maxOf(childrenContainer.right, hGroup.right), childrenContainer.bottom)
		else
			out.set(hGroup.right, hGroup.bottom)
	}

	companion object : StyleTag
}

open class DefaultTreeItemRendererStyle : StyleBase() {

	override val type: StyleType<DefaultTreeItemRendererStyle> = Companion

	var openedFolderIcon by prop(noSkin)
	var closedFolderIcon by prop(noSkin)
	var leafIcon by prop(noSkin)

	/**
	 * If the node has no children, consider the node to be a leaf, and use the leaf icon.
	 */
	var useLeaf by prop(true)

	/**
	 * The number of pixels to indent from the left for child nodes.
	 */
	var indent by prop(5f)

	var verticalGap by prop(5f)

	companion object : StyleType<DefaultTreeItemRendererStyle>
}

fun <E : ParentRo<E>> Owned.tree(rootFactory: (tree: Tree<E>) -> TreeItemRenderer<E> = { DefaultTreeItemRenderer(it, it) }, init: ComponentInit<Tree<E>> = {}): Tree<E> {
	val tree = Tree(this, rootFactory)
	tree.init()
	return tree
}

/**
 * A simple data model representing the most rudimentary tree node.
 */
class TreeNode(val label: String) : ParentBase<TreeNode>(), Parent<TreeNode> {

	/**
	 * Syntax sugar for addChild.
	 */
	operator fun TreeNode.unaryPlus(): TreeNode {
		this@TreeNode.addChild(this@TreeNode.children.size, this)
		return this
	}

	/**
	 * @see Tree.nodeToString
	 */
	override fun toString(): String = label


}

fun treeNode(label: String, init: TreeNode.() -> Unit = {}): TreeNode {
	val treeNode = TreeNode(label)
	treeNode.init()
	return treeNode
}
