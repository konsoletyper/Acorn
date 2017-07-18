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

import com.acornui.gl.core.WrappedGl20
import org.lwjgl.opengl.GL11
import org.lwjgl.opengl.GLUtil

/**
 * @author nbilyk
 */
class JvmGl20Debug : WrappedGl20(LwjglGl20(), {}, {
	val errorCode = GL11.glGetError()
	if (errorCode != GL11.GL_NO_ERROR) {
//
//		GLU.gluErrorString
//		throw Exception("GL ERROR: " + GLUtil.getErrorString(errorCode) + " code: $errorCode")
	}
}) {
}