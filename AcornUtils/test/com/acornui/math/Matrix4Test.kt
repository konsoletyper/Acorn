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

package com.acornui.math

import com.acornui.test.assertListEquals
import org.junit.Test

class Matrix4Test {

	@Test fun mul() {
		val m1 = Matrix4(arrayListOf(
				3f, 5f, 6f, 13f,
				17f, 23f, 27f, 35f,
				19f, 101f, 73f, 19f,
				11f, 25f, 41f, 43f))
		val m2 = Matrix4(arrayListOf(
				9f, 4f, 77f, 65f,
				44f, 36f, 16f, 98f,
				26f, 3f, 9f, 27f,
				43f, 87f, 38f, 75f))

		m1.mul(m2)
		assertListEquals(arrayListOf(2273f, 9539f, 8448f, 4515f, 2126f, 5114f, 6422f, 6350f, 597f, 1783f, 2001f, 1775f, 3155f, 7929f, 8456f, 7551f), m1.values)
	}


}