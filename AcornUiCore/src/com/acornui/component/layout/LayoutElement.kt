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

package com.acornui.component.layout

import com.acornui.math.*

interface LayoutElementRo : BasicLayoutElementRo, TransformableRo {

	/**
	 * Returns true if visible and the includeInLayout flag is true. If this is false, this layout element will not
	 * be included in layout algorithms.
	 */
	val shouldLayout: Boolean

	/**
	 * Given a canvas position, casts a ray in the direction of the camera, and returns true if that ray intersects
	 * with this component. This will always return false if this element is not active (on the stage)
	 * @param canvasX
	 * @param canvasY
	 */
	fun containsCanvasPoint(canvasX: Float, canvasY: Float): Boolean

	/**
	 * Returns true if this primitive intersects with the provided ray (in world coordinates)
	 */
	fun intersectsGlobalRay(globalRay: RayRo): Boolean {
		val v = Vector3.obtain()
		val ret = intersectsGlobalRay(globalRay, v)
		v.free()
		return ret
	}

	/**
	 * Returns true if this primitive intersects with the provided ray (in world coordinates)
	 * If there was an intersection, the intersection vector will be set to the intersection point.
	 *
	 * @param globalRay The ray (in world coordinates) to cast.
	 * @return Returns true if the local ray intersects with the bounding box of this layout element.
	 */
	fun intersectsGlobalRay(globalRay: RayRo, intersection: Vector3): Boolean {
		val bounds = bounds
		val topLeft = Vector3.obtain()
		val topRight = Vector3.obtain()
		val bottomRight = Vector3.obtain()
		val bottomLeft = Vector3.obtain()
		topLeft.clear()
		topRight.set(bounds.width, 0f, 0f)
		bottomRight.set(bounds.width, bounds.height, 0f)
		bottomLeft.set(0f, bounds.height, 0f)
		localToGlobal(topLeft)
		localToGlobal(topRight)
		localToGlobal(bottomRight)
		localToGlobal(bottomLeft)

		val intersects = globalRay.intersects(topLeft, topRight, bottomRight, intersection) ||
				globalRay.intersects(topLeft, bottomLeft, bottomRight, intersection)

		topLeft.free()
		topRight.free()
		bottomRight.free()
		bottomLeft.free()
		return intersects
	}

	/**
	 * Returns the measured size constraints, bound by the explicit size constraints.
	 */
	val sizeConstraints: SizeConstraintsRo

	/**
	 * Returns the explicit size constraints.
	 */
	val explicitSizeConstraints: SizeConstraintsRo

	/**
	 * Returns the measured minimum width.
	 */
	val minWidth: Float?

	/**
	 * Returns the measured minimum height.
	 */
	val minHeight: Float?

	/**
	 * Returns the measured maximum width.
	 */
	val maxWidth: Float?

	/**
	 * Returns the maximum measured height.
	 */
	val maxHeight: Float?
}

fun LayoutElementRo.clampWidth(value: Float?): Float? {
	return sizeConstraints.width.clamp(value)
}

fun LayoutElementRo.clampHeight(value: Float?): Float? {
	return sizeConstraints.height.clamp(value)
}

/**
 * A LayoutElement is a Transformable component that can be used in layout algorithms.
 * It has features responsible for providing explicit dimensions, and returning measured dimensions.
 * @author nbilyk
 */
interface LayoutElement : LayoutElementRo, BasicLayoutElement, Transformable {

	/**
	 * Sets the explicit minimum width.
	 */
	fun minWidth(value: Float?)

	/**
	 * Sets the explicit minimum height.
	 */
	fun minHeight(value: Float?)

	/**
	 * Sets the maximum measured width.
	 */
	fun maxWidth(value: Float?)

	/**
	 * Sets the maximum measured height.
	 */
	fun maxHeight(value: Float?)

}

interface BasicLayoutElementRo : SizableRo, PositionableRo {

	val right: Float
		get() = x + width

	val bottom: Float
		get() = y + height

	/**
	 * The layout data to be used in layout algorithms.
	 * Most layout containers have a special layout method that statically types the type of
	 * layout data that a component should have.
	 */
	val layoutData: LayoutData?
}

interface BasicLayoutElement : BasicLayoutElementRo, Sizable, Positionable {

	/**
	 * The layout data to be used in layout algorithms.
	 * Most layout containers have a special layout method that statically types the type of
	 * layout data that a component should have.
	 */
	override var layoutData: LayoutData?
}

interface SizableRo {
	/**
	 * Returns the measured width.
	 * If layout is invalid, this will invoke a layout validation.
	 */
	val width: Float
		get() = bounds.width

	/**
	 * Returns the measured height.
	 * If layout is invalid, this will invoke a layout validation.
	 */
	val height: Float
		get() = bounds.height

	/**
	 * The measured bounds of this component.
	 */
	val bounds: BoundsRo

	/**
	 * The explicit width, as set by width(value)
	 * Typically one would use [width] in order to retrieve the explicit or measured width.
	 */
	val explicitWidth: Float?

	/**
	 * The explicit height, as set by height(value)
	 * Typically one would use [height] in order to retrieve the explicit or measured height.
	 */
	val explicitHeight: Float?
}

interface Sizable : SizableRo {

	/**
	 * Does the same thing as setting [width] and [height] individually, but may be more efficient depending on
	 * implementation.
	 * @param width The explicit width for the component. Use null to use the natural measured width.
	 * @param height The explicit height for the component. Use null to use the natural measured height.
	 */
	fun setSize(width: Float?, height: Float?)

	/**
	 * Sets the explicit width for this layout element. (A null value represents using the measured width)
	 */
	fun width(value: Float?)

	/**
	 * Sets the explicit height for this layout element. (A null value represents using the measured height)
	 */
	fun height(value: Float?)

}

fun LayoutElement.setSize(bounds: BoundsRo) = setSize(bounds.width, bounds.height)