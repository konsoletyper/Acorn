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

@file:Suppress("UNUSED_PARAMETER")

package com.acornui.collection

import com.acornui.core.Disposable
import com.acornui.signal.Signal

interface ObservableList<out E> : List<E> {

	/**
	 * Dispatched when an element has been added.
	 */
	val added: Signal<(index: Int, element: E) -> Unit>

	/**
	 * Dispatched when an element has been removed.
	 */
	val removed: Signal<(index: Int, element: E) -> Unit>

	/**
	 * Dispatched when an element has replaced another.
	 */
	val changed: Signal<(index: Int, oldElement: E, newElement: E) -> Unit>

	/**
	 * Dispatched when an element has been modified.
	 */
	val modified: Signal<(index: Int, element: E) -> Unit>

	/**
	 * Dispatched if this list has drastically changed, such as a batch update or a clear.
	 */
	val reset: Signal<() -> Unit>

	fun iterate(body: (E) -> Boolean, reversed: Boolean) {
		if (reversed) iterateReversed(body)
		else iterate(body)
	}

	/**
	 * Performs an iteration without allocation.
	 */
	fun iterate(body: (E) -> Boolean)

	/**
	 * Performs an iteration in reverse without allocation.
	 */
	fun iterateReversed(body: (E) -> Boolean)

	fun concurrentIterator(): ConcurrentListIterator<E>

	/**
	 * Notifies that an element has changed. This will dispatch a [modified] signal.
	 * Note: This is not in MutableObservableList because an element of an ObservableList may still be modified without
	 * modifying the list itself.
	 */
	fun notifyElementModified(index: Int)
}

interface MutableObservableList<E> : ObservableList<E>, MutableList<E> {

	override fun concurrentIterator(): MutableConcurrentListIterator<E>

	/**
	 * Updates this list without invoking signals on each change. When the [inner] method has completed, a [reset]
	 * signal will be dispatched.
	 */
	fun batchUpdate(inner: () -> Unit)

}

/**
 * A ConcurrentListIterator watches concurrent add and remove changes on the list and moves the cursor logically
 * so that items are neither skipped nor repeated.
 */
interface ConcurrentListIterator<out E> : Clearable, ListIterator<E>, Iterable<E>, Disposable {
	fun iterate(body: (E) -> Boolean)
	fun iterateReversed(body: (E) -> Boolean)
}

open class ConcurrentListIteratorImpl<out E>(
		private val list: ObservableList<E>
) : ConcurrentListIterator<E> {

	/**
	 * Index of next element to return
	 */
	var cursor: Int = 0

	/**
	 * Index of last element returned; -1 if no such
	 */
	protected var lastRet: Int = -1

	private val addedHandler = {
		index: Int, _: E ->
		if (cursor > index) cursor++
		if (lastRet > index) lastRet++
	}

	private val removedHandler = {
		index: Int, _: E ->
		if (cursor > index) cursor--
		if (lastRet > index) lastRet--
	}

	init {
		list.added.add(addedHandler)
		list.removed.add(removedHandler)
	}

	override fun hasNext(): Boolean {
		return cursor < list.size
	}

	override fun next(): E {
		val i = cursor
		if (i >= list.size)
			throw NoSuchElementException()
		cursor = i + 1
		lastRet = i
		return list[i]
	}

	override fun nextIndex(): Int {
		return cursor
	}

	override fun hasPrevious(): Boolean {
		return cursor > 0
	}

	override fun previous(): E {
		val i = cursor - 1
		if (i < 0)
			throw NoSuchElementException()
		cursor = i
		lastRet = i
		return list[i]
	}

	override fun previousIndex(): Int {
		return cursor - 1
	}

	override fun clear() {
		cursor = 0
		lastRet = -1
	}

	override fun iterator(): Iterator<E> {
		return this
	}

	override fun iterate(body: (E) -> Boolean) {
		clear()
		while (hasNext()) {
			val shouldContinue = body(next())
			if (!shouldContinue) break
		}
	}

	override fun iterateReversed(body: (E) -> Boolean) {
		clear()
		cursor = list.size
		while (hasPrevious()) {
			val shouldContinue = body(previous())
			if (!shouldContinue) break
		}
	}

	override fun dispose() {
		list.added.remove(addedHandler)
		list.removed.remove(removedHandler)
	}
}

interface MutableConcurrentListIterator<E> : ConcurrentListIterator<E>, MutableListIterator<E>, MutableIterable<E>

/**
 * A ConcurrentListIterator watches concurrent changes on the list and moves the cursor logically
 * so that items are neither skipped nor repeated.
 */
open class MutableConcurrentListIteratorImpl<E>(
		private val list: MutableObservableList<E>
) : ConcurrentListIteratorImpl<E>(list), MutableConcurrentListIterator<E> {

	override fun iterator(): MutableIterator<E> {
		return this
	}

	override fun remove() {
		if (lastRet < 0)
			throw NoSuchElementException()

		list.removeAt(lastRet)
		cursor = lastRet
		lastRet = -1
	}

	override fun set(element: E) {
		if (lastRet < 0)
			throw IllegalStateException()
		list[lastRet] = element
	}

	override fun add(element: E) {
		val i = cursor
		list.add(i, element)
		cursor = i + 1
		lastRet = -1
	}
}

fun <E> ObservableList<E>.bindUniqueAssertion() {
	added.add {
		_, element ->
		if (count2 { it == element } > 1) throw Exception("The element added: $element was not unique within this list.")
	}
	changed.add {
		_, _, newElement ->
		if (count2 { it == newElement } > 1) throw Exception("The element added: $newElement was not unique within this list.")
	}
	reset.add {
		assertUnique()
	}
	assertUnique()
}

fun <E> ObservableList<E>.assertUnique() {
	for (i in 0..lastIndex) {
		if (indexOfFirst2(i + 1, lastIndex, { it == this[i] }) != -1) {
			throw Exception("The element ${this[i]} is not unique within this list.")
		}
	}
}