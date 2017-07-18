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

import com.acornui.action.Action
import com.acornui.action.ActionStatus
import com.acornui.action.BasicAction
import com.acornui.action.PriorityQueueAction
import com.acornui.core.io.file.Files
import com.acornui.logging.Log
import com.acornui.browser.appendParam


/**
 * @author nbilyk
 */
class AssetManagerImpl(

		/**
		 * All relative files will be prepended with this string.
		 */
		private val rootPath: String = "",

		private val files: Files,

		/**
		 * If true, a version number will be appended to file requests for relative files.
		 */
		private val appendVersion: Boolean = false,

		simultaneous: Int = 5
) : AssetManager {

	private val loaderFactories: HashMap<AssetType<*>, () -> MutableAssetLoader<*>> = HashMap()

	override val loadingQueue: PriorityQueueAction = PriorityQueueAction()

	init {
		loadingQueue.cascadeFailure = false
		loadingQueue.simultaneous = simultaneous
		loadingQueue.autoInvoke = true
	}

	override fun <T> setLoaderFactory(type: AssetType<T>, factory: () -> MutableAssetLoader<T>) {
		loaderFactories[type] = factory
	}

	private fun <T> _initLoader(loader: MutableAssetLoader<T>, path: String) {
		// Check if we can determine the estimated size by the manifest
		val file = files.getFile(path)
		if (file != null) {
			loader.estimatedBytesTotal = file.size.toInt()
			loader.path = rootPath + if (appendVersion) path.appendParam("version", file.modified.toString()) else path
		} else {
			loader.path = path
		}
		loader.failed.add(loadingFailedHandler)
	}

	@Suppress("UNCHECKED_CAST")
	override fun <T> load(path: String, type: AssetType<T>, priority: Float): AssetLoader<T> {
		val factory = loaderFactories[type] ?: createFailedLoaderFactory(type)
		val loader = factory() as MutableAssetLoader<T>
		_initLoader(loader, path)
		loadingQueue.add(loader, priority)
		return loader
	}

	override fun <T> abort(path: String, type: AssetType<T>) {
		for (i in 0..loadingQueue.actions.lastIndex) {
			val action = loadingQueue.actions[i] as MutableAssetLoader<*>
			if (action.path == path && action.type == type) {
				action.abort()
				return
			}
		}
	}

	/**
	 * When an asset type is requested that doesn't have a corresponding loader factory, warn on first attempt, and
	 * create a factory that produces a [FailedLoader]
	 */
	private fun <T> createFailedLoaderFactory(type: AssetType<T>): () -> MutableAssetLoader<T> {
		Log.warn("No loader factory set for asset type $type")
		val newFailedLoaderFactory: () -> MutableAssetLoader<T> = {
			@Suppress("CAST_NEVER_SUCCEEDS")
			FailedLoader(type)
		}
		loaderFactories[type] = newFailedLoaderFactory
		return newFailedLoaderFactory
	}

	override val secondsLoaded: Float
		get() {
			var c = 0f
			for (i in 0..loadingQueue.actions.lastIndex) {
				val action = loadingQueue.actions[i] as AssetLoader<*>
				c += action.secondsLoaded
			}
			return c
		}

	override val secondsTotal: Float
		get() {
			var c = 0f
			for (i in 0..loadingQueue.actions.lastIndex) {
				val action = loadingQueue.actions[i] as AssetLoader<*>
				c += action.secondsTotal
			}
			return c
		}

	override fun dispose() {
		loadingQueue.dispose()
	}

	companion object {
		var loadingFailedHandler = {
			action: Action, status: ActionStatus, error: Throwable? ->
			if (status == ActionStatus.FAILED) {
				Log.warn(error)
			}
		}
	}
}

private data class AssetCacheKey(val path: String, val type: AssetType<*>) : CacheKey<AssetLoader<*>> {}

private class FailedLoader<T>(override val type: AssetType<T>) : BasicAction(), MutableAssetLoader<T> {

	override var estimatedBytesTotal: Int = 0

	override val secondsLoaded: Float = 0f
	override val secondsTotal: Float = 0f
	override val result: T
		get() = throw Exception("There will never be a result for this.")

	override var path: String = ""

	init {
		invoke()
	}

	override fun onInvocation() {
		fail(Exception("No asset loader for this type."))
	}
}