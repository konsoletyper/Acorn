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

package com.acornui.core.graphics

import com.acornui.core.di.Owned
import com.acornui.core.di.inject
import com.acornui.core.di.own
import com.acornui.math.MathUtils
import com.acornui.math.Matrix4
import com.acornui.math.Vector2
import com.acornui.math.Vector3
import kotlin.math.tan

/**
 * @author nbilyk
 */
class PerspectiveCamera : CameraBase() {

	/**
	 * The field of view of the height, in radians
	 **/
	var fieldOfView: Float by bindable(67f * MathUtils.degRad)

	private val tmp = Vector3()
	private val tmp2: Vector2 = Vector2()

	override fun updateViewProjection() {
		val aspect = viewportWidth / viewportHeight
		_projection.setToProjection(MathUtils.abs(near), MathUtils.abs(far), fieldOfView, aspect)
		_view.setToLookAt(position, tmp.set(position).add(direction), up)
		_combined.set(_projection)
		_combined.mul(_view)
	}

	override fun moveToLookAtRect(x: Float, y: Float, width: Float, height: Float, scaling: Scaling) {
		scaling.apply(viewportWidth, viewportHeight, width, height, tmp2)
		val (newW, newH) = tmp2
		val distance = (newH * 0.5f) / MathUtils.tan(fieldOfView * 0.5f)
		moveToLookAtPoint(x + newW * 0.5f, y + newH * 0.5f, 0f, distance)
	}
}

fun Owned.perspectiveCamera(autoCenter: Boolean = false, init: PerspectiveCamera.() -> Unit = {}): PerspectiveCamera {
	val p = PerspectiveCamera()
	if (autoCenter) own(inject(Window).autoCenterCamera(p))
	p.init()
	return p
}

/**
 * Sets the matrix to a projection matrix with a near- and far plane, a field of view in degrees and an aspect ratio. Note that
 * the field of view specified is the angle in degrees for the height, the field of view for the width will be calculated
 * according to the aspect ratio.
 *
 * @param near The near plane
 * @param far The far plane
 * @param fovy The field of view of the height in radians
 * @param aspectRatio The "width over height" aspect ratio
 * @return This matrix for the purpose of chaining methods together.
 */
fun Matrix4.setToProjection(near: Float, far: Float, fovy: Float, aspectRatio: Float): Matrix4 {
	idt()
	val l_fd = (1.0 / tan((fovy.toDouble()) / 2.0)).toFloat()
	val l_a1 = (far + near) / (near - far)
	val l_a2 = (2 * far * near) / (near - far)
	values[0] = l_fd / aspectRatio
	values[1] = 0f
	values[2] = 0f
	values[3] = 0f
	values[4] = 0f
	values[5] = l_fd
	values[6] = 0f
	values[7] = 0f
	values[8] = 0f
	values[9] = 0f
	values[10] = l_a1
	values[11] = -1f
	values[12] = 0f
	values[13] = 0f
	values[14] = l_a2
	values[15] = 0f

	return this
}