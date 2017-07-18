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

package com.acornui.gl.core

import com.acornui.component.UiComponentImpl
import com.acornui.core.di.Injector
import com.acornui.math.MathUtils
import com.acornui.math.Vector3

/**
 * @author nbilyk
 */
// TODO
open class DrawComponent(injector: Injector) {

	private val framebuffer: Framebuffer = Framebuffer(injector)

	private val _bottomLeft: Vector3 = Vector3()
	private val _topRight: Vector3 = Vector3()

	open fun drawComponent(target: UiComponentImpl) {
		target.validate()
		_bottomLeft.clear()
		target.localToGlobal(_bottomLeft)

		_topRight.set(_bottomLeft)
		_topRight.add(target.width, target.height, 0f)
		target.localToGlobal(_topRight)

		val w = MathUtils.ceil(target.width)
		val h = MathUtils.ceil(target.height)
//		framebuffer.setSize(w, h)
		framebuffer.begin()
//		GlGlobalState.viewport(0, 0, w, h)

		target.render()
		framebuffer.end()
//		GlGlobalState.viewport(_viewport[0], _viewport[1], _viewport[2], _viewport[3])
	}

}