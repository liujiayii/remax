require('./../runtime.js');
require('./../app~packageA/pages/index~pages/index.js');
require('./../packageA/pages/index~pages/index.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

module.exports = react-reconciler;

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

module.exports = scheduler;

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

module.exports = react;

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(40);


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42);
/* harmony import */ var remax_alipay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var _page = function _page() {
  var props = {};
  var TextElement = react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"]( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_3__["Text"], null));

  function handleClick() {
    return _handleClick.apply(this, arguments);
  }

  function _handleClick() {
    _handleClick = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Promise.resolve(1);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleClick.apply(this, arguments);
  }

  function handleTouchStart() {}

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_3__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_3__["View"], _extends({
    onClick: handleClick,
    onTouchStart: handleTouchStart,
    id: "view",
    "data-foo": "bar"
  }, props), "foo"), TextElement, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_alipay__WEBPACK_IMPORTED_MODULE_4__["Lifestyle"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](UnBindingComponent, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_3__["Input"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    focus: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_3__["ScrollView"], {
    scrollTop: 0
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_3__["View"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_3__["ScrollView"], {
    scrollLeft: 0
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_3__["View"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_3__["Swiper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_3__["SwiperItem"], null, "a"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_3__["SwiperItem"], null, "b")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_3__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_3__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_3__["ScrollView"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_3__["View"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_3__["Swiper"], {
    current: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_3__["SwiperItem"], null, "a"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_3__["SwiperItem"], null, "b")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_3__["Text"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_3__["Text"], null, "text")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Page(Object(remax__WEBPACK_IMPORTED_MODULE_1__["createPageConfig"])(_page)));

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = regenerator-runtime;

/***/ }),
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax_alipay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);
/* harmony import */ var remax_alipay__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(remax_alipay__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in remax_alipay__WEBPACK_IMPORTED_MODULE_0__) if(["render","createAppConfig","createPageConfig","createHostComponent","Platform","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return remax_alipay__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _esm_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _esm_render__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _esm_createAppConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAppConfig", function() { return _esm_createAppConfig__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _esm_createPageConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPageConfig", function() { return _esm_createPageConfig__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _esm_createHostComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHostComponent", function() { return _esm_createHostComponent__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _esm_Platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return _esm_Platform__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _esm_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePageInstance", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["usePageInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_useNativeEffect", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["unstable_useNativeEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useShow", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useShow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReady", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useReady"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHide", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useHide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePullDownRefresh", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["usePullDownRefresh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReachBottom", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useReachBottom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePageScroll", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["usePageScroll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useShareAppMessage", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useShareAppMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTitleClick", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useTitleClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useOptionMenuClick", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useOptionMenuClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePopMenuClick", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["usePopMenuClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePullIntercept", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["usePullIntercept"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePageEvent", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["usePageEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppEvent", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useAppEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppShow", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useAppShow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppLaunch", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useAppLaunch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppError", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useAppError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppHide", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useAppHide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppPageNotFound", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useAppPageNotFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppShareAppMessage", function() { return _esm_hooks__WEBPACK_IMPORTED_MODULE_6__["useAppShareAppMessage"]; });









/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

__export(__webpack_require__(91));

__export(__webpack_require__(127));

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

var View_1 = __webpack_require__(92);

exports.View = View_1["default"];

__export(__webpack_require__(92));

var ScrollView_1 = __webpack_require__(94);

exports.ScrollView = ScrollView_1["default"];

__export(__webpack_require__(94));

var Swiper_1 = __webpack_require__(95);

exports.Swiper = Swiper_1["default"];

__export(__webpack_require__(95));

var SwiperItem_1 = __webpack_require__(96);

exports.SwiperItem = SwiperItem_1["default"];

__export(__webpack_require__(96));

var MovableView_1 = __webpack_require__(97);

exports.MovableView = MovableView_1["default"];

__export(__webpack_require__(97));

var MovableArea_1 = __webpack_require__(98);

exports.MovableArea = MovableArea_1["default"];

__export(__webpack_require__(98));

var CoverView_1 = __webpack_require__(99);

exports.CoverView = CoverView_1["default"];

__export(__webpack_require__(99));

var CoverImage_1 = __webpack_require__(100);

exports.CoverImage = CoverImage_1["default"];

__export(__webpack_require__(100));

var Icon_1 = __webpack_require__(101);

exports.Icon = Icon_1["default"];

__export(__webpack_require__(101));

var Text_1 = __webpack_require__(102);

exports.Text = Text_1["default"];

__export(__webpack_require__(102));

var RichText_1 = __webpack_require__(103);

exports.RichText = RichText_1["default"];

__export(__webpack_require__(103));

var Progress_1 = __webpack_require__(104);

exports.Progress = Progress_1["default"];

__export(__webpack_require__(104));

var Button_1 = __webpack_require__(105);

exports.Button = Button_1["default"];

__export(__webpack_require__(105));

var CheckboxGroup_1 = __webpack_require__(106);

exports.CheckboxGroup = CheckboxGroup_1["default"];

__export(__webpack_require__(106));

var Checkbox_1 = __webpack_require__(107);

exports.Checkbox = Checkbox_1["default"];

__export(__webpack_require__(107));

var Form_1 = __webpack_require__(108);

exports.Form = Form_1["default"];

__export(__webpack_require__(108));

var Input_1 = __webpack_require__(109);

exports.Input = Input_1["default"];

__export(__webpack_require__(109));

var Label_1 = __webpack_require__(110);

exports.Label = Label_1["default"];

__export(__webpack_require__(110));

var Picker_1 = __webpack_require__(111);

exports.Picker = Picker_1["default"];

__export(__webpack_require__(111));

var PickerView_1 = __webpack_require__(112);

exports.PickerView = PickerView_1["default"];

__export(__webpack_require__(112));

var PickerViewColumn_1 = __webpack_require__(113);

exports.PickerViewColumn = PickerViewColumn_1["default"];

__export(__webpack_require__(113));

var RadioGroup_1 = __webpack_require__(114);

exports.RadioGroup = RadioGroup_1["default"];

__export(__webpack_require__(114));

var Radio_1 = __webpack_require__(115);

exports.Radio = Radio_1["default"];

__export(__webpack_require__(115));

var Slider_1 = __webpack_require__(116);

exports.Slider = Slider_1["default"];

__export(__webpack_require__(116));

var Switch_1 = __webpack_require__(117);

exports.Switch = Switch_1["default"];

__export(__webpack_require__(117));

var Textarea_1 = __webpack_require__(118);

exports.Textarea = Textarea_1["default"];

__export(__webpack_require__(118));

var Navigator_1 = __webpack_require__(119);

exports.Navigator = Navigator_1["default"];

__export(__webpack_require__(119));

var Image_1 = __webpack_require__(120);

exports.Image = Image_1["default"];

__export(__webpack_require__(120));

var Map_1 = __webpack_require__(121);

exports.Map = Map_1["default"];

__export(__webpack_require__(121));

var Canvas_1 = __webpack_require__(122);

exports.Canvas = Canvas_1["default"];

__export(__webpack_require__(122));

var WebView_1 = __webpack_require__(123);

exports.WebView = WebView_1["default"];

__export(__webpack_require__(123));

var Lifestyle_1 = __webpack_require__(124);

exports.Lifestyle = Lifestyle_1["default"];

__export(__webpack_require__(124));

var ContactButton_1 = __webpack_require__(125);

exports.ContactButton = ContactButton_1["default"];

__export(__webpack_require__(125));

var Video_1 = __webpack_require__(126);

exports.Video = Video_1["default"];

__export(__webpack_require__(126));

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(93));

var View = createHostComponent_1["default"]('view');
exports["default"] = View;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(14));

function createHostComponent(name) {
  var Component = function Component(props, ref) {
    var _a = props.children,
        children = _a === void 0 ? [] : _a;
    return React.createElement(name, __assign(__assign({}, props), {
      ref: ref
    }), children);
  };

  return React.forwardRef(Component);
}

exports["default"] = createHostComponent;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(93));

var ScrollView = createHostComponent_1["default"]('scroll-view');
exports["default"] = ScrollView;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(93));

exports["default"] = createHostComponent_1["default"]('swiper');

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(93));

exports["default"] = createHostComponent_1["default"]('swiper-item');

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(93));

var MovableView = createHostComponent_1["default"]('movable-view');
exports["default"] = MovableView;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(93));

var MovableArea = createHostComponent_1["default"]('movable-area');
exports["default"] = MovableArea;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(93));

var CoverView = createHostComponent_1["default"]('cover-view');
exports["default"] = CoverView;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(93));

var CoverImage = createHostComponent_1["default"]('cover-image');
exports["default"] = CoverImage;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(93));

exports["default"] = createHostComponent_1["default"]('icon');

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(93));

var Text = createHostComponent_1["default"]('text');
exports["default"] = Text;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(93));

exports["default"] = createHostComponent_1["default"]('rich-text');

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(93));

exports["default"] = createHostComponent_1["default"]('progress');

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(93));

var Button = createHostComponent_1["default"]('button');
exports["default"] = Button;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(93));

exports["default"] = createHostComponent_1["default"]('checkbox-group');

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(93));

exports["default"] = createHostComponent_1["default"]('checkbox');

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(93));

var Form = createHostComponent_1["default"]('form');
exports["default"] = Form;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(93));

var Input = createHostComponent_1["default"]('input');
exports["default"] = Input;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(93));

exports["default"] = createHostComponent_1["default"]('label');

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(93));

exports["default"] = createHostComponent_1["default"]('picker');

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(93));

var PickerView = createHostComponent_1["default"]('picker-view');
exports["default"] = PickerView;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(93));

exports["default"] = createHostComponent_1["default"]('picker-view-column');

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(93));

exports["default"] = createHostComponent_1["default"]('radio-group');

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(93));

exports["default"] = createHostComponent_1["default"]('radio');

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(93));

exports["default"] = createHostComponent_1["default"]('slider');

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(93));

exports["default"] = createHostComponent_1["default"]('switch');

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(93));

var Textarea = createHostComponent_1["default"]('textarea');
exports["default"] = Textarea;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(93));

exports["default"] = createHostComponent_1["default"]('navigator');

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(93));

var Image = createHostComponent_1["default"]('image');
exports["default"] = Image;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(93));

var Map = createHostComponent_1["default"]('map');
exports["default"] = Map;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(93));

var Canvas = createHostComponent_1["default"]('canvas');
exports["default"] = Canvas;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(93));

exports["default"] = createHostComponent_1["default"]('web-view');

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(93));

exports["default"] = createHostComponent_1["default"]('lifestyle');

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(93));

exports["default"] = createHostComponent_1["default"]('contact-button');

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createHostComponent_1 = __importDefault(__webpack_require__(93));

exports["default"] = createHostComponent_1["default"]('video');

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var promisify_1 = __importDefault(__webpack_require__(128));

exports.getAppStub = getApp;
exports.addCardAuth = promisify_1["default"](my.addCardAuth);
exports.addPhoneContact = promisify_1["default"](my.addPhoneContact);
exports.alert = promisify_1["default"](my.alert);
exports.canIUse = my.canIUse;
exports.chooseAlipayContact = promisify_1["default"](my.chooseAlipayContact);
exports.chooseCity = promisify_1["default"](my.chooseCity);
exports.chooseContact = promisify_1["default"](my.chooseContact);
exports.chooseImage = promisify_1["default"](my.chooseImage);
exports.chooseLocation = promisify_1["default"](my.chooseLocation);
exports.choosePhoneContact = promisify_1["default"](my.choosePhoneContact);
exports.clearStorage = my.clearStorage;
exports.clearStorageSync = my.clearStorageSync;
exports.closeBluetoothAdapter = promisify_1["default"](my.closeBluetoothAdapter);
exports.closeSocket = promisify_1["default"](my.closeSocket);
exports.compressImage = promisify_1["default"](my.compressImage);
exports.confirm = promisify_1["default"](my.confirm);
exports.connectBLEDevice = promisify_1["default"](my.connectBLEDevice);
exports.connectSocket = promisify_1["default"](my.connectSocket);
exports.createAnimation = my.createAnimation;
exports.createCanvasContext = my.createCanvasContext;
exports.createIntersectionObserver = my.createIntersectionObserver;
exports.createMapContext = my.createMapContext;
exports.createSelectorQuery = my.createSelectorQuery;
exports.createWebViewContext = my.createWebViewContext;
exports.datePicker = promisify_1["default"](my.datePicker);
exports.disconnectBLEDevice = promisify_1["default"](my.disconnectBLEDevice);
exports.downloadFile = promisify_1["default"](my.downloadFile);
exports.getAuthCode = promisify_1["default"](my.getAuthCode);
exports.getAuthUserInfo = promisify_1["default"](my.getAuthUserInfo);
exports.getBatteryInfo = promisify_1["default"](my.getBatteryInfo);
exports.getBatteryInfoSync = my.getBatteryInfoSync;
exports.getBeacons = promisify_1["default"](my.getBeacons);
exports.getBLEDeviceCharacteristics = promisify_1["default"](my.getBLEDeviceCharacteristics);
exports.getBLEDeviceServices = promisify_1["default"](my.getBLEDeviceServices);
exports.getBluetoothAdapterState = promisify_1["default"](my.getBluetoothAdapterState);
exports.getBluetoothDevices = promisify_1["default"](my.getBluetoothDevices);
exports.getClipboard = promisify_1["default"](my.getClipboard);
exports.getConnectedBluetoothDevices = promisify_1["default"](my.getConnectedBluetoothDevices);
exports.getFileInfo = promisify_1["default"](my.getFileInfo);
exports.getImageInfo = promisify_1["default"](my.getImageInfo);
exports.getLocation = promisify_1["default"](my.getLocation);
exports.getNetworkType = promisify_1["default"](my.getNetworkType);
exports.getPhoneNumber = promisify_1["default"](my.getPhoneNumber);
exports.getRunData = promisify_1["default"](my.getRunData);
exports.getRunScene = promisify_1["default"](my.getRunScene);
exports.getSavedFileInfo = promisify_1["default"](my.getSavedFileInfo);
exports.getSavedFileList = promisify_1["default"](my.getSavedFileList);
exports.getScreenBrightness = promisify_1["default"](my.getScreenBrightness);
exports.getServerTime = promisify_1["default"](my.getServerTime);
exports.getSetting = promisify_1["default"](my.getSetting);
exports.getStorage = promisify_1["default"](my.getStorage);
exports.getStorageInfo = promisify_1["default"](my.getStorageInfo);
exports.getStorageInfoSync = my.getStorageInfoSync;
exports.getStorageSync = my.getStorageSync;
exports.getSystemInfo = promisify_1["default"](my.getSystemInfo);
exports.getSystemInfoSync = my.getSystemInfoSync;
exports.getTitleColor = promisify_1["default"](my.getTitleColor);
exports.getUpdateManager = my.getUpdateManager;
exports.hideAddToDesktopMenu = my.hideAddToDesktopMenu;
exports.hideAllAddToDesktopMenu = my.hideAllAddToDesktopMenu;
exports.hideAllFavoriteMenu = my.hideAllFavoriteMenu;
exports.hideBackHome = my.hideBackHome;
exports.hideFavoriteMenu = my.hideFavoriteMenu;
exports.hideKeyboard = my.hideKeyboard;
exports.hideLoading = my.hideLoading;
exports.hideNavigationBarLoading = my.hideNavigationBarLoading;
exports.hideShareMenu = my.hideShareMenu;
exports.hideTabBar = my.hideTabBar;
exports.hideTabBarRedDot = my.hideTabBarRedDot;
exports.hideToast = my.hideToast;
exports.loadFontFace = promisify_1["default"](my.loadFontFace);
exports.makePhoneCall = my.makePhoneCall;
exports.multiLevelSelect = promisify_1["default"](my.multiLevelSelect);
exports.navigateBack = promisify_1["default"](my.navigateBack);
exports.navigateBackMiniProgram = promisify_1["default"](my.navigateBackMiniProgram);
exports.navigateTo = promisify_1["default"](my.navigateTo);
exports.navigateToMiniProgram = promisify_1["default"](my.navigateToMiniProgram);
exports.notifyBLECharacteristicValueChange = promisify_1["default"](my.notifyBLECharacteristicValueChange);
exports.offAccelerometerChange = my.offAccelerometerChange;
exports.offBLECharacteristicValueChange = my.offBLECharacteristicValueChange;
exports.offBLEConnectionStateChanged = my.offBLEConnectionStateChanged;
exports.offBluetoothAdapterStateChange = my.offBluetoothAdapterStateChange;
exports.offBluetoothDeviceFound = my.offBluetoothDeviceFound;
exports.offCompassChange = my.offCompassChange;
exports.offGyroscopeChange = my.offGyroscopeChange;
exports.offMemoryWarning = my.offMemoryWarning;
exports.offNetworkStatusChange = my.offNetworkStatusChange;
exports.offSocketClose = my.offSocketClose;
exports.offSocketError = my.offSocketError;
exports.offSocketMessage = my.offSocketMessage;
exports.offSocketOpen = my.offSocketOpen;
exports.offUserCaptureScreen = my.offUserCaptureScreen;
exports.onAccelerometerChange = my.onAccelerometerChange;
exports.onBeaconServiceChange = my.onBeaconServiceChange;
exports.onBeaconUpdate = my.onBeaconUpdate;
exports.onBLECharacteristicValueChange = my.onBLECharacteristicValueChange;
exports.onBLEConnectionStateChanged = my.onBLEConnectionStateChanged;
exports.onBluetoothAdapterStateChange = my.onBluetoothAdapterStateChange;
exports.onBluetoothDeviceFound = my.onBluetoothDeviceFound;
exports.onCompassChange = my.onCompassChange;
exports.onGyroscopeChange = my.onGyroscopeChange;
exports.onMemoryWarning = my.onMemoryWarning;
exports.onNetworkStatusChange = my.onNetworkStatusChange;
exports.onSocketClose = my.onSocketClose;
exports.onSocketError = my.onSocketError;
exports.onSocketMessage = my.onSocketMessage;
exports.onSocketOpen = my.onSocketOpen;
exports.onUserCaptureScreen = my.onUserCaptureScreen;
exports.openBluetoothAdapter = my.openBluetoothAdapter;
exports.openCardDetail = my.openCardDetail;
exports.openCardList = my.openCardList;
exports.openKBVoucherDetail = my.openKBVoucherDetail;
exports.openLocation = promisify_1["default"](my.openLocation);
exports.openMerchantCardList = my.openMerchantCardList;
exports.openMerchantTicketList = my.openMerchantTicketList;
exports.openMerchantVoucherList = my.openMerchantVoucherList;
exports.openSetting = promisify_1["default"](my.openSetting);
exports.openTicketDetail = my.openTicketDetail;
exports.openTicketList = my.openTicketList;
exports.openVoucherDetail = my.openVoucherDetail;
exports.openVoucherList = my.openVoucherList;
exports.optionsSelect = my.optionsSelect;
exports.pageScrollTo = promisify_1["default"](my.pageScrollTo);
exports.previewImage = promisify_1["default"](my.previewImage);
exports.prompt = promisify_1["default"](my.prompt);
exports.readBLECharacteristicValue = promisify_1["default"](my.readBLECharacteristicValue);
exports.redirectTo = promisify_1["default"](my.redirectTo);
exports.reLaunch = promisify_1["default"](my.reLaunch);
exports.removeSavedFile = promisify_1["default"](my.removeSavedFile);
exports.removeStorage = promisify_1["default"](my.removeStorage);
exports.removeStorageSync = my.removeStorageSync;
exports.removeTabBarBadge = promisify_1["default"](my.removeTabBarBadge);
exports.reportAnalytics = my.reportAnalytics;
exports.request = promisify_1["default"](my.request);
exports.rsa = promisify_1["default"](my.rsa);
exports.saveFile = promisify_1["default"](my.saveFile);
exports.saveImage = promisify_1["default"](my.saveImage);
exports.scan = promisify_1["default"](my.scan);
exports.SDKVersion = my.SDKVersion;
exports.sendSocketMessage = promisify_1["default"](my.sendSocketMessage);
exports.setBackgroundColor = promisify_1["default"](my.setBackgroundColor);
exports.setBackgroundTextStyle = promisify_1["default"](my.setBackgroundTextStyle);
exports.setCanPullDown = my.setCanPullDown;
exports.setClipboard = promisify_1["default"](my.setClipboard);
exports.setKeepScreenOn = promisify_1["default"](my.setKeepScreenOn);
exports.setNavigationBar = promisify_1["default"](my.setNavigationBar);
exports.setOptionMenu = my.setOptionMenu;
exports.setScreenBrightness = promisify_1["default"](my.setScreenBrightness);
exports.setStorage = promisify_1["default"](my.setStorage);
exports.setStorageSync = my.setStorageSync;
exports.setTabBarBadge = promisify_1["default"](my.setTabBarBadge);
exports.setTabBarItem = promisify_1["default"](my.setTabBarItem);
exports.setTabBarStyle = promisify_1["default"](my.setTabBarStyle);
exports.showActionSheet = promisify_1["default"](my.showActionSheet);
exports.showAuthGuide = my.showAuthGuide;
exports.showLoading = promisify_1["default"](my.showLoading);
exports.showNavigationBarLoading = promisify_1["default"](my.showNavigationBarLoading);
exports.showSharePanel = my.showSharePanel;
exports.showTabBar = promisify_1["default"](my.showTabBar);
exports.showTabBarRedDot = promisify_1["default"](my.showTabBarRedDot);
exports.showToast = promisify_1["default"](my.showToast);
exports.startBeaconDiscovery = promisify_1["default"](my.startBeaconDiscovery);
exports.startBluetoothDevicesDiscovery = promisify_1["default"](my.startBluetoothDevicesDiscovery);
exports.startPullDownRefresh = promisify_1["default"](my.startPullDownRefresh);
exports.startZMVerify = my.startZMVerify;
exports.stopBeaconDiscovery = promisify_1["default"](my.stopBeaconDiscovery);
exports.stopBluetoothDevicesDiscovery = promisify_1["default"](my.stopBluetoothDevicesDiscovery);
exports.stopPullDownRefresh = promisify_1["default"](my.stopPullDownRefresh);
exports.switchTab = promisify_1["default"](my.switchTab);
exports.textRiskIdentification = promisify_1["default"](my.textRiskIdentification);
exports.tradePay = promisify_1["default"](my.tradePay);
exports.uploadFile = promisify_1["default"](my.uploadFile);
exports.vibrate = promisify_1["default"](my.vibrate);
exports.vibrateLong = promisify_1["default"](my.vibrateLong);
exports.vibrateShort = promisify_1["default"](my.vibrateShort);
exports.watchShake = my.watchShake;
exports.writeBLECharacteristicValue = promisify_1["default"](my.writeBLECharacteristicValue);
exports.createVideoContext = my.createVideoContext;
exports.getOpenUserInfo = promisify_1["default"](my.getOpenUserInfo);

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

function promisify(api) {
  return function (arg) {
    if (arg === void 0) {
      arg = {};
    }

    return new Promise(function (resolve, reject) {
      var promisifyArg = arg;
      api(__assign(__assign({}, promisifyArg), {
        success: function success(res) {
          if (promisifyArg && typeof promisifyArg.success === 'function') {
            promisifyArg.success(res);
          }

          resolve(res);
        },
        fail: function fail(res) {
          if (promisifyArg && typeof promisifyArg.fail === 'function') {
            promisifyArg.fail(res);
          }

          reject(res);
        }
      }));
    });
  };
}

exports["default"] = promisify;

/***/ })
],[[39,0,3,6]]]);