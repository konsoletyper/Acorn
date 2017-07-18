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

package com.acornui.jvm.loader

/**
 * @author nbilyk
 */
import com.acornui.core.assets.AssetType
import com.acornui.core.assets.AssetTypes
import com.acornui.core.time.TimeDriver
import java.io.InputStream
import java.nio.charset.Charset

open class JvmTextLoader(
		private val charset: Charset,
		isAsync: Boolean,
		timeDriver: TimeDriver?
) : JvmAssetLoaderBase<String>(isAsync, timeDriver) {

	override val type: AssetType<String> = AssetTypes.TEXT

	override fun create(fis: InputStream): String {
		var size = bytesTotal
		if (size <= 0) size = DEFAULT_BUFFER_SIZE
		val bytes = fis.use { it.readBytes(size) }
		return bytes.toString(charset)
	}
}