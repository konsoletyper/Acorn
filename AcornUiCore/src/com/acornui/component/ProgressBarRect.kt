package com.acornui.component

import com.acornui.action.Progress
import com.acornui.action.onSuccess
import com.acornui.component.style.*
import com.acornui.core.Disposable
import com.acornui.core.assets.AssetManager
import com.acornui.core.di.Owned
import com.acornui.core.di.inject
import com.acornui.core.popup.PopUpInfo
import com.acornui.core.popup.PopUpManager
import com.acornui.core.popup.addPopUp
import com.acornui.core.time.onTick
import com.acornui.graphics.Color
import com.acornui.math.Bounds
import com.acornui.math.Corners
import com.acornui.math.Pad

/**
 * A progress bar made from simple rectangles.
 */
class ProgressBarRect(owner: Owned) : ContainerImpl(owner) {



	val style = bind(ProgressBarRectStyle())

	val backRect = addChild(rect())
	val frontRect = addChild(rect())

	init {
		styleTags.add(ProgressBarRect)
		watch(style) {
			backRect.style.backgroundColor = it.bgColor
			backRect.style.borderColor = it.borderColor
			backRect.style.borderThickness = it.borderThickness
			backRect.style.borderRadius = it.borderRadius

			frontRect.style.backgroundColor = it.fillColor
		}
	}

	private var _progress: Float = 0f

	var progress: Float
		get() = _progress
		set(value) {
			if (_progress == value) return
			_progress = value
			invalidate(ValidationFlags.LAYOUT)
		}

	private var _watched: Disposable? = null
	private var targetP: Float = 0f

	fun watch(target: Progress) {
		_watched?.dispose()
		_watched = onTick {
			if (target.secondsTotal == 0f) targetP = 0f
			else targetP = target.secondsLoaded / target.secondsTotal
			progress += (targetP - progress) * 0.1f
		}
	}

	override fun updateLayout(explicitWidth: Float?, explicitHeight: Float?, out: Bounds) {
		val s = style
		val w = explicitWidth ?: s.defaultWidth
		val h = explicitHeight ?: s.defaultHeight

		backRect.setSize(w, h)

		val fillMaxW = s.borderThickness.reduceWidth2(w)
		val fillH = s.borderThickness.reduceHeight2(h)
		frontRect.setSize(fillMaxW * _progress, fillH)
		frontRect.setPosition(s.borderThickness.left, s.borderThickness.top)
		out.set(w, h)
	}

	fun reset() {
		progress = 0f
	}

	companion object : StyleTag
}

class ProgressBarRectStyle : StyleBase() {

	override val type: StyleType<ProgressBarRectStyle> = ProgressBarRectStyle

	var defaultWidth by prop(100f)
	var defaultHeight by prop(6f)
	var borderThickness by prop(Pad(2f))
	var borderRadius by prop(Corners())
	var borderColor by prop(BorderColors(Color.BLUE))
	var bgColor by prop(Color.GREEN.copy())
	var fillColor by prop(Color.RED.copy())

	companion object : StyleType<ProgressBarRectStyle>
}

fun progressBarRectStyle(init: ComponentInit<ProgressBarRectStyle> = {}): ProgressBarRectStyle {
	val s = ProgressBarRectStyle()
	s.init()
	return s
}

fun Owned.progressBarRect(init: ComponentInit<ProgressBarRect> = {}): ProgressBarRect {
	val p = ProgressBarRect(this)
	p.init()
	return p
}

private var progressBar: ProgressBarRect? = null
fun Owned.showAssetLoadingBar(onCompleted: () -> Unit = {}) {
	val assetManager = inject(AssetManager)
	if (assetManager.percentLoaded >= 0.9 || assetManager.loadingQueue.hasCompleted()) {
		onCompleted()
		return
	}
	if (progressBar == null) {
		progressBar = progressBarRect()
		val bar = progressBar!!
		bar.watch(assetManager)
	}
	assetManager.loadingQueue.onSuccess {
		onCompleted()
	}
	val progressBar = progressBar!!
	if (assetManager.percentLoaded >= 0.9 || assetManager.loadingQueue.hasCompleted()) {
		if (progressBar.parent == null) {
			progressBar.reset()
			val popUpManager = inject(PopUpManager)
			val popUp = addPopUp(PopUpInfo(progressBar, priority = 1000f, onCloseRequested = { false }))
			assetManager.loadingQueue.completed.addOnce {
				_, _ ->
				popUpManager.removePopUp(popUp)
			}
		}
	}
}