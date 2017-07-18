/*
 * Spine Runtimes Software License
 * Version 2.3
 *
 * Copyright (c) 2013-2015, Esoteric Software
 * All rights reserved.
 *
 * You are granted a perpetual, non-exclusive, non-sublicensable and
 * non-transferable license to use, install, execute and perform the Spine
 * Runtimes Software (the "Software") and derivative works solely for personal
 * or internal use. Without the written permission of Esoteric Software (see
 * Section 2 of the Spine Software License Agreement), you may not (a) modify,
 * translate, adapt or otherwise create derivative works, improvements of the
 * Software or develop new applications using the Software or (b) remove,
 * delete, alter or obscure any trademarks or any copyright, trademark, patent
 * or other intellectual property or proprietary rights notices on or in the
 * Software, including any copy thereof. Redistributions in binary or source
 * form must include this license and terms.
 *
 * THIS SOFTWARE IS PROVIDED BY ESOTERIC SOFTWARE "AS IS" AND ANY EXPRESS OR
 * IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
 * EVENT SHALL ESOTERIC SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
 * OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

package com.acornui.action

import com.acornui.collection.ActiveList
import com.acornui.collection.ObservableList
import com.acornui.core.Disposable

/**
 * The ActionWatch is not as cool as it sounds. It doesn't even tell time.
 * This action watches a list of child actions, changing its status based on whether or not all watched children are
 * completed.
 */
open class ActionWatch: ActionBase(), ProgressAction, Disposable {

	/**
	 * For child actions that do not implement [Progress], this value (in seconds) is used to estimate the time to
	 * complete.
	 */
	var typicalActionTime: Float = 0.001f

	init {
	}

	private var _enabled: Boolean = true

	/**
	 * If true, child status changes are watched. If false, they are ignored and this action will not change state.
	 */
	var enabled: Boolean
		get() = _enabled
		set(value) {
			if (_enabled == value) return
			_enabled = value
			if (value)
				refreshStatus()
		}

	private val _actions = ActiveList<Action>()

	/**
	 * Returns the list of observed actions.
	 */
	val actions: ObservableList<Action>
		get() {
			return _actions
		}

	/**
	 * If forgetActions is true, when an action in the queue has completed,
	 * it will be removed from the queue instead of remembered.
	 *
	 * This should be false if the watched actions may be reset.
	 * This should be true (default) if this action has a continuous set of actions being added.
	 */
	var forgetActions: Boolean = true


	/**
	 * If true, when a child action returns a status of FAILED or ABORTED, this action will fail, otherwise, failures
	 */
	var cascadeFailure: Boolean = true

	private val actionsIterator = _actions.concurrentIterator()

	/**
	 * Adds an action to the queue.
	 * Returns the added action.
	 */
	fun <T : Action> add(action: T, index: Int = _actions.size): T {
		if (forgetActions && action.hasCompleted()) return action
		if (_actions.contains(action)) throw IllegalArgumentException("The action must be removed first.")
		watchAction(action)
		_actions.add(index, action)
		refreshStatus()
		return action
	}

	/**
	 * Adds a list of actions to watch.
	 */
	fun addAll(vararg actions: Action) {
		batch {
			for (i in actions) {
				add(i)
			}
		}
	}

	/**
	 * Temporarily disables status changes while invoking the provided function. This allows for a number of calls
	 * to be made without notifying changes after each change.
	 * Changes will still be notified, but only after the [inner] method is called.
	 * Use this if you are adding or removing multiple children.
	 */
	inline fun batch(inner: () -> Unit) {
		val oldEnabled = enabled
		enabled = false
		inner()
		enabled = oldEnabled
	}

	/**
	 * Returns the index of the given action.
	 */
	fun indexOf(action: Action): Int {
		return _actions.indexOf(action)
	}

	/**
	 * Removes an action from this watch.
	 */
	fun remove(action: Action): Boolean {
		val actionIndex = indexOf(action)
		if (actionIndex == -1) return false
		removeAt(actionIndex)
		return true
	}

	/**
	 * Removes the action at [index] from the queue.
	 */
	fun removeAt(index: Int): Boolean {
		if (index >= _actions.size || index < 0) return false
		val action = _actions[index]
		_actions.removeAt(index)
		unwatchAction(action)
		refreshStatus()
		return true
	}

	/**
	 * Removes all actions from the queue.
	 */
	override fun reset() {
		for (action in _actions) {
			unwatchAction(action)
		}
		_actions.clear()
		// todo : this breaks on fail state
		refreshStatus()
	}

	private val actionStatusChangedHandler = {
		action: Action, oldStatus: ActionStatus, newStatus: ActionStatus, error: Throwable? ->
		onActionStatusChanged(action, oldStatus, newStatus, error)
		refreshStatus()
	}

	/**
	 * Adds listeners to the provided action.
	 * @param action
	 */
	private fun watchAction(action: Action) {
		action.statusChanged.add(actionStatusChangedHandler)
	}

	/**
	 * Removes listeners from the provided action.
	 * @param action
	 */
	private fun unwatchAction(action: Action) {
		action.statusChanged.remove(actionStatusChangedHandler)
	}

	private fun refreshStatus() {
		if (!_enabled) return
		if (hasCompleted()) {
			onReset()
			reset()
		}
		if (status == ActionStatus.PENDING) {
			onInvocation()
			invoke()
		}

		actionsIterator.clear()
		var completed: Boolean = true
		while (actionsIterator.hasNext()) {
			val action = actionsIterator.next()
			if (action.hasCompleted()) {
				if (cascadeFailure) {
					// If the action has failed, cascade the abort or error.
					if (action.status == ActionStatus.ABORTED) {
						onAborted()
						return abort(action.error as AbortedException)
					} else if (action.status == ActionStatus.FAILED) {
						onFailed(action.error!!)
						return fail(action.error!!)
					}
				}
				if (forgetActions) {
					// If forget actions is true, we forget actions that have completed.
					unwatchAction(action)
					actionsIterator.remove()
				}
			} else {
				completed = false
			}
		}
		if (completed) {
			onSuccess()
			success()
		}
	}

	protected open fun onActionStatusChanged(action: Action, oldStatus: ActionStatus, newStatus: ActionStatus, error: Throwable?) {
	}

	/**
	 * Returns the number of actions left that have not completed.
	 */
	val remaining: Int
		get() {
			var c = 0
			for (i in 0.._actions.lastIndex) {
				if (!_actions[i].hasCompleted()) {
					c++
				}
			}
			return c
		}

	/**
	 * The number of items in the queue.
	 */
	val size: Int
		get() {
			return _actions.size
		}

	override val secondsLoaded: Float
		get() {
			var c = 0f
			for (i in 0..actions.lastIndex) {
				val a = actions[i]
				if (a is Progress) {
					c += a.secondsLoaded
				} else {
					if (a.hasCompleted()) {
						c += typicalActionTime
					}
				}
			}
			return c
		}

	override val secondsTotal: Float
		get() {
			var c = 0f
			for (i in 0..actions.lastIndex) {
				val a = actions[i]
				if (a is Progress) {
					c += a.secondsTotal
				} else {
					c += typicalActionTime
				}
			}
			return c
		}


	/**
	 * Returns the action at the specified index.
	 * If the index is out of range (less than 0 or greater than the number of actions) null will be returned.
	 *
	 * @param index
	 * @return
	 */
	operator fun get(index: Int): Action? {
		if (index < 0 || index >= _actions.size) return null
		return _actions[index]
	}

	override fun dispose() {
		reset()
		_actions.dispose()
		actionsIterator.dispose()
	}
}

