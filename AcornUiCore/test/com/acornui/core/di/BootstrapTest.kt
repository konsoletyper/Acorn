package com.acornui.core.di

import org.junit.Test
import kotlin.test.assertFails
import kotlin.test.assertNotNull
import kotlin.test.assertTrue

class BootstrapTest {
	@Test fun set() {
		val b = Bootstrap()
		b.on(Dep1) {
			b[Dep2] = Dep2(get(Dep1))
		}
		b[Dep1] = Dep1()

		assertNotNull(b.injector.injectOptional(Dep1))
		assertNotNull(b.injector.injectOptional(Dep2))


	}

//	@Test fun overridesNotAllowed() {
//		val b = Bootstrap()
//		b.on(Dep1) {
//			b[Dep2] = Dep2(get(Dep1))
//		}
//		b.on(Dep1) {
//			assertFails {
//				b[Dep2] = Dep2(get(Dep1))
//			}
//		}
//
//		b[Dep1] = Dep1()
//		assertFails {
//			b[Dep1] = Dep1()
//		}
//	}

	@Test fun thenTest() {
		val b = Bootstrap()
		b.on(Dep1) {
			b[Dep2] = Dep2(get(Dep1))
		}
		b.then {
			b.on(Dep1, Dep2) {
				b[Dep3] = Dep3(get(Dep1), get(Dep2))
			}
		}

		var called = false
		b.then {
			called = true
			assertTrue(b.injector.containsKey(Dep3))
		}

		b[Dep1] = Dep1()


	}
}

private class Dep1() {
	companion object : DKey<Dep1>
}

private class Dep2(dep1: Dep1) {
	companion object : DKey<Dep2>
}

private class Dep3(dep1: Dep1, dep2: Dep2) {
	companion object : DKey<Dep3>
}