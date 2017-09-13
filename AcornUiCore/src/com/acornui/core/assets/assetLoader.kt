/*
 * Copyright 2014 Nicholas Bilyk
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

import com.acornui.action.LoadableRo
import com.acornui.action.ResultAction


/**
 * AssetLoader is a read-only interface that represents a loading asset. It has progress and a value for a final result.
 * It is used by the asset manager.
 */
interface AssetLoaderRo<out T> : LoadableRo<T> {

	/**
	 * The asset type this loader represents.
	 */
	val type: AssetType<*>

	/**
	 * The path used to find the asset.
	 */
	val path: String
}

/**
 * An asset loader that exposes an API capable of mutation.
 */
interface AssetLoader<out T> : AssetLoaderRo<T>, ResultAction<T> {

	/**
	 * The estimated total number of bytes this loader will load.
	 * (This is typically only used before the actual number is discovered)
	 */
	var estimatedBytesTotal: Int

	/**
	 * The path used to find the asset.
	 */
	override var path: String
}