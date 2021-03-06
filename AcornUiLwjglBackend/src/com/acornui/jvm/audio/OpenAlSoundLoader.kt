package com.acornui.jvm.audio

import com.acornui.core.assets.AssetType
import com.acornui.core.assets.AssetTypes
import com.acornui.core.audio.SoundFactory
import com.acornui.core.time.TimeDriver
import com.acornui.jvm.loader.JvmAssetLoaderBase
import java.io.InputStream


open class OpenAlSoundLoader(
		private val audioManager: OpenAlAudioManager,
		isAsync: Boolean,
		timeDriver: TimeDriver
) : JvmAssetLoaderBase<SoundFactory>(isAsync, timeDriver) {

	override val type: AssetType<SoundFactory> = AssetTypes.SOUND

	init {
	}

	override fun create(fis: InputStream): SoundFactory {
		val data = SoundDecoders.decode(path.extension(), fis)
		return OpenAlSoundFactory(audioManager, data.pcm, data.channels, data.sampleRate)
	}

	companion object {

		fun registerDefaultDecoders() {
			SoundDecoders.addDecoder("ogg", OggSoundDecoder)
			SoundDecoders.addDecoder("mp3", Mp3SoundDecoder)
			SoundDecoders.addDecoder("wav", WavDecoder)
		}

		private fun String.extension(): String {
			return substringAfterLast('.').toLowerCase()
		}
	}
}

object SoundDecoders {

	private val decoders = HashMap<String, SoundDecoder>()

	/**
	 * Adds a decoder for the given file type.
	 * The decoder should accept an input stream and return a byte array.
	 */
	fun addDecoder(extension: String, decoder: SoundDecoder) {
		decoders[extension.toLowerCase()] = decoder
	}

	fun hasDecoder(extension: String): Boolean = decoders.containsKey(extension)

	fun decode(extension: String, fis: InputStream): PcmSoundData {
		val decoder = decoders[extension] ?: throw Exception("Decoder not found for extension: $extension")
		return decoder.decodeSound(fis)
	}

}

class PcmSoundData(
		val pcm: ByteArray,
		val channels: Int,
		val sampleRate: Int
)

interface SoundDecoder {
	fun decodeSound(inputStream: InputStream): PcmSoundData
}
