/*
 * Copyright 2017 Nicholas Bilyk
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

package com.acornui.build

import com.acornui.build.util.KotlinMonkeyPatcher
import com.acornui.build.util.SourceFileManipulator
import org.junit.Test
import java.io.File

class KotlinMonkeyPatcherTest {

	@Test
	fun editKotlinJs() {
		KotlinMonkeyPatcher.editKotlinJs(File("testResources/monkeyPatcher/kotlin.js"), File("testOut/monkeyPatcher/kotlin.acorn.js"))
	}

	@Test
	fun patchJs() {

		val jsPatcher = SourceFileManipulator()
		jsPatcher.addProcessor(KotlinMonkeyPatcher::patchKotlinCode, "js")

		val dest = File("testOut/monkeyPatcher/CodeToPatch.js")
		dest.delete()
		File("testResources/monkeyPatcher/CodeToPatch.js").copyTo(dest)
		jsPatcher.process(dest)

	}

	@Test
	fun optimizeJs() {

		val jsPatcher = SourceFileManipulator()
		jsPatcher.addProcessor(KotlinMonkeyPatcher::optimizeProductionCode, "js")
		//jsPatcher.process(dest)

	}



}