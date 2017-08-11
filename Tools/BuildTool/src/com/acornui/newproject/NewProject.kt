package com.acornui.newproject

import com.acornui.build.ArgumentMap
import java.io.File

import kotlin.text.Regex

fun main(args: Array<String>) {
	val argMap = ArgumentMap(args)

	if (!argMap.exists("name")) {
		println("Usage: -name=[name] -destination=[destination] -template=(optional) -templatesDir=(optional)")
		System.exit(-1)
	}

	val name = argMap.get("name")!!
	val template = argMap.get("template", "HelloWorld")
	val destination = File(argMap.get("destination", "d", "."), name)

	if (destination.exists()) {
		System.err.println("Destination already exists.")
		System.exit(-1)
	}
	println("Destination ${destination.absolutePath}")

	// Find the template:
	val templatesDirStr = argMap.get("templatesDir", "../AcornUiDemos")
	var templatesDir = File(templatesDirStr)
	if (!templatesDir.exists()) templatesDir = File(findAcornDir(), argMap.get("templatesDir", "../AcornUiDemos"))
	if (!templatesDir.exists()) throw Exception("Could not find templates directory: $templatesDirStr")
	val templateDir: File = File(templatesDir, template)
	println("Template used: ${templateDir.absolutePath}")
	if (!templateDir.exists()) throw Exception("Could not find template: $template")

	templateDir.copyRecursively(destination)
	val replacements = ArrayList<Pair<String, String>>()
	replacements.add(Pair(template, name))
	replacements.add(Pair(template.toLowerCase(), name.toLowerCase()))
	replacements.add(Pair(template.toUpperCase(), name.toUpperCase()))
	replacements.add(Pair(template.toUnderscoreCase(), name.toUnderscoreCase()))
	replacements.add(Pair(template.toUnderscoreCase().toUpperCase(), name.toUnderscoreCase().toUpperCase()))
	replacements.add(Pair(template.toFirstLowerCase(), name.toFirstLowerCase()))

	val txtExtensions = arrayOf("name", "txt", "xml", "kt", "kts", "java", "json", "iml", "js", "html", "php", "css")
	val excludes = arrayOf("dist", "out", "www", "acornlibs", "workspace.xml")

	for (i in destination.walkBottomUp()) {
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
}

private fun findAcornDir(): File {
	val jarPath = NewProject::class.java.protectionDomain.codeSource.location.toURI().path
	val KEY = "AcornUi/"
	val i = jarPath.lastIndexOf(KEY)
	return File(jarPath.substring(0, i + KEY.length))
}

private fun String.toUnderscoreCase(): String {
	return replace(Regex("([a-z])([A-Z]+)"), "$1_$2").toLowerCase()
}

private fun String.toFirstLowerCase(): String {
	return this[0].toLowerCase() + substring(1)
}

private fun String.replaceList(replacements: ArrayList<Pair<String, String>>): String {
	var str = this
	for (i in replacements) {
		str = str.replace(i.first, i.second)
	}
	return str
}

object NewProject {}