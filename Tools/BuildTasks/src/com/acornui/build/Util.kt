package com.acornui.build

@Deprecated("Use apply", ReplaceWith("apply(f)"))
inline fun <T> T.with(f: T.() -> Unit): T { this.f(); return this }