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

package com.acornui.js.dom.component

import com.acornui.component.NativeComponent
import com.acornui.component.NativeContainer
import org.w3c.dom.HTMLElement
import org.w3c.dom.Node
import org.w3c.dom.get
import kotlin.browser.document

open class DomContainer(
		element: HTMLElement = document.createElement("div") as HTMLElement
) : DomComponent(element), NativeContainer {

	constructor(localName: String) : this(document.createElement(localName) as HTMLElement)

	override fun addChild(native: NativeComponent, index: Int) {
		if (native !is DomComponent) throw Exception("Must be a DomComponent")
		val totalChildren = element.childElementCount
		if (index == totalChildren) {
			element.appendChild(native.element)
		} else {
			element.insertBefore(native.element, element.children[index])
		}
	}

	override fun removeChild(index: Int) {
		element.removeChild(element.children[index]!!)
	}

	companion object {
		private var placeholder: Node? = null
	}
}