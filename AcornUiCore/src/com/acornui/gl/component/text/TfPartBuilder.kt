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

package com.acornui.gl.component.text

import com.acornui.component.layout.algorithm.FlowLayoutData
import com.acornui.string.isBreaking

fun TfContainer<*, FlowLayoutData>.add(text: String) {
	add(rangeEnd, text)
}

fun TfContainer<*, FlowLayoutData>.add(index: Int, text: String) {
	val words = createWords(text, tfCharStyle)

	for (word in words) {
		val lastChar = word.chars.last().char
		if (lastChar == '\n') {
			word layout {
				clearsLine = true
			}
		} else if (lastChar == '\t') {
			word layout {
				clearsTabstop = true
			}
		} else if (lastChar == ' ') {
			word layout {
				overhangs = true
			}
		}
		addChild(word)
	}
}

private fun createWords(text: String, tfCharStyle: TfCharStyle): List<TfWord> {
	val words = ArrayList<TfWord>()
	if (text.isEmpty()) return words
	var word = TfWord()
	for (i in 0..text.lastIndex) {
		val char = text[i]
		val tfChar = TfChar(char, i, tfCharStyle)
		if (!word.canAddChar(char)) {
			// Need a new word
			words.add(word)
			word = TfWord()
		}
		word.chars.add(tfChar)
	}
	if (word.isNotEmpty())
		words.add(word)

	return words
}

private fun TfWord.canAddChar(char: Char): Boolean {
	val last = chars.lastOrNull() ?: return true
	val lastC = last.char
	if (lastC.isBreaking()) return false
	return (lastC == ' ') == (char == ' ')
}
