package com.acornui.factory

import com.acornui.core.Disposable

class LazyInstance<out R, out T>(
		private val receiver: R,
		private val factory: R.() -> T
) {

	private var _instance: T? = null

	val created: Boolean
		get() = (_instance != null)

	val instance: T
		get() {
			if (_instance == null) _instance = receiver.factory()
			return _instance!!
		}

	fun clear() {
		_instance = null
	}

}

fun <R, T : Disposable> LazyInstance<R, T>.disposeInstance() {
	if (created) {
		instance.dispose()
		clear()
	}
}