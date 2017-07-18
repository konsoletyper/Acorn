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

import org.junit.*
import kotlin.test.*

/**
 * @author nbilyk
 */
class BasicActionTest {

	@Test fun status() {
		val basicAction = BasicActionImpl()
		assertEquals(ActionStatus.PENDING, basicAction.status)

		basicAction.invoke()
		assertEquals(ActionStatus.INVOKED, basicAction.status)

		basicAction.finish()
		assertEquals(ActionStatus.SUCCESSFUL, basicAction.status)

		basicAction.reset()
		assertEquals(ActionStatus.PENDING, basicAction.status)

		basicAction.invoke()
		assertEquals(ActionStatus.INVOKED, basicAction.status)

		basicAction.fail(Exception())
		assertEquals(ActionStatus.FAILED, basicAction.status)

		basicAction.reset()
		assertEquals(ActionStatus.PENDING, basicAction.status)
		assertNull(basicAction.error)

		basicAction.invoke()
		assertEquals(ActionStatus.INVOKED, basicAction.status)

		basicAction.abort()
		assertEquals(ActionStatus.ABORTED, basicAction.status)
	}

	@Test fun statusChanged() {
		val basicAction = BasicActionImpl()
		var actualOldStatus: ActionStatus? = null
		var actualStatus: ActionStatus? = null
		basicAction.statusChanged.add({
			action, oldStatus, newStatus, exception ->
			assertEquals(basicAction, action)
			actualOldStatus = oldStatus
			actualStatus = newStatus
		})

		basicAction.invoke()
		assertEquals(ActionStatus.PENDING, actualOldStatus)
		assertEquals(ActionStatus.INVOKED, actualStatus)

		basicAction.finish()
		assertEquals(ActionStatus.INVOKED, actualOldStatus)
		assertEquals(ActionStatus.SUCCESSFUL, actualStatus)

		basicAction.reset()
		assertEquals(ActionStatus.SUCCESSFUL, actualOldStatus)
		assertEquals(ActionStatus.PENDING, actualStatus)

		basicAction.invoke()
		assertEquals(ActionStatus.PENDING, actualOldStatus)
		assertEquals(ActionStatus.INVOKED, actualStatus)

		basicAction.fail(Exception())
		assertEquals(ActionStatus.INVOKED, actualOldStatus)
		assertEquals(ActionStatus.FAILED, actualStatus)

		basicAction.reset()
		assertEquals(ActionStatus.FAILED, actualOldStatus)
		assertEquals(ActionStatus.PENDING, actualStatus)
	}

	@Test fun invoked() {
		val basicAction = BasicActionImpl()
		var c = 0
		basicAction.invoked.add({
			action ->
			assertEquals(basicAction, action)
			c++
		})
		basicAction.invoke()
		assertEquals(1, c)

		basicAction.reset()
		basicAction.invoke()
		assertEquals(2, c)
	}

	@Test fun succeeded() {
		val basicAction = BasicActionImpl()
		var c = 0
		basicAction.succeeded.add({
			action ->
			assertEquals(basicAction, action)
			c++
		})
		basicAction.invoke()
		assertEquals(0, c)

		basicAction.finish()
		assertEquals(1, c)

		basicAction.reset()
		assertEquals(1, c)

		basicAction.invoke()
		assertEquals(1, c)

		basicAction.finish()
		assertEquals(2, c)
	}

	class BasicActionImpl() : BasicAction() {

		fun finish() {
			super.success()
		}
	}
}
