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

package com.acornui.core.assets

import com.acornui.action.BasicAction
import com.acornui.core.io.file.FilesImpl
import com.acornui.io.file.FilesManifest
import org.junit.Test

/**
 * @author nbilyk
 */
class AssetManagerImplTest {

	@Test fun testLoad() {
		val manager = AssetManagerImpl("", FilesImpl(FilesManifest()))
		manager.setLoaderFactory(AssetTypes.TEXT, { MockLoader() })
	}

}

class MockLoader() : BasicAction(), MutableAssetLoader<String> {

	override val type: AssetType<String> = AssetTypes.TEXT

	init {
		count++
	}

	override var estimatedBytesTotal: Int = 0

	override var path: String = ""

	override val result: String
		get() = ""

	override val secondsLoaded: Float
		get() {
			return 0f
		}

	override val secondsTotal: Float
		get() {
			return 0f
		}

	override fun onInvocation() {
		success()
	}

	companion object {
		var count = 0
	}
}