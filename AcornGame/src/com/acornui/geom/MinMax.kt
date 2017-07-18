package com.acornui.geom

data class MinMax(
		var xMin: Float = Float.POSITIVE_INFINITY,
		var xMax: Float = Float.NEGATIVE_INFINITY,
		var yMin: Float = Float.POSITIVE_INFINITY,
		var yMax: Float = Float.NEGATIVE_INFINITY
) {

	fun inf() {
		xMin = Float.POSITIVE_INFINITY
		xMax = Float.NEGATIVE_INFINITY
		yMin = Float.POSITIVE_INFINITY
		yMax = Float.NEGATIVE_INFINITY
	}

	fun ext(x: Float, y: Float) {
		if (x < xMin) xMin = x
		if (x > xMax) xMax = x
		if (y < yMin) yMin = y
		if (y > yMax) yMax = y
	}

	fun isEmpty(): Boolean {
		return xMax <= xMin || yMax <= yMin
	}

	fun isNotEmpty(): Boolean = !isEmpty()

	fun scl(x: Float, y: Float) {
		xMin *= x
		xMax *= x
		yMin *= y
		yMax *= y
	}

	fun inflate(left: Float, top: Float, right: Float, bottom: Float) {
		xMin -= left
		xMax += right
		yMin -= top
		yMax += bottom
	}

	val width: Float
		get() = xMax - xMin

	val height: Float
		get() = yMax - yMin

	fun set(other: MinMax) {
		xMin = other.xMin
		xMax = other.xMax
		yMin = other.yMin
		yMax = other.yMax
	}

	fun intersects(other: MinMax): Boolean {
		return (xMax >= other.xMin && yMax >= other.yMin && xMin <= other.xMax && yMin <= other.yMax)
	}
}