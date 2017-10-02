/*
 * Derived from LibGDX by Nicholas Bilyk
 * https://github.com/libgdx
 * Copyright 2011 See https://github.com/libgdx/libgdx/blob/master/AUTHORS
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

@file:Suppress("NOTHING_TO_INLINE")

package com.acornui.math

import kotlin.math.*

const val PI: Float = 3.1415927f
const val PI2: Float = PI * 2f
const val E: Float = 2.7182818f
const val TO_DEG = 180f / PI
const val TO_RAD = PI / 180f

internal object TrigLookup {
	const val SIN_BITS = 14 // 16KB. Adjust for accuracy.
	const val SIN_MASK = (-1 shl SIN_BITS).inv()
	const val SIN_COUNT = SIN_MASK + 1

	const val radFull = PI * 2

	const val radToIndex = SIN_COUNT.toFloat() / radFull

	val table = FloatArray(SIN_COUNT)

	init {

		for (i in 1..SIN_COUNT - 1) {
			table[i] = sin(((i.toFloat() + 0.5f) / SIN_COUNT.toFloat() * radFull).toDouble()).toFloat()
		}

		for (i in 0..16) {
			val theta = i * PI2 / 16
			table[(theta * radToIndex).toInt() and SIN_MASK] = sin(theta.toDouble()).toFloat()
		}
	}

	/**
	 * Returns the sine in radians from a lookup table.
	 */
	fun sin(radians: Float): Float {
		return table[(radians * radToIndex).toInt() and SIN_MASK]
	}

	/**
	 * Returns the cosine in radians from a lookup table.
	 */
	fun cos(radians: Float): Float {
		return table[((radians + PI / 2f) * radToIndex).toInt() and SIN_MASK]
	}

	/**
	 * Returns the tan in radians from a lookup table.
	 */
	fun tan(radians: Float): Float {
		return sin(radians) / cos(radians)
	}
}

internal object Atan2 {

	private val ATAN2_BITS = 7 // Adjust for accuracy.
	private val ATAN2_BITS2 = ATAN2_BITS shl 1
	private val ATAN2_MASK = (-1 shl ATAN2_BITS2).inv()
	private val ATAN2_COUNT = ATAN2_MASK + 1
	private val ATAN2_DIM = sqrt(ATAN2_COUNT.toDouble()).toInt()
	private val INV_ATAN2_DIM_MINUS_1 = 1f / (ATAN2_DIM.toFloat() - 1f)

	internal val table = FloatArray(ATAN2_COUNT)

	init {
		for (i in 0..ATAN2_DIM - 1) {
			for (j in 0..ATAN2_DIM - 1) {
				val x0 = i.toFloat() / ATAN2_DIM.toFloat()
				val y0 = j.toFloat() / ATAN2_DIM.toFloat()
				table[j * ATAN2_DIM + i] = atan2(y0.toDouble(), x0.toDouble()).toFloat()
			}
		}
	}

	/**
	 * Returns atan2 in radians from a lookup table.
	 */
	fun atan2(y: Float, x: Float): Float {
		var yVar = y
		var xVar = x
		val add: Float
		val mul: Float
		if (xVar < 0) {
			if (yVar < 0) {
				yVar = -yVar
				mul = 1.0f
			} else
				mul = -1f
			xVar = -xVar
			add = -PI
		} else {
			if (yVar < 0) {
				yVar = -yVar
				mul = -1f
			} else
				mul = 1f
			add = 0f
		}
		val invDiv = 1 / ((if (xVar < yVar) yVar else xVar) * INV_ATAN2_DIM_MINUS_1)

		val xi = (xVar * invDiv).toInt()
		val yi = (yVar * invDiv).toInt()
		return (Atan2.table[yi * ATAN2_DIM + xi] + add) * mul
	}
}

/**
 * Utility and fast math functions.
 *
 * Thanks to Riven on JavaGaming.org for the basis of sin/cos/atan2/floor/ceil.
 * @author Nathan Sweet
 */
@Suppress("NOTHING_TO_INLINE")
object MathUtils {

	val nanoToSec: Float = 1 / 1000000000f

	// ---
	val FLOAT_ROUNDING_ERROR: Float = 0.000001f // 32 bits

	/**
	 * multiply by this to convert from radians to degrees
	 */
	val radDeg: Float = 180f / PI

	/**
	 * multiply by this to convert from degrees to radians
	 */
	val degRad: Float = PI / 180f

	/**
	 * Returns the sine in radians from a lookup table.
	 */
	fun sin(radians: Float): Float = TrigLookup.sin(radians)

	/**
	 * Returns the cosine in radians from a lookup table.
	 */
	fun cos(radians: Float): Float = TrigLookup.cos(radians)

	/**
	 * Returns the tan in radians from a lookup table.
	 * Throws DivideByZero exception when cos(radians) == 0
	 */
	fun tan(radians: Float): Float = TrigLookup.tan(radians)

	// ---

	fun atan2(y: Float, x: Float): Float = Atan2.atan2(y, x)

	// ---

	var _rng: Random = Random()

	/**
	 * Returns a random number between 0 (inclusive) and the specified value (inclusive).
	 */
	fun random(range: Int): Int {
		return _rng.nextInt(range + 1)
	}

	/**
	 * Returns a random number between start (inclusive) and end (inclusive).
	 */
	fun random(start: Int, end: Int): Int {
		return start + _rng.nextInt(end - start + 1)
	}

	/**
	 * Returns a random number between 0 (inclusive) and the specified value (inclusive).
	 */
	fun random(range: Long): Long {
		return (_rng.nextDouble() * range.toDouble()).toLong()
	}

	/**
	 * Returns a random number between start (inclusive) and end (inclusive).
	 */
	fun random(start: Long, end: Long): Long {
		return start + (_rng.nextDouble() * (end - start).toDouble()).toLong()
	}

	/**
	 * Returns a random boolean value.
	 */
	fun randomBoolean(): Boolean {
		return _rng.nextBoolean()
	}

	/**
	 * Returns true if a random value between 0 and 1 is less than the specified value.
	 */
	fun randomBoolean(chance: Float): Boolean {
		return random() < chance
	}

	/**
	 * Returns random number between 0.0 (inclusive) and 1.0 (exclusive).
	 */
	fun random(): Float {
		return _rng.nextFloat()
	}

	/**
	 * Returns a random number between 0 (inclusive) and the specified value (exclusive).
	 */
	fun random(range: Float): Float {
		return _rng.nextFloat() * range
	}

	/**
	 * Returns a random number between start (inclusive) and end (exclusive).
	 */
	fun random(start: Float, end: Float): Float {
		return start + _rng.nextFloat() * (end - start)
	}

	/**
	 * Returns -1 or 1, randomly.
	 */
	fun randomSign(): Int {
		return 1 or (_rng.nextInt() shr 31)
	}

	/**
	 * Returns a triangularly distributed random number between -1.0 (exclusive) and 1.0 (exclusive), where values around zero are
	 * more likely.
	 * This is an optimized version of {@link #randomTriangular(float, float, float) randomTriangular(-1, 1, 0)}
	 */
	fun randomTriangular(): Float {
		return _rng.nextFloat() - _rng.nextFloat()
	}

	/**
	 * Returns a triangularly distributed random number between {@code -max} (exclusive) and {@code max} (exclusive), where values
	 * around zero are more likely.
	 * This is an optimized version of {@link #randomTriangular(float, float, float) randomTriangular(-max, max, 0)}
	 * @param max the upper limit
	 */
	fun randomTriangular(max: Float): Float {
		return (_rng.nextFloat() - _rng.nextFloat()) * max
	}

	/**
	 * Returns a triangularly distributed random number between {@code min} (inclusive) and {@code max} (exclusive), where the
	 * `mode` argument defaults to the midpoint between the bounds, giving a symmetric distribution.
	 *
	 * This method is equivalent of [randomTriangular(min, max, (max - min) * .5f)]
	 * @param min the lower limit
	 * @param max the upper limit
	 */
	fun randomTriangular(min: Float, max: Float): Float {
		return randomTriangular(min, max, (max - min) * 0.5f)
	}

	/**
	 * Returns a triangularly distributed random number between {@code min} (inclusive) and {@code max} (exclusive), where values
	 * around {@code mode} are more likely.
	 * @param min the lower limit
	 * @param max the upper limit
	 * @param mode the point around which the values are more likely
	 */
	fun randomTriangular(min: Float, max: Float, mode: Float): Float {
		val u = _rng.nextFloat()
		val d = max - min
		if (u <= (mode - min) / d) return min + MathUtils.sqrt(u * d * (mode - min))
		return max - MathUtils.sqrt((1 - u) * d * (max - mode))
	}

	// ---

	/**
	 * Returns the next power of two. Returns the specified value if the value is already a power of two.
	 */
	fun nextPowerOfTwo(value: Int): Int {
		var v = value
		if (v == 0) return 1
		v--
		v = v or (v shr 1)
		v = v or (v shr 2)
		v = v or (v shr 4)
		v = v or (v shr 8)
		v = v or (v shr 16)
		return v + 1
	}

	fun isPowerOfTwo(value: Int): Boolean {
		return value != 0 && (value and value - 1) == 0
	}

	// ---

	/**
	 * Linearly interpolates between fromValue to toValue on progress position.
	 */
	fun lerp(fromValue: Float, toValue: Float, progress: Float): Float {
		return fromValue + (toValue - fromValue) * progress
	}

	// ---

	inline fun abs(value: Float): Float {
		return if (value < 0f) -value else value
	}

	inline fun abs(value: Double): Double {
		return if (value < 0f) -value else value
	}

	inline fun abs(value: Int): Int {
		return if (value < 0f) -value else value
	}

	inline fun abs(value: Long): Long {
		return if (value < 0f) -value else value
	}

	/**
	 * Returns true if the value is zero
	 * @param tolerance represent an upper bound below which the value is considered zero.
	 */
	fun isZero(value: Float, tolerance: Float = FLOAT_ROUNDING_ERROR): Boolean {
		return abs(value.toDouble()) <= tolerance
	}

	/**
	 * Returns true if the value is zero
	 * @param tolerance represent an upper bound below which the value is considered zero.
	 */
	fun isZero(value: Double, tolerance: Float = FLOAT_ROUNDING_ERROR): Boolean {
		return abs(value) <= tolerance
	}

	/**
	 * Returns true if a is nearly equal to b. The function uses the default floating error tolerance.
	 * @param a the first value.
	 * @param b the second value.
	 */
	fun isEqual(a: Float, b: Float): Boolean {
		return abs(a - b) <= FLOAT_ROUNDING_ERROR
	}

	/**
	 * Returns true if a is nearly equal to b.
	 * @param a the first value.
	 * @param b the second value.
	 * @param tolerance represent an upper bound below which the two values are considered equal.
	 */
	fun isEqual(a: Float, b: Float, tolerance: Float): Boolean {
		return abs(a - b) <= tolerance
	}

	/**
	 * @return the logarithm of x with base a
	 */
	fun log(x: Float, base: Float): Float {
		return (ln(x.toDouble()) / ln(base.toDouble())).toFloat()
	}

	/**
	 * @return the logarithm of x with base 2
	 */
	fun log2(x: Float): Float {
		return log(x, 2f)
	}

	inline fun <T : Comparable<T>> clamp(value: T, min: T, max: T): T {
		if (value <= min) return min
		if (value >= max) return max
		return value
	}

	@Deprecated("Use minOf", ReplaceWith("minOf(x, y)"))
	inline fun <T : Comparable<T>> min(x: T, y: T): T {
		return minOf(x, y)
	}

	@Deprecated("Use minOf", ReplaceWith("minOf(x, y, z)"))
	inline fun <T : Comparable<T>> min(x: T, y: T, z: T): T {
		return minOf(x, y, z)
	}

	@Deprecated("Use minOf", ReplaceWith("minOf(w, x, minOf(y, z))"))
	inline fun <T : Comparable<T>> min(w: T, x: T, y: T, z: T): T {
		return minOf(w, x, minOf(y, z))
	}

	@Deprecated("Use maxOf", ReplaceWith("maxOf(x, y)"))
	inline fun <T : Comparable<T>> max(x: T, y: T): T {
		return maxOf(x, y)
	}

	@Deprecated("Use maxOf", ReplaceWith("maxOf(x, y, z)"))
	inline fun <T : Comparable<T>> max(x: T, y: T, z: T): T {
		return maxOf(x, y, z)
	}

	@Deprecated("Use maxOf", ReplaceWith("maxOf(w, x, maxOf(y, z))"))
	inline fun <T : Comparable<T>> max(w: T, x: T, y: T, z: T): T {
		return maxOf(w, x, maxOf(y, z))
	}

	inline fun ceil(v: Float): Int {
		return ceil(v.toDouble()).toInt()
	}

	inline fun floor(v: Float): Int {
		return floor(v.toDouble()).toInt()
	}

	inline fun round(v: Float): Int {
		return round(v.toDouble()).toInt()
	}

	inline fun sqrt(v: Float): Float {
		return sqrt(v.toDouble()).toFloat()
	}

	inline fun pow(a: Float, b: Float): Float {
		return a.toDouble().pow(b.toDouble()).toFloat()
	}

	inline fun acos(v: Float): Float {
		return acos(v.toDouble()).toFloat()
	}

	inline fun asin(v: Float): Float {
		return asin(v.toDouble()).toFloat()
	}

	/**
	 * Returns the signum function of the argument; zero if the argument
	 * is zero, 1.0f if the argument is greater than zero, -1.0f if the
	 * argument is less than zero.
	 *
	 * <p>Special Cases:
	 * <ul>
	 * <li> If the argument is NaN, then the result is NaN.
	 * <li> If the argument is positive zero or negative zero, then the
	 *      result is the same as the argument.
	 * </ul>
	 *
	 * @param f the floating-point value whose signum is to be returned
	 * @return the signum function of the argument
	 * @author Joseph D. Darcy
	 * @since 1.5
	 */
	fun signum(v: Float): Float {
		if (v > 0) return 1f
		if (v < 0) return -1f
		if (v.isNaN()) return Float.NaN
		return 0f
	}

	/**
	 * n must be positive.
	 * mod( 5, 3) produces 2
	 * mod(-5, 3) produces 1
	 */
	fun mod(a: Float, n: Float): Float {
		return if (a < 0f) (a % n + n) % n else a % n
	}

	/**
	 * Finds the difference between two angles.
	 * The returned difference will always be >= -PI and < PI
	 */
	fun angleDiff(a: Float, b: Float): Float {
		var diff = b - a
		if (diff < -PI) diff = PI2 - diff
		if (diff > PI2) diff %= PI2
		if (diff >= PI) diff -= PI2
		return diff
	}
}

inline fun Float.ceil(): Int {
	return MathUtils.ceil(this)
}

inline fun <T : Comparable<T>> maxOf4(a: T, b: T, c: T, d: T): T {
	return maxOf(maxOf(a, b), maxOf(c, d))
}

inline fun <T : Comparable<T>> minOf4(a: T, b: T, c: T, d: T): T {
	return minOf(minOf(a, b), minOf(c, d))
}