package com.acornui.jvm.audio

import com.acornui.action.BasicAction
import com.acornui.core.assets.AssetType
import com.acornui.core.assets.AssetTypes
import com.acornui.core.assets.MutableAssetLoader
import com.acornui.core.audio.Music
import java.io.File
import java.io.FileInputStream
import java.io.FileNotFoundException
import java.io.InputStream
import java.net.URL


class OpenAlMusicLoader(
		val audioManager: OpenAlAudioManager
) : BasicAction(), MutableAssetLoader<Music> {

	override val type: AssetType<Music> = AssetTypes.MUSIC

	override val secondsLoaded: Float = 0f
	override val secondsTotal: Float = 0f

	private var _asset: Music? = null
	override val result: Music
		get() = _asset!!

	override var estimatedBytesTotal: Int = 0
	override var path: String = ""

	override fun onInvocation() {
		val extension = path.extension()
		if (!MusicDecoders.hasDecoder(extension)) {
			fail(Exception("No decoder found for music extension: $extension"))
			return
		}

		val inputStreamFactory: ()->InputStream
		if (path.startsWith("http:", ignoreCase = true) || path.startsWith("https:", ignoreCase = true)) {
			inputStreamFactory = {
				URL(path).openStream()
			}
		} else {
			val file = File(path)
			if (!file.exists()) {
				fail(FileNotFoundException(path))
				return
			}
			inputStreamFactory = { FileInputStream(file) }
		}
		val streamReader = MusicDecoders.createReader(extension, inputStreamFactory)
		try {
			_asset = OpenAlMusic(audioManager, streamReader)
			success()
		} catch (e: Throwable) {
			fail(e)
		}

	}

	override fun dispose() {
		super.dispose()
		_asset?.dispose()
		_asset = null
	}

	companion object {

		fun registerDefaultDecoders() {
			MusicDecoders.setReaderFactory("ogg", { OggMusicStreamReader(it) })
			MusicDecoders.setReaderFactory("mp3", { Mp3MusicStreamReader(it) })
			MusicDecoders.setReaderFactory("wav", { WavMusicStreamReader(it) })
		}

		private fun String.extension(): String {
			return substringAfterLast('.').toLowerCase()
		}
	}
}

interface MusicStreamReader {

	val channels: Int
	val sampleRate: Int
	val bufferOverhead: Int
		get() = 0

	/**
	 * The duration of the music, in seconds.
	 * This returns -1 if the duration is unknown.
	 */
	val duration: Float

	/**
	 * Resets the stream to the beginning.
	 */
	fun reset()

	/**
	 * By default, does just the same as reset(). Used to add special behaviour in Ogg music.
	 */
	fun loop() {
		reset()
	}

	/**
	 * Fills as much of the buffer as possible and returns the number of bytes filled. Returns <= 0 to indicate the end
	 * of the stream.
	 */
	fun read(buffer: ByteArray): Int
}

/**
 * Registered music decoders.
 */
object MusicDecoders {

	private val readerFactories = HashMap<String, (() -> InputStream)->MusicStreamReader>()

	/**
	 * Adds a decoder for the given file type.
	 * The decoder should accept an input stream and return a byte array.
	 */
	fun setReaderFactory(extension: String, readerFactory: (() -> InputStream)->MusicStreamReader) {
		readerFactories[extension.toLowerCase()] = readerFactory
	}

	fun hasDecoder(extension: String): Boolean = readerFactories.containsKey(extension)

	fun createReader(extension: String, inputStreamFactory: () -> InputStream): MusicStreamReader {
		val readerFactory = readerFactories[extension] ?: throw Exception("Decoder not found for extension: $extension")
		return readerFactory(inputStreamFactory)
	}

}

