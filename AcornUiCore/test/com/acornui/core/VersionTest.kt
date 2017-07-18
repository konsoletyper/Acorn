package com.acornui.core

import org.junit.Test
import kotlin.test.assertEquals

class VersionTest {

	@Test fun testFromStr() {
		val v = Version(1, 2, 3, 4)
		assertEquals("1.2.3.4", v.toString())
		val v2 = Version.fromStr(v.toString())
		assertEquals("1.2.3.4", v2.toString())
		assertEquals(v, v2)
	}
}