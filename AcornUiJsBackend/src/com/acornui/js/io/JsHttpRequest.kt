package com.acornui.js.io

import com.acornui.action.BasicAction
import com.acornui.core.UserInfo
import com.acornui.core.browser.ByteArrayFormItem
import com.acornui.core.browser.StringFormItem
import com.acornui.core.di.Injector
import com.acornui.core.request.*
import org.khronos.webgl.ArrayBuffer
import org.khronos.webgl.Uint8Array
import org.w3c.files.Blob
import org.w3c.xhr.FormData

class JsHttpRequest : BasicAction(), MutableHttpRequest {

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

	/**
	 * If [status] is ActionStatus.SUCCESSFUL and [responseType] == ResponseType.BINARY, this will be set.
	 */
	val resultArrayBuffer: ArrayBuffer
		get() {
			if (_responseType != ResponseType.BINARY) throw Exception("HttpRequest is not of binary type.")
			return httpRequest.response as ArrayBuffer
		}

	private val httpRequest = XMLHttpRequest()

	init {
		httpRequest.onprogress = {
			event ->
			_bytesLoaded = event.loaded
			_bytesTotal = event.total
		}

		httpRequest.onreadystatechange = {
			if (httpRequest.readyState == XMLHttpRequestReadyState.DONE) {
				if (httpRequest.status == 200 || httpRequest.status == 304) {
					_result = when (responseType) {
						ResponseType.TEXT -> httpRequest.response!! as String
						ResponseType.BINARY -> JsByteBuffer(Uint8Array(httpRequest.response!! as ArrayBuffer))
					}
					success()
				} else {
					fail(ResponseException(httpRequest.status, httpRequest.statusText, httpRequest.response as? String ?: ""))
				}
			}
		}
	}

	override fun onInvocation() {
		_responseType = requestData.responseType

		val async = true
		httpRequest.open(requestData.method, requestData.url, async, requestData.user, requestData.password)
		httpRequest.responseType = when (responseType) {
			ResponseType.TEXT -> XMLHttpRequestResponseType.TEXT
			ResponseType.BINARY -> XMLHttpRequestResponseType.ARRAY_BUFFER
		}
		httpRequest.timeout = requestData.timeout
		for ((key, value) in requestData.headers) {
			httpRequest.setRequestHeader(key, value)
		}

		if (requestData.variables != null) {
			val data = requestData.variables!!.toQueryString()
			httpRequest.send(data)
		} else if (requestData.formData != null) {
			val formData = FormData()
			for (item in requestData.formData!!.items) {
				if (item is ByteArrayFormItem) {
					formData.append(item.name, Blob(arrayOf(item.value.native)))
				} else if (item is StringFormItem) {
					formData.append(item.name, item.value)
				}
			}
			httpRequest.send(formData)
		} else if (requestData.body != null) {
			httpRequest.send(requestData.body!!)
		} else {
			httpRequest.send()
		}
	}

	override fun onAborted() {
		httpRequest.abort()
	}

	companion object : RestServiceFactory {
		override fun create(injector: Injector): MutableHttpRequest {
			return JsHttpRequest()
		}
	}
}