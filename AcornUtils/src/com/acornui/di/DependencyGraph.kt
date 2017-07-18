package com.acornui.di

import com.acornui.collection.containsAllKeys
import com.acornui.core.Disposable


/**
 * A dependency graph is a directed graph that invokes callbacks when required dependencies have been set.
 */
class DependencyGraph<K> : Disposable {

	private val _map = HashMap<K, Any>()

	private val _pending = ArrayList<Pair<Array<K>, DependencyGraph<K>.() -> Unit>>()

	private var thenListenersIterating: Boolean = false
	private var head: ThenCallback? = null
	private var tail: ThenCallback? = null

	operator fun get(key: K): Any? {
		return _map[key]
	}

	/**
	 * Sets a dependency.
	 */
	operator fun set(key: K, value: Any) {
		_map[key] = value

		val iterator = _pending.iterator()
		while (iterator.hasNext()) {
			val (dependencies, callback) = iterator.next()
			if (dependencies.contains(key)) {
				// A pending callback is dependent on the key just set, check if it's now ready.
				if (_map.containsAllKeys(dependencies)) {
					iterator.remove()
					callback()
				}
			}
		}
		invokeThenListeners()
	}

	private fun invokeThenListeners() {
		if (thenListenersIterating) return
		thenListenersIterating = true
		while (head != null && _pending.isEmpty()) {
			val c = head!!.callback
			head = head!!.next
			c()
			if (head == null)
				tail = null
		}
		thenListenersIterating = false
	}

	/**
	 * Invokes the provided callback when all provided dependencies have been set.
	 */
	fun on(vararg dependencies: K, callback: DependencyGraph<K>.() -> Unit) {
		@Suppress("unchecked_cast")
		val isReady = _map.containsAllKeys(dependencies as Array<K>)
		if (isReady) {
			callback()
		} else {
			_pending.add(Pair(dependencies, callback))
		}
	}

	/**
	 * Waits for the given dependencies before invoking [then] callbacks.
	 */
	fun waitFor(vararg dependencies: K) = on(*dependencies) {}

	/**
	 * Returns true if all of the provided keys are currently set.
	 */
	fun containsAllKeys(keys: Array<K>): Boolean {
		return _map.containsAllKeys(keys)
	}

	/**
	 * Invokes the callback when there are no more pending dependencies. Pending dependencies are set
	 * via [on] and [waitFor].
	 * If the provided callback adds new pending dependencies, subsequent [then] callbacks will wait for
	 * the interjected dependencies.
	 */
	fun then(callback: ()->Unit) {
		if (head == null && _pending.isEmpty()) {
			callback()
		} else {
			val next = ThenCallback(callback)
			if (head == null) {
				head = next
				tail = next
			} else {
				tail!!.next = next
				tail = next
			}
		}
	}

	fun hasPending(): Boolean = _pending.isNotEmpty()

	/**
	 * Clears the map, [on] handlers, and [then] handlers.
	 */
	fun clear() {
		_map.clear()
		head = null
		tail = null
		_pending.clear()
	}

	override fun dispose() {
		clear()
	}
}

private class ThenCallback(
		val callback: ()->Unit
) {
	var next: ThenCallback? = null
}