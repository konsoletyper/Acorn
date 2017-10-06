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
import kotlin.test.assertFalse
import kotlin.test.assertTrue

/**
 * @author nbilyk
 */
class MultiActionTest() {

	@Test fun add() {
		val action = MultiAction()
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
		assertEquals(5, c)

		action1.finish()
		action2.finish()
		assertFalse(action.hasCompleted())

		action3.finish()
		action4.finish()
		action5.finish()
		assertTrue(action.hasCompleted())
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

		val action = MultiAction()
		action.add(action1)
		action.add(action2)
		action.add(action3)
		action.add(action4)
		action.add(action5)
		action.remove(action2)
		action.remove(action3)
		action.invoke()
		
		assertEquals(3, c)

		action1.finish()
		action4.finish()
		action5.finish()
		
		assertEquals(ActionStatus.SUCCESSFUL, action.status)
	}

	class BasicActionImpl() : BasicAction() {
		fun finish() {
			super.success()
		}
	}
}