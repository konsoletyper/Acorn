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

package com.acornui.string.test

import org.junit.*
import kotlin.test.*
import com.acornui.string.*

/**
 * @author nbilyk
 */
class SubStringTest {

	@Test fun testSetRange() {
		val s = SubString("Hello World")
		s.setRange(0, 5)
		assertTrue(s.equals("Hello"))
		assertEquals("Hello".hashCode(), s.hashCode())

		s.setRange(0, 8)
		assertTrue(s.equals("Hello Wo"))
		assertEquals("Hello Wo".hashCode(), s.hashCode())
	}

	@Test fun testLength() {
		val s = SubString("Hello World", 3, 5)
		assertEquals(2, s.length())
		s.setRange(0, 8)
		assertEquals(8, s.length())
	}

	@Test fun testCharAt() {
		val s = SubString("Hello World", 2, 6)
		assertEquals('l', s.charAt(0))
		assertEquals('l', s.charAt(1))
		assertEquals('o', s.charAt(2))
		assertEquals(' ', s.charAt(3))
	}

	@Test fun testSubSequence() {
		val s = SubString("Hello World")
		s.setRange(0, 5)
		assertEquals("el", s.subSequence(1, 3))

		s.setRange(2, 7)
		assertEquals("lo", s.subSequence(1, 3))
	}

	@Test fun testToString() {
		val s = SubString("Hello World")
		s.setRange(0, 5)
		assertEquals("Hello", s.toString())

		s.setRange(2, 7)
		assertEquals("llo W", s.toString())
	}

	@Test fun testCompareTo() {
		val s = SubString("Hello World")
		s.setRange(6, 11)
		assertEquals(0, s.compareTo("World"))
		assertEquals("World".compareTo("Xorld"), s.compareTo("Xorld"))
		assertEquals("World".compareTo("Worldb"), s.compareTo("Worldb"))
		assertEquals("World".compareTo("BWorld"), s.compareTo("BWorld"))
		assertEquals("World".compareTo("Borld"), s.compareTo("Borld"))
	}

	@Test fun testEquals() {
		val s = SubString("Hello World")
		s.setRange(0, 5)
		assertTrue(s.equals("Hello"))
		s.setRange(1, 5)
		assertTrue(s.equals("ello"))
		assertFalse(s.equals("Hello"))
		assertFalse(s.equals("elo"))
		assertFalse(s.equals("ell"))
		s.setRange(1, 1)
		assertTrue(s.equals(""))
		assertFalse(s.equals("e"))
		s.setRange(1, 2)
		assertFalse(s.equals(""))
		assertTrue(s.equals("e"))

	}

	@Test fun testHashCode() {
		val s = SubString("Hello World")
		s.setRange(0, 5)
		assertEquals("Hello".hashCode(), s.hashCode())
		s.setRange(1, 5)
		assertEquals("ello".hashCode(), s.hashCode())
		s.setRange(1, 1)
		assertEquals("".hashCode(), s.hashCode())
		s.setRange(1, 2)
		assertEquals("e".hashCode(), s.hashCode())
	}

	@Test fun testStartsWith() {
		val s = SubString("Hello World", 6, 11)
		assertTrue(s.startsWith("World"))
		assertTrue(s.startsWith("orl", 1))
		assertFalse(s.startsWith("World", 1))
	}

	@Test fun testIndexOf() {
		val s = SubString("Hello World", 6, 11)
		assertEquals(-1, s.indexOf('H'))
		assertEquals(0, s.indexOf('W'))
		assertEquals(0, s.indexOf("W"))

		assertEquals(1, s.indexOf('o'))
		assertEquals(1, s.indexOf("orld"))
		assertEquals(-1, s.indexOf("orldy"))
	}

	@Test fun testLastIndexOf() {
		val s = SubString("Hello World", 3, 11)
		assertEquals(-1, s.lastIndexOf('H'))
		assertEquals(3, s.lastIndexOf('W'))
		assertEquals(3, s.lastIndexOf("W"))

		assertEquals(4, s.lastIndexOf('o'))
		assertEquals(4, s.lastIndexOf("orld"))
		assertEquals(-1, s.lastIndexOf("orldy"))
	}
}
