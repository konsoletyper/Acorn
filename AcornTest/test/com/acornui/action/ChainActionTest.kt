/*
 * Copyright 2015 Nicholas Bilyk
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

package com.acornui.action

import org.junit.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class ChainActionTest {

	@Test fun testChainedSuccess() {
		val t = chain<Int>({
			success(3)
		})

		val tw = chain<Int, String>(t, {
			success("Hi $it")
		})

		tw()
		assertEquals("Hi 3", tw.result)
	}

	@Test fun testChainedSuccess2() {
		val t1 = chain<Int>({
			success(3)
		})

		val t2 = chain<Int>({
			success(4)
		})

		val tw = chain<Int, Int, String>(t1, t2, {
			p1, p2 ->
			success("Hi $p1, $p2")
		})

		tw()
		assertEquals("Hi 3, 4", tw.result)
	}

	@Test fun testChainedSuccess3() {
		val t1 = chain<String>({
			success("One")
		})

		val t2 = chain<Int>({
			success(4)
		})

		val t3 = chain<String>({
			success("Two")
		})

		val tw = chain<String, Int, String, String>(t1, t2, t3, {
			p1, p2, p3 ->
			success("Hi $p1, $p2, $p3")
		})

		tw()
		assertEquals("Hi One, 4, Two", tw.result)
	}

	@Test fun testChainedSuccess3_2() {
		val t1 = chain<String>({
			success("One")
		})

		val t2 = chain<Int>({
			success(4)
		})

		val s1 = chain<String>({
			success("Sub")
		})

		val t3 = chain<String, String>(s1, {
			success("$it Two")
		})

		val tw = chain<String, Int, String, String>(t1, t2, t3, {
			p1, p2, p3 ->
			success("Hi $p1, $p2, $p3")
		})

		tw()
		assertEquals("Hi One, 4, Sub Two", tw.result)
	}

	@Test fun testChainedFail() {
		val t = chain<Int>({
			fail(Exception("Failure"))
		})

		val tw = chain<Int, String>(t, {
			success("Hi $it")
		})
		tw()
		assertTrue(tw.hasFailed())
	}

	@Test fun testChainedFail2() {
		val t = chain<Int>({
			success(3)
		})

		val tw = chain<Int, String>(t, {
			fail(Exception())
		})
		tw()
		assertTrue(tw.hasFailed())
	}
}