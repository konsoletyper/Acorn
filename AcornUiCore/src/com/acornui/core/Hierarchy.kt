/*
 * Copyright 2015 Nicholas Bilyk
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

@file:Suppress("unused")

package com.acornui.core

import com.acornui._assert
import com.acornui.collection.*


/**
 * An abstract child to a single parent.
 */
interface Child {

	val parent: Parent<out Child>?

}

fun <T: Child> T.previousSibling(): T? {
	@Suppress("UNCHECKED_CAST")
	val p = parent as? Parent<T> ?: return null
	val c = p.children
	val index = c.indexOf(this)
	if (index == 0) return null
	return c[index - 1]
}

fun <T : Child> T.nextSibling(): T? {
	@Suppress("UNCHECKED_CAST")
	val p = parent as? Parent<T> ?: return null
	val c = p.children
	val index = c.indexOf(this)
	if (index == c.lastIndex) return null
	return c[index + 1]
}

/**
 * An abstract parent to children relationship of a parameterized type.
 * Acorn hierarchies are conventionally
 * A : B -> B
 * Where B is a child of A, and A is a sub-type of B.
 * This means that when using recursion throughout the tree, all nodes can be considered to be a [Child] of type B,
 * but it must be type checked against a [Parent] of type A before continuing the traversal.
 */
interface Parent<T : Child> : Child {

	/**
	 * Returns the number of children this parent contains.
	 */
	@Deprecated("Use children.size", ReplaceWith("children.size"))
	val numChildren: Int
		get() = children.size

	/**
	 * Returns a read-only list of the children.
	 */
	val children: List<T>

	/**
	 * Returns true if this container contains the given child.
	 */
	@Deprecated("Use children.contains(child)", ReplaceWith("children.contains(child)"))
	fun containsChild(child: T): Boolean {
		return children.contains(child)
	}

	/**
	 * Returns the child at the given index, or null if the index is out of bounds.
	 */
	@Deprecated("Use children.getOrNull(index)", ReplaceWith(("children.getOrNull(index)")))
	fun getChildAt(index: Int): T? {
		if (index < 0 || index >= numChildren) return null
		return children[index]
	}

	/**
	 * Iterates over the children.
	 * It is up to the implementation how concurrent modification works.
	 */
	fun iterateChildren(body: (T) -> Boolean, reversed: Boolean) {
		if (reversed) {
			iterateChildrenReversed(body)
		} else {
			iterateChildren(body)
		}
	}

	/**
	 * Iterates forward over the children.
	 */
	fun iterateChildren(body: (T) -> Boolean) {
		val c = children
		for (i in 0..c.lastIndex) {
			val shouldContinue = body(c[i])
			if (!shouldContinue) break
		}
	}

	/**
	 * Iterates backward over the children.
	 */
	fun iterateChildrenReversed(body: (T) -> Boolean) {
		val c = children
		for (i in c.lastIndex downTo 0) {
			val shouldContinue = body(c[i])
			if (!shouldContinue) break
		}
	}
}

/**
 * An interface to Parent that allows write access.
 */
interface MutableParent<T : Child> : Parent<T> {

	fun <S : T> addChild(child: S): S = addChild(numChildren, child)

	/**
	 * Adds the specified child to this container.
	 * @param index The index of where to insert the child. By default this is the end of the list.
	 * @return Returns the newly added child.
	 */
	fun <S : T> addChild(index: Int, child: S): S

	fun addAllChildren(children: Iterable<T>) = addAllChildren(numChildren, children)

	fun addAllChildren(index: Int, children: Iterable<T>) {
		var i = index
		for (child in children) {
			addChild(i++, child)
		}
	}

	fun addAllChildren(children: Array<T>) = addAllChildren(numChildren, children)

	fun addAllChildren(index: Int, children: Array<T>) {
		var i = index
		for (child in children) {
			addChild(i++, child)
		}
	}

	/**
	 * Adds a child after the provided element.
	 */
	fun addChildAfter(child: T, after: T): Int {
		val index = children.indexOf(after)
		if (index == -1) return -1
		addChild(index + 1, child)
		return index + 1
	}

	/**
	 * Adds a child after the provided element.
	 */
	fun addChildBefore(child: T, before: T): Int {
		val index = children.indexOf(before)
		if (index == -1) return -1
		addChild(index, child)
		return index
	}

	/**
	 * Removes a child from this container.
	 * @return true if the child was found and removed.
	 */
	fun removeChild(child: Child?): Boolean {
		if (child == null) return false
		val index = children.indexOf(child)
		if (index == -1) return false
		removeChild(index)
		return true
	}

	/**
	 * Removes a child at the given index from this container.
	 * @return Returns the child if it was removed, or null if the index was out of range.
	 */
	fun removeChild(index: Int): T

	/**
	 * Removes all the children and optionally disposes them (default).
	 */
	fun clearChildren() {
		val c = children
		while (c.isNotEmpty()) {
			removeChild(numChildren - 1)
		}
	}
}

/**
 * An abstract base MutableParent implementation that provides the defaults for adding and removing children.
 */
open class ParentBase<T : ParentBase<T>> : MutableParent<T>, Child, Disposable {

	override var parent: Parent<T>? = null

	protected open val _children: MutableList<T> = ArrayList()

	override val children: List<T>
		get() = _children

	/**
	 * Adds the specified child to this container.
	 * @param index The index of where to insert the child. By default this is the end of the list.
	 */
	override fun <S : T> addChild(index: Int, child: S): S {
		val n = _children.size
		_assert(index <= n, "index is out of bounds.")
		_assert(child.parent == null, "Remove the child before adding it again.")
		_children.add(index, child)
		child.parent = this
		return child
	}

	/**
	 * Removes a child at the given index from this container.
	 * This will throw an exception if this parent does not contain a child at the given index.
	 * Use [numChildren] to ensure that the index is within bounds.
	 */
	override fun removeChild(index: Int): T {
		val child = _children.removeAt(index)
		child.parent = null
		return child
	}

	/**
	 * When the parent is disposed, dispose all the children.
	 */
	override fun dispose() {
		iterateChildren {
			it.parent = null
			if (it is Disposable)
				it.dispose()
			true
		}
	}
}

/**
 * A Parent implementation that allows for concurrent modification of its children.
 */
open class ConcurrentParent<T : ParentBase<T>> : ParentBase<T>(), Disposable {

	override final val _children = ActiveList<T>()
	private val childIterator = _children.iterator()

	override val children: ObservableList<T>
		get() = _children

	override fun iterateChildren(body: (T) -> Boolean) {
		childIterator.iterate(body)
	}

	override fun iterateChildrenReversed(body: (T) -> Boolean) {
		childIterator.iterateReversed(body)
	}

	override fun dispose() {
		super.dispose()
		_children.dispose()
	}
}

//------------------------------------------------
// Hierarchy traversal methods
//------------------------------------------------

/**
 * Flags for what relative nodes to skip when traversing a hierarchy.
 */
enum class TreeWalk {

	/**
	 * Continues iteration normally.
	 */
	CONTINUE,

	/**
	 * Skips all remaining nodes, halting iteration.
	 */
	HALT,

	/**
	 * Skips current node's children.
	 */
	SKIP,

	/**
	 * Discards nodes not descending from current node.
	 * This will have no effect in post-order traversal.
	 */
	ISOLATE

}

//-------------------------------------------------
// Level order
//-------------------------------------------------

/**
 * A level-order child walk.
 * Traverses this parent's hierarchy from top to bottom, breadth first, invoking a callback on each Child element
 * (including this receiver object).
 *
 * @param reversed If true, the last child will be added to the queue first.
 * @param callback The callback to invoke on each child.
 */
@Suppress("UNCHECKED_CAST") inline fun <T : Child> T.childWalkLevelOrder(callback: (T) -> TreeWalk, reversed: Boolean) {
	val openList: CyclicList<T> = cyclicListPool.obtain() as CyclicList<T>
	openList.add(this)
	loop@ while (openList.isNotEmpty()) {
		val next = openList.shift()
		val treeWalk = callback(next)
		when (treeWalk) {
			TreeWalk.HALT -> break@loop
			TreeWalk.SKIP -> continue@loop
			TreeWalk.ISOLATE -> {
				openList.clear()
			}
			else -> {
			}
		}
		(next as? Parent<T>)?.iterateChildren({
			openList.add(it)
			true
		}, reversed)
	}
	cyclicListPool.free(openList)
}

inline fun <T : Child> T.childWalkLevelOrder(callback: (T) -> TreeWalk) {
	childWalkLevelOrder(callback, false)
}

inline fun <T : Child> T.childWalkLevelOrderReversed(callback: (T) -> TreeWalk) {
	childWalkLevelOrder(callback, true)
}

/**
 * Given a callback that returns true if the descendant is found, this method will return the first descendant with
 * the matching condition.
 * The tree traversal will be level-order.
 */
inline fun <T : Child> T.findChildLevelOrder(callback: (T) -> Boolean, reversed: Boolean): T? {
	var foundItem: T? = null
	childWalkLevelOrder({
		if (callback(it)) {
			foundItem = it
			TreeWalk.HALT
		} else {
			TreeWalk.CONTINUE
		}
	}, reversed)
	return foundItem
}

inline fun <T : Child> T.findChildLevelOrder(callback: (T) -> Boolean): T? {
	return findChildLevelOrder(callback, reversed = false)
}

inline fun <T : Child> T.findLastChildLevelOrder(callback: (T) -> Boolean): T? {
	return findChildLevelOrder(callback, reversed = true)
}

//-------------------------------------------------
// Pre-order
//-------------------------------------------------

/**
 * A pre-order child walk.
 *
 * @param callback The callback to invoke on each child.
 */
@Suppress("UNCHECKED_CAST") inline fun <T : Child> T.childWalkPreOrder(callback: (T) -> TreeWalk, reversed: Boolean) {
	val openList = cyclicListPool.obtain() as CyclicList<T>
	openList.add(this)
	loop@ while (openList.isNotEmpty()) {
		val next = openList.pop()
		val treeWalk = callback(next)
		when (treeWalk) {
			TreeWalk.HALT -> break@loop
			TreeWalk.SKIP -> continue@loop
			TreeWalk.ISOLATE -> {
				openList.clear()
			}
			else -> {
			}
		}
		(next as? Parent<T>)?.iterateChildren({
			openList.add(it)
			true
		}, !reversed)
	}
	cyclicListPool.free(openList)
}

inline fun <T : Child> T.childWalkPreOrder(callback: (T) -> TreeWalk) {
	childWalkPreOrder(callback, false)
}

inline fun <T : Child> T.childWalkPreOrderReversed(callback: (T) -> TreeWalk) {
	childWalkPreOrder(callback, true)
}

/**
 * Given a callback that returns true if the descendant is found, this method will return the first descendant with
 * the matching condition.
 * The tree traversal will be pre-order.
 */
inline fun <T : Child> T.findChildPreOrder(callback: (T) -> Boolean, reversed: Boolean): T? {
	var foundItem: T? = null
	childWalkPreOrder({
		if (callback(it)) {
			foundItem = it
			TreeWalk.HALT
		} else {
			TreeWalk.CONTINUE
		}
	}, reversed)
	return foundItem
}

inline fun <T : Child> T.findChildPreOrder(callback: (T) -> Boolean): T? {
	return findChildPreOrder(callback, reversed = false)
}

inline fun <T : Child> T.findLastChildPreOrder(callback: (T) -> Boolean): T? {
	return findChildPreOrder(callback, reversed = true)
}

/**
 * Traverses this Child's ancestry, invoking a callback on each parent up the chain.
 * (including this object)
 * @param callback The callback to invoke on each ancestor. If this callback returns true, iteration will continue,
 * if it returns false, iteration will be halted.
 * @return If [callback] returned false, this method returns the element on which the iteration halted.
 */
@Suppress("UNCHECKED_CAST")
inline fun <T : Child> T.parentWalk(callback: (T) -> Boolean): T? {
	var p: T? = this
	while (p != null) {
		val shouldContinue = callback(p)
		if (!shouldContinue) return p
		p = p.parent as T?
	}
	return null
}

fun Child.root(): Child {
	var root: Child = this
	var p: Child? = this
	while (p != null) {
		root = p
		p = p.parent
	}
	return root
}

/**
 * Returns the lineage count. 0 if this child is the stage, or is the stage, 1 if the stage is the parent,
 * 2 if the stage is the grandparent, 3 if the stage is the great grandparent, and so on.
 */
fun Child.ancestryCount(): Int {
	var count = 0
	var p = parent
	while (p != null) {
		count++
		p = p.parent
	}
	return count
}

/**
 * Populates an ArrayList with a Child's ancestry.
 * @return Returns the [out] ArrayList
 */
@Suppress("UNCHECKED_CAST")
fun <T : Child> T.ancestry(out: MutableList<T>): MutableList<T> {
	out.clear()
	parentWalk {
		out.add(it)
		true
	}
	return out
}

/**
 * Returns true if this [Child] is the ancestor of the given [child].
 * X is considered to be an ancestor of Y if doing a parent walk starting from Y, X is then reached.
 * This will return true if X === Y
 */
fun Child.isAncestorOf(child: Child): Boolean {
	var isAncestor = false
	child.parentWalk {
		isAncestor = it === this
		!isAncestor
	}
	return isAncestor
}

fun Child.isDescendantOf(ancestor: Child): Boolean {
	if (ancestor is Parent<*>) {
		return ancestor.isAncestorOf(this)
	} else {
		return false
	}
}

@Suppress("UNCHECKED_CAST")
fun <T : Child> T.findCommonParent(other: T): Parent<T>? {
	if (this === other) throw Exception("this == other")
	parentWalk {
		parentA ->
		other.parentWalk {
			parentB ->
			if (parentA === parentB) return parentA as Parent<T>
			true
		}
		true
	}
	return null
}

/**
 * Starting from this Node as the root, walks down the left side until the end, returning that child.
 */
@Suppress("UNCHECKED_CAST") fun <T : Child> T.leftDescendant(): T {
	if (this is Parent<*>) {
		if (children.isEmpty()) return this
		return children.first().leftDescendant() as T
	} else {
		return this
	}
}

/**
 * Starting from this Node as the root, walks down the right side until the end, returning that child.
 */
@Suppress("UNCHECKED_CAST") fun <T : Child> T.rightDescendant(): T {
	if (this is Parent<*>) {
		if (children.isEmpty()) return this
		return children.last().rightDescendant() as T
	} else {
		return this
	}
}

/**
 * Returns true if this Child is before the [other] Child. This considers the parent to come before the child.
 */
fun Child.isBefore(other: Child): Boolean {
	if (this === other) throw Exception("this == other")
	var a = this
	parentWalk {
		parentA ->
		var b = this
		other.parentWalk {
			parentB ->
			if (parentA === parentB) {
				val children = (parentA as Parent<*>).children
				val indexA = children.indexOf(a)
				val indexB = children.indexOf(b)
				return indexA < indexB
			}
			b = parentB
			true
		}
		a = parentA
		true
	}
	throw Exception("No common withAncestor")
}

/**
 * Returns true if this Child is after the [other] Child. This considers the parent to come before the child.
 */
fun Child.isAfter(other: Child): Boolean {
	if (this === other) throw Exception("this === other")
	var a = this
	parentWalk {
		parentA ->
		var b = this
		other.parentWalk {
			parentB ->
			if (parentA === parentB) {
				val children = (parentA as Parent<*>).children
				val indexA = children.indexOf(a)
				val indexB = children.indexOf(b)
				return indexA > indexB
			}
			b = parentB
			true
		}
		a = parentA
		true
	}
	throw Exception("No common withAncestor")
}