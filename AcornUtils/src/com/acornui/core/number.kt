/*
 * Copyright 2014 Nicholas Bilyk
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

package com.acornui.core

import com.acornui.math.*

/**
 * A constant holding the maximum value a {@code long} can
 * have, 2<sup>53</sup>-1.
 * Note: This is 53 bits instead of 63 for the sake of JavaScript Number.
 */
val LONG_MAX_VALUE: Long = 0x1FFFFFFFFFFFFFL
val INT_MAX_VALUE: Int = 0x7FFFFFFF
val INT_MIN_VALUE: Int = -2147483648

/**
 * A constant holding the minimum value a {@code long} can
 * have, -2<sup>53</sup>.
 * Note: This is 53 bits instead of 63 for the sake of JavaScript Number.
 */
val LONG_MIN_VALUE: Long = -0x20000000000000L

/**
 * Returns the number of zero bits preceding the highest-order
 * ("leftmost") one-bit in the two's complement binary representation
 * of the specified {@code int} value.  Returns 32 if the
 * specified value has no one-bits in its two's complement representation,
 * in other words if it is equal to zero.
 *
 * <p>Note that this method is closely related to the logarithm base 2.
 * For all positive {@code int} values x:
 * <ul>
 * <li>floor(log<sub>2</sub>(x)) = {@code 31 - numberOfLeadingZeros(x)}
 * <li>ceil(log<sub>2</sub>(x)) = {@code 32 - numberOfLeadingZeros(x - 1)}
 * </ul>
 *
 * @return the number of zero bits preceding the highest-order
 *     ("leftmost") one-bit in the two's complement binary representation
 *     of the specified {@code int} value, or 32 if the value
 *     is equal to zero.
 */
fun Int.numberOfLeadingZeros(): Int {
	var i = this
	if (i == 0)
		return 32
	var n = 1
	if (i.ushr(16) == 0) {
		n += 16
		i = i shl 16
	}
	if (i.ushr(24) == 0) {
		n += 8
		i = i shl 8
	}
	if (i.ushr(28) == 0) {
		n += 4
		i = i shl 4
	}
	if (i.ushr(30) == 0) {
		n += 2
		i = i shl 2
	}
	n -= i.ushr(31)
	return n
}

/**
 * Returns the number of zero bits following the lowest-order ("rightmost")
 * one-bit in the two's complement binary representation of the specified
 * {@code int} value.  Returns 32 if the specified value has no
 * one-bits in its two's complement representation, in other words if it is
 * equal to zero.
 *
 * @return the number of zero bits following the lowest-order ("rightmost")
 *     one-bit in the two's complement binary representation of the
 *     specified {@code int} value, or 32 if the value is equal
 *     to zero.
 */
fun Int.numberOfTrailingZeros(): Int {
	var i = this
	var y: Int
	if (i == 0) return 32
	var n = 31
	y = i shl 16
	if (y != 0) {
		n -= 16
		i = y
	}
	y = i shl 8
	if (y != 0) {
		n -= 8
		i = y
	}
	y = i shl 4
	if (y != 0) {
		n -= 4
		i = y
	}
	y = i shl 2
	if (y != 0) {
		n -= 2
		i = y
	}
	return n - (i shl 1).ushr(31)
}

fun Float.floor(): Float {
	return toInt().toFloat()
}

fun Float.round(): Float {
	return MathUtils.round(this).toFloat()
}

fun Float.notCloseTo(other: Float, tolerance: Float = 0.0001f): Boolean {
	return MathUtils.abs(this - other) > tolerance
}

fun Float.closeTo(other: Float, tolerance: Float = 0.0001f): Boolean {
	return MathUtils.abs(this - other) <= tolerance
}

fun Boolean.toInt(): Int {
	return if (this) 1 else 0
}

fun Number.zeroPadding(intDigits: Int, decimalDigits: Int = 0): String {
	return toString().zeroPadding(intDigits, decimalDigits)
}

fun String.zeroPadding(intDigits: Int, decimalDigits: Int = 0): String {
	var str = this
	if (intDigits == 0 && decimalDigits == 0) return str
	val decimalMarkIndex = str.indexOf(".")
	val currIntDigits: Int
	val currDecDigits: Int
	if (decimalMarkIndex != -1) {
		currIntDigits = decimalMarkIndex
		currDecDigits = str.length - decimalMarkIndex - 1
	} else {
		currIntDigits = str.length
		currDecDigits = 0
	}
	if (intDigits > currIntDigits) {
		str = "0".repeat2(intDigits - currIntDigits) + str
	}
	if (decimalDigits > currDecDigits) {
		if (decimalMarkIndex == -1) str += "."
		str += "0".repeat2(decimalDigits - currDecDigits)
	}
	return str
}

fun Float.radToDeg(): Float {
	return this * TO_DEG
}

fun Float.degToRad(): Float {
	return this * TO_RAD
}