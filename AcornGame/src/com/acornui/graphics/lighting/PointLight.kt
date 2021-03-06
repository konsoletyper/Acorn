package com.acornui.graphics.lighting

import com.acornui.collection.Clearable
import com.acornui.graphics.Color
import com.acornui.math.Vector3


/**
 * A light that goes in all directions for a given radius.

 * @author nbilyk
 */
class PointLight : Clearable {

	val color = Color.WHITE.copy()
	val position = Vector3()
	var radius = 0f

	/**
	 * Sets this point light to match the properties of [other] point light.
	 * @return Returns this point light for chaining.
	 */
	fun set(other: PointLight): PointLight {
		color.set(other.color)
		position.set(other.position)
		radius = other.radius
		return this
	}

	override fun clear() {
		color.set(Color.WHITE)
		position.clear()
		radius = 0f
	}

	companion object {

		val EMPTY_POINT_LIGHT = PointLight()

	}

}

fun pointLight(init: PointLight.() -> Unit = {}): PointLight {
	val p = PointLight()
	p.init()
	return p
}