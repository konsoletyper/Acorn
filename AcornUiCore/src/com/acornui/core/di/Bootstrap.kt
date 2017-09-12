package com.acornui.core.di

import com.acornui.core.Disposable
import com.acornui.di.DependencyGraph

class Bootstrap(
		parentInjector: Injector? = null
) : Scoped, Disposable {

	private val _injector = InjectorImpl(parentInjector)
	override val injector: Injector
		get() = _injector

	private val dependencyGraph = DependencyGraph<DKey<*>>()

	@Suppress("UNCHECKED_CAST")
	operator fun <T : Any> get(key: DKey<T>): T {
		return injector.inject(key)
	}

	operator fun <T : Any> set(key: DKey<T>, value: T) {
		_injector[key] = value
		dependencyGraph[key] = value
	}

	/**
	 * Invokes the provided callback when all provided dependencies have been set.
	 */
	fun on(vararg dependencies: DKey<*>, callback: Bootstrap.() -> Unit) {
		if (injector.isLocked)
			throw Exception("Injector is locked, cannot set any more dependencies.")

		dependencyGraph.on(*dependencies) {
			callback()
		}
	}

	/**
	 * Waits for the given dependencies before invoking [then] callbacks.
	 */
	fun waitFor(vararg dependencies: DKey<*>) = dependencyGraph.waitFor(*dependencies)

	/**
	 * When there are no more
	 */
	fun then(callback: () -> Unit) = dependencyGraph.then(callback)

	override fun dispose() {
		dependencyGraph.dispose()
		_injector.dispose()
	}

	fun lock() {
		if (dependencyGraph.hasPending()) throw Exception("Cannot lock the injector when there are still pending callbacks.")
		_injector.lock()
		dependencyGraph.clear()
	}
}

/**
 * Sets up a child injector, allows dependencies to be set within [init], and when all dependencies are set,
 * calls [onReady] in the new child scope.
 *
 * This child scope will automatically be disposed when the element that created it is disposed.
 */
fun Owned.scope(init: (injector: Bootstrap) -> Unit, onReady: Owned.() -> Unit): Bootstrap {
	val bootstrap = Bootstrap(InjectorImpl(injector))
	val owner = OwnedImpl(this, bootstrap.injector)
	disposed.add {
		bootstrap.dispose()
	}
	init(bootstrap)
	bootstrap.then {
		bootstrap.lock()
		owner.onReady()
	}
	return bootstrap
}