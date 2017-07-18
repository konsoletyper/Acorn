package com.acornui.core.input.interaction

import com.acornui.core.input.InteractionEventBase

/**
 * An event representing a character input.
 */
class CharInteraction : InteractionEventBase() {

	var char: Char = 0.toChar()

	fun set(other: CharInteraction) {
		char = other.char
	}

	override fun clear() {
		super.clear()
		char = 0.toChar()
	}
}
