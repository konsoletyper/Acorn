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

package com.acornui.test

import com.acornui.math.*
import org.junit.Test
import kotlin.math.abs
import kotlin.test.assertEquals

import kotlin.test.assertFails
import kotlin.test.fail

fun assertListEquals(expected: IntArray, actual: IntArray) {
	assertListEquals(expected.iterator(), actual.iterator())
}

fun assertListEquals(expected: BooleanArray, actual: BooleanArray) {
	assertListEquals(expected.iterator(), actual.iterator())
}

fun assertListEquals(expected: DoubleArray, actual: DoubleArray) {
	assertListEquals(expected.iterator(), actual.iterator())
}

fun assertListEquals(expected: FloatArray, actual: FloatArray) {
	assertListEquals(expected.iterator(), actual.iterator())
}

fun assertListEquals(expected: CharArray, actual: CharArray) {
	assertListEquals(expected.iterator(), actual.iterator())
}

fun <T> assertListEquals(expected: Array<T>, actual: Array<T>) {
	assertListEquals(expected.iterator(), actual.iterator())
}

fun <T> assertListEquals(expected: Array<T>, actual: Iterable<T>) {
	assertListEquals(expected.iterator(), actual.iterator())
}

fun <T> assertListEquals(expected: Iterable<T>, actual: Array<T>) {
	assertListEquals(expected.iterator(), actual.iterator())
}

fun <T> assertListEquals(expected: Iterable<T>, actual: Iterable<T>) {
	assertListEquals(expected.iterator(), actual.iterator())
}

fun <T> assertListEquals(expected: Iterator<T>, actual: Iterator<T>) {
	var expectedSize = 0
	var actualSize = 0
	while (expected.hasNext() || actual.hasNext()) {
		if (expected.hasNext() && actual.hasNext()) {
			val expectedI = expected.next()
			val actualI = actual.next()
			if (expectedI != actualI) {
				fail("At index $expectedSize expected: $expectedI actual: $actualI")
			}
			expectedSize++
			actualSize++
		} else if (expected.hasNext()) {
			expected.next()
			expectedSize++
		} else if (actual.hasNext()) {
			actual.next()
			actualSize++
		}
	}
	if (expectedSize != actualSize) {
		fail("actual size: $actualSize expected size: ${expectedSize}")
	}
}

fun assertUnorderedListEquals(expected: IntArray, actual: IntArray) {
	assertUnorderedListEquals(expected.iterator(), actual.iterator())
}

fun assertUnorderedListEquals(expected: BooleanArray, actual: BooleanArray) {
	assertUnorderedListEquals(expected.iterator(), actual.iterator())
}

fun assertUnorderedListEquals(expected: DoubleArray, actual: DoubleArray) {
	assertUnorderedListEquals(expected.iterator(), actual.iterator())
}

fun assertUnorderedListEquals(expected: FloatArray, actual: FloatArray) {
	assertUnorderedListEquals(expected.iterator(), actual.iterator())
}

fun assertUnorderedListEquals(expected: CharArray, actual: CharArray) {
	assertUnorderedListEquals(expected.iterator(), actual.iterator())
}

fun <T : Any> assertUnorderedListEquals(expected: Array<T>, actual: Array<T>) {
	assertUnorderedListEquals(expected.iterator(), actual.iterator())
}

fun <T : Any> assertUnorderedListEquals(expected: Array<T>, actual: Iterable<T>) {
	assertUnorderedListEquals(expected.iterator(), actual.iterator())
}

fun <T : Any> assertUnorderedListEquals(expected: Iterable<T>, actual: Array<T>) {
	assertUnorderedListEquals(expected.iterator(), actual.iterator())
}

fun <T : Any> assertUnorderedListEquals(expected: Iterable<T>, actual: Iterable<T>) {
	assertUnorderedListEquals(expected.iterator(), actual.iterator())
}

fun <T : Any> assertUnorderedListEquals(expected: Iterator<T>, actual: Iterator<T>) {
	val expectedSet = mutableSetOf<T>().also { set -> expected.forEach { set += it } }
	val actualSet = mutableSetOf<T>().also { set -> actual.forEach { set += it } }
	assertEquals(expectedSet, actualSet)
}

class TestUtils {

	@Test fun testAssertListEquals() {
		assertListEquals(arrayOf(1, 2, 3, 4), arrayOf(1, 2, 3, 4))
		assertListEquals(arrayListOf(1, 2, 3, 4), arrayOf(1, 2, 3, 4))
		assertListEquals(arrayOf(1, 2, 3, 4), arrayListOf(1, 2, 3, 4))

		assertFails {
			assertListEquals(arrayOf(1, 2, 3, 4), arrayOf(1, 2, 3))
		}
		assertFails {
			assertListEquals(arrayOf(1, 2, 3, 4), arrayOf(1, 2, 3))
		}
		assertFails {
			assertListEquals(arrayOf(1, 3, 2), arrayOf(1, 2, 3))
		}
		assertFails {
			assertListEquals(arrayOf(1, 1, 2, 3), arrayOf(1, 2, 3, 2))
		}
	}

	@Test fun testAssertUnorderedListEquals() {
		assertUnorderedListEquals(arrayOf(1, 2, 3, 4), arrayListOf(1, 2, 3, 4))
		assertUnorderedListEquals(arrayOf(1, 2, 3, 4), arrayListOf(2, 1, 3, 4))
		assertUnorderedListEquals(arrayOf(1, 1, 3, 4), arrayListOf(3, 1, 1, 4))
		assertUnorderedListEquals(arrayOf(1, 4, 3, 1), arrayListOf(3, 1, 1, 4))

		assertFails {
			assertUnorderedListEquals(arrayOf(1, 2, 3, 4), arrayListOf(1, 3, 4))
		}
		assertFails {
			assertUnorderedListEquals(arrayOf(1, 2, 3), arrayListOf(1, 3, 4, 2))
		}
		assertFails {
			assertUnorderedListEquals(arrayOf(1, 1, 2, 3), arrayListOf(1, 3, 4, 2))
		}
		assertFails {
			assertUnorderedListEquals(arrayOf(1, 1, 2, 3), arrayListOf(1, 2, 3, 2))
		}
		assertFails {
			assertUnorderedListEquals(arrayOf(1, 2, 3, 4), arrayListOf(1, 2, 2, 3))
		}
	}
}

fun assertClose(expected: Float, actual: Float, margin: Float = 0.0001f) {
	val difference = abs(expected.toDouble() - actual.toDouble()).toFloat()
	if (difference > margin) {
		fail("expected: $expected actual: $actual difference $difference is greater than allowed: $margin ")
	}
}

fun assertClose(expected: Vector3Ro, actual: Vector3Ro, margin: Float = 0.0001f) {
	assertClose(expected.x, actual.x, margin)
	assertClose(expected.y, actual.y, margin)
	assertClose(expected.z, actual.z, margin)
}

fun assertClose(expected: Vector2Ro, actual: Vector2Ro, margin: Float = 0.0001f) {
	assertClose(expected.x, actual.x, margin)
	assertClose(expected.y, actual.y, margin)
}

inline fun benchmark(call: () -> Unit): Float = benchmark(1000, call)

/**
 * Calls the given function repeatedly for 200ms.
 * Returns the average amount of time each call took.
 */
inline fun benchmark(iter: Int, call: () -> Unit): Float {
	val startTime = System.nanoTime()
	for (i in 0..iter - 1) {
		call()
	}
	val endTime = System.nanoTime()
	val elapsed = (endTime - startTime) / 1e6.toFloat()
	return elapsed / iter.toFloat()
}



