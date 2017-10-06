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

package com.acornui.async

import kotlin.coroutines.experimental.*

expect suspend fun delay(timeout: Long)

fun <T> async(block: suspend () -> T): Deferred<T> = DeferredImpl(block)

fun launch(block: suspend () -> Unit) {
	block.startCoroutine(object : Continuation<Unit> {
		override val context: CoroutineContext get() = EmptyCoroutineContext
		override fun resume(value: Unit) {}
		override fun resumeWithException(exception: Throwable) {
			println("Coroutine failed: $exception")
		}
	})
}

interface Deferred<out T> {

	suspend fun await(): T
}

private class DeferredImpl<out T>(private val block: suspend () -> T) : Deferred<T> {

	private var status = DeferredStatus.PENDING
	private var result: T? = null
	private var error: Throwable? = null
	private val continuations = ArrayList<Continuation<T>>()

	init {
		launch {
			try {
				result = block()
				status = DeferredStatus.SUCCESSFUL
			} catch(e: Throwable) {
				error = e
				status = DeferredStatus.FAILED
			} finally {
				when (status) {
					DeferredStatus.SUCCESSFUL -> {
						for (i in 0..continuations.lastIndex) {
							continuations[i].resume(result as T)
						}
					}
					DeferredStatus.FAILED -> {
						for (i in 0..continuations.lastIndex) {
							continuations[i].resumeWithException(error as Throwable)
						}
					}
					else -> throw IllegalStateException("Status is not successful or failed.")
				}
				continuations.clear()
			}
		}
	}

	override suspend fun await(): T = suspendCoroutine {
		cont: Continuation<T> ->
		when (status) {
			DeferredStatus.PENDING -> {
				continuations.add(cont)
			}
			DeferredStatus.SUCCESSFUL -> cont.resume(result as T)
			DeferredStatus.FAILED -> cont.resumeWithException(error as Throwable)
		}
	}

	private enum class DeferredStatus {
		PENDING,
		SUCCESSFUL,
		FAILED
	}
}