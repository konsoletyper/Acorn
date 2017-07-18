/*
 * Copyright 2016 Nicholas Bilyk
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

import com.acornui.core.Disposable

/**
 * A [ActionDecorator] mirrors the status of a given target [ResultAction], invoking a [decorator] wrapper on the
 * target's result.
 */
open class ActionDecorator<T, R>(

		/**
		 * The target action to wrap. The status of this decorator will match the target, and on success
		 * apply the given [decorator], providing that as the new result.
		 */
		private val target: ResultAction<T>,

		/**
		 * The decorator to apply to the wrapped target.
		 */
		private val decorator: Decorator<T, R>

) : ActionBase(), ResultAction<R>, Disposable {

	var _result: R? = null

	override val result: R
		get() = _result ?: throw Exception("This action is not yet completed.")

	private val targetStatusChangedHandler = {
		_: Action, _: ActionStatus, status: ActionStatus, error: Throwable? ->
		internalSetStatus(status, error)
	}

	init {
		target.statusChanged.add(targetStatusChangedHandler)
		if (target.hasBeenInvoked())
			internalSetStatus(ActionStatus.INVOKED)
		if (target.hasCompleted()) {
			internalSetStatus(target.status, target.error)
		}
	}

	override fun onSuccess() {
		_result = decorator.decorate(target.result)
	}

	override fun dispose() {
		super.dispose()
		target.statusChanged.remove(targetStatusChangedHandler)
	}
}

/**
 * An ActionDecorator that also provides progress.
 */
open class LoadableDecorator<T, R>(
		private val loadableTarget: Loadable<T>,

		/**
		 * The decorator to apply to the wrapped target.
		 */
		decorator: Decorator<T, R>,

		/**
		 * The number of seconds it is estimated to apply the decorator function to the result.
		 */
		private val estimatedDecorationTime: Float = 0.001f
) : ActionDecorator<T, R>(loadableTarget, decorator), Loadable<R> {

	override val secondsLoaded: Float
		get() {
			return loadableTarget.secondsLoaded + if (hasCompleted()) estimatedDecorationTime else 0f
		}
	override val secondsTotal: Float
		get() = loadableTarget.secondsTotal + estimatedDecorationTime
}