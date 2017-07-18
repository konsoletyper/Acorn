if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'BasicExampleJs'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'BasicExampleJs'.");
}
if (typeof BasicExampleCore === 'undefined') {
  throw new Error("Error loading module 'BasicExampleJs'. Its dependency 'BasicExampleCore' was not found. Please, check whether 'BasicExampleCore' is loaded prior to 'BasicExampleJs'.");
}
if (typeof AcornUiJsBackend === 'undefined') {
  throw new Error("Error loading module 'BasicExampleJs'. Its dependency 'AcornUiJsBackend' was not found. Please, check whether 'AcornUiJsBackend' is loaded prior to 'BasicExampleJs'.");
}
var BasicExampleJs = function (_, Kotlin, $module$BasicExampleCore, $module$AcornUiJsBackend) {
  'use strict';
  var DataGridExample = $module$BasicExampleCore.com.acornui.basicexample.DataGridExample;
  var DomApplication = $module$AcornUiJsBackend.com.acornui.js.dom.DomApplication;
  function main$lambda($receiver, it) {
    it.addElement_mxweac$(new DataGridExample(it));
  }
  function main(args) {
    new DomApplication('myCanvas', void 0, main$lambda);
  }
  var package$com = _.com || (_.com = {});
  var package$acornui = package$com.acornui || (package$com.acornui = {});
  var package$basicexample = package$acornui.basicexample || (package$acornui.basicexample = {});
  var package$js = package$basicexample.js || (package$basicexample.js = {});
  package$js.main_kand9s$ = main;
  Kotlin.defineModule('BasicExampleJs', _);
  main([]);
  return _;
}(typeof BasicExampleJs === 'undefined' ? {} : BasicExampleJs, kotlin, BasicExampleCore, AcornUiJsBackend);

//@ sourceMappingURL=BasicExampleJs.js.map
