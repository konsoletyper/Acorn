if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'AcornUtils'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'AcornUtils'.");
}
var AcornUtils = function (_, Kotlin) {
  'use strict';
  var Exception = Kotlin.kotlin.Exception;
  var Pair = Kotlin.kotlin.Pair;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var indexOf = Kotlin.kotlin.collections.indexOf_mjy6jw$;
  var Enum = Kotlin.kotlin.Enum;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var kotlin_0 = Kotlin.kotlin;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var indexOf_0 = Kotlin.kotlin.text.indexOf_l5u8uk$;
  var properties_0 = Kotlin.kotlin.properties;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var get_lastIndex_0 = Kotlin.kotlin.collections.get_lastIndex_m7z4lg$;
  var downTo = Kotlin.kotlin.ranges.downTo_dqglrj$;
  var Iterable = Kotlin.kotlin.collections.Iterable;
  var ListIterator = Kotlin.kotlin.collections.ListIterator;
  var get_lastIndex_1 = Kotlin.kotlin.collections.get_lastIndex_rjqryz$;
  var IllegalStateException = Kotlin.kotlin.IllegalStateException;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var FloatCompanionObject = Kotlin.kotlin.js.internal.FloatCompanionObject;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var MutableIterator = Kotlin.kotlin.collections.MutableIterator;
  var List = Kotlin.kotlin.collections.List;
  var MutableList = Kotlin.kotlin.collections.MutableList;
  var MutableListIterator = Kotlin.kotlin.collections.MutableListIterator;
  var sortWith = Kotlin.kotlin.collections.sortWith_nqfjgj$;
  var addAll = Kotlin.kotlin.collections.addAll_ye1y7v$;
  var NoSuchElementException = Kotlin.kotlin.NoSuchElementException;
  var MutableIterable = Kotlin.kotlin.collections.MutableIterable;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var indexOf_2 = Kotlin.kotlin.text.indexOf_8eortd$;
  var startsWith = Kotlin.kotlin.text.startsWith_3azpy2$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var toInt_0 = Kotlin.kotlin.text.toInt_6ic1pp$;
  var contains_0 = Kotlin.kotlin.collections.contains_mjy6jw$;
  var padStart = Kotlin.kotlin.text.padStart_vrc1nu$;
  var startsWith_0 = Kotlin.kotlin.text.startsWith_7epoxm$;
  var toLong = Kotlin.kotlin.text.toLong_pdl1vz$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var split_0 = Kotlin.kotlin.text.split_o64adg$;
  var toIntOrNull_0 = Kotlin.kotlin.text.toIntOrNull_6ic1pp$;
  var Throwable = Error;
  var substringAfterLast = Kotlin.kotlin.text.substringAfterLast_8cymmc$;
  var substringBeforeLast = Kotlin.kotlin.text.substringBeforeLast_8cymmc$;
  var equals = Kotlin.kotlin.text.equals_igcy3c$;
  var Comparable = Kotlin.kotlin.Comparable;
  var arrayListOf = Kotlin.kotlin.collections.arrayListOf_i5x0yv$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var sum = Kotlin.kotlin.collections.sum_rjqryz$;
  var get_indices = Kotlin.kotlin.collections.get_indices_m7z4lg$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var isNaN_0 = Kotlin.kotlin.isNaN_81szk$;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var toShortOrNull = Kotlin.kotlin.text.toShortOrNull_pdl1vz$;
  var toLongOrNull = Kotlin.kotlin.text.toLongOrNull_pdl1vz$;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var isWhitespace = Kotlin.kotlin.text.isWhitespace_myv2d0$;
  var indexOf_3 = Kotlin.kotlin.collections.indexOf_o2f9me$;
  BasicAction.prototype = Object.create(ActionBase.prototype);
  BasicAction.prototype.constructor = BasicAction;
  ActionDecorator.prototype = Object.create(ActionBase.prototype);
  ActionDecorator.prototype.constructor = ActionDecorator;
  LoadableDecorator.prototype = Object.create(ActionDecorator.prototype);
  LoadableDecorator.prototype.constructor = LoadableDecorator;
  ActionWatch.prototype = Object.create(ActionBase.prototype);
  ActionWatch.prototype.constructor = ActionWatch;
  CallAction.prototype = Object.create(BasicAction.prototype);
  CallAction.prototype.constructor = CallAction;
  ChainActionBase.prototype = Object.create(BasicAction.prototype);
  ChainActionBase.prototype.constructor = ChainActionBase;
  chain$ObjectLiteral.prototype = Object.create(ChainActionBase.prototype);
  chain$ObjectLiteral.prototype.constructor = chain$ObjectLiteral;
  chain$ObjectLiteral_0.prototype = Object.create(ChainActionBase.prototype);
  chain$ObjectLiteral_0.prototype.constructor = chain$ObjectLiteral_0;
  chain$ObjectLiteral_1.prototype = Object.create(ChainActionBase.prototype);
  chain$ObjectLiteral_1.prototype.constructor = chain$ObjectLiteral_1;
  chain$ObjectLiteral_2.prototype = Object.create(ChainActionBase.prototype);
  chain$ObjectLiteral_2.prototype.constructor = chain$ObjectLiteral_2;
  chain$ObjectLiteral_3.prototype = Object.create(ChainActionBase.prototype);
  chain$ObjectLiteral_3.prototype.constructor = chain$ObjectLiteral_3;
  chain$ObjectLiteral_4.prototype = Object.create(ChainActionBase.prototype);
  chain$ObjectLiteral_4.prototype.constructor = chain$ObjectLiteral_4;
  DelegateAction.prototype = Object.create(BasicAction.prototype);
  DelegateAction.prototype.constructor = DelegateAction;
  ActionStatus.prototype = Object.create(Enum.prototype);
  ActionStatus.prototype.constructor = ActionStatus;
  QueueAction.prototype = Object.create(BasicAction.prototype);
  QueueAction.prototype.constructor = QueueAction;
  MultiAction.prototype = Object.create(QueueAction.prototype);
  MultiAction.prototype.constructor = MultiAction;
  PriorityQueueAction.prototype = Object.create(DelegateAction.prototype);
  PriorityQueueAction.prototype.constructor = PriorityQueueAction;
  CyclicList.prototype = Object.create(ListBase.prototype);
  CyclicList.prototype.constructor = CyclicList;
  MutableListBase.prototype = Object.create(ListBase.prototype);
  MutableListBase.prototype.constructor = MutableListBase;
  MutableListIteratorImpl.prototype = Object.create(ListIteratorImpl.prototype);
  MutableListIteratorImpl.prototype.constructor = MutableListIteratorImpl;
  SubList.prototype = Object.create(ListBase.prototype);
  SubList.prototype.constructor = SubList;
  MutableSubList.prototype = Object.create(MutableListBase.prototype);
  MutableSubList.prototype.constructor = MutableSubList;
  arrayListPool$ObjectLiteral.prototype = Object.create(ObjectPool.prototype);
  arrayListPool$ObjectLiteral.prototype.constructor = arrayListPool$ObjectLiteral;
  MutableConcurrentListIterator.prototype = Object.create(ConcurrentListIterator.prototype);
  MutableConcurrentListIterator.prototype.constructor = MutableConcurrentListIterator;
  ClearableObjectPool.prototype = Object.create(ObjectPool.prototype);
  ClearableObjectPool.prototype.constructor = ClearableObjectPool;
  ArrayListBuffer.prototype = Object.create(BufferBase.prototype);
  ArrayListBuffer.prototype.constructor = ArrayListBuffer;
  InvalidMarkException.prototype = Object.create(Throwable.prototype);
  InvalidMarkException.prototype.constructor = InvalidMarkException;
  BufferUnderflowException.prototype = Object.create(Throwable.prototype);
  BufferUnderflowException.prototype.constructor = BufferUnderflowException;
  BufferOverflowException.prototype = Object.create(Throwable.prototype);
  BufferOverflowException.prototype.constructor = BufferOverflowException;
  WrappedArrayBuffer.prototype = Object.create(BufferBase.prototype);
  WrappedArrayBuffer.prototype.constructor = WrappedArrayBuffer;
  ExpIn.prototype = Object.create(Exp.prototype);
  ExpIn.prototype.constructor = ExpIn;
  ExpOut.prototype = Object.create(Exp.prototype);
  ExpOut.prototype.constructor = ExpOut;
  ElasticIn.prototype = Object.create(Elastic.prototype);
  ElasticIn.prototype.constructor = ElasticIn;
  ElasticOut.prototype = Object.create(Elastic.prototype);
  ElasticOut.prototype.constructor = ElasticOut;
  PlaneSide.prototype = Object.create(Enum.prototype);
  PlaneSide.prototype.constructor = PlaneSide;
  Signal0.prototype = Object.create(SignalBase.prototype);
  Signal0.prototype.constructor = Signal0;
  Signal1.prototype = Object.create(SignalBase.prototype);
  Signal1.prototype.constructor = Signal1;
  Signal2.prototype = Object.create(SignalBase.prototype);
  Signal2.prototype.constructor = Signal2;
  Signal3.prototype = Object.create(SignalBase.prototype);
  Signal3.prototype.constructor = Signal3;
  Signal4.prototype = Object.create(SignalBase.prototype);
  Signal4.prototype.constructor = Signal4;
  Signal5.prototype = Object.create(SignalBase.prototype);
  Signal5.prototype.constructor = Signal5;
  Signal6.prototype = Object.create(SignalBase.prototype);
  Signal6.prototype.constructor = Signal6;
  Signal7.prototype = Object.create(SignalBase.prototype);
  Signal7.prototype.constructor = Signal7;
  Signal8.prototype = Object.create(SignalBase.prototype);
  Signal8.prototype.constructor = Signal8;
  Signal9.prototype = Object.create(SignalBase.prototype);
  Signal9.prototype.constructor = Signal9;
  SignalR0.prototype = Object.create(SignalBase.prototype);
  SignalR0.prototype.constructor = SignalR0;
  SignalR1.prototype = Object.create(SignalBase.prototype);
  SignalR1.prototype.constructor = SignalR1;
  SignalR2.prototype = Object.create(SignalBase.prototype);
  SignalR2.prototype.constructor = SignalR2;
  SignalR3.prototype = Object.create(SignalBase.prototype);
  SignalR3.prototype.constructor = SignalR3;
  SignalR4.prototype = Object.create(SignalBase.prototype);
  SignalR4.prototype.constructor = SignalR4;
  StoppableSignalImpl.prototype = Object.create(SignalBase.prototype);
  StoppableSignalImpl.prototype.constructor = StoppableSignalImpl;
  function ActionBase() {
    this._statusChanged = new Signal4();
    this._completed = new Signal2();
    this._invoked = new Signal1();
    this._succeeded = new Signal1();
    this._failed = new Signal3();
    this._status_3ea6qv$_0 = ActionStatus$PENDING_getInstance();
    this._error_3ea6qv$_0 = null;
    this._statusChanging_3ea6qv$_0 = false;
    this._pendingStatuses_3ea6qv$_0 = ArrayList_init();
  }
  Object.defineProperty(ActionBase.prototype, 'statusChanged', {
    get: function () {
      return this._statusChanged;
    }
  });
  Object.defineProperty(ActionBase.prototype, 'completed', {
    get: function () {
      return this._completed;
    }
  });
  Object.defineProperty(ActionBase.prototype, 'invoked', {
    get: function () {
      return this._invoked;
    }
  });
  Object.defineProperty(ActionBase.prototype, 'succeeded', {
    get: function () {
      return this._succeeded;
    }
  });
  Object.defineProperty(ActionBase.prototype, 'failed', {
    get: function () {
      return this._failed;
    }
  });
  Object.defineProperty(ActionBase.prototype, 'status', {
    get: function () {
      return this._status_3ea6qv$_0;
    }
  });
  Object.defineProperty(ActionBase.prototype, 'error', {
    get: function () {
      return this._error_3ea6qv$_0;
    }
  });
  ActionBase.prototype.internalSetStatus_pxr8bi$ = function (value) {
    if (value === ActionStatus$FAILED_getInstance())
      throw new Exception('If the new status is FAILED, an Exception must be provided.');
    this.internalSetStatus_2c1wct$(value, null);
  };
  ActionBase.prototype.internalSetStatus_2c1wct$ = function (value, error) {
    if (this._status_3ea6qv$_0 === value)
      return;
    var oldStatus = this._status_3ea6qv$_0;
    if (!oldStatus.mayTransitionTo_pxr8bi$(value))
      throw new Exception('May not transition from: ' + oldStatus + ' to ' + value);
    this._status_3ea6qv$_0 = value;
    this._error_3ea6qv$_0 = error;
    this._pendingStatuses_3ea6qv$_0.add_11rb$(new Pair(value, error));
    if (!this._statusChanging_3ea6qv$_0) {
      this._statusChanging_3ea6qv$_0 = true;
      while (!this._pendingStatuses_3ea6qv$_0.isEmpty()) {
        var tmp$ = poll(this._pendingStatuses_3ea6qv$_0)
        , newStatus = tmp$.component1()
        , newError = tmp$.component2();
        this._setStatus_94s5zk$_0(oldStatus, newStatus, newError);
        oldStatus = newStatus;
      }
      this._statusChanging_3ea6qv$_0 = false;
    }
  };
  ActionBase.prototype._setStatus_94s5zk$_0 = function (oldStatus, newStatus, newError) {
    if (newError === void 0)
      newError = null;
    if (Kotlin.equals(newStatus, ActionStatus$PENDING_getInstance()))
      this.onReset();
    else if (Kotlin.equals(newStatus, ActionStatus$INVOKED_getInstance()))
      this.onInvocation();
    else if (Kotlin.equals(newStatus, ActionStatus$SUCCESSFUL_getInstance()))
      this.onSuccess();
    else if (Kotlin.equals(newStatus, ActionStatus$FAILED_getInstance()))
      this.onFailed_3lhtaa$(newError != null ? newError : Kotlin.throwNPE());
    else if (Kotlin.equals(newStatus, ActionStatus$ABORTED_getInstance()))
      this.onAborted();
    this._statusChanged.dispatch_18alr2$(this, oldStatus, newStatus, newError);
    this.fireHelperSignals_2c1wct$(newStatus, newError);
  };
  ActionBase.prototype.fireHelperSignals_2c1wct$ = function (status, newError) {
    if (status.compareTo_11rb$(ActionStatus$INVOKED_getInstance()) > 0) {
      this._completed.dispatch_xwzc9p$(this, status);
      if (status === ActionStatus$SUCCESSFUL_getInstance()) {
        this._succeeded.dispatch_11rb$(this);
      }
       else {
        this._failed.dispatch_1llc0w$(this, status, newError);
      }
    }
     else {
      if (status === ActionStatus$INVOKED_getInstance()) {
        this._invoked.dispatch_11rb$(this);
      }
    }
  };
  ActionBase.prototype.invoke = function () {
    this.internalSetStatus_pxr8bi$(ActionStatus$INVOKED_getInstance());
  };
  ActionBase.prototype.success = function () {
    this.internalSetStatus_pxr8bi$(ActionStatus$SUCCESSFUL_getInstance());
  };
  ActionBase.prototype.fail_3lhtaa$ = function (e) {
    this.internalSetStatus_2c1wct$(ActionStatus$FAILED_getInstance(), e);
  };
  ActionBase.prototype.abort = function () {
    if (this.status === ActionStatus$INVOKED_getInstance())
      this.internalSetStatus_pxr8bi$(ActionStatus$ABORTED_getInstance());
  };
  ActionBase.prototype.onInvocation = function () {
  };
  ActionBase.prototype.onSuccess = function () {
  };
  ActionBase.prototype.onFailed_3lhtaa$ = function (error) {
  };
  ActionBase.prototype.onAborted = function () {
  };
  ActionBase.prototype.reset = function () {
    this.internalSetStatus_pxr8bi$(ActionStatus$PENDING_getInstance());
  };
  ActionBase.prototype.onReset = function () {
  };
  ActionBase.prototype.dispose = function () {
    if (this.status === ActionStatus$INVOKED_getInstance())
      this.internalSetStatus_pxr8bi$(ActionStatus$ABORTED_getInstance());
    this._statusChanged.dispose();
    this._completed.dispose();
    this._invoked.dispose();
    this._succeeded.dispose();
    this._failed.dispose();
  };
  ActionBase.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionBase',
    interfaces: [Disposable, Action]
  };
  function BasicAction() {
    ActionBase.call(this);
  }
  BasicAction.prototype.invoke = function () {
    this.internalSetStatus_pxr8bi$(ActionStatus$INVOKED_getInstance());
  };
  BasicAction.prototype.success = function () {
    this.internalSetStatus_pxr8bi$(ActionStatus$SUCCESSFUL_getInstance());
  };
  BasicAction.prototype.fail_3lhtaa$ = function (e) {
    this.internalSetStatus_2c1wct$(ActionStatus$FAILED_getInstance(), e);
  };
  BasicAction.prototype.abort = function () {
    if (this.status === ActionStatus$INVOKED_getInstance())
      this.internalSetStatus_pxr8bi$(ActionStatus$ABORTED_getInstance());
  };
  BasicAction.prototype.reset = function () {
    ActionBase.prototype.reset.call(this);
  };
  BasicAction.prototype.setStatus_pxr8bi$ = function (value) {
    ActionBase.prototype.internalSetStatus_pxr8bi$.call(this, value);
  };
  BasicAction.prototype.setStatus_2c1wct$ = function (value, error) {
    ActionBase.prototype.internalSetStatus_2c1wct$.call(this, value, error);
  };
  BasicAction.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BasicAction',
    interfaces: [MutableAction, ActionBase]
  };
  function ActionDecorator(target, decorator) {
    ActionBase.call(this);
    this.target_snjg5r$_0 = target;
    this.decorator_snjg5r$_0 = decorator;
    this._result = null;
    this.targetStatusChangedHandler_snjg5r$_0 = ActionDecorator$targetStatusChangedHandler$lambda(this);
    this.target_snjg5r$_0.statusChanged.add_trkh7z$(this.targetStatusChangedHandler_snjg5r$_0);
    if (this.target_snjg5r$_0.hasBeenInvoked())
      this.internalSetStatus_pxr8bi$(ActionStatus$INVOKED_getInstance());
    if (this.target_snjg5r$_0.hasCompleted()) {
      this.internalSetStatus_2c1wct$(this.target_snjg5r$_0.status, this.target_snjg5r$_0.error);
    }
  }
  Object.defineProperty(ActionDecorator.prototype, 'result', {
    get: function () {
      var tmp$;
      tmp$ = this._result;
      if (tmp$ == null) {
        throw new Exception('This action is not yet completed.');
      }
      return tmp$;
    }
  });
  ActionDecorator.prototype.onSuccess = function () {
    this._result = this.decorator_snjg5r$_0.decorate_11rb$(this.target_snjg5r$_0.result);
  };
  ActionDecorator.prototype.dispose = function () {
    ActionBase.prototype.dispose.call(this);
    this.target_snjg5r$_0.statusChanged.remove_trkh7z$(this.targetStatusChangedHandler_snjg5r$_0);
  };
  function ActionDecorator$targetStatusChangedHandler$lambda(this$ActionDecorator) {
    return function (f, f_0, status, error) {
      this$ActionDecorator.internalSetStatus_2c1wct$(status, error);
    };
  }
  ActionDecorator.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionDecorator',
    interfaces: [ResultAction, ActionBase, Disposable]
  };
  function LoadableDecorator(loadableTarget, decorator, estimatedDecorationTime) {
    if (estimatedDecorationTime === void 0)
      estimatedDecorationTime = 0.001;
    ActionDecorator.call(this, loadableTarget, decorator);
    this.loadableTarget_ygpj89$_0 = loadableTarget;
    this.estimatedDecorationTime_ygpj89$_0 = estimatedDecorationTime;
  }
  Object.defineProperty(LoadableDecorator.prototype, 'secondsLoaded', {
    get: function () {
      return this.loadableTarget_ygpj89$_0.secondsLoaded + (this.hasCompleted() ? this.estimatedDecorationTime_ygpj89$_0 : 0.0);
    }
  });
  Object.defineProperty(LoadableDecorator.prototype, 'secondsTotal', {
    get: function () {
      return this.loadableTarget_ygpj89$_0.secondsTotal + this.estimatedDecorationTime_ygpj89$_0;
    }
  });
  LoadableDecorator.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LoadableDecorator',
    interfaces: [Loadable, ActionDecorator]
  };
  function ActionWatch() {
    ActionBase.call(this);
    this.typicalActionTime = 0.001;
    this._enabled_obp285$_0 = true;
    this._actions_obp285$_0 = ActiveList_init();
    this.forgetActions = true;
    this.cascadeFailure = true;
    this.actionsIterator_obp285$_0 = this._actions_obp285$_0.concurrentIterator();
    this.actionStatusChangedHandler_obp285$_0 = ActionWatch$actionStatusChangedHandler$lambda(this);
  }
  Object.defineProperty(ActionWatch.prototype, 'enabled', {
    get: function () {
      return this._enabled_obp285$_0;
    },
    set: function (value) {
      if (Kotlin.equals(this._enabled_obp285$_0, value))
        return;
      this._enabled_obp285$_0 = value;
      if (value)
        this.refreshStatus_obp285$_0();
    }
  });
  Object.defineProperty(ActionWatch.prototype, 'actions', {
    get: function () {
      return this._actions_obp285$_0;
    }
  });
  ActionWatch.prototype.add_jih3gg$ = function (action, index) {
    if (index === void 0)
      index = this._actions_obp285$_0.size;
    if (this.forgetActions && action.hasCompleted())
      return action;
    if (this._actions_obp285$_0.contains_11rb$(action))
      throw new IllegalArgumentException('The action must be removed first.');
    this.watchAction_tqv5dh$_0(action);
    this._actions_obp285$_0.add_wxm5ur$(index, action);
    this.refreshStatus_obp285$_0();
    return action;
  };
  ActionWatch.prototype.addAll_3fldrh$ = function (actions) {
    var oldEnabled = this.enabled;
    this.enabled = false;
    var tmp$;
    for (tmp$ = 0; tmp$ !== actions.length; ++tmp$) {
      var i = actions[tmp$];
      this.add_jih3gg$(i);
    }
    this.enabled = oldEnabled;
  };
  ActionWatch.prototype.batch_o14v8n$ = Kotlin.defineInlineFunction('AcornUtils.com.acornui.action.ActionWatch.batch_o14v8n$', function (inner) {
    var oldEnabled = this.enabled;
    this.enabled = false;
    inner();
    this.enabled = oldEnabled;
  });
  ActionWatch.prototype.indexOf_lbqqkw$ = function (action) {
    return this._actions_obp285$_0.indexOf_11rb$(action);
  };
  ActionWatch.prototype.remove_lbqqkw$ = function (action) {
    var actionIndex = this.indexOf_lbqqkw$(action);
    if (actionIndex === -1)
      return false;
    this.removeAt_za3lpa$(actionIndex);
    return true;
  };
  ActionWatch.prototype.removeAt_za3lpa$ = function (index) {
    if (index >= this._actions_obp285$_0.size || index < 0)
      return false;
    var action = this._actions_obp285$_0.get_za3lpa$(index);
    this._actions_obp285$_0.removeAt_za3lpa$(index);
    this.unwatchAction_tqv5dh$_0(action);
    this.refreshStatus_obp285$_0();
    return true;
  };
  ActionWatch.prototype.reset = function () {
    var tmp$;
    tmp$ = this._actions_obp285$_0.iterator();
    while (tmp$.hasNext()) {
      var action = tmp$.next();
      this.unwatchAction_tqv5dh$_0(action);
    }
    this._actions_obp285$_0.clear();
    this.refreshStatus_obp285$_0();
  };
  ActionWatch.prototype.watchAction_tqv5dh$_0 = function (action) {
    action.statusChanged.add_trkh7z$(this.actionStatusChangedHandler_obp285$_0);
  };
  ActionWatch.prototype.unwatchAction_tqv5dh$_0 = function (action) {
    action.statusChanged.remove_trkh7z$(this.actionStatusChangedHandler_obp285$_0);
  };
  ActionWatch.prototype.refreshStatus_obp285$_0 = function () {
    var tmp$, tmp$_0;
    if (!this._enabled_obp285$_0)
      return;
    if (this.hasCompleted()) {
      this.onReset();
      this.reset();
    }
    if (this.status === ActionStatus$PENDING_getInstance()) {
      this.onInvocation();
      this.invoke();
    }
    this.actionsIterator_obp285$_0.clear();
    var completed = true;
    while (this.actionsIterator_obp285$_0.hasNext()) {
      var action = this.actionsIterator_obp285$_0.next();
      if (action.hasCompleted()) {
        if (this.cascadeFailure) {
          if (action.status === ActionStatus$ABORTED_getInstance()) {
            this.onAborted();
            return this.abort();
          }
           else if (action.status === ActionStatus$FAILED_getInstance()) {
            this.onFailed_3lhtaa$((tmp$ = action.error) != null ? tmp$ : Kotlin.throwNPE());
            return this.fail_3lhtaa$((tmp$_0 = action.error) != null ? tmp$_0 : Kotlin.throwNPE());
          }
        }
        if (this.forgetActions) {
          this.unwatchAction_tqv5dh$_0(action);
          this.actionsIterator_obp285$_0.remove();
        }
      }
       else {
        completed = false;
      }
    }
    if (completed) {
      this.onSuccess();
      this.success();
    }
  };
  ActionWatch.prototype.onActionStatusChanged_uys243$ = function (action, oldStatus, newStatus, error) {
  };
  Object.defineProperty(ActionWatch.prototype, 'remaining', {
    get: function () {
      var tmp$;
      var c = 0;
      tmp$ = get_lastIndex(this._actions_obp285$_0);
      for (var i = 0; i <= tmp$; i++) {
        if (!this._actions_obp285$_0.get_za3lpa$(i).hasCompleted()) {
          c = c + 1 | 0;
        }
      }
      return c;
    }
  });
  Object.defineProperty(ActionWatch.prototype, 'size', {
    get: function () {
      return this._actions_obp285$_0.size;
    }
  });
  Object.defineProperty(ActionWatch.prototype, 'secondsLoaded', {
    get: function () {
      var tmp$;
      var c = 0.0;
      tmp$ = get_lastIndex(this.actions);
      for (var i = 0; i <= tmp$; i++) {
        var a = this.actions.get_za3lpa$(i);
        if (Kotlin.isType(a, Progress)) {
          c += a.secondsLoaded;
        }
         else {
          if (a.hasCompleted()) {
            c += this.typicalActionTime;
          }
        }
      }
      return c;
    }
  });
  Object.defineProperty(ActionWatch.prototype, 'secondsTotal', {
    get: function () {
      var tmp$;
      var c = 0.0;
      tmp$ = get_lastIndex(this.actions);
      for (var i = 0; i <= tmp$; i++) {
        var a = this.actions.get_za3lpa$(i);
        if (Kotlin.isType(a, Progress)) {
          c += a.secondsTotal;
        }
         else {
          c += this.typicalActionTime;
        }
      }
      return c;
    }
  });
  ActionWatch.prototype.get_za3lpa$ = function (index) {
    if (index < 0 || index >= this._actions_obp285$_0.size)
      return null;
    return this._actions_obp285$_0.get_za3lpa$(index);
  };
  ActionWatch.prototype.dispose = function () {
    this.reset();
    this._actions_obp285$_0.dispose();
    this.actionsIterator_obp285$_0.dispose();
  };
  function ActionWatch$actionStatusChangedHandler$lambda(this$ActionWatch) {
    return function (action, oldStatus, newStatus, error) {
      this$ActionWatch.onActionStatusChanged_uys243$(action, oldStatus, newStatus, error);
      this$ActionWatch.refreshStatus_obp285$_0();
    };
  }
  ActionWatch.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionWatch',
    interfaces: [ProgressAction, ActionBase, Disposable]
  };
  function CallAction(callback) {
    BasicAction.call(this);
    this.callback = callback;
  }
  CallAction.prototype.onInvocation = function () {
    try {
      this.callback();
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        this.fail_3lhtaa$(e);
        return;
      }
       else
        throw e;
    }
    this.success();
  };
  CallAction.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'CallAction',
    interfaces: [BasicAction]
  };
  function call(callback) {
    return new CallAction(callback);
  }
  function ChainActionBase(dependencies) {
    BasicAction.call(this);
    this._result_qnd838$_0 = null;
    this.waitFor = group(dependencies.slice());
    onFailed(this.waitFor, ChainActionBase_init$lambda(this));
  }
  Object.defineProperty(ChainActionBase.prototype, 'result', {
    get: function () {
      var tmp$;
      return (tmp$ = this._result_qnd838$_0) != null ? tmp$ : Kotlin.throwNPE();
    }
  });
  ChainActionBase.prototype.onSuccess = function () {
    if (this._result_qnd838$_0 == null)
      throw new Exception('Use success(result: R) instead of success().');
  };
  ChainActionBase.prototype.success_11rb$ = function (result) {
    this._result_qnd838$_0 = result;
    this.setStatus_pxr8bi$(ActionStatus$SUCCESSFUL_getInstance());
  };
  ChainActionBase.prototype.onInvocation = function () {
    if (!this.waitFor.hasBeenInvoked())
      this.waitFor.invoke();
  };
  function ChainActionBase_init$lambda(this$ChainActionBase) {
    return function () {
      var tmp$, tmp$_0;
      if (this$ChainActionBase.waitFor.error != null) {
        tmp$_0 = (tmp$ = this$ChainActionBase.waitFor.error) != null ? tmp$ : Kotlin.throwNPE();
        this$ChainActionBase.fail_3lhtaa$(tmp$_0);
      }
       else
        this$ChainActionBase.abort();
    };
  }
  ChainActionBase.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ChainActionBase',
    interfaces: [BasicAction, InputAction, MutableResultAction]
  };
  function chain$ObjectLiteral(closure$call, dependencies) {
    this.closure$call = closure$call;
    ChainActionBase.call(this, dependencies);
  }
  chain$ObjectLiteral.prototype.onInvocation = function () {
    this.closure$call(this);
  };
  chain$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [ChainActionBase]
  };
  function chain(call_0) {
    return new chain$ObjectLiteral(call_0, []);
  }
  function chain$ObjectLiteral_0(closure$call, closure$d1, dependencies) {
    this.closure$call = closure$call;
    this.closure$d1 = closure$d1;
    ChainActionBase.call(this, dependencies);
  }
  function chain$ObjectLiteral$onInvocation$lambda(closure$call, closure$d1, this$) {
    return function (it) {
      closure$call(this$, closure$d1.result);
    };
  }
  chain$ObjectLiteral_0.prototype.onInvocation = function () {
    ChainActionBase.prototype.onInvocation.call(this);
    onSuccess(this.waitFor, chain$ObjectLiteral$onInvocation$lambda(this.closure$call, this.closure$d1, this));
  };
  chain$ObjectLiteral_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [ChainActionBase]
  };
  function chain_0(d1, call_0) {
    return new chain$ObjectLiteral_0(call_0, d1, [d1]);
  }
  function chain$ObjectLiteral_1(closure$call, closure$d1, closure$d2, dependencies) {
    this.closure$call = closure$call;
    this.closure$d1 = closure$d1;
    this.closure$d2 = closure$d2;
    ChainActionBase.call(this, dependencies);
  }
  function chain$ObjectLiteral$onInvocation$lambda_0(closure$call, closure$d1, closure$d2, this$) {
    return function (it) {
      closure$call(this$, closure$d1.result, closure$d2.result);
    };
  }
  chain$ObjectLiteral_1.prototype.onInvocation = function () {
    ChainActionBase.prototype.onInvocation.call(this);
    onSuccess(this.waitFor, chain$ObjectLiteral$onInvocation$lambda_0(this.closure$call, this.closure$d1, this.closure$d2, this));
  };
  chain$ObjectLiteral_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [ChainActionBase]
  };
  function chain_1(d1, d2, call_0) {
    return new chain$ObjectLiteral_1(call_0, d1, d2, [d1, d2]);
  }
  function chain$ObjectLiteral_2(closure$call, closure$d1, closure$d2, closure$d3, dependencies) {
    this.closure$call = closure$call;
    this.closure$d1 = closure$d1;
    this.closure$d2 = closure$d2;
    this.closure$d3 = closure$d3;
    ChainActionBase.call(this, dependencies);
  }
  function chain$ObjectLiteral$onInvocation$lambda_1(closure$call, closure$d1, closure$d2, closure$d3, this$) {
    return function (it) {
      closure$call(this$, closure$d1.result, closure$d2.result, closure$d3.result);
    };
  }
  chain$ObjectLiteral_2.prototype.onInvocation = function () {
    ChainActionBase.prototype.onInvocation.call(this);
    onSuccess(this.waitFor, chain$ObjectLiteral$onInvocation$lambda_1(this.closure$call, this.closure$d1, this.closure$d2, this.closure$d3, this));
  };
  chain$ObjectLiteral_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [ChainActionBase]
  };
  function chain_2(d1, d2, d3, call_0) {
    return new chain$ObjectLiteral_2(call_0, d1, d2, d3, [d1, d2, d3]);
  }
  function chain$ObjectLiteral_3(closure$call, closure$d1, closure$d2, closure$d3, closure$d4, dependencies) {
    this.closure$call = closure$call;
    this.closure$d1 = closure$d1;
    this.closure$d2 = closure$d2;
    this.closure$d3 = closure$d3;
    this.closure$d4 = closure$d4;
    ChainActionBase.call(this, dependencies);
  }
  function chain$ObjectLiteral$onInvocation$lambda_2(closure$call, closure$d1, closure$d2, closure$d3, closure$d4, this$) {
    return function (it) {
      closure$call(this$, closure$d1.result, closure$d2.result, closure$d3.result, closure$d4.result);
    };
  }
  chain$ObjectLiteral_3.prototype.onInvocation = function () {
    ChainActionBase.prototype.onInvocation.call(this);
    onSuccess(this.waitFor, chain$ObjectLiteral$onInvocation$lambda_2(this.closure$call, this.closure$d1, this.closure$d2, this.closure$d3, this.closure$d4, this));
  };
  chain$ObjectLiteral_3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [ChainActionBase]
  };
  function chain_3(d1, d2, d3, d4, call_0) {
    return new chain$ObjectLiteral_3(call_0, d1, d2, d3, d4, [d1, d2, d3, d4]);
  }
  function chain$ObjectLiteral_4(closure$call, closure$d1, closure$d2, closure$d3, closure$d4, closure$d5, dependencies) {
    this.closure$call = closure$call;
    this.closure$d1 = closure$d1;
    this.closure$d2 = closure$d2;
    this.closure$d3 = closure$d3;
    this.closure$d4 = closure$d4;
    this.closure$d5 = closure$d5;
    ChainActionBase.call(this, dependencies);
  }
  function chain$ObjectLiteral$onInvocation$lambda_3(closure$call, closure$d1, closure$d2, closure$d3, closure$d4, closure$d5, this$) {
    return function (it) {
      closure$call(this$, closure$d1.result, closure$d2.result, closure$d3.result, closure$d4.result, closure$d5.result);
    };
  }
  chain$ObjectLiteral_4.prototype.onInvocation = function () {
    ChainActionBase.prototype.onInvocation.call(this);
    onSuccess(this.waitFor, chain$ObjectLiteral$onInvocation$lambda_3(this.closure$call, this.closure$d1, this.closure$d2, this.closure$d3, this.closure$d4, this.closure$d5, this));
  };
  chain$ObjectLiteral_4.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [ChainActionBase]
  };
  function chain_4(d1, d2, d3, d4, d5, call_0) {
    return new chain$ObjectLiteral_4(call_0, d1, d2, d3, d4, d5, [d1, d2, d3, d4, d5]);
  }
  function Decorator() {
  }
  Decorator.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'Decorator',
    interfaces: []
  };
  function noopDecorator() {
    var tmp$;
    return Kotlin.isType(tmp$ = NoopDecorator_getInstance(), Decorator) ? tmp$ : Kotlin.throwCCE();
  }
  function NoopDecorator() {
    NoopDecorator_instance = this;
  }
  NoopDecorator.prototype.decorate_11rb$ = function (target) {
    return target;
  };
  NoopDecorator.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'NoopDecorator',
    interfaces: [Decorator]
  };
  var NoopDecorator_instance = null;
  function NoopDecorator_getInstance() {
    if (NoopDecorator_instance === null) {
      new NoopDecorator();
    }
    return NoopDecorator_instance;
  }
  function DelegateAction(initialTarget) {
    if (initialTarget === void 0)
      initialTarget = null;
    BasicAction.call(this);
    this._target_oc5y3$_0 = null;
    this.isResponse_oc5y3$_0 = false;
    this.targetStatusChangedHandler_oc5y3$_0 = DelegateAction$targetStatusChangedHandler$lambda(this);
    this.statusChanged.add_trkh7z$(DelegateAction_init$lambda(this));
    this.target = initialTarget;
  }
  Object.defineProperty(DelegateAction.prototype, 'target', {
    get: function () {
      return this._target_oc5y3$_0;
    },
    set: function (value) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      if (Kotlin.equals(this._target_oc5y3$_0, value))
        return;
      (tmp$_0 = (tmp$ = this._target_oc5y3$_0) != null ? tmp$.statusChanged : null) != null ? tmp$_0.remove_trkh7z$(this.targetStatusChangedHandler_oc5y3$_0) : null;
      this._target_oc5y3$_0 = value;
      (tmp$_2 = (tmp$_1 = this._target_oc5y3$_0) != null ? tmp$_1.statusChanged : null) != null ? tmp$_2.add_trkh7z$(this.targetStatusChangedHandler_oc5y3$_0) : null;
      this.pushToTarget_lx81bi$_0(this.status, this.error);
    }
  });
  DelegateAction.prototype.pushToTarget_lx81bi$_0 = function (newStatus, error) {
    var tmp$;
    if (this.isResponse_oc5y3$_0)
      return;
    var t = this._target_oc5y3$_0;
    if (t != null) {
      if (Kotlin.equals(newStatus, ActionStatus$PENDING_getInstance()))
        t.reset();
      else if (Kotlin.equals(newStatus, ActionStatus$INVOKED_getInstance())) {
        if (!t.hasBeenInvoked())
          t.invoke();
        if (t.hasCompleted() && !this.hasCompleted()) {
          this.isResponse_oc5y3$_0 = true;
          if (t.hasSucceeded())
            this.success();
          else if (t.status === ActionStatus$FAILED_getInstance()) {
            this.fail_3lhtaa$((tmp$ = t.error) != null ? tmp$ : Kotlin.throwNPE());
          }
           else
            this.abort();
          this.isResponse_oc5y3$_0 = false;
        }
      }
       else if (Kotlin.equals(newStatus, ActionStatus$FAILED_getInstance())) {
        if (t.hasBeenInvoked() && !t.hasCompleted())
          t.fail_3lhtaa$(error != null ? error : Kotlin.throwNPE());
      }
       else if (Kotlin.equals(newStatus, ActionStatus$ABORTED_getInstance())) {
        if (t.hasBeenInvoked() && !t.hasCompleted())
          t.abort();
      }
       else
        Kotlin.equals(newStatus, ActionStatus$SUCCESSFUL_getInstance());
    }
  };
  DelegateAction.prototype.dispose = function () {
    this.target = null;
    BasicAction.prototype.dispose.call(this);
  };
  function DelegateAction$targetStatusChangedHandler$lambda(this$DelegateAction) {
    return function (action, oldStatus, status, error) {
      this$DelegateAction.isResponse_oc5y3$_0 = true;
      this$DelegateAction.internalSetStatus_2c1wct$(status, error);
      this$DelegateAction.isResponse_oc5y3$_0 = false;
    };
  }
  function DelegateAction_init$lambda(this$DelegateAction) {
    return function (f, f_0, newStatus, error) {
      this$DelegateAction.pushToTarget_lx81bi$_0(newStatus, error);
    };
  }
  DelegateAction.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DelegateAction',
    interfaces: [BasicAction]
  };
  function ActionStatus(name, ordinal, allowedNext) {
    Enum.call(this);
    this.allowedNext_mq7k4o$_0 = allowedNext;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ActionStatus_initFields() {
    ActionStatus_initFields = function () {
    };
    ActionStatus$PENDING_instance = new ActionStatus('PENDING', 0, ['INVOKED']);
    ActionStatus$INVOKED_instance = new ActionStatus('INVOKED', 1, ['SUCCESSFUL', 'FAILED', 'ABORTED', 'PENDING']);
    ActionStatus$SUCCESSFUL_instance = new ActionStatus('SUCCESSFUL', 2, ['PENDING']);
    ActionStatus$FAILED_instance = new ActionStatus('FAILED', 3, ['PENDING']);
    ActionStatus$ABORTED_instance = new ActionStatus('ABORTED', 4, ['PENDING']);
  }
  var ActionStatus$PENDING_instance;
  function ActionStatus$PENDING_getInstance() {
    ActionStatus_initFields();
    return ActionStatus$PENDING_instance;
  }
  var ActionStatus$INVOKED_instance;
  function ActionStatus$INVOKED_getInstance() {
    ActionStatus_initFields();
    return ActionStatus$INVOKED_instance;
  }
  var ActionStatus$SUCCESSFUL_instance;
  function ActionStatus$SUCCESSFUL_getInstance() {
    ActionStatus_initFields();
    return ActionStatus$SUCCESSFUL_instance;
  }
  var ActionStatus$FAILED_instance;
  function ActionStatus$FAILED_getInstance() {
    ActionStatus_initFields();
    return ActionStatus$FAILED_instance;
  }
  var ActionStatus$ABORTED_instance;
  function ActionStatus$ABORTED_getInstance() {
    ActionStatus_initFields();
    return ActionStatus$ABORTED_instance;
  }
  ActionStatus.prototype.mayTransitionTo_pxr8bi$ = function (next) {
    return indexOf(this.allowedNext_mq7k4o$_0, next.name) !== -1;
  };
  ActionStatus.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionStatus',
    interfaces: [Enum]
  };
  function ActionStatus$values() {
    return [ActionStatus$PENDING_getInstance(), ActionStatus$INVOKED_getInstance(), ActionStatus$SUCCESSFUL_getInstance(), ActionStatus$FAILED_getInstance(), ActionStatus$ABORTED_getInstance()];
  }
  ActionStatus.values = ActionStatus$values;
  function ActionStatus$valueOf(name) {
    switch (name) {
      case 'PENDING':
        return ActionStatus$PENDING_getInstance();
      case 'INVOKED':
        return ActionStatus$INVOKED_getInstance();
      case 'SUCCESSFUL':
        return ActionStatus$SUCCESSFUL_getInstance();
      case 'FAILED':
        return ActionStatus$FAILED_getInstance();
      case 'ABORTED':
        return ActionStatus$ABORTED_getInstance();
      default:Kotlin.throwISE('No enum constant com.acornui.action.ActionStatus.' + name);
    }
  }
  ActionStatus.valueOf_61zpoe$ = ActionStatus$valueOf;
  function Action() {
  }
  Action.prototype.hasCompleted = function () {
    var tmp$, tmp$_0;
    tmp$ = this.status;
    if (Kotlin.equals(tmp$, ActionStatus$SUCCESSFUL_getInstance()) || Kotlin.equals(tmp$, ActionStatus$ABORTED_getInstance()) || Kotlin.equals(tmp$, ActionStatus$FAILED_getInstance()))
      tmp$_0 = true;
    else
      tmp$_0 = false;
    return tmp$_0;
  };
  Action.prototype.hasBeenInvoked = function () {
    return this.status !== ActionStatus$PENDING_getInstance();
  };
  Action.prototype.isRunning = function () {
    return this.hasBeenInvoked() && !this.hasCompleted();
  };
  Action.prototype.hasSucceeded = function () {
    return this.status === ActionStatus$SUCCESSFUL_getInstance();
  };
  Action.prototype.hasFailed = function () {
    var s = this.status;
    return s === ActionStatus$FAILED_getInstance() || s === ActionStatus$ABORTED_getInstance();
  };
  Action.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'Action',
    interfaces: []
  };
  function MutableAction() {
  }
  MutableAction.prototype.setStatus_pxr8bi$ = function (value) {
    if (value === ActionStatus$FAILED_getInstance())
      throw new Exception('If the new status is FAILED, an Exception must be provided.');
    this.setStatus_2c1wct$(value, null);
  };
  MutableAction.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'MutableAction',
    interfaces: [Disposable, Action]
  };
  function onSuccess$lambda(closure$chained) {
    return function (it) {
      closure$chained.invoke();
    };
  }
  function onSuccess_0($receiver, chained) {
    if ($receiver.hasSucceeded())
      chained.invoke();
    else
      $receiver.succeeded.add_onkqg$(onSuccess$lambda(chained), true);
  }
  function onSuccess$lambda_0(closure$chained, this$onSuccess) {
    return function (it) {
      closure$chained(this$onSuccess);
    };
  }
  function onSuccess($receiver, chained) {
    if ($receiver.hasSucceeded())
      chained($receiver);
    else
      $receiver.succeeded.add_onkqg$(onSuccess$lambda_0(chained, $receiver), true);
  }
  function onFailed$lambda(closure$chained) {
    return function (action, status, error) {
      closure$chained.invoke();
    };
  }
  function onFailed_0($receiver, chained) {
    if ($receiver.hasFailed())
      chained.invoke();
    else
      $receiver.failed.add_onkqg$(onFailed$lambda(chained), true);
  }
  function onFailed$lambda_0(closure$chained) {
    return function (action, status, error) {
      closure$chained();
    };
  }
  function onFailed($receiver, chained) {
    if ($receiver.hasFailed())
      chained();
    else
      $receiver.failed.add_onkqg$(onFailed$lambda_0(chained), true);
  }
  function QueueAction() {
    BasicAction.call(this);
    this._actions_21ceur$_0 = ActiveList_init();
    this.forgetActions = true;
    this.autoInvoke = false;
    this.simultaneous = 1;
    this.cascadeFailure = true;
    this.actionInvoked = new Signal2();
    this.actionCompleted = new Signal2();
    this.actionsIterator_21ceur$_0 = this._actions_21ceur$_0.concurrentIterator();
    this.actionInvokedHandler = QueueAction$actionInvokedHandler$lambda(this);
    this.actionCompletedHandler = QueueAction$actionCompletedHandler$lambda(this);
  }
  Object.defineProperty(QueueAction.prototype, 'actions', {
    get: function () {
      return this._actions_21ceur$_0;
    }
  });
  QueueAction.prototype.add_wu98u$$default = function (action, index) {
    if (this.forgetActions && action.hasCompleted())
      return action;
    if (this._actions_21ceur$_0.contains_11rb$(action))
      throw new IllegalArgumentException('The action must be removed first.');
    this.watchAction_lbqqkw$(action);
    this._actions_21ceur$_0.add_wxm5ur$(index, action);
    if (this.autoInvoke) {
      if (this.hasCompleted())
        this.reset();
      if (this.status === ActionStatus$PENDING_getInstance()) {
        this.invoke();
      }
       else {
        this.fillActionBuffer();
      }
    }
     else if (this.status === ActionStatus$INVOKED_getInstance()) {
      this.fillActionBuffer();
    }
    return action;
  };
  QueueAction.prototype.add_wu98u$ = function (action, index, callback$default) {
    if (index === void 0)
      index = this._actions_21ceur$_0.size;
    return callback$default ? callback$default(action, index) : this.add_wu98u$$default(action, index);
  };
  QueueAction.prototype.add_o14v8n$ = function (callback) {
    this.add_wu98u$(new CallAction(callback));
    return this;
  };
  QueueAction.prototype.indexOf_dquiam$ = function (action) {
    return this._actions_21ceur$_0.indexOf_11rb$(action);
  };
  QueueAction.prototype.remove_dquiam$ = function (action) {
    var actionIndex = this.indexOf_dquiam$(action);
    if (actionIndex === -1)
      return false;
    this.removeAt_za3lpa$(actionIndex);
    return true;
  };
  QueueAction.prototype.removeAt_za3lpa$ = function (index) {
    if (index >= this._actions_21ceur$_0.size || index < 0)
      return null;
    var action = this._actions_21ceur$_0.get_za3lpa$(index);
    this._actions_21ceur$_0.removeAt_za3lpa$(index);
    this.unwatchAction_lbqqkw$(action);
    this.fillActionBuffer();
    return action;
  };
  QueueAction.prototype.clear = function () {
    var tmp$;
    tmp$ = this._actions_21ceur$_0.iterator();
    while (tmp$.hasNext()) {
      var action = tmp$.next();
      this.unwatchAction_lbqqkw$(action);
    }
    this._actions_21ceur$_0.clear();
  };
  QueueAction.prototype.watchAction_lbqqkw$ = function (action) {
    action.invoked.add_trkh7z$(this.actionInvokedHandler);
    action.completed.add_trkh7z$(this.actionCompletedHandler);
  };
  QueueAction.prototype.unwatchAction_lbqqkw$ = function (action) {
    action.invoked.remove_trkh7z$(this.actionInvokedHandler);
    action.completed.remove_trkh7z$(this.actionCompletedHandler);
  };
  function QueueAction$fillActionBuffer$lambda(this$QueueAction, closure$refill) {
    return function (action) {
      if (this$QueueAction.currentActionCount() < this$QueueAction.simultaneous) {
        if (!action.hasBeenInvoked()) {
          action.invoke();
          if (action.hasCompleted()) {
            closure$refill.v = true;
          }
        }
        return true;
      }
       else {
        return false;
      }
    };
  }
  QueueAction.prototype.fillActionBuffer = function () {
    var tmp$;
    if (this.status !== ActionStatus$INVOKED_getInstance())
      return;
    this.actionsIterator_21ceur$_0.clear();
    while (this.actionsIterator_21ceur$_0.hasNext()) {
      var action = this.actionsIterator_21ceur$_0.next();
      if (action.hasCompleted()) {
        if (this.cascadeFailure) {
          if (action.status === ActionStatus$ABORTED_getInstance()) {
            return this.abort();
          }
           else if (action.status === ActionStatus$FAILED_getInstance()) {
            return this.fail_3lhtaa$((tmp$ = action.error) != null ? tmp$ : Kotlin.throwNPE());
          }
        }
        if (this.forgetActions) {
          this.unwatchAction_lbqqkw$(action);
          this.actionsIterator_21ceur$_0.remove();
        }
      }
    }
    var refill = {v: false};
    this._actions_21ceur$_0.iterate_ucl7l2$(QueueAction$fillActionBuffer$lambda(this, refill));
    if (!refill.v && this.remaining === 0) {
      this.success();
    }
  };
  QueueAction.prototype.currentActionCount = function () {
    var tmp$;
    var c = 0;
    tmp$ = get_lastIndex(this._actions_21ceur$_0);
    for (var i = 0; i <= tmp$; i++) {
      if (this._actions_21ceur$_0.get_za3lpa$(i).isRunning()) {
        c = c + 1 | 0;
      }
    }
    return c;
  };
  Object.defineProperty(QueueAction.prototype, 'remaining', {
    get: function () {
      var tmp$;
      var c = 0;
      tmp$ = get_lastIndex(this._actions_21ceur$_0);
      for (var i = 0; i <= tmp$; i++) {
        if (!this._actions_21ceur$_0.get_za3lpa$(i).hasCompleted()) {
          c = c + 1 | 0;
        }
      }
      return c;
    }
  });
  Object.defineProperty(QueueAction.prototype, 'size', {
    get: function () {
      return this._actions_21ceur$_0.size;
    }
  });
  QueueAction.prototype.get_za3lpa$ = function (index) {
    if (index < 0 || index >= this._actions_21ceur$_0.size)
      return null;
    return this._actions_21ceur$_0.get_za3lpa$(index);
  };
  function QueueAction$onAborted$lambda(it) {
    if (it.status === ActionStatus$INVOKED_getInstance()) {
      it.abort();
    }
    return true;
  }
  QueueAction.prototype.onAborted = function () {
    this._actions_21ceur$_0.iterate_ucl7l2$(QueueAction$onAborted$lambda);
  };
  function QueueAction$onFailed$lambda(it) {
    if (it.status === ActionStatus$INVOKED_getInstance()) {
      it.abort();
    }
    return true;
  }
  QueueAction.prototype.onFailed_3lhtaa$ = function (error) {
    this._actions_21ceur$_0.iterate_ucl7l2$(QueueAction$onFailed$lambda);
  };
  QueueAction.prototype.onReset = function () {
    var tmp$;
    tmp$ = this._actions_21ceur$_0.iterator();
    while (tmp$.hasNext()) {
      var action = tmp$.next();
      action.reset();
    }
  };
  QueueAction.prototype.onInvocation = function () {
    this.fillActionBuffer();
  };
  QueueAction.prototype.dispose = function () {
    BasicAction.prototype.dispose.call(this);
    this.clear();
    this.actionCompleted.dispose();
    this.actionInvoked.dispose();
    this._actions_21ceur$_0.dispose();
    this.actionsIterator_21ceur$_0.dispose();
  };
  function QueueAction$actionInvokedHandler$lambda(this$QueueAction) {
    return function (action) {
      this$QueueAction.actionInvoked.dispatch_xwzc9p$(this$QueueAction, action);
    };
  }
  function QueueAction$actionCompletedHandler$lambda(this$QueueAction) {
    return function (action, status) {
      this$QueueAction.fillActionBuffer();
      this$QueueAction.actionCompleted.dispatch_xwzc9p$(this$QueueAction, action);
    };
  }
  QueueAction.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'QueueAction',
    interfaces: [BasicAction]
  };
  function queue(actions) {
    var tmp$;
    var queueAction = new QueueAction();
    for (tmp$ = 0; tmp$ !== actions.length; ++tmp$) {
      var action = actions[tmp$];
      queueAction.add_wu98u$(action);
    }
    return queueAction;
  }
  function group(actions) {
    var tmp$;
    var queueAction = new MultiAction();
    for (tmp$ = 0; tmp$ !== actions.length; ++tmp$) {
      var action = actions[tmp$];
      queueAction.add_wu98u$(action);
    }
    return queueAction;
  }
  function MultiAction() {
    QueueAction.call(this);
    this.simultaneous = 99999999;
  }
  MultiAction.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'MultiAction',
    interfaces: [QueueAction]
  };
  function PriorityQueueAction(queue_0) {
    if (queue_0 === void 0)
      queue_0 = new QueueAction();
    DelegateAction.call(this, queue_0);
    this.queue_8r9bpt$_0 = queue_0;
    this.actions = this.queue_8r9bpt$_0.actions;
    this.prioritiesMap = HashMap_init();
    this.actionRemovedHandler_8r9bpt$_0 = PriorityQueueAction$actionRemovedHandler$lambda(this);
    this.actionComparator_8r9bpt$_0 = PriorityQueueAction$actionComparator$lambda(this);
    this.actions.removed.add_trkh7z$(this.actionRemovedHandler_8r9bpt$_0);
  }
  Object.defineProperty(PriorityQueueAction.prototype, 'forgetActions', {
    get: function () {
      return this.queue_8r9bpt$_0.forgetActions;
    },
    set: function (value) {
      this.queue_8r9bpt$_0.forgetActions = value;
    }
  });
  Object.defineProperty(PriorityQueueAction.prototype, 'autoInvoke', {
    get: function () {
      return this.queue_8r9bpt$_0.autoInvoke;
    },
    set: function (value) {
      this.queue_8r9bpt$_0.autoInvoke = value;
    }
  });
  Object.defineProperty(PriorityQueueAction.prototype, 'simultaneous', {
    get: function () {
      return this.queue_8r9bpt$_0.simultaneous;
    },
    set: function (value) {
      this.queue_8r9bpt$_0.simultaneous = value;
    }
  });
  Object.defineProperty(PriorityQueueAction.prototype, 'cascadeFailure', {
    get: function () {
      return this.queue_8r9bpt$_0.cascadeFailure;
    },
    set: function (value) {
      this.queue_8r9bpt$_0.cascadeFailure = value;
    }
  });
  Object.defineProperty(PriorityQueueAction.prototype, 'next', {
    get: function () {
      return this.queue_8r9bpt$_0.actionInvoked;
    }
  });
  PriorityQueueAction.prototype.add_kae4pz$$default = function (action, priority) {
    if (this.forgetActions && action.hasCompleted())
      return this;
    this.prioritiesMap.put_xwzc9p$(action, priority);
    var index = sortedInsertionIndex(this.actions, action, this.actionComparator_8r9bpt$_0);
    this.queue_8r9bpt$_0.add_wu98u$(action, index);
    return this;
  };
  PriorityQueueAction.prototype.add_kae4pz$ = function (action, priority, callback$default) {
    if (priority === void 0)
      priority = 0.0;
    return callback$default ? callback$default(action, priority) : this.add_kae4pz$$default(action, priority);
  };
  PriorityQueueAction.prototype.remove_dquiam$ = function (action) {
    this.prioritiesMap.remove_11rb$(action);
    return this.queue_8r9bpt$_0.remove_dquiam$(action);
  };
  PriorityQueueAction.prototype.clear = function () {
    this.queue_8r9bpt$_0.dispose();
    this.prioritiesMap.clear();
  };
  PriorityQueueAction.prototype.dispose = function () {
    DelegateAction.prototype.dispose.call(this);
    this.actions.removed.remove_trkh7z$(this.actionRemovedHandler_8r9bpt$_0);
  };
  function PriorityQueueAction$actionRemovedHandler$lambda(this$PriorityQueueAction) {
    return function (index, oldAction) {
      var $receiver = this$PriorityQueueAction.prioritiesMap;
      var tmp$;
      (Kotlin.isType(tmp$ = $receiver, Kotlin.kotlin.collections.MutableMap) ? tmp$ : Kotlin.throwCCE()).remove_11rb$(oldAction);
      kotlin_0.Unit;
    };
  }
  function PriorityQueueAction$actionComparator$lambda(this$PriorityQueueAction) {
    return function (o1, o2) {
      var tmp$, tmp$_0;
      if (o1 == null && o2 == null)
        return 0;
      else if (o1 == null)
        return -1;
      else if (o2 == null)
        return 1;
      else {
        var $receiver = this$PriorityQueueAction.prioritiesMap;
        var tmp$_1;
        var value1 = (tmp$ = (Kotlin.isType(tmp$_1 = $receiver, Kotlin.kotlin.collections.Map) ? tmp$_1 : Kotlin.throwCCE()).get_11rb$(o1)) != null ? tmp$ : Kotlin.throwNPE();
        var $receiver_0 = this$PriorityQueueAction.prioritiesMap;
        var tmp$_2;
        var value2 = (tmp$_0 = (Kotlin.isType(tmp$_2 = $receiver_0, Kotlin.kotlin.collections.Map) ? tmp$_2 : Kotlin.throwCCE()).get_11rb$(o2)) != null ? tmp$_0 : Kotlin.throwNPE();
        return Kotlin.primitiveCompareTo(value2, value1);
      }
    };
  }
  PriorityQueueAction.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'PriorityQueueAction',
    interfaces: [DelegateAction]
  };
  function Progress() {
  }
  Object.defineProperty(Progress.prototype, 'percentLoaded', {
    get: function () {
      return this.secondsTotal === 0.0 ? 1.0 : this.secondsLoaded / this.secondsTotal;
    }
  });
  Progress.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'Progress',
    interfaces: []
  };
  function ProgressAction() {
  }
  ProgressAction.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'ProgressAction',
    interfaces: [Progress, Action]
  };
  function ResultAction() {
  }
  ResultAction.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'ResultAction',
    interfaces: [Action]
  };
  function MutableResultAction() {
  }
  MutableResultAction.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'MutableResultAction',
    interfaces: [MutableAction, ResultAction]
  };
  function InputAction() {
  }
  InputAction.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'InputAction',
    interfaces: [MutableAction]
  };
  function Loadable() {
  }
  Loadable.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'Loadable',
    interfaces: [ProgressAction, ResultAction]
  };
  function MutableLoadable() {
  }
  MutableLoadable.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'MutableLoadable',
    interfaces: [MutableResultAction, Loadable]
  };
  function UrlParams() {
  }
  UrlParams.prototype.toQueryString = function () {
    var tmp$;
    var strs = ArrayList_init();
    tmp$ = this.entries;
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      strs.add_11rb$(item.first + '=' + get_encodeUriComponent2()(item.second));
    }
    return joinToString(strs, '&');
  };
  UrlParams.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'UrlParams',
    interfaces: []
  };
  function UrlParamsImpl(queryString) {
    var tmp$;
    var p = new UrlParamsImpl_0();
    var split_1 = split(queryString, ['&']);
    tmp$ = split_1.iterator();
    while (tmp$.hasNext()) {
      var entry = tmp$.next();
      var i = indexOf_0(entry, '=');
      if (i !== -1) {
        var tmp$_0 = entry.substring(0, i);
        var tmp$_1 = get_decodeUriComponent2();
        var startIndex = i + 1 | 0;
        p.append_puj7f4$(tmp$_0, tmp$_1(entry.substring(startIndex)));
      }
    }
    return p;
  }
  function UrlParamsImpl_0() {
    this._items_0 = ArrayList_init();
  }
  Object.defineProperty(UrlParamsImpl_0.prototype, 'items', {
    get: function () {
      return this._items_0;
    }
  });
  UrlParamsImpl_0.prototype.append_puj7f4$ = function (name, value) {
    this._items_0.add_11rb$(new Pair(name, value));
  };
  UrlParamsImpl_0.prototype.appendAll_75a8r4$ = function (entries) {
    var tmp$;
    tmp$ = entries.iterator();
    while (tmp$.hasNext()) {
      var entry = tmp$.next();
      this.append_puj7f4$(entry.first, entry.second);
    }
  };
  UrlParamsImpl_0.prototype.remove_61zpoe$ = function (name) {
    var $receiver = this._items_0;
    var indexOfFirst$result;
    indexOfFirst$break: {
      var tmp$;
      var index = 0;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        if (Kotlin.equals(item.first, name)) {
          indexOfFirst$result = index;
          break indexOfFirst$break;
        }
        index = index + 1 | 0;
      }
      indexOfFirst$result = -1;
    }
    var i = indexOfFirst$result;
    if (i === -1)
      return false;
    this._items_0.removeAt_za3lpa$(i);
    return true;
  };
  UrlParamsImpl_0.prototype.get_61zpoe$ = function (name) {
    var tmp$;
    var $receiver = this._items_0;
    var firstOrNull2_dmm9ex$result;
    firstOrNull2_dmm9ex$break: {
      var tmp$_0;
      tmp$_0 = Kotlin.kotlin.collections.get_lastIndex_55thoc$($receiver);
      for (var i = 0; i <= tmp$_0; i++) {
        var element = $receiver.get_za3lpa$(i);
        if (Kotlin.equals(element.first, name)) {
          firstOrNull2_dmm9ex$result = element;
          break firstOrNull2_dmm9ex$break;
        }
      }
      firstOrNull2_dmm9ex$result = null;
    }
    return (tmp$ = firstOrNull2_dmm9ex$result) != null ? tmp$.second : null;
  };
  UrlParamsImpl_0.prototype.getAll_61zpoe$ = function (name) {
    var tmp$;
    var list = ArrayList_init();
    tmp$ = this._items_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      if (Kotlin.equals(item.first, name))
        list.add_11rb$(item.second);
    }
    return list;
  };
  UrlParamsImpl_0.prototype.set_puj7f4$ = function (name, value) {
    var $receiver = this._items_0;
    var indexOfFirst$result;
    indexOfFirst$break: {
      var tmp$;
      var index_0 = 0;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        if (Kotlin.equals(item.first, name)) {
          indexOfFirst$result = index_0;
          break indexOfFirst$break;
        }
        index_0 = index_0 + 1 | 0;
      }
      indexOfFirst$result = -1;
    }
    var index = indexOfFirst$result;
    if (index === -1) {
      this._items_0.add_11rb$(new Pair(name, value));
    }
     else {
      this._items_0.set_wxm5ur$(index, new Pair(name, value));
    }
  };
  UrlParamsImpl_0.prototype.contains_61zpoe$ = function (name) {
    var $receiver = this._items_0;
    var firstOrNull2_dmm9ex$result;
    firstOrNull2_dmm9ex$break: {
      var tmp$;
      tmp$ = Kotlin.kotlin.collections.get_lastIndex_55thoc$($receiver);
      for (var i = 0; i <= tmp$; i++) {
        var element = $receiver.get_za3lpa$(i);
        if (Kotlin.equals(element.first, name)) {
          firstOrNull2_dmm9ex$result = element;
          break firstOrNull2_dmm9ex$break;
        }
      }
      firstOrNull2_dmm9ex$result = null;
    }
    return firstOrNull2_dmm9ex$result != null;
  };
  UrlParamsImpl_0.prototype.clear = function () {
    this._items_0.clear();
  };
  Object.defineProperty(UrlParamsImpl_0.prototype, 'entries', {
    get: function () {
      return this._items_0.iterator();
    }
  });
  UrlParamsImpl_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'UrlParamsImpl',
    interfaces: [UrlParams, Clearable]
  };
  var encodeUriComponent2;
  function get_encodeUriComponent2() {
    return encodeUriComponent2.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('encodeUriComponent2'));
  }
  function set_encodeUriComponent2(encodeUriComponent2_0) {
    encodeUriComponent2.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('encodeUriComponent2'), encodeUriComponent2_0);
  }
  var decodeUriComponent2;
  function get_decodeUriComponent2() {
    return decodeUriComponent2.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('decodeUriComponent2'));
  }
  function set_decodeUriComponent2(decodeUriComponent2_0) {
    decodeUriComponent2.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('decodeUriComponent2'), decodeUriComponent2_0);
  }
  function appendParam($receiver, paramName, paramValue) {
    return $receiver + (contains($receiver, '?') ? '&' : '?' + (paramName + '=' + get_encodeUriComponent2()(paramValue)));
  }
  function appendOrUpdateParam($receiver, paramName, paramValue) {
    var qIndex = indexOf_0($receiver, '?');
    if (qIndex === -1)
      return $receiver + '?' + paramName + '=' + get_encodeUriComponent2()(paramValue);
    var startIndex = qIndex + 1 | 0;
    var queryStr = $receiver.substring(startIndex);
    var query = UrlParamsImpl(queryStr);
    query.set_puj7f4$(paramName, paramValue);
    return $receiver.substring(0, qIndex) + '?' + query.toQueryString();
  }
  function indexOf_1($receiver, element, fromIndex) {
    var tmp$;
    tmp$ = get_lastIndex_0($receiver);
    for (var i = fromIndex; i <= tmp$; i++) {
      if (Kotlin.equals(element, $receiver[i])) {
        return i;
      }
    }
    return -1;
  }
  function arrayCopy(src, srcPos, dest, destPos, length) {
    if (destPos === void 0)
      destPos = 0;
    if (length === void 0)
      length = src.length;
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (destPos > srcPos) {
      var destIndex = length + destPos - 1 | 0;
      tmp$ = downTo(srcPos + length - 1 | 0, srcPos).iterator();
      while (tmp$.hasNext()) {
        var i = tmp$.next();
        dest[tmp$_0 = destIndex, destIndex = tmp$_0 - 1 | 0, tmp$_0] = src[i];
      }
    }
     else {
      var destIndex_0 = destPos;
      tmp$_1 = srcPos + length - 1 | 0;
      for (var i_0 = srcPos; i_0 <= tmp$_1; i_0++) {
        dest[tmp$_2 = destIndex_0, destIndex_0 = tmp$_2 + 1 | 0, tmp$_2] = src[i_0];
      }
    }
  }
  function arrayCopy_0(src, srcPos, dest, destPos, length) {
    if (destPos === void 0)
      destPos = 0;
    if (length === void 0)
      length = src.length;
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (destPos > srcPos) {
      var destIndex = length + destPos - 1 | 0;
      tmp$ = downTo(srcPos + length - 1 | 0, srcPos).iterator();
      while (tmp$.hasNext()) {
        var i = tmp$.next();
        dest[tmp$_0 = destIndex, destIndex = tmp$_0 - 1 | 0, tmp$_0] = src[i];
      }
    }
     else {
      var destIndex_0 = destPos;
      tmp$_1 = srcPos + length - 1 | 0;
      for (var i_0 = srcPos; i_0 <= tmp$_1; i_0++) {
        dest[tmp$_2 = destIndex_0, destIndex_0 = tmp$_2 + 1 | 0, tmp$_2] = src[i_0];
      }
    }
  }
  function arrayCopy_1(src, srcPos, dest, destPos, length) {
    if (destPos === void 0)
      destPos = 0;
    if (length === void 0)
      length = src.length;
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (destPos > srcPos) {
      var destIndex = length + destPos - 1 | 0;
      tmp$ = downTo(srcPos + length - 1 | 0, srcPos).iterator();
      while (tmp$.hasNext()) {
        var i = tmp$.next();
        dest[tmp$_0 = destIndex, destIndex = tmp$_0 - 1 | 0, tmp$_0] = src[i];
      }
    }
     else {
      var destIndex_0 = destPos;
      tmp$_1 = srcPos + length - 1 | 0;
      for (var i_0 = srcPos; i_0 <= tmp$_1; i_0++) {
        dest[tmp$_2 = destIndex_0, destIndex_0 = tmp$_2 + 1 | 0, tmp$_2] = src[i_0];
      }
    }
  }
  function pop($receiver) {
    return $receiver.removeAt_za3lpa$($receiver.size - 1 | 0);
  }
  function poll($receiver) {
    return $receiver.removeAt_za3lpa$(0);
  }
  function peek($receiver) {
    if ($receiver.isEmpty())
      return null;
    else
      return $receiver.get_za3lpa$(get_lastIndex($receiver));
  }
  function ArrayIterator(array_3) {
    this.array = array_3;
    this.cursor = 0;
    this.lastRet = -1;
  }
  ArrayIterator.prototype.hasNext = function () {
    return this.cursor !== this.array.length;
  };
  ArrayIterator.prototype.next = function () {
    var i = this.cursor;
    if (i >= this.array.length)
      throw new Exception('Iterator does not have next.');
    this.cursor = i + 1 | 0;
    this.lastRet = i;
    return this.array[i];
  };
  ArrayIterator.prototype.nextIndex = function () {
    return this.cursor;
  };
  ArrayIterator.prototype.hasPrevious = function () {
    return this.cursor !== 0;
  };
  ArrayIterator.prototype.previous = function () {
    var i = this.cursor - 1 | 0;
    if (i < 0)
      throw new Exception('Iterator does not have previous.');
    this.cursor = i;
    this.lastRet = i;
    return this.array[i];
  };
  ArrayIterator.prototype.previousIndex = function () {
    return this.cursor - 1 | 0;
  };
  ArrayIterator.prototype.set_11rb$ = function (element) {
    if (this.lastRet < 0)
      throw new Exception('Cannot set before iteration.');
    this.array[this.lastRet] = element;
  };
  ArrayIterator.prototype.clear = function () {
    this.cursor = 0;
    this.lastRet = -1;
  };
  ArrayIterator.prototype.iterator = function () {
    return this;
  };
  ArrayIterator.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ArrayIterator',
    interfaces: [Iterable, ListIterator, Clearable]
  };
  function equalsArray($receiver, other) {
    var tmp$;
    if ($receiver === other)
      return true;
    if (other.length !== $receiver.length)
      return false;
    tmp$ = get_lastIndex_0($receiver);
    for (var i = 0; i <= tmp$; i++) {
      if (!Kotlin.equals($receiver[i], other[i]))
        return false;
    }
    return true;
  }
  function equalsArray_0($receiver, other) {
    var tmp$;
    if ($receiver === other)
      return true;
    if (other.length !== $receiver.length)
      return false;
    tmp$ = get_lastIndex_1($receiver);
    for (var i = 0; i <= tmp$; i++) {
      if ($receiver[i] !== other[i])
        return false;
    }
    return true;
  }
  function hashCodeIterable($receiver) {
    var tmp$, tmp$_0;
    var hashCode = 1;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var e = tmp$.next();
      hashCode = (31 * hashCode | 0) + ((tmp$_0 = e != null ? Kotlin.hashCode(e) : null) != null ? tmp$_0 : 0) | 0;
    }
    return hashCode;
  }
  function hashCodeIterable_0($receiver) {
    var tmp$, tmp$_0;
    var hashCode = 1;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var e = $receiver[tmp$];
      hashCode = (31 * hashCode | 0) + ((tmp$_0 = e != null ? Kotlin.hashCode(e) : null) != null ? tmp$_0 : 0) | 0;
    }
    return hashCode;
  }
  var iterateNotNulls = Kotlin.defineInlineFunction('AcornUtils.com.acornui.collection.iterateNotNulls_ea06pf$', function ($receiver, inner) {
    var i = 0;
    var n = $receiver.length;
    while (i < n) {
      var value = $receiver[i];
      if (value != null) {
        var ret = inner(i, value);
        if (!ret)
          break;
      }
      i = i + 1 | 0;
    }
  });
  function nextNotNull($receiver, start) {
    var index = start;
    var n = $receiver.length;
    while (index < n && $receiver[index] == null) {
      index = index + 1 | 0;
    }
    return index;
  }
  function fill2($receiver, element, fromIndex, toIndex) {
    if (fromIndex === void 0)
      fromIndex = 0;
    if (toIndex === void 0)
      toIndex = $receiver.length;
    var tmp$;
    tmp$ = toIndex - 1 | 0;
    for (var i = fromIndex; i <= tmp$; i++) {
      $receiver[i] = element;
    }
  }
  function scl($receiver, scalar) {
    var tmp$;
    tmp$ = get_lastIndex_1($receiver);
    for (var i = 0; i <= tmp$; i++) {
      $receiver[i] = $receiver[i] * scalar;
    }
  }
  function BinaryHeap(initialCapacity, isMaxHeap) {
    if (isMaxHeap === void 0)
      isMaxHeap = false;
    this.isMaxHeap_0 = isMaxHeap;
    this.nodes_0 = ArrayList_init(initialCapacity);
  }
  Object.defineProperty(BinaryHeap.prototype, 'size', {
    get: function () {
      return this.nodes_0.size;
    }
  });
  BinaryHeap.prototype.add_kzd2hd$ = function (node) {
    node.index_pn85o9$_0 = this.size;
    this.nodes_0.set_wxm5ur$(this.size, node);
    this.up_0(this.size);
    return node;
  };
  BinaryHeap.prototype.add_moq7bw$ = function (node, value) {
    node.value = value;
    return this.add_kzd2hd$(node);
  };
  BinaryHeap.prototype.peek = function () {
    if (this.size === 0)
      throw new IllegalStateException('The heap is empty.');
    return this.nodes_0.get_za3lpa$(0);
  };
  BinaryHeap.prototype.pop = function () {
    return this.remove_0(0);
  };
  BinaryHeap.prototype.remove_kzd2hd$ = function (node) {
    return this.remove_0(node.index_pn85o9$_0);
  };
  BinaryHeap.prototype.remove_0 = function (index) {
    var nodes = this.nodes_0;
    var removed = nodes.get_za3lpa$(index);
    nodes.set_wxm5ur$(index, last(nodes));
    pop(nodes);
    if (this.size > 0 && index < this.size)
      this.down_0(index);
    return removed;
  };
  BinaryHeap.prototype.clear = function () {
    this.nodes_0.clear();
  };
  BinaryHeap.prototype.setValue_moq7bw$ = function (node, value) {
    var oldValue = node.value;
    node.value = value;
    if (value < oldValue ^ this.isMaxHeap_0)
      this.up_0(node.index_pn85o9$_0);
    else
      this.down_0(node.index_pn85o9$_0);
  };
  BinaryHeap.prototype.up_0 = function (index) {
    var i = index;
    var nodes = this.nodes_0;
    var node = nodes.get_za3lpa$(i);
    var value = node.value;
    while (i > 0) {
      var parentIndex = i - 1 >> 1;
      var parent = nodes.get_za3lpa$(parentIndex);
      if (value < parent.value ^ this.isMaxHeap_0) {
        nodes.set_wxm5ur$(i, parent);
        parent.index_pn85o9$_0 = i;
        i = parentIndex;
      }
       else
        break;
    }
    nodes.set_wxm5ur$(i, node);
    node.index_pn85o9$_0 = i;
  };
  BinaryHeap.prototype.down_0 = function (index) {
    var i = index;
    var nodes = this.nodes_0;
    var size = this.size;
    var node = nodes.get_za3lpa$(i);
    var value = node.value;
    while (true) {
      var leftIndex = 1 + (i << 1) | 0;
      if (leftIndex >= size)
        break;
      var rightIndex = leftIndex + 1 | 0;
      var leftNode = nodes.get_za3lpa$(leftIndex);
      var leftValue = leftNode.value;
      var rightNode;
      var rightValue;
      if (rightIndex >= size) {
        rightNode = null;
        rightValue = this.isMaxHeap_0 ? FloatCompanionObject.MIN_VALUE : FloatCompanionObject.MAX_VALUE;
      }
       else {
        rightNode = nodes.get_za3lpa$(rightIndex);
        rightValue = rightNode.value;
      }
      if (leftValue < rightValue ^ this.isMaxHeap_0) {
        if (leftValue === value || leftValue > value ^ this.isMaxHeap_0)
          break;
        nodes.set_wxm5ur$(i, leftNode);
        leftNode.index_pn85o9$_0 = i;
        i = leftIndex;
      }
       else {
        if (rightValue === value || rightValue > value ^ this.isMaxHeap_0)
          break;
        nodes.set_wxm5ur$(i, rightNode != null ? rightNode : Kotlin.throwNPE());
        rightNode.index_pn85o9$_0 = i;
        i = rightIndex;
      }
    }
    nodes.set_wxm5ur$(i, node);
    node.index_pn85o9$_0 = i;
  };
  BinaryHeap.prototype.toString = function () {
    var tmp$;
    if (this.size === 0)
      return '[]';
    var nodes = this.nodes_0;
    var buffer = StringBuilder_init(32);
    buffer.append_s8itvh$(91);
    buffer.append_s8jyv4$(nodes.get_za3lpa$(0).value);
    tmp$ = this.size - 1 | 0;
    for (var i = 1; i <= tmp$; i++) {
      buffer.append_gw00v9$(', ');
      buffer.append_s8jyv4$(nodes.get_za3lpa$(i).value);
    }
    buffer.append_s8itvh$(93);
    return buffer.toString();
  };
  BinaryHeap.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BinaryHeap',
    interfaces: [Clearable]
  };
  function BinaryHeapNode(value) {
    this.value_pn85o9$_0 = 0.0;
    this.index_pn85o9$_0 = 0;
    this.value = value;
  }
  Object.defineProperty(BinaryHeapNode.prototype, 'value', {
    get: function () {
      return this.value_pn85o9$_0;
    },
    set: function (value) {
      this.value_pn85o9$_0 = value;
    }
  });
  BinaryHeapNode.prototype.toString = function () {
    return this.value.toString();
  };
  BinaryHeapNode.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BinaryHeapNode',
    interfaces: []
  };
  function CyclicList(initialCapacity) {
    if (initialCapacity === void 0)
      initialCapacity = 16;
    ListBase.call(this);
    this.items_0 = ArrayList_init(initialCapacity);
    this._size_0 = 0;
    this.capacity_0 = initialCapacity;
    this.start_0 = 0;
    var $receiver = this.items_0;
    var newSize = initialCapacity;
    var tmp$, tmp$_0;
    tmp$ = $receiver.size;
    tmp$_0 = newSize - 1 | 0;
    for (var i = tmp$; i <= tmp$_0; i++) {
      $receiver.add_11rb$(null);
    }
  }
  Object.defineProperty(CyclicList.prototype, 'size', {
    get: function () {
      return this._size_0;
    }
  });
  CyclicList.prototype.unshift_7l2mas$ = function (values) {
    var tmp$;
    tmp$ = get_lastIndex_0(values);
    for (var i = 0; i <= tmp$; i++) {
      this.unshift_11rb$(values[i]);
    }
  };
  CyclicList.prototype.unshift_11rb$ = function (value) {
    if (this._size_0 === this.capacity_0) {
      var tmp$ = this.resize_0;
      var b = this._size_0 * 1.75 | 0;
      tmp$.call(this, Math.max(8, b));
    }
    var localIndex = this.getLocalIndex_0(-1);
    this.items_0.set_wxm5ur$(localIndex, value);
    this.start_0 = localIndex;
    this._size_0 = this._size_0 + 1 | 0;
  };
  CyclicList.prototype.shift = function () {
    var tmp$;
    if (this._size_0 === 0)
      throw new Exception('List is empty');
    var item = (tmp$ = this.items_0.get_za3lpa$(this.start_0)) != null ? tmp$ : Kotlin.throwNPE();
    this.items_0.set_wxm5ur$(this.start_0, null);
    this.start_0 = this.getLocalIndex_0(1);
    this._size_0 = this._size_0 - 1 | 0;
    return item;
  };
  CyclicList.prototype.add_p1ys8y$ = function (values) {
    var tmp$;
    tmp$ = values.iterator();
    while (tmp$.hasNext()) {
      var t = tmp$.next();
      this.add_11rb$(t);
    }
  };
  CyclicList.prototype.add_7l2mas$ = function (values) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== values.length; ++tmp$) {
      var t = values[tmp$];
      this.add_11rb$(t);
    }
  };
  CyclicList.prototype.add_11rb$ = function (value) {
    if (this._size_0 === this.capacity_0) {
      var tmp$ = this.resize_0;
      var b = this._size_0 * 1.75 | 0;
      tmp$.call(this, Math.max(8, b));
    }
    var localIndex = this.getLocalIndex_0(this._size_0);
    this.items_0.set_wxm5ur$(localIndex, value);
    this._size_0 = this._size_0 + 1 | 0;
  };
  CyclicList.prototype.pop = function () {
    var tmp$;
    if (this._size_0 === 0)
      throw new Exception('List is empty');
    var localIndex = this.getLocalIndex_0(this._size_0 - 1 | 0);
    var item = (tmp$ = this.items_0.get_za3lpa$(localIndex)) != null ? tmp$ : Kotlin.throwNPE();
    this.items_0.set_wxm5ur$(localIndex, null);
    this._size_0 = this._size_0 - 1 | 0;
    return item;
  };
  CyclicList.prototype.get_za3lpa$ = function (index) {
    var tmp$;
    var localIndex = this.getLocalIndex_0(index);
    return (tmp$ = this.items_0.get_za3lpa$(localIndex)) != null ? tmp$ : Kotlin.throwNPE();
  };
  CyclicList.prototype.getLocalIndex_0 = function (index) {
    var localIndex = this.start_0 + index | 0;
    if (localIndex >= this.capacity_0) {
      localIndex = localIndex - this.capacity_0 | 0;
      if (localIndex >= this.start_0) {
        throw new IllegalArgumentException('Index is out of bounds: ' + Kotlin.toString(index));
      }
    }
    if (localIndex < 0) {
      localIndex = localIndex + this.capacity_0 | 0;
      if (localIndex < (this.start_0 + this._size_0 | 0)) {
        throw new IllegalArgumentException('Index is out of bounds: ' + Kotlin.toString(index));
      }
    }
    return localIndex;
  };
  CyclicList.prototype.clear = function () {
    var tmp$;
    tmp$ = this.capacity_0 - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      this.items_0.set_wxm5ur$(i, null);
    }
    this._size_0 = 0;
    this.start_0 = 0;
  };
  CyclicList.prototype.resize_0 = function (newCapacity) {
    var newItems = ArrayList_init(newCapacity);
    var tmp$, tmp$_0;
    tmp$ = newItems.size;
    tmp$_0 = newCapacity - 1 | 0;
    for (var i = tmp$; i <= tmp$_0; i++) {
      newItems.add_11rb$(null);
    }
    if ((this.start_0 + this.size | 0) > this.capacity_0) {
      arrayCopy_2(this.items_0, this.start_0, newItems, 0, this.capacity_0 - this.start_0 | 0);
      arrayCopy_2(this.items_0, 0, newItems, this.capacity_0 - this.start_0 | 0, this.size - this.capacity_0 + this.start_0 | 0);
    }
     else {
      arrayCopy_2(this.items_0, this.start_0, newItems, 0, this.size);
    }
    this.items_0 = newItems;
    this.start_0 = 0;
    this.capacity_0 = newCapacity;
  };
  CyclicList.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'CyclicList',
    interfaces: [ListBase, Clearable]
  };
  function cyclicListPool$lambda() {
    return new CyclicList();
  }
  var cyclicListPool;
  function DualHashMap(removeEmptyInnerMaps) {
    if (removeEmptyInnerMaps === void 0)
      removeEmptyInnerMaps = false;
    this.removeEmptyInnerMaps = removeEmptyInnerMaps;
    this.map = HashMap_init();
  }
  DualHashMap.prototype.put_1llc0w$ = function (key1, key2, value) {
    var inner = this.map.get_11rb$(key1);
    if (inner == null) {
      inner = HashMap_init();
      this.map.put_xwzc9p$(key1, inner);
    }
    inner.put_xwzc9p$(key2, value);
  };
  DualHashMap.prototype.get_xwzc9p$ = function (key1, key2) {
    var tmp$;
    return (tmp$ = this.map.get_11rb$(key1)) != null ? tmp$.get_11rb$(key2) : null;
  };
  DualHashMap.prototype.get_11rb$ = function (key1) {
    return this.map.get_11rb$(key1);
  };
  DualHashMap.prototype.remove_11rb$ = function (key) {
    return this.map.remove_11rb$(key);
  };
  DualHashMap.prototype.remove_xwzc9p$ = function (key1, key2) {
    var tmp$;
    tmp$ = this.map.get_11rb$(key1);
    if (tmp$ == null) {
      return null;
    }
    var inner = tmp$;
    var value = inner.remove_11rb$(key2);
    if (this.removeEmptyInnerMaps && inner.isEmpty()) {
      this.map.remove_11rb$(key1);
    }
    return value;
  };
  DualHashMap.prototype.clear = function () {
    this.map.clear();
  };
  DualHashMap.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DualHashMap',
    interfaces: [Clearable]
  };
  function Entry() {
    this.value = null;
    this.previous = null;
    this.next = null;
  }
  Entry.prototype.clear = function () {
    this.value = null;
    this.previous = null;
    this.next = null;
  };
  Entry.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Entry',
    interfaces: [Clearable]
  };
  function LinkedListIterator(list) {
    this.list = list;
    this.current_0 = this.list.head;
  }
  LinkedListIterator.prototype.next = function () {
    var tmp$, tmp$_0;
    var c = ((tmp$ = this.current_0) != null ? tmp$ : Kotlin.throwNPE()).value;
    this.current_0 = ((tmp$_0 = this.current_0) != null ? tmp$_0 : Kotlin.throwNPE()).next;
    return c != null ? c : Kotlin.throwNPE();
  };
  LinkedListIterator.prototype.hasNext = function () {
    return this.current_0 != null;
  };
  LinkedListIterator.prototype.clear = function () {
    this.current_0 = this.list.head;
  };
  LinkedListIterator.prototype.remove = function () {
    var tmp$;
    if (this.current_0 != null) {
      this.list.remove_nx2jyl$((tmp$ = this.current_0) != null ? tmp$ : Kotlin.throwNPE());
    }
  };
  LinkedListIterator.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LinkedListIterator',
    interfaces: [MutableIterator, Clearable]
  };
  function LinkedList() {
    this.pool_0 = new ClearableObjectPool(void 0, LinkedList$pool$lambda);
    this.head = null;
    this.tail = null;
    this.size_0 = 0;
  }
  LinkedList.prototype.size = function () {
    return this.size_0;
  };
  LinkedList.prototype.isEmpty = function () {
    return this.size_0 === 0;
  };
  LinkedList.prototype.isNotEmpty = function () {
    return this.size_0 > 0;
  };
  LinkedList.prototype.add_11rb$ = function (value) {
    var tmp$;
    var entry = this.pool_0.obtain();
    entry.value = value;
    if (this.head == null) {
      this.head = entry;
      this.tail = entry;
    }
     else {
      ((tmp$ = this.tail) != null ? tmp$ : Kotlin.throwNPE()).next = entry;
      entry.previous = this.tail;
      this.tail = entry;
    }
    this.size_0 = this.size_0 + 1 | 0;
    return entry;
  };
  LinkedList.prototype.addAll_nrxefi$ = function (source, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = source.length;
    var tmp$;
    tmp$ = offset + length - 1 | 0;
    for (var i = offset; i <= tmp$; i++) {
      this.add_11rb$(source[i]);
    }
  };
  LinkedList.prototype.addAll_7l2mas$ = function (array_3) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== array_3.length; ++tmp$) {
      var i = array_3[tmp$];
      this.add_11rb$(i);
    }
  };
  LinkedList.prototype.remove_nx2jyl$ = function (entry) {
    var tmp$, tmp$_0;
    if (entry.previous != null) {
      ((tmp$ = entry.previous) != null ? tmp$ : Kotlin.throwNPE()).next = entry.next;
    }
    if (entry.next != null) {
      ((tmp$_0 = entry.next) != null ? tmp$_0 : Kotlin.throwNPE()).previous = entry.previous;
    }
    if (Kotlin.equals(entry, this.head)) {
      this.head = entry.next;
    }
    if (Kotlin.equals(entry, this.tail)) {
      this.tail = entry.previous;
    }
    this.pool_0.free_11rb$(entry);
    this.size_0 = this.size_0 - 1 | 0;
  };
  LinkedList.prototype.find_11rb$ = function (value) {
    var next = this.head;
    while (next != null) {
      if (Kotlin.equals(next.value, value))
        return next;
      next = next.next;
    }
    return null;
  };
  LinkedList.prototype.poll = function () {
    var tmp$, tmp$_0;
    if (this.head == null)
      return null;
    var value = ((tmp$ = this.head) != null ? tmp$ : Kotlin.throwNPE()).value;
    this.remove_nx2jyl$((tmp$_0 = this.head) != null ? tmp$_0 : Kotlin.throwNPE());
    return value;
  };
  LinkedList.prototype.peek = function () {
    var tmp$, tmp$_0;
    if (this.tail == null)
      return null;
    var value = ((tmp$ = this.tail) != null ? tmp$ : Kotlin.throwNPE()).value;
    this.remove_nx2jyl$((tmp$_0 = this.tail) != null ? tmp$_0 : Kotlin.throwNPE());
    return value;
  };
  LinkedList.prototype.offer_11rb$ = function (e) {
    this.add_11rb$(e);
    return true;
  };
  LinkedList.prototype.clear = function () {
    this.head = null;
    this.tail = null;
    this.size_0 = 0;
  };
  LinkedList.prototype.toString = function () {
    if (this.size_0 === 0)
      return '[]';
    var buffer = '';
    buffer += '[';
    var current = this.head;
    while (current != null) {
      if (!Kotlin.equals(current, this.head))
        buffer += ', ';
      buffer += current.value;
      current = current.next;
    }
    buffer += String.fromCharCode(93);
    return buffer;
  };
  LinkedList.prototype.iterator = function () {
    return new LinkedListIterator(this);
  };
  function LinkedList$pool$lambda() {
    return new Entry();
  }
  LinkedList.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LinkedList',
    interfaces: [Clearable, Iterable]
  };
  function arrayCopy_2(src, srcPos, dest, destPos, length) {
    if (destPos === void 0)
      destPos = 0;
    if (length === void 0)
      length = src.size;
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (destPos > srcPos) {
      var destIndex = length + destPos - 1 | 0;
      tmp$ = downTo(srcPos + length - 1 | 0, srcPos).iterator();
      while (tmp$.hasNext()) {
        var i = tmp$.next();
        addOrSet(dest, (tmp$_0 = destIndex, destIndex = tmp$_0 - 1 | 0, tmp$_0), src.get_za3lpa$(i));
      }
    }
     else {
      var destIndex_0 = destPos;
      tmp$_1 = srcPos + length - 1 | 0;
      for (var i_0 = srcPos; i_0 <= tmp$_1; i_0++) {
        addOrSet(dest, (tmp$_2 = destIndex_0, destIndex_0 = tmp$_2 + 1 | 0, tmp$_2), src.get_za3lpa$(i_0));
      }
    }
  }
  function clone($receiver) {
    var newList = ArrayList_init($receiver.size);
    arrayCopy_2($receiver, 0, newList);
    return newList;
  }
  function addAllUnique($receiver, other) {
    var tmp$;
    tmp$ = get_lastIndex(other);
    for (var i = 0; i <= tmp$; i++) {
      var item = other.get_za3lpa$(i);
      if (!$receiver.contains_11rb$(item)) {
        $receiver.add_11rb$(item);
      }
    }
  }
  function addAllUnique_0($receiver, other) {
    var tmp$;
    tmp$ = get_lastIndex_0(other);
    for (var i = 0; i <= tmp$; i++) {
      var item = other[i];
      if (!$receiver.contains_11rb$(item)) {
        $receiver.add_11rb$(item);
      }
    }
  }
  function sortedInsertionIndex_0($receiver, element, startIndex, endIndex, matchForwards) {
    if (startIndex === void 0)
      startIndex = 0;
    if (endIndex === void 0)
      endIndex = $receiver.size;
    if (matchForwards === void 0)
      matchForwards = true;
    var indexA = startIndex;
    var indexB = endIndex;
    while (indexA < indexB) {
      var midIndex = indexA + indexB >>> 1;
      var comparison = Kotlin.compareTo(element, $receiver.get_za3lpa$(midIndex));
      if (comparison === 0) {
        if (matchForwards) {
          indexA = midIndex + 1 | 0;
        }
         else {
          indexB = midIndex;
        }
      }
       else if (comparison > 0) {
        indexA = midIndex + 1 | 0;
      }
       else {
        indexB = midIndex;
      }
    }
    return indexA;
  }
  function sortedInsertionIndex($receiver, element, comparator, startIndex, endIndex, matchForwards) {
    if (startIndex === void 0)
      startIndex = 0;
    if (endIndex === void 0)
      endIndex = $receiver.size;
    if (matchForwards === void 0)
      matchForwards = true;
    var indexA = startIndex;
    var indexB = endIndex;
    while (indexA < indexB) {
      var midIndex = indexA + indexB >>> 1;
      var comparison = comparator(element, $receiver.get_za3lpa$(midIndex));
      if (comparison === 0) {
        if (matchForwards) {
          indexA = midIndex + 1 | 0;
        }
         else {
          indexB = midIndex;
        }
      }
       else if (comparison > 0) {
        indexA = midIndex + 1 | 0;
      }
       else {
        indexB = midIndex;
      }
    }
    return indexA;
  }
  function ListBase() {
  }
  Object.defineProperty(ListBase.prototype, 'lastIndex', {
    get: function () {
      return this.size - 1 | 0;
    }
  });
  ListBase.prototype.indexOf_11rb$ = function (element) {
    var tmp$;
    tmp$ = this.lastIndex;
    for (var i = 0; i <= tmp$; i++) {
      if (Kotlin.equals(this.get_za3lpa$(i), element))
        return i;
    }
    return -1;
  };
  ListBase.prototype.lastIndexOf_11rb$ = function (element) {
    var tmp$;
    tmp$ = downTo(this.lastIndex, 0).iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      if (Kotlin.equals(this.get_za3lpa$(i), element))
        return i;
    }
    return -1;
  };
  ListBase.prototype.contains_11rb$ = function (element) {
    var tmp$;
    tmp$ = this.lastIndex;
    for (var i = 0; i <= tmp$; i++) {
      if (Kotlin.equals(this.get_za3lpa$(i), element))
        return true;
    }
    return false;
  };
  ListBase.prototype.containsAll_brywnq$ = function (elements) {
    var tmp$;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!this.contains_11rb$(element))
        return false;
    }
    return true;
  };
  ListBase.prototype.isEmpty = function () {
    return this.size === 0;
  };
  ListBase.prototype.iterator = function () {
    return new ListIteratorImpl(this);
  };
  ListBase.prototype.listIterator = function () {
    return new ListIteratorImpl(this);
  };
  ListBase.prototype.listIterator_za3lpa$ = function (index) {
    var t = new ListIteratorImpl(this);
    t.cursor = index;
    return t;
  };
  ListBase.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    return new SubList(this, fromIndex, toIndex);
  };
  ListBase.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ListBase',
    interfaces: [List]
  };
  function MutableListBase() {
    ListBase.call(this);
  }
  MutableListBase.prototype.add_11rb$ = function (element) {
    this.add_wxm5ur$(this.size, element);
    return true;
  };
  MutableListBase.prototype.addAll_u57x28$ = function (index, elements) {
    var tmp$, tmp$_0;
    var i = index;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.add_wxm5ur$((tmp$_0 = i, i = tmp$_0 + 1 | 0, tmp$_0), element);
    }
    return true;
  };
  MutableListBase.prototype.addAll_brywnq$ = function (elements) {
    var tmp$;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.add_11rb$(element);
    }
    return true;
  };
  MutableListBase.prototype.clear = function () {
    var tmp$;
    tmp$ = downTo(this.lastIndex, 0).iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      this.removeAt_za3lpa$(i);
    }
  };
  MutableListBase.prototype.remove_11rb$ = function (element) {
    var index = this.indexOf_11rb$(element);
    if (index === -1)
      return false;
    this.removeAt_za3lpa$(index);
    return true;
  };
  MutableListBase.prototype.removeAll_brywnq$ = function (elements) {
    var tmp$;
    var changed = false;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      changed = (changed && this.remove_11rb$(i));
    }
    return changed;
  };
  MutableListBase.prototype.retainAll_brywnq$ = function (elements) {
    var tmp$;
    var changed = false;
    tmp$ = this.lastIndex;
    for (var i = 0; i <= tmp$; i++) {
      var element = this.get_za3lpa$(i);
      if (!elements.contains_11rb$(element)) {
        changed = true;
        this.remove_11rb$(element);
      }
    }
    return changed;
  };
  MutableListBase.prototype.iterator = function () {
    return new MutableListIteratorImpl(this);
  };
  MutableListBase.prototype.listIterator = function () {
    return new MutableListIteratorImpl(this);
  };
  MutableListBase.prototype.listIterator_za3lpa$ = function (index) {
    var iterator_1 = new MutableListIteratorImpl(this);
    iterator_1.cursor = index;
    return iterator_1;
  };
  MutableListBase.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    return new MutableSubList(this, fromIndex, toIndex);
  };
  MutableListBase.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'MutableListBase',
    interfaces: [MutableList, Clearable, ListBase]
  };
  function ListIteratorImpl(list) {
    this.list = list;
    this.cursor = 0;
    this.lastRet = -1;
  }
  ListIteratorImpl.prototype.hasNext = function () {
    return this.cursor < this.list.size;
  };
  ListIteratorImpl.prototype.next = function () {
    var i = this.cursor;
    if (i >= this.list.size)
      throw new Exception('Iterator does not have next.');
    this.cursor = i + 1 | 0;
    this.lastRet = i;
    return this.list.get_za3lpa$(i);
  };
  ListIteratorImpl.prototype.nextIndex = function () {
    return this.cursor;
  };
  ListIteratorImpl.prototype.hasPrevious = function () {
    return this.cursor !== 0;
  };
  ListIteratorImpl.prototype.previous = function () {
    var i = this.cursor - 1 | 0;
    if (i < 0)
      throw new Exception('Iterator does not have previous.');
    this.cursor = i;
    this.lastRet = i;
    return this.list.get_za3lpa$(i);
  };
  ListIteratorImpl.prototype.previousIndex = function () {
    return this.cursor - 1 | 0;
  };
  ListIteratorImpl.prototype.clear = function () {
    this.cursor = 0;
    this.lastRet = -1;
  };
  ListIteratorImpl.prototype.iterator = function () {
    return this;
  };
  ListIteratorImpl.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ListIteratorImpl',
    interfaces: [Iterable, ListIterator, Clearable]
  };
  function MutableListIteratorImpl(mutableList) {
    ListIteratorImpl.call(this, mutableList);
    this.mutableList_cw3o7a$_0 = mutableList;
  }
  MutableListIteratorImpl.prototype.add_11rb$ = function (element) {
    this.mutableList_cw3o7a$_0.add_wxm5ur$(this.cursor, element);
    this.cursor = this.cursor + 1 | 0;
    this.lastRet = this.lastRet + 1 | 0;
  };
  MutableListIteratorImpl.prototype.remove = function () {
    if (this.lastRet < 0)
      throw new Exception('Cannot remove before iteration.');
    this.mutableList_cw3o7a$_0.removeAt_za3lpa$(this.lastRet);
  };
  MutableListIteratorImpl.prototype.set_11rb$ = function (element) {
    if (this.lastRet < 0)
      throw new Exception('Cannot set before iteration.');
    this.mutableList_cw3o7a$_0.set_wxm5ur$(this.lastRet, element);
  };
  MutableListIteratorImpl.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'MutableListIteratorImpl',
    interfaces: [MutableListIterator, ListIteratorImpl]
  };
  function SubList(target, fromIndex, toIndex) {
    ListBase.call(this);
    this.target_0 = target;
    this.fromIndex_0 = fromIndex;
    this.toIndex_0 = toIndex;
  }
  Object.defineProperty(SubList.prototype, 'size', {
    get: function () {
      return this.toIndex_0 - this.fromIndex_0 | 0;
    }
  });
  SubList.prototype.get_za3lpa$ = function (index) {
    return this.target_0.get_za3lpa$(index - this.fromIndex_0 | 0);
  };
  SubList.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SubList',
    interfaces: [ListBase]
  };
  function MutableSubList(target, fromIndex, toIndex) {
    MutableListBase.call(this);
    this.target_0 = target;
    this.fromIndex_0 = fromIndex;
    this.toIndex_0 = toIndex;
  }
  Object.defineProperty(MutableSubList.prototype, 'size', {
    get: function () {
      return this.toIndex_0 - this.fromIndex_0 | 0;
    }
  });
  MutableSubList.prototype.get_za3lpa$ = function (index) {
    return this.target_0.get_za3lpa$(index - this.fromIndex_0 | 0);
  };
  MutableSubList.prototype.add_wxm5ur$ = function (index, element) {
    this.target_0.add_wxm5ur$(index - this.fromIndex_0 | 0, element);
  };
  MutableSubList.prototype.removeAt_za3lpa$ = function (index) {
    return this.target_0.removeAt_za3lpa$(index - this.fromIndex_0 | 0);
  };
  MutableSubList.prototype.set_wxm5ur$ = function (index, element) {
    return this.target_0.set_wxm5ur$(index - this.fromIndex_0 | 0, element);
  };
  MutableSubList.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'MutableSubList',
    interfaces: [MutableListBase]
  };
  function arrayListPool$ObjectLiteral(initialCapacity, create) {
    ObjectPool.call(this, initialCapacity, create);
  }
  arrayListPool$ObjectLiteral.prototype.free_11rb$ = function (obj_4) {
    obj_4.clear();
    ObjectPool.prototype.free_11rb$.call(this, obj_4);
  };
  arrayListPool$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [ObjectPool]
  };
  function arrayListPool$arrayListPool$ObjectLiteral_init$lambda() {
    return ArrayList_init();
  }
  var arrayListPool;
  function addOrSet($receiver, i, value) {
    if (i === $receiver.size)
      $receiver.add_11rb$(value);
    else
      $receiver.set_wxm5ur$(i, value);
  }
  var fill = Kotlin.defineInlineFunction('AcornUtils.com.acornui.collection.fill_whk35f$', function ($receiver, newSize, factory) {
    var tmp$, tmp$_0;
    tmp$ = $receiver.size;
    tmp$_0 = newSize - 1 | 0;
    for (var i = tmp$; i <= tmp$_0; i++) {
      $receiver.add_11rb$(factory());
    }
  });
  function addAll2($receiver, list) {
    addAll2_0($receiver, 0, list);
  }
  function addAll2_0($receiver, index, list) {
    var tmp$;
    tmp$ = get_lastIndex(list);
    for (var i = 0; i <= tmp$; i++) {
      $receiver.add_wxm5ur$(index + i | 0, list.get_za3lpa$(i));
    }
  }
  function toList($receiver) {
    var list = ArrayList_init();
    while ($receiver.hasNext()) {
      list.add_11rb$($receiver.next());
    }
    return list;
  }
  function arrayList2(array_3) {
    var tmp$;
    var max_sdesaw$result;
    if (Kotlin.compareTo(16, array_3.length) >= 0) {
      max_sdesaw$result = 16;
    }
     else {
      max_sdesaw$result = array_3.length;
    }
    var a = ArrayList_init(max_sdesaw$result);
    tmp$ = get_lastIndex_0(array_3);
    for (var i = 0; i <= tmp$; i++) {
      a.add_11rb$(array_3[i]);
    }
    return a;
  }
  var filterTo2 = Kotlin.defineInlineFunction('AcornUtils.com.acornui.collection.filterTo2_lfxn3m$', function ($receiver, destination, predicate) {
    var tmp$;
    tmp$ = Kotlin.kotlin.collections.get_lastIndex_55thoc$($receiver);
    for (var i = 0; i <= tmp$; i++) {
      var element = $receiver.get_za3lpa$(i);
      if (predicate(element))
        destination.add_11rb$(element);
    }
    return destination;
  });
  var find2 = Kotlin.defineInlineFunction('AcornUtils.com.acornui.collection.find2_dmm9ex$', function ($receiver, predicate) {
    var firstOrNull2_dmm9ex$result;
    firstOrNull2_dmm9ex$break: {
      var tmp$;
      tmp$ = Kotlin.kotlin.collections.get_lastIndex_55thoc$($receiver);
      for (var i = 0; i <= tmp$; i++) {
        var element = $receiver.get_za3lpa$(i);
        if (predicate(element)) {
          firstOrNull2_dmm9ex$result = element;
          break firstOrNull2_dmm9ex$break;
        }
      }
      firstOrNull2_dmm9ex$result = null;
    }
    return firstOrNull2_dmm9ex$result;
  });
  var forEach2 = Kotlin.defineInlineFunction('AcornUtils.com.acornui.collection.forEach2_qvzyjf$', function ($receiver, action) {
    var tmp$;
    tmp$ = Kotlin.kotlin.collections.get_lastIndex_55thoc$($receiver);
    for (var i = 0; i <= tmp$; i++)
      action($receiver.get_za3lpa$(i));
  });
  var firstOrNull2 = Kotlin.defineInlineFunction('AcornUtils.com.acornui.collection.firstOrNull2_dmm9ex$', function ($receiver, predicate) {
    var tmp$;
    tmp$ = Kotlin.kotlin.collections.get_lastIndex_55thoc$($receiver);
    for (var i = 0; i <= tmp$; i++) {
      var element = $receiver.get_za3lpa$(i);
      if (predicate(element))
        return element;
    }
    return null;
  });
  function sum2($receiver) {
    var tmp$;
    var t = 0.0;
    tmp$ = get_lastIndex($receiver);
    for (var i = 0; i <= tmp$; i++) {
      t += $receiver.get_za3lpa$(i);
    }
    return t;
  }
  function ListView(wrapped) {
    this.wrapped_0 = wrapped;
    this.localIndex_0 = ActiveList_init();
    this._reset_0 = new Signal0();
    this.reset_bziuth$_0 = this._reset_0;
    this.isDirty_0 = true;
    this.iteratorPool_0 = new ClearableObjectPool(void 0, ListView$iteratorPool$lambda(this));
    this.filter$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(ListView$filter$lambda(this), null);
    this.sortComparator$delegate = new Kotlin.kotlin.properties.Delegates.observable$f(ListView$sortComparator$lambda(this), null);
    this.sortComparatorObj_0 = null;
    this.addedHandler_0 = ListView$addedHandler$lambda(this);
    this.removedHandler_0 = ListView$removedHandler$lambda(this);
    this.changedHandler_0 = ListView$changedHandler$lambda(this);
    this.resetHandler_0 = ListView$resetHandler$lambda(this);
    this.sortComparatorObj_0 = new Kotlin.kotlin.Comparator$f(ListView_init$lambda(this));
    this.wrapped_0.added.add_trkh7z$(this.addedHandler_0);
    this.wrapped_0.removed.add_trkh7z$(this.removedHandler_0);
    this.wrapped_0.changed.add_trkh7z$(this.changedHandler_0);
    this.wrapped_0.reset.add_trkh7z$(this.resetHandler_0);
  }
  Object.defineProperty(ListView.prototype, 'added', {
    get: function () {
      return this.localIndex_0.added;
    }
  });
  Object.defineProperty(ListView.prototype, 'removed', {
    get: function () {
      return this.localIndex_0.removed;
    }
  });
  Object.defineProperty(ListView.prototype, 'changed', {
    get: function () {
      return this.localIndex_0.changed;
    }
  });
  Object.defineProperty(ListView.prototype, 'reset', {
    get: function () {
      return this.reset_bziuth$_0;
    }
  });
  Object.defineProperty(ListView.prototype, 'filter', {
    get: function () {
      return this.filter$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('filter'));
    },
    set: function (filter) {
      this.filter$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('filter'), filter);
    }
  });
  Object.defineProperty(ListView.prototype, 'sortComparator', {
    get: function () {
      return this.sortComparator$delegate.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('sortComparator'));
    },
    set: function (sortComparator) {
      this.sortComparator$delegate.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('sortComparator'), sortComparator);
    }
  });
  ListView.prototype.notifyElementChanged_11rb$ = function (element) {
    var tmp$, tmp$_0;
    if (this.isDirty_0)
      return;
    var listChanged = false;
    var oldIndex = this.indexOf_11rb$(element);
    var isShown;
    if (this.filter != null) {
      var wasShown = oldIndex !== -1;
      isShown = ((tmp$ = this.filter) != null ? tmp$ : Kotlin.throwNPE())(element);
      if (!Kotlin.equals(isShown, wasShown))
        listChanged = true;
    }
     else {
      isShown = true;
    }
    if (!listChanged && isShown && this.sortComparator != null) {
      var newIndex = sortedInsertionIndex(this.localIndex_0, element, (tmp$_0 = this.sortComparator) != null ? tmp$_0 : Kotlin.throwNPE());
      if (oldIndex !== (newIndex - 1 | 0))
        listChanged = true;
    }
    if (listChanged) {
      this.removeElement_0(element);
      this.addElement_0(this.wrapped_0.indexOf_11rb$(element));
    }
  };
  ListView.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    this.validate_0();
    return this.localIndex_0.subList_vux9f0$(fromIndex, toIndex);
  };
  Object.defineProperty(ListView.prototype, 'size', {
    get: function () {
      this.validate_0();
      return this.localIndex_0.size;
    }
  });
  ListView.prototype.contains_11rb$ = function (element) {
    this.validate_0();
    return this.localIndex_0.contains_11rb$(element);
  };
  ListView.prototype.containsAll_brywnq$ = function (elements) {
    this.validate_0();
    return this.localIndex_0.containsAll_brywnq$(elements);
  };
  ListView.prototype.get_za3lpa$ = function (index) {
    this.validate_0();
    return this.localIndex_0.get_za3lpa$(index);
  };
  ListView.prototype.indexOf_11rb$ = function (element) {
    var tmp$, tmp$_0;
    this.validate_0();
    if (this.localIndex_0.isEmpty())
      return -1;
    if (Kotlin.equals((tmp$ = this.filter) != null ? tmp$(element) : null, false))
      return -1;
    if (this.sortComparator != null) {
      var i = sortedInsertionIndex(this.localIndex_0, element, (tmp$_0 = this.sortComparator) != null ? tmp$_0 : Kotlin.throwNPE(), void 0, void 0, false);
      if (i === this.localIndex_0.size || !Kotlin.equals(this.localIndex_0.get_za3lpa$(i), element)) {
        return -1;
      }
      return i;
    }
    return this.localIndex_0.indexOf_11rb$(element);
  };
  ListView.prototype.isEmpty = function () {
    this.validate_0();
    return this.localIndex_0.isEmpty();
  };
  ListView.prototype.lastIndexOf_11rb$ = function (element) {
    var tmp$;
    this.validate_0();
    if (this.localIndex_0.isEmpty())
      return -1;
    if (this.isFiltered_0(element))
      return -1;
    if (this.sortComparator != null) {
      var i = sortedInsertionIndex(this.localIndex_0, element, (tmp$ = this.sortComparator) != null ? tmp$ : Kotlin.throwNPE(), void 0, void 0, true);
      if (i === 0 || !Kotlin.equals(this.localIndex_0.get_za3lpa$(i - 1 | 0), element)) {
        return -1;
      }
      return i - 1 | 0;
    }
    return this.localIndex_0.lastIndexOf_11rb$(element);
  };
  ListView.prototype.iterator = function () {
    return new ConcurrentListIterator(this);
  };
  ListView.prototype.listIterator = function () {
    return new ConcurrentListIterator(this);
  };
  ListView.prototype.listIterator_za3lpa$ = function (index) {
    var iterator_1 = new ConcurrentListIterator(this);
    iterator_1.cursor = index;
    return iterator_1;
  };
  ListView.prototype.concurrentIterator = function () {
    return new ConcurrentListIterator(this);
  };
  ListView.prototype.iterate_ucl7l2$ = function (body) {
    var iterator_1 = this.iteratorPool_0.obtain();
    while (iterator_1.hasNext()) {
      var shouldContinue = body(iterator_1.next());
      if (!shouldContinue)
        break;
    }
    this.iteratorPool_0.free_11rb$(iterator_1);
  };
  ListView.prototype.iterateReversed_ucl7l2$ = function (body) {
    var iterator_1 = this.iteratorPool_0.obtain();
    iterator_1.cursor = this.size;
    while (iterator_1.hasPrevious()) {
      var shouldContinue = body(iterator_1.previous());
      if (!shouldContinue)
        break;
    }
    this.iteratorPool_0.free_11rb$(iterator_1);
  };
  ListView.prototype.removeElement_0 = function (element) {
    var index = this.indexOf_11rb$(element);
    if (index === -1)
      return false;
    this.localIndex_0.removeAt_za3lpa$(index);
    return true;
  };
  ListView.prototype.addElement_0 = function (sourceIndex) {
    var element = this.wrapped_0.get_za3lpa$(sourceIndex);
    var insertionIndex = this.findInsertionIndex_0(sourceIndex);
    if (insertionIndex !== -1) {
      this.localIndex_0.add_wxm5ur$(insertionIndex, element);
      return true;
    }
    return false;
  };
  ListView.prototype.findInsertionIndex_0 = function (sourceIndex) {
    var tmp$;
    var filter = this.filter;
    var element = this.wrapped_0.get_za3lpa$(sourceIndex);
    if (this.isFiltered_0(element))
      return -1;
    if (this.sortComparator != null) {
      return sortedInsertionIndex(this.localIndex_0, element, (tmp$ = this.sortComparator) != null ? tmp$ : Kotlin.throwNPE());
    }
     else {
      if (filter == null) {
        return sourceIndex;
      }
       else {
        var len = this.wrapped_0.size;
        var index = sourceIndex;
        while (index < (len - 1 | 0)) {
          var neighbor = this.wrapped_0.get_za3lpa$(index + 1 | 0);
          if (filter(neighbor)) {
            var neighborIndex = this.localIndex_0.indexOf_11rb$(neighbor);
            if (neighborIndex !== -1)
              return neighborIndex;
          }
          index = index + 1 | 0;
        }
        return this.localIndex_0.size;
      }
    }
  };
  ListView.prototype.isFiltered_0 = function (element) {
    var tmp$;
    return Kotlin.equals((tmp$ = this.filter) != null ? tmp$(element) : null, false);
  };
  ListView.prototype.dirty = function () {
    this.isDirty_0 = true;
    this._reset_0.dispatch();
  };
  function ListView$validate$lambda(this$ListView) {
    return function () {
      var tmp$_0, tmp$, tmp$_1;
      this$ListView.localIndex_0.clear();
      if (this$ListView.filter == null)
        this$ListView.localIndex_0.addAll_brywnq$(this$ListView.wrapped_0);
      else {
        tmp$_1 = this$ListView.wrapped_0;
        tmp$_0 = this$ListView.localIndex_0;
        var predicate = (tmp$ = this$ListView.filter) != null ? tmp$ : Kotlin.throwNPE();
        var tmp$_2;
        tmp$_2 = Kotlin.kotlin.collections.get_lastIndex_55thoc$(tmp$_1);
        for (var i = 0; i <= tmp$_2; i++) {
          var element = tmp$_1.get_za3lpa$(i);
          if (predicate(element))
            tmp$_0.add_11rb$(element);
        }
      }
      if (this$ListView.sortComparator != null)
        sortWith(this$ListView.localIndex_0, this$ListView.sortComparatorObj_0);
    };
  }
  ListView.prototype.validate_0 = function () {
    if (!this.isDirty_0)
      return;
    this.isDirty_0 = false;
    this.localIndex_0.batchUpdate_o14v8n$(ListView$validate$lambda(this));
  };
  ListView.prototype.dispose = function () {
    this.localIndex_0.dispose();
    this.wrapped_0.added.remove_trkh7z$(this.addedHandler_0);
    this.wrapped_0.removed.remove_trkh7z$(this.removedHandler_0);
    this.wrapped_0.changed.remove_trkh7z$(this.changedHandler_0);
    this.wrapped_0.reset.remove_trkh7z$(this.resetHandler_0);
  };
  function ListView$iteratorPool$lambda(this$ListView) {
    return function () {
      return new ConcurrentListIterator(this$ListView);
    };
  }
  function ListView$filter$lambda(this$ListView) {
    return function (prop, old, new_0) {
      this$ListView.dirty();
      kotlin_0.Unit;
    };
  }
  function ListView$sortComparator$lambda(this$ListView) {
    return function (prop, old, new_0) {
      this$ListView.dirty();
      kotlin_0.Unit;
    };
  }
  function ListView$addedHandler$lambda(this$ListView) {
    return function (index, element) {
      if (!this$ListView.isDirty_0)
        this$ListView.addElement_0(index);
      kotlin_0.Unit;
    };
  }
  function ListView$removedHandler$lambda(this$ListView) {
    return function (index, element) {
      if (!this$ListView.isDirty_0)
        this$ListView.removeElement_0(element);
      kotlin_0.Unit;
    };
  }
  function ListView$changedHandler$lambda(this$ListView) {
    return function (index, old, new_0) {
      if (!this$ListView.isDirty_0) {
        if (this$ListView.filter != null || this$ListView.sortComparator != null) {
          this$ListView.removeElement_0(old);
          this$ListView.addElement_0(index);
        }
         else {
          this$ListView.localIndex_0.set_wxm5ur$(index, new_0);
        }
      }
      kotlin_0.Unit;
    };
  }
  function ListView$resetHandler$lambda(this$ListView) {
    return function () {
      this$ListView.dirty();
    };
  }
  function ListView_init$lambda(this$ListView) {
    return function (obj1, obj2) {
      var tmp$;
      return ((tmp$ = this$ListView.sortComparator) != null ? tmp$ : Kotlin.throwNPE())(obj1, obj2);
    };
  }
  ListView.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ListView',
    interfaces: [Disposable, ObservableList]
  };
  function sort$lambda(o1, o2) {
    return Kotlin.compareTo(o1, o2);
  }
  function sort($receiver) {
    $receiver.sortComparator = sort$lambda;
  }
  function listView$lambda($receiver) {
  }
  function listView(wrapped, init) {
    if (init === void 0)
      init = listView$lambda;
    var list = new ListView(wrapped);
    init(list);
    return list;
  }
  function containsAllKeys($receiver, keys) {
    var tmp$;
    tmp$ = get_lastIndex_0(keys);
    for (var i = 0; i <= tmp$; i++) {
      if (!$receiver.containsKey_11rb$(keys[i])) {
        return false;
      }
    }
    return true;
  }
  function copy($receiver) {
    var m = HashMap_init();
    m.putAll_a2k3zr$($receiver);
    return m;
  }
  function MutableObservableList() {
  }
  MutableObservableList.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'MutableObservableList',
    interfaces: [Disposable, MutableList, ObservableList]
  };
  function ObservableList() {
  }
  ObservableList.prototype.iterate_nhjr8t$ = function (body, reversed) {
    if (reversed)
      this.iterateReversed_ucl7l2$(body);
    else
      this.iterate_ucl7l2$(body);
  };
  ObservableList.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'ObservableList',
    interfaces: [List]
  };
  function activeListOf$lambda(closure$elements, closure$list) {
    return function () {
      var tmp$;
      tmp$ = get_lastIndex_0(closure$elements);
      for (var i = 0; i <= tmp$; i++) {
        closure$list.add_11rb$(closure$elements[i]);
      }
    };
  }
  function activeListOf(elements) {
    var list = ActiveList_init();
    list.batchUpdate_o14v8n$(activeListOf$lambda(elements, list));
    return list;
  }
  function ActiveList(initialCapacity) {
    this.wrapped_i2o0u4$_0 = ArrayList_init(initialCapacity);
    this.added_i2o0u4$_0 = new Signal2();
    this.removed_i2o0u4$_0 = new Signal2();
    this.changed_i2o0u4$_0 = new Signal3();
    this.reset_i2o0u4$_0 = new Signal0();
    this.updatesEnabled = true;
    this.iteratorPool_i2o0u4$_0 = new ClearableObjectPool(void 0, ActiveList$iteratorPool$lambda(this));
  }
  Object.defineProperty(ActiveList.prototype, 'added', {
    get: function () {
      return this.added_i2o0u4$_0;
    }
  });
  Object.defineProperty(ActiveList.prototype, 'removed', {
    get: function () {
      return this.removed_i2o0u4$_0;
    }
  });
  Object.defineProperty(ActiveList.prototype, 'changed', {
    get: function () {
      return this.changed_i2o0u4$_0;
    }
  });
  Object.defineProperty(ActiveList.prototype, 'reset', {
    get: function () {
      return this.reset_i2o0u4$_0;
    }
  });
  ActiveList.prototype.remove_11rb$ = function (element) {
    var index = this.indexOf_11rb$(element);
    if (index === -1)
      return false;
    this.removeAt_za3lpa$(index);
    return true;
  };
  ActiveList.prototype.addAll_u57x28$ = function (index, elements) {
    var tmp$, tmp$_0;
    if (elements.isEmpty())
      return false;
    var i = index;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var e = tmp$.next();
      this.add_wxm5ur$((tmp$_0 = i, i = tmp$_0 + 1 | 0, tmp$_0), e);
    }
    return true;
  };
  ActiveList.prototype.removeAll_brywnq$ = function (elements) {
    var tmp$;
    var changed = false;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      changed = (changed && this.remove_11rb$(i));
    }
    return changed;
  };
  function ActiveList$retainAll$lambda(closure$elements, closure$changed, this$ActiveList) {
    return function (it) {
      if (!closure$elements.contains_11rb$(it)) {
        closure$changed.v = true;
        this$ActiveList.remove_11rb$(it);
      }
      return true;
    };
  }
  ActiveList.prototype.retainAll_brywnq$ = function (elements) {
    var changed = {v: false};
    this.iterate_ucl7l2$(ActiveList$retainAll$lambda(elements, changed, this));
    return changed.v;
  };
  ActiveList.prototype.clear = function () {
    while (!this.isEmpty()) {
      this.removeAt_za3lpa$(get_lastIndex(this));
    }
  };
  ActiveList.prototype.add_wxm5ur$ = function (index, element) {
    this.wrapped_i2o0u4$_0.add_wxm5ur$(index, element);
    if (this.updatesEnabled)
      this.added.dispatch_xwzc9p$(index, element);
  };
  ActiveList.prototype.removeAt_za3lpa$ = function (index) {
    var element = this.wrapped_i2o0u4$_0.removeAt_za3lpa$(index);
    if (this.updatesEnabled)
      this.removed.dispatch_xwzc9p$(index, element);
    return element;
  };
  ActiveList.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    return this.wrapped_i2o0u4$_0.subList_vux9f0$(fromIndex, toIndex);
  };
  Object.defineProperty(ActiveList.prototype, 'size', {
    get: function () {
      return this.wrapped_i2o0u4$_0.size;
    }
  });
  ActiveList.prototype.add_11rb$ = function (element) {
    this.wrapped_i2o0u4$_0.add_11rb$(element);
    if (this.updatesEnabled)
      this.added.dispatch_xwzc9p$(get_lastIndex(this), element);
    return true;
  };
  ActiveList.prototype.addAll_brywnq$ = function (elements) {
    var tmp$;
    if (elements.isEmpty())
      return false;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      this.add_11rb$(i);
    }
    return true;
  };
  ActiveList.prototype.set_wxm5ur$ = function (index, element) {
    var oldElement = this.wrapped_i2o0u4$_0.set_wxm5ur$(index, element);
    if (oldElement === element)
      return oldElement;
    if (this.updatesEnabled)
      this.changed.dispatch_1llc0w$(index, oldElement, element);
    return oldElement;
  };
  ActiveList.prototype.isEmpty = function () {
    return this.wrapped_i2o0u4$_0.isEmpty();
  };
  ActiveList.prototype.contains_11rb$ = function (element) {
    return this.wrapped_i2o0u4$_0.contains_11rb$(element);
  };
  ActiveList.prototype.containsAll_brywnq$ = function (elements) {
    return this.wrapped_i2o0u4$_0.containsAll_brywnq$(elements);
  };
  ActiveList.prototype.get_za3lpa$ = function (index) {
    return this.wrapped_i2o0u4$_0.get_za3lpa$(index);
  };
  ActiveList.prototype.indexOf_11rb$ = function (element) {
    return this.wrapped_i2o0u4$_0.indexOf_11rb$(element);
  };
  ActiveList.prototype.lastIndexOf_11rb$ = function (element) {
    return this.wrapped_i2o0u4$_0.lastIndexOf_11rb$(element);
  };
  ActiveList.prototype.concurrentIterator = function () {
    return new MutableConcurrentListIterator(this);
  };
  ActiveList.prototype.iterator = function () {
    return new MutableConcurrentListIterator(this);
  };
  ActiveList.prototype.listIterator = function () {
    return new MutableConcurrentListIterator(this);
  };
  ActiveList.prototype.listIterator_za3lpa$ = function (index) {
    var iterator_1 = new MutableConcurrentListIterator(this);
    iterator_1.cursor = index;
    return iterator_1;
  };
  ActiveList.prototype.iterate_ucl7l2$ = function (body) {
    var iterator_1 = this.iteratorPool_i2o0u4$_0.obtain();
    while (iterator_1.hasNext()) {
      var shouldContinue = body(iterator_1.next());
      if (!shouldContinue)
        break;
    }
    this.iteratorPool_i2o0u4$_0.free_11rb$(iterator_1);
  };
  ActiveList.prototype.iterateReversed_ucl7l2$ = function (body) {
    var iterator_1 = this.iteratorPool_i2o0u4$_0.obtain();
    iterator_1.cursor = this.size;
    while (iterator_1.hasPrevious()) {
      var shouldContinue = body(iterator_1.previous());
      if (!shouldContinue)
        break;
    }
    this.iteratorPool_i2o0u4$_0.free_11rb$(iterator_1);
  };
  ActiveList.prototype.batchUpdate_o14v8n$ = function (inner) {
    this.updatesEnabled = false;
    inner();
    this.updatesEnabled = true;
    this.reset.dispatch();
  };
  ActiveList.prototype.dispose = function () {
    this.clear();
    this.added.dispose();
    this.removed.dispose();
    this.changed.dispose();
    this.reset.dispose();
  };
  function ActiveList$iteratorPool$lambda(this$ActiveList) {
    return function () {
      return new ConcurrentListIterator(this$ActiveList);
    };
  }
  ActiveList.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActiveList',
    interfaces: [MutableObservableList, Clearable]
  };
  function ActiveList_init($this) {
    $this = $this || Object.create(ActiveList.prototype);
    ActiveList.call($this, 8);
    return $this;
  }
  function ActiveList_init_0(source, $this) {
    $this = $this || Object.create(ActiveList.prototype);
    ActiveList_init($this);
    $this.batchUpdate_o14v8n$(ActiveList_init$lambda(source, $this));
    return $this;
  }
  function ActiveList_init$lambda(closure$source, this$ActiveList) {
    return function () {
      this$ActiveList.addAll_brywnq$(closure$source);
    };
  }
  function ActiveList_init_1(source, $this) {
    $this = $this || Object.create(ActiveList.prototype);
    ActiveList_init($this);
    $this.batchUpdate_o14v8n$(ActiveList_init$lambda_0(source, $this));
    return $this;
  }
  function ActiveList_init$lambda_0(closure$source, this$ActiveList) {
    return function () {
      addAll(this$ActiveList, closure$source);
    };
  }
  function ConcurrentListIterator(list) {
    this.list_ldzzs5$_0 = list;
    this.cursor = 0;
    this.lastRet = -1;
    this.handleRemoved_ldzzs5$_0 = ConcurrentListIterator$handleRemoved$lambda(this);
    this.handleAdded_ldzzs5$_0 = ConcurrentListIterator$handleAdded$lambda(this);
    list.added.add_trkh7z$(this.handleAdded_ldzzs5$_0);
    list.removed.add_trkh7z$(this.handleRemoved_ldzzs5$_0);
  }
  Object.defineProperty(ConcurrentListIterator.prototype, 'list', {
    get: function () {
      return this.list_ldzzs5$_0;
    }
  });
  ConcurrentListIterator.prototype.hasNext = function () {
    return this.cursor !== this.list.size;
  };
  ConcurrentListIterator.prototype.next = function () {
    var i = this.cursor;
    if (i >= this.list.size)
      throw new NoSuchElementException();
    this.cursor = i + 1 | 0;
    this.lastRet = i;
    return this.list.get_za3lpa$(i);
  };
  ConcurrentListIterator.prototype.nextIndex = function () {
    return this.cursor;
  };
  ConcurrentListIterator.prototype.hasPrevious = function () {
    return this.cursor !== 0;
  };
  ConcurrentListIterator.prototype.previous = function () {
    var i = this.cursor - 1 | 0;
    if (i < 0)
      throw new NoSuchElementException();
    this.cursor = i;
    this.lastRet = i;
    return this.list.get_za3lpa$(i);
  };
  ConcurrentListIterator.prototype.previousIndex = function () {
    return this.cursor - 1 | 0;
  };
  ConcurrentListIterator.prototype.clear = function () {
    this.cursor = 0;
    this.lastRet = -1;
  };
  ConcurrentListIterator.prototype.iterator = function () {
    return this;
  };
  ConcurrentListIterator.prototype.iterate_ucl7l2$ = function (body) {
    this.clear();
    while (this.hasNext()) {
      var shouldContinue = body(this.next());
      if (!shouldContinue)
        break;
    }
  };
  ConcurrentListIterator.prototype.iterateReversed_ucl7l2$ = function (body) {
    this.clear();
    this.cursor = this.list.size;
    while (this.hasPrevious()) {
      var shouldContinue = body(this.previous());
      if (!shouldContinue)
        break;
    }
  };
  ConcurrentListIterator.prototype.dispose = function () {
    this.list.added.remove_trkh7z$(this.handleAdded_ldzzs5$_0);
    this.list.removed.remove_trkh7z$(this.handleRemoved_ldzzs5$_0);
  };
  function ConcurrentListIterator$handleRemoved$lambda(this$ConcurrentListIterator) {
    return function (index, oldElement) {
      var tmp$, tmp$_0;
      if (this$ConcurrentListIterator.cursor > index) {
        tmp$ = this$ConcurrentListIterator.cursor;
        this$ConcurrentListIterator.cursor = tmp$ - 1 | 0;
      }
      if (this$ConcurrentListIterator.lastRet > index) {
        tmp$_0 = this$ConcurrentListIterator.lastRet;
        this$ConcurrentListIterator.lastRet = tmp$_0 - 1 | 0;
      }
    };
  }
  function ConcurrentListIterator$handleAdded$lambda(this$ConcurrentListIterator) {
    return function (index, newElement) {
      var tmp$, tmp$_0;
      if (this$ConcurrentListIterator.cursor > index) {
        tmp$ = this$ConcurrentListIterator.cursor;
        this$ConcurrentListIterator.cursor = tmp$ + 1 | 0;
      }
      if (this$ConcurrentListIterator.lastRet > index) {
        tmp$_0 = this$ConcurrentListIterator.lastRet;
        this$ConcurrentListIterator.lastRet = tmp$_0 + 1 | 0;
      }
    };
  }
  ConcurrentListIterator.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ConcurrentListIterator',
    interfaces: [Disposable, Iterable, ListIterator, Clearable]
  };
  function MutableConcurrentListIterator(list) {
    ConcurrentListIterator.call(this, list);
    this.list_7jqtf$_0 = list;
  }
  Object.defineProperty(MutableConcurrentListIterator.prototype, 'list', {
    get: function () {
      return this.list_7jqtf$_0;
    }
  });
  MutableConcurrentListIterator.prototype.iterator = function () {
    return this;
  };
  MutableConcurrentListIterator.prototype.remove = function () {
    if (this.lastRet < 0)
      throw new NoSuchElementException();
    this.list.removeAt_za3lpa$(this.lastRet);
    this.cursor = this.lastRet;
    this.lastRet = -1;
  };
  MutableConcurrentListIterator.prototype.set_11rb$ = function (element) {
    if (this.lastRet < 0)
      throw new IllegalStateException();
    this.list.set_wxm5ur$(this.lastRet, element);
  };
  MutableConcurrentListIterator.prototype.add_11rb$ = function (element) {
    var i = this.cursor;
    this.list.add_wxm5ur$(i, element);
    this.cursor = i + 1 | 0;
    this.lastRet = -1;
  };
  MutableConcurrentListIterator.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'MutableConcurrentListIterator',
    interfaces: [MutableIterable, MutableListIterator, ConcurrentListIterator]
  };
  function Clearable() {
  }
  Clearable.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'Clearable',
    interfaces: []
  };
  function Pool() {
  }
  Pool.prototype.freeAll_4ezy5m$ = function (list) {
    var tmp$;
    tmp$ = get_lastIndex(list);
    for (var i = 0; i <= tmp$; i++) {
      this.free_11rb$(list.get_za3lpa$(i));
    }
  };
  Pool.prototype.clear_6taknv$ = function (dispose, callback$default) {
    if (dispose === void 0)
      dispose = true;
    callback$default ? callback$default(dispose) : this.clear_6taknv$$default(dispose);
  };
  Pool.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'Pool',
    interfaces: [Disposable]
  };
  function ObjectPool(initialCapacity, create) {
    if (initialCapacity === void 0)
      initialCapacity = 8;
    this.create_lqu5cj$_0 = create;
    this.freeObjects_lqu5cj$_0 = new CyclicList(initialCapacity);
  }
  ObjectPool.prototype.obtain = function () {
    var tmp$;
    if (this.freeObjects_lqu5cj$_0.isEmpty()) {
      tmp$ = this.create_lqu5cj$_0();
    }
     else {
      tmp$ = this.freeObjects_lqu5cj$_0.pop();
    }
    return tmp$;
  };
  ObjectPool.prototype.free_11rb$ = function (obj_4) {
    this.freeObjects_lqu5cj$_0.add_11rb$(obj_4);
  };
  ObjectPool.prototype.clear_6taknv$$default = function (dispose) {
    var tmp$, tmp$_0, tmp$_1;
    var shouldDispose = dispose && Kotlin.isType(firstOrNull(this.freeObjects_lqu5cj$_0), Disposable);
    tmp$ = this.freeObjects_lqu5cj$_0.lastIndex;
    for (var i = 0; i <= tmp$; i++) {
      var obj_4 = this.freeObjects_lqu5cj$_0.get_za3lpa$(i);
      if (shouldDispose)
        (tmp$_1 = Kotlin.isType(tmp$_0 = obj_4, Disposable) ? tmp$_0 : null) != null ? tmp$_1.dispose() : null;
    }
    this.freeObjects_lqu5cj$_0.clear();
  };
  ObjectPool.prototype.dispose = function () {
    this.clear_6taknv$(true);
  };
  ObjectPool.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ObjectPool',
    interfaces: [Pool]
  };
  function ClearableObjectPool(initialCapacity, create) {
    if (initialCapacity === void 0)
      initialCapacity = 8;
    ObjectPool.call(this, initialCapacity, create);
  }
  ClearableObjectPool.prototype.free_11rb$ = function (obj_4) {
    obj_4.clear();
    ObjectPool.prototype.free_11rb$.call(this, obj_4);
  };
  ClearableObjectPool.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ClearableObjectPool',
    interfaces: [ObjectPool]
  };
  function LimitedPoolImpl(size, arrayFactory, create) {
    this.size = size;
    this.arrayFactory_0 = arrayFactory;
    this.create_0 = create;
    this.totalFreeObjects_0 = 0;
    this.freeObjects_0 = this.arrayFactory_0(this.size);
    this.mostRecent_0 = -1;
    this.activeObjects_0 = this.arrayFactory_0(this.size);
  }
  LimitedPoolImpl.prototype.obtain = function () {
    var tmp$, tmp$_0;
    this.mostRecent_0 = this.mostRecent_0 + 1 | 0;
    this.mostRecent_0 = this.mostRecent_0 % this.size;
    if (this.totalFreeObjects_0 > 0) {
      tmp$_0 = (tmp$ = this.freeObjects_0[this.totalFreeObjects_0 = this.totalFreeObjects_0 - 1 | 0, this.totalFreeObjects_0]) != null ? tmp$ : Kotlin.throwNPE();
    }
     else {
      var leastRecent = this.activeObjects_0[this.mostRecent_0];
      if (leastRecent == null) {
        tmp$_0 = this.create_0();
      }
       else {
        leastRecent.clear();
        tmp$_0 = leastRecent;
      }
    }
    var obj_4 = tmp$_0;
    this.activeObjects_0[this.mostRecent_0] = obj_4;
    return obj_4;
  };
  LimitedPoolImpl.prototype.free_11rb$ = function (obj_4) {
    var tmp$;
    obj_4.clear();
    this.freeObjects_0[tmp$ = this.totalFreeObjects_0, this.totalFreeObjects_0 = tmp$ + 1 | 0, tmp$] = obj_4;
  };
  LimitedPoolImpl.prototype.clear_6taknv$$default = function (dispose) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    tmp$ = this.totalFreeObjects_0 - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var obj_4 = (tmp$_0 = this.freeObjects_0[i]) != null ? tmp$_0 : Kotlin.throwNPE();
      (tmp$_2 = Kotlin.isType(tmp$_1 = obj_4, Disposable) ? tmp$_1 : null) != null ? tmp$_2.dispose() : null;
      this.freeObjects_0[i] = null;
    }
    tmp$_3 = this.size - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_3; i_0++) {
      tmp$_4 = this.activeObjects_0[i_0];
      if (tmp$_4 == null) {
        continue;
      }
      var obj_5 = tmp$_4;
      (tmp$_6 = Kotlin.isType(tmp$_5 = obj_5, Disposable) ? tmp$_5 : null) != null ? tmp$_6.dispose() : null;
      this.activeObjects_0[i_0] = null;
    }
    this.mostRecent_0 = -1;
    this.totalFreeObjects_0 = 0;
  };
  LimitedPoolImpl.prototype.dispose = function () {
    this.clear_6taknv$(true);
  };
  LimitedPoolImpl.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LimitedPoolImpl',
    interfaces: [Pool]
  };
  function limitedPool$lambda(it) {
    return Kotlin.newArray(it, null);
  }
  var limitedPool = Kotlin.defineInlineFunction('AcornUtils.com.acornui.collection.limitedPool_5mmybd$', function (limitedPool$T_0, isT, size, create) {
    return new _.com.acornui.collection.LimitedPoolImpl(size, _.com.acornui.collection.limitedPool$f, create);
  });
  function Disposable() {
  }
  Disposable.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'Disposable',
    interfaces: []
  };
  var with_0 = Kotlin.defineInlineFunction('AcornUtils.com.acornui.core.with_9bxh2u$', function ($receiver, f) {
    f($receiver);
    return $receiver;
  });
  var LONG_MAX_VALUE;
  var INT_MAX_VALUE;
  var INT_MIN_VALUE;
  var LONG_MIN_VALUE;
  function numberOfLeadingZeros($receiver) {
    var i = $receiver;
    if (i === 0)
      return 32;
    var n = 1;
    if (i >>> 16 === 0) {
      n = n + 16 | 0;
      i = i << 16;
    }
    if (i >>> 24 === 0) {
      n = n + 8 | 0;
      i = i << 8;
    }
    if (i >>> 28 === 0) {
      n = n + 4 | 0;
      i = i << 4;
    }
    if (i >>> 30 === 0) {
      n = n + 2 | 0;
      i = i << 2;
    }
    n = n - (i >>> 31) | 0;
    return n;
  }
  function numberOfTrailingZeros($receiver) {
    var i = $receiver;
    var y;
    if (i === 0)
      return 32;
    var n = 31;
    y = i << 16;
    if (y !== 0) {
      n = n - 16 | 0;
      i = y;
    }
    y = i << 8;
    if (y !== 0) {
      n = n - 8 | 0;
      i = y;
    }
    y = i << 4;
    if (y !== 0) {
      n = n - 4 | 0;
      i = y;
    }
    y = i << 2;
    if (y !== 0) {
      n = n - 2 | 0;
      i = y;
    }
    return n - (i << 1 >>> 31) | 0;
  }
  var toString;
  function get_toString() {
    return toString.getValue_lrcp0p$(this, new Kotlin.PropertyMetadata('toString'));
  }
  function set_toString(toString_0) {
    toString.setValue_9rddgb$(this, new Kotlin.PropertyMetadata('toString'), toString_0);
  }
  function floor($receiver) {
    return $receiver | 0;
  }
  function round($receiver) {
    return Math.round($receiver);
  }
  function notCloseTo($receiver, other, tolerance) {
    if (tolerance === void 0)
      tolerance = 1.0E-4;
    var value = $receiver - other;
    return (value < 0.0 ? -value : value) > tolerance;
  }
  function closeTo($receiver, other, tolerance) {
    if (tolerance === void 0)
      tolerance = 1.0E-4;
    var value = $receiver - other;
    return (value < 0.0 ? -value : value) <= tolerance;
  }
  function toInt($receiver) {
    return $receiver ? 1 : 0;
  }
  function zeroPadding($receiver, intDigits, decimalDigits) {
    if (decimalDigits === void 0)
      decimalDigits = 0;
    return zeroPadding_0($receiver.toString(), intDigits, decimalDigits);
  }
  function zeroPadding_0($receiver, intDigits, decimalDigits) {
    if (decimalDigits === void 0)
      decimalDigits = 0;
    var str = $receiver;
    if (intDigits === 0 && decimalDigits === 0)
      return str;
    var decimalMarkIndex = indexOf_0(str, '.');
    var currIntDigits;
    var currDecDigits;
    if (decimalMarkIndex !== -1) {
      currIntDigits = decimalMarkIndex;
      currDecDigits = str.length - decimalMarkIndex - 1 | 0;
    }
     else {
      currIntDigits = str.length;
      currDecDigits = 0;
    }
    if (intDigits > currIntDigits) {
      str = repeat2('0', intDigits - currIntDigits | 0) + str;
    }
    if (decimalDigits > currDecDigits) {
      if (decimalMarkIndex === -1)
        str += '.';
      str += repeat2('0', decimalDigits - currDecDigits | 0);
    }
    return str;
  }
  function radToDeg($receiver) {
    return $receiver * TO_DEG;
  }
  function degToRad($receiver) {
    return $receiver * TO_RAD;
  }
  function replaceTokens($receiver, tokens) {
    var tmp$;
    var str = $receiver;
    tmp$ = get_lastIndex_0(tokens);
    for (var i = 0; i <= tmp$; i++) {
      str = replace2(str, '{' + i + '}', tokens[i]);
    }
    return str;
  }
  function replace2($receiver, target, replacement) {
    return join2(split2($receiver, target.toString()), replacement.toString());
  }
  function replace2_0($receiver, target, replacement) {
    return join2_0(split2_0($receiver, Kotlin.unboxChar(target)), Kotlin.unboxChar(replacement));
  }
  function join2_0($receiver, delim) {
    var tmp$;
    var builder = new StringBuilder();
    tmp$ = get_lastIndex_0($receiver);
    for (var i = 0; i <= tmp$; i++) {
      if (i !== 0)
        builder.append_s8itvh$(Kotlin.unboxChar(delim));
      builder.append_gw00v9$($receiver[i]);
    }
    return builder.toString();
  }
  function split2$lambda(closure$delim, closure$index, this$split2) {
    return function (it) {
      var nextIndex = indexOf_2(this$split2, Kotlin.unboxChar(closure$delim), closure$index.v);
      var sub;
      if (nextIndex === -1) {
        var $receiver = this$split2;
        var startIndex = closure$index.v;
        sub = $receiver.substring(startIndex);
      }
       else {
        var $receiver_0 = this$split2;
        var startIndex_0 = closure$index.v;
        sub = $receiver_0.substring(startIndex_0, nextIndex);
      }
      closure$index.v = nextIndex + 1 | 0;
      return sub;
    };
  }
  function split2_0($receiver, delim) {
    var tmp$;
    var count_26 = 0;
    tmp$ = Kotlin.kotlin.text.iterator_gw00vp$($receiver);
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (Kotlin.unboxChar(Kotlin.toBoxedChar(element)) === Kotlin.unboxChar(delim)) {
        count_26 = count_26 + 1 | 0;
      }
    }
    var size = count_26 + 1 | 0;
    var index = {v: 0};
    return Kotlin.newArrayF(size, split2$lambda(delim, index, $receiver));
  }
  function join2($receiver, delim) {
    var tmp$;
    var builder = new StringBuilder();
    tmp$ = get_lastIndex_0($receiver);
    for (var i = 0; i <= tmp$; i++) {
      if (i !== 0)
        builder.append_gw00v9$(delim);
      builder.append_gw00v9$($receiver[i]);
    }
    return builder.toString();
  }
  function split2$lambda_0(closure$delim, closure$index, this$split2, closure$len) {
    return function (it) {
      var nextIndex = indexOf_0(this$split2, closure$delim, closure$index.v);
      var sub;
      if (nextIndex === -1) {
        var $receiver = this$split2;
        var startIndex = closure$index.v;
        sub = $receiver.substring(startIndex);
      }
       else {
        var $receiver_0 = this$split2;
        var startIndex_0 = closure$index.v;
        sub = $receiver_0.substring(startIndex_0, nextIndex);
      }
      closure$index.v = nextIndex + closure$len | 0;
      return sub;
    };
  }
  function split2($receiver, delim) {
    var len = delim.length;
    var size = 0;
    var index = {v: 0};
    while (true) {
      index.v = indexOf_0($receiver, delim, index.v);
      size = size + 1 | 0;
      if (index.v === -1)
        break;
      index.v = index.v + len | 0;
    }
    index.v = 0;
    return Kotlin.newArrayF(size, split2$lambda_0(delim, index, $receiver, len));
  }
  function startsWith2($receiver, prefix, offset) {
    if (offset === void 0)
      offset = 0;
    var tmp$, tmp$_0;
    var to = offset;
    var po = 0;
    var pc = prefix.length;
    if (offset < 0 || offset > ($receiver.length - pc | 0)) {
      return false;
    }
    while ((pc = pc - 1 | 0, pc) >= 0) {
      if (Kotlin.unboxChar($receiver.charCodeAt((tmp$ = to, to = tmp$ + 1 | 0, tmp$))) !== Kotlin.unboxChar(prefix.charCodeAt((tmp$_0 = po, po = tmp$_0 + 1 | 0, tmp$_0)))) {
        return false;
      }
    }
    return true;
  }
  function endsWith2($receiver, suffix) {
    return startsWith($receiver, suffix, $receiver.length - suffix.length | 0);
  }
  function repeat2($receiver, n) {
    if (n < 0)
      throw new IllegalArgumentException('Value should be non-negative, but was ' + n);
    var sb = StringBuilder_init(Kotlin.imul(n, $receiver.length));
    for (var i = 1; i <= n; i++) {
      sb.append_gw00v9$($receiver);
    }
    return sb.toString();
  }
  var lineSeparator;
  function htmlEntities(value) {
    var value_0 = value;
    value_0 = replace(value_0, '&', '&amp;');
    value_0 = replace(value_0, '<', '&lt;');
    value_0 = replace(value_0, '>', '&gt;');
    value_0 = replace(value_0, '"', '&quot;');
    value_0 = replace(value_0, "'", '&apos;');
    return value_0;
  }
  function removeBackslashes(value) {
    var tmp$, tmp$_0;
    var unescaped = new StringBuilder();
    var lastIndex = 0;
    var i = 0;
    var n = value.length;
    while (i < n) {
      if (Kotlin.unboxChar(value.charCodeAt(i)) === 92 && (i + 1 | 0) < n) {
        var next = Kotlin.unboxChar(value.charCodeAt((i = i + 1 | 0, i)));
        tmp$ = Kotlin.unboxChar(next);
        if (tmp$ === 116)
          tmp$_0 = 9;
        else if (tmp$ === 98)
          tmp$_0 = 8;
        else if (tmp$ === 110)
          tmp$_0 = 10;
        else if (tmp$ === 114)
          tmp$_0 = 13;
        else if (tmp$ === 39)
          tmp$_0 = 39;
        else if (tmp$ === 34)
          tmp$_0 = 34;
        else if (tmp$ === 92)
          tmp$_0 = 92;
        else if (tmp$ === 36)
          tmp$_0 = 36;
        else if (tmp$ === 117) {
          if ((i + 5 | 0) <= n) {
            var startIndex = i + 1 | 0;
            var endIndex = i + 5 | 0;
            var digits = toInt_0(value.substring(startIndex, endIndex), 16);
            var startIndex_0 = lastIndex;
            var endIndex_0 = i - 1 | 0;
            unescaped.append_gw00v9$(value.substring(startIndex_0, endIndex_0));
            unescaped.append_s8itvh$(Kotlin.unboxChar(Kotlin.toChar(digits)));
            i = i + 4 | 0;
            lastIndex = i + 1 | 0;
          }
          tmp$_0 = null;
        }
         else
          tmp$_0 = null;
        var newChar = tmp$_0;
        if (Kotlin.toBoxedChar(newChar) != null) {
          var startIndex_1 = lastIndex;
          var endIndex_1 = i - 1 | 0;
          unescaped.append_gw00v9$(value.substring(startIndex_1, endIndex_1));
          unescaped.append_s8itvh$(Kotlin.unboxChar(newChar));
          lastIndex = i + 1 | 0;
        }
      }
      i = i + 1 | 0;
    }
    var startIndex_2 = lastIndex;
    unescaped.append_gw00v9$(value.substring(startIndex_2));
    return unescaped.toString();
  }
  function addBackslashes(value) {
    var tmp$, tmp$_0;
    var escaped = new StringBuilder();
    var i = 0;
    var n = value.length;
    while (i < n) {
      var char_1 = Kotlin.unboxChar(value.charCodeAt(i));
      tmp$ = Kotlin.unboxChar(char_1);
      if (tmp$ === 9)
        tmp$_0 = '\\t';
      else if (tmp$ === 8)
        tmp$_0 = '\\b';
      else if (tmp$ === 10)
        tmp$_0 = '\\n';
      else if (tmp$ === 13)
        tmp$_0 = '\\r';
      else if (tmp$ === 39)
        tmp$_0 = "\\'";
      else if (tmp$ === 34)
        tmp$_0 = '\\"';
      else if (tmp$ === 92)
        tmp$_0 = '\\\\';
      else if (tmp$ === 36)
        tmp$_0 = '\\$';
      else
        tmp$_0 = char_1;
      escaped.append_s8jyv4$(tmp$_0);
      i = i + 1 | 0;
    }
    return escaped.toString();
  }
  function DependencyGraph() {
    this._map_0 = HashMap_init();
    this._pending_0 = ArrayList_init();
    this.thenListenersIterating_0 = false;
    this.head_0 = null;
    this.tail_0 = null;
  }
  DependencyGraph.prototype.get_11rb$ = function (key) {
    return this._map_0.get_11rb$(key);
  };
  DependencyGraph.prototype.set_dpg7wc$ = function (key, value) {
    this._map_0.put_xwzc9p$(key, value);
    var iterator_1 = this._pending_0.iterator();
    while (iterator_1.hasNext()) {
      var tmp$ = iterator_1.next()
      , dependencies = tmp$.component1()
      , callback = tmp$.component2();
      if (contains_0(dependencies, key)) {
        if (containsAllKeys(this._map_0, dependencies)) {
          iterator_1.remove();
          callback(this);
        }
      }
    }
    this.invokeThenListeners_0();
  };
  DependencyGraph.prototype.invokeThenListeners_0 = function () {
    var tmp$, tmp$_0;
    if (this.thenListenersIterating_0)
      return;
    this.thenListenersIterating_0 = true;
    while (this.head_0 != null && this._pending_0.isEmpty()) {
      var c = ((tmp$ = this.head_0) != null ? tmp$ : Kotlin.throwNPE()).callback;
      this.head_0 = ((tmp$_0 = this.head_0) != null ? tmp$_0 : Kotlin.throwNPE()).next;
      c();
      if (this.head_0 == null)
        this.tail_0 = null;
    }
    this.thenListenersIterating_0 = false;
  };
  DependencyGraph.prototype.on_ctpaey$ = function (dependencies, callback) {
    var tmp$;
    var isReady = containsAllKeys(this._map_0, Array.isArray(tmp$ = dependencies) ? tmp$ : Kotlin.throwCCE());
    if (isReady) {
      callback(this);
    }
     else {
      this._pending_0.add_11rb$(new Pair(dependencies, callback));
    }
  };
  function DependencyGraph$waitFor$lambda($receiver) {
  }
  DependencyGraph.prototype.waitFor_7l2mas$ = function (dependencies) {
    this.on_ctpaey$(dependencies.slice(), DependencyGraph$waitFor$lambda);
  };
  DependencyGraph.prototype.containsAllKeys_tfr4nt$ = function (keys) {
    return containsAllKeys(this._map_0, keys);
  };
  DependencyGraph.prototype.then_o14v8n$ = function (callback) {
    var tmp$;
    if (this.head_0 == null && this._pending_0.isEmpty()) {
      callback();
    }
     else {
      var next = new ThenCallback(callback);
      if (this.head_0 == null) {
        this.head_0 = next;
        this.tail_0 = next;
      }
       else {
        ((tmp$ = this.tail_0) != null ? tmp$ : Kotlin.throwNPE()).next = next;
        this.tail_0 = next;
      }
    }
  };
  DependencyGraph.prototype.hasPending = function () {
    return !this._pending_0.isEmpty();
  };
  DependencyGraph.prototype.clear = function () {
    this._map_0.clear();
    this.head_0 = null;
    this.tail_0 = null;
    this._pending_0.clear();
  };
  DependencyGraph.prototype.dispose = function () {
    this.clear();
  };
  DependencyGraph.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DependencyGraph',
    interfaces: [Disposable]
  };
  function ThenCallback(callback) {
    this.callback = callback;
    this.next = null;
  }
  ThenCallback.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ThenCallback',
    interfaces: []
  };
  function LazyInstance(receiver, factory) {
    this.receiver_0 = receiver;
    this.factory_0 = factory;
    this._instance_0 = null;
  }
  Object.defineProperty(LazyInstance.prototype, 'created', {
    get: function () {
      return this._instance_0 != null;
    }
  });
  Object.defineProperty(LazyInstance.prototype, 'instance', {
    get: function () {
      var tmp$;
      if (this._instance_0 == null)
        this._instance_0 = this.factory_0(this.receiver_0);
      return (tmp$ = this._instance_0) != null ? tmp$ : Kotlin.throwNPE();
    }
  });
  LazyInstance.prototype.disposeInstance = function () {
    var tmp$, tmp$_0;
    (tmp$_0 = Kotlin.isType(tmp$ = this._instance_0, Disposable) ? tmp$ : null) != null ? tmp$_0.dispose() : null;
    this._instance_0 = null;
  };
  LazyInstance.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LazyInstance',
    interfaces: []
  };
  function Color(rgba) {
    return (new Color_0()).set8888_s8cxhz$(rgba);
  }
  function Color_0(r, g, b, a) {
    Color$Companion_getInstance();
    if (r === void 0)
      r = 0.0;
    if (g === void 0)
      g = 0.0;
    if (b === void 0)
      b = 0.0;
    if (a === void 0)
      a = 0.0;
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
  Color_0.prototype.set_1qghwi$ = function (color_3) {
    this.r = color_3.r;
    this.g = color_3.g;
    this.b = color_3.b;
    this.a = color_3.a;
    return this;
  };
  Color_0.prototype.mul_1qghwi$ = function (color_3) {
    this.r = this.r * color_3.r;
    this.g = this.g * color_3.g;
    this.b = this.b * color_3.b;
    this.a = this.a * color_3.a;
    return this;
  };
  Color_0.prototype.mul_mx4ult$ = function (value) {
    this.r = this.r * value;
    this.g = this.g * value;
    this.b = this.b * value;
    this.a = this.a * value;
    return this;
  };
  Color_0.prototype.times_mx4ult$ = function (value) {
    return (new Color_0()).set_1qghwi$(this).mul_mx4ult$(value);
  };
  Color_0.prototype.add_1qghwi$ = function (color_3) {
    this.r = this.r + color_3.r;
    this.g = this.g + color_3.g;
    this.b = this.b + color_3.b;
    this.a = this.a + color_3.a;
    return this;
  };
  Color_0.prototype.clear = function () {
    this.r = 0.0;
    this.g = 0.0;
    this.b = 0.0;
    this.a = 0.0;
  };
  Color_0.prototype.plus_1qghwi$ = function (color_3) {
    return (new Color_0()).set_1qghwi$(this).add_1qghwi$(color_3);
  };
  Color_0.prototype.sub_1qghwi$ = function (color_3) {
    this.r = this.r - color_3.r;
    this.g = this.g - color_3.g;
    this.b = this.b - color_3.b;
    this.a = this.a - color_3.a;
    return this;
  };
  Color_0.prototype.minus_1qghwi$ = function (color_3) {
    return (new Color_0()).set_1qghwi$(this).sub_1qghwi$(color_3);
  };
  Color_0.prototype.clamp = function () {
    if (this.r < 0.0)
      this.r = 0.0;
    else if (this.r > 1.0)
      this.r = 1.0;
    if (this.g < 0.0)
      this.g = 0.0;
    else if (this.g > 1.0)
      this.g = 1.0;
    if (this.b < 0.0)
      this.b = 0.0;
    else if (this.b > 1.0)
      this.b = 1.0;
    if (this.a < 0.0)
      this.a = 0.0;
    else if (this.a > 1.0)
      this.a = 1.0;
    return this;
  };
  Color_0.prototype.set_7b5o5w$ = function (r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
    return this;
  };
  Color_0.prototype.set8888_s8cxhz$ = function (rgba) {
    this.r = rgba.and(Kotlin.Long.fromInt(-16777216)).shiftRightUnsigned(24).toNumber() / 255.0;
    this.g = rgba.and(Kotlin.Long.fromInt(16711680)).shiftRightUnsigned(16).toNumber() / 255.0;
    this.b = rgba.and(Kotlin.Long.fromInt(65280)).shiftRightUnsigned(8).toNumber() / 255.0;
    this.a = rgba.and(Kotlin.Long.fromInt(255)).toNumber() / 255.0;
    return this;
  };
  Color_0.prototype.set888_za3lpa$ = function (rgb) {
    this.r = ((rgb & 16711680) >>> 16) / 255.0;
    this.g = ((rgb & 65280) >>> 8) / 255.0;
    this.b = (rgb & 255) / 255.0;
    this.a = 1.0;
    return this;
  };
  Color_0.prototype.add_7b5o5w$ = function (r, g, b, a) {
    this.r = this.r + r;
    this.g = this.g + g;
    this.b = this.b + b;
    this.a = this.a + a;
    return this;
  };
  Color_0.prototype.sub_7b5o5w$ = function (r, g, b, a) {
    this.r = this.r - r;
    this.g = this.g - g;
    this.b = this.b - b;
    this.a = this.a - a;
    return this;
  };
  Color_0.prototype.mul_7b5o5w$ = function (r, g, b, a) {
    this.r = this.r * r;
    this.g = this.g * g;
    this.b = this.b * b;
    this.a = this.a * a;
    return this;
  };
  Color_0.prototype.lerp_ixr1ib$ = function (target, t) {
    this.r = this.r + t * (target.r - this.r);
    this.g = this.g + t * (target.g - this.g);
    this.b = this.b + t * (target.b - this.b);
    this.a = this.a + t * (target.a - this.a);
    return this;
  };
  Color_0.prototype.lerp_s2l86p$ = function (r, g, b, a, t) {
    this.r = this.r + t * (r - this.r);
    this.g = this.g + t * (g - this.g);
    this.b = this.b + t * (b - this.b);
    this.a = this.a + t * (a - this.a);
    return this;
  };
  Color_0.prototype.premultiplyAlpha = function () {
    this.r *= this.a;
    this.g *= this.a;
    this.b *= this.a;
    return this;
  };
  Color_0.prototype.toCssString = function () {
    return 'rgba(' + (this.r * 255 | 0) + ', ' + (this.g * 255 | 0) + ', ' + (this.b * 255 | 0) + ', ' + this.a + ')';
  };
  Color_0.prototype.toRgbString = function () {
    return this.toOctet_0(this.r) + this.toOctet_0(this.g) + this.toOctet_0(this.b);
  };
  Color_0.prototype.toRgbaString = function () {
    return this.toOctet_0(this.r) + this.toOctet_0(this.g) + this.toOctet_0(this.b) + this.toOctet_0(this.a);
  };
  Color_0.prototype.toOctet_0 = function ($receiver) {
    return padStart(get_toString()($receiver * 255 | 0, 16), 2, 48);
  };
  Color_0.prototype.toHsl_y02iys$ = function (out) {
    if (out === void 0)
      out = new Hsl();
    out.a = this.a;
    var x = this.r;
    var y = this.g;
    var z = this.b;
    MathUtils_getInstance().max_sdesaw$;
    var max_sdesaw$result;
    if (Kotlin.compareTo(x, y) >= 0) {
      max_sdesaw$result = x;
    }
     else {
      max_sdesaw$result = y;
    }
    var x_0 = max_sdesaw$result;
    var inline$result;
    if (Kotlin.compareTo(x_0, z) >= 0) {
      inline$result = x_0;
    }
     else {
      inline$result = z;
    }
    var max = inline$result;
    var x_1 = this.r;
    var y_0 = this.g;
    var z_0 = this.b;
    MathUtils_getInstance().min_sdesaw$;
    var min_sdesaw$result;
    if (Kotlin.compareTo(x_1, y_0) <= 0) {
      min_sdesaw$result = x_1;
    }
     else {
      min_sdesaw$result = y_0;
    }
    var x_2 = min_sdesaw$result;
    var inline$result_0;
    if (Kotlin.compareTo(x_2, z_0) <= 0) {
      inline$result_0 = x_2;
    }
     else {
      inline$result_0 = z_0;
    }
    var min = inline$result_0;
    out.l = (max + min) * 0.5;
    var d = max - min;
    if (d === 0.0) {
      out.h = 0.0;
      out.s = 0.0;
    }
     else {
      if (max === this.r) {
        out.h = 60.0 * ((this.g - this.b) / d);
      }
       else if (max === this.g) {
        out.h = 60.0 * ((this.b - this.r) / d + 2.0);
      }
       else if (max === this.b) {
        out.h = 60.0 * ((this.r - this.g) / d + 4.0);
      }
      if (out.h < 0.0)
        out.h = out.h + 360.0;
      if (out.h >= 360.0)
        out.h = out.h - 360.0;
      var value = 2 * out.l - 1.0;
      out.s = d / (1.0 - (value < 0.0 ? -value : value));
    }
    return out;
  };
  Color_0.prototype.toHsv_y02iyi$ = function (out) {
    out.a = this.a;
    var x = this.r;
    var y = this.g;
    var z = this.b;
    MathUtils_getInstance().max_sdesaw$;
    var max_sdesaw$result;
    if (Kotlin.compareTo(x, y) >= 0) {
      max_sdesaw$result = x;
    }
     else {
      max_sdesaw$result = y;
    }
    var x_0 = max_sdesaw$result;
    var inline$result;
    if (Kotlin.compareTo(x_0, z) >= 0) {
      inline$result = x_0;
    }
     else {
      inline$result = z;
    }
    var max = inline$result;
    var x_1 = this.r;
    var y_0 = this.g;
    var z_0 = this.b;
    MathUtils_getInstance().min_sdesaw$;
    var min_sdesaw$result;
    if (Kotlin.compareTo(x_1, y_0) <= 0) {
      min_sdesaw$result = x_1;
    }
     else {
      min_sdesaw$result = y_0;
    }
    var x_2 = min_sdesaw$result;
    var inline$result_0;
    if (Kotlin.compareTo(x_2, z_0) <= 0) {
      inline$result_0 = x_2;
    }
     else {
      inline$result_0 = z_0;
    }
    var min = inline$result_0;
    out.v = max;
    var d = max - min;
    if (d === 0.0) {
      out.h = 0.0;
    }
     else {
      if (max === this.r) {
        out.h = 60.0 * ((this.g - this.b) / d);
      }
       else if (max === this.g) {
        out.h = 60.0 * ((this.b - this.r) / d + 2.0);
      }
       else if (max === this.b) {
        out.h = 60.0 * ((this.r - this.g) / d + 4.0);
      }
      if (out.h < 0.0)
        out.h = out.h + 360.0;
      if (out.h >= 360.0)
        out.h = out.h - 360.0;
      if (max === 0.0)
        out.s = 0.0;
      else
        out.s = d / max;
    }
    return out;
  };
  function Color$Companion() {
    Color$Companion_instance = this;
    this.CLEAR = new Color_0(0.0, 0.0, 0.0, 0.0);
    this.WHITE = new Color_0(1.0, 1.0, 1.0, 1.0);
    this.BLACK = new Color_0(0.0, 0.0, 0.0, 1.0);
    this.RED = new Color_0(1.0, 0.0, 0.0, 1.0);
    this.BROWN = new Color_0(0.5, 0.3, 0.0, 1.0);
    this.GREEN = new Color_0(0.0, 1.0, 0.0, 1.0);
    this.BLUE = new Color_0(0.0, 0.0, 1.0, 1.0);
    this.LIGHT_BLUE = new Color_0(0.68, 0.68, 1.0, 1.0);
    this.LIGHT_GRAY = new Color_0(0.75, 0.75, 0.75, 1.0);
    this.GRAY = new Color_0(0.5, 0.5, 0.5, 1.0);
    this.DARK_GRAY = new Color_0(0.25, 0.25, 0.25, 1.0);
    this.PINK = new Color_0(1.0, 0.68, 0.68, 1.0);
    this.ORANGE = new Color_0(1.0, 0.78, 0.0, 1.0);
    this.YELLOW = new Color_0(1.0, 1.0, 0.0, 1.0);
    this.MAGENTA = new Color_0(1.0, 0.0, 1.0, 1.0);
    this.CYAN = new Color_0(0.0, 1.0, 1.0, 1.0);
    this.OLIVE = new Color_0(0.5, 0.5, 0.0, 1.0);
    this.PURPLE = new Color_0(0.5, 0.0, 0.5, 1.0);
    this.MAROON = new Color_0(0.5, 0.0, 0.0, 1.0);
    this.TEAL = new Color_0(0.0, 0.5, 0.5, 1.0);
    this.NAVY = new Color_0(0.0, 0.0, 0.5, 1.0);
    this.clamped_0 = new Color_0();
  }
  Color$Companion.prototype.fromStr_61zpoe$ = function (str) {
    if (startsWith_0(str, '0x')) {
      return this.fromRgbaStr_61zpoe$.call(this, str.substring(2));
    }
     else if (startsWith_0(str, '#')) {
      return this.fromRgbaStr_61zpoe$.call(this, str.substring(1));
    }
     else if (startsWith_0(str, 'rgb', true))
      return this.fromCssStr_61zpoe$(str);
    else
      return this.fromRgbaStr_61zpoe$(str);
  };
  Color$Companion.prototype.from8888Str_61zpoe$ = function (value) {
    var c = new Color_0();
    var tmp$;
    c.set8888_s8cxhz$(toLong(Kotlin.kotlin.text.trim_gw00vp$(Kotlin.isCharSequence(tmp$ = value) ? tmp$ : Kotlin.throwCCE()).toString()));
    return c;
  };
  Color$Companion.prototype.from888Str_61zpoe$ = function (value) {
    var tmp$;
    var c = new Color_0();
    var tmp$_0;
    c.set888_za3lpa$((tmp$ = toIntOrNull(Kotlin.kotlin.text.trim_gw00vp$(Kotlin.isCharSequence(tmp$_0 = value) ? tmp$_0 : Kotlin.throwCCE()).toString())) != null ? tmp$ : 0);
    return c;
  };
  Color$Companion.prototype.fromCssStr_61zpoe$ = function (value) {
    var i = indexOf_0(value, '(');
    if (i === -1)
      return Color$Companion_getInstance().BLACK.copy_7b5o5w$();
    var startIndex = i + 1 | 0;
    var endIndex = value.length - 1 | 0;
    var sub = value.substring(startIndex, endIndex);
    var split_1 = split_0(sub, [44]);
    var $receiver = split_1.get_za3lpa$(0);
    var tmp$_0;
    var $receiver_0 = Kotlin.kotlin.text.trim_gw00vp$(Kotlin.isCharSequence(tmp$_0 = $receiver) ? tmp$_0 : Kotlin.throwCCE()).toString();
    var r = Kotlin.kotlin.text.toDouble_pdl1vz$($receiver_0) / 255.0;
    var $receiver_1 = split_1.get_za3lpa$(1);
    var tmp$_1;
    var $receiver_2 = Kotlin.kotlin.text.trim_gw00vp$(Kotlin.isCharSequence(tmp$_1 = $receiver_1) ? tmp$_1 : Kotlin.throwCCE()).toString();
    var g = Kotlin.kotlin.text.toDouble_pdl1vz$($receiver_2) / 255.0;
    var $receiver_3 = split_1.get_za3lpa$(2);
    var tmp$_2;
    var $receiver_4 = Kotlin.kotlin.text.trim_gw00vp$(Kotlin.isCharSequence(tmp$_2 = $receiver_3) ? tmp$_2 : Kotlin.throwCCE()).toString();
    var b = Kotlin.kotlin.text.toDouble_pdl1vz$($receiver_4) / 255.0;
    var tmp$;
    if (split_1.size < 4)
      tmp$ = 1.0;
    else {
      var $receiver_5 = split_1.get_za3lpa$(3);
      var tmp$_3;
      var $receiver_6 = Kotlin.kotlin.text.trim_gw00vp$(Kotlin.isCharSequence(tmp$_3 = $receiver_5) ? tmp$_3 : Kotlin.throwCCE()).toString();
      tmp$ = Kotlin.kotlin.text.toDouble_pdl1vz$($receiver_6);
    }
    var a = tmp$;
    return new Color_0(r, g, b, a);
  };
  Color$Companion.prototype.fromRgbaStr_61zpoe$ = function (hex) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var r = (tmp$ = toIntOrNull_0(hex.substring(0, 2), 16)) != null ? tmp$ : 0;
    var g = (tmp$_0 = toIntOrNull_0(hex.substring(2, 4), 16)) != null ? tmp$_0 : 0;
    var b = (tmp$_1 = toIntOrNull_0(hex.substring(4, 6), 16)) != null ? tmp$_1 : 0;
    var a = hex.length !== 8 ? 255 : (tmp$_2 = toIntOrNull_0(hex.substring(6, 8), 16)) != null ? tmp$_2 : 0;
    return new Color_0(r / 255.0, g / 255.0, b / 255.0, a / 255.0);
  };
  Color$Companion.prototype.rgb888_y2kzbl$ = function (r, g, b) {
    return (r * 255 | 0) << 16 | (g * 255 | 0) << 8 | (b * 255 | 0);
  };
  Color$Companion.prototype.rgba8888_7b5o5w$ = function (r, g, b, a) {
    return (r * 255 | 0) << 24 | (g * 255 | 0) << 16 | (b * 255 | 0) << 8 | (a * 255 | 0);
  };
  Color$Companion.prototype.rgb888_1qghwi$ = function (color_3) {
    this.clamped_0.set_1qghwi$(color_3).clamp();
    return (this.clamped_0.r * 255 | 0) << 16 | (this.clamped_0.g * 255 | 0) << 8 | (this.clamped_0.b * 255 | 0);
  };
  Color$Companion.prototype.rgba8888_1qghwi$ = function (color_3) {
    this.clamped_0.set_1qghwi$(color_3).clamp();
    return (this.clamped_0.r * 255 | 0) << 24 | (this.clamped_0.g * 255 | 0) << 16 | (this.clamped_0.b * 255 | 0) << 8 | (this.clamped_0.a * 255 | 0);
  };
  Color$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Color$Companion_instance = null;
  function Color$Companion_getInstance() {
    if (Color$Companion_instance === null) {
      new Color$Companion();
    }
    return Color$Companion_instance;
  }
  Color_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Color',
    interfaces: []
  };
  Color_0.prototype.component1 = function () {
    return this.r;
  };
  Color_0.prototype.component2 = function () {
    return this.g;
  };
  Color_0.prototype.component3 = function () {
    return this.b;
  };
  Color_0.prototype.component4 = function () {
    return this.a;
  };
  Color_0.prototype.copy_7b5o5w$ = function (r, g, b, a) {
    return new Color_0(r === void 0 ? this.r : r, g === void 0 ? this.g : g, b === void 0 ? this.b : b, a === void 0 ? this.a : a);
  };
  Color_0.prototype.toString = function () {
    return 'Color(r=' + Kotlin.toString(this.r) + (', g=' + Kotlin.toString(this.g)) + (', b=' + Kotlin.toString(this.b)) + (', a=' + Kotlin.toString(this.a)) + ')';
  };
  Color_0.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.r) | 0;
    result = result * 31 + Kotlin.hashCode(this.g) | 0;
    result = result * 31 + Kotlin.hashCode(this.b) | 0;
    result = result * 31 + Kotlin.hashCode(this.a) | 0;
    return result;
  };
  Color_0.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.r, other.r) && Kotlin.equals(this.g, other.g) && Kotlin.equals(this.b, other.b) && Kotlin.equals(this.a, other.a)))));
  };
  function Hsl(h, s, l, a) {
    if (h === void 0)
      h = 0.0;
    if (s === void 0)
      s = 0.0;
    if (l === void 0)
      l = 0.0;
    if (a === void 0)
      a = 1.0;
    this.h = h;
    this.s = s;
    this.l = l;
    this.a = a;
  }
  Hsl.prototype.toRgb_1qghwi$ = function (out) {
    out.a = this.a;
    var value = 2.0 * this.l - 1.0;
    var c = (1.0 - (value < 0.0 ? -value : value)) * this.s;
    var value_0 = this.h / 60.0 % 2.0 - 1.0;
    var x = c * (1.0 - (value_0 < 0.0 ? -value_0 : value_0));
    var m = this.l - c / 2.0;
    if (this.h < 60.0) {
      out.r = c + m;
      out.g = x + m;
      out.b = 0.0 + m;
    }
     else if (this.h < 120.0) {
      out.r = x + m;
      out.g = c + m;
      out.b = 0.0 + m;
    }
     else if (this.h < 180.0) {
      out.r = 0.0 + m;
      out.g = c + m;
      out.b = x + m;
    }
     else if (this.h < 240.0) {
      out.r = 0.0 + m;
      out.g = x + m;
      out.b = c + m;
    }
     else if (this.h < 300.0) {
      out.r = x + m;
      out.g = 0.0 + m;
      out.b = c + m;
    }
     else {
      out.r = c + m;
      out.g = 0.0 + m;
      out.b = x + m;
    }
    return out;
  };
  Hsl.prototype.clear = function () {
    this.h = 0.0;
    this.s = 0.0;
    this.l = 0.0;
    this.a = 0.0;
  };
  Hsl.prototype.set_y02iys$ = function (other) {
    this.h = other.h;
    this.s = other.s;
    this.l = other.l;
    this.a = other.a;
  };
  Hsl.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Hsl',
    interfaces: []
  };
  Hsl.prototype.component1 = function () {
    return this.h;
  };
  Hsl.prototype.component2 = function () {
    return this.s;
  };
  Hsl.prototype.component3 = function () {
    return this.l;
  };
  Hsl.prototype.component4 = function () {
    return this.a;
  };
  Hsl.prototype.copy_7b5o5w$ = function (h, s, l, a) {
    return new Hsl(h === void 0 ? this.h : h, s === void 0 ? this.s : s, l === void 0 ? this.l : l, a === void 0 ? this.a : a);
  };
  Hsl.prototype.toString = function () {
    return 'Hsl(h=' + Kotlin.toString(this.h) + (', s=' + Kotlin.toString(this.s)) + (', l=' + Kotlin.toString(this.l)) + (', a=' + Kotlin.toString(this.a)) + ')';
  };
  Hsl.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.h) | 0;
    result = result * 31 + Kotlin.hashCode(this.s) | 0;
    result = result * 31 + Kotlin.hashCode(this.l) | 0;
    result = result * 31 + Kotlin.hashCode(this.a) | 0;
    return result;
  };
  Hsl.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.h, other.h) && Kotlin.equals(this.s, other.s) && Kotlin.equals(this.l, other.l) && Kotlin.equals(this.a, other.a)))));
  };
  function Hsv(h, s, v, a) {
    if (h === void 0)
      h = 0.0;
    if (s === void 0)
      s = 0.0;
    if (v === void 0)
      v = 0.0;
    if (a === void 0)
      a = 1.0;
    this.h = h;
    this.s = s;
    this.v = v;
    this.a = a;
  }
  Hsv.prototype.toRgb_1qghwi$ = function (out) {
    if (out === void 0)
      out = new Color_0();
    out.a = this.a;
    var c = this.v * this.s;
    var value = this.h / 60.0 % 2.0 - 1.0;
    var x = c * (1.0 - (value < 0.0 ? -value : value));
    var m = this.v - c;
    if (this.h < 60.0) {
      out.r = c + m;
      out.g = x + m;
      out.b = 0.0 + m;
    }
     else if (this.h < 120.0) {
      out.r = x + m;
      out.g = c + m;
      out.b = 0.0 + m;
    }
     else if (this.h < 180.0) {
      out.r = 0.0 + m;
      out.g = c + m;
      out.b = x + m;
    }
     else if (this.h < 240.0) {
      out.r = 0.0 + m;
      out.g = x + m;
      out.b = c + m;
    }
     else if (this.h < 300.0) {
      out.r = x + m;
      out.g = 0.0 + m;
      out.b = c + m;
    }
     else {
      out.r = c + m;
      out.g = 0.0 + m;
      out.b = x + m;
    }
    return out;
  };
  Hsv.prototype.clear = function () {
    this.h = 0.0;
    this.s = 0.0;
    this.v = 0.0;
    this.a = 0.0;
  };
  Hsv.prototype.set_y02iyi$ = function (other) {
    this.h = other.h;
    this.s = other.s;
    this.v = other.v;
    this.a = other.a;
  };
  Hsv.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Hsv',
    interfaces: []
  };
  Hsv.prototype.component1 = function () {
    return this.h;
  };
  Hsv.prototype.component2 = function () {
    return this.s;
  };
  Hsv.prototype.component3 = function () {
    return this.v;
  };
  Hsv.prototype.component4 = function () {
    return this.a;
  };
  Hsv.prototype.copy_7b5o5w$ = function (h, s, v, a) {
    return new Hsv(h === void 0 ? this.h : h, s === void 0 ? this.s : s, v === void 0 ? this.v : v, a === void 0 ? this.a : a);
  };
  Hsv.prototype.toString = function () {
    return 'Hsv(h=' + Kotlin.toString(this.h) + (', s=' + Kotlin.toString(this.s)) + (', v=' + Kotlin.toString(this.v)) + (', a=' + Kotlin.toString(this.a)) + ')';
  };
  Hsv.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.h) | 0;
    result = result * 31 + Kotlin.hashCode(this.s) | 0;
    result = result * 31 + Kotlin.hashCode(this.v) | 0;
    result = result * 31 + Kotlin.hashCode(this.a) | 0;
    return result;
  };
  Hsv.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.h, other.h) && Kotlin.equals(this.s, other.s) && Kotlin.equals(this.v, other.v) && Kotlin.equals(this.a, other.a)))));
  };
  function color($receiver, color_3) {
    $receiver.string_pdl1vj$('#' + color_3.toRgbaString());
  }
  function color_0($receiver, name, color_3) {
    color($receiver.property_61zpoe$(name), color_3);
  }
  function color_1($receiver) {
    var tmp$;
    tmp$ = $receiver.string();
    if (tmp$ == null) {
      return null;
    }
    var str = tmp$;
    return Color$Companion_getInstance().fromStr_61zpoe$(str);
  }
  function color_2($receiver, name) {
    var tmp$;
    return (tmp$ = $receiver.get_61zpoe$(name)) != null ? color_1(tmp$) : null;
  }
  function ArrayListBuffer(array_3, arrayOffset, capacity) {
    if (arrayOffset === void 0)
      arrayOffset = 0;
    if (capacity === void 0)
      capacity = INT_MAX_VALUE;
    BufferBase.call(this, capacity);
    this.array_0 = array_3;
    this.arrayOffset_0 = arrayOffset;
  }
  ArrayListBuffer.prototype.get = function () {
    var tmp$;
    if (this._position >= this._limit) {
      throw new BufferUnderflowException();
    }
    return this.array_0.get_za3lpa$(this.arrayOffset_0 + (tmp$ = this._position, this._position = tmp$ + 1 | 0, tmp$) | 0);
  };
  ArrayListBuffer.prototype.put_11rb$ = function (value) {
    var tmp$;
    if (this._position >= this._limit) {
      throw new BufferOverflowException();
    }
    addOrSet(this.array_0, this.arrayOffset_0 + (tmp$ = this._position, this._position = tmp$ + 1 | 0, tmp$) | 0, value);
  };
  ArrayListBuffer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ArrayListBuffer',
    interfaces: [BufferBase, ReadWriteBuffer]
  };
  function BufferBase(_capacity) {
    BufferBase$Companion_getInstance();
    this._capacity = _capacity;
    this._limit = 0;
    this._mark = BufferBase$Companion_getInstance().UNSET_MARK;
    this._position = 0;
    if (this._capacity < 0) {
      throw new IllegalArgumentException('capacity < 0: ' + Kotlin.toString(this._capacity));
    }
    this._limit = this._capacity;
  }
  BufferBase.prototype.clear = function () {
    this._position = 0;
    this._mark = BufferBase$Companion_getInstance().UNSET_MARK;
    this._limit = this._capacity;
    return this;
  };
  BufferBase.prototype.flip = function () {
    this._limit = this._position;
    this._position = 0;
    this._mark = BufferBase$Companion_getInstance().UNSET_MARK;
    return this;
  };
  Object.defineProperty(BufferBase.prototype, 'hasRemaining', {
    get: function () {
      return this._position < this._limit;
    }
  });
  Object.defineProperty(BufferBase.prototype, 'capacity', {
    get: function () {
      return this._capacity;
    }
  });
  Object.defineProperty(BufferBase.prototype, 'limit', {
    get: function () {
      return this._limit;
    }
  });
  BufferBase.prototype.limit_za3lpa$ = function (newLimit) {
    if (newLimit < 0 || newLimit > this._capacity) {
      throw new IllegalArgumentException('Bad limit (capacity ' + this._capacity + '): ' + newLimit);
    }
    this._limit = newLimit;
    if (this._position > newLimit) {
      this._position = newLimit;
    }
    if (this._mark > newLimit) {
      this._mark = BufferBase$Companion_getInstance().UNSET_MARK;
    }
    return this;
  };
  BufferBase.prototype.mark = function () {
    this._mark = this._position;
    return this;
  };
  Object.defineProperty(BufferBase.prototype, 'position', {
    get: function () {
      return this._position;
    },
    set: function (value) {
      if (value < 0 || value > this._limit) {
        throw new IllegalArgumentException('Bad position (limit ' + this._limit + '): ' + value);
      }
      this._position = value;
      if (this._mark !== BufferBase$Companion_getInstance().UNSET_MARK && this._mark > this._position) {
        this._mark = BufferBase$Companion_getInstance().UNSET_MARK;
      }
    }
  });
  BufferBase.prototype.reset = function () {
    if (this._mark === BufferBase$Companion_getInstance().UNSET_MARK) {
      throw new InvalidMarkException('Mark not set');
    }
    this._position = this._mark;
    return this;
  };
  BufferBase.prototype.rewind = function () {
    this._position = 0;
    this._mark = BufferBase$Companion_getInstance().UNSET_MARK;
    return this;
  };
  BufferBase.prototype.toString = function () {
    return '[position=' + this._position + ',limit=' + this._limit + ',capacity=' + this._capacity + ']';
  };
  function BufferBase$Companion() {
    BufferBase$Companion_instance = this;
    this.UNSET_MARK = -1;
  }
  BufferBase$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BufferBase$Companion_instance = null;
  function BufferBase$Companion_getInstance() {
    if (BufferBase$Companion_instance === null) {
      new BufferBase$Companion();
    }
    return BufferBase$Companion_instance;
  }
  BufferBase.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BufferBase',
    interfaces: [ReadWriteBuffer]
  };
  function InvalidMarkException(message) {
    Throwable.call(this);
    this.message_qcm9cr$_0 = message;
    this.cause_qcm9cr$_0 = null;
    Kotlin.captureStack(Throwable, this);
    this.name = 'InvalidMarkException';
  }
  Object.defineProperty(InvalidMarkException.prototype, 'message', {
    get: function () {
      return this.message_qcm9cr$_0;
    }
  });
  Object.defineProperty(InvalidMarkException.prototype, 'cause', {
    get: function () {
      return this.cause_qcm9cr$_0;
    }
  });
  InvalidMarkException.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'InvalidMarkException',
    interfaces: [Throwable]
  };
  function BufferUnderflowException() {
    Throwable.call(this);
    this.message_299wx3$_0 = void 0;
    this.cause_299wx3$_0 = null;
    Kotlin.captureStack(Throwable, this);
    this.name = 'BufferUnderflowException';
  }
  Object.defineProperty(BufferUnderflowException.prototype, 'message', {
    get: function () {
      return this.message_299wx3$_0;
    }
  });
  Object.defineProperty(BufferUnderflowException.prototype, 'cause', {
    get: function () {
      return this.cause_299wx3$_0;
    }
  });
  BufferUnderflowException.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BufferUnderflowException',
    interfaces: [Throwable]
  };
  function BufferOverflowException() {
    Throwable.call(this);
    this.message_fiq4hj$_0 = void 0;
    this.cause_fiq4hj$_0 = null;
    Kotlin.captureStack(Throwable, this);
    this.name = 'BufferOverflowException';
  }
  Object.defineProperty(BufferOverflowException.prototype, 'message', {
    get: function () {
      return this.message_fiq4hj$_0;
    }
  });
  Object.defineProperty(BufferOverflowException.prototype, 'cause', {
    get: function () {
      return this.cause_fiq4hj$_0;
    }
  });
  BufferOverflowException.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BufferOverflowException',
    interfaces: [Throwable]
  };
  function Buffer() {
  }
  Object.defineProperty(Buffer.prototype, 'remaining', {
    get: function () {
      return this.limit - this.position | 0;
    }
  });
  Buffer.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'Buffer',
    interfaces: []
  };
  function ReadBuffer() {
  }
  ReadBuffer.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'ReadBuffer',
    interfaces: [Buffer]
  };
  function WriteBuffer() {
  }
  WriteBuffer.prototype.put_kcizie$ = function (value) {
    while (value.hasRemaining) {
      this.put_11rb$(value.get());
    }
  };
  WriteBuffer.prototype.put_p1ys8y$ = function (value) {
    var tmp$;
    tmp$ = value.iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      this.put_11rb$(i);
    }
  };
  WriteBuffer.prototype.put_1phuh2$ = function (value) {
    while (value.hasNext()) {
      this.put_11rb$(value.next());
    }
  };
  WriteBuffer.prototype.fill_11rb$ = function (value) {
    var tmp$, tmp$_0;
    tmp$ = this.position;
    tmp$_0 = this.limit - 1 | 0;
    for (var i = tmp$; i <= tmp$_0; i++) {
      this.put_11rb$(value);
    }
  };
  WriteBuffer.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'WriteBuffer',
    interfaces: [Buffer]
  };
  function ReadWriteBuffer() {
  }
  ReadWriteBuffer.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'ReadWriteBuffer',
    interfaces: [WriteBuffer, ReadBuffer]
  };
  function NativeBuffer() {
  }
  NativeBuffer.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'NativeBuffer',
    interfaces: [ReadWriteBuffer]
  };
  function write($receiver, buffer) {
    buffer.put_11rb$($receiver.x);
    buffer.put_11rb$($receiver.y);
    buffer.put_11rb$($receiver.z);
  }
  function write_0($receiver, buffer) {
    buffer.put_11rb$($receiver.x);
    buffer.put_11rb$($receiver.y);
  }
  function writeUnpacked($receiver, buffer) {
    buffer.put_11rb$($receiver.r);
    buffer.put_11rb$($receiver.g);
    buffer.put_11rb$($receiver.b);
    buffer.put_11rb$($receiver.a);
  }
  function toFloatArray($receiver) {
    var tmp$;
    $receiver.mark();
    var floats = Kotlin.newArray($receiver.limit - $receiver.position | 0, 0);
    var i = 0;
    while ($receiver.hasRemaining) {
      floats[tmp$ = i, i = tmp$ + 1 | 0, tmp$] = $receiver.get();
    }
    $receiver.reset();
    return floats;
  }
  function FilesManifest(files) {
    if (files === void 0)
      files = [];
    this.files = files;
  }
  FilesManifest.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FilesManifest',
    interfaces: []
  };
  FilesManifest.prototype.component1 = function () {
    return this.files;
  };
  FilesManifest.prototype.copy_tcmhar$ = function (files) {
    return new FilesManifest(files === void 0 ? this.files : files);
  };
  FilesManifest.prototype.toString = function () {
    return 'FilesManifest(files=' + Kotlin.toString(this.files) + ')';
  };
  FilesManifest.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.files) | 0;
    return result;
  };
  FilesManifest.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.files, other.files))));
  };
  function FilesManifestSerializer() {
    FilesManifestSerializer_instance = this;
  }
  FilesManifestSerializer.prototype.write_r4tkhj$ = function ($receiver, writer) {
    array(writer, 'files', $receiver.files, ManifestEntrySerializer_getInstance());
  };
  FilesManifestSerializer.prototype.read_gax0m7$ = function (reader) {
    var tmp$;
    var itemFactory = ManifestEntrySerializer_getInstance();
    var tmp$_0;
    var tmp$_1;
    if ((tmp$_0 = reader.get_61zpoe$('files')) != null) {
      var e = tmp$_0.elements();
      tmp$_1 = Kotlin.newArrayF(e.size, _.com.acornui.serialization.array2$f(itemFactory, e));
    }
     else
      tmp$_1 = null;
    return new FilesManifest((tmp$ = tmp$_1) != null ? tmp$ : Kotlin.throwNPE());
  };
  FilesManifestSerializer.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'FilesManifestSerializer',
    interfaces: [From, To]
  };
  var FilesManifestSerializer_instance = null;
  function FilesManifestSerializer_getInstance() {
    if (FilesManifestSerializer_instance === null) {
      new FilesManifestSerializer();
    }
    return FilesManifestSerializer_instance;
  }
  function ManifestEntry(path, modified, size) {
    if (path === void 0)
      path = '';
    if (modified === void 0)
      modified = Kotlin.Long.ZERO;
    if (size === void 0)
      size = Kotlin.Long.ZERO;
    this.path = path;
    this.modified = modified;
    this.size = size;
  }
  ManifestEntry.prototype.name = function () {
    return substringAfterLast(this.path, 47);
  };
  ManifestEntry.prototype.nameNoExtension = function () {
    return substringBeforeLast(substringAfterLast(this.path, 47), 46);
  };
  ManifestEntry.prototype.extension = function () {
    return substringAfterLast(this.path, 46);
  };
  ManifestEntry.prototype.hasExtension_61zpoe$ = function (extension) {
    return equals(this.extension(), extension, true);
  };
  ManifestEntry.prototype.depth = function () {
    var count_0 = -1;
    var index = -1;
    do {
      count_0 = count_0 + 1 | 0;
      index = indexOf_2(this.path, 47, index + 1 | 0);
    }
     while (index !== -1);
    return count_0;
  };
  ManifestEntry.prototype.compareTo_11rb$ = function (other) {
    if (this.depth() === other.depth()) {
      return Kotlin.compareTo(this.path, other.path);
    }
     else {
      return Kotlin.primitiveCompareTo(this.depth(), other.depth());
    }
  };
  ManifestEntry.prototype.toString = function () {
    return "ManifestEntry(path = '" + this.path + "')";
  };
  ManifestEntry.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ManifestEntry',
    interfaces: [Comparable]
  };
  ManifestEntry.prototype.component1 = function () {
    return this.path;
  };
  ManifestEntry.prototype.component2 = function () {
    return this.modified;
  };
  ManifestEntry.prototype.component3 = function () {
    return this.size;
  };
  ManifestEntry.prototype.copy_cd0evc$ = function (path, modified, size) {
    return new ManifestEntry(path === void 0 ? this.path : path, modified === void 0 ? this.modified : modified, size === void 0 ? this.size : size);
  };
  ManifestEntry.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.path) | 0;
    result = result * 31 + Kotlin.hashCode(this.modified) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    return result;
  };
  ManifestEntry.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.path, other.path) && Kotlin.equals(this.modified, other.modified) && Kotlin.equals(this.size, other.size)))));
  };
  function ManifestEntrySerializer() {
    ManifestEntrySerializer_instance = this;
  }
  ManifestEntrySerializer.prototype.write_r4tkhj$ = function ($receiver, writer) {
    string(writer, 'path', $receiver.path);
    long(writer, 'modified', $receiver.modified);
    long(writer, 'size', $receiver.size);
  };
  ManifestEntrySerializer.prototype.read_gax0m7$ = function (reader) {
    var tmp$, tmp$_0, tmp$_1;
    return new ManifestEntry((tmp$ = string_0(reader, 'path')) != null ? tmp$ : Kotlin.throwNPE(), (tmp$_0 = long_0(reader, 'modified')) != null ? tmp$_0 : Kotlin.throwNPE(), (tmp$_1 = long_0(reader, 'size')) != null ? tmp$_1 : Kotlin.throwNPE());
  };
  ManifestEntrySerializer.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'ManifestEntrySerializer',
    interfaces: [From, To]
  };
  var ManifestEntrySerializer_instance = null;
  function ManifestEntrySerializer_getInstance() {
    if (ManifestEntrySerializer_instance === null) {
      new ManifestEntrySerializer();
    }
    return ManifestEntrySerializer_instance;
  }
  function WrappedArrayBuffer(array_3, arrayOffset) {
    if (arrayOffset === void 0)
      arrayOffset = 0;
    BufferBase.call(this, array_3.length - arrayOffset | 0);
    this.array_0 = array_3;
    this.arrayOffset_0 = arrayOffset;
  }
  WrappedArrayBuffer.prototype.get = function () {
    var tmp$;
    if (this._position === this._limit) {
      throw new BufferUnderflowException();
    }
    return this.array_0[this.arrayOffset_0 + (tmp$ = this._position, this._position = tmp$ + 1 | 0, tmp$) | 0];
  };
  WrappedArrayBuffer.prototype.put_11rb$ = function (value) {
    var tmp$;
    if (this._position === this._limit) {
      throw new BufferOverflowException();
    }
    this.array_0[this.arrayOffset_0 + (tmp$ = this._position, this._position = tmp$ + 1 | 0, tmp$) | 0] = value;
  };
  WrappedArrayBuffer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'WrappedArrayBuffer',
    interfaces: [BufferBase, ReadWriteBuffer]
  };
  function ILogger() {
    ILogger$Companion_getInstance();
  }
  function ILogger$Companion() {
    ILogger$Companion_instance = this;
    this.ERROR = 1;
    this.WARN = 2;
    this.INFO = 3;
    this.DEBUG = 4;
  }
  ILogger$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ILogger$Companion_instance = null;
  function ILogger$Companion_getInstance() {
    if (ILogger$Companion_instance === null) {
      new ILogger$Companion();
    }
    return ILogger$Companion_instance;
  }
  ILogger.prototype.debug_s8jyv4$ = function (message) {
    this.log_cypnoy$(message, ILogger$Companion_getInstance().DEBUG);
  };
  ILogger.prototype.debug_nq59yw$ = function (message) {
    this.log_o4o5w6$(message, ILogger$Companion_getInstance().DEBUG);
  };
  ILogger.prototype.info_s8jyv4$ = function (message) {
    this.log_cypnoy$(message, ILogger$Companion_getInstance().INFO);
  };
  ILogger.prototype.info_nq59yw$ = function (message) {
    this.log_o4o5w6$(message, ILogger$Companion_getInstance().INFO);
  };
  ILogger.prototype.warn_s8jyv4$ = function (message) {
    this.log_cypnoy$(message, ILogger$Companion_getInstance().WARN);
  };
  ILogger.prototype.warn_nq59yw$ = function (message) {
    this.log_o4o5w6$(message, ILogger$Companion_getInstance().WARN);
  };
  ILogger.prototype.error_s8jyv4$ = function (message) {
    this.log_cypnoy$(message, ILogger$Companion_getInstance().ERROR);
  };
  ILogger.prototype.error_a67anv$$default = function (e, message) {
    var str = '';
    if (message.length > 0)
      str += message + '\n';
    str += Kotlin.toString(e.message) + '\n';
    this.log_cypnoy$(str, ILogger$Companion_getInstance().ERROR);
  };
  ILogger.prototype.error_a67anv$ = function (e, message, callback$default) {
    if (message === void 0)
      message = '';
    callback$default ? callback$default(e, message) : this.error_a67anv$$default(e, message);
  };
  ILogger.prototype.error_nq59yw$ = function (message) {
    this.log_o4o5w6$(message, ILogger$Companion_getInstance().ERROR);
  };
  ILogger.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'ILogger',
    interfaces: []
  };
  function Log() {
    Log_instance = this;
    this.targets = arrayListOf([new PrintTarget()]);
    this.level_7rhri5$_0 = ILogger$Companion_getInstance().DEBUG;
  }
  Object.defineProperty(Log.prototype, 'level', {
    get: function () {
      return this.level_7rhri5$_0;
    },
    set: function (level) {
      this.level_7rhri5$_0 = level;
    }
  });
  Log.prototype.log_cypnoy$ = function (message, level) {
    var tmp$;
    if (level <= this.level) {
      tmp$ = get_lastIndex(this.targets);
      for (var i = 0; i <= tmp$; i++) {
        var target = this.targets.get_za3lpa$(i);
        if (level <= target.level) {
          target.log_cypnoy$(message, level);
        }
      }
    }
  };
  Log.prototype.log_o4o5w6$ = function (message, level) {
    var tmp$;
    if (level <= this.level) {
      tmp$ = get_lastIndex(this.targets);
      for (var i = 0; i <= tmp$; i++) {
        var target = this.targets.get_za3lpa$(i);
        if (level <= target.level) {
          target.log_o4o5w6$(message, level);
        }
      }
    }
  };
  Log.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Log',
    interfaces: [ILogger]
  };
  var Log_instance = null;
  function Log_getInstance() {
    if (Log_instance === null) {
      new Log();
    }
    return Log_instance;
  }
  function PrintTarget() {
    this.level_bx3re1$_0 = ILogger$Companion_getInstance().DEBUG;
    this.prefixes = ['[NONE] ', '[ERROR] ', '[WARN] ', '[INFO] ', '[DEBUG] '];
  }
  Object.defineProperty(PrintTarget.prototype, 'level', {
    get: function () {
      return this.level_bx3re1$_0;
    },
    set: function (level) {
      this.level_bx3re1$_0 = level;
    }
  });
  PrintTarget.prototype.log_cypnoy$ = function (message, level) {
    var prefix = level < this.prefixes.length ? this.prefixes[level] : '';
    println(prefix + Kotlin.toString(message));
  };
  PrintTarget.prototype.log_o4o5w6$ = function (message, level) {
    this.log_cypnoy$(message(), level);
  };
  PrintTarget.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'PrintTarget',
    interfaces: [ILogger]
  };
  function ArrayTarget() {
    this.level_duw0xv$_0 = ILogger$Companion_getInstance().DEBUG;
    this.maxLogs = 1000;
    this.separator = lineSeparator;
    this.prefixes = ['[NONE] ', '[ERROR] ', '[WARN] ', '[INFO] ', '[DEBUG] '];
    this.list = ArrayList_init();
  }
  Object.defineProperty(ArrayTarget.prototype, 'level', {
    get: function () {
      return this.level_duw0xv$_0;
    },
    set: function (level) {
      this.level_duw0xv$_0 = level;
    }
  });
  ArrayTarget.prototype.log_cypnoy$ = function (message, level) {
    this.list.add_11rb$(new Pair(level, Kotlin.toString(message)));
    if (this.list.size > this.maxLogs)
      poll(this.list);
  };
  ArrayTarget.prototype.log_o4o5w6$ = function (message, level) {
    this.log_cypnoy$(message(), level);
  };
  ArrayTarget.prototype.toString = function () {
    var tmp$_0;
    var buffer = new StringBuilder();
    var isFirst = true;
    tmp$_0 = this.list.iterator();
    while (tmp$_0.hasNext()) {
      var tmp$ = tmp$_0.next()
      , level = tmp$.component1()
      , message = tmp$.component2();
      if (isFirst) {
        isFirst = false;
      }
       else {
        buffer.append_gw00v9$(this.separator);
      }
      var prefix = level < this.prefixes.length ? this.prefixes[level] : '';
      buffer.append_gw00v9$(prefix + message.toString());
    }
    return buffer.toString();
  };
  ArrayTarget.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ArrayTarget',
    interfaces: [ILogger]
  };
  function BoundsRo() {
  }
  BoundsRo.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'BoundsRo',
    interfaces: []
  };
  function Bounds(width, height) {
    Bounds$Companion_getInstance();
    if (width === void 0)
      width = 0.0;
    if (height === void 0)
      height = 0.0;
    this.width_ebv28z$_0 = width;
    this.height_ebv28z$_0 = height;
  }
  Object.defineProperty(Bounds.prototype, 'width', {
    get: function () {
      return this.width_ebv28z$_0;
    },
    set: function (width) {
      this.width_ebv28z$_0 = width;
    }
  });
  Object.defineProperty(Bounds.prototype, 'height', {
    get: function () {
      return this.height_ebv28z$_0;
    },
    set: function (height) {
      this.height_ebv28z$_0 = height;
    }
  });
  Bounds.prototype.set_i12l7q$ = function (v) {
    this.width = v.width;
    this.height = v.height;
    return this;
  };
  Bounds.prototype.add_dleff0$ = function (wD, hD) {
    this.width = this.width + wD;
    this.height = this.height + hD;
    return this;
  };
  Bounds.prototype.set_dleff0$ = function (width, height) {
    this.width = width;
    this.height = height;
    return this;
  };
  Bounds.prototype.ext_dleff0$ = function (width, height) {
    if (width > this.width)
      this.width = width;
    if (height > this.height)
      this.height = height;
  };
  Bounds.prototype.isEmpty = function () {
    return this.width === 0.0 && this.height === 0.0;
  };
  Bounds.prototype.isNotEmpty = function () {
    return !this.isEmpty();
  };
  Bounds.prototype.clear = function () {
    this.width = 0.0;
    this.height = 0.0;
  };
  Bounds.prototype.free = function () {
    Bounds$Companion_getInstance().pool_0.free_11rb$(this);
  };
  function Bounds$Companion() {
    Bounds$Companion_instance = this;
    this.pool_0 = new ClearableObjectPool(void 0, Bounds$Companion$pool$lambda);
  }
  Bounds$Companion.prototype.obtain = function () {
    return this.pool_0.obtain();
  };
  function Bounds$Companion$pool$lambda() {
    return new Bounds();
  }
  Bounds$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Bounds$Companion_instance = null;
  function Bounds$Companion_getInstance() {
    if (Bounds$Companion_instance === null) {
      new Bounds$Companion();
    }
    return Bounds$Companion_instance;
  }
  Bounds.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Bounds',
    interfaces: [BoundsRo, Clearable]
  };
  Bounds.prototype.component1 = function () {
    return this.width;
  };
  Bounds.prototype.component2 = function () {
    return this.height;
  };
  Bounds.prototype.copy_dleff0$ = function (width, height) {
    return new Bounds(width === void 0 ? this.width : width, height === void 0 ? this.height : height);
  };
  Bounds.prototype.toString = function () {
    return 'Bounds(width=' + Kotlin.toString(this.width) + (', height=' + Kotlin.toString(this.height)) + ')';
  };
  Bounds.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  Bounds.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
  };
  function Box(min, max) {
    Box$Companion_getInstance();
    if (min === void 0)
      min = new Vector3();
    if (max === void 0)
      max = new Vector3();
    this.min = min;
    this.max = max;
    this.center = new Vector3();
    this.dimensions = new Vector3();
    this.set_s18mjw$(this.min, this.max);
  }
  Box.prototype.update = function () {
    this.center.set_1fv2cb$(this.min).add_1fv2cb$(this.max).scl_mx4ult$(0.5);
    this.dimensions.set_1fv2cb$(this.max).sub_1fv2cb$(this.min);
  };
  Box.prototype.getCorners_nlnyx2$ = function (corners) {
    corners[0].set_y2kzbl$(this.min.x, this.min.y, this.min.z);
    corners[1].set_y2kzbl$(this.max.x, this.min.y, this.min.z);
    corners[2].set_y2kzbl$(this.max.x, this.max.y, this.min.z);
    corners[3].set_y2kzbl$(this.min.x, this.max.y, this.min.z);
    corners[4].set_y2kzbl$(this.min.x, this.min.y, this.max.z);
    corners[5].set_y2kzbl$(this.max.x, this.min.y, this.max.z);
    corners[6].set_y2kzbl$(this.max.x, this.max.y, this.max.z);
    corners[7].set_y2kzbl$(this.min.x, this.max.y, this.max.z);
    return corners;
  };
  Box.prototype.getCorner000_9wm29k$ = function (out) {
    return out.set_y2kzbl$(this.min.x, this.min.y, this.min.z);
  };
  Box.prototype.getCorner001_9wm29k$ = function (out) {
    return out.set_y2kzbl$(this.min.x, this.min.y, this.max.z);
  };
  Box.prototype.getCorner010_9wm29k$ = function (out) {
    return out.set_y2kzbl$(this.min.x, this.max.y, this.min.z);
  };
  Box.prototype.getCorner011_9wm29k$ = function (out) {
    return out.set_y2kzbl$(this.min.x, this.max.y, this.max.z);
  };
  Box.prototype.getCorner100_9wm29k$ = function (out) {
    return out.set_y2kzbl$(this.max.x, this.min.y, this.min.z);
  };
  Box.prototype.getCorner101_9wm29k$ = function (out) {
    return out.set_y2kzbl$(this.max.x, this.min.y, this.max.z);
  };
  Box.prototype.getCorner110_9wm29k$ = function (out) {
    return out.set_y2kzbl$(this.max.x, this.max.y, this.min.z);
  };
  Box.prototype.getCorner111_9wm29k$ = function (out) {
    return out.set_y2kzbl$(this.max.x, this.max.y, this.max.z);
  };
  Box.prototype.getDimensions_9wm29k$ = function (out) {
    return out.set_1fv2cb$(this.dimensions);
  };
  Object.defineProperty(Box.prototype, 'width', {
    get: function () {
      return this.dimensions.x;
    }
  });
  Object.defineProperty(Box.prototype, 'height', {
    get: function () {
      return this.dimensions.y;
    }
  });
  Object.defineProperty(Box.prototype, 'depth', {
    get: function () {
      return this.dimensions.z;
    }
  });
  Box.prototype.getMin_9wm29k$ = function (out) {
    return out.set_1fv2cb$(this.min);
  };
  Box.prototype.getMax_9wm29k$ = function (out) {
    return out.set_1fv2cb$(this.max);
  };
  Box.prototype.set_ujzywt$ = function (bounds) {
    return this.set_s18mjw$(bounds.min, bounds.max);
  };
  Box.prototype.set_s18mjw$ = function (minimum, maximum) {
    this.min.set_y2kzbl$(minimum.x < maximum.x ? minimum.x : maximum.x, minimum.y < maximum.y ? minimum.y : maximum.y, minimum.z < maximum.z ? minimum.z : maximum.z);
    this.max.set_y2kzbl$(minimum.x > maximum.x ? minimum.x : maximum.x, minimum.y > maximum.y ? minimum.y : maximum.y, minimum.z > maximum.z ? minimum.z : maximum.z);
    this.center.set_1fv2cb$(this.min).add_1fv2cb$(this.max).scl_mx4ult$(0.5);
    this.dimensions.set_1fv2cb$(this.max).sub_1fv2cb$(this.min);
    return this;
  };
  Box.prototype.set_w8lrqs$ = function (minX, minY, minZ, maxX, maxY, maxZ) {
    this.min.set_y2kzbl$(minX < maxX ? minX : maxX, minY < maxY ? minY : maxY, minZ < maxZ ? minZ : maxZ);
    this.max.set_y2kzbl$(minX > maxX ? minX : maxX, minY > maxY ? minY : maxY, minZ > maxZ ? minZ : maxZ);
    this.update();
    return this;
  };
  Box.prototype.set_nlnyx2$ = function (points) {
    var tmp$;
    this.inf();
    for (tmp$ = 0; tmp$ !== points.length; ++tmp$) {
      var l_point = points[tmp$];
      this._ext_0(l_point);
    }
    this.update();
    return this;
  };
  Box.prototype.set_72zqb$ = function (points) {
    var tmp$;
    this.inf();
    tmp$ = points.iterator();
    while (tmp$.hasNext()) {
      var l_point = tmp$.next();
      this.ext_f6e669$(l_point);
    }
    return this;
  };
  Box.prototype.inf = function () {
    this.min.set_y2kzbl$(FloatCompanionObject.POSITIVE_INFINITY, FloatCompanionObject.POSITIVE_INFINITY, FloatCompanionObject.POSITIVE_INFINITY);
    this.max.set_y2kzbl$(FloatCompanionObject.NEGATIVE_INFINITY, FloatCompanionObject.NEGATIVE_INFINITY, FloatCompanionObject.NEGATIVE_INFINITY);
    this.center.set_y2kzbl$(0.0, 0.0, 0.0);
    this.dimensions.set_y2kzbl$(0.0, 0.0, 0.0);
    return this;
  };
  Box.prototype.ext_f6e669$ = function (point, update) {
    if (update === void 0)
      update = true;
    this._ext_0(point);
    if (update)
      this.update();
    return this;
  };
  Box.prototype._ext_0 = function (point) {
    if (point.x < this.min.x)
      this.min.x = point.x;
    if (point.y < this.min.y)
      this.min.y = point.y;
    if (point.z < this.min.z)
      this.min.z = point.z;
    if (point.x > this.max.x)
      this.max.x = point.x;
    if (point.y > this.max.y)
      this.max.y = point.y;
    if (point.z > this.max.z)
      this.max.z = point.z;
  };
  Box.prototype.isValid = function () {
    return this.min.x < this.max.x && this.min.y < this.max.y && this.min.z < this.max.z;
  };
  Box.prototype.ext_ujzywt$ = function (a_bounds) {
    var tmp$ = this.set_s18mjw$;
    var tmp$_0 = this.min;
    var x = this.min.x;
    var y = a_bounds.min.x;
    var min_sdesaw$result;
    if (Kotlin.compareTo(x, y) <= 0) {
      min_sdesaw$result = x;
    }
     else {
      min_sdesaw$result = y;
    }
    var tmp$_1 = min_sdesaw$result;
    var x_0 = this.min.y;
    var y_0 = a_bounds.min.y;
    var min_sdesaw$result_0;
    if (Kotlin.compareTo(x_0, y_0) <= 0) {
      min_sdesaw$result_0 = x_0;
    }
     else {
      min_sdesaw$result_0 = y_0;
    }
    var tmp$_2 = min_sdesaw$result_0;
    var x_1 = this.min.z;
    var y_1 = a_bounds.min.z;
    var min_sdesaw$result_1;
    if (Kotlin.compareTo(x_1, y_1) <= 0) {
      min_sdesaw$result_1 = x_1;
    }
     else {
      min_sdesaw$result_1 = y_1;
    }
    var tmp$_3 = tmp$_0.set_y2kzbl$(tmp$_1, tmp$_2, min_sdesaw$result_1);
    var tmp$_4 = this.max;
    var x_2 = this.max.x;
    var y_2 = a_bounds.max.x;
    var max_sdesaw$result;
    if (Kotlin.compareTo(x_2, y_2) >= 0) {
      max_sdesaw$result = x_2;
    }
     else {
      max_sdesaw$result = y_2;
    }
    var tmp$_5 = max_sdesaw$result;
    var x_3 = this.max.y;
    var y_3 = a_bounds.max.y;
    var max_sdesaw$result_0;
    if (Kotlin.compareTo(x_3, y_3) >= 0) {
      max_sdesaw$result_0 = x_3;
    }
     else {
      max_sdesaw$result_0 = y_3;
    }
    var tmp$_6 = max_sdesaw$result_0;
    var x_4 = this.max.z;
    var y_4 = a_bounds.max.z;
    var max_sdesaw$result_1;
    if (Kotlin.compareTo(x_4, y_4) >= 0) {
      max_sdesaw$result_1 = x_4;
    }
     else {
      max_sdesaw$result_1 = y_4;
    }
    return tmp$.call(this, tmp$_3, tmp$_4.set_y2kzbl$(tmp$_5, tmp$_6, max_sdesaw$result_1));
  };
  Box.prototype.ext_mvlw0k$ = function (bounds, transform) {
    var v = Box$Companion_getInstance().tmpVec3_0;
    var min = bounds.min;
    var max = bounds.max;
    this._ext_0(v.set_y2kzbl$(min.x, min.y, min.z).mul_1ktw39$(transform));
    this._ext_0(v.set_y2kzbl$(min.x, max.y, min.z).mul_1ktw39$(transform));
    this._ext_0(v.set_y2kzbl$(max.x, min.y, min.z).mul_1ktw39$(transform));
    this._ext_0(v.set_y2kzbl$(max.x, max.y, min.z).mul_1ktw39$(transform));
    if (min.z !== max.z) {
      this._ext_0(v.set_y2kzbl$(min.x, min.y, max.z).mul_1ktw39$(transform));
      this._ext_0(v.set_y2kzbl$(min.x, max.y, max.z).mul_1ktw39$(transform));
      this._ext_0(v.set_y2kzbl$(max.x, min.y, max.z).mul_1ktw39$(transform));
      this._ext_0(v.set_y2kzbl$(max.x, max.y, max.z).mul_1ktw39$(transform));
    }
    this.update();
    return this;
  };
  Box.prototype.mul_1ktw39$ = function (transform) {
    var x0 = this.min.x;
    var y0 = this.min.y;
    var z0 = this.min.z;
    var x1 = this.max.x;
    var y1 = this.max.y;
    var z1 = this.max.z;
    this.inf();
    this._ext_0(transform.prj_9wm29k$(Box$Companion_getInstance().tmpVec3_0.set_y2kzbl$(x0, y0, z0)));
    this._ext_0(transform.prj_9wm29k$(Box$Companion_getInstance().tmpVec3_0.set_y2kzbl$(x1, y0, z0)));
    this._ext_0(transform.prj_9wm29k$(Box$Companion_getInstance().tmpVec3_0.set_y2kzbl$(x1, y1, z0)));
    this._ext_0(transform.prj_9wm29k$(Box$Companion_getInstance().tmpVec3_0.set_y2kzbl$(x0, y1, z0)));
    this._ext_0(transform.prj_9wm29k$(Box$Companion_getInstance().tmpVec3_0.set_y2kzbl$(x0, y0, z1)));
    this._ext_0(transform.prj_9wm29k$(Box$Companion_getInstance().tmpVec3_0.set_y2kzbl$(x1, y0, z1)));
    this._ext_0(transform.prj_9wm29k$(Box$Companion_getInstance().tmpVec3_0.set_y2kzbl$(x1, y1, z1)));
    this._ext_0(transform.prj_9wm29k$(Box$Companion_getInstance().tmpVec3_0.set_y2kzbl$(x0, y1, z1)));
    this.update();
    return this;
  };
  Box.prototype.intersects_ujzywt$ = function (b) {
    if (!this.isValid())
      return false;
    var value = this.center.x - b.center.x;
    var lX = value < 0.0 ? -value : value;
    var sumX = this.dimensions.x * 0.5 + b.dimensions.x * 0.5;
    var value_0 = this.center.y - b.center.y;
    var lY = value_0 < 0.0 ? -value_0 : value_0;
    var sumY = this.dimensions.y * 0.5 + b.dimensions.y * 0.5;
    var value_1 = this.center.z - b.center.z;
    var lZ = value_1 < 0.0 ? -value_1 : value_1;
    var sumZ = this.dimensions.z * 0.5 + b.dimensions.z * 0.5;
    return lX <= sumX && lY <= sumY && lZ <= sumZ;
  };
  Box.prototype.intersects_y8xsj$ = function (r, out) {
    if (out === void 0)
      out = null;
    if (this.dimensions.x <= 0.0 || this.dimensions.y <= 0.0)
      return false;
    if (this.dimensions.z === 0.0) {
      if (r.direction.z === 0.0)
        return false;
      var m = (this.min.z - r.origin.z) * r.directionInv.z;
      if (m < 0)
        return false;
      var x = r.origin.x + m * r.direction.x;
      var y = r.origin.y + m * r.direction.y;
      var intersects = this.min.x <= x && this.max.x >= x && this.min.y <= y && this.max.y >= y;
      if (out != null && intersects) {
        r.getEndPoint_4lg16t$(m, out);
      }
      return intersects;
    }
    var d = r.directionInv;
    var o = r.origin;
    var t1 = (this.min.x - o.x) * d.x;
    var t2 = (this.max.x - o.x) * d.x;
    var t3 = (this.min.y - o.y) * d.y;
    var t4 = (this.max.y - o.y) * d.y;
    var t5 = (this.min.z - o.z) * d.z;
    var t6 = (this.max.z - o.z) * d.z;
    var tmp$ = MathUtils_getInstance();
    var min_sdesaw$result;
    if (Kotlin.compareTo(t1, t2) <= 0) {
      min_sdesaw$result = t1;
    }
     else {
      min_sdesaw$result = t2;
    }
    var tmp$_0 = min_sdesaw$result;
    var min_sdesaw$result_0;
    if (Kotlin.compareTo(t3, t4) <= 0) {
      min_sdesaw$result_0 = t3;
    }
     else {
      min_sdesaw$result_0 = t4;
    }
    var tmp$_1 = min_sdesaw$result_0;
    var min_sdesaw$result_1;
    if (Kotlin.compareTo(t5, t6) <= 0) {
      min_sdesaw$result_1 = t5;
    }
     else {
      min_sdesaw$result_1 = t6;
    }
    var z = min_sdesaw$result_1;
    tmp$.max_sdesaw$;
    var max_sdesaw$result_2;
    if (Kotlin.compareTo(tmp$_0, tmp$_1) >= 0) {
      max_sdesaw$result_2 = tmp$_0;
    }
     else {
      max_sdesaw$result_2 = tmp$_1;
    }
    var x_0 = max_sdesaw$result_2;
    var inline$result;
    if (Kotlin.compareTo(x_0, z) >= 0) {
      inline$result = x_0;
    }
     else {
      inline$result = z;
    }
    var tMin = inline$result;
    var tmp$_2 = MathUtils_getInstance();
    var max_sdesaw$result;
    if (Kotlin.compareTo(t1, t2) >= 0) {
      max_sdesaw$result = t1;
    }
     else {
      max_sdesaw$result = t2;
    }
    var tmp$_3 = max_sdesaw$result;
    var max_sdesaw$result_0;
    if (Kotlin.compareTo(t3, t4) >= 0) {
      max_sdesaw$result_0 = t3;
    }
     else {
      max_sdesaw$result_0 = t4;
    }
    var tmp$_4 = max_sdesaw$result_0;
    var max_sdesaw$result_1;
    if (Kotlin.compareTo(t5, t6) >= 0) {
      max_sdesaw$result_1 = t5;
    }
     else {
      max_sdesaw$result_1 = t6;
    }
    var z_0 = max_sdesaw$result_1;
    tmp$_2.min_sdesaw$;
    var min_sdesaw$result_2;
    if (Kotlin.compareTo(tmp$_3, tmp$_4) <= 0) {
      min_sdesaw$result_2 = tmp$_3;
    }
     else {
      min_sdesaw$result_2 = tmp$_4;
    }
    var x_1 = min_sdesaw$result_2;
    var inline$result_0;
    if (Kotlin.compareTo(x_1, z_0) <= 0) {
      inline$result_0 = x_1;
    }
     else {
      inline$result_0 = z_0;
    }
    var tMax = inline$result_0;
    if (tMax < 0 || tMin > tMax) {
      return false;
    }
    if (out != null) {
      r.getEndPoint_4lg16t$(tMin, out);
    }
    return true;
  };
  Box.prototype.contains_ujzywt$ = function (b) {
    return !this.isValid() || (this.min.x <= b.min.x && this.min.y <= b.min.y && this.min.z <= b.min.z && this.max.x >= b.max.x && this.max.y >= b.max.y && this.max.z >= b.max.z);
  };
  Box.prototype.contains_9wm29k$ = function (v) {
    return this.contains_y2kzbl$(v.x, v.y, v.z);
  };
  Box.prototype.contains_y2kzbl$ = function (x, y, z) {
    return this.min.x <= x && this.max.x >= x && this.min.y <= y && this.max.y >= y && this.min.z <= z && this.max.z >= z;
  };
  Box.prototype.toString = function () {
    return '[' + this.min + '|' + this.max + ']';
  };
  Box.prototype.ext_y2kzbl$ = function (x, y, z) {
    var tmp$ = this.set_s18mjw$;
    var tmp$_0 = this.min;
    var x_0 = this.min.x;
    var min_sdesaw$result;
    if (Kotlin.compareTo(x_0, x) <= 0) {
      min_sdesaw$result = x_0;
    }
     else {
      min_sdesaw$result = x;
    }
    var tmp$_1 = min_sdesaw$result;
    var x_1 = this.min.y;
    var min_sdesaw$result_0;
    if (Kotlin.compareTo(x_1, y) <= 0) {
      min_sdesaw$result_0 = x_1;
    }
     else {
      min_sdesaw$result_0 = y;
    }
    var tmp$_2 = min_sdesaw$result_0;
    var x_2 = this.min.z;
    var min_sdesaw$result_1;
    if (Kotlin.compareTo(x_2, z) <= 0) {
      min_sdesaw$result_1 = x_2;
    }
     else {
      min_sdesaw$result_1 = z;
    }
    var tmp$_3 = tmp$_0.set_y2kzbl$(tmp$_1, tmp$_2, min_sdesaw$result_1);
    var tmp$_4 = this.max;
    var x_3 = this.max.x;
    var max_sdesaw$result;
    if (Kotlin.compareTo(x_3, x) >= 0) {
      max_sdesaw$result = x_3;
    }
     else {
      max_sdesaw$result = x;
    }
    var tmp$_5 = max_sdesaw$result;
    var x_4 = this.max.y;
    var max_sdesaw$result_0;
    if (Kotlin.compareTo(x_4, y) >= 0) {
      max_sdesaw$result_0 = x_4;
    }
     else {
      max_sdesaw$result_0 = y;
    }
    var tmp$_6 = max_sdesaw$result_0;
    var x_5 = this.max.z;
    var max_sdesaw$result_1;
    if (Kotlin.compareTo(x_5, z) >= 0) {
      max_sdesaw$result_1 = x_5;
    }
     else {
      max_sdesaw$result_1 = z;
    }
    return tmp$.call(this, tmp$_3, tmp$_4.set_y2kzbl$(tmp$_5, tmp$_6, max_sdesaw$result_1));
  };
  function Box$Companion() {
    Box$Companion_instance = this;
    this.tmpVec3_0 = new Vector3();
  }
  Box$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Box$Companion_instance = null;
  function Box$Companion_getInstance() {
    if (Box$Companion_instance === null) {
      new Box$Companion();
    }
    return Box$Companion_instance;
  }
  Box.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Box',
    interfaces: []
  };
  Box.prototype.component1 = function () {
    return this.min;
  };
  Box.prototype.component2 = function () {
    return this.max;
  };
  Box.prototype.copy_s18mjw$ = function (min, max) {
    return new Box(min === void 0 ? this.min : min, max === void 0 ? this.max : max);
  };
  Box.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.min) | 0;
    result = result * 31 + Kotlin.hashCode(this.max) | 0;
    return result;
  };
  Box.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.min, other.min) && Kotlin.equals(this.max, other.max)))));
  };
  function ColorTransformation() {
    ColorTransformation$Companion_getInstance();
    this._mat_0 = new Matrix4();
    this._offset_0 = new Color_0();
  }
  Object.defineProperty(ColorTransformation.prototype, 'transformValues', {
    get: function () {
      return this._mat_0.values;
    }
  });
  Object.defineProperty(ColorTransformation.prototype, 'offset', {
    get: function () {
      return this._offset_0;
    },
    set: function (value) {
      this._offset_0.set_1qghwi$(value);
    }
  });
  ColorTransformation.prototype.offset_7b5o5w$ = function (r, g, b, a) {
    if (r === void 0)
      r = 0.0;
    if (g === void 0)
      g = 0.0;
    if (b === void 0)
      b = 0.0;
    if (a === void 0)
      a = 0.0;
    this._offset_0.set_7b5o5w$(r, g, b, a);
    return this;
  };
  ColorTransformation.prototype.offset_1qghwi$ = function (value) {
    this._offset_0.set_1qghwi$(value);
    return this;
  };
  ColorTransformation.prototype.mul_1qghwi$ = function (value) {
    var values = this._mat_0.values;
    values[0] = values[0] * value.r;
    values[5] = values[5] * value.g;
    values[10] = values[10] * value.b;
    values[15] = values[15] * value.a;
    return this;
  };
  ColorTransformation.prototype.mul_9v6xac$ = function (value) {
    this._mat_0.mul_1ktw39$(value._mat_0);
    this._offset_0.add_1qghwi$(value._offset_0);
    return this;
  };
  ColorTransformation.prototype.tint_1qghwi$ = function (value) {
    return this.tint_7b5o5w$(value.r, value.g, value.b, value.a);
  };
  ColorTransformation.prototype.tint_7b5o5w$ = function (r, g, b, a) {
    if (r === void 0)
      r = 1.0;
    if (g === void 0)
      g = 1.0;
    if (b === void 0)
      b = 1.0;
    if (a === void 0)
      a = 1.0;
    var values = this._mat_0.values;
    values[0] = r;
    values[5] = g;
    values[10] = b;
    values[15] = a;
    return this;
  };
  ColorTransformation.prototype.idt = function () {
    this._mat_0.idt();
    this._offset_0.clear();
    return this;
  };
  ColorTransformation.prototype.set_9v6xac$ = function (other) {
    this._mat_0.set_1ktw39$(other._mat_0);
    this._offset_0.set_1qghwi$(other._offset_0);
    return this;
  };
  function ColorTransformation$Companion() {
    ColorTransformation$Companion_instance = this;
    this.IDENTITY = new ColorTransformation();
  }
  ColorTransformation$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ColorTransformation$Companion_instance = null;
  function ColorTransformation$Companion_getInstance() {
    if (ColorTransformation$Companion_instance === null) {
      new ColorTransformation$Companion();
    }
    return ColorTransformation$Companion_instance;
  }
  ColorTransformation.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ColorTransformation',
    interfaces: []
  };
  function sepia($receiver) {
    arrayCopy_0([0.769, 0.686, 0.534, 0.0, 0.393, 0.349, 0.272, 0.0, 0.189, 0.168, 0.131, 0.0, 0.0, 0.0, 0.0, 1.0], 0, $receiver.transformValues);
    $receiver.offset.clear();
    return $receiver;
  }
  function grayscale($receiver) {
    arrayCopy_0([0.33, 0.33, 0.33, 0.0, 0.59, 0.59, 0.59, 0.0, 0.11, 0.11, 0.11, 0.0, 0.0, 0.0, 0.0, 1.0], 0, $receiver.transformValues);
    $receiver.offset.clear();
    return $receiver;
  }
  function invert($receiver) {
    arrayCopy_0([-1.0, 0.0, 0.0, 0.0, 0.0, -1.0, 0.0, 0.0, 0.0, 0.0, -1.0, 0.0, 0.0, 0.0, 0.0, 1.0], 0, $receiver.transformValues);
    $receiver.offset.set_7b5o5w$(1.0, 1.0, 1.0, 0.0);
    return $receiver;
  }
  function Corners() {
    this.topLeft = new Vector2();
    this.topRight = new Vector2();
    this.bottomRight = new Vector2();
    this.bottomLeft = new Vector2();
  }
  Corners.prototype.copy = function () {
    return Corners_init(this.topLeft, this.topRight, this.bottomRight, this.bottomLeft);
  };
  Corners.prototype.set_mx4ult$ = function (all) {
    this.topLeft.set_dleff0$(all, all);
    this.topRight.set_dleff0$(all, all);
    this.bottomRight.set_dleff0$(all, all);
    this.bottomLeft.set_dleff0$(all, all);
    return this;
  };
  Corners.prototype.set_avuye$ = function (other) {
    this.topLeft.set_1fv330$(other.topLeft);
    this.topRight.set_1fv330$(other.topRight);
    this.bottomRight.set_1fv330$(other.bottomRight);
    this.bottomLeft.set_1fv330$(other.bottomLeft);
    return this;
  };
  Corners.prototype.set_7b5o5w$ = function (topLeft, topRight, bottomRight, bottomLeft) {
    if (topLeft === void 0)
      topLeft = 0.0;
    if (topRight === void 0)
      topRight = 0.0;
    if (bottomRight === void 0)
      bottomRight = 0.0;
    if (bottomLeft === void 0)
      bottomLeft = 0.0;
    this.topLeft.set_dleff0$(topLeft, topLeft);
    this.topRight.set_dleff0$(topRight, topRight);
    this.bottomRight.set_dleff0$(bottomRight, bottomRight);
    this.bottomLeft.set_dleff0$(bottomLeft, bottomLeft);
    return this;
  };
  Corners.prototype.set_n34qss$ = function (topLeft, topRight, bottomRight, bottomLeft) {
    this.topLeft.set_1fv330$(topLeft);
    this.topRight.set_1fv330$(topRight);
    this.bottomRight.set_1fv330$(bottomRight);
    this.bottomLeft.set_1fv330$(bottomLeft);
    return this;
  };
  Corners.prototype.inflate_ujzovp$ = function (pad) {
    this.topLeft.x = this.topLeft.x + pad.left;
    this.topLeft.y = this.topLeft.y + pad.top;
    this.topRight.x = this.topRight.x + pad.right;
    this.topRight.y = this.topRight.y + pad.top;
    this.bottomRight.x = this.bottomRight.x + pad.right;
    this.bottomRight.y = this.bottomRight.y + pad.bottom;
    this.bottomLeft.x = this.bottomLeft.x + pad.left;
    this.bottomLeft.y = this.bottomLeft.y + pad.bottom;
    return this;
  };
  Corners.prototype.deflate_ujzovp$ = function (pad) {
    this.topLeft.x = this.topLeft.x - pad.left;
    this.topLeft.y = this.topLeft.y - pad.top;
    this.topRight.x = this.topRight.x - pad.right;
    this.topRight.y = this.topRight.y - pad.top;
    this.bottomRight.x = this.bottomRight.x - pad.right;
    this.bottomRight.y = this.bottomRight.y - pad.bottom;
    this.bottomLeft.x = this.bottomLeft.x - pad.left;
    this.bottomLeft.y = this.bottomLeft.y - pad.bottom;
    return this;
  };
  Corners.prototype.clear = function () {
    this.set_mx4ult$(0.0);
  };
  Corners.prototype.isEmpty = function () {
    return this.topLeft.x <= 0.0 && this.topLeft.y <= 0.0 && this.topRight.x <= 0.0 && this.topRight.y <= 0.0 && this.bottomRight.x <= 0.0 && this.bottomRight.y <= 0.0 && this.bottomLeft.x <= 0.0 && this.bottomLeft.y <= 0.0;
  };
  Corners.prototype.equals = function (other) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (this === other)
      return true;
    if (!Kotlin.isType(other, Corners))
      return false;
    if (!((tmp$ = this.topLeft) != null ? tmp$.equals(other.topLeft) : null))
      return false;
    if (!((tmp$_0 = this.topRight) != null ? tmp$_0.equals(other.topRight) : null))
      return false;
    if (!((tmp$_1 = this.bottomRight) != null ? tmp$_1.equals(other.bottomRight) : null))
      return false;
    if (!((tmp$_2 = this.bottomLeft) != null ? tmp$_2.equals(other.bottomLeft) : null))
      return false;
    return true;
  };
  Corners.prototype.hashCode = function () {
    var result = this.topLeft.hashCode();
    result = (31 * result | 0) + this.topRight.hashCode() | 0;
    result = (31 * result | 0) + this.bottomRight.hashCode() | 0;
    result = (31 * result | 0) + this.bottomLeft.hashCode() | 0;
    return result;
  };
  Corners.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Corners',
    interfaces: [Clearable]
  };
  function Corners_init(topLeft, topRight, bottomRight, bottomLeft, $this) {
    if (topLeft === void 0)
      topLeft = new Vector2();
    if (topRight === void 0)
      topRight = new Vector2();
    if (bottomRight === void 0)
      bottomRight = new Vector2();
    if (bottomLeft === void 0)
      bottomLeft = new Vector2();
    $this = $this || Object.create(Corners.prototype);
    Corners.call($this);
    $this.set_n34qss$(topLeft, topRight, bottomRight, bottomLeft);
    return $this;
  }
  function Corners_init_0(all, $this) {
    $this = $this || Object.create(Corners.prototype);
    Corners.call($this);
    $this.set_mx4ult$(all);
    return $this;
  }
  function Corners_init_1(topLeft, topRight, bottomRight, bottomLeft, $this) {
    $this = $this || Object.create(Corners.prototype);
    Corners.call($this);
    $this.set_7b5o5w$(topLeft, topRight, bottomRight, bottomLeft);
    return $this;
  }
  function CornersSerializer() {
    CornersSerializer_instance = this;
  }
  CornersSerializer.prototype.read_gax0m7$ = function (reader) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var c = Corners_init((tmp$ = vector2(reader, 'topLeft')) != null ? tmp$ : Kotlin.throwNPE(), (tmp$_0 = vector2(reader, 'topRight')) != null ? tmp$_0 : Kotlin.throwNPE(), (tmp$_1 = vector2(reader, 'bottomRight')) != null ? tmp$_1 : Kotlin.throwNPE(), (tmp$_2 = vector2(reader, 'bottomLeft')) != null ? tmp$_2 : Kotlin.throwNPE());
    return c;
  };
  CornersSerializer.prototype.write_r4tkhj$ = function ($receiver, writer) {
    vector2_0(writer, 'topLeft', $receiver.topLeft);
    vector2_0(writer, 'topRight', $receiver.topRight);
    vector2_0(writer, 'bottomRight', $receiver.bottomRight);
    vector2_0(writer, 'bottomLeft', $receiver.bottomLeft);
  };
  CornersSerializer.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'CornersSerializer',
    interfaces: [From, To]
  };
  var CornersSerializer_instance = null;
  function CornersSerializer_getInstance() {
    if (CornersSerializer_instance === null) {
      new CornersSerializer();
    }
    return CornersSerializer_instance;
  }
  function Interpolation() {
  }
  Interpolation.prototype.apply_y2kzbl$ = function (start, end, alpha) {
    return start + (end - start) * this.apply_mx4ult$(alpha);
  };
  Interpolation.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'Interpolation',
    interfaces: []
  };
  function Constant(value) {
    this.value_0 = value;
  }
  Constant.prototype.apply_mx4ult$ = function (alpha) {
    return this.value_0;
  };
  Constant.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Constant',
    interfaces: [Interpolation]
  };
  function Pow(power) {
    this.power_0 = power;
  }
  Pow.prototype.apply_mx4ult$ = function (alpha) {
    if (alpha <= 0.5) {
      return Math.pow(alpha * 2.0, this.power_0) / 2.0;
    }
    return Math.pow((alpha - 1.0) * 2.0, this.power_0) / (this.power_0 % 2 === 0 ? -2.0 : 2.0) + 1.0;
  };
  Pow.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Pow',
    interfaces: [Interpolation]
  };
  function PowIn(power) {
    this.power_0 = power;
  }
  PowIn.prototype.apply_mx4ult$ = function (alpha) {
    return Math.pow(alpha, this.power_0);
  };
  PowIn.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'PowIn',
    interfaces: [Interpolation]
  };
  function PowOut(power) {
    this.power_0 = power;
  }
  PowOut.prototype.apply_mx4ult$ = function (alpha) {
    return Math.pow(alpha - 1.0, this.power_0) * (this.power_0 % 2 === 0 ? -1.0 : 1.0) + 1.0;
  };
  PowOut.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'PowOut',
    interfaces: [Interpolation]
  };
  function Exp(value, power) {
    this.value = value;
    this.power = power;
    this.min = Math.pow(this.value, -this.power);
    this.scale = 0;
    this.scale = 1.0 / (1.0 - this.min);
  }
  Exp.prototype.apply_mx4ult$ = function (alpha) {
    if (alpha <= 0.5) {
      return (Math.pow(this.value, this.power * (alpha * 2.0 - 1.0)) - this.min) * this.scale / 2.0;
    }
    return (2.0 - (Math.pow(this.value, -this.power * (alpha * 2.0 - 1.0)) - this.min) * this.scale) / 2.0;
  };
  Exp.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Exp',
    interfaces: [Interpolation]
  };
  function ExpIn(value, power) {
    Exp.call(this, value, power);
  }
  ExpIn.prototype.apply_mx4ult$ = function (alpha) {
    return (Math.pow(this.value, this.power * (alpha - 1.0)) - this.min) * this.scale;
  };
  ExpIn.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ExpIn',
    interfaces: [Exp]
  };
  function ExpOut(value, power) {
    Exp.call(this, value, power);
  }
  ExpOut.prototype.apply_mx4ult$ = function (alpha) {
    return 1.0 - (Math.pow(this.value, -this.power * alpha) - this.min) * this.scale;
  };
  ExpOut.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ExpOut',
    interfaces: [Exp]
  };
  function Elastic(value, power, bounces, scale) {
    this.value = value;
    this.power = power;
    this.scale = scale;
    this.bounces = 0;
    this.bounces = bounces * PI * (bounces % 2 === 0 ? 1.0 : -1.0);
  }
  Elastic.prototype.apply_mx4ult$ = function (alpha) {
    var a = alpha;
    if (a <= 0.5) {
      a *= 2.0;
      return Math.pow(this.value, this.power * (a - 1.0)) * MathUtils_getInstance().sin_mx4ult$(a * this.bounces) * this.scale / 2.0;
    }
    a = 1.0 - a;
    a *= 2.0;
    return 1.0 - Math.pow(this.value, this.power * (a - 1.0)) * MathUtils_getInstance().sin_mx4ult$(a * this.bounces) * this.scale / 2.0;
  };
  Elastic.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Elastic',
    interfaces: [Interpolation]
  };
  function ElasticIn(value, power, bounces, scale) {
    Elastic.call(this, value, power, bounces, scale);
  }
  ElasticIn.prototype.apply_mx4ult$ = function (alpha) {
    return Math.pow(this.value, this.power * (alpha - 1.0)) * MathUtils_getInstance().sin_mx4ult$(alpha * this.bounces) * this.scale;
  };
  ElasticIn.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ElasticIn',
    interfaces: [Elastic]
  };
  function ElasticOut(value, power, bounces, scale) {
    Elastic.call(this, value, power, bounces, scale);
  }
  ElasticOut.prototype.apply_mx4ult$ = function (alpha) {
    var a = alpha;
    a = 1.0 - a;
    return 1.0 - Math.pow(this.value, this.power * (a - 1.0)) * MathUtils_getInstance().sin_mx4ult$(a * this.bounces) * this.scale;
  };
  ElasticOut.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ElasticOut',
    interfaces: [Elastic]
  };
  function Swing(scale) {
    this.scale_aml77g$_0 = 0;
    this.scale_aml77g$_0 = scale * 2.0;
  }
  Swing.prototype.apply_mx4ult$ = function (alpha) {
    var a = alpha;
    if (a <= 0.5) {
      a *= 2.0;
      return a * a * ((this.scale_aml77g$_0 + 1.0) * a - this.scale_aml77g$_0) / 2.0;
    }
    a = a - 1;
    a *= 2.0;
    return a * a * ((this.scale_aml77g$_0 + 1.0) * a + this.scale_aml77g$_0) / 2.0 + 1.0;
  };
  Swing.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Swing',
    interfaces: [Interpolation]
  };
  function SwingOut(scale) {
    this.scale_i6ad8e$_0 = scale;
  }
  SwingOut.prototype.apply_mx4ult$ = function (alpha) {
    var a = alpha;
    a = a - 1;
    return a * a * ((this.scale_i6ad8e$_0 + 1.0) * a + this.scale_i6ad8e$_0) + 1.0;
  };
  SwingOut.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SwingOut',
    interfaces: [Interpolation]
  };
  function SwingIn(scale) {
    this.scale_fgawin$_0 = scale;
  }
  SwingIn.prototype.apply_mx4ult$ = function (alpha) {
    return alpha * alpha * ((this.scale_fgawin$_0 + 1.0) * alpha - this.scale_fgawin$_0);
  };
  SwingIn.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SwingIn',
    interfaces: [Interpolation]
  };
  function Linear() {
    Linear_instance = this;
  }
  Linear.prototype.apply_mx4ult$ = function (alpha) {
    return alpha;
  };
  Linear.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Linear',
    interfaces: [Interpolation]
  };
  var Linear_instance = null;
  function Linear_getInstance() {
    if (Linear_instance === null) {
      new Linear();
    }
    return Linear_instance;
  }
  function Fade() {
    Fade_instance = this;
  }
  Fade.prototype.apply_mx4ult$ = function (alpha) {
    var value = alpha * alpha * alpha * (alpha * (alpha * 6.0 - 15.0) + 10.0);
    var clamp_73gzaq$result;
    clamp_73gzaq$break: {
      if (Kotlin.compareTo(value, 0.0) <= 0) {
        clamp_73gzaq$result = 0.0;
        break clamp_73gzaq$break;
      }
      if (Kotlin.compareTo(value, 1.0) >= 0) {
        clamp_73gzaq$result = 1.0;
        break clamp_73gzaq$break;
      }
      clamp_73gzaq$result = value;
    }
    return clamp_73gzaq$result;
  };
  Fade.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Fade',
    interfaces: [Interpolation]
  };
  var Fade_instance = null;
  function Fade_getInstance() {
    if (Fade_instance === null) {
      new Fade();
    }
    return Fade_instance;
  }
  function Sine() {
    Sine_instance = this;
  }
  Sine.prototype.apply_mx4ult$ = function (alpha) {
    return (1 - MathUtils_getInstance().cos_mx4ult$(alpha * PI)) / 2;
  };
  Sine.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Sine',
    interfaces: [Interpolation]
  };
  var Sine_instance = null;
  function Sine_getInstance() {
    if (Sine_instance === null) {
      new Sine();
    }
    return Sine_instance;
  }
  function SineIn() {
    SineIn_instance = this;
  }
  SineIn.prototype.apply_mx4ult$ = function (alpha) {
    return 1 - MathUtils_getInstance().cos_mx4ult$(alpha * PI / 2);
  };
  SineIn.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'SineIn',
    interfaces: [Interpolation]
  };
  var SineIn_instance = null;
  function SineIn_getInstance() {
    if (SineIn_instance === null) {
      new SineIn();
    }
    return SineIn_instance;
  }
  function SineOut() {
    SineOut_instance = this;
  }
  SineOut.prototype.apply_mx4ult$ = function (alpha) {
    return MathUtils_getInstance().sin_mx4ult$(alpha * PI / 2);
  };
  SineOut.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'SineOut',
    interfaces: [Interpolation]
  };
  var SineOut_instance = null;
  function SineOut_getInstance() {
    if (SineOut_instance === null) {
      new SineOut();
    }
    return SineOut_instance;
  }
  function Circle() {
    Circle_instance = this;
  }
  Circle.prototype.apply_mx4ult$ = function (alpha) {
    var clamp_73gzaq$result;
    clamp_73gzaq$break: {
      if (Kotlin.compareTo(alpha, 0.0) <= 0) {
        clamp_73gzaq$result = 0.0;
        break clamp_73gzaq$break;
      }
      if (Kotlin.compareTo(alpha, 1.0) >= 0) {
        clamp_73gzaq$result = 1.0;
        break clamp_73gzaq$break;
      }
      clamp_73gzaq$result = alpha;
    }
    var a = clamp_73gzaq$result;
    if (a <= 0.5) {
      a *= 2.0;
      return (1 - Math.sqrt(1 - a * a)) / 2.0;
    }
    a = a - 1;
    a *= 2.0;
    return (Math.sqrt(1.0 - a * a) + 1.0) / 2.0;
  };
  Circle.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Circle',
    interfaces: [Interpolation]
  };
  var Circle_instance = null;
  function Circle_getInstance() {
    if (Circle_instance === null) {
      new Circle();
    }
    return Circle_instance;
  }
  function CircleIn() {
    CircleIn_instance = this;
  }
  CircleIn.prototype.apply_mx4ult$ = function (alpha) {
    var clamp_73gzaq$result;
    clamp_73gzaq$break: {
      if (Kotlin.compareTo(alpha, 0.0) <= 0) {
        clamp_73gzaq$result = 0.0;
        break clamp_73gzaq$break;
      }
      if (Kotlin.compareTo(alpha, 1.0) >= 0) {
        clamp_73gzaq$result = 1.0;
        break clamp_73gzaq$break;
      }
      clamp_73gzaq$result = alpha;
    }
    var a = clamp_73gzaq$result;
    return 1 - Math.sqrt(1.0 - a * a);
  };
  CircleIn.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'CircleIn',
    interfaces: [Interpolation]
  };
  var CircleIn_instance = null;
  function CircleIn_getInstance() {
    if (CircleIn_instance === null) {
      new CircleIn();
    }
    return CircleIn_instance;
  }
  function CircleOut() {
    CircleOut_instance = this;
  }
  CircleOut.prototype.apply_mx4ult$ = function (alpha) {
    var clamp_73gzaq$result;
    clamp_73gzaq$break: {
      if (Kotlin.compareTo(alpha, 0.0) <= 0) {
        clamp_73gzaq$result = 0.0;
        break clamp_73gzaq$break;
      }
      if (Kotlin.compareTo(alpha, 1.0) >= 0) {
        clamp_73gzaq$result = 1.0;
        break clamp_73gzaq$break;
      }
      clamp_73gzaq$result = alpha;
    }
    var a = clamp_73gzaq$result;
    a = a - 1;
    return Math.sqrt(1.0 - a * a);
  };
  CircleOut.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'CircleOut',
    interfaces: [Interpolation]
  };
  var CircleOut_instance = null;
  function CircleOut_getInstance() {
    if (CircleOut_instance === null) {
      new CircleOut();
    }
    return CircleOut_instance;
  }
  function Reverse(inner) {
    this.inner = inner;
  }
  Reverse.prototype.apply_mx4ult$ = function (alpha) {
    return 1.0 - this.inner.apply_mx4ult$(alpha);
  };
  Reverse.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Reverse',
    interfaces: [Interpolation]
  };
  function ToFro(inner, split_1) {
    if (split_1 === void 0)
      split_1 = 0.5;
    this.inner = inner;
    this.split = split_1;
  }
  ToFro.prototype.apply_mx4ult$ = function (alpha) {
    if (alpha < this.split) {
      return this.inner.apply_mx4ult$(alpha / this.split);
    }
     else {
      return this.inner.apply_mx4ult$(1.0 - (alpha - this.split) / (1.0 - this.split));
    }
  };
  ToFro.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ToFro',
    interfaces: [Interpolation]
  };
  function YoYo(inner, repetitions) {
    if (repetitions === void 0)
      repetitions = 1.0;
    this.inner = inner;
    this.repetitions = repetitions;
  }
  YoYo.prototype.apply_mx4ult$ = function (alpha) {
    var a = 2 * alpha * this.repetitions;
    var b = a | 0;
    if (b % 2 === 0) {
      return this.inner.apply_mx4ult$(a - b);
    }
     else {
      return this.inner.apply_mx4ult$(1.0 - (a - b));
    }
  };
  YoYo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'YoYo',
    interfaces: [Interpolation]
  };
  function Repeat(inner, repetitions) {
    if (repetitions === void 0)
      repetitions = 1.0;
    this.inner = inner;
    this.repetitions = repetitions;
  }
  Repeat.prototype.apply_mx4ult$ = function (alpha) {
    if (alpha >= 1.0)
      return this.inner.apply_mx4ult$(1.0);
    var a = alpha * this.repetitions;
    var b = a | 0;
    return this.inner.apply_mx4ult$(a - b);
  };
  Repeat.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Repeat',
    interfaces: [Interpolation]
  };
  function BasicBounce() {
    BasicBounce_instance = this;
  }
  BasicBounce.prototype.apply_mx4ult$ = function (alpha) {
    var a = alpha;
    if (a < 1.0 / 2.75) {
      return 7.5625 * a * a;
    }
     else if (a < 2.0 / 2.75) {
      a -= 1.5 / 2.75;
      return 7.5625 * a * a + 0.75;
    }
     else if (a < 2.5 / 2.75) {
      a -= 2.25 / 2.75;
      return 7.5625 * a * a + 0.9375;
    }
     else {
      a -= 2.625 / 2.75;
      return 7.5625 * a * a + 0.984375;
    }
  };
  BasicBounce.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'BasicBounce',
    interfaces: [Interpolation]
  };
  var BasicBounce_instance = null;
  function BasicBounce_getInstance() {
    if (BasicBounce_instance === null) {
      new BasicBounce();
    }
    return BasicBounce_instance;
  }
  function BounceInPlace(bounces, restitution) {
    if (bounces === void 0)
      bounces = 4;
    if (restitution === void 0)
      restitution = 0.2;
    this.bounces = bounces;
    this.restitution = restitution;
    this.decays_0 = null;
    this.intervals_0 = null;
    if (this.bounces < 1 || this.bounces > 20)
      throw new Exception('repetitions must be between 1 and 20');
    var r = {v: 1.0};
    this.decays_0 = Kotlin.newArrayF(this.bounces, BounceInPlace_init$lambda(r, this));
    this.intervals_0 = Kotlin.newArrayF(this.bounces, BounceInPlace_init$lambda_0(this));
    scl(this.intervals_0, 1.0 / sum(this.intervals_0));
  }
  BounceInPlace.prototype.apply_mx4ult$ = function (alpha) {
    var tmp$;
    if (alpha >= 1.0 || alpha <= 0.0)
      return 0.0;
    var currBounce = 0;
    var nextAlpha = 0.0;
    while (alpha >= nextAlpha && currBounce < this.bounces) {
      nextAlpha = nextAlpha + this.intervals_0[tmp$ = currBounce, currBounce = tmp$ + 1 | 0, tmp$];
    }
    var decay = this.decays_0[currBounce - 1 | 0];
    var interval = this.intervals_0[currBounce - 1 | 0];
    var a = (alpha - (nextAlpha - interval)) / interval;
    var b = 2 * a - 1.0;
    var v = decay * (1.0 - b * b);
    return v;
  };
  function BounceInPlace_init$lambda(closure$r, this$BounceInPlace) {
    return function (it) {
      var prev = closure$r.v;
      closure$r.v *= this$BounceInPlace.restitution;
      return prev;
    };
  }
  function BounceInPlace_init$lambda_0(this$BounceInPlace) {
    return function (it) {
      return Math.sqrt(this$BounceInPlace.decays_0[it]);
    };
  }
  BounceInPlace.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BounceInPlace',
    interfaces: [Interpolation]
  };
  function Clamp(inner, startAlpha, endAlpha) {
    Clamp$Companion_getInstance();
    if (startAlpha === void 0)
      startAlpha = 0.0;
    if (endAlpha === void 0)
      endAlpha = 1.0;
    this.inner = inner;
    this.startAlpha = startAlpha;
    this.endAlpha = endAlpha;
  }
  Clamp.prototype.apply_mx4ult$ = function (alpha) {
    if (alpha <= this.startAlpha)
      return 0.0;
    if (alpha >= this.endAlpha)
      return 1.0;
    return this.inner.apply_mx4ult$((alpha - this.startAlpha) / (this.endAlpha - this.startAlpha));
  };
  function Clamp$Companion() {
    Clamp$Companion_instance = this;
  }
  Clamp$Companion.prototype.delay_x4vmma$ = function (innerDuration, inner, delay) {
    if (delay <= 0.0)
      return inner;
    else
      return new Clamp(inner, delay / (innerDuration + delay));
  };
  Clamp$Companion.prototype.clamp_lq7yf$ = function (innerDuration, inner, delayStart, delayEnd) {
    if (delayStart <= 0.0 && delayEnd <= 0.0)
      return inner;
    var d = innerDuration + delayStart + delayEnd;
    return new Clamp(inner, delayStart / d, (d - delayEnd) / d);
  };
  Clamp$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Clamp$Companion_instance = null;
  function Clamp$Companion_getInstance() {
    if (Clamp$Companion_instance === null) {
      new Clamp$Companion();
    }
    return Clamp$Companion_instance;
  }
  Clamp.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Clamp',
    interfaces: [Interpolation]
  };
  function Easing() {
    Easing_instance = this;
    this.linear = Linear_getInstance();
    this.fade = Fade_getInstance();
    this.pow2 = new Pow(2);
    this.pow2In = new PowIn(2);
    this.pow2Out = new PowOut(2);
    this.pow3 = new Pow(3);
    this.pow3In = new PowIn(3);
    this.pow3Out = new PowOut(3);
    this.pow4 = new Pow(4);
    this.pow4In = new PowIn(4);
    this.pow4Out = new PowOut(4);
    this.pow5 = new Pow(5);
    this.pow5In = new PowIn(5);
    this.pow5Out = new PowOut(5);
    this.exp10 = new Exp(2.0, 10.0);
    this.exp10In = new ExpIn(2.0, 10.0);
    this.exp10Out = new ExpOut(2.0, 10.0);
    this.exp5 = new Exp(2.0, 5.0);
    this.exp5In = new ExpIn(2.0, 5.0);
    this.exp5Out = new ExpOut(2.0, 5.0);
    this.circle = Circle_getInstance();
    this.circleIn = CircleIn_getInstance();
    this.circleOut = CircleOut_getInstance();
    this.sine = Sine_getInstance();
    this.sineIn = SineIn_getInstance();
    this.sineOut = SineOut_getInstance();
    this.elastic = new Elastic(2.0, 10.0, 7, 1.0);
    this.elasticIn = new ElasticIn(2.0, 10.0, 7, 1.0);
    this.elasticOut = new ElasticOut(2.0, 10.0, 7, 1.0);
    this.swing = new Swing(1.5);
    this.swingIn = new SwingIn(2.0);
    this.swingOut = new SwingOut(2.0);
  }
  Easing.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Easing',
    interfaces: []
  };
  var Easing_instance = null;
  function Easing_getInstance() {
    if (Easing_instance === null) {
      new Easing();
    }
    return Easing_instance;
  }
  function Frustum(planes) {
    Frustum$Companion_getInstance();
    if (planes === void 0)
      planes = Kotlin.newArrayF(6, Frustum_init$lambda);
    this.planes = planes;
    this.planePoints = Kotlin.newArrayF(8, Frustum$planePoints$lambda);
    this.corners$delegate = lazy(Frustum$corners$lambda);
  }
  Frustum.prototype.update_1ktw39$ = function (inverseProjectionView) {
    var tmp$;
    tmp$ = 8 - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      inverseProjectionView.prj_9wm29k$(this.planePoints[i].set_1fv2cb$(Frustum$Companion_getInstance().clipSpacePlanePoints[i]));
    }
    this.planes[0].set_kv16yg$(this.planePoints[1], this.planePoints[0], this.planePoints[2]);
    this.planes[1].set_kv16yg$(this.planePoints[4], this.planePoints[5], this.planePoints[7]);
    this.planes[2].set_kv16yg$(this.planePoints[0], this.planePoints[4], this.planePoints[3]);
    this.planes[3].set_kv16yg$(this.planePoints[5], this.planePoints[1], this.planePoints[6]);
    this.planes[4].set_kv16yg$(this.planePoints[2], this.planePoints[3], this.planePoints[6]);
    this.planes[5].set_kv16yg$(this.planePoints[4], this.planePoints[0], this.planePoints[1]);
  };
  Frustum.prototype.pointInFrustum_9wm29k$ = function (point) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    tmp$ = get_indices(this.planes);
    tmp$_0 = tmp$.first;
    tmp$_1 = tmp$.last;
    tmp$_2 = tmp$.step;
    for (var i = tmp$_0; i <= tmp$_1; i += tmp$_2) {
      var result = this.planes[i].testPoint_9wm29k$(point);
      if (result === PlaneSide$BACK_getInstance())
        return false;
    }
    return true;
  };
  Frustum.prototype.pointInFrustum_y2kzbl$ = function (x, y, z) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    tmp$ = get_indices(this.planes);
    tmp$_0 = tmp$.first;
    tmp$_1 = tmp$.last;
    tmp$_2 = tmp$.step;
    for (var i = tmp$_0; i <= tmp$_1; i += tmp$_2) {
      var result = this.planes[i].testPoint_y2kzbl$(x, y, z);
      if (result === PlaneSide$BACK_getInstance())
        return false;
    }
    return true;
  };
  Frustum.prototype.sphereInFrustum_wscm5v$ = function (center, radius) {
    var tmp$;
    tmp$ = 6 - 1 | 0;
    for (var i = 0; i <= tmp$; i++)
      if (this.planes[i].normal.x * center.x + this.planes[i].normal.y * center.y + this.planes[i].normal.z * center.z < -radius - this.planes[i].d)
        return false;
    return true;
  };
  Frustum.prototype.sphereInFrustum_7b5o5w$ = function (x, y, z, radius) {
    var tmp$;
    tmp$ = 6 - 1 | 0;
    for (var i = 0; i <= tmp$; i++)
      if (this.planes[i].normal.x * x + this.planes[i].normal.y * y + this.planes[i].normal.z * z < -radius - this.planes[i].d)
        return false;
    return true;
  };
  Frustum.prototype.sphereInFrustumWithoutNearFar_wscm5v$ = function (center, radius) {
    var tmp$;
    tmp$ = 6 - 1 | 0;
    for (var i = 2; i <= tmp$; i++)
      if (this.planes[i].normal.x * center.x + this.planes[i].normal.y * center.y + this.planes[i].normal.z * center.z < -radius - this.planes[i].d)
        return false;
    return true;
  };
  Frustum.prototype.sphereInFrustumWithoutNearFar_7b5o5w$ = function (x, y, z, radius) {
    var tmp$;
    tmp$ = 6 - 1 | 0;
    for (var i = 2; i <= tmp$; i++)
      if (this.planes[i].normal.x * x + this.planes[i].normal.y * y + this.planes[i].normal.z * z < -radius - this.planes[i].d)
        return false;
    return true;
  };
  Object.defineProperty(Frustum.prototype, 'corners_0', {
    get: function () {
      var $receiver = this.corners$delegate;
      new Kotlin.PropertyMetadata('corners');
      return $receiver.value;
    }
  });
  Frustum.prototype.boundsInFrustum_ujzywt$ = function (bounds) {
    var tmp$, tmp$_0;
    var corners = bounds.getCorners_nlnyx2$(this.corners_0);
    var len = corners.length;
    tmp$ = get_lastIndex_0(this.planes);
    for (var i = 0; i <= tmp$; i++) {
      var out = 0;
      tmp$_0 = len - 1 | 0;
      for (var j = 0; j <= tmp$_0; j++)
        if (this.planes[i].testPoint_9wm29k$(corners[j]) === PlaneSide$BACK_getInstance()) {
          out = out + 1 | 0;
        }
      if (out === 8)
        return false;
    }
    return true;
  };
  Frustum.prototype.boundsInFrustum_s18mjw$ = function (center, dimensions) {
    return this.boundsInFrustum_w8lrqs$(center.x, center.y, center.z, dimensions.x / 2, dimensions.y / 2, dimensions.z / 2);
  };
  Frustum.prototype.boundsInFrustum_w8lrqs$ = function (x, y, z, halfWidth, halfHeight, halfDepth) {
    var tmp$;
    tmp$ = get_lastIndex_0(this.planes);
    for (var i = 0; i <= tmp$; i++) {
      var plane = this.planes[i];
      if (plane.testPoint_y2kzbl$(x + halfWidth, y + halfHeight, z + halfDepth) !== PlaneSide$BACK_getInstance())
        continue;
      if (plane.testPoint_y2kzbl$(x + halfWidth, y + halfHeight, z - halfDepth) !== PlaneSide$BACK_getInstance())
        continue;
      if (plane.testPoint_y2kzbl$(x + halfWidth, y - halfHeight, z + halfDepth) !== PlaneSide$BACK_getInstance())
        continue;
      if (plane.testPoint_y2kzbl$(x + halfWidth, y - halfHeight, z - halfDepth) !== PlaneSide$BACK_getInstance())
        continue;
      if (plane.testPoint_y2kzbl$(x - halfWidth, y + halfHeight, z + halfDepth) !== PlaneSide$BACK_getInstance())
        continue;
      if (plane.testPoint_y2kzbl$(x - halfWidth, y + halfHeight, z - halfDepth) !== PlaneSide$BACK_getInstance())
        continue;
      if (plane.testPoint_y2kzbl$(x - halfWidth, y - halfHeight, z + halfDepth) !== PlaneSide$BACK_getInstance())
        continue;
      if (plane.testPoint_y2kzbl$(x - halfWidth, y - halfHeight, z - halfDepth) !== PlaneSide$BACK_getInstance())
        continue;
      return false;
    }
    return true;
  };
  function Frustum$Companion() {
    Frustum$Companion_instance = this;
    this.clipSpacePlanePoints = [new Vector3(-1.0, -1.0, -1.0), new Vector3(1.0, -1.0, -1.0), new Vector3(1.0, 1.0, -1.0), new Vector3(-1.0, 1.0, -1.0), new Vector3(-1.0, -1.0, 1.0), new Vector3(1.0, -1.0, 1.0), new Vector3(1.0, 1.0, 1.0), new Vector3(-1.0, 1.0, 1.0)];
  }
  Frustum$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Frustum$Companion_instance = null;
  function Frustum$Companion_getInstance() {
    if (Frustum$Companion_instance === null) {
      new Frustum$Companion();
    }
    return Frustum$Companion_instance;
  }
  function Frustum_init$lambda(it) {
    return new Plane(new Vector3(), 0.0);
  }
  function Frustum$planePoints$lambda(it) {
    return new Vector3();
  }
  function Frustum$corners$lambda$lambda(it) {
    return new Vector3();
  }
  function Frustum$corners$lambda() {
    return Kotlin.newArrayF(8, Frustum$corners$lambda$lambda);
  }
  Frustum.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Frustum',
    interfaces: []
  };
  Frustum.prototype.component1 = function () {
    return this.planes;
  };
  Frustum.prototype.copy_i7gd8a$ = function (planes) {
    return new Frustum(planes === void 0 ? this.planes : planes);
  };
  Frustum.prototype.toString = function () {
    return 'Frustum(planes=' + Kotlin.toString(this.planes) + ')';
  };
  Frustum.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.planes) | 0;
    return result;
  };
  Frustum.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.planes, other.planes))));
  };
  function GeomUtils() {
    GeomUtils_instance = this;
  }
  GeomUtils.prototype.intersectPointTriangle_v89or8$ = function (pt, v1, v2, v3) {
    var b1 = this.sign_0(pt, v1, v2) < 0.0;
    var b2 = this.sign_0(pt, v2, v3) < 0.0;
    var b3 = this.sign_0(pt, v3, v1) < 0.0;
    return Kotlin.equals(b1, b2) && Kotlin.equals(b2, b3);
  };
  GeomUtils.prototype.sign_0 = function (v1, v2, v3) {
    return (v1.x - v3.x) * (v2.y - v3.y) - (v2.x - v3.x) * (v1.y - v3.y);
  };
  GeomUtils.prototype.orientation_0 = function (p, q, r) {
    var i = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
    if (i === 0.0)
      return 0;
    return i > 0 ? 1 : 2;
  };
  GeomUtils.prototype.getClosestPointToEdge_r2rsrr$ = function (x, y, aX, aY, bX, bY, out) {
    var aBx = bX - aX;
    var aBy = bY - aY;
    var aPx = aX - x;
    var aPy = aY - y;
    var abAb = aBx * aBx + aBy * aBy;
    var abAp = aPx * aBx + aPy * aBy;
    var value = abAp / abAb;
    var clamp_73gzaq$result;
    clamp_73gzaq$break: {
      if (Kotlin.compareTo(value, 0.0) <= 0) {
        clamp_73gzaq$result = 0.0;
        break clamp_73gzaq$break;
      }
      if (Kotlin.compareTo(value, 1.0) >= 0) {
        clamp_73gzaq$result = 1.0;
        break clamp_73gzaq$break;
      }
      clamp_73gzaq$result = value;
    }
    var t = clamp_73gzaq$result;
    out.set_dleff0$(aBx, aBy).scl_mx4ult$(t).add_dleff0$(x, y);
  };
  GeomUtils.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'GeomUtils',
    interfaces: []
  };
  var GeomUtils_instance = null;
  function GeomUtils_getInstance() {
    if (GeomUtils_instance === null) {
      new GeomUtils();
    }
    return GeomUtils_instance;
  }
  function IntRectangleRo() {
  }
  IntRectangleRo.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'IntRectangleRo',
    interfaces: []
  };
  function IntRectangle(x, y, width, height) {
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    if (width === void 0)
      width = 0;
    if (height === void 0)
      height = 0;
    this.x_v5l00e$_0 = x;
    this.y_v5l00e$_0 = y;
    this.width_v5l00e$_0 = width;
    this.height_v5l00e$_0 = height;
  }
  Object.defineProperty(IntRectangle.prototype, 'x', {
    get: function () {
      return this.x_v5l00e$_0;
    },
    set: function (x) {
      this.x_v5l00e$_0 = x;
    }
  });
  Object.defineProperty(IntRectangle.prototype, 'y', {
    get: function () {
      return this.y_v5l00e$_0;
    },
    set: function (y) {
      this.y_v5l00e$_0 = y;
    }
  });
  Object.defineProperty(IntRectangle.prototype, 'width', {
    get: function () {
      return this.width_v5l00e$_0;
    },
    set: function (width) {
      this.width_v5l00e$_0 = width;
    }
  });
  Object.defineProperty(IntRectangle.prototype, 'height', {
    get: function () {
      return this.height_v5l00e$_0;
    },
    set: function (height) {
      this.height_v5l00e$_0 = height;
    }
  });
  Object.defineProperty(IntRectangle.prototype, 'left', {
    get: function () {
      return this.x;
    }
  });
  Object.defineProperty(IntRectangle.prototype, 'top', {
    get: function () {
      return this.y;
    }
  });
  Object.defineProperty(IntRectangle.prototype, 'right', {
    get: function () {
      return this.x + this.width | 0;
    }
  });
  Object.defineProperty(IntRectangle.prototype, 'bottom', {
    get: function () {
      return this.y + this.height | 0;
    }
  });
  Object.defineProperty(IntRectangle.prototype, 'isEmpty', {
    get: function () {
      return this.width === 0 || this.height === 0;
    }
  });
  IntRectangle.prototype.set_tjonv8$ = function (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    return this;
  };
  IntRectangle.prototype.clear = function () {
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
  };
  IntRectangle.prototype.setPosition_vux9f0$ = function (x, y) {
    this.x = x;
    this.y = y;
    return this;
  };
  IntRectangle.prototype.setSize_vux9f0$ = function (width, height) {
    this.width = width;
    this.height = height;
    return this;
  };
  IntRectangle.prototype.intersects_vux9f0$ = function (x, y) {
    return this.x <= x && (this.x + this.width | 0) >= x && this.y <= y && (this.y + this.height | 0) >= y;
  };
  IntRectangle.prototype.contains_smhrz9$ = function (rectangle) {
    var xmin = rectangle.x;
    var xmax = xmin + rectangle.width | 0;
    var ymin = rectangle.y;
    var ymax = ymin + rectangle.height | 0;
    return xmin > this.x && xmin < (this.x + this.width | 0) && (xmax > this.x && xmax < (this.x + this.width | 0)) && (ymin > this.y && ymin < (this.y + this.height | 0) && (ymax > this.y && ymax < (this.y + this.height | 0)));
  };
  IntRectangle.prototype.intersects_smhrz9$ = function (r) {
    return this.intersects_tjonv8$(r.x, r.y, r.width, r.height);
  };
  IntRectangle.prototype.intersects_tjonv8$ = function (xVal, yVal, widthVal, heightVal) {
    return this.x < (xVal + widthVal | 0) && (this.x + this.width | 0) > xVal && this.y < (yVal + heightVal | 0) && (this.y + this.height | 0) > yVal;
  };
  IntRectangle.prototype.set_smhrz9$ = function (rect) {
    this.x = rect.x;
    this.y = rect.y;
    this.width = rect.width;
    this.height = rect.height;
    return this;
  };
  IntRectangle.prototype.canContain_vux9f0$ = function (width, height) {
    return this.width >= width && this.height >= height;
  };
  Object.defineProperty(IntRectangle.prototype, 'area', {
    get: function () {
      return Kotlin.imul(this.width, this.height);
    }
  });
  Object.defineProperty(IntRectangle.prototype, 'perimeter', {
    get: function () {
      return 2 * (this.width + this.height | 0) | 0;
    }
  });
  IntRectangle.prototype.inflate_tjonv8$ = function (left, top, right, bottom) {
    this.x = this.x - left | 0;
    this.width = this.width + (left + right) | 0;
    this.y = this.y - top | 0;
    this.height = this.height + (top + bottom) | 0;
  };
  IntRectangle.prototype.ext_vux9f0$ = function (x2, y2) {
    if (x2 > (this.x + this.width | 0))
      this.width = x2 - this.x | 0;
    if (x2 < this.x)
      this.x = x2;
    if (y2 > (this.y + this.height | 0))
      this.height = y2 - this.y | 0;
    if (y2 < this.y)
      this.y = y2;
  };
  IntRectangle.prototype.ext_smhrz9$ = function (rect) {
    var a = this.x;
    var b = rect.x;
    var minX = Math.min(a, b);
    var a_0 = this.x + this.width | 0;
    var b_0 = rect.x + rect.width | 0;
    var maxX = Math.max(a_0, b_0);
    this.x = minX;
    this.width = maxX - minX | 0;
    var a_1 = this.y;
    var b_1 = rect.y;
    var minY = Math.min(a_1, b_1);
    var a_2 = this.y + this.height | 0;
    var b_2 = rect.y + rect.height | 0;
    var maxY = Math.max(a_2, b_2);
    this.y = minY;
    this.height = maxY - minY | 0;
    return this;
  };
  IntRectangle.prototype.scl_za3lpa$ = function (scalar) {
    this.x = Kotlin.imul(this.x, scalar);
    this.y = Kotlin.imul(this.y, scalar);
    this.width = Kotlin.imul(this.width, scalar);
    this.height = Kotlin.imul(this.height, scalar);
  };
  IntRectangle.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'IntRectangle',
    interfaces: [Clearable, IntRectangleRo]
  };
  IntRectangle.prototype.component1 = function () {
    return this.x;
  };
  IntRectangle.prototype.component2 = function () {
    return this.y;
  };
  IntRectangle.prototype.component3 = function () {
    return this.width;
  };
  IntRectangle.prototype.component4 = function () {
    return this.height;
  };
  IntRectangle.prototype.copy_tjonv8$ = function (x, y, width, height) {
    return new IntRectangle(x === void 0 ? this.x : x, y === void 0 ? this.y : y, width === void 0 ? this.width : width, height === void 0 ? this.height : height);
  };
  IntRectangle.prototype.toString = function () {
    return 'IntRectangle(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', width=' + Kotlin.toString(this.width)) + (', height=' + Kotlin.toString(this.height)) + ')';
  };
  IntRectangle.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  IntRectangle.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
  };
  function IntRectangleSerializer() {
    IntRectangleSerializer_instance = this;
  }
  IntRectangleSerializer.prototype.write_r4tkhj$ = function ($receiver, writer) {
    int(writer, 'x', $receiver.x);
    int(writer, 'y', $receiver.y);
    int(writer, 'width', $receiver.width);
    int(writer, 'height', $receiver.height);
  };
  IntRectangleSerializer.prototype.read_gax0m7$ = function (reader) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    return new IntRectangle((tmp$ = int_0(reader, 'x')) != null ? tmp$ : Kotlin.throwNPE(), (tmp$_0 = int_0(reader, 'y')) != null ? tmp$_0 : Kotlin.throwNPE(), (tmp$_1 = int_0(reader, 'width')) != null ? tmp$_1 : Kotlin.throwNPE(), (tmp$_2 = int_0(reader, 'height')) != null ? tmp$_2 : Kotlin.throwNPE());
  };
  IntRectangleSerializer.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'IntRectangleSerializer',
    interfaces: [From, To]
  };
  var IntRectangleSerializer_instance = null;
  function IntRectangleSerializer_getInstance() {
    if (IntRectangleSerializer_instance === null) {
      new IntRectangleSerializer();
    }
    return IntRectangleSerializer_instance;
  }
  var PI;
  var PI2;
  var E;
  var TO_DEG;
  var TO_RAD;
  function TrigLookup() {
    TrigLookup_instance = this;
    this.SIN_BITS = 14;
    this.SIN_MASK = ~(-1 << this.SIN_BITS);
    this.SIN_COUNT = this.SIN_MASK + 1 | 0;
    this.radFull = PI * 2;
    this.radToIndex = this.SIN_COUNT / this.radFull;
    this.table = Kotlin.newArray(this.SIN_COUNT, 0);
    var tmp$;
    tmp$ = this.SIN_COUNT - 1 | 0;
    for (var i = 1; i <= tmp$; i++) {
      this.table[i] = Math.sin((i + 0.5) / this.SIN_COUNT * this.radFull);
    }
    for (var i_0 = 0; i_0 <= 16; i_0++) {
      var theta = i_0 * PI2 / 16;
      this.table[(theta * this.radToIndex | 0) & this.SIN_MASK] = Math.sin(theta);
    }
  }
  TrigLookup.prototype.sin_mx4ult$ = function (radians) {
    return this.table[(radians * this.radToIndex | 0) & this.SIN_MASK];
  };
  TrigLookup.prototype.cos_mx4ult$ = function (radians) {
    return this.table[((radians + PI / 2.0) * this.radToIndex | 0) & this.SIN_MASK];
  };
  TrigLookup.prototype.tan_mx4ult$ = function (radians) {
    return this.sin_mx4ult$(radians) / this.cos_mx4ult$(radians);
  };
  TrigLookup.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'TrigLookup',
    interfaces: []
  };
  var TrigLookup_instance = null;
  function TrigLookup_getInstance() {
    if (TrigLookup_instance === null) {
      new TrigLookup();
    }
    return TrigLookup_instance;
  }
  function Atan2() {
    Atan2_instance = this;
    this.ATAN2_BITS_0 = 7;
    this.ATAN2_BITS2_0 = this.ATAN2_BITS_0 << 1;
    this.ATAN2_MASK_0 = ~(-1 << this.ATAN2_BITS2_0);
    this.ATAN2_COUNT_0 = this.ATAN2_MASK_0 + 1 | 0;
    this.ATAN2_DIM_0 = Math.sqrt(this.ATAN2_COUNT_0) | 0;
    this.INV_ATAN2_DIM_MINUS_1_0 = 1.0 / (this.ATAN2_DIM_0 - 1.0);
    this.table_0 = Kotlin.newArray(this.ATAN2_COUNT_0, 0);
    var tmp$, tmp$_0;
    tmp$ = this.ATAN2_DIM_0 - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      tmp$_0 = this.ATAN2_DIM_0 - 1 | 0;
      for (var j = 0; j <= tmp$_0; j++) {
        var x0 = i / this.ATAN2_DIM_0;
        var y0 = j / this.ATAN2_DIM_0;
        this.table_0[Kotlin.imul(j, this.ATAN2_DIM_0) + i | 0] = Math.atan2(y0, x0);
      }
    }
  }
  Atan2.prototype.atan2_dleff0$ = function (y, x) {
    var yVar = y;
    var xVar = x;
    var add;
    var mul;
    if (xVar < 0) {
      if (yVar < 0) {
        yVar = -yVar;
        mul = 1.0;
      }
       else
        mul = -1.0;
      xVar = -xVar;
      add = -PI;
    }
     else {
      if (yVar < 0) {
        yVar = -yVar;
        mul = -1.0;
      }
       else
        mul = 1.0;
      add = 0.0;
    }
    var invDiv = 1 / ((xVar < yVar ? yVar : xVar) * this.INV_ATAN2_DIM_MINUS_1_0);
    var xi = xVar * invDiv | 0;
    var yi = yVar * invDiv | 0;
    return (Atan2_getInstance().table_0[Kotlin.imul(yi, this.ATAN2_DIM_0) + xi | 0] + add) * mul;
  };
  Atan2.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Atan2',
    interfaces: []
  };
  var Atan2_instance = null;
  function Atan2_getInstance() {
    if (Atan2_instance === null) {
      new Atan2();
    }
    return Atan2_instance;
  }
  function MathUtils() {
    MathUtils_instance = this;
    this.nanoToSec = 1 / 1.0E9;
    this.FLOAT_ROUNDING_ERROR = 1.0E-6;
    this.radDeg = 180.0 / PI;
    this.degRad = PI / 180.0;
    this._rng = new Random();
  }
  MathUtils.prototype.sin_mx4ult$ = function (radians) {
    return TrigLookup_getInstance().sin_mx4ult$(radians);
  };
  MathUtils.prototype.cos_mx4ult$ = function (radians) {
    return TrigLookup_getInstance().cos_mx4ult$(radians);
  };
  MathUtils.prototype.tan_mx4ult$ = function (radians) {
    return TrigLookup_getInstance().tan_mx4ult$(radians);
  };
  MathUtils.prototype.atan2_dleff0$ = function (y, x) {
    return Atan2_getInstance().atan2_dleff0$(y, x);
  };
  MathUtils.prototype.random_za3lpa$ = function (range) {
    return this._rng.nextInt_za3lpa$(range + 1 | 0);
  };
  MathUtils.prototype.random_vux9f0$ = function (start, end) {
    return start + this._rng.nextInt_za3lpa$(end - start + 1 | 0) | 0;
  };
  MathUtils.prototype.random_s8cxhz$ = function (range) {
    return Kotlin.Long.fromNumber(this._rng.nextDouble() * range.toNumber());
  };
  MathUtils.prototype.random_3pjtqy$ = function (start, end) {
    return start.add(Kotlin.Long.fromNumber(this._rng.nextDouble() * end.subtract(start).toNumber()));
  };
  MathUtils.prototype.randomBoolean = function () {
    return this._rng.nextBoolean();
  };
  MathUtils.prototype.randomBoolean_mx4ult$ = function (chance) {
    return this.random() < chance;
  };
  MathUtils.prototype.random = function () {
    return this._rng.nextFloat();
  };
  MathUtils.prototype.random_mx4ult$ = function (range) {
    return this._rng.nextFloat() * range;
  };
  MathUtils.prototype.random_dleff0$ = function (start, end) {
    return start + this._rng.nextFloat() * (end - start);
  };
  MathUtils.prototype.randomSign = function () {
    return 1 | this._rng.nextInt() >> 31;
  };
  MathUtils.prototype.randomTriangular = function () {
    return this._rng.nextFloat() - this._rng.nextFloat();
  };
  MathUtils.prototype.randomTriangular_mx4ult$ = function (max) {
    return (this._rng.nextFloat() - this._rng.nextFloat()) * max;
  };
  MathUtils.prototype.randomTriangular_dleff0$ = function (min, max) {
    return this.randomTriangular_y2kzbl$(min, max, (max - min) * 0.5);
  };
  MathUtils.prototype.randomTriangular_y2kzbl$ = function (min, max, mode) {
    var u = this._rng.nextFloat();
    var d = max - min;
    if (u <= (mode - min) / d) {
      return min + Math.sqrt(u * d * (mode - min));
    }
    return max - Math.sqrt((1 - u) * d * (max - mode));
  };
  MathUtils.prototype.nextPowerOfTwo_za3lpa$ = function (value) {
    var v = value;
    if (v === 0)
      return 1;
    v = v - 1 | 0;
    v = v | v >> 1;
    v = v | v >> 2;
    v = v | v >> 4;
    v = v | v >> 8;
    v = v | v >> 16;
    return v + 1 | 0;
  };
  MathUtils.prototype.isPowerOfTwo_za3lpa$ = function (value) {
    return value !== 0 && (value & value - 1) === 0;
  };
  MathUtils.prototype.lerp_y2kzbl$ = function (fromValue, toValue, progress) {
    return fromValue + (toValue - fromValue) * progress;
  };
  MathUtils.prototype.abs_mx4ult$ = Kotlin.defineInlineFunction('AcornUtils.com.acornui.math.MathUtils.abs_mx4ult$', function (value) {
    return value < 0.0 ? -value : value;
  });
  MathUtils.prototype.abs_14dthe$ = Kotlin.defineInlineFunction('AcornUtils.com.acornui.math.MathUtils.abs_14dthe$', function (value) {
    return value < 0.0 ? -value : value;
  });
  MathUtils.prototype.abs_za3lpa$ = Kotlin.defineInlineFunction('AcornUtils.com.acornui.math.MathUtils.abs_za3lpa$', function (value) {
    return value < 0.0 ? -value : value;
  });
  MathUtils.prototype.abs_s8cxhz$ = Kotlin.defineInlineFunction('AcornUtils.com.acornui.math.MathUtils.abs_s8cxhz$', function (value) {
    return value.toNumber() < 0.0 ? value.unaryMinus() : value;
  });
  MathUtils.prototype.isZero_dleff0$ = function (value, tolerance) {
    if (tolerance === void 0)
      tolerance = this.FLOAT_ROUNDING_ERROR;
    return (value < 0.0 ? -value : value) <= tolerance;
  };
  MathUtils.prototype.isZero_vcfc77$ = function (value, tolerance) {
    if (tolerance === void 0)
      tolerance = this.FLOAT_ROUNDING_ERROR;
    return (value < 0.0 ? -value : value) <= tolerance;
  };
  MathUtils.prototype.isEqual_dleff0$ = function (a, b) {
    var value = a - b;
    return (value < 0.0 ? -value : value) <= this.FLOAT_ROUNDING_ERROR;
  };
  MathUtils.prototype.isEqual_y2kzbl$ = function (a, b, tolerance) {
    var value = a - b;
    return (value < 0.0 ? -value : value) <= tolerance;
  };
  MathUtils.prototype.log_dleff0$ = function (x, base) {
    return Math.log(x) / Math.log(base);
  };
  MathUtils.prototype.log2_mx4ult$ = function (x) {
    return this.log_dleff0$(x, 2.0);
  };
  MathUtils.prototype.clamp_73gzaq$ = Kotlin.defineInlineFunction('AcornUtils.com.acornui.math.MathUtils.clamp_73gzaq$', function (value, min, max) {
    if (Kotlin.compareTo(value, min) <= 0)
      return min;
    if (Kotlin.compareTo(value, max) >= 0)
      return max;
    return value;
  });
  MathUtils.prototype.min_sdesaw$ = Kotlin.defineInlineFunction('AcornUtils.com.acornui.math.MathUtils.min_sdesaw$', function (x, y) {
    if (Kotlin.compareTo(x, y) <= 0)
      return x;
    else
      return y;
  });
  MathUtils.prototype.min_73gzaq$ = Kotlin.defineInlineFunction('AcornUtils.com.acornui.math.MathUtils.min_73gzaq$', function (x, y, z) {
    this.min_sdesaw$;
    var min_sdesaw$result;
    if (Kotlin.compareTo(x, y) <= 0) {
      min_sdesaw$result = x;
    }
     else {
      min_sdesaw$result = y;
    }
    var x_0 = min_sdesaw$result;
    var inline$result;
    if (Kotlin.compareTo(x_0, z) <= 0) {
      inline$result = x_0;
    }
     else {
      inline$result = z;
    }
    return inline$result;
  });
  MathUtils.prototype.min_3v16i4$ = Kotlin.defineInlineFunction('AcornUtils.com.acornui.math.MathUtils.min_3v16i4$', function (w, x, y, z) {
    this.min_sdesaw$;
    this.min_sdesaw$;
    var min_sdesaw$result;
    if (Kotlin.compareTo(w, x) <= 0) {
      min_sdesaw$result = w;
    }
     else {
      min_sdesaw$result = x;
    }
    var x_0 = min_sdesaw$result;
    var inline$result;
    if (Kotlin.compareTo(x_0, y) <= 0) {
      inline$result = x_0;
    }
     else {
      inline$result = y;
    }
    var x_1 = inline$result;
    var inline$result_0;
    if (Kotlin.compareTo(x_1, z) <= 0) {
      inline$result_0 = x_1;
    }
     else {
      inline$result_0 = z;
    }
    return inline$result_0;
  });
  MathUtils.prototype.max_sdesaw$ = Kotlin.defineInlineFunction('AcornUtils.com.acornui.math.MathUtils.max_sdesaw$', function (x, y) {
    if (Kotlin.compareTo(x, y) >= 0)
      return x;
    else
      return y;
  });
  MathUtils.prototype.max_73gzaq$ = Kotlin.defineInlineFunction('AcornUtils.com.acornui.math.MathUtils.max_73gzaq$', function (x, y, z) {
    this.max_sdesaw$;
    var max_sdesaw$result;
    if (Kotlin.compareTo(x, y) >= 0) {
      max_sdesaw$result = x;
    }
     else {
      max_sdesaw$result = y;
    }
    var x_0 = max_sdesaw$result;
    var inline$result;
    if (Kotlin.compareTo(x_0, z) >= 0) {
      inline$result = x_0;
    }
     else {
      inline$result = z;
    }
    return inline$result;
  });
  MathUtils.prototype.max_3v16i4$ = Kotlin.defineInlineFunction('AcornUtils.com.acornui.math.MathUtils.max_3v16i4$', function (w, x, y, z) {
    this.max_sdesaw$;
    this.max_sdesaw$;
    var max_sdesaw$result;
    if (Kotlin.compareTo(w, x) >= 0) {
      max_sdesaw$result = w;
    }
     else {
      max_sdesaw$result = x;
    }
    var x_0 = max_sdesaw$result;
    var inline$result;
    if (Kotlin.compareTo(x_0, y) >= 0) {
      inline$result = x_0;
    }
     else {
      inline$result = y;
    }
    var x_1 = inline$result;
    var inline$result_0;
    if (Kotlin.compareTo(x_1, z) >= 0) {
      inline$result_0 = x_1;
    }
     else {
      inline$result_0 = z;
    }
    return inline$result_0;
  });
  MathUtils.prototype.ceil_mx4ult$ = Kotlin.defineInlineFunction('AcornUtils.com.acornui.math.MathUtils.ceil_mx4ult$', function (v) {
    return Math.ceil(v);
  });
  MathUtils.prototype.floor_mx4ult$ = Kotlin.defineInlineFunction('AcornUtils.com.acornui.math.MathUtils.floor_mx4ult$', function (v) {
    return Math.floor(v);
  });
  MathUtils.prototype.round_mx4ult$ = Kotlin.defineInlineFunction('AcornUtils.com.acornui.math.MathUtils.round_mx4ult$', function (v) {
    return Math.round(v);
  });
  MathUtils.prototype.sqrt_mx4ult$ = Kotlin.defineInlineFunction('AcornUtils.com.acornui.math.MathUtils.sqrt_mx4ult$', function (v) {
    return Math.sqrt(v);
  });
  MathUtils.prototype.pow_dleff0$ = Kotlin.defineInlineFunction('AcornUtils.com.acornui.math.MathUtils.pow_dleff0$', function (a, b) {
    return Math.pow(a, b);
  });
  MathUtils.prototype.acos_mx4ult$ = Kotlin.defineInlineFunction('AcornUtils.com.acornui.math.MathUtils.acos_mx4ult$', function (v) {
    return Math.acos(v);
  });
  MathUtils.prototype.asin_mx4ult$ = Kotlin.defineInlineFunction('AcornUtils.com.acornui.math.MathUtils.asin_mx4ult$', function (v) {
    return Math.asin(v);
  });
  MathUtils.prototype.signum_mx4ult$ = function (v) {
    if (v > 0)
      return 1.0;
    if (v < 0)
      return -1.0;
    if (isNaN_0(v))
      return FloatCompanionObject.NaN;
    return 0.0;
  };
  MathUtils.prototype.mod_dleff0$ = function (a, n) {
    return a < 0.0 ? (a % n + n) % n : a % n;
  };
  MathUtils.prototype.angleDiff_dleff0$ = function (a, b) {
    var diff = b - a;
    if (diff < -PI)
      diff = PI2 - diff;
    if (diff > PI2)
      diff %= PI2;
    if (diff >= PI)
      diff -= PI2;
    return diff;
  };
  MathUtils.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'MathUtils',
    interfaces: []
  };
  var MathUtils_instance = null;
  function MathUtils_getInstance() {
    if (MathUtils_instance === null) {
      new MathUtils();
    }
    return MathUtils_instance;
  }
  var ceil = Kotlin.defineInlineFunction('AcornUtils.com.acornui.math.ceil_81szk$', function ($receiver) {
    return Math.ceil($receiver);
  });
  function Matrix3(values) {
    Matrix3$Companion_getInstance();
    if (values === void 0)
      values = [1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0];
    this.values = values;
    this.tmp_0 = Kotlin.newArray(9, 0);
  }
  Matrix3.prototype.idt = function () {
    this.values[Matrix3$Companion_getInstance().M00] = 1.0;
    this.values[Matrix3$Companion_getInstance().M10] = 0.0;
    this.values[Matrix3$Companion_getInstance().M20] = 0.0;
    this.values[Matrix3$Companion_getInstance().M01] = 0.0;
    this.values[Matrix3$Companion_getInstance().M11] = 1.0;
    this.values[Matrix3$Companion_getInstance().M21] = 0.0;
    this.values[Matrix3$Companion_getInstance().M02] = 0.0;
    this.values[Matrix3$Companion_getInstance().M12] = 0.0;
    this.values[Matrix3$Companion_getInstance().M22] = 1.0;
    return this;
  };
  Matrix3.prototype.mul_1ktw3a$ = function (matrix) {
    Matrix3$Companion_getInstance().mul_0(this.values, matrix.values);
    return this;
  };
  Matrix3.prototype.times_1ktw3a$ = function (matrix) {
    return this.copy_q3cr5i$().mul_1ktw3a$(matrix);
  };
  Matrix3.prototype.mulLeft_1ktw3a$ = function (m) {
    var v00 = m.values[Matrix3$Companion_getInstance().M00] * this.values[Matrix3$Companion_getInstance().M00] + m.values[Matrix3$Companion_getInstance().M01] * this.values[Matrix3$Companion_getInstance().M10] + m.values[Matrix3$Companion_getInstance().M02] * this.values[Matrix3$Companion_getInstance().M20];
    var v01 = m.values[Matrix3$Companion_getInstance().M00] * this.values[Matrix3$Companion_getInstance().M01] + m.values[Matrix3$Companion_getInstance().M01] * this.values[Matrix3$Companion_getInstance().M11] + m.values[Matrix3$Companion_getInstance().M02] * this.values[Matrix3$Companion_getInstance().M21];
    var v02 = m.values[Matrix3$Companion_getInstance().M00] * this.values[Matrix3$Companion_getInstance().M02] + m.values[Matrix3$Companion_getInstance().M01] * this.values[Matrix3$Companion_getInstance().M12] + m.values[Matrix3$Companion_getInstance().M02] * this.values[Matrix3$Companion_getInstance().M22];
    var v10 = m.values[Matrix3$Companion_getInstance().M10] * this.values[Matrix3$Companion_getInstance().M00] + m.values[Matrix3$Companion_getInstance().M11] * this.values[Matrix3$Companion_getInstance().M10] + m.values[Matrix3$Companion_getInstance().M12] * this.values[Matrix3$Companion_getInstance().M20];
    var v11 = m.values[Matrix3$Companion_getInstance().M10] * this.values[Matrix3$Companion_getInstance().M01] + m.values[Matrix3$Companion_getInstance().M11] * this.values[Matrix3$Companion_getInstance().M11] + m.values[Matrix3$Companion_getInstance().M12] * this.values[Matrix3$Companion_getInstance().M21];
    var v12 = m.values[Matrix3$Companion_getInstance().M10] * this.values[Matrix3$Companion_getInstance().M02] + m.values[Matrix3$Companion_getInstance().M11] * this.values[Matrix3$Companion_getInstance().M12] + m.values[Matrix3$Companion_getInstance().M12] * this.values[Matrix3$Companion_getInstance().M22];
    var v20 = m.values[Matrix3$Companion_getInstance().M20] * this.values[Matrix3$Companion_getInstance().M00] + m.values[Matrix3$Companion_getInstance().M21] * this.values[Matrix3$Companion_getInstance().M10] + m.values[Matrix3$Companion_getInstance().M22] * this.values[Matrix3$Companion_getInstance().M20];
    var v21 = m.values[Matrix3$Companion_getInstance().M20] * this.values[Matrix3$Companion_getInstance().M01] + m.values[Matrix3$Companion_getInstance().M21] * this.values[Matrix3$Companion_getInstance().M11] + m.values[Matrix3$Companion_getInstance().M22] * this.values[Matrix3$Companion_getInstance().M21];
    var v22 = m.values[Matrix3$Companion_getInstance().M20] * this.values[Matrix3$Companion_getInstance().M02] + m.values[Matrix3$Companion_getInstance().M21] * this.values[Matrix3$Companion_getInstance().M12] + m.values[Matrix3$Companion_getInstance().M22] * this.values[Matrix3$Companion_getInstance().M22];
    this.values[Matrix3$Companion_getInstance().M00] = v00;
    this.values[Matrix3$Companion_getInstance().M10] = v10;
    this.values[Matrix3$Companion_getInstance().M20] = v20;
    this.values[Matrix3$Companion_getInstance().M01] = v01;
    this.values[Matrix3$Companion_getInstance().M11] = v11;
    this.values[Matrix3$Companion_getInstance().M21] = v21;
    this.values[Matrix3$Companion_getInstance().M02] = v02;
    this.values[Matrix3$Companion_getInstance().M12] = v12;
    this.values[Matrix3$Companion_getInstance().M22] = v22;
    return this;
  };
  Matrix3.prototype.prj_9wm29l$ = function (vec) {
    var mat = this.values;
    var x = vec.x * mat[0] + vec.y * mat[3] + mat[6];
    var y = vec.x * mat[1] + vec.y * mat[4] + mat[7];
    vec.x = x;
    vec.y = y;
    return vec;
  };
  Matrix3.prototype.toString = function () {
    return '[' + Kotlin.toString(this.values[0]) + '|' + Kotlin.toString(this.values[3]) + '|' + Kotlin.toString(this.values[6]) + ']\n' + '[' + Kotlin.toString(this.values[1]) + '|' + Kotlin.toString(this.values[4]) + '|' + Kotlin.toString(this.values[7]) + ']\n' + '[' + Kotlin.toString(this.values[2]) + '|' + Kotlin.toString(this.values[5]) + '|' + Kotlin.toString(this.values[8]) + ']';
  };
  Matrix3.prototype.det = function () {
    return this.values[Matrix3$Companion_getInstance().M00] * this.values[Matrix3$Companion_getInstance().M11] * this.values[Matrix3$Companion_getInstance().M22] + this.values[Matrix3$Companion_getInstance().M01] * this.values[Matrix3$Companion_getInstance().M12] * this.values[Matrix3$Companion_getInstance().M20] + this.values[Matrix3$Companion_getInstance().M02] * this.values[Matrix3$Companion_getInstance().M10] * this.values[Matrix3$Companion_getInstance().M21] - this.values[Matrix3$Companion_getInstance().M00] * this.values[Matrix3$Companion_getInstance().M12] * this.values[Matrix3$Companion_getInstance().M21] - this.values[Matrix3$Companion_getInstance().M01] * this.values[Matrix3$Companion_getInstance().M10] * this.values[Matrix3$Companion_getInstance().M22] - this.values[Matrix3$Companion_getInstance().M02] * this.values[Matrix3$Companion_getInstance().M11] * this.values[Matrix3$Companion_getInstance().M20];
  };
  Matrix3.prototype.inv = function () {
    var det = this.det();
    if (det === 0.0)
      throw new Exception("Can't invert a singular matrix");
    var inv_det = 1.0 / det;
    this.tmp_0[Matrix3$Companion_getInstance().M00] = this.values[Matrix3$Companion_getInstance().M11] * this.values[Matrix3$Companion_getInstance().M22] - this.values[Matrix3$Companion_getInstance().M21] * this.values[Matrix3$Companion_getInstance().M12];
    this.tmp_0[Matrix3$Companion_getInstance().M10] = this.values[Matrix3$Companion_getInstance().M20] * this.values[Matrix3$Companion_getInstance().M12] - this.values[Matrix3$Companion_getInstance().M10] * this.values[Matrix3$Companion_getInstance().M22];
    this.tmp_0[Matrix3$Companion_getInstance().M20] = this.values[Matrix3$Companion_getInstance().M10] * this.values[Matrix3$Companion_getInstance().M21] - this.values[Matrix3$Companion_getInstance().M20] * this.values[Matrix3$Companion_getInstance().M11];
    this.tmp_0[Matrix3$Companion_getInstance().M01] = this.values[Matrix3$Companion_getInstance().M21] * this.values[Matrix3$Companion_getInstance().M02] - this.values[Matrix3$Companion_getInstance().M01] * this.values[Matrix3$Companion_getInstance().M22];
    this.tmp_0[Matrix3$Companion_getInstance().M11] = this.values[Matrix3$Companion_getInstance().M00] * this.values[Matrix3$Companion_getInstance().M22] - this.values[Matrix3$Companion_getInstance().M20] * this.values[Matrix3$Companion_getInstance().M02];
    this.tmp_0[Matrix3$Companion_getInstance().M21] = this.values[Matrix3$Companion_getInstance().M20] * this.values[Matrix3$Companion_getInstance().M01] - this.values[Matrix3$Companion_getInstance().M00] * this.values[Matrix3$Companion_getInstance().M21];
    this.tmp_0[Matrix3$Companion_getInstance().M02] = this.values[Matrix3$Companion_getInstance().M01] * this.values[Matrix3$Companion_getInstance().M12] - this.values[Matrix3$Companion_getInstance().M11] * this.values[Matrix3$Companion_getInstance().M02];
    this.tmp_0[Matrix3$Companion_getInstance().M12] = this.values[Matrix3$Companion_getInstance().M10] * this.values[Matrix3$Companion_getInstance().M02] - this.values[Matrix3$Companion_getInstance().M00] * this.values[Matrix3$Companion_getInstance().M12];
    this.tmp_0[Matrix3$Companion_getInstance().M22] = this.values[Matrix3$Companion_getInstance().M00] * this.values[Matrix3$Companion_getInstance().M11] - this.values[Matrix3$Companion_getInstance().M10] * this.values[Matrix3$Companion_getInstance().M01];
    this.values[Matrix3$Companion_getInstance().M00] = inv_det * this.tmp_0[Matrix3$Companion_getInstance().M00];
    this.values[Matrix3$Companion_getInstance().M10] = inv_det * this.tmp_0[Matrix3$Companion_getInstance().M10];
    this.values[Matrix3$Companion_getInstance().M20] = inv_det * this.tmp_0[Matrix3$Companion_getInstance().M20];
    this.values[Matrix3$Companion_getInstance().M01] = inv_det * this.tmp_0[Matrix3$Companion_getInstance().M01];
    this.values[Matrix3$Companion_getInstance().M11] = inv_det * this.tmp_0[Matrix3$Companion_getInstance().M11];
    this.values[Matrix3$Companion_getInstance().M21] = inv_det * this.tmp_0[Matrix3$Companion_getInstance().M21];
    this.values[Matrix3$Companion_getInstance().M02] = inv_det * this.tmp_0[Matrix3$Companion_getInstance().M02];
    this.values[Matrix3$Companion_getInstance().M12] = inv_det * this.tmp_0[Matrix3$Companion_getInstance().M12];
    this.values[Matrix3$Companion_getInstance().M22] = inv_det * this.tmp_0[Matrix3$Companion_getInstance().M22];
    return this;
  };
  Matrix3.prototype.set_1ktw3a$ = function (mat) {
    var tmp$;
    tmp$ = 9 - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      this.values[i] = mat.values[i];
    }
    return this;
  };
  Matrix3.prototype.set_1ktw39$ = function (mat) {
    this.values[Matrix3$Companion_getInstance().M00] = mat.values[0];
    this.values[Matrix3$Companion_getInstance().M10] = mat.values[1];
    this.values[Matrix3$Companion_getInstance().M20] = mat.values[2];
    this.values[Matrix3$Companion_getInstance().M01] = mat.values[4];
    this.values[Matrix3$Companion_getInstance().M11] = mat.values[5];
    this.values[Matrix3$Companion_getInstance().M21] = mat.values[6];
    this.values[Matrix3$Companion_getInstance().M02] = mat.values[8];
    this.values[Matrix3$Companion_getInstance().M12] = mat.values[9];
    this.values[Matrix3$Companion_getInstance().M22] = mat.values[10];
    return this;
  };
  Matrix3.prototype.set_q3cr5i$ = function (values) {
    var tmp$;
    tmp$ = 16 - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      this.values[i] = values[i];
    }
    return this;
  };
  Matrix3.prototype.setTranslation_dleff0$ = function (x, y) {
    this.values[6] = x;
    this.values[7] = y;
    return this;
  };
  Matrix3.prototype.trn_dleff0$ = function (x, y) {
    this.values[6] = this.values[6] + x;
    this.values[7] = this.values[7] + y;
    return this;
  };
  Matrix3.prototype.trn_9wm29l$ = function (vector) {
    this.values[6] = this.values[6] + vector.x;
    this.values[7] = this.values[7] + vector.y;
    return this;
  };
  Matrix3.prototype.trn_9wm29k$ = function (vector) {
    this.values[Matrix3$Companion_getInstance().M02] = this.values[Matrix3$Companion_getInstance().M02] + vector.x;
    this.values[Matrix3$Companion_getInstance().M12] = this.values[Matrix3$Companion_getInstance().M12] + vector.y;
    return this;
  };
  Matrix3.prototype.rotateDeg_mx4ult$ = function (degrees) {
    return this.rotate_mx4ult$(MathUtils_getInstance().degRad * degrees);
  };
  Matrix3.prototype.rotate_mx4ult$ = function (radians) {
    if (radians === 0.0)
      return this;
    var cos = MathUtils_getInstance().cos_mx4ult$(radians);
    var sin = MathUtils_getInstance().sin_mx4ult$(radians);
    this.tmp_0[Matrix3$Companion_getInstance().M00] = cos;
    this.tmp_0[Matrix3$Companion_getInstance().M10] = sin;
    this.tmp_0[Matrix3$Companion_getInstance().M20] = 0.0;
    this.tmp_0[Matrix3$Companion_getInstance().M01] = -sin;
    this.tmp_0[Matrix3$Companion_getInstance().M11] = cos;
    this.tmp_0[Matrix3$Companion_getInstance().M21] = 0.0;
    this.tmp_0[Matrix3$Companion_getInstance().M02] = 0.0;
    this.tmp_0[Matrix3$Companion_getInstance().M12] = 0.0;
    this.tmp_0[Matrix3$Companion_getInstance().M22] = 1.0;
    Matrix3$Companion_getInstance().mul_0(this.values, this.tmp_0);
    return this;
  };
  Matrix3.prototype.getTranslation_9wm29l$ = function (position) {
    position.x = this.values[Matrix3$Companion_getInstance().M02];
    position.y = this.values[Matrix3$Companion_getInstance().M12];
    return position;
  };
  Matrix3.prototype.getScale_9wm29l$ = function (scale) {
    scale.x = Math.sqrt(this.values[Matrix3$Companion_getInstance().M00] * this.values[Matrix3$Companion_getInstance().M00] + this.values[Matrix3$Companion_getInstance().M01] * this.values[Matrix3$Companion_getInstance().M01]);
    scale.y = Math.sqrt(this.values[Matrix3$Companion_getInstance().M10] * this.values[Matrix3$Companion_getInstance().M10] + this.values[Matrix3$Companion_getInstance().M11] * this.values[Matrix3$Companion_getInstance().M11]);
    return scale;
  };
  Matrix3.prototype.getRotation = function () {
    return MathUtils_getInstance().radDeg * Math.atan2(this.values[Matrix3$Companion_getInstance().M10], this.values[Matrix3$Companion_getInstance().M00]);
  };
  Matrix3.prototype.getRotationRad = function () {
    return Math.atan2(this.values[Matrix3$Companion_getInstance().M10], this.values[Matrix3$Companion_getInstance().M00]);
  };
  Matrix3.prototype.scl_mx4ult$ = function (scale) {
    this.values[Matrix3$Companion_getInstance().M00] = this.values[Matrix3$Companion_getInstance().M00] * scale;
    this.values[Matrix3$Companion_getInstance().M11] = this.values[Matrix3$Companion_getInstance().M11] * scale;
    return this;
  };
  Matrix3.prototype.scl_dleff0$ = function (scaleX, scaleY) {
    this.values[Matrix3$Companion_getInstance().M00] = this.values[Matrix3$Companion_getInstance().M00] * scaleX;
    this.values[Matrix3$Companion_getInstance().M11] = this.values[Matrix3$Companion_getInstance().M11] * scaleY;
    return this;
  };
  Matrix3.prototype.scl_9wm29l$ = function (scale) {
    this.values[Matrix3$Companion_getInstance().M00] = this.values[Matrix3$Companion_getInstance().M00] * scale.x;
    this.values[Matrix3$Companion_getInstance().M11] = this.values[Matrix3$Companion_getInstance().M11] * scale.y;
    return this;
  };
  Matrix3.prototype.scl_9wm29k$ = function (scale) {
    this.values[Matrix3$Companion_getInstance().M00] = this.values[Matrix3$Companion_getInstance().M00] * scale.x;
    this.values[Matrix3$Companion_getInstance().M11] = this.values[Matrix3$Companion_getInstance().M11] * scale.y;
    return this;
  };
  Matrix3.prototype.transpose = function () {
    var v01 = this.values[Matrix3$Companion_getInstance().M10];
    var v02 = this.values[Matrix3$Companion_getInstance().M20];
    var v10 = this.values[Matrix3$Companion_getInstance().M01];
    var v12 = this.values[Matrix3$Companion_getInstance().M21];
    var v20 = this.values[Matrix3$Companion_getInstance().M02];
    var v21 = this.values[Matrix3$Companion_getInstance().M12];
    this.values[Matrix3$Companion_getInstance().M01] = v01;
    this.values[Matrix3$Companion_getInstance().M02] = v02;
    this.values[Matrix3$Companion_getInstance().M10] = v10;
    this.values[Matrix3$Companion_getInstance().M12] = v12;
    this.values[Matrix3$Companion_getInstance().M20] = v20;
    this.values[Matrix3$Companion_getInstance().M21] = v21;
    return this;
  };
  function Matrix3$Companion() {
    Matrix3$Companion_instance = this;
    this.M00 = 0;
    this.M01 = 3;
    this.M02 = 6;
    this.M10 = 1;
    this.M11 = 4;
    this.M12 = 7;
    this.M20 = 2;
    this.M21 = 5;
    this.M22 = 8;
  }
  Matrix3$Companion.prototype.mul_0 = function (matA, matB) {
    var v00 = matA[0] * matB[0] + matA[3] * matB[1] + matA[6] * matB[2];
    var v01 = matA[0] * matB[3] + matA[3] * matB[4] + matA[6] * matB[5];
    var v02 = matA[0] * matB[6] + matA[3] * matB[7] + matA[6] * matB[8];
    var v10 = matA[1] * matB[0] + matA[4] * matB[1] + matA[7] * matB[2];
    var v11 = matA[1] * matB[3] + matA[4] * matB[4] + matA[7] * matB[5];
    var v12 = matA[1] * matB[6] + matA[4] * matB[7] + matA[7] * matB[8];
    var v20 = matA[2] * matB[0] + matA[5] * matB[1] + matA[8] * matB[2];
    var v21 = matA[2] * matB[3] + matA[5] * matB[4] + matA[8] * matB[5];
    var v22 = matA[2] * matB[6] + matA[5] * matB[7] + matA[8] * matB[8];
    matA[0] = v00;
    matA[1] = v10;
    matA[2] = v20;
    matA[3] = v01;
    matA[4] = v11;
    matA[5] = v21;
    matA[6] = v02;
    matA[7] = v12;
    matA[8] = v22;
  };
  Matrix3$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Matrix3$Companion_instance = null;
  function Matrix3$Companion_getInstance() {
    if (Matrix3$Companion_instance === null) {
      new Matrix3$Companion();
    }
    return Matrix3$Companion_instance;
  }
  Matrix3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Matrix3',
    interfaces: []
  };
  function Matrix3_init(m00, m10, m20, m01, m11, m21, m02, m12, m22, $this) {
    $this = $this || Object.create(Matrix3.prototype);
    Matrix3.call($this, [m00, m10, m20, m01, m11, m21, m02, m12, m22]);
    return $this;
  }
  Matrix3.prototype.component1 = function () {
    return this.values;
  };
  Matrix3.prototype.copy_q3cr5i$ = function (values) {
    return new Matrix3_init(values === void 0 ? this.values : values);
  };
  Matrix3.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.values) | 0;
    return result;
  };
  Matrix3.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.values, other.values))));
  };
  function Matrix4(values) {
    Matrix4$Companion_getInstance();
    if (values === void 0)
      values = [1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0];
    this.values = values;
    this.tmp_0 = Kotlin.newArray(16, 0);
  }
  Matrix4.prototype.set_1ktw39$ = function (matrix) {
    return this.set_q3cr5i$(matrix.values);
  };
  Matrix4.prototype.set_q3cr5i$ = function (values) {
    var tmp$;
    tmp$ = 16 - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      this.values[i] = values[i];
    }
    return this;
  };
  Matrix4.prototype.set_sa462$ = function (quaternion) {
    return this.set_7b5o5w$(quaternion.x, quaternion.y, quaternion.z, quaternion.w);
  };
  Matrix4.prototype.set_7b5o5w$ = function (quaternionX, quaternionY, quaternionZ, quaternionW) {
    return this.set_b3rrsf$(0.0, 0.0, 0.0, quaternionX, quaternionY, quaternionZ, quaternionW);
  };
  Matrix4.prototype.set_97hwnz$ = function (position, orientation) {
    return this.set_b3rrsf$(position.x, position.y, position.z, orientation.x, orientation.y, orientation.z, orientation.w);
  };
  Matrix4.prototype.set_b3rrsf$ = function (translationX, translationY, translationZ, quaternionX, quaternionY, quaternionZ, quaternionW) {
    var xs = quaternionX * 2.0;
    var ys = quaternionY * 2.0;
    var zs = quaternionZ * 2.0;
    var wx = quaternionW * xs;
    var wy = quaternionW * ys;
    var wz = quaternionW * zs;
    var xx = quaternionX * xs;
    var xy = quaternionX * ys;
    var xz = quaternionX * zs;
    var yy = quaternionY * ys;
    var yz = quaternionY * zs;
    var zz = quaternionZ * zs;
    this.values[0] = 1.0 - (yy + zz);
    this.values[4] = xy - wz;
    this.values[8] = xz + wy;
    this.values[12] = translationX;
    this.values[1] = xy + wz;
    this.values[5] = 1.0 - (xx + zz);
    this.values[9] = yz - wx;
    this.values[13] = translationY;
    this.values[2] = xz - wy;
    this.values[6] = yz + wx;
    this.values[10] = 1.0 - (xx + yy);
    this.values[14] = translationZ;
    this.values[3] = 0.0;
    this.values[7] = 0.0;
    this.values[11] = 0.0;
    this.values[15] = 1.0;
    return this;
  };
  Matrix4.prototype.set_4n9xua$ = function (position, orientation, scale) {
    return this.set_vdf28c$(position.x, position.y, position.z, orientation.x, orientation.y, orientation.z, orientation.w, scale.x, scale.y, scale.z);
  };
  Matrix4.prototype.set_vdf28c$ = function (translationX, translationY, translationZ, quaternionX, quaternionY, quaternionZ, quaternionW, scaleX, scaleY, scaleZ) {
    var xs = quaternionX * 2.0;
    var ys = quaternionY * 2.0;
    var zs = quaternionZ * 2.0;
    var wx = quaternionW * xs;
    var wy = quaternionW * ys;
    var wz = quaternionW * zs;
    var xx = quaternionX * xs;
    var xy = quaternionX * ys;
    var xz = quaternionX * zs;
    var yy = quaternionY * ys;
    var yz = quaternionY * zs;
    var zz = quaternionZ * zs;
    this.values[0] = scaleX * (1.0 - (yy + zz));
    this.values[4] = scaleY * (xy - wz);
    this.values[8] = scaleZ * (xz + wy);
    this.values[12] = translationX;
    this.values[1] = scaleX * (xy + wz);
    this.values[5] = scaleY * (1.0 - (xx + zz));
    this.values[9] = scaleZ * (yz - wx);
    this.values[13] = translationY;
    this.values[2] = scaleX * (xz - wy);
    this.values[6] = scaleY * (yz + wx);
    this.values[10] = scaleZ * (1.0 - (xx + yy));
    this.values[14] = translationZ;
    this.values[3] = 0.0;
    this.values[7] = 0.0;
    this.values[11] = 0.0;
    this.values[15] = 1.0;
    return this;
  };
  Matrix4.prototype.set_hcpy8k$ = function (xAxis, yAxis, zAxis, pos) {
    this.values[0] = xAxis.x;
    this.values[4] = xAxis.y;
    this.values[8] = xAxis.z;
    this.values[1] = yAxis.x;
    this.values[5] = yAxis.y;
    this.values[9] = yAxis.z;
    this.values[2] = zAxis.x;
    this.values[6] = zAxis.y;
    this.values[10] = zAxis.z;
    this.values[12] = pos.x;
    this.values[13] = pos.y;
    this.values[14] = pos.z;
    this.values[3] = 0.0;
    this.values[7] = 0.0;
    this.values[11] = 0.0;
    this.values[15] = 1.0;
    return this;
  };
  Matrix4.prototype.trn_1fv2cb$ = function (vector) {
    this.values[12] = this.values[12] + vector.x;
    this.values[13] = this.values[13] + vector.y;
    this.values[14] = this.values[14] + vector.z;
    return this;
  };
  Matrix4.prototype.trn_y2kzbl$ = function (x, y, z) {
    this.values[12] = this.values[12] + x;
    this.values[13] = this.values[13] + y;
    this.values[14] = this.values[14] + z;
    return this;
  };
  Matrix4.prototype.mul_1ktw39$ = function (matrix) {
    Matrix4$Companion_getInstance().mul_0(this.values, matrix.values);
    return this;
  };
  Matrix4.prototype.mulLeft_1ktw39$ = function (matrix) {
    Matrix4$Companion_getInstance().tmpMat_0.set_1ktw39$(matrix);
    Matrix4$Companion_getInstance().mul_0(Matrix4$Companion_getInstance().tmpMat_0.values, this.values);
    return this.set_1ktw39$(Matrix4$Companion_getInstance().tmpMat_0);
  };
  Matrix4.prototype.tra = function () {
    this.tmp_0[0] = this.values[0];
    this.tmp_0[4] = this.values[1];
    this.tmp_0[8] = this.values[2];
    this.tmp_0[12] = this.values[3];
    this.tmp_0[1] = this.values[4];
    this.tmp_0[5] = this.values[5];
    this.tmp_0[9] = this.values[6];
    this.tmp_0[13] = this.values[7];
    this.tmp_0[2] = this.values[8];
    this.tmp_0[6] = this.values[9];
    this.tmp_0[10] = this.values[10];
    this.tmp_0[14] = this.values[11];
    this.tmp_0[3] = this.values[12];
    this.tmp_0[7] = this.values[13];
    this.tmp_0[11] = this.values[14];
    this.tmp_0[15] = this.values[15];
    return this.set_q3cr5i$(this.tmp_0);
  };
  Matrix4.prototype.idt = function () {
    this.values[0] = 1.0;
    this.values[4] = 0.0;
    this.values[8] = 0.0;
    this.values[12] = 0.0;
    this.values[1] = 0.0;
    this.values[5] = 1.0;
    this.values[9] = 0.0;
    this.values[13] = 0.0;
    this.values[2] = 0.0;
    this.values[6] = 0.0;
    this.values[10] = 1.0;
    this.values[14] = 0.0;
    this.values[3] = 0.0;
    this.values[7] = 0.0;
    this.values[11] = 0.0;
    this.values[15] = 1.0;
    return this;
  };
  Matrix4.prototype.inv = function () {
    var l_det = this.det();
    if (l_det === 0.0)
      throw new RuntimeException('non-invertible matrix');
    var inv_det = 1.0 / l_det;
    this.tmp_0[0] = this.values[9] * this.values[14] * this.values[7] - this.values[13] * this.values[10] * this.values[7] + this.values[13] * this.values[6] * this.values[11] - this.values[5] * this.values[14] * this.values[11] - this.values[9] * this.values[6] * this.values[15] + this.values[5] * this.values[10] * this.values[15];
    this.tmp_0[4] = this.values[12] * this.values[10] * this.values[7] - this.values[8] * this.values[14] * this.values[7] - this.values[12] * this.values[6] * this.values[11] + this.values[4] * this.values[14] * this.values[11] + this.values[8] * this.values[6] * this.values[15] - this.values[4] * this.values[10] * this.values[15];
    this.tmp_0[8] = this.values[8] * this.values[13] * this.values[7] - this.values[12] * this.values[9] * this.values[7] + this.values[12] * this.values[5] * this.values[11] - this.values[4] * this.values[13] * this.values[11] - this.values[8] * this.values[5] * this.values[15] + this.values[4] * this.values[9] * this.values[15];
    this.tmp_0[12] = this.values[12] * this.values[9] * this.values[6] - this.values[8] * this.values[13] * this.values[6] - this.values[12] * this.values[5] * this.values[10] + this.values[4] * this.values[13] * this.values[10] + this.values[8] * this.values[5] * this.values[14] - this.values[4] * this.values[9] * this.values[14];
    this.tmp_0[1] = this.values[13] * this.values[10] * this.values[3] - this.values[9] * this.values[14] * this.values[3] - this.values[13] * this.values[2] * this.values[11] + this.values[1] * this.values[14] * this.values[11] + this.values[9] * this.values[2] * this.values[15] - this.values[1] * this.values[10] * this.values[15];
    this.tmp_0[5] = this.values[8] * this.values[14] * this.values[3] - this.values[12] * this.values[10] * this.values[3] + this.values[12] * this.values[2] * this.values[11] - this.values[0] * this.values[14] * this.values[11] - this.values[8] * this.values[2] * this.values[15] + this.values[0] * this.values[10] * this.values[15];
    this.tmp_0[9] = this.values[12] * this.values[9] * this.values[3] - this.values[8] * this.values[13] * this.values[3] - this.values[12] * this.values[1] * this.values[11] + this.values[0] * this.values[13] * this.values[11] + this.values[8] * this.values[1] * this.values[15] - this.values[0] * this.values[9] * this.values[15];
    this.tmp_0[13] = this.values[8] * this.values[13] * this.values[2] - this.values[12] * this.values[9] * this.values[2] + this.values[12] * this.values[1] * this.values[10] - this.values[0] * this.values[13] * this.values[10] - this.values[8] * this.values[1] * this.values[14] + this.values[0] * this.values[9] * this.values[14];
    this.tmp_0[2] = this.values[5] * this.values[14] * this.values[3] - this.values[13] * this.values[6] * this.values[3] + this.values[13] * this.values[2] * this.values[7] - this.values[1] * this.values[14] * this.values[7] - this.values[5] * this.values[2] * this.values[15] + this.values[1] * this.values[6] * this.values[15];
    this.tmp_0[6] = this.values[12] * this.values[6] * this.values[3] - this.values[4] * this.values[14] * this.values[3] - this.values[12] * this.values[2] * this.values[7] + this.values[0] * this.values[14] * this.values[7] + this.values[4] * this.values[2] * this.values[15] - this.values[0] * this.values[6] * this.values[15];
    this.tmp_0[10] = this.values[4] * this.values[13] * this.values[3] - this.values[12] * this.values[5] * this.values[3] + this.values[12] * this.values[1] * this.values[7] - this.values[0] * this.values[13] * this.values[7] - this.values[4] * this.values[1] * this.values[15] + this.values[0] * this.values[5] * this.values[15];
    this.tmp_0[14] = this.values[12] * this.values[5] * this.values[2] - this.values[4] * this.values[13] * this.values[2] - this.values[12] * this.values[1] * this.values[6] + this.values[0] * this.values[13] * this.values[6] + this.values[4] * this.values[1] * this.values[14] - this.values[0] * this.values[5] * this.values[14];
    this.tmp_0[3] = this.values[9] * this.values[6] * this.values[3] - this.values[5] * this.values[10] * this.values[3] - this.values[9] * this.values[2] * this.values[7] + this.values[1] * this.values[10] * this.values[7] + this.values[5] * this.values[2] * this.values[11] - this.values[1] * this.values[6] * this.values[11];
    this.tmp_0[7] = this.values[4] * this.values[10] * this.values[3] - this.values[8] * this.values[6] * this.values[3] + this.values[8] * this.values[2] * this.values[7] - this.values[0] * this.values[10] * this.values[7] - this.values[4] * this.values[2] * this.values[11] + this.values[0] * this.values[6] * this.values[11];
    this.tmp_0[11] = this.values[8] * this.values[5] * this.values[3] - this.values[4] * this.values[9] * this.values[3] - this.values[8] * this.values[1] * this.values[7] + this.values[0] * this.values[9] * this.values[7] + this.values[4] * this.values[1] * this.values[11] - this.values[0] * this.values[5] * this.values[11];
    this.tmp_0[15] = this.values[4] * this.values[9] * this.values[2] - this.values[8] * this.values[5] * this.values[2] + this.values[8] * this.values[1] * this.values[6] - this.values[0] * this.values[9] * this.values[6] - this.values[4] * this.values[1] * this.values[10] + this.values[0] * this.values[5] * this.values[10];
    this.values[0] = this.tmp_0[0] * inv_det;
    this.values[4] = this.tmp_0[4] * inv_det;
    this.values[8] = this.tmp_0[8] * inv_det;
    this.values[12] = this.tmp_0[12] * inv_det;
    this.values[1] = this.tmp_0[1] * inv_det;
    this.values[5] = this.tmp_0[5] * inv_det;
    this.values[9] = this.tmp_0[9] * inv_det;
    this.values[13] = this.tmp_0[13] * inv_det;
    this.values[2] = this.tmp_0[2] * inv_det;
    this.values[6] = this.tmp_0[6] * inv_det;
    this.values[10] = this.tmp_0[10] * inv_det;
    this.values[14] = this.tmp_0[14] * inv_det;
    this.values[3] = this.tmp_0[3] * inv_det;
    this.values[7] = this.tmp_0[7] * inv_det;
    this.values[11] = this.tmp_0[11] * inv_det;
    this.values[15] = this.tmp_0[15] * inv_det;
    return this;
  };
  Matrix4.prototype.det = function () {
    return this.values[3] * this.values[6] * this.values[9] * this.values[12] - this.values[2] * this.values[7] * this.values[9] * this.values[12] - this.values[3] * this.values[5] * this.values[10] * this.values[12] + this.values[1] * this.values[7] * this.values[10] * this.values[12] + this.values[2] * this.values[5] * this.values[11] * this.values[12] - this.values[1] * this.values[6] * this.values[11] * this.values[12] - this.values[3] * this.values[6] * this.values[8] * this.values[13] + this.values[2] * this.values[7] * this.values[8] * this.values[13] + this.values[3] * this.values[4] * this.values[10] * this.values[13] - this.values[0] * this.values[7] * this.values[10] * this.values[13] - this.values[2] * this.values[4] * this.values[11] * this.values[13] + this.values[0] * this.values[6] * this.values[11] * this.values[13] + this.values[3] * this.values[5] * this.values[8] * this.values[14] - this.values[1] * this.values[7] * this.values[8] * this.values[14] - this.values[3] * this.values[4] * this.values[9] * this.values[14] + this.values[0] * this.values[7] * this.values[9] * this.values[14] + this.values[1] * this.values[4] * this.values[11] * this.values[14] - this.values[0] * this.values[5] * this.values[11] * this.values[14] - this.values[2] * this.values[5] * this.values[8] * this.values[15] + this.values[1] * this.values[6] * this.values[8] * this.values[15] + this.values[2] * this.values[4] * this.values[9] * this.values[15] - this.values[0] * this.values[6] * this.values[9] * this.values[15] - this.values[1] * this.values[4] * this.values[10] * this.values[15] + this.values[0] * this.values[5] * this.values[10] * this.values[15];
  };
  Matrix4.prototype.det3x3 = function () {
    return this.values[0] * this.values[5] * this.values[10] + this.values[4] * this.values[9] * this.values[2] + this.values[8] * this.values[1] * this.values[6] - this.values[0] * this.values[9] * this.values[6] - this.values[4] * this.values[1] * this.values[10] - this.values[8] * this.values[5] * this.values[2];
  };
  Matrix4.prototype.setTranslation_1fv2cb$ = function (vector) {
    this.values[12] = vector.x;
    this.values[13] = vector.y;
    this.values[14] = vector.z;
    return this;
  };
  Matrix4.prototype.setTranslation_y2kzbl$ = function (x, y, z) {
    this.values[12] = x;
    this.values[13] = y;
    this.values[14] = z;
    return this;
  };
  Matrix4.prototype.setFromEulerAnglesRad_y2kzbl$ = function (yaw, pitch, roll) {
    Matrix4$Companion_getInstance().quat_0.setEulerAnglesRad_y2kzbl$(yaw, pitch, roll);
    return this.set_sa462$(Matrix4$Companion_getInstance().quat_0);
  };
  Matrix4.prototype.setToLookAt_uwler8$ = function (direction, up) {
    Matrix4$Companion_getInstance().l_vez_0.set_1fv2cb$(direction).nor();
    Matrix4$Companion_getInstance().l_vex_0.set_1fv2cb$(direction).nor();
    Matrix4$Companion_getInstance().l_vex_0.crs_1fv2cb$(up).nor();
    Matrix4$Companion_getInstance().l_vey_0.set_1fv2cb$(Matrix4$Companion_getInstance().l_vex_0).crs_1fv2cb$(Matrix4$Companion_getInstance().l_vez_0).nor();
    this.idt();
    this.values[0] = Matrix4$Companion_getInstance().l_vex_0.x;
    this.values[4] = Matrix4$Companion_getInstance().l_vex_0.y;
    this.values[8] = Matrix4$Companion_getInstance().l_vex_0.z;
    this.values[1] = Matrix4$Companion_getInstance().l_vey_0.x;
    this.values[5] = Matrix4$Companion_getInstance().l_vey_0.y;
    this.values[9] = Matrix4$Companion_getInstance().l_vey_0.z;
    this.values[2] = -Matrix4$Companion_getInstance().l_vez_0.x;
    this.values[6] = -Matrix4$Companion_getInstance().l_vez_0.y;
    this.values[10] = -Matrix4$Companion_getInstance().l_vez_0.z;
    return this;
  };
  Matrix4.prototype.setToLookAt_qeea63$ = function (position, target, up) {
    Matrix4$Companion_getInstance().tmpVec_0.set_1fv2cb$(target).sub_1fv2cb$(position);
    this.setToLookAt_uwler8$(Matrix4$Companion_getInstance().tmpVec_0, up);
    this.translate_y2kzbl$(-position.x, -position.y, -position.z);
    return this;
  };
  Matrix4.prototype.setToGlobal_qeea63$ = function (position, forward, up) {
    Matrix4$Companion_getInstance().tmpForward_0.set_1fv2cb$(forward).nor();
    Matrix4$Companion_getInstance().right_0.set_1fv2cb$(Matrix4$Companion_getInstance().tmpForward_0).crs_1fv2cb$(up).nor();
    Matrix4$Companion_getInstance().tmpUp_0.set_1fv2cb$(Matrix4$Companion_getInstance().right_0).crs_1fv2cb$(Matrix4$Companion_getInstance().tmpForward_0).nor();
    this.set_hcpy8k$(Matrix4$Companion_getInstance().right_0, Matrix4$Companion_getInstance().tmpUp_0, Matrix4$Companion_getInstance().tmpForward_0.scl_mx4ult$(-1.0), position);
    return this;
  };
  Matrix4.prototype.toString = function () {
    return '[' + Kotlin.toString(this.values[0]) + '|' + Kotlin.toString(this.values[4]) + '|' + Kotlin.toString(this.values[8]) + '|' + Kotlin.toString(this.values[12]) + ']\n' + '[' + Kotlin.toString(this.values[1]) + '|' + Kotlin.toString(this.values[5]) + '|' + Kotlin.toString(this.values[9]) + '|' + Kotlin.toString(this.values[13]) + ']\n' + '[' + Kotlin.toString(this.values[2]) + '|' + Kotlin.toString(this.values[6]) + '|' + Kotlin.toString(this.values[10]) + '|' + Kotlin.toString(this.values[14]) + ']\n' + '[' + Kotlin.toString(this.values[3]) + '|' + Kotlin.toString(this.values[7]) + '|' + Kotlin.toString(this.values[11]) + '|' + Kotlin.toString(this.values[15]) + ']\n';
  };
  Matrix4.prototype.lerp_gb0b0w$ = function (matrix, alpha) {
    var tmp$;
    tmp$ = 16 - 1 | 0;
    for (var i = 0; i <= tmp$; i++)
      this.values[i] = this.values[i] * (1 - alpha) + matrix.values[i] * alpha;
    return this;
  };
  Matrix4.prototype.set_1ktw3a$ = function (mat) {
    this.values[0] = mat.values[0];
    this.values[1] = mat.values[1];
    this.values[2] = mat.values[2];
    this.values[3] = 0.0;
    this.values[4] = mat.values[3];
    this.values[5] = mat.values[4];
    this.values[6] = mat.values[5];
    this.values[7] = 0.0;
    this.values[8] = 0.0;
    this.values[9] = 0.0;
    this.values[10] = 1.0;
    this.values[11] = 0.0;
    this.values[12] = mat.values[6];
    this.values[13] = mat.values[7];
    this.values[14] = 0.0;
    this.values[15] = mat.values[8];
    return this;
  };
  Matrix4.prototype.scl_1fv2cb$ = function (scale) {
    this.values[0] = this.values[0] * scale.x;
    this.values[5] = this.values[5] * scale.y;
    this.values[10] = this.values[10] * scale.z;
    return this;
  };
  Matrix4.prototype.scl_y2kzbl$ = function (x, y, z) {
    this.values[0] = this.values[0] * x;
    this.values[5] = this.values[5] * y;
    this.values[10] = this.values[10] * z;
    return this;
  };
  Matrix4.prototype.scl_mx4ult$ = function (scale) {
    this.values[0] = this.values[0] * scale;
    this.values[5] = this.values[5] * scale;
    this.values[10] = this.values[10] * scale;
    return this;
  };
  Matrix4.prototype.getTranslation_9wm29k$ = function (position) {
    position.x = this.values[12];
    position.y = this.values[13];
    position.z = this.values[14];
    return position;
  };
  Matrix4.prototype.getRotation_tt8t29$ = function (rotation, normalizeAxes) {
    return rotation.setFromMatrix_e7v9es$(this, normalizeAxes);
  };
  Matrix4.prototype.getRotation_sa462$ = function (rotation) {
    return rotation.setFromMatrix_e7v9es$(this);
  };
  Matrix4.prototype.getScaleXSquared = function () {
    return this.values[0] * this.values[0] + this.values[4] * this.values[4] + this.values[8] * this.values[8];
  };
  Matrix4.prototype.getScaleYSquared = function () {
    return this.values[1] * this.values[1] + this.values[5] * this.values[5] + this.values[9] * this.values[9];
  };
  Matrix4.prototype.getScaleZSquared = function () {
    return this.values[2] * this.values[2] + this.values[6] * this.values[6] + this.values[10] * this.values[10];
  };
  Matrix4.prototype.getScaleX = function () {
    var tmp$;
    if (MathUtils_getInstance().isZero_dleff0$(this.values[4]) && MathUtils_getInstance().isZero_dleff0$(this.values[8])) {
      var value = this.values[0];
      tmp$ = value < 0.0 ? -value : value;
    }
     else
      tmp$ = Math.sqrt(this.getScaleXSquared());
    return tmp$;
  };
  Matrix4.prototype.getScaleY = function () {
    var tmp$;
    if (MathUtils_getInstance().isZero_dleff0$(this.values[1]) && MathUtils_getInstance().isZero_dleff0$(this.values[9])) {
      var value = this.values[5];
      tmp$ = value < 0.0 ? -value : value;
    }
     else
      tmp$ = Math.sqrt(this.getScaleYSquared());
    return tmp$;
  };
  Matrix4.prototype.getScaleZ = function () {
    var tmp$;
    if (MathUtils_getInstance().isZero_dleff0$(this.values[2]) && MathUtils_getInstance().isZero_dleff0$(this.values[6])) {
      var value = this.values[10];
      tmp$ = value < 0.0 ? -value : value;
    }
     else
      tmp$ = Math.sqrt(this.getScaleZSquared());
    return tmp$;
  };
  Matrix4.prototype.getScale_9wm29k$ = function (scale) {
    return scale.set_y2kzbl$(this.getScaleX(), this.getScaleY(), this.getScaleZ());
  };
  Matrix4.prototype.toNormalMatrix = function () {
    this.values[12] = 0.0;
    this.values[13] = 0.0;
    this.values[14] = 0.0;
    return this.inv().tra();
  };
  Matrix4.prototype.translate_1fv2cb$ = function (translation) {
    return this.translate_y2kzbl$(translation.x, translation.y, translation.z);
  };
  Matrix4.prototype.translate_y2kzbl$ = function (x, y, z) {
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (z === void 0)
      z = 0.0;
    var matA = this.values;
    var v03 = matA[0] * x + matA[4] * y + matA[8] * z + matA[12];
    var v13 = matA[1] * x + matA[5] * y + matA[9] * z + matA[13];
    var v23 = matA[2] * x + matA[6] * y + matA[10] * z + matA[14];
    var v33 = matA[3] * x + matA[7] * y + matA[11] * z + matA[15];
    matA[12] = v03;
    matA[13] = v13;
    matA[14] = v23;
    matA[15] = v33;
    return this;
  };
  Matrix4.prototype.rotate_pz1gqy$ = function (axis, radians) {
    if (radians === 0.0)
      return this;
    Matrix4$Companion_getInstance().quat_0.setFromAxis_pz1gqy$(axis, radians);
    return this.rotate_sa462$(Matrix4$Companion_getInstance().quat_0);
  };
  Matrix4.prototype.rotate_7b5o5w$ = function (axisX, axisY, axisZ, radians) {
    if (radians === 0.0)
      return this;
    Matrix4$Companion_getInstance().quat_0.setFromAxis_7b5o5w$(axisX, axisY, axisZ, radians);
    return this.rotate_sa462$(Matrix4$Companion_getInstance().quat_0);
  };
  Matrix4.prototype.rotate_sa462$ = function (rotation) {
    rotation.toMatrix_q3cr5i$(this.tmp_0);
    Matrix4$Companion_getInstance().mul_0(this.values, this.tmp_0);
    return this;
  };
  Matrix4.prototype.rotate_uwler8$ = function (v1, v2) {
    return this.rotate_sa462$(Matrix4$Companion_getInstance().quat_0.setFromCross_uwler8$(v1, v2));
  };
  Matrix4.prototype.extract4x3Matrix_q3cr5i$ = function (dst) {
    dst[0] = this.values[0];
    dst[1] = this.values[1];
    dst[2] = this.values[2];
    dst[3] = this.values[4];
    dst[4] = this.values[5];
    dst[5] = this.values[6];
    dst[6] = this.values[8];
    dst[7] = this.values[9];
    dst[8] = this.values[10];
    dst[9] = this.values[12];
    dst[10] = this.values[13];
    dst[11] = this.values[14];
  };
  Matrix4.prototype.prj_9wm29k$ = function (vec) {
    var mat = this.values;
    var inv_w = 1.0 / (vec.x * mat[3] + vec.y * mat[7] + vec.z * mat[11] + mat[15]);
    var x = (vec.x * mat[0] + vec.y * mat[4] + vec.z * mat[8] + mat[12]) * inv_w;
    var y = (vec.x * mat[1] + vec.y * mat[5] + vec.z * mat[9] + mat[13]) * inv_w;
    var z = (vec.x * mat[2] + vec.y * mat[6] + vec.z * mat[10] + mat[14]) * inv_w;
    vec.x = x;
    vec.y = y;
    vec.z = z;
    return vec;
  };
  Matrix4.prototype.prj_9wm29l$ = function (vec) {
    var mat = this.values;
    var inv_w = 1.0 / (vec.x * mat[3] + vec.y * mat[7] + mat[15]);
    var x = (vec.x * mat[0] + vec.y * mat[4] + mat[12]) * inv_w;
    var y = (vec.x * mat[1] + vec.y * mat[5] + mat[13]) * inv_w;
    vec.x = x;
    vec.y = y;
    return vec;
  };
  Matrix4.prototype.rot_9wm29k$ = function (vec) {
    var mat = this.values;
    var x = vec.x * mat[0] + vec.y * mat[4] + vec.z * mat[8];
    var y = vec.x * mat[1] + vec.y * mat[5] + vec.z * mat[9];
    var z = vec.x * mat[2] + vec.y * mat[6] + vec.z * mat[10];
    vec.x = x;
    vec.y = y;
    vec.z = z;
    return vec;
  };
  Matrix4.prototype.rot_9wm29l$ = function (vec) {
    var mat = this.values;
    var x = vec.x * mat[0] + vec.y * mat[4];
    var y = vec.x * mat[1] + vec.y * mat[5];
    vec.x = x;
    vec.y = y;
    return vec;
  };
  Matrix4.prototype.equals = function (other) {
    if (!Kotlin.isType(other, Matrix4))
      return false;
    return equalsArray_0(this.values, other.values);
  };
  Matrix4.prototype.hashCode = function () {
    return Kotlin.hashCode(this);
  };
  function Matrix4$Companion() {
    Matrix4$Companion_instance = this;
    this.M00 = 0;
    this.M01 = 4;
    this.M02 = 8;
    this.M03 = 12;
    this.M10 = 1;
    this.M11 = 5;
    this.M12 = 9;
    this.M13 = 13;
    this.M20 = 2;
    this.M21 = 6;
    this.M22 = 10;
    this.M23 = 14;
    this.M30 = 3;
    this.M31 = 7;
    this.M32 = 11;
    this.M33 = 15;
    this.IDENTITY = new Matrix4();
    this.quat_0 = new Quaternion();
    this.l_vez_0 = new Vector3();
    this.l_vex_0 = new Vector3();
    this.l_vey_0 = new Vector3();
    this.tmpVec_0 = new Vector3();
    this.tmpMat_0 = new Matrix4();
    this.right_0 = new Vector3();
    this.tmpForward_0 = new Vector3();
    this.tmpUp_0 = new Vector3();
  }
  Matrix4$Companion.prototype.mul_0 = function (matA, matB) {
    var v00 = matA[0] * matB[0] + matA[4] * matB[1] + matA[8] * matB[2] + matA[12] * matB[3];
    var v01 = matA[0] * matB[4] + matA[4] * matB[5] + matA[8] * matB[6] + matA[12] * matB[7];
    var v02 = matA[0] * matB[8] + matA[4] * matB[9] + matA[8] * matB[10] + matA[12] * matB[11];
    var v03 = matA[0] * matB[12] + matA[4] * matB[13] + matA[8] * matB[14] + matA[12] * matB[15];
    var v10 = matA[1] * matB[0] + matA[5] * matB[1] + matA[9] * matB[2] + matA[13] * matB[3];
    var v11 = matA[1] * matB[4] + matA[5] * matB[5] + matA[9] * matB[6] + matA[13] * matB[7];
    var v12 = matA[1] * matB[8] + matA[5] * matB[9] + matA[9] * matB[10] + matA[13] * matB[11];
    var v13 = matA[1] * matB[12] + matA[5] * matB[13] + matA[9] * matB[14] + matA[13] * matB[15];
    var v20 = matA[2] * matB[0] + matA[6] * matB[1] + matA[10] * matB[2] + matA[14] * matB[3];
    var v21 = matA[2] * matB[4] + matA[6] * matB[5] + matA[10] * matB[6] + matA[14] * matB[7];
    var v22 = matA[2] * matB[8] + matA[6] * matB[9] + matA[10] * matB[10] + matA[14] * matB[11];
    var v23 = matA[2] * matB[12] + matA[6] * matB[13] + matA[10] * matB[14] + matA[14] * matB[15];
    var v30 = matA[3] * matB[0] + matA[7] * matB[1] + matA[11] * matB[2] + matA[15] * matB[3];
    var v31 = matA[3] * matB[4] + matA[7] * matB[5] + matA[11] * matB[6] + matA[15] * matB[7];
    var v32 = matA[3] * matB[8] + matA[7] * matB[9] + matA[11] * matB[10] + matA[15] * matB[11];
    var v33 = matA[3] * matB[12] + matA[7] * matB[13] + matA[11] * matB[14] + matA[15] * matB[15];
    matA[0] = v00;
    matA[4] = v01;
    matA[8] = v02;
    matA[12] = v03;
    matA[1] = v10;
    matA[5] = v11;
    matA[9] = v12;
    matA[13] = v13;
    matA[2] = v20;
    matA[6] = v21;
    matA[10] = v22;
    matA[14] = v23;
    matA[3] = v30;
    matA[7] = v31;
    matA[11] = v32;
    matA[15] = v33;
  };
  Matrix4$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Matrix4$Companion_instance = null;
  function Matrix4$Companion_getInstance() {
    if (Matrix4$Companion_instance === null) {
      new Matrix4$Companion();
    }
    return Matrix4$Companion_instance;
  }
  Matrix4.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Matrix4',
    interfaces: []
  };
  Matrix4.prototype.component1 = function () {
    return this.values;
  };
  Matrix4.prototype.copy_q3cr5i$ = function (values) {
    return new Matrix4(values === void 0 ? this.values : values);
  };
  function matrix4(init) {
    var m = new Matrix4();
    init(m);
    return m;
  }
  function Pad(top, right, bottom, left) {
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.left = left;
  }
  Pad.prototype.copy_789ags$ = function (top, right, bottom, left) {
    if (top === void 0)
      top = null;
    if (right === void 0)
      right = null;
    if (bottom === void 0)
      bottom = null;
    if (left === void 0)
      left = null;
    return new Pad(top != null ? top : this.top, right != null ? right : this.right, bottom != null ? bottom : this.bottom, left != null ? left : this.left);
  };
  Pad.prototype.set_mx4ult$ = function (all) {
    this.top = all;
    this.bottom = all;
    this.right = all;
    this.left = all;
    return this;
  };
  Pad.prototype.set_ujzovp$ = function (other) {
    this.top = other.top;
    this.bottom = other.bottom;
    this.right = other.right;
    this.left = other.left;
    return this;
  };
  Pad.prototype.set_7b5o5w$ = function (left, top, right, bottom) {
    if (left === void 0)
      left = 0.0;
    if (top === void 0)
      top = 0.0;
    if (right === void 0)
      right = 0.0;
    if (bottom === void 0)
      bottom = 0.0;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.left = left;
    return this;
  };
  Pad.prototype.clear = function () {
    this.top = 0.0;
    this.right = 0.0;
    this.bottom = 0.0;
    this.left = 0.0;
  };
  Pad.prototype.reduceWidth_81sz4$ = function (width) {
    if (width == null)
      return null;
    return width - this.left - this.right;
  };
  Pad.prototype.reduceHeight_81sz4$ = function (height) {
    if (height == null)
      return null;
    return height - this.top - this.bottom;
  };
  Pad.prototype.reduceWidth2_mx4ult$ = function (width) {
    return width - this.left - this.right;
  };
  Pad.prototype.reduceHeight2_mx4ult$ = function (height) {
    return height - this.top - this.bottom;
  };
  Pad.prototype.expandWidth_81sz4$ = function (width) {
    if (width == null)
      return null;
    return width + this.left + this.right;
  };
  Pad.prototype.expandHeight_81sz4$ = function (height) {
    if (height == null)
      return null;
    return height + this.top + this.bottom;
  };
  Pad.prototype.expandWidth2_mx4ult$ = function (width) {
    return width + this.left + this.right;
  };
  Pad.prototype.expandHeight2_mx4ult$ = function (height) {
    return height + this.top + this.bottom;
  };
  Pad.prototype.toCssString = function () {
    return this.top.toString() + 'px ' + this.right + 'px ' + this.bottom + 'px ' + this.left + 'px';
  };
  Pad.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Pad',
    interfaces: [Clearable]
  };
  function Pad_init($this) {
    $this = $this || Object.create(Pad.prototype);
    Pad.call($this, 0.0, 0.0, 0.0, 0.0);
    return $this;
  }
  function Pad_init_0(all, $this) {
    $this = $this || Object.create(Pad.prototype);
    Pad.call($this, all, all, all, all);
    return $this;
  }
  function PadSerializer() {
    PadSerializer_instance = this;
  }
  PadSerializer.prototype.write_r4tkhj$ = function ($receiver, writer) {
    float(writer, 'left', $receiver.left);
    float(writer, 'top', $receiver.top);
    float(writer, 'right', $receiver.right);
    float(writer, 'bottom', $receiver.bottom);
  };
  PadSerializer.prototype.read_gax0m7$ = function (reader) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var p = new Pad((tmp$ = float_0(reader, 'top')) != null ? tmp$ : Kotlin.throwNPE(), (tmp$_0 = float_0(reader, 'right')) != null ? tmp$_0 : Kotlin.throwNPE(), (tmp$_1 = float_0(reader, 'bottom')) != null ? tmp$_1 : Kotlin.throwNPE(), (tmp$_2 = float_0(reader, 'left')) != null ? tmp$_2 : Kotlin.throwNPE());
    return p;
  };
  PadSerializer.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'PadSerializer',
    interfaces: [From, To]
  };
  var PadSerializer_instance = null;
  function PadSerializer_getInstance() {
    if (PadSerializer_instance === null) {
      new PadSerializer();
    }
    return PadSerializer_instance;
  }
  function Plane(normal, d) {
    Plane$Companion_getInstance();
    if (normal === void 0)
      normal = new Vector3();
    if (d === void 0)
      d = 0.0;
    this.normal = normal;
    this.d = d;
  }
  Plane.prototype.set_kv16yg$ = function (point1, point2, point3) {
    this.normal.set_1fv2cb$(point1).sub_1fv2cb$(point2).crs_y2kzbl$(point2.x - point3.x, point2.y - point3.y, point2.z - point3.z).nor();
    this.d = -point1.dot_1fv2cb$(this.normal);
  };
  Plane.prototype.set_7b5o5w$ = function (nx, ny, nz, d) {
    this.normal.set_y2kzbl$(nx, ny, nz);
    this.d = d;
  };
  Plane.prototype.distance_9wm29k$ = function (vec) {
    return this.normal.dot_1fv2cb$(vec) + this.d;
  };
  Plane.prototype.testPoint_9wm29k$ = function (point) {
    var dist = this.normal.dot_1fv2cb$(point) + this.d;
    if (dist === 0.0)
      return PlaneSide$ON_PLANE_getInstance();
    else if (dist < 0)
      return PlaneSide$BACK_getInstance();
    else
      return PlaneSide$FRONT_getInstance();
  };
  Plane.prototype.testPoint_y2kzbl$ = function (x, y, z) {
    var dist = this.normal.dot_y2kzbl$(x, y, z) + this.d;
    if (dist === 0.0)
      return PlaneSide$ON_PLANE_getInstance();
    else if (dist < 0)
      return PlaneSide$BACK_getInstance();
    else
      return PlaneSide$FRONT_getInstance();
  };
  Plane.prototype.isFrontFacing_9wm29k$ = function (direction) {
    var dot = this.normal.dot_1fv2cb$(direction);
    return dot <= 0;
  };
  Plane.prototype.set_s18mjw$ = function (point, normal) {
    this.normal.set_1fv2cb$(normal);
    this.d = -point.dot_1fv2cb$(normal);
  };
  Plane.prototype.set_w8lrqs$ = function (pointX, pointY, pointZ, norX, norY, norZ) {
    this.normal.set_y2kzbl$(norX, norY, norZ);
    this.d = -(pointX * norX + pointY * norY + pointZ * norZ);
  };
  Plane.prototype.set_rw1gx8$ = function (plane) {
    this.normal.set_1fv2cb$(plane.normal);
    this.d = plane.d;
  };
  Plane.prototype.intersects_y8xsj$ = function (r, out) {
    if (out === void 0)
      out = null;
    var m = r.direction.dot_1fv2cb$(this.normal);
    if (m === 0.0)
      return false;
    var t = -(r.origin.dot_1fv2cb$(this.normal) + this.d) / m;
    if (t >= 0) {
      if (out != null)
        out.set_1fv2cb$(r.direction).scl_mx4ult$(t).add_1fv2cb$(r.origin);
      return true;
    }
     else {
      return false;
    }
  };
  Plane.prototype.prj_9wm29k$ = function (vec) {
    var t = this.normal.dot_1fv2cb$(vec) + this.d;
    vec.set_y2kzbl$(t * -this.normal.x + vec.x, t * -this.normal.y + vec.y, t * -this.normal.z + vec.z);
    return vec;
  };
  Plane.prototype.free = function () {
    Plane$Companion_getInstance().pool_0.free_11rb$(this);
  };
  Plane.prototype.clear = function () {
    this.normal.clear();
    this.d = 0.0;
  };
  function Plane$Companion() {
    Plane$Companion_instance = this;
    this.pool_0 = new ClearableObjectPool(void 0, Plane$Companion$pool$lambda);
  }
  Plane$Companion.prototype.obtain = function () {
    return this.pool_0.obtain();
  };
  function Plane$Companion$pool$lambda() {
    return new Plane();
  }
  Plane$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Plane$Companion_instance = null;
  function Plane$Companion_getInstance() {
    if (Plane$Companion_instance === null) {
      new Plane$Companion();
    }
    return Plane$Companion_instance;
  }
  Plane.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Plane',
    interfaces: [Clearable]
  };
  Plane.prototype.component1 = function () {
    return this.normal;
  };
  Plane.prototype.component2 = function () {
    return this.d;
  };
  Plane.prototype.copy_wscm5v$ = function (normal, d) {
    return new Plane(normal === void 0 ? this.normal : normal, d === void 0 ? this.d : d);
  };
  Plane.prototype.toString = function () {
    return 'Plane(normal=' + Kotlin.toString(this.normal) + (', d=' + Kotlin.toString(this.d)) + ')';
  };
  Plane.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.normal) | 0;
    result = result * 31 + Kotlin.hashCode(this.d) | 0;
    return result;
  };
  Plane.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.normal, other.normal) && Kotlin.equals(this.d, other.d)))));
  };
  function PlaneSide(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PlaneSide_initFields() {
    PlaneSide_initFields = function () {
    };
    PlaneSide$ON_PLANE_instance = new PlaneSide('ON_PLANE', 0);
    PlaneSide$BACK_instance = new PlaneSide('BACK', 1);
    PlaneSide$FRONT_instance = new PlaneSide('FRONT', 2);
  }
  var PlaneSide$ON_PLANE_instance;
  function PlaneSide$ON_PLANE_getInstance() {
    PlaneSide_initFields();
    return PlaneSide$ON_PLANE_instance;
  }
  var PlaneSide$BACK_instance;
  function PlaneSide$BACK_getInstance() {
    PlaneSide_initFields();
    return PlaneSide$BACK_instance;
  }
  var PlaneSide$FRONT_instance;
  function PlaneSide$FRONT_getInstance() {
    PlaneSide_initFields();
    return PlaneSide$FRONT_instance;
  }
  PlaneSide.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'PlaneSide',
    interfaces: [Enum]
  };
  function PlaneSide$values() {
    return [PlaneSide$ON_PLANE_getInstance(), PlaneSide$BACK_getInstance(), PlaneSide$FRONT_getInstance()];
  }
  PlaneSide.values = PlaneSide$values;
  function PlaneSide$valueOf(name) {
    switch (name) {
      case 'ON_PLANE':
        return PlaneSide$ON_PLANE_getInstance();
      case 'BACK':
        return PlaneSide$BACK_getInstance();
      case 'FRONT':
        return PlaneSide$FRONT_getInstance();
      default:Kotlin.throwISE('No enum constant com.acornui.math.PlaneSide.' + name);
    }
  }
  PlaneSide.valueOf_61zpoe$ = PlaneSide$valueOf;
  function Quaternion(x, y, z, w) {
    Quaternion$Companion_getInstance();
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (z === void 0)
      z = 0.0;
    if (w === void 0)
      w = 1.0;
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
  Quaternion.prototype.set_7b5o5w$ = function (x, y, z, w) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    return this;
  };
  Quaternion.prototype.set_sa462$ = function (quaternion) {
    return this.set_7b5o5w$(quaternion.x, quaternion.y, quaternion.z, quaternion.w);
  };
  Quaternion.prototype.len = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  };
  Quaternion.prototype.toString = function () {
    return '[' + this.x + '|' + this.y + '|' + this.z + '|' + this.w + ']';
  };
  Quaternion.prototype.setEulerAnglesRad_y2kzbl$ = function (yaw, pitch, roll) {
    var hr = roll * 0.5;
    var shr = MathUtils_getInstance().sin_mx4ult$(hr);
    var chr = MathUtils_getInstance().cos_mx4ult$(hr);
    var hp = pitch * 0.5;
    var shp = MathUtils_getInstance().sin_mx4ult$(hp);
    var chp = MathUtils_getInstance().cos_mx4ult$(hp);
    var hy = yaw * 0.5;
    var shy = MathUtils_getInstance().sin_mx4ult$(hy);
    var chy = MathUtils_getInstance().cos_mx4ult$(hy);
    var chy_shp = chy * shp;
    var shy_chp = shy * chp;
    var chy_chp = chy * chp;
    var shy_shp = shy * shp;
    this.x = chy_shp * chr + shy_chp * shr;
    this.y = shy_chp * chr - chy_shp * shr;
    this.z = chy_chp * shr - shy_shp * chr;
    this.w = chy_chp * chr + shy_shp * shr;
    return this;
  };
  Quaternion.prototype.getGimbalPole = function () {
    var t = this.y * this.x + this.z * this.w;
    return t > 0.499 ? 1 : t < -0.499 ? -1 : 0;
  };
  Quaternion.prototype.getRollRad = function () {
    var pole = this.getGimbalPole();
    return pole === 0 ? MathUtils_getInstance().atan2_dleff0$(2.0 * (this.w * this.z + this.y * this.x), 1.0 - 2.0 * (this.x * this.x + this.z * this.z)) : pole * 2.0 * MathUtils_getInstance().atan2_dleff0$(this.y, this.w);
  };
  Quaternion.prototype.getPitchRad = function () {
    var pole = this.getGimbalPole();
    var tmp$;
    if (pole === 0) {
      var value = 2.0 * (this.w * this.x - this.z * this.y);
      var min = -1.0;
      var clamp_73gzaq$result;
      clamp_73gzaq$break: {
        if (Kotlin.compareTo(value, min) <= 0) {
          clamp_73gzaq$result = min;
          break clamp_73gzaq$break;
        }
        if (Kotlin.compareTo(value, 1.0) >= 0) {
          clamp_73gzaq$result = 1.0;
          break clamp_73gzaq$break;
        }
        clamp_73gzaq$result = value;
      }
      tmp$ = Math.asin(clamp_73gzaq$result);
    }
     else
      tmp$ = pole * PI * 0.5;
    return tmp$;
  };
  Quaternion.prototype.getYawRad = function () {
    return this.getGimbalPole() === 0 ? MathUtils_getInstance().atan2_dleff0$(2.0 * (this.y * this.w + this.x * this.z), 1.0 - 2.0 * (this.y * this.y + this.x * this.x)) : 0.0;
  };
  Quaternion.prototype.len2 = function () {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  };
  Quaternion.prototype.nor = function () {
    var len = this.len2();
    if (len !== 0.0 && !MathUtils_getInstance().isEqual_dleff0$(len, 1.0)) {
      len = Math.sqrt(len);
      this.w /= len;
      this.x /= len;
      this.y /= len;
      this.z /= len;
    }
    return this;
  };
  Quaternion.prototype.conjugate = function () {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    return this;
  };
  Quaternion.prototype.transform_9wm29k$ = function (v) {
    Quaternion$Companion_getInstance().tmp2_0.set_sa462$(this);
    Quaternion$Companion_getInstance().tmp2_0.conjugate();
    Quaternion$Companion_getInstance().tmp2_0.mulLeft_sa462$(Quaternion$Companion_getInstance().tmp1_0.set_7b5o5w$(v.x, v.y, v.z, 0.0)).mulLeft_sa462$(this);
    v.x = Quaternion$Companion_getInstance().tmp2_0.x;
    v.y = Quaternion$Companion_getInstance().tmp2_0.y;
    v.z = Quaternion$Companion_getInstance().tmp2_0.z;
    return v;
  };
  Quaternion.prototype.mul_sa462$ = function (other) {
    var newX = this.w * other.x + this.x * other.w + this.y * other.z - this.z * other.y;
    var newY = this.w * other.y + this.y * other.w + this.z * other.x - this.x * other.z;
    var newZ = this.w * other.z + this.z * other.w + this.x * other.y - this.y * other.x;
    var newW = this.w * other.w - this.x * other.x - this.y * other.y - this.z * other.z;
    this.x = newX;
    this.y = newY;
    this.z = newZ;
    this.w = newW;
    return this;
  };
  Quaternion.prototype.times_sa462$ = function (other) {
    return this.copy_7b5o5w$().mul_sa462$(other);
  };
  Quaternion.prototype.mul_7b5o5w$ = function (x, y, z, w) {
    var newX = this.w * x + this.x * w + this.y * z - this.z * y;
    var newY = this.w * y + this.y * w + this.z * x - this.x * z;
    var newZ = this.w * z + this.z * w + this.x * y - this.y * x;
    var newW = this.w * w - this.x * x - this.y * y - this.z * z;
    this.x = newX;
    this.y = newY;
    this.z = newZ;
    this.w = newW;
    return this;
  };
  Quaternion.prototype.mulLeft_sa462$ = function (other) {
    var newX = other.w * this.x + other.x * this.w + other.y * this.z - other.z * this.y;
    var newY = other.w * this.y + other.y * this.w + other.z * this.x - other.x * this.z;
    var newZ = other.w * this.z + other.z * this.w + other.x * this.y - other.y * this.x;
    var newW = other.w * this.w - other.x * this.x - other.y * this.y - other.z * this.z;
    this.x = newX;
    this.y = newY;
    this.z = newZ;
    this.w = newW;
    return this;
  };
  Quaternion.prototype.mulLeft_7b5o5w$ = function (x, y, z, w) {
    var newX = w * this.x + x * this.w + y * this.z - z * y;
    var newY = w * this.y + y * this.w + z * this.x - x * z;
    var newZ = w * this.z + z * this.w + x * this.y - y * x;
    var newW = w * this.w - x * this.x - y * this.y - z * z;
    this.x = newX;
    this.y = newY;
    this.z = newZ;
    this.w = newW;
    return this;
  };
  Quaternion.prototype.add_sa462$ = function (quaternion) {
    this.x = this.x + quaternion.x;
    this.y = this.y + quaternion.y;
    this.z = this.z + quaternion.z;
    this.w = this.w + quaternion.w;
    return this;
  };
  Quaternion.prototype.plus_sa462$ = function (quaternion) {
    return this.copy_7b5o5w$().plus_sa462$(quaternion);
  };
  Quaternion.prototype.add_7b5o5w$ = function (qx, qy, qz, qw) {
    this.x = this.x + qx;
    this.y = this.y + qy;
    this.z = this.z + qz;
    this.w = this.w + qw;
    return this;
  };
  Quaternion.prototype.toMatrix_q3cr5i$ = function (matrix) {
    var xx = this.x * this.x;
    var xy = this.x * this.y;
    var xz = this.x * this.z;
    var xw = this.x * this.w;
    var yy = this.y * this.y;
    var yz = this.y * this.z;
    var yw = this.y * this.w;
    var zz = this.z * this.z;
    var zw = this.z * this.w;
    matrix[0] = 1.0 - 2.0 * (yy + zz);
    matrix[4] = 2.0 * (xy - zw);
    matrix[8] = 2.0 * (xz + yw);
    matrix[12] = 0.0;
    matrix[1] = 2.0 * (xy + zw);
    matrix[5] = 1.0 - 2.0 * (xx + zz);
    matrix[9] = 2.0 * (yz - xw);
    matrix[13] = 0.0;
    matrix[2] = 2.0 * (xz - yw);
    matrix[6] = 2.0 * (yz + xw);
    matrix[10] = 1.0 - 2.0 * (xx + yy);
    matrix[14] = 0.0;
    matrix[3] = 0.0;
    matrix[7] = 0.0;
    matrix[11] = 0.0;
    matrix[15] = 1.0;
  };
  Quaternion.prototype.idt = function () {
    return this.set_7b5o5w$(0.0, 0.0, 0.0, 1.0);
  };
  Quaternion.prototype.isIdentity = function () {
    return MathUtils_getInstance().isZero_dleff0$(this.x) && MathUtils_getInstance().isZero_dleff0$(this.y) && MathUtils_getInstance().isZero_dleff0$(this.z) && MathUtils_getInstance().isEqual_dleff0$(this.w, 1.0);
  };
  Quaternion.prototype.isIdentity_mx4ult$ = function (tolerance) {
    return MathUtils_getInstance().isZero_dleff0$(this.x, tolerance) && MathUtils_getInstance().isZero_dleff0$(this.y, tolerance) && MathUtils_getInstance().isZero_dleff0$(this.z, tolerance) && MathUtils_getInstance().isEqual_y2kzbl$(this.w, 1.0, tolerance);
  };
  Quaternion.prototype.setFromAxis_pz1gqy$ = function (axis, radians) {
    return this.setFromAxis_7b5o5w$(axis.x, axis.y, axis.z, radians);
  };
  Quaternion.prototype.setFromAxis_7b5o5w$ = function (x, y, z, radians) {
    var d = Vector3$Companion_getInstance().len_y2kzbl$(x, y, z);
    if (d === 0.0)
      return this.idt();
    d = 1.0 / d;
    var l_ang = radians;
    var l_sin = MathUtils_getInstance().sin_mx4ult$(l_ang / 2.0);
    var l_cos = MathUtils_getInstance().cos_mx4ult$(l_ang / 2.0);
    return this.set_7b5o5w$(d * x * l_sin, d * y * l_sin, d * z * l_sin, l_cos).nor();
  };
  Quaternion.prototype.setFromMatrix_e7v9es$ = function (matrix, normalizeAxes) {
    if (normalizeAxes === void 0)
      normalizeAxes = false;
    return this.setFromAxes_p6y6nc$(matrix.values[0], matrix.values[4], matrix.values[8], matrix.values[1], matrix.values[5], matrix.values[9], matrix.values[2], matrix.values[6], matrix.values[10], normalizeAxes);
  };
  Quaternion.prototype.setFromMatrix_nytvwb$ = function (normalizeAxes, matrix) {
    return this.setFromAxes_p6y6nc$(matrix.values[Matrix3$Companion_getInstance().M00], matrix.values[Matrix3$Companion_getInstance().M01], matrix.values[Matrix3$Companion_getInstance().M02], matrix.values[Matrix3$Companion_getInstance().M10], matrix.values[Matrix3$Companion_getInstance().M11], matrix.values[Matrix3$Companion_getInstance().M12], matrix.values[Matrix3$Companion_getInstance().M20], matrix.values[Matrix3$Companion_getInstance().M21], matrix.values[Matrix3$Companion_getInstance().M22], normalizeAxes);
  };
  Quaternion.prototype.setFromMatrix_1ktw3a$ = function (matrix) {
    return this.setFromMatrix_nytvwb$(false, matrix);
  };
  Quaternion.prototype.setFromAxes_b32tf5$ = function (xx, xy, xz, yx, yy, yz, zx, zy, zz) {
    return this.setFromAxes_p6y6nc$(xx, xy, xz, yx, yy, yz, zx, zy, zz, false);
  };
  Quaternion.prototype.setFromAxes_p6y6nc$ = function (xx, xy, xz, yx, yy, yz, zx, zy, zz, normalizeAxes) {
    if (normalizeAxes === void 0)
      normalizeAxes = false;
    var xx_0 = xx;
    var xy_0 = xy;
    var xz_0 = xz;
    var yy_0 = yy;
    var yz_0 = yz;
    var zx_0 = zx;
    var zy_0 = zy;
    var zz_0 = zz;
    if (normalizeAxes) {
      var lx = 1.0 / Vector3$Companion_getInstance().len_y2kzbl$(xx_0, xy_0, xz_0);
      var ly = 1.0 / Vector3$Companion_getInstance().len_y2kzbl$(yx, yy_0, yz_0);
      var lz = 1.0 / Vector3$Companion_getInstance().len_y2kzbl$(zx_0, zy_0, zz_0);
      xx_0 *= lx;
      xy_0 *= lx;
      xz_0 *= lx;
      yz_0 *= ly;
      yy_0 *= ly;
      yz_0 *= ly;
      zx_0 *= lz;
      zy_0 *= lz;
      zz_0 *= lz;
    }
    var t = xx_0 + yy_0 + zz_0;
    if (t >= 0) {
      var s = Math.sqrt(t + 1);
      this.w = 0.5 * s;
      s = 0.5 / s;
      this.x = (zy_0 - yz_0) * s;
      this.y = (xz_0 - zx_0) * s;
      this.z = (yx - xy_0) * s;
    }
     else if (xx_0 > yy_0 && xx_0 > zz_0) {
      var s_0 = Math.sqrt(1.0 + xx_0 - yy_0 - zz_0);
      this.x = s_0 * 0.5;
      s_0 = 0.5 / s_0;
      this.y = (yx + xy_0) * s_0;
      this.z = (xz_0 + zx_0) * s_0;
      this.w = (zy_0 - yz_0) * s_0;
    }
     else if (yy_0 > zz_0) {
      var s_1 = Math.sqrt(1.0 + yy_0 - xx_0 - zz_0);
      this.y = s_1 * 0.5;
      s_1 = 0.5 / s_1;
      this.x = (yx + xy_0) * s_1;
      this.z = (zy_0 + yz_0) * s_1;
      this.w = (xz_0 - zx_0) * s_1;
    }
     else {
      var s_2 = Math.sqrt(1.0 + zz_0 - xx_0 - yy_0);
      this.z = s_2 * 0.5;
      s_2 = 0.5 / s_2;
      this.x = (xz_0 + zx_0) * s_2;
      this.y = (zy_0 + yz_0) * s_2;
      this.w = (yx - xy_0) * s_2;
    }
    return this;
  };
  Quaternion.prototype.setFromCross_uwler8$ = function (v1, v2) {
    var value = v1.dot_1fv2cb$(v2);
    var min = -1;
    var clamp_73gzaq$result;
    clamp_73gzaq$break: {
      if (Kotlin.compareTo(value, min) <= 0) {
        clamp_73gzaq$result = min;
        break clamp_73gzaq$break;
      }
      if (Kotlin.compareTo(value, 1.0) >= 0) {
        clamp_73gzaq$result = 1.0;
        break clamp_73gzaq$break;
      }
      clamp_73gzaq$result = value;
    }
    var dot = clamp_73gzaq$result;
    var angle = Math.acos(dot);
    return this.setFromAxis_7b5o5w$(v1.y * v2.z - v1.z * v2.y, v1.z * v2.x - v1.x * v2.z, v1.x * v2.y - v1.y * v2.x, angle);
  };
  Quaternion.prototype.setFromCross_w8lrqs$ = function (x1, y1, z1, x2, y2, z2) {
    var value = Vector3$Companion_getInstance().dot_w8lrqs$(x1, y1, z1, x2, y2, z2);
    var min = -1.0;
    var clamp_73gzaq$result;
    clamp_73gzaq$break: {
      if (Kotlin.compareTo(value, min) <= 0) {
        clamp_73gzaq$result = min;
        break clamp_73gzaq$break;
      }
      if (Kotlin.compareTo(value, 1.0) >= 0) {
        clamp_73gzaq$result = 1.0;
        break clamp_73gzaq$break;
      }
      clamp_73gzaq$result = value;
    }
    var dot = clamp_73gzaq$result;
    var angle = Math.acos(dot);
    return this.setFromAxis_7b5o5w$(y1 * z2 - z1 * y2, z1 * x2 - x1 * z2, x1 * y2 - y1 * x2, angle);
  };
  Quaternion.prototype.slerp_hz73x1$ = function (end, alpha) {
    var dot = this.dot_sa462$(end);
    var absDot = dot < 0.0 ? -dot : dot;
    var scale0 = 1.0 - alpha;
    var scale1 = alpha;
    if (1.0 - absDot > 0.1) {
      var angle = Math.acos(absDot);
      var invSinTheta = 1.0 / MathUtils_getInstance().sin_mx4ult$(angle);
      scale0 = MathUtils_getInstance().sin_mx4ult$((1.0 - alpha) * angle) * invSinTheta;
      scale1 = MathUtils_getInstance().sin_mx4ult$(alpha * angle) * invSinTheta;
    }
    if (dot < 0.0)
      scale1 = -scale1;
    this.x = scale0 * this.x + scale1 * end.x;
    this.y = scale0 * this.y + scale1 * end.y;
    this.z = scale0 * this.z + scale1 * end.z;
    this.w = scale0 * this.w + scale1 * end.w;
    return this;
  };
  Quaternion.prototype.slerp_2ccfco$ = function (q) {
    var tmp$;
    var w = 1.0 / q.length;
    this.set_sa462$(q[0]).exp_mx4ult$(w);
    tmp$ = get_lastIndex_0(q);
    for (var i = 1; i <= tmp$; i++)
      this.mul_sa462$(Quaternion$Companion_getInstance().tmp1_0.set_sa462$(q[i]).exp_mx4ult$(w));
    this.nor();
    return this;
  };
  Quaternion.prototype.slerp_48tmu2$ = function (q, w) {
    var tmp$;
    this.set_sa462$(q[0]).exp_mx4ult$(w[0]);
    tmp$ = get_lastIndex_0(q);
    for (var i = 1; i <= tmp$; i++)
      this.mul_sa462$(Quaternion$Companion_getInstance().tmp1_0.set_sa462$(q[i]).exp_mx4ult$(w[i]));
    this.nor();
    return this;
  };
  Quaternion.prototype.exp_mx4ult$ = function (alpha) {
    var norm = this.len();
    var normExp = Math.pow(norm, alpha);
    var theta = Math.acos(this.w / norm);
    var coeff;
    if ((theta < 0.0 ? -theta : theta) < 0.001)
      coeff = normExp * alpha / norm;
    else
      coeff = normExp * MathUtils_getInstance().sin_mx4ult$(alpha * theta) / (norm * MathUtils_getInstance().sin_mx4ult$(theta));
    this.w = normExp * MathUtils_getInstance().cos_mx4ult$(alpha * theta);
    this.x *= coeff;
    this.y *= coeff;
    this.z *= coeff;
    this.nor();
    return this;
  };
  Quaternion.prototype.dot_sa462$ = function (other) {
    return this.x * other.x + this.y * other.y + this.z * other.z + this.w * other.w;
  };
  Quaternion.prototype.dot_7b5o5w$ = function (x, y, z, w) {
    return this.x * x + this.y * y + this.z * z + this.w * w;
  };
  Quaternion.prototype.mul_mx4ult$ = function (scalar) {
    this.x = this.x * scalar;
    this.y = this.y * scalar;
    this.z = this.z * scalar;
    this.w = this.w * scalar;
    return this;
  };
  Quaternion.prototype.times_mx4ult$ = function (scalar) {
    return this.copy_7b5o5w$().mul_mx4ult$(scalar);
  };
  Quaternion.prototype.getAxisAngleRad_9wm29k$ = function (axis) {
    if (this.w > 1)
      this.nor();
    var angle = 2.0 * Math.acos(this.w);
    var s = Math.sqrt(1 - this.w * this.w);
    if (s < MathUtils_getInstance().FLOAT_ROUNDING_ERROR) {
      axis.x = this.x;
      axis.y = this.y;
      axis.z = this.z;
    }
     else {
      axis.x = this.x / s;
      axis.y = this.y / s;
      axis.z = this.z / s;
    }
    return angle;
  };
  Quaternion.prototype.getAngleRad = function () {
    return 2.0 * Math.acos(this.w > 1 ? this.w / this.len() : this.w);
  };
  Quaternion.prototype.getSwingTwist_rd6wrh$ = function (axisX, axisY, axisZ, swing, twist) {
    var d = Vector3$Companion_getInstance().dot_w8lrqs$(this.x, this.y, this.z, axisX, axisY, axisZ);
    twist.set_7b5o5w$(axisX * d, axisY * d, axisZ * d, this.w).nor();
    swing.set_sa462$(twist).conjugate().mulLeft_sa462$(this);
  };
  Quaternion.prototype.getSwingTwist_bqqzr0$ = function (axis, swing, twist) {
    this.getSwingTwist_rd6wrh$(axis.x, axis.y, axis.z, swing, twist);
  };
  Quaternion.prototype.getAngleAroundRad_y2kzbl$ = function (axisX, axisY, axisZ) {
    var d = Vector3$Companion_getInstance().dot_w8lrqs$(this.x, this.y, this.z, axisX, axisY, axisZ);
    var l2 = Quaternion$Companion_getInstance().len2_7b5o5w$(axisX * d, axisY * d, axisZ * d, this.w);
    var tmp$;
    if (MathUtils_getInstance().isZero_dleff0$(l2))
      tmp$ = 0.0;
    else {
      var value = this.w / Math.sqrt(l2);
      var min = -1.0;
      var clamp_73gzaq$result;
      clamp_73gzaq$break: {
        if (Kotlin.compareTo(value, min) <= 0) {
          clamp_73gzaq$result = min;
          break clamp_73gzaq$break;
        }
        if (Kotlin.compareTo(value, 1.0) >= 0) {
          clamp_73gzaq$result = 1.0;
          break clamp_73gzaq$break;
        }
        clamp_73gzaq$result = value;
      }
      tmp$ = 2.0 * Math.acos(clamp_73gzaq$result);
    }
    return tmp$;
  };
  Quaternion.prototype.getAngleAroundRad_9wm29k$ = function (axis) {
    return this.getAngleAroundRad_y2kzbl$(axis.x, axis.y, axis.z);
  };
  function Quaternion$Companion() {
    Quaternion$Companion_instance = this;
    this.tmp1_0 = new Quaternion(0.0, 0.0, 0.0, 0.0);
    this.tmp2_0 = new Quaternion(0.0, 0.0, 0.0, 0.0);
  }
  Quaternion$Companion.prototype.len_7b5o5w$ = function (x, y, z, w) {
    return Math.sqrt(x * x + y * y + z * z + w * w);
  };
  Quaternion$Companion.prototype.len2_7b5o5w$ = function (x, y, z, w) {
    return x * x + y * y + z * z + w * w;
  };
  Quaternion$Companion.prototype.dot_nkj9yk$ = function (x1, y1, z1, w1, x2, y2, z2, w2) {
    return x1 * x2 + y1 * y2 + z1 * z2 + w1 * w2;
  };
  Quaternion$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Quaternion$Companion_instance = null;
  function Quaternion$Companion_getInstance() {
    if (Quaternion$Companion_instance === null) {
      new Quaternion$Companion();
    }
    return Quaternion$Companion_instance;
  }
  Quaternion.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Quaternion',
    interfaces: []
  };
  Quaternion.prototype.component1 = function () {
    return this.x;
  };
  Quaternion.prototype.component2 = function () {
    return this.y;
  };
  Quaternion.prototype.component3 = function () {
    return this.z;
  };
  Quaternion.prototype.component4 = function () {
    return this.w;
  };
  Quaternion.prototype.copy_7b5o5w$ = function (x, y, z, w) {
    return new Quaternion(x === void 0 ? this.x : x, y === void 0 ? this.y : y, z === void 0 ? this.z : z, w === void 0 ? this.w : w);
  };
  Quaternion.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.z) | 0;
    result = result * 31 + Kotlin.hashCode(this.w) | 0;
    return result;
  };
  Quaternion.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.z, other.z) && Kotlin.equals(this.w, other.w)))));
  };
  function Random(seed0, seed1) {
    Random$Companion_getInstance();
    if (seed0 === void 0)
      seed0 = Kotlin.Long.ZERO;
    if (seed1 === void 0)
      seed1 = Kotlin.Long.ZERO;
    this.seed0 = seed0;
    this.seed1 = seed1;
    if (Kotlin.equals(this.seed0, Kotlin.Long.ZERO)) {
      this.setSeed_s8cxhz$(Kotlin.Long.fromNumber(Math.random() * (new Kotlin.Long(-1, 2097151)).toNumber()));
    }
     else if (Kotlin.equals(this.seed1, Kotlin.Long.ZERO)) {
      this.setSeed_s8cxhz$(this.seed0);
    }
  }
  function Random$Companion() {
    Random$Companion_instance = this;
    this.NORM_DOUBLE_0 = 1.0 / (1 << 53);
    this.NORM_FLOAT_0 = 1.0 / (1 << 24);
  }
  Random$Companion.prototype.murmurHash3_0 = function (x) {
    var xV = x;
    xV = xV.xor(xV.shiftRightUnsigned(33));
    xV = xV.multiply(new Kotlin.Long(-313160499, -11423785));
    xV = xV.xor(xV.shiftRightUnsigned(33));
    xV = xV.multiply(new Kotlin.Long(444984403, -993084930));
    xV = xV.xor(xV.shiftRightUnsigned(33));
    return xV;
  };
  Random$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Random$Companion_instance = null;
  function Random$Companion_getInstance() {
    if (Random$Companion_instance === null) {
      new Random$Companion();
    }
    return Random$Companion_instance;
  }
  Random.prototype.nextLong = function () {
    var s1 = this.seed0;
    var s0 = this.seed1;
    this.seed0 = s0;
    s1 = s1.xor(s1.shiftLeft(23));
    this.seed1 = s1.xor(s0).xor(s1.shiftRightUnsigned(17)).xor(s0.shiftRightUnsigned(26));
    return this.seed1.add(s0);
  };
  Random.prototype.next_za3lpa$ = function (bits) {
    return this.nextLong().and(Kotlin.Long.fromInt((1 << bits) - 1 | 0)).toInt();
  };
  Random.prototype.nextInt = function () {
    return this.nextLong().toInt();
  };
  Random.prototype.nextInt_za3lpa$ = function (n) {
    return this.nextLong_s8cxhz$(Kotlin.Long.fromInt(n)).toInt();
  };
  Random.prototype.nextLong_s8cxhz$ = function (n) {
    if (n.compareTo_11rb$(Kotlin.Long.fromInt(0)) <= 0)
      throw new IllegalArgumentException('n must be positive');
    while (true) {
      var bits = this.nextLong().shiftRightUnsigned(1);
      var value = bits.modulo(n);
      if (bits.subtract(value).add(n.subtract(Kotlin.Long.fromInt(1))).compareTo_11rb$(Kotlin.Long.fromInt(0)) >= 0)
        return value;
    }
  };
  Random.prototype.nextDouble = function () {
    return this.nextLong().shiftRightUnsigned(11).toNumber() * Random$Companion_getInstance().NORM_DOUBLE_0;
  };
  Random.prototype.nextFloat = function () {
    return this.nextLong().shiftRightUnsigned(40).toNumber() * Random$Companion_getInstance().NORM_FLOAT_0;
  };
  Random.prototype.nextBoolean = function () {
    return !Kotlin.equals(this.nextLong().and(Kotlin.Long.ONE), Kotlin.Long.ZERO);
  };
  Random.prototype.nextBytes_fqrh44$ = function (bytes) {
    var tmp$;
    var i = bytes.length;
    while (i !== 0) {
      var x = i;
      var min_sdesaw$result;
      if (Kotlin.compareTo(x, 8) <= 0) {
        min_sdesaw$result = x;
      }
       else {
        min_sdesaw$result = 8;
      }
      var n = min_sdesaw$result;
      var bits = this.nextLong();
      while ((tmp$ = n, n = tmp$ - 1 | 0, tmp$) !== 0) {
        bytes[i = i - 1 | 0, i] = Kotlin.toByte(bits.toInt());
        bits = bits.shiftRight(8);
      }
    }
  };
  Random.prototype.setSeed_s8cxhz$ = function (seed) {
    var seed0 = Random$Companion_getInstance().murmurHash3_0(Kotlin.equals(seed, Kotlin.Long.ZERO) ? new Kotlin.Long(0, -2097152) : seed);
    this.setState_3pjtqy$(seed0, Random$Companion_getInstance().murmurHash3_0(seed0));
  };
  Random.prototype.setState_3pjtqy$ = function (seed0, seed1) {
    this.seed0 = seed0;
    this.seed1 = seed1;
  };
  Random.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Random',
    interfaces: []
  };
  function Range2(min, max) {
    if (min === void 0)
      min = null;
    if (max === void 0)
      max = null;
    this.min = min;
    this.max = max;
  }
  Range2.prototype.contains_mef7kx$ = function (value) {
    var tmp$, tmp$_0;
    if (this.min != null && Kotlin.compareTo((tmp$ = this.min) != null ? tmp$ : Kotlin.throwNPE(), value) > 0)
      return false;
    if (this.max != null && Kotlin.compareTo((tmp$_0 = this.max) != null ? tmp$_0 : Kotlin.throwNPE(), value) < 0)
      return false;
    return true;
  };
  Range2.prototype.bound_66lwr4$ = function (range) {
    var tmp$, tmp$_1, tmp$_0;
    var tmp$_2, tmp$_4, tmp$_3;
    if (this.min == null)
      this.min = range.min;
    else if (range.min != null) {
      MathUtils_getInstance();
      tmp$_1 = (tmp$ = range.min) != null ? tmp$ : Kotlin.throwNPE();
      var y = (tmp$_0 = this.min) != null ? tmp$_0 : Kotlin.throwNPE();
      var max_sdesaw$result;
      if (Kotlin.compareTo(tmp$_1, y) >= 0) {
        max_sdesaw$result = tmp$_1;
      }
       else {
        max_sdesaw$result = y;
      }
      this.min = max_sdesaw$result;
    }
    if (this.max == null)
      this.max = range.max;
    else if (range.max != null) {
      MathUtils_getInstance();
      tmp$_4 = (tmp$_2 = range.max) != null ? tmp$_2 : Kotlin.throwNPE();
      var y_0 = (tmp$_3 = this.max) != null ? tmp$_3 : Kotlin.throwNPE();
      var min_sdesaw$result;
      if (Kotlin.compareTo(tmp$_4, y_0) <= 0) {
        min_sdesaw$result = tmp$_4;
      }
       else {
        min_sdesaw$result = y_0;
      }
      this.max = min_sdesaw$result;
    }
    return this;
  };
  Range2.prototype.clamp_mef7kx$ = function (value) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (value == null)
      return null;
    if (this.min != null && Kotlin.compareTo(value, (tmp$ = this.min) != null ? tmp$ : Kotlin.throwNPE()) < 0)
      return (tmp$_0 = this.min) != null ? tmp$_0 : Kotlin.throwNPE();
    if (this.max != null && Kotlin.compareTo(value, (tmp$_1 = this.max) != null ? tmp$_1 : Kotlin.throwNPE()) > 0)
      return (tmp$_2 = this.max) != null ? tmp$_2 : Kotlin.throwNPE();
    return value;
  };
  Range2.prototype.clamp2_mef7kx$ = function (value) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (this.min != null && Kotlin.compareTo(value, (tmp$ = this.min) != null ? tmp$ : Kotlin.throwNPE()) < 0)
      return (tmp$_0 = this.min) != null ? tmp$_0 : Kotlin.throwNPE();
    if (this.max != null && Kotlin.compareTo(value, (tmp$_1 = this.max) != null ? tmp$_1 : Kotlin.throwNPE()) > 0)
      return (tmp$_2 = this.max) != null ? tmp$_2 : Kotlin.throwNPE();
    return value;
  };
  Range2.prototype.set_66lwr4$ = function (other) {
    this.min = other.min;
    this.max = other.max;
  };
  Range2.prototype.clear = function () {
    this.min = null;
    this.max = null;
  };
  Range2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Range2',
    interfaces: [Clearable]
  };
  Range2.prototype.component1 = function () {
    return this.min;
  };
  Range2.prototype.component2 = function () {
    return this.max;
  };
  Range2.prototype.copy_n65qkk$ = function (min, max) {
    return new Range2(min === void 0 ? this.min : min, max === void 0 ? this.max : max);
  };
  Range2.prototype.toString = function () {
    return 'Range2(min=' + Kotlin.toString(this.min) + (', max=' + Kotlin.toString(this.max)) + ')';
  };
  Range2.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.min) | 0;
    result = result * 31 + Kotlin.hashCode(this.max) | 0;
    return result;
  };
  Range2.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.min, other.min) && Kotlin.equals(this.max, other.max)))));
  };
  function Ray(origin, direction) {
    Ray$Companion_getInstance();
    if (origin === void 0)
      origin = new Vector3();
    if (direction === void 0)
      direction = new Vector3();
    this.origin = origin;
    this.direction = direction;
    this.directionInv = new Vector3();
  }
  Ray.prototype.update = function () {
    this.direction.nor();
    this.directionInv.set_y2kzbl$(1.0 / this.direction.x, 1.0 / this.direction.y, 1.0 / this.direction.z);
  };
  Ray.prototype.getEndPoint_4lg16t$ = function (distance, out) {
    return out.set_1fv2cb$(this.direction).scl_mx4ult$(distance).add_1fv2cb$(this.origin);
  };
  Ray.prototype.getPointAtZ_4lg16s$ = function (z, out) {
    if (this.direction.z === 0.0)
      throw new Exception('direction.z is zero');
    var d = (z - this.origin.z) / this.direction.z;
    return out.set_dleff0$(this.direction.x, this.direction.y).scl_mx4ult$(d).add_dleff0$(this.origin.x, this.origin.y);
  };
  Ray.prototype.mul_1ktw39$ = function (matrix) {
    Ray$Companion_getInstance().tmpVec.set_1fv2cb$(this.origin).add_1fv2cb$(this.direction);
    Ray$Companion_getInstance().tmpVec.mul_1ktw39$(matrix);
    this.origin.mul_1ktw39$(matrix);
    this.direction.set_1fv2cb$(Ray$Companion_getInstance().tmpVec.sub_1fv2cb$(this.origin));
    this.update();
    return this;
  };
  Ray.prototype.set_s18mjw$ = function (origin, direction) {
    this.origin.set_1fv2cb$(origin);
    this.direction.set_1fv2cb$(direction);
    this.update();
    return this;
  };
  Ray.prototype.set_w8lrqs$ = function (x, y, z, dX, dY, dZ) {
    this.origin.set_y2kzbl$(x, y, z);
    this.direction.set_y2kzbl$(dX, dY, dZ);
    this.update();
    return this;
  };
  Ray.prototype.set_ujzndq$ = function (ray) {
    this.origin.set_1fv2cb$(ray.origin);
    this.direction.set_1fv2cb$(ray.direction);
    return this;
  };
  Ray.prototype.intersects_y8xsj$ = function (ray, out) {
    if (out === void 0)
      out = null;
    var tmp$;
    if ((tmp$ = this.origin) != null ? tmp$.equals(ray.origin) : null) {
      out != null ? out.set_1fv2cb$(this.origin) : null;
      return true;
    }
    var d1 = this.direction;
    var d2 = ray.direction;
    var cross = Vector3$Companion_getInstance().obtain();
    cross.set_1fv2cb$(d1).crs_1fv2cb$(d2);
    var u = cross.dot_1fv2cb$(this.origin);
    var u2 = cross.dot_1fv2cb$(ray.origin);
    if (notCloseTo(u, u2)) {
      cross.free();
      return false;
    }
    var perp1 = Vector3$Companion_getInstance().obtain();
    perp1.set_1fv2cb$(d1).crs_1fv2cb$(cross);
    var v = perp1.dot_1fv2cb$(this.origin);
    if (out != null) {
      var t = (v - perp1.x * ray.origin.x - perp1.y * ray.origin.y - perp1.z * ray.origin.z) / (perp1.y * ray.direction.y + perp1.x * ray.direction.x + perp1.z * ray.direction.z);
      ray.getEndPoint_4lg16t$(t, out);
    }
    cross.free();
    perp1.free();
    return true;
  };
  Ray.prototype.intersects_vien4v$ = function (plane, out) {
    var tmp$;
    var denom = this.direction.dot_1fv2cb$(plane.normal);
    if (denom !== 0.0) {
      var t = -(this.origin.dot_1fv2cb$(plane.normal) + plane.d) / denom;
      if (t < 0)
        return false;
      (tmp$ = out != null ? out.set_1fv2cb$(this.origin) : null) != null ? tmp$.add_1fv2cb$(Ray$Companion_getInstance().v3_0_0.set_1fv2cb$(this.direction).scl_mx4ult$(t)) : null;
      return true;
    }
     else if (plane.testPoint_9wm29k$(this.origin) === PlaneSide$ON_PLANE_getInstance()) {
      out != null ? out.set_1fv2cb$(this.origin) : null;
      return true;
    }
     else
      return false;
  };
  Ray.prototype.intersects_fvcu7h$ = function (v1, v2, v3, out) {
    if (out === void 0)
      out = null;
    Ray$Companion_getInstance().plane_0.set_kv16yg$(v1, v2, v3);
    if (!this.intersects_vien4v$(Ray$Companion_getInstance().plane_0, Ray$Companion_getInstance().v3_3_0))
      return false;
    Ray$Companion_getInstance().v3_0_0.set_1fv2cb$(v3).sub_1fv2cb$(v1);
    Ray$Companion_getInstance().v3_1_0.set_1fv2cb$(v2).sub_1fv2cb$(v1);
    Ray$Companion_getInstance().v3_2_0.set_1fv2cb$(Ray$Companion_getInstance().v3_3_0).sub_1fv2cb$(v1);
    var dot00 = Ray$Companion_getInstance().v3_0_0.dot_1fv2cb$(Ray$Companion_getInstance().v3_0_0);
    var dot01 = Ray$Companion_getInstance().v3_0_0.dot_1fv2cb$(Ray$Companion_getInstance().v3_1_0);
    var dot02 = Ray$Companion_getInstance().v3_0_0.dot_1fv2cb$(Ray$Companion_getInstance().v3_2_0);
    var dot11 = Ray$Companion_getInstance().v3_1_0.dot_1fv2cb$(Ray$Companion_getInstance().v3_1_0);
    var dot12 = Ray$Companion_getInstance().v3_1_0.dot_1fv2cb$(Ray$Companion_getInstance().v3_2_0);
    var denom = dot00 * dot11 - dot01 * dot01;
    if (denom === 0.0)
      return false;
    var u = (dot11 * dot02 - dot01 * dot12) / denom;
    var v = (dot00 * dot12 - dot01 * dot02) / denom;
    if (u >= 0.0 && v >= 0.0 && u + v <= 1.0) {
      out != null ? out.set_1fv2cb$(Ray$Companion_getInstance().v3_3_0) : null;
      return true;
    }
     else {
      return false;
    }
  };
  Ray.prototype.free = function () {
    Ray$Companion_getInstance().pool_0.free_11rb$(this);
  };
  Ray.prototype.clear = function () {
    this.origin.clear();
    this.direction.clear();
    this.directionInv.clear();
  };
  function Ray$Companion() {
    Ray$Companion_instance = this;
    this.tmpVec = new Vector3();
    this.plane_0 = new Plane(new Vector3(), 0.0);
    this.v3_0_0 = new Vector3();
    this.v3_1_0 = new Vector3();
    this.v3_2_0 = new Vector3();
    this.v3_3_0 = new Vector3();
    this.pool_0 = new ClearableObjectPool(void 0, Ray$Companion$pool$lambda);
  }
  Ray$Companion.prototype.obtain = function () {
    return this.pool_0.obtain();
  };
  function Ray$Companion$pool$lambda() {
    return new Ray();
  }
  Ray$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Ray$Companion_instance = null;
  function Ray$Companion_getInstance() {
    if (Ray$Companion_instance === null) {
      new Ray$Companion();
    }
    return Ray$Companion_instance;
  }
  Ray.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Ray',
    interfaces: [Clearable]
  };
  Ray.prototype.component1 = function () {
    return this.origin;
  };
  Ray.prototype.component2 = function () {
    return this.direction;
  };
  Ray.prototype.copy_s18mjw$ = function (origin, direction) {
    return new Ray(origin === void 0 ? this.origin : origin, direction === void 0 ? this.direction : direction);
  };
  Ray.prototype.toString = function () {
    return 'Ray(origin=' + Kotlin.toString(this.origin) + (', direction=' + Kotlin.toString(this.direction)) + ')';
  };
  Ray.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.origin) | 0;
    result = result * 31 + Kotlin.hashCode(this.direction) | 0;
    return result;
  };
  Ray.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.origin, other.origin) && Kotlin.equals(this.direction, other.direction)))));
  };
  function Ray2(origin, direction) {
    Ray2$Companion_getInstance();
    if (origin === void 0)
      origin = new Vector2();
    if (direction === void 0)
      direction = new Vector2();
    this.origin = origin;
    this.direction = direction;
  }
  Ray2.prototype.intersects_4podi5$ = function (ray, out) {
    return Ray2$Companion_getInstance().intersects_x4flbt$(this.origin, this.direction, ray.origin, ray.direction, out);
  };
  Ray2.prototype.free = function () {
    Ray2$Companion_getInstance().pool_0.free_11rb$(this);
  };
  Ray2.prototype.clear = function () {
    this.origin.clear();
    this.direction.clear();
  };
  function Ray2$Companion() {
    Ray2$Companion_instance = this;
    this.pool_0 = new ClearableObjectPool(void 0, Ray2$Companion$pool$lambda);
  }
  Ray2$Companion.prototype.obtain = function () {
    return this.pool_0.obtain();
  };
  Ray2$Companion.prototype.intersects_v89or8$ = function (start1, direction1, start2, direction2) {
    var difx = start2.x - start1.x;
    var dify = start2.y - start1.y;
    var d1xd2 = direction1.x * direction2.y - direction1.y * direction2.x;
    if (d1xd2 === 0.0) {
      return FloatCompanionObject.POSITIVE_INFINITY;
    }
    var d2sx = direction2.x / d1xd2;
    var d2sy = direction2.y / d1xd2;
    return difx * d2sy - dify * d2sx;
  };
  Ray2$Companion.prototype.intersects_x4flbt$ = function (start1, direction1, start2, direction2, out) {
    var f = this.intersects_v89or8$(start1, direction1, start2, direction2);
    if (f < FloatCompanionObject.POSITIVE_INFINITY) {
      out.set_1fv330$(direction1).scl_mx4ult$(f).add_1fv330$(start1);
      return true;
    }
     else {
      out.set_1fv330$(start1);
      return false;
    }
  };
  function Ray2$Companion$pool$lambda() {
    return new Ray2();
  }
  Ray2$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Ray2$Companion_instance = null;
  function Ray2$Companion_getInstance() {
    if (Ray2$Companion_instance === null) {
      new Ray2$Companion();
    }
    return Ray2$Companion_instance;
  }
  Ray2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Ray2',
    interfaces: [Clearable]
  };
  Ray2.prototype.component1 = function () {
    return this.origin;
  };
  Ray2.prototype.component2 = function () {
    return this.direction;
  };
  Ray2.prototype.copy_rirrik$ = function (origin, direction) {
    return new Ray2(origin === void 0 ? this.origin : origin, direction === void 0 ? this.direction : direction);
  };
  Ray2.prototype.toString = function () {
    return 'Ray2(origin=' + Kotlin.toString(this.origin) + (', direction=' + Kotlin.toString(this.direction)) + ')';
  };
  Ray2.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.origin) | 0;
    result = result * 31 + Kotlin.hashCode(this.direction) | 0;
    return result;
  };
  Ray2.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.origin, other.origin) && Kotlin.equals(this.direction, other.direction)))));
  };
  function RectangleRo() {
  }
  RectangleRo.prototype.intersects_y8xsj$ = function (r, out, callback$default) {
    if (out === void 0)
      out = null;
    return callback$default ? callback$default(r, out) : this.intersects_y8xsj$$default(r, out);
  };
  RectangleRo.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'RectangleRo',
    interfaces: []
  };
  function Rectangle(x, y, width, height) {
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (width === void 0)
      width = 0.0;
    if (height === void 0)
      height = 0.0;
    this.x_wpgr1v$_0 = x;
    this.y_wpgr1v$_0 = y;
    this.width_wpgr1v$_0 = width;
    this.height_wpgr1v$_0 = height;
  }
  Object.defineProperty(Rectangle.prototype, 'x', {
    get: function () {
      return this.x_wpgr1v$_0;
    },
    set: function (x) {
      this.x_wpgr1v$_0 = x;
    }
  });
  Object.defineProperty(Rectangle.prototype, 'y', {
    get: function () {
      return this.y_wpgr1v$_0;
    },
    set: function (y) {
      this.y_wpgr1v$_0 = y;
    }
  });
  Object.defineProperty(Rectangle.prototype, 'width', {
    get: function () {
      return this.width_wpgr1v$_0;
    },
    set: function (width) {
      this.width_wpgr1v$_0 = width;
    }
  });
  Object.defineProperty(Rectangle.prototype, 'height', {
    get: function () {
      return this.height_wpgr1v$_0;
    },
    set: function (height) {
      this.height_wpgr1v$_0 = height;
    }
  });
  Object.defineProperty(Rectangle.prototype, 'left', {
    get: function () {
      return this.x;
    }
  });
  Object.defineProperty(Rectangle.prototype, 'top', {
    get: function () {
      return this.y;
    }
  });
  Object.defineProperty(Rectangle.prototype, 'right', {
    get: function () {
      return this.x + this.width;
    }
  });
  Object.defineProperty(Rectangle.prototype, 'bottom', {
    get: function () {
      return this.y + this.height;
    }
  });
  Rectangle.prototype.isEmpty = function () {
    return this.width === 0.0 || this.height === 0.0;
  };
  Rectangle.prototype.isNotEmpty = function () {
    return !this.isEmpty();
  };
  Rectangle.prototype.set_7b5o5w$ = function (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    return this;
  };
  Rectangle.prototype.set_tjonv8$ = function (x, y, width, height) {
    return this.set_7b5o5w$(x, y, width, height);
  };
  Rectangle.prototype.clear = function () {
    this.x = 0.0;
    this.y = 0.0;
    this.width = 0.0;
    this.height = 0.0;
  };
  Rectangle.prototype.getPosition_9wm29l$ = function (position) {
    return position.set_dleff0$(this.x, this.y);
  };
  Rectangle.prototype.setPosition_9wm29l$ = function (position) {
    this.x = position.x;
    this.y = position.y;
    return this;
  };
  Rectangle.prototype.setPosition_dleff0$ = function (x, y) {
    this.x = x;
    this.y = y;
    return this;
  };
  Rectangle.prototype.setSize_dleff0$ = function (width, height) {
    this.width = width;
    this.height = height;
    return this;
  };
  Rectangle.prototype.getSize_9wm29l$ = function (out) {
    return out.set_dleff0$(this.width, this.height);
  };
  Rectangle.prototype.intersects_dleff0$ = function (x, y) {
    return this.x <= x && this.x + this.width >= x && this.y <= y && this.y + this.height >= y;
  };
  Rectangle.prototype.intersects_9wm29l$ = function (point) {
    return this.intersects_dleff0$(point.x, point.y);
  };
  Rectangle.prototype.intersects_y8xsj$$default = function (r, out) {
    if (r.direction.z === 0.0)
      return false;
    var m = -r.origin.z * r.directionInv.z;
    if (m < 0)
      return false;
    var x2 = r.origin.x + m * r.direction.x;
    var y2 = r.origin.y + m * r.direction.y;
    var intersects = x2 >= this.x && x2 <= this.x + this.width && y2 >= this.y && y2 <= this.y + this.height;
    if (out != null && intersects) {
      r.getEndPoint_4lg16t$(m, out);
    }
    return intersects;
  };
  Rectangle.prototype.contains_jhujlw$ = function (rectangle) {
    var xMin = rectangle.x;
    var xMax = xMin + rectangle.width;
    var yMin = rectangle.y;
    var yMax = yMin + rectangle.height;
    return xMin > this.x && xMin < this.x + this.width && (xMax > this.x && xMax < this.x + this.width) && (yMin > this.y && yMin < this.y + this.height && (yMax > this.y && yMax < this.y + this.height));
  };
  Rectangle.prototype.intersects_jhujlw$ = function (r) {
    return this.intersects_7b5o5w$(r.x, r.y, r.width, r.height);
  };
  Rectangle.prototype.intersects_7b5o5w$ = function (xVal, yVal, widthVal, heightVal) {
    return this.x < xVal + widthVal && this.x + this.width > xVal && this.y < yVal + heightVal && this.y + this.height > yVal;
  };
  Rectangle.prototype.set_jhujlw$ = function (rect) {
    this.x = rect.x;
    this.y = rect.y;
    this.width = rect.width;
    this.height = rect.height;
    return this;
  };
  Rectangle.prototype.getAspectRatio = function () {
    return this.height === 0.0 ? 0.0 : this.width / this.height;
  };
  Rectangle.prototype.getCenter_9wm29l$ = function (vector) {
    vector.x = this.x + this.width * 0.5;
    vector.y = this.y + this.height * 0.5;
    return vector;
  };
  Rectangle.prototype.setCenter_dleff0$ = function (x, y) {
    this.setPosition_dleff0$(x - this.width * 0.5, y - this.height * 0.5);
    return this;
  };
  Rectangle.prototype.setCenter_9wm29l$ = function (position) {
    this.setPosition_dleff0$(position.x - this.width * 0.5, position.y - this.height * 0.5);
    return this;
  };
  Rectangle.prototype.fitOutside_o5do7t$ = function (rect) {
    var ratio = this.getAspectRatio();
    if (ratio > rect.getAspectRatio()) {
      this.setSize_dleff0$(rect.height * ratio, rect.height);
    }
     else {
      this.setSize_dleff0$(rect.width, rect.width / ratio);
    }
    this.setPosition_dleff0$(rect.x + rect.width * 0.5 - this.width * 0.5, rect.y + rect.height * 0.5 - this.height * 0.5);
    return this;
  };
  Rectangle.prototype.fitInside_o5do7t$ = function (rect) {
    var ratio = this.getAspectRatio();
    if (ratio < rect.getAspectRatio()) {
      this.setSize_dleff0$(rect.height * ratio, rect.height);
    }
     else {
      this.setSize_dleff0$(rect.width, rect.width / ratio);
    }
    this.setPosition_dleff0$(rect.x + rect.width / 2 - this.width / 2, rect.y + rect.height / 2 - this.height / 2);
    return this;
  };
  Rectangle.prototype.canContain_dleff0$ = function (width, height) {
    return this.width >= width && this.height >= height;
  };
  Rectangle.prototype.area = function () {
    return this.width * this.height;
  };
  Rectangle.prototype.perimeter = function () {
    return 2 * (this.width + this.height);
  };
  Rectangle.prototype.inflate_7b5o5w$ = function (left, top, right, bottom) {
    this.x = this.x - left;
    this.width = this.width + (left + right);
    this.y = this.y - top;
    this.height = this.height + (top + bottom);
  };
  Rectangle.prototype.ext_dleff0$ = function (x2, y2) {
    if (x2 > this.x + this.width)
      this.width = x2 - this.x;
    if (x2 < this.x)
      this.x = x2;
    if (y2 > this.y + this.height)
      this.height = y2 - this.y;
    if (y2 < this.y)
      this.y = y2;
  };
  Rectangle.prototype.ext_o5do7t$ = function (rect) {
    var a = this.x;
    var b = rect.x;
    var minX = Math.min(a, b);
    var a_0 = this.x + this.width;
    var b_0 = rect.x + rect.width;
    var maxX = Math.max(a_0, b_0);
    this.x = minX;
    this.width = maxX - minX;
    var a_1 = this.y;
    var b_1 = rect.y;
    var minY = Math.min(a_1, b_1);
    var a_2 = this.y + this.height;
    var b_2 = rect.y + rect.height;
    var maxY = Math.max(a_2, b_2);
    this.y = minY;
    this.height = maxY - minY;
    return this;
  };
  Rectangle.prototype.scl_mx4ult$ = function (scalar) {
    this.x = this.x * scalar;
    this.y = this.y * scalar;
    this.width = this.width * scalar;
    this.height = this.height * scalar;
  };
  Rectangle.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Rectangle',
    interfaces: [RectangleRo, Clearable]
  };
  Rectangle.prototype.component1 = function () {
    return this.x;
  };
  Rectangle.prototype.component2 = function () {
    return this.y;
  };
  Rectangle.prototype.component3 = function () {
    return this.width;
  };
  Rectangle.prototype.component4 = function () {
    return this.height;
  };
  Rectangle.prototype.copy_7b5o5w$ = function (x, y, width, height) {
    return new Rectangle(x === void 0 ? this.x : x, y === void 0 ? this.y : y, width === void 0 ? this.width : width, height === void 0 ? this.height : height);
  };
  Rectangle.prototype.toString = function () {
    return 'Rectangle(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', width=' + Kotlin.toString(this.width)) + (', height=' + Kotlin.toString(this.height)) + ')';
  };
  Rectangle.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  Rectangle.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
  };
  function RectangleSerializer() {
    RectangleSerializer_instance = this;
  }
  RectangleSerializer.prototype.write_r4tkhj$ = function ($receiver, writer) {
    float(writer, 'x', $receiver.x);
    float(writer, 'y', $receiver.y);
    float(writer, 'width', $receiver.width);
    float(writer, 'height', $receiver.height);
  };
  RectangleSerializer.prototype.read_gax0m7$ = function (reader) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    return new Rectangle((tmp$ = float_0(reader, 'x')) != null ? tmp$ : Kotlin.throwNPE(), (tmp$_0 = float_0(reader, 'y')) != null ? tmp$_0 : Kotlin.throwNPE(), (tmp$_1 = float_0(reader, 'width')) != null ? tmp$_1 : Kotlin.throwNPE(), (tmp$_2 = float_0(reader, 'height')) != null ? tmp$_2 : Kotlin.throwNPE());
  };
  RectangleSerializer.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'RectangleSerializer',
    interfaces: [From, To]
  };
  var RectangleSerializer_instance = null;
  function RectangleSerializer_getInstance() {
    if (RectangleSerializer_instance === null) {
      new RectangleSerializer();
    }
    return RectangleSerializer_instance;
  }
  function Vector2Ro() {
  }
  Vector2Ro.prototype.component1 = function () {
    return this.x;
  };
  Vector2Ro.prototype.component2 = function () {
    return this.y;
  };
  Vector2Ro.prototype.copy = function () {
    return new Vector2(this.x, this.y);
  };
  Vector2Ro.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'Vector2Ro',
    interfaces: []
  };
  function Vector2(x, y) {
    Vector2$Companion_getInstance();
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    this.x_myjqb1$_0 = x;
    this.y_myjqb1$_0 = y;
  }
  Object.defineProperty(Vector2.prototype, 'x', {
    get: function () {
      return this.x_myjqb1$_0;
    },
    set: function (x) {
      this.x_myjqb1$_0 = x;
    }
  });
  Object.defineProperty(Vector2.prototype, 'y', {
    get: function () {
      return this.y_myjqb1$_0;
    },
    set: function (y) {
      this.y_myjqb1$_0 = y;
    }
  });
  Vector2.prototype.len = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  };
  Vector2.prototype.len2 = function () {
    return this.x * this.x + this.y * this.y;
  };
  Vector2.prototype.set_1fv330$ = function (v) {
    this.x = v.x;
    this.y = v.y;
    return this;
  };
  Vector2.prototype.set_dleff0$ = function (x, y) {
    this.x = x;
    this.y = y;
    return this;
  };
  Vector2.prototype.sub_1fv330$ = function (v) {
    this.x = this.x - v.x;
    this.y = this.y - v.y;
    return this;
  };
  Vector2.prototype.sub_dleff0$ = function (x, y) {
    this.x = this.x - x;
    this.y = this.y - y;
    return this;
  };
  Vector2.prototype.nor = function () {
    var len = this.len();
    if (len !== 0.0) {
      this.x = this.x / len;
      this.y = this.y / len;
    }
    return this;
  };
  Vector2.prototype.add_1fv330$ = function (v) {
    this.x = this.x + v.x;
    this.y = this.y + v.y;
    return this;
  };
  Vector2.prototype.add_dleff0$ = function (x, y) {
    this.x = this.x + x;
    this.y = this.y + y;
    return this;
  };
  Vector2.prototype.dot_1fv330$ = function (v) {
    return this.x * v.x + this.y * v.y;
  };
  Vector2.prototype.dot_dleff0$ = function (ox, oy) {
    return this.x * ox + this.y * oy;
  };
  Vector2.prototype.scl_mx4ult$ = function (scalar) {
    this.x = this.x * scalar;
    this.y = this.y * scalar;
    return this;
  };
  Vector2.prototype.scl_dleff0$ = function (x, y) {
    this.x = this.x * x;
    this.y = this.y * y;
    return this;
  };
  Vector2.prototype.scl_1fv330$ = function (v) {
    this.x = this.x * v.x;
    this.y = this.y * v.y;
    return this;
  };
  Vector2.prototype.mulAdd_hj2y21$ = function (vec, scalar) {
    this.x = this.x + vec.x * scalar;
    this.y = this.y + vec.y * scalar;
    return this;
  };
  Vector2.prototype.mulAdd_v3bz2s$ = function (vec, mulVec) {
    this.x = this.x + vec.x * mulVec.x;
    this.y = this.y + vec.y * mulVec.y;
    return this;
  };
  Vector2.prototype.dst_1fv330$ = function (v) {
    var x_d = v.x - this.x;
    var y_d = v.y - this.y;
    return Math.sqrt(x_d * x_d + y_d * y_d);
  };
  Vector2.prototype.dst_dleff0$ = function (x, y) {
    var x_d = x - this.x;
    var y_d = y - this.y;
    return Math.sqrt(x_d * x_d + y_d * y_d);
  };
  Vector2.prototype.dst2_1fv330$ = function (v) {
    var x_d = v.x - this.x;
    var y_d = v.y - this.y;
    return x_d * x_d + y_d * y_d;
  };
  Vector2.prototype.dst2_dleff0$ = function (x, y) {
    var x_d = x - this.x;
    var y_d = y - this.y;
    return x_d * x_d + y_d * y_d;
  };
  Vector2.prototype.manhattanDst_1fv330$ = function (v) {
    var x_d = v.x - this.x;
    var y_d = v.y - this.y;
    return (x_d < 0.0 ? -x_d : x_d) + (y_d < 0.0 ? -y_d : y_d);
  };
  Vector2.prototype.limit_mx4ult$ = function (limit) {
    if (this.len2() > limit * limit) {
      this.nor();
      this.scl_mx4ult$(limit);
    }
    return this;
  };
  Vector2.prototype.clamp_dleff0$ = function (min, max) {
    var l2 = this.len2();
    if (l2 === 0.0)
      return this;
    if (l2 > max * max)
      return this.nor().scl_mx4ult$(max);
    if (l2 < min * min)
      return this.nor().scl_mx4ult$(min);
    return this;
  };
  Vector2.prototype.mul_1ktw3a$ = function (mat) {
    var vals = mat.values;
    var x2 = this.x * vals[0] + this.y * vals[3] + vals[6];
    var y2 = this.x * vals[1] + this.y * vals[4] + vals[7];
    this.x = x2;
    this.y = y2;
    return this;
  };
  Vector2.prototype.crs_1fv330$ = function (v) {
    return this.x * v.y - this.y * v.x;
  };
  Vector2.prototype.crs_dleff0$ = function (x, y) {
    return this.x * y - this.y * x;
  };
  Vector2.prototype.angleRad = function () {
    return MathUtils_getInstance().atan2_dleff0$(this.y, this.x);
  };
  Vector2.prototype.angleRad_1fv330$ = function (reference) {
    return MathUtils_getInstance().atan2_dleff0$(this.crs_1fv330$(reference), this.dot_1fv330$(reference));
  };
  Vector2.prototype.setAngleRad_mx4ult$ = function (radians) {
    this.set_dleff0$(this.len(), 0.0);
    this.rotateRad_mx4ult$(radians);
    return this;
  };
  Vector2.prototype.rotateRad_mx4ult$ = function (radians) {
    var cos = MathUtils_getInstance().cos_mx4ult$(radians);
    var sin = MathUtils_getInstance().sin_mx4ult$(radians);
    var newX = this.x * cos - this.y * sin;
    var newY = this.x * sin + this.y * cos;
    this.x = newX;
    this.y = newY;
    return this;
  };
  Vector2.prototype.lerp_hj2y21$ = function (target, alpha) {
    var invAlpha = 1.0 - alpha;
    this.x = this.x * invAlpha + target.x * alpha;
    this.y = this.y * invAlpha + target.y * alpha;
    return this;
  };
  Vector2.prototype.lerp_y2kzbl$ = function (x2, y2, alpha) {
    var invAlpha = 1.0 - alpha;
    this.x = this.x * invAlpha + x2 * alpha;
    this.y = this.y * invAlpha + y2 * alpha;
    return this;
  };
  Vector2.prototype.interpolate_1n5v2p$ = function (target, alpha, interpolation) {
    return this.lerp_hj2y21$(target, interpolation.apply_mx4ult$(alpha));
  };
  Vector2.prototype.epsilonEquals_f37ny8$ = function (other, epsilon) {
    if (other == null)
      return false;
    var value = other.x - this.x;
    if ((value < 0.0 ? -value : value) > epsilon)
      return false;
    var value_0 = other.y - this.y;
    if ((value_0 < 0.0 ? -value_0 : value_0) > epsilon)
      return false;
    return true;
  };
  Vector2.prototype.epsilonEquals_y2kzbl$ = function (x, y, epsilon) {
    var value = x - this.x;
    if ((value < 0.0 ? -value : value) > epsilon)
      return false;
    var value_0 = y - this.y;
    if ((value_0 < 0.0 ? -value_0 : value_0) > epsilon)
      return false;
    return true;
  };
  Vector2.prototype.isUnit = function () {
    return this.isUnit_mx4ult$(1.0E-9);
  };
  Vector2.prototype.isUnit_mx4ult$ = function (margin) {
    var value = this.len2() - 1.0;
    return (value < 0.0 ? -value : value) < margin;
  };
  Vector2.prototype.isZero = function () {
    return this.x === 0.0 && this.y === 0.0;
  };
  Vector2.prototype.isZero_mx4ult$ = function (margin2) {
    return this.len2() < margin2;
  };
  Vector2.prototype.isOnLine_1fv330$ = function (other) {
    return MathUtils_getInstance().isZero_dleff0$(this.x * other.y - this.y * other.x);
  };
  Vector2.prototype.isOnLine_hj2y21$ = function (other, epsilon2) {
    return MathUtils_getInstance().isZero_dleff0$(this.x * other.y - this.y * other.x, epsilon2);
  };
  Vector2.prototype.isCollinear_hj2y21$ = function (other, epsilon) {
    return this.isOnLine_hj2y21$(other, epsilon) && this.dot_1fv330$(other) > 0.0;
  };
  Vector2.prototype.isCollinear_1fv330$ = function (other) {
    return this.isOnLine_1fv330$(other) && this.dot_1fv330$(other) > 0.0;
  };
  Vector2.prototype.isCollinearOpposite_hj2y21$ = function (other, epsilon) {
    return this.isOnLine_hj2y21$(other, epsilon) && this.dot_1fv330$(other) < 0.0;
  };
  Vector2.prototype.isCollinearOpposite_1fv330$ = function (other) {
    return this.isOnLine_1fv330$(other) && this.dot_1fv330$(other) < 0.0;
  };
  Vector2.prototype.isPerpendicular_1fv330$ = function (vector) {
    return MathUtils_getInstance().isZero_dleff0$(this.dot_1fv330$(vector));
  };
  Vector2.prototype.isPerpendicular_hj2y21$ = function (vector, epsilon) {
    return MathUtils_getInstance().isZero_dleff0$(this.dot_1fv330$(vector), epsilon);
  };
  Vector2.prototype.hasSameDirection_1fv330$ = function (vector) {
    return this.dot_1fv330$(vector) > 0;
  };
  Vector2.prototype.hasOppositeDirection_1fv330$ = function (vector) {
    return this.dot_1fv330$(vector) < 0;
  };
  Vector2.prototype.ext_dleff0$ = function (x, y) {
    if (x > this.x)
      this.x = x;
    if (y > this.y)
      this.y = y;
  };
  Vector2.prototype.clear = function () {
    this.x = 0.0;
    this.y = 0.0;
  };
  Vector2.prototype.free = function () {
    Vector2$Companion_getInstance().pool_0.free_11rb$(this);
  };
  Vector2.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, Vector2))
      return false;
    if (this.x !== other.x)
      return false;
    if (this.y !== other.y)
      return false;
    return true;
  };
  Vector2.prototype.hashCode = function () {
    var result = Kotlin.hashCode(this.x);
    result = (31 * result | 0) + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  function Vector2$Companion() {
    Vector2$Companion_instance = this;
    this.X = new Vector2(1.0, 0.0);
    this.Y = new Vector2(0.0, 1.0);
    this.ZERO = new Vector2(0.0, 0.0);
    this.pool_0 = new ClearableObjectPool(void 0, Vector2$Companion$pool$lambda);
  }
  Vector2$Companion.prototype.len_dleff0$ = function (x, y) {
    return Math.sqrt(x * x + y * y);
  };
  Vector2$Companion.prototype.len2_dleff0$ = function (x, y) {
    return x * x + y * y;
  };
  Vector2$Companion.prototype.dot_7b5o5w$ = function (x1, y1, x2, y2) {
    return x1 * x2 + y1 * y2;
  };
  Vector2$Companion.prototype.dst_7b5o5w$ = function (x1, y1, x2, y2) {
    var x_d = x2 - x1;
    var y_d = y2 - y1;
    return Math.sqrt(x_d * x_d + y_d * y_d);
  };
  Vector2$Companion.prototype.dst2_7b5o5w$ = function (x1, y1, x2, y2) {
    var x_d = x2 - x1;
    var y_d = y2 - y1;
    return x_d * x_d + y_d * y_d;
  };
  Vector2$Companion.prototype.obtain = function () {
    return this.pool_0.obtain();
  };
  function Vector2$Companion$pool$lambda() {
    return new Vector2();
  }
  Vector2$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Vector2$Companion_instance = null;
  function Vector2$Companion_getInstance() {
    if (Vector2$Companion_instance === null) {
      new Vector2$Companion();
    }
    return Vector2$Companion_instance;
  }
  Vector2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Vector2',
    interfaces: [Vector2Ro, Clearable]
  };
  function Vector2_init(other, $this) {
    $this = $this || Object.create(Vector2.prototype);
    Vector2.call($this, other.x, other.y);
    return $this;
  }
  function vector2_1($receiver, v) {
    floatArray($receiver, [v.x, v.y]);
  }
  function vector2_0($receiver, name, v) {
    vector2_1($receiver.property_61zpoe$(name), v);
  }
  function vector2_2($receiver) {
    var tmp$;
    tmp$ = floatArray_0($receiver);
    if (tmp$ == null) {
      return null;
    }
    var f = tmp$;
    return new Vector2(f[0], f[1]);
  }
  function vector2($receiver, name) {
    var tmp$;
    return (tmp$ = $receiver.get_61zpoe$(name)) != null ? vector2_2(tmp$) : null;
  }
  function Vector3Ro() {
  }
  Vector3Ro.prototype.component1 = function () {
    return this.x;
  };
  Vector3Ro.prototype.component2 = function () {
    return this.y;
  };
  Vector3Ro.prototype.component3 = function () {
    return this.z;
  };
  Vector3Ro.prototype.isUnit_mx4ult$ = function (margin, callback$default) {
    if (margin === void 0)
      margin = 1.0E-9;
    return callback$default ? callback$default(margin) : this.isUnit_mx4ult$$default(margin);
  };
  Vector3Ro.prototype.closeTo_7aight$ = function (other, epsilon, callback$default) {
    if (epsilon === void 0)
      epsilon = 1.0E-4;
    return callback$default ? callback$default(other, epsilon) : this.closeTo_7aight$$default(other, epsilon);
  };
  Vector3Ro.prototype.closeTo_7b5o5w$ = function (x, y, z, epsilon, callback$default) {
    if (epsilon === void 0)
      epsilon = 1.0E-4;
    return callback$default ? callback$default(x, y, z, epsilon) : this.closeTo_7b5o5w$$default(x, y, z, epsilon);
  };
  Vector3Ro.prototype.copy = function () {
    return new Vector3(this.x, this.y, this.z);
  };
  Vector3Ro.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'Vector3Ro',
    interfaces: []
  };
  function Vector3(x, y, z) {
    Vector3$Companion_getInstance();
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (z === void 0)
      z = 0.0;
    this.x_myjqa6$_0 = x;
    this.y_myjqa6$_0 = y;
    this.z_myjqa6$_0 = z;
  }
  Object.defineProperty(Vector3.prototype, 'x', {
    get: function () {
      return this.x_myjqa6$_0;
    },
    set: function (x) {
      this.x_myjqa6$_0 = x;
    }
  });
  Object.defineProperty(Vector3.prototype, 'y', {
    get: function () {
      return this.y_myjqa6$_0;
    },
    set: function (y) {
      this.y_myjqa6$_0 = y;
    }
  });
  Object.defineProperty(Vector3.prototype, 'z', {
    get: function () {
      return this.z_myjqa6$_0;
    },
    set: function (z) {
      this.z_myjqa6$_0 = z;
    }
  });
  Vector3.prototype.set_y2kzbl$ = function (x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  };
  Vector3.prototype.set_1fv2cb$ = function (vector) {
    return this.set_y2kzbl$(vector.x, vector.y, vector.z);
  };
  Vector3.prototype.set_q3cr5i$ = function (values) {
    return this.set_y2kzbl$(values[0], values[1], values[2]);
  };
  Vector3.prototype.set_hj2y21$ = function (vector, z) {
    if (z === void 0)
      z = 0.0;
    return this.set_y2kzbl$(vector.x, vector.y, z);
  };
  Vector3.prototype.add_1fv2cb$ = function (vector) {
    return this.add_y2kzbl$(vector.x, vector.y, vector.z);
  };
  Vector3.prototype.add_y2kzbl$ = function (x, y, z) {
    return this.set_y2kzbl$(this.x + x, this.y + y, this.z + z);
  };
  Vector3.prototype.add_mx4ult$ = function (values) {
    return this.set_y2kzbl$(this.x + values, this.y + values, this.z + values);
  };
  Vector3.prototype.sub_1fv2cb$ = function (a_vec) {
    return this.sub_y2kzbl$(a_vec.x, a_vec.y, a_vec.z);
  };
  Vector3.prototype.sub_y2kzbl$ = function (x, y, z) {
    return this.set_y2kzbl$(this.x - x, this.y - y, this.z - z);
  };
  Vector3.prototype.sub_mx4ult$ = function (value) {
    return this.set_y2kzbl$(this.x - value, this.y - value, this.z - value);
  };
  Vector3.prototype.scl_mx4ult$ = function (scalar) {
    return this.set_y2kzbl$(this.x * scalar, this.y * scalar, this.z * scalar);
  };
  Vector3.prototype.scl_1fv2cb$ = function (other) {
    return this.set_y2kzbl$(this.x * other.x, this.y * other.y, this.z * other.z);
  };
  Vector3.prototype.scl_y2kzbl$ = function (vx, vy, vz) {
    return this.set_y2kzbl$(this.x * vx, this.y * vy, this.z * vz);
  };
  Vector3.prototype.mulAdd_pz1gqy$ = function (vec, scalar) {
    this.x = this.x + vec.x * scalar;
    this.y = this.y + vec.y * scalar;
    this.z = this.z + vec.z * scalar;
    return this;
  };
  Vector3.prototype.mulAdd_uwler8$ = function (vec, mulVec) {
    this.x = this.x + vec.x * mulVec.x;
    this.y = this.y + vec.y * mulVec.y;
    this.z = this.z + vec.z * mulVec.z;
    return this;
  };
  Vector3.prototype.len = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  };
  Vector3.prototype.len2 = function () {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  };
  Vector3.prototype.idt_1fv2cb$ = function (vector) {
    return this.x === vector.x && this.y === vector.y && this.z === vector.z;
  };
  Vector3.prototype.dst_1fv2cb$ = function (vector) {
    var a = vector.x - this.x;
    var b = vector.y - this.y;
    var c = vector.z - this.z;
    return Math.sqrt(a * a + b * b + c * c);
  };
  Vector3.prototype.dst_y2kzbl$ = function (x, y, z) {
    var a = x - this.x;
    var b = y - this.y;
    var c = z - this.z;
    return Math.sqrt(a * a + b * b + c * c);
  };
  Vector3.prototype.dst2_1fv2cb$ = function (point) {
    var a = point.x - this.x;
    var b = point.y - this.y;
    var c = point.z - this.z;
    return a * a + b * b + c * c;
  };
  Vector3.prototype.dst2_y2kzbl$ = function (x, y, z) {
    var a = x - this.x;
    var b = y - this.y;
    var c = z - this.z;
    return a * a + b * b + c * c;
  };
  Vector3.prototype.nor = function () {
    var len2 = this.len2();
    if (len2 === 0.0 || len2 === 1.0)
      return this;
    return this.scl_mx4ult$.call(this, 1.0 / Math.sqrt(len2));
  };
  Vector3.prototype.dot_1fv2cb$ = function (vector) {
    return this.x * vector.x + this.y * vector.y + this.z * vector.z;
  };
  Vector3.prototype.dot_y2kzbl$ = function (x, y, z) {
    return this.x * x + this.y * y + this.z * z;
  };
  Vector3.prototype.crs_1fv2cb$ = function (vector) {
    return this.set_y2kzbl$(this.y * vector.z - this.z * vector.y, this.z * vector.x - this.x * vector.z, this.x * vector.y - this.y * vector.x);
  };
  Vector3.prototype.crs_y2kzbl$ = function (x, y, z) {
    return this.set_y2kzbl$(this.y * z - this.z * y, this.z * x - this.x * z, this.x * y - this.y * x);
  };
  Vector3.prototype.mul4x3_q3cr5i$ = function (matrix) {
    return this.set_y2kzbl$(this.x * matrix[0] + this.y * matrix[3] + this.z * matrix[6] + matrix[9], this.x * matrix[1] + this.y * matrix[4] + this.z * matrix[7] + matrix[10], this.x * matrix[2] + this.y * matrix[5] + this.z * matrix[8] + matrix[11]);
  };
  Vector3.prototype.mul_1ktw39$ = function (matrix) {
    var l_mat = matrix.values;
    return this.set_y2kzbl$(this.x * l_mat[0] + this.y * l_mat[4] + this.z * l_mat[8] + l_mat[12], this.x * l_mat[1] + this.y * l_mat[5] + this.z * l_mat[9] + l_mat[13], this.x * l_mat[2] + this.y * l_mat[6] + this.z * l_mat[10] + l_mat[14]);
  };
  Vector3.prototype.traMul_1ktw39$ = function (matrix) {
    var l_mat = matrix.values;
    return this.set_y2kzbl$(this.x * l_mat[0] + this.y * l_mat[1] + this.z * l_mat[2] + l_mat[3], this.x * l_mat[4] + this.y * l_mat[5] + this.z * l_mat[6] + l_mat[7], this.x * l_mat[8] + this.y * l_mat[9] + this.z * l_mat[10] + l_mat[11]);
  };
  Vector3.prototype.mul_1ktw3a$ = function (matrix) {
    var l_mat = matrix.values;
    return this.set_y2kzbl$(this.x * l_mat[Matrix3$Companion_getInstance().M00] + this.y * l_mat[Matrix3$Companion_getInstance().M01] + this.z * l_mat[Matrix3$Companion_getInstance().M02], this.x * l_mat[Matrix3$Companion_getInstance().M10] + this.y * l_mat[Matrix3$Companion_getInstance().M11] + this.z * l_mat[Matrix3$Companion_getInstance().M12], this.x * l_mat[Matrix3$Companion_getInstance().M20] + this.y * l_mat[Matrix3$Companion_getInstance().M21] + this.z * l_mat[Matrix3$Companion_getInstance().M22]);
  };
  Vector3.prototype.traMul_1ktw3a$ = function (matrix) {
    var l_mat = matrix.values;
    return this.set_y2kzbl$(this.x * l_mat[Matrix3$Companion_getInstance().M00] + this.y * l_mat[Matrix3$Companion_getInstance().M10] + this.z * l_mat[Matrix3$Companion_getInstance().M20], this.x * l_mat[Matrix3$Companion_getInstance().M01] + this.y * l_mat[Matrix3$Companion_getInstance().M11] + this.z * l_mat[Matrix3$Companion_getInstance().M21], this.x * l_mat[Matrix3$Companion_getInstance().M02] + this.y * l_mat[Matrix3$Companion_getInstance().M12] + this.z * l_mat[Matrix3$Companion_getInstance().M22]);
  };
  Vector3.prototype.mul_sa462$ = function (quat) {
    return quat.transform_9wm29k$(this);
  };
  Vector3.prototype.rot_1ktw39$ = function (matrix) {
    var l_mat = matrix.values;
    return this.set_y2kzbl$(this.x * l_mat[0] + this.y * l_mat[4] + this.z * l_mat[8], this.x * l_mat[1] + this.y * l_mat[5] + this.z * l_mat[9], this.x * l_mat[2] + this.y * l_mat[6] + this.z * l_mat[10]);
  };
  Vector3.prototype.unrotate_1ktw39$ = function (matrix) {
    var l_mat = matrix.values;
    return this.set_y2kzbl$(this.x * l_mat[0] + this.y * l_mat[1] + this.z * l_mat[2], this.x * l_mat[4] + this.y * l_mat[5] + this.z * l_mat[6], this.x * l_mat[8] + this.y * l_mat[9] + this.z * l_mat[10]);
  };
  Vector3.prototype.untransform_1ktw39$ = function (matrix) {
    var l_mat = matrix.values;
    this.x = this.x - l_mat[12];
    this.y = this.y - l_mat[12];
    this.z = this.z - l_mat[12];
    return this.set_y2kzbl$(this.x * l_mat[0] + this.y * l_mat[1] + this.z * l_mat[2], this.x * l_mat[4] + this.y * l_mat[5] + this.z * l_mat[6], this.x * l_mat[8] + this.y * l_mat[9] + this.z * l_mat[10]);
  };
  Vector3.prototype.rotateRad_7b5o5w$ = function (radians, axisX, axisY, axisZ) {
    return this.mul_1ktw39$(Vector3$Companion_getInstance().tmpMat_0.idt().rotate_7b5o5w$(axisX, axisY, axisZ, radians));
  };
  Vector3.prototype.rotateRad_pz1gqy$ = function (axis, radians) {
    Vector3$Companion_getInstance().tmpMat_0.idt().rotate_pz1gqy$(axis, radians);
    return this.mul_1ktw39$(Vector3$Companion_getInstance().tmpMat_0);
  };
  Vector3.prototype.isUnit_mx4ult$$default = function (margin) {
    var value = this.len2() - 1.0;
    return (value < 0.0 ? -value : value) < margin;
  };
  Vector3.prototype.isZero = function () {
    return this.x === 0.0 && this.y === 0.0 && this.z === 0.0;
  };
  Vector3.prototype.isZero_mx4ult$ = function (margin) {
    return this.len2() < margin;
  };
  Vector3.prototype.isOnLine_pz1gqy$ = function (other, epsilon) {
    return Vector3$Companion_getInstance().len2_y2kzbl$(this.y * other.z - this.z * other.y, this.z * other.x - this.x * other.z, this.x * other.y - this.y * other.x) <= epsilon;
  };
  Vector3.prototype.isOnLine_1fv2cb$ = function (other) {
    return Vector3$Companion_getInstance().len2_y2kzbl$(this.y * other.z - this.z * other.y, this.z * other.x - this.x * other.z, this.x * other.y - this.y * other.x) <= MathUtils_getInstance().FLOAT_ROUNDING_ERROR;
  };
  Vector3.prototype.isCollinear_pz1gqy$ = function (other, epsilon) {
    return this.isOnLine_pz1gqy$(other, epsilon) && this.hasSameDirection_1fv2cb$(other);
  };
  Vector3.prototype.isCollinear_1fv2cb$ = function (other) {
    return this.isOnLine_1fv2cb$(other) && this.hasSameDirection_1fv2cb$(other);
  };
  Vector3.prototype.isCollinearOpposite_pz1gqy$ = function (other, epsilon) {
    return this.isOnLine_pz1gqy$(other, epsilon) && this.hasOppositeDirection_1fv2cb$(other);
  };
  Vector3.prototype.isCollinearOpposite_1fv2cb$ = function (other) {
    return this.isOnLine_1fv2cb$(other) && this.hasOppositeDirection_1fv2cb$(other);
  };
  Vector3.prototype.isPerpendicular_1fv2cb$ = function (vector) {
    return MathUtils_getInstance().isZero_dleff0$(this.dot_1fv2cb$(vector));
  };
  Vector3.prototype.isPerpendicular_pz1gqy$ = function (vector, epsilon) {
    return MathUtils_getInstance().isZero_dleff0$(this.dot_1fv2cb$(vector), epsilon);
  };
  Vector3.prototype.hasSameDirection_1fv2cb$ = function (vector) {
    return this.dot_1fv2cb$(vector) > 0;
  };
  Vector3.prototype.hasOppositeDirection_1fv2cb$ = function (vector) {
    return this.dot_1fv2cb$(vector) < 0;
  };
  Vector3.prototype.lerp_pz1gqy$ = function (target, alpha) {
    this.scl_mx4ult$(1.0 - alpha);
    this.add_y2kzbl$(target.x * alpha, target.y * alpha, target.z * alpha);
    return this;
  };
  Vector3.prototype.interpolate_y8lxoy$ = function (target, alpha, interpolator) {
    return this.lerp_pz1gqy$(target, interpolator.apply_y2kzbl$(0.0, 1.0, alpha));
  };
  Vector3.prototype.slerp_pz1gqy$ = function (target, alpha) {
    var dot = this.dot_1fv2cb$(target);
    if (dot > 0.9995 || dot < -0.9995)
      return this.lerp_pz1gqy$(target, alpha);
    var theta0 = Math.acos(dot);
    var theta = theta0 * alpha;
    var st = MathUtils_getInstance().sin_mx4ult$(theta);
    var tx = target.x - this.x * dot;
    var ty = target.y - this.y * dot;
    var tz = target.z - this.z * dot;
    var l2 = tx * tx + ty * ty + tz * tz;
    var dl = st * (l2 < 1.0E-4 ? 1.0 : 1.0 / Math.sqrt(l2));
    return this.scl_mx4ult$(MathUtils_getInstance().cos_mx4ult$(theta)).add_y2kzbl$(tx * dl, ty * dl, tz * dl).nor();
  };
  Vector3.prototype.limit_mx4ult$ = function (limit) {
    if (this.len2() > limit * limit)
      this.nor().scl_mx4ult$(limit);
    return this;
  };
  Vector3.prototype.random = function () {
    this.x = MathUtils_getInstance().random() * 2.0 - 1.0;
    this.y = MathUtils_getInstance().random() * 2.0 - 1.0;
    this.z = MathUtils_getInstance().random() * 2.0 - 1.0;
    return this;
  };
  Vector3.prototype.clamp_dleff0$ = function (min, max) {
    var l2 = this.len2();
    if (l2 === 0.0)
      return this;
    if (l2 > max * max)
      return this.nor().scl_mx4ult$(max);
    if (l2 < min * min)
      return this.nor().scl_mx4ult$(min);
    return this;
  };
  Vector3.prototype.closeTo_7aight$$default = function (other, epsilon) {
    if (other == null)
      return false;
    var value = other.x - this.x;
    if ((value < 0.0 ? -value : value) > epsilon)
      return false;
    var value_0 = other.y - this.y;
    if ((value_0 < 0.0 ? -value_0 : value_0) > epsilon)
      return false;
    var value_1 = other.z - this.z;
    if ((value_1 < 0.0 ? -value_1 : value_1) > epsilon)
      return false;
    return true;
  };
  Vector3.prototype.closeTo_7b5o5w$$default = function (x, y, z, epsilon) {
    var value = x - this.x;
    if ((value < 0.0 ? -value : value) > epsilon)
      return false;
    var value_0 = y - this.y;
    if ((value_0 < 0.0 ? -value_0 : value_0) > epsilon)
      return false;
    var value_1 = z - this.z;
    if ((value_1 < 0.0 ? -value_1 : value_1) > epsilon)
      return false;
    return true;
  };
  Vector3.prototype.clear = function () {
    this.x = 0.0;
    this.y = 0.0;
    this.z = 0.0;
  };
  Vector3.prototype.free = function () {
    Vector3$Companion_getInstance().pool_0.free_11rb$(this);
  };
  Vector3.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, Vector3))
      return false;
    if (this.x !== other.x)
      return false;
    if (this.y !== other.y)
      return false;
    if (this.z !== other.z)
      return false;
    return true;
  };
  Vector3.prototype.hashCode = function () {
    var result = Kotlin.hashCode(this.x);
    result = (31 * result | 0) + Kotlin.hashCode(this.y) | 0;
    result = (31 * result | 0) + Kotlin.hashCode(this.z) | 0;
    return result;
  };
  function Vector3$Companion() {
    Vector3$Companion_instance = this;
    this.X = new Vector3(1.0, 0.0, 0.0);
    this.Y = new Vector3(0.0, 1.0, 0.0);
    this.Z = new Vector3(0.0, 0.0, 1.0);
    this.NEG_X = new Vector3(-1.0, 0.0, 0.0);
    this.NEG_Y = new Vector3(0.0, -1.0, 0.0);
    this.NEG_Z = new Vector3(0.0, 0.0, -1.0);
    this.ZERO = new Vector3(0.0, 0.0, 0.0);
    this.ONE = new Vector3(1.0, 1.0, 1.0);
    this.tmpMat_0 = new Matrix4();
    this.pool_0 = new ClearableObjectPool(void 0, Vector3$Companion$pool$lambda);
  }
  Vector3$Companion.prototype.len_y2kzbl$ = function (x, y, z) {
    return Math.sqrt(x * x + y * y + z * z);
  };
  Vector3$Companion.prototype.len2_y2kzbl$ = function (x, y, z) {
    return x * x + y * y + z * z;
  };
  Vector3$Companion.prototype.dst_w8lrqs$ = function (x1, y1, z1, x2, y2, z2) {
    var a = x2 - x1;
    var b = y2 - y1;
    var c = z2 - z1;
    return Math.sqrt(a * a + b * b + c * c);
  };
  Vector3$Companion.prototype.dst2_w8lrqs$ = function (x1, y1, z1, x2, y2, z2) {
    var a = x2 - x1;
    var b = y2 - y1;
    var c = z2 - z1;
    return a * a + b * b + c * c;
  };
  Vector3$Companion.prototype.dot_w8lrqs$ = function (x1, y1, z1, x2, y2, z2) {
    return x1 * x2 + y1 * y2 + z1 * z2;
  };
  Vector3$Companion.prototype.obtain = function () {
    return this.pool_0.obtain();
  };
  function Vector3$Companion$pool$lambda() {
    return new Vector3();
  }
  Vector3$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Vector3$Companion_instance = null;
  function Vector3$Companion_getInstance() {
    if (Vector3$Companion_instance === null) {
      new Vector3$Companion();
    }
    return Vector3$Companion_instance;
  }
  Vector3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Vector3',
    interfaces: [Vector3Ro, Clearable]
  };
  function Vector3_init(vector, z, $this) {
    $this = $this || Object.create(Vector3.prototype);
    Vector3.call($this, vector.x, vector.y, z);
    return $this;
  }
  function vector3($receiver, v) {
    floatArray($receiver, [v.x, v.y, v.z]);
  }
  function vector3_0($receiver, name, v) {
    vector3($receiver.property_61zpoe$(name), v);
  }
  function vector3_1($receiver) {
    var tmp$;
    tmp$ = floatArray_0($receiver);
    if (tmp$ == null) {
      return null;
    }
    var f = tmp$;
    return new Vector3(f[0], f[1], f[2]);
  }
  function vector3_2($receiver, name) {
    var tmp$;
    return (tmp$ = $receiver.get_61zpoe$(name)) != null ? vector3_1(tmp$) : null;
  }
  function Crc32() {
    Crc32$Companion_getInstance();
    this.crc_0 = 0;
    this.crcTable_0 = this.makeCrcTable_0();
  }
  Crc32.prototype.makeCrcTable_0 = function () {
    var table = Kotlin.newArray(256, 0);
    for (var n = 0; n <= 255; n++) {
      var c = n;
      var k = 8;
      while ((k = k - 1 | 0, k) >= 0) {
        if ((c & 1) !== 0)
          c = -306674912 ^ c >>> 1;
        else
          c = c >>> 1;
      }
      table[n] = c;
    }
    return table;
  };
  Crc32.prototype.getValue = function () {
    return Kotlin.Long.fromInt(this.crc_0).and(new Kotlin.Long(-1, 0));
  };
  Crc32.prototype.reset = function () {
    this.crc_0 = 0;
  };
  Crc32.prototype.update_s8cxhz$ = function (longVal) {
    this.update_s8j3t7$(Kotlin.toByte(longVal.shiftRight(56).toInt()));
    this.update_s8j3t7$(Kotlin.toByte(longVal.shiftRight(48).toInt()));
    this.update_s8j3t7$(Kotlin.toByte(longVal.shiftRight(40).toInt()));
    this.update_s8j3t7$(Kotlin.toByte(longVal.shiftRight(32).toInt()));
    this.update_s8j3t7$(Kotlin.toByte(longVal.shiftRight(24).toInt()));
    this.update_s8j3t7$(Kotlin.toByte(longVal.shiftRight(16).toInt()));
    this.update_s8j3t7$(Kotlin.toByte(longVal.shiftRight(8).toInt()));
    this.update_s8j3t7$(Kotlin.toByte(longVal.toInt()));
  };
  Crc32.prototype.update_za3lpa$ = function (intVal) {
    this.update_s8j3t7$(Kotlin.toByte(intVal >> 24));
    this.update_s8j3t7$(Kotlin.toByte(intVal >> 16));
    this.update_s8j3t7$(Kotlin.toByte(intVal >> 8));
    this.update_s8j3t7$(Kotlin.toByte(intVal));
  };
  Crc32.prototype.update_s8j3t7$ = function (byteVal) {
    var c = ~this.crc_0;
    c = this.crcTable_0[(c ^ byteVal) & 255] ^ c >>> 8;
    this.crc_0 = ~c;
  };
  Crc32.prototype.update_mj6st8$ = function (buf, off, len) {
    if (off === void 0)
      off = 0;
    if (len === void 0)
      len = buf.length;
    var tmp$;
    var i = off;
    var n = len;
    var c = ~this.crc_0;
    while ((n = n - 1 | 0, n) >= 0) {
      c = this.crcTable_0[(c ^ buf[tmp$ = i, i = tmp$ + 1 | 0, tmp$]) & 255] ^ c >>> 8;
    }
    this.crc_0 = ~c;
  };
  function Crc32$Companion() {
    Crc32$Companion_instance = this;
    this.CRC = new Crc32();
  }
  Crc32$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Crc32$Companion_instance = null;
  function Crc32$Companion_getInstance() {
    if (Crc32$Companion_instance === null) {
      new Crc32$Companion();
    }
    return Crc32$Companion_instance;
  }
  Crc32.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Crc32',
    interfaces: []
  };
  function ModTag() {
  }
  ModTag.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'ModTag',
    interfaces: []
  };
  function ModTagImpl() {
    ModTagImpl$Companion_getInstance();
    this._id_0 = (ModTagImpl$Companion_getInstance().counter_0 = ModTagImpl$Companion_getInstance().counter_0 + 1 | 0, ModTagImpl$Companion_getInstance().counter_0);
    this._modCount_0 = 0;
  }
  Object.defineProperty(ModTagImpl.prototype, 'crc', {
    get: function () {
      return Kotlin.Long.fromInt(this._id_0).shiftLeft(16).or(Kotlin.Long.fromInt(this._modCount_0));
    }
  });
  ModTagImpl.prototype.increment = function () {
    this._modCount_0 = this._modCount_0 + 1 | 0;
  };
  function ModTagImpl$Companion() {
    ModTagImpl$Companion_instance = this;
    this.counter_0 = 0;
  }
  ModTagImpl$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ModTagImpl$Companion_instance = null;
  function ModTagImpl$Companion_getInstance() {
    if (ModTagImpl$Companion_instance === null) {
      new ModTagImpl$Companion();
    }
    return ModTagImpl$Companion_instance;
  }
  ModTagImpl.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ModTagImpl',
    interfaces: [ModTag]
  };
  function ModTagWatch() {
    this.crc_0 = Kotlin.Long.NEG_ONE;
  }
  ModTagWatch.prototype.set_7wp294$ = function (target) {
    if (Kotlin.equals(this.crc_0, target.crc))
      return false;
    this.crc_0 = target.crc;
    return true;
  };
  ModTagWatch.prototype.set_ibk4n1$ = function (targets) {
    var tmp$;
    Crc32$Companion_getInstance().CRC.reset();
    tmp$ = get_lastIndex(targets);
    for (var i = 0; i <= tmp$; i++) {
      var target = targets.get_za3lpa$(i);
      Crc32$Companion_getInstance().CRC.update_s8cxhz$(target.crc);
    }
    var newCrc = Crc32$Companion_getInstance().CRC.getValue();
    if (Kotlin.equals(this.crc_0, newCrc))
      return false;
    this.crc_0 = newCrc;
    return true;
  };
  ModTagWatch.prototype.clear = function () {
    this.crc_0 = Kotlin.Long.NEG_ONE;
  };
  ModTagWatch.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ModTagWatch',
    interfaces: [Clearable]
  };
  function JsonSerializer() {
    JsonSerializer_instance = this;
  }
  JsonSerializer.prototype.read_11rb$ = function (data) {
    return new JsonNode(data, 0, data.length);
  };
  JsonSerializer.prototype.write_ma9gy0$ = function (callback) {
    return this.write_9nik4k$(callback, '\t', '\n');
  };
  JsonSerializer.prototype.write_9nik4k$ = function (callback, tabStr, returnStr) {
    var buffer = new StringBuilder();
    var writer = new JsonWriter(buffer, '', tabStr, returnStr);
    callback(writer);
    return buffer.toString();
  };
  function JsonSerializer$write$lambda$lambda(closure$to, closure$value) {
    return function (it) {
      closure$to.write2_6l37rg$(closure$value, it);
    };
  }
  function JsonSerializer$write$lambda(closure$to, closure$value) {
    return function (it) {
      it.obj_qpf9uf$(true, JsonSerializer$write$lambda$lambda(closure$to, closure$value));
    };
  }
  JsonSerializer.prototype.write_p3gpkk$ = function (value, to, tabStr, returnStr) {
    return this.write_9nik4k$(JsonSerializer$write$lambda(to, value), tabStr, returnStr);
  };
  JsonSerializer.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'JsonSerializer',
    interfaces: [Serializer]
  };
  var JsonSerializer_instance = null;
  function JsonSerializer_getInstance() {
    if (JsonSerializer_instance === null) {
      new JsonSerializer();
    }
    return JsonSerializer_instance;
  }
  function JsonNode(source, fromIndex, toIndex) {
    this.source_0 = source;
    this._properties_0 = HashMap_init();
    this._elements_0 = ArrayList_init();
    this.isParsed_0 = false;
    this.fromIndex_0 = 0;
    this.toIndex_0 = 0;
    this.subStr_0 = null;
    var fromTrimmed = fromIndex;
    var toTrimmed = toIndex;
    while (fromTrimmed < toTrimmed && isWhitespace2(Kotlin.unboxChar(this.source_0.charCodeAt(fromTrimmed)))) {
      fromTrimmed = fromTrimmed + 1 | 0;
    }
    while (fromTrimmed < toTrimmed && isWhitespace2(Kotlin.unboxChar(this.source_0.charCodeAt(toTrimmed - 1 | 0)))) {
      toTrimmed = toTrimmed - 1 | 0;
    }
    this.fromIndex_0 = fromTrimmed;
    this.toIndex_0 = toTrimmed;
    this.subStr_0 = new SubString(this.source_0, fromTrimmed, toTrimmed);
    this.marker_0 = 0;
  }
  JsonNode.prototype.parseObject_0 = function () {
    var tmp$, tmp$_0;
    if (this.isParsed_0)
      return;
    this.isParsed_0 = true;
    if (this.source_0.length === 0)
      return;
    var isObject = Kotlin.unboxChar(this.source_0.charCodeAt(this.fromIndex_0)) === 123;
    if (!isObject && Kotlin.unboxChar(this.source_0.charCodeAt(this.fromIndex_0)) !== 91)
      return;
    this.marker_0 = this.fromIndex_0 + 1 | 0;
    var tagStack = ArrayList_init();
    while (this.marker_0 < this.toIndex_0) {
      this.consumeWhitespace_0();
      while (Kotlin.unboxChar(this.source_0.charCodeAt(this.marker_0)) === 44) {
        this.marker_0 = this.marker_0 + 1 | 0;
        this.consumeWhitespace_0();
      }
      var char_1 = Kotlin.unboxChar(this.source_0.charCodeAt(this.marker_0));
      if (Kotlin.unboxChar(char_1) === 125 || Kotlin.unboxChar(char_1) === 93)
        break;
      if (!isObject || Kotlin.unboxChar(char_1) === 34) {
        var identifier = null;
        if (isObject) {
          this.marker_0 = this.marker_0 + 1 | 0;
          var identifierStartIndex = this.marker_0;
          while (!(Kotlin.unboxChar(this.source_0.charCodeAt(this.marker_0)) === 34 && Kotlin.unboxChar(this.source_0.charCodeAt(this.marker_0 - 1 | 0)) !== 92)) {
            if (this.marker_0 >= this.toIndex_0)
              throw new Exception("Expected '\"', but reached end of stream");
            this.marker_0 = this.marker_0 + 1 | 0;
          }
          identifier = new SubString(this.source_0, identifierStartIndex, (tmp$ = this.marker_0, this.marker_0 = tmp$ + 1 | 0, tmp$));
        }
        this.consumeWhitespace_0();
        if (isObject) {
          if (Kotlin.unboxChar(this.source_0.charCodeAt((tmp$_0 = this.marker_0, this.marker_0 = tmp$_0 + 1 | 0, tmp$_0))) !== 58)
            throw new Exception("Expected ':', but instead found: " + this.source_0.substring(this.marker_0, this.marker_0 + 20 | 0));
        }
        var valueStartIndex = this.marker_0;
        tagStack.clear();
        var isString = false;
        while (this.marker_0 < this.toIndex_0) {
          var vC = Kotlin.unboxChar(this.source_0.charCodeAt(this.marker_0));
          if (tagStack.isEmpty() && (Kotlin.unboxChar(vC) === 125 || Kotlin.unboxChar(vC) === 93)) {
            break;
          }
          var last_0 = Kotlin.unboxChar(peek(tagStack));
          if (Kotlin.toBoxedChar(last_0) != null && Kotlin.unboxChar(vC) === Kotlin.unboxChar(last_0) && (!isString || Kotlin.unboxChar(this.source_0.charCodeAt(this.marker_0 - 1 | 0)) !== 92)) {
            pop(tagStack);
            isString = false;
          }
           else if (!isString) {
            if (Kotlin.unboxChar(vC) === 123) {
              tagStack.add_11rb$(Kotlin.toBoxedChar(125));
            }
             else if (Kotlin.unboxChar(vC) === 91) {
              tagStack.add_11rb$(Kotlin.toBoxedChar(93));
            }
             else if (Kotlin.unboxChar(vC) === 39) {
              tagStack.add_11rb$(Kotlin.toBoxedChar(39));
              isString = true;
            }
             else if (Kotlin.unboxChar(vC) === 34) {
              tagStack.add_11rb$(Kotlin.toBoxedChar(34));
              isString = true;
            }
          }
          if (tagStack.isEmpty() && Kotlin.unboxChar(vC) === 44) {
            break;
          }
          this.marker_0 = this.marker_0 + 1 | 0;
        }
        if (!tagStack.isEmpty())
          throw new Exception('Expected ' + Kotlin.toString(Kotlin.unboxChar(peek(tagStack))) + ', but reached end of stream');
        if (isObject) {
          var $receiver = this._properties_0;
          var key = (identifier != null ? identifier : Kotlin.throwNPE()).toString();
          var value = new JsonNode(this.source_0, valueStartIndex, this.marker_0);
          $receiver.put_xwzc9p$(key, value);
        }
         else {
          this._elements_0.add_11rb$(new JsonNode(this.source_0, valueStartIndex, this.marker_0));
        }
      }
       else {
        if (isObject)
          throw new Exception('Expected ' + '"' + ', but instead found: ' + this.source_0.substring(this.marker_0, this.marker_0 + 20 | 0));
        else
          throw new Exception('Unexpected character ' + String.fromCharCode(Kotlin.unboxChar(this.source_0.charCodeAt(this.marker_0))) + '.  ' + this.source_0.substring(this.marker_0, this.marker_0 + 20 | 0));
      }
    }
  };
  JsonNode.prototype.consumeWhitespace_0 = function () {
    while (this.marker_0 < this.toIndex_0 && isWhitespace2(Kotlin.unboxChar(this.source_0.charCodeAt(this.marker_0)))) {
      this.marker_0 = this.marker_0 + 1 | 0;
    }
  };
  JsonNode.prototype.contains_61zpoe$ = function (name) {
    this.parseObject_0();
    var $receiver = this._properties_0;
    var tmp$;
    return (Kotlin.isType(tmp$ = $receiver, Kotlin.kotlin.collections.Map) ? tmp$ : Kotlin.throwCCE()).containsKey_11rb$(name);
  };
  JsonNode.prototype.contains_za3lpa$ = function (index) {
    this.parseObject_0();
    return index < this._elements_0.size;
  };
  JsonNode.prototype.properties = function () {
    this.parseObject_0();
    return this._properties_0;
  };
  JsonNode.prototype.elements = function () {
    this.parseObject_0();
    return this._elements_0;
  };
  JsonNode.prototype.entries = function () {
    this.parseObject_0();
    return this._properties_0.entries;
  };
  Object.defineProperty(JsonNode.prototype, 'isNull', {
    get: function () {
      return this.subStr_0.equals('null');
    }
  });
  JsonNode.prototype.bool = function () {
    if (this.isNull)
      return null;
    return this.subStr_0.equals('true') || this.subStr_0.equals('1');
  };
  JsonNode.prototype.char = function () {
    if (this.isNull)
      return null;
    return Kotlin.unboxChar(this.subStr_0.charAt_za3lpa$(1));
  };
  JsonNode.prototype.string = function () {
    if (this.isNull)
      return null;
    return removeBackslashes(this.subStr_0.subSequence_vux9f0$(1, this.subStr_0.length() - 1 | 0));
  };
  JsonNode.prototype.short = function () {
    if (this.isNull)
      return null;
    return toShortOrNull(this.subStr_0.toString());
  };
  JsonNode.prototype.int = function () {
    if (this.isNull)
      return null;
    return toIntOrNull(this.subStr_0.toString());
  };
  JsonNode.prototype.long = function () {
    if (this.isNull)
      return null;
    return toLongOrNull(this.subStr_0.toString());
  };
  JsonNode.prototype.float = function () {
    var tmp$;
    return (tmp$ = this.double()) != null ? tmp$ : null;
  };
  JsonNode.prototype.double = function () {
    if (this.isNull)
      return null;
    return toDoubleOrNull(this.subStr_0.toString());
  };
  JsonNode.prototype.toString = function () {
    return this.subStr_0.toString();
  };
  JsonNode.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsonNode',
    interfaces: [Reader]
  };
  function JsonWriter(builder, indentStr, tabStr, returnStr) {
    this.builder = builder;
    this.indentStr = indentStr;
    this.tabStr = tabStr;
    this.returnStr = returnStr;
    this.size_0 = 0;
  }
  JsonWriter.prototype.property_61zpoe$ = function (name) {
    var tmp$;
    if ((tmp$ = this.size_0, this.size_0 = tmp$ + 1 | 0, tmp$) > 0)
      this.builder.append_gw00v9$(',' + this.returnStr);
    this.builder.append_gw00v9$(this.indentStr);
    this.builder.append_s8itvh$(34);
    this.builder.append_gw00v9$(name);
    this.builder.append_gw00v9$('": ');
    return new JsonWriter(this.builder, this.indentStr, this.tabStr, this.returnStr);
  };
  JsonWriter.prototype.element = function () {
    var tmp$;
    if ((tmp$ = this.size_0, this.size_0 = tmp$ + 1 | 0, tmp$) > 0)
      this.builder.append_gw00v9$(',' + this.returnStr);
    this.builder.append_gw00v9$(this.indentStr);
    return new JsonWriter(this.builder, this.indentStr, this.tabStr, this.returnStr);
  };
  JsonWriter.prototype.bool_1v8dbw$ = function (value) {
    if (value == null)
      return this.writeNull();
    if (value)
      this.builder.append_gw00v9$('true');
    else
      this.builder.append_gw00v9$('false');
  };
  JsonWriter.prototype.string_pdl1vj$ = function (value) {
    if (value == null)
      return this.writeNull();
    this.builder.append_s8itvh$(34);
    this.builder.append_gw00v9$(this.escape_0(value));
    this.builder.append_s8itvh$(34);
  };
  JsonWriter.prototype.int_s8ev37$ = function (value) {
    if (value == null)
      return this.writeNull();
    this.builder.append_s8jyv4$(value);
  };
  JsonWriter.prototype.long_mts6q2$ = function (value) {
    if (value == null)
      return this.writeNull();
    this.builder.append_s8jyv4$(value);
  };
  JsonWriter.prototype.float_81sz4$ = function (value) {
    if (value == null)
      return this.writeNull();
    this.builder.append_s8jyv4$(value);
  };
  JsonWriter.prototype.double_yrwdxb$ = function (value) {
    if (value == null)
      return this.writeNull();
    this.builder.append_s8jyv4$(value);
  };
  JsonWriter.prototype.char_myv2ck$ = function (value) {
    if (Kotlin.toBoxedChar(value) == null)
      return this.writeNull();
    this.builder.append_s8itvh$(34);
    this.builder.append_s8itvh$(Kotlin.unboxChar(value));
    this.builder.append_s8itvh$(34);
  };
  JsonWriter.prototype.obj_qpf9uf$ = function (complex, contents) {
    var r = complex ? this.returnStr : ' ';
    this.builder.append_gw00v9$('{' + r);
    var childIndent = complex ? this.indentStr + this.tabStr : '';
    var childWriter = new JsonWriter(this.builder, childIndent, this.tabStr, r);
    contents(childWriter);
    if (childWriter.size_0 > 0) {
      this.builder.append_gw00v9$(r);
    }
    if (complex)
      this.builder.append_gw00v9$(this.indentStr);
    this.builder.append_s8itvh$(125);
  };
  JsonWriter.prototype.array_qpf9uf$ = function (complex, contents) {
    var r = complex ? this.returnStr : ' ';
    this.builder.append_gw00v9$('[' + r);
    var childIndent = complex ? this.indentStr + this.tabStr : '';
    var childWriter = new JsonWriter(this.builder, childIndent, this.tabStr, r);
    contents(childWriter);
    if (childWriter.size_0 > 0) {
      this.builder.append_gw00v9$(r);
    }
    if (complex)
      this.builder.append_gw00v9$(this.indentStr);
    this.builder.append_s8itvh$(93);
  };
  JsonWriter.prototype.writeNull = function () {
    this.builder.append_gw00v9$('null');
  };
  JsonWriter.prototype.escape_0 = function (value) {
    return replace2(replace2(replace2(replace2(replace2(value, '\\', '\\\\'), '\r', '\\r'), '\n', '\\n'), '\t', '\\t'), '"', '\\"');
  };
  JsonWriter.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsonWriter',
    interfaces: [Writer]
  };
  function Serializer() {
  }
  Serializer.prototype.read_awjrhg$ = function (data, factory) {
    var tmp$;
    var reader = this.read_11rb$(data);
    return (tmp$ = obj(reader, factory)) != null ? tmp$ : Kotlin.throwNPE();
  };
  function Serializer$write$lambda$lambda(closure$to, closure$value) {
    return function (it) {
      closure$to.write2_6l37rg$(closure$value, it);
    };
  }
  function Serializer$write$lambda(closure$to, closure$value) {
    return function (it) {
      it.obj_qpf9uf$(true, Serializer$write$lambda$lambda(closure$to, closure$value));
    };
  }
  Serializer.prototype.write_hzsrf4$ = function (value, to) {
    return this.write_ma9gy0$(Serializer$write$lambda(to, value));
  };
  Serializer.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'Serializer',
    interfaces: []
  };
  function Reader() {
  }
  Reader.prototype.get_61zpoe$ = function (name) {
    return this.properties().get_11rb$(name);
  };
  Reader.prototype.get_za3lpa$ = function (index) {
    return this.elements().get_za3lpa$(index);
  };
  Reader.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'Reader',
    interfaces: []
  };
  var contains_2 = Kotlin.defineInlineFunction('AcornUtils.com.acornui.serialization.contains_klwena$', function ($receiver, name, callback) {
    var tmp$;
    if ($receiver.contains_61zpoe$(name)) {
      callback((tmp$ = $receiver.get_61zpoe$(name)) != null ? tmp$ : Kotlin.throwNPE());
    }
  });
  var contains_3 = Kotlin.defineInlineFunction('AcornUtils.com.acornui.serialization.contains_p4yqn2$', function ($receiver, index, callback) {
    var tmp$;
    if ($receiver.contains_za3lpa$(index)) {
      callback((tmp$ = $receiver.get_za3lpa$(index)) != null ? tmp$ : Kotlin.throwNPE());
    }
  });
  function forEach($receiver, action) {
    var tmp$;
    tmp$ = $receiver.properties().entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      action(element.key, element.value);
    }
  }
  function obj($receiver, factory) {
    if ($receiver.isNull)
      return null;
    return factory.read_gax0m7$($receiver);
  }
  function map$lambda(closure$itemFactory, closure$hashMap) {
    return function (propName, reader) {
      var $receiver = closure$hashMap;
      var value = closure$itemFactory.read_gax0m7$(reader);
      $receiver.put_xwzc9p$(propName, value);
    };
  }
  function map($receiver, itemFactory) {
    var hashMap = HashMap_init();
    forEach($receiver, map$lambda(itemFactory, hashMap));
    return hashMap;
  }
  function boolArray($receiver) {
    var tmp$, tmp$_0;
    if ($receiver.isNull)
      return null;
    var elements = $receiver.elements();
    var arr = Kotlin.newArray(elements.size, false);
    tmp$ = get_lastIndex(elements);
    for (var i = 0; i <= tmp$; i++) {
      arr[i] = (tmp$_0 = elements.get_za3lpa$(i).bool()) != null ? tmp$_0 : Kotlin.throwNPE();
    }
    return arr;
  }
  function charArray($receiver) {
    var tmp$, tmp$_0;
    if ($receiver.isNull)
      return null;
    var elements = $receiver.elements();
    var arr = Kotlin.newArray(elements.size, 0);
    tmp$ = get_lastIndex(elements);
    for (var i = 0; i <= tmp$; i++) {
      arr[i] = Kotlin.unboxChar((tmp$_0 = Kotlin.unboxChar(elements.get_za3lpa$(i).char())) != null ? tmp$_0 : Kotlin.throwNPE());
    }
    return arr;
  }
  function intArray($receiver) {
    var tmp$, tmp$_0;
    if ($receiver.isNull)
      return null;
    var elements = $receiver.elements();
    var arr = Kotlin.newArray(elements.size, 0);
    tmp$ = get_lastIndex(elements);
    for (var i = 0; i <= tmp$; i++) {
      arr[i] = (tmp$_0 = elements.get_za3lpa$(i).int()) != null ? tmp$_0 : Kotlin.throwNPE();
    }
    return arr;
  }
  function longArray($receiver) {
    var tmp$, tmp$_0;
    if ($receiver.isNull)
      return null;
    var elements = $receiver.elements();
    var arr = Kotlin.newArray(elements.size, Kotlin.Long.ZERO);
    tmp$ = get_lastIndex(elements);
    for (var i = 0; i <= tmp$; i++) {
      arr[i] = (tmp$_0 = elements.get_za3lpa$(i).long()) != null ? tmp$_0 : Kotlin.throwNPE();
    }
    return arr;
  }
  function floatArray_0($receiver) {
    var tmp$, tmp$_0;
    if ($receiver.isNull)
      return null;
    var elements = $receiver.elements();
    var arr = Kotlin.newArray(elements.size, 0);
    tmp$ = get_lastIndex(elements);
    for (var i = 0; i <= tmp$; i++) {
      arr[i] = (tmp$_0 = elements.get_za3lpa$(i).float()) != null ? tmp$_0 : Kotlin.throwNPE();
    }
    return arr;
  }
  function doubleArray($receiver) {
    var tmp$, tmp$_0;
    if ($receiver.isNull)
      return null;
    var elements = $receiver.elements();
    var arr = Kotlin.newArray(elements.size, 0);
    tmp$ = get_lastIndex(elements);
    for (var i = 0; i <= tmp$; i++) {
      arr[i] = (tmp$_0 = elements.get_za3lpa$(i).double()) != null ? tmp$_0 : Kotlin.throwNPE();
    }
    return arr;
  }
  function stringArray$lambda(closure$elements) {
    return function (it) {
      var element = closure$elements.get_za3lpa$(it);
      return element.isNull ? null : element.string();
    };
  }
  function stringArray($receiver) {
    if ($receiver.isNull)
      return null;
    var elements = $receiver.elements();
    return Kotlin.newArrayF(elements.size, stringArray$lambda(elements));
  }
  function shortArray($receiver) {
    var tmp$, tmp$_0;
    if ($receiver.isNull)
      return null;
    var elements = $receiver.elements();
    var arr = Kotlin.newArray(elements.size, 0);
    tmp$ = get_lastIndex(elements);
    for (var i = 0; i <= tmp$; i++) {
      arr[i] = (tmp$_0 = elements.get_za3lpa$(i).short()) != null ? tmp$_0 : Kotlin.throwNPE();
    }
    return arr;
  }
  var array2 = Kotlin.defineInlineFunction('AcornUtils.com.acornui.serialization.array2_3axv6d$', function (array2$T_0, isT, $receiver, name, itemFactory) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = $receiver.get_61zpoe$(name)) != null) {
      var e = tmp$.elements();
      tmp$_0 = Kotlin.newArrayF(e.size, _.com.acornui.serialization.array2$f(itemFactory, e));
    }
     else
      tmp$_0 = null;
    return tmp$_0;
  });
  function array2$lambda(closure$itemFactory, closure$e) {
    return function (it) {
      return closure$itemFactory.read_gax0m7$(closure$e.get_za3lpa$(it));
    };
  }
  var array2_0 = Kotlin.defineInlineFunction('AcornUtils.com.acornui.serialization.array2_gbx3af$', function (array2$T_1, isT, $receiver, itemFactory) {
    var e = $receiver.elements();
    return Kotlin.newArrayF(e.size, _.com.acornui.serialization.array2$f(itemFactory, e));
  });
  var arrayWithNulls = Kotlin.defineInlineFunction('AcornUtils.com.acornui.serialization.arrayWithNulls_3axv6d$', function (arrayWithNulls$T_0, isT, $receiver, name, itemFactory) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = $receiver.get_61zpoe$(name)) != null) {
      var e = tmp$.elements();
      tmp$_0 = Kotlin.newArrayF(e.size, _.com.acornui.serialization.arrayWithNulls$f(e, itemFactory));
    }
     else
      tmp$_0 = null;
    return tmp$_0;
  });
  function arrayWithNulls$lambda(closure$e, closure$itemFactory) {
    return function (it) {
      var itR = closure$e.get_za3lpa$(it);
      return itR.isNull ? null : closure$itemFactory.read_gax0m7$(itR);
    };
  }
  var arrayWithNulls_0 = Kotlin.defineInlineFunction('AcornUtils.com.acornui.serialization.arrayWithNulls_gbx3af$', function (arrayWithNulls$T_1, isT, $receiver, itemFactory) {
    var e = $receiver.elements();
    return Kotlin.newArrayF(e.size, _.com.acornui.serialization.arrayWithNulls$f(e, itemFactory));
  });
  function arrayList($receiver, name, itemFactory) {
    var tmp$;
    return (tmp$ = $receiver.get_61zpoe$(name)) != null ? arrayList_0(tmp$, itemFactory) : null;
  }
  function arrayList_0($receiver, itemFactory) {
    var tmp$;
    var e = $receiver.elements();
    var y = e.size;
    var max_sdesaw$result;
    if (Kotlin.compareTo(16, y) >= 0) {
      max_sdesaw$result = 16;
    }
     else {
      max_sdesaw$result = y;
    }
    var list = ArrayList_init(max_sdesaw$result);
    tmp$ = get_lastIndex(e);
    for (var i = 0; i <= tmp$; i++) {
      list.add_11rb$(itemFactory.read_gax0m7$(e.get_za3lpa$(i)));
    }
    return list;
  }
  var sparseArray = Kotlin.defineInlineFunction('AcornUtils.com.acornui.serialization.sparseArray_ipf5mk$', function (sparseArray$E_0, isE, $receiver, itemFactory) {
    var tmp$, tmp$_0, tmp$_1;
    var e = $receiver.elements();
    var n = (tmp$ = e.get_za3lpa$(0).int()) != null ? tmp$ : Kotlin.throwNPE();
    var arr = Kotlin.newArray(n, null);
    tmp$_0 = Kotlin.kotlin.ranges.step_xsgg7u$(new Kotlin.kotlin.ranges.IntRange(1, Kotlin.kotlin.collections.get_lastIndex_55thoc$(e)), 2).iterator();
    while (tmp$_0.hasNext()) {
      var i = tmp$_0.next();
      var index = (tmp$_1 = e.get_za3lpa$(i).int()) != null ? tmp$_1 : Kotlin.throwNPE();
      arr[index] = itemFactory.read_gax0m7$(e.get_za3lpa$(i + 1 | 0));
    }
    return arr;
  });
  var sparseArray_0 = Kotlin.defineInlineFunction('AcornUtils.com.acornui.serialization.sparseArray_ub10y$', function (sparseArray$E_1, isE, $receiver, name, itemFactory) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = $receiver.get_61zpoe$(name)) != null) {
      var tmp$_1, tmp$_2, tmp$_3;
      var e = tmp$.elements();
      var n = (tmp$_1 = e.get_za3lpa$(0).int()) != null ? tmp$_1 : Kotlin.throwNPE();
      var arr = Kotlin.newArray(n, null);
      tmp$_2 = Kotlin.kotlin.ranges.step_xsgg7u$(new Kotlin.kotlin.ranges.IntRange(1, Kotlin.kotlin.collections.get_lastIndex_55thoc$(e)), 2).iterator();
      while (tmp$_2.hasNext()) {
        var i = tmp$_2.next();
        var index = (tmp$_3 = e.get_za3lpa$(i).int()) != null ? tmp$_3 : Kotlin.throwNPE();
        arr[index] = itemFactory.read_gax0m7$(e.get_za3lpa$(i + 1 | 0));
      }
      tmp$_0 = arr;
    }
     else
      tmp$_0 = null;
    return tmp$_0;
  });
  function bool($receiver, name) {
    var tmp$;
    return (tmp$ = $receiver.get_61zpoe$(name)) != null ? tmp$.bool() : null;
  }
  function string_0($receiver, name) {
    var tmp$;
    return (tmp$ = $receiver.get_61zpoe$(name)) != null ? tmp$.string() : null;
  }
  function int_0($receiver, name) {
    var tmp$;
    return (tmp$ = $receiver.get_61zpoe$(name)) != null ? tmp$.int() : null;
  }
  function long_0($receiver, name) {
    var tmp$;
    return (tmp$ = $receiver.get_61zpoe$(name)) != null ? tmp$.long() : null;
  }
  function float_0($receiver, name) {
    var tmp$;
    return (tmp$ = $receiver.get_61zpoe$(name)) != null ? tmp$.float() : null;
  }
  function double($receiver, name) {
    var tmp$;
    return (tmp$ = $receiver.get_61zpoe$(name)) != null ? tmp$.double() : null;
  }
  function char($receiver, name) {
    var tmp$;
    return (tmp$ = $receiver.get_61zpoe$(name)) != null ? tmp$.char() : null;
  }
  function boolArray_0($receiver, name) {
    var tmp$;
    return (tmp$ = $receiver.get_61zpoe$(name)) != null ? boolArray(tmp$) : null;
  }
  function stringArray_0($receiver, name) {
    var tmp$;
    return (tmp$ = $receiver.get_61zpoe$(name)) != null ? stringArray(tmp$) : null;
  }
  function shortArray_0($receiver, name) {
    var tmp$;
    return (tmp$ = $receiver.get_61zpoe$(name)) != null ? shortArray(tmp$) : null;
  }
  function intArray_0($receiver, name) {
    var tmp$;
    return (tmp$ = $receiver.get_61zpoe$(name)) != null ? intArray(tmp$) : null;
  }
  function longArray_0($receiver, name) {
    var tmp$;
    return (tmp$ = $receiver.get_61zpoe$(name)) != null ? longArray(tmp$) : null;
  }
  function floatArray_1($receiver, name) {
    var tmp$;
    return (tmp$ = $receiver.get_61zpoe$(name)) != null ? floatArray_0(tmp$) : null;
  }
  function doubleArray_0($receiver, name) {
    var tmp$;
    return (tmp$ = $receiver.get_61zpoe$(name)) != null ? doubleArray(tmp$) : null;
  }
  function charArray_0($receiver, name) {
    var tmp$;
    return (tmp$ = $receiver.get_61zpoe$(name)) != null ? charArray(tmp$) : null;
  }
  function obj_0($receiver, name, factory) {
    var tmp$;
    return (tmp$ = $receiver.get_61zpoe$(name)) != null ? obj(tmp$, factory) : null;
  }
  function map_0($receiver, name, itemFactory) {
    var tmp$;
    return (tmp$ = $receiver.get_61zpoe$(name)) != null ? map(tmp$, itemFactory) : null;
  }
  function Writer() {
  }
  Writer.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'Writer',
    interfaces: []
  };
  function map$lambda$lambda(closure$to, closure$entry) {
    return function (it) {
      var tmp$, tmp$_0;
      tmp$_0 = (tmp$ = closure$entry.value) != null ? tmp$ : Kotlin.throwNPE();
      closure$to.write2_6l37rg$(tmp$_0, it);
    };
  }
  function map$lambda_0(closure$value, closure$to) {
    return function (it) {
      var tmp$;
      tmp$ = closure$value.entries.iterator();
      while (tmp$.hasNext()) {
        var entry = tmp$.next();
        var p = it.property_61zpoe$(entry.key);
        if (entry.value == null)
          p.writeNull();
        else {
          p.obj_qpf9uf$(true, map$lambda$lambda(closure$to, entry));
        }
      }
    };
  }
  function map_1($receiver, value, to) {
    if (value == null)
      $receiver.writeNull();
    else {
      $receiver.obj_qpf9uf$(true, map$lambda_0(value, to));
    }
  }
  function map$lambda_1(closure$value, closure$writeProp) {
    return function (it) {
      var tmp$;
      tmp$ = closure$value.entries.iterator();
      while (tmp$.hasNext()) {
        var entry = tmp$.next();
        var p = it.property_61zpoe$(entry.key);
        var v = entry.value;
        if (v == null)
          p.writeNull();
        else {
          closure$writeProp(v, p);
        }
      }
    };
  }
  function map_2($receiver, value, writeProp) {
    if (value == null)
      $receiver.writeNull();
    else {
      $receiver.obj_qpf9uf$(true, map$lambda_1(value, writeProp));
    }
  }
  function obj$lambda(closure$to, closure$value) {
    return function (it) {
      closure$to.write2_6l37rg$(closure$value, it);
    };
  }
  function obj_1($receiver, value, to) {
    if (value == null)
      $receiver.writeNull();
    else {
      $receiver.obj_qpf9uf$(true, obj$lambda(to, value));
    }
  }
  function array_0($receiver, value, to) {
    if (value == null)
      $receiver.writeNull();
    else
      array_1($receiver, new ArrayIterator(value), to);
  }
  function array$lambda$lambda(closure$to, closure$v) {
    return function (it) {
      closure$to.write2_6l37rg$(closure$v, it);
    };
  }
  function array$lambda(closure$value, closure$to) {
    return function (it) {
      var tmp$;
      tmp$ = closure$value.iterator();
      while (tmp$.hasNext()) {
        var v = tmp$.next();
        if (v == null)
          it.element().writeNull();
        else {
          it.element().obj_qpf9uf$(true, array$lambda$lambda(closure$to, v));
        }
      }
    };
  }
  function array_1($receiver, value, to) {
    if (value == null)
      $receiver.writeNull();
    else {
      $receiver.array_qpf9uf$(true, array$lambda(value, to));
    }
  }
  function sparseArray$lambda$lambda(closure$to, closure$v) {
    return function (it) {
      closure$to.write2_6l37rg$(closure$v, it);
    };
  }
  function sparseArray$lambda(closure$value, closure$to) {
    return function (it) {
      var tmp$;
      it.element().int_s8ev37$(closure$value.length);
      tmp$ = get_lastIndex_0(closure$value);
      for (var i = 0; i <= tmp$; i++) {
        var v = closure$value[i];
        if (v != null) {
          it.element().int_s8ev37$(i);
          it.element().obj_qpf9uf$(true, sparseArray$lambda$lambda(closure$to, v));
        }
      }
    };
  }
  function sparseArray_1($receiver, value, to) {
    if (value == null)
      $receiver.writeNull();
    else {
      $receiver.array_qpf9uf$(true, sparseArray$lambda(value, to));
    }
  }
  function boolArray$lambda(closure$value) {
    return function (it) {
      var tmp$, tmp$_0;
      tmp$ = closure$value;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var b = tmp$[tmp$_0];
        it.element().bool_1v8dbw$(b);
      }
    };
  }
  function boolArray_1($receiver, value) {
    if (value == null)
      $receiver.writeNull();
    else {
      $receiver.array_qpf9uf$(false, boolArray$lambda(value));
    }
  }
  function stringArray$lambda_0(closure$value) {
    return function (it) {
      var tmp$, tmp$_0;
      tmp$ = closure$value;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var i = tmp$[tmp$_0];
        it.element().string_pdl1vj$(i);
      }
    };
  }
  function stringArray_1($receiver, value) {
    if (value == null)
      $receiver.writeNull();
    else {
      $receiver.array_qpf9uf$(false, stringArray$lambda_0(value));
    }
  }
  function intArray$lambda(closure$value) {
    return function (it) {
      var tmp$, tmp$_0;
      tmp$ = closure$value;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var i = tmp$[tmp$_0];
        it.element().int_s8ev37$(i);
      }
    };
  }
  function intArray_1($receiver, value) {
    if (value == null)
      $receiver.writeNull();
    else {
      $receiver.array_qpf9uf$(false, intArray$lambda(value));
    }
  }
  function longArray$lambda(closure$value) {
    return function (it) {
      var tmp$, tmp$_0;
      tmp$ = closure$value;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var i = tmp$[tmp$_0];
        it.element().long_mts6q2$(i);
      }
    };
  }
  function longArray_1($receiver, value) {
    if (value == null)
      $receiver.writeNull();
    else {
      $receiver.array_qpf9uf$(false, longArray$lambda(value));
    }
  }
  function floatArray$lambda(closure$value) {
    return function (it) {
      var tmp$, tmp$_0;
      tmp$ = closure$value;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var i = tmp$[tmp$_0];
        it.element().float_81sz4$(i);
      }
    };
  }
  function floatArray($receiver, value) {
    if (value == null)
      $receiver.writeNull();
    else {
      $receiver.array_qpf9uf$(false, floatArray$lambda(value));
    }
  }
  function doubleArray$lambda(closure$value) {
    return function (it) {
      var tmp$, tmp$_0;
      tmp$ = closure$value;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var i = tmp$[tmp$_0];
        it.element().double_yrwdxb$(i);
      }
    };
  }
  function doubleArray_1($receiver, value) {
    if (value == null)
      $receiver.writeNull();
    else {
      $receiver.array_qpf9uf$(false, doubleArray$lambda(value));
    }
  }
  function charArray$lambda(closure$value) {
    return function (it) {
      var tmp$, tmp$_0;
      tmp$ = closure$value;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var i = tmp$[tmp$_0];
        it.element().char_myv2ck$(Kotlin.unboxChar(i));
      }
    };
  }
  function charArray_1($receiver, value) {
    if (value == null)
      $receiver.writeNull();
    else {
      $receiver.array_qpf9uf$(false, charArray$lambda(value));
    }
  }
  function bool_0($receiver, name, value) {
    $receiver.property_61zpoe$(name).bool_1v8dbw$(value);
  }
  function string($receiver, name, value) {
    $receiver.property_61zpoe$(name).string_pdl1vj$(value);
  }
  function int($receiver, name, value) {
    $receiver.property_61zpoe$(name).int_s8ev37$(value);
  }
  function long($receiver, name, value) {
    $receiver.property_61zpoe$(name).long_mts6q2$(value);
  }
  function float($receiver, name, value) {
    $receiver.property_61zpoe$(name).float_81sz4$(value);
  }
  function double_0($receiver, name, value) {
    $receiver.property_61zpoe$(name).double_yrwdxb$(value);
  }
  function char_0($receiver, name, value) {
    $receiver.property_61zpoe$(name).char_myv2ck$(Kotlin.unboxChar(value));
  }
  function boolArray_2($receiver, name, value) {
    boolArray_1($receiver.property_61zpoe$(name), value);
  }
  function stringArray_2($receiver, name, value) {
    stringArray_1($receiver.property_61zpoe$(name), value);
  }
  function intArray_2($receiver, name, value) {
    intArray_1($receiver.property_61zpoe$(name), value);
  }
  function longArray_2($receiver, name, value) {
    longArray_1($receiver.property_61zpoe$(name), value);
  }
  function floatArray_2($receiver, name, value) {
    floatArray($receiver.property_61zpoe$(name), value);
  }
  function doubleArray_2($receiver, name, value) {
    doubleArray_1($receiver.property_61zpoe$(name), value);
  }
  function charArray_2($receiver, name, value) {
    charArray_1($receiver.property_61zpoe$(name), value);
  }
  function obj_2($receiver, name, complex, contents) {
    $receiver.property_61zpoe$(name).obj_qpf9uf$(complex, contents);
  }
  function obj_3($receiver, name, value, to) {
    obj_1($receiver.property_61zpoe$(name), value, to);
  }
  function array($receiver, name, value, to) {
    array_0($receiver.property_61zpoe$(name), value, to);
  }
  function array_2($receiver, name, value, to) {
    array_1($receiver.property_61zpoe$(name), value, to);
  }
  function sparseArray_2($receiver, name, value, to) {
    sparseArray_1($receiver.property_61zpoe$(name), value, to);
  }
  function map_3($receiver, name, value, to) {
    map_1($receiver.property_61zpoe$(name), value, to);
  }
  function From() {
  }
  From.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'From',
    interfaces: []
  };
  function To() {
  }
  To.prototype.write2_6l37rg$ = function (receiver, writer) {
    this.write_r4tkhj$(receiver, writer);
  };
  To.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'To',
    interfaces: []
  };
  function Signal() {
  }
  Signal.prototype.add_trkh7z$ = function (handler) {
    this.add_onkqg$(handler, false);
  };
  Signal.prototype.addOnce_trkh7z$ = function (handler) {
    this.add_onkqg$(handler, true);
  };
  Signal.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'Signal',
    interfaces: []
  };
  function HandlerEntry(handler, isOnce) {
    this.handler = handler;
    this.isOnce = isOnce;
    this.next = null;
    this.prev = null;
  }
  HandlerEntry.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'HandlerEntry',
    interfaces: []
  };
  function SignalBase() {
    this.head_ww8f3b$_0 = null;
    this.tail_ww8f3b$_0 = null;
    this.isHalted_ww8f3b$_0 = false;
  }
  SignalBase.prototype.isNotEmpty = function () {
    return this.head_ww8f3b$_0 != null;
  };
  SignalBase.prototype.isEmpty = function () {
    return this.head_ww8f3b$_0 == null;
  };
  SignalBase.prototype.add_onkqg$ = function (handler, isOnce) {
    var tmp$;
    var entry = new HandlerEntry(handler, isOnce);
    entry.prev = this.tail_ww8f3b$_0;
    if (this.head_ww8f3b$_0 == null) {
      this.head_ww8f3b$_0 = entry;
      this.tail_ww8f3b$_0 = entry;
    }
     else {
      ((tmp$ = this.tail_ww8f3b$_0) != null ? tmp$ : Kotlin.throwNPE()).next = entry;
      this.tail_ww8f3b$_0 = entry;
    }
  };
  SignalBase.prototype.remove_trkh7z$ = function (handler) {
    var c = this.head_ww8f3b$_0;
    while (c != null) {
      if (Kotlin.equals(c.handler, handler)) {
        this.removeEntry_8623oc$_0(c);
        break;
      }
      c = c.next;
    }
  };
  SignalBase.prototype.removeEntry_8623oc$_0 = function (entry) {
    var tmp$, tmp$_0;
    if (entry.handler == null)
      return;
    if (Kotlin.equals(entry, this.head_ww8f3b$_0)) {
      this.head_ww8f3b$_0 = entry.next;
    }
     else {
      ((tmp$ = entry.prev) != null ? tmp$ : Kotlin.throwNPE()).next = entry.next;
    }
    if (Kotlin.equals(entry, this.tail_ww8f3b$_0)) {
      this.tail_ww8f3b$_0 = entry.prev;
    }
     else {
      ((tmp$_0 = entry.next) != null ? tmp$_0 : Kotlin.throwNPE()).prev = entry.prev;
    }
    entry.handler = null;
  };
  SignalBase.prototype.contains_trkh7z$ = function (handler) {
    var c = this.head_ww8f3b$_0;
    while (c != null) {
      if (Kotlin.equals(c.handler, handler)) {
        return true;
      }
      c = c.next;
    }
    return false;
  };
  SignalBase.prototype.halt = function () {
    this.isHalted_ww8f3b$_0 = true;
  };
  SignalBase.prototype.dispatch_oh3mgy$ = function (executor) {
    var tmp$;
    this.isHalted_ww8f3b$_0 = false;
    var c = this.head_ww8f3b$_0;
    while (c != null) {
      var next = c.next;
      if (c.handler != null) {
        executor((tmp$ = c.handler) != null ? tmp$ : Kotlin.throwNPE());
      }
      if (c.isOnce) {
        this.removeEntry_8623oc$_0(c);
      }
      if (this.isHalted_ww8f3b$_0)
        break;
      c = next;
    }
  };
  SignalBase.prototype.clear = function () {
    this.head_ww8f3b$_0 = null;
    this.tail_ww8f3b$_0 = null;
  };
  SignalBase.prototype.dispose = function () {
    this.clear();
  };
  SignalBase.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SignalBase',
    interfaces: [Disposable, Signal]
  };
  function Signal0() {
    SignalBase.call(this);
  }
  function Signal0$dispatch$lambda(it) {
    it();
  }
  Signal0.prototype.dispatch = function () {
    this.dispatch_oh3mgy$(Signal0$dispatch$lambda);
  };
  Signal0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Signal0',
    interfaces: [SignalBase]
  };
  function Signal1() {
    SignalBase.call(this);
  }
  function Signal1$dispatch$lambda(closure$p1) {
    return function (it) {
      it(closure$p1);
    };
  }
  Signal1.prototype.dispatch_11rb$ = function (p1) {
    this.dispatch_oh3mgy$(Signal1$dispatch$lambda(p1));
  };
  Signal1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Signal1',
    interfaces: [SignalBase]
  };
  function Signal2() {
    SignalBase.call(this);
  }
  function Signal2$dispatch$lambda(closure$p1, closure$p2) {
    return function (it) {
      it(closure$p1, closure$p2);
    };
  }
  Signal2.prototype.dispatch_xwzc9p$ = function (p1, p2) {
    this.dispatch_oh3mgy$(Signal2$dispatch$lambda(p1, p2));
  };
  Signal2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Signal2',
    interfaces: [SignalBase]
  };
  function Signal3() {
    SignalBase.call(this);
  }
  function Signal3$dispatch$lambda(closure$p1, closure$p2, closure$p3) {
    return function (it) {
      it(closure$p1, closure$p2, closure$p3);
    };
  }
  Signal3.prototype.dispatch_1llc0w$ = function (p1, p2, p3) {
    this.dispatch_oh3mgy$(Signal3$dispatch$lambda(p1, p2, p3));
  };
  Signal3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Signal3',
    interfaces: [SignalBase]
  };
  function Signal4() {
    SignalBase.call(this);
  }
  function Signal4$dispatch$lambda(closure$p1, closure$p2, closure$p3, closure$p4) {
    return function (it) {
      it(closure$p1, closure$p2, closure$p3, closure$p4);
    };
  }
  Signal4.prototype.dispatch_18alr2$ = function (p1, p2, p3, p4) {
    this.dispatch_oh3mgy$(Signal4$dispatch$lambda(p1, p2, p3, p4));
  };
  Signal4.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Signal4',
    interfaces: [SignalBase]
  };
  function Signal5() {
    SignalBase.call(this);
  }
  function Signal5$dispatch$lambda(closure$p1, closure$p2, closure$p3, closure$p4, closure$p5) {
    return function (it) {
      it(closure$p1, closure$p2, closure$p3, closure$p4, closure$p5);
    };
  }
  Signal5.prototype.dispatch_mzll3x$ = function (p1, p2, p3, p4, p5) {
    this.dispatch_oh3mgy$(Signal5$dispatch$lambda(p1, p2, p3, p4, p5));
  };
  Signal5.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Signal5',
    interfaces: [SignalBase]
  };
  function Signal6() {
    SignalBase.call(this);
  }
  function Signal6$dispatch$lambda(closure$p1, closure$p2, closure$p3, closure$p4, closure$p5, closure$p6) {
    return function (it) {
      it(closure$p1, closure$p2, closure$p3, closure$p4, closure$p5, closure$p6);
    };
  }
  Signal6.prototype.dispatch_6dhy5$ = function (p1, p2, p3, p4, p5, p6) {
    this.dispatch_oh3mgy$(Signal6$dispatch$lambda(p1, p2, p3, p4, p5, p6));
  };
  Signal6.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Signal6',
    interfaces: [SignalBase]
  };
  function Signal7() {
    SignalBase.call(this);
  }
  function Signal7$dispatch$lambda(closure$p1, closure$p2, closure$p3, closure$p4, closure$p5, closure$p6, closure$p7) {
    return function (it) {
      it(closure$p1, closure$p2, closure$p3, closure$p4, closure$p5, closure$p6, closure$p7);
    };
  }
  Signal7.prototype.dispatch_q1249q$ = function (p1, p2, p3, p4, p5, p6, p7) {
    this.dispatch_oh3mgy$(Signal7$dispatch$lambda(p1, p2, p3, p4, p5, p6, p7));
  };
  Signal7.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Signal7',
    interfaces: [SignalBase]
  };
  function Signal8() {
    SignalBase.call(this);
  }
  function Signal8$dispatch$lambda(closure$p1, closure$p2, closure$p3, closure$p4, closure$p5, closure$p6, closure$p7, closure$p8) {
    return function (it) {
      it(closure$p1, closure$p2, closure$p3, closure$p4, closure$p5, closure$p6, closure$p7, closure$p8);
    };
  }
  Signal8.prototype.dispatch_3in928$ = function (p1, p2, p3, p4, p5, p6, p7, p8) {
    this.dispatch_oh3mgy$(Signal8$dispatch$lambda(p1, p2, p3, p4, p5, p6, p7, p8));
  };
  Signal8.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Signal8',
    interfaces: [SignalBase]
  };
  function Signal9() {
    SignalBase.call(this);
  }
  function Signal9$dispatch$lambda(closure$p1, closure$p2, closure$p3, closure$p4, closure$p5, closure$p6, closure$p7, closure$p8, closure$p9) {
    return function (it) {
      it(closure$p1, closure$p2, closure$p3, closure$p4, closure$p5, closure$p6, closure$p7, closure$p8, closure$p9);
    };
  }
  Signal9.prototype.dispatch_9wm90j$ = function (p1, p2, p3, p4, p5, p6, p7, p8, p9) {
    this.dispatch_oh3mgy$(Signal9$dispatch$lambda(p1, p2, p3, p4, p5, p6, p7, p8, p9));
  };
  Signal9.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Signal9',
    interfaces: [SignalBase]
  };
  function SignalR0() {
    SignalBase.call(this);
  }
  function SignalR0$dispatch$lambda(closure$r) {
    return function (it) {
      it(closure$r);
    };
  }
  SignalR0.prototype.dispatch_11rb$ = function (r) {
    this.dispatch_oh3mgy$(SignalR0$dispatch$lambda(r));
  };
  SignalR0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SignalR0',
    interfaces: [SignalBase]
  };
  function SignalR1() {
    SignalBase.call(this);
  }
  function SignalR1$dispatch$lambda(closure$r, closure$p1) {
    return function (it) {
      it(closure$r, closure$p1);
    };
  }
  SignalR1.prototype.dispatch_xwzc9p$ = function (r, p1) {
    this.dispatch_oh3mgy$(SignalR1$dispatch$lambda(r, p1));
  };
  SignalR1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SignalR1',
    interfaces: [SignalBase]
  };
  function SignalR2() {
    SignalBase.call(this);
  }
  function SignalR2$dispatch$lambda(closure$r, closure$p1, closure$p2) {
    return function (it) {
      it(closure$r, closure$p1, closure$p2);
    };
  }
  SignalR2.prototype.dispatch_1llc0w$ = function (r, p1, p2) {
    this.dispatch_oh3mgy$(SignalR2$dispatch$lambda(r, p1, p2));
  };
  SignalR2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SignalR2',
    interfaces: [SignalBase]
  };
  function SignalR3() {
    SignalBase.call(this);
  }
  function SignalR3$dispatch$lambda(closure$r, closure$p1, closure$p2, closure$p3) {
    return function (it) {
      it(closure$r, closure$p1, closure$p2, closure$p3);
    };
  }
  SignalR3.prototype.dispatch_18alr2$ = function (r, p1, p2, p3) {
    this.dispatch_oh3mgy$(SignalR3$dispatch$lambda(r, p1, p2, p3));
  };
  SignalR3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SignalR3',
    interfaces: [SignalBase]
  };
  function SignalR4() {
    SignalBase.call(this);
  }
  function SignalR4$dispatch$lambda(closure$r, closure$p1, closure$p2, closure$p3, closure$p4) {
    return function (it) {
      it(closure$r, closure$p1, closure$p2, closure$p3, closure$p4);
    };
  }
  SignalR4.prototype.dispatch_mzll3x$ = function (r, p1, p2, p3, p4) {
    this.dispatch_oh3mgy$(SignalR4$dispatch$lambda(r, p1, p2, p3, p4));
  };
  SignalR4.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SignalR4',
    interfaces: [SignalBase]
  };
  function Stoppable() {
  }
  Stoppable.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'Stoppable',
    interfaces: []
  };
  function Cancel() {
    this._canceled_ckfis8$_0 = false;
  }
  Cancel.prototype.canceled = function () {
    return this._canceled_ckfis8$_0;
  };
  Cancel.prototype.cancel = function () {
    this._canceled_ckfis8$_0 = true;
  };
  Cancel.prototype.reset = function () {
    this._canceled_ckfis8$_0 = false;
    return this;
  };
  Cancel.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Cancel',
    interfaces: []
  };
  function StoppableSignal() {
  }
  StoppableSignal.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'StoppableSignal',
    interfaces: [Signal]
  };
  function StoppableSignalImpl() {
    SignalBase.call(this);
  }
  function StoppableSignalImpl$dispatch$lambda(closure$p1, this$StoppableSignalImpl) {
    return function (it) {
      it(closure$p1);
      if (closure$p1.isStopped())
        this$StoppableSignalImpl.halt();
    };
  }
  StoppableSignalImpl.prototype.dispatch_n80keo$ = function (p1) {
    this.dispatch_oh3mgy$(StoppableSignalImpl$dispatch$lambda(p1, this));
  };
  StoppableSignalImpl.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'StoppableSignalImpl',
    interfaces: [StoppableSignal, SignalBase]
  };
  function isDigit2($receiver) {
    return Kotlin.unboxChar($receiver) >= 48 && Kotlin.unboxChar($receiver) <= 57;
  }
  function isLetter2($receiver) {
    return Kotlin.unboxChar($receiver) >= 97 && Kotlin.unboxChar($receiver) <= 122 || (Kotlin.unboxChar($receiver) >= 65 && Kotlin.unboxChar($receiver) <= 90);
  }
  function isLetterOrDigit2($receiver) {
    return isLetter2($receiver) || isDigit2($receiver);
  }
  function isWhitespace2($receiver) {
    return isWhitespace(Kotlin.unboxChar($receiver));
  }
  var breakingChars;
  function isBreaking($receiver) {
    return indexOf_3(breakingChars, Kotlin.unboxChar($receiver)) >= 0;
  }
  function StringParser(data) {
    this.data = data;
    this.position = 0;
    this.length = this.data.length;
  }
  Object.defineProperty(StringParser.prototype, 'hasNext', {
    get: function () {
      return this.position < this.length;
    }
  });
  function StringParser$white$lambda(it) {
    return isWhitespace2(Kotlin.unboxChar(it));
  }
  StringParser.prototype.white = function () {
    return this.getString_akknk2$(StringParser$white$lambda);
  };
  StringParser.prototype.getBoolean = function () {
    var char_1 = Kotlin.unboxChar(this.data.charCodeAt(this.position));
    if (Kotlin.unboxChar(char_1) === 49) {
      this.position = this.position + 1 | 0;
      return true;
    }
     else if (Kotlin.unboxChar(char_1) === 48) {
      this.position = this.position + 1 | 0;
      return false;
    }
     else if (Kotlin.unboxChar(char_1) === 116 || Kotlin.unboxChar(char_1) === 84) {
      var found = this.consumeString_ivxn3r$('true', true);
      if (!found) {
        this.position = this.position + 1 | 0;
      }
      return true;
    }
     else if (Kotlin.unboxChar(char_1) === 102 || Kotlin.unboxChar(char_1) === 70) {
      var found_0 = this.consumeString_ivxn3r$('false', true);
      if (!found_0) {
        this.position = this.position + 1 | 0;
      }
      return true;
    }
    return null;
  };
  function StringParser$getString$lambda(it) {
    return isLetterOrDigit2(Kotlin.unboxChar(it));
  }
  StringParser.prototype.getString = function () {
    return this.getString_akknk2$(StringParser$getString$lambda);
  };
  StringParser.prototype.getQuotedString = function () {
    var foundQuoteEnd = false;
    var quoteStart = null;
    var escaped = false;
    var p = this.position;
    while (p < this.length) {
      var it = Kotlin.unboxChar(this.data.charCodeAt(p));
      if (Kotlin.toBoxedChar(quoteStart) == null) {
        if (!isWhitespace2(Kotlin.unboxChar(it)))
          if (Kotlin.unboxChar(it) === 34 || Kotlin.unboxChar(it) === 39) {
            quoteStart = Kotlin.unboxChar(it);
          }
           else {
            break;
          }
      }
       else {
        if (escaped) {
          escaped = false;
        }
         else if (Kotlin.unboxChar(it) === Kotlin.unboxChar(quoteStart)) {
          foundQuoteEnd = true;
          p = p + 1 | 0;
          break;
        }
         else if (Kotlin.unboxChar(it) === 92) {
          escaped = true;
        }
      }
      p = p + 1 | 0;
    }
    if (foundQuoteEnd) {
      var $receiver = this.data;
      var startIndex = this.position + 1 | 0;
      var endIndex = p - 1 | 0;
      var subString = $receiver.substring(startIndex, endIndex);
      this.position = p;
      return subString;
    }
     else {
      return null;
    }
  };
  StringParser.prototype.getString_akknk2$ = function (predicate) {
    var tmp$ = this.data;
    var mark = this.position;
    while (this.position < this.length && predicate(Kotlin.toBoxedChar(this.data.charCodeAt(this.position)))) {
      this.position = this.position + 1 | 0;
    }
    var endIndex = this.position;
    return tmp$.substring(mark, endIndex);
  };
  StringParser.prototype.getDouble = function () {
    var p = this.position;
    var foundDecimalMark = false;
    while (p < this.length) {
      var it = Kotlin.unboxChar(this.data.charCodeAt(p));
      if (!isDigit2(Kotlin.unboxChar(it)) && !(p === this.position && Kotlin.unboxChar(it) === 45)) {
        if (!foundDecimalMark && Kotlin.unboxChar(it) === 46) {
          foundDecimalMark = true;
        }
         else {
          break;
        }
      }
      p = p + 1 | 0;
    }
    if (this.position === p)
      return null;
    var $receiver = this.data;
    var startIndex = this.position;
    var endIndex = p;
    var subString = $receiver.substring(startIndex, endIndex);
    if (subString.length === 1 && Kotlin.equals(subString, '-'))
      return null;
    this.position = p;
    return toDoubleOrNull(subString);
  };
  StringParser.prototype.getFloat = function () {
    var tmp$;
    return (tmp$ = this.getDouble()) != null ? tmp$ : null;
  };
  StringParser.prototype.getInt = function () {
    var p = this.position;
    while (p < this.length) {
      var it = Kotlin.unboxChar(this.data.charCodeAt(p));
      if (!isDigit2(Kotlin.unboxChar(it)) && !(p === this.position && Kotlin.unboxChar(it) === 45)) {
        break;
      }
      p = p + 1 | 0;
    }
    if (this.position === p)
      return null;
    var $receiver = this.data;
    var startIndex = this.position;
    var endIndex = p;
    var subString = $receiver.substring(startIndex, endIndex);
    if (subString.length === 1 && Kotlin.equals(subString, '-'))
      return null;
    this.position = p;
    return toIntOrNull(subString);
  };
  StringParser.prototype.getChar = function () {
    var tmp$;
    if (this.position >= this.length)
      return null;
    return Kotlin.unboxChar(this.data.charCodeAt((tmp$ = this.position, this.position = tmp$ + 1 | 0, tmp$)));
  };
  StringParser.prototype.consumeString_ivxn3r$ = function (string_1, ignoreCase) {
    if (ignoreCase === void 0)
      ignoreCase = false;
    var n = string_1.length;
    var p = this.position;
    if ((p + n | 0) >= this.length)
      return false;
    var index = 0;
    while (true) {
      var tmp$ = p < this.length && index < n;
      if (tmp$) {
        var tmp$_0 = Kotlin.unboxChar(this.data.charCodeAt(p)) === Kotlin.unboxChar(string_1.charCodeAt(index));
        if (!tmp$_0) {
          var tmp$_1 = ignoreCase;
          if (tmp$_1) {
            var tmp$_2 = Kotlin.unboxChar(this.data.charCodeAt(p));
            var $receiver = Kotlin.unboxChar(string_1.charCodeAt(index));
            tmp$_1 = tmp$_2 === Kotlin.unboxChar(String.fromCharCode(Kotlin.toBoxedChar($receiver)).toLowerCase().charCodeAt(0));
          }
          tmp$_0 = tmp$_1;
        }
        tmp$ = tmp$_0;
      }
      if (!tmp$)
        break;
      index = index + 1 | 0;
      p = p + 1 | 0;
    }
    if (index < n)
      return false;
    this.position = p;
    return true;
  };
  StringParser.prototype.consumeThrough_61zpoe$ = function (string_1) {
    var index = indexOf_0(this.data, string_1, this.position);
    if (index === -1)
      return false;
    this.position = index + string_1.length | 0;
    return true;
  };
  StringParser.prototype.consumeThrough_s8itvh$ = function (char_1) {
    var index = indexOf_2(this.data, Kotlin.unboxChar(char_1), this.position);
    if (index === -1)
      return false;
    this.position = index + 1 | 0;
    return true;
  };
  function StringParser$readLine$lambda(it) {
    return Kotlin.unboxChar(it) !== 13 && Kotlin.unboxChar(it) !== 10;
  }
  StringParser.prototype.readLine = function () {
    var str = this.getString_akknk2$(StringParser$readLine$lambda);
    this.consumeChar_s8itvh$(13);
    this.consumeChar_s8itvh$(10);
    return str;
  };
  StringParser.prototype.consumeChar_s8itvh$ = function (char_1) {
    var mark = this.position;
    while (true) {
      var tmp$ = this.position < this.length;
      if (tmp$) {
        var it = Kotlin.toBoxedChar(this.data.charCodeAt(this.position));
        tmp$ = Kotlin.unboxChar(char_1) === Kotlin.unboxChar(it);
      }
      if (!tmp$)
        break;
      this.position = this.position + 1 | 0;
    }
    return mark < this.position;
  };
  StringParser.prototype.consumeChars_61zpoe$ = function (chars) {
    var mark = this.position;
    while (true) {
      var tmp$ = this.position < this.length;
      if (tmp$) {
        tmp$ = indexOf_2(chars, Kotlin.unboxChar(Kotlin.toBoxedChar(this.data.charCodeAt(this.position)))) >= 0;
      }
      if (!tmp$)
        break;
      this.position = this.position + 1 | 0;
    }
    return mark < this.position;
  };
  StringParser.prototype.consumeWhile_akknk2$ = Kotlin.defineInlineFunction('AcornUtils.com.acornui.string.StringParser.consumeWhile_akknk2$', function (predicate) {
    var mark = this.position;
    while (this.position < this.length && predicate(Kotlin.toBoxedChar(this.data.charCodeAt(this.position)))) {
      this.position = this.position + 1 | 0;
    }
    return mark;
  });
  StringParser.prototype.reset = function () {
    this.position = 0;
  };
  StringParser.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'StringParser',
    interfaces: []
  };
  function StringTokenizer(str, delimiters) {
    if (delimiters === void 0)
      delimiters = ' \t\n\r';
    this.str_0 = str;
    this.delimiters_0 = delimiters;
    this.currentPosition_0 = 0;
    this.nextPosition_0 = 0;
    this.maxPosition_0 = this.str_0.length;
    this.maxDelimiterCharCode_0 = 0;
    this.currentPosition_0 = 0;
    this.nextPosition_0 = -1;
    this.calculateMaxDelimiterCharCode_0();
  }
  StringTokenizer.prototype.calculateMaxDelimiterCharCode_0 = function () {
    var tmp$;
    var n = this.delimiters_0.length;
    var m = 0;
    var c;
    tmp$ = n - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      c = Kotlin.unboxChar(this.delimiters_0.charCodeAt(i)) | 0;
      if (c > m)
        m = c;
    }
    this.maxDelimiterCharCode_0 = m;
  };
  StringTokenizer.prototype.skipDelimiters_0 = function (startPos) {
    var position = startPos;
    while (position < this.maxPosition_0) {
      var c = Kotlin.unboxChar(this.str_0.charCodeAt(position));
      if ((Kotlin.unboxChar(c) | 0) > this.maxDelimiterCharCode_0 || indexOf_2(this.delimiters_0, Kotlin.unboxChar(c)) < 0)
        break;
      position = position + 1 | 0;
    }
    return position;
  };
  StringTokenizer.prototype.scanToken_0 = function (startPos) {
    var position = startPos;
    while (position < this.maxPosition_0) {
      var c = Kotlin.unboxChar(this.str_0.charCodeAt(position));
      if ((Kotlin.unboxChar(c) | 0) <= this.maxDelimiterCharCode_0 && indexOf_2(this.delimiters_0, Kotlin.unboxChar(c)) >= 0)
        break;
      position = position + 1 | 0;
    }
    return position;
  };
  StringTokenizer.prototype.hasMoreTokens = function () {
    this.nextPosition_0 = this.skipDelimiters_0(this.currentPosition_0);
    return this.nextPosition_0 < this.maxPosition_0;
  };
  StringTokenizer.prototype.nextToken = function () {
    this.currentPosition_0 = this.nextPosition_0 >= 0 ? this.nextPosition_0 : this.skipDelimiters_0(this.currentPosition_0);
    this.nextPosition_0 = -1;
    if (this.currentPosition_0 >= this.maxPosition_0)
      throw new NoSuchElementException();
    var start = this.currentPosition_0;
    this.currentPosition_0 = this.scanToken_0(this.currentPosition_0);
    var $receiver = this.str_0;
    var endIndex = this.currentPosition_0;
    return $receiver.substring(start, endIndex);
  };
  StringTokenizer.prototype.countTokens = function () {
    var count_0 = 0;
    var pos = this.currentPosition_0;
    while (pos < this.maxPosition_0) {
      pos = this.skipDelimiters_0(pos);
      if (pos >= this.maxPosition_0)
        break;
      pos = this.scanToken_0(pos);
      count_0 = count_0 + 1 | 0;
    }
    return count_0;
  };
  StringTokenizer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'StringTokenizer',
    interfaces: []
  };
  function SubString(target, from, to) {
    SubString$Companion_getInstance();
    if (from === void 0)
      from = 0;
    if (to === void 0)
      to = target.length;
    this.target = target;
    this.from_0 = 0;
    this.to_0 = 0;
    this.length_0 = 0;
    this.setRange_vux9f0$(from, to);
    this.hash_0 = 0;
  }
  SubString.prototype.setRange_vux9f0$ = function (from, to) {
    if (from > to)
      throw new IllegalArgumentException('to may not be greater than from');
    if (from < 0)
      throw new IllegalArgumentException('from is out of bounds');
    if (to > this.target.length)
      throw new IllegalArgumentException('to is out of bounds');
    this.from_0 = from;
    this.to_0 = to;
    this.length_0 = to - from | 0;
    this.hash_0 = 0;
  };
  SubString.prototype.length = function () {
    return this.to_0 - this.from_0 | 0;
  };
  SubString.prototype.charAt_za3lpa$ = function (index) {
    return Kotlin.unboxChar(this.target.charCodeAt(index + this.from_0 | 0));
  };
  SubString.prototype.subSequence_vux9f0$ = function (start, end) {
    return this.target.substring(start + this.from_0 | 0, end + this.from_0 | 0).toString();
  };
  SubString.prototype.endsWith_61zpoe$ = function (suffix) {
    return this.startsWith_bm4lxs$(suffix, this.length_0 - suffix.length | 0);
  };
  SubString.prototype.startsWith_bm4lxs$ = function (prefix, offset) {
    if (offset === void 0)
      offset = 0;
    var tmp$, tmp$_0;
    var to = offset;
    var po = 0;
    var pc = prefix.length;
    if (offset < 0 || offset > (this.length_0 - pc | 0)) {
      return false;
    }
    while ((pc = pc - 1 | 0, pc) >= 0) {
      if (Kotlin.unboxChar(this.charAt_za3lpa$((tmp$ = to, to = tmp$ + 1 | 0, tmp$))) !== Kotlin.unboxChar(prefix.charCodeAt((tmp$_0 = po, po = tmp$_0 + 1 | 0, tmp$_0)))) {
        return false;
      }
    }
    return true;
  };
  SubString.prototype.indexOf_s9u7hn$ = function (ch, fromIndex) {
    if (fromIndex === void 0)
      fromIndex = 0;
    var tmp$;
    var fromIndex_0 = fromIndex;
    var max = this.length_0;
    if (fromIndex_0 < 0) {
      fromIndex_0 = 0;
    }
     else if (fromIndex_0 >= max) {
      return -1;
    }
    tmp$ = max - 1 | 0;
    for (var i = fromIndex_0; i <= tmp$; i++) {
      if (Kotlin.unboxChar(this.charAt_za3lpa$(i)) === Kotlin.unboxChar(ch)) {
        return i;
      }
    }
    return -1;
  };
  SubString.prototype.lastIndexOf_s9u7hn$ = function (ch, fromIndex) {
    if (fromIndex === void 0)
      fromIndex = this.length_0 - 1 | 0;
    var a = fromIndex;
    var b = this.length_0 - 1 | 0;
    var i = Math.min(a, b);
    while (i >= 0) {
      if (Kotlin.unboxChar(this.charAt_za3lpa$(i)) === Kotlin.unboxChar(ch)) {
        return i;
      }
      i = i - 1 | 0;
    }
    return -1;
  };
  SubString.prototype.indexOf_61zpoe$ = function (str) {
    return this.indexOf_bm4lxs$(str, 0);
  };
  SubString.prototype.indexOf_bm4lxs$ = function (str, fromIndex) {
    return SubString$Companion_getInstance().indexOf_a1f306$(this, 0, this.length_0, str, 0, str.length, fromIndex);
  };
  SubString.prototype.lastIndexOf_61zpoe$ = function (str) {
    return this.lastIndexOf_bm4lxs$(str, this.length_0);
  };
  SubString.prototype.lastIndexOf_bm4lxs$ = function (str, fromIndex) {
    return SubString$Companion_getInstance().lastIndexOf_a1f306$(this, 0, this.length_0, str, 0, str.length, fromIndex);
  };
  SubString.prototype.compareTo_61zpoe$ = function (other) {
    var len1 = this.to_0 - this.from_0 | 0;
    var len2 = other.length;
    var lim = Math.min(len1, len2);
    var k = 0;
    while (k < lim) {
      var c1 = Kotlin.unboxChar(this.target.charCodeAt(k + this.from_0 | 0));
      var c2 = Kotlin.unboxChar(other.charCodeAt(k));
      if (Kotlin.unboxChar(c1) !== Kotlin.unboxChar(c2)) {
        return (Kotlin.unboxChar(c1) | 0) - (Kotlin.unboxChar(c2) | 0) | 0;
      }
      k = k + 1 | 0;
    }
    return len1 - len2 | 0;
  };
  SubString.prototype.compareTo_11rb$ = function (other) {
    var len1 = this.to_0 - this.from_0 | 0;
    var len2 = other.length();
    var lim = Math.min(len1, len2);
    var k = 0;
    while (k < lim) {
      var c1 = Kotlin.unboxChar(this.target.charCodeAt(k + this.from_0 | 0));
      var c2 = Kotlin.unboxChar(other.charAt_za3lpa$(k));
      if (Kotlin.unboxChar(c1) !== Kotlin.unboxChar(c2)) {
        return (Kotlin.unboxChar(c1) | 0) - (Kotlin.unboxChar(c2) | 0) | 0;
      }
      k = k + 1 | 0;
    }
    return len1 - len2 | 0;
  };
  SubString.prototype.equals = function (other) {
    var tmp$;
    if (typeof other === 'string') {
      var n = this.to_0 - this.from_0 | 0;
      if (n === other.length) {
        var i = 0;
        while ((tmp$ = n, n = tmp$ - 1 | 0, tmp$) > 0) {
          if (Kotlin.unboxChar(this.target.charCodeAt(i + this.from_0 | 0)) !== Kotlin.unboxChar(other.charCodeAt(i)))
            return false;
          i = i + 1 | 0;
        }
        return true;
      }
    }
    return false;
  };
  SubString.prototype.hashCode = function () {
    var tmp$, tmp$_0;
    var h = this.hash_0;
    if (h === 0 && this.to_0 > this.from_0) {
      tmp$ = this.from_0;
      tmp$_0 = this.to_0 - 1 | 0;
      for (var i = tmp$; i <= tmp$_0; i++) {
        h = (31 * h | 0) + (Kotlin.unboxChar(this.target.charCodeAt(i)) | 0) | 0;
      }
      this.hash_0 = h;
    }
    return h;
  };
  SubString.prototype.toString = function () {
    return this.subSequence_vux9f0$(0, this.length_0);
  };
  function SubString$Companion() {
    SubString$Companion_instance = this;
  }
  SubString$Companion.prototype.indexOf_a1f306$ = function (source, sourceOffset, sourceCount, target, targetOffset, targetCount, fromIndex) {
    var fromIndex_0 = fromIndex;
    if (fromIndex_0 >= sourceCount) {
      return targetCount === 0 ? sourceCount : -1;
    }
    if (fromIndex_0 < 0) {
      fromIndex_0 = 0;
    }
    if (targetCount === 0) {
      return fromIndex_0;
    }
    var first = Kotlin.unboxChar(target.charCodeAt(targetOffset));
    var max = sourceOffset + (sourceCount - targetCount) | 0;
    var i = sourceOffset + fromIndex_0 | 0;
    while (i <= max) {
      if (Kotlin.unboxChar(source.charAt_za3lpa$(i)) !== Kotlin.unboxChar(first)) {
        while ((i = i + 1 | 0, i) <= max && Kotlin.unboxChar(source.charAt_za3lpa$(i)) !== Kotlin.unboxChar(first)) {
        }
      }
      if (i <= max) {
        var j = i + 1 | 0;
        var end = j + targetCount - 1 | 0;
        var k = targetOffset + 1 | 0;
        while (j < end && Kotlin.unboxChar(source.charAt_za3lpa$(j)) === Kotlin.unboxChar(target.charCodeAt(k))) {
          j = j + 1 | 0;
          k = k + 1 | 0;
        }
        if (j === end) {
          return i - sourceOffset | 0;
        }
      }
      i = i + 1 | 0;
    }
    return -1;
  };
  SubString$Companion.prototype.lastIndexOf_a1f306$ = function (source, sourceOffset, sourceCount, target, targetOffset, targetCount, fromIndex) {
    var tmp$, tmp$_0;
    var fromIndex_0 = fromIndex;
    var rightIndex = sourceCount - targetCount | 0;
    if (fromIndex_0 < 0) {
      return -1;
    }
    if (fromIndex_0 > rightIndex) {
      fromIndex_0 = rightIndex;
    }
    if (targetCount === 0) {
      return fromIndex_0;
    }
    var strLastIndex = targetOffset + targetCount - 1 | 0;
    var strLastChar = Kotlin.unboxChar(target.charCodeAt(strLastIndex));
    var min = sourceOffset + targetCount - 1 | 0;
    var i = min + fromIndex_0 | 0;
    startSearchForLastChar: while (true) {
      while (i >= min && Kotlin.unboxChar(source.charAt_za3lpa$(i)) !== Kotlin.unboxChar(strLastChar)) {
        i = i - 1 | 0;
      }
      if (i < min) {
        return -1;
      }
      var j = i - 1 | 0;
      var start = j - (targetCount - 1) | 0;
      var k = strLastIndex - 1 | 0;
      while (j > start) {
        if (Kotlin.unboxChar(source.charAt_za3lpa$((tmp$ = j, j = tmp$ - 1 | 0, tmp$))) !== Kotlin.unboxChar(target.charCodeAt((tmp$_0 = k, k = tmp$_0 - 1 | 0, tmp$_0)))) {
          i = i - 1 | 0;
          continue startSearchForLastChar;
        }
      }
      return start - sourceOffset + 1 | 0;
    }
  };
  SubString$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SubString$Companion_instance = null;
  function SubString$Companion_getInstance() {
    if (SubString$Companion_instance === null) {
      new SubString$Companion();
    }
    return SubString$Companion_instance;
  }
  SubString.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SubString',
    interfaces: [Comparable]
  };
  ActionBase.prototype.hasCompleted = Action.prototype.hasCompleted;
  ActionBase.prototype.hasBeenInvoked = Action.prototype.hasBeenInvoked;
  ActionBase.prototype.isRunning = Action.prototype.isRunning;
  ActionBase.prototype.hasSucceeded = Action.prototype.hasSucceeded;
  ActionBase.prototype.hasFailed = Action.prototype.hasFailed;
  MutableAction.prototype.hasCompleted = Action.prototype.hasCompleted;
  MutableAction.prototype.hasBeenInvoked = Action.prototype.hasBeenInvoked;
  MutableAction.prototype.isRunning = Action.prototype.isRunning;
  MutableAction.prototype.hasSucceeded = Action.prototype.hasSucceeded;
  MutableAction.prototype.hasFailed = Action.prototype.hasFailed;
  BasicAction.prototype.hasCompleted = MutableAction.prototype.hasCompleted;
  BasicAction.prototype.hasBeenInvoked = MutableAction.prototype.hasBeenInvoked;
  BasicAction.prototype.isRunning = MutableAction.prototype.isRunning;
  BasicAction.prototype.hasSucceeded = MutableAction.prototype.hasSucceeded;
  BasicAction.prototype.hasFailed = MutableAction.prototype.hasFailed;
  ResultAction.prototype.hasCompleted = Action.prototype.hasCompleted;
  ResultAction.prototype.hasBeenInvoked = Action.prototype.hasBeenInvoked;
  ResultAction.prototype.isRunning = Action.prototype.isRunning;
  ResultAction.prototype.hasSucceeded = Action.prototype.hasSucceeded;
  ResultAction.prototype.hasFailed = Action.prototype.hasFailed;
  ActionDecorator.prototype.hasCompleted = ResultAction.prototype.hasCompleted;
  ActionDecorator.prototype.hasBeenInvoked = ResultAction.prototype.hasBeenInvoked;
  ActionDecorator.prototype.isRunning = ResultAction.prototype.isRunning;
  ActionDecorator.prototype.hasSucceeded = ResultAction.prototype.hasSucceeded;
  ActionDecorator.prototype.hasFailed = ResultAction.prototype.hasFailed;
  ProgressAction.prototype.hasCompleted = Action.prototype.hasCompleted;
  ProgressAction.prototype.hasBeenInvoked = Action.prototype.hasBeenInvoked;
  ProgressAction.prototype.isRunning = Action.prototype.isRunning;
  ProgressAction.prototype.hasSucceeded = Action.prototype.hasSucceeded;
  ProgressAction.prototype.hasFailed = Action.prototype.hasFailed;
  Object.defineProperty(ProgressAction.prototype, 'percentLoaded', Object.getOwnPropertyDescriptor(Progress.prototype, 'percentLoaded'));
  Loadable.prototype.hasCompleted = ResultAction.prototype.hasCompleted;
  Loadable.prototype.hasBeenInvoked = ResultAction.prototype.hasBeenInvoked;
  Loadable.prototype.isRunning = ResultAction.prototype.isRunning;
  Loadable.prototype.hasSucceeded = ResultAction.prototype.hasSucceeded;
  Loadable.prototype.hasFailed = ResultAction.prototype.hasFailed;
  Object.defineProperty(Loadable.prototype, 'percentLoaded', Object.getOwnPropertyDescriptor(ProgressAction.prototype, 'percentLoaded'));
  LoadableDecorator.prototype.hasCompleted = Loadable.prototype.hasCompleted;
  LoadableDecorator.prototype.hasBeenInvoked = Loadable.prototype.hasBeenInvoked;
  LoadableDecorator.prototype.isRunning = Loadable.prototype.isRunning;
  LoadableDecorator.prototype.hasSucceeded = Loadable.prototype.hasSucceeded;
  LoadableDecorator.prototype.hasFailed = Loadable.prototype.hasFailed;
  Object.defineProperty(LoadableDecorator.prototype, 'percentLoaded', Object.getOwnPropertyDescriptor(Loadable.prototype, 'percentLoaded'));
  ActionWatch.prototype.hasCompleted = ProgressAction.prototype.hasCompleted;
  ActionWatch.prototype.hasBeenInvoked = ProgressAction.prototype.hasBeenInvoked;
  ActionWatch.prototype.isRunning = ProgressAction.prototype.isRunning;
  ActionWatch.prototype.hasSucceeded = ProgressAction.prototype.hasSucceeded;
  ActionWatch.prototype.hasFailed = ProgressAction.prototype.hasFailed;
  Object.defineProperty(ActionWatch.prototype, 'percentLoaded', Object.getOwnPropertyDescriptor(ProgressAction.prototype, 'percentLoaded'));
  MutableResultAction.prototype.hasCompleted = ResultAction.prototype.hasCompleted;
  MutableResultAction.prototype.hasBeenInvoked = ResultAction.prototype.hasBeenInvoked;
  MutableResultAction.prototype.isRunning = ResultAction.prototype.isRunning;
  MutableResultAction.prototype.hasSucceeded = ResultAction.prototype.hasSucceeded;
  MutableResultAction.prototype.hasFailed = ResultAction.prototype.hasFailed;
  MutableResultAction.prototype.setStatus_pxr8bi$ = MutableAction.prototype.setStatus_pxr8bi$;
  InputAction.prototype.setStatus_pxr8bi$ = MutableAction.prototype.setStatus_pxr8bi$;
  InputAction.prototype.hasCompleted = MutableAction.prototype.hasCompleted;
  InputAction.prototype.hasBeenInvoked = MutableAction.prototype.hasBeenInvoked;
  InputAction.prototype.isRunning = MutableAction.prototype.isRunning;
  InputAction.prototype.hasSucceeded = MutableAction.prototype.hasSucceeded;
  InputAction.prototype.hasFailed = MutableAction.prototype.hasFailed;
  ChainActionBase.prototype.hasCompleted = MutableResultAction.prototype.hasCompleted;
  ChainActionBase.prototype.hasBeenInvoked = MutableResultAction.prototype.hasBeenInvoked;
  ChainActionBase.prototype.isRunning = MutableResultAction.prototype.isRunning;
  ChainActionBase.prototype.hasSucceeded = MutableResultAction.prototype.hasSucceeded;
  ChainActionBase.prototype.hasFailed = MutableResultAction.prototype.hasFailed;
  ChainActionBase.prototype.setStatus_pxr8bi$ = MutableResultAction.prototype.setStatus_pxr8bi$;
  MutableLoadable.prototype.hasCompleted = Loadable.prototype.hasCompleted;
  MutableLoadable.prototype.hasBeenInvoked = Loadable.prototype.hasBeenInvoked;
  MutableLoadable.prototype.isRunning = Loadable.prototype.isRunning;
  MutableLoadable.prototype.hasSucceeded = Loadable.prototype.hasSucceeded;
  MutableLoadable.prototype.hasFailed = Loadable.prototype.hasFailed;
  Object.defineProperty(MutableLoadable.prototype, 'percentLoaded', Object.getOwnPropertyDescriptor(Loadable.prototype, 'percentLoaded'));
  MutableLoadable.prototype.setStatus_pxr8bi$ = MutableResultAction.prototype.setStatus_pxr8bi$;
  UrlParamsImpl_0.prototype.toQueryString = UrlParams.prototype.toQueryString;
  ObjectPool.prototype.freeAll_4ezy5m$ = Pool.prototype.freeAll_4ezy5m$;
  ObjectPool.prototype.clear_6taknv$ = Pool.prototype.clear_6taknv$;
  ListView.prototype.iterate_nhjr8t$ = ObservableList.prototype.iterate_nhjr8t$;
  MutableObservableList.prototype.iterate_nhjr8t$ = ObservableList.prototype.iterate_nhjr8t$;
  ActiveList.prototype.iterate_nhjr8t$ = MutableObservableList.prototype.iterate_nhjr8t$;
  LimitedPoolImpl.prototype.freeAll_4ezy5m$ = Pool.prototype.freeAll_4ezy5m$;
  LimitedPoolImpl.prototype.clear_6taknv$ = Pool.prototype.clear_6taknv$;
  Object.defineProperty(ReadBuffer.prototype, 'remaining', Object.getOwnPropertyDescriptor(Buffer.prototype, 'remaining'));
  Object.defineProperty(WriteBuffer.prototype, 'remaining', Object.getOwnPropertyDescriptor(Buffer.prototype, 'remaining'));
  Object.defineProperty(ReadWriteBuffer.prototype, 'remaining', Object.getOwnPropertyDescriptor(ReadBuffer.prototype, 'remaining'));
  ReadWriteBuffer.prototype.put_kcizie$ = WriteBuffer.prototype.put_kcizie$;
  ReadWriteBuffer.prototype.put_p1ys8y$ = WriteBuffer.prototype.put_p1ys8y$;
  ReadWriteBuffer.prototype.put_1phuh2$ = WriteBuffer.prototype.put_1phuh2$;
  ReadWriteBuffer.prototype.fill_11rb$ = WriteBuffer.prototype.fill_11rb$;
  BufferBase.prototype.put_kcizie$ = ReadWriteBuffer.prototype.put_kcizie$;
  BufferBase.prototype.put_p1ys8y$ = ReadWriteBuffer.prototype.put_p1ys8y$;
  BufferBase.prototype.put_1phuh2$ = ReadWriteBuffer.prototype.put_1phuh2$;
  BufferBase.prototype.fill_11rb$ = ReadWriteBuffer.prototype.fill_11rb$;
  Object.defineProperty(BufferBase.prototype, 'remaining', Object.getOwnPropertyDescriptor(ReadWriteBuffer.prototype, 'remaining'));
  ArrayListBuffer.prototype.put_kcizie$ = ReadWriteBuffer.prototype.put_kcizie$;
  ArrayListBuffer.prototype.put_p1ys8y$ = ReadWriteBuffer.prototype.put_p1ys8y$;
  ArrayListBuffer.prototype.put_1phuh2$ = ReadWriteBuffer.prototype.put_1phuh2$;
  ArrayListBuffer.prototype.fill_11rb$ = ReadWriteBuffer.prototype.fill_11rb$;
  Object.defineProperty(ArrayListBuffer.prototype, 'remaining', Object.getOwnPropertyDescriptor(ReadWriteBuffer.prototype, 'remaining'));
  NativeBuffer.prototype.put_kcizie$ = ReadWriteBuffer.prototype.put_kcizie$;
  NativeBuffer.prototype.put_p1ys8y$ = ReadWriteBuffer.prototype.put_p1ys8y$;
  NativeBuffer.prototype.put_1phuh2$ = ReadWriteBuffer.prototype.put_1phuh2$;
  NativeBuffer.prototype.fill_11rb$ = ReadWriteBuffer.prototype.fill_11rb$;
  Object.defineProperty(NativeBuffer.prototype, 'remaining', Object.getOwnPropertyDescriptor(ReadWriteBuffer.prototype, 'remaining'));
  FilesManifestSerializer.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  ManifestEntrySerializer.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  WrappedArrayBuffer.prototype.put_kcizie$ = ReadWriteBuffer.prototype.put_kcizie$;
  WrappedArrayBuffer.prototype.put_p1ys8y$ = ReadWriteBuffer.prototype.put_p1ys8y$;
  WrappedArrayBuffer.prototype.put_1phuh2$ = ReadWriteBuffer.prototype.put_1phuh2$;
  WrappedArrayBuffer.prototype.fill_11rb$ = ReadWriteBuffer.prototype.fill_11rb$;
  Object.defineProperty(WrappedArrayBuffer.prototype, 'remaining', Object.getOwnPropertyDescriptor(ReadWriteBuffer.prototype, 'remaining'));
  Log.prototype.error_a67anv$$default = ILogger.prototype.error_a67anv$;
  Log.prototype.debug_s8jyv4$ = ILogger.prototype.debug_s8jyv4$;
  Log.prototype.debug_nq59yw$ = ILogger.prototype.debug_nq59yw$;
  Log.prototype.info_s8jyv4$ = ILogger.prototype.info_s8jyv4$;
  Log.prototype.info_nq59yw$ = ILogger.prototype.info_nq59yw$;
  Log.prototype.warn_s8jyv4$ = ILogger.prototype.warn_s8jyv4$;
  Log.prototype.warn_nq59yw$ = ILogger.prototype.warn_nq59yw$;
  Log.prototype.error_s8jyv4$ = ILogger.prototype.error_s8jyv4$;
  Log.prototype.error_a67anv$ = ILogger.prototype.error_a67anv$;
  Log.prototype.error_a67anv$$default = ILogger.prototype.error_a67anv$$default;
  Log.prototype.error_nq59yw$ = ILogger.prototype.error_nq59yw$;
  PrintTarget.prototype.error_a67anv$$default = ILogger.prototype.error_a67anv$;
  PrintTarget.prototype.debug_s8jyv4$ = ILogger.prototype.debug_s8jyv4$;
  PrintTarget.prototype.debug_nq59yw$ = ILogger.prototype.debug_nq59yw$;
  PrintTarget.prototype.info_s8jyv4$ = ILogger.prototype.info_s8jyv4$;
  PrintTarget.prototype.info_nq59yw$ = ILogger.prototype.info_nq59yw$;
  PrintTarget.prototype.warn_s8jyv4$ = ILogger.prototype.warn_s8jyv4$;
  PrintTarget.prototype.warn_nq59yw$ = ILogger.prototype.warn_nq59yw$;
  PrintTarget.prototype.error_s8jyv4$ = ILogger.prototype.error_s8jyv4$;
  PrintTarget.prototype.error_a67anv$ = ILogger.prototype.error_a67anv$;
  PrintTarget.prototype.error_a67anv$$default = ILogger.prototype.error_a67anv$$default;
  PrintTarget.prototype.error_nq59yw$ = ILogger.prototype.error_nq59yw$;
  ArrayTarget.prototype.error_a67anv$$default = ILogger.prototype.error_a67anv$;
  ArrayTarget.prototype.debug_s8jyv4$ = ILogger.prototype.debug_s8jyv4$;
  ArrayTarget.prototype.debug_nq59yw$ = ILogger.prototype.debug_nq59yw$;
  ArrayTarget.prototype.info_s8jyv4$ = ILogger.prototype.info_s8jyv4$;
  ArrayTarget.prototype.info_nq59yw$ = ILogger.prototype.info_nq59yw$;
  ArrayTarget.prototype.warn_s8jyv4$ = ILogger.prototype.warn_s8jyv4$;
  ArrayTarget.prototype.warn_nq59yw$ = ILogger.prototype.warn_nq59yw$;
  ArrayTarget.prototype.error_s8jyv4$ = ILogger.prototype.error_s8jyv4$;
  ArrayTarget.prototype.error_a67anv$ = ILogger.prototype.error_a67anv$;
  ArrayTarget.prototype.error_a67anv$$default = ILogger.prototype.error_a67anv$$default;
  ArrayTarget.prototype.error_nq59yw$ = ILogger.prototype.error_nq59yw$;
  CornersSerializer.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  Constant.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  Pow.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  PowIn.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  PowOut.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  Exp.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  Elastic.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  Swing.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  SwingOut.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  SwingIn.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  Linear.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  Fade.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  Sine.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  SineIn.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  SineOut.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  Circle.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  CircleIn.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  CircleOut.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  Reverse.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  ToFro.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  YoYo.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  Repeat.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  BasicBounce.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  BounceInPlace.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  Clamp.prototype.apply_y2kzbl$ = Interpolation.prototype.apply_y2kzbl$;
  IntRectangleSerializer.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  PadSerializer.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  Rectangle.prototype.intersects_y8xsj$ = RectangleRo.prototype.intersects_y8xsj$;
  RectangleSerializer.prototype.write2_6l37rg$ = To.prototype.write2_6l37rg$;
  Vector2.prototype.component1 = Vector2Ro.prototype.component1;
  Vector2.prototype.component2 = Vector2Ro.prototype.component2;
  Vector2.prototype.copy = Vector2Ro.prototype.copy;
  Vector3.prototype.component1 = Vector3Ro.prototype.component1;
  Vector3.prototype.component2 = Vector3Ro.prototype.component2;
  Vector3.prototype.component3 = Vector3Ro.prototype.component3;
  Vector3.prototype.isUnit_mx4ult$ = Vector3Ro.prototype.isUnit_mx4ult$;
  Vector3.prototype.closeTo_7aight$ = Vector3Ro.prototype.closeTo_7aight$;
  Vector3.prototype.closeTo_7b5o5w$ = Vector3Ro.prototype.closeTo_7b5o5w$;
  Vector3.prototype.copy = Vector3Ro.prototype.copy;
  JsonSerializer.prototype.read_awjrhg$ = Serializer.prototype.read_awjrhg$;
  JsonSerializer.prototype.write_hzsrf4$ = Serializer.prototype.write_hzsrf4$;
  JsonNode.prototype.get_61zpoe$ = Reader.prototype.get_61zpoe$;
  JsonNode.prototype.get_za3lpa$ = Reader.prototype.get_za3lpa$;
  SignalBase.prototype.add_trkh7z$ = Signal.prototype.add_trkh7z$;
  SignalBase.prototype.addOnce_trkh7z$ = Signal.prototype.addOnce_trkh7z$;
  StoppableSignal.prototype.add_trkh7z$ = Signal.prototype.add_trkh7z$;
  StoppableSignal.prototype.addOnce_trkh7z$ = Signal.prototype.addOnce_trkh7z$;
  StoppableSignalImpl.prototype.add_trkh7z$ = StoppableSignal.prototype.add_trkh7z$;
  StoppableSignalImpl.prototype.addOnce_trkh7z$ = StoppableSignal.prototype.addOnce_trkh7z$;
  var package$com = _.com || (_.com = {});
  var package$acornui = package$com.acornui || (package$com.acornui = {});
  var package$action = package$acornui.action || (package$acornui.action = {});
  package$action.ActionBase = ActionBase;
  package$action.BasicAction = BasicAction;
  package$action.ActionDecorator = ActionDecorator;
  package$action.LoadableDecorator = LoadableDecorator;
  package$action.ActionWatch = ActionWatch;
  package$action.CallAction = CallAction;
  package$action.call_o14v8n$ = call;
  package$action.ChainActionBase = ChainActionBase;
  package$action.chain_mhmvq6$ = chain;
  package$action.chain_e5v8c$ = chain_0;
  package$action.chain_7ekeo5$ = chain_1;
  package$action.chain_x9ue71$ = chain_2;
  package$action.chain_la1gyg$ = chain_3;
  package$action.chain_e356jq$ = chain_4;
  package$action.Decorator = Decorator;
  package$action.noopDecorator_287e2$ = noopDecorator;
  package$action.DelegateAction = DelegateAction;
  Object.defineProperty(ActionStatus, 'PENDING', {
    get: ActionStatus$PENDING_getInstance
  });
  Object.defineProperty(ActionStatus, 'INVOKED', {
    get: ActionStatus$INVOKED_getInstance
  });
  Object.defineProperty(ActionStatus, 'SUCCESSFUL', {
    get: ActionStatus$SUCCESSFUL_getInstance
  });
  Object.defineProperty(ActionStatus, 'FAILED', {
    get: ActionStatus$FAILED_getInstance
  });
  Object.defineProperty(ActionStatus, 'ABORTED', {
    get: ActionStatus$ABORTED_getInstance
  });
  package$action.ActionStatus = ActionStatus;
  package$action.Action = Action;
  package$action.MutableAction = MutableAction;
  package$action.onSuccess_r0klxd$ = onSuccess_0;
  package$action.onSuccess_ehmz8c$ = onSuccess;
  package$action.onFailed_r0klxd$ = onFailed_0;
  package$action.onFailed_r6f3ly$ = onFailed;
  package$action.QueueAction = QueueAction;
  package$action.queue_yto355$ = queue;
  package$action.group_yto355$ = group;
  package$action.MultiAction = MultiAction;
  package$action.PriorityQueueAction = PriorityQueueAction;
  package$action.Progress = Progress;
  package$action.ProgressAction = ProgressAction;
  package$action.ResultAction = ResultAction;
  package$action.MutableResultAction = MutableResultAction;
  package$action.InputAction = InputAction;
  package$action.Loadable = Loadable;
  package$action.MutableLoadable = MutableLoadable;
  var package$browser = package$acornui.browser || (package$acornui.browser = {});
  package$browser.UrlParams = UrlParams;
  package$browser.UrlParamsImpl_61zpoe$ = UrlParamsImpl;
  package$browser.UrlParamsImpl = UrlParamsImpl_0;
  Object.defineProperty(package$browser, 'encodeUriComponent2', {
    get: get_encodeUriComponent2,
    set: set_encodeUriComponent2
  });
  Object.defineProperty(package$browser, 'decodeUriComponent2', {
    get: get_decodeUriComponent2,
    set: set_decodeUriComponent2
  });
  package$browser.appendParam_j4ogox$ = appendParam;
  package$browser.appendOrUpdateParam_j4ogox$ = appendOrUpdateParam;
  var package$collection = package$acornui.collection || (package$acornui.collection = {});
  package$collection.indexOf_qoih4i$ = indexOf_1;
  package$collection.arrayCopy_kb17mp$ = arrayCopy;
  package$collection.arrayCopy_5ukzfm$ = arrayCopy_0;
  package$collection.arrayCopy_lvhpry$ = arrayCopy_1;
  package$collection.pop_vvxzk3$ = pop;
  package$collection.poll_vvxzk3$ = poll;
  package$collection.peek_2p1efm$ = peek;
  package$collection.ArrayIterator = ArrayIterator;
  package$collection.equalsArray_5fp2ol$ = equalsArray;
  package$collection.equalsArray_tec1tx$ = equalsArray_0;
  package$collection.hashCodeIterable_7wnvza$ = hashCodeIterable;
  package$collection.hashCodeIterable_4b5429$ = hashCodeIterable_0;
  package$collection.iterateNotNulls_ea06pf$ = iterateNotNulls;
  package$collection.fill2_nwy378$ = fill2;
  package$collection.scl_omthmc$ = scl;
  package$collection.BinaryHeap = BinaryHeap;
  package$collection.BinaryHeapNode = BinaryHeapNode;
  package$collection.CyclicList = CyclicList;
  Object.defineProperty(package$collection, 'cyclicListPool', {
    get: function () {
      return cyclicListPool;
    }
  });
  package$collection.DualHashMap = DualHashMap;
  package$collection.Entry = Entry;
  package$collection.LinkedList = LinkedList;
  package$collection.arrayCopy_hd6cw9$ = arrayCopy_2;
  package$collection.clone_2p1efm$ = clone;
  package$collection.addAllUnique_5hhxhv$ = addAllUnique;
  package$collection.addAllUnique_z57ypx$ = addAllUnique_0;
  package$collection.sortedInsertionIndex_hdciot$ = sortedInsertionIndex_0;
  package$collection.sortedInsertionIndex_u0u1c5$ = sortedInsertionIndex;
  package$collection.ListBase = ListBase;
  package$collection.MutableListBase = MutableListBase;
  package$collection.ListIteratorImpl = ListIteratorImpl;
  package$collection.MutableListIteratorImpl = MutableListIteratorImpl;
  package$collection.SubList = SubList;
  package$collection.MutableSubList = MutableSubList;
  Object.defineProperty(package$collection, 'arrayListPool', {
    get: function () {
      return arrayListPool;
    }
  });
  package$collection.addOrSet_yd8n6p$ = addOrSet;
  package$collection.fill_whk35f$ = fill;
  package$collection.addAll2_7f5kvw$ = addAll2;
  package$collection.addAll2_q5hvb0$ = addAll2_0;
  package$collection.toList_35ci02$ = toList;
  package$collection.arrayList2_ro6dgy$ = arrayList2;
  package$collection.filterTo2_lfxn3m$ = filterTo2;
  package$collection.firstOrNull2_dmm9ex$ = firstOrNull2;
  package$collection.find2_dmm9ex$ = find2;
  package$collection.forEach2_qvzyjf$ = forEach2;
  package$collection.sum2_u3djwt$ = sum2;
  package$collection.ListView = ListView;
  package$collection.sort_z96lqg$ = sort;
  package$collection.listView_r2twv8$ = listView;
  package$collection.containsAllKeys_50wjuc$ = containsAllKeys;
  package$collection.copy_go3l1a$ = copy;
  package$collection.MutableObservableList = MutableObservableList;
  package$collection.ObservableList = ObservableList;
  package$collection.activeListOf_i5x0yv$ = activeListOf;
  package$collection.ActiveList_init_287e2$ = ActiveList_init;
  package$collection.ActiveList_init_bemo1h$ = ActiveList_init_0;
  package$collection.ActiveList_init_ro6dgy$ = ActiveList_init_1;
  package$collection.ActiveList = ActiveList;
  package$collection.ConcurrentListIterator = ConcurrentListIterator;
  package$collection.MutableConcurrentListIterator = MutableConcurrentListIterator;
  package$collection.Clearable = Clearable;
  package$collection.Pool = Pool;
  package$collection.ObjectPool = ObjectPool;
  package$collection.ClearableObjectPool = ClearableObjectPool;
  package$collection.LimitedPoolImpl = LimitedPoolImpl;
  package$collection.limitedPool$f = limitedPool$lambda;
  var package$core = package$acornui.core || (package$acornui.core = {});
  package$core.Disposable = Disposable;
  package$core.with_9bxh2u$ = with_0;
  Object.defineProperty(package$core, 'LONG_MAX_VALUE', {
    get: function () {
      return LONG_MAX_VALUE;
    }
  });
  Object.defineProperty(package$core, 'INT_MAX_VALUE', {
    get: function () {
      return INT_MAX_VALUE;
    }
  });
  Object.defineProperty(package$core, 'INT_MIN_VALUE', {
    get: function () {
      return INT_MIN_VALUE;
    }
  });
  Object.defineProperty(package$core, 'LONG_MIN_VALUE', {
    get: function () {
      return LONG_MIN_VALUE;
    }
  });
  package$core.numberOfLeadingZeros_s8ev3n$ = numberOfLeadingZeros;
  package$core.numberOfTrailingZeros_s8ev3n$ = numberOfTrailingZeros;
  Object.defineProperty(package$core, 'toString', {
    get: get_toString,
    set: set_toString
  });
  package$core.floor_81szk$ = floor;
  package$core.round_81szk$ = round;
  package$core.notCloseTo_wj6e7o$ = notCloseTo;
  package$core.closeTo_wj6e7o$ = closeTo;
  package$core.toInt_1v8dcc$ = toInt;
  package$core.zeroPadding_ce333h$ = zeroPadding;
  package$core.zeroPadding_qgyqat$ = zeroPadding_0;
  package$core.radToDeg_81szk$ = radToDeg;
  package$core.degToRad_81szk$ = degToRad;
  package$core.replaceTokens_5gqing$ = replaceTokens;
  package$core.replace2_90ijwr$ = replace2;
  package$core.replace2_c4eoeh$ = replace2_0;
  package$core.join2_urp9b0$ = join2_0;
  package$core.split2_bauq2a$ = split2_0;
  package$core.join2_1mip39$ = join2;
  package$core.split2_rjktp$ = split2;
  package$core.startsWith2_4hqpxb$ = startsWith2;
  package$core.endsWith2_rjktp$ = endsWith2;
  package$core.repeat2_94bcnn$ = repeat2;
  Object.defineProperty(package$core, 'lineSeparator', {
    get: function () {
      return lineSeparator;
    },
    set: function (value) {
      lineSeparator = value;
    }
  });
  package$core.htmlEntities_61zpoe$ = htmlEntities;
  package$core.removeBackslashes_61zpoe$ = removeBackslashes;
  package$core.addBackslashes_61zpoe$ = addBackslashes;
  var package$di = package$acornui.di || (package$acornui.di = {});
  package$di.DependencyGraph = DependencyGraph;
  var package$factory = package$acornui.factory || (package$acornui.factory = {});
  package$factory.LazyInstance = LazyInstance;
  var package$graphics = package$acornui.graphics || (package$acornui.graphics = {});
  package$graphics.Color_s8cxhz$ = Color;
  Object.defineProperty(Color_0, 'Companion', {
    get: Color$Companion_getInstance
  });
  package$graphics.Color = Color_0;
  package$graphics.Hsl = Hsl;
  package$graphics.Hsv = Hsv;
  package$graphics.color_1qbbry$ = color;
  package$graphics.color_l6i4uk$ = color_0;
  package$graphics.color_86n5bk$ = color_1;
  package$graphics.color_uavegi$ = color_2;
  var package$io = package$acornui.io || (package$acornui.io = {});
  package$io.ArrayListBuffer = ArrayListBuffer;
  Object.defineProperty(BufferBase, 'Companion', {
    get: BufferBase$Companion_getInstance
  });
  package$io.BufferBase = BufferBase;
  package$io.InvalidMarkException = InvalidMarkException;
  package$io.BufferUnderflowException = BufferUnderflowException;
  package$io.BufferOverflowException = BufferOverflowException;
  package$io.Buffer = Buffer;
  package$io.ReadBuffer = ReadBuffer;
  package$io.WriteBuffer = WriteBuffer;
  package$io.ReadWriteBuffer = ReadWriteBuffer;
  package$io.NativeBuffer = NativeBuffer;
  package$io.write_o2845a$ = write;
  package$io.write_gn2zlr$ = write_0;
  package$io.writeUnpacked_6hl8m0$ = writeUnpacked;
  package$io.toFloatArray_o73y4v$ = toFloatArray;
  var package$file = package$io.file || (package$io.file = {});
  package$file.FilesManifest = FilesManifest;
  Object.defineProperty(package$file, 'FilesManifestSerializer', {
    get: FilesManifestSerializer_getInstance
  });
  package$file.ManifestEntry = ManifestEntry;
  Object.defineProperty(package$file, 'ManifestEntrySerializer', {
    get: ManifestEntrySerializer_getInstance
  });
  package$io.WrappedArrayBuffer = WrappedArrayBuffer;
  Object.defineProperty(ILogger, 'Companion', {
    get: ILogger$Companion_getInstance
  });
  var package$logging = package$acornui.logging || (package$acornui.logging = {});
  package$logging.ILogger = ILogger;
  Object.defineProperty(package$logging, 'Log', {
    get: Log_getInstance
  });
  package$logging.PrintTarget = PrintTarget;
  package$logging.ArrayTarget = ArrayTarget;
  var package$math = package$acornui.math || (package$acornui.math = {});
  package$math.BoundsRo = BoundsRo;
  Object.defineProperty(Bounds, 'Companion', {
    get: Bounds$Companion_getInstance
  });
  package$math.Bounds = Bounds;
  Object.defineProperty(Box, 'Companion', {
    get: Box$Companion_getInstance
  });
  package$math.Box = Box;
  Object.defineProperty(ColorTransformation, 'Companion', {
    get: ColorTransformation$Companion_getInstance
  });
  package$math.ColorTransformation = ColorTransformation;
  package$math.sepia_lqig17$ = sepia;
  package$math.grayscale_lqig17$ = grayscale;
  package$math.invert_lqig17$ = invert;
  package$math.Corners_init_n34qss$ = Corners_init;
  package$math.Corners_init_mx4ult$ = Corners_init_0;
  package$math.Corners_init_7b5o5w$ = Corners_init_1;
  package$math.Corners = Corners;
  Object.defineProperty(package$math, 'CornersSerializer', {
    get: CornersSerializer_getInstance
  });
  package$math.Interpolation = Interpolation;
  package$math.Constant = Constant;
  package$math.Pow = Pow;
  package$math.PowIn = PowIn;
  package$math.PowOut = PowOut;
  package$math.Exp = Exp;
  package$math.ExpIn = ExpIn;
  package$math.ExpOut = ExpOut;
  package$math.Elastic = Elastic;
  package$math.ElasticIn = ElasticIn;
  package$math.ElasticOut = ElasticOut;
  package$math.Swing = Swing;
  package$math.SwingOut = SwingOut;
  package$math.SwingIn = SwingIn;
  Object.defineProperty(package$math, 'Linear', {
    get: Linear_getInstance
  });
  Object.defineProperty(package$math, 'Fade', {
    get: Fade_getInstance
  });
  Object.defineProperty(package$math, 'Sine', {
    get: Sine_getInstance
  });
  Object.defineProperty(package$math, 'SineIn', {
    get: SineIn_getInstance
  });
  Object.defineProperty(package$math, 'SineOut', {
    get: SineOut_getInstance
  });
  Object.defineProperty(package$math, 'Circle', {
    get: Circle_getInstance
  });
  Object.defineProperty(package$math, 'CircleIn', {
    get: CircleIn_getInstance
  });
  Object.defineProperty(package$math, 'CircleOut', {
    get: CircleOut_getInstance
  });
  package$math.Reverse = Reverse;
  package$math.ToFro = ToFro;
  package$math.YoYo = YoYo;
  package$math.Repeat = Repeat;
  Object.defineProperty(package$math, 'BasicBounce', {
    get: BasicBounce_getInstance
  });
  package$math.BounceInPlace = BounceInPlace;
  Object.defineProperty(Clamp, 'Companion', {
    get: Clamp$Companion_getInstance
  });
  package$math.Clamp = Clamp;
  Object.defineProperty(package$math, 'Easing', {
    get: Easing_getInstance
  });
  Object.defineProperty(Frustum, 'Companion', {
    get: Frustum$Companion_getInstance
  });
  package$math.Frustum = Frustum;
  Object.defineProperty(package$math, 'GeomUtils', {
    get: GeomUtils_getInstance
  });
  package$math.IntRectangleRo = IntRectangleRo;
  package$math.IntRectangle = IntRectangle;
  Object.defineProperty(package$math, 'IntRectangleSerializer', {
    get: IntRectangleSerializer_getInstance
  });
  Object.defineProperty(package$math, 'PI', {
    get: function () {
      return PI;
    }
  });
  Object.defineProperty(package$math, 'PI2', {
    get: function () {
      return PI2;
    }
  });
  Object.defineProperty(package$math, 'E', {
    get: function () {
      return E;
    }
  });
  Object.defineProperty(package$math, 'TO_DEG', {
    get: function () {
      return TO_DEG;
    }
  });
  Object.defineProperty(package$math, 'TO_RAD', {
    get: function () {
      return TO_RAD;
    }
  });
  Object.defineProperty(package$math, 'MathUtils', {
    get: MathUtils_getInstance
  });
  package$math.ceil_81szk$ = ceil;
  Object.defineProperty(Matrix3, 'Companion', {
    get: Matrix3$Companion_getInstance
  });
  package$math.Matrix3_init_b32tf5$ = Matrix3_init;
  package$math.Matrix3 = Matrix3;
  Object.defineProperty(Matrix4, 'Companion', {
    get: Matrix4$Companion_getInstance
  });
  package$math.Matrix4 = Matrix4;
  package$math.matrix4_l4d1vw$ = matrix4;
  package$math.Pad_init = Pad_init;
  package$math.Pad_init_mx4ult$ = Pad_init_0;
  package$math.Pad = Pad;
  Object.defineProperty(package$math, 'PadSerializer', {
    get: PadSerializer_getInstance
  });
  Object.defineProperty(Plane, 'Companion', {
    get: Plane$Companion_getInstance
  });
  package$math.Plane = Plane;
  Object.defineProperty(PlaneSide, 'ON_PLANE', {
    get: PlaneSide$ON_PLANE_getInstance
  });
  Object.defineProperty(PlaneSide, 'BACK', {
    get: PlaneSide$BACK_getInstance
  });
  Object.defineProperty(PlaneSide, 'FRONT', {
    get: PlaneSide$FRONT_getInstance
  });
  package$math.PlaneSide = PlaneSide;
  Object.defineProperty(Quaternion, 'Companion', {
    get: Quaternion$Companion_getInstance
  });
  package$math.Quaternion = Quaternion;
  Object.defineProperty(Random, 'Companion', {
    get: Random$Companion_getInstance
  });
  package$math.Random = Random;
  package$math.Range2 = Range2;
  Object.defineProperty(Ray, 'Companion', {
    get: Ray$Companion_getInstance
  });
  package$math.Ray = Ray;
  Object.defineProperty(Ray2, 'Companion', {
    get: Ray2$Companion_getInstance
  });
  package$math.Ray2 = Ray2;
  package$math.RectangleRo = RectangleRo;
  package$math.Rectangle = Rectangle;
  Object.defineProperty(package$math, 'RectangleSerializer', {
    get: RectangleSerializer_getInstance
  });
  package$math.Vector2Ro = Vector2Ro;
  Object.defineProperty(Vector2, 'Companion', {
    get: Vector2$Companion_getInstance
  });
  package$math.Vector2_init_1fv330$ = Vector2_init;
  package$math.Vector2 = Vector2;
  package$math.vector2_20wqlg$ = vector2_1;
  package$math.vector2_lh3jo2$ = vector2_0;
  package$math.vector2_86n5bk$ = vector2_2;
  package$math.vector2_uavegi$ = vector2;
  package$math.Vector3Ro = Vector3Ro;
  Object.defineProperty(Vector3, 'Companion', {
    get: Vector3$Companion_getInstance
  });
  package$math.Vector3_init_tvrka4$ = Vector3_init;
  package$math.Vector3 = Vector3;
  package$math.vector3_20wrc5$ = vector3;
  package$math.vector3_lh3ker$ = vector3_0;
  package$math.vector3_86n5bk$ = vector3_1;
  package$math.vector3_uavegi$ = vector3_2;
  Object.defineProperty(Crc32, 'Companion', {
    get: Crc32$Companion_getInstance
  });
  var package$observe = package$acornui.observe || (package$acornui.observe = {});
  package$observe.Crc32 = Crc32;
  package$observe.ModTag = ModTag;
  Object.defineProperty(ModTagImpl, 'Companion', {
    get: ModTagImpl$Companion_getInstance
  });
  package$observe.ModTagImpl = ModTagImpl;
  package$observe.ModTagWatch = ModTagWatch;
  var package$serialization = package$acornui.serialization || (package$acornui.serialization = {});
  Object.defineProperty(package$serialization, 'JsonSerializer', {
    get: JsonSerializer_getInstance
  });
  package$serialization.JsonNode = JsonNode;
  package$serialization.JsonWriter = JsonWriter;
  package$serialization.Serializer = Serializer;
  package$serialization.Reader = Reader;
  package$serialization.contains_klwena$ = contains_2;
  package$serialization.contains_p4yqn2$ = contains_3;
  package$serialization.forEach_6yvmsk$ = forEach;
  package$serialization.obj_gbx3af$ = obj;
  package$serialization.map_gbx3af$ = map;
  package$serialization.boolArray_86n5bk$ = boolArray;
  package$serialization.charArray_86n5bk$ = charArray;
  package$serialization.intArray_86n5bk$ = intArray;
  package$serialization.longArray_86n5bk$ = longArray;
  package$serialization.floatArray_86n5bk$ = floatArray_0;
  package$serialization.doubleArray_86n5bk$ = doubleArray;
  package$serialization.stringArray_86n5bk$ = stringArray;
  package$serialization.shortArray_86n5bk$ = shortArray;
  package$serialization.array2$f = array2$lambda;
  package$serialization.arrayWithNulls$f = arrayWithNulls$lambda;
  package$serialization.arrayList_3axv6d$ = arrayList;
  package$serialization.arrayList_gbx3af$ = arrayList_0;
  package$serialization.bool_uavegi$ = bool;
  package$serialization.string_uavegi$ = string_0;
  package$serialization.int_uavegi$ = int_0;
  package$serialization.long_uavegi$ = long_0;
  package$serialization.float_uavegi$ = float_0;
  package$serialization.double_uavegi$ = double;
  package$serialization.char_uavegi$ = char;
  package$serialization.boolArray_uavegi$ = boolArray_0;
  package$serialization.stringArray_uavegi$ = stringArray_0;
  package$serialization.shortArray_uavegi$ = shortArray_0;
  package$serialization.intArray_uavegi$ = intArray_0;
  package$serialization.longArray_uavegi$ = longArray_0;
  package$serialization.floatArray_uavegi$ = floatArray_1;
  package$serialization.doubleArray_uavegi$ = doubleArray_0;
  package$serialization.charArray_uavegi$ = charArray_0;
  package$serialization.obj_3axv6d$ = obj_0;
  package$serialization.map_3axv6d$ = map_0;
  package$serialization.Writer = Writer;
  package$serialization.map_kltt9i$ = map_1;
  package$serialization.map_dprdce$ = map_2;
  package$serialization.obj_seohcg$ = obj_1;
  package$serialization.array_dhf12x$ = array_0;
  package$serialization.array_li07n1$ = array_1;
  package$serialization.sparseArray_j5ki6c$ = sparseArray_1;
  package$serialization.boolArray_cyk0zj$ = boolArray_1;
  package$serialization.stringArray_pbocsj$ = stringArray_1;
  package$serialization.intArray_9tgt1k$ = intArray_1;
  package$serialization.longArray_cx8je9$ = longArray_1;
  package$serialization.floatArray_pusxrp$ = floatArray;
  package$serialization.doubleArray_9xfsx0$ = doubleArray_1;
  package$serialization.charArray_cbs9wp$ = charArray_1;
  package$serialization.bool_rvr0ye$ = bool_0;
  package$serialization.string_c8rh0v$ = string;
  package$serialization.int_6g08gh$ = int;
  package$serialization.long_dcst2c$ = long;
  package$serialization.float_f1rv4u$ = float;
  package$serialization.double_2ug4z3$ = double_0;
  package$serialization.char_d7pxfu$ = char_0;
  package$serialization.boolArray_ug3bgx$ = boolArray_2;
  package$serialization.stringArray_owefvv$ = stringArray_2;
  package$serialization.intArray_usrqa2$ = intArray_2;
  package$serialization.longArray_6hft5t$ = longArray_2;
  package$serialization.floatArray_bs8qql$ = floatArray_2;
  package$serialization.doubleArray_kf7f7u$ = doubleArray_2;
  package$serialization.charArray_vqgmgr$ = charArray_2;
  package$serialization.obj_vbq1dn$ = obj_2;
  package$serialization.obj_vzin3y$ = obj_3;
  package$serialization.array_iqluob$ = array;
  package$serialization.array_5r75ej$ = array_2;
  package$serialization.sparseArray_3a9cvm$ = sparseArray_2;
  package$serialization.map_vzugoc$ = map_3;
  package$serialization.From = From;
  package$serialization.To = To;
  var package$signal = package$acornui.signal || (package$acornui.signal = {});
  package$signal.Signal = Signal;
  package$signal.HandlerEntry = HandlerEntry;
  package$signal.SignalBase = SignalBase;
  package$signal.Signal0 = Signal0;
  package$signal.Signal1 = Signal1;
  package$signal.Signal2 = Signal2;
  package$signal.Signal3 = Signal3;
  package$signal.Signal4 = Signal4;
  package$signal.Signal5 = Signal5;
  package$signal.Signal6 = Signal6;
  package$signal.Signal7 = Signal7;
  package$signal.Signal8 = Signal8;
  package$signal.Signal9 = Signal9;
  package$signal.SignalR0 = SignalR0;
  package$signal.SignalR1 = SignalR1;
  package$signal.SignalR2 = SignalR2;
  package$signal.SignalR3 = SignalR3;
  package$signal.SignalR4 = SignalR4;
  package$signal.Stoppable = Stoppable;
  package$signal.Cancel = Cancel;
  package$signal.StoppableSignal = StoppableSignal;
  package$signal.StoppableSignalImpl = StoppableSignalImpl;
  var package$string = package$acornui.string || (package$acornui.string = {});
  package$string.isDigit2_myv2d0$ = isDigit2;
  package$string.isLetter2_myv2d0$ = isLetter2;
  package$string.isLetterOrDigit2_myv2d0$ = isLetterOrDigit2;
  package$string.isWhitespace2_myv2d0$ = isWhitespace2;
  Object.defineProperty(package$string, 'breakingChars', {
    get: function () {
      return breakingChars;
    },
    set: function (value) {
      breakingChars = value;
    }
  });
  package$string.isBreaking_myv2d0$ = isBreaking;
  package$string.StringParser = StringParser;
  package$string.StringTokenizer = StringTokenizer;
  Object.defineProperty(SubString, 'Companion', {
    get: SubString$Companion_getInstance
  });
  package$string.SubString = SubString;
  encodeUriComponent2 = properties_0.Delegates.notNull_30y1fr$();
  decodeUriComponent2 = properties_0.Delegates.notNull_30y1fr$();
  cyclicListPool = new ClearableObjectPool(void 0, cyclicListPool$lambda);
  arrayListPool = new arrayListPool$ObjectLiteral(8, arrayListPool$arrayListPool$ObjectLiteral_init$lambda);
  LONG_MAX_VALUE = new Kotlin.Long(-1, 2097151);
  INT_MAX_VALUE = 2147483647;
  INT_MIN_VALUE = -2147483648;
  LONG_MIN_VALUE = new Kotlin.Long(0, -2097152);
  toString = properties_0.Delegates.notNull_30y1fr$();
  lineSeparator = '\n';
  PI = 3.1415927;
  PI2 = PI * 2.0;
  E = 2.7182817;
  TO_DEG = 180.0 / PI;
  TO_RAD = PI / 180.0;
  breakingChars = [45, 32, 10, 9];
  Kotlin.defineModule('AcornUtils', _);
  return _;
}(typeof AcornUtils === 'undefined' ? {} : AcornUtils, kotlin);

//@ sourceMappingURL=AcornUtils.js.map
