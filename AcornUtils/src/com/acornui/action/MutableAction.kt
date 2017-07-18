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

@file:Suppress("UNUSED_ANONYMOUS_PARAMETER")

package com.acornui.action

import com.acornui.core.Disposable
import com.acornui.signal.Signal


/**
 * The status of an action.
 */
enum class ActionStatus(vararg private val allowedNext: String) {

	/**
	 * The action has not been invoked yet. All actions will start on this status.
	 */
	PENDING("INVOKED"),

	/**
	 * The action has been invoked. This phase may be skipped if the action status changes immediately on invocation.
	 */
	INVOKED("SUCCESSFUL", "FAILED", "ABORTED", "PENDING"),

	/**
	 * The action has completed successfully.
	 */
	SUCCESSFUL("PENDING"),

	/**
	 * The action has failed. The error property will be set.
	 */
	FAILED("PENDING"),

	/**
	 * The action has been aborted.
	 */
	ABORTED("PENDING");

	fun mayTransitionTo(next: ActionStatus): Boolean {
		return allowedNext.indexOf(next.name) != -1
	}

}

// TODO: Simplify by removing aborted status and replace with an AbortedException

/**
 * An [Action] is an object with a single state, represented via [ActionStatus]
 */
interface Action {

	/**
	 * Dispatched when the status flag has changed.
	 * The handler should have the signature:
	 * (action:Action, oldStatus:ActionStatus, newStatus:ActionStatus)
	 *
	 * @see ActionStatus
	 */
	val statusChanged: Signal<(Action, ActionStatus, ActionStatus, Throwable?) -> Unit>

	/**
	 * The current status of the action.
	 * @see ActionStatus
	 */
	val status: ActionStatus

	/**
	 * The error of the action if there is one. This is guaranteed to be set if this Action's status is
	 * [ActionStatus.FAILED] or [ActionStatus.ABORTED]. If the status is [ActionStatus.ABORTED], the error will be
	 * an [AbortedException] object.
	 * Use the failed signal to handle when an action has aborted or erred.
	 */
	val error: Throwable?

	/**
	 * A convenience signal.
	 * Dispatched when the action has been given a status of:
	 * SUCCESSFUL, FAILED, or ABORTED
	 *
	 * The handler should have the signature:
	 * (action:Action, status:ActionStatus)
	 *
	 * @see ActionStatus
	 */
	val completed: Signal<(Action, ActionStatus) -> Unit>

	/**
	 * True if the action's status is currently SUCCESSFUL, ABORTED, or FAILED
	 */
	fun hasCompleted(): Boolean {
		return when (status) {
			ActionStatus.SUCCESSFUL,
			ActionStatus.ABORTED,
			ActionStatus.FAILED -> true
			else -> false
		}
	}

	/**
	 * A convenience signal.
	 * Dispatched when the action has been given a status of:
	 * ActionStatus.INVOKED
	 *
	 * The handler should have the signature:
	 * (action:Action)
	 *
	 * @see ActionStatus
	 */
	val invoked: Signal<(Action) -> Unit>

	/**
	 * True if the action's status is not PENDING.
	 */
	fun hasBeenInvoked(): Boolean {
		return (status != ActionStatus.PENDING)
	}

	fun isRunning(): Boolean {
		return hasBeenInvoked() && !hasCompleted()
	}

	/**
	 * Dispatched when the action has been given a status of:
	 * ActionStatus.SUCCESSFUL
	 *
	 * The handler should have the signature:
	 * (action:Action)
	 *
	 * @see ActionStatus
	 */
	val succeeded: Signal<(Action) -> Unit>

	/**
	 * True if the action's status is SUCCESSFUL.
	 */
	fun hasSucceeded(): Boolean {
		return status == ActionStatus.SUCCESSFUL
	}

	/**
	 * Dispatched when the action has been given a status of:
	 * ActionStatus.FAILED
	 * ActionStatus.ABORTED
	 */
	val failed: Signal<(Action, ActionStatus, Throwable) -> Unit>

	/**
	 * True if the action's status is ABORTED or FAILED.
	 */
	fun hasFailed(): Boolean {
		val s = status
		return s == ActionStatus.FAILED || s == ActionStatus.ABORTED
	}

}

/**
 * A [MutableAction] is an [Action] that exposes methods to change its current state.
 */
interface MutableAction : Action, Disposable {

	fun abort() = abort(UserAborted)

	/**
	 * Aborts this action if this action is in the [ActionStatus.INVOKED] state.
	 * The [error] property will be a [UserAborted] exception.
	 */
	fun abort(e: AbortedException)

	/**
	 * Fails the action.
	 * This will throw an error if this action's status is not [ActionStatus.INVOKED].
	 * @param e The exception to set as the error property.
	 */
	fun fail(e: Throwable)

	/**
	 * Invokes the action.
	 * This will throw an error if this action's status is not [ActionStatus.PENDING].
	 */
	operator fun invoke()

	/**
	 * Marks the action as successful.
	 * This will throw an error if this action's status is not [ActionStatus.INVOKED].
	 */
	fun success()

	/**
	 * Resets the action. This will set it back to its original state and allow it to be invoked again.
	 */
	fun reset()

	fun setStatus(value: ActionStatus) {
		if (value == ActionStatus.FAILED) throw Exception("If the new status is FAILED, an Exception must be provided.")
		setStatus(value, error = null)
	}

	/**
	 * Changes this action's status.
	 */
	fun setStatus(value: ActionStatus, error: Throwable?)

}

/**
 * Chains an action to be called after this action succeeds.
 * If this action already has a status of successful, the chained action will be invoked immediately.
 * The chained action will be called at most once. That is, if this action succeeds, is reset, then succeeds again,
 * only the first success will invoke the provided chained action.
 */
fun Action.onSuccess(chained: MutableAction) {
	if (hasSucceeded()) chained()
	else succeeded.add({ chained() }, true)
}

/**
 * Chains a method to be called after this action succeeds.
 * If this action already has a status of successful, the chained action will be invoked immediately.
 * The chained action will be called at most once. That is, if this action succeeds, is reset, then succeeds again,
 * only the first success will invoke the provided chained action.
 *
 * This is similar to the Promise-style then()
 */
fun <T : Action> T.onSuccess(chained: (action: T) -> Unit) {
	if (hasSucceeded()) chained(this)
	else succeeded.add({ chained(this) }, true)
}

/**
 * Chains a method to be called after this action fails.
 * If this action already has a status of FAILED or ABORTED, the chained action will be invoked immediately.
 * The chained action will be called at most once. That is, if this action fails, is reset, then fails again,
 * only the first fail will invoke the provided chained action.
 */
fun Action.onFailed(chained: MutableAction) {
	if (hasFailed()) chained()
	else failed.add({ action, status, error -> chained() }, true)
}

fun Action.onFailed(handler: (e: Throwable) -> Unit) {
	if (hasFailed()) handler(error!!)
	else failed.add({ action, status, error -> handler(error) }, true)
}

open class AbortedException(message: String) : Exception(message)

object UserAborted : AbortedException("User aborted.")
object DisposedException : AbortedException("Action disposed.")