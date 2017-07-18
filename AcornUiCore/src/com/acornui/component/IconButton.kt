package com.acornui.component

import com.acornui._assert
import com.acornui.component.style.StyleTag
import com.acornui.core.di.Owned
import com.acornui.core.graphics.contentsAtlas

class IconButton(
		owner: Owned
) : Button(owner) {

	private var _contents: UiComponent? = null
	private var _currentContentsContainer: ElementContainer? = null

	init {
		styleTags.add(IconButton)
	}

	override fun onElementAdded(index: Int, element: UiComponent) {
		if (_contents != null) throw Exception("Icon buttons can only have one child.")
		_contents = element
		_currentContentsContainer = currentSkinPart as? ElementContainer
		_currentContentsContainer?.addElement(element)
	}

	override fun onElementRemoved(index: Int, element: UiComponent) {
		_assert(_contents == element)
		_contents = null
		_currentContentsContainer?.removeElement(element)
		_currentContentsContainer = null
	}

	override fun onCurrentStateChanged(previousState: ButtonState, newState: ButtonState, previousSkinPart: UiComponent?, newSkinPart: UiComponent?) {
		val c = _contents ?: return
		removeElement(c)
		addElement(c)
	}

	companion object : StyleTag
}

fun Owned.iconButton(init: ComponentInit<Button> = {}): IconButton {
	val b = IconButton(this)
	b.init()
	return b
}

fun Owned.iconButton(icon: String, init: ComponentInit<Button> = {}): IconButton {
	val b = IconButton(this)
	b.contentsImage(icon)
	b.init()
	return b
}

fun Owned.iconButton(atlas: String, region: String, init: ComponentInit<Button> = {}): IconButton {
	val b = IconButton(this)
	b.contentsAtlas(atlas, region)
	b.init()
	return b
}