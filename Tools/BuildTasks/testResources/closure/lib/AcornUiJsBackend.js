if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'AcornUiJsBackend'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'AcornUiJsBackend'.");
}
if (typeof AcornUtils === 'undefined') {
  throw new Error("Error loading module 'AcornUiJsBackend'. Its dependency 'AcornUtils' was not found. Please, check whether 'AcornUtils' is loaded prior to 'AcornUiJsBackend'.");
}
if (typeof AcornUiCore === 'undefined') {
  throw new Error("Error loading module 'AcornUiJsBackend'. Its dependency 'AcornUiCore' was not found. Please, check whether 'AcornUiCore' is loaded prior to 'AcornUiJsBackend'.");
}
var AcornUiJsBackend = function (_, Kotlin, $module$AcornUtils, $module$AcornUiCore) {
  'use strict';
  var Enum = Kotlin.kotlin.Enum;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Signal0 = $module$AcornUtils.com.acornui.signal.Signal0;
  var MusicReadyState = $module$AcornUiCore.com.acornui.core.audio.MusicReadyState;
  var kotlin_0 = Kotlin.kotlin;
  var Music = $module$AcornUiCore.com.acornui.core.audio.Music;
  var BasicAction = $module$AcornUtils.com.acornui.action.BasicAction;
  var assets_0 = $module$AcornUiCore.com.acornui.core.assets;
  var MutableAssetLoader = $module$AcornUiCore.com.acornui.core.assets.MutableAssetLoader;
  var Sound = $module$AcornUiCore.com.acornui.core.audio.Sound;
  var SoundFactory = $module$AcornUiCore.com.acornui.core.audio.SoundFactory;
  var Exception = Kotlin.kotlin.Exception;
  var time_0 = $module$AcornUiCore.com.acornui.core.time;
  var ResponseType = $module$AcornUiCore.com.acornui.core.request.ResponseType;
  var onSuccess = $module$AcornUtils.com.acornui.action.onSuccess_ehmz8c$;
  var onFailed = $module$AcornUtils.com.acornui.action.onFailed_r6f3ly$;
  var CursorManagerBase = $module$AcornUiCore.com.acornui.core.cursor.CursorManagerBase;
  var cursor_0 = $module$AcornUiCore.com.acornui.core.cursor;
  var LifecycleBase = $module$AcornUiCore.com.acornui.core.LifecycleBase;
  var Cursor = $module$AcornUiCore.com.acornui.core.cursor.Cursor;
  var FlowDisplay = $module$AcornUiCore.com.acornui.component.layout.algorithm.FlowDisplay;
  var joinToString = Kotlin.kotlin.collections.joinToString_cph1y3$;
  var core_0 = $module$AcornUiCore.com.acornui.core;
  var Pad_init = $module$AcornUtils.com.acornui.math.Pad_init_mx4ult$;
  var Bounds = $module$AcornUtils.com.acornui.math.Bounds;
  var NativeComponent = $module$AcornUiCore.com.acornui.component.NativeComponent;
  var NativeContainer = $module$AcornUiCore.com.acornui.component.NativeContainer;
  var TextCommand = $module$AcornUiCore.com.acornui.component.text.TextCommand;
  var Color = $module$AcornUtils.com.acornui.graphics.Color;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var TextCommander = $module$AcornUiCore.com.acornui.component.text.TextCommander;
  var ScrollPolicy = $module$AcornUiCore.com.acornui.component.scroll.ScrollPolicy;
  var toCssString = $module$AcornUiCore.com.acornui.component.scroll.toCssString_1663pe$;
  var EditableTextField = $module$AcornUiCore.com.acornui.component.text.EditableTextField;
  var addTag = $module$AcornUiCore.com.acornui.component.style.addTag_252qwq$;
  var keyDown = $module$AcornUiCore.com.acornui.core.input.keyDown_3ayf9d$;
  var input_0 = $module$AcornUiCore.com.acornui.core.input;
  var keyUp = $module$AcornUiCore.com.acornui.core.input.keyUp_3ayf9d$;
  var styleWithCSS = $module$AcornUiCore.com.acornui.component.text.styleWithCSS_l3m7u9$;
  var onChanged = $module$AcornUiCore.com.acornui.component.style.onChanged_bs293j$;
  var UiComponentImpl = $module$AcornUiCore.com.acornui.component.UiComponentImpl;
  var BoxStyle = $module$AcornUiCore.com.acornui.component.BoxStyle;
  var style_0 = $module$AcornUiCore.com.acornui.component.style.style_me8cu5$;
  var component_0 = $module$AcornUiCore.com.acornui.component;
  var Rect = $module$AcornUiCore.com.acornui.component.Rect;
  var ElementContainerImpl = $module$AcornUiCore.com.acornui.component.ElementContainerImpl;
  var ScrollAreaStyle = $module$AcornUiCore.com.acornui.component.scroll.ScrollAreaStyle;
  var StackLayoutContainer = $module$AcornUiCore.com.acornui.component.StackLayoutContainer;
  var validationProp = $module$AcornUiCore.com.acornui.component.validationProp_a0927t$;
  var ScrollArea = $module$AcornUiCore.com.acornui.component.scroll.ScrollArea;
  var Signal1 = $module$AcornUtils.com.acornui.signal.Signal1;
  var Disposable = $module$AcornUtils.com.acornui.core.Disposable;
  var MutableClampedScrollModel = $module$AcornUiCore.com.acornui.component.scroll.MutableClampedScrollModel;
  var invalidateLayout = $module$AcornUiCore.com.acornui.component.invalidateLayout_6wsfsl$;
  var Rectangle = $module$AcornUtils.com.acornui.math.Rectangle;
  var Corners = $module$AcornUtils.com.acornui.math.Corners;
  var ScrollRect = $module$AcornUiCore.com.acornui.component.scroll.ScrollRect;
  var ContainerImpl = $module$AcornUiCore.com.acornui.component.ContainerImpl;
  var CharStyle = $module$AcornUiCore.com.acornui.component.text.CharStyle;
  var FlowStyle = $module$AcornUiCore.com.acornui.component.text.FlowStyle;
  var TextSelection = $module$AcornUiCore.com.acornui.component.text.TextSelection;
  var TextField = $module$AcornUiCore.com.acornui.component.text.TextField;
  var TextInput = $module$AcornUiCore.com.acornui.component.text.TextInput;
  var TextArea = $module$AcornUiCore.com.acornui.component.text.TextArea;
  var FlowHAlign = $module$AcornUiCore.com.acornui.component.layout.algorithm.FlowHAlign;
  var UnsupportedOperationException = Kotlin.kotlin.UnsupportedOperationException;
  var assetBinding = $module$AcornUiCore.com.acornui.core.assets.assetBinding_q8ohgi$;
  var TextureComponent = $module$AcornUiCore.com.acornui.component.TextureComponent;
  var clear = Kotlin.kotlin.dom.clear_asww5s$;
  var Window = $module$AcornUiCore.com.acornui.core.graphics.Window;
  var AssetManager = $module$AcornUiCore.com.acornui.core.assets.AssetManager;
  var InteractivityManager = $module$AcornUiCore.com.acornui.core.input.InteractivityManager;
  var FocusManager = $module$AcornUiCore.com.acornui.core.focus.FocusManager;
  var SelectionManager = $module$AcornUiCore.com.acornui.core.selection.SelectionManager;
  var OwnedImpl = $module$AcornUiCore.com.acornui.core.di.OwnedImpl;
  var Stage = $module$AcornUiCore.com.acornui.component.Stage;
  var fakeFocusMouse = $module$AcornUiCore.com.acornui.core.focus.fakeFocusMouse_xd4dkp$;
  var AppConfig = $module$AcornUiCore.com.acornui.core.AppConfig;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var DataTransferRead = $module$AcornUiCore.com.acornui.core.input.interaction.DataTransferRead;
  var DataTransferItem = $module$AcornUiCore.com.acornui.core.input.interaction.DataTransferItem;
  var equalsArray = $module$AcornUtils.com.acornui.collection.equalsArray_5fp2ol$;
  var hashCodeIterable = $module$AcornUtils.com.acornui.collection.hashCodeIterable_4b5429$;
  var _assert = $module$AcornUiCore.com.acornui._assert_eltq40$;
  var KeyInteraction = $module$AcornUiCore.com.acornui.core.input.interaction.KeyInteraction;
  var MouseInteraction = $module$AcornUiCore.com.acornui.core.input.interaction.MouseInteraction;
  var ClickEvent = $module$AcornUiCore.com.acornui.core.input.interaction.ClickEvent;
  var TouchInteraction = $module$AcornUiCore.com.acornui.core.input.interaction.TouchInteraction;
  var ClipboardInteraction = $module$AcornUiCore.com.acornui.core.input.interaction.ClipboardInteraction;
  var logging_0 = $module$AcornUtils.com.acornui.logging;
  var StoppableSignalImpl = $module$AcornUtils.com.acornui.signal.StoppableSignalImpl;
  var KeyLocation = $module$AcornUiCore.com.acornui.core.input.interaction.KeyLocation;
  var Touch = $module$AcornUiCore.com.acornui.core.input.interaction.Touch;
  var WhichButton = $module$AcornUiCore.com.acornui.core.input.WhichButton;
  var collection_0 = $module$AcornUtils.com.acornui.collection;
  var ArrayList = Kotlin.kotlin.collections.ArrayList;
  var ancestry = $module$AcornUiCore.com.acornui.core.ancestry_mnhe99$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var downTo = Kotlin.kotlin.ranges.downTo_dqglrj$;
  var WheelInteraction = $module$AcornUiCore.com.acornui.core.input.interaction.WheelInteraction;
  var StageStyle = $module$AcornUiCore.com.acornui.component.StageStyle;
  var inject = $module$AcornUiCore.com.acornui.core.di.inject_y3a68v$;
  var Focusable = $module$AcornUiCore.com.acornui.core.focus.Focusable;
  var TextureTarget = $module$AcornUiCore.com.acornui.gl.core.TextureTarget;
  var TextureMagFilter = $module$AcornUiCore.com.acornui.gl.core.TextureMagFilter;
  var TextureMinFilter = $module$AcornUiCore.com.acornui.gl.core.TextureMinFilter;
  var TextureWrapMode = $module$AcornUiCore.com.acornui.gl.core.TextureWrapMode;
  var TexturePixelFormat = $module$AcornUiCore.com.acornui.gl.core.TexturePixelFormat;
  var TexturePixelType = $module$AcornUiCore.com.acornui.gl.core.TexturePixelType;
  var Texture = $module$AcornUiCore.com.acornui.core.graphics.Texture;
  var Signal3 = $module$AcornUtils.com.acornui.signal.Signal3;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var hashMapOf = Kotlin.kotlin.collections.hashMapOf_qfcya0$;
  var FocusManagerImpl = $module$AcornUiCore.com.acornui.core.focus.FocusManagerImpl;
  var InteractionEvent = $module$AcornUiCore.com.acornui.core.input.InteractionEvent;
  var root = $module$AcornUiCore.com.acornui.core.root_6iy55o$;
  var Drivable = $module$AcornUiCore.com.acornui.core.Drivable;
  var contains = Kotlin.kotlin.collections.contains_mjy6jw$;
  var UiComponent = $module$AcornUiCore.com.acornui.component.UiComponent;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var Gl20 = $module$AcornUiCore.com.acornui.gl.core.Gl20;
  var GlProgramRef = $module$AcornUiCore.com.acornui.gl.core.GlProgramRef;
  var GlShaderRef = $module$AcornUiCore.com.acornui.gl.core.GlShaderRef;
  var GlBufferRef = $module$AcornUiCore.com.acornui.gl.core.GlBufferRef;
  var GlFramebufferRef = $module$AcornUiCore.com.acornui.gl.core.GlFramebufferRef;
  var GlRenderbufferRef = $module$AcornUiCore.com.acornui.gl.core.GlRenderbufferRef;
  var GlTextureRef = $module$AcornUiCore.com.acornui.gl.core.GlTextureRef;
  var GlActiveInfoRef = $module$AcornUiCore.com.acornui.gl.core.GlActiveInfoRef;
  var GlUniformLocationRef = $module$AcornUiCore.com.acornui.gl.core.GlUniformLocationRef;
  var WrappedGl20 = $module$AcornUiCore.com.acornui.gl.core.WrappedGl20;
  var GlState = $module$AcornUiCore.com.acornui.gl.core.GlState;
  var GlTextField = $module$AcornUiCore.com.acornui.gl.component.text.GlTextField;
  var GlEditableTextField = $module$AcornUiCore.com.acornui.gl.component.text.GlEditableTextField;
  var GlTextInput = $module$AcornUiCore.com.acornui.gl.component.text.GlTextInput;
  var GlTextArea = $module$AcornUiCore.com.acornui.gl.component.text.GlTextArea;
  var GlTextureComponent = $module$AcornUiCore.com.acornui.gl.component.GlTextureComponent;
  var GlScrollArea = $module$AcornUiCore.com.acornui.gl.component.GlScrollArea;
  var GlScrollRect = $module$AcornUiCore.com.acornui.gl.component.GlScrollRect;
  var GlRect = $module$AcornUiCore.com.acornui.gl.component.GlRect;
  var GlStageImpl = $module$AcornUiCore.com.acornui.gl.component.GlStageImpl;
  var GlTextureBase = $module$AcornUiCore.com.acornui.gl.core.GlTextureBase;
  var TreeWalk = $module$AcornUiCore.com.acornui.core.TreeWalk;
  var indexOf = Kotlin.kotlin.text.indexOf_l5u8uk$;
  var CyclicList = $module$AcornUtils.com.acornui.collection.CyclicList;
  var Any = Object;
  var get_lastIndex_0 = Kotlin.kotlin.collections.get_lastIndex_m7z4lg$;
  var Scoped = $module$AcornUiCore.com.acornui.core.di.Scoped;
  var CharInteraction = $module$AcornUiCore.com.acornui.core.input.interaction.CharInteraction;
  var DualHashMap = $module$AcornUtils.com.acornui.collection.DualHashMap;
  var KeyInput = $module$AcornUiCore.com.acornui.core.input.KeyInput;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var first_0 = Kotlin.kotlin.collections.first_us0mfu$;
  var MouseInput = $module$AcornUiCore.com.acornui.core.input.MouseInput;
  var BufferFactory = $module$AcornUiCore.com.acornui.core.io.BufferFactory;
  var BufferBase = $module$AcornUtils.com.acornui.io.BufferBase;
  var NativeBuffer = $module$AcornUtils.com.acornui.io.NativeBuffer;
  var ByteArrayFormItem = $module$AcornUiCore.com.acornui.core.browser.ByteArrayFormItem;
  var StringFormItem = $module$AcornUiCore.com.acornui.core.browser.StringFormItem;
  var RestServiceFactory = $module$AcornUiCore.com.acornui.core.request.RestServiceFactory;
  var UrlRequestData = $module$AcornUiCore.com.acornui.core.request.UrlRequestData;
  var ResponseException = $module$AcornUiCore.com.acornui.core.request.ResponseException;
  var MutableHttpRequest = $module$AcornUiCore.com.acornui.core.request.MutableHttpRequest;
  var core_1 = $module$AcornUtils.com.acornui.core;
  var browser_0 = $module$AcornUtils.com.acornui.browser;
  var string_0 = $module$AcornUiCore.com.acornui.core.string;
  var appendParam = $module$AcornUtils.com.acornui.browser.appendParam_j4ogox$;
  var toInt = Kotlin.kotlin.text.toInt_6ic1pp$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var contains_0 = Kotlin.kotlin.text.contains_li3zpu$;
  var acornui_0 = $module$AcornUiCore.com.acornui;
  var ILogger = $module$AcornUtils.com.acornui.logging.ILogger;
  var serialization_0 = $module$AcornUtils.com.acornui.serialization;
  var io_0 = $module$AcornUiCore.com.acornui.core.io;
  var OrthographicCamera = $module$AcornUiCore.com.acornui.core.graphics.OrthographicCamera;
  var Camera = $module$AcornUiCore.com.acornui.core.graphics.Camera;
  var Files = $module$AcornUiCore.com.acornui.core.io.file.Files;
  var file_0 = $module$AcornUtils.com.acornui.io.file;
  var FilesImpl = $module$AcornUiCore.com.acornui.core.io.file.FilesImpl;
  var MutableAudioManager = $module$AcornUiCore.com.acornui.core.audio.MutableAudioManager;
  var AssetManagerImpl = $module$AcornUiCore.com.acornui.core.assets.AssetManagerImpl;
  var AudioManagerImpl = $module$AcornUiCore.com.acornui.core.audio.AudioManagerImpl;
  var TimeDriverImpl = $module$AcornUiCore.com.acornui.core.time.TimeDriverImpl;
  var TimeDriver = $module$AcornUiCore.com.acornui.core.time.TimeDriver;
  var InteractivityManagerImpl = $module$AcornUiCore.com.acornui.core.input.InteractivityManagerImpl;
  var CursorManager = $module$AcornUiCore.com.acornui.core.cursor.CursorManager;
  var Persistence = $module$AcornUiCore.com.acornui.core.persistance.Persistence;
  var SelectionManagerImpl = $module$AcornUiCore.com.acornui.core.selection.SelectionManagerImpl;
  var PopUpManagerImpl = $module$AcornUiCore.com.acornui.core.popup.PopUpManagerImpl;
  var PopUpManager = $module$AcornUiCore.com.acornui.core.popup.PopUpManager;
  var Bootstrap = $module$AcornUiCore.com.acornui.core.di.Bootstrap;
  var DelegateAction = $module$AcornUtils.com.acornui.action.DelegateAction;
  var Version = $module$AcornUiCore.com.acornui.core.Version;
  var Date_0 = $module$AcornUiCore.com.acornui.core.time.Date;
  var TimeProvider = $module$AcornUiCore.com.acornui.core.time.TimeProvider;
  var Location = $module$AcornUiCore.com.acornui.core.browser.Location;
  PanningModel.prototype = Object.create(Enum.prototype);
  PanningModel.prototype.constructor = PanningModel;
  JsAudioElementMusicLoader.prototype = Object.create(BasicAction.prototype);
  JsAudioElementMusicLoader.prototype.constructor = JsAudioElementMusicLoader;
  JsAudioElementSoundLoader.prototype = Object.create(BasicAction.prototype);
  JsAudioElementSoundLoader.prototype.constructor = JsAudioElementSoundLoader;
  JsWebAudioMusicLoader.prototype = Object.create(BasicAction.prototype);
  JsWebAudioMusicLoader.prototype.constructor = JsWebAudioMusicLoader;
  JsWebAudioSoundLoader.prototype = Object.create(BasicAction.prototype);
  JsWebAudioSoundLoader.prototype.constructor = JsWebAudioSoundLoader;
  JsCursorManager.prototype = Object.create(CursorManagerBase.prototype);
  JsCursorManager.prototype.constructor = JsCursorManager;
  JsTextureCursor.prototype = Object.create(LifecycleBase.prototype);
  JsTextureCursor.prototype.constructor = JsTextureCursor;
  JsStandardCursor.prototype = Object.create(LifecycleBase.prototype);
  JsStandardCursor.prototype.constructor = JsStandardCursor;
  DomContainer.prototype = Object.create(DomComponent_0.prototype);
  DomContainer.prototype.constructor = DomContainer;
  DomTextField.prototype = Object.create(ContainerImpl.prototype);
  DomTextField.prototype.constructor = DomTextField;
  DomEditableTextField.prototype = Object.create(DomTextField.prototype);
  DomEditableTextField.prototype.constructor = DomEditableTextField;
  DomRect.prototype = Object.create(UiComponentImpl.prototype);
  DomRect.prototype.constructor = DomRect;
  DomScrollArea.prototype = Object.create(ElementContainerImpl.prototype);
  DomScrollArea.prototype.constructor = DomScrollArea;
  DomInlineContainer.prototype = Object.create(DomContainer.prototype);
  DomInlineContainer.prototype.constructor = DomInlineContainer;
  DomScrollTopModel.prototype = Object.create(DomScrollModelBase.prototype);
  DomScrollTopModel.prototype.constructor = DomScrollTopModel;
  DomScrollLeftModel.prototype = Object.create(DomScrollModelBase.prototype);
  DomScrollLeftModel.prototype.constructor = DomScrollLeftModel;
  DomScrollRect.prototype = Object.create(ElementContainerImpl.prototype);
  DomScrollRect.prototype.constructor = DomScrollRect;
  DomTextInput.prototype = Object.create(ContainerImpl.prototype);
  DomTextInput.prototype.constructor = DomTextInput;
  DomTextArea.prototype = Object.create(ContainerImpl.prototype);
  DomTextArea.prototype.constructor = DomTextArea;
  DomTextureComponent.prototype = Object.create(UiComponentImpl.prototype);
  DomTextureComponent.prototype.constructor = DomTextureComponent;
  DomApplication.prototype = Object.create(JsApplicationBase.prototype);
  DomApplication.prototype.constructor = DomApplication;
  DomStageImpl.prototype = Object.create(ElementContainerImpl.prototype);
  DomStageImpl.prototype.constructor = DomStageImpl;
  StageContainer.prototype = Object.create(DomContainer.prototype);
  StageContainer.prototype.constructor = StageContainer;
  DomTextureLoader.prototype = Object.create(BasicAction.prototype);
  DomTextureLoader.prototype.constructor = DomTextureLoader;
  DomFocusManager.prototype = Object.create(FocusManagerImpl.prototype);
  DomFocusManager.prototype.constructor = DomFocusManager;
  NativeSignal.prototype = Object.create(StoppableSignalImpl.prototype);
  NativeSignal.prototype.constructor = NativeSignal;
  WebGl20Debug.prototype = Object.create(WrappedGl20.prototype);
  WebGl20Debug.prototype.constructor = WebGl20Debug;
  WebGlApplication.prototype = Object.create(JsApplicationBase.prototype);
  WebGlApplication.prototype.constructor = WebGlApplication;
  WebGlTexture.prototype = Object.create(GlTextureBase.prototype);
  WebGlTexture.prototype.constructor = WebGlTexture;
  WebGlTextureLoader.prototype = Object.create(BasicAction.prototype);
  WebGlTextureLoader.prototype.constructor = WebGlTextureLoader;
  HandlerAction.prototype = Object.create(BasicAction.prototype);
  HandlerAction.prototype.constructor = HandlerAction;
  JsByteBuffer.prototype = Object.create(BufferBase.prototype);
  JsByteBuffer.prototype.constructor = JsByteBuffer;
  JsShortBuffer.prototype = Object.create(BufferBase.prototype);
  JsShortBuffer.prototype.constructor = JsShortBuffer;
  JsIntBuffer.prototype = Object.create(BufferBase.prototype);
  JsIntBuffer.prototype.constructor = JsIntBuffer;
  JsFloatBuffer.prototype = Object.create(BufferBase.prototype);
  JsFloatBuffer.prototype.constructor = JsFloatBuffer;
  JsDoubleBuffer.prototype = Object.create(BufferBase.prototype);
  JsDoubleBuffer.prototype.constructor = JsDoubleBuffer;
  JsHttpRequest.prototype = Object.create(BasicAction.prototype);
  JsHttpRequest.prototype.constructor = JsHttpRequest;
  JsTextLoader.prototype = Object.create(DelegateAction.prototype);
  JsTextLoader.prototype.constructor = JsTextLoader;
  DateImpl.prototype = Object.create(Date_0.prototype);
  DateImpl.prototype.constructor = DateImpl;
  var audioContextSupported;
  function PanningModel(name, ordinal, value) {
    Enum.call(this);
    this.value = value;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PanningModel_initFields() {
    PanningModel_initFields = function () {
    };
    PanningModel$EQUAL_POWER_instance = new PanningModel('EQUAL_POWER', 0, 'equalpower');
    PanningModel$HRTF_instance = new PanningModel('HRTF', 1, 'HRTF');
  }
  var PanningModel$EQUAL_POWER_instance;
  function PanningModel$EQUAL_POWER_getInstance() {
    PanningModel_initFields();
    return PanningModel$EQUAL_POWER_instance;
  }
  var PanningModel$HRTF_instance;
  function PanningModel$HRTF_getInstance() {
    PanningModel_initFields();
    return PanningModel$HRTF_instance;
  }
  PanningModel.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'PanningModel',
    interfaces: [Enum]
  };
  function PanningModel$values() {
    return [PanningModel$EQUAL_POWER_getInstance(), PanningModel$HRTF_getInstance()];
  }
  PanningModel.values = PanningModel$values;
  function PanningModel$valueOf(name) {
    switch (name) {
      case 'EQUAL_POWER':
        return PanningModel$EQUAL_POWER_getInstance();
      case 'HRTF':
        return PanningModel$HRTF_getInstance();
      default:Kotlin.throwISE('No enum constant com.acornui.js.audio.PanningModel.' + name);
    }
  }
  PanningModel.valueOf_61zpoe$ = PanningModel$valueOf;
  function JsAudioContext_0() {
    JsAudioContext_instance = this;
    this.instance$delegate = lazy(JsAudioContext$instance$lambda);
  }
  Object.defineProperty(JsAudioContext_0.prototype, 'instance', {
    get: function () {
      var $receiver = this.instance$delegate;
      new Kotlin.PropertyMetadata('instance');
      return $receiver.value;
    }
  });
  function JsAudioContext$instance$lambda() {
    var JsAudioContext = window.AudioContext || window.webkitAudioContext;
    return new JsAudioContext();
  }
  JsAudioContext_0.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'JsAudioContext',
    interfaces: []
  };
  var JsAudioContext_instance = null;
  function JsAudioContext_getInstance() {
    if (JsAudioContext_instance === null) {
      new JsAudioContext_0();
    }
    return JsAudioContext_instance;
  }
  function JsAudioElementMusic(audioManager, element) {
    this.audioManager_uiqmv1$_0 = audioManager;
    this.element_uiqmv1$_0 = element;
    this.readyStateChanged_uiqmv1$_0 = new Signal0();
    this.readyState_uiqmv1$_0 = MusicReadyState.NOTHING;
    this.onCompleted_uiqmv1$_0 = null;
    this.elementEndedHandler_uiqmv1$_0 = JsAudioElementMusic$elementEndedHandler$lambda(this);
    this.loadedDataHandler_uiqmv1$_0 = JsAudioElementMusic$loadedDataHandler$lambda(this);
    this.element_uiqmv1$_0.addEventListener('ended', this.elementEndedHandler_uiqmv1$_0);
    this.element_uiqmv1$_0.addEventListener('loadeddata', this.loadedDataHandler_uiqmv1$_0);
    this.audioManager_uiqmv1$_0.registerMusic_rfbu1o$(this);
    this._volume_uiqmv1$_0 = 1.0;
  }
  Object.defineProperty(JsAudioElementMusic.prototype, 'readyStateChanged', {
    get: function () {
      return this.readyStateChanged_uiqmv1$_0;
    }
  });
  Object.defineProperty(JsAudioElementMusic.prototype, 'readyState', {
    get: function () {
      return this.readyState_uiqmv1$_0;
    },
    set: function (readyState) {
      this.readyState_uiqmv1$_0 = readyState;
    }
  });
  Object.defineProperty(JsAudioElementMusic.prototype, 'onCompleted', {
    get: function () {
      return this.onCompleted_uiqmv1$_0;
    },
    set: function (onCompleted) {
      this.onCompleted_uiqmv1$_0 = onCompleted;
    }
  });
  Object.defineProperty(JsAudioElementMusic.prototype, 'duration', {
    get: function () {
      return this.element_uiqmv1$_0.duration;
    }
  });
  Object.defineProperty(JsAudioElementMusic.prototype, 'isPlaying', {
    get: function () {
      return !this.element_uiqmv1$_0.paused;
    }
  });
  Object.defineProperty(JsAudioElementMusic.prototype, 'loop', {
    get: function () {
      return this.element_uiqmv1$_0.loop;
    },
    set: function (value) {
      this.element_uiqmv1$_0.loop = value;
    }
  });
  Object.defineProperty(JsAudioElementMusic.prototype, 'volume', {
    get: function () {
      return this._volume_uiqmv1$_0;
    },
    set: function (value) {
      this._volume_uiqmv1$_0 = value;
      var tmp$ = this.element_uiqmv1$_0;
      var value_0 = value * this.audioManager_uiqmv1$_0.musicVolume;
      var clamp_73gzaq$result;
      clamp_73gzaq$break: {
        if (Kotlin.compareTo(value_0, 0.0) <= 0) {
          clamp_73gzaq$result = 0.0;
          break clamp_73gzaq$break;
        }
        if (Kotlin.compareTo(value_0, 1.0) >= 0) {
          clamp_73gzaq$result = 1.0;
          break clamp_73gzaq$break;
        }
        clamp_73gzaq$result = value_0;
      }
      tmp$.volume = clamp_73gzaq$result;
    }
  });
  JsAudioElementMusic.prototype.play = function () {
    this.element_uiqmv1$_0.play();
  };
  JsAudioElementMusic.prototype.pause = function () {
    this.element_uiqmv1$_0.pause();
  };
  JsAudioElementMusic.prototype.stop = function () {
    this.element_uiqmv1$_0.currentTime = 0.0;
    this.element_uiqmv1$_0.pause();
  };
  Object.defineProperty(JsAudioElementMusic.prototype, 'currentTime', {
    get: function () {
      return this.element_uiqmv1$_0.currentTime;
    },
    set: function (value) {
      this.element_uiqmv1$_0.currentTime = value;
    }
  });
  JsAudioElementMusic.prototype.update = function () {
  };
  JsAudioElementMusic.prototype.dispose = function () {
    this.audioManager_uiqmv1$_0.unregisterMusic_rfbu1o$(this);
    this.readyStateChanged.dispose();
    this.element_uiqmv1$_0.removeEventListener('ended', this.elementEndedHandler_uiqmv1$_0);
    this.element_uiqmv1$_0.removeEventListener('loadeddata', this.loadedDataHandler_uiqmv1$_0);
    this.element_uiqmv1$_0.pause();
    this.element_uiqmv1$_0.src = '';
    this.element_uiqmv1$_0.load();
  };
  function JsAudioElementMusic$elementEndedHandler$lambda(this$JsAudioElementMusic) {
    return function (event) {
      var tmp$;
      if (!this$JsAudioElementMusic.loop)
        (tmp$ = this$JsAudioElementMusic.onCompleted) != null ? tmp$() : null;
      kotlin_0.Unit;
    };
  }
  function JsAudioElementMusic$loadedDataHandler$lambda(this$JsAudioElementMusic) {
    return function (event) {
      if (this$JsAudioElementMusic.readyState === MusicReadyState.NOTHING && this$JsAudioElementMusic.element_uiqmv1$_0.readyState >= 3) {
        this$JsAudioElementMusic.readyState = MusicReadyState.READY;
        this$JsAudioElementMusic.readyStateChanged.dispatch();
      }
    };
  }
  JsAudioElementMusic.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsAudioElementMusic',
    interfaces: [Music]
  };
  function JsAudioElementMusicLoader(audioManager) {
    BasicAction.call(this);
    this.audioManager_0 = audioManager;
    this.type_4eqp0w$_0 = assets_0.AssetTypes.MUSIC;
    this._asset_0 = null;
    this.path_4eqp0w$_0 = '';
    this.estimatedBytesTotal_4eqp0w$_0 = 0;
  }
  Object.defineProperty(JsAudioElementMusicLoader.prototype, 'type', {
    get: function () {
      return this.type_4eqp0w$_0;
    }
  });
  Object.defineProperty(JsAudioElementMusicLoader.prototype, 'path', {
    get: function () {
      return this.path_4eqp0w$_0;
    },
    set: function (path) {
      this.path_4eqp0w$_0 = path;
    }
  });
  Object.defineProperty(JsAudioElementMusicLoader.prototype, 'result', {
    get: function () {
      var tmp$;
      return (tmp$ = this._asset_0) != null ? tmp$ : Kotlin.throwNPE();
    }
  });
  Object.defineProperty(JsAudioElementMusicLoader.prototype, 'estimatedBytesTotal', {
    get: function () {
      return this.estimatedBytesTotal_4eqp0w$_0;
    },
    set: function (estimatedBytesTotal) {
      this.estimatedBytesTotal_4eqp0w$_0 = estimatedBytesTotal;
    }
  });
  Object.defineProperty(JsAudioElementMusicLoader.prototype, 'secondsLoaded', {
    get: function () {
      return 0.0;
    }
  });
  Object.defineProperty(JsAudioElementMusicLoader.prototype, 'secondsTotal', {
    get: function () {
      return 0.0;
    }
  });
  JsAudioElementMusicLoader.prototype.onInvocation = function () {
    this._asset_0 = new JsAudioElementMusic(this.audioManager_0, Audio(this.path));
    this.success();
  };
  JsAudioElementMusicLoader.prototype.onAborted = function () {
    this.clear();
  };
  JsAudioElementMusicLoader.prototype.onReset = function () {
    this.clear();
  };
  JsAudioElementMusicLoader.prototype.dispose = function () {
    BasicAction.prototype.dispose.call(this);
    this.clear();
  };
  JsAudioElementMusicLoader.prototype.clear = function () {
    this._asset_0 = null;
  };
  JsAudioElementMusicLoader.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsAudioElementMusicLoader',
    interfaces: [MutableAssetLoader, BasicAction]
  };
  function Audio(source) {
    var tmp$;
    var audio_0 = Kotlin.isType(tmp$ = document.createElement('AUDIO'), HTMLAudioElement) ? tmp$ : Kotlin.throwCCE();
    audio_0.src = source;
    return audio_0;
  }
  function JsAudioElementSound(audioManager, src, priority) {
    this.audioManager_0 = audioManager;
    this.src_0 = src;
    this.priority_rrqacn$_0 = priority;
    this.onCompleted_rrqacn$_0 = null;
    this._isPlaying_0 = false;
    this.element_0 = null;
    this.elementEndedHandler_0 = JsAudioElementSound$elementEndedHandler$lambda(this);
    this.element_0 = Audio(this.src_0);
    this.element_0.addEventListener('ended', this.elementEndedHandler_0);
    this.audioManager_0.registerSound_riitae$(this);
    this._volume_0 = 1.0;
  }
  Object.defineProperty(JsAudioElementSound.prototype, 'priority', {
    get: function () {
      return this.priority_rrqacn$_0;
    }
  });
  Object.defineProperty(JsAudioElementSound.prototype, 'onCompleted', {
    get: function () {
      return this.onCompleted_rrqacn$_0;
    },
    set: function (onCompleted) {
      this.onCompleted_rrqacn$_0 = onCompleted;
    }
  });
  Object.defineProperty(JsAudioElementSound.prototype, 'isPlaying', {
    get: function () {
      return this._isPlaying_0;
    }
  });
  JsAudioElementSound.prototype.complete_0 = function () {
    var tmp$;
    this._isPlaying_0 = false;
    (tmp$ = this.onCompleted) != null ? tmp$() : null;
    this.onCompleted = null;
    this.audioManager_0.unregisterSound_riitae$(this);
  };
  Object.defineProperty(JsAudioElementSound.prototype, 'loop', {
    get: function () {
      return this.element_0.loop;
    },
    set: function (value) {
      this.element_0.loop = value;
    }
  });
  Object.defineProperty(JsAudioElementSound.prototype, 'volume', {
    get: function () {
      return this._volume_0;
    },
    set: function (value) {
      this._volume_0 = value;
      var tmp$ = this.element_0;
      var value_0 = value * this.audioManager_0.soundVolume;
      var clamp_73gzaq$result;
      clamp_73gzaq$break: {
        if (Kotlin.compareTo(value_0, 0.0) <= 0) {
          clamp_73gzaq$result = 0.0;
          break clamp_73gzaq$break;
        }
        if (Kotlin.compareTo(value_0, 1.0) >= 0) {
          clamp_73gzaq$result = 1.0;
          break clamp_73gzaq$break;
        }
        clamp_73gzaq$result = value_0;
      }
      tmp$.volume = clamp_73gzaq$result;
    }
  });
  JsAudioElementSound.prototype.setPosition_y2kzbl$ = function (x, y, z) {
  };
  JsAudioElementSound.prototype.start = function () {
    if (this._isPlaying_0)
      return;
    this._isPlaying_0 = true;
    this.element_0.play();
  };
  JsAudioElementSound.prototype.stop = function () {
    if (!this._isPlaying_0)
      return;
    this._isPlaying_0 = false;
    this.element_0.pause();
    this.element_0.currentTime = 0.0;
  };
  Object.defineProperty(JsAudioElementSound.prototype, 'currentTime', {
    get: function () {
      return this.element_0.currentTime;
    }
  });
  JsAudioElementSound.prototype.update = function () {
  };
  JsAudioElementSound.prototype.dispose = function () {
    this._isPlaying_0 = false;
    this.element_0.pause();
    this.element_0.src = '';
    this.element_0.load();
  };
  function JsAudioElementSound$elementEndedHandler$lambda(this$JsAudioElementSound) {
    return function (event) {
      if (!this$JsAudioElementSound.loop)
        this$JsAudioElementSound.complete_0();
      kotlin_0.Unit;
    };
  }
  JsAudioElementSound.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsAudioElementSound',
    interfaces: [Sound]
  };
  function JsAudioElementSoundFactory(audioManager, path, duration) {
    this.audioManager_0 = audioManager;
    this.path_0 = path;
    this.duration_wvqaen$_0 = duration;
    this.defaultPriority_wvqaen$_0 = 0.0;
    this.audioManager_0.registerSoundSource_bl6c9o$(this);
  }
  Object.defineProperty(JsAudioElementSoundFactory.prototype, 'duration', {
    get: function () {
      return this.duration_wvqaen$_0;
    }
  });
  Object.defineProperty(JsAudioElementSoundFactory.prototype, 'defaultPriority', {
    get: function () {
      return this.defaultPriority_wvqaen$_0;
    },
    set: function (defaultPriority) {
      this.defaultPriority_wvqaen$_0 = defaultPriority;
    }
  });
  JsAudioElementSoundFactory.prototype.createInstance_mx4ult$ = function (priority) {
    if (!this.audioManager_0.canPlaySound_mx4ult$(priority))
      return null;
    return new JsAudioElementSound(this.audioManager_0, this.path_0, priority);
  };
  JsAudioElementSoundFactory.prototype.dispose = function () {
    this.audioManager_0.unregisterSoundSource_bl6c9o$(this);
  };
  JsAudioElementSoundFactory.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsAudioElementSoundFactory',
    interfaces: [SoundFactory]
  };
  function JsAudioElementSoundLoader(audioManager) {
    BasicAction.call(this);
    this.audioManager_0 = audioManager;
    this.type_2n1cze$_0 = assets_0.AssetTypes.SOUND;
    this._asset_0 = null;
    this.path_2n1cze$_0 = '';
    this.estimatedBytesTotal_2n1cze$_0 = 0;
    this.loadedDataHandler_0 = JsAudioElementSoundLoader$loadedDataHandler$lambda(this);
    this.element_0 = null;
  }
  Object.defineProperty(JsAudioElementSoundLoader.prototype, 'type', {
    get: function () {
      return this.type_2n1cze$_0;
    }
  });
  Object.defineProperty(JsAudioElementSoundLoader.prototype, 'path', {
    get: function () {
      return this.path_2n1cze$_0;
    },
    set: function (path) {
      this.path_2n1cze$_0 = path;
    }
  });
  Object.defineProperty(JsAudioElementSoundLoader.prototype, 'result', {
    get: function () {
      var tmp$;
      return (tmp$ = this._asset_0) != null ? tmp$ : Kotlin.throwNPE();
    }
  });
  Object.defineProperty(JsAudioElementSoundLoader.prototype, 'estimatedBytesTotal', {
    get: function () {
      return this.estimatedBytesTotal_2n1cze$_0;
    },
    set: function (estimatedBytesTotal) {
      this.estimatedBytesTotal_2n1cze$_0 = estimatedBytesTotal;
    }
  });
  Object.defineProperty(JsAudioElementSoundLoader.prototype, 'secondsLoaded', {
    get: function () {
      return 0.0;
    }
  });
  Object.defineProperty(JsAudioElementSoundLoader.prototype, 'secondsTotal', {
    get: function () {
      return 0.0;
    }
  });
  JsAudioElementSoundLoader.prototype.unloadElement_0 = function (e) {
    e.removeEventListener('loadeddata', this.loadedDataHandler_0);
    e.pause();
    e.src = '';
    e.load();
  };
  JsAudioElementSoundLoader.prototype.onInvocation = function () {
    var tmp$;
    this.element_0 = Audio(this.path);
    ((tmp$ = this.element_0) != null ? tmp$ : Kotlin.throwNPE()).addEventListener('loadeddata', this.loadedDataHandler_0);
  };
  JsAudioElementSoundLoader.prototype.onAborted = function () {
    this.clear_0();
  };
  JsAudioElementSoundLoader.prototype.onReset = function () {
    this.clear_0();
  };
  JsAudioElementSoundLoader.prototype.dispose = function () {
    BasicAction.prototype.dispose.call(this);
    this.clear_0();
  };
  JsAudioElementSoundLoader.prototype.clear_0 = function () {
    var tmp$;
    if (this.element_0 != null) {
      this.unloadElement_0((tmp$ = this.element_0) != null ? tmp$ : Kotlin.throwNPE());
      this.element_0 = null;
    }
    this._asset_0 = null;
  };
  function JsAudioElementSoundLoader$loadedDataHandler$lambda(this$JsAudioElementSoundLoader) {
    return function (event) {
      var tmp$;
      var e = Kotlin.isType(tmp$ = event.currentTarget, HTMLAudioElement) ? tmp$ : Kotlin.throwCCE();
      if (!this$JsAudioElementSoundLoader.hasCompleted() && e.readyState >= 1) {
        var duration = e.duration;
        this$JsAudioElementSoundLoader._asset_0 = new JsAudioElementSoundFactory(this$JsAudioElementSoundLoader.audioManager_0, this$JsAudioElementSoundLoader.path, duration);
        this$JsAudioElementSoundLoader.success();
        this$JsAudioElementSoundLoader.unloadElement_0(e);
      }
    };
  }
  JsAudioElementSoundLoader.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsAudioElementSoundLoader',
    interfaces: [MutableAssetLoader, BasicAction]
  };
  function JsWebAudioMusic(audioManager, context, element) {
    this.audioManager_0 = audioManager;
    this.context_0 = context;
    this.element_0 = element;
    this.readyStateChanged_wz1cwx$_0 = new Signal0();
    this.onCompleted_wz1cwx$_0 = null;
    this.gain_0 = null;
    this.mediaElementNode_0 = null;
    this._isPlaying_0 = false;
    this.mediaElementNode_0 = this.context_0.createMediaElementSource(this.element_0);
    this.mediaElementNode_0.addEventListener('ended', JsWebAudioMusic_init$lambda(this));
    this.gain_0 = this.context_0.createGain();
    this.gain_0.gain.value = this.audioManager_0.soundVolume;
    this.mediaElementNode_0.connect(this.gain_0);
    this.gain_0.connect(this.context_0.destination);
    this.audioManager_0.registerMusic_rfbu1o$(this);
    this._volume_0 = 1.0;
  }
  Object.defineProperty(JsWebAudioMusic.prototype, 'duration', {
    get: function () {
      return 0.0;
    }
  });
  Object.defineProperty(JsWebAudioMusic.prototype, 'readyStateChanged', {
    get: function () {
      return this.readyStateChanged_wz1cwx$_0;
    }
  });
  Object.defineProperty(JsWebAudioMusic.prototype, 'readyState', {
    get: function () {
      return MusicReadyState.READY;
    }
  });
  JsWebAudioMusic.prototype.pause = function () {
  };
  Object.defineProperty(JsWebAudioMusic.prototype, 'onCompleted', {
    get: function () {
      return this.onCompleted_wz1cwx$_0;
    },
    set: function (onCompleted) {
      this.onCompleted_wz1cwx$_0 = onCompleted;
    }
  });
  Object.defineProperty(JsWebAudioMusic.prototype, 'isPlaying', {
    get: function () {
      return this._isPlaying_0;
    }
  });
  JsWebAudioMusic.prototype.complete_0 = function () {
    var tmp$;
    this._isPlaying_0 = false;
    (tmp$ = this.onCompleted) != null ? tmp$() : null;
    this.onCompleted = null;
    this.audioManager_0.unregisterMusic_rfbu1o$(this);
  };
  Object.defineProperty(JsWebAudioMusic.prototype, 'loop', {
    get: function () {
      return this.element_0.loop;
    },
    set: function (value) {
      this.element_0.loop = value;
    }
  });
  Object.defineProperty(JsWebAudioMusic.prototype, 'volume', {
    get: function () {
      return this._volume_0;
    },
    set: function (value) {
      this._volume_0 = value;
      var tmp$ = this.gain_0.gain;
      var value_0 = value * this.audioManager_0.musicVolume;
      var clamp_73gzaq$result;
      clamp_73gzaq$break: {
        if (Kotlin.compareTo(value_0, 0.0) <= 0) {
          clamp_73gzaq$result = 0.0;
          break clamp_73gzaq$break;
        }
        if (Kotlin.compareTo(value_0, 1.0) >= 0) {
          clamp_73gzaq$result = 1.0;
          break clamp_73gzaq$break;
        }
        clamp_73gzaq$result = value_0;
      }
      tmp$.value = clamp_73gzaq$result;
    }
  });
  JsWebAudioMusic.prototype.play = function () {
    this.element_0.play();
  };
  JsWebAudioMusic.prototype.stop = function () {
    this.element_0.pause();
    this.element_0.currentTime = 0.0;
  };
  Object.defineProperty(JsWebAudioMusic.prototype, 'currentTime', {
    get: function () {
      return this.element_0.currentTime;
    },
    set: function (value) {
      this.element_0.currentTime = value;
    }
  });
  JsWebAudioMusic.prototype.update = function () {
  };
  JsWebAudioMusic.prototype.dispose = function () {
    this.stop();
  };
  function JsWebAudioMusic_init$lambda(this$JsWebAudioMusic) {
    return function (it) {
      this$JsWebAudioMusic.complete_0();
    };
  }
  JsWebAudioMusic.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsWebAudioMusic',
    interfaces: [Music]
  };
  function JsWebAudioMusicLoader(audioManager) {
    BasicAction.call(this);
    this.audioManager_0 = audioManager;
    this.type_2ffw4$_0 = assets_0.AssetTypes.MUSIC;
    this._asset_0 = null;
    this.path_2ffw4$_0 = '';
    this.estimatedBytesTotal_2ffw4$_0 = 0;
  }
  Object.defineProperty(JsWebAudioMusicLoader.prototype, 'type', {
    get: function () {
      return this.type_2ffw4$_0;
    }
  });
  Object.defineProperty(JsWebAudioMusicLoader.prototype, 'path', {
    get: function () {
      return this.path_2ffw4$_0;
    },
    set: function (path) {
      this.path_2ffw4$_0 = path;
    }
  });
  Object.defineProperty(JsWebAudioMusicLoader.prototype, 'result', {
    get: function () {
      var tmp$;
      return (tmp$ = this._asset_0) != null ? tmp$ : Kotlin.throwNPE();
    }
  });
  Object.defineProperty(JsWebAudioMusicLoader.prototype, 'estimatedBytesTotal', {
    get: function () {
      return this.estimatedBytesTotal_2ffw4$_0;
    },
    set: function (estimatedBytesTotal) {
      this.estimatedBytesTotal_2ffw4$_0 = estimatedBytesTotal;
    }
  });
  Object.defineProperty(JsWebAudioMusicLoader.prototype, 'secondsLoaded', {
    get: function () {
      return 0.0;
    }
  });
  Object.defineProperty(JsWebAudioMusicLoader.prototype, 'secondsTotal', {
    get: function () {
      return 0.0;
    }
  });
  JsWebAudioMusicLoader.prototype.onInvocation = function () {
    if (!audioContextSupported) {
      this.fail_3lhtaa$(new Exception('Audio not supported in this browser.'));
      return;
    }
    var element = Audio(this.path);
    element.load();
    this._asset_0 = new JsWebAudioMusic(this.audioManager_0, JsAudioContext_getInstance().instance, element);
    this.success();
  };
  JsWebAudioMusicLoader.prototype.onAborted = function () {
  };
  JsWebAudioMusicLoader.prototype.onReset = function () {
    this._asset_0 = null;
  };
  JsWebAudioMusicLoader.prototype.dispose = function () {
    BasicAction.prototype.dispose.call(this);
    this._asset_0 = null;
  };
  JsWebAudioMusicLoader.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsWebAudioMusicLoader',
    interfaces: [MutableAssetLoader, BasicAction]
  };
  function JsWebAudioSound(audioManager, context, decodedData, priority) {
    this.audioManager_0 = audioManager;
    this.context_0 = context;
    this.decodedData_0 = decodedData;
    this.priority_u810ej$_0 = priority;
    this.onCompleted_u810ej$_0 = null;
    this.gain_0 = null;
    this.panner_0 = null;
    this.audioBufferSourceNode_0 = null;
    this._isPlaying_0 = false;
    this._startTime_0 = 0.0;
    this._stopTime_0 = 0.0;
    this.audioBufferSourceNode_0 = this.context_0.createBufferSource();
    this.audioBufferSourceNode_0.addEventListener('ended', JsWebAudioSound_init$lambda(this));
    this.audioBufferSourceNode_0.buffer = this.decodedData_0;
    this.panner_0 = this.context_0.createPanner();
    this.panner_0.panningModel = PanningModel$EQUAL_POWER_getInstance().value;
    this.gain_0 = this.context_0.createGain();
    this.gain_0.gain.value = this.audioManager_0.soundVolume;
    this.audioBufferSourceNode_0.connect(this.panner_0);
    this.panner_0.connect(this.gain_0);
    this.panner_0.setPosition(0.0, 0.0, 1.0);
    this.gain_0.connect(this.context_0.destination);
    this.audioManager_0.registerSound_riitae$(this);
    this._volume_0 = 1.0;
  }
  Object.defineProperty(JsWebAudioSound.prototype, 'priority', {
    get: function () {
      return this.priority_u810ej$_0;
    }
  });
  Object.defineProperty(JsWebAudioSound.prototype, 'onCompleted', {
    get: function () {
      return this.onCompleted_u810ej$_0;
    },
    set: function (onCompleted) {
      this.onCompleted_u810ej$_0 = onCompleted;
    }
  });
  Object.defineProperty(JsWebAudioSound.prototype, 'isPlaying', {
    get: function () {
      return this._isPlaying_0;
    }
  });
  JsWebAudioSound.prototype.complete_0 = function () {
    var tmp$;
    this._stopTime_0 = time_0.time.nowS();
    this._isPlaying_0 = false;
    (tmp$ = this.onCompleted) != null ? tmp$() : null;
    this.onCompleted = null;
    this.audioManager_0.unregisterSound_riitae$(this);
  };
  Object.defineProperty(JsWebAudioSound.prototype, 'loop', {
    get: function () {
      return this.audioBufferSourceNode_0.loop;
    },
    set: function (value) {
      this.audioBufferSourceNode_0.loop = value;
    }
  });
  Object.defineProperty(JsWebAudioSound.prototype, 'volume', {
    get: function () {
      return this._volume_0;
    },
    set: function (value) {
      this._volume_0 = value;
      var tmp$ = this.gain_0.gain;
      var value_0 = value * this.audioManager_0.soundVolume;
      var clamp_73gzaq$result;
      clamp_73gzaq$break: {
        if (Kotlin.compareTo(value_0, 0.0) <= 0) {
          clamp_73gzaq$result = 0.0;
          break clamp_73gzaq$break;
        }
        if (Kotlin.compareTo(value_0, 1.0) >= 0) {
          clamp_73gzaq$result = 1.0;
          break clamp_73gzaq$break;
        }
        clamp_73gzaq$result = value_0;
      }
      tmp$.value = clamp_73gzaq$result;
    }
  });
  JsWebAudioSound.prototype.setPosition_y2kzbl$ = function (x, y, z) {
    this.panner_0.setPosition(x, y, z);
  };
  JsWebAudioSound.prototype.start = function () {
    this.audioBufferSourceNode_0.start(this.context_0.currentTime);
    this._startTime_0 = time_0.time.nowS();
  };
  JsWebAudioSound.prototype.stop = function () {
    this.audioBufferSourceNode_0.stop(0.0);
  };
  Object.defineProperty(JsWebAudioSound.prototype, 'currentTime', {
    get: function () {
      if (!this._isPlaying_0)
        return this._stopTime_0 - this._startTime_0;
      else
        return time_0.time.nowS() - this._startTime_0;
    }
  });
  JsWebAudioSound.prototype.update = function () {
  };
  JsWebAudioSound.prototype.dispose = function () {
    this.stop();
  };
  function JsWebAudioSound_init$lambda(this$JsWebAudioSound) {
    return function (it) {
      this$JsWebAudioSound.complete_0();
    };
  }
  JsWebAudioSound.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsWebAudioSound',
    interfaces: [Sound]
  };
  function JsWebAudioSoundFactory(audioManager, context, decodedData) {
    this.audioManager_0 = audioManager;
    this.context_0 = context;
    this.decodedData_0 = decodedData;
    this.defaultPriority_tlsevf$_0 = 0.0;
    this.audioManager_0.registerSoundSource_bl6c9o$(this);
  }
  Object.defineProperty(JsWebAudioSoundFactory.prototype, 'defaultPriority', {
    get: function () {
      return this.defaultPriority_tlsevf$_0;
    },
    set: function (defaultPriority) {
      this.defaultPriority_tlsevf$_0 = defaultPriority;
    }
  });
  Object.defineProperty(JsWebAudioSoundFactory.prototype, 'duration', {
    get: function () {
      return get_duration(this.decodedData_0);
    }
  });
  JsWebAudioSoundFactory.prototype.createInstance_mx4ult$ = function (priority) {
    if (!this.audioManager_0.canPlaySound_mx4ult$(priority))
      return null;
    return new JsWebAudioSound(this.audioManager_0, this.context_0, this.decodedData_0, priority);
  };
  JsWebAudioSoundFactory.prototype.dispose = function () {
    this.audioManager_0.unregisterSoundSource_bl6c9o$(this);
  };
  JsWebAudioSoundFactory.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsWebAudioSoundFactory',
    interfaces: [SoundFactory]
  };
  function get_duration($receiver) {
    return $receiver.duration;
  }
  function JsWebAudioSoundLoader(audioManager) {
    BasicAction.call(this);
    this.audioManager_0 = audioManager;
    this.type_747hwe$_0 = assets_0.AssetTypes.SOUND;
    this._asset_0 = null;
    this.path_747hwe$_0 = '';
    this.fileLoader_0 = null;
    this.estimatedBytesTotal_747hwe$_0 = 0;
  }
  Object.defineProperty(JsWebAudioSoundLoader.prototype, 'type', {
    get: function () {
      return this.type_747hwe$_0;
    }
  });
  Object.defineProperty(JsWebAudioSoundLoader.prototype, 'path', {
    get: function () {
      return this.path_747hwe$_0;
    },
    set: function (path) {
      this.path_747hwe$_0 = path;
    }
  });
  Object.defineProperty(JsWebAudioSoundLoader.prototype, 'result', {
    get: function () {
      var tmp$;
      return (tmp$ = this._asset_0) != null ? tmp$ : Kotlin.throwNPE();
    }
  });
  Object.defineProperty(JsWebAudioSoundLoader.prototype, 'estimatedBytesTotal', {
    get: function () {
      return this.estimatedBytesTotal_747hwe$_0;
    },
    set: function (estimatedBytesTotal) {
      this.estimatedBytesTotal_747hwe$_0 = estimatedBytesTotal;
    }
  });
  Object.defineProperty(JsWebAudioSoundLoader.prototype, 'secondsLoaded', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.fileLoader_0) != null ? tmp$.secondsLoaded : null) != null ? tmp$_0 : 0.0;
    }
  });
  Object.defineProperty(JsWebAudioSoundLoader.prototype, 'secondsTotal', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.fileLoader_0) != null ? tmp$.secondsTotal : null) != null ? tmp$_0 : 0.0;
    }
  });
  function JsWebAudioSoundLoader$onInvocation$lambda$lambda(this$JsWebAudioSoundLoader, closure$context) {
    return function (decodedData) {
      this$JsWebAudioSoundLoader._asset_0 = new JsWebAudioSoundFactory(this$JsWebAudioSoundLoader.audioManager_0, closure$context, decodedData);
      this$JsWebAudioSoundLoader.success();
    };
  }
  function JsWebAudioSoundLoader$onInvocation$lambda(closure$context, closure$fileLoader, this$JsWebAudioSoundLoader) {
    return function (it) {
      closure$context.decodeAudioData(closure$fileLoader.resultArrayBuffer, JsWebAudioSoundLoader$onInvocation$lambda$lambda(this$JsWebAudioSoundLoader, closure$context));
    };
  }
  function JsWebAudioSoundLoader$onInvocation$lambda_0(closure$fileLoader, this$JsWebAudioSoundLoader) {
    return function () {
      var tmp$, tmp$_0;
      if (closure$fileLoader.error != null) {
        tmp$_0 = (tmp$ = closure$fileLoader.error) != null ? tmp$ : Kotlin.throwNPE();
        this$JsWebAudioSoundLoader.fail_3lhtaa$(tmp$_0);
      }
       else
        this$JsWebAudioSoundLoader.abort();
    };
  }
  JsWebAudioSoundLoader.prototype.onInvocation = function () {
    if (!audioContextSupported) {
      this.fail_3lhtaa$(new Exception('Audio not supported in this browser.'));
      return;
    }
    var context = JsAudioContext_getInstance().instance;
    var fileLoader = new JsHttpRequest();
    fileLoader.requestData.responseType = ResponseType.BINARY;
    fileLoader.requestData.url = this.path;
    onSuccess(fileLoader, JsWebAudioSoundLoader$onInvocation$lambda(context, fileLoader, this));
    onFailed(fileLoader, JsWebAudioSoundLoader$onInvocation$lambda_0(fileLoader, this));
    fileLoader.invoke();
    this.fileLoader_0 = fileLoader;
  };
  JsWebAudioSoundLoader.prototype.onAborted = function () {
    var tmp$;
    (tmp$ = this.fileLoader_0) != null ? tmp$.abort() : null;
    this._asset_0 = null;
  };
  JsWebAudioSoundLoader.prototype.onReset = function () {
    this._asset_0 = null;
  };
  JsWebAudioSoundLoader.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsWebAudioSoundLoader',
    interfaces: [MutableAssetLoader, BasicAction]
  };
  function JsCursorManager(canvas) {
    CursorManagerBase.call(this);
    this.canvas_0 = canvas;
    var $receiver = cursor_0.StandardCursors;
    $receiver.ALIAS = new JsStandardCursor('alias', this.canvas_0);
    $receiver.ALL_SCROLL = new JsStandardCursor('all-scroll', this.canvas_0);
    $receiver.CELL = new JsStandardCursor('cell', this.canvas_0);
    $receiver.COPY = new JsStandardCursor('copy', this.canvas_0);
    $receiver.CROSSHAIR = new JsStandardCursor('crosshair', this.canvas_0);
    $receiver.DEFAULT = new JsStandardCursor('default', this.canvas_0);
    $receiver.HAND = new JsStandardCursor('pointer', this.canvas_0);
    $receiver.HELP = new JsStandardCursor('help', this.canvas_0);
    $receiver.IBEAM = new JsStandardCursor('text', this.canvas_0);
    $receiver.MOVE = new JsStandardCursor('move', this.canvas_0);
    $receiver.NONE = new JsStandardCursor('none', this.canvas_0);
    $receiver.NOT_ALLOWED = new JsStandardCursor('not-allowed', this.canvas_0);
    $receiver.POINTER_WAIT = new JsStandardCursor('progress', this.canvas_0);
    $receiver.RESIZE_E = new JsStandardCursor('e-resize', this.canvas_0);
    $receiver.RESIZE_N = new JsStandardCursor('n-resize', this.canvas_0);
    $receiver.RESIZE_NE = new JsStandardCursor('ne-resize', this.canvas_0);
    $receiver.RESIZE_SE = new JsStandardCursor('se-resize', this.canvas_0);
    $receiver.WAIT = new JsStandardCursor('wait', this.canvas_0);
  }
  JsCursorManager.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsCursorManager',
    interfaces: [CursorManagerBase]
  };
  function JsTextureCursor(texturePath, hotX, hotY, canvas) {
    LifecycleBase.call(this);
    this.texturePath = texturePath;
    this.hotX = hotX;
    this.hotY = hotY;
    this.canvas = canvas;
  }
  JsTextureCursor.prototype.onActivated = function () {
    this.canvas.style.cursor = 'url(' + '"' + this.texturePath + '"' + ') ' + this.hotX + ' ' + this.hotY + ', default';
  };
  JsTextureCursor.prototype.onDeactivated = function () {
    this.canvas.style.cursor = 'auto';
  };
  JsTextureCursor.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsTextureCursor',
    interfaces: [Cursor, LifecycleBase]
  };
  function JsStandardCursor(identifier, canvas) {
    LifecycleBase.call(this);
    this.identifier = identifier;
    this.canvas = canvas;
  }
  JsStandardCursor.prototype.onActivated = function () {
    this.canvas.style.cursor = this.identifier;
  };
  JsStandardCursor.prototype.onDeactivated = function () {
    this.canvas.style.cursor = 'auto';
  };
  JsStandardCursor.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsStandardCursor',
    interfaces: [Cursor, LifecycleBase]
  };
  function DomComponent(localName) {
    var tmp$;
    return new DomComponent_0(Kotlin.isType(tmp$ = document.createElement(localName), HTMLElement) ? tmp$ : Kotlin.throwCCE());
  }
  function DomComponent_0(element) {
    var tmp$;
    if (element === void 0)
      element = Kotlin.isType(tmp$ = document.createElement('div'), HTMLElement) ? tmp$ : Kotlin.throwCCE();
    this.element = element;
    this.padding = Pad_init(0.0);
    this.border = Pad_init(0.0);
    this.margin = Pad_init(0.0);
    this._interactivityEnabled_b1rcbp$_0 = true;
    this._bounds_b1rcbp$_0 = new Bounds();
    this._display_b1rcbp$_0 = FlowDisplay.BLOCK;
    this.element.draggable = false;
    this.element.className = 'acornComponent';
    this._visible_b1rcbp$_0 = true;
    this.explicitWidth_b1rcbp$_0 = null;
    this.explicitHeight_b1rcbp$_0 = null;
    this.wasSimpleTranslate_b1rcbp$_0 = true;
  }
  Object.defineProperty(DomComponent_0.prototype, 'interactivityEnabled', {
    get: function () {
      return this._interactivityEnabled_b1rcbp$_0;
    },
    set: function (value) {
      this._interactivityEnabled_b1rcbp$_0 = value;
      this.element.style.setProperty('pointer-events', value ? 'auto' : 'none');
    }
  });
  Object.defineProperty(DomComponent_0.prototype, 'visible', {
    get: function () {
      return this._visible_b1rcbp$_0;
    },
    set: function (value) {
      if (Kotlin.equals(this._visible_b1rcbp$_0, value))
        return;
      this._visible_b1rcbp$_0 = value;
      this.refreshDisplayStyle();
    }
  });
  Object.defineProperty(DomComponent_0.prototype, 'display', {
    get: function () {
      return this._display_b1rcbp$_0;
    },
    set: function (value) {
      if (this._display_b1rcbp$_0 === value)
        return;
      this._display_b1rcbp$_0 = value;
      this.refreshDisplayStyle();
    }
  });
  DomComponent_0.prototype.refreshDisplayStyle = function () {
    var tmp$, tmp$_0, tmp$_1;
    if (this._visible_b1rcbp$_0) {
      tmp$_1 = this.element.style;
      tmp$ = this._display_b1rcbp$_0;
      if (Kotlin.equals(tmp$, FlowDisplay.INLINE))
        tmp$_0 = 'inline';
      else if (Kotlin.equals(tmp$, FlowDisplay.BLOCK))
        tmp$_0 = 'block';
      else if (Kotlin.equals(tmp$, FlowDisplay.INLINE_BLOCK))
        tmp$_0 = 'inline-block';
      else
        tmp$_0 = Kotlin.noWhenBranchMatched();
      tmp$_1.display = tmp$_0;
    }
     else {
      this.element.style.display = 'none';
    }
  };
  Object.defineProperty(DomComponent_0.prototype, 'bounds', {
    get: function () {
      var tmp$, tmp$_0;
      if (this.explicitWidth_b1rcbp$_0 == null) {
        this._bounds_b1rcbp$_0.width = this.element.offsetWidth + this.marginW;
      }
       else {
        this._bounds_b1rcbp$_0.width = (tmp$ = this.explicitWidth_b1rcbp$_0) != null ? tmp$ : Kotlin.throwNPE();
      }
      if (this.explicitHeight_b1rcbp$_0 == null) {
        this._bounds_b1rcbp$_0.height = this.element.offsetHeight + this.marginH;
      }
       else {
        this._bounds_b1rcbp$_0.height = (tmp$_0 = this.explicitHeight_b1rcbp$_0) != null ? tmp$_0 : Kotlin.throwNPE();
      }
      return this._bounds_b1rcbp$_0;
    }
  });
  DomComponent_0.prototype.setSize_yxjqmk$ = function (width, height) {
    this.explicitWidth_b1rcbp$_0 = width;
    this.explicitHeight_b1rcbp$_0 = height;
    var $receiver = this.element.style;
    var tmp$;
    if (width == null)
      tmp$ = 'auto';
    else {
      var y = width - this.paddingW - this.borderW - this.marginW;
      var max_sdesaw$result;
      if (Kotlin.compareTo(0.0, y) >= 0) {
        max_sdesaw$result = 0.0;
      }
       else {
        max_sdesaw$result = y;
      }
      tmp$ = max_sdesaw$result.toString() + 'px';
    }
    $receiver.width = tmp$;
    var tmp$_0;
    if (height == null)
      tmp$_0 = 'auto';
    else {
      var y_0 = height - this.paddingH - this.borderH - this.marginH;
      var max_sdesaw$result_0;
      if (Kotlin.compareTo(0.0, y_0) >= 0) {
        max_sdesaw$result_0 = 0.0;
      }
       else {
        max_sdesaw$result_0 = y_0;
      }
      tmp$_0 = max_sdesaw$result_0.toString() + 'px';
    }
    $receiver.height = tmp$_0;
  };
  Object.defineProperty(DomComponent_0.prototype, 'paddingW', {
    get: function () {
      return this.padding.left + this.padding.right;
    }
  });
  Object.defineProperty(DomComponent_0.prototype, 'paddingH', {
    get: function () {
      return this.padding.top + this.padding.bottom;
    }
  });
  Object.defineProperty(DomComponent_0.prototype, 'borderW', {
    get: function () {
      return this.border.left + this.border.right;
    }
  });
  Object.defineProperty(DomComponent_0.prototype, 'borderH', {
    get: function () {
      return this.border.top + this.border.bottom;
    }
  });
  Object.defineProperty(DomComponent_0.prototype, 'marginW', {
    get: function () {
      return this.margin.left + this.margin.right;
    }
  });
  Object.defineProperty(DomComponent_0.prototype, 'marginH', {
    get: function () {
      return this.margin.top + this.margin.bottom;
    }
  });
  DomComponent_0.prototype.setTransform_1ktw39$ = function (value) {
    if (this.wasSimpleTranslate_b1rcbp$_0) {
      this.element.style.removeProperty('left');
      this.element.style.removeProperty('top');
      this.wasSimpleTranslate_b1rcbp$_0 = false;
    }
    this.element.style.transform = 'matrix3d(' + joinToString(value.values, ',') + ')';
  };
  DomComponent_0.prototype.setSimpleTranslate_dleff0$ = function (x, y) {
    if (!this.wasSimpleTranslate_b1rcbp$_0) {
      this.element.style.removeProperty('transform');
      this.wasSimpleTranslate_b1rcbp$_0 = true;
    }
    this.element.style.top = y.toString() + 'px';
    this.element.style.left = x.toString() + 'px';
  };
  DomComponent_0.prototype.setConcatenatedTransform_1ktw39$ = function (value) {
  };
  DomComponent_0.prototype.setColorTint_1qghwi$ = function (value) {
    this.element.style.opacity = value.a.toString();
  };
  DomComponent_0.prototype.setConcatenatedColorTint_1qghwi$ = function (value) {
  };
  function DomComponent$blur$lambda(this$DomComponent) {
    return function () {
      this$DomComponent.element.blur();
    };
  }
  DomComponent_0.prototype.blur = function () {
    this.element.removeAttribute('tabindex');
    if (core_0.UserInfo.isIe) {
      setTimeout(DomComponent$blur$lambda(this), 100);
    }
     else {
      this.element.blur();
    }
  };
  function DomComponent$focus$lambda(this$DomComponent) {
    return function () {
      this$DomComponent.element.focus();
    };
  }
  DomComponent_0.prototype.focus = function () {
    this.element.setAttribute('tabindex', '0');
    this.element.focus();
    if (core_0.UserInfo.isIe) {
      setTimeout(DomComponent$focus$lambda(this), 100);
    }
  };
  DomComponent_0.prototype.dispose = function () {
  };
  DomComponent_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DomComponent',
    interfaces: [NativeComponent]
  };
  function userSelect($receiver, value) {
    var v = value ? 'text' : 'none';
    $receiver.setProperty('user-select', v);
    $receiver.setProperty('-webkit-user-select', v);
    $receiver.setProperty('-moz-user-select', v);
    $receiver.setProperty('-ms-user-select', v);
  }
  function DomContainer(element) {
    DomContainer$Companion_getInstance();
    var tmp$;
    if (element === void 0)
      element = Kotlin.isType(tmp$ = document.createElement('div'), HTMLElement) ? tmp$ : Kotlin.throwCCE();
    DomComponent_0.call(this, element);
  }
  DomContainer.prototype.addChild_a1xap5$ = function (native, index) {
    if (!Kotlin.isType(native, DomComponent_0))
      throw new Exception('Must be a DomComponent');
    var totalChildren = this.element.childElementCount;
    if (index === totalChildren) {
      this.element.appendChild(native.element);
    }
     else {
      this.element.insertBefore(native.element, this.element.children[index]);
    }
  };
  DomContainer.prototype.removeChild_za3lpa$ = function (index) {
    var tmp$;
    this.element.removeChild((tmp$ = this.element.children[index]) != null ? tmp$ : Kotlin.throwNPE());
  };
  DomContainer.prototype.swapChildren_vux9f0$ = function (indexA, indexB) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var size = this.element.childElementCount;
    if (size <= indexA)
      throw new Exception('indexA ' + indexA + ' is out of bounds.');
    if (size <= indexB)
      throw new Exception('indexB ' + indexB + ' is out of bounds.');
    if (DomContainer$Companion_getInstance().placeholder_0 == null)
      DomContainer$Companion_getInstance().placeholder_0 = document.createElement('span');
    var nodeA = (tmp$ = this.element.childNodes[indexA]) != null ? tmp$ : Kotlin.throwNPE();
    var nodeB = (tmp$_0 = this.element.childNodes[indexB]) != null ? tmp$_0 : Kotlin.throwNPE();
    this.element.replaceChild((tmp$_1 = DomContainer$Companion_getInstance().placeholder_0) != null ? tmp$_1 : Kotlin.throwNPE(), nodeB);
    this.element.replaceChild(nodeB, nodeA);
    this.element.replaceChild(nodeA, (tmp$_2 = DomContainer$Companion_getInstance().placeholder_0) != null ? tmp$_2 : Kotlin.throwNPE());
  };
  function DomContainer$Companion() {
    DomContainer$Companion_instance = this;
    this.placeholder_0 = null;
  }
  DomContainer$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DomContainer$Companion_instance = null;
  function DomContainer$Companion_getInstance() {
    if (DomContainer$Companion_instance === null) {
      new DomContainer$Companion();
    }
    return DomContainer$Companion_instance;
  }
  DomContainer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DomContainer',
    interfaces: [NativeContainer, DomComponent_0]
  };
  function DomContainer_init(localName, $this) {
    $this = $this || Object.create(DomContainer.prototype);
    var tmp$;
    DomContainer.call($this, Kotlin.isType(tmp$ = document.createElement(localName), HTMLElement) ? tmp$ : Kotlin.throwCCE());
    return $this;
  }
  function DomEditableTextField(owner, element, domContainer) {
    var tmp$;
    if (element === void 0)
      element = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : Kotlin.throwCCE();
    if (domContainer === void 0)
      domContainer = new DomContainer(element);
    DomTextField.call(this, owner, element, domContainer);
    this.focusEnabled_oqsju9$_0 = false;
    this.focusOrder_oqsju9$_0 = 0.0;
    this.highlight$delegate = this.createSlot_6s3w0i$();
    this.hScrollModel_oqsju9$_0 = new DomScrollLeftModel(element);
    this.vScrollModel_oqsju9$_0 = new DomScrollTopModel(element);
    this.textCommander_oqsju9$_0 = new DomEditableTextField$textCommander$ObjectLiteral(this);
    var initialValue = ScrollPolicy.OFF;
    var onChange = DomEditableTextField$hScrollPolicy$lambda(element);
    this.hScrollPolicy$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(onChange, initialValue);
    var initialValue_0 = ScrollPolicy.OFF;
    var onChange_0 = DomEditableTextField$vScrollPolicy$lambda(element);
    this.vScrollPolicy$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(onChange_0, initialValue_0);
    var onChange_1 = DomEditableTextField$editable$lambda(element);
    this.editable$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(onChange_1, false);
    this.imagePasteHandler = DomEditableTextField$imagePasteHandler$lambda;
    addTag(this, EditableTextField.Companion);
    this.focusEnabled = true;
    this.hScrollPolicy = ScrollPolicy.AUTO;
    this.vScrollPolicy = ScrollPolicy.AUTO;
    this.editable = true;
    keyDown(this).add_trkh7z$(DomEditableTextField_init$lambda);
    keyUp(this).add_trkh7z$(DomEditableTextField_init$lambda_0);
    userSelect(element.style, true);
    element.addEventListener('paste', this.imagePasteHandler);
    styleWithCSS(this.textCommander, true);
    onChanged(this.boxStyle, DomEditableTextField_init$lambda_1(this, element));
    onChanged(this.flowStyle, DomEditableTextField_init$lambda_2(this, element));
    this.lastRange = null;
  }
  Object.defineProperty(DomEditableTextField.prototype, 'focusEnabled', {
    get: function () {
      return this.focusEnabled_oqsju9$_0;
    },
    set: function (focusEnabled) {
      this.focusEnabled_oqsju9$_0 = focusEnabled;
    }
  });
  Object.defineProperty(DomEditableTextField.prototype, 'focusOrder', {
    get: function () {
      return this.focusOrder_oqsju9$_0;
    },
    set: function (focusOrder) {
      this.focusOrder_oqsju9$_0 = focusOrder;
    }
  });
  Object.defineProperty(DomEditableTextField.prototype, 'highlight', {
    get: function () {
      return this.highlight$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('highlight'));
    },
    set: function (highlight) {
      this.highlight$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('highlight'), highlight);
    }
  });
  Object.defineProperty(DomEditableTextField.prototype, 'hScrollModel', {
    get: function () {
      return this.hScrollModel_oqsju9$_0;
    }
  });
  Object.defineProperty(DomEditableTextField.prototype, 'vScrollModel', {
    get: function () {
      return this.vScrollModel_oqsju9$_0;
    }
  });
  Object.defineProperty(DomEditableTextField.prototype, 'textCommander', {
    get: function () {
      return this.textCommander_oqsju9$_0;
    }
  });
  Object.defineProperty(DomEditableTextField.prototype, 'hScrollPolicy', {
    get: function () {
      return this.hScrollPolicy$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('hScrollPolicy'));
    },
    set: function (hScrollPolicy) {
      this.hScrollPolicy$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('hScrollPolicy'), hScrollPolicy);
    }
  });
  Object.defineProperty(DomEditableTextField.prototype, 'vScrollPolicy', {
    get: function () {
      return this.vScrollPolicy$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('vScrollPolicy'));
    },
    set: function (vScrollPolicy) {
      this.vScrollPolicy$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('vScrollPolicy'), vScrollPolicy);
    }
  });
  Object.defineProperty(DomEditableTextField.prototype, 'editable', {
    get: function () {
      return this.editable$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('editable'));
    },
    set: function (editable) {
      this.editable$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('editable'), editable);
    }
  });
  Object.defineProperty(DomEditableTextField.prototype, 'text', {
    get: function () {
      return this.element.textContent;
    },
    set: function (value) {
      this.element.textContent = value;
    }
  });
  Object.defineProperty(DomEditableTextField.prototype, 'htmlText', {
    get: function () {
      return this.element.innerHTML;
    },
    set: function (value) {
      this.element.innerHTML = value;
    }
  });
  DomEditableTextField.prototype.onFocused = function () {
    var tmp$;
    if (this.lastRange != null) {
      var s = getSelection(document);
      s.removeAllRanges();
      s.addRange((tmp$ = this.lastRange) != null ? tmp$ : Kotlin.throwNPE());
      this.lastRange = null;
    }
  };
  DomEditableTextField.prototype.onBlurred = function () {
    var s = getSelection(document);
    if (s.rangeCount > 0) {
      this.lastRange = s.getRangeAt(0).cloneRange();
    }
     else {
      this.lastRange = null;
    }
  };
  DomEditableTextField.prototype.updateLayout_64u75x$ = function (explicitWidth, explicitHeight, out) {
    var tmp$;
    DomTextField.prototype.updateLayout_64u75x$.call(this, explicitWidth, explicitHeight, out);
    (tmp$ = this.highlight) != null ? tmp$.setSize_i12l7q$(out) : null;
  };
  DomEditableTextField.prototype.dispose = function () {
    DomTextField.prototype.dispose.call(this);
    this.hScrollModel.dispose();
    this.vScrollModel.dispose();
    this.element.removeEventListener('paste', this.imagePasteHandler);
  };
  function DomEditableTextField$textCommander$ObjectLiteral(this$DomEditableTextField) {
    this.this$DomEditableTextField = this$DomEditableTextField;
  }
  DomEditableTextField$textCommander$ObjectLiteral.prototype.exec_puj7f4$ = function (commandName, value) {
    var tmp$, tmp$_0;
    this.this$DomEditableTextField.focus();
    if (Kotlin.equals(commandName, TextCommand.insertHTML.name)) {
      var s = getSelection(document);
      if (s.rangeCount > 0) {
        var range = s.getRangeAt(0);
        range.deleteContents();
        var span = Kotlin.isType(tmp$ = document.createElement('span'), HTMLSpanElement) ? tmp$ : Kotlin.throwCCE();
        span.innerHTML = value;
        if (span.childNodes.length > 0) {
          var frag = document.createDocumentFragment();
          var lastNode = null;
          while (span.childNodes.length > 0) {
            lastNode = frag.appendChild((tmp$_0 = span.firstChild) != null ? tmp$_0 : Kotlin.throwNPE());
          }
          range.insertNode(frag);
          if (lastNode != null) {
            var newRange = range.cloneRange();
            newRange.setStartAfter(lastNode);
            newRange.collapse(true);
            s.removeAllRanges();
            s.addRange(newRange);
          }
        }
      }
      return true;
    }
     else {
      return document.execCommand(commandName, false, value);
    }
  };
  DomEditableTextField$textCommander$ObjectLiteral.prototype.queryBool_61zpoe$ = function (commandId) {
    return document.queryCommandState(commandId);
  };
  DomEditableTextField$textCommander$ObjectLiteral.prototype.queryString_61zpoe$ = function (commandId) {
    return queryCommandValue2(document, commandId).toString();
  };
  DomEditableTextField$textCommander$ObjectLiteral.prototype.queryColor_61zpoe$ = function (commandId) {
    var obj = queryCommandValue2(document, commandId);
    if (core_0.UserInfo.isIe && Kotlin.isNumber(obj)) {
      var bgr = Kotlin.numberToInt(obj);
      var c = new Color();
      c.b = ((bgr & 16711680) >>> 16) / 255.0;
      c.g = ((bgr & 65280) >>> 8) / 255.0;
      c.r = (bgr & 255) / 255.0;
      c.a = 1.0;
      return c;
    }
     else {
      if (typeof obj === 'string') {
        if (startsWith(obj, '#')) {
          return Color.Companion.fromRgbaStr_61zpoe$(obj.substring(1));
        }
         else if (startsWith(obj, 'rgb', true))
          return Color.Companion.fromCssStr_61zpoe$(obj);
        else
          return Color.Companion.from888Str_61zpoe$(obj);
      }
       else {
        return Color.Companion.BLACK.copy_7b5o5w$();
      }
    }
  };
  DomEditableTextField$textCommander$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [TextCommander]
  };
  function DomEditableTextField$hScrollPolicy$lambda(closure$element) {
    return function (prop, old, new_0) {
      closure$element.style.overflowX = toCssString(new_0);
    };
  }
  function DomEditableTextField$vScrollPolicy$lambda(closure$element) {
    return function (prop, old, new_0) {
      closure$element.style.overflowY = toCssString(new_0);
    };
  }
  function DomEditableTextField$editable$lambda(closure$element) {
    return function (prop, old, new_0) {
      closure$element.contentEditable = new_0 ? 'true' : 'false';
    };
  }
  function DomEditableTextField$imagePasteHandler$lambda$lambda(closure$fileReader) {
    return function (e) {
      var tmp$;
      var image = Kotlin.isType(tmp$ = document.createElement('img'), HTMLImageElement) ? tmp$ : Kotlin.throwCCE();
      image.src = closure$fileReader.result;
      var win = window;
      var range = getSelection_0(win).getRangeAt(0);
      range.insertNode(image);
      range.collapse(false);
      var selection_0 = getSelection_0(win);
      selection_0.removeAllRanges();
      selection_0.addRange(range);
    };
  }
  function DomEditableTextField$imagePasteHandler$lambda(e) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    Kotlin.isType(tmp$ = e, ClipboardEvent) ? tmp$ : Kotlin.throwCCE();
    if (e.clipboardData != null && ((tmp$_0 = e.clipboardData.items) == null || Kotlin.isType(tmp$_0, DataTransferItemList) ? tmp$_0 : Kotlin.throwCCE()) != null) {
      tmp$_1 = e.clipboardData.items.length - 1 | 0;
      for (var i = 0; i <= tmp$_1; i++) {
        var item = (tmp$_2 = e.clipboardData.items[i]) != null ? tmp$_2 : Kotlin.throwNPE();
        if (Kotlin.equals(item.kind, 'file') && Kotlin.equals(item.type, 'image/png')) {
          tmp$_3 = item.getAsFile();
          if (tmp$_3 == null) {
            continue;
          }
          var imageFile = tmp$_3;
          var fileReader = new FileReader();
          fileReader.onloadend = DomEditableTextField$imagePasteHandler$lambda$lambda(fileReader);
          fileReader.readAsDataURL(imageFile);
          e.preventDefault();
          break;
        }
      }
    }
  }
  function DomEditableTextField_init$lambda(it) {
    it.handled = true;
    if (it.keyCode === input_0.Ascii.TAB)
      it.preventDefault();
  }
  function DomEditableTextField_init$lambda_0(it) {
    it.handled = true;
  }
  function DomEditableTextField_init$lambda_1(this$DomEditableTextField, closure$element) {
    return function (it) {
      var tmp$;
      applyCss(this$DomEditableTextField.boxStyle, closure$element);
      applyBox(this$DomEditableTextField.boxStyle, Kotlin.isType(tmp$ = this$DomEditableTextField.native, DomComponent_0) ? tmp$ : Kotlin.throwCCE());
    };
  }
  function DomEditableTextField_init$lambda_2(this$DomEditableTextField, closure$element) {
    return function (it) {
      applyCss_0(this$DomEditableTextField.flowStyle, closure$element);
    };
  }
  DomEditableTextField.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DomEditableTextField',
    interfaces: [EditableTextField, DomTextField]
  };
  function queryCommandValue2($receiver, commandId) {
    var d = $receiver;
    return d.queryCommandValue(commandId);
  }
  function DomRect(owner, element) {
    var tmp$;
    if (element === void 0)
      element = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : Kotlin.throwCCE();
    UiComponentImpl.call(this, owner, new DomComponent_0(element));
    this.element = element;
    this.style_sdtvrs$_0 = style_0(this, new BoxStyle());
    onChanged(this.style, DomRect_init$lambda(this));
  }
  Object.defineProperty(DomRect.prototype, 'style', {
    get: function () {
      return this.style_sdtvrs$_0;
    }
  });
  function DomRect_init$lambda(this$DomRect) {
    return function (it) {
      var tmp$;
      applyCss(it, this$DomRect.element);
      applyBox(it, Kotlin.isType(tmp$ = this$DomRect.native, DomComponent_0) ? tmp$ : Kotlin.throwCCE());
      this$DomRect.invalidate_za3lpa$(component_0.ValidationFlags.LAYOUT);
    };
  }
  DomRect.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DomRect',
    interfaces: [Rect, UiComponentImpl]
  };
  function applyBox($receiver, native) {
    native.margin.set_ujzovp$($receiver.margin);
    native.border.set_ujzovp$($receiver.borderThickness);
    native.padding.set_ujzovp$($receiver.padding);
  }
  function applyCss($receiver, element) {
    var it = $receiver;
    var $receiver_0 = element.style;
    var gradient = it.linearGradient;
    if (gradient == null) {
      $receiver_0.removeProperty('background');
      $receiver_0.backgroundColor = it.backgroundColor.toCssString();
    }
     else {
      $receiver_0.removeProperty('background-color');
      $receiver_0.background = gradient.toCssString();
    }
    var bC = it.borderColor;
    $receiver_0.borderTopColor = bC.top.toCssString();
    $receiver_0.borderRightColor = bC.right.toCssString();
    $receiver_0.borderBottomColor = bC.bottom.toCssString();
    $receiver_0.borderLeftColor = bC.left.toCssString();
    var b = it.borderThickness;
    $receiver_0.borderLeftWidth = b.left.toString() + 'px';
    $receiver_0.borderTopWidth = b.top.toString() + 'px';
    $receiver_0.borderRightWidth = b.right.toString() + 'px';
    $receiver_0.borderBottomWidth = b.bottom.toString() + 'px';
    var c = it.borderRadius;
    $receiver_0.borderTopLeftRadius = c.topLeft.x.toString() + 'px ' + c.topLeft.y + 'px';
    $receiver_0.borderTopRightRadius = c.topRight.x.toString() + 'px ' + c.topRight.y + 'px';
    $receiver_0.borderBottomRightRadius = c.bottomRight.x.toString() + 'px ' + c.bottomRight.y + 'px';
    $receiver_0.borderBottomLeftRadius = c.bottomLeft.x.toString() + 'px ' + c.bottomLeft.y + 'px';
    $receiver_0.borderStyle = 'solid';
    var m = it.margin;
    $receiver_0.marginLeft = m.left.toString() + 'px';
    $receiver_0.marginTop = m.top.toString() + 'px';
    $receiver_0.marginRight = m.right.toString() + 'px';
    $receiver_0.marginBottom = m.bottom.toString() + 'px';
    var p = it.padding;
    $receiver_0.paddingLeft = p.left.toString() + 'px';
    $receiver_0.paddingTop = p.top.toString() + 'px';
    $receiver_0.paddingRight = p.right.toString() + 'px';
    $receiver_0.paddingBottom = p.bottom.toString() + 'px';
  }
  function DomScrollArea(owner, native) {
    if (native === void 0)
      native = new DomContainer();
    ElementContainerImpl.call(this, owner, native);
    this.native_8dwpmm$_0 = native;
    this.style_8dwpmm$_0 = style_0(this, new ScrollAreaStyle());
    this._hScrollModel_0 = new DomScrollLeftModel(this.native.element);
    this._vScrollModel_0 = new DomScrollTopModel(this.native.element);
    this.contents_0 = new StackLayoutContainer(owner, new DomInlineContainer());
    this.hScrollPolicy$delegate = validationProp(this, ScrollPolicy.AUTO, component_0.ValidationFlags.LAYOUT);
    this.vScrollPolicy$delegate = validationProp(this, ScrollPolicy.AUTO, component_0.ValidationFlags.LAYOUT);
    this.scrollChangedHandler_0 = DomScrollArea$scrollChangedHandler$lambda(this);
    addTag(this, ScrollArea.Companion);
    this.validation.addNode_sxjeop$(ScrollArea.Companion.SCROLLING, component_0.ValidationFlags.LAYOUT, DomScrollArea_init$lambda(this));
    this.addChild_mxweac$(this.contents_0);
    this.hScrollModel.changed.add_trkh7z$(this.scrollChangedHandler_0);
    this.vScrollModel.changed.add_trkh7z$(this.scrollChangedHandler_0);
    onChanged(this.style, DomScrollArea_init$lambda_0(this));
  }
  Object.defineProperty(DomScrollArea.prototype, 'native', {
    get: function () {
      return this.native_8dwpmm$_0;
    }
  });
  Object.defineProperty(DomScrollArea.prototype, 'layoutAlgorithm', {
    get: function () {
      return this.contents_0.layoutAlgorithm;
    }
  });
  Object.defineProperty(DomScrollArea.prototype, 'style', {
    get: function () {
      return this.style_8dwpmm$_0;
    }
  });
  Object.defineProperty(DomScrollArea.prototype, 'hScrollModel', {
    get: function () {
      return this._hScrollModel_0;
    }
  });
  Object.defineProperty(DomScrollArea.prototype, 'vScrollModel', {
    get: function () {
      return this._vScrollModel_0;
    }
  });
  Object.defineProperty(DomScrollArea.prototype, 'hScrollPolicy', {
    get: function () {
      return this.hScrollPolicy$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('hScrollPolicy'));
    },
    set: function (hScrollPolicy) {
      this.hScrollPolicy$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('hScrollPolicy'), hScrollPolicy);
    }
  });
  Object.defineProperty(DomScrollArea.prototype, 'vScrollPolicy', {
    get: function () {
      return this.vScrollPolicy$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('vScrollPolicy'));
    },
    set: function (vScrollPolicy) {
      this.vScrollPolicy$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('vScrollPolicy'), vScrollPolicy);
    }
  });
  DomScrollArea.prototype.onElementAdded_68b5gw$ = function (index, element) {
    this.contents_0.addElement_3i6itm$(index, element);
  };
  DomScrollArea.prototype.onElementRemoved_68b5gw$ = function (index, element) {
    this.contents_0.removeElement_erfg6z$(element);
  };
  DomScrollArea.prototype.onElementsSwapped_7tm638$ = function (elementA, indexA, elementB, indexB) {
    this.contents_0.swapElements_tu2188$(elementA, elementB);
  };
  Object.defineProperty(DomScrollArea.prototype, 'contentsWidth', {
    get: function () {
      this.validate_za3lpa$(component_0.ValidationFlags.LAYOUT);
      return this.contents_0.width;
    }
  });
  Object.defineProperty(DomScrollArea.prototype, 'contentsHeight', {
    get: function () {
      this.validate_za3lpa$(component_0.ValidationFlags.LAYOUT);
      return this.contents_0.height;
    }
  });
  DomScrollArea.prototype.updateLayout_64u75x$ = function (explicitWidth, explicitHeight, out) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var requireHScrolling = this.hScrollPolicy === ScrollPolicy.ON && explicitWidth != null;
    var allowHScrolling = this.hScrollPolicy !== ScrollPolicy.OFF && explicitWidth != null;
    var requireVScrolling = this.vScrollPolicy === ScrollPolicy.ON && explicitHeight != null;
    var allowVScrolling = this.vScrollPolicy !== ScrollPolicy.OFF && explicitHeight != null;
    if (!(requireHScrolling || requireVScrolling)) {
      this.contents_0.setSize_yxjqmk$(explicitWidth, explicitHeight);
    }
    var needsHScrollBar = allowHScrolling && (requireHScrolling || this.contents_0.width > (explicitWidth != null ? explicitWidth : Kotlin.throwNPE()));
    var needsVScrollBar = allowVScrolling && (requireVScrolling || this.contents_0.height > (explicitHeight != null ? explicitHeight : Kotlin.throwNPE()));
    this.hScrollBarVisible_0(false);
    this.vScrollBarVisible_0(false);
    if (needsHScrollBar && needsVScrollBar) {
      this.hScrollBarVisible_0(true);
      this.vScrollBarVisible_0(true);
      this.contents_0.setSize_yxjqmk$((explicitWidth != null ? explicitWidth : Kotlin.throwNPE()) - this.vScrollBarW_0(), (explicitHeight != null ? explicitHeight : Kotlin.throwNPE()) - this.hScrollBarH_0());
    }
     else if (needsHScrollBar) {
      this.hScrollBarVisible_0(true);
      this.contents_0.setSize_yxjqmk$(explicitWidth, explicitHeight == null ? null : explicitHeight - this.hScrollBarH_0());
      needsVScrollBar = (allowVScrolling && (requireVScrolling || this.contents_0.height > ((tmp$ = this.contents_0.explicitHeight) != null ? tmp$ : Kotlin.throwNPE())));
      if (needsVScrollBar) {
        this.vScrollBarVisible_0(true);
        this.contents_0.setSize_yxjqmk$((explicitWidth != null ? explicitWidth : Kotlin.throwNPE()) - this.vScrollBarW_0(), (explicitHeight != null ? explicitHeight : Kotlin.throwNPE()) - this.hScrollBarH_0());
      }
    }
     else if (needsVScrollBar) {
      this.vScrollBarVisible_0(true);
      this.contents_0.setSize_yxjqmk$(explicitWidth == null ? null : explicitWidth - this.vScrollBarW_0(), explicitHeight);
      needsHScrollBar = (allowHScrolling && (requireHScrolling || this.contents_0.width > ((tmp$_0 = this.contents_0.explicitWidth) != null ? tmp$_0 : Kotlin.throwNPE())));
      if (needsHScrollBar) {
        this.hScrollBarVisible_0(true);
        this.contents_0.setSize_yxjqmk$((explicitWidth != null ? explicitWidth : Kotlin.throwNPE()) - this.vScrollBarW_0(), (explicitHeight != null ? explicitHeight : Kotlin.throwNPE()) - this.hScrollBarH_0());
      }
    }
    var contentsW = (tmp$_1 = this.contents_0.explicitWidth) != null ? tmp$_1 : this.contents_0.width;
    var contentsH = (tmp$_2 = this.contents_0.explicitHeight) != null ? tmp$_2 : this.contents_0.height;
    var tmp$_3 = this._hScrollModel_0;
    var y = this.contents_0.width - contentsW;
    var max_sdesaw$result;
    if (Kotlin.compareTo(0.0, y) >= 0) {
      max_sdesaw$result = 0.0;
    }
     else {
      max_sdesaw$result = y;
    }
    tmp$_3.max = max_sdesaw$result;
    var tmp$_4 = this._vScrollModel_0;
    var y_0 = this.contents_0.height - contentsH;
    var max_sdesaw$result_0;
    if (Kotlin.compareTo(0.0, y_0) >= 0) {
      max_sdesaw$result_0 = 0.0;
    }
     else {
      max_sdesaw$result_0 = y_0;
    }
    tmp$_4.max = max_sdesaw$result_0;
    out.set_dleff0$(explicitWidth != null ? explicitWidth : this.contents_0.width, explicitHeight != null ? explicitHeight : this.contents_0.height);
  };
  DomScrollArea.prototype.vScrollBarW_0 = function () {
    var e = this.native.element;
    return e.offsetWidth - e.clientWidth | 0;
  };
  DomScrollArea.prototype.hScrollBarH_0 = function () {
    var e = this.native.element;
    return e.offsetHeight - e.clientHeight | 0;
  };
  DomScrollArea.prototype.hScrollBarVisible_0 = function (value) {
    this.native.element.style.overflowX = value ? 'scroll' : 'hidden';
  };
  DomScrollArea.prototype.vScrollBarVisible_0 = function (value) {
    this.native.element.style.overflowY = value ? 'scroll' : 'hidden';
  };
  DomScrollArea.prototype.validateScroll_0 = function () {
    this.contents_0.moveTo_y2kzbl$(-this.hScrollModel.value, -this.vScrollModel.value);
  };
  DomScrollArea.prototype.dispose = function () {
    ElementContainerImpl.prototype.dispose.call(this);
    this._hScrollModel_0.dispose();
    this._vScrollModel_0.dispose();
  };
  function DomScrollArea$scrollChangedHandler$lambda(this$DomScrollArea) {
    return function (it) {
      this$DomScrollArea.invalidate_za3lpa$(ScrollArea.Companion.SCROLLING);
      kotlin_0.Unit;
    };
  }
  function DomScrollArea_init$lambda(this$DomScrollArea) {
    return function () {
      this$DomScrollArea.validateScroll_0();
    };
  }
  function DomScrollArea_init$lambda_0(this$DomScrollArea) {
    return function (it) {
      var bR = it.borderRadius;
      var $receiver = this$DomScrollArea.native.element.style;
      $receiver.borderTopLeftRadius = bR.topLeft.x.toString() + 'px ' + bR.topLeft.y + 'px';
      $receiver.borderTopRightRadius = bR.topRight.x.toString() + 'px ' + bR.topRight.y + 'px';
      $receiver.borderBottomRightRadius = bR.bottomRight.x.toString() + 'px ' + bR.bottomRight.y + 'px';
      $receiver.borderBottomLeftRadius = bR.bottomLeft.x.toString() + 'px ' + bR.bottomLeft.y + 'px';
    };
  }
  DomScrollArea.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DomScrollArea',
    interfaces: [ScrollArea, ElementContainerImpl]
  };
  function DomInlineContainer() {
    DomContainer.call(this);
  }
  DomInlineContainer.prototype.setTransform_1ktw39$ = function (value) {
  };
  DomInlineContainer.prototype.setSimpleTranslate_dleff0$ = function (x, y) {
  };
  DomInlineContainer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DomInlineContainer',
    interfaces: [DomContainer]
  };
  function DomScrollModelBase(element) {
    this.element = element;
    this.changed_rgaqyz$_0 = new Signal1();
    this.min$delegate = this.bindable_1zc21x$_0(0.0);
    this.max$delegate = this.bindable_1zc21x$_0(0.0);
    this.snap$delegate = this.bindable_1zc21x$_0(0.0);
    this.elementScrollHandler_rgaqyz$_0 = DomScrollModelBase$elementScrollHandler$lambda(this);
    this.element.addEventListener('scroll', this.elementScrollHandler_rgaqyz$_0);
  }
  Object.defineProperty(DomScrollModelBase.prototype, 'changed', {
    get: function () {
      return this.changed_rgaqyz$_0;
    }
  });
  function DomScrollModelBase$bindable$lambda(this$DomScrollModelBase) {
    return function (meta, old, new_0) {
      if (!Kotlin.equals(old, new_0))
        this$DomScrollModelBase.changed.dispatch_11rb$(this$DomScrollModelBase);
    };
  }
  DomScrollModelBase.prototype.bindable_1zc21x$_0 = function (initial) {
    return new Kotlin.kotlin.properties.Delegates.observable$f(DomScrollModelBase$bindable$lambda(this), initial);
  };
  Object.defineProperty(DomScrollModelBase.prototype, 'min', {
    get: function () {
      return this.min$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('min'));
    },
    set: function (min) {
      this.min$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('min'), min);
    }
  });
  Object.defineProperty(DomScrollModelBase.prototype, 'max', {
    get: function () {
      return this.max$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('max'));
    },
    set: function (max) {
      this.max$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('max'), max);
    }
  });
  Object.defineProperty(DomScrollModelBase.prototype, 'snap', {
    get: function () {
      return this.snap$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('snap'));
    },
    set: function (snap) {
      this.snap$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('snap'), snap);
    }
  });
  DomScrollModelBase.prototype.dispose = function () {
    this.element.removeEventListener('scroll', this.elementScrollHandler_rgaqyz$_0);
  };
  function DomScrollModelBase$elementScrollHandler$lambda(this$DomScrollModelBase) {
    return function (event) {
      this$DomScrollModelBase.changed.dispatch_11rb$(this$DomScrollModelBase);
    };
  }
  DomScrollModelBase.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DomScrollModelBase',
    interfaces: [Disposable, MutableClampedScrollModel]
  };
  function DomScrollTopModel(element) {
    DomScrollModelBase.call(this, element);
  }
  Object.defineProperty(DomScrollTopModel.prototype, 'rawValue', {
    get: function () {
      return this.element.scrollTop;
    },
    set: function (value) {
      this.element.scrollTop = value;
    }
  });
  DomScrollTopModel.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DomScrollTopModel',
    interfaces: [DomScrollModelBase]
  };
  function DomScrollLeftModel(element) {
    DomScrollModelBase.call(this, element);
  }
  Object.defineProperty(DomScrollLeftModel.prototype, 'rawValue', {
    get: function () {
      return this.element.scrollLeft;
    },
    set: function (value) {
      this.element.scrollLeft = value;
    }
  });
  DomScrollLeftModel.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DomScrollLeftModel',
    interfaces: [DomScrollModelBase]
  };
  function DomScrollRect(owner, element) {
    var tmp$;
    if (element === void 0)
      element = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : Kotlin.throwCCE();
    ElementContainerImpl.call(this, owner, new DomContainer(element));
    this.element = element;
    this._maskBounds_84sjed$_0 = new Bounds();
    this._contentBounds_84sjed$_0 = new Rectangle();
    this._borderRadius_84sjed$_0 = new Corners();
    this.maskSize_dleff0$(100.0, 100.0);
    var $receiver = this.element.style;
    $receiver.overflowX = 'hidden';
    $receiver.overflowY = 'hidden';
  }
  Object.defineProperty(DomScrollRect.prototype, 'borderRadius', {
    get: function () {
      return this._borderRadius_84sjed$_0;
    },
    set: function (value) {
      this._borderRadius_84sjed$_0.set_avuye$(value);
      var $receiver = this.element.style;
      $receiver.borderTopLeftRadius = value.topLeft.x.toString() + 'px ' + value.topLeft.y + 'px';
      $receiver.borderTopRightRadius = value.topRight.x.toString() + 'px ' + value.topRight.y + 'px';
      $receiver.borderBottomRightRadius = value.bottomRight.x.toString() + 'px ' + value.bottomRight.y + 'px';
      $receiver.borderBottomLeftRadius = value.bottomLeft.x.toString() + 'px ' + value.bottomLeft.y + 'px';
    }
  });
  Object.defineProperty(DomScrollRect.prototype, 'contentBounds', {
    get: function () {
      return this._contentBounds_84sjed$_0;
    }
  });
  DomScrollRect.prototype.scrollTo_dleff0$ = function (x, y) {
    this.element.scrollLeft = x;
    this.element.scrollTop = y;
    this._contentBounds_84sjed$_0.x = -x;
    this._contentBounds_84sjed$_0.y = -y;
  };
  Object.defineProperty(DomScrollRect.prototype, 'maskBounds', {
    get: function () {
      return this._maskBounds_84sjed$_0;
    }
  });
  DomScrollRect.prototype.maskSize_dleff0$ = function (width, height) {
    if (this._maskBounds_84sjed$_0.width === width && this._maskBounds_84sjed$_0.height === height)
      return;
    this._maskBounds_84sjed$_0.set_dleff0$(width, height);
    invalidateLayout(this);
  };
  DomScrollRect.prototype.updateLayout_64u75x$ = function (explicitWidth, explicitHeight, out) {
    ElementContainerImpl.prototype.updateLayout_64u75x$.call(this, explicitWidth, explicitHeight, out);
    this._contentBounds_84sjed$_0.width = out.width;
    this._contentBounds_84sjed$_0.height = out.height;
    out.set_i12l7q$(this._maskBounds_84sjed$_0);
  };
  DomScrollRect.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DomScrollRect',
    interfaces: [ScrollRect, ElementContainerImpl]
  };
  function DomTextField(owner, element, domContainer) {
    var tmp$;
    if (element === void 0)
      element = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : Kotlin.throwCCE();
    if (domContainer === void 0)
      domContainer = new DomContainer(element);
    ContainerImpl.call(this, owner, domContainer);
    this.element = element;
    this.domContainer = domContainer;
    this.charStyle_knbtvv$_0 = style_0(this, new CharStyle());
    this.boxStyle_knbtvv$_0 = style_0(this, new BoxStyle());
    this.flowStyle_knbtvv$_0 = style_0(this, new FlowStyle());
    this.selection_knbtvv$_0 = new TextSelection();
    addTag(this, TextField.Companion);
    var $receiver = this.element.style;
    $receiver.overflowX = 'hidden';
    $receiver.overflowY = 'hidden';
    onChanged(this.charStyle, DomTextField_init$lambda(this));
    onChanged(this.boxStyle, DomTextField_init$lambda_0(this));
    onChanged(this.flowStyle, DomTextField_init$lambda_1(this));
  }
  Object.defineProperty(DomTextField.prototype, 'charStyle', {
    get: function () {
      return this.charStyle_knbtvv$_0;
    }
  });
  Object.defineProperty(DomTextField.prototype, 'boxStyle', {
    get: function () {
      return this.boxStyle_knbtvv$_0;
    }
  });
  Object.defineProperty(DomTextField.prototype, 'flowStyle', {
    get: function () {
      return this.flowStyle_knbtvv$_0;
    }
  });
  Object.defineProperty(DomTextField.prototype, 'selection', {
    get: function () {
      return this.selection_knbtvv$_0;
    }
  });
  DomTextField.prototype.onAncestorVisibleChanged_hv8cvn$ = function (uiComponent, value) {
    this.invalidate_za3lpa$(component_0.ValidationFlags.LAYOUT);
  };
  Object.defineProperty(DomTextField.prototype, 'text', {
    get: function () {
      return this.element.textContent;
    },
    set: function (value) {
      this.element.textContent = value;
      this.invalidate_za3lpa$(component_0.ValidationFlags.LAYOUT);
    }
  });
  Object.defineProperty(DomTextField.prototype, 'htmlText', {
    get: function () {
      return this.element.innerHTML;
    },
    set: function (value) {
      this.element.innerHTML = value;
      this.invalidate_za3lpa$(component_0.ValidationFlags.LAYOUT);
    }
  });
  DomTextField.prototype.updateLayout_64u75x$ = function (explicitWidth, explicitHeight, out) {
    if (explicitWidth == null && (this.domContainer.display === FlowDisplay.BLOCK || this.domContainer.display === FlowDisplay.INLINE_BLOCK)) {
      this.element.style.whiteSpace = 'nowrap';
    }
     else {
      this.element.style.whiteSpace = 'normal';
    }
    this.native.setSize_yxjqmk$(explicitWidth, explicitHeight);
    out.set_i12l7q$(this.native.bounds);
  };
  function DomTextField_init$lambda(this$DomTextField) {
    return function (it) {
      applyCss_1(it, this$DomTextField.element);
    };
  }
  function DomTextField_init$lambda_0(this$DomTextField) {
    return function (it) {
      var tmp$;
      applyCss(it, this$DomTextField.element);
      applyBox(it, Kotlin.isType(tmp$ = this$DomTextField.native, DomComponent_0) ? tmp$ : Kotlin.throwCCE());
    };
  }
  function DomTextField_init$lambda_1(this$DomTextField) {
    return function (it) {
      applyCss_0(it, this$DomTextField.element);
    };
  }
  DomTextField.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DomTextField',
    interfaces: [TextField, ContainerImpl]
  };
  function DomTextInput(owner, inputElement) {
    var tmp$;
    if (inputElement === void 0)
      inputElement = Kotlin.isType(tmp$ = document.createElement('input'), HTMLInputElement) ? tmp$ : Kotlin.throwCCE();
    ContainerImpl.call(this, owner, new DomContainer(inputElement));
    this.inputElement = inputElement;
    this.charStyle_m5evy3$_0 = style_0(this, new CharStyle());
    this.flowStyle_m5evy3$_0 = style_0(this, new FlowStyle());
    this.boxStyle_m5evy3$_0 = style_0(this, new BoxStyle());
    this.focusEnabled_m5evy3$_0 = true;
    this.focusOrder_m5evy3$_0 = 0.0;
    this.highlight$delegate = this.createSlot_6s3w0i$();
    this.input_m5evy3$_0 = new Signal0();
    this.changed_m5evy3$_0 = new Signal0();
    this._editable_m5evy3$_0 = true;
    this._maxLength_m5evy3$_0 = null;
    this.selection_m5evy3$_0 = new TextSelection();
    addTag(this, TextInput.Companion);
    keyDown(this).add_trkh7z$(DomTextInput_init$lambda);
    keyUp(this).add_trkh7z$(DomTextInput_init$lambda_0);
    this.inputElement.autofocus = false;
    this.inputElement.tabIndex = 0;
    this.inputElement.onchange = DomTextInput_init$lambda_1(this);
    this.inputElement.oninput = DomTextInput_init$lambda_2(this);
    onChanged(this.charStyle, DomTextInput_init$lambda_3(this));
    onChanged(this.flowStyle, DomTextInput_init$lambda_4(this));
    onChanged(this.boxStyle, DomTextInput_init$lambda_5(this));
  }
  Object.defineProperty(DomTextInput.prototype, 'charStyle', {
    get: function () {
      return this.charStyle_m5evy3$_0;
    }
  });
  Object.defineProperty(DomTextInput.prototype, 'flowStyle', {
    get: function () {
      return this.flowStyle_m5evy3$_0;
    }
  });
  Object.defineProperty(DomTextInput.prototype, 'boxStyle', {
    get: function () {
      return this.boxStyle_m5evy3$_0;
    }
  });
  Object.defineProperty(DomTextInput.prototype, 'focusEnabled', {
    get: function () {
      return this.focusEnabled_m5evy3$_0;
    },
    set: function (focusEnabled) {
      this.focusEnabled_m5evy3$_0 = focusEnabled;
    }
  });
  Object.defineProperty(DomTextInput.prototype, 'focusOrder', {
    get: function () {
      return this.focusOrder_m5evy3$_0;
    },
    set: function (focusOrder) {
      this.focusOrder_m5evy3$_0 = focusOrder;
    }
  });
  Object.defineProperty(DomTextInput.prototype, 'highlight', {
    get: function () {
      return this.highlight$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('highlight'));
    },
    set: function (highlight) {
      this.highlight$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('highlight'), highlight);
    }
  });
  Object.defineProperty(DomTextInput.prototype, 'input', {
    get: function () {
      return this.input_m5evy3$_0;
    }
  });
  Object.defineProperty(DomTextInput.prototype, 'changed', {
    get: function () {
      return this.changed_m5evy3$_0;
    }
  });
  Object.defineProperty(DomTextInput.prototype, 'selection', {
    get: function () {
      return this.selection_m5evy3$_0;
    }
  });
  DomTextInput.prototype.onAncestorVisibleChanged_hv8cvn$ = function (uiComponent, value) {
    this.invalidate_za3lpa$(component_0.ValidationFlags.LAYOUT);
  };
  Object.defineProperty(DomTextInput.prototype, 'editable', {
    get: function () {
      return this._editable_m5evy3$_0;
    },
    set: function (value) {
      if (Kotlin.equals(this._editable_m5evy3$_0, value))
        return;
      this._editable_m5evy3$_0 = value;
      this.inputElement.readOnly = !value;
    }
  });
  Object.defineProperty(DomTextInput.prototype, 'maxLength', {
    get: function () {
      return this._maxLength_m5evy3$_0;
    },
    set: function (value) {
      if (this._maxLength_m5evy3$_0 === value)
        return;
      this._maxLength_m5evy3$_0 = value;
      if (value != null) {
        this.inputElement.maxLength = value;
      }
       else {
        this.inputElement.removeAttribute('maxlength');
      }
    }
  });
  Object.defineProperty(DomTextInput.prototype, 'text', {
    get: function () {
      return this.inputElement.value;
    },
    set: function (value) {
      this.inputElement.value = value;
    }
  });
  Object.defineProperty(DomTextInput.prototype, 'placeholder', {
    get: function () {
      return this.inputElement.placeholder;
    },
    set: function (value) {
      this.inputElement.placeholder;
    }
  });
  DomTextInput.prototype.updateLayout_64u75x$ = function (explicitWidth, explicitHeight, out) {
    var tmp$;
    this.native.setSize_yxjqmk$(explicitWidth, explicitHeight);
    out.set_i12l7q$(this.native.bounds);
    (tmp$ = this.highlight) != null ? tmp$.setSize_i12l7q$(out) : null;
  };
  DomTextInput.prototype.dispose = function () {
    ContainerImpl.prototype.dispose.call(this);
    this.inputElement.oninput = null;
  };
  function DomTextInput_init$lambda(it) {
    it.handled = true;
  }
  function DomTextInput_init$lambda_0(it) {
    it.handled = true;
  }
  function DomTextInput_init$lambda_1(this$DomTextInput) {
    return function (it) {
      this$DomTextInput.changed.dispatch();
    };
  }
  function DomTextInput_init$lambda_2(this$DomTextInput) {
    return function (it) {
      this$DomTextInput.input.dispatch();
    };
  }
  function DomTextInput_init$lambda_3(this$DomTextInput) {
    return function (it) {
      applyCss_1(it, this$DomTextInput.inputElement);
    };
  }
  function DomTextInput_init$lambda_4(this$DomTextInput) {
    return function (it) {
      applyCss_0(it, this$DomTextInput.inputElement);
    };
  }
  function DomTextInput_init$lambda_5(this$DomTextInput) {
    return function (it) {
      var tmp$;
      applyCss(it, this$DomTextInput.inputElement);
      applyBox(it, Kotlin.isType(tmp$ = this$DomTextInput.native, DomComponent_0) ? tmp$ : Kotlin.throwCCE());
    };
  }
  DomTextInput.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DomTextInput',
    interfaces: [TextInput, ContainerImpl]
  };
  function DomTextArea(owner, areaElement) {
    var tmp$;
    if (areaElement === void 0)
      areaElement = Kotlin.isType(tmp$ = document.createElement('textarea'), HTMLTextAreaElement) ? tmp$ : Kotlin.throwCCE();
    ContainerImpl.call(this, owner, new DomContainer(areaElement));
    this.areaElement_ni9hlu$_0 = areaElement;
    this.charStyle_ni9hlu$_0 = style_0(this, new CharStyle());
    this.flowStyle_ni9hlu$_0 = style_0(this, new FlowStyle());
    this.boxStyle_ni9hlu$_0 = style_0(this, new BoxStyle());
    this.focusEnabled_ni9hlu$_0 = true;
    this.focusOrder_ni9hlu$_0 = 0.0;
    this.highlight$delegate = this.createSlot_6s3w0i$();
    this.changed_ni9hlu$_0 = new Signal0();
    this._editable_ni9hlu$_0 = true;
    addTag(this, TextArea.Companion);
    keyDown(this).add_trkh7z$(DomTextArea_init$lambda);
    this.areaElement_ni9hlu$_0.autofocus = false;
    this.areaElement_ni9hlu$_0.tabIndex = 0;
    this.areaElement_ni9hlu$_0.onchange = DomTextArea_init$lambda_0(this);
    this.areaElement_ni9hlu$_0.style.resize = 'none';
    onChanged(this.charStyle, DomTextArea_init$lambda_1(this));
    onChanged(this.flowStyle, DomTextArea_init$lambda_2(this));
    onChanged(this.boxStyle, DomTextArea_init$lambda_3(this));
  }
  Object.defineProperty(DomTextArea.prototype, 'charStyle', {
    get: function () {
      return this.charStyle_ni9hlu$_0;
    }
  });
  Object.defineProperty(DomTextArea.prototype, 'flowStyle', {
    get: function () {
      return this.flowStyle_ni9hlu$_0;
    }
  });
  Object.defineProperty(DomTextArea.prototype, 'boxStyle', {
    get: function () {
      return this.boxStyle_ni9hlu$_0;
    }
  });
  Object.defineProperty(DomTextArea.prototype, 'focusEnabled', {
    get: function () {
      return this.focusEnabled_ni9hlu$_0;
    },
    set: function (focusEnabled) {
      this.focusEnabled_ni9hlu$_0 = focusEnabled;
    }
  });
  Object.defineProperty(DomTextArea.prototype, 'focusOrder', {
    get: function () {
      return this.focusOrder_ni9hlu$_0;
    },
    set: function (focusOrder) {
      this.focusOrder_ni9hlu$_0 = focusOrder;
    }
  });
  Object.defineProperty(DomTextArea.prototype, 'highlight', {
    get: function () {
      return this.highlight$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('highlight'));
    },
    set: function (highlight) {
      this.highlight$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('highlight'), highlight);
    }
  });
  Object.defineProperty(DomTextArea.prototype, 'changed', {
    get: function () {
      return this.changed_ni9hlu$_0;
    }
  });
  Object.defineProperty(DomTextArea.prototype, 'editable', {
    get: function () {
      return this._editable_ni9hlu$_0;
    },
    set: function (value) {
      if (Kotlin.equals(this._editable_ni9hlu$_0, value))
        return;
      this._editable_ni9hlu$_0 = value;
      this.areaElement_ni9hlu$_0.readOnly = !value;
    }
  });
  DomTextArea.prototype.onAncestorVisibleChanged_hv8cvn$ = function (uiComponent, value) {
    this.invalidate_za3lpa$(component_0.ValidationFlags.LAYOUT);
  };
  Object.defineProperty(DomTextArea.prototype, 'text', {
    get: function () {
      var tmp$;
      return (tmp$ = this.areaElement_ni9hlu$_0.textContent) != null ? tmp$ : '';
    },
    set: function (value) {
      this.areaElement_ni9hlu$_0.textContent = value;
    }
  });
  DomTextArea.prototype.updateLayout_64u75x$ = function (explicitWidth, explicitHeight, out) {
    var tmp$;
    this.native.setSize_yxjqmk$(explicitWidth, explicitHeight);
    out.set_i12l7q$(this.native.bounds);
    (tmp$ = this.highlight) != null ? tmp$.setSize_i12l7q$(out) : null;
  };
  DomTextArea.prototype.dispose = function () {
    ContainerImpl.prototype.dispose.call(this);
    this.areaElement_ni9hlu$_0.oninput = null;
  };
  function DomTextArea_init$lambda(it) {
    it.handled = true;
  }
  function DomTextArea_init$lambda_0(this$DomTextArea) {
    return function (it) {
      this$DomTextArea.changed.dispatch();
    };
  }
  function DomTextArea_init$lambda_1(this$DomTextArea) {
    return function (it) {
      applyCss_1(it, this$DomTextArea.areaElement_ni9hlu$_0);
    };
  }
  function DomTextArea_init$lambda_2(this$DomTextArea) {
    return function (it) {
      applyCss_0(it, this$DomTextArea.areaElement_ni9hlu$_0);
    };
  }
  function DomTextArea_init$lambda_3(this$DomTextArea) {
    return function (it) {
      var tmp$;
      applyCss(it, this$DomTextArea.areaElement_ni9hlu$_0);
      applyBox(it, Kotlin.isType(tmp$ = this$DomTextArea.native, DomComponent_0) ? tmp$ : Kotlin.throwCCE());
    };
  }
  DomTextArea.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DomTextArea',
    interfaces: [TextArea, ContainerImpl]
  };
  function applyCss_0($receiver, element) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$_1 = element.style;
    tmp$ = $receiver.horizontalAlign;
    if (Kotlin.equals(tmp$, FlowHAlign.LEFT))
      tmp$_0 = 'left';
    else if (Kotlin.equals(tmp$, FlowHAlign.CENTER))
      tmp$_0 = 'center';
    else if (Kotlin.equals(tmp$, FlowHAlign.RIGHT))
      tmp$_0 = 'right';
    else if (Kotlin.equals(tmp$, FlowHAlign.JUSTIFY))
      tmp$_0 = 'justify';
    else
      tmp$_0 = Kotlin.noWhenBranchMatched();
    tmp$_1.textAlign = tmp$_0;
  }
  function applyCss_1($receiver, element) {
    var $receiver_0 = element.style;
    $receiver_0.fontFamily = $receiver.face;
    $receiver_0.fontSize = $receiver.size.toString() + 'px';
    $receiver_0.fontWeight = $receiver.isBold ? 'bold' : 'normal';
    $receiver_0.fontStyle = $receiver.isItalic ? 'italic' : 'normal';
    $receiver_0.textDecoration = $receiver.isUnderlined ? 'underline' : 'none';
    $receiver_0.color = $receiver.colorTint.toCssString();
    var selectable = $receiver.selectable;
    userSelect($receiver_0, selectable);
    $receiver_0.cursor = selectable ? 'text' : 'default';
  }
  function DomTextureComponent(owner, native) {
    if (native === void 0)
      native = DomComponent('div');
    UiComponentImpl.call(this, owner, native);
    this.native_9yjhba$_0 = native;
    this._region = [0.0, 0.0, 1.0, 1.0];
    this._isUv = true;
    this._isRotated = false;
    this._texture_9yjhba$_0 = null;
    this.imageElement_9yjhba$_0 = null;
    this._assetBinding = assetBinding(this, assets_0.AssetTypes.TEXTURE, DomTextureComponent$_assetBinding$lambda(this));
    var tmp$;
    this.imageElement_9yjhba$_0 = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : Kotlin.throwCCE();
    var $receiver = this.imageElement_9yjhba$_0.style;
    $receiver.transformOrigin = '0 0';
    $receiver.overflowX = 'hidden';
    $receiver.overflowY = 'hidden';
    this.native.element.appendChild(this.imageElement_9yjhba$_0);
    this.regionX_9yjhba$_0 = 0.0;
    this.regionY_9yjhba$_0 = 0.0;
    this.regionW_9yjhba$_0 = 0.0;
    this.regionH_9yjhba$_0 = 0.0;
  }
  Object.defineProperty(DomTextureComponent.prototype, 'native', {
    get: function () {
      return this.native_9yjhba$_0;
    }
  });
  Object.defineProperty(DomTextureComponent.prototype, 'isRotated', {
    get: function () {
      return this._isRotated;
    },
    set: function (value) {
      if (Kotlin.equals(this._isRotated, value))
        return;
      this._isRotated = value;
      if (value)
        throw new UnsupportedOperationException('Currently the DOM backend does not support texture rotation. Change the packSettings to not allow rotation.');
      this.invalidate_za3lpa$(component_0.ValidationFlags.PROPERTIES);
    }
  });
  Object.defineProperty(DomTextureComponent.prototype, 'path', {
    get: function () {
      return this._assetBinding.path;
    },
    set: function (value) {
      this._assetBinding.path = value;
    }
  });
  Object.defineProperty(DomTextureComponent.prototype, 'texture', {
    get: function () {
      return this._texture_9yjhba$_0;
    },
    set: function (value) {
      this._assetBinding.clear();
      this._setTexture_mz86ne$(value);
    }
  });
  DomTextureComponent.prototype._setTexture_mz86ne$ = function (value) {
    var tmp$, tmp$_0;
    (tmp$ = value) == null || Kotlin.isType(tmp$, DomTexture) ? tmp$ : Kotlin.throwCCE();
    if (Kotlin.equals(this._texture_9yjhba$_0, value))
      return;
    var oldTexture = this._texture_9yjhba$_0;
    if (this.isActive) {
      oldTexture != null ? oldTexture.refDec() : null;
    }
    this._texture_9yjhba$_0 = value;
    if (this.isActive) {
      (tmp$_0 = this._texture_9yjhba$_0) != null ? tmp$_0.refInc() : null;
    }
    this.invalidate_za3lpa$(component_0.ValidationFlags.PROPERTIES);
  };
  DomTextureComponent.prototype.setUV_7b5o5w$ = function (u, v, u2, v2) {
    this._region[0] = u;
    this._region[1] = v;
    this._region[2] = u2;
    this._region[3] = v2;
    this._isUv = true;
    this.invalidate_za3lpa$(component_0.ValidationFlags.PROPERTIES);
  };
  DomTextureComponent.prototype.setRegion_7b5o5w$ = function (x, y, width, height) {
    this._region[0] = x;
    this._region[1] = y;
    this._region[2] = width + x;
    this._region[3] = height + y;
    this._isUv = false;
    this.invalidate_za3lpa$(component_0.ValidationFlags.PROPERTIES);
  };
  DomTextureComponent.prototype.onActivated = function () {
    var tmp$;
    UiComponentImpl.prototype.onActivated.call(this);
    (tmp$ = this._texture_9yjhba$_0) != null ? tmp$.refInc() : null;
  };
  DomTextureComponent.prototype.onDeactivated = function () {
    var tmp$;
    UiComponentImpl.prototype.onDeactivated.call(this);
    (tmp$ = this._texture_9yjhba$_0) != null ? tmp$.refDec() : null;
  };
  DomTextureComponent.prototype.updateProperties = function () {
    var tmp$, tmp$_0;
    if (this._texture_9yjhba$_0 == null)
      return;
    var t = (tmp$ = this._texture_9yjhba$_0) != null ? tmp$ : Kotlin.throwNPE();
    if (this._isUv) {
      this.regionX_9yjhba$_0 = this._region[0] * t.width();
      this.regionY_9yjhba$_0 = this._region[1] * t.height();
      var value = this._region[2] - this._region[0];
      this.regionW_9yjhba$_0 = (value < 0.0 ? -value : value) * t.width();
      var value_0 = this._region[3] - this._region[1];
      this.regionH_9yjhba$_0 = (value_0 < 0.0 ? -value_0 : value_0) * t.height();
    }
     else {
      this.regionX_9yjhba$_0 = this._region[0];
      this.regionY_9yjhba$_0 = this._region[1];
      var value_1 = this._region[2] - this._region[0];
      this.regionW_9yjhba$_0 = value_1 < 0.0 ? -value_1 : value_1;
      var value_2 = this._region[3] - this._region[1];
      this.regionH_9yjhba$_0 = value_2 < 0.0 ? -value_2 : value_2;
    }
    var url = ((tmp$_0 = this._texture_9yjhba$_0) != null ? tmp$_0 : Kotlin.throwNPE()).src;
    var $receiver = this.imageElement_9yjhba$_0.style;
    $receiver.background = 'url(' + url + ') -' + this.regionX_9yjhba$_0 + 'px -' + this.regionY_9yjhba$_0 + 'px';
    $receiver.width = this.regionW_9yjhba$_0.toString() + 'px';
    $receiver.height = this.regionH_9yjhba$_0.toString() + 'px';
  };
  DomTextureComponent.prototype.updateLayout_64u75x$ = function (explicitWidth, explicitHeight, out) {
    if (this._texture_9yjhba$_0 == null)
      return;
    if (this._isRotated) {
      out.width = explicitWidth != null ? explicitWidth : this.regionH_9yjhba$_0;
      out.height = explicitHeight != null ? explicitHeight : this.regionW_9yjhba$_0;
    }
     else {
      out.width = explicitWidth != null ? explicitWidth : this.regionW_9yjhba$_0;
      out.height = explicitHeight != null ? explicitHeight : this.regionH_9yjhba$_0;
    }
    this.imageElement_9yjhba$_0.style.transform = 'scale(' + out.width / this.regionW_9yjhba$_0 + ', ' + out.height / this.regionH_9yjhba$_0 + ')';
  };
  DomTextureComponent.prototype.dispose = function () {
    UiComponentImpl.prototype.dispose.call(this);
    this.texture = null;
  };
  function DomTextureComponent$_assetBinding$lambda(this$DomTextureComponent) {
    return function (texture) {
      this$DomTextureComponent._setTexture_mz86ne$(texture);
    };
  }
  DomTextureComponent.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DomTextureComponent',
    interfaces: [TextureComponent, UiComponentImpl]
  };
  function DomApplication(rootId, config, onReady) {
    if (config === void 0)
      config = new AppConfig();
    JsApplicationBase.call(this, rootId, config, onReady);
    this.canvas_4cgbdl$_0 = void 0;
    core_0.UserInfo.isOpenGl = false;
  }
  Object.defineProperty(DomApplication.prototype, 'canvas', {
    get: function () {
      return this.canvas_4cgbdl$_0;
    },
    set: function (canvas) {
      this.canvas_4cgbdl$_0 = canvas;
    }
  });
  DomApplication.prototype.initializeCanvas = function () {
    var tmp$, tmp$_0;
    tmp$ = document.getElementById(this.rootId);
    if (tmp$ == null) {
      throw new Exception('Could not find root canvas ' + this.rootId);
    }
    var rootElement = tmp$;
    this.canvas = Kotlin.isType(tmp$_0 = rootElement, HTMLElement) ? tmp$_0 : Kotlin.throwCCE();
    clear(this.canvas);
  };
  DomApplication.prototype.initializeCss = function () {
    var tmp$;
    var e = Kotlin.isType(tmp$ = document.createElement('style'), HTMLStyleElement) ? tmp$ : Kotlin.throwCCE();
    e.type = 'text/css';
    e.innerHTML = '\n\t\t\t.acornComponent {\n\t\t\t\tposition: absolute;\n\t\t\t\tmargin: 0;\n\t\t\t\tpadding: 0;\n\t\t\t\ttransform-origin: 0 0;\n\n\t\t\t\toverflow-x: hidden;\n\t\t\t\toverflow-y: hidden;\n\n\t\t\t\tpointer-events: auto;\n\t\t\t\tuser-select: none;\n\t\t\t\t-webkit-user-select: none;\n\t\t\t\t-moz-user-select: none;\n\t\t\t\t-ms-user-select: none;\n\t\t\t}\n\t\t';
    this.canvas.appendChild(e);
  };
  DomApplication.prototype.initializeWindow = function () {
    this.bootstrap.set_7ey6m6$(Window.Companion, new DomWindowImpl(this.canvas, this.config.window));
  };
  function DomApplication$initializeTextures$lambda$lambda() {
    return new DomTextureLoader();
  }
  function DomApplication$initializeTextures$lambda($receiver) {
    $receiver.get_li8edk$(AssetManager.Companion).setLoaderFactory_6wm120$(assets_0.AssetTypes.TEXTURE, DomApplication$initializeTextures$lambda$lambda);
  }
  DomApplication.prototype.initializeTextures = function () {
    this.bootstrap.on_b913r5$([AssetManager.Companion], DomApplication$initializeTextures$lambda);
  };
  DomApplication.prototype.initializeInteractivity = function () {
    this.bootstrap.set_7ey6m6$(InteractivityManager.Companion, new DomInteractivityManager());
  };
  DomApplication.prototype.initializeFocusManager = function () {
    this.bootstrap.set_7ey6m6$(FocusManager.Companion, new DomFocusManager());
  };
  DomApplication.prototype.initializeSelectionManager = function () {
    this.bootstrap.set_7ey6m6$(SelectionManager.Companion, new DomSelectionManager(this.canvas));
  };
  function DomApplication$initializeComponents$lambda(it) {
    return new DomComponent_0();
  }
  function DomApplication$initializeComponents$lambda_0(it) {
    return new DomContainer();
  }
  function DomApplication$initializeComponents$lambda_1(it) {
    return new DomTextField(it);
  }
  function DomApplication$initializeComponents$lambda_2(it) {
    return new DomEditableTextField(it);
  }
  function DomApplication$initializeComponents$lambda_3(it) {
    return new DomTextInput(it);
  }
  function DomApplication$initializeComponents$lambda_4(it) {
    return new DomTextArea(it);
  }
  function DomApplication$initializeComponents$lambda_5(it) {
    return new DomTextureComponent(it);
  }
  function DomApplication$initializeComponents$lambda_6(it) {
    return new DomScrollArea(it);
  }
  function DomApplication$initializeComponents$lambda_7(it) {
    return new DomScrollRect(it);
  }
  function DomApplication$initializeComponents$lambda_8(it) {
    return new DomRect(it);
  }
  DomApplication.prototype.initializeComponents = function () {
    this.bootstrap.set_7ey6m6$(NativeComponent.Companion.FACTORY_KEY, DomApplication$initializeComponents$lambda);
    this.bootstrap.set_7ey6m6$(NativeContainer.Companion.FACTORY_KEY, DomApplication$initializeComponents$lambda_0);
    this.bootstrap.set_7ey6m6$(TextField.Companion.FACTORY_KEY, DomApplication$initializeComponents$lambda_1);
    this.bootstrap.set_7ey6m6$(EditableTextField.Companion.FACTORY_KEY, DomApplication$initializeComponents$lambda_2);
    this.bootstrap.set_7ey6m6$(TextInput.Companion.FACTORY_KEY, DomApplication$initializeComponents$lambda_3);
    this.bootstrap.set_7ey6m6$(TextArea.Companion.FACTORY_KEY, DomApplication$initializeComponents$lambda_4);
    this.bootstrap.set_7ey6m6$(TextureComponent.Companion.FACTORY_KEY, DomApplication$initializeComponents$lambda_5);
    this.bootstrap.set_7ey6m6$(ScrollArea.Companion.FACTORY_KEY, DomApplication$initializeComponents$lambda_6);
    this.bootstrap.set_7ey6m6$(ScrollRect.Companion.FACTORY_KEY, DomApplication$initializeComponents$lambda_7);
    this.bootstrap.set_7ey6m6$(Rect.Companion.FACTORY_KEY, DomApplication$initializeComponents$lambda_8);
  };
  DomApplication.prototype.initializeStage = function () {
    this.bootstrap.set_7ey6m6$(Stage.Companion, new DomStageImpl(new OwnedImpl(null, this.bootstrap.injector), this.canvas));
  };
  DomApplication.prototype.initializeSpecialInteractivity = function () {
    fakeFocusMouse(this.bootstrap);
  };
  DomApplication.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DomApplication',
    interfaces: [JsApplicationBase]
  };
  function DomDataTransfer(clipboardData) {
    this.clipboardData_0 = clipboardData;
    this.items_325f3e$_0 = ArrayList_init();
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    if (this.clipboardData_0 != null) {
      if (((tmp$ = this.clipboardData_0.types) == null || Array.isArray(tmp$) ? tmp$ : Kotlin.throwCCE()) != null) {
        tmp$_0 = this.clipboardData_0.types;
        for (tmp$_1 = 0; tmp$_1 !== tmp$_0.length; ++tmp$_1) {
          var type = tmp$_0[tmp$_1];
          var plainText = this.clipboardData_0.getData(type);
          this.items.add_11rb$(new StringTransferItem(plainText, type));
        }
      }
       else if (((tmp$_2 = this.clipboardData_0.items) == null || Kotlin.isType(tmp$_2, DataTransferItemList) ? tmp$_2 : Kotlin.throwCCE()) != null) {
        tmp$_3 = this.clipboardData_0.items.length - 1 | 0;
        for (var i = 0; i <= tmp$_3; i++) {
          var item = this.clipboardData_0.items[i];
          this.items.add_11rb$(new DomDataTransferItem(item != null ? item : Kotlin.throwNPE()));
        }
      }
       else {
        var plainText_0 = (tmp$_4 = this.clipboardData_0.getData('text')) == null || typeof tmp$_4 === 'string' ? tmp$_4 : Kotlin.throwCCE();
        if (plainText_0 != null)
          this.items.add_11rb$(new StringTransferItem(plainText_0, 'text/plain'));
        var url = (tmp$_5 = this.clipboardData_0.getData('url')) == null || typeof tmp$_5 === 'string' ? tmp$_5 : Kotlin.throwCCE();
        if (url != null)
          this.items.add_11rb$(new StringTransferItem(url, 'text/url'));
      }
      if (((tmp$_6 = this.clipboardData_0.files) == null || Kotlin.isType(tmp$_6, FileList) ? tmp$_6 : Kotlin.throwCCE()) != null) {
        tmp$_7 = this.clipboardData_0.files.length - 1 | 0;
        for (var i_0 = 0; i_0 <= tmp$_7; i_0++) {
          var file_1 = (tmp$_8 = this.clipboardData_0.files[i_0]) != null ? tmp$_8 : Kotlin.throwNPE();
          this.items.add_11rb$(new FileDataTransferItem(file_1));
        }
      }
    }
  }
  Object.defineProperty(DomDataTransfer.prototype, 'items', {
    get: function () {
      return this.items_325f3e$_0;
    }
  });
  DomDataTransfer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DomDataTransfer',
    interfaces: [DataTransferRead]
  };
  function DomDataTransferItem(item) {
    this.item_0 = item;
    this.kind_kcfn9f$_0 = this.item_0.kind;
    this.type_kcfn9f$_0 = this.item_0.type;
  }
  Object.defineProperty(DomDataTransferItem.prototype, 'kind', {
    get: function () {
      return this.kind_kcfn9f$_0;
    }
  });
  Object.defineProperty(DomDataTransferItem.prototype, 'type', {
    get: function () {
      return this.type_kcfn9f$_0;
    }
  });
  DomDataTransferItem.prototype.getAsString_ep0k5p$ = function (callback) {
    return this.item_0.getAsString(callback);
  };
  function DomDataTransferItem$getAsTexture$lambda(closure$callback, closure$t) {
    return function () {
      closure$callback(closure$t);
    };
  }
  DomDataTransferItem.prototype.getAsTexture_ynbiqg$ = function (callback) {
    var tmp$;
    var f = (tmp$ = this.item_0.getAsFile()) != null ? tmp$ : Kotlin.throwNPE();
    var t = new DomTexture();
    t.onLoad = DomDataTransferItem$getAsTexture$lambda(callback, t);
    t.blob_6d4z4r$(f);
  };
  DomDataTransferItem.prototype.toString = function () {
    return "DomDataTransferItem(kind='" + this.kind + "' type='" + this.type + "')";
  };
  DomDataTransferItem.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DomDataTransferItem',
    interfaces: [DataTransferItem]
  };
  function FileDataTransferItem(item) {
    this.item_0 = item;
    this.kind_61vdxf$_0 = 'file';
    this.type_61vdxf$_0 = this.item_0.type;
  }
  Object.defineProperty(FileDataTransferItem.prototype, 'kind', {
    get: function () {
      return this.kind_61vdxf$_0;
    }
  });
  Object.defineProperty(FileDataTransferItem.prototype, 'type', {
    get: function () {
      return this.type_61vdxf$_0;
    }
  });
  function FileDataTransferItem$getAsString$lambda(closure$callback, closure$r) {
    return function (it) {
      closure$callback(closure$r.result);
    };
  }
  FileDataTransferItem.prototype.getAsString_ep0k5p$ = function (callback) {
    var r = new FileReader();
    r.onload = FileDataTransferItem$getAsString$lambda(callback, r);
    r.readAsText(this.item_0);
  };
  function FileDataTransferItem$getAsTexture$lambda(closure$callback, closure$t) {
    return function () {
      closure$callback(closure$t);
    };
  }
  FileDataTransferItem.prototype.getAsTexture_ynbiqg$ = function (callback) {
    var t = new DomTexture();
    t.onLoad = FileDataTransferItem$getAsTexture$lambda(callback, t);
    t.blob_6d4z4r$(this.item_0);
  };
  FileDataTransferItem.prototype.toString = function () {
    return "FileDataTransferItem(kind='" + this.kind + "' type='" + this.type + "')";
  };
  FileDataTransferItem.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FileDataTransferItem',
    interfaces: [DataTransferItem]
  };
  function StringTransferItem(text_0, type) {
    this.text_0 = text_0;
    this.type_mseqnc$_0 = type;
    this.kind_mseqnc$_0 = 'string';
  }
  Object.defineProperty(StringTransferItem.prototype, 'type', {
    get: function () {
      return this.type_mseqnc$_0;
    }
  });
  Object.defineProperty(StringTransferItem.prototype, 'kind', {
    get: function () {
      return this.kind_mseqnc$_0;
    }
  });
  StringTransferItem.prototype.getAsString_ep0k5p$ = function (callback) {
    callback(this.text_0);
  };
  StringTransferItem.prototype.getAsTexture_ynbiqg$ = function (callback) {
    throw new Exception('DataTransferItem with kind ' + this.kind + ' does not support textures.');
  };
  StringTransferItem.prototype.toString = function () {
    return "TextDataTransferItem(kind='" + this.kind + "' type='" + this.type + "' value='" + this.text_0.substring(0, 50) + "')";
  };
  StringTransferItem.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'StringTransferItem',
    interfaces: [DataTransferItem]
  };
  function MimeType(types) {
    return MimeType(types.slice());
  }
  function MimeType_0(types) {
    MimeType$Companion_getInstance();
    this.types = types;
  }
  MimeType_0.prototype.equals = function (other) {
    if (!Kotlin.isType(other, MimeType_0))
      return false;
    return equalsArray(this.types, other.types);
  };
  MimeType_0.prototype.hashCode = function () {
    return 31 * hashCodeIterable(this.types) | 0;
  };
  function MimeType$Companion() {
    MimeType$Companion_instance = this;
    this.TEXT = MimeType(['text/plain']);
    this.TEXT_URI_LIST = MimeType(['text/uri-list']);
    this.TEXT_CSV = MimeType(['text/csv']);
    this.TEXT_CSS = MimeType(['text/css']);
    this.TEXT_HTML = MimeType(['text/html']);
    this.APPLICATION_XHTML = MimeType(['application/xhtml+xml']);
    this.IMAGE_PNG = MimeType(['image/png']);
    this.IMAGE_JPG = MimeType(['image/jpg', 'image/jpeg']);
    this.IMAGE_GIF = MimeType(['image/gif']);
    this.IMAGE_SVG = MimeType(['image/svg+xml']);
    this.XML = MimeType(['application/xml', 'text/xml']);
    this.JAVASCRIPT = MimeType(['application/javascript']);
    this.JSON = MimeType(['application/json']);
    this.OCTET_STREAM = MimeType(['application/octet-stream']);
  }
  MimeType$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MimeType$Companion_instance = null;
  function MimeType$Companion_getInstance() {
    if (MimeType$Companion_instance === null) {
      new MimeType$Companion();
    }
    return MimeType$Companion_instance;
  }
  MimeType_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'MimeType',
    interfaces: []
  };
  MimeType_0.prototype.component1 = function () {
    return this.types;
  };
  MimeType_0.prototype.copy_kand9s$ = function (types) {
    return new MimeType_0(types === void 0 ? this.types : types);
  };
  MimeType_0.prototype.toString = function () {
    return 'MimeType(types=' + Kotlin.toString(this.types) + ')';
  };
  function DomInteractivityManager() {
    this._root_wwhuhj$_0 = null;
    this._rootElement_wwhuhj$_0 = null;
    this.keyEvent_wwhuhj$_0 = new KeyInteraction();
    this.mouseEvent_wwhuhj$_0 = new MouseInteraction();
    this.clickEvent_wwhuhj$_0 = new ClickEvent();
    this.touchEvent_wwhuhj$_0 = new TouchInteraction();
    this.wheelEvent_wwhuhj$_0 = new WheelInteraction();
    this.clipboardEvent_wwhuhj$_0 = new ClipboardInteraction();
    this.resetKeyEventHandler_wwhuhj$_0 = DomInteractivityManager$resetKeyEventHandler$lambda(this);
    this.resetMouseEventHandler_wwhuhj$_0 = DomInteractivityManager$resetMouseEventHandler$lambda(this);
    this.resetClickEventHandler_wwhuhj$_0 = DomInteractivityManager$resetClickEventHandler$lambda(this);
    this.resetTouchEventHandler_wwhuhj$_0 = DomInteractivityManager$resetTouchEventHandler$lambda(this);
    this.resetWheelEventHandler_wwhuhj$_0 = DomInteractivityManager$resetWheelEventHandler$lambda(this);
    this.resetClipboardEventHandler_wwhuhj$_0 = DomInteractivityManager$resetClipboardEventHandler$lambda(this);
    this.overTargets_wwhuhj$_0 = ArrayList_init();
    this.rootMouseOverHandler_wwhuhj$_0 = DomInteractivityManager$rootMouseOverHandler$lambda(this);
    this.rootMouseOutHandler_wwhuhj$_0 = DomInteractivityManager$rootMouseOutHandler$lambda(this);
    this.rootMouseMoveHandler_wwhuhj$_0 = DomInteractivityManager$rootMouseMoveHandler$lambda(this);
    this.nativeKeyHandler_wwhuhj$_0 = DomInteractivityManager$nativeKeyHandler$lambda(this);
    this.nativeMouseHandler_wwhuhj$_0 = DomInteractivityManager$nativeMouseHandler$lambda(this);
    this.nativeClickHandler_wwhuhj$_0 = DomInteractivityManager$nativeClickHandler$lambda(this);
    this.nativeTouchHandler_wwhuhj$_0 = DomInteractivityManager$nativeTouchHandler$lambda(this);
    this.nativeClipboardHandler_wwhuhj$_0 = DomInteractivityManager$nativeClipboardHandler$lambda(this);
  }
  Object.defineProperty(DomInteractivityManager.prototype, 'root_wwhuhj$_0', {
    get: function () {
      var tmp$;
      return (tmp$ = this._root_wwhuhj$_0) != null ? tmp$ : Kotlin.throwNPE();
    }
  });
  Object.defineProperty(DomInteractivityManager.prototype, 'rootElement_wwhuhj$_0', {
    get: function () {
      var tmp$;
      return (tmp$ = this._rootElement_wwhuhj$_0) != null ? tmp$ : Kotlin.throwNPE();
    }
  });
  DomInteractivityManager.prototype.init_k58t2y$ = function (root_0) {
    var tmp$;
    _assert(this._root_wwhuhj$_0 == null, 'Already initialized.');
    this._root_wwhuhj$_0 = root_0;
    this._rootElement_wwhuhj$_0 = (Kotlin.isType(tmp$ = root_0.native, DomComponent_0) ? tmp$ : Kotlin.throwCCE()).element;
    var rootElement = this.rootElement_wwhuhj$_0;
    this.addEventListeners_417acu$_0(rootElement, ['keydown', 'keyup', 'keypress'], this.resetKeyEventHandler_wwhuhj$_0);
    this.addEventListeners_417acu$_0(rootElement, ['mouseover', 'mouseout', 'mousemove', 'mousedown', 'mouseup'], this.resetMouseEventHandler_wwhuhj$_0);
    rootElement.addEventListener('click', this.resetClickEventHandler_wwhuhj$_0, true);
    this.addEventListeners_417acu$_0(rootElement, ['touchstart', 'touchend', 'touchmove', 'touchcancel', 'touchenter', 'touchleave'], this.resetTouchEventHandler_wwhuhj$_0);
    rootElement.addEventListener('wheel', this.resetWheelEventHandler_wwhuhj$_0, true);
    this.addEventListeners_417acu$_0(rootElement, ['copy', 'cut', 'paste'], this.resetClipboardEventHandler_wwhuhj$_0);
    this.mouseOutWorkaround_wwhuhj$_0();
  };
  DomInteractivityManager.prototype.mouseOutWorkaround_wwhuhj$_0 = function () {
    this.rootElement_wwhuhj$_0.addEventListener('mousemove', this.rootMouseMoveHandler_wwhuhj$_0);
    this.rootElement_wwhuhj$_0.addEventListener('mouseover', this.rootMouseOverHandler_wwhuhj$_0);
    this.rootElement_wwhuhj$_0.addEventListener('mouseout', this.rootMouseOutHandler_wwhuhj$_0);
  };
  DomInteractivityManager.prototype.getSignal_3hf04x$ = function (host, type, isCapture) {
    var tmp$;
    if (Kotlin.equals(type, KeyInteraction.Companion.KEY_DOWN))
      tmp$ = new NativeSignal(host, 'keydown', isCapture, type, this.keyEvent_wwhuhj$_0, this.nativeKeyHandler_wwhuhj$_0);
    else if (Kotlin.equals(type, KeyInteraction.Companion.KEY_UP))
      tmp$ = new NativeSignal(host, 'keyup', isCapture, type, this.keyEvent_wwhuhj$_0, this.nativeKeyHandler_wwhuhj$_0);
    else if (Kotlin.equals(type, MouseInteraction.Companion.MOUSE_OVER))
      tmp$ = new NativeSignal(host, 'mouseover', isCapture, type, this.mouseEvent_wwhuhj$_0, this.nativeMouseHandler_wwhuhj$_0);
    else if (Kotlin.equals(type, MouseInteraction.Companion.MOUSE_OUT))
      tmp$ = new NativeSignal(host, 'mouseout', isCapture, type, this.mouseEvent_wwhuhj$_0, this.nativeMouseHandler_wwhuhj$_0);
    else if (Kotlin.equals(type, MouseInteraction.Companion.MOUSE_MOVE))
      tmp$ = new NativeSignal(host, 'mousemove', isCapture, type, this.mouseEvent_wwhuhj$_0, this.nativeMouseHandler_wwhuhj$_0);
    else if (Kotlin.equals(type, MouseInteraction.Companion.MOUSE_UP))
      tmp$ = new NativeSignal(host, 'mouseup', isCapture, type, this.mouseEvent_wwhuhj$_0, this.nativeMouseHandler_wwhuhj$_0);
    else if (Kotlin.equals(type, MouseInteraction.Companion.MOUSE_DOWN))
      tmp$ = new NativeSignal(host, 'mousedown', isCapture, type, this.mouseEvent_wwhuhj$_0, this.nativeMouseHandler_wwhuhj$_0);
    else if (Kotlin.equals(type, ClickEvent.Companion.LEFT_CLICK))
      tmp$ = new NativeSignal(host, 'click', isCapture, type, this.clickEvent_wwhuhj$_0, this.nativeClickHandler_wwhuhj$_0);
    else if (Kotlin.equals(type, TouchInteraction.Companion.TOUCH_START))
      tmp$ = new NativeSignal(host, 'touchstart', isCapture, type, this.touchEvent_wwhuhj$_0, this.nativeTouchHandler_wwhuhj$_0);
    else if (Kotlin.equals(type, TouchInteraction.Companion.TOUCH_END))
      tmp$ = new NativeSignal(host, 'touchend', isCapture, type, this.touchEvent_wwhuhj$_0, this.nativeTouchHandler_wwhuhj$_0);
    else if (Kotlin.equals(type, TouchInteraction.Companion.TOUCH_MOVE))
      tmp$ = new NativeSignal(host, 'touchmove', isCapture, type, this.touchEvent_wwhuhj$_0, this.nativeTouchHandler_wwhuhj$_0);
    else if (Kotlin.equals(type, TouchInteraction.Companion.TOUCH_CANCEL))
      tmp$ = new NativeSignal(host, 'touchcancel', isCapture, type, this.touchEvent_wwhuhj$_0, this.nativeTouchHandler_wwhuhj$_0);
    else if (Kotlin.equals(type, TouchInteraction.Companion.TOUCH_ENTER))
      tmp$ = new NativeSignal(host, 'touchenter', isCapture, type, this.touchEvent_wwhuhj$_0, this.nativeTouchHandler_wwhuhj$_0);
    else if (Kotlin.equals(type, TouchInteraction.Companion.TOUCH_LEAVE))
      tmp$ = new NativeSignal(host, 'touchleave', isCapture, type, this.touchEvent_wwhuhj$_0, this.nativeTouchHandler_wwhuhj$_0);
    else if (Kotlin.equals(type, ClipboardInteraction.Companion.COPY))
      tmp$ = new NativeSignal(host, 'copy', isCapture, type, this.clipboardEvent_wwhuhj$_0, this.nativeClipboardHandler_wwhuhj$_0);
    else if (Kotlin.equals(type, ClipboardInteraction.Companion.CUT))
      tmp$ = new NativeSignal(host, 'cut', isCapture, type, this.clipboardEvent_wwhuhj$_0, this.nativeClipboardHandler_wwhuhj$_0);
    else if (Kotlin.equals(type, ClipboardInteraction.Companion.PASTE))
      tmp$ = new NativeSignal(host, 'paste', isCapture, type, this.clipboardEvent_wwhuhj$_0, this.nativeClipboardHandler_wwhuhj$_0);
    else {
      logging_0.Log.warn_s8jyv4$('Could not find a signal for the type ' + type);
      tmp$ = new StoppableSignalImpl();
    }
    return tmp$;
  };
  DomInteractivityManager.prototype.set_wrk6sx$_0 = function ($receiver, jsEvent) {
    $receiver.timestamp = Kotlin.numberToLong(jsEvent.timeStamp);
    $receiver.location = this.keyLocationFromInt_za3lpa$(jsEvent.location);
    $receiver.keyCode = jsEvent.keyCode;
    $receiver.altKey = jsEvent.altKey;
    $receiver.ctrlKey = jsEvent.ctrlKey;
    $receiver.metaKey = jsEvent.metaKey;
    $receiver.shiftKey = jsEvent.shiftKey;
    $receiver.isRepeat = jsEvent.repeat;
  };
  DomInteractivityManager.prototype.keyLocationFromInt_za3lpa$ = function (location) {
    if (location === 0)
      return KeyLocation.STANDARD;
    else if (location === 1)
      return KeyLocation.LEFT;
    else if (location === 2)
      return KeyLocation.RIGHT;
    else if (location === 3)
      return KeyLocation.NUMBER_PAD;
    else
      return KeyLocation.UNKNOWN;
  };
  DomInteractivityManager.prototype.set_3zx45v$_0 = function ($receiver, jsEvent) {
    $receiver.relatedTarget = findComponentFromDom(jsEvent.relatedTarget, this.root_wwhuhj$_0);
    $receiver.timestamp = Kotlin.numberToLong(jsEvent.timeStamp);
    $receiver.canvasX = jsEvent.pageX - this.rootElement_wwhuhj$_0.offsetLeft;
    $receiver.canvasY = jsEvent.pageY - this.rootElement_wwhuhj$_0.offsetTop;
    $receiver.button = this.getWhichButton_ptaxrp$_0(jsEvent.button);
  };
  DomInteractivityManager.prototype.set_r67tlh$_0 = function ($receiver, jsEvent) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    $receiver.timestamp = Kotlin.numberToLong(jsEvent.timeStamp);
    $receiver.clearTouches();
    tmp$ = jsEvent.targetTouches;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var targetTouch = tmp$[tmp$_0];
      var t = Touch.Companion.obtain();
      this.set_ste4hh$_0(t, targetTouch);
      $receiver.targetTouches.add_11rb$(t);
    }
    tmp$_1 = jsEvent.changedTouches;
    for (tmp$_2 = 0; tmp$_2 !== tmp$_1.length; ++tmp$_2) {
      var changedTouch = tmp$_1[tmp$_2];
      var t_0 = Touch.Companion.obtain();
      this.set_ste4hh$_0(t_0, changedTouch);
      $receiver.changedTouches.add_11rb$(t_0);
    }
    tmp$_3 = jsEvent.touches;
    for (tmp$_4 = 0; tmp$_4 !== tmp$_3.length; ++tmp$_4) {
      var touch = tmp$_3[tmp$_4];
      var t_1 = Touch.Companion.obtain();
      this.set_ste4hh$_0(t_1, touch);
      $receiver.touches.add_11rb$(t_1);
    }
  };
  DomInteractivityManager.prototype.set_nbzwjv$_0 = function ($receiver, jsEvent) {
    var tmp$;
    $receiver.target = findComponentFromDom(jsEvent.target, this.root_wwhuhj$_0);
    $receiver.dataTransfer = new DomDataTransfer((tmp$ = jsEvent.clipboardData) != null ? tmp$ : get_clipboardData(window));
  };
  DomInteractivityManager.prototype.set_ste4hh$_0 = function ($receiver, jsTouch) {
    $receiver.target = findComponentFromDom(jsTouch.target, this.root_wwhuhj$_0);
    $receiver.canvasX = jsTouch.clientX - this.rootElement_wwhuhj$_0.offsetLeft;
    $receiver.canvasY = jsTouch.clientY - this.rootElement_wwhuhj$_0.offsetTop;
  };
  DomInteractivityManager.prototype.getWhichButton_ptaxrp$_0 = function (i) {
    if (i === -1)
      return WhichButton.UNKNOWN;
    else if (i === 0)
      return WhichButton.LEFT;
    else if (i === 1)
      return WhichButton.MIDDLE;
    else if (i === 2)
      return WhichButton.RIGHT;
    else if (i === 3)
      return WhichButton.BACK;
    else if (i === 4)
      return WhichButton.FORWARD;
    else
      return WhichButton.UNKNOWN;
  };
  DomInteractivityManager.prototype.dispatch_xp6iql$ = function (canvasX, canvasY, event, useCapture, useBubble) {
    var tmp$;
    var ele = (tmp$ = this.root_wwhuhj$_0.getChildUnderPoint_g1oyt7$(canvasX, canvasY, true)) != null ? tmp$ : this.root_wwhuhj$_0;
    this.dispatch_5tupxi$(ele, event, useCapture, useBubble);
  };
  DomInteractivityManager.prototype.dispatch_5tupxi$ = function (target, event, useCapture, useBubble) {
    var tmp$;
    var rawAncestry = Kotlin.isType(tmp$ = collection_0.arrayListPool.obtain(), ArrayList) ? tmp$ : Kotlin.throwCCE();
    event.target = target;
    if (!useCapture && !useBubble) {
      this.dispatchForCurrentTarget_xf2ejg$_0(target, event, false);
    }
     else {
      ancestry(target, rawAncestry);
      this.dispatch_8msdes$_0(rawAncestry, event, useCapture, useBubble);
    }
    collection_0.arrayListPool.free_11rb$(rawAncestry);
  };
  DomInteractivityManager.prototype.dispatch_8msdes$_0 = function (rawAncestry, event, useCapture, useBubble) {
    var tmp$, tmp$_0;
    if (useCapture) {
      tmp$ = downTo(get_lastIndex(rawAncestry), 0).iterator();
      while (tmp$.hasNext()) {
        var i = tmp$.next();
        if (event.propagation.propagationStopped())
          break;
        this.dispatchForCurrentTarget_xf2ejg$_0(rawAncestry.get_za3lpa$(i), event, true);
      }
    }
    if (useBubble) {
      tmp$_0 = get_lastIndex(rawAncestry);
      for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
        if (event.propagation.propagationStopped())
          break;
        this.dispatchForCurrentTarget_xf2ejg$_0(rawAncestry.get_za3lpa$(i_0), event, false);
      }
    }
  };
  DomInteractivityManager.prototype.dispatchForCurrentTarget_xf2ejg$_0 = function (currentTarget, event, isCapture) {
    var tmp$;
    var signal_0 = (tmp$ = currentTarget.getInteractionSignal_j3fyc4$(event.type, isCapture)) == null || Kotlin.isType(tmp$, StoppableSignalImpl) ? tmp$ : Kotlin.throwCCE();
    if (signal_0 != null && signal_0.isNotEmpty()) {
      event.localize_s01kq1$(currentTarget);
      signal_0.dispatch_n80keo$(event);
    }
  };
  DomInteractivityManager.prototype.dispose = function () {
    var tmp$;
    tmp$ = this._rootElement_wwhuhj$_0;
    if (tmp$ == null) {
      return;
    }
    var rootElement = tmp$;
    this.removeEventListeners_417acu$_0(rootElement, ['keydown', 'keyup', 'keypress'], this.resetKeyEventHandler_wwhuhj$_0);
    this.removeEventListeners_417acu$_0(rootElement, ['mouseover', 'mouseout', 'mousemove', 'mousedown', 'mouseup'], this.resetMouseEventHandler_wwhuhj$_0);
    rootElement.removeEventListener('click', this.resetClickEventHandler_wwhuhj$_0, true);
    this.removeEventListeners_417acu$_0(rootElement, ['touchstart', 'touchend', 'touchmove', 'touchcancel', 'touchenter', 'touchleave'], this.resetTouchEventHandler_wwhuhj$_0);
    rootElement.removeEventListener('wheel', this.resetWheelEventHandler_wwhuhj$_0, true);
    this.removeEventListeners_417acu$_0(rootElement, ['copy', 'cut', 'paste'], this.resetClipboardEventHandler_wwhuhj$_0);
  };
  DomInteractivityManager.prototype.addEventListeners_417acu$_0 = function ($receiver, list, handler) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== list.length; ++tmp$) {
      var s = list[tmp$];
      $receiver.addEventListener(s, handler, true);
    }
  };
  DomInteractivityManager.prototype.removeEventListeners_417acu$_0 = function ($receiver, list, handler) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== list.length; ++tmp$) {
      var s = list[tmp$];
      $receiver.removeEventListener(s, handler, true);
    }
  };
  function DomInteractivityManager$resetKeyEventHandler$lambda(this$DomInteractivityManager) {
    return function (e) {
      this$DomInteractivityManager.keyEvent_wwhuhj$_0.clear();
      kotlin_0.Unit;
    };
  }
  function DomInteractivityManager$resetMouseEventHandler$lambda(this$DomInteractivityManager) {
    return function (e) {
      this$DomInteractivityManager.mouseEvent_wwhuhj$_0.clear();
      kotlin_0.Unit;
    };
  }
  function DomInteractivityManager$resetClickEventHandler$lambda(this$DomInteractivityManager) {
    return function (e) {
      this$DomInteractivityManager.clickEvent_wwhuhj$_0.clear();
      kotlin_0.Unit;
    };
  }
  function DomInteractivityManager$resetTouchEventHandler$lambda(this$DomInteractivityManager) {
    return function (e) {
      this$DomInteractivityManager.touchEvent_wwhuhj$_0.clear();
      kotlin_0.Unit;
    };
  }
  function DomInteractivityManager$resetWheelEventHandler$lambda(this$DomInteractivityManager) {
    return function (e) {
      this$DomInteractivityManager.wheelEvent_wwhuhj$_0.clear();
      kotlin_0.Unit;
    };
  }
  function DomInteractivityManager$resetClipboardEventHandler$lambda(this$DomInteractivityManager) {
    return function (e) {
      this$DomInteractivityManager.clipboardEvent_wwhuhj$_0.clear();
      kotlin_0.Unit;
    };
  }
  function DomInteractivityManager$rootMouseOverHandler$lambda(this$DomInteractivityManager) {
    return function (e) {
      var target = e.target;
      if (target != null) {
        if (!this$DomInteractivityManager.overTargets_wwhuhj$_0.contains_11rb$(target)) {
          this$DomInteractivityManager.overTargets_wwhuhj$_0.add_11rb$(target);
        }
      }
    };
  }
  function DomInteractivityManager$rootMouseOutHandler$lambda(this$DomInteractivityManager) {
    return function (e) {
      var target = e.target;
      if (target != null) {
        this$DomInteractivityManager.overTargets_wwhuhj$_0.remove_11rb$(target);
      }
    };
  }
  function DomInteractivityManager$rootMouseMoveHandler$lambda(this$DomInteractivityManager) {
    return function (e) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10;
      Kotlin.isType(tmp$ = e, MouseEvent) ? tmp$ : Kotlin.throwCCE();
      var target = (tmp$_0 = e.target) == null || Kotlin.isType(tmp$_0, Node) ? tmp$_0 : Kotlin.throwCCE();
      var i = 0;
      while (i < this$DomInteractivityManager.overTargets_wwhuhj$_0.size) {
        var overTarget = Kotlin.isType(tmp$_1 = this$DomInteractivityManager.overTargets_wwhuhj$_0.get_za3lpa$(i), HTMLElement) ? tmp$_1 : Kotlin.throwCCE();
        if (target == null || !owns(overTarget, target)) {
          tmp$_2 = e.detail;
          tmp$_3 = e.screenX;
          tmp$_4 = e.screenY;
          tmp$_5 = e.clientX;
          tmp$_6 = e.clientY;
          tmp$_7 = e.ctrlKey;
          tmp$_8 = e.altKey;
          tmp$_9 = e.shiftKey;
          tmp$_10 = e.metaKey;
          var screenX = tmp$_3;
          var screenY = tmp$_4;
          var clientX = tmp$_5;
          var clientY = tmp$_6;
          var button_0 = e.button;
          var buttons = void 0;
          var relatedTarget = e.relatedTarget;
          var ctrlKey = tmp$_7;
          var shiftKey = tmp$_9;
          var altKey = tmp$_8;
          var metaKey = tmp$_10;
          var modifierAltGraph = void 0;
          var modifierCapsLock = void 0;
          var modifierFn = void 0;
          var modifierFnLock = void 0;
          var modifierHyper = void 0;
          var modifierNumLock = void 0;
          var modifierScrollLock = void 0;
          var modifierSuper = void 0;
          var modifierSymbol = void 0;
          var modifierSymbolLock = void 0;
          var view = window;
          var detail = tmp$_2;
          var bubbles = true;
          var cancelable = true;
          var composed;
          if (screenX === void 0) {
            screenX = 0;
          }
          if (screenY === void 0) {
            screenY = 0;
          }
          if (clientX === void 0) {
            clientX = 0;
          }
          if (clientY === void 0) {
            clientY = 0;
          }
          if (button_0 === void 0) {
            button_0 = 0;
          }
          if (buttons === void 0) {
            buttons = 0;
          }
          if (relatedTarget === void 0) {
            relatedTarget = null;
          }
          if (ctrlKey === void 0) {
            ctrlKey = false;
          }
          if (shiftKey === void 0) {
            shiftKey = false;
          }
          if (altKey === void 0) {
            altKey = false;
          }
          if (metaKey === void 0) {
            metaKey = false;
          }
          if (modifierAltGraph === void 0) {
            modifierAltGraph = false;
          }
          if (modifierCapsLock === void 0) {
            modifierCapsLock = false;
          }
          if (modifierFn === void 0) {
            modifierFn = false;
          }
          if (modifierFnLock === void 0) {
            modifierFnLock = false;
          }
          if (modifierHyper === void 0) {
            modifierHyper = false;
          }
          if (modifierNumLock === void 0) {
            modifierNumLock = false;
          }
          if (modifierScrollLock === void 0) {
            modifierScrollLock = false;
          }
          if (modifierSuper === void 0) {
            modifierSuper = false;
          }
          if (modifierSymbol === void 0) {
            modifierSymbol = false;
          }
          if (modifierSymbolLock === void 0) {
            modifierSymbolLock = false;
          }
          if (view === void 0) {
            view = null;
          }
          if (detail === void 0) {
            detail = 0;
          }
          if (bubbles === void 0) {
            bubbles = false;
          }
          if (cancelable === void 0) {
            cancelable = false;
          }
          if (composed === void 0) {
            composed = false;
          }
          var o = {};
          o['screenX'] = screenX;
          o['screenY'] = screenY;
          o['clientX'] = clientX;
          o['clientY'] = clientY;
          o['button'] = button_0;
          o['buttons'] = buttons;
          o['relatedTarget'] = relatedTarget;
          o['ctrlKey'] = ctrlKey;
          o['shiftKey'] = shiftKey;
          o['altKey'] = altKey;
          o['metaKey'] = metaKey;
          o['modifierAltGraph'] = modifierAltGraph;
          o['modifierCapsLock'] = modifierCapsLock;
          o['modifierFn'] = modifierFn;
          o['modifierFnLock'] = modifierFnLock;
          o['modifierHyper'] = modifierHyper;
          o['modifierNumLock'] = modifierNumLock;
          o['modifierScrollLock'] = modifierScrollLock;
          o['modifierSuper'] = modifierSuper;
          o['modifierSymbol'] = modifierSymbol;
          o['modifierSymbolLock'] = modifierSymbolLock;
          o['view'] = view;
          o['detail'] = detail;
          o['bubbles'] = bubbles;
          o['cancelable'] = cancelable;
          o['composed'] = composed;
          var fakeMouseOut = new MouseEvent('mouseout', o);
          overTarget.dispatchEvent(fakeMouseOut);
          this$DomInteractivityManager.overTargets_wwhuhj$_0.removeAt_za3lpa$(i);
          i = i - 1 | 0;
        }
        i = i + 1 | 0;
      }
      kotlin_0.Unit;
    };
  }
  function DomInteractivityManager$nativeKeyHandler$lambda(this$DomInteractivityManager) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      tmp$_1 = this$DomInteractivityManager.keyEvent_wwhuhj$_0;
      tmp$_0 = Kotlin.isType(tmp$ = it, KeyboardEvent) ? tmp$ : Kotlin.throwCCE();
      this$DomInteractivityManager.set_wrk6sx$_0(tmp$_1, tmp$_0);
      kotlin_0.Unit;
    };
  }
  function DomInteractivityManager$nativeMouseHandler$lambda(this$DomInteractivityManager) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      tmp$_1 = this$DomInteractivityManager.mouseEvent_wwhuhj$_0;
      tmp$_0 = Kotlin.isType(tmp$ = it, MouseEvent) ? tmp$ : Kotlin.throwCCE();
      this$DomInteractivityManager.set_3zx45v$_0(tmp$_1, tmp$_0);
      kotlin_0.Unit;
    };
  }
  function DomInteractivityManager$nativeClickHandler$lambda(this$DomInteractivityManager) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      tmp$_1 = this$DomInteractivityManager.clickEvent_wwhuhj$_0;
      tmp$_0 = Kotlin.isType(tmp$ = it, MouseEvent) ? tmp$ : Kotlin.throwCCE();
      this$DomInteractivityManager.set_3zx45v$_0(tmp$_1, tmp$_0);
      this$DomInteractivityManager.clickEvent_wwhuhj$_0.count = it.detail;
      kotlin_0.Unit;
    };
  }
  function DomInteractivityManager$nativeTouchHandler$lambda(this$DomInteractivityManager) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      tmp$_1 = this$DomInteractivityManager.touchEvent_wwhuhj$_0;
      tmp$_0 = Kotlin.isType(tmp$ = it, TouchEvent) ? tmp$ : Kotlin.throwCCE();
      this$DomInteractivityManager.set_r67tlh$_0(tmp$_1, tmp$_0);
      kotlin_0.Unit;
    };
  }
  function DomInteractivityManager$nativeClipboardHandler$lambda(this$DomInteractivityManager) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      tmp$_1 = this$DomInteractivityManager.clipboardEvent_wwhuhj$_0;
      tmp$_0 = Kotlin.isType(tmp$ = it, ClipboardEvent) ? tmp$ : Kotlin.throwCCE();
      this$DomInteractivityManager.set_nbzwjv$_0(tmp$_1, tmp$_0);
      kotlin_0.Unit;
    };
  }
  DomInteractivityManager.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DomInteractivityManager',
    interfaces: [InteractivityManager]
  };
  function DomStageImpl(owner, root_0) {
    ElementContainerImpl.call(this, owner, new StageContainer(root_0));
    this.root_if33yt$_0 = root_0;
    this.style_if33yt$_0 = style_0(this, new StageStyle());
    this.focus_if33yt$_0 = inject(this, FocusManager.Companion);
    this.focusOrder_if33yt$_0 = 0.0;
    this.highlight_if33yt$_0 = null;
    addTag(this, Stage.Companion);
    this.interactivity.init_k58t2y$(this);
    this.focus_if33yt$_0.init_63o2dx$(this);
    onChanged(this.style, DomStageImpl_init$lambda(this));
    this.windowResizedHandler_if33yt$_0 = DomStageImpl$windowResizedHandler$lambda(this);
  }
  Object.defineProperty(DomStageImpl.prototype, 'style', {
    get: function () {
      return this.style_if33yt$_0;
    }
  });
  Object.defineProperty(DomStageImpl.prototype, 'focusEnabled', {
    get: function () {
      return true;
    },
    set: function (value) {
      throw new Exception('The stage must be focusable');
    }
  });
  Object.defineProperty(DomStageImpl.prototype, 'focusOrder', {
    get: function () {
      return this.focusOrder_if33yt$_0;
    },
    set: function (focusOrder) {
      this.focusOrder_if33yt$_0 = focusOrder;
    }
  });
  Object.defineProperty(DomStageImpl.prototype, 'highlight', {
    get: function () {
      return this.highlight_if33yt$_0;
    },
    set: function (highlight) {
      this.highlight_if33yt$_0 = highlight;
    }
  });
  Object.defineProperty(DomStageImpl.prototype, 'windowResizedHandler', {
    get: function () {
      return this.windowResizedHandler_if33yt$_0;
    }
  });
  DomStageImpl.prototype.onActivated = function () {
    this.window.sizeChanged.add_trkh7z$(this.windowResizedHandler);
    this.windowResizedHandler(this.window.getWidth(), this.window.getHeight(), false);
    ElementContainerImpl.prototype.onActivated.call(this);
  };
  DomStageImpl.prototype.updateLayout_64u75x$ = function (explicitWidth, explicitHeight, out) {
    var w = this.window.getWidth();
    var h = this.window.getHeight();
    ElementContainerImpl.prototype.updateLayout_64u75x$.call(this, w, h, out);
    var tmp$;
    tmp$ = Kotlin.kotlin.collections.get_lastIndex_55thoc$(this.elements);
    for (var i = 0; i <= tmp$; i++) {
      this.elements.get_za3lpa$(i).setSize_yxjqmk$(w, h);
    }
    out.set_dleff0$(w, h);
  };
  DomStageImpl.prototype.intersectsGlobalRay_94uff6$ = function (globalRay, intersection) {
    this.validate();
    return true;
  };
  DomStageImpl.prototype.onDeactivated = function () {
    ElementContainerImpl.prototype.onDeactivated.call(this);
    this.window.sizeChanged.remove_trkh7z$(this.windowResizedHandler);
  };
  function DomStageImpl_init$lambda(this$DomStageImpl) {
    return function (it) {
      this$DomStageImpl.window.clearColor = it.backgroundColor;
    };
  }
  function DomStageImpl$windowResizedHandler$lambda(this$DomStageImpl) {
    return function (newWidth, newHeight, isUserInteraction) {
      this$DomStageImpl.invalidate_za3lpa$(component_0.ValidationFlags.LAYOUT);
    };
  }
  DomStageImpl.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DomStageImpl',
    interfaces: [ElementContainerImpl, Stage, Focusable]
  };
  function StageContainer(root_0) {
    DomContainer.call(this, root_0);
  }
  StageContainer.prototype.setSize_yxjqmk$ = function (width, height) {
  };
  StageContainer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'StageContainer',
    interfaces: [DomContainer]
  };
  function DomTexture() {
    this.target_c23ovi$_0 = TextureTarget.TEXTURE_2D;
    this.filterMag_c23ovi$_0 = TextureMagFilter.NEAREST;
    this.filterMin_c23ovi$_0 = TextureMinFilter.NEAREST;
    this.wrapS_c23ovi$_0 = TextureWrapMode.CLAMP_TO_EDGE;
    this.wrapT_c23ovi$_0 = TextureWrapMode.CLAMP_TO_EDGE;
    this.pixelFormat_c23ovi$_0 = TexturePixelFormat.RGBA;
    this.pixelType_c23ovi$_0 = TexturePixelType.UNSIGNED_BYTE;
    this.textureHandle_c23ovi$_0 = null;
    this.hasWhitePixel_c23ovi$_0 = false;
    this.image = null;
    this._src_0 = null;
    this.onLoad = null;
    var tmp$;
    this.image = Kotlin.isType(tmp$ = document.createElement('img'), HTMLImageElement) ? tmp$ : Kotlin.throwCCE();
    this.image.onload = DomTexture_init$lambda(this);
  }
  Object.defineProperty(DomTexture.prototype, 'target', {
    get: function () {
      return this.target_c23ovi$_0;
    },
    set: function (target) {
      this.target_c23ovi$_0 = target;
    }
  });
  Object.defineProperty(DomTexture.prototype, 'filterMag', {
    get: function () {
      return this.filterMag_c23ovi$_0;
    },
    set: function (filterMag) {
      this.filterMag_c23ovi$_0 = filterMag;
    }
  });
  Object.defineProperty(DomTexture.prototype, 'filterMin', {
    get: function () {
      return this.filterMin_c23ovi$_0;
    },
    set: function (filterMin) {
      this.filterMin_c23ovi$_0 = filterMin;
    }
  });
  Object.defineProperty(DomTexture.prototype, 'wrapS', {
    get: function () {
      return this.wrapS_c23ovi$_0;
    },
    set: function (wrapS) {
      this.wrapS_c23ovi$_0 = wrapS;
    }
  });
  Object.defineProperty(DomTexture.prototype, 'wrapT', {
    get: function () {
      return this.wrapT_c23ovi$_0;
    },
    set: function (wrapT) {
      this.wrapT_c23ovi$_0 = wrapT;
    }
  });
  Object.defineProperty(DomTexture.prototype, 'pixelFormat', {
    get: function () {
      return this.pixelFormat_c23ovi$_0;
    },
    set: function (pixelFormat) {
      this.pixelFormat_c23ovi$_0 = pixelFormat;
    }
  });
  Object.defineProperty(DomTexture.prototype, 'pixelType', {
    get: function () {
      return this.pixelType_c23ovi$_0;
    },
    set: function (pixelType) {
      this.pixelType_c23ovi$_0 = pixelType;
    }
  });
  Object.defineProperty(DomTexture.prototype, 'textureHandle', {
    get: function () {
      return this.textureHandle_c23ovi$_0;
    },
    set: function (textureHandle) {
      this.textureHandle_c23ovi$_0 = textureHandle;
    }
  });
  Object.defineProperty(DomTexture.prototype, 'hasWhitePixel', {
    get: function () {
      return this.hasWhitePixel_c23ovi$_0;
    },
    set: function (hasWhitePixel) {
      this.hasWhitePixel_c23ovi$_0 = hasWhitePixel;
    }
  });
  DomTexture.prototype.width = function () {
    return this.image.naturalWidth;
  };
  DomTexture.prototype.height = function () {
    return this.image.naturalHeight;
  };
  Object.defineProperty(DomTexture.prototype, 'src', {
    get: function () {
      var tmp$;
      return (tmp$ = this._src_0) != null ? tmp$ : Kotlin.throwNPE();
    }
  });
  DomTexture.prototype.setSrc_0 = function (value) {
    var tmp$;
    if (Kotlin.equals(this._src_0, value))
      return;
    if (this._src_0 != null) {
      URL.revokeObjectURL((tmp$ = this._src_0) != null ? tmp$ : Kotlin.throwNPE());
      this._src_0 = null;
    }
    if (value != null) {
      this._src_0 = value;
      this.image.src = value;
    }
  };
  DomTexture.prototype.arrayBuffer_m26o6c$ = function (value) {
    this.arrayBufferView_c2mund$(new Uint8ClampedArray(value));
  };
  DomTexture.prototype.arrayBufferView_c2mund$ = function (value) {
    this.blob_6d4z4r$(new Blob([value]));
  };
  DomTexture.prototype.blob_6d4z4r$ = function (value) {
    this.setSrc_0(URL.createObjectURL(value));
  };
  DomTexture.prototype.refInc = function () {
  };
  DomTexture.prototype.rgbData = function () {
    throw new UnsupportedOperationException();
  };
  DomTexture.prototype.refDec = function () {
  };
  function DomTexture_init$lambda(this$DomTexture) {
    return function (it) {
      var tmp$;
      return (tmp$ = this$DomTexture.onLoad) != null ? tmp$() : null;
    };
  }
  DomTexture.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DomTexture',
    interfaces: [Texture]
  };
  function DomTextureLoader() {
    BasicAction.call(this);
    this.type_ik4zs5$_0 = assets_0.AssetTypes.TEXTURE;
    this._asset_0 = null;
    this.path_ik4zs5$_0 = '';
    this.fileLoader_0 = null;
    this.estimatedBytesTotal_ik4zs5$_0 = 0;
  }
  Object.defineProperty(DomTextureLoader.prototype, 'type', {
    get: function () {
      return this.type_ik4zs5$_0;
    }
  });
  Object.defineProperty(DomTextureLoader.prototype, 'path', {
    get: function () {
      return this.path_ik4zs5$_0;
    },
    set: function (path) {
      this.path_ik4zs5$_0 = path;
    }
  });
  Object.defineProperty(DomTextureLoader.prototype, 'result', {
    get: function () {
      var tmp$;
      return (tmp$ = this._asset_0) != null ? tmp$ : Kotlin.throwNPE();
    }
  });
  Object.defineProperty(DomTextureLoader.prototype, 'estimatedBytesTotal', {
    get: function () {
      return this.estimatedBytesTotal_ik4zs5$_0;
    },
    set: function (estimatedBytesTotal) {
      this.estimatedBytesTotal_ik4zs5$_0 = estimatedBytesTotal;
    }
  });
  Object.defineProperty(DomTextureLoader.prototype, 'secondsLoaded', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.fileLoader_0) != null ? tmp$.secondsLoaded : null) != null ? tmp$_0 : 0.0;
    }
  });
  Object.defineProperty(DomTextureLoader.prototype, 'secondsTotal', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.fileLoader_0) != null ? tmp$.secondsTotal : null) != null ? tmp$_0 : 0.0;
    }
  });
  function DomTextureLoader$onInvocation$lambda$lambda(this$DomTextureLoader) {
    return function () {
      this$DomTextureLoader.success();
    };
  }
  function DomTextureLoader$onInvocation$lambda(this$DomTextureLoader, closure$fileLoader) {
    return function (it) {
      var jsTexture = new DomTexture();
      jsTexture.onLoad = DomTextureLoader$onInvocation$lambda$lambda(this$DomTextureLoader);
      jsTexture.arrayBuffer_m26o6c$(closure$fileLoader.resultArrayBuffer);
      this$DomTextureLoader._asset_0 = jsTexture;
    };
  }
  function DomTextureLoader$onInvocation$lambda_0(closure$fileLoader, this$DomTextureLoader) {
    return function () {
      var tmp$, tmp$_0;
      if (closure$fileLoader.error != null) {
        tmp$_0 = (tmp$ = closure$fileLoader.error) != null ? tmp$ : Kotlin.throwNPE();
        this$DomTextureLoader.fail_3lhtaa$(tmp$_0);
      }
       else
        this$DomTextureLoader.abort();
    };
  }
  DomTextureLoader.prototype.onInvocation = function () {
    var fileLoader = new JsHttpRequest();
    fileLoader.requestData.responseType = ResponseType.BINARY;
    fileLoader.requestData.url = this.path;
    onSuccess(fileLoader, DomTextureLoader$onInvocation$lambda(this, fileLoader));
    onFailed(fileLoader, DomTextureLoader$onInvocation$lambda_0(fileLoader, this));
    fileLoader.invoke();
    this.fileLoader_0 = fileLoader;
  };
  DomTextureLoader.prototype.onAborted = function () {
    var tmp$;
    (tmp$ = this.fileLoader_0) != null ? tmp$.abort() : null;
  };
  DomTextureLoader.prototype.onReset = function () {
    this._asset_0 = null;
  };
  DomTextureLoader.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DomTextureLoader',
    interfaces: [MutableAssetLoader, BasicAction]
  };
  function DomWindowImpl(root_0, config) {
    this.root_x9bq0r$_0 = root_0;
    this.isActiveChanged_x9bq0r$_0 = new Signal1();
    this.isVisibleChanged_x9bq0r$_0 = new Signal1();
    this.sizeChanged_x9bq0r$_0 = new Signal3();
    this._width_x9bq0r$_0 = 0.0;
    this._height_x9bq0r$_0 = 0.0;
    this._isVisible_x9bq0r$_0 = true;
    this.hiddenProp_x9bq0r$_0 = null;
    this.hiddenPropEventMap_x9bq0r$_0 = hashMapOf([to('hidden', 'visibilitychange'), to('mozHidden', 'mozvisibilitychange'), to('webkitHidden', 'webkitvisibilitychange'), to('msHidden', 'msvisibilitychange')]);
    this.visibilityChangeHandler_x9bq0r$_0 = DomWindowImpl$visibilityChangeHandler$lambda(this);
    this.blurHandler_x9bq0r$_0 = DomWindowImpl$blurHandler$lambda(this);
    this.focusHandler_x9bq0r$_0 = DomWindowImpl$focusHandler$lambda(this);
    this.resizeHandler_x9bq0r$_0 = DomWindowImpl$resizeHandler$lambda(this);
    this.setSize_g1oyt7$(this.root_x9bq0r$_0.offsetWidth, this.root_x9bq0r$_0.offsetHeight, true);
    window.addEventListener('resize', this.resizeHandler_x9bq0r$_0);
    window.addEventListener('blur', this.blurHandler_x9bq0r$_0);
    window.addEventListener('focus', this.focusHandler_x9bq0r$_0);
    if (config.title.length > 0)
      document.title = config.title;
    this.watchForVisibilityChanges_x9bq0r$_0();
    this._isActive_x9bq0r$_0 = true;
    this._clearColor_x9bq0r$_0 = Color.Companion.CLEAR.copy_7b5o5w$();
    this._continuousRendering_x9bq0r$_0 = false;
    this._renderRequested_x9bq0r$_0 = true;
    this._closeRequested_x9bq0r$_0 = false;
    this._fullScreen_x9bq0r$_0 = false;
    this._location$delegate = lazy(DomWindowImpl$_location$lambda);
  }
  Object.defineProperty(DomWindowImpl.prototype, 'isActiveChanged', {
    get: function () {
      return this.isActiveChanged_x9bq0r$_0;
    }
  });
  Object.defineProperty(DomWindowImpl.prototype, 'isVisibleChanged', {
    get: function () {
      return this.isVisibleChanged_x9bq0r$_0;
    }
  });
  Object.defineProperty(DomWindowImpl.prototype, 'sizeChanged', {
    get: function () {
      return this.sizeChanged_x9bq0r$_0;
    }
  });
  DomWindowImpl.prototype.watchForVisibilityChanges_x9bq0r$_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.hiddenProp_x9bq0r$_0 = null;
    if ('hidden' in document) {
      this.hiddenProp_x9bq0r$_0 = 'hidden';
    }
     else if ('mozHidden' in document) {
      this.hiddenProp_x9bq0r$_0 = 'mozHidden';
    }
     else if ('webkitHidden' in document) {
      this.hiddenProp_x9bq0r$_0 = 'webkitHidden';
    }
     else if ('msHidden' in document) {
      this.hiddenProp_x9bq0r$_0 = 'msHidden';
    }
    if (this.hiddenProp_x9bq0r$_0 != null) {
      tmp$_1 = (tmp$_0 = this.hiddenPropEventMap_x9bq0r$_0.get_11rb$((tmp$ = this.hiddenProp_x9bq0r$_0) != null ? tmp$ : Kotlin.throwNPE())) != null ? tmp$_0 : Kotlin.throwNPE();
      tmp$_2 = this.visibilityChangeHandler_x9bq0r$_0;
      document.addEventListener(tmp$_1, tmp$_2);
      this.visibilityChangeHandler_x9bq0r$_0(null);
    }
  };
  DomWindowImpl.prototype.unwatchVisibilityChanges_x9bq0r$_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (this.hiddenProp_x9bq0r$_0 != null) {
      tmp$_1 = (tmp$_0 = this.hiddenPropEventMap_x9bq0r$_0.get_11rb$((tmp$ = this.hiddenProp_x9bq0r$_0) != null ? tmp$ : Kotlin.throwNPE())) != null ? tmp$_0 : Kotlin.throwNPE();
      tmp$_2 = this.visibilityChangeHandler_x9bq0r$_0;
      document.removeEventListener(tmp$_1, tmp$_2);
      this.hiddenProp_x9bq0r$_0 = null;
    }
  };
  DomWindowImpl.prototype.isVisible = function () {
    return this._isVisible_x9bq0r$_0;
  };
  DomWindowImpl.prototype.isVisible_o21zyu$_0 = function (value) {
    if (Kotlin.equals(this._isVisible_x9bq0r$_0, value))
      return;
    this._isVisible_x9bq0r$_0 = value;
    this.isVisibleChanged.dispatch_11rb$(value);
  };
  DomWindowImpl.prototype.isActive = function () {
    return this._isActive_x9bq0r$_0;
  };
  DomWindowImpl.prototype.isActive_o21zyu$_0 = function (value) {
    if (Kotlin.equals(this._isActive_x9bq0r$_0, value))
      return;
    this._isActive_x9bq0r$_0 = value;
    this.isActiveChanged.dispatch_11rb$(value);
  };
  DomWindowImpl.prototype.getWidth = function () {
    return this._width_x9bq0r$_0;
  };
  DomWindowImpl.prototype.getHeight = function () {
    return this._height_x9bq0r$_0;
  };
  DomWindowImpl.prototype.setSize_g1oyt7$ = function (width, height, isUserInteraction) {
    if (this._width_x9bq0r$_0 === width && this._height_x9bq0r$_0 === height)
      return;
    this._width_x9bq0r$_0 = width;
    this._height_x9bq0r$_0 = height;
    if (!isUserInteraction) {
      this.root_x9bq0r$_0.style.width = (this._width_x9bq0r$_0 | 0).toString() + 'px';
      this.root_x9bq0r$_0.style.height = (this._height_x9bq0r$_0 | 0).toString() + 'px';
    }
    this.sizeChanged.dispatch_1llc0w$(this._width_x9bq0r$_0, this._height_x9bq0r$_0, isUserInteraction);
  };
  Object.defineProperty(DomWindowImpl.prototype, 'clearColor', {
    get: function () {
      return this._clearColor_x9bq0r$_0;
    },
    set: function (value) {
      this._clearColor_x9bq0r$_0.set_1qghwi$(value);
      this.root_x9bq0r$_0.style.backgroundColor = '#' + value.toRgbString();
    }
  });
  DomWindowImpl.prototype.continuousRendering_6taknv$ = function (value) {
    this._continuousRendering_x9bq0r$_0 = value;
  };
  DomWindowImpl.prototype.shouldRender_6taknv$ = function (clearRenderRequest) {
    var bool = this._continuousRendering_x9bq0r$_0 || this._renderRequested_x9bq0r$_0;
    if (clearRenderRequest && this._renderRequested_x9bq0r$_0)
      this._renderRequested_x9bq0r$_0 = false;
    return bool;
  };
  DomWindowImpl.prototype.requestRender = function () {
    if (this._renderRequested_x9bq0r$_0)
      return;
    this._renderRequested_x9bq0r$_0 = true;
  };
  DomWindowImpl.prototype.renderBegin = function () {
  };
  DomWindowImpl.prototype.renderEnd = function () {
  };
  DomWindowImpl.prototype.isCloseRequested = function () {
    return this._closeRequested_x9bq0r$_0;
  };
  DomWindowImpl.prototype.requestClose = function () {
    this._closeRequested_x9bq0r$_0 = true;
  };
  Object.defineProperty(DomWindowImpl.prototype, 'fullScreen', {
    get: function () {
      return this._fullScreen_x9bq0r$_0;
    },
    set: function (value) {
      if (Kotlin.equals(value, this._fullScreen_x9bq0r$_0))
        return;
      this._fullScreen_x9bq0r$_0 = value;
      if (value) {
        this.root_x9bq0r$_0.requestFullscreen();
      }
       else {
        document.exitFullscreen();
      }
    }
  });
  Object.defineProperty(DomWindowImpl.prototype, '_location_x9bq0r$_0', {
    get: function () {
      var $receiver = this._location$delegate;
      new Kotlin.PropertyMetadata('_location');
      return $receiver.value;
    }
  });
  Object.defineProperty(DomWindowImpl.prototype, 'location', {
    get: function () {
      return this._location_x9bq0r$_0;
    }
  });
  DomWindowImpl.prototype.dispose = function () {
    this.sizeChanged.dispose();
    window.removeEventListener('resize', this.resizeHandler_x9bq0r$_0);
    window.removeEventListener('blur', this.blurHandler_x9bq0r$_0);
    window.removeEventListener('focus', this.focusHandler_x9bq0r$_0);
    this.unwatchVisibilityChanges_x9bq0r$_0();
  };
  function DomWindowImpl$visibilityChangeHandler$lambda(this$DomWindowImpl) {
    return function (event) {
      var tmp$, tmp$_0, tmp$_1;
      tmp$_0 = (tmp$ = this$DomWindowImpl.hiddenProp_x9bq0r$_0) != null ? tmp$ : Kotlin.throwNPE();
      tmp$_1 = document[tmp$_0] != true;
      this$DomWindowImpl.isVisible_o21zyu$_0(tmp$_1);
    };
  }
  function DomWindowImpl$blurHandler$lambda(this$DomWindowImpl) {
    return function (event) {
      this$DomWindowImpl.isActive_o21zyu$_0(false);
    };
  }
  function DomWindowImpl$focusHandler$lambda(this$DomWindowImpl) {
    return function (event) {
      this$DomWindowImpl.isActive_o21zyu$_0(true);
    };
  }
  function DomWindowImpl$resizeHandler$lambda(this$DomWindowImpl) {
    return function (event) {
      this$DomWindowImpl.setSize_g1oyt7$(this$DomWindowImpl.root_x9bq0r$_0.offsetWidth, this$DomWindowImpl.root_x9bq0r$_0.offsetHeight, true);
    };
  }
  function DomWindowImpl$_location$lambda() {
    return new JsLocation(window.location);
  }
  DomWindowImpl.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DomWindowImpl',
    interfaces: [Window]
  };
  function DomFocusManager() {
    FocusManagerImpl.call(this);
  }
  DomFocusManager.prototype.onFocusedChanged_wxft50$ = function (oldFocused, value) {
    var tmp$, tmp$_0;
    if (oldFocused != null) {
      oldFocused.onBlurred();
      (Kotlin.isType(tmp$ = oldFocused.native, DomComponent_0) ? tmp$ : Kotlin.throwCCE()).blur();
    }
    if (value != null) {
      (Kotlin.isType(tmp$_0 = value.native, DomComponent_0) ? tmp$_0 : Kotlin.throwCCE()).focus();
      value.onFocused();
    }
  };
  DomFocusManager.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DomFocusManager',
    interfaces: [FocusManagerImpl]
  };
  function NativeSignal(host, jsType, isCapture, type, event, handler) {
    StoppableSignalImpl.call(this);
    this.host_0 = host;
    this.jsType_0 = jsType;
    this.isCapture_0 = isCapture;
    this.type_0 = type;
    this.event_0 = event;
    this.handler_0 = handler;
    this.element_0 = null;
    this.wrappedHandler_0 = NativeSignal$wrappedHandler$lambda(this);
    this.windowEvents_0 = [MouseInteraction.Companion.MOUSE_DOWN, MouseInteraction.Companion.MOUSE_UP, MouseInteraction.Companion.MOUSE_MOVE, MouseInteraction.Companion.MOUSE_OUT, MouseInteraction.Companion.MOUSE_UP, KeyInteraction.Companion.KEY_DOWN, KeyInteraction.Companion.KEY_UP];
    var tmp$, tmp$_0;
    if (Kotlin.isType(this.host_0, Stage) && contains(this.windowEvents_0, this.type_0)) {
      this.element_0 = window;
    }
     else {
      var native = Kotlin.isType(tmp$_0 = (Kotlin.isType(tmp$ = this.host_0, UiComponent) ? tmp$ : Kotlin.throwCCE()).native, DomComponent_0) ? tmp$_0 : Kotlin.throwCCE();
      this.element_0 = native.element;
    }
    this.element_0.addEventListener(this.jsType_0, this.wrappedHandler_0, this.isCapture_0);
  }
  NativeSignal.prototype.dispose = function () {
    StoppableSignalImpl.prototype.dispose.call(this);
    this.element_0.removeEventListener(this.jsType_0, this.wrappedHandler_0, this.isCapture_0);
  };
  function NativeSignal$wrappedHandler$lambda(this$NativeSignal) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      if (this$NativeSignal.host_0.interactivityEnabled) {
        var returnVal = this$NativeSignal.handler_0(it);
        this$NativeSignal.event_0.type = this$NativeSignal.type_0;
        this$NativeSignal.event_0.target = findComponentFromDom(it.target, this$NativeSignal.host_0);
        this$NativeSignal.event_0.localize_s01kq1$(this$NativeSignal.host_0);
        tmp$_0 = Kotlin.isType(tmp$ = this$NativeSignal.event_0, InteractionEvent) ? tmp$ : Kotlin.throwCCE();
        this$NativeSignal.dispatch_n80keo$(tmp$_0);
        if (this$NativeSignal.event_0.defaultPrevented())
          it.preventDefault();
        if (this$NativeSignal.event_0.propagation.immediatePropagationStopped())
          it.stopImmediatePropagation();
        else if (this$NativeSignal.event_0.propagation.propagationStopped())
          it.stopPropagation();
        if (core_0.UserInfo.isIe) {
          var root_0 = root(this$NativeSignal.host_0);
          (tmp$_2 = Kotlin.isType(tmp$_1 = root_0, Drivable) ? tmp$_1 : null) != null ? tmp$_2.update_mx4ult$(0.0) : null;
        }
        return returnVal;
      }
       else {
        return kotlin_0.Unit;
      }
    };
  }
  NativeSignal.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'NativeSignal',
    interfaces: [StoppableSignalImpl]
  };
  function WebGl20(context) {
    this.context_0 = context;
  }
  WebGl20.prototype.activeTexture_za3lpa$ = function (texture) {
    this.context_0.activeTexture(texture);
  };
  WebGl20.prototype.attachShader_62dx5d$ = function (program, shader) {
    var tmp$, tmp$_0;
    this.context_0.attachShader((Kotlin.isType(tmp$ = program, WebGlProgramRef) ? tmp$ : Kotlin.throwCCE()).o, (Kotlin.isType(tmp$_0 = shader, WebGlShaderRef) ? tmp$_0 : Kotlin.throwCCE()).o);
  };
  WebGl20.prototype.bindAttribLocation_9ij5eg$ = function (program, index, name) {
    var tmp$;
    this.context_0.bindAttribLocation((Kotlin.isType(tmp$ = program, WebGlProgramRef) ? tmp$ : Kotlin.throwCCE()).o, index, name);
  };
  WebGl20.prototype.bindBuffer_gtr22n$ = function (target, buffer) {
    var tmp$, tmp$_0;
    this.context_0.bindBuffer(target, (tmp$_0 = Kotlin.isType(tmp$ = buffer, WebGlBufferRef) ? tmp$ : null) != null ? tmp$_0.o : null);
  };
  WebGl20.prototype.bindFramebuffer_6chnl2$ = function (target, framebuffer) {
    var tmp$, tmp$_0;
    this.context_0.bindFramebuffer(target, (tmp$_0 = Kotlin.isType(tmp$ = framebuffer, WebGlFramebufferRef) ? tmp$ : null) != null ? tmp$_0.o : null);
  };
  WebGl20.prototype.bindRenderbuffer_abwfzf$ = function (target, renderbuffer) {
    var tmp$, tmp$_0;
    this.context_0.bindRenderbuffer(target, (tmp$_0 = Kotlin.isType(tmp$ = renderbuffer, WebGlRenderbufferRef) ? tmp$ : null) != null ? tmp$_0.o : null);
  };
  WebGl20.prototype.bindTexture_2s7dt8$ = function (target, texture) {
    var tmp$, tmp$_0;
    this.context_0.bindTexture(target, (tmp$_0 = Kotlin.isType(tmp$ = texture, WebGlTextureRef) ? tmp$ : null) != null ? tmp$_0.o : null);
  };
  WebGl20.prototype.blendColor_7b5o5w$ = function (red, green, blue, alpha) {
    this.context_0.blendColor(red, green, blue, alpha);
  };
  WebGl20.prototype.blendEquation_za3lpa$ = function (mode) {
    this.context_0.blendEquation(mode);
  };
  WebGl20.prototype.blendEquationSeparate_vux9f0$ = function (modeRGB, modeAlpha) {
    this.context_0.blendEquationSeparate(modeRGB, modeAlpha);
  };
  WebGl20.prototype.blendFunc_vux9f0$ = function (sfactor, dfactor) {
    this.context_0.blendFunc(sfactor, dfactor);
  };
  WebGl20.prototype.blendFuncSeparate_tjonv8$ = function (srcRGB, dstRGB, srcAlpha, dstAlpha) {
    this.context_0.blendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha);
  };
  WebGl20.prototype.bufferData_qt1dr2$ = function (target, size, usage) {
    this.context_0.bufferData(target, size, usage);
  };
  WebGl20.prototype.bufferDatabv_x99ops$ = function (target, data, usage) {
    var tmp$;
    this.context_0.bufferData(target, Kotlin.isType(tmp$ = data.native, Object) ? tmp$ : Kotlin.throwCCE(), usage);
  };
  WebGl20.prototype.bufferDatafv_ox35k4$ = function (target, data, usage) {
    var tmp$;
    this.context_0.bufferData(target, Kotlin.isType(tmp$ = data.native, Object) ? tmp$ : Kotlin.throwCCE(), usage);
  };
  WebGl20.prototype.bufferDatasv_5kx7uk$ = function (target, data, usage) {
    var tmp$;
    this.context_0.bufferData(target, Kotlin.isType(tmp$ = data.native, Object) ? tmp$ : Kotlin.throwCCE(), usage);
  };
  WebGl20.prototype.bufferSubDatafv_fov81g$ = function (target, offset, data) {
    var tmp$;
    this.context_0.bufferSubData(target, offset, Kotlin.isType(tmp$ = data.native, Object) ? tmp$ : Kotlin.throwCCE());
  };
  WebGl20.prototype.bufferSubDatasv_ls9hec$ = function (target, offset, data) {
    var tmp$;
    this.context_0.bufferSubData(target, offset, Kotlin.isType(tmp$ = data.native, Object) ? tmp$ : Kotlin.throwCCE());
  };
  WebGl20.prototype.checkFramebufferStatus_za3lpa$ = function (target) {
    return this.context_0.checkFramebufferStatus(target);
  };
  WebGl20.prototype.clear_za3lpa$ = function (mask) {
    this.context_0.clear(mask);
  };
  WebGl20.prototype.clearColor_7b5o5w$ = function (red, green, blue, alpha) {
    this.context_0.clearColor(red, green, blue, alpha);
  };
  WebGl20.prototype.clearDepth_mx4ult$ = function (depth) {
    this.context_0.clearDepth(depth);
  };
  WebGl20.prototype.clearStencil_za3lpa$ = function (s) {
    this.context_0.clearStencil(s);
  };
  WebGl20.prototype.color_1qghwi$ = function (value) {
  };
  WebGl20.prototype.colorMask_nyyhg$ = function (red, green, blue, alpha) {
    this.context_0.colorMask(red, green, blue, alpha);
  };
  WebGl20.prototype.compileShader_adcz9h$ = function (shader) {
    var tmp$;
    this.context_0.compileShader((Kotlin.isType(tmp$ = shader, WebGlShaderRef) ? tmp$ : Kotlin.throwCCE()).o);
  };
  WebGl20.prototype.copyTexImage2D_wrdw30$ = function (target, level, internalFormat, x, y, width, height, border) {
    this.context_0.copyTexImage2D(target, level, internalFormat, x, y, width, height, border);
  };
  WebGl20.prototype.copyTexSubImage2D_wrdw30$ = function (target, level, xOffset, yOffset, x, y, width, height) {
    this.context_0.copyTexSubImage2D(target, level, xOffset, yOffset, x, y, width, height);
  };
  WebGl20.prototype.createBuffer = function () {
    var tmp$;
    return new WebGlBufferRef((tmp$ = this.context_0.createBuffer()) != null ? tmp$ : Kotlin.throwNPE());
  };
  WebGl20.prototype.createFramebuffer = function () {
    var tmp$;
    return new WebGlFramebufferRef((tmp$ = this.context_0.createFramebuffer()) != null ? tmp$ : Kotlin.throwNPE());
  };
  WebGl20.prototype.createProgram = function () {
    var tmp$;
    return new WebGlProgramRef((tmp$ = this.context_0.createProgram()) != null ? tmp$ : Kotlin.throwNPE());
  };
  WebGl20.prototype.createRenderbuffer = function () {
    var tmp$;
    return new WebGlRenderbufferRef((tmp$ = this.context_0.createRenderbuffer()) != null ? tmp$ : Kotlin.throwNPE());
  };
  WebGl20.prototype.createShader_za3lpa$ = function (type) {
    var tmp$;
    return new WebGlShaderRef((tmp$ = this.context_0.createShader(type)) != null ? tmp$ : Kotlin.throwNPE());
  };
  WebGl20.prototype.createTexture = function () {
    var tmp$;
    return new WebGlTextureRef((tmp$ = this.context_0.createTexture()) != null ? tmp$ : Kotlin.throwNPE());
  };
  WebGl20.prototype.cullFace_za3lpa$ = function (mode) {
    this.context_0.cullFace(mode);
  };
  WebGl20.prototype.deleteBuffer_qv4l9y$ = function (buffer) {
    var tmp$;
    this.context_0.deleteBuffer((Kotlin.isType(tmp$ = buffer, WebGlBufferRef) ? tmp$ : Kotlin.throwCCE()).o);
  };
  WebGl20.prototype.deleteFramebuffer_ljn901$ = function (framebuffer) {
    var tmp$;
    this.context_0.deleteFramebuffer((Kotlin.isType(tmp$ = framebuffer, WebGlFramebufferRef) ? tmp$ : Kotlin.throwCCE()).o);
  };
  WebGl20.prototype.deleteProgram_bf3f0o$ = function (program) {
    var tmp$;
    this.context_0.deleteProgram((Kotlin.isType(tmp$ = program, WebGlProgramRef) ? tmp$ : Kotlin.throwCCE()).o);
  };
  WebGl20.prototype.deleteRenderbuffer_x108uk$ = function (renderbuffer) {
    var tmp$;
    this.context_0.deleteRenderbuffer((Kotlin.isType(tmp$ = renderbuffer, WebGlRenderbufferRef) ? tmp$ : Kotlin.throwCCE()).o);
  };
  WebGl20.prototype.deleteShader_adcz9h$ = function (shader) {
    var tmp$;
    this.context_0.deleteShader((Kotlin.isType(tmp$ = shader, WebGlShaderRef) ? tmp$ : Kotlin.throwCCE()).o);
  };
  WebGl20.prototype.deleteTexture_yq8m69$ = function (texture) {
    var tmp$;
    this.context_0.deleteTexture((Kotlin.isType(tmp$ = texture, WebGlTextureRef) ? tmp$ : Kotlin.throwCCE()).o);
  };
  WebGl20.prototype.depthFunc_za3lpa$ = function (func) {
    this.context_0.depthFunc(func);
  };
  WebGl20.prototype.depthMask_6taknv$ = function (flag) {
    this.context_0.depthMask(flag);
  };
  WebGl20.prototype.depthRange_dleff0$ = function (zNear, zFar) {
    this.context_0.depthRange(zNear, zFar);
  };
  WebGl20.prototype.detachShader_62dx5d$ = function (program, shader) {
    var tmp$, tmp$_0;
    this.context_0.detachShader((Kotlin.isType(tmp$ = program, WebGlProgramRef) ? tmp$ : Kotlin.throwCCE()).o, (Kotlin.isType(tmp$_0 = shader, WebGlShaderRef) ? tmp$_0 : Kotlin.throwCCE()).o);
  };
  WebGl20.prototype.disable_za3lpa$ = function (cap) {
    this.context_0.disable(cap);
  };
  WebGl20.prototype.disableVertexAttribArray_za3lpa$ = function (index) {
    this.context_0.disableVertexAttribArray(index);
  };
  WebGl20.prototype.drawArrays_qt1dr2$ = function (mode, first_1, count) {
    this.context_0.drawArrays(mode, first_1, count);
  };
  WebGl20.prototype.drawElements_tjonv8$ = function (mode, count, type, offset) {
    this.context_0.drawElements(mode, count, type, offset);
  };
  WebGl20.prototype.enable_za3lpa$ = function (cap) {
    this.context_0.enable(cap);
  };
  WebGl20.prototype.enableVertexAttribArray_za3lpa$ = function (index) {
    this.context_0.enableVertexAttribArray(index);
  };
  WebGl20.prototype.finish = function () {
    this.context_0.finish();
  };
  WebGl20.prototype.flush = function () {
    this.context_0.flush();
  };
  WebGl20.prototype.framebufferRenderbuffer_4jii3u$ = function (target, attachment, renderbufferTarget, renderbuffer) {
    var tmp$;
    this.context_0.framebufferRenderbuffer(target, attachment, renderbufferTarget, (Kotlin.isType(tmp$ = renderbuffer, WebGlRenderbufferRef) ? tmp$ : Kotlin.throwCCE()).o);
  };
  WebGl20.prototype.framebufferTexture2D_sivm59$ = function (target, attachment, textureTarget, texture, level) {
    var tmp$;
    this.context_0.framebufferTexture2D(target, attachment, textureTarget, (Kotlin.isType(tmp$ = texture, WebGlTextureRef) ? tmp$ : Kotlin.throwCCE()).o, level);
  };
  WebGl20.prototype.frontFace_za3lpa$ = function (mode) {
    this.context_0.frontFace(mode);
  };
  WebGl20.prototype.generateMipmap_za3lpa$ = function (target) {
    this.context_0.generateMipmap(target);
  };
  WebGl20.prototype.getActiveAttrib_q5fai$ = function (program, index) {
    var tmp$, tmp$_0;
    return new WebGlActiveInfoRef((tmp$_0 = this.context_0.getActiveAttrib((Kotlin.isType(tmp$ = program, WebGlProgramRef) ? tmp$ : Kotlin.throwCCE()).o, index)) != null ? tmp$_0 : Kotlin.throwNPE());
  };
  WebGl20.prototype.getActiveUniform_q5fai$ = function (program, index) {
    var tmp$, tmp$_0;
    return new WebGlActiveInfoRef((tmp$_0 = this.context_0.getActiveUniform((Kotlin.isType(tmp$ = program, WebGlProgramRef) ? tmp$ : Kotlin.throwCCE()).o, index)) != null ? tmp$_0 : Kotlin.throwNPE());
  };
  function WebGl20$getAttachedShaders$lambda(closure$src) {
    return function (it) {
      return new WebGlShaderRef(closure$src[it]);
    };
  }
  WebGl20.prototype.getAttachedShaders_bf3f0o$ = function (program) {
    var tmp$, tmp$_0;
    var src = (tmp$_0 = this.context_0.getAttachedShaders((Kotlin.isType(tmp$ = program, WebGlProgramRef) ? tmp$ : Kotlin.throwCCE()).o)) != null ? tmp$_0 : [];
    var out = Kotlin.newArrayF(src.length, WebGl20$getAttachedShaders$lambda(src));
    return out;
  };
  WebGl20.prototype.getAttribLocation_stzeiy$ = function (program, name) {
    var tmp$;
    return this.context_0.getAttribLocation((Kotlin.isType(tmp$ = program, WebGlProgramRef) ? tmp$ : Kotlin.throwCCE()).o, name);
  };
  WebGl20.prototype.getError = function () {
    return this.context_0.getError();
  };
  WebGl20.prototype.getProgramInfoLog_bf3f0o$ = function (program) {
    var tmp$;
    return this.context_0.getProgramInfoLog((Kotlin.isType(tmp$ = program, WebGlProgramRef) ? tmp$ : Kotlin.throwCCE()).o);
  };
  WebGl20.prototype.getShaderInfoLog_adcz9h$ = function (shader) {
    var tmp$;
    return this.context_0.getShaderInfoLog((Kotlin.isType(tmp$ = shader, WebGlShaderRef) ? tmp$ : Kotlin.throwCCE()).o);
  };
  WebGl20.prototype.getUniformLocation_stzeiy$ = function (program, name) {
    var tmp$, tmp$_0;
    tmp$_0 = this.context_0.getUniformLocation((Kotlin.isType(tmp$ = program, WebGlProgramRef) ? tmp$ : Kotlin.throwCCE()).o, name);
    if (tmp$_0 == null) {
      return null;
    }
    var uniformLocation = tmp$_0;
    return new WebGlUniformLocationRef(uniformLocation);
  };
  WebGl20.prototype.hint_vux9f0$ = function (target, mode) {
    return this.context_0.hint(target, mode);
  };
  WebGl20.prototype.isBuffer_qv4l9y$ = function (buffer) {
    var tmp$;
    return this.context_0.isBuffer((Kotlin.isType(tmp$ = buffer, WebGlBufferRef) ? tmp$ : Kotlin.throwCCE()).o);
  };
  WebGl20.prototype.isEnabled_za3lpa$ = function (cap) {
    return this.context_0.isEnabled(cap);
  };
  WebGl20.prototype.isFramebuffer_ljn901$ = function (framebuffer) {
    var tmp$;
    return this.context_0.isFramebuffer((Kotlin.isType(tmp$ = framebuffer, WebGlFramebufferRef) ? tmp$ : Kotlin.throwCCE()).o);
  };
  WebGl20.prototype.isProgram_bf3f0o$ = function (program) {
    var tmp$;
    return this.context_0.isProgram((Kotlin.isType(tmp$ = program, WebGlProgramRef) ? tmp$ : Kotlin.throwCCE()).o);
  };
  WebGl20.prototype.isRenderbuffer_x108uk$ = function (renderbuffer) {
    var tmp$;
    return this.context_0.isRenderbuffer((Kotlin.isType(tmp$ = renderbuffer, WebGlRenderbufferRef) ? tmp$ : Kotlin.throwCCE()).o);
  };
  WebGl20.prototype.isShader_adcz9h$ = function (shader) {
    var tmp$;
    return this.context_0.isShader((Kotlin.isType(tmp$ = shader, WebGlShaderRef) ? tmp$ : Kotlin.throwCCE()).o);
  };
  WebGl20.prototype.isTexture_yq8m69$ = function (texture) {
    var tmp$;
    return this.context_0.isTexture((Kotlin.isType(tmp$ = texture, WebGlTextureRef) ? tmp$ : Kotlin.throwCCE()).o);
  };
  WebGl20.prototype.lineWidth_mx4ult$ = function (width) {
    this.context_0.lineWidth(width);
  };
  WebGl20.prototype.linkProgram_bf3f0o$ = function (program) {
    var tmp$;
    this.context_0.linkProgram((Kotlin.isType(tmp$ = program, WebGlProgramRef) ? tmp$ : Kotlin.throwCCE()).o);
  };
  WebGl20.prototype.pixelStorei_vux9f0$ = function (pName, param) {
    this.context_0.pixelStorei(pName, param);
  };
  WebGl20.prototype.polygonOffset_dleff0$ = function (factor, units) {
    this.context_0.polygonOffset(factor, units);
  };
  WebGl20.prototype.readPixels_hwtw84$ = function (x, y, width, height, format, type, pixels) {
    var tmp$;
    this.context_0.readPixels(x, y, width, height, format, type, Kotlin.isType(tmp$ = pixels.native, Object) ? tmp$ : Kotlin.throwCCE());
  };
  WebGl20.prototype.renderbufferStorage_tjonv8$ = function (target, internalFormat, width, height) {
    this.context_0.renderbufferStorage(target, internalFormat, width, height);
  };
  WebGl20.prototype.sampleCoverage_8ca0d4$ = function (value, invert) {
    this.context_0.sampleCoverage(value, invert);
  };
  WebGl20.prototype.scissor_tjonv8$ = function (x, y, width, height) {
    this.context_0.scissor(x, y, width, height);
  };
  WebGl20.prototype.shaderSource_cwqujt$ = function (shader, source) {
    var tmp$;
    this.context_0.shaderSource((Kotlin.isType(tmp$ = shader, WebGlShaderRef) ? tmp$ : Kotlin.throwCCE()).o, source);
  };
  WebGl20.prototype.stencilFunc_qt1dr2$ = function (func, ref, mask) {
    this.context_0.stencilFunc(func, ref, mask);
  };
  WebGl20.prototype.stencilFuncSeparate_tjonv8$ = function (face, func, ref, mask) {
    this.context_0.stencilFuncSeparate(face, func, ref, mask);
  };
  WebGl20.prototype.stencilMask_za3lpa$ = function (mask) {
    this.context_0.stencilMask(mask);
  };
  WebGl20.prototype.stencilMaskSeparate_vux9f0$ = function (face, mask) {
    this.context_0.stencilMaskSeparate(face, mask);
  };
  WebGl20.prototype.stencilOp_qt1dr2$ = function (fail, zfail, zpass) {
    this.context_0.stencilOp(fail, zfail, zpass);
  };
  WebGl20.prototype.stencilOpSeparate_tjonv8$ = function (face, fail, zfail, zpass) {
    this.context_0.stencilOpSeparate(face, fail, zfail, zpass);
  };
  WebGl20.prototype.texImage2Db_x66c85$ = function (target, level, internalFormat, width, height, border, format, type, pixels) {
    this.context_0.texImage2D(target, level, internalFormat, width, height, border, format, type, unsafeCast(pixels != null ? pixels.native : null));
  };
  WebGl20.prototype.texImage2Df_ilbvkb$ = function (target, level, internalFormat, width, height, border, format, type, pixels) {
    this.context_0.texImage2D(target, level, internalFormat, width, height, border, format, type, unsafeCast(pixels != null ? pixels.native : null));
  };
  WebGl20.prototype.texImage2D_stvjjz$ = function (target, level, internalFormat, format, type, texture) {
    var tmp$;
    this.context_0.texImage2D(target, level, internalFormat, format, type, (Kotlin.isType(tmp$ = texture, WebGlTexture) ? tmp$ : Kotlin.throwCCE()).image);
  };
  WebGl20.prototype.texParameterf_n0b4r3$ = function (target, pName, param) {
    this.context_0.texParameterf(target, pName, param);
  };
  WebGl20.prototype.texParameteri_qt1dr2$ = function (target, pName, param) {
    this.context_0.texParameteri(target, pName, param);
  };
  WebGl20.prototype.texSubImage2D_m6kxxl$ = function (target, level, xOffset, yOffset, format, type, texture) {
    var tmp$;
    this.context_0.texSubImage2D(target, level, xOffset, yOffset, format, type, (Kotlin.isType(tmp$ = texture, WebGlTexture) ? tmp$ : Kotlin.throwCCE()).image);
  };
  WebGl20.prototype.uniform1f_5w6wo$ = function (location, x) {
    var tmp$;
    this.context_0.uniform1f((Kotlin.isType(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : Kotlin.throwCCE()).o, x);
  };
  WebGl20.prototype.uniform1fv_ffh4uz$ = function (location, v) {
    var tmp$, tmp$_0;
    this.context_0.uniform1fv((Kotlin.isType(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : Kotlin.throwCCE()).o, Kotlin.isType(tmp$_0 = v.native, Float32Array) ? tmp$_0 : Kotlin.throwCCE());
  };
  WebGl20.prototype.uniform1i_y004uz$ = function (location, x) {
    var tmp$;
    this.context_0.uniform1i((Kotlin.isType(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : Kotlin.throwCCE()).o, x);
  };
  WebGl20.prototype.uniform1iv_fwq19k$ = function (location, v) {
    var tmp$, tmp$_0;
    this.context_0.uniform1iv((Kotlin.isType(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : Kotlin.throwCCE()).o, Kotlin.isType(tmp$_0 = v.native, Int32Array) ? tmp$_0 : Kotlin.throwCCE());
  };
  WebGl20.prototype.uniform2f_419b65$ = function (location, x, y) {
    var tmp$;
    this.context_0.uniform2f((Kotlin.isType(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : Kotlin.throwCCE()).o, x, y);
  };
  WebGl20.prototype.uniform2fv_ffh4uz$ = function (location, v) {
    var tmp$, tmp$_0;
    this.context_0.uniform2fv((Kotlin.isType(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : Kotlin.throwCCE()).o, Kotlin.isType(tmp$_0 = v.native, Float32Array) ? tmp$_0 : Kotlin.throwCCE());
  };
  WebGl20.prototype.uniform2i_2fdgq5$ = function (location, x, y) {
    var tmp$;
    this.context_0.uniform2i((Kotlin.isType(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : Kotlin.throwCCE()).o, x, y);
  };
  WebGl20.prototype.uniform2iv_fwq19k$ = function (location, v) {
    var tmp$, tmp$_0;
    this.context_0.uniform2iv((Kotlin.isType(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : Kotlin.throwCCE()).o, Kotlin.isType(tmp$_0 = v.native, Int32Array) ? tmp$_0 : Kotlin.throwCCE());
  };
  WebGl20.prototype.uniform3f_oyxfc8$ = function (location, x, y, z) {
    var tmp$;
    this.context_0.uniform3f((Kotlin.isType(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : Kotlin.throwCCE()).o, x, y, z);
  };
  WebGl20.prototype.uniform3fv_ffh4uz$ = function (location, v) {
    var tmp$, tmp$_0;
    this.context_0.uniform3fv((Kotlin.isType(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : Kotlin.throwCCE()).o, Kotlin.isType(tmp$_0 = v.native, Float32Array) ? tmp$_0 : Kotlin.throwCCE());
  };
  WebGl20.prototype.uniform3i_8egqxx$ = function (location, x, y, z) {
    var tmp$;
    this.context_0.uniform3i((Kotlin.isType(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : Kotlin.throwCCE()).o, x, y, z);
  };
  WebGl20.prototype.uniform3iv_fwq19k$ = function (location, v) {
    var tmp$, tmp$_0;
    this.context_0.uniform3iv((Kotlin.isType(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : Kotlin.throwCCE()).o, Kotlin.isType(tmp$_0 = v.native, Int32Array) ? tmp$_0 : Kotlin.throwCCE());
  };
  WebGl20.prototype.uniform4f_b6e565$ = function (location, x, y, z, w) {
    var tmp$;
    this.context_0.uniform4f((Kotlin.isType(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : Kotlin.throwCCE()).o, x, y, z, w);
  };
  WebGl20.prototype.uniform4fv_ffh4uz$ = function (location, v) {
    var tmp$, tmp$_0;
    this.context_0.uniform4fv((Kotlin.isType(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : Kotlin.throwCCE()).o, Kotlin.isType(tmp$_0 = v.native, Float32Array) ? tmp$_0 : Kotlin.throwCCE());
  };
  WebGl20.prototype.uniform4i_faf5yl$ = function (location, x, y, z, w) {
    var tmp$;
    this.context_0.uniform4i((Kotlin.isType(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : Kotlin.throwCCE()).o, x, y, z, w);
  };
  WebGl20.prototype.uniform4iv_fwq19k$ = function (location, v) {
    var tmp$, tmp$_0;
    this.context_0.uniform4iv((Kotlin.isType(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : Kotlin.throwCCE()).o, Kotlin.isType(tmp$_0 = v.native, Int32Array) ? tmp$_0 : Kotlin.throwCCE());
  };
  WebGl20.prototype.uniformMatrix2fv_gfpvvo$ = function (location, transpose, value) {
    var tmp$, tmp$_0;
    this.context_0.uniformMatrix2fv((Kotlin.isType(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : Kotlin.throwCCE()).o, transpose, Kotlin.isType(tmp$_0 = value.native, Float32Array) ? tmp$_0 : Kotlin.throwCCE());
  };
  WebGl20.prototype.uniformMatrix3fv_gfpvvo$ = function (location, transpose, value) {
    var tmp$, tmp$_0;
    this.context_0.uniformMatrix3fv((Kotlin.isType(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : Kotlin.throwCCE()).o, transpose, Kotlin.isType(tmp$_0 = value.native, Float32Array) ? tmp$_0 : Kotlin.throwCCE());
  };
  WebGl20.prototype.uniformMatrix4fv_gfpvvo$ = function (location, transpose, value) {
    var tmp$, tmp$_0;
    this.context_0.uniformMatrix4fv((Kotlin.isType(tmp$ = location, WebGlUniformLocationRef) ? tmp$ : Kotlin.throwCCE()).o, transpose, Kotlin.isType(tmp$_0 = value.native, Float32Array) ? tmp$_0 : Kotlin.throwCCE());
  };
  WebGl20.prototype.useProgram_15mccn$ = function (program) {
    var tmp$, tmp$_0;
    this.context_0.useProgram((tmp$_0 = Kotlin.isType(tmp$ = program, WebGlProgramRef) ? tmp$ : null) != null ? tmp$_0.o : null);
  };
  WebGl20.prototype.validateProgram_bf3f0o$ = function (program) {
    var tmp$;
    this.context_0.validateProgram((Kotlin.isType(tmp$ = program, WebGlProgramRef) ? tmp$ : Kotlin.throwCCE()).o);
  };
  WebGl20.prototype.vertexAttrib1f_24o109$ = function (index, x) {
    this.context_0.vertexAttrib1f(index, x);
  };
  WebGl20.prototype.vertexAttrib1fv_hyht3q$ = function (index, values) {
    var tmp$;
    this.context_0.vertexAttrib1fv(index, Kotlin.isType(tmp$ = values.native, Float32Array) ? tmp$ : Kotlin.throwCCE());
  };
  WebGl20.prototype.vertexAttrib2f_nhq4am$ = function (index, x, y) {
    this.context_0.vertexAttrib2f(index, x, y);
  };
  WebGl20.prototype.vertexAttrib2fv_hyht3q$ = function (index, values) {
    var tmp$;
    this.context_0.vertexAttrib2fv(index, Kotlin.isType(tmp$ = values.native, Float32Array) ? tmp$ : Kotlin.throwCCE());
  };
  WebGl20.prototype.vertexAttrib3f_eyukp3$ = function (index, x, y, z) {
    this.context_0.vertexAttrib3f(index, x, y, z);
  };
  WebGl20.prototype.vertexAttrib3fv_hyht3q$ = function (index, values) {
    var tmp$;
    this.context_0.vertexAttrib3fv(index, Kotlin.isType(tmp$ = values.native, Float32Array) ? tmp$ : Kotlin.throwCCE());
  };
  WebGl20.prototype.vertexAttrib4f_xpxj32$ = function (index, x, y, z, w) {
    this.context_0.vertexAttrib4f(index, x, y, z, w);
  };
  WebGl20.prototype.vertexAttrib4fv_hyht3q$ = function (index, values) {
    var tmp$;
    this.context_0.vertexAttrib4fv(index, Kotlin.isType(tmp$ = values.native, Float32Array) ? tmp$ : Kotlin.throwCCE());
  };
  WebGl20.prototype.vertexAttribPointer_owihk5$ = function (index, size, type, normalized, stride, offset) {
    this.context_0.vertexAttribPointer(index, size, type, normalized, stride, offset);
  };
  WebGl20.prototype.viewport_tjonv8$ = function (x, y, width, height) {
    this.context_0.viewport(x, y, width, height);
  };
  WebGl20.prototype.getUniformb_x4nmrd$ = function (program, location) {
    var tmp$, tmp$_0, tmp$_1;
    return typeof (tmp$_1 = this.context_0.getUniform((Kotlin.isType(tmp$ = program, WebGlProgramRef) ? tmp$ : Kotlin.throwCCE()).o, (Kotlin.isType(tmp$_0 = location, WebGlUniformLocationRef) ? tmp$_0 : Kotlin.throwCCE()).o)) === 'boolean' ? tmp$_1 : Kotlin.throwCCE();
  };
  WebGl20.prototype.getUniformi_x4nmrd$ = function (program, location) {
    var tmp$, tmp$_0, tmp$_1;
    return typeof (tmp$_1 = this.context_0.getUniform((Kotlin.isType(tmp$ = program, WebGlProgramRef) ? tmp$ : Kotlin.throwCCE()).o, (Kotlin.isType(tmp$_0 = location, WebGlUniformLocationRef) ? tmp$_0 : Kotlin.throwCCE()).o)) === 'number' ? tmp$_1 : Kotlin.throwCCE();
  };
  WebGl20.prototype.getUniformf_x4nmrd$ = function (program, location) {
    var tmp$, tmp$_0, tmp$_1;
    return typeof (tmp$_1 = this.context_0.getUniform((Kotlin.isType(tmp$ = program, WebGlProgramRef) ? tmp$ : Kotlin.throwCCE()).o, (Kotlin.isType(tmp$_0 = location, WebGlUniformLocationRef) ? tmp$_0 : Kotlin.throwCCE()).o)) === 'number' ? tmp$_1 : Kotlin.throwCCE();
  };
  WebGl20.prototype.getVertexAttribi_vux9f0$ = function (index, pName) {
    var tmp$;
    return typeof (tmp$ = this.context_0.getVertexAttrib(index, pName)) === 'number' ? tmp$ : Kotlin.throwCCE();
  };
  WebGl20.prototype.getVertexAttribb_vux9f0$ = function (index, pName) {
    var tmp$;
    return typeof (tmp$ = this.context_0.getVertexAttrib(index, pName)) === 'boolean' ? tmp$ : Kotlin.throwCCE();
  };
  WebGl20.prototype.getTexParameter_vux9f0$ = function (target, pName) {
    var tmp$;
    return typeof (tmp$ = this.context_0.getTexParameter(target, pName)) === 'number' ? tmp$ : Kotlin.throwCCE();
  };
  WebGl20.prototype.getShaderParameterb_v5gftj$ = function (shader, pName) {
    var tmp$, tmp$_0;
    return typeof (tmp$_0 = this.context_0.getShaderParameter((Kotlin.isType(tmp$ = shader, WebGlShaderRef) ? tmp$ : Kotlin.throwCCE()).o, pName)) === 'boolean' ? tmp$_0 : Kotlin.throwCCE();
  };
  WebGl20.prototype.getShaderParameteri_v5gftj$ = function (shader, pName) {
    var tmp$, tmp$_0;
    return typeof (tmp$_0 = this.context_0.getShaderParameter((Kotlin.isType(tmp$ = shader, WebGlShaderRef) ? tmp$ : Kotlin.throwCCE()).o, pName)) === 'number' ? tmp$_0 : Kotlin.throwCCE();
  };
  WebGl20.prototype.getRenderbufferParameter_vux9f0$ = function (target, pName) {
    var tmp$;
    return typeof (tmp$ = this.context_0.getRenderbufferParameter(target, pName)) === 'number' ? tmp$ : Kotlin.throwCCE();
  };
  WebGl20.prototype.getParameterb_za3lpa$ = function (pName) {
    var tmp$;
    return typeof (tmp$ = this.context_0.getParameter(pName)) === 'boolean' ? tmp$ : Kotlin.throwCCE();
  };
  WebGl20.prototype.getParameteri_za3lpa$ = function (pName) {
    var tmp$;
    return typeof (tmp$ = this.context_0.getParameter(pName)) === 'number' ? tmp$ : Kotlin.throwCCE();
  };
  WebGl20.prototype.getProgramParameterb_q5fai$ = function (program, pName) {
    var tmp$, tmp$_0;
    return typeof (tmp$_0 = this.context_0.getProgramParameter((Kotlin.isType(tmp$ = program, WebGlProgramRef) ? tmp$ : Kotlin.throwCCE()).o, pName)) === 'boolean' ? tmp$_0 : Kotlin.throwCCE();
  };
  WebGl20.prototype.getProgramParameteri_q5fai$ = function (program, pName) {
    var tmp$, tmp$_0;
    return typeof (tmp$_0 = this.context_0.getProgramParameter((Kotlin.isType(tmp$ = program, WebGlProgramRef) ? tmp$ : Kotlin.throwCCE()).o, pName)) === 'number' ? tmp$_0 : Kotlin.throwCCE();
  };
  WebGl20.prototype.getBufferParameter_vux9f0$ = function (target, pName) {
    var tmp$;
    return typeof (tmp$ = this.context_0.getBufferParameter(target, pName)) === 'number' ? tmp$ : Kotlin.throwCCE();
  };
  WebGl20.prototype.getFramebufferAttachmentParameteri_qt1dr2$ = function (target, attachment, pName) {
    var tmp$;
    return typeof (tmp$ = this.context_0.getFramebufferAttachmentParameter(target, attachment, pName)) === 'number' ? tmp$ : Kotlin.throwCCE();
  };
  WebGl20.prototype.getSupportedExtensions = function () {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.context_0.getSupportedExtensions()) != null ? toList(tmp$) : null) != null ? tmp$_0 : emptyList();
  };
  WebGl20.prototype.getExtension_61zpoe$ = function (name) {
    return this.context_0.getExtension(name);
  };
  WebGl20.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'WebGl20',
    interfaces: [Gl20]
  };
  function WebGlProgramRef(o) {
    this.o = o;
  }
  WebGlProgramRef.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'WebGlProgramRef',
    interfaces: [GlProgramRef]
  };
  function WebGlShaderRef(o) {
    this.o = o;
  }
  WebGlShaderRef.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'WebGlShaderRef',
    interfaces: [GlShaderRef]
  };
  function WebGlBufferRef(o) {
    this.o = o;
  }
  WebGlBufferRef.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'WebGlBufferRef',
    interfaces: [GlBufferRef]
  };
  function WebGlFramebufferRef(o) {
    this.o = o;
  }
  WebGlFramebufferRef.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'WebGlFramebufferRef',
    interfaces: [GlFramebufferRef]
  };
  function WebGlRenderbufferRef(o) {
    this.o = o;
  }
  WebGlRenderbufferRef.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'WebGlRenderbufferRef',
    interfaces: [GlRenderbufferRef]
  };
  function WebGlTextureRef(o) {
    this.o = o;
  }
  WebGlTextureRef.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'WebGlTextureRef',
    interfaces: [GlTextureRef]
  };
  function WebGlActiveInfoRef(o) {
    this.o = o;
  }
  Object.defineProperty(WebGlActiveInfoRef.prototype, 'name', {
    get: function () {
      return this.o.name;
    },
    set: function (value) {
      throw new UnsupportedOperationException();
    }
  });
  Object.defineProperty(WebGlActiveInfoRef.prototype, 'size', {
    get: function () {
      return this.o.size;
    },
    set: function (value) {
      throw new UnsupportedOperationException();
    }
  });
  Object.defineProperty(WebGlActiveInfoRef.prototype, 'type', {
    get: function () {
      return this.o.type;
    },
    set: function (value) {
      throw new UnsupportedOperationException();
    }
  });
  WebGlActiveInfoRef.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'WebGlActiveInfoRef',
    interfaces: [GlActiveInfoRef]
  };
  function WebGlUniformLocationRef(o) {
    this.o = o;
  }
  WebGlUniformLocationRef.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'WebGlUniformLocationRef',
    interfaces: [GlUniformLocationRef]
  };
  function WebGl20Debug(context) {
    WrappedGl20.call(this, new WebGl20(context), WebGl20Debug_init$lambda, WebGl20Debug_init$lambda_0(context));
    this.context_0 = context;
  }
  function WebGl20Debug_init$lambda() {
  }
  function WebGl20Debug_init$lambda_0(closure$context) {
    return function () {
      var errorCode = closure$context.getError();
      if (errorCode !== WebGLRenderingContext.NO_ERROR) {
        var tmp$;
        if (errorCode === WebGLRenderingContext.INVALID_ENUM)
          tmp$ = 'Invalid enum';
        else if (errorCode === WebGLRenderingContext.INVALID_VALUE)
          tmp$ = 'Invalid value';
        else if (errorCode === WebGLRenderingContext.INVALID_OPERATION)
          tmp$ = 'Invalid operation';
        else if (errorCode === WebGLRenderingContext.INVALID_FRAMEBUFFER_OPERATION)
          tmp$ = 'Invalid framebuffer operation';
        else if (errorCode === WebGLRenderingContext.OUT_OF_MEMORY)
          tmp$ = 'Out of memory';
        else
          tmp$ = 'Unknown';
        var msg = tmp$;
        throw new Exception('GL Error: ' + msg);
      }
    };
  }
  WebGl20Debug.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'WebGl20Debug',
    interfaces: [WrappedGl20]
  };
  function WebGlApplication(rootId, config, onReady) {
    if (config === void 0)
      config = new AppConfig();
    JsApplicationBase.call(this, rootId, config, onReady);
    this.canvas_o44y67$_0 = void 0;
    core_0.UserInfo.isOpenGl = true;
  }
  Object.defineProperty(WebGlApplication.prototype, 'canvas', {
    get: function () {
      return this.canvas_o44y67$_0;
    },
    set: function (canvas) {
      this.canvas_o44y67$_0 = canvas;
    }
  });
  WebGlApplication.prototype.initializeBootstrap = function () {
    JsApplicationBase.prototype.initializeBootstrap.call(this);
    this.initializeGl();
    this.initializeGlState();
  };
  WebGlApplication.prototype.initializeCanvas = function () {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = document.getElementById(this.rootId);
    if (tmp$ == null) {
      throw new Exception('Could not find root canvas ' + this.rootId);
    }
    var rootElement = tmp$;
    var root_0 = Kotlin.isType(tmp$_0 = rootElement, HTMLElement) ? tmp$_0 : Kotlin.throwCCE();
    clear(root_0);
    var canvas = Kotlin.isType(tmp$_1 = document.createElement('canvas'), HTMLCanvasElement) ? tmp$_1 : Kotlin.throwCCE();
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    root_0.appendChild(canvas);
    this.canvas = canvas;
  };
  WebGlApplication.prototype.initializeGl = function () {
    var tmp$;
    var glConfig = this.config.gl;
    var alpha;
    var depth;
    var stencil;
    var antialias;
    var premultipliedAlpha;
    var preserveDrawingBuffer;
    var preferLowPowerToHighPerformance;
    var failIfMajorPerformanceCaveat;
    if (alpha === void 0) {
      alpha = true;
    }
    if (depth === void 0) {
      depth = true;
    }
    if (stencil === void 0) {
      stencil = false;
    }
    if (antialias === void 0) {
      antialias = true;
    }
    if (premultipliedAlpha === void 0) {
      premultipliedAlpha = true;
    }
    if (preserveDrawingBuffer === void 0) {
      preserveDrawingBuffer = false;
    }
    if (preferLowPowerToHighPerformance === void 0) {
      preferLowPowerToHighPerformance = false;
    }
    if (failIfMajorPerformanceCaveat === void 0) {
      failIfMajorPerformanceCaveat = false;
    }
    var o = {};
    o['alpha'] = alpha;
    o['depth'] = depth;
    o['stencil'] = stencil;
    o['antialias'] = antialias;
    o['premultipliedAlpha'] = premultipliedAlpha;
    o['preserveDrawingBuffer'] = preserveDrawingBuffer;
    o['preferLowPowerToHighPerformance'] = preferLowPowerToHighPerformance;
    o['failIfMajorPerformanceCaveat'] = failIfMajorPerformanceCaveat;
    var attributes = o;
    attributes.alpha = glConfig.alpha;
    attributes.antialias = glConfig.antialias;
    attributes.depth = glConfig.depth;
    attributes.stencil = glConfig.stencil;
    attributes.premultipliedAlpha = false;
    tmp$ = WebGl_getInstance().getContext_x0zhn6$(this.canvas, attributes);
    if (tmp$ == null) {
      throw new Exception('Browser does not support WebGL');
    }
    var context = tmp$;
    var gl_0 = new WebGl20(context);
    this.bootstrap.set_7ey6m6$(Gl20.Companion, gl_0);
  };
  function WebGlApplication$initializeWindow$lambda(this$WebGlApplication) {
    return function ($receiver) {
      $receiver.set_7ey6m6$(Window.Companion, new WebGlWindowImpl(this$WebGlApplication.canvas, this$WebGlApplication.config.window, $receiver.get_li8edk$(Gl20.Companion)));
    };
  }
  WebGlApplication.prototype.initializeWindow = function () {
    this.bootstrap.on_b913r5$([Gl20.Companion], WebGlApplication$initializeWindow$lambda(this));
  };
  function WebGlApplication$initializeGlState$lambda($receiver) {
    $receiver.set_7ey6m6$(GlState.Companion, new GlState($receiver.get_li8edk$(Gl20.Companion)));
  }
  WebGlApplication.prototype.initializeGlState = function () {
    this.bootstrap.on_b913r5$([Gl20.Companion], WebGlApplication$initializeGlState$lambda);
  };
  function WebGlApplication$initializeTextures$lambda$lambda(this$) {
    return function () {
      return new WebGlTextureLoader(this$.get_li8edk$(Gl20.Companion), this$.get_li8edk$(GlState.Companion));
    };
  }
  function WebGlApplication$initializeTextures$lambda($receiver) {
    $receiver.get_li8edk$(AssetManager.Companion).setLoaderFactory_6wm120$(assets_0.AssetTypes.TEXTURE, WebGlApplication$initializeTextures$lambda$lambda($receiver));
  }
  WebGlApplication.prototype.initializeTextures = function () {
    this.bootstrap.on_b913r5$([AssetManager.Companion, Gl20.Companion, GlState.Companion], WebGlApplication$initializeTextures$lambda);
  };
  function WebGlApplication$initializeComponents$lambda(owner) {
    return component_0.NativeComponentDummy;
  }
  function WebGlApplication$initializeComponents$lambda_0(owner) {
    return component_0.NativeContainerDummy;
  }
  WebGlApplication.prototype.initializeComponents = function () {
    this.bootstrap.set_7ey6m6$(NativeComponent.Companion.FACTORY_KEY, WebGlApplication$initializeComponents$lambda);
    this.bootstrap.set_7ey6m6$(NativeContainer.Companion.FACTORY_KEY, WebGlApplication$initializeComponents$lambda_0);
    this.bootstrap.set_7ey6m6$(TextField.Companion.FACTORY_KEY, Kotlin.getCallableRef('GlTextField', function (owner) {
      return new GlTextField(owner);
    }));
    this.bootstrap.set_7ey6m6$(EditableTextField.Companion.FACTORY_KEY, Kotlin.getCallableRef('GlEditableTextField', function (owner) {
      return new GlEditableTextField(owner);
    }));
    this.bootstrap.set_7ey6m6$(TextInput.Companion.FACTORY_KEY, Kotlin.getCallableRef('GlTextInput', function (owner) {
      return new GlTextInput(owner);
    }));
    this.bootstrap.set_7ey6m6$(TextArea.Companion.FACTORY_KEY, Kotlin.getCallableRef('GlTextArea', function (owner) {
      return new GlTextArea(owner);
    }));
    this.bootstrap.set_7ey6m6$(TextureComponent.Companion.FACTORY_KEY, Kotlin.getCallableRef('GlTextureComponent', function (owner) {
      return new GlTextureComponent(owner);
    }));
    this.bootstrap.set_7ey6m6$(ScrollArea.Companion.FACTORY_KEY, Kotlin.getCallableRef('GlScrollArea', function (owner) {
      return new GlScrollArea(owner);
    }));
    this.bootstrap.set_7ey6m6$(ScrollRect.Companion.FACTORY_KEY, Kotlin.getCallableRef('GlScrollRect', function (owner) {
      return new GlScrollRect(owner);
    }));
    this.bootstrap.set_7ey6m6$(Rect.Companion.FACTORY_KEY, Kotlin.getCallableRef('GlRect', function (owner) {
      return new GlRect(owner);
    }));
  };
  WebGlApplication.prototype.initializeStage = function () {
    this.bootstrap.set_7ey6m6$(Stage.Companion, new GlStageImpl(new OwnedImpl(null, this.bootstrap.injector)));
  };
  WebGlApplication.prototype.initializeSpecialInteractivity = function () {
    fakeFocusMouse(this.bootstrap);
    new JsClickDispatcher(this.bootstrap.injector, this.canvas);
  };
  WebGlApplication.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'WebGlApplication',
    interfaces: [JsApplicationBase]
  };
  function WebGlTexture(gl_0, glState) {
    GlTextureBase.call(this, gl_0, glState);
    this.image = null;
    this.onLoad = null;
    this._objectUrl_0 = null;
    var tmp$;
    this.image = Kotlin.isType(tmp$ = document.createElement('img'), HTMLImageElement) ? tmp$ : Kotlin.throwCCE();
    this.image.onload = WebGlTexture_init$lambda(this);
  }
  WebGlTexture.prototype.width = function () {
    return this.image.naturalWidth;
  };
  WebGlTexture.prototype.height = function () {
    return this.image.naturalHeight;
  };
  WebGlTexture.prototype.arrayBuffer_m26o6c$ = function (value) {
    this.arrayBufferView_c2mund$(new Uint8ClampedArray(value));
  };
  WebGlTexture.prototype.arrayBufferView_c2mund$ = function (value) {
    this.blob_6d4z4r$(new Blob([value]));
  };
  WebGlTexture.prototype.src_61zpoe$ = function (value) {
    this.clear_0();
    this.image.src = value;
  };
  WebGlTexture.prototype.clear_0 = function () {
    var tmp$;
    if (this._objectUrl_0 != null) {
      URL.revokeObjectURL((tmp$ = this._objectUrl_0) != null ? tmp$ : Kotlin.throwNPE());
      this._objectUrl_0 = null;
    }
  };
  WebGlTexture.prototype.blob_6d4z4r$ = function (value) {
    var tmp$;
    this.clear_0();
    this._objectUrl_0 = URL.createObjectURL(value);
    this.image.src = (tmp$ = this._objectUrl_0) != null ? tmp$ : Kotlin.throwNPE();
  };
  function WebGlTexture_init$lambda(this$WebGlTexture) {
    return function (it) {
      var tmp$;
      if (this$WebGlTexture.onLoad != null) {
        ((tmp$ = this$WebGlTexture.onLoad) != null ? tmp$ : Kotlin.throwNPE())();
      }
    };
  }
  WebGlTexture.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'WebGlTexture',
    interfaces: [GlTextureBase]
  };
  function WebGlTextureLoader(gl_0, glState) {
    BasicAction.call(this);
    this.gl_0 = gl_0;
    this.glState_0 = glState;
    this.type_mjfs8t$_0 = assets_0.AssetTypes.TEXTURE;
    this._asset_0 = null;
    this.path_mjfs8t$_0 = '';
    this.estimatedBytesTotal_mjfs8t$_0 = 0;
  }
  Object.defineProperty(WebGlTextureLoader.prototype, 'type', {
    get: function () {
      return this.type_mjfs8t$_0;
    }
  });
  Object.defineProperty(WebGlTextureLoader.prototype, 'path', {
    get: function () {
      return this.path_mjfs8t$_0;
    },
    set: function (path) {
      this.path_mjfs8t$_0 = path;
    }
  });
  Object.defineProperty(WebGlTextureLoader.prototype, 'result', {
    get: function () {
      var tmp$;
      return (tmp$ = this._asset_0) != null ? tmp$ : Kotlin.throwNPE();
    }
  });
  Object.defineProperty(WebGlTextureLoader.prototype, 'estimatedBytesTotal', {
    get: function () {
      return this.estimatedBytesTotal_mjfs8t$_0;
    },
    set: function (estimatedBytesTotal) {
      this.estimatedBytesTotal_mjfs8t$_0 = estimatedBytesTotal;
    }
  });
  Object.defineProperty(WebGlTextureLoader.prototype, 'secondsLoaded', {
    get: function () {
      return this.hasCompleted() ? this.secondsTotal : 0.0;
    }
  });
  Object.defineProperty(WebGlTextureLoader.prototype, 'secondsTotal', {
    get: function () {
      return this.estimatedBytesTotal * core_0.UserInfo.downBpsInv;
    }
  });
  function WebGlTextureLoader$onInvocation$lambda(this$WebGlTextureLoader) {
    return function () {
      this$WebGlTextureLoader.success();
    };
  }
  WebGlTextureLoader.prototype.onInvocation = function () {
    var jsTexture = new WebGlTexture(this.gl_0, this.glState_0);
    jsTexture.onLoad = WebGlTextureLoader$onInvocation$lambda(this);
    jsTexture.src_61zpoe$(this.path);
    this._asset_0 = jsTexture;
  };
  WebGlTextureLoader.prototype.onAborted = function () {
    var tmp$;
    (tmp$ = this._asset_0) != null ? (tmp$.onLoad = null) : null;
    this._asset_0 = null;
  };
  WebGlTextureLoader.prototype.onReset = function () {
    var tmp$;
    (tmp$ = this._asset_0) != null ? (tmp$.onLoad = null) : null;
    this._asset_0 = null;
  };
  WebGlTextureLoader.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'WebGlTextureLoader',
    interfaces: [MutableAssetLoader, BasicAction]
  };
  function WebGlWindowImpl(canvas, config, gl_0) {
    this.canvas_211dkd$_0 = canvas;
    this.gl_211dkd$_0 = gl_0;
    this.isActiveChanged_211dkd$_0 = new Signal1();
    this.isVisibleChanged_211dkd$_0 = new Signal1();
    this.sizeChanged_211dkd$_0 = new Signal3();
    this._width_211dkd$_0 = 0.0;
    this._height_211dkd$_0 = 0.0;
    this.sizeIsDirty_211dkd$_0 = true;
    this._isVisible_211dkd$_0 = true;
    this.hiddenProp_211dkd$_0 = null;
    this.hiddenPropEventMap_211dkd$_0 = hashMapOf([to('hidden', 'visibilitychange'), to('mozHidden', 'mozvisibilitychange'), to('webkitHidden', 'webkitvisibilitychange'), to('msHidden', 'msvisibilitychange')]);
    this.visibilityChangeHandler_211dkd$_0 = WebGlWindowImpl$visibilityChangeHandler$lambda(this);
    this.webGlContextRestoredHandler_211dkd$_0 = WebGlWindowImpl$webGlContextRestoredHandler$lambda(this);
    this.blurHandler_211dkd$_0 = WebGlWindowImpl$blurHandler$lambda(this);
    this.focusHandler_211dkd$_0 = WebGlWindowImpl$focusHandler$lambda(this);
    this.resizeHandler_211dkd$_0 = WebGlWindowImpl$resizeHandler$lambda(this);
    this.setSize_g1oyt7$(this.canvas_211dkd$_0.offsetWidth, this.canvas_211dkd$_0.offsetHeight, true);
    window.addEventListener('resize', this.resizeHandler_211dkd$_0);
    this.canvas_211dkd$_0.addEventListener('webglcontextrestored', this.webGlContextRestoredHandler_211dkd$_0);
    window.addEventListener('blur', this.blurHandler_211dkd$_0);
    window.addEventListener('focus', this.focusHandler_211dkd$_0);
    this.canvas_211dkd$_0.addEventListener('selectstart', WebGlWindowImpl_init$lambda);
    if (config.title.length > 0)
      document.title = config.title;
    this.watchForVisibilityChanges_211dkd$_0();
    this._isActive_211dkd$_0 = true;
    this._clearColor_211dkd$_0 = Color.Companion.CLEAR.copy_7b5o5w$();
    this._continuousRendering_211dkd$_0 = false;
    this._renderRequested_211dkd$_0 = true;
    this._closeRequested_211dkd$_0 = false;
    this._fullScreen_211dkd$_0 = false;
    this._location$delegate = lazy(WebGlWindowImpl$_location$lambda);
  }
  Object.defineProperty(WebGlWindowImpl.prototype, 'isActiveChanged', {
    get: function () {
      return this.isActiveChanged_211dkd$_0;
    }
  });
  Object.defineProperty(WebGlWindowImpl.prototype, 'isVisibleChanged', {
    get: function () {
      return this.isVisibleChanged_211dkd$_0;
    }
  });
  Object.defineProperty(WebGlWindowImpl.prototype, 'sizeChanged', {
    get: function () {
      return this.sizeChanged_211dkd$_0;
    }
  });
  WebGlWindowImpl.prototype.watchForVisibilityChanges_211dkd$_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.hiddenProp_211dkd$_0 = null;
    if ('hidden' in document) {
      this.hiddenProp_211dkd$_0 = 'hidden';
    }
     else if ('mozHidden' in document) {
      this.hiddenProp_211dkd$_0 = 'mozHidden';
    }
     else if ('webkitHidden' in document) {
      this.hiddenProp_211dkd$_0 = 'webkitHidden';
    }
     else if ('msHidden' in document) {
      this.hiddenProp_211dkd$_0 = 'msHidden';
    }
    if (this.hiddenProp_211dkd$_0 != null) {
      tmp$_1 = (tmp$_0 = this.hiddenPropEventMap_211dkd$_0.get_11rb$((tmp$ = this.hiddenProp_211dkd$_0) != null ? tmp$ : Kotlin.throwNPE())) != null ? tmp$_0 : Kotlin.throwNPE();
      tmp$_2 = this.visibilityChangeHandler_211dkd$_0;
      document.addEventListener(tmp$_1, tmp$_2);
      this.visibilityChangeHandler_211dkd$_0(null);
    }
  };
  WebGlWindowImpl.prototype.unwatchVisibilityChanges_211dkd$_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (this.hiddenProp_211dkd$_0 != null) {
      tmp$_1 = (tmp$_0 = this.hiddenPropEventMap_211dkd$_0.get_11rb$((tmp$ = this.hiddenProp_211dkd$_0) != null ? tmp$ : Kotlin.throwNPE())) != null ? tmp$_0 : Kotlin.throwNPE();
      tmp$_2 = this.visibilityChangeHandler_211dkd$_0;
      document.removeEventListener(tmp$_1, tmp$_2);
      this.hiddenProp_211dkd$_0 = null;
    }
  };
  WebGlWindowImpl.prototype.isVisible = function () {
    return this._isVisible_211dkd$_0;
  };
  WebGlWindowImpl.prototype.isVisible_fhv18y$_0 = function (value) {
    if (Kotlin.equals(this._isVisible_211dkd$_0, value))
      return;
    this._isVisible_211dkd$_0 = value;
    this.isVisibleChanged.dispatch_11rb$(value);
  };
  WebGlWindowImpl.prototype.isActive = function () {
    return this._isActive_211dkd$_0;
  };
  WebGlWindowImpl.prototype.isActive_fhv18y$_0 = function (value) {
    if (Kotlin.equals(this._isActive_211dkd$_0, value))
      return;
    this._isActive_211dkd$_0 = value;
    this.isActiveChanged.dispatch_11rb$(value);
  };
  WebGlWindowImpl.prototype.getWidth = function () {
    return this._width_211dkd$_0;
  };
  WebGlWindowImpl.prototype.getHeight = function () {
    return this._height_211dkd$_0;
  };
  WebGlWindowImpl.prototype.setSize_g1oyt7$ = function (width, height, isUserInteraction) {
    if (this._width_211dkd$_0 === width && this._height_211dkd$_0 === height)
      return;
    this._width_211dkd$_0 = width;
    this._height_211dkd$_0 = height;
    if (!isUserInteraction) {
      this.canvas_211dkd$_0.style.width = (this._width_211dkd$_0 | 0).toString() + 'px';
      this.canvas_211dkd$_0.style.height = (this._height_211dkd$_0 | 0).toString() + 'px';
    }
    this.sizeIsDirty_211dkd$_0 = true;
    this.sizeChanged.dispatch_1llc0w$(this._width_211dkd$_0, this._height_211dkd$_0, isUserInteraction);
  };
  Object.defineProperty(WebGlWindowImpl.prototype, 'clearColor', {
    get: function () {
      return this._clearColor_211dkd$_0;
    },
    set: function (value) {
      this._clearColor_211dkd$_0.set_1qghwi$(value);
      this.gl_211dkd$_0.clearColor_1qghwi$(value);
      this.requestRender();
    }
  });
  WebGlWindowImpl.prototype.continuousRendering_6taknv$ = function (value) {
    this._continuousRendering_211dkd$_0 = value;
  };
  WebGlWindowImpl.prototype.shouldRender_6taknv$ = function (clearRenderRequest) {
    var bool = this._continuousRendering_211dkd$_0 || this._renderRequested_211dkd$_0;
    if (clearRenderRequest && this._renderRequested_211dkd$_0)
      this._renderRequested_211dkd$_0 = false;
    return bool;
  };
  WebGlWindowImpl.prototype.requestRender = function () {
    if (this._renderRequested_211dkd$_0)
      return;
    this._renderRequested_211dkd$_0 = true;
  };
  WebGlWindowImpl.prototype.renderBegin = function () {
    if (this.sizeIsDirty_211dkd$_0) {
      this.sizeIsDirty_211dkd$_0 = false;
      this.canvas_211dkd$_0.width = this._width_211dkd$_0 | 0;
      this.canvas_211dkd$_0.height = this._height_211dkd$_0 | 0;
    }
    this.gl_211dkd$_0.clear_za3lpa$(Gl20.Companion.COLOR_BUFFER_BIT | Gl20.Companion.DEPTH_BUFFER_BIT | Gl20.Companion.STENCIL_BUFFER_BIT);
  };
  WebGlWindowImpl.prototype.renderEnd = function () {
  };
  WebGlWindowImpl.prototype.isCloseRequested = function () {
    return this._closeRequested_211dkd$_0;
  };
  WebGlWindowImpl.prototype.requestClose = function () {
    this._closeRequested_211dkd$_0 = true;
  };
  Object.defineProperty(WebGlWindowImpl.prototype, 'fullScreen', {
    get: function () {
      return this._fullScreen_211dkd$_0;
    },
    set: function (value) {
      if (Kotlin.equals(value, this._fullScreen_211dkd$_0))
        return;
      this._fullScreen_211dkd$_0 = value;
    }
  });
  Object.defineProperty(WebGlWindowImpl.prototype, '_location_211dkd$_0', {
    get: function () {
      var $receiver = this._location$delegate;
      new Kotlin.PropertyMetadata('_location');
      return $receiver.value;
    }
  });
  Object.defineProperty(WebGlWindowImpl.prototype, 'location', {
    get: function () {
      return this._location_211dkd$_0;
    }
  });
  WebGlWindowImpl.prototype.dispose = function () {
    this.sizeChanged.dispose();
    window.removeEventListener('resize', this.resizeHandler_211dkd$_0);
    this.canvas_211dkd$_0.removeEventListener('webglcontextlost', this.webGlContextRestoredHandler_211dkd$_0);
    window.removeEventListener('blur', this.blurHandler_211dkd$_0);
    window.removeEventListener('focus', this.focusHandler_211dkd$_0);
    this.unwatchVisibilityChanges_211dkd$_0();
  };
  function WebGlWindowImpl$visibilityChangeHandler$lambda(this$WebGlWindowImpl) {
    return function (event) {
      var tmp$, tmp$_0, tmp$_1;
      tmp$_0 = (tmp$ = this$WebGlWindowImpl.hiddenProp_211dkd$_0) != null ? tmp$ : Kotlin.throwNPE();
      tmp$_1 = document[tmp$_0] != true;
      this$WebGlWindowImpl.isVisible_fhv18y$_0(tmp$_1);
    };
  }
  function WebGlWindowImpl$webGlContextRestoredHandler$lambda(this$WebGlWindowImpl) {
    return function (event) {
      logging_0.Log.info_s8jyv4$('WebGL context lost');
      this$WebGlWindowImpl.requestRender();
    };
  }
  function WebGlWindowImpl$blurHandler$lambda(this$WebGlWindowImpl) {
    return function (event) {
      this$WebGlWindowImpl.isActive_fhv18y$_0(false);
    };
  }
  function WebGlWindowImpl$focusHandler$lambda(this$WebGlWindowImpl) {
    return function (event) {
      this$WebGlWindowImpl.isActive_fhv18y$_0(true);
    };
  }
  function WebGlWindowImpl$resizeHandler$lambda(this$WebGlWindowImpl) {
    return function (event) {
      this$WebGlWindowImpl.setSize_g1oyt7$(this$WebGlWindowImpl.canvas_211dkd$_0.offsetWidth, this$WebGlWindowImpl.canvas_211dkd$_0.offsetHeight, true);
    };
  }
  function WebGlWindowImpl_init$lambda(it) {
    it.preventDefault();
  }
  function WebGlWindowImpl$_location$lambda() {
    return new JsLocation(window.location);
  }
  WebGlWindowImpl.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'WebGlWindowImpl',
    interfaces: [Window]
  };
  function get_clipboardData($receiver) {
    var d = $receiver;
    return d.clipboardData;
  }
  function eventHandler($receiver) {
    var action_0 = new HandlerAction();
    action_0.invoke();
    $receiver.add_wu98u$(action_0);
    return action_0.handler;
  }
  function HandlerAction() {
    BasicAction.call(this);
    this.handler = HandlerAction$handler$lambda(this);
  }
  function HandlerAction$handler$lambda(this$HandlerAction) {
    return function (event) {
      this$HandlerAction.success();
    };
  }
  HandlerAction.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'HandlerAction',
    interfaces: [BasicAction]
  };
  function owns($receiver, element) {
    var p = element;
    while (p != null) {
      if (Kotlin.equals(p, $receiver))
        return true;
      p = p.parentNode;
    }
    return false;
  }
  function findComponentFromDom(target, root_0) {
    if (Kotlin.equals(target, window))
      return inject(root_0, Stage.Companion);
    if (!Kotlin.isType(target, HTMLElement))
      return null;
    var found = {v: null};
    var tmp$, tmp$_0, tmp$_1;
    var openList = Kotlin.isType(tmp$ = $module$AcornUtils.com.acornui.collection.cyclicListPool.obtain(), $module$AcornUtils.com.acornui.collection.CyclicList) ? tmp$ : Kotlin.throwCCE();
    openList.add_11rb$(root_0);
    loop: while (true) {
      if (!!openList.isEmpty())
        break;
      var next = openList.shift();
      var callback$result;
      var tmp$_2, tmp$_3;
      var native = Kotlin.isType(tmp$_3 = (Kotlin.isType(tmp$_2 = next, UiComponent) ? tmp$_2 : Kotlin.throwCCE()).native, DomComponent_0) ? tmp$_3 : Kotlin.throwCCE();
      var element = native.element;
      if (owns(element, target)) {
        found.v = next;
        callback$result = TreeWalk.ISOLATE;
      }
       else {
        callback$result = TreeWalk.CONTINUE;
      }
      var treeWalk = callback$result;
      if (Kotlin.equals(treeWalk, $module$AcornUiCore.com.acornui.core.TreeWalk.HALT))
        break loop;
      else if (Kotlin.equals(treeWalk, $module$AcornUiCore.com.acornui.core.TreeWalk.SKIP))
        continue loop;
      else if (Kotlin.equals(treeWalk, $module$AcornUiCore.com.acornui.core.TreeWalk.ISOLATE))
        openList.clear();
      (tmp$_1 = Kotlin.isType(tmp$_0 = next, $module$AcornUiCore.com.acornui.core.Parent) ? tmp$_0 : null) != null ? tmp$_1.iterateChildren_9z398f$($module$AcornUiCore.com.acornui.core.childWalkLevelOrder$f(openList), false) : null;
    }
    $module$AcornUtils.com.acornui.collection.cyclicListPool.free_11rb$(openList);
    return found.v;
  }
  function initializeUserInfo() {
    var $receiver = core_0.UserInfo;
    $receiver.isTouchDevice = 'ontouchstart' in window || !!navigator.maxTouchPoints;
    $receiver.isBrowser = true;
    var check = false;
    (function (a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
        check = true;
    }(navigator.userAgent || (navigator.vendor || window.opera)));
    $receiver.isMobile = check;
    var ua = window.navigator.userAgent;
    if (indexOf(ua, 'MSIE ') >= 0) {
      $receiver.isIe = true;
    }
     else if (indexOf(ua, 'Trident/') >= 0) {
      $receiver.isIe = true;
    }
    logging_0.Log.info_s8jyv4$('UserInfo ' + $receiver);
  }
  function leftDescendant($receiver) {
    var tmp$;
    if ($receiver.hasChildNodes()) {
      return leftDescendant((tmp$ = $receiver.childNodes[0]) != null ? tmp$ : Kotlin.throwNPE());
    }
     else {
      return $receiver;
    }
  }
  function rightDescendant($receiver) {
    var tmp$;
    if ($receiver.hasChildNodes()) {
      return rightDescendant((tmp$ = $receiver.childNodes[$receiver.childNodes.length - 1 | 0]) != null ? tmp$ : Kotlin.throwNPE());
    }
     else {
      return $receiver;
    }
  }
  function insertAfter($receiver, node, child) {
    if (child == null)
      $receiver.appendChild(node);
    else
      $receiver.insertBefore(node, child.nextSibling);
    return node;
  }
  function walkChildrenBfs($receiver, callback) {
    walkChildrenBfs_0($receiver, callback, false);
  }
  function walkChildrenBfs_0($receiver, callback, reversed) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var openList = Kotlin.isType(tmp$ = collection_0.cyclicListPool.obtain(), CyclicList) ? tmp$ : Kotlin.throwCCE();
    openList.add_11rb$($receiver);
    loop: while (true) {
      if (!!openList.isEmpty())
        break;
      var next = openList.shift();
      var treeWalk = callback(next);
      if (Kotlin.equals(treeWalk, TreeWalk.HALT))
        return;
      else if (Kotlin.equals(treeWalk, TreeWalk.SKIP))
        continue loop;
      else if (Kotlin.equals(treeWalk, TreeWalk.ISOLATE))
        openList.clear();
      if (reversed) {
        tmp$_0 = downTo(next.childNodes.length - 1 | 0, 0).iterator();
        while (tmp$_0.hasNext()) {
          var i = tmp$_0.next();
          var it = (tmp$_1 = next.childNodes[i]) != null ? tmp$_1 : Kotlin.throwNPE();
          openList.add_11rb$(it);
        }
      }
       else {
        tmp$_2 = next.childNodes.length - 1 | 0;
        for (var i_0 = 0; i_0 <= tmp$_2; i_0++) {
          var it_0 = (tmp$_3 = next.childNodes[i_0]) != null ? tmp$_3 : Kotlin.throwNPE();
          openList.add_11rb$(it_0);
        }
      }
    }
    collection_0.cyclicListPool.free_11rb$(openList);
  }
  var mutationObserversSupported;
  function observe($receiver, target, options) {
    var d = $receiver;
    d.observe(target, options);
  }
  function mutationObserverOptions(childList, attributes, characterData, subtree, attributeOldValue, characterDataOldValue, attributeFilter) {
    if (childList === void 0)
      childList = false;
    if (attributes === void 0)
      attributes = false;
    if (characterData === void 0)
      characterData = false;
    if (subtree === void 0)
      subtree = false;
    if (attributeOldValue === void 0)
      attributeOldValue = false;
    if (characterDataOldValue === void 0)
      characterDataOldValue = false;
    if (attributeFilter === void 0)
      attributeFilter = null;
    var initOptions = {};
    initOptions.childList = childList;
    initOptions.attributes = attributes;
    initOptions.characterData = characterData;
    initOptions.subtree = subtree;
    initOptions.attributeOldValue = attributeOldValue;
    initOptions.characterDataOldValue = characterDataOldValue;
    if (attributeFilter != null)
      initOptions.attributeFilter = attributeFilter;
    return initOptions;
  }
  function unsafeCast($receiver) {
    var tmp$;
    return (tmp$ = $receiver) == null || Kotlin.isType(tmp$, Any) ? tmp$ : Kotlin.throwCCE();
  }
  function getSelection($receiver) {
    var d = $receiver;
    return d.getSelection();
  }
  function getSelection_0($receiver) {
    var d = $receiver;
    return d.getSelection();
  }
  function WebGl() {
    WebGl_instance = this;
  }
  WebGl.prototype.getContext_x0zhn6$ = function (canvas, attributes) {
    if (attributes === void 0) {
      var alpha;
      var depth;
      var stencil;
      var antialias;
      var premultipliedAlpha;
      var preserveDrawingBuffer;
      var preferLowPowerToHighPerformance;
      var failIfMajorPerformanceCaveat;
      if (alpha === void 0) {
        alpha = true;
      }
      if (depth === void 0) {
        depth = true;
      }
      if (stencil === void 0) {
        stencil = false;
      }
      if (antialias === void 0) {
        antialias = true;
      }
      if (premultipliedAlpha === void 0) {
        premultipliedAlpha = true;
      }
      if (preserveDrawingBuffer === void 0) {
        preserveDrawingBuffer = false;
      }
      if (preferLowPowerToHighPerformance === void 0) {
        preferLowPowerToHighPerformance = false;
      }
      if (failIfMajorPerformanceCaveat === void 0) {
        failIfMajorPerformanceCaveat = false;
      }
      var o = {};
      o['alpha'] = alpha;
      o['depth'] = depth;
      o['stencil'] = stencil;
      o['antialias'] = antialias;
      o['premultipliedAlpha'] = premultipliedAlpha;
      o['preserveDrawingBuffer'] = preserveDrawingBuffer;
      o['preferLowPowerToHighPerformance'] = preferLowPowerToHighPerformance;
      o['failIfMajorPerformanceCaveat'] = failIfMajorPerformanceCaveat;
      attributes = o;
    }
    var tmp$, tmp$_0;
    var names = ['webgl', 'experimental-webgl', 'moz-webgl', 'webkit-webgl', 'webkit-3d'];
    tmp$ = get_lastIndex_0(names);
    for (var i = 0; i <= tmp$; i++) {
      var context = canvas.getContext(names[i], attributes);
      if (context != null) {
        return Kotlin.isType(tmp$_0 = context, WebGLRenderingContext) ? tmp$_0 : Kotlin.throwCCE();
      }
    }
    return null;
  };
  WebGl.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'WebGl',
    interfaces: []
  };
  var WebGl_instance = null;
  function WebGl_getInstance() {
    if (WebGl_instance === null) {
      new WebGl();
    }
    return WebGl_instance;
  }
  function JsClickDispatcher(injector, rootElement) {
    this.injector_namgsf$_0 = injector;
    this.rootElement_0 = rootElement;
    this.interactivity_0 = inject(this, InteractivityManager.Companion);
    this.clickEvent_0 = new ClickEvent();
    this.clickHandler_0 = JsClickDispatcher$clickHandler$lambda(this);
    this.rootElement_0.addEventListener('click', this.clickHandler_0, true);
  }
  Object.defineProperty(JsClickDispatcher.prototype, 'injector', {
    get: function () {
      return this.injector_namgsf$_0;
    }
  });
  JsClickDispatcher.prototype.dispose = function () {
    this.rootElement_0.removeEventListener('click', this.clickHandler_0, true);
  };
  JsClickDispatcher.prototype.getClickType_0 = function (button) {
    var tmp$;
    if (Kotlin.equals(button, WhichButton.LEFT))
      tmp$ = ClickEvent.Companion.LEFT_CLICK;
    else if (Kotlin.equals(button, WhichButton.RIGHT))
      tmp$ = ClickEvent.Companion.RIGHT_CLICK;
    else if (Kotlin.equals(button, WhichButton.MIDDLE))
      tmp$ = ClickEvent.Companion.MIDDLE_CLICK;
    else if (Kotlin.equals(button, WhichButton.BACK))
      tmp$ = ClickEvent.Companion.BACK_CLICK;
    else if (Kotlin.equals(button, WhichButton.FORWARD))
      tmp$ = ClickEvent.Companion.FORWARD_CLICK;
    else
      throw new Exception('Unknown click type.');
    return tmp$;
  };
  JsClickDispatcher.prototype.getWhichButton_0 = function (i) {
    if (i === -1)
      return WhichButton.UNKNOWN;
    else if (i === 0)
      return WhichButton.LEFT;
    else if (i === 1)
      return WhichButton.MIDDLE;
    else if (i === 2)
      return WhichButton.RIGHT;
    else if (i === 3)
      return WhichButton.BACK;
    else if (i === 4)
      return WhichButton.FORWARD;
    else
      return WhichButton.UNKNOWN;
  };
  function JsClickDispatcher$clickHandler$lambda(this$JsClickDispatcher) {
    return function (it) {
      var tmp$;
      Kotlin.isType(tmp$ = it, MouseEvent) ? tmp$ : Kotlin.throwCCE();
      this$JsClickDispatcher.clickEvent_0.clear();
      var $receiver = this$JsClickDispatcher.clickEvent_0;
      var this$JsClickDispatcher_0 = this$JsClickDispatcher;
      $receiver.timestamp = Kotlin.numberToLong(it.timeStamp);
      $receiver.canvasX = it.pageX - this$JsClickDispatcher_0.rootElement_0.offsetLeft;
      $receiver.canvasY = it.pageY - this$JsClickDispatcher_0.rootElement_0.offsetTop;
      $receiver.button = this$JsClickDispatcher_0.getWhichButton_0(it.button);
      $receiver.type = this$JsClickDispatcher_0.getClickType_0($receiver.button);
      this$JsClickDispatcher_0.clickEvent_0.count = it.detail;
      this$JsClickDispatcher.interactivity_0.dispatch_qts5q5$(this$JsClickDispatcher.clickEvent_0.canvasX, this$JsClickDispatcher.clickEvent_0.canvasY, this$JsClickDispatcher.clickEvent_0);
      kotlin_0.Unit;
    };
  }
  JsClickDispatcher.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsClickDispatcher',
    interfaces: [Disposable, Scoped]
  };
  function JsKeyInput(root_0) {
    this.root_0 = root_0;
    this.keyDown_z6vhyz$_0 = new Signal1();
    this.keyUp_z6vhyz$_0 = new Signal1();
    this.char_z6vhyz$_0 = new Signal1();
    this.keyEvent_0 = new KeyInteraction();
    this.charEvent_0 = new CharInteraction();
    this.downMap_0 = new DualHashMap();
    this.keyDownHandler_0 = JsKeyInput$keyDownHandler$lambda(this);
    this.keyUpHandler_0 = JsKeyInput$keyUpHandler$lambda(this);
    this.keyPressHandler_0 = JsKeyInput$keyPressHandler$lambda(this);
    this.rootBlurHandler_0 = JsKeyInput$rootBlurHandler$lambda(this);
    window.addEventListener('keydown', this.keyDownHandler_0);
    window.addEventListener('keyup', this.keyUpHandler_0);
    window.addEventListener('keypress', this.keyPressHandler_0);
    window.addEventListener('blur', this.rootBlurHandler_0);
  }
  Object.defineProperty(JsKeyInput.prototype, 'keyDown', {
    get: function () {
      return this.keyDown_z6vhyz$_0;
    }
  });
  Object.defineProperty(JsKeyInput.prototype, 'keyUp', {
    get: function () {
      return this.keyUp_z6vhyz$_0;
    }
  });
  Object.defineProperty(JsKeyInput.prototype, 'char', {
    get: function () {
      return this.char_z6vhyz$_0;
    }
  });
  JsKeyInput.prototype.populateKeyEvent_0 = function (jsEvent) {
    this.keyEvent_0.timestamp = Kotlin.numberToLong(jsEvent.timeStamp);
    this.keyEvent_0.location = this.locationFromInt_za3lpa$(jsEvent.location);
    this.keyEvent_0.keyCode = jsEvent.keyCode;
    this.keyEvent_0.altKey = jsEvent.altKey;
    this.keyEvent_0.ctrlKey = jsEvent.ctrlKey;
    this.keyEvent_0.metaKey = jsEvent.metaKey;
    this.keyEvent_0.shiftKey = jsEvent.shiftKey;
    this.keyEvent_0.isRepeat = jsEvent.repeat;
  };
  JsKeyInput.prototype.keyIsDown_3iojlf$$default = function (keyCode, location) {
    var tmp$, tmp$_0, tmp$_1;
    if (location === KeyLocation.UNKNOWN) {
      return (tmp$_0 = (tmp$ = this.downMap_0.get_11rb$(keyCode)) != null ? !tmp$.isEmpty() : null) != null ? tmp$_0 : false;
    }
     else {
      return (tmp$_1 = this.downMap_0.get_xwzc9p$(keyCode, location)) != null ? tmp$_1 : false;
    }
  };
  JsKeyInput.prototype.dispose = function () {
    window.removeEventListener('keydown', this.keyDownHandler_0);
    window.removeEventListener('keyup', this.keyUpHandler_0);
    window.removeEventListener('keypress', this.keyPressHandler_0);
    window.removeEventListener('blur', this.rootBlurHandler_0);
    this.keyDown.dispose();
    this.keyUp.dispose();
    this.char.dispose();
  };
  JsKeyInput.prototype.locationFromInt_za3lpa$ = function (location) {
    if (location === 0)
      return KeyLocation.STANDARD;
    else if (location === 1)
      return KeyLocation.LEFT;
    else if (location === 2)
      return KeyLocation.RIGHT;
    else if (location === 3)
      return KeyLocation.NUMBER_PAD;
    else
      return KeyLocation.UNKNOWN;
  };
  function JsKeyInput$keyDownHandler$lambda(this$JsKeyInput) {
    return function (jsEvent) {
      var tmp$;
      Kotlin.isType(tmp$ = jsEvent, KeyboardEvent) ? tmp$ : Kotlin.throwCCE();
      this$JsKeyInput.keyEvent_0.clear();
      this$JsKeyInput.populateKeyEvent_0(jsEvent);
      if (!jsEvent.repeat) {
        this$JsKeyInput.downMap_0.put_1llc0w$(this$JsKeyInput.keyEvent_0.keyCode, this$JsKeyInput.keyEvent_0.location, true);
      }
      this$JsKeyInput.keyDown.dispatch_11rb$(this$JsKeyInput.keyEvent_0);
      if (this$JsKeyInput.keyEvent_0.defaultPrevented())
        jsEvent.preventDefault();
    };
  }
  function JsKeyInput$keyUpHandler$lambda(this$JsKeyInput) {
    return function (jsEvent) {
      var tmp$, tmp$_0;
      Kotlin.isType(tmp$ = jsEvent, KeyboardEvent) ? tmp$ : Kotlin.throwCCE();
      this$JsKeyInput.keyEvent_0.clear();
      this$JsKeyInput.populateKeyEvent_0(jsEvent);
      (tmp$_0 = this$JsKeyInput.downMap_0.get_11rb$(this$JsKeyInput.keyEvent_0.keyCode)) != null ? tmp$_0.clear() : null;
      this$JsKeyInput.keyUp.dispatch_11rb$(this$JsKeyInput.keyEvent_0);
      if (this$JsKeyInput.keyEvent_0.defaultPrevented())
        jsEvent.preventDefault();
    };
  }
  function JsKeyInput$keyPressHandler$lambda(this$JsKeyInput) {
    return function (jsEvent) {
      var tmp$;
      Kotlin.isType(tmp$ = jsEvent, KeyboardEvent) ? tmp$ : Kotlin.throwCCE();
      this$JsKeyInput.charEvent_0.clear();
      this$JsKeyInput.charEvent_0.char = Kotlin.unboxChar(Kotlin.toChar(jsEvent.charCode));
      this$JsKeyInput.char.dispatch_11rb$(this$JsKeyInput.charEvent_0);
      if (this$JsKeyInput.charEvent_0.defaultPrevented())
        jsEvent.preventDefault();
    };
  }
  function JsKeyInput$rootBlurHandler$lambda(this$JsKeyInput) {
    return function (jsEvent) {
      this$JsKeyInput.downMap_0.clear();
    };
  }
  JsKeyInput.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsKeyInput',
    interfaces: [KeyInput]
  };
  function JsMouseInput(root_0) {
    JsMouseInput$Companion_getInstance();
    this.root_0 = root_0;
    this.touchStart_tvaoht$_0 = new Signal1();
    this.touchEnd_tvaoht$_0 = new Signal1();
    this.touchMove_tvaoht$_0 = new Signal1();
    this.touchCancel_tvaoht$_0 = new Signal1();
    this.mouseDown_tvaoht$_0 = new Signal1();
    this.mouseUp_tvaoht$_0 = new Signal1();
    this.mouseMove_tvaoht$_0 = new Signal1();
    this.mouseWheel_tvaoht$_0 = new Signal1();
    this.overCanvasChanged_tvaoht$_0 = new Signal1();
    this.touchEvent_0 = new TouchInteraction();
    this.mouseEvent_0 = new MouseInteraction();
    this.wheelEvent_0 = new WheelInteraction();
    this._overCanvas_0 = false;
    this._canvasX_0 = 0.0;
    this._canvasY_0 = 0.0;
    this.scrollSpeed = 24.0;
    this.mouseEnterHandler_0 = JsMouseInput$mouseEnterHandler$lambda(this);
    this.mouseLeaveHandler_0 = JsMouseInput$mouseLeaveHandler$lambda(this);
    this.touchStartHandler_0 = JsMouseInput$touchStartHandler$lambda(this);
    this.touchMoveHandler_0 = JsMouseInput$touchMoveHandler$lambda(this);
    this.touchEndHandler_0 = JsMouseInput$touchEndHandler$lambda(this);
    this.touchCancelHandler_0 = JsMouseInput$touchCancelHandler$lambda(this);
    this.mouseMoveHandler_0 = JsMouseInput$mouseMoveHandler$lambda(this);
    this.mouseDownHandler_0 = JsMouseInput$mouseDownHandler$lambda(this);
    this.mouseUpHandler_0 = JsMouseInput$mouseUpHandler$lambda(this);
    this.mouseWheelHandler_0 = JsMouseInput$mouseWheelHandler$lambda(this);
    window.addEventListener('touchstart', this.touchStartHandler_0, true);
    window.addEventListener('touchend', this.touchEndHandler_0, true);
    window.addEventListener('touchmove', this.touchMoveHandler_0, true);
    window.addEventListener('touchcancel', this.touchCancelHandler_0, true);
    this.root_0.addEventListener('touchleave', this.mouseLeaveHandler_0, true);
    window.addEventListener('touchleave', this.mouseLeaveHandler_0, true);
    this.root_0.addEventListener('mouseenter', this.mouseEnterHandler_0, true);
    window.addEventListener('mouseleave', this.mouseLeaveHandler_0, true);
    this.root_0.addEventListener('mouseleave', this.mouseLeaveHandler_0, true);
    window.addEventListener('mousemove', this.mouseMoveHandler_0, true);
    window.addEventListener('mousedown', this.mouseDownHandler_0, true);
    window.addEventListener('mouseup', this.mouseUpHandler_0, true);
    this.root_0.addEventListener('wheel', this.mouseWheelHandler_0, true);
  }
  Object.defineProperty(JsMouseInput.prototype, 'touchStart', {
    get: function () {
      return this.touchStart_tvaoht$_0;
    }
  });
  Object.defineProperty(JsMouseInput.prototype, 'touchEnd', {
    get: function () {
      return this.touchEnd_tvaoht$_0;
    }
  });
  Object.defineProperty(JsMouseInput.prototype, 'touchMove', {
    get: function () {
      return this.touchMove_tvaoht$_0;
    }
  });
  Object.defineProperty(JsMouseInput.prototype, 'touchCancel', {
    get: function () {
      return this.touchCancel_tvaoht$_0;
    }
  });
  Object.defineProperty(JsMouseInput.prototype, 'mouseDown', {
    get: function () {
      return this.mouseDown_tvaoht$_0;
    }
  });
  Object.defineProperty(JsMouseInput.prototype, 'mouseUp', {
    get: function () {
      return this.mouseUp_tvaoht$_0;
    }
  });
  Object.defineProperty(JsMouseInput.prototype, 'mouseMove', {
    get: function () {
      return this.mouseMove_tvaoht$_0;
    }
  });
  Object.defineProperty(JsMouseInput.prototype, 'mouseWheel', {
    get: function () {
      return this.mouseWheel_tvaoht$_0;
    }
  });
  Object.defineProperty(JsMouseInput.prototype, 'overCanvasChanged', {
    get: function () {
      return this.overCanvasChanged_tvaoht$_0;
    }
  });
  JsMouseInput.prototype.canvasX = function () {
    return this._canvasX_0;
  };
  JsMouseInput.prototype.canvasY = function () {
    return this._canvasY_0;
  };
  JsMouseInput.prototype.overCanvas = function () {
    return this._overCanvas_0;
  };
  JsMouseInput.prototype.overCanvas_0 = function (value) {
    if (Kotlin.equals(this._overCanvas_0, value))
      return;
    this._overCanvas_0 = value;
    this.overCanvasChanged.dispatch_11rb$(value);
  };
  JsMouseInput.prototype.populateMouseEvent_0 = function (jsEvent) {
    this.mouseEvent_0.clear();
    this.mouseEvent_0.timestamp = Kotlin.numberToLong(jsEvent.timeStamp);
    this.mouseEvent_0.canvasX = jsEvent.clientX - this.root_0.offsetLeft;
    this.mouseEvent_0.canvasY = jsEvent.clientY - this.root_0.offsetTop;
    this.mouseEvent_0.button = JsMouseInput$Companion_getInstance().getWhichButton_za3lpa$(jsEvent.button);
    this._canvasX_0 = this.mouseEvent_0.canvasX;
    this._canvasY_0 = this.mouseEvent_0.canvasY;
  };
  JsMouseInput.prototype.populateTouchEvent_0 = function (jsEvent) {
    this.touchEvent_0.clear();
    this.set_0(this.touchEvent_0, jsEvent);
    var firstTouch = first(this.touchEvent_0.changedTouches);
    this._canvasX_0 = firstTouch.canvasX;
    this._canvasY_0 = firstTouch.canvasY;
  };
  JsMouseInput.prototype.set_0 = function ($receiver, jsEvent) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    $receiver.timestamp = Kotlin.numberToLong(jsEvent.timeStamp);
    $receiver.clearTouches();
    tmp$ = jsEvent.targetTouches;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var targetTouch = tmp$[tmp$_0];
      var t = Touch.Companion.obtain();
      this.set_1(t, targetTouch);
      $receiver.targetTouches.add_11rb$(t);
    }
    tmp$_1 = jsEvent.changedTouches;
    for (tmp$_2 = 0; tmp$_2 !== tmp$_1.length; ++tmp$_2) {
      var changedTouch = tmp$_1[tmp$_2];
      var t_0 = Touch.Companion.obtain();
      this.set_1(t_0, changedTouch);
      $receiver.changedTouches.add_11rb$(t_0);
    }
    tmp$_3 = jsEvent.touches;
    for (tmp$_4 = 0; tmp$_4 !== tmp$_3.length; ++tmp$_4) {
      var touch = tmp$_3[tmp$_4];
      var t_1 = Touch.Companion.obtain();
      this.set_1(t_1, touch);
      $receiver.touches.add_11rb$(t_1);
    }
    var tmp$_5 = jsEvent.metaKey;
    if (tmp$_5) {
      tmp$_5 = !(jsEvent.touches.length === 0);
    }
    if (tmp$_5) {
      var t_2 = Touch.Companion.obtain();
      this.set_1(t_2, first_0(jsEvent.touches));
      t_2.canvasX = t_2.canvasX + 50.0;
      $receiver.touches.add_11rb$(t_2);
    }
  };
  JsMouseInput.prototype.set_1 = function ($receiver, jsTouch) {
    $receiver.canvasX = jsTouch.clientX - this.root_0.offsetLeft;
    $receiver.canvasY = jsTouch.clientY - this.root_0.offsetTop;
  };
  JsMouseInput.prototype.dispose = function () {
    this.touchStart.dispose();
    this.touchEnd.dispose();
    this.touchMove.dispose();
    this.touchCancel.dispose();
    this.mouseDown.dispose();
    this.mouseUp.dispose();
    this.mouseMove.dispose();
    this.mouseWheel.dispose();
    this.overCanvasChanged.dispose();
    window.removeEventListener('touchstart', this.touchStartHandler_0, true);
    window.removeEventListener('touchend', this.touchEndHandler_0, true);
    window.removeEventListener('touchmove', this.touchMoveHandler_0, true);
    this.root_0.removeEventListener('touchleave', this.mouseLeaveHandler_0, true);
    window.removeEventListener('touchleave', this.mouseLeaveHandler_0, true);
    this.root_0.removeEventListener('mouseenter', this.mouseEnterHandler_0, true);
    this.root_0.removeEventListener('mouseleave', this.mouseLeaveHandler_0, true);
    window.removeEventListener('mousemove', this.mouseMoveHandler_0, true);
    window.removeEventListener('mousedown', this.mouseDownHandler_0, true);
    window.removeEventListener('mouseup', this.mouseUpHandler_0, true);
    this.root_0.removeEventListener('wheel', this.mouseWheelHandler_0, true);
  };
  function JsMouseInput$Companion() {
    JsMouseInput$Companion_instance = this;
  }
  JsMouseInput$Companion.prototype.getWhichButton_za3lpa$ = function (i) {
    if (i === -1)
      return WhichButton.UNKNOWN;
    else if (i === 0)
      return WhichButton.LEFT;
    else if (i === 1)
      return WhichButton.MIDDLE;
    else if (i === 2)
      return WhichButton.RIGHT;
    else if (i === 3)
      return WhichButton.BACK;
    else if (i === 4)
      return WhichButton.FORWARD;
    else
      return WhichButton.UNKNOWN;
  };
  JsMouseInput$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JsMouseInput$Companion_instance = null;
  function JsMouseInput$Companion_getInstance() {
    if (JsMouseInput$Companion_instance === null) {
      new JsMouseInput$Companion();
    }
    return JsMouseInput$Companion_instance;
  }
  function JsMouseInput$mouseEnterHandler$lambda(this$JsMouseInput) {
    return function (jsEvent) {
      this$JsMouseInput.overCanvas_0(true);
    };
  }
  function JsMouseInput$mouseLeaveHandler$lambda(this$JsMouseInput) {
    return function (jsEvent) {
      this$JsMouseInput.overCanvas_0(false);
    };
  }
  function JsMouseInput$touchStartHandler$lambda(this$JsMouseInput) {
    return function (jsEvent) {
      var tmp$, tmp$_0;
      tmp$_0 = Kotlin.isType(tmp$ = jsEvent, TouchEvent) ? tmp$ : Kotlin.throwCCE();
      this$JsMouseInput.populateTouchEvent_0(tmp$_0);
      this$JsMouseInput.touchStart.dispatch_11rb$(this$JsMouseInput.touchEvent_0);
      if (this$JsMouseInput.touchEvent_0.defaultPrevented())
        jsEvent.preventDefault();
    };
  }
  function JsMouseInput$touchMoveHandler$lambda(this$JsMouseInput) {
    return function (jsEvent) {
      var tmp$, tmp$_0;
      tmp$_0 = Kotlin.isType(tmp$ = jsEvent, TouchEvent) ? tmp$ : Kotlin.throwCCE();
      this$JsMouseInput.populateTouchEvent_0(tmp$_0);
      this$JsMouseInput.touchMove.dispatch_11rb$(this$JsMouseInput.touchEvent_0);
      if (this$JsMouseInput.touchEvent_0.defaultPrevented())
        jsEvent.preventDefault();
    };
  }
  function JsMouseInput$touchEndHandler$lambda(this$JsMouseInput) {
    return function (jsEvent) {
      var tmp$, tmp$_0;
      tmp$_0 = Kotlin.isType(tmp$ = jsEvent, TouchEvent) ? tmp$ : Kotlin.throwCCE();
      this$JsMouseInput.populateTouchEvent_0(tmp$_0);
      this$JsMouseInput.touchEnd.dispatch_11rb$(this$JsMouseInput.touchEvent_0);
      if (this$JsMouseInput.touchEvent_0.defaultPrevented())
        jsEvent.preventDefault();
    };
  }
  function JsMouseInput$touchCancelHandler$lambda(this$JsMouseInput) {
    return function (jsEvent) {
      var tmp$, tmp$_0;
      tmp$_0 = Kotlin.isType(tmp$ = jsEvent, TouchEvent) ? tmp$ : Kotlin.throwCCE();
      this$JsMouseInput.populateTouchEvent_0(tmp$_0);
      this$JsMouseInput.touchCancel.dispatch_11rb$(this$JsMouseInput.touchEvent_0);
      if (this$JsMouseInput.touchEvent_0.defaultPrevented())
        jsEvent.preventDefault();
    };
  }
  function JsMouseInput$mouseMoveHandler$lambda(this$JsMouseInput) {
    return function (jsEvent) {
      var tmp$, tmp$_0;
      tmp$_0 = Kotlin.isType(tmp$ = jsEvent, MouseEvent) ? tmp$ : Kotlin.throwCCE();
      this$JsMouseInput.populateMouseEvent_0(tmp$_0);
      this$JsMouseInput.mouseEvent_0.button = WhichButton.UNKNOWN;
      this$JsMouseInput.mouseMove.dispatch_11rb$(this$JsMouseInput.mouseEvent_0);
      if (this$JsMouseInput.mouseEvent_0.defaultPrevented())
        jsEvent.preventDefault();
    };
  }
  function JsMouseInput$mouseDownHandler$lambda(this$JsMouseInput) {
    return function (jsEvent) {
      var tmp$, tmp$_0;
      tmp$_0 = Kotlin.isType(tmp$ = jsEvent, MouseEvent) ? tmp$ : Kotlin.throwCCE();
      this$JsMouseInput.populateMouseEvent_0(tmp$_0);
      this$JsMouseInput.mouseDown.dispatch_11rb$(this$JsMouseInput.mouseEvent_0);
      if (this$JsMouseInput.mouseEvent_0.defaultPrevented())
        jsEvent.preventDefault();
    };
  }
  function JsMouseInput$mouseUpHandler$lambda(this$JsMouseInput) {
    return function (jsEvent) {
      var tmp$, tmp$_0;
      tmp$_0 = Kotlin.isType(tmp$ = jsEvent, MouseEvent) ? tmp$ : Kotlin.throwCCE();
      this$JsMouseInput.populateMouseEvent_0(tmp$_0);
      this$JsMouseInput.mouseUp.dispatch_11rb$(this$JsMouseInput.mouseEvent_0);
      if (this$JsMouseInput.mouseEvent_0.defaultPrevented())
        jsEvent.preventDefault();
    };
  }
  function JsMouseInput$mouseWheelHandler$lambda(this$JsMouseInput) {
    return function (jsEvent) {
      if (Kotlin.isType(jsEvent, WheelEvent)) {
        this$JsMouseInput.wheelEvent_0.clear();
        this$JsMouseInput.wheelEvent_0.timestamp = Kotlin.numberToLong(jsEvent.timeStamp);
        this$JsMouseInput.wheelEvent_0.canvasX = jsEvent.pageX - this$JsMouseInput.root_0.offsetLeft;
        this$JsMouseInput.wheelEvent_0.canvasY = jsEvent.pageY - this$JsMouseInput.root_0.offsetTop;
        this$JsMouseInput.wheelEvent_0.button = JsMouseInput$Companion_getInstance().getWhichButton_za3lpa$(jsEvent.button);
        this$JsMouseInput._canvasX_0 = this$JsMouseInput.wheelEvent_0.canvasX;
        this$JsMouseInput._canvasY_0 = this$JsMouseInput.wheelEvent_0.canvasY;
        this$JsMouseInput.wheelEvent_0.deltaX = this$JsMouseInput.scrollSpeed * (jsEvent.deltaX > 0.0 ? 1.0 : -1.0);
        this$JsMouseInput.wheelEvent_0.deltaY = this$JsMouseInput.scrollSpeed * (jsEvent.deltaY > 0.0 ? 1.0 : -1.0);
        this$JsMouseInput.wheelEvent_0.deltaZ = this$JsMouseInput.scrollSpeed * (jsEvent.deltaZ > 0.0 ? 1.0 : -1.0);
        this$JsMouseInput.mouseWheel.dispatch_11rb$(this$JsMouseInput.wheelEvent_0);
      }
    };
  }
  JsMouseInput.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsMouseInput',
    interfaces: [MouseInput]
  };
  function JsBufferFactory() {
  }
  JsBufferFactory.prototype.byteBuffer_za3lpa$ = function (capacity) {
    return new JsByteBuffer(new Uint8Array(capacity));
  };
  JsBufferFactory.prototype.shortBuffer_za3lpa$ = function (capacity) {
    return new JsShortBuffer(new Uint16Array(capacity));
  };
  JsBufferFactory.prototype.intBuffer_za3lpa$ = function (capacity) {
    return new JsIntBuffer(new Uint32Array(capacity));
  };
  JsBufferFactory.prototype.floatBuffer_za3lpa$ = function (capacity) {
    return new JsFloatBuffer(new Float32Array(capacity));
  };
  JsBufferFactory.prototype.doubleBuffer_za3lpa$ = function (capacity) {
    return new JsDoubleBuffer(new Float64Array(capacity));
  };
  JsBufferFactory.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsBufferFactory',
    interfaces: [BufferFactory]
  };
  function JsByteBuffer(buffer) {
    BufferBase.call(this, buffer.length);
    this.buffer_0 = buffer;
  }
  JsByteBuffer.prototype.get = function () {
    var tmp$;
    return this.buffer_0[tmp$ = this._position, this._position = tmp$ + 1 | 0, tmp$];
  };
  JsByteBuffer.prototype.put_11rb$ = function (value) {
    var tmp$;
    if (this._position === this._limit) {
      this._limit = this._limit + 1 | 0;
    }
    this.buffer_0[tmp$ = this._position, this._position = tmp$ + 1 | 0, tmp$] = value;
  };
  Object.defineProperty(JsByteBuffer.prototype, 'native', {
    get: function () {
      if (this._limit === this._capacity)
        return this.buffer_0;
      else
        return this.buffer_0.subarray(0, this._limit);
    }
  });
  JsByteBuffer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsByteBuffer',
    interfaces: [NativeBuffer, BufferBase]
  };
  function JsShortBuffer(buffer) {
    BufferBase.call(this, buffer.length);
    this.buffer_0 = buffer;
  }
  JsShortBuffer.prototype.get = function () {
    var tmp$;
    return this.buffer_0[tmp$ = this._position, this._position = tmp$ + 1 | 0, tmp$];
  };
  JsShortBuffer.prototype.put_11rb$ = function (value) {
    var tmp$;
    if (this._position === this._limit) {
      this._limit = this._limit + 1 | 0;
    }
    this.buffer_0[tmp$ = this._position, this._position = tmp$ + 1 | 0, tmp$] = value;
  };
  Object.defineProperty(JsShortBuffer.prototype, 'native', {
    get: function () {
      if (this._limit === this._capacity)
        return this.buffer_0;
      else
        return this.buffer_0.subarray(0, this._limit);
    }
  });
  JsShortBuffer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsShortBuffer',
    interfaces: [NativeBuffer, BufferBase]
  };
  function JsIntBuffer(buffer) {
    BufferBase.call(this, buffer.length);
    this.buffer_0 = buffer;
  }
  JsIntBuffer.prototype.get = function () {
    var tmp$;
    return this.buffer_0[tmp$ = this._position, this._position = tmp$ + 1 | 0, tmp$];
  };
  JsIntBuffer.prototype.put_11rb$ = function (value) {
    var tmp$;
    if (this._position === this._limit) {
      this._limit = this._limit + 1 | 0;
    }
    this.buffer_0[tmp$ = this._position, this._position = tmp$ + 1 | 0, tmp$] = value;
  };
  Object.defineProperty(JsIntBuffer.prototype, 'native', {
    get: function () {
      if (this._limit === this._capacity)
        return this.buffer_0;
      else
        return this.buffer_0.subarray(0, this._limit);
    }
  });
  JsIntBuffer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsIntBuffer',
    interfaces: [NativeBuffer, BufferBase]
  };
  function JsFloatBuffer(buffer) {
    BufferBase.call(this, buffer.length);
    this.buffer_0 = buffer;
  }
  JsFloatBuffer.prototype.get = function () {
    var tmp$;
    return this.buffer_0[tmp$ = this._position, this._position = tmp$ + 1 | 0, tmp$];
  };
  JsFloatBuffer.prototype.put_11rb$ = function (value) {
    var tmp$;
    if (this._position === this._limit) {
      this._limit = this._limit + 1 | 0;
    }
    this.buffer_0[tmp$ = this._position, this._position = tmp$ + 1 | 0, tmp$] = value;
  };
  Object.defineProperty(JsFloatBuffer.prototype, 'native', {
    get: function () {
      if (this._limit === this._capacity)
        return this.buffer_0;
      else
        return this.buffer_0.subarray(0, this._limit);
    }
  });
  JsFloatBuffer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsFloatBuffer',
    interfaces: [NativeBuffer, BufferBase]
  };
  function JsDoubleBuffer(buffer) {
    BufferBase.call(this, buffer.length);
    this.buffer_0 = buffer;
  }
  JsDoubleBuffer.prototype.get = function () {
    var tmp$;
    return this.buffer_0[tmp$ = this._position, this._position = tmp$ + 1 | 0, tmp$];
  };
  JsDoubleBuffer.prototype.put_11rb$ = function (value) {
    var tmp$;
    if (this._position === this._limit) {
      this._limit = this._limit + 1 | 0;
    }
    this.buffer_0[tmp$ = this._position, this._position = tmp$ + 1 | 0, tmp$] = value;
  };
  Object.defineProperty(JsDoubleBuffer.prototype, 'native', {
    get: function () {
      if (this._limit === this._capacity)
        return this.buffer_0;
      else
        return this.buffer_0.subarray(0, this._limit);
    }
  });
  JsDoubleBuffer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsDoubleBuffer',
    interfaces: [NativeBuffer, BufferBase]
  };
  function JsHttpRequest() {
    JsHttpRequest$Companion_getInstance();
    BasicAction.call(this);
    this.requestData_pga5p9$_0 = new UrlRequestData();
    this._responseType_0 = ResponseType.TEXT;
    this._bytesLoaded_0 = 0;
    this._bytesTotal_0 = 0;
    this._result_0 = null;
    this.httpRequest_0 = new XMLHttpRequest();
    this.httpRequest_0.onprogress = JsHttpRequest_init$lambda(this);
    this.httpRequest_0.onreadystatechange = JsHttpRequest_init$lambda_0(this);
  }
  Object.defineProperty(JsHttpRequest.prototype, 'requestData', {
    get: function () {
      return this.requestData_pga5p9$_0;
    }
  });
  Object.defineProperty(JsHttpRequest.prototype, 'responseType', {
    get: function () {
      return this._responseType_0;
    }
  });
  Object.defineProperty(JsHttpRequest.prototype, 'secondsLoaded', {
    get: function () {
      return this._bytesLoaded_0 * core_0.UserInfo.downBpsInv;
    }
  });
  Object.defineProperty(JsHttpRequest.prototype, 'secondsTotal', {
    get: function () {
      return this._bytesTotal_0 * core_0.UserInfo.downBpsInv;
    }
  });
  Object.defineProperty(JsHttpRequest.prototype, 'result', {
    get: function () {
      var tmp$;
      return (tmp$ = this._result_0) != null ? tmp$ : Kotlin.throwNPE();
    }
  });
  Object.defineProperty(JsHttpRequest.prototype, 'resultArrayBuffer', {
    get: function () {
      var tmp$;
      if (this._responseType_0 !== ResponseType.BINARY)
        throw new Exception('HttpRequest is not of binary type.');
      return Kotlin.isType(tmp$ = this.httpRequest_0.response, ArrayBuffer) ? tmp$ : Kotlin.throwCCE();
    }
  });
  JsHttpRequest.prototype.onInvocation = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    this._responseType_0 = this.requestData.responseType;
    var async = true;
    this.httpRequest_0.open(this.requestData.method, this.requestData.url, async, this.requestData.user, this.requestData.password);
    tmp$_1 = this.httpRequest_0;
    tmp$ = this.responseType;
    if (Kotlin.equals(tmp$, ResponseType.TEXT))
      tmp$_0 = XMLHttpRequestResponseType_getInstance().TEXT;
    else if (Kotlin.equals(tmp$, ResponseType.BINARY))
      tmp$_0 = XMLHttpRequestResponseType_getInstance().ARRAY_BUFFER;
    else
      tmp$_0 = Kotlin.noWhenBranchMatched();
    tmp$_1.responseType = tmp$_0;
    this.httpRequest_0.timeout = this.requestData.timeout;
    tmp$_3 = this.requestData.headers.entries.iterator();
    while (tmp$_3.hasNext()) {
      var tmp$_2 = tmp$_3.next();
      var key = tmp$_2.key;
      var value = tmp$_2.value;
      this.httpRequest_0.setRequestHeader(key, value);
    }
    if (this.requestData.variables != null) {
      var data = ((tmp$_4 = this.requestData.variables) != null ? tmp$_4 : Kotlin.throwNPE()).toQueryString();
      this.httpRequest_0.send(data);
    }
     else if (this.requestData.formData != null) {
      var formData = new FormData();
      tmp$_6 = ((tmp$_5 = this.requestData.formData) != null ? tmp$_5 : Kotlin.throwNPE()).items.iterator();
      while (tmp$_6.hasNext()) {
        var item = tmp$_6.next();
        if (Kotlin.isType(item, ByteArrayFormItem)) {
          formData.append(item.name, new Blob([item.value.native]));
        }
         else if (Kotlin.isType(item, StringFormItem)) {
          formData.append(item.name, item.value);
        }
      }
      this.httpRequest_0.send(formData);
    }
     else {
      this.httpRequest_0.send();
    }
  };
  JsHttpRequest.prototype.onAborted = function () {
    this.httpRequest_0.abort();
  };
  function JsHttpRequest$Companion() {
    JsHttpRequest$Companion_instance = this;
  }
  JsHttpRequest$Companion.prototype.create = function () {
    return new JsHttpRequest();
  };
  JsHttpRequest$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: [RestServiceFactory]
  };
  var JsHttpRequest$Companion_instance = null;
  function JsHttpRequest$Companion_getInstance() {
    if (JsHttpRequest$Companion_instance === null) {
      new JsHttpRequest$Companion();
    }
    return JsHttpRequest$Companion_instance;
  }
  function JsHttpRequest_init$lambda(this$JsHttpRequest) {
    return function (event) {
      this$JsHttpRequest._bytesLoaded_0 = event.loaded;
      this$JsHttpRequest._bytesTotal_0 = event.total;
    };
  }
  function JsHttpRequest_init$lambda_0(this$JsHttpRequest) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
      if (this$JsHttpRequest.httpRequest_0.readyState === XMLHttpRequestReadyState_getInstance().DONE) {
        if (this$JsHttpRequest.httpRequest_0.status === 200) {
          tmp$ = this$JsHttpRequest.responseType;
          if (Kotlin.equals(tmp$, ResponseType.TEXT))
            tmp$_4 = typeof (tmp$_1 = (tmp$_0 = this$JsHttpRequest.httpRequest_0.response) != null ? tmp$_0 : Kotlin.throwNPE()) === 'string' ? tmp$_1 : Kotlin.throwCCE();
          else if (Kotlin.equals(tmp$, ResponseType.BINARY)) {
            tmp$_4 = new JsByteBuffer(new Uint8Array(Kotlin.isType(tmp$_3 = (tmp$_2 = this$JsHttpRequest.httpRequest_0.response) != null ? tmp$_2 : Kotlin.throwNPE(), ArrayBuffer) ? tmp$_3 : Kotlin.throwCCE()));
          }
           else
            tmp$_4 = Kotlin.noWhenBranchMatched();
          this$JsHttpRequest._result_0 = tmp$_4;
          this$JsHttpRequest.success();
        }
         else {
          tmp$_7 = new ResponseException(this$JsHttpRequest.httpRequest_0.status, this$JsHttpRequest.httpRequest_0.statusText, (tmp$_6 = typeof (tmp$_5 = this$JsHttpRequest.httpRequest_0.response) === 'string' ? tmp$_5 : null) != null ? tmp$_6 : '');
          this$JsHttpRequest.fail_3lhtaa$(tmp$_7);
        }
      }
    };
  }
  JsHttpRequest.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsHttpRequest',
    interfaces: [MutableHttpRequest, BasicAction]
  };
  function XMLHttpRequestResponseType() {
    XMLHttpRequestResponseType_instance = this;
    this.DEFAULT = '';
    this.ARRAY_BUFFER = 'arraybuffer';
    this.BLOB = 'blob';
    this.DOCUMENT = 'document';
    this.JSON = 'json';
    this.TEXT = 'text';
  }
  XMLHttpRequestResponseType.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'XMLHttpRequestResponseType',
    interfaces: []
  };
  var XMLHttpRequestResponseType_instance = null;
  function XMLHttpRequestResponseType_getInstance() {
    if (XMLHttpRequestResponseType_instance === null) {
      new XMLHttpRequestResponseType();
    }
    return XMLHttpRequestResponseType_instance;
  }
  function XMLHttpRequestMethod() {
    XMLHttpRequestMethod_instance = this;
    this.GET = 'GET';
    this.POST = 'POST';
    this.PUT = 'PUT';
    this.DELETE = 'DELETE';
  }
  XMLHttpRequestMethod.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'XMLHttpRequestMethod',
    interfaces: []
  };
  var XMLHttpRequestMethod_instance = null;
  function XMLHttpRequestMethod_getInstance() {
    if (XMLHttpRequestMethod_instance === null) {
      new XMLHttpRequestMethod();
    }
    return XMLHttpRequestMethod_instance;
  }
  function XMLHttpRequestReadyState() {
    XMLHttpRequestReadyState_instance = this;
    this.UNSENT = 0;
    this.OPENED = 1;
    this.HEADERS_RECEIVED = 2;
    this.LOADING = 3;
    this.DONE = 4;
  }
  XMLHttpRequestReadyState.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'XMLHttpRequestReadyState',
    interfaces: []
  };
  var XMLHttpRequestReadyState_instance = null;
  function XMLHttpRequestReadyState_getInstance() {
    if (XMLHttpRequestReadyState_instance === null) {
      new XMLHttpRequestReadyState();
    }
    return XMLHttpRequestReadyState_instance;
  }
  function JsApplicationBase(rootId, config, onReady) {
    this.rootId = rootId;
    this.config = config;
    this.bootstrap = new Bootstrap();
    this.frameDriver_acu6xj$_0 = null;
    var app = this;
    initializeUserInfo();
    this.initializeTime();
    this.initializeNumber();
    this.initializeString();
    this.initializeConfig();
    document.addEventListener('DOMContentLoaded', JsApplicationBase_init$lambda(this, onReady, app));
    window.addEventListener('beforeunload', JsApplicationBase_init$lambda_0(this));
  }
  function JsApplicationBase$initializeNumber$lambda(number, radix) {
    return toString(number, radix);
  }
  JsApplicationBase.prototype.initializeNumber = function () {
    core_1.toString = JsApplicationBase$initializeNumber$lambda;
  };
  JsApplicationBase.prototype.initializeTime = function () {
    time_0.time = new TimeProviderImpl();
  };
  function JsApplicationBase$initializeString$lambda(str) {
    return encodeURIComponent(str);
  }
  function JsApplicationBase$initializeString$lambda_0(str) {
    return decodeURIComponent(str);
  }
  JsApplicationBase.prototype.initializeString = function () {
    browser_0.encodeUriComponent2 = JsApplicationBase$initializeString$lambda;
    browser_0.decodeUriComponent2 = JsApplicationBase$initializeString$lambda_0;
  };
  function JsApplicationBase$initializeConfig$lambda(closure$buildVersionLoader, this$JsApplicationBase) {
    return function (it) {
      this$JsApplicationBase.config.version.build = toInt(closure$buildVersionLoader.result, 10);
      println('Build: ' + this$JsApplicationBase.config.version);
      this$JsApplicationBase.bootstrap.set_7ey6m6$(AppConfig.Companion, this$JsApplicationBase.config);
    };
  }
  function JsApplicationBase$initializeConfig$lambda_0(closure$buildVersionLoader, this$JsApplicationBase) {
    return function () {
      logging_0.Log.warn_s8jyv4$('assets/build.txt failed to load: ' + Kotlin.toString(closure$buildVersionLoader.error));
      this$JsApplicationBase.bootstrap.set_7ey6m6$(AppConfig.Companion, this$JsApplicationBase.config);
    };
  }
  JsApplicationBase.prototype.initializeConfig = function () {
    var buildVersionLoader = new JsTextLoader();
    buildVersionLoader.path = this.config.rootPath + appendParam('assets/build.txt', 'version', string_0.UidUtil.createUid());
    onSuccess(buildVersionLoader, JsApplicationBase$initializeConfig$lambda(buildVersionLoader, this));
    onFailed(buildVersionLoader, JsApplicationBase$initializeConfig$lambda_0(buildVersionLoader, this));
    buildVersionLoader.invoke();
  };
  JsApplicationBase.prototype.initializeBootstrap = function () {
    this.initializeUncaughtExceptionHandler();
    this.initializeDebug();
    this.initializeLogging();
    this.initializeBufferFactory();
    this.initializeCanvas();
    this.initializeCss();
    this.initializeWindow();
    this.initializeMouseInput();
    this.initializeKeyInput();
    this.initializeJson();
    this.initializeCamera();
    this.initializeFiles();
    this.initializeRequest();
    this.initializeAssetManager();
    this.initializeTextures();
    this.initializeAudio();
    this.initializeTimeDriver();
    this.initializeFocusManager();
    this.initializeInteractivity();
    this.initializeCursorManager();
    this.initializeSelectionManager();
    this.initializePersistence();
    this.initializeComponents();
  };
  JsApplicationBase.prototype.initializeCss = function () {
  };
  JsApplicationBase.prototype.initializeFrameDriver = function () {
    return new JsApplicationRunnerImpl(this.bootstrap.injector);
  };
  function JsApplicationBase$initializeUncaughtExceptionHandler$lambda(this$JsApplicationBase) {
    return function (message, source, lineNo, colNo, error) {
      var msg = 'Error caught: ' + message + ' ' + lineNo + ' ' + source + ' ' + colNo + ' ' + Kotlin.toString(error);
      logging_0.Log.error_s8jyv4$(msg);
      if (this$JsApplicationBase.config.debug)
        window.alert(msg);
    };
  }
  JsApplicationBase.prototype.initializeUncaughtExceptionHandler = function () {
    window.onerror = JsApplicationBase$initializeUncaughtExceptionHandler$lambda(this);
  };
  JsApplicationBase.prototype.initializeDebug = function () {
    this.config.debug = this.config.debug || contains_0(window.location.search, 'debug');
    if (this.config.debug) {
      println('Debug mode');
      acornui_0.assertionsEnabled = true;
    }
  };
  JsApplicationBase.prototype.initializeLogging = function () {
    if (this.config.debug) {
      logging_0.Log.level = ILogger.Companion.DEBUG;
    }
     else {
      logging_0.Log.level = ILogger.Companion.WARN;
    }
  };
  JsApplicationBase.prototype.initializeBufferFactory = function () {
    BufferFactory.Companion.instance = new JsBufferFactory();
  };
  JsApplicationBase.prototype.initializeMouseInput = function () {
    this.bootstrap.set_7ey6m6$(MouseInput.Companion, new JsMouseInput(this.canvas));
  };
  JsApplicationBase.prototype.initializeKeyInput = function () {
    this.bootstrap.set_7ey6m6$(KeyInput.Companion, new JsKeyInput(this.canvas));
  };
  JsApplicationBase.prototype.initializeJson = function () {
    this.bootstrap.set_7ey6m6$(io_0.JSON_KEY, serialization_0.JsonSerializer);
  };
  function JsApplicationBase$initializeCamera$lambda(this$JsApplicationBase) {
    return function ($receiver) {
      $receiver.set_7ey6m6$(Camera.Companion, new OrthographicCamera(this$JsApplicationBase.bootstrap.get_li8edk$(Window.Companion)));
    };
  }
  JsApplicationBase.prototype.initializeCamera = function () {
    this.bootstrap.on_b913r5$([Window.Companion], JsApplicationBase$initializeCamera$lambda(this));
  };
  function JsApplicationBase$initializeFiles$lambda$lambda(closure$json, closure$manifestLoader, this$) {
    return function (it) {
      var manifest = closure$json.read_awjrhg$(closure$manifestLoader.result, file_0.FilesManifestSerializer);
      this$.set_7ey6m6$(Files.Companion, new FilesImpl(manifest));
    };
  }
  function JsApplicationBase$initializeFiles$lambda(this$JsApplicationBase) {
    return function ($receiver) {
      var json = this$JsApplicationBase.bootstrap.get_li8edk$(io_0.JSON_KEY);
      var manifestLoader = new JsTextLoader();
      manifestLoader.path = this$JsApplicationBase.config.rootPath + appendParam(this$JsApplicationBase.config.assetsManifestPath, 'version', this$JsApplicationBase.config.version.toString());
      onSuccess(manifestLoader, JsApplicationBase$initializeFiles$lambda$lambda(json, manifestLoader, $receiver));
      manifestLoader.invoke();
    };
  }
  JsApplicationBase.prototype.initializeFiles = function () {
    this.bootstrap.waitFor_yg6552$([Files.Companion]);
    this.bootstrap.on_b913r5$([io_0.JSON_KEY], JsApplicationBase$initializeFiles$lambda(this));
  };
  JsApplicationBase.prototype.initializeRequest = function () {
    RestServiceFactory.Companion.instance = JsHttpRequest$Companion_getInstance();
  };
  function JsApplicationBase$initializeAssetManager$lambda$lambda() {
    return new JsTextLoader();
  }
  function JsApplicationBase$initializeAssetManager$lambda(this$JsApplicationBase) {
    return function ($receiver) {
      var assetManager = new AssetManagerImpl(this$JsApplicationBase.config.rootPath, this$JsApplicationBase.bootstrap.get_li8edk$(Files.Companion), true);
      assetManager.setLoaderFactory_6wm120$(assets_0.AssetTypes.TEXT, JsApplicationBase$initializeAssetManager$lambda$lambda);
      $receiver.set_7ey6m6$(AssetManager.Companion, assetManager);
    };
  }
  JsApplicationBase.prototype.initializeAssetManager = function () {
    this.bootstrap.on_b913r5$([Files.Companion, MutableAudioManager.Companion], JsApplicationBase$initializeAssetManager$lambda(this));
  };
  function JsApplicationBase$initializeAudio$lambda$lambda(closure$audioManager) {
    return function () {
      return new JsWebAudioSoundLoader(closure$audioManager);
    };
  }
  function JsApplicationBase$initializeAudio$lambda$lambda_0(closure$audioManager) {
    return function () {
      return new JsAudioElementSoundLoader(closure$audioManager);
    };
  }
  function JsApplicationBase$initializeAudio$lambda$lambda_1(closure$audioManager) {
    return function () {
      return new JsAudioElementMusicLoader(closure$audioManager);
    };
  }
  function JsApplicationBase$initializeAudio$lambda(this$JsApplicationBase, closure$audioManager) {
    return function ($receiver) {
      var assetManager = this$JsApplicationBase.bootstrap.get_li8edk$(AssetManager.Companion);
      if (audioContextSupported) {
        assetManager.setLoaderFactory_6wm120$(assets_0.AssetTypes.SOUND, JsApplicationBase$initializeAudio$lambda$lambda(closure$audioManager));
      }
       else {
        assetManager.setLoaderFactory_6wm120$(assets_0.AssetTypes.SOUND, JsApplicationBase$initializeAudio$lambda$lambda_0(closure$audioManager));
      }
      assetManager.setLoaderFactory_6wm120$(assets_0.AssetTypes.MUSIC, JsApplicationBase$initializeAudio$lambda$lambda_1(closure$audioManager));
    };
  }
  JsApplicationBase.prototype.initializeAudio = function () {
    var audioManager = new AudioManagerImpl();
    this.bootstrap.set_7ey6m6$(MutableAudioManager.Companion, audioManager);
    this.bootstrap.on_b913r5$([AssetManager.Companion], JsApplicationBase$initializeAudio$lambda(this, audioManager));
  };
  JsApplicationBase.prototype.initializeTimeDriver = function () {
    var timeDriver = new TimeDriverImpl();
    timeDriver.activate();
    this.bootstrap.set_7ey6m6$(TimeDriver.Companion, timeDriver);
  };
  function JsApplicationBase$initializeInteractivity$lambda(this$JsApplicationBase) {
    return function ($receiver) {
      this$JsApplicationBase.bootstrap.set_7ey6m6$(InteractivityManager.Companion, new InteractivityManagerImpl(this$JsApplicationBase.bootstrap.get_li8edk$(MouseInput.Companion), this$JsApplicationBase.bootstrap.get_li8edk$(KeyInput.Companion), this$JsApplicationBase.bootstrap.get_li8edk$(FocusManager.Companion)));
    };
  }
  JsApplicationBase.prototype.initializeInteractivity = function () {
    this.bootstrap.on_b913r5$([MouseInput.Companion, KeyInput.Companion, FocusManager.Companion], JsApplicationBase$initializeInteractivity$lambda(this));
  };
  JsApplicationBase.prototype.initializeFocusManager = function () {
    this.bootstrap.set_7ey6m6$(FocusManager.Companion, new FocusManagerImpl());
  };
  JsApplicationBase.prototype.initializeCursorManager = function () {
    this.bootstrap.set_7ey6m6$(CursorManager.Companion, new JsCursorManager(this.canvas));
  };
  JsApplicationBase.prototype.initializePersistence = function () {
    this.bootstrap.set_7ey6m6$(Persistence.Companion, new JsPersistence(this.config.version));
  };
  JsApplicationBase.prototype.initializeSelectionManager = function () {
    this.bootstrap.set_7ey6m6$(SelectionManager.Companion, new SelectionManagerImpl());
  };
  JsApplicationBase.prototype.initializePopUpManager = function () {
    this.bootstrap.set_7ey6m6$(PopUpManager.Companion, new PopUpManagerImpl(this.bootstrap.get_li8edk$(Stage.Companion)));
  };
  JsApplicationBase.prototype.dispose = function () {
    var tmp$;
    logging_0.Log.info_s8jyv4$('Application#dispose');
    (tmp$ = this.frameDriver_acu6xj$_0) != null ? tmp$.stop() : null;
    this.bootstrap.dispose();
  };
  function JsApplicationBase_init$lambda$lambda$lambda(this$JsApplicationBase) {
    return function () {
      this$JsApplicationBase.initializeStage();
      this$JsApplicationBase.initializePopUpManager();
      this$JsApplicationBase.initializeSpecialInteractivity();
    };
  }
  function JsApplicationBase_init$lambda$lambda$lambda_0(this$JsApplicationBase, closure$onReady, closure$app) {
    return function () {
      var tmp$;
      this$JsApplicationBase.bootstrap.lock();
      var stage = this$JsApplicationBase.bootstrap.get_li8edk$(Stage.Companion);
      closure$onReady(stage, stage);
      stage.addElement_mxweac$(this$JsApplicationBase.bootstrap.get_li8edk$(PopUpManager.Companion).view);
      closure$app.frameDriver_acu6xj$_0 = this$JsApplicationBase.initializeFrameDriver();
      ((tmp$ = this$JsApplicationBase.frameDriver_acu6xj$_0) != null ? tmp$ : Kotlin.throwNPE()).start();
    };
  }
  function JsApplicationBase_init$lambda$lambda(this$JsApplicationBase, closure$onReady, closure$app) {
    return function ($receiver) {
      this$JsApplicationBase.initializeBootstrap();
      this$JsApplicationBase.bootstrap.then_o14v8n$(JsApplicationBase_init$lambda$lambda$lambda(this$JsApplicationBase));
      this$JsApplicationBase.bootstrap.then_o14v8n$(JsApplicationBase_init$lambda$lambda$lambda_0(this$JsApplicationBase, closure$onReady, closure$app));
    };
  }
  function JsApplicationBase_init$lambda(this$JsApplicationBase, closure$onReady, closure$app) {
    return function (it) {
      this$JsApplicationBase.bootstrap.on_b913r5$([AppConfig.Companion], JsApplicationBase_init$lambda$lambda(this$JsApplicationBase, closure$onReady, closure$app));
    };
  }
  function JsApplicationBase_init$lambda_0(this$JsApplicationBase) {
    return function (it) {
      this$JsApplicationBase.dispose();
    };
  }
  JsApplicationBase.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsApplicationBase',
    interfaces: [Disposable]
  };
  function toString($receiver, radix) {
    var d = $receiver;
    return d.toString(radix);
  }
  function JsApplicationRunner() {
  }
  JsApplicationRunner.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'JsApplicationRunner',
    interfaces: []
  };
  function JsApplicationRunnerImpl(injector) {
    JsApplicationRunnerImpl$Companion_getInstance();
    this.injector_xsctyi$_0 = injector;
    this.stage_0 = inject(this, Stage.Companion);
    this.timeDriver_0 = inject(this, TimeDriver.Companion);
    this.jsWindow_0 = inject(this, Window.Companion);
    this.appConfig_0 = inject(this, AppConfig.Companion);
    this.isRunning_0 = false;
    this.tickFrameId_0 = -1;
    this.nextTick_0 = Kotlin.Long.ZERO;
    this.tick_0 = JsApplicationRunnerImpl$tick$lambda(this);
  }
  Object.defineProperty(JsApplicationRunnerImpl.prototype, 'injector', {
    get: function () {
      return this.injector_xsctyi$_0;
    }
  });
  JsApplicationRunnerImpl.prototype.start = function () {
    if (this.isRunning_0)
      return;
    logging_0.Log.info_s8jyv4$('Application#start');
    this.isRunning_0 = true;
    this.stage_0.activate();
    this.nextTick_0 = time_0.time.nowMs();
    this.tickFrameId_0 = window.requestAnimationFrame(this.tick_0);
  };
  JsApplicationRunnerImpl.prototype._tick_0 = function () {
    var stepTimeFloat = this.appConfig_0.stepTime;
    var stepTimeMs = 1000 / this.appConfig_0.frameRate | 0;
    var loops = 0;
    var now = time_0.time.nowMs();
    while (now.compareTo_11rb$(this.nextTick_0) > 0) {
      this.nextTick_0 = this.nextTick_0.add(Kotlin.Long.fromInt(stepTimeMs));
      this.timeDriver_0.update_mx4ult$(stepTimeFloat);
      if ((loops = loops + 1 | 0, loops) > JsApplicationRunnerImpl$Companion_getInstance().MAX_FRAME_SKIP_0) {
        this.nextTick_0 = time_0.time.nowMs().add(Kotlin.Long.fromInt(stepTimeMs));
        break;
      }
    }
    if (this.jsWindow_0.shouldRender_6taknv$(true)) {
      this.stage_0.update();
      this.jsWindow_0.renderBegin();
      this.stage_0.render();
      this.jsWindow_0.renderEnd();
    }
    this.tickFrameId_0 = window.requestAnimationFrame(this.tick_0);
  };
  JsApplicationRunnerImpl.prototype.stop = function () {
    if (!this.isRunning_0)
      return;
    logging_0.Log.info_s8jyv4$('Application#stop');
    this.isRunning_0 = false;
    window.cancelAnimationFrame(this.tickFrameId_0);
    this.stage_0.deactivate();
  };
  function JsApplicationRunnerImpl$Companion() {
    JsApplicationRunnerImpl$Companion_instance = this;
    this.MAX_FRAME_SKIP_0 = 10;
  }
  JsApplicationRunnerImpl$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JsApplicationRunnerImpl$Companion_instance = null;
  function JsApplicationRunnerImpl$Companion_getInstance() {
    if (JsApplicationRunnerImpl$Companion_instance === null) {
      new JsApplicationRunnerImpl$Companion();
    }
    return JsApplicationRunnerImpl$Companion_instance;
  }
  function JsApplicationRunnerImpl$tick$lambda(this$JsApplicationRunnerImpl) {
    return function (newTime) {
      this$JsApplicationRunnerImpl._tick_0();
    };
  }
  JsApplicationRunnerImpl.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsApplicationRunnerImpl',
    interfaces: [Scoped, JsApplicationRunner]
  };
  function JsTextLoader(request_0) {
    if (request_0 === void 0)
      request_0 = new JsHttpRequest();
    DelegateAction.call(this, request_0);
    this.request_0 = request_0;
    this.type_egvun1$_0 = assets_0.AssetTypes.TEXT;
    this.estimatedBytesTotal_egvun1$_0 = 0;
    this.request_0.requestData.responseType = ResponseType.TEXT;
  }
  Object.defineProperty(JsTextLoader.prototype, 'type', {
    get: function () {
      return this.type_egvun1$_0;
    }
  });
  Object.defineProperty(JsTextLoader.prototype, 'estimatedBytesTotal', {
    get: function () {
      return this.estimatedBytesTotal_egvun1$_0;
    },
    set: function (estimatedBytesTotal) {
      this.estimatedBytesTotal_egvun1$_0 = estimatedBytesTotal;
    }
  });
  Object.defineProperty(JsTextLoader.prototype, 'secondsLoaded', {
    get: function () {
      return this.request_0.secondsLoaded;
    }
  });
  Object.defineProperty(JsTextLoader.prototype, 'secondsTotal', {
    get: function () {
      return this.request_0.secondsTotal <= 0.0 ? this.estimatedBytesTotal * core_0.UserInfo.downBpsInv : this.request_0.secondsTotal;
    }
  });
  Object.defineProperty(JsTextLoader.prototype, 'path', {
    get: function () {
      return this.request_0.requestData.url;
    },
    set: function (value) {
      this.request_0.requestData.url = value;
    }
  });
  Object.defineProperty(JsTextLoader.prototype, 'result', {
    get: function () {
      var tmp$;
      return typeof (tmp$ = this.request_0.result) === 'string' ? tmp$ : Kotlin.throwCCE();
    }
  });
  JsTextLoader.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsTextLoader',
    interfaces: [MutableAssetLoader, DelegateAction]
  };
  function JsPersistence(currentVersion) {
    this.currentVersion_0 = currentVersion;
    this._version_0 = null;
    var tmp$;
    this.storageAllowed_0 = typeof (tmp$ = typeof Storage !== 'undefined') === 'boolean' ? tmp$ : Kotlin.throwCCE();
    this.currentVersionWritten_0 = false;
    if (!this.storageAllowed_0)
      println('Storage not allowed.');
    var versionStr = this.getItem_61zpoe$('__version');
    if (versionStr == null)
      this._version_0 = null;
    else
      this._version_0 = Version.Companion.fromStr_61zpoe$(versionStr);
  }
  Object.defineProperty(JsPersistence.prototype, 'version', {
    get: function () {
      return this._version_0;
    }
  });
  Object.defineProperty(JsPersistence.prototype, 'allowed', {
    get: function () {
      return this.storageAllowed_0;
    }
  });
  Object.defineProperty(JsPersistence.prototype, 'length', {
    get: function () {
      if (!this.storageAllowed_0)
        return 0;
      return localStorage.length;
    }
  });
  JsPersistence.prototype.key_za3lpa$ = function (index) {
    if (!this.storageAllowed_0)
      return null;
    return localStorage.key(index);
  };
  JsPersistence.prototype.getItem_61zpoe$ = function (key) {
    if (!this.storageAllowed_0)
      return null;
    return localStorage.getItem(key);
  };
  JsPersistence.prototype.setItem_puj7f4$ = function (key, value) {
    if (!this.storageAllowed_0)
      return;
    localStorage.setItem(key, value);
    if (!this.currentVersionWritten_0) {
      this.currentVersionWritten_0 = true;
      localStorage.setItem('__version', this.currentVersion_0.toString());
      this._version_0 = this.currentVersion_0;
    }
  };
  JsPersistence.prototype.removeItem_61zpoe$ = function (key) {
    if (!this.storageAllowed_0)
      return;
    localStorage.removeItem(key);
  };
  JsPersistence.prototype.clear = function () {
    if (!this.storageAllowed_0)
      return;
    localStorage.clear();
  };
  JsPersistence.prototype.flush = function () {
  };
  JsPersistence.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsPersistence',
    interfaces: [Persistence]
  };
  function DomSelectionManager(root_0) {
    this.root_0 = root_0;
    this.selectionChanged_vcp4g0$_0 = new Signal0();
    this.selectionChangedHandler_0 = DomSelectionManager$selectionChangedHandler$lambda(this);
    document.addEventListener('selectionchange', this.selectionChangedHandler_0);
  }
  Object.defineProperty(DomSelectionManager.prototype, 'selectionChanged', {
    get: function () {
      return this.selectionChanged_vcp4g0$_0;
    }
  });
  DomSelectionManager.prototype.dispose = function () {
    document.removeEventListener('selectionchange', this.selectionChangedHandler_0);
    this.selectionChanged.dispose();
  };
  function DomSelectionManager$selectionChangedHandler$lambda(this$DomSelectionManager) {
    return function (event) {
      this$DomSelectionManager.selectionChanged.dispatch();
    };
  }
  DomSelectionManager.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DomSelectionManager',
    interfaces: [SelectionManager]
  };
  function DateImpl() {
    Date_0.call(this);
    this.date_0 = new Date();
  }
  DateImpl.prototype.era = function () {
    throw new UnsupportedOperationException();
  };
  DateImpl.prototype.era_za3lpa$ = function (era) {
    throw new UnsupportedOperationException();
  };
  DateImpl.prototype.time = function () {
    var tmp$;
    return Kotlin.numberToLong(Kotlin.isNumber(tmp$ = this.date_0.getTime()) ? tmp$ : Kotlin.throwCCE());
  };
  DateImpl.prototype.time_s8cxhz$ = function (time_1) {
    this.date_0.setTime(time_1);
  };
  DateImpl.prototype.year = function () {
    return this.date_0.getFullYear();
  };
  DateImpl.prototype.year_za3lpa$ = function (year) {
    this.date_0.setFullYear(year);
  };
  DateImpl.prototype.month = function () {
    throw new UnsupportedOperationException();
  };
  DateImpl.prototype.month_za3lpa$ = function (month) {
    throw new UnsupportedOperationException();
  };
  DateImpl.prototype.dayOfMonth = function () {
    throw new UnsupportedOperationException();
  };
  DateImpl.prototype.dayOfMonth_za3lpa$ = function (dayOfMonth) {
    throw new UnsupportedOperationException();
  };
  DateImpl.prototype.dayOfWeek = function () {
    throw new UnsupportedOperationException();
  };
  DateImpl.prototype.hourOfDay = function () {
    throw new UnsupportedOperationException();
  };
  DateImpl.prototype.hourOfDay_za3lpa$ = function (hour) {
    throw new UnsupportedOperationException();
  };
  DateImpl.prototype.minute = function () {
    throw new UnsupportedOperationException();
  };
  DateImpl.prototype.minute_za3lpa$ = function (minute) {
    throw new UnsupportedOperationException();
  };
  DateImpl.prototype.second = function () {
    throw new UnsupportedOperationException();
  };
  DateImpl.prototype.second_za3lpa$ = function (second) {
    throw new UnsupportedOperationException();
  };
  DateImpl.prototype.milli = function () {
    throw new UnsupportedOperationException();
  };
  DateImpl.prototype.milli_za3lpa$ = function (milli) {
    throw new UnsupportedOperationException();
  };
  DateImpl.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DateImpl',
    interfaces: [Date_0]
  };
  function TimeProviderImpl() {
    this.startTime_0 = null;
    this.startTime_0 = this.nowMs();
  }
  TimeProviderImpl.prototype.now = function () {
    return new DateImpl();
  };
  TimeProviderImpl.prototype.nowMs = function () {
    var tmp$;
    return Kotlin.Long.fromNumber(typeof (tmp$ = Date.now()) === 'number' ? tmp$ : Kotlin.throwCCE());
  };
  TimeProviderImpl.prototype.nanoElapsed = function () {
    return this.nowMs().subtract(this.startTime_0).multiply(Kotlin.Long.fromInt(1000000));
  };
  TimeProviderImpl.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TimeProviderImpl',
    interfaces: [TimeProvider]
  };
  function JsLocation(location) {
    this.location_0 = location;
  }
  Object.defineProperty(JsLocation.prototype, 'href', {
    get: function () {
      return this.location_0.href;
    }
  });
  Object.defineProperty(JsLocation.prototype, 'origin', {
    get: function () {
      return this.location_0.origin;
    }
  });
  Object.defineProperty(JsLocation.prototype, 'protocol', {
    get: function () {
      return this.location_0.protocol;
    }
  });
  Object.defineProperty(JsLocation.prototype, 'host', {
    get: function () {
      return this.location_0.host;
    }
  });
  Object.defineProperty(JsLocation.prototype, 'hostname', {
    get: function () {
      return this.location_0.hostname;
    }
  });
  Object.defineProperty(JsLocation.prototype, 'port', {
    get: function () {
      return this.location_0.port;
    }
  });
  Object.defineProperty(JsLocation.prototype, 'pathname', {
    get: function () {
      return this.location_0.pathname;
    }
  });
  Object.defineProperty(JsLocation.prototype, 'search', {
    get: function () {
      return this.location_0.search;
    }
  });
  Object.defineProperty(JsLocation.prototype, 'hash', {
    get: function () {
      return this.location_0.hash;
    }
  });
  JsLocation.prototype.reload = function () {
    this.location_0.reload();
  };
  JsLocation.prototype.navigateToUrl_me39zv$ = function (url, name, specs) {
    var tmp$, tmp$_0;
    tmp$_0 = (tmp$ = specs != null ? specs.toSpecsString() : null) != null ? tmp$ : '';
    window.open(url, name, tmp$_0);
  };
  JsLocation.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsLocation',
    interfaces: [Location]
  };
  JsAudioElementMusic.prototype.toggle = Music.prototype.toggle;
  Object.defineProperty(JsAudioElementMusic.prototype, 'isPaused', Object.getOwnPropertyDescriptor(Music.prototype, 'isPaused'));
  JsAudioElementMusicLoader.prototype.hasBeenInvoked = MutableAssetLoader.prototype.hasBeenInvoked;
  JsAudioElementMusicLoader.prototype.hasCompleted = MutableAssetLoader.prototype.hasCompleted;
  JsAudioElementMusicLoader.prototype.hasFailed = MutableAssetLoader.prototype.hasFailed;
  JsAudioElementMusicLoader.prototype.hasSucceeded = MutableAssetLoader.prototype.hasSucceeded;
  JsAudioElementMusicLoader.prototype.isRunning = MutableAssetLoader.prototype.isRunning;
  JsAudioElementMusicLoader.prototype.setStatus_pxr8bi$ = MutableAssetLoader.prototype.setStatus_pxr8bi$;
  Object.defineProperty(JsAudioElementMusicLoader.prototype, 'percentLoaded', Object.getOwnPropertyDescriptor(MutableAssetLoader.prototype, 'percentLoaded'));
  JsAudioElementSoundFactory.prototype.createInstance = SoundFactory.prototype.createInstance;
  JsAudioElementSoundLoader.prototype.hasBeenInvoked = MutableAssetLoader.prototype.hasBeenInvoked;
  JsAudioElementSoundLoader.prototype.hasCompleted = MutableAssetLoader.prototype.hasCompleted;
  JsAudioElementSoundLoader.prototype.hasFailed = MutableAssetLoader.prototype.hasFailed;
  JsAudioElementSoundLoader.prototype.hasSucceeded = MutableAssetLoader.prototype.hasSucceeded;
  JsAudioElementSoundLoader.prototype.isRunning = MutableAssetLoader.prototype.isRunning;
  JsAudioElementSoundLoader.prototype.setStatus_pxr8bi$ = MutableAssetLoader.prototype.setStatus_pxr8bi$;
  Object.defineProperty(JsAudioElementSoundLoader.prototype, 'percentLoaded', Object.getOwnPropertyDescriptor(MutableAssetLoader.prototype, 'percentLoaded'));
  JsWebAudioMusic.prototype.toggle = Music.prototype.toggle;
  Object.defineProperty(JsWebAudioMusic.prototype, 'isPaused', Object.getOwnPropertyDescriptor(Music.prototype, 'isPaused'));
  JsWebAudioMusicLoader.prototype.hasBeenInvoked = MutableAssetLoader.prototype.hasBeenInvoked;
  JsWebAudioMusicLoader.prototype.hasCompleted = MutableAssetLoader.prototype.hasCompleted;
  JsWebAudioMusicLoader.prototype.hasFailed = MutableAssetLoader.prototype.hasFailed;
  JsWebAudioMusicLoader.prototype.hasSucceeded = MutableAssetLoader.prototype.hasSucceeded;
  JsWebAudioMusicLoader.prototype.isRunning = MutableAssetLoader.prototype.isRunning;
  JsWebAudioMusicLoader.prototype.setStatus_pxr8bi$ = MutableAssetLoader.prototype.setStatus_pxr8bi$;
  Object.defineProperty(JsWebAudioMusicLoader.prototype, 'percentLoaded', Object.getOwnPropertyDescriptor(MutableAssetLoader.prototype, 'percentLoaded'));
  JsWebAudioSoundFactory.prototype.createInstance = SoundFactory.prototype.createInstance;
  JsWebAudioSoundLoader.prototype.hasBeenInvoked = MutableAssetLoader.prototype.hasBeenInvoked;
  JsWebAudioSoundLoader.prototype.hasCompleted = MutableAssetLoader.prototype.hasCompleted;
  JsWebAudioSoundLoader.prototype.hasFailed = MutableAssetLoader.prototype.hasFailed;
  JsWebAudioSoundLoader.prototype.hasSucceeded = MutableAssetLoader.prototype.hasSucceeded;
  JsWebAudioSoundLoader.prototype.isRunning = MutableAssetLoader.prototype.isRunning;
  JsWebAudioSoundLoader.prototype.setStatus_pxr8bi$ = MutableAssetLoader.prototype.setStatus_pxr8bi$;
  Object.defineProperty(JsWebAudioSoundLoader.prototype, 'percentLoaded', Object.getOwnPropertyDescriptor(MutableAssetLoader.prototype, 'percentLoaded'));
  DomTextField.prototype.getChildUnderPoint_g1oyt7$ = TextField.prototype.getChildUnderPoint_g1oyt7$;
  DomTextField.prototype.getChildUnderRay_p0mkez$ = TextField.prototype.getChildUnderRay_p0mkez$;
  DomTextField.prototype.getChildrenUnderPoint_adthd4$ = TextField.prototype.getChildrenUnderPoint_adthd4$;
  DomTextField.prototype.getChildrenUnderRay_w6o14y$ = TextField.prototype.getChildrenUnderRay_w6o14y$;
  DomTextField.prototype.isRendered = TextField.prototype.isRendered;
  DomTextField.prototype.addInteractionSignal_pqftit$ = TextField.prototype.addInteractionSignal_pqftit$;
  DomTextField.prototype.getInteractionSignal_j3fyc4$ = TextField.prototype.getInteractionSignal_j3fyc4$;
  DomTextField.prototype.handlesInteraction_1811yh$ = TextField.prototype.handlesInteraction_1811yh$;
  DomTextField.prototype.handlesInteraction_j3fyc4$ = TextField.prototype.handlesInteraction_j3fyc4$;
  DomTextField.prototype.hasInteraction_j3fyc4$ = TextField.prototype.hasInteraction_j3fyc4$;
  DomTextField.prototype.hasInteraction_j3fyc4$$default = TextField.prototype.hasInteraction_j3fyc4$$default;
  DomTextField.prototype.intersectsGlobalRay_ujzndq$ = TextField.prototype.intersectsGlobalRay_ujzndq$;
  DomTextField.prototype.intersectsGlobalRay_94uff6$ = TextField.prototype.intersectsGlobalRay_94uff6$;
  DomTextField.prototype.setSize_i12l7q$ = TextField.prototype.setSize_i12l7q$;
  DomTextField.prototype.setSize_yxjqmk$ = TextField.prototype.setSize_yxjqmk$;
  DomTextField.prototype.moveTo_9wm29k$ = TextField.prototype.moveTo_9wm29k$;
  DomTextField.prototype.moveTo_y2kzbl$ = TextField.prototype.moveTo_y2kzbl$;
  DomTextField.prototype.moveTo_y2kzbl$$default = TextField.prototype.moveTo_y2kzbl$$default;
  DomTextField.prototype.setPosition_y2kzbl$ = TextField.prototype.setPosition_y2kzbl$;
  DomTextField.prototype.convertCoord_jsa5cl$ = TextField.prototype.convertCoord_jsa5cl$;
  DomTextField.prototype.globalToLocal_ujzndq$ = TextField.prototype.globalToLocal_ujzndq$;
  DomTextField.prototype.globalToLocal_9wm29k$ = TextField.prototype.globalToLocal_9wm29k$;
  DomTextField.prototype.localToGlobal_ujzndq$ = TextField.prototype.localToGlobal_ujzndq$;
  DomTextField.prototype.localToGlobal_9wm29k$ = TextField.prototype.localToGlobal_9wm29k$;
  DomTextField.prototype.rayToPlane_94uff5$ = TextField.prototype.rayToPlane_94uff5$;
  DomTextField.prototype.setOrigin_y2kzbl$ = TextField.prototype.setOrigin_y2kzbl$;
  DomTextField.prototype.setRotation_y2kzbl$ = TextField.prototype.setRotation_y2kzbl$;
  DomTextField.prototype.setScaling_y2kzbl$ = TextField.prototype.setScaling_y2kzbl$;
  DomTextField.prototype.localToWindow_9wm29k$ = TextField.prototype.localToWindow_9wm29k$;
  DomTextField.prototype.windowToLocal_9wm29l$ = TextField.prototype.windowToLocal_9wm29l$;
  DomTextField.prototype.nextSibling = TextField.prototype.nextSibling;
  DomTextField.prototype.previousSibling = TextField.prototype.previousSibling;
  DomTextField.prototype.validate = TextField.prototype.validate;
  DomTextField.prototype.validate_za3lpa$ = TextField.prototype.validate_za3lpa$;
  Object.defineProperty(DomTextField.prototype, 'label', Object.getOwnPropertyDescriptor(TextField.prototype, 'label'));
  Object.defineProperty(DomTextField.prototype, 'alpha', Object.getOwnPropertyDescriptor(TextField.prototype, 'alpha'));
  Object.defineProperty(DomTextField.prototype, 'interactivityEnabled', Object.getOwnPropertyDescriptor(TextField.prototype, 'interactivityEnabled'));
  Object.defineProperty(DomTextField.prototype, 'bottom', Object.getOwnPropertyDescriptor(TextField.prototype, 'bottom'));
  Object.defineProperty(DomTextField.prototype, 'right', Object.getOwnPropertyDescriptor(TextField.prototype, 'right'));
  Object.defineProperty(DomTextField.prototype, 'height', Object.getOwnPropertyDescriptor(TextField.prototype, 'height'));
  Object.defineProperty(DomTextField.prototype, 'width', Object.getOwnPropertyDescriptor(TextField.prototype, 'width'));
  DomEditableTextField.prototype.blur = EditableTextField.prototype.blur;
  DomEditableTextField.prototype.focus = EditableTextField.prototype.focus;
  DomEditableTextField.prototype.getChildUnderPoint_g1oyt7$ = EditableTextField.prototype.getChildUnderPoint_g1oyt7$;
  DomEditableTextField.prototype.getChildUnderRay_p0mkez$ = EditableTextField.prototype.getChildUnderRay_p0mkez$;
  DomEditableTextField.prototype.getChildrenUnderPoint_adthd4$ = EditableTextField.prototype.getChildrenUnderPoint_adthd4$;
  DomEditableTextField.prototype.getChildrenUnderRay_w6o14y$ = EditableTextField.prototype.getChildrenUnderRay_w6o14y$;
  DomEditableTextField.prototype.isRendered = EditableTextField.prototype.isRendered;
  DomEditableTextField.prototype.addInteractionSignal_pqftit$ = EditableTextField.prototype.addInteractionSignal_pqftit$;
  DomEditableTextField.prototype.getInteractionSignal_j3fyc4$ = EditableTextField.prototype.getInteractionSignal_j3fyc4$;
  DomEditableTextField.prototype.handlesInteraction_1811yh$ = EditableTextField.prototype.handlesInteraction_1811yh$;
  DomEditableTextField.prototype.handlesInteraction_j3fyc4$ = EditableTextField.prototype.handlesInteraction_j3fyc4$;
  DomEditableTextField.prototype.hasInteraction_j3fyc4$ = EditableTextField.prototype.hasInteraction_j3fyc4$;
  DomEditableTextField.prototype.hasInteraction_j3fyc4$$default = EditableTextField.prototype.hasInteraction_j3fyc4$$default;
  DomEditableTextField.prototype.intersectsGlobalRay_ujzndq$ = EditableTextField.prototype.intersectsGlobalRay_ujzndq$;
  DomEditableTextField.prototype.intersectsGlobalRay_94uff6$ = EditableTextField.prototype.intersectsGlobalRay_94uff6$;
  DomEditableTextField.prototype.setSize_i12l7q$ = EditableTextField.prototype.setSize_i12l7q$;
  DomEditableTextField.prototype.setSize_yxjqmk$ = EditableTextField.prototype.setSize_yxjqmk$;
  DomEditableTextField.prototype.moveTo_9wm29k$ = EditableTextField.prototype.moveTo_9wm29k$;
  DomEditableTextField.prototype.moveTo_y2kzbl$ = EditableTextField.prototype.moveTo_y2kzbl$;
  DomEditableTextField.prototype.moveTo_y2kzbl$$default = EditableTextField.prototype.moveTo_y2kzbl$$default;
  DomEditableTextField.prototype.setPosition_y2kzbl$ = EditableTextField.prototype.setPosition_y2kzbl$;
  DomEditableTextField.prototype.convertCoord_jsa5cl$ = EditableTextField.prototype.convertCoord_jsa5cl$;
  DomEditableTextField.prototype.globalToLocal_ujzndq$ = EditableTextField.prototype.globalToLocal_ujzndq$;
  DomEditableTextField.prototype.globalToLocal_9wm29k$ = EditableTextField.prototype.globalToLocal_9wm29k$;
  DomEditableTextField.prototype.localToGlobal_ujzndq$ = EditableTextField.prototype.localToGlobal_ujzndq$;
  DomEditableTextField.prototype.localToGlobal_9wm29k$ = EditableTextField.prototype.localToGlobal_9wm29k$;
  DomEditableTextField.prototype.rayToPlane_94uff5$ = EditableTextField.prototype.rayToPlane_94uff5$;
  DomEditableTextField.prototype.setOrigin_y2kzbl$ = EditableTextField.prototype.setOrigin_y2kzbl$;
  DomEditableTextField.prototype.setRotation_y2kzbl$ = EditableTextField.prototype.setRotation_y2kzbl$;
  DomEditableTextField.prototype.setScaling_y2kzbl$ = EditableTextField.prototype.setScaling_y2kzbl$;
  DomEditableTextField.prototype.localToWindow_9wm29k$ = EditableTextField.prototype.localToWindow_9wm29k$;
  DomEditableTextField.prototype.windowToLocal_9wm29l$ = EditableTextField.prototype.windowToLocal_9wm29l$;
  DomEditableTextField.prototype.nextSibling = EditableTextField.prototype.nextSibling;
  DomEditableTextField.prototype.previousSibling = EditableTextField.prototype.previousSibling;
  DomEditableTextField.prototype.validate = EditableTextField.prototype.validate;
  DomEditableTextField.prototype.validate_za3lpa$ = EditableTextField.prototype.validate_za3lpa$;
  Object.defineProperty(DomEditableTextField.prototype, 'isFocused', Object.getOwnPropertyDescriptor(EditableTextField.prototype, 'isFocused'));
  Object.defineProperty(DomEditableTextField.prototype, 'parentFocusableContainer', Object.getOwnPropertyDescriptor(EditableTextField.prototype, 'parentFocusableContainer'));
  Object.defineProperty(DomEditableTextField.prototype, 'alpha', Object.getOwnPropertyDescriptor(EditableTextField.prototype, 'alpha'));
  Object.defineProperty(DomEditableTextField.prototype, 'interactivityEnabled', Object.getOwnPropertyDescriptor(EditableTextField.prototype, 'interactivityEnabled'));
  Object.defineProperty(DomEditableTextField.prototype, 'bottom', Object.getOwnPropertyDescriptor(EditableTextField.prototype, 'bottom'));
  Object.defineProperty(DomEditableTextField.prototype, 'right', Object.getOwnPropertyDescriptor(EditableTextField.prototype, 'right'));
  Object.defineProperty(DomEditableTextField.prototype, 'height', Object.getOwnPropertyDescriptor(EditableTextField.prototype, 'height'));
  Object.defineProperty(DomEditableTextField.prototype, 'width', Object.getOwnPropertyDescriptor(EditableTextField.prototype, 'width'));
  Object.defineProperty(DomEditableTextField.prototype, 'label', Object.getOwnPropertyDescriptor(EditableTextField.prototype, 'label'));
  DomRect.prototype.getChildUnderPoint_g1oyt7$ = Rect.prototype.getChildUnderPoint_g1oyt7$;
  DomRect.prototype.getChildUnderRay_p0mkez$ = Rect.prototype.getChildUnderRay_p0mkez$;
  DomRect.prototype.getChildrenUnderPoint_adthd4$ = Rect.prototype.getChildrenUnderPoint_adthd4$;
  DomRect.prototype.getChildrenUnderRay_w6o14y$ = Rect.prototype.getChildrenUnderRay_w6o14y$;
  DomRect.prototype.isRendered = Rect.prototype.isRendered;
  DomRect.prototype.addInteractionSignal_pqftit$ = Rect.prototype.addInteractionSignal_pqftit$;
  DomRect.prototype.getInteractionSignal_j3fyc4$ = Rect.prototype.getInteractionSignal_j3fyc4$;
  DomRect.prototype.handlesInteraction_1811yh$ = Rect.prototype.handlesInteraction_1811yh$;
  DomRect.prototype.handlesInteraction_j3fyc4$ = Rect.prototype.handlesInteraction_j3fyc4$;
  DomRect.prototype.hasInteraction_j3fyc4$ = Rect.prototype.hasInteraction_j3fyc4$;
  DomRect.prototype.hasInteraction_j3fyc4$$default = Rect.prototype.hasInteraction_j3fyc4$$default;
  DomRect.prototype.intersectsGlobalRay_ujzndq$ = Rect.prototype.intersectsGlobalRay_ujzndq$;
  DomRect.prototype.intersectsGlobalRay_94uff6$ = Rect.prototype.intersectsGlobalRay_94uff6$;
  DomRect.prototype.setSize_i12l7q$ = Rect.prototype.setSize_i12l7q$;
  DomRect.prototype.setSize_yxjqmk$ = Rect.prototype.setSize_yxjqmk$;
  DomRect.prototype.moveTo_9wm29k$ = Rect.prototype.moveTo_9wm29k$;
  DomRect.prototype.moveTo_y2kzbl$ = Rect.prototype.moveTo_y2kzbl$;
  DomRect.prototype.moveTo_y2kzbl$$default = Rect.prototype.moveTo_y2kzbl$$default;
  DomRect.prototype.setPosition_y2kzbl$ = Rect.prototype.setPosition_y2kzbl$;
  DomRect.prototype.convertCoord_jsa5cl$ = Rect.prototype.convertCoord_jsa5cl$;
  DomRect.prototype.globalToLocal_ujzndq$ = Rect.prototype.globalToLocal_ujzndq$;
  DomRect.prototype.globalToLocal_9wm29k$ = Rect.prototype.globalToLocal_9wm29k$;
  DomRect.prototype.localToGlobal_ujzndq$ = Rect.prototype.localToGlobal_ujzndq$;
  DomRect.prototype.localToGlobal_9wm29k$ = Rect.prototype.localToGlobal_9wm29k$;
  DomRect.prototype.rayToPlane_94uff5$ = Rect.prototype.rayToPlane_94uff5$;
  DomRect.prototype.setOrigin_y2kzbl$ = Rect.prototype.setOrigin_y2kzbl$;
  DomRect.prototype.setRotation_y2kzbl$ = Rect.prototype.setRotation_y2kzbl$;
  DomRect.prototype.setScaling_y2kzbl$ = Rect.prototype.setScaling_y2kzbl$;
  DomRect.prototype.localToWindow_9wm29k$ = Rect.prototype.localToWindow_9wm29k$;
  DomRect.prototype.windowToLocal_9wm29l$ = Rect.prototype.windowToLocal_9wm29l$;
  DomRect.prototype.nextSibling = Rect.prototype.nextSibling;
  DomRect.prototype.previousSibling = Rect.prototype.previousSibling;
  DomRect.prototype.validate = Rect.prototype.validate;
  DomRect.prototype.validate_za3lpa$ = Rect.prototype.validate_za3lpa$;
  Object.defineProperty(DomRect.prototype, 'alpha', Object.getOwnPropertyDescriptor(Rect.prototype, 'alpha'));
  Object.defineProperty(DomRect.prototype, 'interactivityEnabled', Object.getOwnPropertyDescriptor(Rect.prototype, 'interactivityEnabled'));
  Object.defineProperty(DomRect.prototype, 'bottom', Object.getOwnPropertyDescriptor(Rect.prototype, 'bottom'));
  Object.defineProperty(DomRect.prototype, 'right', Object.getOwnPropertyDescriptor(Rect.prototype, 'right'));
  Object.defineProperty(DomRect.prototype, 'height', Object.getOwnPropertyDescriptor(Rect.prototype, 'height'));
  Object.defineProperty(DomRect.prototype, 'width', Object.getOwnPropertyDescriptor(Rect.prototype, 'width'));
  DomScrollArea.prototype.createLayoutData = ScrollArea.prototype.createLayoutData;
  DomScrollArea.prototype.layout_ge8abi$ = ScrollArea.prototype.layout_ge8abi$;
  DomScrollArea.prototype.getChildUnderPoint_g1oyt7$ = ScrollArea.prototype.getChildUnderPoint_g1oyt7$;
  DomScrollArea.prototype.getChildUnderRay_p0mkez$ = ScrollArea.prototype.getChildUnderRay_p0mkez$;
  DomScrollArea.prototype.getChildrenUnderPoint_adthd4$ = ScrollArea.prototype.getChildrenUnderPoint_adthd4$;
  DomScrollArea.prototype.getChildrenUnderRay_w6o14y$ = ScrollArea.prototype.getChildrenUnderRay_w6o14y$;
  DomScrollArea.prototype.isRendered = ScrollArea.prototype.isRendered;
  DomScrollArea.prototype.addInteractionSignal_pqftit$ = ScrollArea.prototype.addInteractionSignal_pqftit$;
  DomScrollArea.prototype.getInteractionSignal_j3fyc4$ = ScrollArea.prototype.getInteractionSignal_j3fyc4$;
  DomScrollArea.prototype.handlesInteraction_1811yh$ = ScrollArea.prototype.handlesInteraction_1811yh$;
  DomScrollArea.prototype.handlesInteraction_j3fyc4$ = ScrollArea.prototype.handlesInteraction_j3fyc4$;
  DomScrollArea.prototype.hasInteraction_j3fyc4$ = ScrollArea.prototype.hasInteraction_j3fyc4$;
  DomScrollArea.prototype.hasInteraction_j3fyc4$$default = ScrollArea.prototype.hasInteraction_j3fyc4$$default;
  DomScrollArea.prototype.intersectsGlobalRay_ujzndq$ = ScrollArea.prototype.intersectsGlobalRay_ujzndq$;
  DomScrollArea.prototype.intersectsGlobalRay_94uff6$ = ScrollArea.prototype.intersectsGlobalRay_94uff6$;
  DomScrollArea.prototype.setSize_i12l7q$ = ScrollArea.prototype.setSize_i12l7q$;
  DomScrollArea.prototype.setSize_yxjqmk$ = ScrollArea.prototype.setSize_yxjqmk$;
  DomScrollArea.prototype.moveTo_9wm29k$ = ScrollArea.prototype.moveTo_9wm29k$;
  DomScrollArea.prototype.moveTo_y2kzbl$ = ScrollArea.prototype.moveTo_y2kzbl$;
  DomScrollArea.prototype.moveTo_y2kzbl$$default = ScrollArea.prototype.moveTo_y2kzbl$$default;
  DomScrollArea.prototype.setPosition_y2kzbl$ = ScrollArea.prototype.setPosition_y2kzbl$;
  DomScrollArea.prototype.convertCoord_jsa5cl$ = ScrollArea.prototype.convertCoord_jsa5cl$;
  DomScrollArea.prototype.globalToLocal_ujzndq$ = ScrollArea.prototype.globalToLocal_ujzndq$;
  DomScrollArea.prototype.globalToLocal_9wm29k$ = ScrollArea.prototype.globalToLocal_9wm29k$;
  DomScrollArea.prototype.localToGlobal_ujzndq$ = ScrollArea.prototype.localToGlobal_ujzndq$;
  DomScrollArea.prototype.localToGlobal_9wm29k$ = ScrollArea.prototype.localToGlobal_9wm29k$;
  DomScrollArea.prototype.rayToPlane_94uff5$ = ScrollArea.prototype.rayToPlane_94uff5$;
  DomScrollArea.prototype.setOrigin_y2kzbl$ = ScrollArea.prototype.setOrigin_y2kzbl$;
  DomScrollArea.prototype.setRotation_y2kzbl$ = ScrollArea.prototype.setRotation_y2kzbl$;
  DomScrollArea.prototype.setScaling_y2kzbl$ = ScrollArea.prototype.setScaling_y2kzbl$;
  DomScrollArea.prototype.localToWindow_9wm29k$ = ScrollArea.prototype.localToWindow_9wm29k$;
  DomScrollArea.prototype.windowToLocal_9wm29l$ = ScrollArea.prototype.windowToLocal_9wm29l$;
  DomScrollArea.prototype.nextSibling = ScrollArea.prototype.nextSibling;
  DomScrollArea.prototype.previousSibling = ScrollArea.prototype.previousSibling;
  DomScrollArea.prototype.validate = ScrollArea.prototype.validate;
  DomScrollArea.prototype.validate_za3lpa$ = ScrollArea.prototype.validate_za3lpa$;
  DomScrollArea.prototype.containsChild_npz94r$ = ScrollArea.prototype.containsChild_npz94r$;
  DomScrollArea.prototype.getChildAt_za3lpa$ = ScrollArea.prototype.getChildAt_za3lpa$;
  DomScrollArea.prototype.iterateChildren_bwf5pq$ = ScrollArea.prototype.iterateChildren_bwf5pq$;
  DomScrollArea.prototype.iterateChildren_9z398f$ = ScrollArea.prototype.iterateChildren_9z398f$;
  DomScrollArea.prototype.iterateChildrenReversed_bwf5pq$ = ScrollArea.prototype.iterateChildrenReversed_bwf5pq$;
  DomScrollArea.prototype.addElementAfter_tu2188$ = ScrollArea.prototype.addElementAfter_tu2188$;
  DomScrollArea.prototype.addElementBefore_tu2188$ = ScrollArea.prototype.addElementBefore_tu2188$;
  DomScrollArea.prototype.clearElements_6taknv$ = ScrollArea.prototype.clearElements_6taknv$;
  DomScrollArea.prototype.unaryMinus_8db8yx$ = ScrollArea.prototype.unaryMinus_8db8yx$;
  DomScrollArea.prototype.unaryPlus_8db8yx$ = ScrollArea.prototype.unaryPlus_8db8yx$;
  Object.defineProperty(DomScrollArea.prototype, 'alpha', Object.getOwnPropertyDescriptor(ScrollArea.prototype, 'alpha'));
  Object.defineProperty(DomScrollArea.prototype, 'interactivityEnabled', Object.getOwnPropertyDescriptor(ScrollArea.prototype, 'interactivityEnabled'));
  Object.defineProperty(DomScrollArea.prototype, 'bottom', Object.getOwnPropertyDescriptor(ScrollArea.prototype, 'bottom'));
  Object.defineProperty(DomScrollArea.prototype, 'right', Object.getOwnPropertyDescriptor(ScrollArea.prototype, 'right'));
  Object.defineProperty(DomScrollArea.prototype, 'height', Object.getOwnPropertyDescriptor(ScrollArea.prototype, 'height'));
  Object.defineProperty(DomScrollArea.prototype, 'width', Object.getOwnPropertyDescriptor(ScrollArea.prototype, 'width'));
  Object.defineProperty(DomScrollArea.prototype, 'numChildren', Object.getOwnPropertyDescriptor(ScrollArea.prototype, 'numChildren'));
  DomScrollModelBase.prototype.clamp_mx4ult$ = MutableClampedScrollModel.prototype.clamp_mx4ult$;
  DomScrollModelBase.prototype.snap_mx4ult$ = MutableClampedScrollModel.prototype.snap_mx4ult$;
  Object.defineProperty(DomScrollModelBase.prototype, 'value', Object.getOwnPropertyDescriptor(MutableClampedScrollModel.prototype, 'value'));
  DomScrollRect.prototype.getChildUnderPoint_g1oyt7$ = ScrollRect.prototype.getChildUnderPoint_g1oyt7$;
  DomScrollRect.prototype.getChildUnderRay_p0mkez$ = ScrollRect.prototype.getChildUnderRay_p0mkez$;
  DomScrollRect.prototype.getChildrenUnderPoint_adthd4$ = ScrollRect.prototype.getChildrenUnderPoint_adthd4$;
  DomScrollRect.prototype.getChildrenUnderRay_w6o14y$ = ScrollRect.prototype.getChildrenUnderRay_w6o14y$;
  DomScrollRect.prototype.isRendered = ScrollRect.prototype.isRendered;
  DomScrollRect.prototype.addInteractionSignal_pqftit$ = ScrollRect.prototype.addInteractionSignal_pqftit$;
  DomScrollRect.prototype.getInteractionSignal_j3fyc4$ = ScrollRect.prototype.getInteractionSignal_j3fyc4$;
  DomScrollRect.prototype.handlesInteraction_1811yh$ = ScrollRect.prototype.handlesInteraction_1811yh$;
  DomScrollRect.prototype.handlesInteraction_j3fyc4$ = ScrollRect.prototype.handlesInteraction_j3fyc4$;
  DomScrollRect.prototype.hasInteraction_j3fyc4$ = ScrollRect.prototype.hasInteraction_j3fyc4$;
  DomScrollRect.prototype.hasInteraction_j3fyc4$$default = ScrollRect.prototype.hasInteraction_j3fyc4$$default;
  DomScrollRect.prototype.intersectsGlobalRay_ujzndq$ = ScrollRect.prototype.intersectsGlobalRay_ujzndq$;
  DomScrollRect.prototype.intersectsGlobalRay_94uff6$ = ScrollRect.prototype.intersectsGlobalRay_94uff6$;
  DomScrollRect.prototype.setSize_i12l7q$ = ScrollRect.prototype.setSize_i12l7q$;
  DomScrollRect.prototype.setSize_yxjqmk$ = ScrollRect.prototype.setSize_yxjqmk$;
  DomScrollRect.prototype.moveTo_9wm29k$ = ScrollRect.prototype.moveTo_9wm29k$;
  DomScrollRect.prototype.moveTo_y2kzbl$ = ScrollRect.prototype.moveTo_y2kzbl$;
  DomScrollRect.prototype.moveTo_y2kzbl$$default = ScrollRect.prototype.moveTo_y2kzbl$$default;
  DomScrollRect.prototype.setPosition_y2kzbl$ = ScrollRect.prototype.setPosition_y2kzbl$;
  DomScrollRect.prototype.convertCoord_jsa5cl$ = ScrollRect.prototype.convertCoord_jsa5cl$;
  DomScrollRect.prototype.globalToLocal_ujzndq$ = ScrollRect.prototype.globalToLocal_ujzndq$;
  DomScrollRect.prototype.globalToLocal_9wm29k$ = ScrollRect.prototype.globalToLocal_9wm29k$;
  DomScrollRect.prototype.localToGlobal_ujzndq$ = ScrollRect.prototype.localToGlobal_ujzndq$;
  DomScrollRect.prototype.localToGlobal_9wm29k$ = ScrollRect.prototype.localToGlobal_9wm29k$;
  DomScrollRect.prototype.rayToPlane_94uff5$ = ScrollRect.prototype.rayToPlane_94uff5$;
  DomScrollRect.prototype.setOrigin_y2kzbl$ = ScrollRect.prototype.setOrigin_y2kzbl$;
  DomScrollRect.prototype.setRotation_y2kzbl$ = ScrollRect.prototype.setRotation_y2kzbl$;
  DomScrollRect.prototype.setScaling_y2kzbl$ = ScrollRect.prototype.setScaling_y2kzbl$;
  DomScrollRect.prototype.localToWindow_9wm29k$ = ScrollRect.prototype.localToWindow_9wm29k$;
  DomScrollRect.prototype.windowToLocal_9wm29l$ = ScrollRect.prototype.windowToLocal_9wm29l$;
  DomScrollRect.prototype.nextSibling = ScrollRect.prototype.nextSibling;
  DomScrollRect.prototype.previousSibling = ScrollRect.prototype.previousSibling;
  DomScrollRect.prototype.validate = ScrollRect.prototype.validate;
  DomScrollRect.prototype.validate_za3lpa$ = ScrollRect.prototype.validate_za3lpa$;
  DomScrollRect.prototype.containsChild_npz94r$ = ScrollRect.prototype.containsChild_npz94r$;
  DomScrollRect.prototype.getChildAt_za3lpa$ = ScrollRect.prototype.getChildAt_za3lpa$;
  DomScrollRect.prototype.iterateChildren_bwf5pq$ = ScrollRect.prototype.iterateChildren_bwf5pq$;
  DomScrollRect.prototype.iterateChildren_9z398f$ = ScrollRect.prototype.iterateChildren_9z398f$;
  DomScrollRect.prototype.iterateChildrenReversed_bwf5pq$ = ScrollRect.prototype.iterateChildrenReversed_bwf5pq$;
  DomScrollRect.prototype.addElementAfter_tu2188$ = ScrollRect.prototype.addElementAfter_tu2188$;
  DomScrollRect.prototype.addElementBefore_tu2188$ = ScrollRect.prototype.addElementBefore_tu2188$;
  DomScrollRect.prototype.clearElements_6taknv$ = ScrollRect.prototype.clearElements_6taknv$;
  DomScrollRect.prototype.unaryMinus_8db8yx$ = ScrollRect.prototype.unaryMinus_8db8yx$;
  DomScrollRect.prototype.unaryPlus_8db8yx$ = ScrollRect.prototype.unaryPlus_8db8yx$;
  Object.defineProperty(DomScrollRect.prototype, 'contentsHeight', Object.getOwnPropertyDescriptor(ScrollRect.prototype, 'contentsHeight'));
  Object.defineProperty(DomScrollRect.prototype, 'contentsWidth', Object.getOwnPropertyDescriptor(ScrollRect.prototype, 'contentsWidth'));
  Object.defineProperty(DomScrollRect.prototype, 'alpha', Object.getOwnPropertyDescriptor(ScrollRect.prototype, 'alpha'));
  Object.defineProperty(DomScrollRect.prototype, 'interactivityEnabled', Object.getOwnPropertyDescriptor(ScrollRect.prototype, 'interactivityEnabled'));
  Object.defineProperty(DomScrollRect.prototype, 'bottom', Object.getOwnPropertyDescriptor(ScrollRect.prototype, 'bottom'));
  Object.defineProperty(DomScrollRect.prototype, 'right', Object.getOwnPropertyDescriptor(ScrollRect.prototype, 'right'));
  Object.defineProperty(DomScrollRect.prototype, 'height', Object.getOwnPropertyDescriptor(ScrollRect.prototype, 'height'));
  Object.defineProperty(DomScrollRect.prototype, 'width', Object.getOwnPropertyDescriptor(ScrollRect.prototype, 'width'));
  Object.defineProperty(DomScrollRect.prototype, 'numChildren', Object.getOwnPropertyDescriptor(ScrollRect.prototype, 'numChildren'));
  DomTextInput.prototype.blur = TextInput.prototype.blur;
  DomTextInput.prototype.focus = TextInput.prototype.focus;
  DomTextInput.prototype.onBlurred = TextInput.prototype.onBlurred;
  DomTextInput.prototype.onFocused = TextInput.prototype.onFocused;
  DomTextInput.prototype.getChildUnderPoint_g1oyt7$ = TextInput.prototype.getChildUnderPoint_g1oyt7$;
  DomTextInput.prototype.getChildUnderRay_p0mkez$ = TextInput.prototype.getChildUnderRay_p0mkez$;
  DomTextInput.prototype.getChildrenUnderPoint_adthd4$ = TextInput.prototype.getChildrenUnderPoint_adthd4$;
  DomTextInput.prototype.getChildrenUnderRay_w6o14y$ = TextInput.prototype.getChildrenUnderRay_w6o14y$;
  DomTextInput.prototype.isRendered = TextInput.prototype.isRendered;
  DomTextInput.prototype.addInteractionSignal_pqftit$ = TextInput.prototype.addInteractionSignal_pqftit$;
  DomTextInput.prototype.getInteractionSignal_j3fyc4$ = TextInput.prototype.getInteractionSignal_j3fyc4$;
  DomTextInput.prototype.handlesInteraction_1811yh$ = TextInput.prototype.handlesInteraction_1811yh$;
  DomTextInput.prototype.handlesInteraction_j3fyc4$ = TextInput.prototype.handlesInteraction_j3fyc4$;
  DomTextInput.prototype.hasInteraction_j3fyc4$ = TextInput.prototype.hasInteraction_j3fyc4$;
  DomTextInput.prototype.hasInteraction_j3fyc4$$default = TextInput.prototype.hasInteraction_j3fyc4$$default;
  DomTextInput.prototype.intersectsGlobalRay_ujzndq$ = TextInput.prototype.intersectsGlobalRay_ujzndq$;
  DomTextInput.prototype.intersectsGlobalRay_94uff6$ = TextInput.prototype.intersectsGlobalRay_94uff6$;
  DomTextInput.prototype.setSize_i12l7q$ = TextInput.prototype.setSize_i12l7q$;
  DomTextInput.prototype.setSize_yxjqmk$ = TextInput.prototype.setSize_yxjqmk$;
  DomTextInput.prototype.moveTo_9wm29k$ = TextInput.prototype.moveTo_9wm29k$;
  DomTextInput.prototype.moveTo_y2kzbl$ = TextInput.prototype.moveTo_y2kzbl$;
  DomTextInput.prototype.moveTo_y2kzbl$$default = TextInput.prototype.moveTo_y2kzbl$$default;
  DomTextInput.prototype.setPosition_y2kzbl$ = TextInput.prototype.setPosition_y2kzbl$;
  DomTextInput.prototype.convertCoord_jsa5cl$ = TextInput.prototype.convertCoord_jsa5cl$;
  DomTextInput.prototype.globalToLocal_ujzndq$ = TextInput.prototype.globalToLocal_ujzndq$;
  DomTextInput.prototype.globalToLocal_9wm29k$ = TextInput.prototype.globalToLocal_9wm29k$;
  DomTextInput.prototype.localToGlobal_ujzndq$ = TextInput.prototype.localToGlobal_ujzndq$;
  DomTextInput.prototype.localToGlobal_9wm29k$ = TextInput.prototype.localToGlobal_9wm29k$;
  DomTextInput.prototype.rayToPlane_94uff5$ = TextInput.prototype.rayToPlane_94uff5$;
  DomTextInput.prototype.setOrigin_y2kzbl$ = TextInput.prototype.setOrigin_y2kzbl$;
  DomTextInput.prototype.setRotation_y2kzbl$ = TextInput.prototype.setRotation_y2kzbl$;
  DomTextInput.prototype.setScaling_y2kzbl$ = TextInput.prototype.setScaling_y2kzbl$;
  DomTextInput.prototype.localToWindow_9wm29k$ = TextInput.prototype.localToWindow_9wm29k$;
  DomTextInput.prototype.windowToLocal_9wm29l$ = TextInput.prototype.windowToLocal_9wm29l$;
  DomTextInput.prototype.nextSibling = TextInput.prototype.nextSibling;
  DomTextInput.prototype.previousSibling = TextInput.prototype.previousSibling;
  DomTextInput.prototype.validate = TextInput.prototype.validate;
  DomTextInput.prototype.validate_za3lpa$ = TextInput.prototype.validate_za3lpa$;
  Object.defineProperty(DomTextInput.prototype, 'isFocused', Object.getOwnPropertyDescriptor(TextInput.prototype, 'isFocused'));
  Object.defineProperty(DomTextInput.prototype, 'parentFocusableContainer', Object.getOwnPropertyDescriptor(TextInput.prototype, 'parentFocusableContainer'));
  Object.defineProperty(DomTextInput.prototype, 'alpha', Object.getOwnPropertyDescriptor(TextInput.prototype, 'alpha'));
  Object.defineProperty(DomTextInput.prototype, 'interactivityEnabled', Object.getOwnPropertyDescriptor(TextInput.prototype, 'interactivityEnabled'));
  Object.defineProperty(DomTextInput.prototype, 'bottom', Object.getOwnPropertyDescriptor(TextInput.prototype, 'bottom'));
  Object.defineProperty(DomTextInput.prototype, 'right', Object.getOwnPropertyDescriptor(TextInput.prototype, 'right'));
  Object.defineProperty(DomTextInput.prototype, 'height', Object.getOwnPropertyDescriptor(TextInput.prototype, 'height'));
  Object.defineProperty(DomTextInput.prototype, 'width', Object.getOwnPropertyDescriptor(TextInput.prototype, 'width'));
  DomTextArea.prototype.blur = TextArea.prototype.blur;
  DomTextArea.prototype.focus = TextArea.prototype.focus;
  DomTextArea.prototype.onBlurred = TextArea.prototype.onBlurred;
  DomTextArea.prototype.onFocused = TextArea.prototype.onFocused;
  DomTextArea.prototype.getChildUnderPoint_g1oyt7$ = TextArea.prototype.getChildUnderPoint_g1oyt7$;
  DomTextArea.prototype.getChildUnderRay_p0mkez$ = TextArea.prototype.getChildUnderRay_p0mkez$;
  DomTextArea.prototype.getChildrenUnderPoint_adthd4$ = TextArea.prototype.getChildrenUnderPoint_adthd4$;
  DomTextArea.prototype.getChildrenUnderRay_w6o14y$ = TextArea.prototype.getChildrenUnderRay_w6o14y$;
  DomTextArea.prototype.isRendered = TextArea.prototype.isRendered;
  DomTextArea.prototype.addInteractionSignal_pqftit$ = TextArea.prototype.addInteractionSignal_pqftit$;
  DomTextArea.prototype.getInteractionSignal_j3fyc4$ = TextArea.prototype.getInteractionSignal_j3fyc4$;
  DomTextArea.prototype.handlesInteraction_1811yh$ = TextArea.prototype.handlesInteraction_1811yh$;
  DomTextArea.prototype.handlesInteraction_j3fyc4$ = TextArea.prototype.handlesInteraction_j3fyc4$;
  DomTextArea.prototype.hasInteraction_j3fyc4$ = TextArea.prototype.hasInteraction_j3fyc4$;
  DomTextArea.prototype.hasInteraction_j3fyc4$$default = TextArea.prototype.hasInteraction_j3fyc4$$default;
  DomTextArea.prototype.intersectsGlobalRay_ujzndq$ = TextArea.prototype.intersectsGlobalRay_ujzndq$;
  DomTextArea.prototype.intersectsGlobalRay_94uff6$ = TextArea.prototype.intersectsGlobalRay_94uff6$;
  DomTextArea.prototype.setSize_i12l7q$ = TextArea.prototype.setSize_i12l7q$;
  DomTextArea.prototype.setSize_yxjqmk$ = TextArea.prototype.setSize_yxjqmk$;
  DomTextArea.prototype.moveTo_9wm29k$ = TextArea.prototype.moveTo_9wm29k$;
  DomTextArea.prototype.moveTo_y2kzbl$ = TextArea.prototype.moveTo_y2kzbl$;
  DomTextArea.prototype.moveTo_y2kzbl$$default = TextArea.prototype.moveTo_y2kzbl$$default;
  DomTextArea.prototype.setPosition_y2kzbl$ = TextArea.prototype.setPosition_y2kzbl$;
  DomTextArea.prototype.convertCoord_jsa5cl$ = TextArea.prototype.convertCoord_jsa5cl$;
  DomTextArea.prototype.globalToLocal_ujzndq$ = TextArea.prototype.globalToLocal_ujzndq$;
  DomTextArea.prototype.globalToLocal_9wm29k$ = TextArea.prototype.globalToLocal_9wm29k$;
  DomTextArea.prototype.localToGlobal_ujzndq$ = TextArea.prototype.localToGlobal_ujzndq$;
  DomTextArea.prototype.localToGlobal_9wm29k$ = TextArea.prototype.localToGlobal_9wm29k$;
  DomTextArea.prototype.rayToPlane_94uff5$ = TextArea.prototype.rayToPlane_94uff5$;
  DomTextArea.prototype.setOrigin_y2kzbl$ = TextArea.prototype.setOrigin_y2kzbl$;
  DomTextArea.prototype.setRotation_y2kzbl$ = TextArea.prototype.setRotation_y2kzbl$;
  DomTextArea.prototype.setScaling_y2kzbl$ = TextArea.prototype.setScaling_y2kzbl$;
  DomTextArea.prototype.localToWindow_9wm29k$ = TextArea.prototype.localToWindow_9wm29k$;
  DomTextArea.prototype.windowToLocal_9wm29l$ = TextArea.prototype.windowToLocal_9wm29l$;
  DomTextArea.prototype.nextSibling = TextArea.prototype.nextSibling;
  DomTextArea.prototype.previousSibling = TextArea.prototype.previousSibling;
  DomTextArea.prototype.validate = TextArea.prototype.validate;
  DomTextArea.prototype.validate_za3lpa$ = TextArea.prototype.validate_za3lpa$;
  Object.defineProperty(DomTextArea.prototype, 'isFocused', Object.getOwnPropertyDescriptor(TextArea.prototype, 'isFocused'));
  Object.defineProperty(DomTextArea.prototype, 'parentFocusableContainer', Object.getOwnPropertyDescriptor(TextArea.prototype, 'parentFocusableContainer'));
  Object.defineProperty(DomTextArea.prototype, 'alpha', Object.getOwnPropertyDescriptor(TextArea.prototype, 'alpha'));
  Object.defineProperty(DomTextArea.prototype, 'interactivityEnabled', Object.getOwnPropertyDescriptor(TextArea.prototype, 'interactivityEnabled'));
  Object.defineProperty(DomTextArea.prototype, 'bottom', Object.getOwnPropertyDescriptor(TextArea.prototype, 'bottom'));
  Object.defineProperty(DomTextArea.prototype, 'right', Object.getOwnPropertyDescriptor(TextArea.prototype, 'right'));
  Object.defineProperty(DomTextArea.prototype, 'height', Object.getOwnPropertyDescriptor(TextArea.prototype, 'height'));
  Object.defineProperty(DomTextArea.prototype, 'width', Object.getOwnPropertyDescriptor(TextArea.prototype, 'width'));
  DomTextureComponent.prototype.setRegion_smhrz9$ = TextureComponent.prototype.setRegion_smhrz9$;
  DomTextureComponent.prototype.setRegion_o5do7t$ = TextureComponent.prototype.setRegion_o5do7t$;
  DomTextureComponent.prototype.getChildUnderPoint_g1oyt7$ = TextureComponent.prototype.getChildUnderPoint_g1oyt7$;
  DomTextureComponent.prototype.getChildUnderRay_p0mkez$ = TextureComponent.prototype.getChildUnderRay_p0mkez$;
  DomTextureComponent.prototype.getChildrenUnderPoint_adthd4$ = TextureComponent.prototype.getChildrenUnderPoint_adthd4$;
  DomTextureComponent.prototype.getChildrenUnderRay_w6o14y$ = TextureComponent.prototype.getChildrenUnderRay_w6o14y$;
  DomTextureComponent.prototype.isRendered = TextureComponent.prototype.isRendered;
  DomTextureComponent.prototype.addInteractionSignal_pqftit$ = TextureComponent.prototype.addInteractionSignal_pqftit$;
  DomTextureComponent.prototype.getInteractionSignal_j3fyc4$ = TextureComponent.prototype.getInteractionSignal_j3fyc4$;
  DomTextureComponent.prototype.handlesInteraction_1811yh$ = TextureComponent.prototype.handlesInteraction_1811yh$;
  DomTextureComponent.prototype.handlesInteraction_j3fyc4$ = TextureComponent.prototype.handlesInteraction_j3fyc4$;
  DomTextureComponent.prototype.hasInteraction_j3fyc4$ = TextureComponent.prototype.hasInteraction_j3fyc4$;
  DomTextureComponent.prototype.hasInteraction_j3fyc4$$default = TextureComponent.prototype.hasInteraction_j3fyc4$$default;
  DomTextureComponent.prototype.intersectsGlobalRay_ujzndq$ = TextureComponent.prototype.intersectsGlobalRay_ujzndq$;
  DomTextureComponent.prototype.intersectsGlobalRay_94uff6$ = TextureComponent.prototype.intersectsGlobalRay_94uff6$;
  DomTextureComponent.prototype.setSize_i12l7q$ = TextureComponent.prototype.setSize_i12l7q$;
  DomTextureComponent.prototype.setSize_yxjqmk$ = TextureComponent.prototype.setSize_yxjqmk$;
  DomTextureComponent.prototype.moveTo_9wm29k$ = TextureComponent.prototype.moveTo_9wm29k$;
  DomTextureComponent.prototype.moveTo_y2kzbl$ = TextureComponent.prototype.moveTo_y2kzbl$;
  DomTextureComponent.prototype.moveTo_y2kzbl$$default = TextureComponent.prototype.moveTo_y2kzbl$$default;
  DomTextureComponent.prototype.setPosition_y2kzbl$ = TextureComponent.prototype.setPosition_y2kzbl$;
  DomTextureComponent.prototype.convertCoord_jsa5cl$ = TextureComponent.prototype.convertCoord_jsa5cl$;
  DomTextureComponent.prototype.globalToLocal_ujzndq$ = TextureComponent.prototype.globalToLocal_ujzndq$;
  DomTextureComponent.prototype.globalToLocal_9wm29k$ = TextureComponent.prototype.globalToLocal_9wm29k$;
  DomTextureComponent.prototype.localToGlobal_ujzndq$ = TextureComponent.prototype.localToGlobal_ujzndq$;
  DomTextureComponent.prototype.localToGlobal_9wm29k$ = TextureComponent.prototype.localToGlobal_9wm29k$;
  DomTextureComponent.prototype.rayToPlane_94uff5$ = TextureComponent.prototype.rayToPlane_94uff5$;
  DomTextureComponent.prototype.setOrigin_y2kzbl$ = TextureComponent.prototype.setOrigin_y2kzbl$;
  DomTextureComponent.prototype.setRotation_y2kzbl$ = TextureComponent.prototype.setRotation_y2kzbl$;
  DomTextureComponent.prototype.setScaling_y2kzbl$ = TextureComponent.prototype.setScaling_y2kzbl$;
  DomTextureComponent.prototype.localToWindow_9wm29k$ = TextureComponent.prototype.localToWindow_9wm29k$;
  DomTextureComponent.prototype.windowToLocal_9wm29l$ = TextureComponent.prototype.windowToLocal_9wm29l$;
  DomTextureComponent.prototype.nextSibling = TextureComponent.prototype.nextSibling;
  DomTextureComponent.prototype.previousSibling = TextureComponent.prototype.previousSibling;
  DomTextureComponent.prototype.validate = TextureComponent.prototype.validate;
  DomTextureComponent.prototype.validate_za3lpa$ = TextureComponent.prototype.validate_za3lpa$;
  Object.defineProperty(DomTextureComponent.prototype, 'alpha', Object.getOwnPropertyDescriptor(TextureComponent.prototype, 'alpha'));
  Object.defineProperty(DomTextureComponent.prototype, 'interactivityEnabled', Object.getOwnPropertyDescriptor(TextureComponent.prototype, 'interactivityEnabled'));
  Object.defineProperty(DomTextureComponent.prototype, 'bottom', Object.getOwnPropertyDescriptor(TextureComponent.prototype, 'bottom'));
  Object.defineProperty(DomTextureComponent.prototype, 'right', Object.getOwnPropertyDescriptor(TextureComponent.prototype, 'right'));
  Object.defineProperty(DomTextureComponent.prototype, 'height', Object.getOwnPropertyDescriptor(TextureComponent.prototype, 'height'));
  Object.defineProperty(DomTextureComponent.prototype, 'width', Object.getOwnPropertyDescriptor(TextureComponent.prototype, 'width'));
  DomDataTransfer.prototype.getItemByType_61zpoe$ = DataTransferRead.prototype.getItemByType_61zpoe$;
  DomInteractivityManager.prototype.dispatch_z2oxuu$ = InteractivityManager.prototype.dispatch_z2oxuu$;
  DomInteractivityManager.prototype.dispatch_qts5q5$ = InteractivityManager.prototype.dispatch_qts5q5$;
  DomStageImpl.prototype.getChildUnderPoint_g1oyt7$ = Stage.prototype.getChildUnderPoint_g1oyt7$;
  DomStageImpl.prototype.getChildUnderRay_p0mkez$ = Stage.prototype.getChildUnderRay_p0mkez$;
  DomStageImpl.prototype.getChildrenUnderPoint_adthd4$ = Stage.prototype.getChildrenUnderPoint_adthd4$;
  DomStageImpl.prototype.getChildrenUnderRay_w6o14y$ = Stage.prototype.getChildrenUnderRay_w6o14y$;
  DomStageImpl.prototype.isRendered = Stage.prototype.isRendered;
  DomStageImpl.prototype.addInteractionSignal_pqftit$ = Stage.prototype.addInteractionSignal_pqftit$;
  DomStageImpl.prototype.getInteractionSignal_j3fyc4$ = Stage.prototype.getInteractionSignal_j3fyc4$;
  DomStageImpl.prototype.handlesInteraction_1811yh$ = Stage.prototype.handlesInteraction_1811yh$;
  DomStageImpl.prototype.handlesInteraction_j3fyc4$ = Stage.prototype.handlesInteraction_j3fyc4$;
  DomStageImpl.prototype.hasInteraction_j3fyc4$ = Stage.prototype.hasInteraction_j3fyc4$;
  DomStageImpl.prototype.hasInteraction_j3fyc4$$default = Stage.prototype.hasInteraction_j3fyc4$$default;
  DomStageImpl.prototype.intersectsGlobalRay_ujzndq$ = Stage.prototype.intersectsGlobalRay_ujzndq$;
  DomStageImpl.prototype.setSize_i12l7q$ = Stage.prototype.setSize_i12l7q$;
  DomStageImpl.prototype.setSize_yxjqmk$ = Stage.prototype.setSize_yxjqmk$;
  DomStageImpl.prototype.moveTo_9wm29k$ = Stage.prototype.moveTo_9wm29k$;
  DomStageImpl.prototype.moveTo_y2kzbl$ = Stage.prototype.moveTo_y2kzbl$;
  DomStageImpl.prototype.moveTo_y2kzbl$$default = Stage.prototype.moveTo_y2kzbl$$default;
  DomStageImpl.prototype.setPosition_y2kzbl$ = Stage.prototype.setPosition_y2kzbl$;
  DomStageImpl.prototype.convertCoord_jsa5cl$ = Stage.prototype.convertCoord_jsa5cl$;
  DomStageImpl.prototype.globalToLocal_ujzndq$ = Stage.prototype.globalToLocal_ujzndq$;
  DomStageImpl.prototype.globalToLocal_9wm29k$ = Stage.prototype.globalToLocal_9wm29k$;
  DomStageImpl.prototype.localToGlobal_ujzndq$ = Stage.prototype.localToGlobal_ujzndq$;
  DomStageImpl.prototype.localToGlobal_9wm29k$ = Stage.prototype.localToGlobal_9wm29k$;
  DomStageImpl.prototype.rayToPlane_94uff5$ = Stage.prototype.rayToPlane_94uff5$;
  DomStageImpl.prototype.setOrigin_y2kzbl$ = Stage.prototype.setOrigin_y2kzbl$;
  DomStageImpl.prototype.setRotation_y2kzbl$ = Stage.prototype.setRotation_y2kzbl$;
  DomStageImpl.prototype.setScaling_y2kzbl$ = Stage.prototype.setScaling_y2kzbl$;
  DomStageImpl.prototype.localToWindow_9wm29k$ = Stage.prototype.localToWindow_9wm29k$;
  DomStageImpl.prototype.windowToLocal_9wm29l$ = Stage.prototype.windowToLocal_9wm29l$;
  DomStageImpl.prototype.nextSibling = Stage.prototype.nextSibling;
  DomStageImpl.prototype.previousSibling = Stage.prototype.previousSibling;
  DomStageImpl.prototype.validate = Stage.prototype.validate;
  DomStageImpl.prototype.validate_za3lpa$ = Stage.prototype.validate_za3lpa$;
  DomStageImpl.prototype.containsChild_npz94r$ = Stage.prototype.containsChild_npz94r$;
  DomStageImpl.prototype.getChildAt_za3lpa$ = Stage.prototype.getChildAt_za3lpa$;
  DomStageImpl.prototype.iterateChildren_bwf5pq$ = Stage.prototype.iterateChildren_bwf5pq$;
  DomStageImpl.prototype.iterateChildren_9z398f$ = Stage.prototype.iterateChildren_9z398f$;
  DomStageImpl.prototype.iterateChildrenReversed_bwf5pq$ = Stage.prototype.iterateChildrenReversed_bwf5pq$;
  DomStageImpl.prototype.addElementAfter_tu2188$ = Stage.prototype.addElementAfter_tu2188$;
  DomStageImpl.prototype.addElementBefore_tu2188$ = Stage.prototype.addElementBefore_tu2188$;
  DomStageImpl.prototype.clearElements_6taknv$ = Stage.prototype.clearElements_6taknv$;
  DomStageImpl.prototype.unaryMinus_8db8yx$ = Stage.prototype.unaryMinus_8db8yx$;
  DomStageImpl.prototype.unaryPlus_8db8yx$ = Stage.prototype.unaryPlus_8db8yx$;
  DomStageImpl.prototype.blur = Stage.prototype.blur;
  DomStageImpl.prototype.focus = Stage.prototype.focus;
  DomStageImpl.prototype.onBlurred = Stage.prototype.onBlurred;
  DomStageImpl.prototype.onFocused = Stage.prototype.onFocused;
  Object.defineProperty(DomStageImpl.prototype, 'alpha', Object.getOwnPropertyDescriptor(Stage.prototype, 'alpha'));
  Object.defineProperty(DomStageImpl.prototype, 'interactivityEnabled', Object.getOwnPropertyDescriptor(Stage.prototype, 'interactivityEnabled'));
  Object.defineProperty(DomStageImpl.prototype, 'bottom', Object.getOwnPropertyDescriptor(Stage.prototype, 'bottom'));
  Object.defineProperty(DomStageImpl.prototype, 'right', Object.getOwnPropertyDescriptor(Stage.prototype, 'right'));
  Object.defineProperty(DomStageImpl.prototype, 'height', Object.getOwnPropertyDescriptor(Stage.prototype, 'height'));
  Object.defineProperty(DomStageImpl.prototype, 'width', Object.getOwnPropertyDescriptor(Stage.prototype, 'width'));
  Object.defineProperty(DomStageImpl.prototype, 'numChildren', Object.getOwnPropertyDescriptor(Stage.prototype, 'numChildren'));
  Object.defineProperty(DomStageImpl.prototype, 'isFocused', Object.getOwnPropertyDescriptor(Stage.prototype, 'isFocused'));
  Object.defineProperty(DomStageImpl.prototype, 'parentFocusableContainer', Object.getOwnPropertyDescriptor(Stage.prototype, 'parentFocusableContainer'));
  DomTextureLoader.prototype.hasBeenInvoked = MutableAssetLoader.prototype.hasBeenInvoked;
  DomTextureLoader.prototype.hasCompleted = MutableAssetLoader.prototype.hasCompleted;
  DomTextureLoader.prototype.hasFailed = MutableAssetLoader.prototype.hasFailed;
  DomTextureLoader.prototype.hasSucceeded = MutableAssetLoader.prototype.hasSucceeded;
  DomTextureLoader.prototype.isRunning = MutableAssetLoader.prototype.isRunning;
  DomTextureLoader.prototype.setStatus_pxr8bi$ = MutableAssetLoader.prototype.setStatus_pxr8bi$;
  Object.defineProperty(DomTextureLoader.prototype, 'percentLoaded', Object.getOwnPropertyDescriptor(MutableAssetLoader.prototype, 'percentLoaded'));
  WebGl20.prototype.clearColor_1qghwi$ = Gl20.prototype.clearColor_1qghwi$;
  WebGl20.prototype.uniform2f_1b4vwg$ = Gl20.prototype.uniform2f_1b4vwg$;
  WebGl20.prototype.uniform3f_k001p3$ = Gl20.prototype.uniform3f_k001p3$;
  WebGl20.prototype.uniform3f_1b4vwf$ = Gl20.prototype.uniform3f_1b4vwf$;
  WebGl20.prototype.uniform4f_k001p3$ = Gl20.prototype.uniform4f_k001p3$;
  WebGl20.prototype.uniformMatrix4fv_7gr31f$ = Gl20.prototype.uniformMatrix4fv_7gr31f$;
  WebGl20.prototype.uniformMatrix4fv_yp0fny$ = Gl20.prototype.uniformMatrix4fv_yp0fny$;
  WebGlTextureLoader.prototype.hasBeenInvoked = MutableAssetLoader.prototype.hasBeenInvoked;
  WebGlTextureLoader.prototype.hasCompleted = MutableAssetLoader.prototype.hasCompleted;
  WebGlTextureLoader.prototype.hasFailed = MutableAssetLoader.prototype.hasFailed;
  WebGlTextureLoader.prototype.hasSucceeded = MutableAssetLoader.prototype.hasSucceeded;
  WebGlTextureLoader.prototype.isRunning = MutableAssetLoader.prototype.isRunning;
  WebGlTextureLoader.prototype.setStatus_pxr8bi$ = MutableAssetLoader.prototype.setStatus_pxr8bi$;
  Object.defineProperty(WebGlTextureLoader.prototype, 'percentLoaded', Object.getOwnPropertyDescriptor(MutableAssetLoader.prototype, 'percentLoaded'));
  JsKeyInput.prototype.keyIsDown_3iojlf$ = KeyInput.prototype.keyIsDown_3iojlf$;
  JsMouseInput.prototype.mousePosition_9wm29l$ = MouseInput.prototype.mousePosition_9wm29l$;
  JsByteBuffer.prototype.fill_11rb$ = NativeBuffer.prototype.fill_11rb$;
  JsByteBuffer.prototype.put_kcizie$ = NativeBuffer.prototype.put_kcizie$;
  JsByteBuffer.prototype.put_p1ys8y$ = NativeBuffer.prototype.put_p1ys8y$;
  JsByteBuffer.prototype.put_1phuh2$ = NativeBuffer.prototype.put_1phuh2$;
  Object.defineProperty(JsByteBuffer.prototype, 'remaining', Object.getOwnPropertyDescriptor(NativeBuffer.prototype, 'remaining'));
  JsShortBuffer.prototype.fill_11rb$ = NativeBuffer.prototype.fill_11rb$;
  JsShortBuffer.prototype.put_kcizie$ = NativeBuffer.prototype.put_kcizie$;
  JsShortBuffer.prototype.put_p1ys8y$ = NativeBuffer.prototype.put_p1ys8y$;
  JsShortBuffer.prototype.put_1phuh2$ = NativeBuffer.prototype.put_1phuh2$;
  Object.defineProperty(JsShortBuffer.prototype, 'remaining', Object.getOwnPropertyDescriptor(NativeBuffer.prototype, 'remaining'));
  JsIntBuffer.prototype.fill_11rb$ = NativeBuffer.prototype.fill_11rb$;
  JsIntBuffer.prototype.put_kcizie$ = NativeBuffer.prototype.put_kcizie$;
  JsIntBuffer.prototype.put_p1ys8y$ = NativeBuffer.prototype.put_p1ys8y$;
  JsIntBuffer.prototype.put_1phuh2$ = NativeBuffer.prototype.put_1phuh2$;
  Object.defineProperty(JsIntBuffer.prototype, 'remaining', Object.getOwnPropertyDescriptor(NativeBuffer.prototype, 'remaining'));
  JsFloatBuffer.prototype.fill_11rb$ = NativeBuffer.prototype.fill_11rb$;
  JsFloatBuffer.prototype.put_kcizie$ = NativeBuffer.prototype.put_kcizie$;
  JsFloatBuffer.prototype.put_p1ys8y$ = NativeBuffer.prototype.put_p1ys8y$;
  JsFloatBuffer.prototype.put_1phuh2$ = NativeBuffer.prototype.put_1phuh2$;
  Object.defineProperty(JsFloatBuffer.prototype, 'remaining', Object.getOwnPropertyDescriptor(NativeBuffer.prototype, 'remaining'));
  JsDoubleBuffer.prototype.fill_11rb$ = NativeBuffer.prototype.fill_11rb$;
  JsDoubleBuffer.prototype.put_kcizie$ = NativeBuffer.prototype.put_kcizie$;
  JsDoubleBuffer.prototype.put_p1ys8y$ = NativeBuffer.prototype.put_p1ys8y$;
  JsDoubleBuffer.prototype.put_1phuh2$ = NativeBuffer.prototype.put_1phuh2$;
  Object.defineProperty(JsDoubleBuffer.prototype, 'remaining', Object.getOwnPropertyDescriptor(NativeBuffer.prototype, 'remaining'));
  JsHttpRequest.prototype.hasBeenInvoked = MutableHttpRequest.prototype.hasBeenInvoked;
  JsHttpRequest.prototype.hasCompleted = MutableHttpRequest.prototype.hasCompleted;
  JsHttpRequest.prototype.hasFailed = MutableHttpRequest.prototype.hasFailed;
  JsHttpRequest.prototype.hasSucceeded = MutableHttpRequest.prototype.hasSucceeded;
  JsHttpRequest.prototype.isRunning = MutableHttpRequest.prototype.isRunning;
  JsHttpRequest.prototype.setStatus_pxr8bi$ = MutableHttpRequest.prototype.setStatus_pxr8bi$;
  Object.defineProperty(JsHttpRequest.prototype, 'responseError', Object.getOwnPropertyDescriptor(MutableHttpRequest.prototype, 'responseError'));
  Object.defineProperty(JsHttpRequest.prototype, 'resultBinary', Object.getOwnPropertyDescriptor(MutableHttpRequest.prototype, 'resultBinary'));
  Object.defineProperty(JsHttpRequest.prototype, 'resultText', Object.getOwnPropertyDescriptor(MutableHttpRequest.prototype, 'resultText'));
  Object.defineProperty(JsHttpRequest.prototype, 'percentLoaded', Object.getOwnPropertyDescriptor(MutableHttpRequest.prototype, 'percentLoaded'));
  JsTextLoader.prototype.hasBeenInvoked = MutableAssetLoader.prototype.hasBeenInvoked;
  JsTextLoader.prototype.hasCompleted = MutableAssetLoader.prototype.hasCompleted;
  JsTextLoader.prototype.hasFailed = MutableAssetLoader.prototype.hasFailed;
  JsTextLoader.prototype.hasSucceeded = MutableAssetLoader.prototype.hasSucceeded;
  JsTextLoader.prototype.isRunning = MutableAssetLoader.prototype.isRunning;
  JsTextLoader.prototype.setStatus_pxr8bi$ = MutableAssetLoader.prototype.setStatus_pxr8bi$;
  Object.defineProperty(JsTextLoader.prototype, 'percentLoaded', Object.getOwnPropertyDescriptor(MutableAssetLoader.prototype, 'percentLoaded'));
  TimeProviderImpl.prototype.nowS = TimeProvider.prototype.nowS;
  JsLocation.prototype.navigateToUrl_61zpoe$ = Location.prototype.navigateToUrl_61zpoe$;
  JsLocation.prototype.navigateToUrl_puj7f4$ = Location.prototype.navigateToUrl_puj7f4$;
  Object.defineProperty(JsLocation.prototype, 'searchParams', Object.getOwnPropertyDescriptor(Location.prototype, 'searchParams'));
  var package$com = _.com || (_.com = {});
  var package$acornui = package$com.acornui || (package$com.acornui = {});
  var package$js = package$acornui.js || (package$acornui.js = {});
  var package$audio = package$js.audio || (package$js.audio = {});
  Object.defineProperty(package$audio, 'audioContextSupported', {
    get: function () {
      return audioContextSupported;
    }
  });
  Object.defineProperty(PanningModel, 'EQUAL_POWER', {
    get: PanningModel$EQUAL_POWER_getInstance
  });
  Object.defineProperty(PanningModel, 'HRTF', {
    get: PanningModel$HRTF_getInstance
  });
  package$audio.PanningModel = PanningModel;
  Object.defineProperty(package$audio, 'JsAudioContext', {
    get: JsAudioContext_getInstance
  });
  package$audio.JsAudioElementMusic = JsAudioElementMusic;
  package$audio.JsAudioElementMusicLoader = JsAudioElementMusicLoader;
  package$audio.Audio_61zpoe$ = Audio;
  package$audio.JsAudioElementSound = JsAudioElementSound;
  package$audio.JsAudioElementSoundFactory = JsAudioElementSoundFactory;
  package$audio.JsAudioElementSoundLoader = JsAudioElementSoundLoader;
  package$audio.JsWebAudioMusic = JsWebAudioMusic;
  package$audio.JsWebAudioMusicLoader = JsWebAudioMusicLoader;
  package$audio.JsWebAudioSound = JsWebAudioSound;
  package$audio.JsWebAudioSoundFactory = JsWebAudioSoundFactory;
  package$audio.JsWebAudioSoundLoader = JsWebAudioSoundLoader;
  var package$cursor = package$js.cursor || (package$js.cursor = {});
  package$cursor.JsCursorManager = JsCursorManager;
  package$cursor.JsTextureCursor = JsTextureCursor;
  package$cursor.JsStandardCursor = JsStandardCursor;
  var package$dom = package$js.dom || (package$js.dom = {});
  var package$component = package$dom.component || (package$dom.component = {});
  package$component.DomComponent_61zpoe$ = DomComponent;
  package$component.DomComponent = DomComponent_0;
  package$component.userSelect_scbfwa$ = userSelect;
  Object.defineProperty(DomContainer, 'Companion', {
    get: DomContainer$Companion_getInstance
  });
  package$component.DomContainer_init_61zpoe$ = DomContainer_init;
  package$component.DomContainer = DomContainer;
  package$component.DomEditableTextField = DomEditableTextField;
  package$component.DomRect = DomRect;
  package$component.applyBox_ekc22t$ = applyBox;
  package$component.applyCss_8npcu2$ = applyCss;
  package$component.DomScrollArea = DomScrollArea;
  package$component.DomInlineContainer = DomInlineContainer;
  package$component.DomScrollModelBase = DomScrollModelBase;
  package$component.DomScrollTopModel = DomScrollTopModel;
  package$component.DomScrollLeftModel = DomScrollLeftModel;
  package$component.DomScrollRect = DomScrollRect;
  package$component.DomTextField = DomTextField;
  package$component.DomTextInput = DomTextInput;
  package$component.DomTextArea = DomTextArea;
  package$component.applyCss_8tx9km$ = applyCss_0;
  package$component.applyCss_pxdq4u$ = applyCss_1;
  package$component.DomTextureComponent = DomTextureComponent;
  package$dom.DomApplication = DomApplication;
  package$dom.MimeType_vqirvp$ = MimeType;
  Object.defineProperty(MimeType_0, 'Companion', {
    get: MimeType$Companion_getInstance
  });
  package$dom.MimeType = MimeType_0;
  package$dom.DomInteractivityManager = DomInteractivityManager;
  package$dom.DomStageImpl = DomStageImpl;
  package$dom.DomTexture = DomTexture;
  package$dom.DomTextureLoader = DomTextureLoader;
  package$dom.DomWindowImpl = DomWindowImpl;
  var package$focus = package$dom.focus || (package$dom.focus = {});
  package$focus.DomFocusManager = DomFocusManager;
  package$dom.NativeSignal = NativeSignal;
  var package$gl = package$js.gl || (package$js.gl = {});
  package$gl.WebGl20 = WebGl20;
  package$gl.WebGlProgramRef = WebGlProgramRef;
  package$gl.WebGlShaderRef = WebGlShaderRef;
  package$gl.WebGlBufferRef = WebGlBufferRef;
  package$gl.WebGlFramebufferRef = WebGlFramebufferRef;
  package$gl.WebGlRenderbufferRef = WebGlRenderbufferRef;
  package$gl.WebGlTextureRef = WebGlTextureRef;
  package$gl.WebGlActiveInfoRef = WebGlActiveInfoRef;
  package$gl.WebGlUniformLocationRef = WebGlUniformLocationRef;
  package$gl.WebGl20Debug = WebGl20Debug;
  package$gl.WebGlApplication = WebGlApplication;
  package$gl.WebGlTexture = WebGlTexture;
  package$gl.WebGlTextureLoader = WebGlTextureLoader;
  package$gl.WebGlWindowImpl = WebGlWindowImpl;
  var package$html = package$js.html || (package$js.html = {});
  package$html.get_clipboardData_nz12v2$ = get_clipboardData;
  package$html.eventHandler_21cev2$ = eventHandler;
  package$html.HandlerAction = HandlerAction;
  package$html.owns_fga9sf$ = owns;
  package$html.findComponentFromDom_tri06v$ = findComponentFromDom;
  package$html.initializeUserInfo = initializeUserInfo;
  package$html.leftDescendant_asww5s$ = leftDescendant;
  package$html.rightDescendant_asww5s$ = rightDescendant;
  package$html.insertAfter_5a54o3$ = insertAfter;
  package$html.walkChildrenBfs_qdx1pt$ = walkChildrenBfs;
  package$html.walkChildrenBfs_bpv8s6$ = walkChildrenBfs_0;
  Object.defineProperty(package$html, 'mutationObserversSupported', {
    get: function () {
      return mutationObserversSupported;
    }
  });
  package$html.observe_m1ivqr$ = observe;
  package$html.mutationObserverOptions_sqfg1b$ = mutationObserverOptions;
  package$html.unsafeCast_btlumq$ = unsafeCast;
  package$html.getSelection_4wc2mh$ = getSelection;
  package$html.getSelection_nz12v2$ = getSelection_0;
  Object.defineProperty(package$html, 'WebGl', {
    get: WebGl_getInstance
  });
  var package$input = package$js.input || (package$js.input = {});
  package$input.JsClickDispatcher = JsClickDispatcher;
  package$input.JsKeyInput = JsKeyInput;
  Object.defineProperty(JsMouseInput, 'Companion', {
    get: JsMouseInput$Companion_getInstance
  });
  package$input.JsMouseInput = JsMouseInput;
  var package$io = package$js.io || (package$js.io = {});
  package$io.JsBufferFactory = JsBufferFactory;
  package$io.JsByteBuffer = JsByteBuffer;
  package$io.JsShortBuffer = JsShortBuffer;
  package$io.JsIntBuffer = JsIntBuffer;
  package$io.JsFloatBuffer = JsFloatBuffer;
  package$io.JsDoubleBuffer = JsDoubleBuffer;
  Object.defineProperty(JsHttpRequest, 'Companion', {
    get: JsHttpRequest$Companion_getInstance
  });
  package$io.JsHttpRequest = JsHttpRequest;
  Object.defineProperty(package$io, 'XMLHttpRequestResponseType', {
    get: XMLHttpRequestResponseType_getInstance
  });
  Object.defineProperty(package$io, 'XMLHttpRequestMethod', {
    get: XMLHttpRequestMethod_getInstance
  });
  Object.defineProperty(package$io, 'XMLHttpRequestReadyState', {
    get: XMLHttpRequestReadyState_getInstance
  });
  package$js.JsApplicationBase = JsApplicationBase;
  package$js.toString_g814bf$ = toString;
  package$js.JsApplicationRunner = JsApplicationRunner;
  Object.defineProperty(JsApplicationRunnerImpl, 'Companion', {
    get: JsApplicationRunnerImpl$Companion_getInstance
  });
  package$js.JsApplicationRunnerImpl = JsApplicationRunnerImpl;
  var package$loader = package$js.loader || (package$js.loader = {});
  package$loader.JsTextLoader = JsTextLoader;
  var package$persistance = package$js.persistance || (package$js.persistance = {});
  package$persistance.JsPersistence = JsPersistence;
  var package$selection = package$js.selection || (package$js.selection = {});
  package$selection.DomSelectionManager = DomSelectionManager;
  var package$time = package$js.time || (package$js.time = {});
  package$time.DateImpl = DateImpl;
  package$time.TimeProviderImpl = TimeProviderImpl;
  var package$window = package$js.window || (package$js.window = {});
  package$window.JsLocation = JsLocation;
  var JsAudioContext = window.AudioContext || window.webkitAudioContext;
  audioContextSupported = JsAudioContext != null;
  var MutationObserver = window.MutationObserver || (window.WebKitMutationObserver || window.MozMutationObserver);
  mutationObserversSupported = MutationObserver != null;
  Kotlin.defineModule('AcornUiJsBackend', _);
  return _;
}(typeof AcornUiJsBackend === 'undefined' ? {} : AcornUiJsBackend, kotlin, AcornUtils, AcornUiCore);

//@ sourceMappingURL=AcornUiJsBackend.js.map
