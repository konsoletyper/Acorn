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

import com.acornui.action.BasicAction
import com.acornui.core.assets.AssetType
import com.acornui.core.assets.AssetTypes
import com.acornui.core.assets.MutableAssetLoader
import com.acornui.core.audio.Music
import com.acornui.core.audio.MutableAudioManager

/**
 * An asset loader for js AudioContext sounds.
 * Does not work in IE.
 *
 * @author nbilyk
 */
class JsWebAudioMusicLoader(
		private val audioManager: MutableAudioManager
) : BasicAction(), MutableAssetLoader<Music> {

	override val type: AssetType<Music> = AssetTypes.MUSIC

	private var _asset: Music? = null

	override var path: String = ""

	override val result: Music
		get() = _asset!!

	override var estimatedBytesTotal: Int = 0

	override val secondsLoaded: Float
		get() = 0f

	override val secondsTotal: Float
		get() = 0f

	override fun onInvocation() {
		if (!audioContextSupported) {
			fail(Exception("Audio not supported in this browser."))
			return
		}
		val element = Audio(path)
		element.load()
		_asset = JsWebAudioMusic(audioManager, JsAudioContext.instance, element)
		success()
	}

	override fun onAborted() {
	}

	override fun onReset() {
		_asset = null
	}

	override fun dispose() {
		super.dispose()
		_asset = null
	}
}

