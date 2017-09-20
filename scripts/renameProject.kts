/*
 * Copyright 2017 Nicholas Bilyk
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

/**
 * newProject.kts Will copy a folder, and will do a series of filename and token replacements to
 */


import java.io.File

import kotlin.text.Regex

if (args.size != 2) error("Usage: path/sourceFolder path/destFolder")

val source = args[0]
val destination = args[1]
val sourceDir = File(source)
val destinationDir = File(destination)

if (!sourceDir.exists()) error("source '$source' does not exist.")
if (destinationDir.exists()) error("Destination already exists.")
println("Destination ${destinationDir.absolutePath}")
sourceDir.copyRecursively(destinationDir)

val templateName = sourceDir.name
val newProjectName = destinationDir.name
val replacements = ArrayList<Pair<String, String>>()
replacements.add(Pair(templateName, newProjectName))
replacements.add(Pair(templateName.toLowerCase(), newProjectName.toLowerCase()))
replacements.add(Pair(templateName.toUpperCase(), newProjectName.toUpperCase()))
replacements.add(Pair(templateName.toUnderscoreCase(), newProjectName.toUnderscoreCase()))
replacements.add(Pair(templateName.toUnderscoreCase().toUpperCase(), newProjectName.toUnderscoreCase().toUpperCase()))
replacements.add(Pair(templateName.toFirstLowerCase(), newProjectName.toFirstLowerCase()))

val txtExtensions = arrayOf("name", "txt", "xml", "kt", "kts", "java", "json", "iml", "js", "html", "php", "css")
val excludes = arrayOf("dist", "out", "www", "wwwDist", "workspace.xml", ".git", ".svn")

for (i in destinationDir.walkBottomUp()) {
	if (excludes.contains(i.name)) {
		i.deleteRecursively()
		continue
	}
	if (txtExtensions.contains(i.extension.toLowerCase())) {
		val text = i.readText()
		val newText = text.replaceList(replacements)
		i.writeText(newText)
	}
	val newName = i.name.replaceList(replacements)
	i.renameTo(File(i.parentFile, newName))
}

fun String.toUnderscoreCase(): String {
	return replace(Regex("([a-z])([A-Z]+)"), "$1_$2").toLowerCase()
}

fun String.toFirstLowerCase(): String {
	return this[0].toLowerCase() + substring(1)
}

fun String.replaceList(replacements: ArrayList<Pair<String, String>>): String {
	var str = this
	for (i in replacements) {
		str = str.replace(i.first, i.second)
	}
	return str
}

fun error(msg: String) {
	println(msg)
	System.exit(-1)
}