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

import com.acornui.action.ActionRo
import com.acornui.action.ActionStatus
import com.acornui.action.Progress
import com.acornui.core.Disposable
import com.acornui.core.di.DKey

/**
 * @author nbilyk
 */
interface AssetManager : Disposable, Progress {

	/**
	 * Sets the factory for asset loaders associated with the specified asset type.
	 */
	fun <T> setLoaderFactory(type: AssetType<T>, factory: () -> AssetLoader<T>)

	/**
	 * The loading queue representing the queue of currently loading assets.
	 *
	 * Invoking a callback when the queue is empty:
	 * [D.assetManager.loadingQueue.onSuccess { println("Nothing is loading") }]
	 */
	val loadingQueue: ActionRo

	/**
	 * Loads specified file, invoking a callback on completion.
	 *
	 * @param path The path of the asset to load.
	 * @param type The type of the asset to load, see AssetTypes
	 * @param onSuccess A callback to be invoked if the asset successfully loads.
	 * @see assetBinding
	 */
	fun <T> load(path: String, type: AssetType<T>, onSuccess: (T) -> Unit, onFail: ((Throwable) -> Unit)? = null, priority: Float = 0f): AssetLoaderRo<T> {
		val loader = load(path, type, priority)
		val onComplete = {
			action: ActionRo, status: ActionStatus ->
			if (status == ActionStatus.SUCCESSFUL) {
				onSuccess(loader.result)
			} else {
				if (onFail != null) {
					onFail(loader.error!!)
				}
			}
		}
		if (loader.hasCompleted()) {
			onComplete(loader, loader.status)
		} else {
			loader.completed.add(onComplete, isOnce = true)
		}
		return loader
	}

	/**
	 * Queues a single asset to be loaded.
	 * @param path The location of the asset.
	 * @param type The type of asset the path represents. @see AssetTypes
	 * if the asset has already been loaded)
	 * @see assetBinding
	 */
	fun <T> load(path: String, type: AssetType<T>, priority: Float = 0f): AssetLoaderRo<T>

	/**
	 * Aborts loading of the specified asset. This does nothing if the asset is not currently loading.
	 */
	fun <T> abort(path: String, type: AssetType<T>)

	companion object : DKey<AssetManager>

}