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

package com.acornui.core.assets

import com.acornui.action.Decorator
import com.acornui.action.Loadable
import com.acornui.action.LoadableDecorator
import com.acornui.core.di.Scoped
import com.acornui.core.di.inject

fun <T, R> Scoped.loadDecorated(path: String, type: AssetType<T>, decorator: Decorator<T, R>): Loadable<R> {
	return loadDecorated(inject(Cache), inject(AssetManager), path, type, decorator)
}

/**
 * Loads the given file, applies a decorator to the results, and caches the final value.
 * Subsequent calls to loadDecorated with the same [path] and [type] will return the same [Loadable] instance.
 */
fun <T, R> loadDecorated(cache: Cache, assetManager: AssetManager, path: String, type: AssetType<T>, decorator: Decorator<T, R>): Loadable<R> {
	val key = AssetDecoratorCacheKey(path, type, decorator)
	val loadable: Loadable<R>
	if (cache.containsKey(key)) {
		loadable = cache[key]!!
	} else {
		val loader = assetManager.load(path, type)
		loadable = AssetLoaderDecorator(assetManager, loader, decorator)
		cache[key] = loadable
	}
	cache.refInc(key)
	return loadable
}

fun <T, R> Scoped.unloadDecorated(path: String, type: AssetType<T>, decorator: Decorator<T, R>) {
	unloadDecorated(inject(Cache), path, type, decorator)
}

/**
 * Decrements the reference counter for the cached target. If the reference counter reaches zero, the asset will be
 * unloaded.
 */
fun <T, R> unloadDecorated(cache: Cache, path: String, type: AssetType<T>, decorator: Decorator<T, R>) {
	val key = AssetDecoratorCacheKey(path, type, decorator)
	cache.refDec(key)
}

private data class AssetDecoratorCacheKey<T, R>(
		val path: String,
		val type: AssetType<T>,
		val decorator: Decorator<T, R>
) : CacheKey<LoadableDecorator<T, R>>

private class AssetLoaderDecorator<T, R>(private val assetManager: AssetManager, private val loader: AssetLoader<T>, decorator: Decorator<T, R>) : LoadableDecorator<T, R>(loader, decorator) {

	override fun onAborted() {
		super.onAborted()
		assetManager.abort(loader.path, loader.type)
	}

}