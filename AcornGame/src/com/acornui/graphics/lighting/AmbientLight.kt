package com.acornui.graphics.lighting

import com.acornui.graphics.Color

/**
 * @author nbilyk
 */
class AmbientLight {

	val color: Color = Color.WHITE.copy()
}

fun ambientLight(init: AmbientLight.() -> Unit = {}): AmbientLight {
	val a = AmbientLight()
	a.init()
	return a
}