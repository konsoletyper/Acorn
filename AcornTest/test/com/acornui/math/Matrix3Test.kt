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

/**
 * @author nbilyk
 */
class Matrix3Test {

	@Test fun scl() {
		assertListEquals(Matrix3(1f * 2f, 2f, 3f, 4f, 5f * 2f, 6f, 7f, 8f, 9f).values, Matrix3(1f, 2f, 3f, 4f, 5f, 6f, 7f, 8f, 9f).scl(2f).values)
	}
}