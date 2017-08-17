package com.acornui.core.input.interaction

import com.acornui.core.input.InteractionEventBase
import com.acornui.core.input.InteractionType

/**
 * An event representing a character input.
 */
open class CharInteraction : InteractionEventBase() {

	var char: Char = 0.toChar()

	fun set(other: CharInteraction) {
		char = other.char
	}

	override fun clear() {
		super.clear()
		char = 0.toChar()
	}

	companion object {
		val CHAR = InteractionType<CharInteraction>("char")
	}
}
