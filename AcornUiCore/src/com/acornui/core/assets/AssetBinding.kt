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

import com.acornui.action.*
import com.acornui.collection.Clearable
import com.acornui.core.Disposable
import com.acornui.core.di.Scoped
import com.acornui.core.di.inject

/**
 * A cached asset binding with no decoration.
 */
fun <T> Scoped.assetBinding(assetType: AssetType<T>, onFailed: () -> Unit, onChanged: (T) -> Unit): AssetBinding<T, T> {
	return AssetBinding(inject(Cache), inject(AssetManager), assetType, noopDecorator(), onFailed, onChanged)
}

/**
 * An asset binding with decoration.
 */
fun <T, R> Scoped.assetBinding(assetType: AssetType<T>, decorator: Decorator<T, R>, onFailed: () -> Unit, onChanged: (R) -> Unit): AssetBinding<T, R> {
	return AssetBinding(inject(Cache), inject(AssetManager), assetType, decorator, onFailed, onChanged)
}

/**
 * Uses the [assetManager] to load an asset with a given path, decorates the loaded data, and caches the result.
 * Invokes an onChanged callback when the decoration is complete.
 *
 * @author nbilyk
 */
class AssetBinding<T, R>(

		private val cache: Cache,

		private val assetManager: AssetManager,

		/**
		 * The type of asset to load.
		 */
		private val assetType: AssetType<T>,

		/**
		 * The decorator that applies transformation on the asset. This method should not have any side-effects.
		 */
		private val decorator: Decorator<T, R>,

		private val onFailed: () -> Unit,

		/**
		 * Dispatched when the asset is loaded and the decorator is applied.
		 * This is not invoked when the asset has been unloaded.
		 */
		private val onChanged: (R) -> Unit
) : Disposable, Progress, Clearable {


	private val failedHandler = {
		action: ActionRo, status: ActionStatus, error: Throwable? ->
		onFailed()
	}

	private val succeedHandler = {
		action: ActionRo ->
		onChanged(_decoratorEntry!!.result)
	}

	private var _path: String? = null

	private var _decoratorEntry: LoadableRo<R>? = null

	var path: String?
		get() {
			return _path
		}
		set(value) {
			val oldPath = _path
			if (oldPath == value) return
			_path = value
			if (_path != null) {
				val loadable = loadDecorated(cache, assetManager, value!!, assetType, decorator)
				decoratorEntry(loadable)
			} else {
				decoratorEntry(null)
			}
			if (oldPath != null) {
				// Unload after a load so the ref count doesn't go to 0 temporarily.
				unloadDecorated(cache, oldPath, assetType, decorator)
			}
		}

	private fun decoratorEntry(entry: LoadableRo<R>?) {
		val oldEntry = _decoratorEntry
		if (oldEntry == entry) return
		if (oldEntry != null) {
			oldEntry.succeeded.remove(succeedHandler)
			oldEntry.failed.remove(failedHandler)
		}
		_decoratorEntry = entry
		if (entry != null) {
			entry.succeeded.add(succeedHandler)
			entry.failed.add(failedHandler)
			if (entry.hasSucceeded()) {
				onChanged(entry.result)
			} else if (entry.hasFailed()) {
				onFailed()
			}
		}
	}

	override val secondsLoaded: Float
		get() = _decoratorEntry?.secondsLoaded ?: 0f

	override val secondsTotal: Float
		get() = _decoratorEntry?.secondsTotal ?: 0f

	override fun clear() {
		path = null
	}

	override fun dispose() {
		clear()
	}
}