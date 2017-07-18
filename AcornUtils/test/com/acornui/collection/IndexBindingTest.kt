package com.acornui.collection

import com.acornui.observe.bindIndex
import org.junit.Assert.*
import org.junit.Test

class IndexBindingTest {

	@Test fun bind() {
		val list = activeListOf(0, 1, 2, 3, 3, 3, 4, 5)

		val binding = list.bindIndex(4)

		assertEquals(3, binding.element)
		assertEquals(4, binding.index)

		list.removeAt(3)
		assertEquals(3, binding.element)
		assertEquals(3, binding.index)

		list.add(3, 3)
		assertEquals(3, binding.element)
		assertEquals(4, binding.index)

		list.add(3, 4)
		assertEquals(3, binding.element)
		assertEquals(5, binding.index)

		list.add(5, 1)
		assertEquals(3, binding.element)
		assertEquals(6, binding.index)

		list.add(7, 1)
		assertEquals(3, binding.element)
		assertEquals(6, binding.index)

		list.removeAt(7)
		assertEquals(3, binding.element)
		assertEquals(6, binding.index)

		list.removeAt(5)
		assertEquals(3, binding.element)
		assertEquals(5, binding.index)

		list.removeAt(5)
		assertNull(binding.element)
		assertEquals(-1, binding.index)
	}

	@Test fun reset() {
		val list = activeListOf(0, 1, 2, 3, 3, 3, 4, 5)

		val binding = list.bindIndex(4, recoverOnReset = false)

		assertEquals(3, binding.element)
		assertEquals(4, binding.index)

		list.dirty()

		assertNull(binding.element)
		assertEquals(-1, binding.index)
	}

	@Test fun resetWithRecover() {
		val list = activeListOf(0, 1, 2, 3, 3, 3, 4, 5)

		val binding = list.bindIndex(4, recoverOnReset = true)

		assertEquals(3, binding.element)
		assertEquals(4, binding.index)

		list.dirty()

		assertEquals(3, binding.element)
		assertEquals(4, binding.index)

		// Test a recovery where the element is no longer at the same index.
		list.batchUpdate {
			list.add(0, 0)
			list.add(0, 0)
		}
		assertEquals(3, binding.element)
		// The index at this point could be a position of any of the 3 3 elements.
		assertEquals(list[binding.index], binding.element)

	}

	@Test fun changed() {
		val list = activeListOf(0, 1, 2, 3, 3, 3, 4, 5)

		val binding = list.bindIndex(4)

		assertEquals(binding.element, 3)
		assertEquals(binding.index, 4)

		list[3] = 4
		list[5] = 4

		assertEquals(binding.element, 3)
		assertEquals(binding.index, 4)

		list[4] = 4

		assertEquals(binding.element, null)
		assertEquals(binding.index, -1)
	}
}