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

package com.acornui.core.input

/**
 * Ascii Key codes.
 */
object Ascii {

	val NUM_0: Int = 48
	val NUM_1: Int = 49
	val NUM_2: Int = 50
	val NUM_3: Int = 51
	val NUM_4: Int = 52
	val NUM_5: Int = 53
	val NUM_6: Int = 54
	val NUM_7: Int = 55
	val NUM_8: Int = 56
	val NUM_9: Int = 57

	val A: Int = 65
	val B: Int = 66
	val C: Int = 67
	val D: Int = 68
	val E: Int = 69
	val F: Int = 70
	val G: Int = 71
	val H: Int = 72
	val I: Int = 73
	val J: Int = 74
	val K: Int = 75
	val L: Int = 76
	val M: Int = 77
	val N: Int = 78
	val O: Int = 79
	val P: Int = 80
	val Q: Int = 81
	val R: Int = 82
	val S: Int = 83
	val T: Int = 84
	val U: Int = 85
	val V: Int = 86
	val W: Int = 87
	val X: Int = 88
	val Y: Int = 89
	val Z: Int = 90

	val NUMPAD_0: Int = 96
	val NUMPAD_1: Int = 97
	val NUMPAD_2: Int = 98
	val NUMPAD_3: Int = 99
	val NUMPAD_4: Int = 100
	val NUMPAD_5: Int = 101
	val NUMPAD_6: Int = 102
	val NUMPAD_7: Int = 103
	val NUMPAD_8: Int = 104
	val NUMPAD_9: Int = 105

	val F1: Int = 112
	val F2: Int = 113
	val F3: Int = 114
	val F4: Int = 115
	val F5: Int = 116
	val F6: Int = 117
	val F7: Int = 118
	val F8: Int = 119
	val F9: Int = 120
	val F10: Int = 121
	val F11: Int = 122
	val F12: Int = 123
	val F13: Int = 124
	val F14: Int = 125
	val F15: Int = 126
	val F16: Int = 127
	val F17: Int = 128
	val F18: Int = 129
	val F19: Int = 130
	val F20: Int = 131
	val F21: Int = 132
	val F22: Int = 133
	val F23: Int = 134
	val F24: Int = 135

	// Modifiers
	val ALT: Int = 18
	val CONTROL: Int = 17
	val SHIFT: Int = 16
	val META: Int = 91

	val ADD: Int = 107
	val BACK_QUOTE: Int = 192
	val BACK_SLASH: Int = 220
	val BACKSPACE: Int = 8
	val CANCEL: Int = 3
	val CAPS_LOCK: Int = 20
	val CLEAR: Int = 12
	val CLOSE_BRACKET: Int = 221
	val COMMA: Int = 188
	val CONTEXT_MENU: Int = 93
	val DASH: Int = 189
	val DECIMAL: Int = 110
	val DELETE: Int = 46
	val DIVIDE: Int = 111
	val DOWN: Int = 40
	val END: Int = 35
	val ENTER: Int = 14
	val EQUALS: Int = 187
	val ESCAPE: Int = 27
	val HELP: Int = 6
	val HOME: Int = 36
	val INSERT: Int = 45
	val LEFT: Int = 37
	val MULTIPLY: Int = 106
	val NUM_LOCK: Int = 144
	val OPEN_BRACKET: Int = 219
	val PAGE_DOWN: Int = 34
	val PAGE_UP: Int = 33
	val PAUSE: Int = 19
	val PERIOD: Int = 190
	val PRINT_SCREEN: Int = 44
	val QUOTE: Int = 222
	val RETURN: Int = 13
	val RIGHT: Int = 39
	val SCROLL_LOCK: Int = 145
	val SEMICOLON: Int = 59
	val SEPARATOR: Int = 108
	val SLASH: Int = 191
	val SPACE: Int = 32
	val SUBTRACT: Int = 109
	val TAB: Int = 9
	val UP: Int = 38

	/**
	 * @return a human readable representation of the keycode. The returned value can be used in
	 * [Ascii.valueOf]
	 */
	fun toString(keyCode: Int): String? {
		if (keyCode < 0 || keyCode > 512) return null
		when (keyCode) {
			NUM_0 -> return "0"
			NUM_1 -> return "1"
			NUM_2 -> return "2"
			NUM_3 -> return "3"
			NUM_4 -> return "4"
			NUM_5 -> return "5"
			NUM_6 -> return "6"
			NUM_7 -> return "7"
			NUM_8 -> return "8"
			NUM_9 -> return "9"

			A -> return "A"
			B -> return "B"
			C -> return "C"
			D -> return "D"
			E -> return "E"
			F -> return "F"
			G -> return "G"
			H -> return "H"
			I -> return "I"
			J -> return "J"
			K -> return "K"
			L -> return "L"
			M -> return "M"
			N -> return "N"
			O -> return "O"
			P -> return "P"
			Q -> return "Q"
			R -> return "R"
			S -> return "S"
			T -> return "T"
			U -> return "U"
			V -> return "V"
			W -> return "W"
			X -> return "X"
			Y -> return "Y"
			Z -> return "Z"

			NUMPAD_0 -> return "NUMPAD 0"
			NUMPAD_1 -> return "NUMPAD 1"
			NUMPAD_2 -> return "NUMPAD 2"
			NUMPAD_3 -> return "NUMPAD 3"
			NUMPAD_4 -> return "NUMPAD 4"
			NUMPAD_5 -> return "NUMPAD 5"
			NUMPAD_6 -> return "NUMPAD 6"
			NUMPAD_7 -> return "NUMPAD 7"
			NUMPAD_8 -> return "NUMPAD 8"
			NUMPAD_9 -> return "NUMPAD 9"

			F1 -> return "F1"
			F2 -> return "F2"
			F3 -> return "F3"
			F4 -> return "F4"
			F5 -> return "F5"
			F6 -> return "F6"
			F7 -> return "F7"
			F8 -> return "F8"
			F9 -> return "F9"
			F10 -> return "F10"
			F11 -> return "F11"
			F12 -> return "F12"
			F13 -> return "F13"
			F14 -> return "F14"
			F15 -> return "F15"
			F16 -> return "F16"
			F17 -> return "F17"
			F18 -> return "F18"
			F19 -> return "F19"
			F20 -> return "F20"
			F21 -> return "F21"
			F22 -> return "F22"
			F23 -> return "F23"
			F24 -> return "F24"

			ALT -> return "ALT"
			CONTROL -> return "CONTROL"
			SHIFT -> return "SHIFT"
			META -> return "META"

			ADD -> return "ADD"
			BACK_QUOTE -> return "BACK_QUOTE"
			BACK_SLASH -> return "BACK_SLASH"
			BACKSPACE -> return "BACKSPACE"
			CANCEL -> return "CANCEL"
			CAPS_LOCK -> return "CAPS_LOCK"
			CLEAR -> return "CLEAR"
			CLOSE_BRACKET -> return "CLOSE_BRACKET"
			COMMA -> return "COMMA"
			CONTEXT_MENU -> return "CONTEXT_MENU"
			DASH -> return "DASH"
			DECIMAL -> return "DECIMAL"
			DELETE -> return "DELETE"
			DIVIDE -> return "DIVIDE"
			DOWN -> return "DOWN"
			END -> return "END"
			ENTER -> return "ENTER"
			EQUALS -> return "EQUALS"
			ESCAPE -> return "ESCAPE"
			HELP -> return "HELP"
			HOME -> return "HOME"
			INSERT -> return "INSERT"
			LEFT -> return "LEFT"
			MULTIPLY -> return "MULTIPLY"
			NUM_LOCK -> return "NUM_LOCK"
			OPEN_BRACKET -> return "OPEN_BRACKET"
			PAGE_DOWN -> return "PAGE_DOWN"
			PAGE_UP -> return "PAGE_UP"
			PAUSE -> return "PAUSE"
			PERIOD -> return "PERIOD"
			PRINT_SCREEN -> return "PRINT_SCREEN"
			QUOTE -> return "QUOTE"
			RETURN -> return "RETURN"
			RIGHT -> return "RIGHT"
			SCROLL_LOCK -> return "SCROLL_LOCK"
			SEMICOLON -> return "SEMICOLON"
			SEPARATOR -> return "SEPARATOR"
			SLASH -> return "SLASH"
			SPACE -> return "SPACE"
			SUBTRACT -> return "SUBTRACT"
			TAB -> return "TAB"
			UP -> return "UP"

			else -> // key name not found
				return null
		}
	}

	private val keyNames: HashMap<String, Int> by lazy(LazyThreadSafetyMode.NONE) {
		val keyNames = HashMap<String, Int>()
		for (i in 0..512) {
			val name = toString(i)
			if (name != null) keyNames.put(name, i)
		}
		keyNames
	}

	/**
	 * @param keyName the key name returned by the [Ascii.toString] method
	 * @return the int keycode
	 */
	fun valueOf(keyName: String): Int {
		return keyNames[keyName.toUpperCase()] ?: -1
	}
}