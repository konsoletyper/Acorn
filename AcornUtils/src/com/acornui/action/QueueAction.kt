/*
 * Copyright 2014 Nicholas Bilyk
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

import com.acornui.collection.ActiveList
import com.acornui.collection.ObservableList
import com.acornui.collection.sortedInsertionIndex
import com.acornui.signal.Signal2


/**
 * An action that sequences a list of child actions. This action invokes its child actions sequentially, with up to
 * [simultaneous] children running at once.
 *
 * @author nbilyk
 */
open class QueueAction: BasicAction() {

	private val _actions = ActiveList<MutableAction>()

	/**
	 * Returns the list of controlled child actions.
	 */
	open val actions: ObservableList<Action>
		get() {
			return _actions
		}

	/**
	 * If forgetActions is true, when an action in the queue has completed,
	 * it will be removed from the queue instead of remembered.
	 *
	 * This should be false if this QueueAction is intended on being reset() and re-invoked.
	 * This should be true (default) if this QueueAction has a continuous set of actions being added.
	 */
	var forgetActions: Boolean = true

	/**
	 * If autoInvoke is true, when an action is added, if the queue is empty,
	 * it will immediately fill the current action buffer and begin.
	 */
	var autoInvoke: Boolean = false

	/**
	 * The simultaneous property determines how many actions can be in the INVOKED state at the same time.
	 */
	var simultaneous: Int = 1

	/**
	 * If true, when a child action returns a status of FAILED or ABORTED, this action will fail, aborting any
	 * other invoked children.
	 */
	var cascadeFailure: Boolean = true

	/**
	 * Dispatched when a child action has been invoked.
	 * The action handler must have the signature:
	 * (queue:QueueAction, actionInvoked:Action)
	 */
	val actionInvoked: Signal2<QueueAction, Action> = Signal2()

	/**
	 * Dispatched when a child action has been completed.
	 */
	val actionCompleted: Signal2<QueueAction, Action> = Signal2()

	private val actionsIterator = _actions.concurrentIterator()

	/**
	 * Adds an action to the queue.
	 * Returns the added action.
	 */
	open fun <T : MutableAction> add(action: T, index: Int = _actions.size): T {
		if (forgetActions && action.hasCompleted()) return action
		if (_actions.contains(action)) throw IllegalArgumentException("The action must be removed first.")
		watchAction(action)
		_actions.add(index, action)

		if (autoInvoke) {
			if (hasCompleted()) reset() // Go back to PENDING status.
			if (status == ActionStatus.PENDING) {
				invoke()
			} else {
				fillActionBuffer()
			}
		} else if (status == ActionStatus.INVOKED) {
			fillActionBuffer()
		}
		return action
	}

	open fun add(callback: () -> Unit): QueueAction {
		add(CallAction(callback))
		return this
	}

	/**
	 * Returns the index of the given action.
	 */
	open fun indexOf(action: MutableAction): Int {
		return _actions.indexOf(action)
	}

	/**
	 * Removes an action from the Queue.
	 * @return True if the action was found.
	 */
	open fun remove(action: MutableAction): Boolean {
		val actionIndex = indexOf(action)
		if (actionIndex == -1) return false
		removeAt(actionIndex)
		return true
	}

	/**
	 * Removes the action at [index] from the queue.
	 */
	open fun removeAt(index: Int): MutableAction? {
		if (index >= _actions.size || index < 0) return null
		val action = _actions[index]
		_actions.removeAt(index)
		unwatchAction(action)
		fillActionBuffer()
		return action
	}

	/**
	 * Removes all actions from the queue.
	 */
	open fun clear() {
		for (action in _actions) {
			unwatchAction(action)
		}
		_actions.clear()
	}

	protected val actionInvokedHandler: (Action) -> Unit = { action ->
		actionInvoked.dispatch(this, action)
	}

	protected val actionCompletedHandler: (Action, ActionStatus) -> Unit = { action, status ->
		fillActionBuffer()
		actionCompleted.dispatch(this, action)
	}

	/**
	 * Adds listeners to the provided action.
	 * @param action
	 */
	protected open fun watchAction(action: Action) {
		action.invoked.add(actionInvokedHandler)
		action.completed.add(actionCompletedHandler)
	}

	/**
	 * Removes listeners from the provided action.
	 * @param action
	 */
	protected open fun unwatchAction(action: Action) {
		action.invoked.remove(actionInvokedHandler)
		action.completed.remove(actionCompletedHandler)
	}

	protected fun fillActionBuffer() {
		if (status != ActionStatus.INVOKED) return
		actionsIterator.clear()
		while (actionsIterator.hasNext()) {
			val action = actionsIterator.next()
			if (action.hasCompleted()) {
				if (cascadeFailure) {
					// If the action has failed, cascade the abort or error.
					if (action.status == ActionStatus.ABORTED) {
						return abort()
					} else if (action.status == ActionStatus.FAILED) {
						return fail(action.error!!)
					}
				}
				if (forgetActions) {
					// If forget actions is true, we forget actions that have completed.
					unwatchAction(action)
					actionsIterator.remove()
				}
			}
		}

		var refill = false
		_actions.iterate {
			action ->
			if (currentActionCount() < simultaneous) {
				if (!action.hasBeenInvoked()) {
					action.invoke()
					if (action.hasCompleted()) {
						// The action completed on invocation, let the complete handler for that action call success()
						refill = true
					}
				}
				true
			} else {
				false
			}
		}
		if (!refill && remaining == 0) {
			success()
		}
	}

	/**
	 * Returns the number of simultaneous actions currently running.
	 * The queue will run in parallel up to the [simultaneous]  property.
	 * Cases this number may exceed the set simultaneous property is if
	 * the simultaneous property changes, or if actions are invoked outside of this queue.
	 * @return
	 */
	fun currentActionCount(): Int {
		var c = 0
		for (i in 0.._actions.lastIndex) {
			if (_actions[i].isRunning()) {
				c++
			}
		}
		return c
	}

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
	open val size: Int
		get() {
			return _actions.size
		}


	/**
	 * Returns the action at the specified index.
	 * If the index is out of range (less than 0 or greater than the number of actions) null will be returned.
	 *
	 * @param index
	 * @return
	 */
	open operator fun get(index: Int): MutableAction? {
		if (index < 0 || index >= _actions.size) return null
		return _actions[index]
	}

	override fun onAborted() {
		_actions.iterate {
			if (it.status == ActionStatus.INVOKED) {
				it.abort()
			}
			true
		}
	}

	override fun onFailed(error: Throwable) {
		_actions.iterate {
			if (it.status == ActionStatus.INVOKED) {
				it.abort()
			}
			true
		}
	}

	override fun onReset() {
		for (action in _actions) {
			action.reset()
		}
	}

	override fun onInvocation() {
		fillActionBuffer()
	}


	override fun dispose() {
		super.dispose()
		clear()
		actionCompleted.dispose()
		actionInvoked.dispose()
		_actions.dispose()
		actionsIterator.dispose()
	}
}

/**
 * Creates an action that will invoke a list of other actions sequentially.
 */
fun queue(vararg actions: MutableAction): QueueAction {
	val queueAction = QueueAction()
	for (action in actions) {
		queueAction.add(action)
	}
	return queueAction
}

/**
 * Creates an action that will invoke a list of other actions simultaneously.
 */
fun group(vararg actions: MutableAction): QueueAction {
	val queueAction = MultiAction()
	for (action in actions) {
		queueAction.add(action)
	}
	return queueAction
}

/**
 * MultiAction is an action that will invoke a list of other actions simultaneously.
 *
 * @author nbilyk
 */
open class MultiAction : QueueAction() {
	init {
		simultaneous = 99999999
	}
}

/**
 * The [PriorityQueueAction] wraps a QueueAction, enforcing added actions to have a priority.
 * Higher values for priority will be invoked before lower values.
 */
open class PriorityQueueAction(
		private val queue: QueueAction = QueueAction()
) : DelegateAction(queue) {

	val actions = queue.actions

	/**
	 * A map of all the actions and their associated priorities.
	 */
	protected val prioritiesMap: HashMap<MutableAction, Float> = HashMap()

	/**
	 * If forgetActions is true, when an action in the queue has completed,
	 * it will be removed from the queue instead of remembered.
	 *
	 * This should be false if this action is intended on being reset() and re-invoked.
	 * This should be true (default) if this action has a continuous set of actions being added.
	 */
	var forgetActions: Boolean
		get(): Boolean = queue.forgetActions
		set(value) {
			queue.forgetActions = value
		}

	/**
	 * If autoInvoke is true, when an action is added, if the queue is empty,
	 * it will immediately fill the current action buffer and begin.
	 */
	var autoInvoke: Boolean
		get(): Boolean = queue.autoInvoke
		set(value) {
			queue.autoInvoke = value
		}

	/**
	 * The simultaneous property determines how many actions can be in the INVOKED state at the same time.
	 */
	var simultaneous: Int
		get(): Int = queue.simultaneous
		set(value) {
			queue.simultaneous = value
		}

	/**
	 * If true, when a child action returns a status of FAILED or ABORTED, this QueueAction will fail, aborting any
	 * other invoked children.
	 */
	var cascadeFailure: Boolean
		get(): Boolean = queue.cascadeFailure
		set(value) {
			queue.cascadeFailure = value
		}

	/**
	 * Dispatched when a child action has been invoked.
	 * The action handler must have the signature:
	 * (queue:QueueAction, currentAction:Action)
	 */
	val next: Signal2<QueueAction, Action>
		get() = queue.actionInvoked


	private val actionRemovedHandler = {
		index: Int, oldAction: Action ->
		prioritiesMap.remove(oldAction)
		Unit
	}

	private val actionComparator = {
		o1: Action?, o2: Action? ->
		if (o1 == null && o2 == null) 0
		else if (o1 == null) -1
		else if (o2 == null) 1
		else {
			val value1 = prioritiesMap[o1]!!
			val value2 = prioritiesMap[o2]!!
			value2.compareTo(value1) // A higher priority value should be first in the list.
		}
	}

	init {
		actions.removed.add(actionRemovedHandler)
	}

	open fun add(action: MutableAction, priority: Float = 0f): PriorityQueueAction {
		if (forgetActions && action.hasCompleted()) return this
		prioritiesMap[action] = priority
		val index = actions.sortedInsertionIndex(action, actionComparator)
		queue.add(action, index)
		return this
	}

	/**
	 * Removes an action from the Queue.
	 */
	open fun remove(action: MutableAction): Boolean {
		prioritiesMap.remove(action)
		return queue.remove(action)
	}

	open fun clear() {
		queue.dispose()
		prioritiesMap.clear()
	}

	override fun dispose() {
		super.dispose()
		actions.removed.remove(actionRemovedHandler)
	}
}