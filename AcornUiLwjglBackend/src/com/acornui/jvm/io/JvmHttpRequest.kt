package com.acornui.jvm.io

import com.acornui.action.BasicAction
import com.acornui.core.UserInfo
import com.acornui.core.di.Injector
import com.acornui.core.request.*
import com.acornui.core.time.TimeDriver
import com.acornui.io.toByteArray
import com.acornui.jvm.async
import com.acornui.logging.Log
import java.io.DataOutputStream
import java.net.HttpURLConnection
import java.net.URL
import java.util.*
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

	override fun onInvocation() {
		_responseType = requestData.responseType

		// TODO: cookies

		val urlStr = if (requestData.method == UrlRequestMethod.GET && requestData.variables != null)
			requestData.url + "?" + requestData.variables!!.toQueryString() else requestData.url
		val url = URL(urlStr)
		val con = url.openConnection() as HttpURLConnection
		if (requestData.user.isNotEmpty()) {
			val userPass = "${requestData.user}:${requestData.password}"
			val basicAuth = "Basic " + Base64.getEncoder().encodeToString(userPass.toByteArray())
			con.setRequestProperty("Authorization", basicAuth)
		}
		con.requestMethod = requestData.method
		con.connectTimeout = requestData.timeout.toInt()
		for ((key, value) in requestData.headers) {
			con.setRequestProperty(key, value)
		}
		doWork({
			if (requestData.method != UrlRequestMethod.GET) {
				if (requestData.variables != null) {
					con.doOutput = true
					con.outputStream.writeTextAndClose(requestData.variables!!.toQueryString())
				} else if (requestData.formData != null) {
					con.doOutput = true
					val out = DataOutputStream(con.outputStream)
					val items = requestData.formData!!.items
					for (i in 0..items.lastIndex) {
						val item = items[i]
						if (i != 0) out.writeBytes("&")
						out.writeBytes("$item.name=")
						if (item is ByteArrayFormItem) {
							out.write(item.value.toByteArray())
						} else if (item is StringFormItem) {
							out.writeBytes(item.value)
						} else {
							Log.warn("Unknown form item type $item")
						}
					}

					out.flush()
					out.close()
				} else if (requestData.body != null) {
					con.doOutput = true
					con.outputStream.writeTextAndClose(requestData.body!!)
				}
			}

			var error: Throwable? = null
			var result: Any? = null
			try {
				con.connect()
				val status = con.responseCode
				if (status == 200 || status == 304) {
					result = when (responseType) {
						ResponseType.TEXT -> con.inputStream.readTextAndClose()
						ResponseType.BINARY -> TODO() //JvmByteBuffer(Uint8Array(httpRequest.response!! as ArrayBuffer))
					}
				} else {
					val errorMsg = con.errorStream?.readTextAndClose() ?: ""
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

