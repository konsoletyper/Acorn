package com.acornui.jvm.io

import java.io.Closeable

fun Closeable.closeQuietly() {
	try {
		close()
	} catch (ignore: Throwable) {
	}
}
