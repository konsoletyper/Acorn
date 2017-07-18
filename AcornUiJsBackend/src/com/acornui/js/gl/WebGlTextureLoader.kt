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

package com.acornui.js.gl

import com.acornui.action.BasicAction
import com.acornui.core.UserInfo
import com.acornui.core.assets.AssetType
import com.acornui.core.assets.AssetTypes
import com.acornui.core.assets.MutableAssetLoader
import com.acornui.core.graphics.Texture
import com.acornui.gl.core.Gl20
import com.acornui.gl.core.GlState

/**
 * An asset loader for textures (images).
 * @author nbilyk
 */
class WebGlTextureLoader(
		private val gl: Gl20,
		private val glState: GlState
) : BasicAction(), MutableAssetLoader<Texture> {

	override val type: AssetType<Texture> = AssetTypes.TEXTURE

	private var _asset: WebGlTexture? = null

	override var path: String = ""

	override val result: Texture
		get() = _asset!!

	override var estimatedBytesTotal: Int = 0

	override val secondsLoaded: Float
		get() = if (hasCompleted()) secondsTotal else 0f
	override val secondsTotal: Float
		get() = estimatedBytesTotal * UserInfo.downBpsInv

	override fun onInvocation() {
		val jsTexture = WebGlTexture(gl, glState)
		jsTexture.onLoad = {
			success()
		}
		jsTexture.src(path)
		_asset = jsTexture
	}

	override fun onAborted() {
		_asset?.onLoad = null
		_asset = null
	}

	override fun onReset() {
		_asset?.onLoad = null
		_asset = null
	}

}