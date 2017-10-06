package com.acornui.math

internal actual fun random(): Double = js("Math").random().unsafeCast<Double>()