package com.acornui.jvm.io

import java.io.InputStream
import java.io.OutputStream
import java.nio.charset.Charset

fun InputStream.readTextAndClose(charset: Charset = Charsets.UTF_8): String {
	return bufferedReader(charset).use { it.readText() }
}

fun OutputStream.writeTextAndClose(string: String, charset: Charset = Charsets.UTF_8) {
	bufferedWriter(charset).use { it.write(string) }
}