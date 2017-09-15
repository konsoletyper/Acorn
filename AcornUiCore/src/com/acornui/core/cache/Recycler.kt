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

package com.acornui.core.cache

import com.acornui.collection.arrayListObtain
import com.acornui.collection.arrayListPool
import com.acornui.collection.removeFirst
import com.acornui.component.ItemRendererRo

/**
 * Recycles a list of item renderers, creating or disposing renderers only as needed.
 * @param data The updated list of data items.
 * @param existingElements The stale list of item renderers. This will be modified to reflect the new item renderers.
 * @param factory Used to create new item renderers as needed. [configure] will be called after factory to configure
 * the new element.
 * @param configure Used to configure the element.
 */
fun <E, T : ItemRendererRo<E>> recycle(
		data: List<E>?,
		existingElements: MutableList<T>,
		factory: () -> T,
		configure: (element: T, item: E, index: Int) -> Unit,
		disposer: (element: T) -> Unit
) {
	val unused = arrayListObtain<T>()
	val neededCount = (data?.size ?: 0) - existingElements.size
	for (i in 0..existingElements.lastIndex) {
		val existingElement = existingElements[i]
		if (unused.size >= neededCount && (data == null || data.find { it == existingElement.data } == null)) {
			disposer(existingElement)
		} else {
			unused.add(existingElement)
		}
	}
	existingElements.clear()
	if (data != null) {
		for (i in 0..data.lastIndex) {
			val item = data[i]
			val element = unused.removeFirst { it.data == item } ?: factory()
			configure(element, item, i)
			existingElements.add(element)
		}
	}
	arrayListPool.free(unused)
}