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

import com.acornui.component.InteractiveElementRo
import com.acornui.component.createOrReuse
import com.acornui.core.input.interaction.*
import com.acornui.signal.StoppableSignal

/**
 * Dispatched when the mouse or touch is pressed down on this element.
 */
fun InteractiveElementRo.mouseDown(isCapture: Boolean = false): StoppableSignal<MouseInteraction> {
	return createOrReuse(MouseInteraction.MOUSE_DOWN, isCapture)
}

/**
 * Dispatched when the mouse or touch is released from this element.
 */
fun InteractiveElementRo.mouseUp(isCapture: Boolean = false): StoppableSignal<MouseInteraction> {
	return createOrReuse(MouseInteraction.MOUSE_UP, isCapture)
}

/**
 * Dispatched when the mouse or touch has moved within the bounds of this element.
 */
fun InteractiveElementRo.mouseMove(isCapture: Boolean = false): StoppableSignal<MouseInteraction> {
	return createOrReuse(MouseInteraction.MOUSE_MOVE, isCapture)
}

/**
 * Dispatched when a key has been pressed while this interactive element has focus.
 */
fun InteractiveElementRo.keyDown(isCapture: Boolean = false): StoppableSignal<KeyInteraction> {
	return createOrReuse(KeyInteraction.KEY_DOWN, isCapture)
}

/**
 * Dispatched when a key has been released while this interactive element has focus.
 */
fun InteractiveElementRo.keyUp(isCapture: Boolean = false): StoppableSignal<KeyInteraction> {
	return createOrReuse(KeyInteraction.KEY_UP, isCapture)
}

/**
 * Dispatched when a character has been inputted while this interactive element has focus.
 */
fun InteractiveElementRo.char(isCapture: Boolean = false): StoppableSignal<CharInteraction> {
	return createOrReuse(CharInteraction.CHAR, isCapture)
}

/**
 * Dispatched when the mouse is moved over this target. This will not trigger for touch surface interaction.
 */
fun InteractiveElementRo.mouseOver(isCapture: Boolean = false): StoppableSignal<MouseInteraction> {
	return createOrReuse(MouseInteraction.MOUSE_OVER, isCapture)
}

/**
 * Dispatched when the mouse has moved off of this target. This will not trigger for touch surface interaction.
 */
fun InteractiveElementRo.mouseOut(isCapture: Boolean = false): StoppableSignal<MouseInteraction> {
	return createOrReuse(MouseInteraction.MOUSE_OUT, isCapture)
}

/**
 * Dispatched when the mouse wheel has been scrolled.
 */
fun InteractiveElementRo.wheel(isCapture: Boolean = false): StoppableSignal<WheelInteraction> {
	return createOrReuse(WheelInteraction.MOUSE_WHEEL, isCapture)
}

fun InteractiveElementRo.touchStart(isCapture: Boolean = false): StoppableSignal<TouchInteraction> {
	return createOrReuse(TouchInteraction.TOUCH_START, isCapture)
}

fun InteractiveElementRo.touchMove(isCapture: Boolean = false): StoppableSignal<TouchInteraction> {
	return createOrReuse(TouchInteraction.TOUCH_MOVE, isCapture)
}

fun InteractiveElementRo.touchEnd(isCapture: Boolean = false): StoppableSignal<TouchInteraction> {
	return createOrReuse(TouchInteraction.TOUCH_END, isCapture)
}

fun InteractiveElementRo.touchCancel(isCapture: Boolean = false): StoppableSignal<TouchInteraction> {
	return createOrReuse(TouchInteraction.TOUCH_CANCEL, isCapture)
}

fun InteractiveElementRo.clipboardCopy(isCapture: Boolean = false): StoppableSignal<ClipboardInteraction> {
	return createOrReuse(ClipboardInteraction.COPY, isCapture)
}

fun InteractiveElementRo.clipboardCut(isCapture: Boolean = false): StoppableSignal<ClipboardInteraction> {
	return createOrReuse(ClipboardInteraction.CUT, isCapture)
}

fun InteractiveElementRo.clipboardPaste(isCapture: Boolean = false): StoppableSignal<ClipboardInteraction> {
	return createOrReuse(ClipboardInteraction.PASTE, isCapture)
}