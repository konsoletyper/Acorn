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

package com.acornui.jvm.time

import org.junit.Test
import java.text.DateFormat
import java.util.*


class DateImplTest {

	@Test fun era() {
		val d = Calendar.getInstance()
		println(d.timeZone)
		//d.set(Calendar.YEAR, 0)
		println(d.toString())
		val formatter = DateFormat.getDateTimeInstance(DateFormat.DEFAULT, DateFormat.DEFAULT, Locale.forLanguageTag("de-DE"))
//		val formatter = DateFormat.getTimeInstance(DateFormat.DEFAULT)
//		val formatter = DateFormat.getDateInstance(DateFormat.DEFAULT)

		//sdf.calendar = d
		formatter.timeZone = TimeZone.getTimeZone("UTC")
		val dateStr = formatter.format(d.time)
		println(dateStr)
	}
}