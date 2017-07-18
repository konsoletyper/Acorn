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
import com.acornui.core.audio.MutableAudioManager
import com.acornui.core.audio.SoundFactory
import org.w3c.dom.HTMLAudioElement
import org.w3c.dom.events.Event

/**
 * An asset loader for js Audio element sounds.
 * Works in IE.
 * @author nbilyk
 */
class JsAudioElementSoundLoader(
		private val audioManager: MutableAudioManager
) : BasicAction(), MutableAssetLoader<SoundFactory> {

	override val type: AssetType<SoundFactory> = AssetTypes.SOUND

	private var _asset: SoundFactory? = null

	override var path: String = ""

	override val result: SoundFactory
		get() = _asset!!


	override var estimatedBytesTotal: Int = 0

	override val secondsLoaded: Float
		get() = 0f

	override val secondsTotal: Float
		get() = 0f


	private val loadedDataHandler = {
		event: Event ->
		val e = event.currentTarget as HTMLAudioElement
		// Load just enough of the asset to get its duration.
		if (!hasCompleted() && e.readyState >= 1) {
			// METADATA
			// Untested: http://stackoverflow.com/questions/3258587/how-to-properly-unload-destroy-a-video-element
			val duration = e.duration
			_asset = JsAudioElementSoundFactory(audioManager, path, duration.toFloat())
			success()
			unloadElement(e)
		}
	}

	private fun unloadElement(e: HTMLAudioElement) {
		e.removeEventListener("loadeddata", loadedDataHandler)
		e.pause()
		e.src = ""
		e.load()
	}

	private var element: HTMLAudioElement? = null

	override fun onInvocation() {
		element = Audio(path)
		element!!.addEventListener("loadeddata", loadedDataHandler)
	}

	override fun onAborted() {
		clear()
	}

	override fun onReset() {
		clear()
	}

	override fun dispose() {
		super.dispose()
		clear()
	}

	private fun clear() {
		if (element != null) {
			unloadElement(element!!)
			element = null
		}
		_asset = null
	}
}