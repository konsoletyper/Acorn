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

package com.acornui.js.time

import com.acornui.core.time.Date

/**
 * @author nbilyk
 */
class DateImpl : Date {

	val date = js("new Date();")

	override var time: Long
		get() {
			return (date.getTime() as Number).toLong()
		}
		set(value) {
			val t = value.asDynamic().toNumber()
			date.setTime(t)
		}

	override var year: Int
		get() {
			return date.getFullYear()
		}
		set(value) {
			date.setFullYear(value)
		}

	override var month: Int
		get() = date.getMonth()
		set(value) {
			date.setMonth(value)
		}

	override var dayOfMonth: Int
		get() = date.getDate()
		set(value) {
			date.setDate(value)
		}

	override val dayOfWeek: Int
		get() = date.getDay()


	override var hour: Int
		get() = date.getHours()
		set(value) {
			date.setHours(value)
		}

	override var minute: Int
		get() = date.getMinutes()
		set(value) {
			date.setMinutes(value)
		}

	override var second: Int
		get() = date.getSeconds()
		set(value) {
			date.setSeconds(value)
		}

	override var milli: Int
		get() = date.getMilliseconds()
		set(value) {
			date.setMilliseconds(value)
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