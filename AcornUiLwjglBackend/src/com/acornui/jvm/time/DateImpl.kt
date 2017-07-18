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

package com.acornui.jvm.time

import com.acornui.core.time.Date
import java.util.*


/**
 * @author nbilyk
 */
class DateImpl : Date {

	val date = Calendar.getInstance()

	override var time: Long
		get() {
			return date.timeInMillis
		}
		set(value) {
			date.timeInMillis = value
		}

	override var year: Int
		get() {
			return date.get(Calendar.YEAR)
		}
		set(value) {
			date.set(Calendar.YEAR, value)
		}

	override var month: Int
		get() {
			return date.get(Calendar.MONTH)
		}
		set(value) {
			date.set(Calendar.MONTH, value)
		}

	override var dayOfMonth: Int
		get() {
			return date.get(Calendar.DAY_OF_MONTH)
		}
		set(value) {
			date.set(Calendar.DAY_OF_MONTH, value)
		}

	override val dayOfWeek: Int
		get() {
			return date.get(Calendar.DAY_OF_WEEK) - Calendar.SUNDAY
		}

	override var hour: Int
		get() {
			return date.get(Calendar.HOUR_OF_DAY)
		}
		set(value) {
			date.set(Calendar.HOUR_OF_DAY, value)
		}

	override var minute: Int
		get() {
			return date.get(Calendar.MINUTE)
		}
		set(value) {
			date.set(Calendar.MINUTE, value)
		}

	override var second: Int
		get() {
			return date.get(Calendar.SECOND)
		}
		set(value) {
			date.set(Calendar.SECOND, value)
		}

	override var milli: Int
		get() {
			return date.get(Calendar.MILLISECOND)
		}
		set(value) {
			date.set(Calendar.MILLISECOND, value)
		}

	override fun clone(): Date {
		val newDate = DateImpl()
		newDate.time = time
		return newDate
	}

	override fun toString(): String {
		return date.toString()
	}
}