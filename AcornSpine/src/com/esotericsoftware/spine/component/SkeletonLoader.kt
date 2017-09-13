/*
 * Copyright 2016 Nicholas Bilyk
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

package com.esotericsoftware.spine.component

import com.acornui.action.ActionWatch
import com.acornui.action.LoadableRo
import com.acornui.action.ProgressAction
import com.acornui.action.onSuccess
import com.acornui.core.Disposable
import com.acornui.core.assets.*
import com.acornui.core.di.*
import com.acornui.core.graphics.*
import com.acornui.core.io.file.FileEntry
import com.acornui.core.io.file.Files
import com.esotericsoftware.spine.data.SkeletonData
import com.esotericsoftware.spine.data.SkeletonDataSerializer
import com.esotericsoftware.spine.data.SkinData


class LoadedSkeleton(
		val skeletonData: SkeletonData,
		val textureAtlasData: TextureAtlasData,
		val loadedSkins: Map<SkinData, LoadedSkin>
) {}

class LoadedSkin(
		private val pageTextures: Map<String, Texture>
) {
	fun getTexture(page: AtlasPageData): Texture? {
		return pageTextures[page.texturePath] ?: throw Exception("Atlas page ${page.texturePath} not found in loaded skeleton.")
	}
}

/**
 * Loads the skeleton data, the texture atlas, and all the required textures for the requested skins.
 */
class SkeletonLoader(
		override val injector: Injector,

		/**
		 * The filepath to the skeleton data.
		 */
		private val skeletonDataPath: String,

		/**
		 * THe filepath to the texture atlas data.
		 */
		private val textureAtlasPath: String
) : Scoped, LoadableRo<LoadedSkeleton>, ActionWatch() {

	private val files = inject(Files)

	private var _result: LoadedSkeleton? = null

	override val result: LoadedSkeleton
		get() = _result ?: throw Exception("Skeleton is not loaded yet.")

	private var skeletonDataLoader = loadJson(skeletonDataPath, SkeletonDataSerializer)
	private var textureAtlasLoader = loadJson(textureAtlasPath, TextureAtlasDataSerializer)

	private val skinLoaders: HashMap<SkinData, SkeletonSkinLoader> = HashMap()

	private val loadedSkins = HashMap<SkinData, LoadedSkin>()
	private val atlasFile: FileEntry

	init {
		atlasFile = files.getFile(textureAtlasPath) ?: throw Exception("File not found: $textureAtlasPath")
		addAll(skeletonDataLoader, textureAtlasLoader)
	}

	override fun onSuccess() {
		_result = LoadedSkeleton(skeletonDataLoader.result, textureAtlasLoader.result, loadedSkins)
	}

	fun loadAllSkins(): ProgressAction {
		if (!hasSucceeded()) throw Exception("Cannot load skins until this action is successful.")
		val action = ActionWatch()
		action.batch {
			for (skinData in result.skeletonData.skins.values) {
				action.add(loadSkin(skinData))
			}
		}
		return action
	}

	fun loadSkins(vararg skinNames: String): ProgressAction {
		if (!hasSucceeded()) throw Exception("Cannot load skins until this action is successful.")
		val action = ActionWatch()
		action.batch {
			for (skinName in skinNames) {
				val skinData = result.skeletonData.findSkin(skinName) ?: throw Exception("Could not find skin '$skinName'")
				action.add(loadSkin(skinData))
			}
		}
		return action
	}

	private fun loadSkin(skinData: SkinData): ProgressAction {
		if (skinLoaders.containsKey(skinData)) {
			return skinLoaders[skinData]!!
		} else {
			val skinLoader = SkeletonSkinLoader(injector, skinData, atlasFile, result.textureAtlasData)
			skinLoader.onSuccess {
				loadedSkins[skinData] = skinLoader.result
			}
			skinLoaders[skinData] = skinLoader
			return skinLoader
		}
	}

	private var isDisposed: Boolean = false

	/**
	 * Disposes this loader and tells the asset manager one less thing is using the loaded assets.
	 */
	override fun dispose() {
		if (isDisposed) throw Exception("Already disposed.")
		isDisposed = true
		super.dispose()

		unloadJson(skeletonDataPath, SkeletonDataSerializer)
		unloadJson(textureAtlasPath, TextureAtlasDataSerializer)

		for (skinLoader in skinLoaders.values) {
			skinLoader.dispose()
		}
		skinLoaders.clear()
	}
}

fun Scoped.skeletonLoader(skeletonDataPath: String, textureAtlasPath: String, init: SkeletonLoader.() -> Unit = {}): SkeletonLoader {
	val s = SkeletonLoader(injector, skeletonDataPath, textureAtlasPath)
	s.init()
	return s
}

/**
 * Loads a skeleton's skin.
 */
private class SkeletonSkinLoader(
		override val injector: Injector,
		private val skinData: SkinData,
		private val atlasFile: FileEntry,
		private val textureAtlasData: TextureAtlasData) : ActionWatch(), Scoped, LoadableRo<LoadedSkin>, Disposable {

	private val textureLoaders: HashMap<AtlasPageData, LoadableRo<Texture>> = HashMap()

	private var _result: LoadedSkin? = null
	override val result: LoadedSkin
		get() = _result ?: throw Exception("Skin loader is not finished.")

	init {
		batch {
			for (i in skinData.attachments.keys) {
				val (page, region) = textureAtlasData.findRegion(i.attachmentName) ?: throw Exception("Region ${i.attachmentName} not found in atlas.")
				if (!textureLoaders.contains(page)) {
					val textureFile = atlasFile.siblingFile(page.texturePath)
							?: throw Exception("File not found: ${page.texturePath} relative to: ${atlasFile.parent.path}")

					val textureLoader = loadDecorated(textureFile.path, AssetTypes.TEXTURE, AtlasPageDecorator(page))
					add(textureLoader)
					textureLoaders[page] = textureLoader
				}
			}
		}
	}

	override fun onSuccess() {
		val pageTextures = HashMap<String, Texture>()
		for ((page, textureLoader) in textureLoaders) {
			pageTextures[page.texturePath] = textureLoader.result
			textureLoader.result.refInc()
		}
		_result = LoadedSkin(pageTextures)
	}

	private var isDisposed: Boolean = false

	override fun dispose() {
		if (isDisposed) throw Exception("Already disposed")
		isDisposed = true
		super.dispose()
		for (i in skinData.attachments.keys) {
			val page = textureAtlasData.findRegion(i.attachmentName)!!.first
			if (textureLoaders.contains(page)) {
				val textureFile = atlasFile.siblingFile(page.texturePath)!!
				val textureLoader = textureLoaders[page]!!
				textureLoader.result.refDec()
				unloadDecorated(textureFile.path, AssetTypes.TEXTURE, AtlasPageDecorator(page))
				textureLoaders.remove(page)
			}
		}
	}
}