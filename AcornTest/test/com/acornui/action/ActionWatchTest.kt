/*
 * Copyright 2014 Nicholas Bilyk
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
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

class ActionWatchTest {

	@Test fun testSuccess() {
		val watch = ActionWatch()
		assertEquals(ActionStatus.PENDING, watch.status)
		val b = BasicAction()
		watch.add(b)
		assertEquals(ActionStatus.INVOKED, watch.status)
		val c = BasicAction()
		watch.add(c)

		b.invoke()
		b.success()
		assertEquals(ActionStatus.INVOKED, watch.status)
		c.invoke()
		c.success()
		assertEquals(ActionStatus.SUCCESSFUL, watch.status)

	}

	@Test fun testAbort() {
		val watch = ActionWatch()
		assertEquals(ActionStatus.PENDING, watch.status)
		val b = BasicAction()
		watch.add(b)
		assertEquals(ActionStatus.INVOKED, watch.status)
		val c = BasicAction()
		watch.add(c)

		b.invoke()
		b.success()
		assertEquals(ActionStatus.INVOKED, watch.status)
		c.invoke()
		c.abort()
		assertEquals(ActionStatus.ABORTED, watch.status)
	}

	@Test fun testAbortNoCascade() {
		val watch = ActionWatch()
		watch.cascadeFailure = false
		assertEquals(ActionStatus.PENDING, watch.status)
		val b = BasicAction()
		watch.add(b)
		assertEquals(ActionStatus.INVOKED, watch.status)
		val c = BasicAction()
		watch.add(c)

		b.invoke()
		b.success()
		assertEquals(ActionStatus.INVOKED, watch.status)
		c.invoke()
		c.abort()
		assertEquals(ActionStatus.SUCCESSFUL, watch.status)
	}

	@Test fun testFail() {
		val watch = ActionWatch()
		val b = BasicAction()
		watch.add(b)
		val c = BasicAction()
		watch.add(c)

		b.invoke()
		val e = Exception()
		b.fail(e)
		assertEquals(e, watch.error)
		assertEquals(ActionStatus.FAILED, watch.status)
	}


	@Test fun testRemove() {
		val watch = ActionWatch()
		watch.cascadeFailure = false
		assertEquals(ActionStatus.PENDING, watch.status)
		val b = BasicAction()
		watch.add(b)
		assertEquals(ActionStatus.INVOKED, watch.status)
		val c = BasicAction()
		watch.add(c)

		b.invoke()
		b.success()
		assertEquals(ActionStatus.INVOKED, watch.status)
		watch.remove(c)

		assertEquals(ActionStatus.SUCCESSFUL, watch.status)
	}

}