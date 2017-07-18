package com.acornui.collection

import com.acornui.test.assertListEquals
import org.junit.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull
import kotlin.test.assertTrue

class CyclicListTest {

	@Test fun unshift() {
		val list = CyclicList<Int>(5)
		list.unshift(1)
		list.unshift(2)
		list.unshift(3)
		list.unshift(4)

		assertListEquals(arrayOf(4, 3, 2, 1), list)

		list.unshift(5) // Will cause list to grow
		list.unshift(6)
		list.unshift(7)
		list.unshift(8)

		assertListEquals(arrayOf(8, 7, 6, 5, 4, 3, 2, 1), list)
	}

	@Test fun shift() {
		var shifted: Int?
		val list = CyclicList<Int>(5)
		list.addAll(1, 2, 3, 4)
		assertListEquals(arrayOf(1, 2, 3, 4), list)

		list.shift()
		assertListEquals(arrayOf(2, 3, 4), list)

		list.shift()
		shifted = list.shift()
		assertEquals(3, shifted)
		assertListEquals(arrayOf(4), list)

		shifted = list.shift()
		assertEquals(4, shifted)
		assertTrue(list.isEmpty())
	}

	@Test fun push() {
		val list = CyclicList<Int>(5)
		list.add(1)
		list.add(2)
		list.add(3)
		list.add(4)

		assertListEquals(arrayOf(1, 2, 3, 4), list)

		list.add(5) // Will cause list to grow
		list.add(6)
		list.add(7)
		list.add(8)

		assertListEquals(arrayOf(1, 2, 3, 4, 5, 6, 7, 8), list)
	}

	@Test fun pop() {
		var popped: Int?
		val list = CyclicList<Int>(5)
		list.unshift(1, 2, 3, 4)
		assertListEquals(arrayOf(4, 3, 2, 1), list)

		popped = list.pop()
		assertEquals(1, popped)
		assertListEquals(arrayOf(4, 3, 2), list)
		assertEquals(3, list.size)

		popped = list.pop()
		assertEquals(2, popped)
		assertListEquals(arrayOf(4, 3), list)

		popped = list.pop()
		assertEquals(3, popped)
		assertListEquals(arrayOf(4), list)

		popped = list.pop()
		assertEquals(4, popped)

	}

	@Test fun getItemAt() {
		val list = CyclicList<Int>(5)
		list.addAll(1, 2, 3, 4)
		assertListEquals(arrayOf(1, 2, 3, 4), list)
		assertEquals(2, list[1])
		assertEquals(1, list[0])
		assertEquals(4, list[3])
		//assertNull(list[4])
	}

	@Test fun size() {
		val list = CyclicList<Int>(5)
		list.addAll(1, 2, 3, 4)
		assertEquals(4, list.size)
		list.addAll(1, 2, 3, 4)
		assertEquals(8, list.size)
		list.shift()
		list.shift()
		list.shift()
		assertEquals(5, list.size)
		list.clear()
		assertEquals(0, list.size)
	}

	@Test fun clear() {
		val list = CyclicList<Int>(5)
		list.addAll(1, 2, 3, 4)
		list.unshift(0)
		list.unshift(-1)
		list.clear()
		assertEquals(0, list.size)

	}

	@Test fun first_returnsFirst() {
		val list = CyclicList<Int>(5)
		list.addAll(1, 2, 3, 4)
		assertTrue(list.first() == 1)
	}

	@Test fun first_empty_returnsNull() {
		val list = CyclicList<Int>(5)
		assertNull(list.firstOrNull())
	}

	@Test fun last_empty_returnsNull() {
		val list = CyclicList<Int>(5)
		assertNull(list.lastOrNull())
	}

	@Test fun last_returnsLast() {
		val list = CyclicList<Int>(5)
		list.addAll(1, 2, 3, 4)
		assertTrue(list.last() == 4)
	}

	/**
	 * regression
	 */
	@Test fun shiftAcrossBoundary_doesNotBreakStartIndex() {
		val list = CyclicList<Int>(4)
		list.add(1)
		list.unshift(2)
		list.shift()
		list.shift()
	}

}