package com.acornui.core.text

interface StringFormatter<in T> {
	fun format(value: T): String
}

interface StringParser<out T> {
	fun parse(value: String): T
}

object ToStringFormatter : StringFormatter<Any> {
	override fun format(value: Any): String {
		return value.toString()
	}
}

