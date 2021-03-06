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

package com.acornui.core.request

import com.acornui.action.LoadableRo
import com.acornui.action.Loadable
import com.acornui.browser.UrlParams
import com.acornui.collection.Clearable
import com.acornui.core.di.Injector
import com.acornui.core.di.Scoped
import com.acornui.io.NativeBuffer


/**
 * A model with the necessary information to make an http request.
 * This is also used for file requests.
 * @author nbilyk
 */
data class UrlRequestData(

		var url: String = "",

		var method: String = UrlRequestMethod.GET,

		val headers: MutableMap<String, String> = HashMap(),

		var user: String = "",

		var password: String = "",

		var formData: MultipartFormData? = null,

		var variables: UrlParams? = null,

		var body: String? = null,

		var responseType: ResponseType = ResponseType.TEXT,

		/**
		 * The number of milliseconds a request can take before automatically being terminated.
		 * A value of 0 (which is the default) means there is no timeout.
		 */
		val timeout: Long = 0L
) {
}

/**
 * The possible values for UrlRequest.method
 */
object UrlRequestMethod {
	val GET: String = "GET"
	val POST: String = "POST"
	val PUT: String = "PUT"
	val DELETE: String = "DELETE"
}

enum class ResponseType {
	BINARY,
	TEXT
}

interface RestServiceFactory {

	fun create(injector: Injector): MutableHttpRequest

	companion object {
		lateinit var instance: RestServiceFactory
	}
}

interface HttpRequest : LoadableRo<Any> {

	val responseError: ResponseException?
		get() = error as? ResponseException

	val responseType: ResponseType
	val requestData: UrlRequestData

	/**
	 * If [responseType] == [ResponseType.BINARY], and [status] == [ActionStatus.SUCCESSFUL], this will be set.
	 */
	@Suppress("unchecked_cast")
	val resultBinary: NativeBuffer<Byte>
		get() {
			if (responseType != ResponseType.BINARY) throw Exception("responseType is not BINARY")
			return result as NativeBuffer<Byte>
		}

	/**
	 * If [responseType] == [ResponseType.TEXT], and [status] == [ActionStatus.SUCCESSFUL], this will be set.
	 */
	val resultText: String
		get() {
			if (responseType != ResponseType.TEXT) throw Exception("responseType is not TEXT")
			return result as String
		}
}

interface MutableHttpRequest : HttpRequest, Loadable<Any>

/**
 * Creates an Http Request.
 *
 * 	val r = createRequest()
 *	r.requestData.url = "https://httpbin.org/post"
 *	r.requestData.method = UrlRequestMethod.POST
 *	r.requestData.headers["Content-type"] = "application/json"
 *	r.requestData.body = """{"pnyrId":"kartik","vbkiId":"matrix","upuId":"underlog pizza"}"""
 *	r.succeeded.add {
 *		println("Request completed")
 *		println("Result: ${r.result}")
 *	}
 *	r.failed.add {
 *		action, status, error ->
 *		println("Request failed ${r.responseError}")
 *	}
 *	r.invoke()
 *
 * ------------------------------------------------------
 *
 *  val r = createRequest()
 *	r.requestData.url = "https://httpbin.org/post"
 *	r.requestData.method = UrlRequestMethod.POST
 *	r.requestData.variables = UrlParamsImpl().apply {
 *		append("foo", "1")
 *		append("bar", "2")
 *	}
 *	r.succeeded.add {
 *		println("Request completed")
 *		println("Result: ${r.result}")
 *	}
 *	r.failed.add {
 *		action, status, error ->
 *		println("Request failed ${r.responseError}")
 *	}
 *	r.invoke()
 *
 *
 */
fun Scoped.createRequest(): MutableHttpRequest {
	return RestServiceFactory.instance.create(injector)
}

data class HttpResponse(
		val text: String? = null,
		val data: NativeBuffer<Byte>? = null
)

open class ResponseException(val status: Int, message: String, val detail: String) : Throwable(message) {

	override fun toString(): String {
		return "ResponseException(status=$status, message=$message)"
	}
}

class MultipartFormData : Clearable {

	private val _items = ArrayList<FormDataItem>()
	val items: List<FormDataItem>
		get() = _items

	fun append(name: String, value: NativeBuffer<Byte>, filename: String? = null) {
		_items.add(ByteArrayFormItem(name, value, filename))
	}

	fun append(name: String, value: String) {
		_items.add(StringFormItem(name, value))
	}

	override fun clear() {
		_items.clear()
	}
}

/**
 * A marker interface for items that can be in the list of [MultipartFormData.items]
 */
interface FormDataItem {
	val name: String
}

class ByteArrayFormItem(
		override val name: String,
		val value: NativeBuffer<Byte>,
		val filename: String?
) : FormDataItem

class StringFormItem(
		override val name: String,
		val value: String
) : FormDataItem