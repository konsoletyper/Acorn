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

package com.acornui.string

/**
 * SubString is class allowing you to make a reference to a substring of a target String without a memory copy.
 *
 * @author nbilyk
 */
@Suppress("NAME_SHADOWING") class SubString(
	val target: String,
	from: Int = 0,
	to: Int = target.length
) : Comparable<SubString> {

	private var from: Int = 0
	private var to: Int = 0
	private var length: Int = 0

	init {
		setRange(from, to)
	}

	fun setRange(from: Int, to: Int) {
		if (from > to) throw IllegalArgumentException("to may not be greater than from")
		if (from < 0) throw IllegalArgumentException("from is out of bounds")
		if (to > target.length) throw IllegalArgumentException("to is out of bounds")
		this.from = from
		this.to = to
		this.length = to - from
		hash = 0 // Invalidate the cached hashcode.
	}

	fun length(): Int {
		return to - from
	}

	fun charAt(index: Int): Char {
		return target[index + from]
	}

	fun subSequence(start: Int, end: Int): String {
		return target.subSequence(start + from, end + from).toString()
	}

	fun endsWith(suffix: String): Boolean {
		return startsWith(suffix, length - suffix.length)
	}

	fun startsWith(prefix: String, offset: Int = 0): Boolean {
		var to = offset
		var po = 0
		var pc = prefix.length
		// Note: offset might be near -1>>>1.
		if ((offset < 0) || (offset > length - pc)) {
			return false
		}
		while (--pc >= 0) {
			if (charAt(to++) != prefix[po++]) {
				return false
			}
		}
		return true
	}

	fun indexOf(ch: Char, fromIndex: Int = 0): Int {
		var fromIndex = fromIndex
		val max = length
		if (fromIndex < 0) {
			fromIndex = 0
		} else if (fromIndex >= max) {
			// Note: fromIndex might be near -1>>>1.
			return -1
		}
		for (i in fromIndex..max - 1) {
			if (charAt(i) == ch) {
				return i
			}
		}
		return -1

	}

	fun lastIndexOf(ch: Char, fromIndex: Int = length - 1): Int {
		// handle most cases here (ch is a BMP code point or a
		// negative value (invalid code point))
		var i = minOf(fromIndex, length - 1)
		while (i >= 0) {
			if (charAt(i) == ch) {
				return i
			}
			i--
		}
		return -1
	}

	fun indexOf(str: String): Int {
		return indexOf(str, 0)
	}

	fun indexOf(str: String, fromIndex: Int): Int {
		return indexOf(this, 0, length, str, 0, str.length, fromIndex)
	}

	fun lastIndexOf(str: String): Int {
		return lastIndexOf(str, length)
	}

	fun lastIndexOf(str: String, fromIndex: Int): Int {
		return lastIndexOf(this, 0, length, str, 0, str.length, fromIndex)
	}

	fun compareTo(other: String): Int {
		val len1 = to - from
		val len2 = other.length
		val lim = minOf(len1, len2)

		var k = 0
		while (k < lim) {
			val c1 = target[k + from]
			val c2 = other[k]
			if (c1 != c2) {
				return c1.toInt() - c2.toInt()
			}
			k++
		}
		return len1 - len2
	}

	override fun compareTo(other: SubString): Int {
		val len1 = to - from
		val len2 = other.length()
		val lim = minOf(len1, len2)

		var k = 0
		while (k < lim) {
			val c1 = target[k + from]
			val c2 = other.charAt(k)
			if (c1 != c2) {
				return c1.toInt() - c2.toInt()
			}
			k++
		}
		return len1 - len2
	}

	override fun equals(other: Any?): Boolean {
		if (other is String) {
			var n = to - from
			if (n == other.length) {
				var i = 0
				while (n-- > 0) {
					if (target[i + from] != other[i])
						return false
					i++
				}
				return true
			}
		}
		return false
	}

	private var hash: Int = 0 // Default to 0

	override fun hashCode(): Int {
		var h = hash
		if (h == 0 && to > from) {
			for (i in from..to - 1) {
				h = 31 * h + target[i].toInt()
			}
			hash = h
		}
		return h
	}

	/**
	 * Creates a new String that is the substring of the target.
	 */
	override fun toString(): String {
		return subSequence(0, length)
	}



	companion object {

		fun indexOf(source: SubString, sourceOffset: Int, sourceCount: Int, target: String, targetOffset: Int, targetCount: Int, fromIndex: Int): Int {
			var fromIndex = fromIndex
			if (fromIndex >= sourceCount) {
				return (if (targetCount == 0) sourceCount else -1)
			}
			if (fromIndex < 0) {
				fromIndex = 0
			}
			if (targetCount == 0) {
				return fromIndex
			}

			val first = target[targetOffset]
			val max = sourceOffset + (sourceCount - targetCount)

			var i = sourceOffset + fromIndex
			while (i <= max) {
				/* Look for first character. */
				if (source.charAt(i) != first) {
					while (++i <= max && source.charAt(i) != first) {}
				}

				/* Found first character, now look at the rest of v2 */
				if (i <= max) {
					var j = i + 1
					val end = j + targetCount - 1
					var k = targetOffset + 1
					while (j < end && source.charAt(j) == target[k]) {
						j++
						k++
					}

					if (j == end) {
						/* Found whole string. */
						return i - sourceOffset
					}
				}
				i++
			}
			return -1
		}

		fun lastIndexOf(source: SubString, sourceOffset: Int, sourceCount: Int, target: String, targetOffset: Int, targetCount: Int, fromIndex: Int): Int {
			var fromIndex = fromIndex
			/*
					 * Check arguments; return immediately where possible. For
					 * consistency, don't check for null str.
					 */
			val rightIndex = sourceCount - targetCount
			if (fromIndex < 0) {
				return -1
			}
			if (fromIndex > rightIndex) {
				fromIndex = rightIndex
			}
			/* Empty string always matches. */
			if (targetCount == 0) {
				return fromIndex
			}

			val strLastIndex = targetOffset + targetCount - 1
			val strLastChar = target[strLastIndex]
			val min = sourceOffset + targetCount - 1
			var i = min + fromIndex

			startSearchForLastChar@ while (true) {
				while (i >= min && source.charAt(i) != strLastChar) {
					i--
				}
				if (i < min) {
					return -1
				}
				var j = i - 1
				val start = j - (targetCount - 1)
				var k = strLastIndex - 1

				while (j > start) {
					if (source.charAt(j--) != target[k--]) {
						i--
						continue@startSearchForLastChar
					}
				}
				return start - sourceOffset + 1
			}
		}
	}
}