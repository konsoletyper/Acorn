package com.acornui.component

import com.acornui.component.layout.ListItemRenderer
import com.acornui.component.layout.SizeConstraints
import com.acornui.component.layout.setSize
import com.acornui.component.style.StyleTag
import com.acornui.component.style.styleTag
import com.acornui.core.di.Owned
import com.acornui.core.focus.Focusable
import com.acornui.core.text.StringFormatter
import com.acornui.core.text.ToStringFormatter
import com.acornui.math.Bounds

/**
 * A SimpleItemRenderer is a [ListItemRenderer] implementation that displays data as text using a formatter.
 */
class SimpleItemRenderer<E : Any>(
		owner: Owned,
		private val formatter: StringFormatter<E>
) : ElementContainerImpl<UiComponent>(owner), ListItemRenderer<E>, Focusable {

	override var focusEnabled: Boolean = true
	override var focusOrder: Float = 0f
	override var highlight: UiComponent? by createSlot()

	private val evenState = +button() {
		visible = false
		styleTags.add(EVEN_STYLE)
	}
	private val oddState = +button() {
		visible = false
		styleTags.add(ODD_STYLE)
	}

	private var _selected = false
	override var toggled: Boolean
		get() = _selected
		set(value) {
			_selected = value
			evenState.toggled = value
			oddState.toggled = value
		}

	private var _index: Int = -1

	override var index: Int
		get() = _index
		set(value) {
			_index = value
			if (value % 2 == 0) {
				evenState.visible = true
			} else {
				oddState.visible = true
			}
		}

	private var _data: E? = null
	override var data: E?
		get() = _data
		set(value) {
			if (_data == value) return
			_data = value
			val text = if (value == null) "" else formatter.format(value)
			evenState.label = text
			oddState.label = text
		}

	override fun updateSizeConstraints(out: SizeConstraints) {
		out.bound(evenState.sizeConstraints)
		out.bound(oddState.sizeConstraints)
	}

	override fun updateLayout(explicitWidth: Float?, explicitHeight: Float?, out: Bounds) {
		super.updateLayout(explicitWidth, explicitHeight, out)
		evenState.setSize(explicitWidth, explicitHeight)
		oddState.setSize(explicitWidth, explicitHeight)
		out.set(maxOf(evenState.width, oddState.width), maxOf(evenState.height, oddState.height))
		highlight?.setSize(out)
	}

	companion object : StyleTag {
		val EVEN_STYLE = styleTag()
		val ODD_STYLE = styleTag()
	}
}

fun <E : Any> Owned.simpleItemRenderer(formatter: StringFormatter<E> = ToStringFormatter, init: ComponentInit<SimpleItemRenderer<E>> = {}): SimpleItemRenderer<E> {
	val renderer = SimpleItemRenderer(this, formatter)
	renderer.init()
	return renderer
}

