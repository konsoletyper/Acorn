/*
 * Copyright 2014 Nicholas Bilyk
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
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

import com.acornui.collection.poll
import com.acornui.core.Disposable
import com.acornui.signal.*

/**
 * The base class for actions. This does not expose an API that allows for mutating the action.
 */
abstract class ActionBase : Action, Disposable {

	protected val _statusChanged: Signal4<Action, ActionStatus, ActionStatus, Throwable?> = Signal4()
	protected val _completed: Signal2<Action, ActionStatus> = Signal2()
	protected val _invoked: Signal1<Action> = Signal1()
	protected val _succeeded: Signal1<Action> = Signal1()
	protected val _failed: Signal3<Action, ActionStatus, Throwable> = Signal3()

	override final val statusChanged: Signal<(Action, ActionStatus, ActionStatus, Throwable?) -> Unit>
		get() = _statusChanged

	override final val completed: Signal<(Action, ActionStatus) -> Unit>
		get() = _completed

	override final val invoked: Signal<(Action) -> Unit>
		get() = _invoked

	override final val succeeded: Signal<(Action) -> Unit>
		get() = _succeeded

	override final val failed: Signal<(Action, ActionStatus, Throwable) -> Unit>
		get() = _failed

	private var _status: ActionStatus = ActionStatus.PENDING
	private var _error: Throwable? = null

	private var _statusChanging = false
	private val _pendingStatuses = ArrayList<Pair<ActionStatus, Throwable?>>()

	override val status: ActionStatus
		get() = _status

	override val error: Throwable?
		get() = _error

	protected fun internalSetStatus(value: ActionStatus) {
		if (value == ActionStatus.FAILED || value == ActionStatus.ABORTED) throw Exception("If the new status is FAILED or ABORTED, an Exception must be provided.")
		internalSetStatus(value, error = null)
	}

	/**
	 * Changes this action's status.
	 * When the status changes, the corresponding protected onXxx handlers will be invoked, then the public signal
	 * will be dispatched. These happen in the order the status was changed, even if the status was changed in response
	 * to a handler invocation.
	 */
	protected fun internalSetStatus(value: ActionStatus, error: Throwable?) {
		if (_status == value) return
		var oldStatus = _status
		if (!oldStatus.mayTransitionTo(value))
			throw Exception("May not transition from: $oldStatus to $value")

		_status = value
		_error = error

		_pendingStatuses.add(Pair(value, error))
		if (!_statusChanging) {
			_statusChanging = true
			while (_pendingStatuses.isNotEmpty()) {
				val (newStatus, newError) = _pendingStatuses.poll()
				_setStatus(oldStatus, newStatus, newError)
				oldStatus = newStatus
			}
			_statusChanging = false
		}
	}

	private fun _setStatus(oldStatus: ActionStatus, newStatus: ActionStatus, newError: Throwable? = null) {
		when (newStatus) {
			ActionStatus.PENDING -> onReset()
			ActionStatus.INVOKED -> onInvocation()
			ActionStatus.SUCCESSFUL -> onSuccess()
			ActionStatus.FAILED -> onFailed(newError!!)
			ActionStatus.ABORTED -> onAborted()
		}
		_statusChanged.dispatch(this, oldStatus, newStatus, newError)
		fireHelperSignals(newStatus, newError)
	}

	protected fun fireHelperSignals(status: ActionStatus, newError: Throwable?) {
		// Fire helper signals:
		if (status > ActionStatus.INVOKED) {
			_completed.dispatch(this, status)
			if (status == ActionStatus.SUCCESSFUL) {
				_succeeded.dispatch(this)
			} else {
				_failed.dispatch(this, status, newError!!)
			}
		} else {
			if (status == ActionStatus.INVOKED) {
				_invoked.dispatch(this)
			}
		}
	}

	/**
	 * Changes this action's status to [ActionStatus.INVOKED]
	 */
	protected open fun invoke() = internalSetStatus(ActionStatus.INVOKED)

	/**
	 * Changes this action's status to [ActionStatus.SUCCESSFUL]
	 */
	protected open fun success() = internalSetStatus(ActionStatus.SUCCESSFUL)

	/**
	 * Changes this action's status to [ActionStatus.FAILED]
	 */
	protected open fun fail(e: Throwable) = internalSetStatus(ActionStatus.FAILED, e)

	/**
	 * If this action has been invoked, this will change its status to [ActionStatus.ABORTED].
	 */
	protected open fun abort(e: AbortedException) {
		if (status == ActionStatus.INVOKED)
			internalSetStatus(ActionStatus.ABORTED, e)
	}

	/**
	 * Override this method to have custom behavior for a specific type of action.
	 */
	protected open fun onInvocation() {
	}

	/**
	 * Invoked just before the status flag is about to be marked as SUCCESSFUL.
	 */
	protected open fun onSuccess() {
	}

	/**
	 * Invoked just before the status flag is about to be marked as FAILED.
	 * @param error
	 */
	protected open fun onFailed(error: Throwable) {
	}

	/**
	 * Invoked before the aborted signal.
	 */
	protected open fun onAborted() {
	}

	/**
	 * @inheritDoc
	 */
	protected open fun reset() {
		internalSetStatus(ActionStatus.PENDING)
	}

	/**
	 * Invoked just before the status flag is about to be marked as PENDING
	 */
	protected open fun onReset() {
	}

	//---------------------------------
	// IDestructible
	//---------------------------------

	/**
	 * @inheritDoc
	 */
	override fun dispose() {
		if (status == ActionStatus.INVOKED)
			internalSetStatus(ActionStatus.ABORTED, DisposedException)
		_statusChanged.dispose()
		_completed.dispose()
		_invoked.dispose()
		_succeeded.dispose()
		_failed.dispose()
	}
}

/**
 * The simplest implementation of [MutableAction]
 *
 * @author nbilyk
 */
open class BasicAction : ActionBase(), MutableAction {

	/**
	 * @inheritDoc
	 */
	override final fun invoke() = internalSetStatus(ActionStatus.INVOKED)

	/**
	 * Sets this action as having completed successfully.
	 */
	override final fun success() = internalSetStatus(ActionStatus.SUCCESSFUL)

	/**
	 * Trigger an erred event and set the error value.
	 */
	override final fun fail(e: Throwable) = internalSetStatus(ActionStatus.FAILED, e)

	/**
	 * @inheritDoc
	 */
	override final fun abort(e: AbortedException) {
		if (status == ActionStatus.INVOKED)
			internalSetStatus(ActionStatus.ABORTED, e)
	}

	/**
	 * @inheritDoc
	 */
	override final fun reset() = super.reset()

	override final fun setStatus(value: ActionStatus) {
		super.internalSetStatus(value)
	}

	/**
	 * Changes this action's status.
	 * When the status changes, the corresponding protected onXxx handlers will be invoked, then the public signal
	 * will be dispatched. These happen in the order the status was changed, even if the status was changed in response
	 * to a handler invocation.
	 */
	override final fun setStatus(value: ActionStatus, error: Throwable?) {
		super.internalSetStatus(value, error)
	}

}