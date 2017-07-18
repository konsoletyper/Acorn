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

@file:Suppress("UNUSED_ANONYMOUS_PARAMETER")

package com.acornui.action

/**
 * An action that wraps one other action.
 * Status changes to this action are pushed to the wrapped action, and status changes on the
 * wrapped action are matched by this delegate.
 *
 * Take for example [PriorityQueueAction]. The priority queue cannot be an extension of [QueueAction]
 * because the APIs for [QueueAction] are all index based instead of priority based. So instead we
 * wrap the queue action, and provide alternate add methods that require a priority. The action behavior
 * otherwise remains the same.
 *
 * @author nbilyk
 */
open class DelegateAction(initialTarget: MutableAction? = null) : BasicAction() {

	private var _target: MutableAction? = null

	private var isResponse: Boolean = false

	private val targetStatusChangedHandler = {
		action: Action, oldStatus: ActionStatus, status: ActionStatus, error: Throwable? ->
		isResponse = true
		// If the target's status has changed, match it.
		internalSetStatus(status, error)
		isResponse = false
	}

	/**
	 * Changes the target this action delegates to. Both this delegate and the target action must be status PENDING.
	 */
	protected var target: MutableAction?
		get() {
			return _target
		}
		set(value) {
			if (_target == value) return
			_target?.statusChanged?.remove(targetStatusChangedHandler)
			_target = value
			_target?.statusChanged?.add(targetStatusChangedHandler)
			pushToTarget(status, error)
		}

	init {
		statusChanged.add({
			// If this action's status has changed externally, change the target's status.
			_, _, newStatus, error: Throwable? ->
			pushToTarget(newStatus, error)
		})
		target = initialTarget
	}

	private fun pushToTarget(newStatus: ActionStatus, error: Throwable?) {
		if (isResponse) return
		val t = _target
		if (t != null) {
			when (newStatus) {
				ActionStatus.PENDING -> t.reset()
				ActionStatus.INVOKED -> {
					if (!t.hasBeenInvoked()) t.invoke()
					if (t.hasCompleted() && !hasCompleted()) {
						isResponse = true
						// When this delegate has been invoked, if the target has already completed, update to match.
						if (t.hasSucceeded()) success()
						else if (t.status == ActionStatus.FAILED) fail(t.error!!)
						else abort()
						isResponse = false
					}
				}
				ActionStatus.FAILED -> {
					if (t.hasBeenInvoked() && !t.hasCompleted()) t.fail(error!!)
				}
				ActionStatus.ABORTED -> {
					if (t.hasBeenInvoked() && !t.hasCompleted()) t.abort()
				}
				ActionStatus.SUCCESSFUL -> {
				}
			}
		}
	}

	/**
	 * Disposing a delegate action does not dispose its target, but merely detaches from the target.
	 */
	override fun dispose() {
		target = null
		super.dispose()
	}
}