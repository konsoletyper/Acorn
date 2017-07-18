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

package com.acornui.core.graphics

import com.acornui.collection.Clearable
import com.acornui.core.Disposable
import com.acornui.core.assets.AssetBinding
import com.acornui.core.assets.AssetTypes
import com.acornui.core.assets.assetBinding
import com.acornui.core.assets.jsonBinding
import com.acornui.core.di.Injector
import com.acornui.core.di.Scoped
import com.acornui.core.di.inject
import com.acornui.core.io.file.Files
import com.acornui.logging.Log

/**
 * A binding for a texture and data describing the region to display.
 */
class AtlasRegionBinding(
		override val injector: Injector,
		val onFailed: () -> Unit,
		val onChanged: (Texture, AtlasRegionData) -> Unit
) : Scoped, Clearable, Disposable {

	private var regionName: String? = null

	private val textureAtlasBinding = jsonBinding(TextureAtlasDataSerializer, onFailed) {
		textureAtlasData: TextureAtlasData ->
		setTextureAtlasData(textureAtlasData)
	}

	private var textureBinding: AssetBinding<Texture, Texture>? = null

	fun setRegion(atlasPath: String, regionName: String) {
		clear()
		this.regionName = regionName
		textureAtlasBinding.path = atlasPath
	}

	private fun setTextureAtlasData(textureAtlasData: TextureAtlasData) {
		textureBinding?.dispose()
		textureBinding = atlasPageTextureBinding(textureAtlasBinding.path!!, textureAtlasData, regionName!!, onFailed, onChanged)
	}

	override fun clear() {
		regionName = null
		textureBinding?.clear()
		textureAtlasBinding.clear()
	}

	override fun dispose() {
		clear()
	}
}

fun Scoped.atlasRegionBinding(onFailed: () -> Unit, onChanged: (Texture, AtlasRegionData) -> Unit): AtlasRegionBinding = AtlasRegionBinding(injector, onFailed, onChanged)

fun Scoped.atlasRegionBinding(atlasPath: String, regionName: String, onFailed: () -> Unit, onChanged: (Texture, AtlasRegionData) -> Unit): AtlasRegionBinding {
	val b = AtlasRegionBinding(injector, onFailed, onChanged)
	b.setRegion(atlasPath, regionName)
	return b
}

fun Scoped.atlasPageTextureBinding(atlasPath: String, textureAtlasData: TextureAtlasData, regionName: String, onFailed: () -> Unit, onChanged: (Texture, AtlasRegionData) -> Unit): AssetBinding<Texture, Texture>? {
	val pageAndRegion = textureAtlasData.findRegion(regionName)
	if (pageAndRegion == null) {
		Log.warn("Region '$regionName' not found in atlas.")
		onFailed()
		return null
	} else {
		val (page, region) = pageAndRegion
		val textureBinding = atlasPageBinding(atlasPath, page, onFailed) {
			texture ->
			onChanged(texture, region)
		}
		return textureBinding
	}
}

fun Scoped.atlasPageBinding(atlasPath: String, page: AtlasPageData, onFailed: () -> Unit, onChanged: (Texture) -> Unit): AssetBinding<Texture, Texture> {
	val files = inject(Files)
	val atlasFile = files.getFile(atlasPath) ?: throw Exception("File not found: $atlasPath")
	val textureFile = atlasFile.siblingFile(page.texturePath)
			?: throw Exception("File not found: ${page.texturePath} relative to: ${atlasFile.parent.path}")

	val textureBinding = assetBinding(AssetTypes.TEXTURE, AtlasPageDecorator(page), onFailed, onChanged)
	textureBinding.path = textureFile.path
	return textureBinding
}