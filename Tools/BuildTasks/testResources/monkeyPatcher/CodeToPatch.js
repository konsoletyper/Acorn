define('KotlinJsScratchpad', ['exports', 'kotlin', 'ModuleB', 'ModuleA'], function (_, Kotlin, $module$ModuleB, $module$ModuleA) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var initDependencies = $module$ModuleB.initDependencies;
  var anonymous = $module$ModuleA;
  var Bar = $module$ModuleA.Bar;
  function main(args) {
    println('Hi');
    initDependencies();
    anonymous.STRING_FORMATTER_FACTORY().format_trkh7z$(new Bar());
    new Bar();
  }
  function Baz() {
    this.callbacks = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    this.callbacks.add_11rb$(Kotlin.getCallableRef('foo', function ($receiver) {
      return $receiver.foo();
    }.bind(null, this)));
    println('callbacks ' + this.callbacks.size);
    this.callbacks.remove_11rb$(Kotlin.getCallableRef('foo', function ($receiver) {
      return $receiver.foo();
    }.bind(null, this)));
    println('callbacks ' + this.callbacks.size);
  }
  Baz.prototype.foo = function () {
  };
  Baz.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Baz',
    interfaces: []
  };
  _.main_kand9s$ = main;
  _.Baz = Baz;
  Kotlin.defineModule('KotlinJsScratchpad', _);
  main([]);
  return _;
});

//@ sourceMappingURL=KotlinJsScratchpad.js.map
