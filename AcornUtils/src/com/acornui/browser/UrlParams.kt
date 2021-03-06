package com.acornui.browser

import com.acornui.collection.Clearable
import com.acornui.collection.find2
import com.acornui.collection.indexOfFirst2

import kotlin.properties.Delegates

interface UrlParams {

	/**
	 * Retrieves the first parameter with the given name.
	 */
	fun get(name: String): String?

	/**
	 * Retrieves all parameters with the given name.
	 */
	fun getAll(name: String): List<String>

	fun contains(name: String): Boolean

	val items: List<Pair<String, String>>

	fun toQueryString(): String {
		val result = StringBuilder()
		for ((key, value) in items) {
			result.append(encodeUriComponent2(key))
			result.append("=")
			result.append(encodeUriComponent2(value))
			result.append("&")
		}
		val resultString = result.toString()
		return if (resultString.isNotEmpty())
			resultString.substring(0, resultString.length - 1)
		else
			resultString
	}
}

fun UrlParamsImpl(queryString: String): UrlParamsImpl {
	val p = UrlParamsImpl()
	val split = queryString.split("&")
	for (entry in split) {
		val i = entry.indexOf("=")
		if (i != -1)
			p.append(entry.substring(0, i), decodeUriComponent2(entry.substring(i + 1)))
	}
	return p
}

class UrlParamsImpl : Clearable, UrlParams {

	private val _items = ArrayList<Pair<String, String>>()

	override val items: List<Pair<String, String>>
		get() = _items

	fun append(name: String, value: String) {
		_items.add(Pair(name, value))
	}

	fun appendAll(entries: Iterable<Pair<String, String>>) {
		for (entry in entries) {
			append(entry.first, entry.second)
		}
	}

	fun remove(name: String): Boolean {
		val i = _items.indexOfFirst2 { it.first == name }
		if (i == -1) return false
		_items.removeAt(i)
		return true
	}

	override fun get(name: String): String? {
		return _items.find2 { it.first == name }?.second
	}

	override fun getAll(name: String): List<String> {
		val list = ArrayList<String>()
		for (item in _items) {
			if (item.first == name) list.add(item.second)
		}
		return list
	}

	fun set(name: String, value: String) {
		val index = _items.indexOfFirst2 { it.first == name }
		if (index == -1) {
			_items.add(Pair(name, value))
		} else {
			_items[index] = Pair(name, value)
		}
	}

	override fun contains(name: String): Boolean {
		return _items.find2 { it.first == name } != null
	}

	override fun clear() {
		_items.clear()
	}

}


var encodeUriComponent2: (str: String)->String by Delegates.notNull()
var decodeUriComponent2: (str: String)->String by Delegates.notNull()

/**
 * Appends a url parameter to a url string, returning the new string.
 */
fun String.appendParam(paramName: String, paramValue: String): String {
	return this + if (contains("?")) "&" else "?" + "$paramName=${encodeUriComponent2(paramValue)}"
}

fun String.appendOrUpdateParam(paramName: String, paramValue: String): String {
	val qIndex = indexOf("?")
	if (qIndex == -1) return "$this?$paramName=${encodeUriComponent2(paramValue)}"
	val queryStr = substring(qIndex + 1)
	val query = UrlParamsImpl(queryStr)
	query.set(paramName, paramValue)
	return "${substring(0, qIndex)}?${query.toQueryString()}"
}