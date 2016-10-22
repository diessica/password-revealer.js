(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("PasswordRevealer", [], factory);
	else if(typeof exports === 'object')
		exports["PasswordRevealer"] = factory();
	else
		root["PasswordRevealer"] = factory();
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                   * password-revealer.js
	                                                                                                                                                                                                                                                   * Easily reveal/hide passwords in input fields.
	                                                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                                                   * @version 1.0.0
	                                                                                                                                                                                                                                                   * @author Diéssica Gurskas <http://github.com/diessica>
	                                                                                                                                                                                                                                                   * @license MIT
	                                                                                                                                                                                                                                                   */


	var _deepAssign = __webpack_require__(1);

	var _deepAssign2 = _interopRequireDefault(_deepAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @param {String|HTMLElement} input
	 * @param {Object} options
	 */
	var PasswordRevealer = function PasswordRevealer(input, options) {
	  var defaults = {
	    isRevealed: false,
	    trigger: {
	      selector: '.PasswordRevealer-trigger',
	      eventListener: 'click'
	    }
	  };

	  if (!input) {
	    throw new Error('Missing input argument');
	  }

	  if (typeof input === 'string') {
	    input = document.querySelector(input);
	  }

	  if (input.nodeName !== 'INPUT') {
	    throw new Error('First argument (input) must be an input element');
	  }

	  if (!input.nodeType) {
	    throw new Error('First argument (input) must be an element');
	  }

	  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
	    options = (0, _deepAssign2.default)(defaults, options);
	  } else {
	    options = defaults;
	  }

	  var isPasswordRevealed = options.isRevealed;

	  var show = function show() {
	    input.type = 'text';
	    isPasswordRevealed = true;
	  };

	  var hide = function hide() {
	    input.type = 'password';
	    isPasswordRevealed = false;
	  };

	  var toggle = function toggle() {
	    isPasswordRevealed ? hide() : show();
	  };

	  if (isPasswordRevealed) show();

	  var init = function init() {
	    var trigger = document.querySelector(options.trigger.selector);

	    if (!trigger) {
	      throw new Error('Element "' + options.trigger.selector + '" must exist to init the trigger');
	    }

	    trigger.addEventListener(options.trigger.eventListener, toggle);
	  };

	  return {
	    show: show,
	    hide: hide,
	    toggle: toggle,
	    init: init
	  };
	};

	exports.default = PasswordRevealer;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isObj = __webpack_require__(2);
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Sources cannot be null or undefined');
		}

		return Object(val);
	}

	function assignKey(to, from, key) {
		var val = from[key];

		if (val === undefined || val === null) {
			return;
		}

		if (hasOwnProperty.call(to, key)) {
			if (to[key] === undefined || to[key] === null) {
				throw new TypeError('Cannot convert undefined or null to object (' + key + ')');
			}
		}

		if (!hasOwnProperty.call(to, key) || !isObj(val)) {
			to[key] = val;
		} else {
			to[key] = assign(Object(to[key]), from[key]);
		}
	}

	function assign(to, from) {
		if (to === from) {
			return to;
		}

		from = Object(from);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				assignKey(to, from, key);
			}
		}

		if (Object.getOwnPropertySymbols) {
			var symbols = Object.getOwnPropertySymbols(from);

			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					assignKey(to, from, symbols[i]);
				}
			}
		}

		return to;
	}

	module.exports = function deepAssign(target) {
		target = toObject(target);

		for (var s = 1; s < arguments.length; s++) {
			assign(target, arguments[s]);
		}

		return target;
	};


/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (x) {
		var type = typeof x;
		return x !== null && (type === 'object' || type === 'function');
	};


/***/ }
/******/ ])
});
;