package com.acornui.particle

import com.acornui.action.Decorator
import com.acornui.component.InteractivityMode
import com.acornui.component.UiComponentImpl
import com.acornui.core.UserInfo
import com.acornui.core.assets.AssetBinding
import com.acornui.core.assets.AssetTypes
import com.acornui.core.assets.assetBinding
import com.acornui.core.assets.jsonBinding
import com.acornui.core.di.Owned
import com.acornui.core.di.inject
import com.acornui.core.graphics.TextureAtlasData
import com.acornui.core.graphics.TextureAtlasDataSerializer
import com.acornui.core.graphics.atlasPageTextureBinding
import com.acornui.core.time.onTick
import com.acornui.gl.core.GlState
import com.acornui.math.ceil

class ParticleEffectComponent(owner: Owned) : UiComponentImpl(owner) {

	private val glState = inject(GlState)

	val effect = ParticleEffect()

	private val emitterRenderers = ArrayList<ParticleEmitterRenderer>()
	private val emitterBindings = ArrayList<AssetBinding<*, *>>()

	private var textureAtlasData: TextureAtlasData? = null

	private val pEffectBinding = assetBinding(AssetTypes.TEXT, ParticleEffectAssetDecorator, {}) {
		if (maxParticleCountScale != 1f || minParticleCountScale != 1f) {
			for (emitter in effect.emitters) {
				emitter.maxParticleCount = (emitter.maxParticleCount * maxParticleCountScale).ceil()
				emitter.minParticleCount = (emitter.minParticleCount * minParticleCountScale).ceil()
			}
		}
		effect.set(it)
		effect.flipY()
		refreshRenderers()
	}

	private val textureAtlasBinding = jsonBinding(TextureAtlasDataSerializer) {
		textureAtlasData: TextureAtlasData ->
		this.textureAtlasData = textureAtlasData
		refreshRenderers()
	}

	init {
		interactivityMode = InteractivityMode.NONE
		onTick {
			effect.update(it)
		}
	}

	private fun refreshRenderers() {
		clearRenderers()
		val textureAtlasPath = textureAtlasBinding.path ?: return
		val textureAtlasData = textureAtlasData ?: return

		for (emitter in effect.emitters) {
			val imagePath = emitter.imagePath ?: continue
			val binding = atlasPageTextureBinding(textureAtlasPath, textureAtlasData, imagePath, {}) {
				texture, region ->
				val renderer = ParticleEmitterRenderer(injector, emitter)
				emitter.spriteWidth = region.originalWidth.toFloat()
				emitter.spriteHeight = region.originalHeight.toFloat()
				emitterRenderers.add(renderer)
				val s = renderer.sprite
				s.texture = texture
				s.isRotated = region.isRotated
				s.setRegion(region.bounds)
				s.updateUv()
				if (isActive)
					texture.refInc()
			} ?: continue
			emitterBindings.add(binding)
		}
	}

	override fun onActivated() {
		super.onActivated()
		for (i in 0..emitterRenderers.lastIndex) {
			emitterRenderers[i].sprite.texture?.refInc()
		}
	}

	override fun onDeactivated() {
		super.onDeactivated()
		for (i in 0..emitterRenderers.lastIndex) {
			emitterRenderers[i].sprite.texture?.refDec()
		}
	}

	fun load(pDataPath: String, atlasPath: String) {
		pEffectBinding.path = pDataPath
		textureAtlasBinding.path = atlasPath
	}

	override fun draw() {
		val concatenatedTransform = concatenatedTransform
		val concatenatedColorTint = concatenatedColorTint
		glState.camera(camera)
		for (i in 0..emitterRenderers.lastIndex) {
			emitterRenderers[i].draw(concatenatedTransform, concatenatedColorTint)
		}
	}

	private fun clearRenderers() {
		if (isActive) {
			for (i in 0..emitterRenderers.lastIndex) {
				emitterRenderers[i].sprite.texture?.refDec()
			}
		}
		emitterRenderers.clear()

		for (i in 0..emitterBindings.lastIndex) {
			emitterBindings[i].dispose()
		}
		emitterBindings.clear()
	}

	override fun dispose() {
		super.dispose()

		clearRenderers()
		pEffectBinding.dispose()
		textureAtlasBinding.dispose()
	}

	companion object {
		var maxParticleCountScale: Float = if (UserInfo.isMobile) 0.5f else 1f
		var minParticleCountScale: Float = 1f
	}
}


fun Owned.particleEffectComponent(init: ParticleEffectComponent.() -> Unit = {}): ParticleEffectComponent {
	val p = ParticleEffectComponent(this)
	p.init()
	return p
}

fun Owned.particleEffectComponent(pDataPath: String, atlasPath: String, init: ParticleEffectComponent.() -> Unit = {}): ParticleEffectComponent {
	val p = ParticleEffectComponent(this)
	p.load(pDataPath, atlasPath)
	p.init()
	return p
}

// We cache a ParticleEffect with the loaded data, then use that to set used instances.
object ParticleEffectAssetDecorator : Decorator<String, ParticleEffect> {
	override fun decorate(target: String): ParticleEffect {
		return ParticleEffectReader.read(target)
	}
}