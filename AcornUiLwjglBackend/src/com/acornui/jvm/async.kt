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

package com.acornui.jvm

import com.acornui.core.DrivableChildBase
import com.acornui.core.time.TimeDriver
import java.util.concurrent.ExecutorService
import java.util.concurrent.Executors

open class AsyncCallback<T : Any>(private val onSuccess: (T) -> Unit, private val onFailure: (Throwable) -> Unit, private val executor: ExecutorService) : DrivableChildBase() {

	var result: T? = null
	var error: Throwable? = null

	override fun update(stepTime: Float) {
		if (executor.isShutdown) {
			remove()
		} else {
			if (result != null) {
				onSuccess(result!!)
				remove()
			}
			if (error != null) {
				onFailure(error!!)
				remove()
			}
		}
	}

	override fun onDeactivated() {
		super.onDeactivated()
		executor.shutdown()
	}

	override fun dispose() {
		super.dispose()
		executor.shutdownNow()
	}
}

fun <T : Any> async(timeDriver: TimeDriver, work: () -> T, onSuccess: (T) -> Unit, onFailure: (Throwable) -> Unit): ExecutorService {
	val executor = Executors.newSingleThreadExecutor()
	val c = AsyncCallback(onSuccess, onFailure, executor)
	timeDriver.addChild(c)
	executor.submit {
		try {
			c.result = work()
		} catch (e: Throwable) {
			c.error = e
		}
	}
	return executor
}