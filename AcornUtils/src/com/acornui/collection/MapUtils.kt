package com.acornui.collection

fun <K, V> Map<K, V>.containsAllKeys(keys: Array<K>): Boolean {
	for (i in 0..keys.lastIndex) {
		if (!containsKey(keys[i])) {
			return false
		}
	}
	return true
}

fun <K, V> Map<K, V>.copy(): MutableMap<K, V> {
	val m = HashMap<K, V>()
	m.putAll(this)
	return m
}

val mapPool = object : ObjectPool<MutableMap<*, *>>(8, { HashMap<Any?, Any?>() }) {
	override fun free(obj: MutableMap<*, *>) {
		obj.clear()
		super.free(obj)
	}
}