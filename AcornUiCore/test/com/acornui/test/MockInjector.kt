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

package com.acornui.test

import com.acornui.component.NativeComponent
import com.acornui.component.NativeComponentDummy
import com.acornui.component.NativeContainer
import com.acornui.component.NativeContainerDummy
import com.acornui.core.assets.AssetManager
import com.acornui.core.di.Injector
import com.acornui.core.di.Owned
import com.acornui.core.di.OwnedImpl
import com.acornui.core.graphics.Camera
import com.acornui.core.graphics.Window
import com.acornui.core.input.InteractivityManager
import com.acornui.core.input.KeyState
import com.acornui.core.input.MouseState
import com.acornui.core.io.JSON_KEY
import com.acornui.core.io.file.Files
import com.acornui.core.time.TimeDriver
import com.acornui.core.time.TimeProvider
import com.acornui.core.time.time
import com.acornui.serialization.Serializer
import org.mockito.Mockito

object MockInjector {

	fun createOwner(): Owned {
		return OwnedImpl(null, create())
	}

	fun create(): Injector {
		val injector = Injector()
		injector[TimeDriver] = Mockito.mock(TimeDriver::class.java)
		injector[Window] = Mockito.mock(Window::class.java)
		injector[MouseState] = Mockito.mock(MouseState::class.java)
		injector[KeyState] = Mockito.mock(KeyState::class.java)
		injector[Files] = Mockito.mock(Files::class.java)
		time = Mockito.mock(TimeProvider::class.java)
		injector[AssetManager] = Mockito.mock(AssetManager::class.java)
		injector[InteractivityManager] = Mockito.mock(InteractivityManager::class.java)
		injector[Camera] = Mockito.mock(Camera::class.java)
		injector[JSON_KEY] = Mockito.mock(Serializer::class.java) as Serializer<String>
		injector[NativeComponent.FACTORY_KEY] = { NativeComponentDummy }
		injector[NativeContainer.FACTORY_KEY] = { NativeContainerDummy }

		return injector

	}
}