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

package com.acornui.core

import com.acornui.core.di.DKey
import com.acornui.core.i18n.Locale

/**
 * Application configuration common across back-end types.
 * @author nbilyk
 */
data class AppConfig(

		val version: Version = Version(0, 1, 0, 0),

		/**
		 * All relative files will be prepended with this string.
		 */
		var rootPath: String = "",

		/**
		 * A flag for enabling various debugging features like debug logging.
		 * Don't set this to true directly, it will be automatically set to true if:
		 * On the JS backend debug=true exists as a querystring parameter.
		 * On the JVM backend -Ddebug=true exists as a vm parameter.
		 */
		var debug: Boolean = false,

		/**
		 * The target number of ticks per second.
		 */
		var frameRate: Int = 50,

		/**
		 * The location of the files.json file created by the AcornUI assets task.
		 */
		var assetsManifestPath: String = "assets/files.json",

		val window: WindowConfig = WindowConfig(),

		/**
		 * The Config for OpenGL properties. Only used in GL applications.
		 */
		val gl: GlConfig = GlConfig()
) {

	/**
	 * The time interval to step forward between each update() call.
	 */
	val stepTime: Float
		get() = 1f / frameRate.toFloat()

	companion object : DKey<AppConfig>
}

data class WindowConfig(

		var title: String = "",

		/**
		 * The initial width of the window (For JS backends, set the width style on the root instead).
		 */
		var initialWidth: Float = 800f,

		/**
		 * The initial height of the window (For JS backends, set the width style on the root instead).
		 */
		var initialHeight: Float = 600f

)

data class GlConfig(

		/**
		 * Post-scene 4x4 MSAA. May make text look blurry on certain systems.
		 */
		var antialias: Boolean = true,

		/**
		 * Use a depth buffer.
		 */
		var depth: Boolean = false,

		/**
		 * Applies to webgl only, if true, the canvas will be transparent.
		 * The stage background color should have transparency if this is true.
		 */
		var alpha: Boolean = false,

		/**
		 * Use a stencil buffer.
		 */
		var stencil: Boolean = true,

		/**
		 * Enable vertical sync.
		 */
		var vSync: Boolean = true
)

object UserInfo {

	/**
	 * True if the backend is an open gl backend.
	 */
	var isOpenGl = false

	var isTouchDevice = false

	var isBrowser = false
	var isDesktop = false

	/**
	 * Because... I.E.
	 */
	var isIe = false

	var isMobile = false

	// TODO: Calculate bandwidth

	/**
	 * Download speed, bytes per second.
	 */
	var downBps = 196608f

	var downBpsInv = 1f / 196608f

	/**
	 * Upload speed, bytes per second.
	 */
	var upBps = 196608f

	var upBpsInv = 1f / 196608f

	var languages: List<Locale> = listOf()

	override fun toString(): String {
		return "UserInfo(isOpenGl=$isOpenGl isTouchDevice=$isTouchDevice isBrowser=$isBrowser isIe=$isIe isMobile=$isMobile languages=${languages.joinToString(",")})"
	}
}

enum class Browser {
	NONE,
	IE,
	FX,
	CH,
	SF
}