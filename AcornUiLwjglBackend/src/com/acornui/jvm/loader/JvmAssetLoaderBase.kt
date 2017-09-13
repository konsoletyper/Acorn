package com.acornui.jvm.loader

import com.acornui.action.BasicAction
import com.acornui.core.UserInfo
import com.acornui.core.assets.AssetLoader
import com.acornui.core.time.TimeDriver
import com.acornui.jvm.async
import java.io.File
import java.io.FileInputStream
import java.io.FileNotFoundException
import java.io.InputStream
import java.net.URL
import java.util.concurrent.ExecutorService

abstract class JvmAssetLoaderBase<out T : Any>(
		protected val isAsync: Boolean,
		protected val timeDriver: TimeDriver? = null
) : BasicAction(), AssetLoader<T> {

	private var _asset: T? = null

	override var path: String = ""

	override val result: T
		get() = _asset!!

	private var _bytesTotal: Int? = null

	val bytesTotal: Int
		get() = _bytesTotal ?: estimatedBytesTotal

	private var executor: ExecutorService? = null

	override fun onInvocation() {
		if (path.startsWith("http:", ignoreCase = true) || path.startsWith("https:", ignoreCase = true)) {
			doWork({
				val connection = URL(path).openConnection()
				val fis = connection.inputStream
				_bytesTotal = connection.contentLength
				create(fis)
			}) {
				_asset = it
				success()
			}
		} else {
			val file = File(path)
			_bytesTotal = file.length().toInt()
			if (!file.exists()) {
				fail(FileNotFoundException(path))
				return
			}
			doWork({
				val fis = FileInputStream(file)
				create(fis)
			}) {
				_asset = it
				success()
			}
		}
	}

	abstract fun create(fis: InputStream): T

	override var estimatedBytesTotal: Int = 0

	override val secondsLoaded: Float
		get() {
			return if (hasCompleted()) secondsTotal else 0f
		}

	override val secondsTotal: Float
		get() {
			return bytesTotal.toFloat() * UserInfo.downBpsInv
		}


	private fun <T : Any> doWork(work: () -> T, callback: (T) -> Unit) {
		if (isAsync) {
			executor = async(timeDriver!!, work, callback, { fail(it) })
		} else {
			try {
				callback(work())
			} catch (e: Throwable) {
				fail(e)
			}
		}
	}

	override fun onAborted() {
		executor?.shutdownNow()
	}

	override fun dispose() {
		super.dispose()
		_asset = null
	}
}