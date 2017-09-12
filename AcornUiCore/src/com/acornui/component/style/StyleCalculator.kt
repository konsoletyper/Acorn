package com.acornui.component.style

import com.acornui.collection.addSorted
import com.acornui.collection.forEach2
import com.acornui.collection.forEachReversed2

/**
 * A style calculator is responsible for setting the calculated values
 */
interface StyleCalculator {
	fun calculate(style: MutableStyle, target: StyleableRo)
}

object CascadingStyleCalculator : StyleCalculator {

	private val entries = ArrayList<StyleRule<*>>()
	private val calculated = HashMap<String, Any?>()
	private val tmp = ArrayList<StyleRule<*>>()

	private val entrySortComparator = {
		o1: StyleRule<*>, o2: StyleRule<*> ->
		-o1.priority.compareTo(o2.priority) // Higher priority values come first.
	}

	override fun calculate(style: MutableStyle, target: StyleableRo) {
		calculated.clear()

		// Collect all style rule objects for the bound style type and tags.
		// These entries will be sorted first by priority, and then by ancestry level.
		entries.clear()
		target.walkStyleableAncestry {
			ancestor ->
			style.type.walkInheritance {
				styleType ->
				ancestor.getRulesByType(styleType, tmp)
				tmp.forEachReversed2 {
					entry ->
					if (entry.filter(target) != null) {
						entries.addSorted(entry, entrySortComparator)
					}
				}
			}
		}

		// Apply style entries to the calculated values of the bound style.
		entries.forEach2 {
			entry ->
			for (e in entry.style.explicit) {
				if (!calculated.containsKey(e.key)) {
					calculated[e.key] = e.value
				}
			}
		}
		if (calculated != style.calculated) {
			style.calculated.clear()
			style.calculated.putAll(calculated)
			style.modTag.increment()
		}
	}
}