package com.acornui.component.layout.algorithm

import com.acornui.component.layout.LayoutElement
import com.acornui.math.Bounds
import org.junit.Assert.assertEquals
import org.junit.Test

class FlowLayoutTest {

	@Test
	fun getLines() {

		val flowLayout = FlowLayout()

		val elements = arrayListOf(
				spacer("one", 100f, 50f),
				spacer("two", 100f, 50f),
				spacer("three", 100f, 50f),
				spacer("four", 100f, 50f),
				spacer("five", 100f, 50f)
		)
		val bounds = Bounds()
		flowLayout.basicLayout(250f, null, elements, FlowLayoutStyle(), bounds)

		assertEquals(3, flowLayout.lines.size)
		assertEquals(0, flowLayout.lines[0].startIndex)
		assertEquals(2, flowLayout.lines[0].endIndex)
		assertEquals(2, flowLayout.lines[1].startIndex)
		assertEquals(4, flowLayout.lines[1].endIndex)
		assertEquals(4, flowLayout.lines[2].startIndex)
		assertEquals(5, flowLayout.lines[2].endIndex)
	}

	@Test
	fun getNextElementIndex() {
		val flowLayout = FlowLayout()
		val elements = arrayListOf(
				spacer("one", 40f, 10f),
				spacer("two", 90f, 50f),
				spacer("three", 30f, 50f),
				spacer("four", 60f, 30f),
				spacer("five", 90f, 20f),
				spacer("six", 70f, 70f),
				spacer("seven", 20f, 30f),
				spacer("eight", 30f, 10f),
				spacer("nine", 80f, 50f)
		)

		val bounds = Bounds()
		val style = FlowLayoutStyle()
		style.horizontalGap = 10f
		style.verticalGap = 20f
		flowLayout.basicLayout(250f, null, elements, style, bounds)

		// [40,10], [90,50], [30,50], [60, 30]      Line: width: 200, height: 50, y: 0
		// [90,20], [70, 70], [20, 30], [30, 10]    Line: width: 240, height: 70, y: 70
		// [80,50] 									Line: width: 80,  height: 50, y: 160

		assertEquals(0, flowLayout.getNextElementIndex(0f, 0f, elements))
		assertEquals(0, flowLayout.getNextElementIndex(-1f, 0f, elements))
		assertEquals(0, flowLayout.getNextElementIndex(100f, -1f, elements))
		assertEquals(1, flowLayout.getNextElementIndex(40f, 0f, elements))
		assertEquals(2, flowLayout.getNextElementIndex(179f, 0f, elements))

		assertEquals(4, flowLayout.getNextElementIndex(-1f, 70f, elements))


		assertEquals(8, flowLayout.getNextElementIndex(-1f, 160f, elements))
		assertEquals(elements.lastIndex, flowLayout.getNextElementIndex(79f, 209f, elements))
		assertEquals(elements.size, flowLayout.getNextElementIndex(0f, 210f, elements))
		assertEquals(elements.size, flowLayout.getNextElementIndex(80f, 209f, elements))
	}

	@Test
	fun getPreviousElementIndex() {
		val flowLayout = FlowLayout()
		val elements = arrayListOf(
				spacer("one", 40f, 10f),
				spacer("two", 90f, 50f),
				spacer("three", 30f, 50f),
				spacer("four", 60f, 30f),
				spacer("five", 90f, 20f),
				spacer("six", 70f, 70f),
				spacer("seven", 20f, 30f),
				spacer("eight", 30f, 10f),
				spacer("nine", 80f, 50f)
		)

		val bounds = Bounds()
		val style = FlowLayoutStyle()
		style.horizontalGap = 10f
		style.verticalGap = 20f
		flowLayout.basicLayout(250f, null, elements, style, bounds)

		// [40,10], [90,50], [30,50], [60, 30]      Line: width: 250, height: 50, y: 0
		// [90,20], [70, 70], [20, 30], [30, 10]    Line: width: 240, height: 70, y: 70
		// [80,50] 									Line: width: 80,  height: 50, y: 160

		assertEquals(0, flowLayout.getPreviousElementIndex(0f, 0f, elements))
		assertEquals(-1, flowLayout.getPreviousElementIndex(-1f, 0f, elements))
		assertEquals(-1, flowLayout.getPreviousElementIndex(100f, -1f, elements))
		assertEquals(0, flowLayout.getPreviousElementIndex(40f, 0f, elements))
		assertEquals(0, flowLayout.getPreviousElementIndex(49f, 0f, elements))
		assertEquals(1, flowLayout.getPreviousElementIndex(50f, 0f, elements))
		assertEquals(2, flowLayout.getPreviousElementIndex(189f, 0f, elements))
		assertEquals(3, flowLayout.getPreviousElementIndex(190f, 0f, elements))

		assertEquals(3, flowLayout.getPreviousElementIndex(-1f, 70f, elements))
		assertEquals(7, flowLayout.getPreviousElementIndex(240f, 70f, elements))


		assertEquals(7, flowLayout.getPreviousElementIndex(-1f, 160f, elements))
		assertEquals(elements.lastIndex, flowLayout.getPreviousElementIndex(79f, 209f, elements))
		assertEquals(elements.lastIndex, flowLayout.getPreviousElementIndex(0f, 210f, elements))
		assertEquals(elements.lastIndex, flowLayout.getPreviousElementIndex(80f, 209f, elements))
	}

	fun spacer(name: String, width: Float, height: Float): LayoutElement {
		return DummySpacer(name, width, height)
	}

}
