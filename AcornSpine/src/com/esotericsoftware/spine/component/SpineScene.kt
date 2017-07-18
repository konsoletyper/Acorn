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

package com.esotericsoftware.spine.component

import com.acornui.action.onFailed
import com.acornui.action.onSuccess
import com.acornui.component.ComponentInit
import com.acornui.component.UiComponentImpl
import com.acornui.core.di.Owned
import com.acornui.core.di.inject
import com.acornui.core.time.onTick
import com.acornui.gl.core.GlState


/**
 * A Spine scene is a component that allows for spine skeletons to be added and rendered.
 * Created by nbilyk on 6/11/2016.
 */
class SpineScene(owner: Owned) : UiComponentImpl(owner) {

	var flipY = true

	private val glState = inject(GlState)

	private val _children = ArrayList<SkeletonComponent>()

	val children: List<SkeletonComponent>
		get() = _children

	/**
	 * If true, all animations will be paused.
	 */
	var isPaused: Boolean = false

	init {
		onTick {
			tick(it)
		}
	}

	operator fun <P : SkeletonComponent> P.unaryPlus(): P {
		addChild(_children.size, this)
		return this
	}

	operator fun <P : SkeletonComponent> P.unaryMinus(): P {
		removeChild(this)
		return this
	}

	fun addChild(child: SkeletonComponent) = addChild(_children.size, child)

	fun addChild(index: Int, child: SkeletonComponent) {
		child.skeleton.flipY = flipY
		_children.add(index, child)
	}

	fun removeChild(child: SkeletonComponent): Boolean {
		val index = _children.indexOf(child)
		if (index == -1) return false
		removeChild(index)
		return true
	}

	fun removeChild(index: Int): SkeletonComponent {
		val child = _children[index]
		_children.removeAt(index)
		return child
	}

	fun tick(stepTime: Float) {
		if (isPaused) return
		for (i in 0.._children.lastIndex) {
			_children[i].tick(stepTime)
		}
		window.requestRender()
	}

	override fun draw() {
		super.draw()
		glState.camera(camera)
		val concatenatedTransform = concatenatedTransform
		val concatenatedColorTint = concatenatedColorTint

		for (i in 0.._children.lastIndex) {
			_children[i].draw(glState, concatenatedTransform, concatenatedColorTint)
		}
	}

	//--------------------------------------------
	// Utility
	//--------------------------------------------

	fun loadSkeleton(skeletonDataPath: String, textureAtlasPath: String, skins: Array<String>? = null, onSuccess: (LoadedSkeleton) -> Unit) {
		loadSkeleton(skeletonDataPath, textureAtlasPath, skins, onSuccess, { println("Skeleton failed to load") })
	}

	/**
	 * Loads the skeleton from the specified JSON file and texture atlas. Then loads the requested skins.
	 * If no skins are requested, all skins will be loaded.
	 */
	fun loadSkeleton(skeletonDataPath: String, textureAtlasPath: String, skins: Array<String>? = null, onSuccess: (LoadedSkeleton) -> Unit, onFailed: () -> Unit) {
		val sL = skeletonLoader(skeletonDataPath, textureAtlasPath)
		sL.onSuccess {
			val loadedSkeleton = it.result
			val skinsL = if (skins == null) it.loadAllSkins() else it.loadSkins(*skins)
			skinsL.onSuccess {
				onSuccess(loadedSkeleton)
			}
			skinsL.onFailed {
				onFailed()
			}
		}
		sL.onFailed {
			onFailed()
		}
	}


	//--------------------------------------------

	override fun dispose() {
		super.dispose()

	}
}

fun Owned.spineScene(init: ComponentInit<SpineScene> = {}): SpineScene {
	val s = SpineScene(this)
	s.init()
	return s
}