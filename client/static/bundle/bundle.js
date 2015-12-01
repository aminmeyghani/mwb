(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mymodulename"] = factory();
	else
		root["mymodulename"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!****************************!*\
  !*** ./client/src/main.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	eval("/*\\\n * Load some css\n\\*/\n'use strict';\n\n__webpack_require__(/*! main.css */ 1);\n\n/*\\\n * Set the angular module.\n\\*/\nvar boiler = angular.module('mymodulename', []);\n\n/*\\\n * A basic contorller\n\\*/\nboiler.controller('AppCtrl', function () {\n  this.name = 'hello boiler';\n});\n\n/*\\                                    /*\\\n * -- Interesting stuff starts here --  *\n\\*/ /*\\\n    /*\\\n    * Loading an asset (png image)\n    \\*/\nvar icon = __webpack_require__(/*! icon.png */ 5);\n/*\\\n * Using the png inside a directive\n\\*/\nboiler.directive('myimage', function () {\n  return {\n    restrict: 'E',\n    template: '<div><image src=' + icon + '></div>'\n  };\n});\n\n/*\\\n * Loading an html template\n\\*/\nvar helloTpl = __webpack_require__(/*! hello.tpl.html */ 6);\n/*\\\n * Using ES6 Syntax\n * Also, using the template (helloTpl) loaded by webpack inside a directive\n\\*/\nboiler.directive('hello', function () {\n  return {\n    restrict: 'E',\n    template: helloTpl\n  };\n});\n/*\\\n * Export the module at the end\n * Important to use `module.exports` explicitly\n\\*/\nmodule.exports = boiler;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./client/src/main.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./client/src/main.js?");

/***/ },
/* 1 */
/*!*****************************!*\
  !*** ./client/src/main.css ***!
  \*****************************/
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n/*****************\n ** WEBPACK FOOTER\n ** ./client/src/main.css\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./client/src/main.css?");

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/*!*****************************!*\
  !*** ./client/src/icon.png ***!
  \*****************************/
/***/ function(module, exports) {

	eval("module.exports = \"data:image/png;base64,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\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./client/src/icon.png\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./client/src/icon.png?");

/***/ },
/* 6 */
/*!***********************************!*\
  !*** ./client/src/hello.tpl.html ***!
  \***********************************/
/***/ function(module, exports) {

	eval("module.exports = \"<div>Hello from template</div>\\n\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./client/src/hello.tpl.html\n ** module id = 6\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./client/src/hello.tpl.html?");

/***/ }
/******/ ])
});
;