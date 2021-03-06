package com.acornui

import com.acornui.component.Stage
import com.acornui.component.UiComponent
import com.acornui.component.stage
import com.acornui.core.ancestry
import com.acornui.core.parentWalk
import com.acornui.core.time.callLater
import com.acornui.math.*


fun debugWhyCantSee(target: UiComponent) {
	target.callLater({canSee(target)})
}

private fun canSee(target: UiComponent, print: Boolean = true): Boolean {
	target.stage.validate()
	var canSee = true

	target.parentWalk {
		if (!it.visible) {
			if (print) println("${debugFullPath(it)} is not visible")
			canSee = false
		}
		if (it.alpha <= 0.1f) {
			if (print) println("${debugFullPath(it)} has low opacity")
			canSee = false
		}
		if (it.width <= 4f) {
			if (print) println("${debugFullPath(it)} has width ${it.width}")
			canSee = false
		}
		if (it.height <= 4f) {
			if (print) println("${debugFullPath(it)} has height ${it.height}")
			canSee = false
		}
		if (it !is Stage) {
			if (it.parent == null) {
				if (print) println("${debugFullPath(it)} is not on the stage")
				canSee = false
			}
		}
		true
	}
	canSee = isInBounds(target, print) && canSee
	if (print && canSee) println("Unknown reason for invisibility.")
	return canSee
}

/**
 * Returns true if the element isn't out of the bounds of any of its ancestors.
 */
private fun isInBounds(target: UiComponent, print: Boolean): Boolean {
	var canSee = true
	val topLeftGlobal = target.localToGlobal(Vector3(0f, 0f))
	val topRightGlobal = target.localToGlobal(Vector3(target.width, 0f))
	val bottomRightGlobal = target.localToGlobal(Vector3(target.width, target.height))
	val bottomLeftGlobal = target.localToGlobal(Vector3(0f, target.height))
	val topLeftLocal = Vector3()
	val topRightLocal = Vector3()
	val bottomRightLocal = Vector3()
	val bottomLeftLocal = Vector3()

	target.parentWalk {
		if (it == target) {
			true
		} else {
			it.globalToLocal(topLeftLocal.set(topLeftGlobal))
			it.globalToLocal(topRightLocal.set(topRightGlobal))
			it.globalToLocal(bottomRightLocal.set(bottomRightGlobal))
			it.globalToLocal(bottomLeftLocal.set(bottomLeftGlobal))
			val left = minOf4(topLeftLocal.x, topRightLocal.x, bottomRightLocal.x, bottomRightLocal.x)
			val top = minOf4(topLeftLocal.y, topRightLocal.y, bottomRightLocal.y, bottomRightLocal.y)
			val right = maxOf4(topLeftLocal.x, topRightLocal.x, bottomRightLocal.x, bottomRightLocal.x)
			val bottom = maxOf4(topLeftLocal.y, topRightLocal.y, bottomRightLocal.y, bottomRightLocal.y)

			if (right < 0f) {
				if (print) println("${debugFullPath(target)} is offscreen left for parent ${debugFullPath(it)}: $right")
				canSee = false
			}
			if (bottom < 0f) {
				if (print) println("${debugFullPath(target)} is offscreen top for parent ${debugFullPath(it)}: $bottom")
				canSee = false
			}
			if (left > it.width) {
				if (print) println("${debugFullPath(target)} is offscreen right for parent ${debugFullPath(it)}: $left > ${it.width}")
				canSee = false
			}
			if (top > it.height) {
				if (print) println("${debugFullPath(target)} is offscreen bottom for parent ${debugFullPath(it)}: $top > ${it.height}")
				canSee = false
			}
			canSee
		}
	}

	return canSee
}

fun debugFullPath(target: UiComponent): String {
	val ancestry = target.ancestry(ArrayList())
	ancestry.reverse()
	return ancestry.joinToString(".")
}