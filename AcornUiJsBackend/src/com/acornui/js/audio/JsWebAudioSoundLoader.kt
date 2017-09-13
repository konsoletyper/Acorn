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

package com.acornui.js.audio

import com.acornui.action.AbortedException
import com.acornui.action.BasicAction
import com.acornui.action.onFailed
import com.acornui.action.onSuccess
import com.acornui.core.assets.AssetType
import com.acornui.core.assets.AssetTypes
import com.acornui.core.assets.AssetLoader
import com.acornui.core.audio.AudioManager
import com.acornui.core.audio.SoundFactory
import com.acornui.core.request.ResponseType
import com.acornui.js.io.JsHttpRequest

/**
 * An asset loader for js AudioContext sounds.
 * Does not work in IE.
 *
 * @author nbilyk
 */
class JsWebAudioSoundLoader(
		private val audioManager: AudioManager
) : BasicAction(), AssetLoader<SoundFactory> {

	override val type: AssetType<SoundFactory> = AssetTypes.SOUND

	private var _asset: JsWebAudioSoundFactory? = null

	override var path: String = ""

	override val result: SoundFactory
		get() = _asset!!

	private var fileLoader: JsHttpRequest? = null

	override var estimatedBytesTotal: Int = 0

	override val secondsLoaded: Float
		get() = fileLoader?.secondsLoaded ?: 0f

	override val secondsTotal: Float
		get() = fileLoader?.secondsTotal ?: 0f

	override fun onInvocation() {
		if (!audioContextSupported) {
			fail(Exception("Audio not supported in this browser."))
			return
		}
		val context = JsAudioContext.instance
		val fileLoader = JsHttpRequest()
		fileLoader.requestData.responseType = ResponseType.BINARY
		fileLoader.requestData.url = path
		fileLoader.onSuccess {
			// The Audio Context handles creating source buffers from raw binary
			context.decodeAudioData(fileLoader.resultArrayBuffer, {
				decodedData ->
				_asset = JsWebAudioSoundFactory(audioManager, context, decodedData)
				success()
			})
		}
		fileLoader.onFailed {
			if (it is AbortedException) abort(it)
			else fail(it)
		}
		fileLoader()
		this.fileLoader = fileLoader
	}

	override fun onAborted() {
		fileLoader?.abort()
		_asset = null
	}

	override fun onReset() {
		_asset = null
	}
}

