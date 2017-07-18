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

package com.acornui.jvm.graphics

import com.acornui.gl.core.Gl20
import com.acornui.gl.core.GlState
import com.acornui.gl.core.GlTextureBase
import com.acornui.core.graphics.*
import com.acornui.jvm.io.JvmBufferUtil
import java.nio.ByteBuffer

/**
 * @author nbilyk
 */
class JvmTexture(private val gl: Gl20,
						private val glState: GlState,
						private val rgbData: RgbData) : GlTextureBase(gl, glState) {

	var bytes: ByteBuffer? = JvmBufferUtil.wrap(rgbData.bytes)

	override fun width(): Int {
		return rgbData.width
	}

	override fun height(): Int {
		return rgbData.height
	}

	override fun rgbData(): RgbData {
		return rgbData
	}
}