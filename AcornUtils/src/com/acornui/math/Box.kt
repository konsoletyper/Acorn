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

interface BoxRo {

	val min: Vector3Ro
	val max: Vector3Ro
	val center: Vector3Ro
	val dimensions: Vector3Ro
	val width: Float
	val height: Float
	val depth: Float

	/**
	 * @param corners A list of 8 Vector 3 objects that will be populated with the corners of this bounding box.
	 */
	fun getCorners(corners: List<Vector3>): List<Vector3>

	fun getCorner000(out: Vector3): Vector3
	fun getCorner001(out: Vector3): Vector3
	fun getCorner010(out: Vector3): Vector3
	fun getCorner011(out: Vector3): Vector3
	fun getCorner100(out: Vector3): Vector3
	fun getCorner101(out: Vector3): Vector3
	fun getCorner110(out: Vector3): Vector3
	fun getCorner111(out: Vector3): Vector3

	/**
	 * @param out The {@link Vector3} to receive the dimensions of this bounding box on all three axis.
	 * @return The vector specified with the out argument
	 */
	fun getDimensions(out: Vector3): Vector3

	/**
	 * @param out The {@link Vector3} to receive the minimum values.
	 * @return The vector specified with the out argument
	 */
	fun getMin(out: Vector3): Vector3

	/**
	 * @param out The {@link Vector3} to receive the maximum values.
	 * @return The vector specified with the out argument
	 */
	fun getMax(out: Vector3): Vector3

	/**
	 * Returns whether this bounding box is valid. This means that {@link #max} is greater than {@link #min}.
	 * @return True in case the bounding box is valid, false otherwise
	 */
	fun isValid(): Boolean

	/**
	 * Returns whether the given bounding box is intersecting this bounding box (at least one point in).
	 * @param b The bounding box
	 * @return Whether the given bounding box is intersected
	 */
	fun intersects(b: BoxRo): Boolean

	/**
	 * Calculates whether or not the given Ray intersects with this Box.
	 *
	 * @param r The ray to project towards this box.
	 * @param out If provided, and if there's an intersection, the location of the intersection will be set on
	 * this vector.
	 * @return Returns true if the ray intersects with this box.
	 */
	fun intersects(r: RayRo, out: Vector3? = null): Boolean

	/**
	 * Returns whether the given bounding box is contained in this bounding box.
	 * @param b The bounding box
	 * @return Whether the given bounding box is contained
	 */
	fun contains(b: BoxRo): Boolean

	/**
	 * Returns whether the given vector is contained in this bounding box.
	 * @param v The vector
	 * @return Whether the vector is contained or not.
	 */
	fun contains(v: Vector3Ro): Boolean

	fun contains(x: Float, y: Float, z: Float): Boolean
}

/**
 * Encapsulates an axis aligned bounding box represented by a minimum and a maximum Vector. Additionally you can query for the
 * bounding box's center, dimensions and corner points.
 *
 * @author badlogicgames@gmail.com, Xoppa
 */
data class Box(
		override val min: Vector3 = Vector3(),
		override val max: Vector3 = Vector3()
) : BoxRo {

	private val _center: Vector3 = Vector3()
	override val center: Vector3Ro
		get() = _center
	private val _dimensions: Vector3 = Vector3()
	override val dimensions: Vector3Ro
		get() = _dimensions

	init {
		set(min, max)
	}

	/**
	 * Updates the center and dimensions.
	 */
	fun update() {
		_center.set(min).add(max).scl(0.5f)
		_dimensions.set(max).sub(min)
	}

	override fun getCorners(corners: List<Vector3>): List<Vector3> {
		corners[0].set(min.x, min.y, min.z)
		corners[1].set(max.x, min.y, min.z)
		corners[2].set(max.x, max.y, min.z)
		corners[3].set(min.x, max.y, min.z)
		corners[4].set(min.x, min.y, max.z)
		corners[5].set(max.x, min.y, max.z)
		corners[6].set(max.x, max.y, max.z)
		corners[7].set(min.x, max.y, max.z)
		return corners
	}

	override fun getCorner000(out: Vector3): Vector3 {
		return out.set(min.x, min.y, min.z)
	}

	override fun getCorner001(out: Vector3): Vector3 {
		return out.set(min.x, min.y, max.z)
	}

	override fun getCorner010(out: Vector3): Vector3 {
		return out.set(min.x, max.y, min.z)
	}

	override fun getCorner011(out: Vector3): Vector3 {
		return out.set(min.x, max.y, max.z)
	}

	override fun getCorner100(out: Vector3): Vector3 {
		return out.set(max.x, min.y, min.z)
	}

	override fun getCorner101(out: Vector3): Vector3 {
		return out.set(max.x, min.y, max.z)
	}

	override fun getCorner110(out: Vector3): Vector3 {
		return out.set(max.x, max.y, min.z)
	}

	override fun getCorner111(out: Vector3): Vector3 {
		return out.set(max.x, max.y, max.z)
	}

	/**
	 * @param out The {@link Vector3} to receive the dimensions of this bounding box on all three axis.
	 * @return The vector specified with the out argument
	 */
	override fun getDimensions(out: Vector3): Vector3 {
		return out.set(dimensions)
	}

	override val width: Float
		get() {
			return dimensions.x
		}

	override val height: Float
		get() {
			return dimensions.y
		}

	override val depth: Float
		get() {
			return dimensions.z
		}

	/**
	 * @param out The {@link Vector3} to receive the minimum values.
	 * @return The vector specified with the out argument
	 */
	override fun getMin(out: Vector3): Vector3 {
		return out.set(min)
	}

	/**
	 * @param out The {@link Vector3} to receive the maximum values.
	 * @return The vector specified with the out argument
	 */
	override fun getMax(out: Vector3): Vector3 {
		return out.set(max)
	}

	/**
	 * Sets the given bounding box.
	 *
	 * @param bounds The bounds.
	 * @return This bounding box for chaining.
	 */
	fun set(bounds: BoxRo): Box {
		return this.set(bounds.min, bounds.max)
	}

	/**
	 * Sets the given minimum and maximum vector.
	 *
	 * @param minimum The minimum vector
	 * @param maximum The maximum vector
	 * @return This bounding box for chaining.
	 */
	fun set(minimum: Vector3Ro, maximum: Vector3Ro): Box {
		min.set(if (minimum.x < maximum.x) minimum.x else maximum.x, if (minimum.y < maximum.y) minimum.y else maximum.y, if (minimum.z < maximum.z) minimum.z else maximum.z)
		max.set(if (minimum.x > maximum.x) minimum.x else maximum.x, if (minimum.y > maximum.y) minimum.y else maximum.y, if (minimum.z > maximum.z) minimum.z else maximum.z)
		_center.set(min).add(max).scl(0.5f)
		_dimensions.set(max).sub(min)
		return this
	}

	/**
	 * Sets the given minimum and maximum vector.
	 *
	 * @return This bounding box for chaining.
	 */
	fun set(minX: Float, minY: Float, minZ: Float, maxX: Float, maxY: Float, maxZ: Float): Box {
		min.set(if (minX < maxX) minX else maxX, if (minY < maxY) minY else maxY, if (minZ < maxZ) minZ else maxZ)
		max.set(if (minX > maxX) minX else maxX, if (minY > maxY) minY else maxY, if (minZ > maxZ) minZ else maxZ)
		update()
		return this
	}

	/**
	 * Sets the bounding box minimum and maximum vector from the given points.
	 *
	 * @param points The points.
	 * @return This bounding box for chaining.
	 */
	fun set(points: Array<Vector3Ro>): Box {
		inf()
		for (i in 0..points.lastIndex)
			_ext(points[i])
		update()
		return this
	}

	/**
	 * Sets the bounding box minimum and maximum vector from the given points.
	 *
	 * @param points The points.
	 * @return This bounding box for chaining.
	 */
	fun set(points: List<Vector3Ro>): Box {
		inf()
		for (i in 0..points.lastIndex)
			_ext(points[i])
		update()
		return this
	}

	/**
	 * Sets the minimum and maximum vector to positive and negative infinity.
	 *
	 * @return This bounding box for chaining.
	 */
	fun inf(): Box {
		min.set(Float.POSITIVE_INFINITY, Float.POSITIVE_INFINITY, Float.POSITIVE_INFINITY)
		max.set(Float.NEGATIVE_INFINITY, Float.NEGATIVE_INFINITY, Float.NEGATIVE_INFINITY)
		_center.set(0f, 0f, 0f)
		_dimensions.set(0f, 0f, 0f)
		return this
	}

	/**
	 * Extends the bounding box to incorporate the given {@link Vector3}.
	 * @param point The vector
	 * @return This bounding box for chaining.
	 */
	fun ext(point: Vector3Ro, update: Boolean = true): Box {
		_ext(point)
		if (update)
			update()
		return this
	}

	private fun _ext(point: Vector3Ro) {
		if (point.x < min.x) min.x = point.x
		if (point.y < min.y) min.y = point.y
		if (point.z < min.z) min.z = point.z
		if (point.x > max.x) max.x = point.x
		if (point.y > max.y) max.y = point.y
		if (point.z > max.z) max.z = point.z
	}

	/**
	 * Returns whether this bounding box is valid. This means that {@link #max} is greater than {@link #min}.
	 * @return True in case the bounding box is valid, false otherwise
	 */
	override fun isValid(): Boolean {
		return min.x < max.x && min.y < max.y && min.z < max.z
	}

	/**
	 * Extends this bounding box by the given bounding box.
	 *
	 * @param bounds The bounding box
	 * @return This bounding box for chaining.
	 */
	fun ext(bounds: BoxRo): Box {
		return set(min.set(minOf(min.x, bounds.min.x), minOf(min.y, bounds.min.y), minOf(min.z, bounds.min.z)), max.set(maxOf(max.x, bounds.max.x), maxOf(max.y, bounds.max.y), maxOf(max.z, bounds.max.z)))
	}

	/**
	 * Extends this bounding box by the given transformed bounding box.
	 *
	 * @param bounds The bounding box
	 * @param transform The transformation matrix to apply to bounds, before using it to extend this bounding box.
	 * @return This bounding box for chaining.
	 */
	fun ext(bounds: BoxRo, transform: Matrix4Ro): Box {
		val v = tmpVec3
		val min = bounds.min
		val max = bounds.max
		_ext(v.set(min.x, min.y, min.z).mul(transform))
		_ext(v.set(min.x, max.y, min.z).mul(transform))
		_ext(v.set(max.x, min.y, min.z).mul(transform))
		_ext(v.set(max.x, max.y, min.z).mul(transform))
		if (min.z != max.z) {
			_ext(v.set(min.x, min.y, max.z).mul(transform))
			_ext(v.set(min.x, max.y, max.z).mul(transform))
			_ext(v.set(max.x, min.y, max.z).mul(transform))
			_ext(v.set(max.x, max.y, max.z).mul(transform))
		}
		update()
		return this
	}

	/**
	 * Multiplies the bounding box by the given matrix. This is achieved by multiplying the 8 corner points and then calculating
	 * the minimum and maximum vectors from the transformed points.
	 *
	 * @param transform The matrix
	 * @return This bounding box for chaining.
	 */
	fun mul(transform: Matrix4Ro): Box {
		val x0 = min.x
		val y0 = min.y
		val z0 = min.z
		val x1 = max.x
		val y1 = max.y
		val z1 = max.z
		inf()
		_ext(transform.prj(tmpVec3.set(x0, y0, z0)))
		_ext(transform.prj(tmpVec3.set(x1, y0, z0)))
		_ext(transform.prj(tmpVec3.set(x1, y1, z0)))
		_ext(transform.prj(tmpVec3.set(x0, y1, z0)))
		_ext(transform.prj(tmpVec3.set(x0, y0, z1)))
		_ext(transform.prj(tmpVec3.set(x1, y0, z1)))
		_ext(transform.prj(tmpVec3.set(x1, y1, z1)))
		_ext(transform.prj(tmpVec3.set(x0, y1, z1)))
		update()
		return this
	}

	/**
	 * Returns whether the given bounding box is intersecting this bounding box (at least one point in).
	 * @param b The bounding box
	 * @return Whether the given bounding box is intersected
	 */
	override fun intersects(b: BoxRo): Boolean {
		if (!isValid()) return false

		// test using SAT (separating axis theorem)

		val lX = MathUtils.abs(center.x - b.center.x)
		val sumX = (dimensions.x * 0.5f) + (b.dimensions.x * 0.5f)

		val lY = MathUtils.abs(center.y - b.center.y)
		val sumY = (dimensions.y * 0.5f) + (b.dimensions.y * 0.5f)

		val lZ = MathUtils.abs(center.z - b.center.z)
		val sumZ = (dimensions.z * 0.5f) + (b.dimensions.z * 0.5f)

		return (lX <= sumX && lY <= sumY && lZ <= sumZ)
	}

	/**
	 * Calculates whether or not the given Ray intersects with this Box.
	 *
	 * @param r The ray to project towards this box.
	 * @param out If provided, and if there's an intersection, the location of the intersection will be set on
	 * this vector.
	 * @return Returns true if the ray intersects with this box.
	 */
	override fun intersects(r: RayRo, out: Vector3?): Boolean {
		if (dimensions.x <= 0f || dimensions.y <= 0f) return false
		if (dimensions.z == 0f) {
			// Optimization for a common case is that this box is actually nothing more than a rectangle.
			if (r.direction.z == 0f) return false
			val m = (min.z - r.origin.z) * r.directionInv.z
			if (m < 0) return false // Intersection (if there is one) is behind the ray.
			val x = r.origin.x + m * r.direction.x
			val y = r.origin.y + m * r.direction.y

			val intersects = min.x <= x && max.x >= x && min.y <= y && max.y >= y
			if (out != null && intersects) {
				r.getEndPoint(m, out)
			}
			return intersects
		}

		val d = r.directionInv
		val o = r.origin
		val t1 = (min.x - o.x) * d.x
		val t2 = (max.x - o.x) * d.x
		val t3 = (min.y - o.y) * d.y
		val t4 = (max.y - o.y) * d.y
		val t5 = (min.z - o.z) * d.z
		val t6 = (max.z - o.z) * d.z

		val tMin = maxOf(minOf(t1, t2), minOf(t3, t4), minOf(t5, t6))
		val tMax = minOf(maxOf(t1, t2), maxOf(t3, t4), maxOf(t5, t6))

		// if tmax < 0, ray (line) is intersecting AABB, but whole AABB is behind us
		// if tmin > tmax, ray doesn't intersect AABB
		if (tMax < 0 || tMin > tMax) {
			return false
		}
		if (out != null) {
			r.getEndPoint(tMin, out)
		}
		return true
	}

	/**
	 * Returns whether the given bounding box is contained in this bounding box.
	 * @param b The bounding box
	 * @return Whether the given bounding box is contained
	 */
	override fun contains(b: BoxRo): Boolean {
		return !isValid() || (min.x <= b.min.x && min.y <= b.min.y && min.z <= b.min.z && max.x >= b.max.x && max.y >= b.max.y && max.z >= b.max.z)
	}

	/**
	 * Returns whether the given vector is contained in this bounding box.
	 * @param v The vector
	 * @return Whether the vector is contained or not.
	 */
	override fun contains(v: Vector3Ro): Boolean {
		return contains(v.x, v.y, v.z)
	}

	override fun contains(x: Float, y: Float, z: Float): Boolean {
		return min.x <= x && max.x >= x && min.y <= y && max.y >= y && min.z <= z && max.z >= z
	}

	override fun toString(): String {
		return "[$min|$max]"
	}

	/**
	 * Extends the bounding box by the given vector.
	 *
	 * @param x The x-coordinate
	 * @param y The y-coordinate
	 * @param z The z-coordinate
	 * @return This bounding box for chaining.
	 */
	fun ext(x: Float, y: Float, z: Float): Box {
		return set(min.set(minOf(min.x, x), minOf(min.y, y), minOf(min.z, z)), max.set(maxOf(max.x, x), maxOf(max.y, y), maxOf(max.z, z)))
	}

	companion object {

		private val tmpVec3 = Vector3()

	}
}
