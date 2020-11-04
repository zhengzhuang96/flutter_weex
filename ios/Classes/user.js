// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1419);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var geolocation = void 0;

if (weex && weex.requireModule) {
	geolocation = weex.requireModule('nat/geolocation');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		geolocation = __weex_require__('@weex-module/nat/geolocation');
	});
}

// get
var get = function get(opts, cb) {
	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		geolocation.get(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// watch

var watch = function watch(opts, cb) {
	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		geolocation.watch({
			maximumAge: opts.maximumAge || 0,
			timeout: opts.timeout || 10000,
			model: opts.model || 'highAccuracy'
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// clear watch

var clearWatch = function clearWatch(cb) {
	return new Promise(function (resolve, reject) {
		geolocation.clearWatch(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	get: get,
	watch: watch,
	clearWatch: clearWatch
};

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _audio = __webpack_require__(12);

var _audio2 = _interopRequireDefault(_audio);

var _image = __webpack_require__(13);

var _image2 = _interopRequireDefault(_image);

var _video = __webpack_require__(14);

var _video2 = _interopRequireDefault(_video);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = {
	audio: _audio2.default,
	image: _image2.default,
	video: _video2.default
};

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var audio = void 0;

if (weex && weex.requireModule) {
	audio = weex.requireModule('nat/media/audio');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		audio = __weex_require__('@weex-module/nat/media/audio');
	});
}

// play
var play = function play(path, cb) {
	return new Promise(function (resolve, reject) {
		if (!path) {
			reject({
				code: 110040,
				message: 'MEDIA_MISSING_ARGUMENT'
			});
			return;
		}

		audio.play(path, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// pause

var pause = function pause(cb) {
	return new Promise(function (resolve, reject) {
		audio.pause(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// stop

var stop = function stop(cb) {
	return new Promise(function (resolve, reject) {
		audio.stop(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

module.exports = {
	play: play,
	pause: pause,
	stop: stop
};

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var image = void 0;

if (weex && weex.requireModule) {
	image = weex.requireModule('nat/media/image');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		image = __weex_require__('@weex-module/nat/media/image');
	});
}

// pick
var pick = function pick(opts, cb) {
	opts = opts || {};

	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	opts.limit = opts.limit || 1;
	opts.quality = opts.quality && opts.quality < 100 ? parseInt(opts.quality) : 100;

	return new Promise(function (resolve, reject) {
		image.pick({
			limit: opts.limit,
			quality: opts.quality,
			width: opts.width || null,
			height: opts.height || null,
			showCamera: opts.showCamera || false
		}, function (ret) {
			if (ret === null) {
				return;
			}

			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// preview

var preview = function preview(files, opts, cb) {
	opts = opts || {};

	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		if (!files) {
			reject({
				code: 110040,
				message: 'MEDIA_MISSING_ARGUMENT'
			});
			return;
		}

		if (typeof files === 'string') {
			files = [files];
		}

		// style
		if (['dots', 'label', 'none'].indexOf(opts.style) < 0) {
			opts.style = 'dots';
		}

		if (opts.style === 'dots') {
			if (files.length > 9) {
				opts.style = 'label';
			} else if (files.length === 1) {
				opts.style = 'none';
			}
		}

		image.preview(files, {
			current: opts.current,
			style: opts.style
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// info

var info = function info(path, cb) {
	return new Promise(function (resolve, reject) {
		if (!path) {
			reject({
				code: 110040,
				message: 'MEDIA_MISSING_ARGUMENT'
			});
			return;
		}

		image.info(path, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// exif

var exif = function exif(path, cb) {
	return new Promise(function (resolve, reject) {
		if (!path) {
			reject({
				code: 110040,
				message: 'MEDIA_MISSING_ARGUMENT'
			});
			return;
		}

		image.exif(path, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	pick: pick,
	preview: preview,
	info: info,
	exif: exif
};

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var video = void 0;

if (weex && weex.requireModule) {
	video = weex.requireModule('nat/media/video');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		video = __weex_require__('@weex-module/nat/media/video');
	});
}

// play
var play = function play(path, cb) {
	return new Promise(function (resolve, reject) {
		if (!path) {
			reject({
				code: 110040,
				message: 'MEDIA_MISSING_ARGUMENT'
			});
			return;
		}

		video.play(path, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// pause

var pause = function pause(cb) {
	return new Promise(function (resolve, reject) {
		video.pause(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// stop

var stop = function stop(cb) {
	return new Promise(function (resolve, reject) {
		video.stop(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

module.exports = {
	play: play,
	pause: pause,
	stop: stop
};

/***/ }),

/***/ 1419:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1420)
)

/* script */
__vue_exports__ = __webpack_require__(1421)

/* template */
var __vue_template__ = __webpack_require__(1422)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/zhengzhuang/Documents/codeProject/liugeche/23-wanwan/wanwanWeex/src/user.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2cbf0fa4"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),

/***/ 1420:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "relative"
  },
  "top": {
    "width": "750",
    "height": "88",
    "backgroundColor": "#ffffff",
    "flexDirection": "row",
    "justifyContent": "flex-end",
    "alignItems": "center"
  },
  "set": {
    "position": "absolute",
    "right": "30",
    "top": "30",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "set_text": {
    "fontSize": "30",
    "color": "#333333"
  },
  "header": {
    "flexDirection": "row",
    "alignItems": "flex-start",
    "justifyContent": "space-between",
    "backgroundColor": "#ffffff",
    "paddingTop": "20",
    "paddingRight": "30",
    "paddingBottom": "40",
    "paddingLeft": "20",
    "position": "relative"
  },
  "header_left": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "header_con": {
    "marginLeft": "25"
  },
  "content_box": {
    "marginTop": "5",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "user_photo_icon": {
    "width": "50",
    "height": "50",
    "marginTop": 0,
    "marginRight": "30",
    "marginBottom": 0,
    "marginLeft": "30"
  },
  "user_dengji": {
    "width": "90",
    "height": "90",
    "position": "absolute",
    "top": "-40",
    "left": "45"
  },
  "user_dengjiImg": {
    "width": "90",
    "height": "90"
  },
  "user_xinxinBox": {
    "flexDirection": "row"
  },
  "user_xinxinImg": {
    "width": "35",
    "height": "35",
    "marginRight": "5"
  },
  "user_photo": {
    "width": "138",
    "height": "138",
    "borderRadius": "130",
    "backgroundColor": "#ffffff"
  },
  "name_box": {
    "flexDirection": "row"
  },
  "user_name": {
    "marginBottom": "10",
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontSize": "38",
    "color": "#333333",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "dengji": {
    "fontSize": "32",
    "color": "#ffffff",
    "backgroundColor": "#F3AC87",
    "borderRadius": "30",
    "width": "100",
    "height": "35",
    "lineHeight": "35",
    "textAlign": "center",
    "marginLeft": "10",
    "marginTop": "3"
  },
  "txt_phone": {
    "marginTop": "5",
    "fontSize": "30",
    "color": "#ffffff"
  },
  "header_right": {
    "backgroundColor": "#ffffff",
    "borderRadius": "30",
    "paddingBottom": "10",
    "paddingLeft": "10",
    "paddingRight": "10",
    "paddingTop": "10",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "grade": {
    "marginLeft": "5",
    "fontSize": "28",
    "color": "#43bcfc"
  },
  "badge_box": {
    "marginLeft": "5"
  },
  "badge_img": {
    "width": "40",
    "height": "40",
    "backgroundColor": "#ffffff"
  },
  "right_icon": {
    "width": "26",
    "height": "45"
  },
  "mr100": {
    "marginRight": "100"
  },
  "browse_box": {
    "marginBottom": "20",
    "paddingTop": "30",
    "paddingBottom": "20",
    "backgroundColor": "#ffffff"
  },
  "browse_top": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "browse_title": {
    "width": "234",
    "paddingBottom": "20",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "active": {
    "borderBottomColor": "#449fee",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "4"
  },
  "prototype": {
    "borderBottomColor": "#ffffff",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "4"
  },
  "browse_img": {
    "width": "44",
    "height": "44"
  },
  "browse_text": {
    "textAlign": "center",
    "fontSize": "34",
    "marginLeft": "10"
  },
  "car_list": {
    "marginTop": "10",
    "width": "226",
    "alignItems": "center"
  },
  "car_img": {
    "width": "200",
    "height": "200"
  },
  "car_box": {
    "flexDirection": "row"
  },
  "record": {
    "width": "690",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "record_text": {
    "fontSize": "34",
    "color": "#8a8a8a"
  },
  "more_text": {
    "textAlign": "center",
    "fontSize": "34",
    "color": "#8a8a8a",
    "lineHeight": "240",
    "paddingLeft": "20",
    "paddingRight": "20",
    "borderRadius": "10",
    "backgroundColor": "#f8f9fd"
  },
  "car_text": {
    "width": "180",
    "fontSize": "30",
    "color": "#333333",
    "lines": 1,
    "textAlign": "center"
  },
  "service": {
    "marginBottom": "20",
    "backgroundColor": "#ffffff"
  },
  "service_top": {
    "paddingBottom": "25",
    "paddingTop": "25",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#e4e4e4",
    "borderBottomWidth": "1",
    "backgroundColor:active": "#eeeeee"
  },
  "service_top_right": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "service_more": {
    "fontSize": "30",
    "color": "#8A8A8A",
    "marginRight": "10"
  },
  "list_title": {
    "marginLeft": "30",
    "fontSize": "34",
    "color": "#333333"
  },
  "quickList": {
    "flexDirection": "row",
    "flexWrap": "wrap",
    "alignItems": "center",
    "paddingBottom": "30"
  },
  "quickList_img": {
    "width": "50",
    "height": "50",
    "alignItems": "center"
  },
  "quickList_list": {
    "width": "187.5",
    "alignItems": "center",
    "marginTop": "50"
  },
  "quick_text": {
    "fontSize": "30",
    "marginTop": "20"
  },
  "quick_img": {
    "width": "50",
    "height": "50"
  },
  "mb": {
    "marginBottom": "20"
  },
  "panel": {
    "backgroundColor:active": "#eeeeee",
    "height": "90",
    "width": "550",
    "marginRight": "40",
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "justifyContent": "space-between",
    "alignItems": "center",
    "borderBottomWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#F2F2F2"
  },
  "list_icon": {
    "marginTop": "27.5",
    "marginLeft": "20",
    "marginRight": "30",
    "width": "45",
    "height": "45"
  },
  "list_line": {
    "borderBottomStyle": "solid",
    "borderBottomColor": "#e4e4e4",
    "borderBottomWidth": "1"
  },
  "list_text": {
    "fontSize": "32",
    "lineHeight": "99"
  },
  "list_right": {
    "width": "30",
    "height": "30"
  },
  "refresh": {
    "width": "750",
    "paddingTop": "20",
    "paddingBottom": "20",
    "backgroundColor": "#43b4f8",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "indicator": {
    "backgroundColor": "#43b4f8",
    "color": "#ffffff",
    "fontSize": "32",
    "textAlign": "center",
    "marginLeft": "10"
  },
  "refresh_img": {
    "height": "60",
    "width": "60",
    "color": "#248ef7"
  },
  "account_balance_box": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "account_balance": {
    "width": "690",
    "height": "437",
    "borderRadius": "30",
    "borderWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#FF671B",
    "position": "relative"
  },
  "account_balance_title": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "number": {
    "fontSize": "60",
    "color": "#FF671B",
    "paddingTop": "40",
    "paddingRight": 0,
    "paddingBottom": "5",
    "paddingLeft": 0
  },
  "account_balance_text": {
    "fontSize": "26",
    "color": "#333333"
  },
  "return_cash_box": {
    "flexDirection": "row",
    "width": "690",
    "justifyContent": "space-around",
    "paddingTop": "50"
  },
  "return_cash": {
    "alignItems": "center",
    "position": "relative",
    "width": "200"
  },
  "return_cash_number": {
    "fontSize": "30",
    "color": "#333333",
    "paddingBottom": "15"
  },
  "return_cash_text": {
    "fontSize": "30",
    "color": "#333333"
  },
  "border": {
    "borderLeftWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#E4E4E4",
    "height": "50",
    "position": "absolute",
    "left": "225",
    "top": "70"
  },
  "border_tow": {
    "borderLeftWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#E4E4E4",
    "height": "50",
    "position": "absolute",
    "right": "225",
    "top": "70"
  },
  "Profit_box": {
    "flexDirection": "row",
    "backgroundColor": "#FFA980",
    "justifyContent": "space-between",
    "height": "100",
    "borderBottomLeftRadius": "30",
    "borderBottomRightRadius": "30",
    "position": "absolute",
    "left": 0,
    "bottom": "-1",
    "width": "690"
  },
  "Profit_text": {
    "fontSize": "30",
    "color": "#ffffff",
    "lineHeight": "100",
    "paddingLeft": "30"
  },
  "cash": {
    "borderTopLeftRadius": "30",
    "borderBottomLeftRadius": "30",
    "backgroundColor": "#ffffff",
    "height": "60",
    "width": "169",
    "lineHeight": "60",
    "justifyContent": "center",
    "alignItems": "center",
    "marginTop": "20"
  },
  "cash_text": {
    "fontSize": "30",
    "color": "#FF671B",
    "lineHeight": "60"
  },
  "more_box": {
    "justifyContent": "center",
    "alignItems": "center",
    "marginTop": "30"
  },
  "more": {
    "width": "690",
    "backgroundColor": "#ffffff",
    "borderRadius": "20"
  },
  "list_authentication": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "list_img": {
    "width": "50",
    "height": "50",
    "marginLeft": "30"
  }
}

/***/ }),

/***/ 1421:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _header = __webpack_require__(53);

var _header2 = _interopRequireDefault(_header);

var _DownRefresh = __webpack_require__(294);

var _DownRefresh2 = _interopRequireDefault(_DownRefresh);

var _mixins = __webpack_require__(5);

var _mixins2 = _interopRequireDefault(_mixins);

var _natjs = __webpack_require__(3);

var _natjs2 = _interopRequireDefault(_natjs);

var _nxpjs = __webpack_require__(4);

var _nxpjs2 = _interopRequireDefault(_nxpjs);

var _icon = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule("modal");
var navigator = weex.requireModule('navigator');
exports.default = {
  data: function data() {
    return {
      // 页面图标
      iconList: _icon.iconList,
      // 浏览
      browselist: [],
      browseshow: true,
      browseNull: false,
      // 收藏
      collectionlist: [],
      collectionshow: false,
      collectionNull: false,
      // 联系我们
      number: "",
      // 个人信息
      infoShow: true,
      username: "*****",
      phone: "***********",
      medalImg: "",
      levelName: "*****",
      flag: "",
      // 下拉刷新
      refreshing: false,
      refresh_text: "下拉刷新",
      //判断点击去登录
      noLogonShow: false,
      balance: '',
      fr: '',
      fx: '',
      lj: '',
      qt: '',
      tdsy: '',
      headimgurl: '',
      open_bank_name: '',
      lv: '',
      lvImg: '',
      lvImgList: []
    };
  },
  components: {
    headerTop: _header2.default,
    // WxcDialog
    DownRefresh: _DownRefresh2.default
  },
  created: function created() {
    var that = this;
    // 获取token
    _mixins2.default.getItem("auth_token", function (ret) {
      // 判断有无token,跳转登录页
      if (ret.data == "" || ret.data == "undefined") {
        _mixins2.default.jump({
          to: "modules/user/login"
        });
      } else {
        // 获取个人信息
        _mixins2.default.getAjax({
          url: "user.getMineInfo",
          data: {},
          success: function success(ret) {
            that.noLogonShow = false;
            that.infoShow = true;
            that.username = ret.user_name;
            that.headimgurl = ret.headimgurl;
            that.phone = ret.login_name;
            that.levelName = ret.level_name;
            that.medalImg = ret.level_medal;
            that.flag = ret.flag;
            that.open_bank_name = ret.open_bank_name;
          },
          fail: function fail(res) {
            that.noLogonShow = true;
            that.infoShow = false;
            _natjs2.default.toast({
              message: res.message,
              duration: 3000,
              postion: "bottom"
            });
          }
        });
        _mixins2.default.getAjax({
          url: "pos/getuserlever",
          data: {},
          success: function success(ret) {
            that.lvImgList = ret.src;
            that.lv = ret.lever;
            if (ret.lever == 'v1') {
              that.lvImg = ret.img.property4;
            } else if (ret.lever == 'v2') {
              that.lvImg = ret.img.property3;
            } else if (ret.lever >= 'v3') {
              that.lvImg = ret.img.property2;
            }
          },
          fail: function fail(res) {
            _natjs2.default.toast({
              message: res.message,
              duration: 3000,
              postion: "bottom"
            });
          }
        });
        that.getprice();
        that.getyue();
      }
    });
    // 获取联系我们电话
    _mixins2.default.getAjax({
      url: "user.kefuphone",
      data: {},
      success: function success(ret) {
        that.number = ret;
      },
      fail: function fail(res) {
        _natjs2.default.toast({
          message: res.message,
          duration: 3000,
          postion: "bottom"
        });
      }
    });
    _mixins2.default.getItem("auth_token", function (ret) {
      // 返回刷新获取数据
      if (ret.data == "" || ret.data == "undefined") {
        that.noLogonShow = true;
        that.infoShow = false;
      } else {
        _mixins2.default.getAjax({
          url: "user.getMineInfo",
          data: {},
          success: function success(ret) {
            that.noLogonShow = false;
            that.infoShow = true;
            that.username = ret.user_name;
            that.phone = ret.login_name;
            that.levelName = ret.level_name;
            that.medalImg = ret.level_medal;
            that.flag = ret.flag;
          },
          fail: function fail(res) {
            that.noLogonShow = true;
            that.infoShow = false;
            _natjs2.default.toast({
              message: res.message,
              duration: 3000,
              postion: "bottom"
            });
          }
        });
        // 车收藏
      }
    });
  },
  methods: {
    // 跳登录页
    gologin: function gologin() {
      // mixins.jump({
      //   to: "modules/user/login"
      // });
      // console.log('http://192.168.60.102:8080/dist/modules/user/login.js');
      // navigator.push({
      //   url: 'http://192.168.60.102:8080/dist/modules/user/login.js',
      //   animated: "true"
      // }, event => {
      //   console.log('callback: ', event)
      // })
      _nxpjs2.default.flutter.invoke({
        method: "suibian",
        arg: "sdfghjh"
      }, function (err, ret) {
        _mixins2.default.toast("123123123");
      });
    },

    // 页面跳转
    freeJump: function freeJump(to) {
      _mixins2.default.jump({
        to: to
      });
    },

    // 车辆跳转详情页
    // jumpDetails(to, parameter) {
    //   mixins.jump({
    //     to: to,
    //     parameter: parameter
    //   });
    // },
    // 页面跳转
    jump: function jump(to) {
      var that = this;
      if (that.noLogonShow == true) {
        _mixins2.default.jump({
          to: "./modules/user/login"
        });
      } else {
        _mixins2.default.jump({
          to: to
        });
      }
    },
    getprice: function getprice() {
      var that = this;
      _mixins2.default.getAjax({
        url: 'user.getBalance',
        data: {},
        success: function success(ret) {
          that.balance = ret.list[0].balance;
        },
        fail: function fail(res) {
          _natjs2.default.toast({
            message: res.message,
            duration: 3000,
            postion: "bottom"
          });
        }
      });
    },
    getyue: function getyue() {
      var that = this;
      _mixins2.default.getAjax({
        url: 'pos.monthcens',
        data: {},
        success: function success(ret) {
          that.fr = ret.fr;
          that.fx = ret.fx;
          that.lj = ret.lj;
          that.qt = ret.qt;
          that.tdsy = ret.tdsy;
        },
        fail: function fail(res) {
          _natjs2.default.toast({
            message: res.message,
            duration: 3000,
            postion: "bottom"
          });
        }
      });
    },

    // 拨打电话
    call: function call() {
      var that = this;
      modal.confirm({
        message: that.number,
        duration: 0.3,
        okTitle: "拨打电话",
        cancelTitle: "取消"
      }, function (value) {
        if (value == "拨打电话") {
          _natjs2.default.call(that.number);
        }
      });
    },

    // 下拉刷新
    onrefresh: function onrefresh() {
      var _this = this;

      var that = this;
      this.refreshing = true;
      this.refreshText = "加载中";
      _mixins2.default.getItem("BrowseRecords", function (ret) {
        if (ret.data == "undefined") {
          that.browselist = [];
        } else {
          that.browselist = JSON.parse(ret.data).slice(0, 6);
        }
        if (that.browselist.length !== 0) {
          that.browseNull = true;
        } else {
          that.browseNull = false;
        }
      });
      _mixins2.default.getItem("auth_token", function (ret) {
        // 判断有无token,跳转登录页
        if (ret.data == "" || ret.data == "undefined") {
          that.noLogonShow = true;
          that.infoShow = false;
          that.refreshing = false;
          _mixins2.default.jump({
            to: "modules/user/login"
          });
        } else {
          that.getprice();
          that.getyue();
          // 获取个人信息
          _mixins2.default.getAjax({
            url: "user.getMineInfo",
            data: {},
            success: function success(ret) {
              that.noLogonShow = false;
              that.infoShow = true;
              that.username = ret.user_name;
              that.phone = ret.login_name;
              that.levelName = ret.level_name;
              that.medalImg = ret.level_medal;
              that.flag = ret.flag;
              that.open_bank_name = ret.open_bank_name;
            },
            fail: function fail(res) {
              that.refreshing = false;
              that.refresh_text = "下拉刷新";
              _natjs2.default.toast({
                message: res.message,
                duration: 3000,
                postion: "bottom"
              });
            }
          });
        }
      });
      setTimeout(function () {
        _this.refreshing = false;
        _this.refreshText = "下拉刷新";
      }, 2000);
    },

    // 实名认证
    realName: function realName() {
      var that = this;
      if (that.noLogonShow == true) {
        _mixins2.default.jump({
          to: "modules/user/login"
        });
      } else {
        if (that.flag == "false") {
          _mixins2.default.jump({
            to: "modules/user/realName"
          });
        } else {
          _mixins2.default.jump({
            to: "modules/user/page/realName/realPreView"
          });
        }
      }
    },
    jumptogo: function jumptogo() {
      var that = this;
      if (that.flag == 'false') {
        _mixins2.default.jump({
          to: "modules/user/realName"
        });
      } else {
        _mixins2.default.jump({
          to: "modules/assets/children/withdrawals"
        });
      }
    }
  }
};

/***/ }),

/***/ 1422:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"],
    staticStyle: {
      width: "750px"
    }
  }, [_c('list', {
    staticClass: ["list_box"]
  }, [_c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('div', {
    staticClass: ["top"]
  }, [_c('image', {
    staticClass: ["user_photo_icon"],
    attrs: {
      "resize": "cover",
      "src": _vm.iconList.set
    },
    on: {
      "click": function($event) {
        _vm.freeJump('modules/user/information')
      }
    }
  }), _c('image', {
    staticClass: ["user_photo_icon"],
    attrs: {
      "resize": "cover",
      "src": _vm.iconList.kefu
    },
    on: {
      "click": function($event) {
        _vm.call()
      }
    }
  })])]), _c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('div', {
    staticClass: ["header_box"]
  }, [(_vm.noLogonShow) ? _c('div', {
    staticClass: ["header"]
  }, [_c('div', {
    staticClass: ["header_left"],
    on: {
      "click": function($event) {
        _vm.gologin()
      }
    }
  }, [_c('image', {
    staticClass: ["user_photo"],
    attrs: {
      "resize": "cover",
      "src": _vm.headimgurl
    }
  }), _vm._m(0)])]) : _vm._e(), (_vm.infoShow) ? _c('div', {
    staticClass: ["header"],
    on: {
      "click": function($event) {
        _vm.jump('modules/user/information')
      }
    }
  }, [_c('div', {
    staticClass: ["header_left"]
  }, [_c('image', {
    staticClass: ["user_photo"],
    attrs: {
      "resize": "cover",
      "src": _vm.headimgurl
    }
  }), _c('div', {
    staticClass: ["header_con"]
  }, [_c('div', {
    staticClass: ["name_box"]
  }, [_c('text', {
    staticClass: ["user_name"]
  }, [_vm._v(_vm._s(_vm.username))]), _c('text', {
    staticClass: ["dengji"]
  }, [_vm._v(_vm._s(_vm.lv))])]), _c('div', {
    staticClass: ["user_xinxinBox"]
  }, _vm._l((_vm.lvImgList), function(item, index) {
    return _c('image', {
      key: index,
      staticClass: ["user_xinxinImg"],
      attrs: {
        "src": item
      }
    })
  }))])]), _c('div', {
    staticClass: ["user_dengji"]
  }, [_c('image', {
    staticClass: ["user_dengjiImg"],
    attrs: {
      "src": _vm.lvImg
    }
  })])]) : _vm._e()])]), _c('cell', {
    staticClass: ["zhandan"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('div', {
    staticClass: ["account_balance_box"]
  }, [_c('div', {
    staticClass: ["account_balance"]
  }, [_c('div', {
    staticClass: ["account_balance_title"],
    on: {
      "click": function($event) {
        _vm.jump('modules/assets/children/children/balanceDetails')
      }
    }
  }, [_c('text', {
    staticClass: ["number"]
  }, [_vm._v(_vm._s(_vm.balance))]), _c('text', {
    staticClass: ["account_balance_text"]
  }, [_vm._v("账户余额")])]), _c('div', {
    staticClass: ["return_cash_box"]
  }, [_c('text', {
    staticClass: ["border"]
  }), _c('text', {
    staticClass: ["border_tow"]
  }), _c('div', {
    staticClass: ["return_cash"]
  }, [_c('text', {
    staticClass: ["return_cash_number"]
  }, [_vm._v(_vm._s(_vm.fx))]), _c('text', {
    staticClass: ["return_cash_text"]
  }, [_vm._v("本月激活奖励")])]), _c('div', {
    staticClass: ["return_cash"]
  }, [_c('text', {
    staticClass: ["return_cash_number"]
  }, [_vm._v(_vm._s(_vm.fr))]), _c('text', {
    staticClass: ["return_cash_text"]
  }, [_vm._v("本月交易分润")])]), _c('div', {
    staticClass: ["return_cash"]
  }, [_c('text', {
    staticClass: ["return_cash_number"]
  }, [_vm._v(_vm._s(_vm.tdsy))]), _c('text', {
    staticClass: ["return_cash_text"]
  }, [_vm._v("今日收益")])])]), _c('div', {
    staticClass: ["Profit_box"]
  }, [_c('text', {
    staticClass: ["Profit_text"]
  }, [_vm._v("本月累计收益：" + _vm._s(_vm.lj))]), _c('button', {
    staticClass: ["cash"]
  }, [_c('text', {
    staticClass: ["cash_text"],
    on: {
      "click": function($event) {
        _vm.jumptogo()
      }
    }
  }, [_vm._v("提现 >")])])], 1)])])]), _c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('div', {
    staticClass: ["more_box"]
  }, [_c('div', {
    staticClass: ["more"]
  }, [_c('div', {
    staticClass: ["list_authentication"]
  }, [_c('image', {
    staticClass: ["list_img"],
    attrs: {
      "src": _vm.iconList.my_authentication
    }
  }), _c('div', {
    staticClass: ["panel"],
    on: {
      "click": _vm.realName
    }
  }, [_c('text', {
    staticClass: ["list_text"]
  }, [_vm._v("实名认证")]), _c('image', {
    staticClass: ["list_right"],
    attrs: {
      "src": _vm.iconList.right_icon
    }
  })])]), _c('div', {
    staticClass: ["list_authentication"]
  }, [_c('image', {
    staticClass: ["list_img"],
    attrs: {
      "src": _vm.iconList.my_record
    }
  }), _c('div', {
    staticClass: ["panel"],
    on: {
      "click": function($event) {
        _vm.jump('modules/news/records')
      }
    }
  }, [_c('text', {
    staticClass: ["list_text"]
  }, [_vm._v("申领记录")]), _c('image', {
    staticClass: ["list_right"],
    attrs: {
      "src": _vm.iconList.right_icon
    }
  })])]), _c('div', {
    staticClass: ["list_authentication"]
  }, [_c('image', {
    staticClass: ["list_img"],
    attrs: {
      "src": _vm.iconList.my_allocation
    }
  }), _c('div', {
    staticClass: ["panel"],
    on: {
      "click": function($event) {
        _vm.jump('modules/user/equipmentReview')
      }
    }
  }, [_c('text', {
    staticClass: ["list_text"]
  }, [_vm._v("机具调拨审核")]), _c('image', {
    staticClass: ["list_right"],
    attrs: {
      "src": _vm.iconList.right_icon
    }
  })])]), _c('div', {
    staticClass: ["list_authentication"]
  }, [_c('image', {
    staticClass: ["list_img"],
    attrs: {
      "src": _vm.iconList.my_allocation
    }
  }), _c('div', {
    staticClass: ["panel"],
    on: {
      "click": function($event) {
        _vm.jump('modules/user/withdraw')
      }
    }
  }, [_c('text', {
    staticClass: ["list_text"]
  }, [_vm._v("机具调拨撤回")]), _c('image', {
    staticClass: ["list_right"],
    attrs: {
      "src": _vm.iconList.right_icon
    }
  })])]), _c('div', {
    staticClass: ["list_authentication"]
  }, [_c('image', {
    staticClass: ["list_img"],
    attrs: {
      "src": _vm.iconList.liushui
    }
  }), _c('div', {
    staticClass: ["panel"],
    on: {
      "click": function($event) {
        _vm.jump('modules/user/bill')
      }
    }
  }, [_c('text', {
    staticClass: ["list_text"]
  }, [_vm._v("账单流水")]), _c('image', {
    staticClass: ["list_right"],
    attrs: {
      "src": _vm.iconList.right_icon
    }
  })])]), _c('div', {
    staticClass: ["list_authentication"]
  }, [_c('image', {
    staticClass: ["list_img"],
    attrs: {
      "src": _vm.iconList.my_implements
    }
  }), _c('div', {
    staticClass: ["panel"],
    on: {
      "click": function($event) {
        _vm.jump('modules/user/myPos')
      }
    }
  }, [_c('text', {
    staticClass: ["list_text"]
  }, [_vm._v("我的机具")]), _c('image', {
    staticClass: ["list_right"],
    attrs: {
      "src": _vm.iconList.right_icon
    }
  })])]), _c('div', {
    staticClass: ["list_authentication"]
  }, [_c('image', {
    staticClass: ["list_img"],
    attrs: {
      "src": _vm.iconList.consumption
    }
  }), _c('div', {
    staticClass: ["panel"],
    on: {
      "click": function($event) {
        _vm.jump('modules/user/consumptionDetails')
      }
    }
  }, [_c('text', {
    staticClass: ["list_text"]
  }, [_vm._v("分润明细")]), _c('image', {
    staticClass: ["list_right"],
    attrs: {
      "src": _vm.iconList.right_icon
    }
  })])]), _c('div', {
    staticClass: ["list_authentication"]
  }, [_c('image', {
    staticClass: ["list_img"],
    attrs: {
      "src": _vm.iconList.postage
    }
  }), _c('div', {
    staticClass: ["panel"],
    on: {
      "click": function($event) {
        _vm.jump('modules/user/postage')
      }
    }
  }, [_c('text', {
    staticClass: ["list_text"]
  }, [_vm._v("资费设置")]), _c('image', {
    staticClass: ["list_right"],
    attrs: {
      "src": _vm.iconList.right_icon
    }
  })])]), _c('div', {
    staticClass: ["list_authentication"]
  }, [_c('image', {
    staticClass: ["list_img"],
    attrs: {
      "src": _vm.iconList.recod1
    }
  }), _c('div', {
    staticClass: ["panel"],
    on: {
      "click": function($event) {
        _vm.jump('modules/user/Record')
      }
    }
  }, [_c('text', {
    staticClass: ["list_text"]
  }, [_vm._v("调拨记录")]), _c('image', {
    staticClass: ["list_right"],
    attrs: {
      "src": _vm.iconList.right_icon
    }
  })])])])])]), _c('DownRefresh', {
    attrs: {
      "refreshing": _vm.refreshing,
      "refreshText": _vm.refreshText,
      "backgroundColor": "#fff",
      "fontColor": "#333"
    },
    on: {
      "onrefresh": _vm.onrefresh
    }
  })], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["header_con"]
  }, [_c('text', {
    staticClass: ["user_name"]
  }, [_vm._v("点击登录")])])
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var modal = void 0;

if (weex && weex.requireModule) {
	modal = weex.requireModule('nat/modal');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		modal = __weex_require__('@weex-module/nat/modal');
	});
}

// alert

var alert = function alert(opts, cb) {
	return new Promise(function (resolve, reject) {
		if (typeof opts === 'string') {
			opts = {
				message: opts
			};
		}

		opts = opts || {};

		modal.alert({
			title: opts.title || '',
			message: opts.message || '',
			okButton: opts.okButton || 'OK'
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// confirm

var confirm = function confirm(opts, cb) {
	return new Promise(function (resolve, reject) {
		if (typeof opts === 'string') {
			opts = {
				message: opts
			};
		}

		opts = opts || {};

		modal.confirm({
			title: opts.title || '',
			message: opts.message || '',
			okButton: opts.okButton || 'OK',
			cancelButton: opts.cancelButton || 'Cancel'
		}, function (ret) {
			if (typeof ret === 'undefined') {
				ret = {
					error: 'unknow error, please report to natjs team'
				};
			}

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// prompt

var prompt = function prompt(opts, cb) {
	return new Promise(function (resolve, reject) {
		if (typeof opts === 'string') {
			opts = {
				message: opts
			};
		}

		opts = opts || {};

		modal.prompt({
			title: opts.title || '',
			message: opts.message || '',
			text: opts.text || '',
			okButton: opts.okButton || 'OK',
			cancelButton: opts.cancelButton || 'Cancel'
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// toast

var toast = function toast(opts, cb) {
	return new Promise(function (resolve, reject) {
		if (typeof opts === 'string') {
			opts = {
				message: opts
			};
		}

		opts = opts || {};

		// position
		if (['top', 'middle', 'bottom'].indexOf(opts.position) < 0) {
			opts.position = 'bottom';
		}

		modal.toast({
			message: opts.message || '',
			duration: opts.duration || 3000,
			position: opts.position
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

module.exports = {
	alert: alert,
	confirm: confirm,
	prompt: prompt,
	toast: toast
};

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var recorder = void 0;

if (weex && weex.requireModule) {
	recorder = weex.requireModule('nat/recorder');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		recorder = __weex_require__('@weex-module/nat/recorder');
	});
}

// start
var start = function start(opts, cb) {
	opts = opts || {};

	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		// channel
		if (['stereo', 'mono'].indexOf(opts.channel) < 0) {
			opts.channel = 'stereo';
		}

		// quality
		if (['low', 'standard', 'high'].indexOf(opts.quality) < 0) {
			opts.quality = 'standard';
		}

		recorder.start({
			channel: opts.channel,
			quality: opts.quality
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// pause

var pause = function pause(cb) {
	return new Promise(function (resolve, reject) {
		recorder.pause(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// stop

var stop = function stop(cb) {
	return new Promise(function (resolve, reject) {
		recorder.stop(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	start: start,
	pause: pause,
	stop: stop
};

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stream = __webpack_require__(18);

var _stream2 = _interopRequireDefault(_stream);

var _transfer = __webpack_require__(19);

var _transfer2 = _interopRequireDefault(_transfer);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

// import websocket from './websocket'
// import info from './info'

module.exports = {
	stream: _stream2.default,
	transfer: _transfer2.default
	// websocket,
	// info
};

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
	return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var stream = void 0;

if (weex && weex.requireModule) {
	stream = weex.requireModule('nat/stream');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		stream = __weex_require__('@weex-module/nat/stream');
	});
}

// fetch

var fetch = function fetch(url, opts, cb) {
	return new Promise(function (resolve, reject) {
		if (!url) {
			reject({
				code: 151040,
				message: 'FETCH_MISSING_ARGUMENT'
			});
			return;
		}

		if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object') {
			cb = opts;
			opts = url;
		} else if (typeof opts === 'function') {
			cb = opts;
			opts = {
				url: url
			};
		} else {
			opts = opts || {};
			opts.url = url;
		}

		// headers
		opts.headers = opts.headers || {};

		if (opts.headers['Content-Type'] && /application\/json/.test(opts.headers['Content-Type'])) {
			opts.type = 'json';
		}

		// method
		opts.method = opts.method ? opts.method.toUpperCase() : 'GET';

		if (['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD'].indexOf(opts.method) < 0) {
			reject({
				code: 151050,
				message: 'FETCH_INVALID_ARGUMENT',
				details: 'Unsupported request method'
			});
			return;
		}

		// type
		opts.type = opts.type ? opts.type.toLowerCase() : 'json';

		if (['json', 'jsonp', 'text'].indexOf(opts.type) < 0) {
			reject({
				code: 151050,
				message: 'FETCH_INVALID_ARGUMENT',
				details: 'Unsupported request type'
			});
			return;
		}

		// body
		if (_typeof(opts.body) === 'object') {
			if (opts.type === 'json' && opts.method !== 'GET') {
				opts.body = JSON.stringify(opts.body);
			} else {
				reject({
					code: 151050,
					message: 'FETCH_INVALID_ARGUMENT',
					details: 'Request body must be a string'
				});
				return;
			}
		}

		stream.fetch({
			method: opts.method,
			url: opts.url,
			headers: opts.headers,
			type: opts.type,
			body: opts.body
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				if (ret.ok && typeof ret.data === 'string') {
					switch (opts.type) {
						case 'json':
							ret.data = JSON.parse(ret.data);
							break;

						case 'jsonp':
							{
								var matched = ret.data.match(/^\s*?.*\((.*)\)\s*?$/);
								if (matched) {
									ret.data = JSON.parse(matched[1]);
								}
								break;
							}
					}
				}
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	fetch: fetch
};

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
	return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var transfer = void 0;

if (weex && weex.requireModule) {
	transfer = weex.requireModule('nat/transfer');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		transfer = __weex_require__('@weex-module/nat/transfer');
	});
}

// download

var download = function download(url, opts, hooks, cb) {
	return new Promise(function (resolve, reject) {
		if (!url) {
			reject({
				code: 151040,
				message: 'DOWNLOAD_MISSING_ARGUMENT'
			});
			return;
		}

		if (typeof opts === 'function') {
			cb = opts;
		} else if ((typeof opts === 'undefined' ? 'undefined' : _typeof(opts)) === 'object') {
			if (typeof hooks === 'function') {
				cb = hooks;
			}
			// todo
			if (typeof opts.onProgress === 'function') {
				hooks = opts;
			}
		}

		if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object') {
			opts = url;
		} else {
			opts = opts || {};
			opts.url = url;
		}

		// hooks
		hooks = hooks || {};

		transfer.download({
			url: opts.url,
			headers: opts.headers || {},
			target: opts.target
		}, function (ret) {
			console.log('[nat]', ret);
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else if (ret.progress) {
				if (typeof hooks.onProgress === 'function') {
					hooks.onProgress(ret.progress);
				}
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// upload

var upload = function upload(url, opts, hooks, cb) {
	return new Promise(function (resolve, reject) {
		if (!url) {
			reject({
				code: 151040,
				message: 'UPLOAD_MISSING_ARGUMENT'
			});
			return;
		}

		if (typeof opts === 'function') {
			cb = opts;
		} else if ((typeof opts === 'undefined' ? 'undefined' : _typeof(opts)) === 'object') {
			if (typeof hooks === 'function') {
				cb = hooks;
			}
			// todo
			if (typeof opts.onProgress === 'function') {
				hooks = opts;
			}
		}

		if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object') {
			opts = url;
		} else {
			opts = opts || {};
			opts.url = url;
		}

		// hooks
		hooks = hooks || {};

		// path
		if (!opts.path) {
			reject({
				code: 151040,
				message: 'UPLOAD_MISSING_ARGUMENT'
			});
			return;
		}

		// method
		opts.method = opts.method ? opts.method.toUpperCase() : 'POST';

		if (['POST', 'PUT', 'PATCH'].indexOf(opts.method) < 0) {
			reject({
				code: 151050,
				message: 'UPLOAD_INVALID_ARGUMENT',
				details: 'Unsupported request method'
			});
			return;
		}

		transfer.upload({
			url: opts.url,
			method: opts.method,
			path: opts.path,
			name: opts.name,
			headers: opts.headers || {},
			formData: opts.formData || {},
			mimeType: opts.mimeType
		}, function (ret) {
			console.log('[nat]', ret);
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else if (ret.progress) {
				if (typeof hooks.onProgress === 'function') {
					hooks.onProgress(ret.progress);
				}
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	download: download,
	upload: upload
};

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _accelerometer = __webpack_require__(21);

var _accelerometer2 = _interopRequireDefault(_accelerometer);

var _compass = __webpack_require__(22);

var _compass2 = _interopRequireDefault(_compass);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = {
	accelerometer: _accelerometer2.default,
	compass: _compass2.default
};

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var accelerometer = void 0;

if (weex && weex.requireModule) {
	accelerometer = weex.requireModule('nat/sensor/accelerometer');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		accelerometer = __weex_require__('@weex-module/nat/sensor/accelerometer');
	});
}

// get
var get = function get(opts, cb) {
	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		accelerometer.get(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// watch

var watch = function watch(opts, cb) {
	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		accelerometer.watch({
			interval: opts.interval || 32
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// clear watch

var clearWatch = function clearWatch(cb) {
	return new Promise(function (resolve, reject) {
		accelerometer.clearWatch(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	get: get,
	watch: watch,
	clearWatch: clearWatch
};

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compass = void 0;

if (weex && weex.requireModule) {
	compass = weex.requireModule('nat/sensor/compass');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		compass = __weex_require__('@weex-module/nat/sensor/compass');
	});
}

// get
var get = function get(opts, cb) {
	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		compass.get(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// watch

var watch = function watch(opts, cb) {
	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		compass.watch({
			interval: opts.interval || 32
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// clear watch

var clearWatch = function clearWatch(cb) {
	return new Promise(function (resolve, reject) {
		compass.clearWatch(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	get: get,
	watch: watch,
	clearWatch: clearWatch
};

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _info = __webpack_require__(24);

var _info2 = _interopRequireDefault(_info);

var _battery = __webpack_require__(25);

var _battery2 = _interopRequireDefault(_battery);

var _network = __webpack_require__(26);

var _network2 = _interopRequireDefault(_network);

var _screen = __webpack_require__(27);

var _screen2 = _interopRequireDefault(_screen);

var _vibration = __webpack_require__(28);

var _vibration2 = _interopRequireDefault(_vibration);

var _volume = __webpack_require__(29);

var _volume2 = _interopRequireDefault(_volume);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = {
	info: _info2.default,
	battery: _battery2.default,
	network: _network2.default,
	screen: _screen2.default,
	vibration: _vibration2.default,
	volume: _volume2.default
};

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var device = void 0;

if (weex && weex.requireModule) {
	device = weex.requireModule('nat/device/info');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		device = __weex_require__('@weex-module/nat/device/info');
	});
}

// info

var info = function info(cb) {
	return new Promise(function (resolve, reject) {
		device.info(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	info: info
};

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var battery = void 0;

if (weex && weex.requireModule) {
	battery = weex.requireModule('nat/device/battery');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		battery = __weex_require__('@weex-module/nat/device/battery');
	});
}

// status

var status = function status(cb) {
	return new Promise(function (resolve, reject) {
		battery.status(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	status: status
};

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var network = void 0;

if (weex && weex.requireModule) {
	network = weex.requireModule('nat/device/network');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		network = __weex_require__('@weex-module/nat/device/network');
	});
}

// status

var status = function status(cb) {
	return new Promise(function (resolve, reject) {
		network.status(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	status: status
};

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var screen = void 0;

if (weex && weex.requireModule) {
	screen = weex.requireModule('nat/device/screen');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		screen = __weex_require__('@weex-module/nat/device/screen');
	});
}

// brightness

var brightness = {
	get: function get(cb) {
		return new Promise(function (resolve, reject) {
			screen.getBrightness(function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	},

	set: function set(brightness, cb) {
		return new Promise(function (resolve, reject) {
			screen.setBrightness(brightness, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	}

	// orientation

};var orientation = {
	status: function status(cb) {
		return new Promise(function (resolve, reject) {
			screen.getOrientation(function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	},

	lock: function lock(orientation, cb) {
		if (typeof orientation === 'function') {
			cb = orientation;
			orientation = {};
		}

		// orientation
		if (['portrait-primary', 'portrait-secondary', 'landscape-primary', 'landscape-secondary', 'portrait', // either portrait-primary or portrait-secondary.
		'landscape', // either landscape-primary or landscape-secondary.
		'any' // All orientations are supported (unlocked orientation)
		].indexOf(orientation) < 0) {
			orientation = 'any';
		}

		return new Promise(function (resolve, reject) {
			screen.lockOrientation(orientation, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	},

	unlock: function unlock(cb) {
		return new Promise(function (resolve, reject) {
			screen.unlockOrientation(function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	}

	// info

};var info = function info(cb) {
	return new Promise(function (resolve, reject) {
		screen.info(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	brightness: brightness,
	orientation: orientation,
	info: info
};

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var vibration = void 0;

if (weex && weex.requireModule) {
	vibration = weex.requireModule('nat/device/vibration');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		vibration = __weex_require__('@weex-module/nat/device/vibration');
	});
}

// vibrate

var vibrate = function vibrate(time, cb) {
	if (typeof time === 'function') {
		cb = time;
		time = {};
	}

	return new Promise(function (resolve, reject) {
		vibration.vibrate(time || 500, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	vibrate: vibrate
};

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var volume = void 0;

if (weex && weex.requireModule) {
	volume = weex.requireModule('nat/device/volume');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		volume = __weex_require__('@weex-module/nat/device/volume');
	});
}

// get

var get = function get(cb) {
	return new Promise(function (resolve, reject) {
		volume.get(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// set

var set = function set(vol, cb) {
	return new Promise(function (resolve, reject) {
		volume.set(vol, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	get: get,
	set: set
};

/***/ }),

/***/ 291:
/***/ (function(module, exports) {

module.exports = {
  "refresh": {
    "width": "750",
    "paddingTop": "20",
    "paddingBottom": "20",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "refresh_text": {
    "color": "#333333",
    "fontSize": "32",
    "textAlign": "center",
    "marginLeft": "10"
  },
  "refresh_img": {
    "height": "60",
    "width": "60",
    "color": "#43BCFC"
  }
}

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: ["refreshing", "refreshText", "backgroundColor", "fontColor"],
  methods: {
    // 下拉刷新
    onrefresh: function onrefresh(event) {
      this.$emit("onrefresh");
    }
  }
};

/***/ }),

/***/ 293:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('refresh', {
    staticClass: ["refresh"],
    style: {
      'backgroundColor': _vm.backgroundColor
    },
    attrs: {
      "display": _vm.refreshing ? 'show' : 'hide'
    },
    on: {
      "refresh": _vm.onrefresh
    }
  }, [_c('loading-indicator', {
    staticClass: ["refresh_img"]
  }), _c('text', {
    staticClass: ["refresh_text"],
    style: {
      'color': _vm.fontColor
    }
  }, [_vm._v(_vm._s(_vm.refreshText))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(291)
)

/* script */
__vue_exports__ = __webpack_require__(292)

/* template */
var __vue_template__ = __webpack_require__(293)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/zhengzhuang/Documents/codeProject/liugeche/23-wanwan/wanwanWeex/src/components/DownRefresh.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-39159559"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Nat = {};

if (weex && weex.requireModule || typeof __weex_define__ === 'function') {
	var camera = __webpack_require__(7);
	var communication = __webpack_require__(8);
	var geolocation = __webpack_require__(10);
	var media = __webpack_require__(11);
	var modal = __webpack_require__(15);
	var recorder = __webpack_require__(16);
	var network = __webpack_require__(17);
	var sensor = __webpack_require__(20);
	var device = __webpack_require__(23);
	var alipay = __webpack_require__(30);
	var navigator = __webpack_require__(31);

	// camera
	if (camera) {
		Nat.camera = camera;
	}

	// communication
	if (communication) {
		Nat.call = communication.call;
		Nat.sms = communication.sms;
		Nat.mail = communication.mail;
	}

	// geolocation
	if (geolocation) {
		Nat.geolocation = geolocation;
	}

	// media
	if (media) {
		Nat.audio = media.audio;
		Nat.image = media.image;
		Nat.video = media.video;
	}

	// recorder
	if (recorder) {
		Nat.recorder = recorder;
	}

	// modal
	if (modal) {
		Nat.alert = modal.alert;
		Nat.confirm = modal.confirm;
		Nat.prompt = modal.prompt;
		Nat.toast = modal.toast;
	}

	// network
	if (network) {
		Nat.fetch = network.stream.fetch;
		Nat.download = network.transfer.download;
		Nat.upload = network.transfer.upload;
		Nat.websocket = network.websocket;
	}

	// sensor
	if (sensor) {
		Nat.accelerometer = sensor.accelerometer;
		Nat.compass = sensor.compass;
	}

	// device
	if (device) {
		Nat.device = device.info;
		Nat.battery = device.battery;
		Nat.network = device.network;
		Nat.screen = device.screen;
		Nat.vibrate = device.vibration.vibrate;
		Nat.volume = device.volume;
	}

	// navigator
	if (navigator) {
		Nat.navigator = navigator;
	}

	// alipay
	if (alipay) {
		Nat.alipay = alipay;
	}
}

module.exports = Nat;

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alipay = void 0;

if (weex && weex.requireModule) {
	alipay = weex.requireModule('nat/alipay');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		alipay = __weex_require__('@weex-module/nat/alipay');
	});
}

// pay

var pay = function pay(params, cb) {
	return new Promise(function (resolve, reject) {
		if (!params) {
			reject({
				code: 201040,
				message: 'PAY_MISSING_ARGUMENT'
			});
			return;
		}

		params = params || {};

		if (!params.info) {
			reject({
				code: 201040,
				message: 'PAY_MISSING_ARGUMENT',
				details: '[params.info] is required'
			});
			return;
		}

		if (!params.scheme) {
			reject({
				code: 201040,
				message: 'PAY_MISSING_ARGUMENT',
				details: '[params.scheme] is required'
			});
			return;
		}

		alipay.pay(params, function (ret) {
			ret = ret || {};

			if (ret.error) {
				switch (ret.error.code) {
					case '8000':
						ret.error.message = '正在处理中，支付结果未知';
						break;

					case '4000':
						ret.error.message = '订单支付失败';
						break;

					case '5000':
						ret.error.message = '重复请求';
						break;

					case '6001':
						ret.error.message = '用户中途取消';
						break;

					case '6002':
						ret.error.message = '网络连接出错';
						break;

					case '6004':
						ret.error.message = '支付结果未知';
						break;
				}
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// auth

var auth = function auth(params, cb) {
	return new Promise(function (resolve, reject) {
		if (!params) {
			reject({
				code: 201040,
				message: 'PAY_MISSING_ARGUMENT'
			});
			return;
		}

		params = params || {};

		if (!params.info) {
			reject({
				code: 201040,
				message: 'PAY_MISSING_ARGUMENT',
				details: '[params.info] is required'
			});
			return;
		}

		if (!params.scheme) {
			reject({
				code: 201040,
				message: 'PAY_MISSING_ARGUMENT',
				details: '[params.scheme] is required'
			});
			return;
		}

		alipay.auth(params, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	pay: pay,
	auth: auth
};

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var navigator = void 0;

if (weex && weex.requireModule) {
	navigator = weex.requireModule('nat/navigator');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		navigator = __weex_require__('@weex-module/nat/navigator');
	});
}

// push

var push = function push(opts, cb) {
	opts = opts || {};

	if (typeof opts === 'string') {
		opts = {
			url: opts
		};
	}

	return new Promise(function (resolve, reject) {
		navigator.push(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// pop
var pop = function pop(opts, cb) {
	return new Promise(function (resolve, reject) {
		navigator.pop(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// popToRoot
var popToRoot = function popToRoot(opts, cb) {
	opts = opts || {
		animated: true
	};

	if (typeof opts === 'function') {
		cb = opts;
		opts = {
			animated: true
		};
	}

	return new Promise(function (resolve, reject) {
		navigator.popToRoot(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// setTitle
var setTitle = function setTitle(opts, cb) {
	opts = opts || {};

	if (typeof opts === 'string') {
		opts = {
			title: opts
		};
	}

	return new Promise(function (resolve, reject) {
		navigator.setTitle(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// setColor
var setColor = function setColor(opts, cb) {
	opts = opts || {};

	if (typeof opts === 'string') {
		opts = {
			color: opts
		};
	}

	return new Promise(function (resolve, reject) {
		navigator.setColor(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// setBackgroundColor
var setBackgroundColor = function setBackgroundColor(opts, cb) {
	opts = opts || {};

	if (typeof opts === 'string') {
		opts = {
			backgroundColor: opts
		};
	}

	return new Promise(function (resolve, reject) {
		navigator.setBackgroundColor(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// setFontSize
var setFontSize = function setFontSize(opts, cb) {
	opts = opts || {};

	if (typeof opts === 'string' || typeof opts === 'number') {
		opts = {
			fontSize: opts
		};
	}

	return new Promise(function (resolve, reject) {
		navigator.setFontSize(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// init
var init = function init(opts, cb) {
	opts = opts || {};

	return new Promise(function (resolve, reject) {
		navigator.init(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// hide
var hide = function hide(cb) {
	return new Promise(function (resolve, reject) {
		navigator.hide(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// show
var show = function show(cb) {
	return new Promise(function (resolve, reject) {
		navigator.show(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	push: push,
	pop: pop,
	popToRoot: popToRoot,
	setTitle: setTitle,
	setColor: setColor,
	setBackgroundColor: setBackgroundColor,
	setFontSize: setFontSize,
	init: init,
	hide: hide,
	show: show
};

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var system = void 0;

if (weex && weex.requireModule) {
	system = weex.requireModule('nxp/system');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		system = __weex_require__('@weex-module/nxp/system');
	});
}

var getVersion = function getVersion(opts, cb) {
	opts = opts || {};
	return new Promise(function (resolve, reject) {
		system.getVersion(opts, function (ret) {
			ret = ret || {};
			if (ret.error == '1') {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

var reRender = function reRender(opts, cb) {
	opts = opts || {};
	return new Promise(function (resolve, reject) {
		system.reRender(opts, function (ret) {
			ret = ret || {};
			if (ret.error == '1') {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

var updateVersion = function updateVersion(opts, cb) {
	opts = opts || {};
	return new Promise(function (resolve, reject) {
		system.updateVersion(opts, function (ret) {
			ret = ret || {};
			if (ret.error == '1') {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

var startNavi = function startNavi(opts, cb) {
	opts = opts || {};
	return new Promise(function (resolve, reject) {
		system.startNavi(opts, function (ret) {
			ret = ret || {};
			if (ret.error == '1') {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

var setJPushAliasAndTags = function setJPushAliasAndTags(opts, cb) {
	opts = opts || {};
	return new Promise(function (resolve, reject) {
		system.setJPushAliasAndTags(opts, function (ret) {
			ret = ret || {};
			if (ret.error == '1') {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

var clearBadge = function clearBadge(opts, cb) {
	opts = opts || {};
	return new Promise(function (resolve, reject) {
		system.clearBadge(opts, function (ret) {
			ret = ret || {};
			if (ret.error == '1') {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

var removeJPushAliasAndTags = function removeJPushAliasAndTags(opts, cb) {
	opts = opts || {};
	return new Promise(function (resolve, reject) {
		system.removeJPushAliasAndTags(opts, function (ret) {
			ret = ret || {};
			if (ret.error == '1') {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

var closeApp = function closeApp(opts, cb) {
	opts = opts || {};
	return new Promise(function (resolve, reject) {
		system.closeApp(opts, function (ret) {
			ret = ret || {};
			if (ret.error == '1') {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

var startUrl = function startUrl(opts, cb) {
	opts = opts || {};
	return new Promise(function (resolve, reject) {
		system.startUrl(opts, function (ret) {
			ret = ret || {};
			if (ret.error == '1') {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

var sign = function sign(opts, cb) {
	opts = opts || {};
	return new Promise(function (resolve, reject) {
		system.sign(opts, function (ret) {
			ret = ret || {};
			if (ret.error == '1') {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

var getRoute = function getRoute(opts, cb) {
	opts = opts || {};
	return new Promise(function (resolve, reject) {
		system.getRoute(opts, function (ret) {
			ret = ret || {};
			if (ret.error == '1') {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};
module.exports = {
	updateVersion: updateVersion,
	getVersion: getVersion,
	reRender: reRender,
	startNavi: startNavi,
	setJPushAliasAndTags: setJPushAliasAndTags,
	clearBadge: clearBadge,
	removeJPushAliasAndTags: removeJPushAliasAndTags,
	closeApp: closeApp,
	startUrl: startUrl,
	sign: sign,
	getRoute: getRoute
};

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var wechat = void 0;

if (weex && weex.requireModule) {
	wechat = weex.requireModule('nxp/wechat');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		wechat = __weex_require__('@weex-module/nxp/wechat');
	});
}

var registerApp = function registerApp(opts, cb) {
	opts = opts || {};
	return new Promise(function (resolve, reject) {
		wechat.registerApp(opts, function (ret) {
			ret = ret || {};
			if (ret.error == '1') {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

var login = function login(opts, cb) {
	opts = opts || {};
	return new Promise(function (resolve, reject) {
		wechat.login(opts, function (ret) {
			ret = ret || {};
			if (ret.error == '1') {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

var share = function share(opts, cb) {
	opts = opts || {};
	return new Promise(function (resolve, reject) {
		wechat.share(opts, function (ret) {
			ret = ret || {};
			if (ret.error == '1') {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

var shareImage = function shareImage(opts, cb) {
	opts = opts || {};
	return new Promise(function (resolve, reject) {
		wechat.shareImage(opts, function (ret) {
			ret = ret || {};
			if (ret.error == '1') {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

var shareText = function shareText(opts, cb) {
	opts = opts || {};
	return new Promise(function (resolve, reject) {
		wechat.shareText(opts, function (ret) {
			ret = ret || {};
			if (ret.error == '1') {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

var pay = function pay(opts, cb) {
	opts = opts || {};
	return new Promise(function (resolve, reject) {
		wechat.pay(opts, function (ret) {
			ret = ret || {};
			if (ret.error == '1') {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	registerApp: registerApp,
	login: login,
	share: share,
	shareImage: shareImage,
	shareText: shareText,
	pay: pay
};

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var contact = void 0;

if (weex && weex.requireModule) {
	contact = weex.requireModule('nxp/contact');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		contact = __weex_require__('@weex-module/nxp/contact');
	});
}

var read = function read(opts, cb) {
	opts = opts || {};
	return new Promise(function (resolve, reject) {
		contact.read(opts, function (ret) {
			ret = ret || {};
			if (ret.error == '1') {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	read: read

};

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var qrcode = void 0;

if (weex && weex.requireModule) {
	qrcode = weex.requireModule('nxp/qrcode');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		qrcode = __weex_require__('@weex-module/nxp/qrcode');
	});
}

var scan = function scan(opts, cb) {
	opts = opts || {};
	return new Promise(function (resolve, reject) {
		qrcode.scan(opts, function (ret) {
			ret = ret || {};
			if (ret.error == '1') {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	scan: scan

};

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var QQ = void 0;

if (weex && weex.requireModule) {
	QQ = weex.requireModule('nxp/QQ');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		QQ = __weex_require__('@weex-module/nxp/QQ');
	});
}

var shareQQText = function shareQQText(opts, cb) {
	opts = opts || {};
	return new Promise(function (resolve, reject) {
		QQ.shareQQText(opts, function (ret) {
			ret = ret || {};
			if (ret.error == '1') {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	shareQQText: shareQQText
};

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var image = void 0;

if (weex && weex.requireModule) {
	image = weex.requireModule('nxp/image');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		image = __weex_require__('@weex-module/nxp/image');
	});
}

var crop = function crop(opts, cb) {
	opts = opts || {};
	return new Promise(function (resolve, reject) {
		image.crop(opts, function (ret) {
			ret = ret || {};
			if (ret.error == '1') {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	crop: crop

};

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * @Author: zhengzhuang
 * @Date: 2020-10-15 15:43:33
 * @LastEditors: zhengzhuang
 * @LastEditTime: 2020-10-16 09:49:54
 * @Description: In User Settings Edit
 * @FilePath: /wanwanWeex/src/lib/nxpjs/flutter/index.js
 */


var flutter = void 0;

if (weex && weex.requireModule) {
	flutter = weex.requireModule('weex_flutter');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		flutter = __weex_require__('@weex-module/weex_flutter');
	});
}

var invoke = function invoke(opts, cb) {
	opts = opts || {};
	return new Promise(function (resolve, reject) {
		flutter.invoke(opts, function (ret) {
			ret = ret || {};
			if (ret.error == '1') {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

var call = function call(opts, cb) {
	opts = opts || {};
	return new Promise(function (resolve, reject) {
		flutter.call(opts, function (ret) {
			ret = ret || {};
			if (ret.error == '1') {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	call: call,
	invoke: invoke
};

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * @Author: zhengzhuang
 * @Date: 2020-10-15 09:07:26
 * @LastEditors: zhengzhuang
 * @LastEditTime: 2020-10-15 15:43:21
 * @Description: In User Settings Edit
 * @FilePath: /wanwanWeex/src/lib/nxpjs/index.js
 */


var Nxp = {};

if (weex && weex.requireModule || typeof __weex_define__ === 'function') {
	var system = __webpack_require__(32);
	var wechat = __webpack_require__(33);
	var contact = __webpack_require__(34);
	var qrcode = __webpack_require__(35);
	var QQ = __webpack_require__(36);
	var image = __webpack_require__(37);
	var flutter = __webpack_require__(38);

	// system
	if (system) {
		Nxp.system = system;
	}
	//wechat
	if (wechat) {
		Nxp.wechat = wechat;
	}
	if (contact) {
		Nxp.contact = contact;
	}
	if (qrcode) {
		Nxp.qrcode = qrcode;
	}
	if (QQ) {
		Nxp.QQ = QQ;
	}
	if (image) {
		Nxp.image = image;
	}
	if (flutter) {
		Nxp.flutter = flutter;
	}
}

module.exports = Nxp;

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _natjs = __webpack_require__(3);

var _natjs2 = _interopRequireDefault(_natjs);

var _nxpjs = __webpack_require__(4);

var _nxpjs2 = _interopRequireDefault(_nxpjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 2017-11-01 10:36:53
 * 公共方法
 */

// weex模块
var navigator = weex.requireModule('navigator');
var modal = weex.requireModule('modal');
var stream = weex.requireModule("stream");
var storage = weex.requireModule('storage');

// 调用原生应用

// 路由
function getBaseURL(url) {
	var bundleUrl = weex.config.bundleUrl;
	bundleUrl = bundleUrl.substring(0, bundleUrl.lastIndexOf('/'));
	if (typeof window == "undefined") {
		while (url.startsWith('../')) {
			url = url.substr(3);
			bundleUrl = bundleUrl.substr(0, bundleUrl.lastIndexOf('/'));
		}
		return bundleUrl + '/' + url;
	} else {
		return bundleUrl + "?page=/dist" + encodeURI(url);
	}
}

exports.default = {
	/**
  * ajax数据请求(APP), true:上线  false:测试
  */
	ajaxUrl: function ajaxUrl() {
		if (true) {
			return 'http://wanapi.zfpal.com/';
			// return 'http://agentapi.zfpal.com/'
		} else {
			return 'http://192.168.1.250:8209/';
		}
	},

	/**
  * ajax数据请求(App检测更新)
  */
	appUpdate: function appUpdate() {
		return 'http://appstore.melenet.com/?service=';
	},
	js: function js(url) {
		return getBaseURL(url);
	},

	/**
  * 路由跳转页面
  */
	jump: function jump(url) {
		console.log(getBaseURL(url.to) + '.js');
		if (url.parameter == undefined) {
			navigator.push({
				url: getBaseURL(url.to) + '.js',
				animated: "true"
			}, function (event) {});
		} else {
			navigator.push({
				url: getBaseURL(url.to) + '.js?' + encodeURI(url.parameter),
				animated: "true"
			}, function (event) {});
		}
	},

	/**
  * 返回上一页(支持返回固定页面)
  */
	goback: function goback(url) {
		if (url !== undefined) {
			if (url.to !== undefined) {
				navigator.pop({
					url: getBaseURL(url.to) + '.js',
					animated: "true"
				}, function (event) {});
			} else {
				navigator.pop({
					url: '',
					animated: "true"
				}, function (event) {});
			}
		} else {
			navigator.pop({
				url: '',
				animated: "true"
			}, function (event) {});
		}
	},

	/**
  * 获取URL 参数parameter
  */
	getURL: function getURL(arr) {
		var url = decodeURI(arr.bundleUrl);
		var data = url.indexOf("?");
		var str = url.substr(data + 1);
		var parameter = str.split('&');
		return parameter;
	},

	/**
  * 设置AJAX数据传输格式
  */
	toParams: function toParams(obj) {
		var param = "";
		for (var name in obj) {
			if (typeof obj[name] != 'function') {
				param += "&" + name + "=" + encodeURI(obj[name]);
			}
		}
		return param.substring(1);
	},

	/**
  * 初始AJAX
  */
	// getStarCount(url, data, callback) {
	// 	var time;
	// 	const promise1 = new Promise((resolve, reject) => {
	// 		return stream.fetch({
	// 			method: 'POST',
	// 			type: 'json',
	// 			url: url,
	// 			body: this.toParams(data)
	// 		}, callback);
	// 	});

	// 	const promise2 = new Promise((resolve, reject) => {
	// 		time = setTimeout(reject, 10000, '9999');
	// 	});

	// 	Promise.race([promise1, promise2]).then((value) => {
	// 		console.log(value);
	// 		clearTimeout(time);
	// 	}).catch(() => {

	// 	}).finally(() => {

	// 	});

	// },
	getStarCount: function getStarCount(url, data, callback) {
		return stream.fetch({
			method: 'POST',
			type: 'json',
			url: url,
			body: this.toParams(data)
		}, callback);
	},

	/**
  * AJAX进行封装，无需token, 用于场景未登录情况
  */
	getAjaxNoToken: function getAjaxNoToken(options) {
		var that = this;
		that.getStarCount(that.ajaxUrl() + options.url, options.data, function (res) {
			// console.log('总回来的')
			// console.log(res);
			if (res.status !== 500) {
				if (res.data.code == '0000') {
					return options.success(res.data.data);
				} else {
					return options.fail(res.data);
				}
			} else {
				var res = {
					message: '网络错误'
				};
				return options.fail(res);
			}
		});
	},

	/**
  * AJAX进行封装，普通, 用于场景已登录情况
  */
	getAjax: function getAjax(options) {
		var that = this;
		that.getItem('auth_token', function (res) {
			options.data.authToken = res.data;
			that.getStarCount(that.ajaxUrl() + options.url, options.data, function (res) {
				// console.log('总回来的')
				// console.log(res)
				if (res.ok == true) {
					if (res.status !== 500) {
						if (res.data.code == '0000') {
							return options.success(res.data.data);
						} else {
							return options.fail(res.data);
						}
					} else {
						var res = {
							message: '服务器错误'
						};
						return options.fail(res);
					}
				} else {
					var res = {
						message: '网络错误'
					};
					return options.fail(res);
				}
			});
		});
	},

	/**
  * AJAX进行封装，普通, 用于场景已登录情况
  */
	appUpdateAjax: function appUpdateAjax(options) {
		var that = this;
		that.getStarCount(that.appUpdate() + options.url, options.data, function (res) {
			// console.log('总回来的')
			// console.log(res);
			if (res.ok == true) {
				if (res.status !== 500) {
					if (res.data.code == '0000') {
						return options.success(res.data.data);
					} else {
						return options.fail(res.data);
					}
				} else {
					var res = {
						message: '服务器错误'
					};
					return options.fail(res);
				}
			} else {
				var res = {
					message: '网络错误'
				};
				return options.fail(res);
			}
		});
	},

	/**
  * validate的表单验证
  */
	checkForm: function checkForm(formData, constraints, validate) {
		var result = validate(formData, constraints, {
			format: "flat"
		});
		if (result) {
			_natjs2.default.toast({
				message: result[0],
				duration: 3000,
				postion: 'middle'
			});
			return false;
		}
		return true;
	},

	/**
  * 本地存储
  */
	setItem: function setItem(name, value, callback) {
		return storage.setItem(name, value, callback);
	},
	getItem: function getItem(name, callback) {
		return storage.getItem(name, callback);
	},
	removeItem: function removeItem(name, callback) {
		return storage.removeItem(name, callback);
	},
	getAll: function getAll(callback) {
		return storage.getAllKeys(callback);
	},


	// 页面打开获取App登录状态
	getAppLoginState: function getAppLoginState(options) {
		var _this = this;
		// 获取token
		_this.getItem("auth_token", function (ret) {
			// 判断有无token
			if (ret.data == "" || ret.data == "undefined") {
				_this.jump({
					url: "modules/login/login"
				});
			} else {
				options.success(true);
			}
		});
	},

	/**
  * 拍照截图获取路径
  */
	camera: function camera(value) {
		if (weex.config.env.platform == 'android') {
			return 'file://' + value;
		} else {
			return value;
		}
	},

	/**
  * 编辑金额小数点留2位,不足添加0（非输入限制两位）
  */
	changeMoney: function changeMoney(place) {
		var str = place + "";
		var bool = str.indexOf(".");
		// 返回大于等于0的整数值，若不包含"Text"则返回"-1。
		if (bool >= 0) {
			// document.write("包含字符串");
			var arr = new Array(); //定义一数组 
			arr = str.split(".");
			if (arr[1].length == 1) {
				return place + "0";
			} else {
				return place;
			}
		} else {
			// document.write("不包含字符串");
			return place + ".00";
		}
	},

	/**
  * 生成范围随机数
  */
	getRandomNum: function getRandomNum(start, end) {
		return Math.floor(Math.random() * (end - start + start) + start);
	},

	/**
  * url 参数取值
  */
	getQueryParam: function getQueryParam(param, url) {
		var result = url.match(new RegExp("[\?\&]" + param + "=([^\&]+)", "i"));
		if (result == null || result.length < 1) {
			return "";
		}
		console.log(result[1]);
		return result[1];
	},

	/**
  * url 参数取值最终版
  */
	getUrlParam: function getUrlParam(name) {
		var url = decodeURI(weex.config.bundleUrl); //取得整个地址栏
		var result = url.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
		if (result == null || result.length < 1 || result === undefined) {
			console.warn('警告:\n--- start :\n' + 'mixins.getUrlParam ' + '=> ' + name + ' 值为 ' + result + '\n--- end \n\n');
		} else {
			return result[1];
		}
	},


	/**
  * toast
  */
	toast: function toast(data) {
		if (weex.config.env.platform == 'android') {
			modal.toast({
				message: data,
				duration: 0.3
			});
		} else {
			_natjs2.default.toast({
				message: data,
				duration: 3000,
				postion: 'middle'
			});
		}
	},
	WechatPay: function WechatPay(appid, partnerid, prepayid, noncestr, timestamp, package_two, sign, out_trade_no, code_url) {
		var _this2 = this;

		var params = {
			appId: appid,
			partnerId: partnerid,
			prepayId: prepayid,
			nonceStr: noncestr,
			timeStamp: timestamp,
			packageValue: package_two,
			sign: sign,
			extData: out_trade_no,
			code_url: code_url
		};
		_nxpjs2.default.wechat.pay(params, function (err, ret) {
			if (ret !== null) {
				if (ret.code == "0000") {
					// 购买成功
					_this2.jump({
						// url: "modules/confirmOrder/PaymentResult"
						to: "../../modules/user/page/purchaseOrder/unclaim"
					});
				} else {
					_this2.jump({
						// url: "modules/confirmOrder/PaymentResult"
						to: "../../modules/user/page/purchaseOrder/claim_results"
					});
				}
			} else {
				_this2.toast('购买取消');
			}
		});
	},
	WechatupLeverVip: function WechatupLeverVip(appid, partnerid, prepayid, noncestr, timestamp, package_two, sign, out_trade_no, code_url) {
		var _this3 = this;

		var params = {
			appId: appid,
			partnerId: partnerid,
			prepayId: prepayid,
			nonceStr: noncestr,
			timeStamp: timestamp,
			packageValue: package_two,
			sign: sign,
			extData: out_trade_no,
			code_url: code_url
		};
		_nxpjs2.default.wechat.pay(params, function (err, ret) {
			if (ret !== null) {
				if (ret.code == "0000") {
					console.log(ret);
					_this3.toast('升级成功');
					// 购买成功
					// this.jump({
					// 	// url: "modules/confirmOrder/PaymentResult"
					// 	to: "../../modules/user/page/purchaseOrder/unclaim"
					// });
				} else {
					_this3.toast('升级失败');
					// this.jump({
					// 	// url: "modules/confirmOrder/PaymentResult"
					// 	to: "../../modules/user/page/purchaseOrder/claim_results"
					// });
				}
			} else {
				_this3.toast('升级失败');
			}
		});
	},
	WechatReplaceRepay: function WechatReplaceRepay(appid, partnerid, prepayid, noncestr, timestamp, package_two, sign, out_trade_no, code_url) {
		var _this4 = this;

		var params = {
			appId: appid,
			partnerId: partnerid,
			prepayId: prepayid,
			nonceStr: noncestr,
			timeStamp: timestamp,
			packageValue: package_two,
			sign: sign,
			extData: out_trade_no,
			code_url: code_url
		};
		_nxpjs2.default.wechat.pay(params, function (err, ret) {
			if (ret !== null) {
				if (ret.code == "0000") {
					_this4.toast('开通成功');
					// 购买成功
					_this4.jump({
						to: "../../../../App"
					});
				} else {
					_this4.toast('开通失败');
				}
			} else {
				_this4.toast('开通失败');
			}
		});
	},

	// 模拟跳转
	go: function go() {
		this.jump({
			// url: "modules/confirmOrder/PaymentResult"
			to: "../../../../modules/user/page/purchaseOrder/unclaim"
		});
	}
};

/***/ }),

/***/ 50:
/***/ (function(module, exports) {

module.exports = {
  "header": {
    "height": "88",
    "width": "750",
    "backgroundColor": "#ffffff",
    "alignItems": "center",
    "borderBottomWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#f2f2f2"
  },
  "header_text": {
    "textAlign": "center",
    "lineHeight": "88",
    "color": "#333333",
    "fontSize": "36",
    "lines": 1,
    "textOverflow": "ellipsis",
    "width": "600"
  }
}

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: ["message"]
};

/***/ }),

/***/ 52:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: ["header"]
  }, [_c('text', {
    staticClass: ["header_text"]
  }, [_vm._v(_vm._s(_vm.message))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(50)
)

/* script */
__vue_exports__ = __webpack_require__(51)

/* template */
var __vue_template__ = __webpack_require__(52)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/zhengzhuang/Documents/codeProject/liugeche/23-wanwan/wanwanWeex/src/components/header.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-29e8c3c6"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function publicUrl() {
    return "http://wanweb.zfpal.com/pos/asset/icon/";
    // return "http://chengweb.zfpal.com/pos/asset/icon/"
    // return "http://192.168.100.100:8080/src/assets/image/"
}
var iconList = exports.iconList = {
    // logo 公共
    mallBrain: publicUrl() + "mallBrain.png",
    logo: publicUrl() + "logo.png",
    back_top: publicUrl() + "back_top.png",
    wanwan_logo: publicUrl() + "wanwan_logo.png",
    cheng_logo: publicUrl() + "cheng_logo.png",
    huifang_phone: publicUrl() + "huifang_phone.png",
    xinxin: publicUrl() + "xinxin.png",
    share_activ: publicUrl() + "share_activ.png",
    share_new: publicUrl() + "share_new.png",
    chongzhi: publicUrl() + "chongzhi.png",
    ranking_bg: publicUrl() + "ranking_bg.png",
    champion: publicUrl() + "champion.png",
    coppery: publicUrl() + "coppery.png",
    silvery: publicUrl() + "silvery.png",
    head_portrait: publicUrl() + "head_portrait.png",
    baek_bai: publicUrl() + "baek_bai.png",
    preparation: publicUrl() + "preparation.png",
    id_photo: publicUrl() + "id_photo.png",
    id_photo2: publicUrl() + "id_photo2.png",
    camera: publicUrl() + "camera.png",
    Business: publicUrl() + "Business.png",
    bank: publicUrl() + "bank.png",
    baobei: publicUrl() + "baobei.png",
    consumption: publicUrl() + "consumption.png",
    popup: publicUrl() + "popup.png",
    poppu_img: publicUrl() + "poppu_img.png",
    exchange: publicUrl() + "exchange.png",
    huangguan: publicUrl() + "huangguan.png",
    jifenBJ: publicUrl() + "jifenBJ.png",
    qianbao: publicUrl() + "qianbao.png",
    blank: publicUrl() + "blank.png",
    detail_bj: publicUrl() + "detail_bj.png",
    exchange_tuijian: publicUrl() + "exchange_tuijian.png",
    duanxin: publicUrl() + "duanxin.png",
    exchange_1: publicUrl() + "exchange_1.png",
    exchange_2: publicUrl() + "exchange_2.png",
    exchange_3: publicUrl() + "exchange_3.png",
    exchange_jt: publicUrl() + "exchange_jt.png",
    exchange_kefu: publicUrl() + "exchange_kefu.png",
    queshen: publicUrl() + "queshen.png",
    screenshot: publicUrl() + "screenshot.png",
    kefuerweima: publicUrl() + "kefuerweima.jpg",
    jietu: publicUrl() + "jietu.jpg",
    chenggong: publicUrl() + "chenggong.png",
    shili: publicUrl() + "shili.png",
    tianjia1: publicUrl() + "tianjia1.png",
    del_b: publicUrl() + "del_b.png",
    duihao: publicUrl() + "duihao.png",
    creditpayment_cardbag: publicUrl() + "creditpayment_cardbag.png",
    creditpayment_logo: publicUrl() + "creditpayment_logo.png",
    creditpayment_cardbag1: publicUrl() + "creditpayment_cardbag1.png",
    creditpayment_logo1: publicUrl() + "creditpayment_logo1.png",
    vertical_more: publicUrl() + "vertical_more.png",
    vertical_more1: publicUrl() + "vertical_more1.png",
    tinihuan: publicUrl() + "tinihuan.png",
    lunbo: publicUrl() + "lunbo.png",
    sucai: publicUrl() + "sucai.png",
    activation1: publicUrl() + "activation1.png",
    xiugai: publicUrl() + "xiugai.png",
    moreFeatuers1: publicUrl() + "moreFeatuers1.png",
    moreFeatuers2: publicUrl() + "moreFeatuers2.png",
    moreFeatuers3: publicUrl() + "moreFeatuers3.png",
    moreFeatuers4: publicUrl() + "moreFeatuers4.png",
    more_right2: publicUrl() + "more_right2.png",
    openshop1: publicUrl() + "openshop1.jpg",
    openshop2: publicUrl() + "openshop2.jpg",
    openshop3: publicUrl() + "openshop3.jpg",
    more_icon: publicUrl() + "more_icon.png",
    checkSlecat: publicUrl() + "checkSlecat.png",
    checkSlecat1: publicUrl() + "checkSlecat1.png",
    postage: publicUrl() + "postage.png",

    // back 公共返回
    back: publicUrl() + "back.png",
    back_new: publicUrl() + "back_new.png",
    // 分享公共
    share: publicUrl() + "share.png",
    share_gray: publicUrl() + "share_gray.png",
    shareFriends: publicUrl() + "shareFriends.png",
    shareCircle: publicUrl() + "shareCircle.png",
    shareImageFriends: publicUrl() + "shareImageFriends.png",

    // App 页面
    app_cancel: publicUrl() + "app_cancel.png",
    app_home: publicUrl() + "app_home.png",
    app_home_selected: publicUrl() + "app_home_selected.png",
    app_shop: publicUrl() + "app_shop.png",
    app_shop_selected: publicUrl() + "app_shop_selected.png",
    app_flagship: publicUrl() + "app_flagship.png",
    app_flagship_selected: publicUrl() + "app_flagship_selected.png",
    app_share: publicUrl() + "app_share.png",
    app_share_selected: publicUrl() + "app_share_selected.png",
    app_my: publicUrl() + "app_my.png",
    app_my_selected: publicUrl() + "app_my_selected.png",
    appUpdateBg: publicUrl() + "appUpdateBg.png",
    appUpdateBgBottom: publicUrl() + "appUpdateBgBottom.png",
    appUpdateBgClick: publicUrl() + "appUpdateBgClick.png",

    // home 首页页面 
    location: publicUrl() + "location.png",
    search: publicUrl() + "search.png",
    home_logo: publicUrl() + "home_logo.png",
    home_news: publicUrl() + "home_news.png",
    home_activity: publicUrl() + "home_activity.png",
    home_headlines: publicUrl() + "home_headlines.png",
    more_process: publicUrl() + "more_process.png",
    home_style: publicUrl() + "home_style.png",
    home_inquiry: publicUrl() + "home_inquiry.png",
    home_more: publicUrl() + "home_more.png",
    home_new: publicUrl() + "home_new.png",
    hom_hot: publicUrl() + "hom_hot.png",
    store_icon: publicUrl() + "store_icon.png",
    headlines_icon: publicUrl() + "headlines_icon.png",
    mien_icon: publicUrl() + "mien_icon.png",
    right_icon: publicUrl() + "right_icon.png",
    eye_icon: publicUrl() + "eye_icon.png",
    home_logo_b: publicUrl() + "home_logo_b.png",
    home_optimization: publicUrl() + "home_optimization.png",
    // App 页面
    app_home_selected1: publicUrl() + "app_home_selected1.png",
    app_home_implements: publicUrl() + "app_home_implements.png",
    app_home_headlines: publicUrl() + "app_home_headlines.png",
    app_home_my1: publicUrl() + "app_home_my1.png",
    app_home_headlines1: publicUrl() + "app_home_headlines1.png",
    app_flagship1: publicUrl() + "app_flagship1.png",
    app_my1: publicUrl() + "app_my1.png",
    app_home1: publicUrl() + "app_home1.png",
    // 合伙人数据
    Partner_data_bg: publicUrl() + "Partner_data_bg.png",
    Terminal_data_bg: publicUrl() + "Terminal_data_bg.png",
    // 快捷导航
    friend: publicUrl() + "friend.png",
    team: publicUrl() + "team.png",
    activate_queries: publicUrl() + "activate_queries.png",
    revenue_query: publicUrl() + "revenue_query.png",
    transaction_query: publicUrl() + "transaction_query.png",
    application_machinery: publicUrl() + "application_machinery.png",

    // mall 商城页面
    mall_down: publicUrl() + "mall_down.png",
    screen_choose: publicUrl() + "screen_choose.png",
    screen_change_two: publicUrl() + "screen_change_two.png",
    screen_change: publicUrl() + "screen_change.png",
    shop_del: publicUrl() + "shop_del.png",
    delete_car: publicUrl() + "delete_car.png",
    square_new: publicUrl() + "square_new.png",
    square_hot: publicUrl() + "square_hot.png",
    no_search: publicUrl() + "no_search.png",
    close_pop: publicUrl() + "close_pop.png",
    mall_intention: publicUrl() + "mall_intention.png",

    // store 旗舰店页面
    store_position: publicUrl() + "store_position.png",
    store_call: publicUrl() + "store_call.png",

    // user 用户页面
    my_heardimg: publicUrl() + "my_heardimg.png",
    my_set: publicUrl() + "my_set.png",
    my_browsea: publicUrl() + "my_browsea.png",
    my_browseb: publicUrl() + "my_browseb.png",
    my_collectionb: publicUrl() + "my_collectionb.png",
    my_collectiona: publicUrl() + "my_collectiona.png",
    my_member: publicUrl() + "my_member.png",
    my_assets: publicUrl() + "my_assets.png",
    my_bill: publicUrl() + "my_bill.png",
    my_flowing: publicUrl() + "my_flowing.png",
    my_realname: publicUrl() + "my_realname.png",
    my_agent: publicUrl() + "my_agent.png",
    my_redpacket: publicUrl() + "my_redpacket.png",
    my_activity: publicUrl() + "my_activity.png",
    my_ticket: publicUrl() + "my_ticket.png",
    my_order: publicUrl() + "my_order.png",
    my_news: publicUrl() + "my_news.png",
    more_help: publicUrl() + "more_help.png",
    my_buycar_order: publicUrl() + "my_buycar_order.png",
    my_apply: publicUrl() + "my_apply.png",
    expectedReturnIcon: publicUrl() + "expectedReturnIcon.png",

    // activity 活动页面
    activity_noStart: publicUrl() + "activity_noStart.png",
    activity_underway: publicUrl() + "activity_underway.png",
    activity_completed: publicUrl() + "activity_completed.png",
    date_img: publicUrl() + "date_img.png",
    packet_back: publicUrl() + "packet_back.png",
    Nodata: publicUrl() + "Nodata.png",

    // activity_details 活动详情页面
    activity_des: publicUrl() + "activity_des.png",
    service_img: publicUrl() + "service_img.png",

    // myActivityCard 我的卡卷
    packet_bg: publicUrl() + "packet_bg.png",
    packet_audit: publicUrl() + "packet_audit.png",
    packet_used: publicUrl() + "packet_used.png",
    packet_expired: publicUrl() + "packet_expired.png",
    red_mark: publicUrl() + "red_mark.png",

    // couponUse 返利卷使用
    apply_icon: publicUrl() + "apply_icon.png",
    audit_icon: publicUrl() + "audit_icon.png",
    audit_success: publicUrl() + "audit_success.png",
    checkbox: publicUrl() + "checkbox.png",
    blue_mark: publicUrl() + "blue_mark.png",

    // success  支付成功
    bespeakSuccess: publicUrl() + "bespeakSuccess.png",

    // details 车辆详情页
    collection: publicUrl() + "collection.png",
    collection_two: publicUrl() + "collection_two.png",
    delies_i: publicUrl() + "delies_i.png",
    details_call: publicUrl() + "details_call.png",
    details_shop: publicUrl() + "details_shop.png",
    shop_del_white: publicUrl() + "shop_del_white.png",
    mall_tel: publicUrl() + "mall_tel.png",
    car_collection: publicUrl() + "car_collection.png",

    // filter 查找筛选
    models_whole: publicUrl() + "models_whole.png",
    models_hatchback: publicUrl() + "models_hatchback.png",
    models_notchback: publicUrl() + "models_notchback.png",
    models_suv: publicUrl() + "models_suv.png",
    models_mpv: publicUrl() + "models_mpv.png",

    // search 搜索页面
    search_two: publicUrl() + "search_two.png",
    record_img: publicUrl() + "record_img.png",

    // bespeak 预约到店
    bespeakBanner: publicUrl() + "bespeakBanner.png",
    bespeak_right: publicUrl() + "bespeak_right.png",
    bespeak_modify: publicUrl() + "bespeak_modify.png",

    // notice 公告
    notice_incon: publicUrl() + "notice_incon.png",

    // violationInquiry 违章查询页面
    violationBanner: publicUrl() + "violationBanner.png",
    violationcity: publicUrl() + "violationcity.png",

    // automobileService    汽车服务
    u974: publicUrl() + "u974.png",
    service_rescue: publicUrl() + "service_rescue.png",
    service_carWash: publicUrl() + "service_carWash.png",
    service_repair: publicUrl() + "service_repair.png",
    service_maintain: publicUrl() + "service_maintain.png",
    service_nearby: publicUrl() + "service_nearby.png",
    service_hot: publicUrl() + "service_hot.png",
    u983: publicUrl() + "u983.png",
    service_hots: publicUrl() + "service_hots.png",

    // expect  汽车保险页面
    insurance_one: publicUrl() + "insurance_one.png",
    insurance_two: publicUrl() + "insurance_two.png",
    insurance_three: publicUrl() + "insurance_three.png",
    insurance_four: publicUrl() + "insurance_four.png",
    insurance_five: publicUrl() + "insurance_five.jpg",

    // order  车险订单页面
    u1183: publicUrl() + "u1183.png",
    save_icon: publicUrl() + "save_icon.png",

    // insurance 援救保险页面
    call_logo: publicUrl() + "call_logo.png",

    // repairShop  维修店铺页面
    distance: publicUrl() + "distance.png",

    // ViolationResults 查询结果
    ViolationResults: publicUrl() + "ViolationResults.png",

    // storeOffice  门店办公
    administration_customer: publicUrl() + "administration_customer.png",
    administration_bespeak: publicUrl() + "administration_bespeak.png",
    administration_store: publicUrl() + "administration_store.png",
    administration_car: publicUrl() + "administration_car.png",
    administration_credit: publicUrl() + "administration_credit.png",
    administration_transaction: publicUrl() + "administration_transaction.png",
    administration_statistics: publicUrl() + "administration_statistics.png",
    administration_article: publicUrl() + "administration_article.png",

    // storeVehicle  门店办公门店车辆页面
    add_car: publicUrl() + "add_car.png",

    // storeEditor  门店办公门店页面
    show_upload: publicUrl() + "show_upload.png",
    delete_img: publicUrl() + "delete_img.png",
    addimg: publicUrl() + "addimg.png",
    expect: publicUrl() + "expect.png",

    // register  注册
    login_back: publicUrl() + "login_back.png",
    user_name: publicUrl() + "user_name.png",
    mobile: publicUrl() + "mobile.png",
    verification_code: publicUrl() + "verification_code.png",

    // new 注册
    mobile_new: publicUrl() + "mobile_new.png",
    verification_code_new: publicUrl() + "verification_code_new.png",
    passworld_new: publicUrl() + "passworld_new.png",

    // memberUpgrade  会员升级
    member_bg: publicUrl() + "member_bg.png",
    upgrade_top: publicUrl() + "upgrade_top.png",
    member_vip: publicUrl() + "member_vip.png",
    membei_agent: publicUrl() + "membei_agent.png",
    privilege_img: publicUrl() + "privilege_img.png",
    contact_one: publicUrl() + "contact_one.png",
    upgrade_bottom: publicUrl() + "upgrade_bottom.png",
    member_car_nest: publicUrl() + "member_car_nest.png",
    activation_code_bg: publicUrl() + "activation_code_bg.png",
    activation_code_bg02: publicUrl() + "activation_code_bg02.png",
    activation_code_used: publicUrl() + "activation_code_used.png",
    join_icon: publicUrl() + "join_icon.png",

    // login  登录
    password: publicUrl() + "password.png",

    // success  提现成功
    withdrawals_success: publicUrl() + "withdrawals_success.png",

    // bill  账单
    branch: publicUrl() + "branch.png",
    accept: publicUrl() + "accept.png",

    // redPackets  红包
    redpacket_img: publicUrl() + "redpacket_img.png",
    redpacket_date: publicUrl() + "redpacket_date.png",
    used_img: publicUrl() + "used_img.png",

    // more  更多功能
    my_browse: publicUrl() + "my_browse.png",
    my_collection: publicUrl() + "my_collection.png",
    home_Insurance: publicUrl() + "home_Insurance.png",
    more_administration: publicUrl() + "more_administration.png",
    my_contact: publicUrl() + "my_contact.png",
    my_feedback: publicUrl() + "my_feedback.png",
    home_service: publicUrl() + "home_service.png",
    my_team: publicUrl() + "my_team.png",
    more_insurance_order: publicUrl() + "more_insurance_order.png",
    more_share: publicUrl() + "more_share.png",
    my_activation_code: publicUrl() + "my_activation_code.png",
    more_course: publicUrl() + "more_course.png",
    more_task: publicUrl() + "more_task.png",

    // headlines_details  头条详情
    headlines_selected: publicUrl() + "headlines_selected.png",

    // 我的分享
    share_rule: publicUrl() + "share_rule.png",
    share_down: publicUrl() + "share_down.png",
    share_first: publicUrl() + "share_first.png",
    share_second: publicUrl() + "share_second.png",
    share_third: publicUrl() + "share_third.png",
    share_headimg: publicUrl() + "share_headimg.png",

    // CarPurchaseDetails 购车订单详情页面
    refresh: publicUrl() + "refresh.png",
    orderSuccess: publicUrl() + "orderSuccess.png",

    // PaymentSuccess 购车支付成功页面
    paySuccessImg: publicUrl() + "paySuccessImg.png",
    ToExamineImg: publicUrl() + "ToExamineImg.png",
    auditFailure: publicUrl() + "auditFailure.png",
    refundSucceed: publicUrl() + "refundSucceed.png",

    // taskCenter 任务中心
    task_rule: publicUrl() + "task_rule.png",

    // trainingCamp 特训营
    classify_bg01: publicUrl() + "classify_bg01.png",
    classify_bg02: publicUrl() + "classify_bg02.png",
    classify_bg03: publicUrl() + "classify_bg03.png",
    course_collection: publicUrl() + "course_collection.png",
    course_report: publicUrl() + "course_report.png",
    course_wrong: publicUrl() + "course_wrong.png",
    report_img: publicUrl() + "report_img.png",
    study_collect01: publicUrl() + "study_collect01.png",
    study_collect02: publicUrl() + "study_collect02.png",
    study_correct: publicUrl() + "study_correct.png",
    study_left: publicUrl() + "study_left.png",
    study_praise01: publicUrl() + "study_praise01.png",
    study_praise02: publicUrl() + "study_praise02.png",
    study_user: publicUrl() + "study_user.png",
    study_wrong: publicUrl() + "study_wrong.png",
    // 临时图片
    temporary01: publicUrl() + "temporary01.png",
    temporary02: publicUrl() + "temporary02.png",
    temporary03: publicUrl() + "temporary03.png",

    // maintain_car 最优养车
    guessYou_icon: publicUrl() + "guessYou_icon.png",

    // 机具详情
    check: publicUrl() + "check.png",
    gokackhome: publicUrl() + "gokackhome.png",
    customer: publicUrl() + "customer.png",
    // 确认订单
    go_address: publicUrl() + "go_address.png",
    Success: publicUrl() + "Success.png",
    fail: publicUrl() + "fail.png",
    // 交易查询
    transaction_bottom: publicUrl() + "transaction_bottom.png",
    detailed: publicUrl() + "detailed.png",
    // 添加收货地址
    address_add: publicUrl() + "address_add.png",
    checked: publicUrl() + "checked.png",
    Unchecked: publicUrl() + "Unchecked.png",
    address_edit: publicUrl() + "address_edit.png",
    search_delete: publicUrl() + "search_delete.png",
    noAddress: publicUrl() + "noAddress.png",
    // 我的
    my_authentication: publicUrl() + "my_authentication.png",
    my_record: publicUrl() + "my_record.png",
    my_allocation: publicUrl() + "my_allocation.png",
    my_implements: publicUrl() + "my_implements.png",
    my_credit: publicUrl() + "my_credit.png",
    my_heardimg_new: publicUrl() + "my_heardimg_new.png",
    kefu: publicUrl() + "kefu.png",
    set: publicUrl() + "set.png",
    // 邀请好友
    Invitation: publicUrl() + "Invitation.jpg",
    fenxiang: publicUrl() + "fenxiang.png",
    // 机具调拨
    Choice: publicUrl() + "Choice.png",
    cancel: publicUrl() + "cancel.png",
    boIcon: publicUrl() + "boIcon.png",
    boIconSelcet: publicUrl() + "boIconSelcet.png",
    // 支付
    WeChat: publicUrl() + "WeChat.png",
    balance_pay_icon: publicUrl() + "balance_pay_icon.png",
    chose_icon: publicUrl() + "chose_icon.png",
    unselected: publicUrl() + "unselected.png",
    liushui: publicUrl() + "liushui.png",
    record: publicUrl() + "record.png",
    recod1: publicUrl() + "recod1.png"

};

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var camera = void 0;

if (weex && weex.requireModule) {
	camera = weex.requireModule('nat/camera');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		camera = __weex_require__('@weex-module/nat/camera');
	});
}

// launch

var launch = function launch(opts) {
	camera.launch();
};

// captureImage (snap)

var captureImage = function captureImage(opts, cb) {
	opts = opts || {};

	return new Promise(function (resolve, reject) {
		camera.captureImage({
			width: opts.width || null,
			height: opts.height || null
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// captureVideo (record)

var captureVideo = function captureVideo(opts, cb) {
	opts = opts || {};

	return new Promise(function (resolve, reject) {
		camera.captureVideo({
			width: opts.width || null,
			height: opts.height || null
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	launch: launch,
	captureImage: captureImage,
	captureVideo: captureVideo
};

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(9);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

var communication = void 0;

if (weex && weex.requireModule) {
	communication = weex.requireModule('nat/communication');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		communication = __weex_require__('@weex-module/nat/communication');
	});
}

// call

var call = function call(to, cb) {
	return new Promise(function (resolve, reject) {

		if (!to) {
			reject({
				code: 101040,
				message: 'CALL_MISSING_ARGUMENT'
			});
			return;
		} else if (!_utils2.default.isPhone(to)) {
			reject({
				code: 101050,
				message: 'CALL_INVALID_ARGUMENT',
				details: 'Invalid phone number: ' + to
			});
			return;
		}

		communication.call(to, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// sms

var sms = function sms(to, text, cb) {
	text = text || '';

	if (typeof text === 'function') {
		cb = text;
		text = '';
	}

	return new Promise(function (resolve, reject) {
		if (!to) {
			reject({
				code: 102040,
				message: 'SMS_MISSING_ARGUMENT'
			});
			return;
		}

		if (typeof to === 'string') {
			to = [to];
		}

		for (var i = 0; i < to.length; i++) {
			if (!_utils2.default.isPhone(to[i])) {
				reject({
					code: 102050,
					message: 'SMS_INVALID_ARGUMENT'
				});
				return;
			}
		}

		communication.sms(to, text, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// mail

var mail = function mail(to, opts, cb) {
	opts = opts || {};

	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		if (!to) {
			reject({
				code: 103040,
				message: 'MAIL_MISSING_ARGUMENT'
			});
			return;
		}

		if (typeof to === 'string') {
			to = [to];
		}

		for (var i = 0; i < to.length; i++) {
			if (!_utils2.default.isEmail(to[i])) {
				reject({
					code: 103050,
					message: 'MAIL_INVALID_ARGUMENT',
					details: 'Invalid emaill address: ' + to[i]
				});
				return;
			}
		}

		communication.mail(to, {
			subject: opts.subject || '',
			body: opts.body || '',
			attachments: opts.attachments || null
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

module.exports = {
	call: call,
	sms: sms,
	mail: mail
};

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isFn = function isFn(fn) {
	return typeof fn === 'function';
};

var isPhone = function isPhone(str) {
	if (typeof str === 'number') {
		str = str.toString();
	} else if (typeof str !== 'string') {
		return false;
	}

	return (/^\+?[\d\-\#\*\.\(\)]+$/.test(str)
	);
};

var isEmail = function isEmail(str) {
	if (typeof str !== 'string') {
		return false;
	}

	return (/^(\w)+([\.\-\_]\w+)*@(\w)+(([\.\-\_]\w+)+)$/.test(str)
	);
};

module.exports = {
	isFn: isFn,
	isPhone: isPhone,
	isEmail: isEmail
};

/***/ })

/******/ });