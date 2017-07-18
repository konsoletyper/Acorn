package com.acornui.action

interface Decorator<in T, out R> {
	fun decorate(target: T): R
}

@Suppress("CAST_NEVER_SUCCEEDS")
fun <T> noopDecorator(): Decorator<T, T> {
	return NoopDecorator as Decorator<T, T>
}

/**
 * A decorator that does... NOTHING!
 */
private object NoopDecorator : Decorator<Any, Any> {
	override fun decorate(target: Any): Any {
		return target
	}
}