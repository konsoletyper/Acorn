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

package com.acornui.core.io.file

import com.acornui.collection.pop
import com.acornui.core.di.DKey
import com.acornui.io.file.FilesManifest
import com.acornui.core.replace2
import com.acornui.core.split2


interface Files {

	fun getFile(path: String): FileEntry?

	fun getDir(path: String): Directory?

	companion object : DKey<Files>
}

/**
 * Files allows you to check if a file or directory exists without making a request.
 * Files depends on manifest data provided in the application bootstrap. This data should be auto-generated
 * by the AcornAssets ant task.
 */
class FilesImpl(manifest: FilesManifest): Files {

	private val map: HashMap<String, FileEntry> = HashMap()

	val rootDir: Directory = Directory("")

	init {
		for (file in manifest.files) {
			// Create all directories leading up to the new file entry.
			val path = file.path
			val pathSplit = path.split("/")
			var p = rootDir
			for (i in 0..pathSplit.lastIndex - 1) {
				val part = pathSplit[i]
				var dir = p.directories[part]
				if (dir == null) {
					val newPath = if (p == rootDir) part else p.path + "/" + part
					dir = Directory(newPath, p)
					p.directories.put(part, dir)
				}
				p = dir
			}
			val fileEntry = FileEntry(file.path, file.modified, file.size, p)
			map.put(fileEntry.path, fileEntry)

			// Add the file entry to the directory.
			p.files.put(pathSplit.last(), fileEntry)
		}
	}

	override fun getFile(path: String): FileEntry? {
		val entry = map[path.replace2('\\', '/')]
		return entry
	}

	override fun getDir(path: String): Directory? {
		var p: Directory? = rootDir
		val pathSplit = path.replace2('\\', '/').split2('/')
		for (part in pathSplit) {
			if (p == null) return null
			p = p.getDir(part)
		}
		return p
	}
}



class FileEntry(
		val path: String = "",
		val modified: Long = 0,
		val size: Long = 0,
		val parent: Directory
) : Comparable<FileEntry> {

	fun siblingFile(name: String): FileEntry? {
		return parent.getFile(name)
	}

	fun siblingDir(name: String): Directory? {
		return parent.getDir(name)
	}

	fun name(): String {
		return path.substringAfterLast('/')
	}

	fun nameNoExtension(): String {
		return path.substringAfterLast('/').substringBeforeLast('.')
	}

	fun extension(): String {
		return path.substringAfterLast('.')
	}

	fun hasExtension(extension: String): Boolean {
		return extension().equals(extension, ignoreCase = true)
	}

	/**
	 * Calculates the number of directories deep this file entry is.
	 */
	fun depth(): Int {
		var count = -1
		var index = -1
		do {
			count++
			index = path.indexOf('/', index + 1)
		} while (index != -1)
		return count
	}

	override fun compareTo(other: FileEntry): Int {
		if (depth() == other.depth()) {
			return path.compareTo(other.path)
		} else {
			return depth().compareTo(other.depth())
		}
	}
}


class Directory(val path: String, parent: Directory? = null) : Comparable<Directory> {

	private val _parent: Directory? = parent

	val directories: HashMap<String, Directory> = HashMap()
	val files: HashMap<String, FileEntry> = HashMap()

	fun name(): String {
		return path.substringAfterLast('/')
	}

	fun depth(): Int {
		var count = 0
		var p: Directory? = this
		while (p != null) {
			count++
			p = p.parent()
		}
		return count
	}

	fun getFile(name: String): FileEntry? {
		return files[name]
	}

	fun getDir(name: String): Directory? {
		return directories[name]
	}

	fun parent(): Directory? {
		return _parent
	}

	/**
	 * Recursively invokes a callback on all descendant files in this directory.
	 * @param callback Invoked once for each file. If the callback returns false, the iteration will immediately stop.
	 * @param maxDepth The maximum depth to traverse. A maxDepth of 0 will not follow any subdirectories of this directory.
	 */
	fun mapFiles(callback: (FileEntry) -> Boolean, maxDepth: Int = 100) {
		val openList = ArrayList<Directory>()
		val depths = ArrayList<Int>()
		openList.add(this)
		depths.add(0)

		while (openList.isNotEmpty()) {
			val next = openList.pop()
			val depth = depths.pop()
			for (file in next.files.values.sorted()) {
				val shouldContinue = callback(file)
				if (!shouldContinue) return
			}
			if (depth < maxDepth) {
				for (i in next.directories.values.sorted()) {
					openList.add(i)
					depths.add(depth + 1)
				}
			}
		}
	}

	/**
	 * Recursively invokes a callback on all descendant directories in this directory.
	 * @param callback Invoked once for each directory (Not including this directory). If the callback returns false, the iteration will immediately stop.
	 * @param maxDepth The maximum depth to traverse. A maxDepth of 0 will not follow any subdirectories of this directory.
	 */
	fun mapDirectories(callback: (Directory) -> Boolean, maxDepth: Int = 100) {
		val openList = ArrayList<Directory>()
		val depths = ArrayList<Int>()
		openList.add(this)
		depths.add(0)

		while (openList.isNotEmpty()) {
			val next = openList.pop()
			val depth = depths.pop()
			for (dir in next.directories.values.sorted()) {
				val shouldContinue = callback(dir)
				if (!shouldContinue) return

				if (depth < maxDepth) {
					openList.add(dir)
					depths.add(depth + 1)
				}
			}
		}
	}

	override fun compareTo(other: Directory): Int {
		if (depth() == other.depth()) {
			return path.compareTo(other.path)
		} else {
			return depth().compareTo(other.depth())
		}
	}

	fun relativePath(file: FileEntry): String {
		return file.path.substringAfter(path + "/", path)
	}
}
