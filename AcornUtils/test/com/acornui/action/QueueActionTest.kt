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

import com.acornui.test.assertListEquals
import org.junit.Test

import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

/**
 * @author nbilyk
 */
class QueueActionTest() {


	@Test fun add() {
		val action = QueueAction()
		var c = 0

		val action1 = BasicActionImpl()
		action1.invoked.add({
			c++
		})

		val action2 = BasicActionImpl()
		action2.invoked.add({
			c++
		})
		val action3 = BasicActionImpl()
		action3.invoked.add({
			c++
		})
		val action4 = BasicActionImpl()
		action4.invoked.add({
			c++
		})
		val action5 = BasicActionImpl()
		action5.invoked.add({
			c++
		})

		action.add(action1)
		action.add(action2)
		action.add(action3)
		action.add(action4)
		action.add(action5)

		action.invoke()
		assertEquals(1, c)

		action1.finish()
		action2.finish()
		assertFalse(action.hasCompleted())
		assertEquals(3, c)
		action3.finish()
		action4.finish()
		action5.finish()
		assertTrue(action.hasCompleted())
		assertEquals(5, c)

	}

	@Test fun remove() {
		var c = 0

		val action1 = BasicActionImpl()
		action1.invoked.add({
			c++
		})
		val action2 = BasicActionImpl()
		action2.invoked.add({
			c++
		})
		val action3 = BasicActionImpl()
		action3.invoked.add({
			c++
		})
		val action4 = BasicActionImpl()
		action4.invoked.add({
			c++
		})
		val action5 = BasicActionImpl()
		action5.invoked.add({
			c++
		})

		val action = QueueAction()
		action.add(action1)
		action.add(action2)
		action.add(action3)
		action.add(action4)
		action.add(action5)
		action.remove(action2)
		action.remove(action3)
		action.invoke()
		assertEquals(1, c)

		action1.finish()
		action4.finish()
		assertEquals(3, c)
		action5.finish()
		assertEquals(3, c)
		assertEquals(ActionStatus.SUCCESSFUL, action.status)
	}

	@Test fun abort() {
		val arr = ArrayList<Int>()

		val action1 = BasicActionImpl()
		action1.invoked.add({
			arr.add(1)
		})
		val action2 = BasicActionImpl()
		action2.invoked.add({
			arr.add(2)
		})
		val action3 = BasicActionImpl()
		action3.invoked.add({
			arr.add(3)
		})
		val action4 = BasicActionImpl()
		action4.invoked.add({
			arr.add(4)
		})
		val action5 = BasicActionImpl()
		action5.invoked.add({
			arr.add(5)
		})

		val action = QueueAction()
		action.add(action1)
		action.add(action2)
		action.add(action3)
		action.add(action4)
		action.add(action5)
		action.simultaneous = 2
		action.invoke()

		action1.finish()
		assertListEquals(arrayOf(1, 2, 3), arr)
		action.abort()

		assertEquals(ActionStatus.SUCCESSFUL, action1.status)
		assertEquals(ActionStatus.ABORTED, action2.status)
		assertEquals(ActionStatus.ABORTED, action3.status)
		assertEquals(ActionStatus.PENDING, action4.status)
		assertEquals(ActionStatus.PENDING, action5.status)
		assertEquals(ActionStatus.ABORTED, action.status)
	}

	@Test fun abortChild() {
		val arr = ArrayList<Int>()

		val action1 = BasicActionImpl()
		action1.invoked.add({
			arr.add(1)
		})
		val action2 = BasicActionImpl()
		action2.invoked.add({
			arr.add(2)
		})
		val action3 = BasicActionImpl()
		action3.invoked.add({
			arr.add(3)
		})
		val action4 = BasicActionImpl()
		action4.invoked.add({
			arr.add(4)
		})
		val action5 = BasicActionImpl()
		action5.invoked.add({
			arr.add(5)
		})

		val action = QueueAction()
		action.cascadeFailure = false
		action.add(action1)
		action.add(action2)
		action.add(action3)
		action.add(action4)
		action.add(action5)
		action.simultaneous = 2
		action.invoke()

		action1.finish()
		action2.abort()
		assertEquals(ActionStatus.INVOKED, action.status)
		action.cascadeFailure = true
		assertListEquals(arrayOf(1, 2, 3, 4), arr)
		action3.abort()
		assertListEquals(arrayOf(1, 2, 3, 4), arr)
		// Action1 - success (forgotten), Action2 - abort (no cascade, forgotten), Action3 - abort, Action4 - abort, Action5 - pending
		assertEquals(3, action.actions.size)

		assertEquals(ActionStatus.SUCCESSFUL, action1.status)
		assertEquals(ActionStatus.ABORTED, action2.status)
		assertEquals(ActionStatus.ABORTED, action3.status)
		assertEquals(ActionStatus.ABORTED, action4.status)
		assertEquals(ActionStatus.PENDING, action5.status)
		assertEquals(ActionStatus.ABORTED, action.status)
	}


	@Test fun forgetWithSimultaneous() {
		val arr = ArrayList<Int>()

		val action1 = object : BasicAction() {
			override fun onInvocation() {
				success()
			}
		}
		action1.invoked.add({
			arr.add(1)
		})
		val action2 = BasicActionImpl()
		action2.invoked.add({
			arr.add(2)
		})
		val action3 = BasicActionImpl()
		action3.invoked.add({
			arr.add(3)
		})
		val action4 = BasicActionImpl()
		action4.invoked.add({
			arr.add(4)
		})
		val action5 = BasicActionImpl()
		action5.invoked.add({
			arr.add(5)
		})

		val action = QueueAction()
		action.autoInvoke = true
		action.forgetActions = true
		action.simultaneous = 2
		action.add(action1)
		action.add(action2)
		action.add(action3)
		action.add(action4)
		action.add(action5)

		assertListEquals(arrayOf(1, 2, 3), arr)
		assertListEquals(arrayOf<ActionRo>(action2, action3, action4, action5), action.actions)
	}

	open class BasicActionImpl() : BasicAction() {
		fun finish() {
			super.success()
		}
	}
}