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

package com.acornui.gl.component

import com.acornui.component.TextureComponent
import com.acornui.component.UiComponentImpl
import com.acornui.component.ValidationFlags
import com.acornui.core.assets.AssetTypes
import com.acornui.core.assets.assetBinding
import com.acornui.core.di.Owned
import com.acornui.core.di.inject
import com.acornui.core.graphics.BlendMode
import com.acornui.core.graphics.Texture
import com.acornui.gl.core.GlState
import com.acornui.math.Bounds

/**
 * A UiComponent representing a single Texture.
 *
 * Example:
 * val textureComponent = TextureComponent()
 * textureComponent.path("images/image128.jpg")
 * D.stage.addChild(textureComponent)
 *
 * @author nbilyk
 */
open class GlTextureComponent(owner: Owned) : UiComponentImpl(owner), TextureComponent {

	private val glState = inject(GlState)

	protected val textureBinding = assetBinding(AssetTypes.TEXTURE, { _setTexture(null) }) {
		texture ->
		_setTexture(texture)
	}

	protected val sprite = Sprite()

	init {
		validation.addNode(1 shl 16, ValidationFlags.LAYOUT or ValidationFlags.TRANSFORM or ValidationFlags.CONCATENATED_TRANSFORM, { validateVertices() })
	}

	constructor (owner: Owned, path: String) : this(owner) {
		this.path = path
	}

	constructor (owner: Owned, texture: Texture) : this(owner) {
		this.texture = texture
	}

	override final var path: String?
		get() = textureBinding.path
		set(value) {
			textureBinding.path = value
		}

	override final var texture: Texture?
		get() = sprite.texture
		set(value) {
			textureBinding.clear()
			_setTexture(value)
		}

	protected open fun _setTexture(value: Texture?) {
		if (sprite.texture == value) return
		val oldTexture = sprite.texture
		if (isActive) {
			oldTexture?.refDec()
		}
		sprite.texture = value
		if (isActive) {
			sprite.texture?.refInc()
		}
		invalidate(ValidationFlags.LAYOUT)
	}

	override var isRotated: Boolean
		get() {
			return sprite.isRotated
		}
		set(value) {
			if (sprite.isRotated == value) return
			sprite.isRotated = value
			invalidate(ValidationFlags.LAYOUT)
		}

	override var blendMode: BlendMode
		get() {
			return sprite.blendMode
		}
		set(value) {
			if (sprite.blendMode == value) return
			sprite.blendMode = value
			window.requestRender()
		}

	override fun onActivated() {
		super.onActivated()
		sprite.texture?.refInc()
	}

	override fun onDeactivated() {
		super.onDeactivated()
		sprite.texture?.refDec()
	}

	override fun setUV(u: Float, v: Float, u2: Float, v2: Float) {
		sprite.setUv(u, v, u2, v2)
		invalidate(ValidationFlags.LAYOUT)
	}

	override fun setRegion(x: Float, y: Float, width: Float, height: Float) {
		sprite.setRegion(x, y, width, height)
		invalidate(ValidationFlags.LAYOUT)
	}

	override fun updateLayout(explicitWidth: Float?, explicitHeight: Float?, out: Bounds) {
		sprite.updateUv()
		out.width = explicitWidth ?: sprite.naturalWidth
		out.height = explicitHeight ?: sprite.naturalHeight
	}

	private fun validateVertices() {
		sprite.updateWorldVertices(concatenatedTransform, width, height, z = 0f)
	}

	override fun draw() {
		glState.camera(camera)
		sprite.draw(glState, concatenatedColorTint)
	}

	override fun dispose() {
		super.dispose()
		texture = null
	}
}