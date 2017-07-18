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

package com.acornui.core.input.interaction

import com.acornui.core.input.Ascii
import com.acornui.core.input.InteractionEventBase
import com.acornui.core.input.InteractionType

/**
 * An event representing an interaction with the keyboard.
 * @author nbilyk
 */
open class KeyInteraction : InteractionEventBase() {

	/**
	 * The ascii keyCode.
	 * @see Ascii
	 */
	var keyCode: Int = 0

	/**
	 * The location of the key.
	 * If there is only one location for the related key, it will have a location of STANDARD.
	 */
	var location: KeyLocation = KeyLocation.STANDARD

	/**
	 * True if the Alt key was active when the KeyboardEvent was generated.
	 */
	var altKey: Boolean = false

	/**
	 * True if the Control key was active when the KeyboardEvent was generated.
	 */
	var ctrlKey: Boolean = false

	/**
	 * True if the Meta key, (or Command key on OS X) was active when the KeyboardEvent was generated.
	 * Also called the "super" key.
	 */
	var metaKey: Boolean = false

	/**
	 * True if the Shift key was active when the KeyboardEvent was generated.
	 */
	var shiftKey: Boolean = false

	/**
	 * The time (in milliseconds since the Unix Epoch) this key event took place.
	 */
	var timestamp: Long = 0

	/**
	 * If the key was held down, a KEY_DOWN event will repeat, and this will be true
	 */
	var isRepeat: Boolean = false


	/**
	 * If true, this interaction was triggered from code, not user input.
	 */
	var isFabricated: Boolean = false

	fun set(other: KeyInteraction) {
		keyCode = other.keyCode
		location = other.location
		altKey = other.altKey
		ctrlKey = other.ctrlKey
		metaKey = other.metaKey
		shiftKey = other.shiftKey
		timestamp = other.timestamp
		isRepeat = other.isRepeat
		isFabricated = other.isFabricated
	}

	fun keyName(): String {
		return Ascii.toString(keyCode) ?: "Unknown"
	}

	override fun clear() {
		super.clear()
		keyCode = 0
		location = KeyLocation.STANDARD
		altKey = false
		ctrlKey = false
		metaKey = false
		shiftKey = false
		timestamp = 0
		isRepeat = false
		isFabricated = false
	}

	companion object {
		val KEY_DOWN = InteractionType<KeyInteraction>("keyDown")
		val KEY_UP = InteractionType<KeyInteraction>("keyUp")
	}
}

enum class KeyLocation {
	STANDARD,
	LEFT,
	RIGHT,
	NUMBER_PAD,
	UNKNOWN
}