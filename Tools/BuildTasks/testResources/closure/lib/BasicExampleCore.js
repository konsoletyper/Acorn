if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'BasicExampleCore'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'BasicExampleCore'.");
}
if (typeof AcornUiCore === 'undefined') {
  throw new Error("Error loading module 'BasicExampleCore'. Its dependency 'AcornUiCore' was not found. Please, check whether 'AcornUiCore' is loaded prior to 'BasicExampleCore'.");
}
if (typeof AcornUtils === 'undefined') {
  throw new Error("Error loading module 'BasicExampleCore'. Its dependency 'AcornUtils' was not found. Please, check whether 'AcornUtils' is loaded prior to 'BasicExampleCore'.");
}
var BasicExampleCore = function (_, Kotlin, $module$AcornUiCore, $module$AcornUtils) {
  'use strict';
  var click = $module$AcornUiCore.com.acornui.core.input.interaction.click_3ayf9d$;
  var CanvasLayoutContainer = $module$AcornUiCore.com.acornui.component.layout.algorithm.CanvasLayoutContainer;
  var Tween = $module$AcornUiCore.com.acornui.core.tween.Tween;
  var BasicUiSkin = $module$AcornUiCore.com.acornui.skins.BasicUiSkin;
  var Stage = $module$AcornUiCore.com.acornui.component.Stage;
  var inject = $module$AcornUiCore.com.acornui.core.di.inject_y3a68v$;
  var loadingQueueBusyWatch = $module$AcornUiCore.com.acornui.core.assets.loadingQueueBusyWatch_4yfvcu$;
  var Pad_init = $module$AcornUtils.com.acornui.math.Pad_init_mx4ult$;
  var FlowVAlign = $module$AcornUiCore.com.acornui.component.layout.algorithm.FlowVAlign;
  var flow = $module$AcornUiCore.com.acornui.component.layout.algorithm.flow_sg545c$;
  var text_0 = $module$AcornUiCore.com.acornui.component.text.text_7i1swk$;
  var textInput = $module$AcornUiCore.com.acornui.component.text.textInput_6756bu$;
  var vGroup = $module$AcornUiCore.com.acornui.component.layout.algorithm.vGroup_hlverc$;
  var scrollArea = $module$AcornUiCore.com.acornui.component.scroll.scrollArea_fanjlz$;
  var hDivider = $module$AcornUiCore.com.acornui.component.hDivider_cmra5n$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var loadJson = $module$AcornUiCore.com.acornui.core.assets.loadJson_de16hq$;
  var obj = $module$AcornUtils.com.acornui.serialization.obj_3axv6d$;
  var From = $module$AcornUtils.com.acornui.serialization.From;
  var int = $module$AcornUtils.com.acornui.serialization.int_uavegi$;
  var string = $module$AcornUtils.com.acornui.serialization.string_uavegi$;
  var VerticalLayoutContainer = $module$AcornUiCore.com.acornui.component.layout.algorithm.VerticalLayoutContainer;
  var image = $module$AcornUiCore.com.acornui.component.image_3mizo5$;
  var rollOver = $module$AcornUiCore.com.acornui.core.input.interaction.rollOver_3ayf9d$;
  var rollOut = $module$AcornUiCore.com.acornui.core.input.interaction.rollOut_3ayf9d$;
  var cursor_0 = $module$AcornUiCore.com.acornui.core.cursor;
  var cursor_1 = $module$AcornUiCore.com.acornui.core.cursor.cursor_43s1tk$;
  var assets_0 = $module$AcornUiCore.com.acornui.core.assets;
  var TextureMinFilter = $module$AcornUiCore.com.acornui.gl.core.TextureMinFilter;
  var contentsTexture = $module$AcornUiCore.com.acornui.component.contentsTexture_ekwtfz$;
  var math_0 = $module$AcornUtils.com.acornui.math;
  var tweenAlpha = $module$AcornUiCore.com.acornui.core.tween.tweenAlpha_r80noc$;
  var onSuccess = $module$AcornUtils.com.acornui.action.onSuccess_ehmz8c$;
  var PopUpInfo = $module$AcornUiCore.com.acornui.core.popup.PopUpInfo;
  var addPopUp = $module$AcornUiCore.com.acornui.core.popup.addPopUp_40ntlz$;
  var removePopUp = $module$AcornUiCore.com.acornui.core.popup.removePopUp_9wppfc$;
  var image_0 = $module$AcornUiCore.com.acornui.component.image_e3xjfr$;
  var canvasLayoutData = $module$AcornUiCore.com.acornui.component.layout.algorithm.canvasLayoutData_jc13db$;
  var hSlider = $module$AcornUiCore.com.acornui.component.scroll.hSlider_wwgp2a$;
  var FlowHAlign = $module$AcornUiCore.com.acornui.component.layout.algorithm.FlowHAlign;
  var text_1 = $module$AcornUiCore.com.acornui.component.text.text_os944a$;
  var hGroup = $module$AcornUiCore.com.acornui.component.layout.algorithm.hGroup_aiug52$;
  var StackLayoutContainer = $module$AcornUiCore.com.acornui.component.StackLayoutContainer;
  var GradientDirection = $module$AcornUiCore.com.acornui.component.GradientDirection;
  var Color = $module$AcornUtils.com.acornui.graphics.Color;
  var ColorStop = $module$AcornUiCore.com.acornui.component.ColorStop;
  var LinearGradient = $module$AcornUiCore.com.acornui.component.LinearGradient_ngm8nz$;
  var keyDown = $module$AcornUiCore.com.acornui.core.input.keyDown_3ayf9d$;
  var input_0 = $module$AcornUiCore.com.acornui.core.input;
  var GlState = $module$AcornUiCore.com.acornui.gl.core.GlState;
  var VAlign = $module$AcornUiCore.com.acornui.component.layout.VAlign;
  var Corners_init = $module$AcornUtils.com.acornui.math.Corners_init_mx4ult$;
  var Pad = $module$AcornUtils.com.acornui.math.Pad;
  var BorderColors = $module$AcornUiCore.com.acornui.component.BorderColors;
  var Color_0 = $module$AcornUtils.com.acornui.graphics.Color_s8cxhz$;
  var StackLayoutData = $module$AcornUiCore.com.acornui.component.StackLayoutData;
  var rect = $module$AcornUiCore.com.acornui.component.rect_85s2bm$;
  var formLabel = $module$AcornUiCore.com.acornui.component.layout.algorithm.formLabel_7i1swk$;
  var form = $module$AcornUiCore.com.acornui.component.layout.algorithm.form_9z364$;
  var headingGroup = $module$AcornUiCore.com.acornui.component.headingGroup_uj34qx$;
  var colorPicker = $module$AcornUiCore.com.acornui.component.colorPicker_8hoamn$;
  var radioGroup = $module$AcornUiCore.com.acornui.component.radioGroup_345k54$;
  var hr = $module$AcornUiCore.com.acornui.component.hr_t01pre$;
  var HAlign = $module$AcornUiCore.com.acornui.component.layout.HAlign;
  var Pad_init_0 = $module$AcornUtils.com.acornui.math.Pad_init;
  var panel = $module$AcornUiCore.com.acornui.component.panel_4k1mq$;
  var stack = $module$AcornUiCore.com.acornui.component.stack_339xz$;
  var Enum = Kotlin.kotlin.Enum;
  var I18n = $module$AcornUiCore.com.acornui.core.i18n.I18n;
  var button = $module$AcornUiCore.com.acornui.component.button_907r7w$;
  var i18n_0 = $module$AcornUiCore.com.acornui.core.i18n.i18n_jshkfs$;
  var activeListOf = $module$AcornUtils.com.acornui.collection.activeListOf_i5x0yv$;
  var replaceTokens = $module$AcornUtils.com.acornui.core.replaceTokens_5gqing$;
  var IntColumn = $module$AcornUiCore.com.acornui.component.datagrid.IntColumn;
  var dataGrid = $module$AcornUiCore.com.acornui.component.datagrid.dataGrid_8c2cvs$;
  BasicExample.prototype = Object.create(CanvasLayoutContainer.prototype);
  BasicExample.prototype.constructor = BasicExample;
  PhotoView.prototype = Object.create(VerticalLayoutContainer.prototype);
  PhotoView.prototype.constructor = PhotoView;
  FullSizePhotoView.prototype = Object.create(CanvasLayoutContainer.prototype);
  FullSizePhotoView.prototype.constructor = FullSizePhotoView;
  BasicExample2.prototype = Object.create(StackLayoutContainer.prototype);
  BasicExample2.prototype.constructor = BasicExample2;
  GradientType.prototype = Object.create(Enum.prototype);
  GradientType.prototype.constructor = GradientType;
  ColorTransformExample.prototype = Object.create(StackLayoutContainer.prototype);
  ColorTransformExample.prototype.constructor = ColorTransformExample;
  DataGridExample_init$lambda$ObjectLiteral.prototype = Object.create(IntColumn.prototype);
  DataGridExample_init$lambda$ObjectLiteral.prototype.constructor = DataGridExample_init$lambda$ObjectLiteral;
  DataGridExample_init$lambda$ObjectLiteral_0.prototype = Object.create(IntColumn.prototype);
  DataGridExample_init$lambda$ObjectLiteral_0.prototype.constructor = DataGridExample_init$lambda$ObjectLiteral_0;
  DataGridExample_init$lambda$ObjectLiteral_1.prototype = Object.create(IntColumn.prototype);
  DataGridExample_init$lambda$ObjectLiteral_1.prototype.constructor = DataGridExample_init$lambda$ObjectLiteral_1;
  DataGridExample.prototype = Object.create(StackLayoutContainer.prototype);
  DataGridExample.prototype.constructor = DataGridExample;
  function BasicExample(owner) {
    CanvasLayoutContainer.call(this, owner);
    this.resultsContainer_0 = null;
    this.fullSizeView_0 = null;
    Tween.Companion.prepare();
    (new BasicUiSkin()).init_k58t2y$(inject(this, Stage.Companion));
    loadingQueueBusyWatch(this).start();
    this.resultsContainer_0 = flow(this, BasicExample_init$lambda);
    this.layout_ge8abi$(this.unaryPlus_8db8yx$(hDivider(this, BasicExample_init$lambda_0(this))), BasicExample_init$lambda_1);
    this.fullSizeView_0 = new FullSizePhotoView(this);
    loadJson(this, 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&api_key=9c34c6a178296924aa692370f6b25972&tags=yokota+air+base&safe_search=1&per_page=100', FlickrSearchResultsVo$Companion_getInstance(), BasicExample_init$lambda_2(this));
  }
  function BasicExample$data$lambda(this$BasicExample, closure$photoVo) {
    return function (it) {
      this$BasicExample.fullSizeView_0.show_2vs9qh$(closure$photoVo);
    };
  }
  BasicExample.prototype.data_0 = function (value) {
    var tmp$, tmp$_0;
    this.resultsContainer_0.clearElements_6taknv$(true);
    tmp$ = value.photos.photos;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var photoVo = tmp$[tmp$_0];
      var view = new PhotoView(this, photoVo);
      click(view).add_trkh7z$(BasicExample$data$lambda(this, photoVo));
      this.resultsContainer_0.addElement_mxweac$(view);
    }
  };
  function BasicExample_init$lambda($receiver) {
    var $receiver_0 = $receiver.layoutAlgorithm;
    $receiver_0.padding = Pad_init(15.0);
    $receiver_0.verticalAlign = FlowVAlign.TOP;
    $receiver_0.verticalGap = 10.0;
  }
  function BasicExample_init$lambda$lambda$lambda$lambda($receiver) {
    $receiver.widthPercent = 1.0;
  }
  function BasicExample_init$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.widthPercent = 1.0;
  }
  function BasicExample_init$lambda$lambda$lambda($receiver) {
    $receiver.layoutAlgorithm.padding = Pad_init(15.0);
    $receiver.layout_ge8abi$($receiver.unaryPlus_8db8yx$(text_0($receiver, 'This is a very basic demo of some AcornUI user interface components and layouts, invoking a Flickr API, and displaying the results.')), BasicExample_init$lambda$lambda$lambda$lambda);
    $receiver.layout_ge8abi$($receiver.unaryPlus_8db8yx$(textInput($receiver)), BasicExample_init$lambda$lambda$lambda$lambda_0);
  }
  function BasicExample_init$lambda$lambda$lambda_0($receiver) {
    $receiver.widthPercent = 1.0;
  }
  function BasicExample_init$lambda$lambda($receiver) {
    $receiver.layout_ge8abi$($receiver.unaryPlus_8db8yx$(vGroup($receiver, BasicExample_init$lambda$lambda$lambda)), BasicExample_init$lambda$lambda$lambda_0);
  }
  function BasicExample_init$lambda$lambda$lambda_1($receiver) {
    $receiver.widthPercent = 1.0;
  }
  function BasicExample_init$lambda$lambda_0(this$BasicExample) {
    return function ($receiver) {
      $receiver.layout_ge8abi$($receiver.unaryPlus_8db8yx$(this$BasicExample.resultsContainer_0), BasicExample_init$lambda$lambda$lambda_1);
    };
  }
  function BasicExample_init$lambda_0(this$BasicExample) {
    return function ($receiver) {
      $receiver.split_mx4ult$(0.25);
      $receiver.unaryPlus_8db8yx$(scrollArea($receiver, BasicExample_init$lambda$lambda));
      $receiver.unaryPlus_8db8yx$(scrollArea($receiver, BasicExample_init$lambda$lambda_0(this$BasicExample)));
    };
  }
  function BasicExample_init$lambda_1($receiver) {
    $receiver.widthPercent = 1.0;
    $receiver.heightPercent = 1.0;
  }
  function BasicExample_init$lambda_2(this$BasicExample) {
    return function (it) {
      println('Json loaded ' + it);
      this$BasicExample.data_0(it);
    };
  }
  BasicExample.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BasicExample',
    interfaces: [CanvasLayoutContainer]
  };
  function FlickrSearchResultsVo(photos) {
    FlickrSearchResultsVo$Companion_getInstance();
    if (photos === void 0)
      photos = new PhotosVo();
    this.photos = photos;
  }
  function FlickrSearchResultsVo$Companion() {
    FlickrSearchResultsVo$Companion_instance = this;
  }
  FlickrSearchResultsVo$Companion.prototype.read_gax0m7$ = function (reader) {
    var tmp$;
    return new FlickrSearchResultsVo((tmp$ = obj(reader, 'photos', PhotosVo$Companion_getInstance())) != null ? tmp$ : Kotlin.throwNPE());
  };
  FlickrSearchResultsVo$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: [From]
  };
  var FlickrSearchResultsVo$Companion_instance = null;
  function FlickrSearchResultsVo$Companion_getInstance() {
    if (FlickrSearchResultsVo$Companion_instance === null) {
      new FlickrSearchResultsVo$Companion();
    }
    return FlickrSearchResultsVo$Companion_instance;
  }
  FlickrSearchResultsVo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FlickrSearchResultsVo',
    interfaces: []
  };
  FlickrSearchResultsVo.prototype.component1 = function () {
    return this.photos;
  };
  FlickrSearchResultsVo.prototype.copy_ic7qtu$ = function (photos) {
    return new FlickrSearchResultsVo(photos === void 0 ? this.photos : photos);
  };
  FlickrSearchResultsVo.prototype.toString = function () {
    return 'FlickrSearchResultsVo(photos=' + Kotlin.toString(this.photos) + ')';
  };
  FlickrSearchResultsVo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.photos) | 0;
    return result;
  };
  FlickrSearchResultsVo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.photos, other.photos))));
  };
  function PhotosVo(page, photos) {
    PhotosVo$Companion_getInstance();
    if (page === void 0)
      page = 0;
    if (photos === void 0)
      photos = [];
    this.page = page;
    this.photos = photos;
  }
  function PhotosVo$Companion() {
    PhotosVo$Companion_instance = this;
  }
  PhotosVo$Companion.prototype.read_gax0m7$ = function (reader) {
    var tmp$, tmp$_1, tmp$_0;
    tmp$_1 = (tmp$ = int(reader, 'page')) != null ? tmp$ : Kotlin.throwNPE();
    var itemFactory = PhotoVo$Companion_getInstance();
    var tmp$_2;
    var tmp$_3;
    if ((tmp$_2 = reader.get_61zpoe$('photo')) != null) {
      var e = tmp$_2.elements();
      tmp$_3 = Kotlin.newArrayF(e.size, $module$AcornUtils.com.acornui.serialization.array2$f(itemFactory, e));
    }
     else
      tmp$_3 = null;
    return new PhotosVo(tmp$_1, (tmp$_0 = tmp$_3) != null ? tmp$_0 : Kotlin.throwNPE());
  };
  PhotosVo$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: [From]
  };
  var PhotosVo$Companion_instance = null;
  function PhotosVo$Companion_getInstance() {
    if (PhotosVo$Companion_instance === null) {
      new PhotosVo$Companion();
    }
    return PhotosVo$Companion_instance;
  }
  PhotosVo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'PhotosVo',
    interfaces: []
  };
  PhotosVo.prototype.component1 = function () {
    return this.page;
  };
  PhotosVo.prototype.component2 = function () {
    return this.photos;
  };
  PhotosVo.prototype.copy_se5uf5$ = function (page, photos) {
    return new PhotosVo(page === void 0 ? this.page : page, photos === void 0 ? this.photos : photos);
  };
  PhotosVo.prototype.toString = function () {
    return 'PhotosVo(page=' + Kotlin.toString(this.page) + (', photos=' + Kotlin.toString(this.photos)) + ')';
  };
  PhotosVo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.page) | 0;
    result = result * 31 + Kotlin.hashCode(this.photos) | 0;
    return result;
  };
  PhotosVo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.page, other.page) && Kotlin.equals(this.photos, other.photos)))));
  };
  function PhotoVo(id, owner, secret, server, farm, title) {
    PhotoVo$Companion_getInstance();
    if (id === void 0)
      id = '';
    if (owner === void 0)
      owner = '';
    if (secret === void 0)
      secret = '';
    if (server === void 0)
      server = '';
    if (farm === void 0)
      farm = -1;
    if (title === void 0)
      title = '';
    this.id = id;
    this.owner = owner;
    this.secret = secret;
    this.server = server;
    this.farm = farm;
    this.title = title;
  }
  PhotoVo.prototype.thumbUrl = function () {
    return 'https://farm' + this.farm + '.staticflickr.com/' + this.server + '/' + this.id + '_' + this.secret + '_t.jpg';
  };
  PhotoVo.prototype.imageUrl = function () {
    return 'https://farm' + this.farm + '.staticflickr.com/' + this.server + '/' + this.id + '_' + this.secret + '_h.jpg';
  };
  function PhotoVo$Companion() {
    PhotoVo$Companion_instance = this;
  }
  PhotoVo$Companion.prototype.read_gax0m7$ = function (reader) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    return new PhotoVo((tmp$ = string(reader, 'id')) != null ? tmp$ : Kotlin.throwNPE(), (tmp$_0 = string(reader, 'owner')) != null ? tmp$_0 : Kotlin.throwNPE(), (tmp$_1 = string(reader, 'secret')) != null ? tmp$_1 : Kotlin.throwNPE(), (tmp$_2 = string(reader, 'server')) != null ? tmp$_2 : Kotlin.throwNPE(), (tmp$_3 = int(reader, 'farm')) != null ? tmp$_3 : Kotlin.throwNPE(), (tmp$_4 = string(reader, 'title')) != null ? tmp$_4 : Kotlin.throwNPE());
  };
  PhotoVo$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: [From]
  };
  var PhotoVo$Companion_instance = null;
  function PhotoVo$Companion_getInstance() {
    if (PhotoVo$Companion_instance === null) {
      new PhotoVo$Companion();
    }
    return PhotoVo$Companion_instance;
  }
  PhotoVo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'PhotoVo',
    interfaces: []
  };
  PhotoVo.prototype.component1 = function () {
    return this.id;
  };
  PhotoVo.prototype.component2 = function () {
    return this.owner;
  };
  PhotoVo.prototype.component3 = function () {
    return this.secret;
  };
  PhotoVo.prototype.component4 = function () {
    return this.server;
  };
  PhotoVo.prototype.component5 = function () {
    return this.farm;
  };
  PhotoVo.prototype.component6 = function () {
    return this.title;
  };
  PhotoVo.prototype.copy_o9xhnw$ = function (id, owner, secret, server, farm, title) {
    return new PhotoVo(id === void 0 ? this.id : id, owner === void 0 ? this.owner : owner, secret === void 0 ? this.secret : secret, server === void 0 ? this.server : server, farm === void 0 ? this.farm : farm, title === void 0 ? this.title : title);
  };
  PhotoVo.prototype.toString = function () {
    return 'PhotoVo(id=' + Kotlin.toString(this.id) + (', owner=' + Kotlin.toString(this.owner)) + (', secret=' + Kotlin.toString(this.secret)) + (', server=' + Kotlin.toString(this.server)) + (', farm=' + Kotlin.toString(this.farm)) + (', title=' + Kotlin.toString(this.title)) + ')';
  };
  PhotoVo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.owner) | 0;
    result = result * 31 + Kotlin.hashCode(this.secret) | 0;
    result = result * 31 + Kotlin.hashCode(this.server) | 0;
    result = result * 31 + Kotlin.hashCode(this.farm) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    return result;
  };
  PhotoVo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.owner, other.owner) && Kotlin.equals(this.secret, other.secret) && Kotlin.equals(this.server, other.server) && Kotlin.equals(this.farm, other.farm) && Kotlin.equals(this.title, other.title)))));
  };
  function PhotoView(owner, photoVo) {
    VerticalLayoutContainer.call(this, owner);
    this.unaryPlus_8db8yx$(image(this, photoVo.thumbUrl()));
    var title = photoVo.title.length > 10 ? photoVo.title.substring(0, 10) + '...' : photoVo.title;
    this.unaryPlus_8db8yx$(text_0(this, title));
    rollOver(this).add_trkh7z$(PhotoView_init$lambda(this));
    rollOut(this).add_trkh7z$(PhotoView_init$lambda_0(this));
    cursor_1(this, cursor_0.StandardCursors.HAND);
  }
  function PhotoView_init$lambda(this$PhotoView) {
    return function (it) {
      this$PhotoView.alpha = 0.8;
    };
  }
  function PhotoView_init$lambda_0(this$PhotoView) {
    return function (it) {
      this$PhotoView.alpha = 1.0;
    };
  }
  PhotoView.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'PhotoView',
    interfaces: [VerticalLayoutContainer]
  };
  function FullSizePhotoView(owner) {
    CanvasLayoutContainer.call(this, owner);
    this.imageView_0 = null;
    this.imageView_0 = this.layout_ge8abi$(this.unaryPlus_8db8yx$(image_0(this)), FullSizePhotoView_init$lambda);
    click(this).add_trkh7z$(FullSizePhotoView_init$lambda_0(this));
    cursor_1(this, cursor_0.StandardCursors.HAND);
    this.layoutData = canvasLayoutData(FullSizePhotoView_init$lambda_1);
    this.assetLoader_0 = null;
  }
  function FullSizePhotoView$show$lambda(this$FullSizePhotoView) {
    return function (it) {
      var tmp$;
      var texture = ((tmp$ = this$FullSizePhotoView.assetLoader_0) != null ? tmp$ : Kotlin.throwNPE()).result;
      texture.filterMin = TextureMinFilter.NEAREST_MIPMAP_LINEAR;
      contentsTexture(this$FullSizePhotoView.imageView_0, texture);
      this$FullSizePhotoView.imageView_0.alpha = 0.0;
      tweenAlpha(this$FullSizePhotoView.imageView_0, 0.5, math_0.Easing.pow2In, 1.0);
    };
  }
  FullSizePhotoView.prototype.show_2vs9qh$ = function (photoVo) {
    var tmp$, tmp$_0;
    this.imageView_0.clearElements_6taknv$(true);
    if (this.assetLoader_0 != null) {
      this.assets.abort_6ir8qs$(((tmp$ = this.assetLoader_0) != null ? tmp$ : Kotlin.throwNPE()).path, assets_0.AssetTypes.TEXTURE);
    }
    this.assetLoader_0 = this.assets.load_yu4i4z$(photoVo.imageUrl(), assets_0.AssetTypes.TEXTURE, 1.0);
    onSuccess((tmp$_0 = this.assetLoader_0) != null ? tmp$_0 : Kotlin.throwNPE(), FullSizePhotoView$show$lambda(this));
    this.alpha = 0.0;
    tweenAlpha(this, 0.25, math_0.Easing.pow2In, 1.0);
    addPopUp(this, new PopUpInfo(this));
  };
  function FullSizePhotoView$hide$lambda(this$FullSizePhotoView) {
    return function (it) {
      removePopUp(this$FullSizePhotoView, this$FullSizePhotoView);
    };
  }
  FullSizePhotoView.prototype.hide = function () {
    tweenAlpha(this, 0.25, math_0.Easing.pow2Out, 0.0).completed.add_trkh7z$(FullSizePhotoView$hide$lambda(this));
  };
  function FullSizePhotoView_init$lambda($receiver) {
    $receiver.widthPercent = 1.0;
    $receiver.heightPercent = 1.0;
  }
  function FullSizePhotoView_init$lambda_0(this$FullSizePhotoView) {
    return function (it) {
      this$FullSizePhotoView.hide();
    };
  }
  function FullSizePhotoView_init$lambda_1($receiver) {
    $receiver.widthPercent = 1.0;
    $receiver.heightPercent = 1.0;
  }
  FullSizePhotoView.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FullSizePhotoView',
    interfaces: [CanvasLayoutContainer]
  };
  function BasicExample2(owner) {
    StackLayoutContainer.call(this, owner);
    this.clickEventHandler_0 = BasicExample2$clickEventHandler$lambda;
    Tween.Companion.prepare();
    (new BasicUiSkin()).init_k58t2y$(inject(this, Stage.Companion));
    loadingQueueBusyWatch(this).start();
    var linearGradient = LinearGradient(GradientDirection.RIGHT, [new ColorStop(new Color(1.0, 0.0, 0.0, 1.0), 0.0), new ColorStop(new Color(1.0, 0.0, 1.0, 1.0), 1.0)]);
    keyDown(inject(this, Stage.Companion)).add_trkh7z$(BasicExample2_init$lambda(this));
    this.layout_ge8abi$(this.unaryPlus_8db8yx$(scrollArea(this, BasicExample2_init$lambda_0(this, linearGradient))), BasicExample2_init$lambda_1);
  }
  function BasicExample2$slider$lambda$lambda$lambda(closure$setter, this$, closure$demoRect) {
    return function (it) {
      closure$setter(this$.scrollModel.value);
      closure$demoRect.style.dirty();
    };
  }
  function BasicExample2$slider$lambda$lambda(closure$min, closure$max, closure$getter, closure$setter, closure$demoRect) {
    return function ($receiver) {
      $receiver.scrollModel.min = closure$min;
      $receiver.scrollModel.max = closure$max;
      $receiver.scrollModel.value = closure$getter();
      $receiver.scrollModel.snap = 1.0;
      $receiver.scrollModel.changed.add_trkh7z$(BasicExample2$slider$lambda$lambda$lambda(closure$setter, $receiver, closure$demoRect));
    };
  }
  function BasicExample2$slider$lambda$lambda$lambda_0(this$) {
    return function (it) {
      this$.text = (it.value | 0).toString();
    };
  }
  function BasicExample2$slider$lambda$lambda_0(closure$getter, closure$hSlider) {
    return function ($receiver) {
      $receiver.flowStyle.horizontalAlign = FlowHAlign.RIGHT;
      $receiver.text = (closure$getter() | 0).toString();
      closure$hSlider.scrollModel.changed.add_trkh7z$(BasicExample2$slider$lambda$lambda$lambda_0($receiver));
    };
  }
  function BasicExample2$slider$lambda$lambda_1($receiver) {
    $receiver.width = 30.0;
  }
  function BasicExample2$slider$lambda(closure$min, closure$max, closure$getter, closure$setter, closure$demoRect) {
    return function ($receiver) {
      var hSlider_0 = $receiver.unaryPlus_8db8yx$(hSlider($receiver, BasicExample2$slider$lambda$lambda(closure$min, closure$max, closure$getter, closure$setter, closure$demoRect)));
      $receiver.layout_ge8abi$($receiver.unaryPlus_8db8yx$(text_1($receiver, BasicExample2$slider$lambda$lambda_0(closure$getter, hSlider_0))), BasicExample2$slider$lambda$lambda_1);
    };
  }
  BasicExample2.prototype.slider_0 = function (getter, setter, demoRect, min, max) {
    if (min === void 0)
      min = 0.0;
    if (max === void 0)
      max = 100.0;
    return hGroup(this, BasicExample2$slider$lambda(min, max, getter, setter, demoRect));
  };
  function BasicExample2$clickEventHandler$lambda(event) {
  }
  function BasicExample2_init$lambda(this$BasicExample2) {
    return function (it) {
      if (it.ctrlKey && it.keyCode === input_0.Ascii.R) {
        println('Render count: ' + Kotlin.toString(inject(this$BasicExample2, GlState.Companion).batch.renderCount));
      }
    };
  }
  function BasicExample2_init$lambda$lambda$lambda($receiver) {
    $receiver.style.borderRadius = Corners_init(8.0);
    $receiver.style.borderThickness = new Pad(49.0, 12.0, 8.0, 19.0);
    $receiver.style.borderColor = (new BorderColors()).set_1qghwi$(Color_0(Kotlin.Long.fromInt(656877567)));
    $receiver.style.backgroundColor = Color_0(Kotlin.Long.fromInt(6737151));
    var $receiver_0 = new StackLayoutData();
    $receiver_0.width = 200.0;
    $receiver_0.height = 120.0;
    $receiver.layoutData = $receiver_0;
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda(closure$border) {
    return function () {
      return closure$border.top;
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$border) {
    return function (it) {
      closure$border.top = it;
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$border) {
    return function () {
      return closure$border.right;
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$border) {
    return function (it) {
      closure$border.right = it;
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$border) {
    return function () {
      return closure$border.bottom;
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$border) {
    return function (it) {
      closure$border.bottom = it;
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$border) {
    return function () {
      return closure$border.left;
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$border) {
    return function (it) {
      closure$border.left = it;
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda(closure$demoStyle, closure$demoRect, this$BasicExample2) {
    return function ($receiver) {
      var border = closure$demoStyle.borderThickness;
      $receiver.unaryPlus_8db8yx$(formLabel($receiver, 'Top'));
      $receiver.unaryPlus_8db8yx$(this$BasicExample2.slider_0(BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda(border), BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_0(border), closure$demoRect));
      $receiver.unaryPlus_8db8yx$(formLabel($receiver, 'Right'));
      $receiver.unaryPlus_8db8yx$(this$BasicExample2.slider_0(BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_1(border), BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_2(border), closure$demoRect));
      $receiver.unaryPlus_8db8yx$(formLabel($receiver, 'Bottom'));
      $receiver.unaryPlus_8db8yx$(this$BasicExample2.slider_0(BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_3(border), BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_4(border), closure$demoRect));
      $receiver.unaryPlus_8db8yx$(formLabel($receiver, 'Left'));
      $receiver.unaryPlus_8db8yx$(this$BasicExample2.slider_0(BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_5(border), BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_6(border), closure$demoRect));
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.fill();
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda(closure$demoStyle, closure$demoRect, this$BasicExample2) {
    return function ($receiver) {
      $receiver.label = 'Border Thickness';
      $receiver.layout_ge8abi$($receiver.unaryPlus_8db8yx$(form($receiver, BasicExample2_init$lambda$lambda$lambda$lambda$lambda(closure$demoStyle, closure$demoRect, this$BasicExample2))), BasicExample2_init$lambda$lambda$lambda$lambda$lambda_0);
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.widthPercent = 1.0;
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$corners) {
    return function () {
      return closure$corners.topLeft.x;
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_8(closure$corners) {
    return function (it) {
      closure$corners.topLeft.x = it;
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_9(closure$corners) {
    return function () {
      return closure$corners.topLeft.y;
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_10(closure$corners) {
    return function (it) {
      closure$corners.topLeft.y = it;
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_11(closure$corners) {
    return function () {
      return closure$corners.topRight.x;
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_12(closure$corners) {
    return function (it) {
      closure$corners.topRight.x = it;
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_13(closure$corners) {
    return function () {
      return closure$corners.topRight.y;
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_14(closure$corners) {
    return function (it) {
      closure$corners.topRight.y = it;
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_15(closure$corners) {
    return function () {
      return closure$corners.bottomRight.x;
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_16(closure$corners) {
    return function (it) {
      closure$corners.bottomRight.x = it;
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_17(closure$corners) {
    return function () {
      return closure$corners.bottomRight.y;
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_18(closure$corners) {
    return function (it) {
      closure$corners.bottomRight.y = it;
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_19(closure$corners) {
    return function () {
      return closure$corners.bottomLeft.x;
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_20(closure$corners) {
    return function (it) {
      closure$corners.bottomLeft.x = it;
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_21(closure$corners) {
    return function () {
      return closure$corners.bottomLeft.y;
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_22(closure$corners) {
    return function (it) {
      closure$corners.bottomLeft.y = it;
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda_1(closure$demoStyle, closure$demoRect, this$BasicExample2) {
    return function ($receiver) {
      var corners = closure$demoStyle.borderRadius;
      $receiver.unaryPlus_8db8yx$(formLabel($receiver, 'Top Left X'));
      $receiver.unaryPlus_8db8yx$(this$BasicExample2.slider_0(BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_7(corners), BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_8(corners), closure$demoRect));
      $receiver.unaryPlus_8db8yx$(formLabel($receiver, 'Top Left Y'));
      $receiver.unaryPlus_8db8yx$(this$BasicExample2.slider_0(BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_9(corners), BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_10(corners), closure$demoRect));
      $receiver.unaryPlus_8db8yx$(formLabel($receiver, 'Top Right X'));
      $receiver.unaryPlus_8db8yx$(this$BasicExample2.slider_0(BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_11(corners), BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_12(corners), closure$demoRect));
      $receiver.unaryPlus_8db8yx$(formLabel($receiver, 'Top Right Y'));
      $receiver.unaryPlus_8db8yx$(this$BasicExample2.slider_0(BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_13(corners), BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_14(corners), closure$demoRect));
      $receiver.unaryPlus_8db8yx$(formLabel($receiver, 'Bottom Right X'));
      $receiver.unaryPlus_8db8yx$(this$BasicExample2.slider_0(BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_15(corners), BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_16(corners), closure$demoRect));
      $receiver.unaryPlus_8db8yx$(formLabel($receiver, 'Bottom Right Y'));
      $receiver.unaryPlus_8db8yx$(this$BasicExample2.slider_0(BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_17(corners), BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_18(corners), closure$demoRect));
      $receiver.unaryPlus_8db8yx$(formLabel($receiver, 'Bottom Left X'));
      $receiver.unaryPlus_8db8yx$(this$BasicExample2.slider_0(BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_19(corners), BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_20(corners), closure$demoRect));
      $receiver.unaryPlus_8db8yx$(formLabel($receiver, 'Bottom Left Y'));
      $receiver.unaryPlus_8db8yx$(this$BasicExample2.slider_0(BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_21(corners), BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_22(corners), closure$demoRect));
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.fill();
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda_1(closure$demoStyle, closure$demoRect, this$BasicExample2) {
    return function ($receiver) {
      $receiver.label = 'Corner Radius';
      $receiver.layout_ge8abi$($receiver.unaryPlus_8db8yx$(form($receiver, BasicExample2_init$lambda$lambda$lambda$lambda$lambda_1(closure$demoStyle, closure$demoRect, this$BasicExample2))), BasicExample2_init$lambda$lambda$lambda$lambda$lambda_2);
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.widthPercent = 1.0;
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_23(closure$margin) {
    return function () {
      return closure$margin.top;
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_24(closure$margin) {
    return function (it) {
      closure$margin.top = it;
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_25(closure$margin) {
    return function () {
      return closure$margin.right;
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_26(closure$margin) {
    return function (it) {
      closure$margin.right = it;
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_27(closure$margin) {
    return function () {
      return closure$margin.bottom;
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_28(closure$margin) {
    return function (it) {
      closure$margin.bottom = it;
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_29(closure$margin) {
    return function () {
      return closure$margin.left;
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_30(closure$margin) {
    return function (it) {
      closure$margin.left = it;
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda_3(closure$demoStyle, closure$demoRect, this$BasicExample2) {
    return function ($receiver) {
      var margin = closure$demoStyle.margin;
      $receiver.unaryPlus_8db8yx$(formLabel($receiver, 'Top'));
      $receiver.unaryPlus_8db8yx$(this$BasicExample2.slider_0(BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_23(margin), BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_24(margin), closure$demoRect));
      $receiver.unaryPlus_8db8yx$(formLabel($receiver, 'Right'));
      $receiver.unaryPlus_8db8yx$(this$BasicExample2.slider_0(BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_25(margin), BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_26(margin), closure$demoRect));
      $receiver.unaryPlus_8db8yx$(formLabel($receiver, 'Bottom'));
      $receiver.unaryPlus_8db8yx$(this$BasicExample2.slider_0(BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_27(margin), BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_28(margin), closure$demoRect));
      $receiver.unaryPlus_8db8yx$(formLabel($receiver, 'Left'));
      $receiver.unaryPlus_8db8yx$(this$BasicExample2.slider_0(BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_29(margin), BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_30(margin), closure$demoRect));
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.fill();
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda_3(closure$demoStyle, closure$demoRect, this$BasicExample2) {
    return function ($receiver) {
      $receiver.label = 'Margin';
      $receiver.layout_ge8abi$($receiver.unaryPlus_8db8yx$(form($receiver, BasicExample2_init$lambda$lambda$lambda$lambda$lambda_3(closure$demoStyle, closure$demoRect, this$BasicExample2))), BasicExample2_init$lambda$lambda$lambda$lambda$lambda_4);
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.widthPercent = 1.0;
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_31(closure$size) {
    return function () {
      var tmp$;
      return (tmp$ = closure$size.width) != null ? tmp$ : Kotlin.throwNPE();
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_32(closure$size) {
    return function (it) {
      closure$size.width = it;
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_33(closure$size) {
    return function () {
      var tmp$;
      return (tmp$ = closure$size.height) != null ? tmp$ : Kotlin.throwNPE();
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_34(closure$size) {
    return function (it) {
      closure$size.height = it;
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda_5(closure$demoRect, this$BasicExample2) {
    return function ($receiver) {
      var tmp$;
      var size = Kotlin.isType(tmp$ = closure$demoRect.layoutData, StackLayoutData) ? tmp$ : Kotlin.throwCCE();
      $receiver.unaryPlus_8db8yx$(formLabel($receiver, 'Width'));
      $receiver.unaryPlus_8db8yx$(this$BasicExample2.slider_0(BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_31(size), BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_32(size), closure$demoRect, 20.0, 360.0));
      $receiver.unaryPlus_8db8yx$(formLabel($receiver, 'Height'));
      $receiver.unaryPlus_8db8yx$(this$BasicExample2.slider_0(BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_33(size), BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_34(size), closure$demoRect, 20.0, 600.0));
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda_6($receiver) {
    $receiver.fill();
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda_5(closure$demoRect, this$BasicExample2) {
    return function ($receiver) {
      $receiver.label = 'Size';
      $receiver.layout_ge8abi$($receiver.unaryPlus_8db8yx$(form($receiver, BasicExample2_init$lambda$lambda$lambda$lambda$lambda_5(closure$demoRect, this$BasicExample2))), BasicExample2_init$lambda$lambda$lambda$lambda$lambda_6);
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda_6($receiver) {
    $receiver.widthPercent = 1.0;
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$borderColor, closure$demoStyle) {
    return function (old, new_0) {
      new_0.toRgb_1qghwi$(closure$borderColor.top);
      closure$demoStyle.dirty();
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_35(closure$borderColor, closure$demoStyle) {
    return function ($receiver) {
      $receiver.color = closure$borderColor.top;
      $receiver.changed.add_trkh7z$(BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$borderColor, closure$demoStyle));
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$borderColor, closure$demoStyle) {
    return function (old, new_0) {
      new_0.toRgb_1qghwi$(closure$borderColor.right);
      closure$demoStyle.dirty();
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_36(closure$borderColor, closure$demoStyle) {
    return function ($receiver) {
      $receiver.color = closure$borderColor.right;
      $receiver.changed.add_trkh7z$(BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$borderColor, closure$demoStyle));
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$borderColor, closure$demoStyle) {
    return function (old, new_0) {
      new_0.toRgb_1qghwi$(closure$borderColor.bottom);
      closure$demoStyle.dirty();
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_37(closure$borderColor, closure$demoStyle) {
    return function ($receiver) {
      $receiver.color = closure$borderColor.bottom;
      $receiver.changed.add_trkh7z$(BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$borderColor, closure$demoStyle));
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$borderColor, closure$demoStyle) {
    return function (old, new_0) {
      new_0.toRgb_1qghwi$(closure$borderColor.left);
      closure$demoStyle.dirty();
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_38(closure$borderColor, closure$demoStyle) {
    return function ($receiver) {
      $receiver.color = closure$borderColor.left;
      $receiver.changed.add_trkh7z$(BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$borderColor, closure$demoStyle));
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda_7(closure$borderColor, closure$demoStyle) {
    return function ($receiver) {
      $receiver.unaryPlus_8db8yx$(formLabel($receiver, 'Top'));
      $receiver.unaryPlus_8db8yx$(colorPicker($receiver, BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_35(closure$borderColor, closure$demoStyle)));
      $receiver.unaryPlus_8db8yx$(formLabel($receiver, 'Right'));
      $receiver.unaryPlus_8db8yx$(colorPicker($receiver, BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_36(closure$borderColor, closure$demoStyle)));
      $receiver.unaryPlus_8db8yx$(formLabel($receiver, 'Bottom'));
      $receiver.unaryPlus_8db8yx$(colorPicker($receiver, BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_37(closure$borderColor, closure$demoStyle)));
      $receiver.unaryPlus_8db8yx$(formLabel($receiver, 'Left'));
      $receiver.unaryPlus_8db8yx$(colorPicker($receiver, BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_38(closure$borderColor, closure$demoStyle)));
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda_8($receiver) {
    $receiver.fill();
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda_7(closure$demoStyle) {
    return function ($receiver) {
      $receiver.label = 'Border Color';
      var borderColor = closure$demoStyle.borderColor;
      $receiver.layout_ge8abi$($receiver.unaryPlus_8db8yx$(form($receiver, BasicExample2_init$lambda$lambda$lambda$lambda$lambda_7(borderColor, closure$demoStyle))), BasicExample2_init$lambda$lambda$lambda$lambda$lambda_8);
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda_8($receiver) {
    $receiver.widthPercent = 1.0;
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$demoStyle) {
    return function (old, new_0) {
      new_0.toRgb_1qghwi$(closure$demoStyle.backgroundColor);
      closure$demoStyle.dirty();
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_39(closure$demoStyle) {
    return function ($receiver) {
      $receiver.color = closure$demoStyle.backgroundColor;
      $receiver.changed.add_trkh7z$(BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$demoStyle));
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda_9(closure$demoStyle) {
    return function ($receiver) {
      $receiver.unaryPlus_8db8yx$(formLabel($receiver, 'Background Color'));
      $receiver.unaryPlus_8db8yx$(colorPicker($receiver, BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_39(closure$demoStyle)));
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$linearGradient, closure$demoStyle) {
    return function (old, new_0) {
      var tmp$;
      closure$linearGradient.direction = (tmp$ = new_0 != null ? new_0.data : null) != null ? tmp$ : GradientDirection.TOP;
      closure$demoStyle.dirty();
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_40(this$, closure$linearGradient, closure$demoStyle) {
    return function ($receiver) {
      this$.unaryPlus_8db8yx$($receiver.radioButton_xg973l$(GradientDirection.ANGLE, 'Angle'));
      this$.unaryPlus_8db8yx$($receiver.radioButton_xg973l$(GradientDirection.TOP, 'Top'));
      this$.unaryPlus_8db8yx$($receiver.radioButton_xg973l$(GradientDirection.TOP_RIGHT, 'Top Right'));
      this$.unaryPlus_8db8yx$($receiver.radioButton_xg973l$(GradientDirection.RIGHT, 'Right'));
      this$.unaryPlus_8db8yx$($receiver.radioButton_xg973l$(GradientDirection.BOTTOM_RIGHT, 'Bottom Right'));
      this$.unaryPlus_8db8yx$($receiver.radioButton_xg973l$(GradientDirection.BOTTOM, 'Bottom'));
      this$.unaryPlus_8db8yx$($receiver.radioButton_xg973l$(GradientDirection.BOTTOM_LEFT, 'Bottom Left'));
      this$.unaryPlus_8db8yx$($receiver.radioButton_xg973l$(GradientDirection.LEFT, 'Left'));
      this$.unaryPlus_8db8yx$($receiver.radioButton_xg973l$(GradientDirection.TOP_LEFT, 'Top Left'));
      $receiver.changed.add_trkh7z$(BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$linearGradient, closure$demoStyle));
      $receiver.selectedData = closure$linearGradient.direction;
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda_10(closure$linearGradient, closure$demoStyle) {
    return function ($receiver) {
      radioGroup($receiver, BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_40($receiver, closure$linearGradient, closure$demoStyle));
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5($receiver) {
    $receiver.widthPercent = 1.0;
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.fill();
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.fill();
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$linearForm, this$, closure$solidForm, closure$linearGradient, closure$demoStyle) {
    return function (old, new_0) {
      this$.unaryMinus_8db8yx$(closure$linearForm);
      this$.unaryMinus_8db8yx$(closure$solidForm);
      if (Kotlin.equals(new_0 != null ? new_0.data : null, GradientType$LINEAR_getInstance())) {
        closure$demoStyle.linearGradient = closure$linearGradient;
        this$.layout_ge8abi$(this$.unaryPlus_8db8yx$(closure$linearForm), BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      }
       else {
        closure$demoStyle.linearGradient = null;
        this$.layout_ge8abi$(this$.unaryPlus_8db8yx$(closure$solidForm), BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
      }
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_41(this$, closure$linearForm, closure$solidForm, closure$linearGradient, closure$demoStyle) {
    return function ($receiver) {
      this$.unaryPlus_8db8yx$($receiver.radioButton_xg973l$(GradientType$SOLID_getInstance(), 'Solid'));
      this$.unaryPlus_8db8yx$($receiver.radioButton_xg973l$(GradientType$LINEAR_getInstance(), 'Linear'));
      this$.layout_ge8abi$(this$.unaryPlus_8db8yx$(hr(this$)), BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5);
      $receiver.changed.add_trkh7z$(BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$linearForm, this$, closure$solidForm, closure$linearGradient, closure$demoStyle));
      $receiver.selectedData = GradientType$SOLID_getInstance();
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda_11(closure$linearForm, closure$solidForm, closure$linearGradient, closure$demoStyle) {
    return function ($receiver) {
      radioGroup($receiver, BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_41($receiver, closure$linearForm, closure$solidForm, closure$linearGradient, closure$demoStyle));
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda_12($receiver) {
    $receiver.fill();
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda_9(closure$demoStyle, closure$linearGradient) {
    return function ($receiver) {
      $receiver.label = 'Background Gradient';
      var solidForm = form($receiver, BasicExample2_init$lambda$lambda$lambda$lambda$lambda_9(closure$demoStyle));
      var linearForm = vGroup($receiver, BasicExample2_init$lambda$lambda$lambda$lambda$lambda_10(closure$linearGradient, closure$demoStyle));
      $receiver.layout_ge8abi$($receiver.unaryPlus_8db8yx$(vGroup($receiver, BasicExample2_init$lambda$lambda$lambda$lambda$lambda_11(linearForm, solidForm, closure$linearGradient, closure$demoStyle))), BasicExample2_init$lambda$lambda$lambda$lambda$lambda_12);
    };
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda_10($receiver) {
    $receiver.widthPercent = 1.0;
  }
  function BasicExample2_init$lambda$lambda$lambda_0(closure$demoStyle, closure$demoRect, this$BasicExample2, closure$linearGradient) {
    return function ($receiver) {
      $receiver.layout_ge8abi$($receiver.unaryPlus_8db8yx$(headingGroup($receiver, BasicExample2_init$lambda$lambda$lambda$lambda(closure$demoStyle, closure$demoRect, this$BasicExample2))), BasicExample2_init$lambda$lambda$lambda$lambda_0);
      $receiver.layout_ge8abi$($receiver.unaryPlus_8db8yx$(headingGroup($receiver, BasicExample2_init$lambda$lambda$lambda$lambda_1(closure$demoStyle, closure$demoRect, this$BasicExample2))), BasicExample2_init$lambda$lambda$lambda$lambda_2);
      $receiver.layout_ge8abi$($receiver.unaryPlus_8db8yx$(headingGroup($receiver, BasicExample2_init$lambda$lambda$lambda$lambda_3(closure$demoStyle, closure$demoRect, this$BasicExample2))), BasicExample2_init$lambda$lambda$lambda$lambda_4);
      $receiver.layout_ge8abi$($receiver.unaryPlus_8db8yx$(headingGroup($receiver, BasicExample2_init$lambda$lambda$lambda$lambda_5(closure$demoRect, this$BasicExample2))), BasicExample2_init$lambda$lambda$lambda$lambda_6);
      $receiver.layout_ge8abi$($receiver.unaryPlus_8db8yx$(headingGroup($receiver, BasicExample2_init$lambda$lambda$lambda$lambda_7(closure$demoStyle))), BasicExample2_init$lambda$lambda$lambda$lambda_8);
      $receiver.layout_ge8abi$($receiver.unaryPlus_8db8yx$(headingGroup($receiver, BasicExample2_init$lambda$lambda$lambda$lambda_9(closure$demoStyle, closure$linearGradient))), BasicExample2_init$lambda$lambda$lambda$lambda_10);
    };
  }
  function BasicExample2_init$lambda$lambda$lambda_1($receiver) {
    $receiver.width = 430.0;
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_42($receiver) {
    $receiver.style.backgroundColor = Color.Companion.LIGHT_GRAY;
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda$lambda_13($receiver) {
    return rect($receiver, BasicExample2_init$lambda$lambda$lambda$lambda$lambda$lambda_42);
  }
  function BasicExample2_init$lambda$lambda$lambda$lambda_11(closure$demoRect) {
    return function ($receiver) {
      $receiver.style.background = BasicExample2_init$lambda$lambda$lambda$lambda$lambda_13;
      $receiver.style.padding = Pad_init_0();
      $receiver.unaryPlus_8db8yx$(closure$demoRect);
    };
  }
  function BasicExample2_init$lambda$lambda$lambda_2(closure$demoRect) {
    return function ($receiver) {
      $receiver.layoutAlgorithm.horizontalAlign = HAlign.CENTER;
      $receiver.unaryPlus_8db8yx$(panel($receiver, BasicExample2_init$lambda$lambda$lambda$lambda_11(closure$demoRect)));
    };
  }
  function BasicExample2_init$lambda$lambda$lambda_3($receiver) {
    $receiver.widthPercent = 1.0;
  }
  function BasicExample2_init$lambda$lambda(this$BasicExample2, closure$linearGradient) {
    return function ($receiver) {
      $receiver.minWidth_81sz4$(760.0);
      $receiver.layoutAlgorithm.padding = Pad_init(10.0);
      $receiver.layoutAlgorithm.verticalAlign = VAlign.TOP;
      var demoRect = rect($receiver, BasicExample2_init$lambda$lambda$lambda);
      var demoStyle = demoRect.style;
      $receiver.layout_ge8abi$($receiver.unaryPlus_8db8yx$(vGroup($receiver, BasicExample2_init$lambda$lambda$lambda_0(demoStyle, demoRect, this$BasicExample2, closure$linearGradient))), BasicExample2_init$lambda$lambda$lambda_1);
      $receiver.layout_ge8abi$($receiver.unaryPlus_8db8yx$(stack($receiver, BasicExample2_init$lambda$lambda$lambda_2(demoRect))), BasicExample2_init$lambda$lambda$lambda_3);
    };
  }
  function BasicExample2_init$lambda$lambda_0($receiver) {
    $receiver.fill();
  }
  function BasicExample2_init$lambda_0(this$BasicExample2, closure$linearGradient) {
    return function ($receiver) {
      $receiver.layout_ge8abi$($receiver.unaryPlus_8db8yx$(hGroup($receiver, BasicExample2_init$lambda$lambda(this$BasicExample2, closure$linearGradient))), BasicExample2_init$lambda$lambda_0);
    };
  }
  function BasicExample2_init$lambda_1($receiver) {
    $receiver.fill();
  }
  BasicExample2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BasicExample2',
    interfaces: [StackLayoutContainer]
  };
  function GradientType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GradientType_initFields() {
    GradientType_initFields = function () {
    };
    GradientType$SOLID_instance = new GradientType('SOLID', 0);
    GradientType$LINEAR_instance = new GradientType('LINEAR', 1);
    GradientType$RADIAL_instance = new GradientType('RADIAL', 2);
  }
  var GradientType$SOLID_instance;
  function GradientType$SOLID_getInstance() {
    GradientType_initFields();
    return GradientType$SOLID_instance;
  }
  var GradientType$LINEAR_instance;
  function GradientType$LINEAR_getInstance() {
    GradientType_initFields();
    return GradientType$LINEAR_instance;
  }
  var GradientType$RADIAL_instance;
  function GradientType$RADIAL_getInstance() {
    GradientType_initFields();
    return GradientType$RADIAL_instance;
  }
  GradientType.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'GradientType',
    interfaces: [Enum]
  };
  function GradientType$values() {
    return [GradientType$SOLID_getInstance(), GradientType$LINEAR_getInstance(), GradientType$RADIAL_getInstance()];
  }
  GradientType.values = GradientType$values;
  function GradientType$valueOf(name) {
    switch (name) {
      case 'SOLID':
        return GradientType$SOLID_getInstance();
      case 'LINEAR':
        return GradientType$LINEAR_getInstance();
      case 'RADIAL':
        return GradientType$RADIAL_getInstance();
      default:Kotlin.throwISE('No enum constant com.acornui.basicexample.GradientType.' + name);
    }
  }
  GradientType.valueOf_61zpoe$ = GradientType$valueOf;
  function ColorTransformExample(owner) {
    StackLayoutContainer.call(this, owner);
    (new BasicUiSkin()).init_k58t2y$(inject(this, Stage.Companion));
    this.layout_ge8abi$(this.unaryPlus_8db8yx$(scrollArea(this, ColorTransformExample_init$lambda)), ColorTransformExample_init$lambda_0);
  }
  function ColorTransformExample_init$lambda$lambda($receiver) {
  }
  function ColorTransformExample_init$lambda($receiver) {
    $receiver.unaryPlus_8db8yx$(vGroup($receiver, ColorTransformExample_init$lambda$lambda));
  }
  function ColorTransformExample_init$lambda_0($receiver) {
    $receiver.fill();
  }
  ColorTransformExample.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ColorTransformExample',
    interfaces: [StackLayoutContainer]
  };
  function DataGridExample(owner) {
    StackLayoutContainer.call(this, owner);
    Tween.Companion.prepare();
    (new BasicUiSkin()).init_k58t2y$(inject(this, Stage.Companion));
    inject(this, I18n.Companion).currentLocale = 'en_US';
    this.layout_ge8abi$(this.unaryPlus_8db8yx$(vGroup(this, DataGridExample_init$lambda)), DataGridExample_init$lambda_0);
  }
  function DataGridExample_init$lambda$lambda$lambda$lambda(this$) {
    return function (it) {
      inject(this$, I18n.Companion).currentLocale = 'en_US';
    };
  }
  function DataGridExample_init$lambda$lambda$lambda($receiver) {
    $receiver.label = 'English';
    click($receiver).add_trkh7z$(DataGridExample_init$lambda$lambda$lambda$lambda($receiver));
  }
  function DataGridExample_init$lambda$lambda$lambda$lambda_0(this$) {
    return function (it) {
      inject(this$, I18n.Companion).currentLocale = 'de_DE';
    };
  }
  function DataGridExample_init$lambda$lambda$lambda_0($receiver) {
    $receiver.label = 'German';
    click($receiver).add_trkh7z$(DataGridExample_init$lambda$lambda$lambda$lambda_0($receiver));
  }
  function DataGridExample_init$lambda$lambda$lambda$lambda_1(this$) {
    return function (it) {
      inject(this$, I18n.Companion).currentLocale = 'fr_FR';
    };
  }
  function DataGridExample_init$lambda$lambda$lambda_1($receiver) {
    $receiver.label = 'French';
    click($receiver).add_trkh7z$(DataGridExample_init$lambda$lambda$lambda$lambda_1($receiver));
  }
  function DataGridExample_init$lambda$lambda($receiver) {
    $receiver.unaryPlus_8db8yx$(button($receiver, DataGridExample_init$lambda$lambda$lambda));
    $receiver.unaryPlus_8db8yx$(button($receiver, DataGridExample_init$lambda$lambda$lambda_0));
    $receiver.unaryPlus_8db8yx$(button($receiver, DataGridExample_init$lambda$lambda$lambda_1));
  }
  function DataGridExample_init$lambda$lambda$lambda_2(this$) {
    return function (it) {
      this$.text = it.get_61zpoe$('hello');
    };
  }
  function DataGridExample_init$lambda$lambda_0($receiver) {
    i18n_0($receiver, 'datagrid', DataGridExample_init$lambda$lambda$lambda_2($receiver));
  }
  function DataGridExample_init$lambda$lambda$lambda_3(this$) {
    return function (it) {
      this$.text = it.get_61zpoe$('goodbye');
    };
  }
  function DataGridExample_init$lambda$lambda_1($receiver) {
    i18n_0($receiver, 'datagrid', DataGridExample_init$lambda$lambda$lambda_3($receiver));
  }
  function DataGridExample_init$lambda$ObjectLiteral() {
    IntColumn.call(this);
  }
  function DataGridExample_init$lambda$ObjectLiteral$createHeaderCell$lambda$lambda(this$) {
    return function (it) {
      var tmp$;
      this$.text = (tmp$ = it.get_61zpoe$('column')) != null ? replaceTokens(tmp$, ['1']) : null;
    };
  }
  function DataGridExample_init$lambda$ObjectLiteral$createHeaderCell$lambda($receiver) {
    i18n_0($receiver, 'datagrid', DataGridExample_init$lambda$ObjectLiteral$createHeaderCell$lambda$lambda($receiver));
  }
  DataGridExample_init$lambda$ObjectLiteral.prototype.createHeaderCell_4yfvcu$ = function ($receiver) {
    return text_1($receiver, DataGridExample_init$lambda$ObjectLiteral$createHeaderCell$lambda);
  };
  DataGridExample_init$lambda$ObjectLiteral.prototype.getCellData_11rb$ = function (row) {
    return row;
  };
  DataGridExample_init$lambda$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [IntColumn]
  };
  function DataGridExample_init$lambda$ObjectLiteral_0() {
    IntColumn.call(this);
  }
  function DataGridExample_init$lambda$ObjectLiteral$createHeaderCell$lambda$lambda_0(this$) {
    return function (it) {
      var tmp$;
      this$.text = (tmp$ = it.get_61zpoe$('column')) != null ? replaceTokens(tmp$, ['2']) : null;
    };
  }
  function DataGridExample_init$lambda$ObjectLiteral$createHeaderCell$lambda_0($receiver) {
    i18n_0($receiver, 'datagrid', DataGridExample_init$lambda$ObjectLiteral$createHeaderCell$lambda$lambda_0($receiver));
  }
  DataGridExample_init$lambda$ObjectLiteral_0.prototype.createHeaderCell_4yfvcu$ = function ($receiver) {
    return text_1($receiver, DataGridExample_init$lambda$ObjectLiteral$createHeaderCell$lambda_0);
  };
  DataGridExample_init$lambda$ObjectLiteral_0.prototype.getCellData_11rb$ = function (row) {
    return row + 5 | 0;
  };
  DataGridExample_init$lambda$ObjectLiteral_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [IntColumn]
  };
  function DataGridExample_init$lambda$ObjectLiteral_1() {
    IntColumn.call(this);
    this.width = 200.0;
    this.isFlexible = false;
  }
  function DataGridExample_init$lambda$ObjectLiteral$createHeaderCell$lambda$lambda_1(this$) {
    return function (it) {
      var tmp$;
      this$.text = (tmp$ = it.get_61zpoe$('column')) != null ? replaceTokens(tmp$, ['3']) : null;
    };
  }
  function DataGridExample_init$lambda$ObjectLiteral$createHeaderCell$lambda_1($receiver) {
    i18n_0($receiver, 'datagrid', DataGridExample_init$lambda$ObjectLiteral$createHeaderCell$lambda$lambda_1($receiver));
  }
  DataGridExample_init$lambda$ObjectLiteral_1.prototype.createHeaderCell_4yfvcu$ = function ($receiver) {
    return text_1($receiver, DataGridExample_init$lambda$ObjectLiteral$createHeaderCell$lambda_1);
  };
  DataGridExample_init$lambda$ObjectLiteral_1.prototype.getCellData_11rb$ = function (row) {
    return row + 6 | 0;
  };
  DataGridExample_init$lambda$ObjectLiteral_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [IntColumn]
  };
  function DataGridExample_init$lambda$lambda_2($receiver) {
  }
  function DataGridExample_init$lambda$lambda_3($receiver) {
    $receiver.fill();
  }
  function DataGridExample_init$lambda($receiver) {
    $receiver.layoutAlgorithm.padding = Pad_init(8.0);
    $receiver.unaryPlus_8db8yx$(hGroup($receiver, DataGridExample_init$lambda$lambda));
    $receiver.unaryPlus_8db8yx$(text_1($receiver, DataGridExample_init$lambda$lambda_0));
    $receiver.unaryPlus_8db8yx$(text_1($receiver, DataGridExample_init$lambda$lambda_1));
    $receiver.layout_ge8abi$($receiver.unaryPlus_8db8yx$(dataGrid($receiver, activeListOf([1, 2, 3, 4, 5]), activeListOf([new DataGridExample_init$lambda$ObjectLiteral(), new DataGridExample_init$lambda$ObjectLiteral_0(), new DataGridExample_init$lambda$ObjectLiteral_1()]), DataGridExample_init$lambda$lambda_2)), DataGridExample_init$lambda$lambda_3);
  }
  function DataGridExample_init$lambda_0($receiver) {
    $receiver.fill();
  }
  DataGridExample.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DataGridExample',
    interfaces: [StackLayoutContainer]
  };
  var package$com = _.com || (_.com = {});
  var package$acornui = package$com.acornui || (package$com.acornui = {});
  var package$basicexample = package$acornui.basicexample || (package$acornui.basicexample = {});
  package$basicexample.BasicExample = BasicExample;
  Object.defineProperty(FlickrSearchResultsVo, 'Companion', {
    get: FlickrSearchResultsVo$Companion_getInstance
  });
  package$basicexample.FlickrSearchResultsVo = FlickrSearchResultsVo;
  Object.defineProperty(PhotosVo, 'Companion', {
    get: PhotosVo$Companion_getInstance
  });
  package$basicexample.PhotosVo = PhotosVo;
  Object.defineProperty(PhotoVo, 'Companion', {
    get: PhotoVo$Companion_getInstance
  });
  package$basicexample.PhotoVo = PhotoVo;
  package$basicexample.PhotoView = PhotoView;
  package$basicexample.FullSizePhotoView = FullSizePhotoView;
  package$basicexample.BasicExample2 = BasicExample2;
  package$basicexample.ColorTransformExample = ColorTransformExample;
  package$basicexample.DataGridExample = DataGridExample;
  Kotlin.defineModule('BasicExampleCore', _);
  return _;
}(typeof BasicExampleCore === 'undefined' ? {} : BasicExampleCore, kotlin, AcornUiCore, AcornUtils);

//@ sourceMappingURL=BasicExampleCore.js.map
