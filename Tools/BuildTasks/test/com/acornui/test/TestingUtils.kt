/*
 * Copyright 2017 Nicholas Bilyk
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

package com.acornui.test


inline fun benchmark(call: () -> Unit): Float = benchmark(1000, call)

/**
 * Calls the given function a set number of iterations.
 * Returns the average number of milliseconds each iteration took.
 */
inline fun benchmark(iter: Int, call: () -> Unit): Float {
	val startTime = System.nanoTime()
	for (i in 0..iter - 1) {
		call()
	}
	val endTime = System.nanoTime()
	val elapsed = (endTime - startTime) / 1e6.toFloat()
	return elapsed / iter.toFloat()
}



