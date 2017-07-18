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

package com.acornui.texturepacker.writer

import com.acornui.gl.core.TexturePixelFormat
import com.acornui.core.graphics.TextureAtlasData
import com.acornui.core.graphics.TextureAtlasDataSerializer
import com.acornui.jvm.graphics.JvmImageUtils
import com.acornui.serialization.JsonSerializer
import com.acornui.core.replaceTokens
import com.acornui.texturepacker.PackedTextureData
import java.io.File

/**
 * @author nbilyk
 */
object JvmTextureAtlasWriter {

	/**
	 * Writes the texture atlas to their respective files.
	 * @param atlasFilename The filename of the atlas JSON file. This should include the file extension but not directory.
	 * 		E.g. "myTextures.atlas"
	 * @param pagesFilename The filename of the atlas pages, not including the extension. This should not include the
	 * directory, and must have a {0} token representing the page index. Example: "myTexturePage{0}
	 */
	fun writeAtlas(atlasFilename: String, pagesFilename: String, packedData: PackedTextureData, dir: File) {
		val json = JsonSerializer
		dir.mkdirs()
		if (pagesFilename.indexOf("{0}") == -1)
			throw IllegalArgumentException("pagesFilename must have \"{0}\" as a replacement token to represent the page index.")

		for (i in 0..packedData.pages.lastIndex) {
			val page = packedData.pages[i]
			page.second.texturePath = pagesFilename.replaceTokens("" + i) + "." + packedData.settings.compressionExtension
			JvmImageUtils.rgbDataToFile(page.first, dir.path + "/" + page.second.texturePath, packedData.settings.compressionExtension, packedData.settings.pixelFormat == TexturePixelFormat.RGBA, packedData.settings.premultipliedAlpha)
		}

		val atlas = TextureAtlasData(Array(packedData.pages.size, { packedData.pages[it].second }))
		val jsonStr = json.write(atlas, TextureAtlasDataSerializer)
		val atlasFile = File(dir, atlasFilename)
		atlasFile.writeText(jsonStr)
	}
}