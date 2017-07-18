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

import com.google.javascript.jscomp.*
import org.junit.Test
import java.io.File
import java.util.logging.Level

class ClosureTest {

	@Test fun testClosure() {
		Compiler.setLoggingLevel(Level.INFO)
		val compiler = Compiler()
		val options = CompilerOptions()
		options.languageIn = CompilerOptions.LanguageMode.ECMASCRIPT5
		options.languageOut = CompilerOptions.LanguageMode.ECMASCRIPT5
		CompilationLevel.SIMPLE_OPTIMIZATIONS.setOptionsForCompilationLevel(options)
		WarningLevel.QUIET.setOptionsForWarningLevel(options)

		val sources = ArrayList<SourceFile>()
		val files = arrayOf("kotlin.js", "AcornUtils.js", "AcornUiCore.js", "AcornUiJsBackend.js", "BasicExampleCore.js", "BasicExampleJs.js")

		for (file in files) {
			sources.add(SourceFile.fromFile("testResources/closure/lib/$file"))
		}
		compiler.compile(listOf(), sources, options)

		for (message in compiler.errors) {
			System.err.println("Error message: $message")
		}

		val outFile = File("testOut/closure", "combined.min.js")
		outFile.parentFile.mkdirs()
		outFile.writeText(compiler.toSource())
	}
}