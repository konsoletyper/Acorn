package com.acornui.particle

import com.acornui.string.StringParser

object ParticleEffectReader {

	fun read(data: String): ParticleEffect {
		val effect = ParticleEffect()
		val reader = StringParser(data)
		reader.white()
		while (reader.hasNext) {
			val emitter = ParticleEmitter()
			emitter.load(reader)
			reader.white()
			effect.emitters.add(emitter)
		}
		return effect
	}

	private fun ParticleEmitter.load(reader: StringParser) {
		name = readString(reader, "name")
		reader.readLine()
		delayValue.load(reader)
		reader.readLine()
		durationValue.load(reader)
		reader.readLine()
		minParticleCount = readInt(reader, "minParticleCount")
		maxParticleCount = readInt(reader, "maxParticleCount")
		reader.readLine()
		emissionValue.load(reader)
		reader.readLine()
		lifeValue.load(reader)
		reader.readLine()
		lifeOffsetValue.load(reader)
		reader.readLine()
		xOffsetValue.load(reader)
		reader.readLine()
		yOffsetValue.load(reader)
		reader.readLine()
		spawnShape.load(reader)
		reader.readLine()
		spawnWidthValue.load(reader)
		reader.readLine()
		spawnHeightValue.load(reader)
		reader.readLine()
		scale.load(reader)
		reader.readLine()
		velocity.load(reader)
		reader.readLine()
		angle.load(reader)
		reader.readLine()
		rotation.load(reader)
		reader.readLine()
		wind.load(reader)
		reader.readLine()
		gravity.load(reader)
		reader.readLine()
		tint.load(reader)
		reader.readLine()
		transparency.load(reader)
		reader.readLine()
		isAttached = readBoolean(reader, "attached")
		isContinuous = readBoolean(reader, "continuous")
		isAligned = readBoolean(reader, "aligned")
		isAdditive = readBoolean(reader, "additive")
		isBehind = readBoolean(reader, "behind")
		val line = reader.readLine()
		if (line.startsWith("premultipliedAlpha")) {
			isPremultipliedAlpha = readBoolean(line)
			reader.readLine()
		}
		imagePath = reader.readLine().replace('\\', '/').substringAfterLast('/')
	}

	private fun readString(reader: StringParser, name: String): String {
		val line = reader.readLine()
		if (line == "") throw Exception("Could not find property $name")
		return readPropertyValue(line)
	}

	private fun readInt(reader: StringParser, name: String): Int {
		return readString(reader, name).toInt()
	}

	private fun readFloat(reader: StringParser, name: String): Float {
		return readString(reader, name).toFloat()
	}

	private fun readBoolean(reader: StringParser, name: String): Boolean {
		return readString(reader, name).toBoolean()
	}

	private fun readBoolean(line: String): Boolean {
		return readPropertyValue(line).toBoolean()
	}

	fun readPropertyValue(line: String): String {
		return line.substring(line.indexOf(":") + 1).trim()
	}

	private fun ParticleValue.load(reader: StringParser) {
		if (!isAlwaysActive)
			isActive = readBoolean(reader, "active")
	}

	private fun NumericValue.load(reader: StringParser) {
		(this as ParticleValue).load(reader)
		if (!isActive) return
		value = readFloat(reader, "value")
	}

	private fun RangedNumericValue.load(reader: StringParser) {
		(this as ParticleValue).load(reader)
		if (!isActive) return
		lowMin = readFloat(reader, "lowMin")
		lowMax = readFloat(reader, "lowMax")
	}

	private fun ScaledNumericValue.load(reader: StringParser) {
		(this as RangedNumericValue).load(reader)
		if (!isActive) return
		highMin = readFloat(reader, "highMin")
		highMax = readFloat(reader, "highMax")
		isRelative = readBoolean(reader, "relative")
		scaling = FloatArray(readInt(reader, "scalingCount"))
		for (i in scaling.indices)
			scaling[i] = readFloat(reader, "scaling" + i)
		timeline = FloatArray(readInt(reader, "timelineCount"))
		for (i in timeline.indices)
			timeline[i] = readFloat(reader, "timeline" + i)
	}

	private fun GradientColorValue.load(reader: StringParser) {
		(this as ParticleValue).load(reader)
		if (!isActive) return
		colors = FloatArray(readInt(reader, "colorsCount"))
		for (i in colors.indices)
			colors[i] = readFloat(reader, "colors" + i)
		timeline = FloatArray(readInt(reader, "timelineCount"))
		for (i in timeline.indices)
			timeline[i] = readFloat(reader, "timeline" + i)
	}




	private fun SpawnShapeValue.load(reader: StringParser) {
		(this as ParticleValue).load(reader)
		if (!isActive) return
		val type = readString(reader, "shape")
		shape = SpawnShape.valueOf(type)
		if (shape == SpawnShape.ellipse) {
			isEdges = readBoolean(reader, "edges")
			side = SpawnEllipseSide.valueOf(readString(reader, "side"))
		}
	}

}

object ParticleEffectWriter {

	fun write(particleEffect: ParticleEffect): String {
		val b = StringBuilder()
		write(particleEffect, b)
		return b.toString()
	}

	fun write(particleEffect: ParticleEffect, output: StringBuilder) {
		val emitters = particleEffect.emitters
		var index = 0
		for (i in 0..emitters.lastIndex) {
			val emitter = emitters[i]
			if (index++ > 0) output.append("\n\n")
			emitter.save(output)
		}
	}

	private fun ParticleEmitter.save(output: StringBuilder) {
		output.append("${name!!}\n")
		output.append("- Delay -\n")
		delayValue.save(output)
		output.append("- Duration - \n")
		durationValue.save(output)
		output.append("- Count - \n")
		output.append("min: $minParticleCount\n")
		output.append("max: $maxParticleCount\n")
		output.append("- Emission - \n")
		emissionValue.save(output)
		output.append("- Life - \n")
		lifeValue.save(output)
		output.append("- Life Offset - \n")
		lifeOffsetValue.save(output)
		output.append("- X Offset - \n")
		xOffsetValue.save(output)
		output.append("- Y Offset - \n")
		yOffsetValue.save(output)
		output.append("- Spawn Shape - \n")
		spawnShape.save(output)
		output.append("- Spawn Width - \n")
		spawnWidthValue.save(output)
		output.append("- Spawn Height - \n")
		spawnHeightValue.save(output)
		output.append("- Scale - \n")
		scale.save(output)
		output.append("- Velocity - \n")
		velocity.save(output)
		output.append("- Angle - \n")
		angle.save(output)
		output.append("- Rotation - \n")
		rotation.save(output)
		output.append("- Wind - \n")
		wind.save(output)
		output.append("- Gravity - \n")
		gravity.save(output)
		output.append("- Tint - \n")
		tint.save(output)
		output.append("- Transparency - \n")
		transparency.save(output)
		output.append("- Options - \n")
		output.append("attached: $isAttached\n")
		output.append("continuous: $isContinuous\n")
		output.append("aligned: $isAligned\n")
		output.append("additive: $isAdditive\n")
		output.append("behind: $isBehind\n")
		output.append("premultipliedAlpha: $isPremultipliedAlpha\n")
		output.append("- Image Path -\n")
		output.append("${imagePath!!}\n")
	}

	private fun ParticleValue.save(output: StringBuilder) {
		if (!isAlwaysActive)
			output.append("active: $isActive\n")
	}


	private fun NumericValue.save(output: StringBuilder) {
		(this as ParticleValue).save(output)
		if (!isActive) return
		output.append("value: $value\n")
	}

	private fun RangedNumericValue.save(output: StringBuilder) {
		(this as ParticleValue).save(output)
		if (!isActive) return
		output.append("lowMin: $lowMin\n")
		output.append("lowMax: $lowMax\n")
	}

	private fun ScaledNumericValue.save(output: StringBuilder) {
		(this as RangedNumericValue).save(output)
		if (!isActive) return
		output.append("highMin: $highMin\n")
		output.append("highMax: $highMax\n")
		output.append("relative: $isRelative\n")
		output.append("scalingCount: ${scaling.size}\n")
		for (i in scaling.indices) {
			output.append("scaling$i: ${scaling[i]}\n")
		}
		output.append("timelineCount: ${timeline.size}\n")
		for (i in timeline.indices) {
			output.append("timeline$i: ${timeline[i]}\n")
		}
	}

	private fun GradientColorValue.save(output: StringBuilder) {
		(this as ParticleValue).save(output)
		if (!isActive) return
		output.append("colorsCount: ${colors.size}\n")
		for (i in colors.indices)
			output.append("colors$i: ${colors[i]}\n")
		output.append("timelineCount: ${timeline.size}\n")
		for (i in timeline.indices)
			output.append("timeline$i: ${timeline[i]}\n")
	}

	private fun SpawnShapeValue.save(output: StringBuilder) {
		(this as ParticleValue).save(output)
		if (!isActive) return
		output.append("shape: $shape\n")
		if (shape == SpawnShape.ellipse) {
			output.append("edges: $isEdges\n")
			output.append("side: $side\n")
		}
	}
}

private fun String.toBoolean(): Boolean {
	return this.equals("true", ignoreCase = true)
}