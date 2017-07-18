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

import com.acornui.gl.core.Gl20
import com.acornui.gl.core.GlState
import com.acornui.gl.core.GlTextureBase
import org.khronos.webgl.ArrayBuffer
import org.khronos.webgl.ArrayBufferView
import org.khronos.webgl.Uint8ClampedArray
import org.w3c.dom.HTMLImageElement
import org.w3c.dom.url.URL
import org.w3c.files.Blob
import kotlin.browser.document

/**
 * @author nbilyk
 */
class WebGlTexture(
		gl: Gl20,
		glState: GlState
) : GlTextureBase(gl, glState) {

	val image: HTMLImageElement

	var onLoad: (() -> Unit)? = null

	private var _objectUrl: String? = null

	init {
		image = document.createElement("img") as HTMLImageElement
		image.onload = {
			if (onLoad != null) {
				onLoad!!()
			}
		}
	}

	override fun width(): Int {
		return image.naturalWidth
	}

	override fun height(): Int {
		return image.naturalHeight
	}

	fun arrayBuffer(value: ArrayBuffer) {
		arrayBufferView(Uint8ClampedArray(value))
	}

	fun arrayBufferView(value: ArrayBufferView) {
		blob(Blob(arrayOf(value)))
	}

	fun src(value: String) {
		clear()
		image.src = value
	}

	private fun clear() {
		if (_objectUrl != null) {
			URL.revokeObjectURL(_objectUrl!!)
			_objectUrl = null
		}
	}

	fun blob(value: Blob) {
		clear()
		_objectUrl = URL.createObjectURL(value)
		image.src = _objectUrl!!
	}

}