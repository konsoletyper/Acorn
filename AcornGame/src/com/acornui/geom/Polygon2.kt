package com.acornui.geom

import com.acornui._assert
import com.acornui.collection.addAll2
import com.acornui.math.*
import com.acornui.serialization.*

fun Polygon2(vertices: List<Float>): Polygon2 {
	val p = Polygon2(vertices.size)
	p.vertices.addAll(vertices)
	return p
}

/**
 * A 2d polygon.
 */
class Polygon2(initialCapacity: Int = 16) {

	/**
	 * x, y, ...
	 */
	val vertices: MutableList<Float> = ArrayList(initialCapacity)

	/**
	 * Marks that the vertices have changed and cached properties such as [bounds] and [isConvex] need to revalidate
	 * the next time they're accessed.
	 */
	fun invalidate(): Polygon2 {
		_bounds = null
		return this
	}

	fun copy(): Polygon2 {
		return Polygon2(vertices)
	}

	private var _bounds: MinMax? = null
	val bounds: MinMax
		get() {
			if (_bounds == null) {
				val b = MinMax()
				for (i in 0..vertices.lastIndex step 2) {
					b.ext(vertices[i], vertices[i + 1])
				}
				_bounds = b
			}
			return _bounds!!
		}

	/**
	 * Intersection test only works if both polygons are convex.
	 * @param mTd Will be set to the minimum translation distance to resolve the collision.
	 */
	fun intersects(other: Polygon2, mTd: Vector2? = null): Boolean {
		mTd?.clear()
		if (!bounds.intersects(other.bounds)) return false
		if (!sat(other.vertices, this.vertices, Float.MAX_VALUE, mTd)) {
			mTd?.clear()
			return false
		}
		mTd?.scl(-1f)
		if (!sat(this.vertices, other.vertices, if (mTd == null) Float.MAX_VALUE else mTd.len(), mTd)) {
			mTd?.clear()
			return false
		}
		return true
	}

	/**
	 * Adds an x, y pair to the vertices list. Must call [invalidate] before accessing calculated values.
	 */
	fun add(vertex: Vector3) {
		vertices.add(vertex.x)
		vertices.add(vertex.y)
	}

	/**
	 * Adds an x, y pair to the vertices list. Must call [invalidate] before accessing calculated values.
	 */
	fun add(vertex: Vector2) {
		vertices.add(vertex.x)
		vertices.add(vertex.y)
	}

	/**
	 * Adds an x, y pair to the vertices list. Must call [invalidate] before accessing calculated values.
	 */
	fun add(x: Float, y: Float) {
		vertices.add(x)
		vertices.add(y)
	}

	fun set(other: Polygon2): Polygon2 {
		vertices.clear()
		vertices.addAll2(other.vertices)
		return this
	}

	/**
	 * Left multiplies the vertex points by the given matrix.
	 */
	fun mul(mat: Matrix3): Polygon2 {
		val vals = mat.values
		val m0 = vals[0]
		val m1 = vals[1]
		val m3 = vals[3]
		val m4 = vals[4]
		val m6 = vals[6]
		val m7 = vals[7]

		for (i in 0..vertices.lastIndex step 2) {
			val x = vertices[i]
			val y = vertices[i + 1]
			vertices[i] = x * m0 + y * m3 + m6
			vertices[i + 1] = x * m1 + y * m4 + m7
		}
		return this
	}

	/**
	 * Translates the polygon vertices by the given x/y delta.
	 */
	fun trn(xD: Float, yD: Float): Polygon2 {
		for (i in 0..vertices.lastIndex step 2) {
			vertices[i] += xD
			vertices[i + 1] += yD
		}
		return this
	}

	/**
	 * Scales the vertices by the given multiplier.
	 */
	fun scl(vX: Float, vY: Float): Polygon2 {
		for (i in 0..vertices.lastIndex step 2) {
			vertices[i] *= vX
			vertices[i + 1] *= vY
		}
		return this
	}

	fun getContactInfo(other: Polygon2, mTd: Vector2, collisionInfo: CollisionInfo) {
		mTd2.set(mTd).scl(-1f)
		val nA = getSupportPoints(mTd2, supportA)
		val nB = other.getSupportPoints(mTd, supportB)
		getContactPoints(supportA, nA, supportB, nB, collisionInfo)
	}

	private fun getSupportPoints(dir: Vector2, out: FloatArray): Int {
		_assert(vertices.isNotEmpty())

		var minD = Float.MAX_VALUE

		for (i in 0..vertices.lastIndex step 2) {
			val d = vertices[i] * dir.x + vertices[i + 1] * dir.y
			if (d < minD) {
				minD = d
			}
		}

		var count = 0
		val threshold = 1.0E-8f
		val minD2 = minD + threshold
		for (i in 0..vertices.lastIndex step 2) {
			val d = vertices[i] * dir.x + vertices[i + 1] * dir.y
			if (d <= minD2) {
				out[count * 2] = vertices[i]
				out[count * 2 + 1] = vertices[i + 1]
				count++
				if (count >= 2) return count
			}
		}

		return count

	}

	fun getContactPoints(supportA: FloatArray, numA: Int, supportB: FloatArray, numB: Int, collisionInfo: CollisionInfo) {
		when (numA + numB) {
			2 -> {
				// An unlikely case; vertex to vertex.
				collisionInfo.contactA.set(supportA[0], supportA[1])
				collisionInfo.contactB.set(supportB[0], supportB[1])
				collisionInfo.numPoints = 1
			}
			3 -> {
				// Edge to vertex
				if (numA > numB) {
					getContactPointsEdgeVertex(supportA, supportB[0], supportB[1], collisionInfo)
				} else {
					getContactPointsEdgeVertex(supportB, supportA[0], supportA[1], collisionInfo)
					collisionInfo.switch()
				}
			}

			4 -> {
				// Edge to edge
				getContactPointsEdgeEdge(supportA, supportB, collisionInfo)
			}

			else -> {
				// No collision
				collisionInfo.numPoints = 0
			}
		}

		// Calculate midpoints.
		collisionInfo.midA.set(collisionInfo.contactA)
		collisionInfo.midB.set(collisionInfo.contactB)
		if (collisionInfo.numPoints == 2) {
			collisionInfo.midA.lerp(collisionInfo.contactA2, 0.5f)
			collisionInfo.midB.lerp(collisionInfo.contactB2, 0.5f)
		}

	}

	private fun getContactPointsEdgeVertex(edge: FloatArray, x: Float, y: Float, collisionInfo: CollisionInfo) {
		getClosestPointToEdge(x, y, edge, collisionInfo.contactA)
		collisionInfo.contactB.set(x, y)
		collisionInfo.numPoints = 1
	}

	/**
	 * Calculates the closest point to [x], [y] that lies on [edge].
	 */
	private fun getClosestPointToEdge(x: Float, y: Float, edge: FloatArray, out: Vector2) {
		return GeomUtils.getClosestPointToEdge(x, y, edge[0], edge[1], edge[2], edge[3], out)
	}

	private fun getContactPointsEdgeEdge(supportA: FloatArray, supportB: FloatArray, collisionInfo: CollisionInfo) {
		val dirX = supportA[2] - supportA[0]
		val dirY = supportA[3] - supportA[1]

		sortedEdgeVertices[0].set(supportA[0], supportA[1], supportA[0] * dirX + supportA[1] * dirY, 0)
		sortedEdgeVertices[1].set(supportA[2], supportA[3], supportA[2] * dirX + supportA[3] * dirY, 0)
		sortedEdgeVertices[2].set(supportB[0], supportB[1], supportB[0] * dirX + supportB[1] * dirY, 1)
		sortedEdgeVertices[3].set(supportB[2], supportB[3], supportB[2] * dirX + supportB[3] * dirY, 1)
		sortedEdgeVertices.sort()

		// Take the two middle points
		for (i in 1..2) {
			val vertex = sortedEdgeVertices[i]
			val contactA = if (i == 1) collisionInfo.contactA else collisionInfo.contactA2
			val contactB = if (i == 1) collisionInfo.contactB else collisionInfo.contactB2

			if (vertex.whichEdge == 0) {
				contactA.set(vertex.x, vertex.y)
				getClosestPointToEdge(vertex.x, vertex.y, supportB, contactB)
			} else {
				getClosestPointToEdge(vertex.x, vertex.y, supportA, contactA)
				contactB.set(vertex.x, vertex.y)

			}

		}
		collisionInfo.numPoints = 2
	}

	private fun CollisionInfo.switch() {
		tmp.set(contactA)
		contactA.set(contactB)
		contactB.set(tmp)
	}

	companion object : To<Polygon2>, From<Polygon2> {

		private val tmp = Vector2()
		private val mTd2 = Vector2()

		private val supportA = FloatArray(4)
		private val supportB = FloatArray(4)
		private val sortedEdgeVertices = Array(4, { SortedPoint() })

		private val vAxis = Vector2()

		/**
		 * Separate axis theorem.
		 * Thanks to: http://www.sevenson.com.au/actionscript/sat/
		 * @param mTd Will be set to the minimum translation distance to resolve the collision.
		 */
		private fun sat(pA: List<Float>, pB: List<Float>, shortestDistAbs: Float, mTd: Vector2?): Boolean {
			var shortestDistAbs = shortestDistAbs
			// Loop through all of the axis on the first polygon
			val n = pA.size
			for (i in 0..pA.lastIndex step 2) {
				// Find the axis that we will project onto
				getNormal(pA, i, vAxis)

				// Project polygon A
				var min0 = Float.POSITIVE_INFINITY
				var max0 = Float.NEGATIVE_INFINITY
				for (j in 0..pA.lastIndex step 2) {
					val t = vAxis.dot(pA[j], pA[j + 1])
					if (t < min0) min0 = t
					if (t > max0) max0 = t
				}

				// Project polygon B
				var min1 = Float.POSITIVE_INFINITY
				var max1 = Float.NEGATIVE_INFINITY
				for (j in 0..pB.lastIndex step 2) {
					val t = vAxis.dot(pB[j], pB[j + 1])
					if (t < min1) min1 = t
					if (t > max1) max1 = t
				}

				// Test for intersections
				if (min0 > max1 || max0 < min1) {
					// Gap found
					return false
				}
				if (mTd != null) {
					val dist = min0 - max1
					val distAbs = MathUtils.abs(dist)
					if (distAbs < shortestDistAbs) {
						shortestDistAbs = distAbs
						mTd.set(vAxis).scl(dist)
					}
				}
			}
			return true
		}

		private fun getNormal(pA: List<Float>, i: Int, out: Vector2) {
			val x1 = pA[i]
			val y1 = pA[i + 1]
			val n = pA.size
			val x2 = pA[(i + 2) % n]
			val y2 = pA[(i + 3) % n]
			out.set(-(y2 - y1), x2 - x1)
			out.nor()
		}

		//-----------------------------------------
		// Serialization
		//-----------------------------------------

		override fun Polygon2.write(writer: Writer) {
			writer.floatArray("vertices", vertices.toFloatArray())
		}

		override fun read(reader: Reader): Polygon2 {
			val vertices = reader.floatArray("vertices")!!
			val p = Polygon2(vertices.size)
			p.vertices.addAll2(vertices.toList())
			return p
		}
	}

}

fun basicPolygon(sides: Int = 3, radius: Float = 100f): Polygon2 {
	if (sides < 3) throw Exception("Needs at least 3 sides")
	val rot = PI2 / sides.toFloat()
	val poly = Polygon2(sides * 2)
	val vertices = poly.vertices
	for (i in 0..sides - 1) {
		val theta = (i * rot) + (PI - rot) * 0.5f
		vertices.add(MathUtils.cos(theta) * radius)
		vertices.add(MathUtils.sin(theta) * radius)
	}
	return poly
}

data class CollisionInfo(
		val contactA: Vector2 = Vector2(),
		val contactA2: Vector2 = Vector2(),
		val contactB: Vector2 = Vector2(),
		val contactB2: Vector2 = Vector2(),
		var numPoints: Int = 0
) {
	val midA: Vector2 = Vector2()
	val midB: Vector2 = Vector2()
}

private data class SortedPoint(var x: Float = 0f, var y: Float = 0f, var d: Float = 0f, var whichEdge: Int = -1) : Comparable<SortedPoint> {

	fun set(x: Float, y: Float, d: Float, whichEdge: Int): SortedPoint {
		this.x = x
		this.y = y
		this.d = d
		this.whichEdge = whichEdge
		return this
	}

	override fun compareTo(other: SortedPoint): Int {
		return d.compareTo(other.d)
	}
}