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

package com.acornui.component.style

import com.acornui.collection.ActiveList
import com.acornui.collection.Clearable
import com.acornui.collection.WatchedElementsActiveList
import com.acornui.component.UiComponent
import com.acornui.core.Disposable
import com.acornui.core.di.Owned
import com.acornui.observe.*
import com.acornui.serialization.Writer
import com.acornui.signal.Signal
import com.acornui.signal.Signal1
import kotlin.properties.ReadWriteProperty
import kotlin.reflect.KProperty

/**
 * A Style object contains maps of style properties.
 */
interface Style : Observable {

	val type: StyleType<*>

	/**
	 * The style properties, if they were explicitly set.
	 */
	val explicit: Map<String, Any?>

	/**
	 * The style properties, as calculated by a [StyleCalculator].
	 */
	val calculated: Map<String, Any?>

	/**
	 * When either the explicit or calculated values change, the mod tag is incremented.
	 */
	val modTag: ModTag
}

/**
 * Readable-writable styles.
 */
interface MutableStyle : Style, Clearable {

	override val explicit: MutableMap<String, Any?>

	override val calculated: MutableMap<String, Any?>

	/**
	 * Dispatches a [changed] signal.
	 * This should only be invoked if the explicit values have changed.
	 */
	fun notifyChanged()

	override val modTag: MutableModTag
}

/**
 * A Style object with no style properties.
 */
class NoopStyle : StyleBase(), StyleType<NoopStyle> {
	override val type = this
}

/**
 * The base class for a typical [MutableStyle] implementation.
 */
abstract class StyleBase : MutableStyle, Disposable {

	private val _changed = Signal1<Observable>()
	override val changed: Signal<(Observable) -> Unit>
		get() = _changed

	override val modTag = ModTagImpl()

	override fun clear() {
		explicit.clear()
		calculated.clear()
		notifyChanged()
	}

	override val explicit = HashMap<String, Any?>()
	override val calculated = HashMap<String, Any?>()

	protected fun <P> prop(defaultValue: P) = StyleProp(defaultValue)

	override fun notifyChanged() {
		modTag.increment()
		_changed.dispatch(this)
	}

	override fun dispose() {
		_changed.dispose()
	}
}

@Deprecated("Use bind", ReplaceWith("bind(this, callback)"), DeprecationLevel.ERROR)
fun <T : Style> T.onChanged(callback: (T) -> Unit) {
}

@Deprecated("Use bind", ReplaceWith("bind(style)"), DeprecationLevel.ERROR)
fun <T : Style> UiComponent.style(style: T): T {
	return style
}

class StyleValidator(
		val style: MutableStyle,
		private val calculator: StyleCalculator
) {

	fun validate(host: Styleable) {
		calculator.calculate(style, host)
	}
}

class StyleWatcher<out T : Style>(
		val style: T,
		val priority: Float,
		private val onChanged: (T) -> Unit
) : Comparable<StyleWatcher<*>> {

	private val styleWatch = ModTagWatch()

	override fun compareTo(other: StyleWatcher<*>): Int {
		return -priority.compareTo(other.priority)
	}

	fun check() {
		if (styleWatch.set(style.modTag)) {
			onChanged(style)
		}
	}
}

/**
 * Updates several properties at once, only notifying change handlers at the end.
 */
@Deprecated(replaceWith = ReplaceWith("apply(contents)"), message = "Use apply, batching no longer does anything.")
fun <T : StyleBase> T.batch(contents: T.() -> Unit) {
	contents()
}


/**
 * Returns a writer for the style's property if and only if that property is explicitly set.
 */
fun Writer.styleProperty(style: MutableStyle, id: String): Writer? {
	if (!style.explicit.containsKey(id)) return null
	return property(id)
}

/**
 * Sets this style to match that of the other style.
 */
@Suppress("unchecked_cast")
fun <T : MutableStyle> T.set(other: T) {
	explicit.clear()
	explicit.putAll(other.calculated)
	explicit.putAll(other.explicit)
	notifyChanged()
}

open class StyleProp<T>(val defaultValue: T) : ReadWriteProperty<MutableStyle, T> {

	@Suppress("unchecked_cast")
	override fun getValue(thisRef: MutableStyle, property: KProperty<*>): T {
		if (thisRef.explicit.containsKey(property.name)) {
			return thisRef.explicit[property.name]!! as T
		} else if (thisRef.calculated.containsKey(property.name)) {
			return thisRef.calculated[property.name]!! as T
		} else {
			return defaultValue
		}
	}

	override fun setValue(thisRef: MutableStyle, property: KProperty<*>, value: T) {
		thisRef.explicit[property.name] = value as Any?
		thisRef.notifyChanged()
	}
}

/**
 * Used as a placeholder for skin part factories that need to be declared in the skin.
 */
val noSkin: Owned.() -> UiComponent = { throw Exception("Skin part must be created.") }
val noSkinOptional: Owned.() -> UiComponent? = { null }