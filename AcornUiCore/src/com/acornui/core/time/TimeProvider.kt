/*
 * Copyright 2014 Nicholas Bilyk
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

package com.acornui.core.time

import kotlin.properties.Delegates

/**
 * @author nbilyk
 */
interface TimeProvider {

	/**
	 * Returns a new date object with the time set.
	 * @time The time as UTC milliseconds from the epoch.
	 */
	fun date(time: Long): Date {
		val date = now()
		date.time = time
		return date
	}

	/**
	 * Returns a Date representing the current system time.
	 */
	fun now(): Date

	/**
	 * Returns the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.
	 */
	fun nowMs(): Long

	/**
	 * Returns the number of seconds elapsed since 1 January 1970 00:00:00 UTC.
	 */
	fun nowS(): Double = (nowMs().toDouble() / 1000.0)

	/**
	 * Returns the current value of the running high-resolution time source, in nanoseconds from the time the
	 * application started.
	 *
	 * On the JS backend, this is accurate to the nearest 5 microseconds. see [performance.now]
	 * For the JVM side, see [System.nanoTime]
	 */
	fun nanoElapsed(): Long

	fun msElapsed(): Long = nanoElapsed() / 1_000_000L

}

/**
 * A global abstracted time provider.
 */
var time: TimeProvider by Delegates.notNull()