package com.acornui.component

interface ItemRenderer<E> : Toggleable {

	/**
	 * The index of the data in the List this ItemRenderer represents.
	 */
	var index: Int

	/**
	 * The data this item renderer represents.
	 */
	var data: E?
}