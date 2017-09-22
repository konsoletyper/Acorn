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

import com.acornui.core.di.Scoped
import com.acornui.core.di.inject
import com.acornui.core.io.JSON_KEY
import com.acornui.serialization.From
import com.acornui.serialization.JsonSerializer

/**
 * A Collection of utilities for making common asset loading tasks more terse.
 */

/**
 * Loads a json file, then parses it into the target.
 * This is not cached;
 *
 * @param onSuccess invoked after the deserialization is complete.
 * @param onFail invoked if the asset loading failed.
 */
fun <T> Scoped.loadJson(path:String, factory: From<T>, onSuccess: (T) -> Unit, onFail: ((Throwable?) -> Unit)? = null) {
	val json = inject(JSON_KEY)
	inject(AssetManager).load(path, AssetTypes.TEXT, {
		val instance = json.read(it, factory)
		onSuccess(instance)
	}, onFail)
}

@Deprecated("Deprecated")
fun <T> AssetManager.loadJson(path:String, factory: From<T>, onSuccess: (T) -> Unit, onFail: ((Throwable?) -> Unit)? = null) {
	load(path, AssetTypes.TEXT, {
		val instance = JsonSerializer.read(it, factory)
		onSuccess(instance)
	}, onFail)
}