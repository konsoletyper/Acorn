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

import com.acornui.core.Disposable

/**
 * A [ShaderBatch] is good for reducing draw calls by combining opengl buffer and draw calls.
 * This is used in conjunction with [GlState], which keeps track of changes that would require a flip.
 */
interface ShaderBatch : Disposable, VertexFeed, IndexFeed {

	/**
	 * Resets the number of times the batch has been flushed. This is typically done at the beginning of the frame.
	 */
	fun resetRenderCount()

	val currentDrawMode: Int

	/**
	 * The number of times the batch has been flushed since the last [resetRenderCount]
	 */
	val renderCount: Int

	/**
	 * Begins a new shape.
	 *
	 * This will flip the previous buffers if necessary.
	 */
	fun begin(drawMode: Int = Gl20.TRIANGLES)

	/**
	 * Flushes the batch if the buffer is past an internal threshold.
	 * Components typically do not need to use this directly, only [begin].
	 *
	 * @param force Flushes the batch regardless of current threshold.
	 */
	fun flush(force: Boolean = false)

}