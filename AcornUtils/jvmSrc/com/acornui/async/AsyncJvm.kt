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

import java.util.*
import kotlin.concurrent.schedule
import kotlin.coroutines.experimental.suspendCoroutine

/**
 * Suspends the coroutine for [delay] milliseconds.
 */
suspend fun delay(
		delay: Long
) = suspendCoroutine<Unit> { cont ->
	Timer().schedule(delay, {
		cont.resume(Unit)
	})
}