/*
 * Derived from LibGDX by Nicholas Bilyk
 * https://github.com/libgdx
 * Copyright 2011 See https://github.com/libgdx/libgdx/blob/master/AUTHORS
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

package com.acornui.math

import com.acornui.collection.Clearable
import com.acornui.collection.ClearableObjectPool
import com.acornui.core.notCloseTo

interface RayRo {

	val origin: Vector3Ro
	val direction: Vector3Ro

	/**
	 * 1f / direction
	 * Must call [update] before this is valid.
	 */
	val directionInv: Vector3Ro

	/**
	 * Returns the endpoint given the distance. This is calculated as origin + distance * direction.
	 * @param distance The distance from the end point to the origin.
	 * @param out The vector to set to the result
	 * @return The out param
	 */
	fun getEndPoint(distance: Float, out: Vector3): Vector3

	/**
	 * Returns the endpoint when projecting towards the xy plane at [z].
	 * @throws Exception if direction.z is zero.
	 */
	fun getPointAtZ(z: Float, out: Vector2): Vector2

	/**
	 * http://math.stackexchange.com/questions/270767/find-intersection-of-two-3d-lines
	 * @author nbilyk
	 */
	fun intersects(ray: RayRo, out: Vector3? = null): Boolean

	/**
	 * Intersects a [Ray] and a [Plane]. The intersection point is stored in [out] in the case an intersection is
	 * present.
	 * @param plane The plane
	 * @param out The vector the intersection point is written to (optional)
	 * @return True if an intersection is present.
	 */
	fun intersects(plane: PlaneRo, out: Vector3?): Boolean

	/**
	 * Intersect a [Ray] and a triangle, returning the intersection point in intersection.
	 * @param v1 The first vertex of the triangle
	 * @param v2 The second vertex of the triangle
	 * @param v3 The third vertex of the triangle
	 * @param out The intersection point (optional)
	 * @return True in case an intersection is present.
	 */
	fun intersects(v1: Vector3Ro, v2: Vector3Ro, v3: Vector3Ro, out: Vector3? = null): Boolean
}

/**
 * Encapsulates a ray having a starting position and a unit length direction.
 *
 * @author badlogicgames@gmail.com
 */
data class Ray(
		override val origin: Vector3 = Vector3(),
		override val direction: Vector3 = Vector3()
) : Clearable, RayRo {

	/**
	 * 1f / direction
	 * Must call [update] before this is valid.
	 */
	override val directionInv: Vector3 = Vector3()

	/**
	 * Normalizes the direction and calculates [directionInv]
	 */
	fun update() {
		direction.nor()
		directionInv.set(1f / direction.x, 1f / direction.y, 1f / direction.z)
	}

	/**
	 * Returns the endpoint given the distance. This is calculated as origin + distance * direction.
	 * @param distance The distance from the end point to the origin.
	 * @param out The vector to set to the result
	 * @return The out param
	 */
	override fun getEndPoint(distance: Float, out: Vector3): Vector3 {
		return out.set(direction).scl(distance).add(origin)
	}

	/**
	 * Returns the endpoint when projecting towards the xy plane at [z].
	 * @throws Exception if direction.z is zero.
	 */
	override fun getPointAtZ(z: Float, out: Vector2): Vector2 {
		if (direction.z == 0f) throw Exception("direction.z is zero")
		val d = (z - origin.z) / direction.z
		return out.set(direction.x, direction.y).scl(d).add(origin.x, origin.y)
	}

	/**
	 * Multiplies the ray by the given matrix. Use this to transform a ray into another coordinate system.
	 *
	 * @param matrix The matrix
	 * @return This ray for chaining.
	 */
	fun mul(matrix: Matrix4Ro): Ray {
		tmpVec.set(origin).add(direction)
		tmpVec.mul(matrix)
		origin.mul(matrix)
		direction.set(tmpVec.sub(origin))
		update()
		return this
	}

	/**
	 * Sets the starting position and the direction of this ray.
	 *
	 * @param origin The starting position
	 * @param direction The direction
	 * @return this ray for chaining
	 */
	fun set(origin: Vector3Ro, direction: Vector3Ro): Ray {
		this.origin.set(origin)
		this.direction.set(direction)
		update()
		return this
	}

	/**
	 * Sets this ray from the given starting position and direction.
	 *
	 * @param x The x-component of the starting position
	 * @param y The y-component of the starting position
	 * @param z The z-component of the starting position
	 * @param dX The x-component of the direction
	 * @param dY The y-component of the direction
	 * @param dZ The z-component of the direction
	 * @return this ray for chaining
	 */
	fun set(x: Float, y: Float, z: Float, dX: Float, dY: Float, dZ: Float): Ray {
		this.origin.set(x, y, z)
		this.direction.set(dX, dY, dZ)
		update()
		return this
	}

	/**
	 * Sets the starting position and direction from the given ray
	 *
	 * @param ray The ray
	 * @return This ray for chaining
	 */
	fun set(ray: RayRo): Ray {
		this.origin.set(ray.origin)
		this.direction.set(ray.direction)
		return this
	}

	/**
	 * http://math.stackexchange.com/questions/270767/find-intersection-of-two-3d-lines
	 * @author nbilyk
	 */
	override fun intersects(ray: RayRo, out: Vector3?): Boolean {
		if (this.origin == ray.origin) {
			out?.set(origin)
			return true
		}

		val d1 = direction
		val d2 = ray.direction
		val cross = Vector3.obtain()
		cross.set(d1).crs(d2)

		val u = cross.dot(origin)
		val u2 = cross.dot(ray.origin)
		if (u.notCloseTo(u2)) {
			cross.free()
			return false
		}

		val perp1 = Vector3.obtain()
		perp1.set(d1).crs(cross)

		val v = perp1.dot(origin)

		if (out != null) {
			val t = (v - perp1.x * ray.origin.x - perp1.y * ray.origin.y - perp1.z * ray.origin.z) / (perp1.y * ray.direction.y + perp1.x * ray.direction.x + perp1.z * ray.direction.z)
			ray.getEndPoint(t, out)
		}

		cross.free()
		perp1.free()
		return true
	}

	/**
	 * Intersects a [Ray] and a [Plane]. The intersection point is stored in [out] in the case an intersection is
	 * present.
	 * @param plane The plane
	 * @param out The vector the intersection point is written to (optional)
	 * @return True if an intersection is present.
	 */
	override fun intersects(plane: PlaneRo, out: Vector3?): Boolean {
		val denom = direction.dot(plane.normal)
		if (denom != 0f) {
			val t = -(origin.dot(plane.normal) + plane.d) / denom
			if (t < 0) return false
			out?.set(origin)?.add(v3_0.set(direction).scl(t))
			return true
		} else if (plane.testPoint(origin) === PlaneSide.ON_PLANE) {
			out?.set(origin)
			return true
		} else
			return false
	}

	/**
	 * Intersect a [Ray] and a triangle, returning the intersection point in intersection.
	 * @param v1 The first vertex of the triangle
	 * @param v2 The second vertex of the triangle
	 * @param v3 The third vertex of the triangle
	 * @param out The intersection point (optional)
	 * @return True in case an intersection is present.
	 */
	override fun intersects(v1: Vector3Ro, v2: Vector3Ro, v3: Vector3Ro, out: Vector3?): Boolean {
		plane.set(v1, v2, v3)
		if (!intersects(plane, v3_3)) return false

		v3_0.set(v3).sub(v1)
		v3_1.set(v2).sub(v1)
		v3_2.set(v3_3).sub(v1)

		val dot00 = v3_0.dot(v3_0)
		val dot01 = v3_0.dot(v3_1)
		val dot02 = v3_0.dot(v3_2)
		val dot11 = v3_1.dot(v3_1)
		val dot12 = v3_1.dot(v3_2)

		val denom = dot00 * dot11 - dot01 * dot01
		if (denom == 0f) return false

		val u = (dot11 * dot02 - dot01 * dot12) / denom
		val v = (dot00 * dot12 - dot01 * dot02) / denom

		if (u >= 0f && v >= 0f && u + v <= 1f) {
			out?.set(v3_3)
			return true
		} else {
			return false
		}
	}

	fun free() {
		pool.free(this)
	}

	override fun clear() {
		origin.clear()
		direction.clear()
		directionInv.clear()
	}

	companion object {

		private var tmpVec = Vector3()

		private val plane = Plane(Vector3(), 0f)
		private val v3_0 = Vector3()
		private val v3_1 = Vector3()
		private val v3_2 = Vector3()
		private val v3_3 = Vector3()

		private val pool = ClearableObjectPool { Ray() }

		fun obtain(): Ray {
			return pool.obtain()
		}

	}
}

interface Ray2Ro {
	val origin: Vector2Ro
	val direction: Vector2Ro

	fun intersects(ray: Ray2, out: Vector2): Boolean
}

/**
 * A 2d ray.
 */
data class Ray2(
		override val origin: Vector2 = Vector2(),
		override val direction: Vector2 = Vector2()
) : Clearable, Ray2Ro {

	override fun intersects(ray: Ray2, out: Vector2): Boolean {
		return intersects(origin, direction, ray.origin, ray.direction, out)
	}

	fun free() {
		pool.free(this)
	}

	override fun clear() {
		origin.clear()
		direction.clear()
	}

	companion object {

		private val pool = ClearableObjectPool { Ray2() }

		fun obtain(): Ray2 {
			return pool.obtain()
		}

		/**
		 * Intersect two 2D Rays and return the scalar parameter of the first ray at the intersection point.
		 * You can get the intersection point by: Vector2 point(direction1).scl(scalar).add(start1)
		 * For more information, check: http://stackoverflow.com/a/565282/1091440
		 *
		 * @param start1 Where the first ray start
		 * @param direction1 The direction the first ray is pointing
		 * @param start2 Where the second ray start
		 * @param direction2 The direction the second ray is pointing
		 * @return scalar parameter on the first ray describing the point where the intersection happens. May be negative.
		 * In the case the rays are collinear, PositiveInfinity will be returned.
		 */
		fun intersects(start1: Vector2, direction1: Vector2, start2: Vector2, direction2: Vector2): Float {
			val difx = start2.x - start1.x
			val dify = start2.y - start1.y
			val d1xd2 = direction1.x * direction2.y - direction1.y * direction2.x
			if (d1xd2 == 0f) {
				return Float.POSITIVE_INFINITY // collinear
			}
			val d2sx = direction2.x / d1xd2
			val d2sy = direction2.y / d1xd2
			return difx * d2sy - dify * d2sx
		}

		fun intersects(start1: Vector2, direction1: Vector2, start2: Vector2, direction2: Vector2, out: Vector2): Boolean {
			val f = intersects(start1, direction1, start2, direction2)
			if (f < Float.POSITIVE_INFINITY) {
				out.set(direction1).scl(f).add(start1)
				return true
			} else {
				out.set(start1)
				return false
			}
		}
	}
}