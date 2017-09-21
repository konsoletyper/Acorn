package com.acornui.js.io

import com.acornui.action.BasicAction
import com.acornui.core.UserInfo
import com.acornui.core.di.Injector
import com.acornui.core.request.*
import com.acornui.core.time.TimeDriver
import com.acornui.jvm.async
import java.io.DataOutputStream
import java.net.HttpURLConnection
import java.net.URL
import java.util.concurrent.ExecutorService


class JvmHttpRequest(injector: Injector) : BasicAction(), MutableHttpRequest {

	private val timeDriver = injector.inject(TimeDriver)

	override val requestData = UrlRequestData()

	private var _responseType = ResponseType.TEXT

	override val responseType: ResponseType
		get() = _responseType

	private var _bytesLoaded = 0
	override val secondsLoaded: Float
		get() = _bytesLoaded * UserInfo.downBpsInv

	private var _bytesTotal = 0
	override val secondsTotal: Float
		get() {
			return _bytesTotal * UserInfo.downBpsInv
		}

	private var _result: Any? = null
	override val result: Any
		get() = _result!!

	private var executor: ExecutorService? = null

	init {
//		httpRequest.onprogress = {
//			event ->
//			_bytesLoaded = event.loaded
//			_bytesTotal = event.total
//		}
//
//		httpRequest.onreadystatechange = {
//			if (httpRequest.readyState == XMLHttpRequestReadyState.DONE) {
//				if (httpRequest.status == 200 || httpRequest.status == 304) {
//					_result = when (responseType) {
//						ResponseType.TEXT -> httpRequest.response!! as String
//						ResponseType.BINARY -> JsByteBuffer(Uint8Array(httpRequest.response!! as ArrayBuffer))
//					}
//					success()
//				} else {
//					fail(ResponseException(httpRequest.status, httpRequest.statusText, httpRequest.response as? String ?: ""))
//				}
//			}
//		}
	}

	override fun onInvocation() {
		_responseType = requestData.responseType

		// TODO: requestData.user
		// TODO: requestData.password
		// TODO: cookies

		val url = URL(requestData.url)
		val con = url.openConnection() as HttpURLConnection
		con.requestMethod = requestData.method
		con.connectTimeout = requestData.timeout.toInt()
		for ((key, value) in requestData.headers) {
			con.setRequestProperty(key, value)
		}
		if (requestData.variables != null) {
			con.doOutput = true
			val out = DataOutputStream(con.outputStream)
			out.writeBytes(requestData.variables!!.toQueryString())
			out.flush()
			out.close()
		} else if (requestData.formData != null) {
			TODO()
//			for (item in requestData.formData!!.items) {
//
//			}
		} else if (requestData.body != null) {
			con.doOutput = true
			val out = DataOutputStream(con.outputStream)
			out.writeBytes(requestData.body!!)
			out.flush()
			out.close()
		}
		doWork({
			var error: Throwable? = null
			var result: Any? = null
			try {
				con.connect()
				val status = con.responseCode
				if (status == 200 || status == 304) {
					result = con.inputStream.bufferedReader().use { it.readText() }
				} else {
					val errorMsg = con.errorStream.bufferedReader().use { it.readText() }
					error = ResponseException(status, "", errorMsg)
				}
			} catch (e: Exception) {
				error = (e)
			} finally {
				con.disconnect()
			}
			if (error != null) throw error
			result!!
		}, {
			_result = it
			success()
		})



	}

	override fun onAborted() {
		executor?.shutdownNow()
	}

	private fun <T : Any> doWork(work: () -> T, callback: (T) -> Unit) {
		executor = async(timeDriver, work, callback, { fail(it) })
	}

	companion object : RestServiceFactory {
		override fun create(injector: Injector): MutableHttpRequest {
			return JvmHttpRequest(injector)
		}
	}
}