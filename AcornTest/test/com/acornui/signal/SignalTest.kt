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

@file:Suppress("UNUSED_ANONYMOUS_PARAMETER")

package com.acornui.signal

import com.acornui.test.assertListEquals
import org.junit.Test
import kotlin.test.assertEquals
import kotlin.test.fail

class SignalTest {

	@Test fun dispatch() {
		var actual = -1
		val s = Signal1<Int>()
		s.add({ actual = it })
		s.dispatch(3)
		assertEquals(3, actual)
		s.dispatch(4)
		assertEquals(4, actual)
	}

	@Test fun remove() {
		var actual = -1
		val s = Signal1<Int>()
		val handler = { it: Int -> actual = it }
		s.add(handler)
		s.dispatch(3)
		assertEquals(3, actual)
		s.remove(handler)
		s.dispatch(4)
		assertEquals(3, actual)
	}

	@Test fun addMany() {

		val arr = Array(5, { -1 })
		var i = 0

		val handler1 = { it: Int -> arr[i++] = 1 }
		val handler2 = { it: Int -> arr[i++] = 2 }
		val handler3 = { it: Int -> arr[i++] = 3 }
		val handler4 = { it: Int -> arr[i++] = 4 }
		val handler5 = { it: Int -> arr[i++] = 5 }

		val s = Signal1<Int>()
		s.add(handler1)
		s.add(handler2)
		s.add(handler3)
		s.add(handler4)
		s.add(handler5)

		s.dispatch(0)

		assertListEquals(arrayOf(1, 2, 3, 4, 5), arr)
	}

	@Test fun addOnceMany() {

		val arr = Array(5, { -1 })
		var i = 0

		val handler1 = { it: Int -> arr[i++] = 1 }
		val handler2 = { it: Int -> arr[i++] = 2 }
		val handler3 = { it: Int -> arr[i++] = 3 }
		val handler4 = { it: Int -> arr[i++] = 4 }
		val handler5 = { it: Int -> arr[i++] = 5 }

		val s = Signal1<Int>()
		s.add(handler1, true)
		s.add(handler2, true)
		s.add(handler3, true)
		s.add(handler4, true)
		s.add(handler5, true)

		s.dispatch(0)

		assertListEquals(arrayOf(1, 2, 3, 4, 5), arr)
	}

	@Test fun concurrentAdd() {
		val arr = arrayListOf<Int>()

		val s = Signal1<Int>()
		s.add {
			arr.add(1)
			s.add {
				arr.add(4)
				s.add {
					arr.add(7)
					s.add {
						arr.add(8)
					}
				}
			}
		}
		s.add {
			arr.add(2)
			s.add { arr.add(5) }
			s.add { arr.add(6) }
		}
		s.add {
			arr.add(3)
		}

		s.dispatch(0)

		assertListEquals(arrayOf(1, 2, 3, 4, 5, 6, 7, 8), arr)
	}

	@Test fun concurrentRemove() {
		TestConcurrentRemove()
	}

}

private class TestConcurrentRemove {

	private val s = Signal0()
	private val arr = arrayListOf<Int>()

	init {

		s.add(this::testHandler1)
		s.add(this::testHandler2)
		s.add(this::testHandler3)
		s.add(this::testHandler4)

		s.dispatch()
		s.dispatch()

		assertListEquals(arrayOf(1, 2, 3, 1, 3), arr)
	}

	private fun testHandler1() {
		arr.add(1)
	}

	private fun testHandler2() {
		arr.add(2)
		s.remove(this::testHandler2)
	}

	private fun testHandler3() {
		arr.add(3)
		s.remove(this::testHandler4)
	}

	private fun testHandler4() {
		fail("testHandler4 should not have been invoked.")
	}
}
