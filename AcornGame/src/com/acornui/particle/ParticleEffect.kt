package com.acornui.particle

import com.acornui.collection.find2
import com.acornui.math.Box

/**
 * See [http://www.badlogicgames.com/wordpress/?p=1255](http://www.badlogicgames.com/wordpress/?p=1255)
 * @author mzechner
 *
 * Ported to AcornUI framework by Nicholas Bilyk
 */
class ParticleEffect {

	val emitters = ArrayList<ParticleEmitter>(8)

	private var bounds: Box? = null

	fun set(other: ParticleEffect): ParticleEffect {
		emitters.clear()
		for (i in 0..other.emitters.lastIndex) {
			emitters.add(ParticleEmitter().set(other.emitters[i]))
		}
		return this
	}

	fun start() {
		for (i in 0..emitters.lastIndex) {
			emitters[i].start()
		}
	}

	fun reset() {
		for (i in 0..emitters.lastIndex) {
			emitters[i].reset()
		}
	}

	fun update(delta: Float) {
		for (i in 0..emitters.lastIndex) {
			emitters[i].update(delta)
		}
	}

	fun allowCompletion() {
		for (i in 0..emitters.lastIndex) {
			emitters[i].allowCompletion()
		}
	}

	val isComplete: Boolean
		get() {
			for (i in 0..emitters.lastIndex) {
				if (!emitters[i].isComplete) return false
			}
			return true
		}

	fun setDuration(duration: Float) {
		for (i in 0..emitters.lastIndex) {
			val emitter = emitters[i]
			emitter.isContinuous = false
			emitter.duration = duration
			emitter.durationTimer = 0f
		}
	}

	fun setPosition(x: Float, y: Float, z: Float = 0f) {
		for (i in 0..emitters.lastIndex) {
			emitters[i].setPosition(x, y, z)
		}
	}

	fun setFlip(flipX: Boolean, flipY: Boolean) {
		for (i in 0..emitters.lastIndex) {
			emitters[i].setFlip(flipX, flipY)
		}
	}

	fun flipY() {
		for (i in 0..emitters.lastIndex) {
			emitters[i].flipY()
		}
	}

	/**
	 * Returns the emitter with the specified name, or null.
	 */
	fun findEmitter(name: String): ParticleEmitter? {
		return emitters.find2 { it.name.equals(name) }
	}


	/**
	 * Returns the bounding box for all active particles. z axis will always be zero.
	 */
	val boundingBox: Box
		get() {
			if (bounds == null) bounds = Box()

			val bounds = this.bounds!!
			bounds.inf()
			for (emitter in this.emitters)
				bounds.ext(emitter.boundingBox)
			return bounds
		}

	fun scaleEffect(scaleFactor: Float) {
		for (particleEmitter in emitters) {
			particleEmitter.scale.setHigh(particleEmitter.scale.highMin * scaleFactor, particleEmitter.scale.highMax * scaleFactor)
			particleEmitter.scale.setLow(particleEmitter.scale.lowMin * scaleFactor, particleEmitter.scale.lowMax * scaleFactor)

			particleEmitter.velocity.setHigh(particleEmitter.velocity.highMin * scaleFactor, particleEmitter.velocity.highMax * scaleFactor)
			particleEmitter.velocity.setLow(particleEmitter.velocity.lowMin * scaleFactor, particleEmitter.velocity.lowMax * scaleFactor)

			particleEmitter.gravity.setHigh(particleEmitter.gravity.highMin * scaleFactor, particleEmitter.gravity.highMax * scaleFactor)
			particleEmitter.gravity.setLow(particleEmitter.gravity.lowMin * scaleFactor, particleEmitter.gravity.lowMax * scaleFactor)

			particleEmitter.wind.setHigh(particleEmitter.wind.highMin * scaleFactor, particleEmitter.wind.highMax * scaleFactor)
			particleEmitter.wind.setLow(particleEmitter.wind.lowMin * scaleFactor, particleEmitter.wind.lowMax * scaleFactor)

			particleEmitter.spawnWidthValue.setHigh(particleEmitter.spawnWidthValue.highMin * scaleFactor, particleEmitter.spawnWidthValue.highMax * scaleFactor)
			particleEmitter.spawnWidthValue.setLow(particleEmitter.spawnWidthValue.lowMin * scaleFactor, particleEmitter.spawnWidthValue.lowMax * scaleFactor)

			particleEmitter.spawnHeightValue.setHigh(particleEmitter.spawnHeightValue.highMin * scaleFactor, particleEmitter.spawnHeightValue.highMax * scaleFactor)
			particleEmitter.spawnHeightValue.setLow(particleEmitter.spawnHeightValue.lowMin * scaleFactor, particleEmitter.spawnHeightValue.lowMax * scaleFactor)

			particleEmitter.xOffsetValue.setLow(particleEmitter.xOffsetValue.lowMin * scaleFactor, particleEmitter.xOffsetValue.lowMax * scaleFactor)

			particleEmitter.yOffsetValue.setLow(particleEmitter.yOffsetValue.lowMin * scaleFactor, particleEmitter.yOffsetValue.lowMax * scaleFactor)
		}
	}
}