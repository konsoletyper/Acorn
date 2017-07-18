package com.acornui.core.graphics

import com.acornui.action.Decorator

data class AtlasPageDecorator(val page: AtlasPageData) : Decorator<Texture, Texture> {
	override fun decorate(target: Texture): Texture {
		target.pixelFormat = page.pixelFormat
		target.filterMin = page.filterMin
		target.filterMag = page.filterMag
		target.hasWhitePixel = page.hasWhitePixel
		return target
	}
}