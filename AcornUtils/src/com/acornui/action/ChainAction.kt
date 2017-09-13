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

package com.acornui.action

abstract class ChainActionBase<R>(vararg dependencies: Action) : ResultAction<R>, InputAction<R>, BasicAction() {

	private var _result: R? = null

	protected val waitFor: Action = group(*dependencies)

	override val result: R
		get(): R = _result!!

	init {
		waitFor.onFailed {
			if (it is AbortedException) abort(it)
			else fail(it)
		}
	}

	override fun onSuccess() {
		if (_result == null)
			throw Exception("Use success(result: R) instead of success().")
	}

	override fun success(result: R) {
		_result = result
		setStatus(ActionStatus.SUCCESSFUL)
	}

	override fun onInvocation() {
		if (!waitFor.hasBeenInvoked())
			waitFor()
	}
}

fun <R> chain(call: InputAction<R>.() -> Unit): ResultAction<R> {
	return object : ChainActionBase<R>() {
		override fun onInvocation() {
			call()
		}
	}
}

fun <P1, R> chain(d1: ResultAction<P1>, call: InputAction<R>.(p1: P1) -> Unit): ResultAction<R> {
	return object : ChainActionBase<R>(d1) {
		override fun onInvocation() {
			super.onInvocation()
			waitFor.onSuccess {
				call(d1.result)
			}
		}
	}
}

fun <P1, P2, R> chain(d1: ResultAction<P1>, d2: ResultAction<P2>, call: InputAction<R>.(p1: P1, p2: P2) -> Unit): ResultAction<R> {
	return object : ChainActionBase<R>(d1, d2) {
		override fun onInvocation() {
			super.onInvocation()
			waitFor.onSuccess {
				call(d1.result, d2.result)
			}
		}
	}
}

fun <P1, P2, P3, R> chain(d1: ResultAction<P1>, d2: ResultAction<P2>, d3: ResultAction<P3>, call: InputAction<R>.(p1: P1, p2: P2, p3: P3) -> Unit): ResultAction<R> {
	return object : ChainActionBase<R>(d1, d2, d3) {
		override fun onInvocation() {
			super.onInvocation()
			waitFor.onSuccess {
				call(d1.result, d2.result, d3.result)
			}
		}
	}
}

fun <P1, P2, P3, P4, R> chain(d1: ResultAction<P1>, d2: ResultAction<P2>, d3: ResultAction<P3>, d4: ResultAction<P4>, call: InputAction<R>.(p1: P1, p2: P2, p3: P3, p4: P4) -> Unit): ResultAction<R> {
	return object : ChainActionBase<R>(d1, d2, d3, d4) {
		override fun onInvocation() {
			super.onInvocation()
			waitFor.onSuccess {
				call(d1.result, d2.result, d3.result, d4.result)
			}
		}
	}
}

fun <P1, P2, P3, P4, P5, R> chain(d1: ResultAction<P1>, d2: ResultAction<P2>, d3: ResultAction<P3>, d4: ResultAction<P4>, d5: ResultAction<P5>, call: InputAction<R>.(p1: P1, p2: P2, p3: P3, p4: P4, p5: P5) -> Unit): ResultAction<R> {
	return object : ChainActionBase<R>(d1, d2, d3, d4, d5) {
		override fun onInvocation() {
			super.onInvocation()
			waitFor.onSuccess {
				call(d1.result, d2.result, d3.result, d4.result, d5.result)
			}
		}
	}
}