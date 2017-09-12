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

package com.acornui.core.di

import com.acornui.core.Disposable


/**
 * A scoped object has a dependency injector.
 */
interface Scoped {

	val injector: Injector
}

fun <T : Any> Scoped.injectOptional(key: DKey<T>, factory: () -> T): T = injector.injectOptional(key, factory)
fun <T : Any> Scoped.injectOptional(key: DKey<T>): T? = injector.injectOptional(key)
fun <T : Any> Scoped.inject(key: DKey<T>): T = injector.inject(key)

interface Injector {

	val isLocked: Boolean

	/**
	 * Returns true if this injector contains a dependency with the given key.
	 */
	fun containsKey(key: DKey<*>): Boolean

	fun <T : Any> injectOptional(key: DKey<T>): T?

	fun <T : Any> injectOptional(key: DKey<T>, factory: () -> T): T {
		@Suppress("UNCHECKED_CAST")
		return injectOptional(key) ?: return factory()
	}

	fun <T : Any> inject(key: DKey<T>): T {
		@Suppress("UNCHECKED_CAST")
		return injectOptional(key) ?: throw Exception("Dependency not found for key: $key")
	}
}

class InjectorImpl(private val parent: Injector? = null) : Injector, Disposable {

	private val dependencies = HashMap<DKey<*>, Any>()
	private val dependenciesOrdered = ArrayList<Any>()

	private var _isLocked: Boolean = false

	override val isLocked: Boolean
		get() = _isLocked

	/**
	 * When all dependencies on an injector is set, lock the injector so it becomes immutable.
	 */
	fun lock() {
		_isLocked = true
	}

	override fun containsKey(key: DKey<*>): Boolean {
		return dependencies.containsKey(key)
	}

	@Suppress("UNCHECKED_CAST")
	override fun <T : Any> injectOptional(key: DKey<T>): T? {
		if (key.isPrivate && isLocked)
			throw Exception("This dependency key is for bootstrap use only.")
		var d = dependencies[key] as T?
		if (d == null) {
			d = parent?.injectOptional(key)
			if (d == null && parent == null) {
				d = key.factory(this)
				if (d != null) {
					// If the dependency key's factory method produces an instance, set it on the root injector.
					_set(key, d)
				}
			}
		}
		return d
	}

	operator fun <T : Any> set(key: DKey<T>, value: T) {
		if (isLocked) throw Exception("Dependencies may not be added after the Injector has been locked.")
		_set(key, value)
		if (key.extends != null) {
			@Suppress("UNCHECKED_CAST")
			set(key.extends as DKey<Any>, value)
		}
	}

	@Suppress("UNCHECKED_CAST") private fun <T : Any> _set(key: DKey<T>, value: T) {
		dependencies[key] = value
		if (!dependenciesOrdered.contains(value))
			dependenciesOrdered.add(value)
	}

	override fun dispose() {
		// Dispose the dependencies in the reverse order they were added:
		for (i in dependenciesOrdered.lastIndex downTo 0) {
			(dependenciesOrdered[i] as? Disposable)?.dispose()
		}
		dependencies.clear()
		dependenciesOrdered.clear()
	}
}

/**
 * A DependencyKey is a marker interface indicating an object representing a key of a specific dependency type.
 */
interface DKey<T : Any> {

	/**
	 * If a DKey is private, it may not be injected after the Injector instance is locked.
	 */
	val isPrivate: Boolean
		get() = false

	val extends: DKey<*>?
		get() = null

	/**
	 * A dependency key has an optional factory method, where if it provides a non-null value, the
	 * dependency doesn't need to be set before use, and the factory method will produce the default implementation.
	 */
	fun factory(injector: Injector): T? = null

}

open class DependencyKeyImpl<T : Any> : DKey<T>

/**
 * Creates a dependency key with the given factory function.
 */
fun <T : Any> dKey(f: () -> T): DKey<T> {
	return object : DKey<T> {
		override fun factory(injector: Injector): T? {
			return f()
		}
	}
}