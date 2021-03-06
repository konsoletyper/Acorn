package com.acornui.core.persistance

import com.acornui.collection.Clearable
import com.acornui.core.VersionRo
import com.acornui.core.di.DKey

interface Persistence : Clearable {

	/**
	 * The version of the application as described in [AppConfig.version] when the persistence was last saved.
	 * This will be null if there was nothing loaded.
	 */
	val version: VersionRo?

	val allowed: Boolean

	/**
	 * Returns an integer representing the number of data items stored.
	 */
	val length: Int

	/**
	 * Returns the key at the specified index.
	 */
	fun key(index: Int): String?

	fun getItem(key: String): String?
	fun setItem(key: String, value: String)
	fun removeItem(key: String)
	override fun clear()

	/**
	 * Ensures that the persistence is written to disk. Note that not all implementations necessarily wait for this.
	 */
	fun flush()

	companion object : DKey<Persistence>
}
