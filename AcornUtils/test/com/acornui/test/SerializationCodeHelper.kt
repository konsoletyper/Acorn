package com.acornui.test


import kotlin.reflect.KClass
import kotlin.reflect.full.declaredMemberProperties
import kotlin.reflect.full.primaryConstructor

object SerializationCodeHelper {

	fun print(kClass: KClass<*>) {

		val simpleName = kClass.simpleName

		val simpleMap = mapOf(
				Pair("kotlin.Boolean", "bool"),
				Pair("kotlin.Int", "int"),
				Pair("kotlin.String", "string"),
				Pair("kotlin.Long", "long"),
				Pair("kotlin.Float", "float"),
				Pair("kotlin.Double", "double"),
				Pair("kotlin.Char", "char"),
				Pair("kotlin.Int", "int"),
				Pair("kotlin.BoolArray", "boolArray"),
				Pair("kotlin.IntArray", "intArray"),
				Pair("kotlin.ShortArray", "shortArray"),
				Pair("kotlin.LongArray", "longArray"),
				Pair("kotlin.FloatArray", "floatArray"),
				Pair("kotlin.DoubleArray", "doubleArray"),
				Pair("kotlin.CharArray", "charArray"),
				Pair("com.acornui.math.Vector2", "vector2"),
				Pair("com.acornui.math.Vector3", "vector3"),
				Pair("com.acornui.graphics.Color", "color")
		)

		val params = kClass.primaryConstructor?.parameters
		val paramNames = ArrayList<String>()
		if (params != null) {
			for (param in kClass.primaryConstructor!!.parameters) {
				paramNames.add(param.name ?: "")
			}
		}

		var writeProperties = ""
		var readProperties = ""
		var constructorParams = ""
		for (i in kClass.declaredMemberProperties) {
			val s = i.returnType.toString()
			val iName = i.name
			val isConstructorParam = paramNames.contains(iName)
			val writeStr: String
			val readStr: String
			if (simpleMap.containsKey(s)) {
				writeStr =  "writer.${simpleMap[s]}(\"$iName\", $iName)"
				readStr = "$iName = reader.${simpleMap[s]}(\"$iName\")!!"
			} else if (s.startsWith("kotlin.Array")) {
				val eType = s.substring("kotlin.Array".length + 1, s.length - 1)
				val eSimpleType = eType.substringAfterLast('.').trimEnd('?')
				writeStr =  "writer.array(\"$iName\", $iName, ${eSimpleType}Serializer)"
				readStr = "$iName = reader.array2(\"$iName\", ${eSimpleType}Serializer)!!"
			} else if (s.startsWith("java.util.ArrayList")) {
				val eType = s.substring("java.util.ArrayList".length + 1, s.length - 1)
				val eSimpleType = eType.substringAfterLast('.').trimEnd('?')
				writeStr =  "writer.array(\"$iName\", $iName, ${eSimpleType}Serializer)"
				readStr = "$iName = reader.arrayList(\"$iName\", ${eSimpleType}Serializer)!!"
			} else if (s.startsWith("kotlin.collections.MutableList")) {
				val eType = s.substring("kotlin.collections.MutableList".length + 1, s.length - 1)
				val eSimpleType = eType.substringAfterLast('.').trimEnd('?')
				writeStr =  "writer.array(\"$iName\", $iName, ${eSimpleType}Serializer)"
				readStr = "$iName = reader.arrayList(\"$iName\", ${eSimpleType}Serializer)!!"
			} else {
				var t = s
				val genericI = t.indexOf("<")
				if (genericI != -1) {
					t = t.substring(0, genericI)
				}
				t = t.substringAfterLast('.').trimEnd('?')
				writeStr =  "writer.obj(\"$iName\", $iName, ${t}Serializer)"
				readStr = "$iName = reader.obj(\"$iName\", ${t}Serializer)!!"
			}
			if (isConstructorParam) {
				if (constructorParams.isNotEmpty()) constructorParams += ","
				constructorParams += "\n\t\t\t$readStr"
			} else {
				readProperties += "\t\to.$readStr\n"
			}
			writeProperties += "\t\t$writeStr\n"
		}
		if (constructorParams.isNotEmpty()) constructorParams += "\n\t\t"
		readProperties = readProperties.trim()
		writeProperties = writeProperties.trim()

		println("""
object ${simpleName}Serializer : To<$simpleName>, From<$simpleName> {

	override fun read(reader: Reader): $simpleName {
		val o = $simpleName($constructorParams)
		$readProperties
		return o
	}

	override fun $simpleName.write(writer: Writer) {
		$writeProperties
	}
}
""")


	}
}