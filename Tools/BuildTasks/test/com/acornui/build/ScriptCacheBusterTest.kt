package com.acornui.build

import com.acornui.build.util.ScriptCacheBuster
import com.acornui.build.util.SourceFileManipulator
import org.junit.Test
import java.io.File

class ScriptCacheBusterTest {

	@Test
	fun testModifyScripts() {
		val out = File("testOut/cacheBuster")
		out.deleteRecursively()
		out.mkdirs()
		File("testResources/cacheBuster").copyRecursively(out)

		val m = SourceFileManipulator()
		m.addProcessor(ScriptCacheBuster::replaceVersionWithModTime, *ScriptCacheBuster.extensions)
		m.process(out)
	}
}