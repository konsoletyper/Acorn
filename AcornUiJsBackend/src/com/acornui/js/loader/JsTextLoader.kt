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

package com.acornui.js.loader

/**
 * @author nbilyk
 */
import com.acornui.action.DelegateAction
import com.acornui.core.UserInfo
import com.acornui.core.assets.AssetType
import com.acornui.core.assets.AssetTypes
import com.acornui.core.assets.MutableAssetLoader
import com.acornui.core.request.MutableHttpRequest
import com.acornui.core.request.ResponseType
import com.acornui.js.io.JsHttpRequest

/**
 * An asset loader for text.
 * @author nbilyk
 */
class JsTextLoader(
		private val request: MutableHttpRequest = JsHttpRequest()
) : DelegateAction(request), MutableAssetLoader<String> {

	override val type: AssetType<String> = AssetTypes.TEXT

	override var estimatedBytesTotal: Int = 0

	override val secondsLoaded: Float
		get() = request.secondsLoaded

	override val secondsTotal: Float
		get() = if (request.secondsTotal <= 0f) estimatedBytesTotal * UserInfo.downBpsInv else request.secondsTotal

	override var path: String
		get() = request.requestData.url
		set(value) {
			request.requestData.url = value
		}

	init {
		request.requestData.responseType = ResponseType.TEXT
	}

	override val result: String
		get() = request.result as String
}