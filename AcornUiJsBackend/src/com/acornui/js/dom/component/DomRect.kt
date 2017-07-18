package com.acornui.js.dom.component

import com.acornui.component.BoxStyle
import com.acornui.component.Rect
import com.acornui.component.UiComponentImpl
import com.acornui.component.ValidationFlags
import com.acornui.core.di.Owned
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLElement
import kotlin.browser.document

open class DomRect(
		owner: Owned,
		protected val element: HTMLElement = document.createElement("div") as HTMLDivElement
) : UiComponentImpl(owner, DomComponent(element)), Rect {

	override final val style = bind(BoxStyle())

	init {
		watch(style) {
			it.applyCss(element)
			it.applyBox(native as DomComponent)
			invalidate(ValidationFlags.LAYOUT)
		}
	}
}

fun BoxStyle.applyBox(native: DomComponent) {
	native.margin.set(margin)
	native.border.set(borderThickness)
	native.padding.set(padding)
}

fun BoxStyle.applyCss(element: HTMLElement) {
	val it = this
	element.style.apply {
		val gradient = it.linearGradient
		if (gradient == null) {
			removeProperty("background")
			backgroundColor = it.backgroundColor.toCssString()
		} else {
			removeProperty("background-color")
			background = gradient.toCssString()
		}
		val bC = it.borderColor
		borderTopColor = bC.top.toCssString()
		borderRightColor = bC.right.toCssString()
		borderBottomColor = bC.bottom.toCssString()
		borderLeftColor = bC.left.toCssString()

		val b = it.borderThickness
		borderLeftWidth = "${b.left}px"
		borderTopWidth = "${b.top}px"
		borderRightWidth = "${b.right}px"
		borderBottomWidth = "${b.bottom}px"

		val c = it.borderRadius
		borderTopLeftRadius = "${c.topLeft.x}px ${c.topLeft.y}px"
		borderTopRightRadius = "${c.topRight.x}px ${c.topRight.y}px"
		borderBottomRightRadius = "${c.bottomRight.x}px ${c.bottomRight.y}px"
		borderBottomLeftRadius = "${c.bottomLeft.x}px ${c.bottomLeft.y}px"

		borderStyle = "solid"
		val m = it.margin
		marginLeft = "${m.left}px"
		marginTop = "${m.top}px"
		marginRight = "${m.right}px"
		marginBottom = "${m.bottom}px"

		val p = it.padding
		paddingLeft = "${p.left}px"
		paddingTop = "${p.top}px"
		paddingRight = "${p.right}px"
		paddingBottom = "${p.bottom}px"
	}
}