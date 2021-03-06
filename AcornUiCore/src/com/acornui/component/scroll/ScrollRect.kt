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

package com.acornui.component.scroll

import com.acornui.component.ComponentInit
import com.acornui.component.ElementContainer
import com.acornui.component.UiComponent
import com.acornui.core.di.DKey
import com.acornui.core.di.DependencyKeyImpl
import com.acornui.core.di.Owned
import com.acornui.math.BoundsRo
import com.acornui.math.CornersRo
import com.acornui.math.RectangleRo

interface ScrollRect : ElementContainer<UiComponent> {

	var borderRadius: CornersRo

	val contentBounds: RectangleRo

	val contentsWidth: Float
		get() = contentBounds.width

	val contentsHeight: Float
		get() = contentBounds.height

	fun scrollTo(x: Float, y: Float)

	val maskBounds: BoundsRo

	fun maskSize(width: Float, height: Float)

	companion object {
		val FACTORY_KEY: DKey<(owner: Owned) -> ScrollRect> = DependencyKeyImpl()
	}
}

fun Owned.scrollRect(init: ComponentInit<ScrollRect> = {}): ScrollRect {
	val s = injector.inject(ScrollRect.FACTORY_KEY).invoke(this)
	s.init()
	return s
}