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

import com.acornui._assert
import com.acornui.assertionsEnabled
import com.acornui.core.Disposable
import com.acornui.core.io.BufferFactory
import com.acornui.graphics.Color
import com.acornui.graphics.ColorRo
import com.acornui.io.NativeBuffer
import com.acornui.math.Vector3Ro


/**
 * @author nbilyk
 */
class ShaderBatchImpl(
		private val gl: Gl20,
		private val glState: GlState,
		val maxIndices: Int = 32767,
		val maxVertexComponents: Int = 32767 * 16
) : ShaderBatch, Disposable {

	var vertexAttributes: VertexAttributes = standardVertexAttributes

	private var _renderCount = 0

	private val vertexComponentsBuffer: GlBufferRef = gl.createBuffer()
	private val indicesBuffer: GlBufferRef = gl.createBuffer()

	/**
	 * The draw mode if no indices are supplied.
	 * Possible values are: POINTS, LINE_STRIP, LINE_LOOP, LINES, TRIANGLE_STRIP, TRIANGLE_FAN, or TRIANGLES.
	 */
	private var _drawMode: Int = Gl20.TRIANGLES

	private val indices: NativeBuffer<Short> = BufferFactory.instance.shortBuffer(maxIndices)
	private val vertexComponents: NativeBuffer<Float> = BufferFactory.instance.floatBuffer(maxVertexComponents)
	private var _highestIndex: Short = -1

	override val currentDrawMode: Int
		get() = _drawMode

	override fun resetRenderCount() {
		_renderCount = 0
	}

	override val renderCount: Int
		get() {
			return _renderCount
		}

	override fun putIndex(index: Short) {
		indices.put(index)
		if (index > _highestIndex) _highestIndex = index
	}

	private fun bind() {
		gl.bindBuffer(Gl20.ARRAY_BUFFER, vertexComponentsBuffer)
		gl.bindBuffer(Gl20.ELEMENT_ARRAY_BUFFER, indicesBuffer)
		vertexAttributes.bind(gl, glState.shader!!)
	}

	private fun allocate() {
		gl.bufferData(Gl20.ARRAY_BUFFER, vertexComponents.capacity shl 2, Gl20.DYNAMIC_DRAW)
		gl.bufferData(Gl20.ELEMENT_ARRAY_BUFFER, indices.capacity shl 1, Gl20.DYNAMIC_DRAW)
	}

	private fun unbind() {
		vertexAttributes.unbind(gl, glState.shader!!)
		gl.bindBuffer(Gl20.ARRAY_BUFFER, null)
		gl.bindBuffer(Gl20.ELEMENT_ARRAY_BUFFER, null)
	}

	override fun begin(drawMode: Int) {
		if (_drawMode == drawMode) {
			flush(false)
		} else {
			flush(true)
			_drawMode = drawMode
		}
	}

	override fun flush(force: Boolean) {
		val vertexComponentsL = vertexComponents.position
		val indicesL = indices.position
		if (vertexComponentsL == 0) {
			_assert (indicesL == 0, "Indices pushed, but no vertices")
			return
		}

		if (!force && indicesL < maxIndices * 0.75f && vertexComponentsL < maxVertexComponents * 0.75f) return
		if (assertionsEnabled) {
			// If assertions are enabled, check that we have rational vertex and index counts.
			val vertexSize = vertexAttributes.vertexSize
			_assert(vertexComponentsL % vertexSize == 0, "vertexData size $vertexComponentsL not evenly divisible by vertexSize value $vertexSize")
			if (_drawMode == Gl20.LINES) {
				_assert(indicesL % 2 == 0, "indices size $indicesL not evenly divisible by 2")
			} else if (_drawMode == Gl20.TRIANGLES) {
				_assert(indicesL % 3 == 0, "indices size $indicesL not evenly divisible by 3")
			}
		}
		bind()
		_renderCount++

		// Buffer the vertex data.
		vertexComponents.flip()
		gl.bufferDatafv(Gl20.ARRAY_BUFFER, vertexComponents, Gl20.DYNAMIC_DRAW)
		vertexComponents.clear()

		if (indicesL > 0) {
			// Buffer the index data
			indices.flip()
			gl.bufferDatasv(Gl20.ELEMENT_ARRAY_BUFFER, indices, Gl20.DYNAMIC_DRAW)

			// Draw
			gl.drawElements(_drawMode, indicesL, Gl20.UNSIGNED_SHORT, 0)

			indices.clear()
			_highestIndex = -1
		} else {
			gl.drawArrays(_drawMode, 0, vertexComponentsL / vertexAttributes.vertexSize)
		}
		unbind()
	}

	override val highestIndex: Short
		get() {
			return _highestIndex
		}

	override fun putVertex(position: Vector3Ro, normal: Vector3Ro, colorTint: ColorRo, u: Float, v: Float) {
		vertexAttributes.putVertex(vertexComponents, position, normal, colorTint, u, v)
	}

	override fun dispose() {
		gl.deleteBuffer(vertexComponentsBuffer)
		gl.deleteBuffer(indicesBuffer)
	}
}