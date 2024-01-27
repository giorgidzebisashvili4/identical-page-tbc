/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./photos/title-photo3.jpg */ "./src/photos/title-photo3.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* @font-face {
    font-family: 'MyFont';
    src: url('./my-font.woff2') format('woff2'),
      url('./my-font.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  } */

:root {
  --white: white;
  --dark: rgb(26, 30, 31);
  --grey: rgb(43, 43, 43);
  --blue: rgb(0, 163, 224);
  --black: rgb(22, 22, 22);
  --course-card-corner: 5px;
}
.header,
.title-section,
.paragraph-section,
.courses-section,
.partners-section,
.questions-section,
.footer {
  padding: 0 150px 0 150px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(26, 30, 31, 0.98);
  color: var(--white);
  height: 100px;
  position: sticky;
  top: 0px;
}

.header img {
  height: 40px;
}

.header-links {
  display: flex;
  gap: 50px;
}

.title-section {
  height: 352px;
  color: var(--white);
  display: grid;
  align-content: center;
  overflow: hidden;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-position: center;
}

.paragraph-section {
  background-color: var(--grey);
  color: var(--white);
  padding-top: 50px;
  padding-bottom: 50px;
}
.paragraph-section p {
  font-size: 28px;
  width: 900px;
  margin: 0;
  padding-bottom: 50px;
}

button {
  transition-duration: 0.4s;
  border: none;
  text-decoration: none;
  background-color: transparent;
  color: var(--white);
}

button:hover {
  color: var(--blue);
}

.paragraph-section button,
.course-cards button {
  color: var(--blue);
  font-size: 20px;
  font-weight: bolder;
}

.paragraph-section button:hover,
.course-cards button:hover {
  color: rgb(47, 54, 255);
}
.courses-section {
  background-color: var(--black);
  color: var(--white);
  display: grid;
  justify-content: center;
}
.course-cards img {
  width: 300px;
  border-top-left-radius: var(--course-card-corner);
  border-top-right-radius: var(--course-card-corner);
}
.course-cards {
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-template-rows: repeat(3, 414px);
  gap: 50px;
}

.course-cards > div {
  outline: 0.5px solid var(--grey);
  border-radius: var(--course-card-corner);
}

.card {
  display: grid;
  justify-items: start;
}
.card button {
  margin-bottom: 20px;
}

.questions-section {
  background-color: var(--black);
  color: var(--white);
  padding-top: 50px;
}

.questions-section h1 {
  margin-top: 0;
  margin-bottom: 0;
}
.question-title-div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.question-sub-div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.question-div {
  border-bottom: 1px solid var(--white);
}
.question-div img,
.slider-btn-left,
.slider-btn-right,
.dot-Div {
  filter: invert(100%) sepia(0%) saturate(7439%) hue-rotate(105deg)
    brightness(113%) contrast(115%);
}
.footer {
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  background-color: var(--grey);
  color: var(--white);
  height: 128px;
  padding-top: 50px;
  padding-bottom: 50px;
}
.footer-links {
  display: grid;
}

#opened {
  transform: rotate(180deg);
}
.question-space {
  height: 15px;
}

.answer-paragraph-div {
  margin: 50px 0px 50px 20px;
}

/* slider section */
.partners-section {
  background-color: var(--grey);
  height: 250px;
}
.partners-display {
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-items: center;
  align-items: center;
}
.partner-title {
  margin: 0;
  padding-top: 50px;
  padding-bottom: 50px;
}

.slider-btn-right {
  transform: rotate(180deg);
}
.slider-btn-left {
  transform: rotate(0deg);
}

.slider-btn-left,
.slider-btn-right {
  height: 50px;
}
[class^="slider-div"] {
  display: grid;
  grid-template-columns: repeat(3, 200px);
  grid-template-rows: 70px;
  align-items: center;
  gap: 50px;
  transition: opacity 0.5s ease-in-out;
}
[class^="slider-div"] img {
  width: 200px;
}
.slider-div-2 img {
  grid-column: 2 / 3;
}

.dot-Div {
  grid-column: 2 / 3;
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 15px;
}

.partner-title {
  grid-column: 1 / 4;
  color: var(--white);
}
.dot-Div > img {
  height: 10px;
}

#dot-selected {
  filter: invert(95%) sepia(2%) saturate(10%) hue-rotate(314deg) brightness(40%)
    contrast(92%);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;KAMK;;AAEL;EACE,cAAc;EACd,uBAAuB;EACvB,uBAAuB;EACvB,wBAAwB;EACxB,wBAAwB;EACxB,yBAAyB;AAC3B;AACA;;;;;;;EAOE,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,wCAAwC;EACxC,mBAAmB;EACnB,aAAa;EACb,gBAAgB;EAChB,QAAQ;AACV;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,qBAAqB;EACrB,gBAAgB;EAChB,mDAA4C;EAC5C,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,iBAAiB;EACjB,oBAAoB;AACtB;AACA;EACE,eAAe;EACf,YAAY;EACZ,SAAS;EACT,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,qBAAqB;EACrB,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE,kBAAkB;EAClB,eAAe;EACf,mBAAmB;AACrB;;AAEA;;EAEE,uBAAuB;AACzB;AACA;EACE,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,YAAY;EACZ,iDAAiD;EACjD,kDAAkD;AACpD;AACA;EACE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;EACpC,SAAS;AACX;;AAEA;EACE,gCAAgC;EAChC,wCAAwC;AAC1C;;AAEA;EACE,aAAa;EACb,oBAAoB;AACtB;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,qCAAqC;AACvC;AACA;;;;EAIE;mCACiC;AACnC;AACA;EACE,mBAAmB;EACnB,aAAa;EACb,sCAAsC;EACtC,8BAA8B;EAC9B,6BAA6B;EAC7B,mBAAmB;EACnB,aAAa;EACb,iBAAiB;EACjB,oBAAoB;AACtB;AACA;EACE,aAAa;AACf;;AAEA;EACE,yBAAyB;AAC3B;AACA;EACE,YAAY;AACd;;AAEA;EACE,0BAA0B;AAC5B;;AAEA,mBAAmB;AACnB;EACE,6BAA6B;EAC7B,aAAa;AACf;AACA;EACE,aAAa;EACb,sCAAsC;EACtC,qBAAqB;EACrB,mBAAmB;AACrB;AACA;EACE,SAAS;EACT,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;AAC3B;AACA;EACE,uBAAuB;AACzB;;AAEA;;EAEE,YAAY;AACd;AACA;EACE,aAAa;EACb,uCAAuC;EACvC,wBAAwB;EACxB,mBAAmB;EACnB,SAAS;EACT,oCAAoC;AACtC;AACA;EACE,YAAY;AACd;AACA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sCAAsC;EACtC,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,YAAY;AACd;;AAEA;EACE;iBACe;AACjB","sourcesContent":["/* @font-face {\n    font-family: 'MyFont';\n    src: url('./my-font.woff2') format('woff2'),\n      url('./my-font.woff') format('woff');\n    font-weight: 600;\n    font-style: normal;\n  } */\n\n:root {\n  --white: white;\n  --dark: rgb(26, 30, 31);\n  --grey: rgb(43, 43, 43);\n  --blue: rgb(0, 163, 224);\n  --black: rgb(22, 22, 22);\n  --course-card-corner: 5px;\n}\n.header,\n.title-section,\n.paragraph-section,\n.courses-section,\n.partners-section,\n.questions-section,\n.footer {\n  padding: 0 150px 0 150px;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: rgba(26, 30, 31, 0.98);\n  color: var(--white);\n  height: 100px;\n  position: sticky;\n  top: 0px;\n}\n\n.header img {\n  height: 40px;\n}\n\n.header-links {\n  display: flex;\n  gap: 50px;\n}\n\n.title-section {\n  height: 352px;\n  color: var(--white);\n  display: grid;\n  align-content: center;\n  overflow: hidden;\n  background: url(\"./photos/title-photo3.jpg\");\n  background-size: cover;\n  background-position: center;\n}\n\n.paragraph-section {\n  background-color: var(--grey);\n  color: var(--white);\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n.paragraph-section p {\n  font-size: 28px;\n  width: 900px;\n  margin: 0;\n  padding-bottom: 50px;\n}\n\nbutton {\n  transition-duration: 0.4s;\n  border: none;\n  text-decoration: none;\n  background-color: transparent;\n  color: var(--white);\n}\n\nbutton:hover {\n  color: var(--blue);\n}\n\n.paragraph-section button,\n.course-cards button {\n  color: var(--blue);\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.paragraph-section button:hover,\n.course-cards button:hover {\n  color: rgb(47, 54, 255);\n}\n.courses-section {\n  background-color: var(--black);\n  color: var(--white);\n  display: grid;\n  justify-content: center;\n}\n.course-cards img {\n  width: 300px;\n  border-top-left-radius: var(--course-card-corner);\n  border-top-right-radius: var(--course-card-corner);\n}\n.course-cards {\n  display: grid;\n  grid-template-columns: repeat(3, 300px);\n  grid-template-rows: repeat(3, 414px);\n  gap: 50px;\n}\n\n.course-cards > div {\n  outline: 0.5px solid var(--grey);\n  border-radius: var(--course-card-corner);\n}\n\n.card {\n  display: grid;\n  justify-items: start;\n}\n.card button {\n  margin-bottom: 20px;\n}\n\n.questions-section {\n  background-color: var(--black);\n  color: var(--white);\n  padding-top: 50px;\n}\n\n.questions-section h1 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.question-title-div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.question-sub-div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.question-div {\n  border-bottom: 1px solid var(--white);\n}\n.question-div img,\n.slider-btn-left,\n.slider-btn-right,\n.dot-Div {\n  filter: invert(100%) sepia(0%) saturate(7439%) hue-rotate(105deg)\n    brightness(113%) contrast(115%);\n}\n.footer {\n  align-items: center;\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  justify-content: space-between;\n  background-color: var(--grey);\n  color: var(--white);\n  height: 128px;\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n.footer-links {\n  display: grid;\n}\n\n#opened {\n  transform: rotate(180deg);\n}\n.question-space {\n  height: 15px;\n}\n\n.answer-paragraph-div {\n  margin: 50px 0px 50px 20px;\n}\n\n/* slider section */\n.partners-section {\n  background-color: var(--grey);\n  height: 250px;\n}\n.partners-display {\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  justify-items: center;\n  align-items: center;\n}\n.partner-title {\n  margin: 0;\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n\n.slider-btn-right {\n  transform: rotate(180deg);\n}\n.slider-btn-left {\n  transform: rotate(0deg);\n}\n\n.slider-btn-left,\n.slider-btn-right {\n  height: 50px;\n}\n[class^=\"slider-div\"] {\n  display: grid;\n  grid-template-columns: repeat(3, 200px);\n  grid-template-rows: 70px;\n  align-items: center;\n  gap: 50px;\n  transition: opacity 0.5s ease-in-out;\n}\n[class^=\"slider-div\"] img {\n  width: 200px;\n}\n.slider-div-2 img {\n  grid-column: 2 / 3;\n}\n\n.dot-Div {\n  grid-column: 2 / 3;\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  gap: 15px;\n}\n\n.partner-title {\n  grid-column: 1 / 4;\n  color: var(--white);\n}\n.dot-Div > img {\n  height: 10px;\n}\n\n#dot-selected {\n  filter: invert(95%) sepia(2%) saturate(10%) hue-rotate(314deg) brightness(40%)\n    contrast(92%);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/cardFactory.js":
/*!****************************!*\
  !*** ./src/cardFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   card: () => (/* binding */ card)
/* harmony export */ });
function card(image, title, status, button) {
  const coursesDiv = document.querySelector(".course-cards");
  let cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  coursesDiv.appendChild(cardDiv);

  let cardContentDiv = document.createElement("div");

  let cardPhoto = new Image();
  cardPhoto.src = image;
  let cardTitle = document.createElement("h2");
  cardTitle.textContent = `${title}`;
  let cardStatus = document.createElement("h3");
  cardStatus.textContent = `${status}`;
  let cardButton = document.createElement("button");
  cardButton.textContent = `${button}`;

  cardDiv.appendChild(cardContentDiv);
  cardContentDiv.appendChild(cardPhoto);
  cardContentDiv.appendChild(cardTitle);
  cardContentDiv.appendChild(cardStatus);
  cardDiv.appendChild(cardButton);
}




/***/ }),

/***/ "./src/domContent.js":
/*!***************************!*\
  !*** ./src/domContent.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DomContent: () => (/* binding */ DomContent)
/* harmony export */ });
/* harmony import */ var _photos_courses_iso_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photos/courses/iso.jpg */ "./src/photos/courses/iso.jpg");
/* harmony import */ var _photos_courses_react_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photos/courses/react.jpg */ "./src/photos/courses/react.jpg");
/* harmony import */ var _photos_courses_intro_python_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photos/courses/intro-python.jpg */ "./src/photos/courses/intro-python.jpg");
/* harmony import */ var _photos_courses_advan_python_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photos/courses/advan-python.jpg */ "./src/photos/courses/advan-python.jpg");
/* harmony import */ var _photos_courses_cybersecurity_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./photos/courses/cybersecurity.jpg */ "./src/photos/courses/cybersecurity.jpg");
/* harmony import */ var _photos_courses_tot_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./photos/courses/tot.jpg */ "./src/photos/courses/tot.jpg");
/* harmony import */ var _photos_courses_blockchain_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./photos/courses/blockchain.jpg */ "./src/photos/courses/blockchain.jpg");
/* harmony import */ var _photos_courses_devops_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./photos/courses/devops.jpg */ "./src/photos/courses/devops.jpg");
/* harmony import */ var _photos_courses_security_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./photos/courses/security.jpg */ "./src/photos/courses/security.jpg");
/* harmony import */ var _cardFactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cardFactory */ "./src/cardFactory.js");
/* harmony import */ var _photos_footer_tbc_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./photos/footer/tbc.png */ "./src/photos/footer/tbc.png");
/* harmony import */ var _photos_footer_fb_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./photos/footer/fb.png */ "./src/photos/footer/fb.png");
/* harmony import */ var _photos_footer_youtube_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./photos/footer/youtube.png */ "./src/photos/footer/youtube.png");
/* harmony import */ var _photos_tbcAcdLogo_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./photos/tbcAcdLogo.svg */ "./src/photos/tbcAcdLogo.svg");
/* harmony import */ var _qaFactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./qaFactory */ "./src/qaFactory.js");
/* harmony import */ var _photos_question_expend_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./photos/question-expend.svg */ "./src/photos/question-expend.svg");
/* harmony import */ var _photos_sliderIcon_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./photos/sliderIcon.svg */ "./src/photos/sliderIcon.svg");
/* harmony import */ var _photos_slider_dot_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./photos/slider-dot.svg */ "./src/photos/slider-dot.svg");
/* harmony import */ var _sliderFunction__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sliderFunction */ "./src/sliderFunction.js");
/* harmony import */ var _photos_partners_slid1_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./photos/partners/slid1.png */ "./src/photos/partners/slid1.png");
/* harmony import */ var _photos_partners_slid2_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./photos/partners/slid2.png */ "./src/photos/partners/slid2.png");
/* harmony import */ var _photos_partners_slid3_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./photos/partners/slid3.png */ "./src/photos/partners/slid3.png");
/* harmony import */ var _photos_partners_slid4_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./photos/partners/slid4.png */ "./src/photos/partners/slid4.png");
/* harmony import */ var _photos_partners_slid5_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./photos/partners/slid5.png */ "./src/photos/partners/slid5.png");
/* harmony import */ var _photos_partners_slid6_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./photos/partners/slid6.png */ "./src/photos/partners/slid6.png");
/* harmony import */ var _photos_partners_slid7_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./photos/partners/slid7.png */ "./src/photos/partners/slid7.png");
// import titlePhotoImport from "./photos/title-photo.jpg";



























function DomContent() {
  const containerSelect = document.querySelector(".site-container");

  // making main divs
  const header = document.createElement("div");
  header.classList.add("header");

  const title = document.createElement("div");
  title.classList.add("title-section");

  const paragraph = document.createElement("div");
  paragraph.classList.add("paragraph-section");

  const courses = document.createElement("div");
  courses.classList.add("courses-section");

  const partners = document.createElement("div");
  partners.classList.add("partners-section");

  const questions = document.createElement("div");
  questions.classList.add("questions-section");

  const footer = document.createElement("div");
  footer.classList.add("footer");

  containerSelect.appendChild(header);
  containerSelect.appendChild(title);
  containerSelect.appendChild(paragraph);
  containerSelect.appendChild(courses);
  containerSelect.appendChild(partners);
  containerSelect.appendChild(questions);
  containerSelect.appendChild(footer);

  // dom header content
  const logo = new Image();
  logo.src = _photos_tbcAcdLogo_svg__WEBPACK_IMPORTED_MODULE_13__;

  const headerLinks = document.createElement("div");
  headerLinks.classList.add("header-links");

  header.appendChild(logo);
  header.appendChild(headerLinks);

  const main = document.createElement("button");
  main.textContent = "მთავარი";

  const tbcIt = document.createElement("button");
  tbcIt.textContent = "TBC IT";

  const tbcXusaid = document.createElement("button");
  tbcXusaid.textContent = "TBC x USAID";

  const risk = document.createElement("button");
  risk.textContent = "რისკები";

  headerLinks.appendChild(main);
  headerLinks.appendChild(tbcIt);
  headerLinks.appendChild(tbcXusaid);
  headerLinks.appendChild(risk);

  // title section dom
  // const titlePhoto = new Image();
  // titlePhoto.src = titlePhotoImport;

  // title.appendChild(titlePhoto);
  // image;
  const titleText = document.createElement("h1");
  titleText.textContent = "TBC x USAID";

  const titleText2 = document.createElement("h2");
  titleText2.textContent = "ტექნოლოგიური განათლებისთვის";

  title.appendChild(titleText);
  title.appendChild(titleText2);

  // paragraph section dom
  const paragraphText = document.createElement("p");
  paragraphText.textContent =
    "„ TBC x USAID - ტექნოლოგიური განათლებისთვის “ პროგრამა  საინფორმაციო ტექნოლოგიებით დაინტერესებულ ადამიანებს გთავაზობთ სრულად დაფინანსებულ ონლაინ საგანმანათლებლო პრაქტიკულ კურსებს  სხვადასხვა ICT მიმართულებით. წარმატებულ კურსდამთავრებულებს ეძლევათ შესაძლებლობა დასაქმდნენ თიბისისა და მის პარტნიორ კომპანიებში.";

  const paragraphLink = document.createElement("button");
  paragraphLink.textContent = "გაიგე მეტი";

  paragraph.appendChild(paragraphText);
  paragraph.appendChild(paragraphLink);

  // cards section
  const courseTitleDiv = document.createElement("h1");
  courseTitleDiv.classList.add("courses-title");
  courseTitleDiv.textContent = "სასწავლო კურსები";
  courses.appendChild(courseTitleDiv);
  ("./photos/partners/slid1.png");
  const courseCardDiv = document.createElement("div");
  courseCardDiv.classList.add("course-cards");
  courses.appendChild(courseCardDiv);

  const isoCard = (0,_cardFactory__WEBPACK_IMPORTED_MODULE_9__.card)(
    _photos_courses_iso_jpg__WEBPACK_IMPORTED_MODULE_0__,
    "iOS Development",
    "რეგისტრაცია დასრულებულია",
    "კურსის დეტალები",
  );
  const reactCard = (0,_cardFactory__WEBPACK_IMPORTED_MODULE_9__.card)(
    _photos_courses_react_jpg__WEBPACK_IMPORTED_MODULE_1__,
    "Reacte",
    "რეგისტრაცია დასრულებულია",
    "კურსის დეტალები",
  );
  const intrPythonCard = (0,_cardFactory__WEBPACK_IMPORTED_MODULE_9__.card)(
    _photos_courses_intro_python_jpg__WEBPACK_IMPORTED_MODULE_2__,
    "Intro to Python",
    "რეგისტრაცია დასრულებულია",
    "კურსის დეტალები",
  );
  const advancedPythonCard = (0,_cardFactory__WEBPACK_IMPORTED_MODULE_9__.card)(
    _photos_courses_advan_python_jpg__WEBPACK_IMPORTED_MODULE_3__,
    "Advanced Python",
    "რეგისტრაცია დასრულებულია",
    "კურსის დეტალები",
  );
  const cybersecurityCard = (0,_cardFactory__WEBPACK_IMPORTED_MODULE_9__.card)(
    _photos_courses_cybersecurity_jpg__WEBPACK_IMPORTED_MODULE_4__,
    "Advanced Cybersecurity Course",
    "რეგისტრაცია დასრულებულია",
    "კურსის დეტალები",
  );
  const totCard = (0,_cardFactory__WEBPACK_IMPORTED_MODULE_9__.card)(
    _photos_courses_tot_jpg__WEBPACK_IMPORTED_MODULE_5__,
    "ToT - Training of Trainers",
    "რეგისტრაცია დასრულებულია",
    "კურსის დეტალები",
  );
  const BlockchainCard = (0,_cardFactory__WEBPACK_IMPORTED_MODULE_9__.card)(
    _photos_courses_blockchain_jpg__WEBPACK_IMPORTED_MODULE_6__,
    "Blockchain",
    "რეგისტრაცია დასრულებულია",
    "კურსის დეტალები",
  );
  const DevOpsCard = (0,_cardFactory__WEBPACK_IMPORTED_MODULE_9__.card)(
    _photos_courses_devops_jpg__WEBPACK_IMPORTED_MODULE_7__,
    "DevOps",
    "რეგისტრაცია დასრულებულია",
    "კურსის დეტალები",
  );
  const SecurityCard = (0,_cardFactory__WEBPACK_IMPORTED_MODULE_9__.card)(
    _photos_courses_security_jpg__WEBPACK_IMPORTED_MODULE_8__,
    "Information Security Governance",
    "რეგისტრაცია დასრულებულია",
    "კურსის დეტალები",
  );

  // slider section

  // Define image paths
  const slid1 = new Image();
  slid1.src = _photos_partners_slid1_png__WEBPACK_IMPORTED_MODULE_19__;

  const slid2 = new Image();
  slid2.src = _photos_partners_slid2_png__WEBPACK_IMPORTED_MODULE_20__;

  const slid3 = new Image();
  slid3.src = _photos_partners_slid3_png__WEBPACK_IMPORTED_MODULE_21__;

  const slid4 = new Image();
  slid4.src = _photos_partners_slid4_png__WEBPACK_IMPORTED_MODULE_22__;

  const slid5 = new Image();
  slid5.src = _photos_partners_slid5_png__WEBPACK_IMPORTED_MODULE_23__;

  const slid6 = new Image();
  slid6.src = _photos_partners_slid6_png__WEBPACK_IMPORTED_MODULE_24__;

  const slid7 = new Image();
  slid7.src = _photos_partners_slid7_png__WEBPACK_IMPORTED_MODULE_25__;

  const logos = [[slid1, slid2, slid3], [slid4, slid5, slid6], [slid7]];
  (0,_sliderFunction__WEBPACK_IMPORTED_MODULE_18__.slider)(logos, _photos_sliderIcon_svg__WEBPACK_IMPORTED_MODULE_16__, _photos_slider_dot_svg__WEBPACK_IMPORTED_MODULE_17__);

  // question section

  const questionTitleDiv = document.createElement("div");
  questionTitleDiv.classList.add("question-title-div");
  const questionTitle = document.createElement("h1");
  questionTitle.textContent = "ხშირად დასმული კითხვები";

  const questionTitleBtn = document.createElement("button");
  questionTitleBtn.textContent = "ყველა კითხვა";

  questions.appendChild(questionTitleDiv);
  questionTitleDiv.appendChild(questionTitle);
  questionTitleDiv.appendChild(questionTitleBtn);

  const question1 = (0,_qaFactory__WEBPACK_IMPORTED_MODULE_14__.questionsAndAnswers)(
    "როგორ ხდება კურსებზე რეგისტრაცია და შერჩევა?",
    _photos_question_expend_svg__WEBPACK_IMPORTED_MODULE_15__,
    "answer I",
  );

  const question2 = (0,_qaFactory__WEBPACK_IMPORTED_MODULE_14__.questionsAndAnswers)(
    "შემიძლია თუ არა ერთზე მეტ კურსზე რეგისტრაცია?",
    _photos_question_expend_svg__WEBPACK_IMPORTED_MODULE_15__,
    "TBC X USAID ტექნოლოგიური განათლებისთვის პროგრამაში თითოეულ კანდიდატს აქვს მხოლოდ ერთი კურსის გავლის შესაძლებლობა. გარდა Information Security და Python კურსებისა, სადაც Basic დონის გავლის შემდეგ შესაძლებელია სწავლის გაგრძელება Advance დონეზე.",
  );
  const question3 = (0,_qaFactory__WEBPACK_IMPORTED_MODULE_14__.questionsAndAnswers)(
    "რა ღირს სწავლა პროგრამის ფარგლებში?",
    _photos_question_expend_svg__WEBPACK_IMPORTED_MODULE_15__,
    "პროგრამის ფარგლებში კურსებზე სწავლა სრულიად დაფინანსებულია თიბისი ბანკისა და USAID-ის მიერ.",
  );

  // footer section
  const footerTextDiv = document.createElement("div");
  footerTextDiv.classList.add("footer-text");

  const footerLogo = new Image();
  footerLogo.src = _photos_footer_tbc_png__WEBPACK_IMPORTED_MODULE_10__;

  const footerText = document.createElement("p");
  footerText.textContent = "© 2023 ყველა უფლება დაცულია";

  const footerTextBtn = document.createElement("button");
  footerTextBtn.textContent = "წესები და პირობები";

  footerTextDiv.appendChild(footerLogo);
  footerTextDiv.appendChild(footerText);
  footerTextDiv.appendChild(footerTextBtn);

  const footerLinksDiv = document.createElement("div");
  footerLinksDiv.classList.add("footer-links");

  const footerLinkSocDiv = document.createElement("div");

  const fbLink = new Image();
  fbLink.src = _photos_footer_fb_png__WEBPACK_IMPORTED_MODULE_11__;

  const youtubeLink = new Image();
  youtubeLink.src = _photos_footer_youtube_png__WEBPACK_IMPORTED_MODULE_12__;

  const textUsBtn = document.createElement("button");
  textUsBtn.textContent = "მოგვწერეთ";

  footerLinkSocDiv.appendChild(fbLink);
  footerLinkSocDiv.appendChild(youtubeLink);

  footerLinksDiv.appendChild(footerLinkSocDiv);
  footerLinksDiv.appendChild(textUsBtn);

  footer.appendChild(footerTextDiv);
  footer.appendChild(footerLinksDiv);
}




/***/ }),

/***/ "./src/qaFactory.js":
/*!**************************!*\
  !*** ./src/qaFactory.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   questionsAndAnswers: () => (/* binding */ questionsAndAnswers)
/* harmony export */ });
function questionsAndAnswers(question, icon, answer) {
  const questionSectionSelector = document.querySelector(".questions-section");

  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question-div");

  const questionSubDiv = document.createElement("div");
  questionSubDiv.classList.add("question-sub-div");

  const questionTitle = document.createElement("h3");
  questionTitle.textContent = `${question}`;
  const questionIcon = new Image();
  questionIcon.src = icon;

  questionSubDiv.appendChild(questionTitle);
  questionSubDiv.appendChild(questionIcon);
  questionDiv.appendChild(questionSubDiv);
  questionSectionSelector.appendChild(questionDiv);

  // giving button function to open and close answers
  let answerOpen = false; // Variable to track answer state

  questionIcon.addEventListener("click", (e) => {
    const answerParagraph = document.querySelector(".answer-paragraph");

    if (!answerOpen) {
      // Answer is closed, create and append it

      if (answer !== "answer I") {
        const questionAnswer = document.createElement("p");
        questionAnswer.classList.add("answer-paragraph");
        questionAnswer.textContent = `${answer}`;
        questionDiv.appendChild(questionAnswer);
      } else {
        // adding firts long qestion paragraph
        const questionAnswer = document.createElement("div");
        questionAnswer.classList.add("answer-paragraph");
        questionDiv.appendChild(questionAnswer);

        const questionAnswerDiv = document.createElement("div");
        questionAnswerDiv.classList.add("answer-paragraph-div");

        const questionAnswertext = document.createElement("p");
        questionAnswertext.textContent = `ურსზე რეგისტრაციისთვის უნდა გაიარო რამდენიმე ეტაპი:`;
        questionAnswer.appendChild(questionAnswertext);
        questionAnswer.appendChild(questionAnswerDiv);

        function createAndAppend(tag, text, parent) {
          const element = document.createElement(tag);
          element.textContent = text;
          if (parent) {
            parent.appendChild(element);
          }
          return element;
        }

        const stage1 = createAndAppend("div", "", questionAnswerDiv);
        createAndAppend("strong", "I ეტაპი", stage1);
        createAndAppend(
          "span",
          " - პირველ ეტაპზე საჭიროა, შეავსო სასურველი კურსისთვის განკუთვნილი სარეგისტრაციო ფორმა, რომელიც განთავსებულია კურსის შიდა გვერდზე. კურსზე რეგისტრაციის დასრულების შემდეგ დაიწყება შემოსული განცხადებების გადარჩევა.",
          stage1,
        );

        const stage2 = createAndAppend("div", "", questionAnswerDiv);
        createAndAppend("strong", "II ეტაპი", stage2);
        createAndAppend(
          "span",
          " - შერჩევის მეორე ეტაპი კურსების მიხედვით განსხვავებულია, ზოგიერთი კურსისთვის მოიცავს პრე-ტესტს, ზოგიერთ კურსზე კი უნარების ტესტს, სადაც მინიმალური ზღვარის გადალახვის შემთხვევაში გადახვალ შერჩევის შემდეგ ეტაპზე.",
          stage2,
        );

        const stage3 = createAndAppend("div", "", questionAnswerDiv);
        createAndAppend("strong", "III ეტაპი", stage3);
        createAndAppend(
          "span",
          " - მესამე ეტაპი კურსების მიხედვით განსხვავდება: Advance კურსებზე, სადაც მოითხოვება გარკვეული ტექნიკური ცოდნა, მონაწილეებმა უნდა დაწერონ ტექნიკური ტესტი ცოდნის დონის შესამოწმებლად, ხოლო კურსებზე, სადაც რაიმე ტიპის წინასწარი ცოდნა მოთხოვნილი არ არის უნდა შეასრულოთ ტექნიკური დავალება, რაც",
          stage3,
        );

        const stage4 = createAndAppend("div", "", questionAnswerDiv);
        createAndAppend("strong", "IV ეტაპი", stage4);
        createAndAppend(
          "span",
          " - შერჩევის ბოლო მეოთხე ეტაპი მოიცავს გასაუბრებას შესარჩევ კომისიასთან. გასაუბრების წარმატებით გავლის შემთხვევაში ჩაირიცხებით კურსზე და გაფორმდება შესაბამისი ხელშეკრულება.",
          stage4,
        );

        const questionAnswertext2 = document.createElement("p");
        questionAnswertext2.textContent = `* სანამ კურსზე დარეგისტრირდები მნიშვნელოვანია, ყურადღებით წაიკითხო კურსის აღწერა, ნახო რას ისწავლი კურსის განმავლობაში და გაიგო გააჩნია თუ არა კურსს დასწრების წინაპირობა.`;
        questionAnswer.appendChild(questionAnswertext2);
      }

      e.target.id = "opened";
      answerOpen = true; // Set answer state to open
    } else {
      // Answer is open, remove it
      e.target.id = "";
      questionDiv.removeChild(answerParagraph);
      answerOpen = false; // Set answer state to closed
    }
  });
}




/***/ }),

/***/ "./src/sliderFunction.js":
/*!*******************************!*\
  !*** ./src/sliderFunction.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   slider: () => (/* binding */ slider)
/* harmony export */ });
function slider(logos, icon, dot, autoChangeInterval = 8000) {
  const container = document.querySelector(".partners-section");

  const sliderBtnLeft = new Image();
  sliderBtnLeft.src = icon;
  sliderBtnLeft.classList.add("slider-btn-left");

  const sliderBtnRight = new Image();
  sliderBtnRight.src = icon;
  sliderBtnRight.classList.add("slider-btn-right");

  const title = document.createElement("h1");
  title.classList.add("partner-title");
  title.textContent = "პროექტის პარტნიორები";

  container.appendChild(title);

  const containerDisplay = document.createElement("div");
  containerDisplay.classList.add("partners-display");

  container.appendChild(containerDisplay);
  containerDisplay.appendChild(sliderBtnLeft);

  const sliderDisplayDiv = document.createElement("div");
  containerDisplay.appendChild(sliderDisplayDiv);
  let n = 0;
  sliderPage(n);

  containerDisplay.appendChild(sliderBtnRight);

  function sliderPage(n) {
    const sliderDiv = document.createElement("div");
    sliderDiv.classList.add(`slider-div-${n}`);
    sliderDiv.classList.add("slider-div"); // Adding a common class for styling
    sliderDisplayDiv.appendChild(sliderDiv);

    // Set initial opacity to 0 for fade-in effect
    sliderDiv.style.opacity = 0;

    if (n !== 2) {
      for (let i = 0; i <= 2; i++) {
        sliderDiv.appendChild(logos[n][i]);
      }
    } else {
      sliderDiv.appendChild(logos[2][0]);
    }

    // Triggering reflow to apply initial opacity
    sliderDiv.offsetHeight;

    // Set opacity to 1 for fade-in effect
    sliderDiv.style.opacity = 1;
  }

  // Function to change slide with fade-out and fade-in effect
  function changeSlide(btnRight) {
    const currentSlide = sliderDisplayDiv.lastElementChild;

    // Set opacity to 0 for fade-out effect
    currentSlide.style.opacity = 0;

    setTimeout(() => {
      // Remove the current slide after fade-out
      sliderDisplayDiv.removeChild(currentSlide);

      // Add the new slide with fade-in effect
      if (btnRight) {
        if (n !== 2) {
          n += 1;
        } else {
          n = 0;
        }
      } else if (n !== 0) {
        n -= 1;
      } else {
        n = 2;
      }
      sliderPage(n);
      dotId(n);
    }, 500); // 500ms is the duration of the fade-out transition
  }

  // Function to handle dot indicators
  function dotId(n) {
    for (let i = 0; i <= 2; ++i) {
      const selectedDot = document.querySelector(`.slider-dot-${i}`);
      selectedDot.id = i === n ? "dot-selected" : "";
    }
  }

  // Function to start auto change
  function startAutoChange() {
    return setInterval(() => {
      changeSlide(true); // Auto change to the next slide
    }, autoChangeInterval);
  }

  let autoChangeTimer = startAutoChange(); // Start auto change

  // Event listeners for manual navigation
  sliderBtnRight.addEventListener("click", () => {
    clearInterval(autoChangeTimer); // Stop auto change when manually navigating
    changeSlide(true);
    autoChangeTimer = startAutoChange(); // Resume auto change after manual navigation
  });

  sliderBtnLeft.addEventListener("click", () => {
    clearInterval(autoChangeTimer);
    changeSlide(false);
    autoChangeTimer = startAutoChange();
  });

  // Dot section
  const dotDiv = document.createElement("div");
  dotDiv.classList.add("dot-Div");
  containerDisplay.appendChild(dotDiv);

  for (let i = 0; i <= 2; i++) {
    const sliderDot = new Image();
    sliderDot.src = dot;
    sliderDot.classList.add(`slider-dot-${i}`);
    dotDiv.appendChild(sliderDot);
  }

  dotId(n);
}




/***/ }),

/***/ "./src/photos/courses/advan-python.jpg":
/*!*********************************************!*\
  !*** ./src/photos/courses/advan-python.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dab633b24e74e3c46e4d.jpg";

/***/ }),

/***/ "./src/photos/courses/blockchain.jpg":
/*!*******************************************!*\
  !*** ./src/photos/courses/blockchain.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e449eaeda229f114138c.jpg";

/***/ }),

/***/ "./src/photos/courses/cybersecurity.jpg":
/*!**********************************************!*\
  !*** ./src/photos/courses/cybersecurity.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "56d8268918d037b9d196.jpg";

/***/ }),

/***/ "./src/photos/courses/devops.jpg":
/*!***************************************!*\
  !*** ./src/photos/courses/devops.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d9c61ca08855466c84d.jpg";

/***/ }),

/***/ "./src/photos/courses/intro-python.jpg":
/*!*********************************************!*\
  !*** ./src/photos/courses/intro-python.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fca87e9d965c68b9be52.jpg";

/***/ }),

/***/ "./src/photos/courses/iso.jpg":
/*!************************************!*\
  !*** ./src/photos/courses/iso.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "755317f22dbef8034a72.jpg";

/***/ }),

/***/ "./src/photos/courses/react.jpg":
/*!**************************************!*\
  !*** ./src/photos/courses/react.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b05dca034a68a67b28c0.jpg";

/***/ }),

/***/ "./src/photos/courses/security.jpg":
/*!*****************************************!*\
  !*** ./src/photos/courses/security.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fad1b75994419d05e6f8.jpg";

/***/ }),

/***/ "./src/photos/courses/tot.jpg":
/*!************************************!*\
  !*** ./src/photos/courses/tot.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c46d8936bf8bcc9495d7.jpg";

/***/ }),

/***/ "./src/photos/footer/fb.png":
/*!**********************************!*\
  !*** ./src/photos/footer/fb.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ad8284e4ad573a7c8e34.png";

/***/ }),

/***/ "./src/photos/footer/tbc.png":
/*!***********************************!*\
  !*** ./src/photos/footer/tbc.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c5e45513fa690d90ca5d.png";

/***/ }),

/***/ "./src/photos/footer/youtube.png":
/*!***************************************!*\
  !*** ./src/photos/footer/youtube.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c9d12a72cdf417d71a3.png";

/***/ }),

/***/ "./src/photos/partners/slid1.png":
/*!***************************************!*\
  !*** ./src/photos/partners/slid1.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34b1b5f74cb20704a036.png";

/***/ }),

/***/ "./src/photos/partners/slid2.png":
/*!***************************************!*\
  !*** ./src/photos/partners/slid2.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3a5db590373e53093b5a.png";

/***/ }),

/***/ "./src/photos/partners/slid3.png":
/*!***************************************!*\
  !*** ./src/photos/partners/slid3.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4fe2d8cf54d3daad5a2a.png";

/***/ }),

/***/ "./src/photos/partners/slid4.png":
/*!***************************************!*\
  !*** ./src/photos/partners/slid4.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "96d6bd224ecefbe813f0.png";

/***/ }),

/***/ "./src/photos/partners/slid5.png":
/*!***************************************!*\
  !*** ./src/photos/partners/slid5.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "444b5f15d7fd3aea563e.png";

/***/ }),

/***/ "./src/photos/partners/slid6.png":
/*!***************************************!*\
  !*** ./src/photos/partners/slid6.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "128e5ea7d0370b896cfd.png";

/***/ }),

/***/ "./src/photos/partners/slid7.png":
/*!***************************************!*\
  !*** ./src/photos/partners/slid7.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e537c0a21d849b64b191.png";

/***/ }),

/***/ "./src/photos/question-expend.svg":
/*!****************************************!*\
  !*** ./src/photos/question-expend.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "730839144c126385607b.svg";

/***/ }),

/***/ "./src/photos/slider-dot.svg":
/*!***********************************!*\
  !*** ./src/photos/slider-dot.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e15b8cffef131911431f.svg";

/***/ }),

/***/ "./src/photos/sliderIcon.svg":
/*!***********************************!*\
  !*** ./src/photos/sliderIcon.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6a7a9f38da146eed22f9.svg";

/***/ }),

/***/ "./src/photos/tbcAcdLogo.svg":
/*!***********************************!*\
  !*** ./src/photos/tbcAcdLogo.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "484903aea8b060ccc935.svg";

/***/ }),

/***/ "./src/photos/title-photo3.jpg":
/*!*************************************!*\
  !*** ./src/photos/title-photo3.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "da40afe7a5dd7c3ad418.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _domContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domContent */ "./src/domContent.js");



(0,_domContent__WEBPACK_IMPORTED_MODULE_1__.DomContent)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsK0hBQTRDO0FBQ3hGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1DQUFtQztBQUN2RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxxRkFBcUYsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlB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V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDcUI7O0FBRTFDLHVEQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2NhcmRGYWN0b3J5LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2RvbUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvcWFGYWN0b3J5LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3NsaWRlckZ1bmN0aW9uLmpzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vcGhvdG9zL3RpdGxlLXBob3RvMy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcbiAgICBzcmM6IHVybCgnLi9teS1mb250LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcuL215LWZvbnQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9ICovXG5cbjpyb290IHtcbiAgLS13aGl0ZTogd2hpdGU7XG4gIC0tZGFyazogcmdiKDI2LCAzMCwgMzEpO1xuICAtLWdyZXk6IHJnYig0MywgNDMsIDQzKTtcbiAgLS1ibHVlOiByZ2IoMCwgMTYzLCAyMjQpO1xuICAtLWJsYWNrOiByZ2IoMjIsIDIyLCAyMik7XG4gIC0tY291cnNlLWNhcmQtY29ybmVyOiA1cHg7XG59XG4uaGVhZGVyLFxuLnRpdGxlLXNlY3Rpb24sXG4ucGFyYWdyYXBoLXNlY3Rpb24sXG4uY291cnNlcy1zZWN0aW9uLFxuLnBhcnRuZXJzLXNlY3Rpb24sXG4ucXVlc3Rpb25zLXNlY3Rpb24sXG4uZm9vdGVyIHtcbiAgcGFkZGluZzogMCAxNTBweCAwIDE1MHB4O1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI2LCAzMCwgMzEsIDAuOTgpO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDBweDtcbn1cblxuLmhlYWRlciBpbWcge1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5oZWFkZXItbGlua3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDUwcHg7XG59XG5cbi50aXRsZS1zZWN0aW9uIHtcbiAgaGVpZ2h0OiAzNTJweDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLnBhcmFncmFwaC1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cbi5wYXJhZ3JhcGgtc2VjdGlvbiBwIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICB3aWR0aDogOTAwcHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xufVxuXG4ucGFyYWdyYXBoLXNlY3Rpb24gYnV0dG9uLFxuLmNvdXJzZS1jYXJkcyBidXR0b24ge1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLnBhcmFncmFwaC1zZWN0aW9uIGJ1dHRvbjpob3Zlcixcbi5jb3Vyc2UtY2FyZHMgYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IHJnYig0NywgNTQsIDI1NSk7XG59XG4uY291cnNlcy1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb3Vyc2UtY2FyZHMgaW1nIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YXIoLS1jb3Vyc2UtY2FyZC1jb3JuZXIpO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogdmFyKC0tY291cnNlLWNhcmQtY29ybmVyKTtcbn1cbi5jb3Vyc2UtY2FyZHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAzMDBweCk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDQxNHB4KTtcbiAgZ2FwOiA1MHB4O1xufVxuXG4uY291cnNlLWNhcmRzID4gZGl2IHtcbiAgb3V0bGluZTogMC41cHggc29saWQgdmFyKC0tZ3JleSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvdXJzZS1jYXJkLWNvcm5lcik7XG59XG5cbi5jYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1pdGVtczogc3RhcnQ7XG59XG4uY2FyZCBidXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucXVlc3Rpb25zLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4ucXVlc3Rpb25zLXNlY3Rpb24gaDEge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnF1ZXN0aW9uLXRpdGxlLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5xdWVzdGlvbi1zdWItZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnF1ZXN0aW9uLWRpdiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS13aGl0ZSk7XG59XG4ucXVlc3Rpb24tZGl2IGltZyxcbi5zbGlkZXItYnRuLWxlZnQsXG4uc2xpZGVyLWJ0bi1yaWdodCxcbi5kb3QtRGl2IHtcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0MzklKSBodWUtcm90YXRlKDEwNWRlZylcbiAgICBicmlnaHRuZXNzKDExMyUpIGNvbnRyYXN0KDExNSUpO1xufVxuLmZvb3RlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBoZWlnaHQ6IDEyOHB4O1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG4uZm9vdGVyLWxpbmtzIHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuI29wZW5lZCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG4ucXVlc3Rpb24tc3BhY2Uge1xuICBoZWlnaHQ6IDE1cHg7XG59XG5cbi5hbnN3ZXItcGFyYWdyYXBoLWRpdiB7XG4gIG1hcmdpbjogNTBweCAwcHggNTBweCAyMHB4O1xufVxuXG4vKiBzbGlkZXIgc2VjdGlvbiAqL1xuLnBhcnRuZXJzLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cbi5wYXJ0bmVycy1kaXNwbGF5IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgYXV0byk7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wYXJ0bmVyLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG5cbi5zbGlkZXItYnRuLXJpZ2h0IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cbi5zbGlkZXItYnRuLWxlZnQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbn1cblxuLnNsaWRlci1idG4tbGVmdCxcbi5zbGlkZXItYnRuLXJpZ2h0IHtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuW2NsYXNzXj1cInNsaWRlci1kaXZcIl0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAyMDBweCk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNzBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1MHB4O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5bY2xhc3NePVwic2xpZGVyLWRpdlwiXSBpbWcge1xuICB3aWR0aDogMjAwcHg7XG59XG4uc2xpZGVyLWRpdi0yIGltZyB7XG4gIGdyaWQtY29sdW1uOiAyIC8gMztcbn1cblxuLmRvdC1EaXYge1xuICBncmlkLWNvbHVtbjogMiAvIDM7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIGF1dG8pO1xuICBnYXA6IDE1cHg7XG59XG5cbi5wYXJ0bmVyLXRpdGxlIHtcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuLmRvdC1EaXYgPiBpbWcge1xuICBoZWlnaHQ6IDEwcHg7XG59XG5cbiNkb3Qtc2VsZWN0ZWQge1xuICBmaWx0ZXI6IGludmVydCg5NSUpIHNlcGlhKDIlKSBzYXR1cmF0ZSgxMCUpIGh1ZS1yb3RhdGUoMzE0ZGVnKSBicmlnaHRuZXNzKDQwJSlcbiAgICBjb250cmFzdCg5MiUpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7S0FNSzs7QUFFTDtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4Qix3QkFBd0I7RUFDeEIseUJBQXlCO0FBQzNCO0FBQ0E7Ozs7Ozs7RUFPRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qix3Q0FBd0M7RUFDeEMsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsbURBQTRDO0VBQzVDLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osU0FBUztFQUNULG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFlBQVk7RUFDWixpREFBaUQ7RUFDakQsa0RBQWtEO0FBQ3BEO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLG9DQUFvQztFQUNwQyxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHFDQUFxQztBQUN2QztBQUNBOzs7O0VBSUU7bUNBQ2lDO0FBQ25DO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNDQUFzQztFQUN0Qyw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUEsbUJBQW1CO0FBQ25CO0VBQ0UsNkJBQTZCO0VBQzdCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVDQUF1QztFQUN2Qyx3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0U7aUJBQ2U7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG4gICAgc3JjOiB1cmwoJy4vbXktZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICB1cmwoJy4vbXktZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIH0gKi9cXG5cXG46cm9vdCB7XFxuICAtLXdoaXRlOiB3aGl0ZTtcXG4gIC0tZGFyazogcmdiKDI2LCAzMCwgMzEpO1xcbiAgLS1ncmV5OiByZ2IoNDMsIDQzLCA0Myk7XFxuICAtLWJsdWU6IHJnYigwLCAxNjMsIDIyNCk7XFxuICAtLWJsYWNrOiByZ2IoMjIsIDIyLCAyMik7XFxuICAtLWNvdXJzZS1jYXJkLWNvcm5lcjogNXB4O1xcbn1cXG4uaGVhZGVyLFxcbi50aXRsZS1zZWN0aW9uLFxcbi5wYXJhZ3JhcGgtc2VjdGlvbixcXG4uY291cnNlcy1zZWN0aW9uLFxcbi5wYXJ0bmVycy1zZWN0aW9uLFxcbi5xdWVzdGlvbnMtc2VjdGlvbixcXG4uZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDAgMTUwcHggMCAxNTBweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjYsIDMwLCAzMSwgMC45OCk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDBweDtcXG59XFxuXFxuLmhlYWRlciBpbWcge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4uaGVhZGVyLWxpbmtzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDUwcHg7XFxufVxcblxcbi50aXRsZS1zZWN0aW9uIHtcXG4gIGhlaWdodDogMzUycHg7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vcGhvdG9zL3RpdGxlLXBob3RvMy5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi5wYXJhZ3JhcGgtc2VjdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBwYWRkaW5nLXRvcDogNTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcbn1cXG4ucGFyYWdyYXBoLXNlY3Rpb24gcCB7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICB3aWR0aDogOTAwcHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbi5wYXJhZ3JhcGgtc2VjdGlvbiBidXR0b24sXFxuLmNvdXJzZS1jYXJkcyBidXR0b24ge1xcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLnBhcmFncmFwaC1zZWN0aW9uIGJ1dHRvbjpob3ZlcixcXG4uY291cnNlLWNhcmRzIGJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogcmdiKDQ3LCA1NCwgMjU1KTtcXG59XFxuLmNvdXJzZXMtc2VjdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uY291cnNlLWNhcmRzIGltZyB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YXIoLS1jb3Vyc2UtY2FyZC1jb3JuZXIpO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLWNvdXJzZS1jYXJkLWNvcm5lcik7XFxufVxcbi5jb3Vyc2UtY2FyZHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDMwMHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDQxNHB4KTtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuLmNvdXJzZS1jYXJkcyA+IGRpdiB7XFxuICBvdXRsaW5lOiAwLjVweCBzb2xpZCB2YXIoLS1ncmV5KTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvdXJzZS1jYXJkLWNvcm5lcik7XFxufVxcblxcbi5jYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG59XFxuLmNhcmQgYnV0dG9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5xdWVzdGlvbnMtc2VjdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgcGFkZGluZy10b3A6IDUwcHg7XFxufVxcblxcbi5xdWVzdGlvbnMtc2VjdGlvbiBoMSB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLnF1ZXN0aW9uLXRpdGxlLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnF1ZXN0aW9uLXN1Yi1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5xdWVzdGlvbi1kaXYge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG59XFxuLnF1ZXN0aW9uLWRpdiBpbWcsXFxuLnNsaWRlci1idG4tbGVmdCxcXG4uc2xpZGVyLWJ0bi1yaWdodCxcXG4uZG90LURpdiB7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQzOSUpIGh1ZS1yb3RhdGUoMTA1ZGVnKVxcbiAgICBicmlnaHRuZXNzKDExMyUpIGNvbnRyYXN0KDExNSUpO1xcbn1cXG4uZm9vdGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBoZWlnaHQ6IDEyOHB4O1xcbiAgcGFkZGluZy10b3A6IDUwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXG59XFxuLmZvb3Rlci1saW5rcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4jb3BlbmVkIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcbi5xdWVzdGlvbi1zcGFjZSB7XFxuICBoZWlnaHQ6IDE1cHg7XFxufVxcblxcbi5hbnN3ZXItcGFyYWdyYXBoLWRpdiB7XFxuICBtYXJnaW46IDUwcHggMHB4IDUwcHggMjBweDtcXG59XFxuXFxuLyogc2xpZGVyIHNlY3Rpb24gKi9cXG4ucGFydG5lcnMtc2VjdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gIGhlaWdodDogMjUwcHg7XFxufVxcbi5wYXJ0bmVycy1kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBhdXRvKTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wYXJ0bmVyLXRpdGxlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxufVxcblxcbi5zbGlkZXItYnRuLXJpZ2h0IHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcbi5zbGlkZXItYnRuLWxlZnQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxufVxcblxcbi5zbGlkZXItYnRuLWxlZnQsXFxuLnNsaWRlci1idG4tcmlnaHQge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5bY2xhc3NePVxcXCJzbGlkZXItZGl2XFxcIl0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDIwMHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNzBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDUwcHg7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcbltjbGFzc149XFxcInNsaWRlci1kaXZcXFwiXSBpbWcge1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG4uc2xpZGVyLWRpdi0yIGltZyB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxufVxcblxcbi5kb3QtRGl2IHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBhdXRvKTtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuLnBhcnRuZXItdGl0bGUge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuLmRvdC1EaXYgPiBpbWcge1xcbiAgaGVpZ2h0OiAxMHB4O1xcbn1cXG5cXG4jZG90LXNlbGVjdGVkIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDk1JSkgc2VwaWEoMiUpIHNhdHVyYXRlKDEwJSkgaHVlLXJvdGF0ZSgzMTRkZWcpIGJyaWdodG5lc3MoNDAlKVxcbiAgICBjb250cmFzdCg5MiUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGNhcmQoaW1hZ2UsIHRpdGxlLCBzdGF0dXMsIGJ1dHRvbikge1xuICBjb25zdCBjb3Vyc2VzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3Vyc2UtY2FyZHNcIik7XG4gIGxldCBjYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FyZERpdi5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgY291cnNlc0Rpdi5hcHBlbmRDaGlsZChjYXJkRGl2KTtcblxuICBsZXQgY2FyZENvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGxldCBjYXJkUGhvdG8gPSBuZXcgSW1hZ2UoKTtcbiAgY2FyZFBob3RvLnNyYyA9IGltYWdlO1xuICBsZXQgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSBgJHt0aXRsZX1gO1xuICBsZXQgY2FyZFN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY2FyZFN0YXR1cy50ZXh0Q29udGVudCA9IGAke3N0YXR1c31gO1xuICBsZXQgY2FyZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhcmRCdXR0b24udGV4dENvbnRlbnQgPSBgJHtidXR0b259YDtcblxuICBjYXJkRGl2LmFwcGVuZENoaWxkKGNhcmRDb250ZW50RGl2KTtcbiAgY2FyZENvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY2FyZFBob3RvKTtcbiAgY2FyZENvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlKTtcbiAgY2FyZENvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY2FyZFN0YXR1cyk7XG4gIGNhcmREaXYuYXBwZW5kQ2hpbGQoY2FyZEJ1dHRvbik7XG59XG5cbmV4cG9ydCB7IGNhcmQgfTtcbiIsIi8vIGltcG9ydCB0aXRsZVBob3RvSW1wb3J0IGZyb20gXCIuL3Bob3Rvcy90aXRsZS1waG90by5qcGdcIjtcbmltcG9ydCBpb3MgZnJvbSBcIi4vcGhvdG9zL2NvdXJzZXMvaXNvLmpwZ1wiO1xuaW1wb3J0IHJlYWN0ZSBmcm9tIFwiLi9waG90b3MvY291cnNlcy9yZWFjdC5qcGdcIjtcbmltcG9ydCBpbnRQeXRob24gZnJvbSBcIi4vcGhvdG9zL2NvdXJzZXMvaW50cm8tcHl0aG9uLmpwZ1wiO1xuaW1wb3J0IGFkdlB5dGhvbiBmcm9tIFwiLi9waG90b3MvY291cnNlcy9hZHZhbi1weXRob24uanBnXCI7XG5pbXBvcnQgY3liZXJzZWN1cml0eSBmcm9tIFwiLi9waG90b3MvY291cnNlcy9jeWJlcnNlY3VyaXR5LmpwZ1wiO1xuaW1wb3J0IHRvdCBmcm9tIFwiLi9waG90b3MvY291cnNlcy90b3QuanBnXCI7XG5pbXBvcnQgYmxvY2tjaGFpbiBmcm9tIFwiLi9waG90b3MvY291cnNlcy9ibG9ja2NoYWluLmpwZ1wiO1xuaW1wb3J0IGRldm9wcyBmcm9tIFwiLi9waG90b3MvY291cnNlcy9kZXZvcHMuanBnXCI7XG5pbXBvcnQgc2VjdXJpdHkgZnJvbSBcIi4vcGhvdG9zL2NvdXJzZXMvc2VjdXJpdHkuanBnXCI7XG5pbXBvcnQgeyBjYXJkIH0gZnJvbSBcIi4vY2FyZEZhY3RvcnlcIjtcbmltcG9ydCB0YmMgZnJvbSBcIi4vcGhvdG9zL2Zvb3Rlci90YmMucG5nXCI7XG5pbXBvcnQgZmIgZnJvbSBcIi4vcGhvdG9zL2Zvb3Rlci9mYi5wbmdcIjtcbmltcG9ydCB5b3V0dWJlIGZyb20gXCIuL3Bob3Rvcy9mb290ZXIveW91dHViZS5wbmdcIjtcbmltcG9ydCB0YmNBY2RMb2dvIGZyb20gXCIuL3Bob3Rvcy90YmNBY2RMb2dvLnN2Z1wiO1xuaW1wb3J0IHsgcXVlc3Rpb25zQW5kQW5zd2VycyB9IGZyb20gXCIuL3FhRmFjdG9yeVwiO1xuaW1wb3J0IHF1ZXN0aW9uSWNvbiBmcm9tIFwiLi9waG90b3MvcXVlc3Rpb24tZXhwZW5kLnN2Z1wiO1xuaW1wb3J0IHNsaWRlckljb24gZnJvbSBcIi4vcGhvdG9zL3NsaWRlckljb24uc3ZnXCI7XG5pbXBvcnQgc2xpZGVyRG90IGZyb20gXCIuL3Bob3Rvcy9zbGlkZXItZG90LnN2Z1wiO1xuaW1wb3J0IHsgc2xpZGVyIH0gZnJvbSBcIi4vc2xpZGVyRnVuY3Rpb25cIjtcbmltcG9ydCBzbGlkZTEgZnJvbSBcIi4vcGhvdG9zL3BhcnRuZXJzL3NsaWQxLnBuZ1wiO1xuaW1wb3J0IHNsaWRlMiBmcm9tIFwiLi9waG90b3MvcGFydG5lcnMvc2xpZDIucG5nXCI7XG5pbXBvcnQgc2xpZGUzIGZyb20gXCIuL3Bob3Rvcy9wYXJ0bmVycy9zbGlkMy5wbmdcIjtcbmltcG9ydCBzbGlkZTQgZnJvbSBcIi4vcGhvdG9zL3BhcnRuZXJzL3NsaWQ0LnBuZ1wiO1xuaW1wb3J0IHNsaWRlNSBmcm9tIFwiLi9waG90b3MvcGFydG5lcnMvc2xpZDUucG5nXCI7XG5pbXBvcnQgc2xpZGU2IGZyb20gXCIuL3Bob3Rvcy9wYXJ0bmVycy9zbGlkNi5wbmdcIjtcbmltcG9ydCBzbGlkZTcgZnJvbSBcIi4vcGhvdG9zL3BhcnRuZXJzL3NsaWQ3LnBuZ1wiO1xuXG5mdW5jdGlvbiBEb21Db250ZW50KCkge1xuICBjb25zdCBjb250YWluZXJTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpdGUtY29udGFpbmVyXCIpO1xuXG4gIC8vIG1ha2luZyBtYWluIGRpdnNcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGUtc2VjdGlvblwiKTtcblxuICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwYXJhZ3JhcGguY2xhc3NMaXN0LmFkZChcInBhcmFncmFwaC1zZWN0aW9uXCIpO1xuXG4gIGNvbnN0IGNvdXJzZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb3Vyc2VzLmNsYXNzTGlzdC5hZGQoXCJjb3Vyc2VzLXNlY3Rpb25cIik7XG5cbiAgY29uc3QgcGFydG5lcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwYXJ0bmVycy5jbGFzc0xpc3QuYWRkKFwicGFydG5lcnMtc2VjdGlvblwiKTtcblxuICBjb25zdCBxdWVzdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBxdWVzdGlvbnMuY2xhc3NMaXN0LmFkZChcInF1ZXN0aW9ucy1zZWN0aW9uXCIpO1xuXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuXG4gIGNvbnRhaW5lclNlbGVjdC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb250YWluZXJTZWxlY3QuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBjb250YWluZXJTZWxlY3QuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbiAgY29udGFpbmVyU2VsZWN0LmFwcGVuZENoaWxkKGNvdXJzZXMpO1xuICBjb250YWluZXJTZWxlY3QuYXBwZW5kQ2hpbGQocGFydG5lcnMpO1xuICBjb250YWluZXJTZWxlY3QuYXBwZW5kQ2hpbGQocXVlc3Rpb25zKTtcbiAgY29udGFpbmVyU2VsZWN0LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgLy8gZG9tIGhlYWRlciBjb250ZW50XG4gIGNvbnN0IGxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgbG9nby5zcmMgPSB0YmNBY2RMb2dvO1xuXG4gIGNvbnN0IGhlYWRlckxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyTGlua3MuY2xhc3NMaXN0LmFkZChcImhlYWRlci1saW5rc1wiKTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJMaW5rcyk7XG5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1haW4udGV4dENvbnRlbnQgPSBcIuGDm+GDl+GDkOGDleGDkOGDoOGDmFwiO1xuXG4gIGNvbnN0IHRiY0l0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdGJjSXQudGV4dENvbnRlbnQgPSBcIlRCQyBJVFwiO1xuXG4gIGNvbnN0IHRiY1h1c2FpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHRiY1h1c2FpZC50ZXh0Q29udGVudCA9IFwiVEJDIHggVVNBSURcIjtcblxuICBjb25zdCByaXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcmlzay50ZXh0Q29udGVudCA9IFwi4YOg4YOY4YOh4YOZ4YOU4YOR4YOYXCI7XG5cbiAgaGVhZGVyTGlua3MuYXBwZW5kQ2hpbGQobWFpbik7XG4gIGhlYWRlckxpbmtzLmFwcGVuZENoaWxkKHRiY0l0KTtcbiAgaGVhZGVyTGlua3MuYXBwZW5kQ2hpbGQodGJjWHVzYWlkKTtcbiAgaGVhZGVyTGlua3MuYXBwZW5kQ2hpbGQocmlzayk7XG5cbiAgLy8gdGl0bGUgc2VjdGlvbiBkb21cbiAgLy8gY29uc3QgdGl0bGVQaG90byA9IG5ldyBJbWFnZSgpO1xuICAvLyB0aXRsZVBob3RvLnNyYyA9IHRpdGxlUGhvdG9JbXBvcnQ7XG5cbiAgLy8gdGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVQaG90byk7XG4gIC8vIGltYWdlO1xuICBjb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRpdGxlVGV4dC50ZXh0Q29udGVudCA9IFwiVEJDIHggVVNBSURcIjtcblxuICBjb25zdCB0aXRsZVRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICB0aXRsZVRleHQyLnRleHRDb250ZW50ID0gXCLhg6Lhg5Thg6Xhg5zhg53hg5rhg53hg5Lhg5jhg6Phg6Dhg5gg4YOS4YOQ4YOc4YOQ4YOX4YOa4YOU4YOR4YOY4YOh4YOX4YOV4YOY4YOhXCI7XG5cbiAgdGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVUZXh0KTtcbiAgdGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVUZXh0Mik7XG5cbiAgLy8gcGFyYWdyYXBoIHNlY3Rpb24gZG9tXG4gIGNvbnN0IHBhcmFncmFwaFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGFyYWdyYXBoVGV4dC50ZXh0Q29udGVudCA9XG4gICAgXCLigJ4gVEJDIHggVVNBSUQgLSDhg6Lhg5Thg6Xhg5zhg53hg5rhg53hg5Lhg5jhg6Phg6Dhg5gg4YOS4YOQ4YOc4YOQ4YOX4YOa4YOU4YOR4YOY4YOh4YOX4YOV4YOY4YOhIOKAnCDhg57hg6Dhg53hg5Lhg6Dhg5Dhg5vhg5AgIOGDoeGDkOGDmOGDnOGDpOGDneGDoOGDm+GDkOGDquGDmOGDnSDhg6Lhg5Thg6Xhg5zhg53hg5rhg53hg5Lhg5jhg5Thg5Hhg5jhg5cg4YOT4YOQ4YOY4YOc4YOi4YOU4YOg4YOU4YOh4YOU4YOR4YOj4YOaIOGDkOGDk+GDkOGDm+GDmOGDkOGDnOGDlOGDkeGDoSDhg5Lhg5fhg5Dhg5Xhg5Dhg5bhg53hg5Hhg5cg4YOh4YOg4YOj4YOa4YOQ4YOTIOGDk+GDkOGDpOGDmOGDnOGDkOGDnOGDoeGDlOGDkeGDo+GDmiDhg53hg5zhg5rhg5Dhg5jhg5wg4YOh4YOQ4YOS4YOQ4YOc4YOb4YOQ4YOc4YOQ4YOX4YOa4YOU4YOR4YOa4YOdIOGDnuGDoOGDkOGDpeGDouGDmOGDmeGDo+GDmiDhg5nhg6Phg6Dhg6Hhg5Thg5Hhg6EgIOGDoeGDruGDleGDkOGDk+GDkOGDoeGDruGDleGDkCBJQ1Qg4YOb4YOY4YOb4YOQ4YOg4YOX4YOj4YOa4YOU4YOR4YOY4YOXLiDhg6zhg5Dhg6Dhg5vhg5Dhg6Lhg5Thg5Hhg6Phg5og4YOZ4YOj4YOg4YOh4YOT4YOQ4YOb4YOX4YOQ4YOV4YOg4YOU4YOR4YOj4YOa4YOU4YOR4YOhIOGDlOGDq+GDmuGDlOGDleGDkOGDlyDhg6jhg5Thg6Hhg5Dhg6vhg5rhg5Thg5Hhg5rhg53hg5Hhg5Ag4YOT4YOQ4YOh4YOQ4YOl4YOb4YOT4YOc4YOU4YOcIOGDl+GDmOGDkeGDmOGDoeGDmOGDoeGDkCDhg5Phg5Ag4YOb4YOY4YOhIOGDnuGDkOGDoOGDouGDnOGDmOGDneGDoCDhg5nhg53hg5vhg57hg5Dhg5zhg5jhg5Thg5Hhg6jhg5guXCI7XG5cbiAgY29uc3QgcGFyYWdyYXBoTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHBhcmFncmFwaExpbmsudGV4dENvbnRlbnQgPSBcIuGDkuGDkOGDmOGDkuGDlCDhg5vhg5Thg6Lhg5hcIjtcblxuICBwYXJhZ3JhcGguYXBwZW5kQ2hpbGQocGFyYWdyYXBoVGV4dCk7XG4gIHBhcmFncmFwaC5hcHBlbmRDaGlsZChwYXJhZ3JhcGhMaW5rKTtcblxuICAvLyBjYXJkcyBzZWN0aW9uXG4gIGNvbnN0IGNvdXJzZVRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb3Vyc2VUaXRsZURpdi5jbGFzc0xpc3QuYWRkKFwiY291cnNlcy10aXRsZVwiKTtcbiAgY291cnNlVGl0bGVEaXYudGV4dENvbnRlbnQgPSBcIuGDoeGDkOGDoeGDrOGDkOGDleGDmuGDnSDhg5nhg6Phg6Dhg6Hhg5Thg5Hhg5hcIjtcbiAgY291cnNlcy5hcHBlbmRDaGlsZChjb3Vyc2VUaXRsZURpdik7XG4gIChcIi4vcGhvdG9zL3BhcnRuZXJzL3NsaWQxLnBuZ1wiKTtcbiAgY29uc3QgY291cnNlQ2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvdXJzZUNhcmREaXYuY2xhc3NMaXN0LmFkZChcImNvdXJzZS1jYXJkc1wiKTtcbiAgY291cnNlcy5hcHBlbmRDaGlsZChjb3Vyc2VDYXJkRGl2KTtcblxuICBjb25zdCBpc29DYXJkID0gY2FyZChcbiAgICBpb3MsXG4gICAgXCJpT1MgRGV2ZWxvcG1lbnRcIixcbiAgICBcIuGDoOGDlOGDkuGDmOGDoeGDouGDoOGDkOGDquGDmOGDkCDhg5Phg5Dhg6Hhg6Dhg6Phg5rhg5Thg5Hhg6Phg5rhg5jhg5BcIixcbiAgICBcIuGDmeGDo+GDoOGDoeGDmOGDoSDhg5Phg5Thg6Lhg5Dhg5rhg5Thg5Hhg5hcIixcbiAgKTtcbiAgY29uc3QgcmVhY3RDYXJkID0gY2FyZChcbiAgICByZWFjdGUsXG4gICAgXCJSZWFjdGVcIixcbiAgICBcIuGDoOGDlOGDkuGDmOGDoeGDouGDoOGDkOGDquGDmOGDkCDhg5Phg5Dhg6Hhg6Dhg6Phg5rhg5Thg5Hhg6Phg5rhg5jhg5BcIixcbiAgICBcIuGDmeGDo+GDoOGDoeGDmOGDoSDhg5Phg5Thg6Lhg5Dhg5rhg5Thg5Hhg5hcIixcbiAgKTtcbiAgY29uc3QgaW50clB5dGhvbkNhcmQgPSBjYXJkKFxuICAgIGludFB5dGhvbixcbiAgICBcIkludHJvIHRvIFB5dGhvblwiLFxuICAgIFwi4YOg4YOU4YOS4YOY4YOh4YOi4YOg4YOQ4YOq4YOY4YOQIOGDk+GDkOGDoeGDoOGDo+GDmuGDlOGDkeGDo+GDmuGDmOGDkFwiLFxuICAgIFwi4YOZ4YOj4YOg4YOh4YOY4YOhIOGDk+GDlOGDouGDkOGDmuGDlOGDkeGDmFwiLFxuICApO1xuICBjb25zdCBhZHZhbmNlZFB5dGhvbkNhcmQgPSBjYXJkKFxuICAgIGFkdlB5dGhvbixcbiAgICBcIkFkdmFuY2VkIFB5dGhvblwiLFxuICAgIFwi4YOg4YOU4YOS4YOY4YOh4YOi4YOg4YOQ4YOq4YOY4YOQIOGDk+GDkOGDoeGDoOGDo+GDmuGDlOGDkeGDo+GDmuGDmOGDkFwiLFxuICAgIFwi4YOZ4YOj4YOg4YOh4YOY4YOhIOGDk+GDlOGDouGDkOGDmuGDlOGDkeGDmFwiLFxuICApO1xuICBjb25zdCBjeWJlcnNlY3VyaXR5Q2FyZCA9IGNhcmQoXG4gICAgY3liZXJzZWN1cml0eSxcbiAgICBcIkFkdmFuY2VkIEN5YmVyc2VjdXJpdHkgQ291cnNlXCIsXG4gICAgXCLhg6Dhg5Thg5Lhg5jhg6Hhg6Lhg6Dhg5Dhg6rhg5jhg5Ag4YOT4YOQ4YOh4YOg4YOj4YOa4YOU4YOR4YOj4YOa4YOY4YOQXCIsXG4gICAgXCLhg5nhg6Phg6Dhg6Hhg5jhg6Eg4YOT4YOU4YOi4YOQ4YOa4YOU4YOR4YOYXCIsXG4gICk7XG4gIGNvbnN0IHRvdENhcmQgPSBjYXJkKFxuICAgIHRvdCxcbiAgICBcIlRvVCAtIFRyYWluaW5nIG9mIFRyYWluZXJzXCIsXG4gICAgXCLhg6Dhg5Thg5Lhg5jhg6Hhg6Lhg6Dhg5Dhg6rhg5jhg5Ag4YOT4YOQ4YOh4YOg4YOj4YOa4YOU4YOR4YOj4YOa4YOY4YOQXCIsXG4gICAgXCLhg5nhg6Phg6Dhg6Hhg5jhg6Eg4YOT4YOU4YOi4YOQ4YOa4YOU4YOR4YOYXCIsXG4gICk7XG4gIGNvbnN0IEJsb2NrY2hhaW5DYXJkID0gY2FyZChcbiAgICBibG9ja2NoYWluLFxuICAgIFwiQmxvY2tjaGFpblwiLFxuICAgIFwi4YOg4YOU4YOS4YOY4YOh4YOi4YOg4YOQ4YOq4YOY4YOQIOGDk+GDkOGDoeGDoOGDo+GDmuGDlOGDkeGDo+GDmuGDmOGDkFwiLFxuICAgIFwi4YOZ4YOj4YOg4YOh4YOY4YOhIOGDk+GDlOGDouGDkOGDmuGDlOGDkeGDmFwiLFxuICApO1xuICBjb25zdCBEZXZPcHNDYXJkID0gY2FyZChcbiAgICBkZXZvcHMsXG4gICAgXCJEZXZPcHNcIixcbiAgICBcIuGDoOGDlOGDkuGDmOGDoeGDouGDoOGDkOGDquGDmOGDkCDhg5Phg5Dhg6Hhg6Dhg6Phg5rhg5Thg5Hhg6Phg5rhg5jhg5BcIixcbiAgICBcIuGDmeGDo+GDoOGDoeGDmOGDoSDhg5Phg5Thg6Lhg5Dhg5rhg5Thg5Hhg5hcIixcbiAgKTtcbiAgY29uc3QgU2VjdXJpdHlDYXJkID0gY2FyZChcbiAgICBzZWN1cml0eSxcbiAgICBcIkluZm9ybWF0aW9uIFNlY3VyaXR5IEdvdmVybmFuY2VcIixcbiAgICBcIuGDoOGDlOGDkuGDmOGDoeGDouGDoOGDkOGDquGDmOGDkCDhg5Phg5Dhg6Hhg6Dhg6Phg5rhg5Thg5Hhg6Phg5rhg5jhg5BcIixcbiAgICBcIuGDmeGDo+GDoOGDoeGDmOGDoSDhg5Phg5Thg6Lhg5Dhg5rhg5Thg5Hhg5hcIixcbiAgKTtcblxuICAvLyBzbGlkZXIgc2VjdGlvblxuXG4gIC8vIERlZmluZSBpbWFnZSBwYXRoc1xuICBjb25zdCBzbGlkMSA9IG5ldyBJbWFnZSgpO1xuICBzbGlkMS5zcmMgPSBzbGlkZTE7XG5cbiAgY29uc3Qgc2xpZDIgPSBuZXcgSW1hZ2UoKTtcbiAgc2xpZDIuc3JjID0gc2xpZGUyO1xuXG4gIGNvbnN0IHNsaWQzID0gbmV3IEltYWdlKCk7XG4gIHNsaWQzLnNyYyA9IHNsaWRlMztcblxuICBjb25zdCBzbGlkNCA9IG5ldyBJbWFnZSgpO1xuICBzbGlkNC5zcmMgPSBzbGlkZTQ7XG5cbiAgY29uc3Qgc2xpZDUgPSBuZXcgSW1hZ2UoKTtcbiAgc2xpZDUuc3JjID0gc2xpZGU1O1xuXG4gIGNvbnN0IHNsaWQ2ID0gbmV3IEltYWdlKCk7XG4gIHNsaWQ2LnNyYyA9IHNsaWRlNjtcblxuICBjb25zdCBzbGlkNyA9IG5ldyBJbWFnZSgpO1xuICBzbGlkNy5zcmMgPSBzbGlkZTc7XG5cbiAgY29uc3QgbG9nb3MgPSBbW3NsaWQxLCBzbGlkMiwgc2xpZDNdLCBbc2xpZDQsIHNsaWQ1LCBzbGlkNl0sIFtzbGlkN11dO1xuICBzbGlkZXIobG9nb3MsIHNsaWRlckljb24sIHNsaWRlckRvdCk7XG5cbiAgLy8gcXVlc3Rpb24gc2VjdGlvblxuXG4gIGNvbnN0IHF1ZXN0aW9uVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBxdWVzdGlvblRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJxdWVzdGlvbi10aXRsZS1kaXZcIik7XG4gIGNvbnN0IHF1ZXN0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHF1ZXN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBcIuGDruGDqOGDmOGDoOGDkOGDkyDhg5Phg5Dhg6Hhg5vhg6Phg5rhg5gg4YOZ4YOY4YOX4YOu4YOV4YOU4YOR4YOYXCI7XG5cbiAgY29uc3QgcXVlc3Rpb25UaXRsZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHF1ZXN0aW9uVGl0bGVCdG4udGV4dENvbnRlbnQgPSBcIuGDp+GDleGDlOGDmuGDkCDhg5nhg5jhg5fhg67hg5Xhg5BcIjtcblxuICBxdWVzdGlvbnMuYXBwZW5kQ2hpbGQocXVlc3Rpb25UaXRsZURpdik7XG4gIHF1ZXN0aW9uVGl0bGVEaXYuYXBwZW5kQ2hpbGQocXVlc3Rpb25UaXRsZSk7XG4gIHF1ZXN0aW9uVGl0bGVEaXYuYXBwZW5kQ2hpbGQocXVlc3Rpb25UaXRsZUJ0bik7XG5cbiAgY29uc3QgcXVlc3Rpb24xID0gcXVlc3Rpb25zQW5kQW5zd2VycyhcbiAgICBcIuGDoOGDneGDkuGDneGDoCDhg67hg5Phg5Thg5Hhg5Ag4YOZ4YOj4YOg4YOh4YOU4YOR4YOW4YOUIOGDoOGDlOGDkuGDmOGDoeGDouGDoOGDkOGDquGDmOGDkCDhg5Phg5Ag4YOo4YOU4YOg4YOp4YOU4YOV4YOQP1wiLFxuICAgIHF1ZXN0aW9uSWNvbixcbiAgICBcImFuc3dlciBJXCIsXG4gICk7XG5cbiAgY29uc3QgcXVlc3Rpb24yID0gcXVlc3Rpb25zQW5kQW5zd2VycyhcbiAgICBcIuGDqOGDlOGDm+GDmOGDq+GDmuGDmOGDkCDhg5fhg6Mg4YOQ4YOg4YOQIOGDlOGDoOGDl+GDluGDlCDhg5vhg5Thg6Ig4YOZ4YOj4YOg4YOh4YOW4YOUIOGDoOGDlOGDkuGDmOGDoeGDouGDoOGDkOGDquGDmOGDkD9cIixcbiAgICBxdWVzdGlvbkljb24sXG4gICAgXCJUQkMgWCBVU0FJRCDhg6Lhg5Thg6Xhg5zhg53hg5rhg53hg5Lhg5jhg6Phg6Dhg5gg4YOS4YOQ4YOc4YOQ4YOX4YOa4YOU4YOR4YOY4YOh4YOX4YOV4YOY4YOhIOGDnuGDoOGDneGDkuGDoOGDkOGDm+GDkOGDqOGDmCDhg5fhg5jhg5fhg53hg5Thg6Phg5og4YOZ4YOQ4YOc4YOT4YOY4YOT4YOQ4YOi4YOhIOGDkOGDpeGDleGDoSDhg5vhg67hg53hg5rhg53hg5Mg4YOU4YOg4YOX4YOYIOGDmeGDo+GDoOGDoeGDmOGDoSDhg5Lhg5Dhg5Xhg5rhg5jhg6Eg4YOo4YOU4YOh4YOQ4YOr4YOa4YOU4YOR4YOa4YOd4YOR4YOQLiDhg5Lhg5Dhg6Dhg5Phg5AgSW5mb3JtYXRpb24gU2VjdXJpdHkg4YOT4YOQIFB5dGhvbiDhg5nhg6Phg6Dhg6Hhg5Thg5Hhg5jhg6Hhg5AsIOGDoeGDkOGDk+GDkOGDqiBCYXNpYyDhg5Phg53hg5zhg5jhg6Eg4YOS4YOQ4YOV4YOa4YOY4YOhIOGDqOGDlOGDm+GDk+GDlOGDkiDhg6jhg5Thg6Hhg5Dhg6vhg5rhg5Thg5Hhg5Thg5rhg5jhg5Ag4YOh4YOs4YOQ4YOV4YOa4YOY4YOhIOGDkuGDkOGDkuGDoOGDq+GDlOGDmuGDlOGDkeGDkCBBZHZhbmNlIOGDk+GDneGDnOGDlOGDluGDlC5cIixcbiAgKTtcbiAgY29uc3QgcXVlc3Rpb24zID0gcXVlc3Rpb25zQW5kQW5zd2VycyhcbiAgICBcIuGDoOGDkCDhg6bhg5jhg6Dhg6Eg4YOh4YOs4YOQ4YOV4YOa4YOQIOGDnuGDoOGDneGDkuGDoOGDkOGDm+GDmOGDoSDhg6Thg5Dhg6Dhg5Lhg5rhg5Thg5Hhg6jhg5g/XCIsXG4gICAgcXVlc3Rpb25JY29uLFxuICAgIFwi4YOe4YOg4YOd4YOS4YOg4YOQ4YOb4YOY4YOhIOGDpOGDkOGDoOGDkuGDmuGDlOGDkeGDqOGDmCDhg5nhg6Phg6Dhg6Hhg5Thg5Hhg5bhg5Qg4YOh4YOs4YOQ4YOV4YOa4YOQIOGDoeGDoOGDo+GDmuGDmOGDkOGDkyDhg5Phg5Dhg6Thg5jhg5zhg5Dhg5zhg6Hhg5Thg5Hhg6Phg5rhg5jhg5Ag4YOX4YOY4YOR4YOY4YOh4YOYIOGDkeGDkOGDnOGDmeGDmOGDoeGDkCDhg5Phg5AgVVNBSUQt4YOY4YOhIOGDm+GDmOGDlOGDoC5cIixcbiAgKTtcblxuICAvLyBmb290ZXIgc2VjdGlvblxuICBjb25zdCBmb290ZXJUZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vdGVyVGV4dERpdi5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyLXRleHRcIik7XG5cbiAgY29uc3QgZm9vdGVyTG9nbyA9IG5ldyBJbWFnZSgpO1xuICBmb290ZXJMb2dvLnNyYyA9IHRiYztcblxuICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGZvb3RlclRleHQudGV4dENvbnRlbnQgPSBcIsKpIDIwMjMg4YOn4YOV4YOU4YOa4YOQIOGDo+GDpOGDmuGDlOGDkeGDkCDhg5Phg5Dhg6rhg6Phg5rhg5jhg5BcIjtcblxuICBjb25zdCBmb290ZXJUZXh0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZm9vdGVyVGV4dEJ0bi50ZXh0Q29udGVudCA9IFwi4YOs4YOU4YOh4YOU4YOR4YOYIOGDk+GDkCDhg57hg5jhg6Dhg53hg5Hhg5Thg5Hhg5hcIjtcblxuICBmb290ZXJUZXh0RGl2LmFwcGVuZENoaWxkKGZvb3RlckxvZ28pO1xuICBmb290ZXJUZXh0RGl2LmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xuICBmb290ZXJUZXh0RGl2LmFwcGVuZENoaWxkKGZvb3RlclRleHRCdG4pO1xuXG4gIGNvbnN0IGZvb3RlckxpbmtzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vdGVyTGlua3NEaXYuY2xhc3NMaXN0LmFkZChcImZvb3Rlci1saW5rc1wiKTtcblxuICBjb25zdCBmb290ZXJMaW5rU29jRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdCBmYkxpbmsgPSBuZXcgSW1hZ2UoKTtcbiAgZmJMaW5rLnNyYyA9IGZiO1xuXG4gIGNvbnN0IHlvdXR1YmVMaW5rID0gbmV3IEltYWdlKCk7XG4gIHlvdXR1YmVMaW5rLnNyYyA9IHlvdXR1YmU7XG5cbiAgY29uc3QgdGV4dFVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdGV4dFVzQnRuLnRleHRDb250ZW50ID0gXCLhg5vhg53hg5Lhg5Xhg6zhg5Thg6Dhg5Thg5dcIjtcblxuICBmb290ZXJMaW5rU29jRGl2LmFwcGVuZENoaWxkKGZiTGluayk7XG4gIGZvb3RlckxpbmtTb2NEaXYuYXBwZW5kQ2hpbGQoeW91dHViZUxpbmspO1xuXG4gIGZvb3RlckxpbmtzRGl2LmFwcGVuZENoaWxkKGZvb3RlckxpbmtTb2NEaXYpO1xuICBmb290ZXJMaW5rc0Rpdi5hcHBlbmRDaGlsZCh0ZXh0VXNCdG4pO1xuXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJUZXh0RGl2KTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckxpbmtzRGl2KTtcbn1cblxuZXhwb3J0IHsgRG9tQ29udGVudCB9O1xuIiwiZnVuY3Rpb24gcXVlc3Rpb25zQW5kQW5zd2VycyhxdWVzdGlvbiwgaWNvbiwgYW5zd2VyKSB7XG4gIGNvbnN0IHF1ZXN0aW9uU2VjdGlvblNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdGlvbnMtc2VjdGlvblwiKTtcblxuICBjb25zdCBxdWVzdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHF1ZXN0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJxdWVzdGlvbi1kaXZcIik7XG5cbiAgY29uc3QgcXVlc3Rpb25TdWJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBxdWVzdGlvblN1YkRpdi5jbGFzc0xpc3QuYWRkKFwicXVlc3Rpb24tc3ViLWRpdlwiKTtcblxuICBjb25zdCBxdWVzdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBxdWVzdGlvblRpdGxlLnRleHRDb250ZW50ID0gYCR7cXVlc3Rpb259YDtcbiAgY29uc3QgcXVlc3Rpb25JY29uID0gbmV3IEltYWdlKCk7XG4gIHF1ZXN0aW9uSWNvbi5zcmMgPSBpY29uO1xuXG4gIHF1ZXN0aW9uU3ViRGl2LmFwcGVuZENoaWxkKHF1ZXN0aW9uVGl0bGUpO1xuICBxdWVzdGlvblN1YkRpdi5hcHBlbmRDaGlsZChxdWVzdGlvbkljb24pO1xuICBxdWVzdGlvbkRpdi5hcHBlbmRDaGlsZChxdWVzdGlvblN1YkRpdik7XG4gIHF1ZXN0aW9uU2VjdGlvblNlbGVjdG9yLmFwcGVuZENoaWxkKHF1ZXN0aW9uRGl2KTtcblxuICAvLyBnaXZpbmcgYnV0dG9uIGZ1bmN0aW9uIHRvIG9wZW4gYW5kIGNsb3NlIGFuc3dlcnNcbiAgbGV0IGFuc3dlck9wZW4gPSBmYWxzZTsgLy8gVmFyaWFibGUgdG8gdHJhY2sgYW5zd2VyIHN0YXRlXG5cbiAgcXVlc3Rpb25JY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnN0IGFuc3dlclBhcmFncmFwaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYW5zd2VyLXBhcmFncmFwaFwiKTtcblxuICAgIGlmICghYW5zd2VyT3Blbikge1xuICAgICAgLy8gQW5zd2VyIGlzIGNsb3NlZCwgY3JlYXRlIGFuZCBhcHBlbmQgaXRcblxuICAgICAgaWYgKGFuc3dlciAhPT0gXCJhbnN3ZXIgSVwiKSB7XG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uQW5zd2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHF1ZXN0aW9uQW5zd2VyLmNsYXNzTGlzdC5hZGQoXCJhbnN3ZXItcGFyYWdyYXBoXCIpO1xuICAgICAgICBxdWVzdGlvbkFuc3dlci50ZXh0Q29udGVudCA9IGAke2Fuc3dlcn1gO1xuICAgICAgICBxdWVzdGlvbkRpdi5hcHBlbmRDaGlsZChxdWVzdGlvbkFuc3dlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBhZGRpbmcgZmlydHMgbG9uZyBxZXN0aW9uIHBhcmFncmFwaFxuICAgICAgICBjb25zdCBxdWVzdGlvbkFuc3dlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHF1ZXN0aW9uQW5zd2VyLmNsYXNzTGlzdC5hZGQoXCJhbnN3ZXItcGFyYWdyYXBoXCIpO1xuICAgICAgICBxdWVzdGlvbkRpdi5hcHBlbmRDaGlsZChxdWVzdGlvbkFuc3dlcik7XG5cbiAgICAgICAgY29uc3QgcXVlc3Rpb25BbnN3ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBxdWVzdGlvbkFuc3dlckRpdi5jbGFzc0xpc3QuYWRkKFwiYW5zd2VyLXBhcmFncmFwaC1kaXZcIik7XG5cbiAgICAgICAgY29uc3QgcXVlc3Rpb25BbnN3ZXJ0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHF1ZXN0aW9uQW5zd2VydGV4dC50ZXh0Q29udGVudCA9IGDhg6Phg6Dhg6Hhg5bhg5Qg4YOg4YOU4YOS4YOY4YOh4YOi4YOg4YOQ4YOq4YOY4YOY4YOh4YOX4YOV4YOY4YOhIOGDo+GDnOGDk+GDkCDhg5Lhg5Dhg5jhg5Dhg6Dhg50g4YOg4YOQ4YOb4YOT4YOU4YOc4YOY4YOb4YOUIOGDlOGDouGDkOGDnuGDmDpgO1xuICAgICAgICBxdWVzdGlvbkFuc3dlci5hcHBlbmRDaGlsZChxdWVzdGlvbkFuc3dlcnRleHQpO1xuICAgICAgICBxdWVzdGlvbkFuc3dlci5hcHBlbmRDaGlsZChxdWVzdGlvbkFuc3dlckRpdik7XG5cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlQW5kQXBwZW5kKHRhZywgdGV4dCwgcGFyZW50KSB7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3RhZ2UxID0gY3JlYXRlQW5kQXBwZW5kKFwiZGl2XCIsIFwiXCIsIHF1ZXN0aW9uQW5zd2VyRGl2KTtcbiAgICAgICAgY3JlYXRlQW5kQXBwZW5kKFwic3Ryb25nXCIsIFwiSSDhg5Thg6Lhg5Dhg57hg5hcIiwgc3RhZ2UxKTtcbiAgICAgICAgY3JlYXRlQW5kQXBwZW5kKFxuICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgIFwiIC0g4YOe4YOY4YOg4YOV4YOU4YOaIOGDlOGDouGDkOGDnuGDluGDlCDhg6Hhg5Dhg63hg5jhg6Dhg53hg5AsIOGDqOGDlOGDkOGDleGDoeGDnSDhg6Hhg5Dhg6Hhg6Phg6Dhg5Xhg5Thg5rhg5gg4YOZ4YOj4YOg4YOh4YOY4YOh4YOX4YOV4YOY4YOhIOGDkuGDkOGDnOGDmeGDo+GDl+GDleGDnOGDmOGDmuGDmCDhg6Hhg5Dhg6Dhg5Thg5Lhg5jhg6Hhg6Lhg6Dhg5Dhg6rhg5jhg50g4YOk4YOd4YOg4YOb4YOQLCDhg6Dhg53hg5vhg5Thg5rhg5jhg6og4YOS4YOQ4YOc4YOX4YOQ4YOV4YOh4YOU4YOR4YOj4YOa4YOY4YOQIOGDmeGDo+GDoOGDoeGDmOGDoSDhg6jhg5jhg5Phg5Ag4YOS4YOV4YOU4YOg4YOT4YOW4YOULiDhg5nhg6Phg6Dhg6Hhg5bhg5Qg4YOg4YOU4YOS4YOY4YOh4YOi4YOg4YOQ4YOq4YOY4YOY4YOhIOGDk+GDkOGDoeGDoOGDo+GDmuGDlOGDkeGDmOGDoSDhg6jhg5Thg5vhg5Phg5Thg5Ig4YOT4YOQ4YOY4YOs4YOn4YOU4YOR4YOQIOGDqOGDlOGDm+GDneGDoeGDo+GDmuGDmCDhg5Lhg5Dhg5zhg6rhg67hg5Dhg5Phg5Thg5Hhg5Thg5Hhg5jhg6Eg4YOS4YOQ4YOT4YOQ4YOg4YOp4YOU4YOV4YOQLlwiLFxuICAgICAgICAgIHN0YWdlMSxcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBzdGFnZTIgPSBjcmVhdGVBbmRBcHBlbmQoXCJkaXZcIiwgXCJcIiwgcXVlc3Rpb25BbnN3ZXJEaXYpO1xuICAgICAgICBjcmVhdGVBbmRBcHBlbmQoXCJzdHJvbmdcIiwgXCJJSSDhg5Thg6Lhg5Dhg57hg5hcIiwgc3RhZ2UyKTtcbiAgICAgICAgY3JlYXRlQW5kQXBwZW5kKFxuICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgIFwiIC0g4YOo4YOU4YOg4YOp4YOU4YOV4YOY4YOhIOGDm+GDlOGDneGDoOGDlCDhg5Thg6Lhg5Dhg57hg5gg4YOZ4YOj4YOg4YOh4YOU4YOR4YOY4YOhIOGDm+GDmOGDruGDlOGDk+GDleGDmOGDlyDhg5Lhg5Dhg5zhg6Hhg67hg5Xhg5Dhg5Xhg5Thg5Hhg6Phg5rhg5jhg5AsIOGDluGDneGDkuGDmOGDlOGDoOGDl+GDmCDhg5nhg6Phg6Dhg6Hhg5jhg6Hhg5fhg5Xhg5jhg6Eg4YOb4YOd4YOY4YOq4YOQ4YOV4YOhIOGDnuGDoOGDlC3hg6Lhg5Thg6Hhg6Lhg6EsIOGDluGDneGDkuGDmOGDlOGDoOGDlyDhg5nhg6Phg6Dhg6Hhg5bhg5Qg4YOZ4YOYIOGDo+GDnOGDkOGDoOGDlOGDkeGDmOGDoSDhg6Lhg5Thg6Hhg6Lhg6EsIOGDoeGDkOGDk+GDkOGDqiDhg5vhg5jhg5zhg5jhg5vhg5Dhg5rhg6Phg6Dhg5gg4YOW4YOm4YOV4YOQ4YOg4YOY4YOhIOGDkuGDkOGDk+GDkOGDmuGDkOGDruGDleGDmOGDoSDhg6jhg5Thg5vhg5fhg67hg5Xhg5Thg5Xhg5Dhg6jhg5gg4YOS4YOQ4YOT4YOQ4YOu4YOV4YOQ4YOaIOGDqOGDlOGDoOGDqeGDlOGDleGDmOGDoSDhg6jhg5Thg5vhg5Phg5Thg5Ig4YOU4YOi4YOQ4YOe4YOW4YOULlwiLFxuICAgICAgICAgIHN0YWdlMixcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBzdGFnZTMgPSBjcmVhdGVBbmRBcHBlbmQoXCJkaXZcIiwgXCJcIiwgcXVlc3Rpb25BbnN3ZXJEaXYpO1xuICAgICAgICBjcmVhdGVBbmRBcHBlbmQoXCJzdHJvbmdcIiwgXCJJSUkg4YOU4YOi4YOQ4YOe4YOYXCIsIHN0YWdlMyk7XG4gICAgICAgIGNyZWF0ZUFuZEFwcGVuZChcbiAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICBcIiAtIOGDm+GDlOGDoeGDkOGDm+GDlCDhg5Thg6Lhg5Dhg57hg5gg4YOZ4YOj4YOg4YOh4YOU4YOR4YOY4YOhIOGDm+GDmOGDruGDlOGDk+GDleGDmOGDlyDhg5Lhg5Dhg5zhg6Hhg67hg5Xhg5Dhg5Xhg5Phg5Thg5Hhg5A6IEFkdmFuY2Ug4YOZ4YOj4YOg4YOh4YOU4YOR4YOW4YOULCDhg6Hhg5Dhg5Phg5Dhg6og4YOb4YOd4YOY4YOX4YOu4YOd4YOV4YOU4YOR4YOQIOGDkuGDkOGDoOGDmeGDleGDlOGDo+GDmuGDmCDhg6Lhg5Thg6Xhg5zhg5jhg5nhg6Phg6Dhg5gg4YOq4YOd4YOT4YOc4YOQLCDhg5vhg53hg5zhg5Dhg6zhg5jhg5rhg5Thg5Thg5Hhg5vhg5Ag4YOj4YOc4YOT4YOQIOGDk+GDkOGDrOGDlOGDoOGDneGDnCDhg6Lhg5Thg6Xhg5zhg5jhg5nhg6Phg6Dhg5gg4YOi4YOU4YOh4YOi4YOYIOGDquGDneGDk+GDnOGDmOGDoSDhg5Phg53hg5zhg5jhg6Eg4YOo4YOU4YOh4YOQ4YOb4YOd4YOs4YOb4YOU4YOR4YOa4YOQ4YOTLCDhg67hg53hg5rhg50g4YOZ4YOj4YOg4YOh4YOU4YOR4YOW4YOULCDhg6Hhg5Dhg5Phg5Dhg6og4YOg4YOQ4YOY4YOb4YOUIOGDouGDmOGDnuGDmOGDoSDhg6zhg5jhg5zhg5Dhg6Hhg6zhg5Dhg6Dhg5gg4YOq4YOd4YOT4YOc4YOQIOGDm+GDneGDl+GDruGDneGDleGDnOGDmOGDmuGDmCDhg5Dhg6Ag4YOQ4YOg4YOY4YOhIOGDo+GDnOGDk+GDkCDhg6jhg5Thg5Dhg6Hhg6Dhg6Phg5rhg53hg5cg4YOi4YOU4YOl4YOc4YOY4YOZ4YOj4YOg4YOYIOGDk+GDkOGDleGDkOGDmuGDlOGDkeGDkCwg4YOg4YOQ4YOqXCIsXG4gICAgICAgICAgc3RhZ2UzLFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHN0YWdlNCA9IGNyZWF0ZUFuZEFwcGVuZChcImRpdlwiLCBcIlwiLCBxdWVzdGlvbkFuc3dlckRpdik7XG4gICAgICAgIGNyZWF0ZUFuZEFwcGVuZChcInN0cm9uZ1wiLCBcIklWIOGDlOGDouGDkOGDnuGDmFwiLCBzdGFnZTQpO1xuICAgICAgICBjcmVhdGVBbmRBcHBlbmQoXG4gICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgXCIgLSDhg6jhg5Thg6Dhg6nhg5Thg5Xhg5jhg6Eg4YOR4YOd4YOa4YOdIOGDm+GDlOGDneGDl+GDruGDlCDhg5Thg6Lhg5Dhg57hg5gg4YOb4YOd4YOY4YOq4YOQ4YOV4YOhIOGDkuGDkOGDoeGDkOGDo+GDkeGDoOGDlOGDkeGDkOGDoSDhg6jhg5Thg6Hhg5Dhg6Dhg6nhg5Thg5Ug4YOZ4YOd4YOb4YOY4YOh4YOY4YOQ4YOh4YOX4YOQ4YOcLiDhg5Lhg5Dhg6Hhg5Dhg6Phg5Hhg6Dhg5Thg5Hhg5jhg6Eg4YOs4YOQ4YOg4YOb4YOQ4YOi4YOU4YOR4YOY4YOXIOGDkuGDkOGDleGDmuGDmOGDoSDhg6jhg5Thg5vhg5fhg67hg5Xhg5Thg5Xhg5Dhg6jhg5gg4YOp4YOQ4YOY4YOg4YOY4YOq4YOu4YOU4YOR4YOY4YOXIOGDmeGDo+GDoOGDoeGDluGDlCDhg5Phg5Ag4YOS4YOQ4YOk4YOd4YOg4YOb4YOT4YOU4YOR4YOQIOGDqOGDlOGDoeGDkOGDkeGDkOGDm+GDmOGDoeGDmCDhg67hg5Thg5rhg6jhg5Thg5nhg6Dhg6Phg5rhg5Thg5Hhg5AuXCIsXG4gICAgICAgICAgc3RhZ2U0LFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uQW5zd2VydGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcXVlc3Rpb25BbnN3ZXJ0ZXh0Mi50ZXh0Q29udGVudCA9IGAqIOGDoeGDkOGDnOGDkOGDmyDhg5nhg6Phg6Dhg6Hhg5bhg5Qg4YOT4YOQ4YOg4YOU4YOS4YOY4YOh4YOi4YOg4YOY4YOg4YOT4YOU4YOR4YOYIOGDm+GDnOGDmOGDqOGDleGDnOGDlOGDmuGDneGDleGDkOGDnOGDmOGDkCwg4YOn4YOj4YOg4YOQ4YOT4YOm4YOU4YOR4YOY4YOXIOGDrOGDkOGDmOGDmeGDmOGDl+GDruGDnSDhg5nhg6Phg6Dhg6Hhg5jhg6Eg4YOQ4YOm4YOs4YOU4YOg4YOQLCDhg5zhg5Dhg67hg50g4YOg4YOQ4YOhIOGDmOGDoeGDrOGDkOGDleGDmuGDmCDhg5nhg6Phg6Dhg6Hhg5jhg6Eg4YOS4YOQ4YOc4YOb4YOQ4YOV4YOa4YOd4YOR4YOQ4YOo4YOYIOGDk+GDkCDhg5Lhg5Dhg5jhg5Lhg50g4YOS4YOQ4YOQ4YOp4YOc4YOY4YOQIOGDl+GDoyDhg5Dhg6Dhg5Ag4YOZ4YOj4YOg4YOh4YOhIOGDk+GDkOGDoeGDrOGDoOGDlOGDkeGDmOGDoSDhg6zhg5jhg5zhg5Dhg57hg5jhg6Dhg53hg5Hhg5AuYDtcbiAgICAgICAgcXVlc3Rpb25BbnN3ZXIuYXBwZW5kQ2hpbGQocXVlc3Rpb25BbnN3ZXJ0ZXh0Mik7XG4gICAgICB9XG5cbiAgICAgIGUudGFyZ2V0LmlkID0gXCJvcGVuZWRcIjtcbiAgICAgIGFuc3dlck9wZW4gPSB0cnVlOyAvLyBTZXQgYW5zd2VyIHN0YXRlIHRvIG9wZW5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQW5zd2VyIGlzIG9wZW4sIHJlbW92ZSBpdFxuICAgICAgZS50YXJnZXQuaWQgPSBcIlwiO1xuICAgICAgcXVlc3Rpb25EaXYucmVtb3ZlQ2hpbGQoYW5zd2VyUGFyYWdyYXBoKTtcbiAgICAgIGFuc3dlck9wZW4gPSBmYWxzZTsgLy8gU2V0IGFuc3dlciBzdGF0ZSB0byBjbG9zZWRcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgeyBxdWVzdGlvbnNBbmRBbnN3ZXJzIH07XG4iLCJmdW5jdGlvbiBzbGlkZXIobG9nb3MsIGljb24sIGRvdCwgYXV0b0NoYW5nZUludGVydmFsID0gODAwMCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhcnRuZXJzLXNlY3Rpb25cIik7XG5cbiAgY29uc3Qgc2xpZGVyQnRuTGVmdCA9IG5ldyBJbWFnZSgpO1xuICBzbGlkZXJCdG5MZWZ0LnNyYyA9IGljb247XG4gIHNsaWRlckJ0bkxlZnQuY2xhc3NMaXN0LmFkZChcInNsaWRlci1idG4tbGVmdFwiKTtcblxuICBjb25zdCBzbGlkZXJCdG5SaWdodCA9IG5ldyBJbWFnZSgpO1xuICBzbGlkZXJCdG5SaWdodC5zcmMgPSBpY29uO1xuICBzbGlkZXJCdG5SaWdodC5jbGFzc0xpc3QuYWRkKFwic2xpZGVyLWJ0bi1yaWdodFwiKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInBhcnRuZXItdGl0bGVcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCLhg57hg6Dhg53hg5Thg6Xhg6Lhg5jhg6Eg4YOe4YOQ4YOg4YOi4YOc4YOY4YOd4YOg4YOU4YOR4YOYXCI7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBjb250YWluZXJEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwicGFydG5lcnMtZGlzcGxheVwiKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyRGlzcGxheSk7XG4gIGNvbnRhaW5lckRpc3BsYXkuYXBwZW5kQ2hpbGQoc2xpZGVyQnRuTGVmdCk7XG5cbiAgY29uc3Qgc2xpZGVyRGlzcGxheURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lckRpc3BsYXkuYXBwZW5kQ2hpbGQoc2xpZGVyRGlzcGxheURpdik7XG4gIGxldCBuID0gMDtcbiAgc2xpZGVyUGFnZShuKTtcblxuICBjb250YWluZXJEaXNwbGF5LmFwcGVuZENoaWxkKHNsaWRlckJ0blJpZ2h0KTtcblxuICBmdW5jdGlvbiBzbGlkZXJQYWdlKG4pIHtcbiAgICBjb25zdCBzbGlkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNsaWRlckRpdi5jbGFzc0xpc3QuYWRkKGBzbGlkZXItZGl2LSR7bn1gKTtcbiAgICBzbGlkZXJEaXYuY2xhc3NMaXN0LmFkZChcInNsaWRlci1kaXZcIik7IC8vIEFkZGluZyBhIGNvbW1vbiBjbGFzcyBmb3Igc3R5bGluZ1xuICAgIHNsaWRlckRpc3BsYXlEaXYuYXBwZW5kQ2hpbGQoc2xpZGVyRGl2KTtcblxuICAgIC8vIFNldCBpbml0aWFsIG9wYWNpdHkgdG8gMCBmb3IgZmFkZS1pbiBlZmZlY3RcbiAgICBzbGlkZXJEaXYuc3R5bGUub3BhY2l0eSA9IDA7XG5cbiAgICBpZiAobiAhPT0gMikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMjsgaSsrKSB7XG4gICAgICAgIHNsaWRlckRpdi5hcHBlbmRDaGlsZChsb2dvc1tuXVtpXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNsaWRlckRpdi5hcHBlbmRDaGlsZChsb2dvc1syXVswXSk7XG4gICAgfVxuXG4gICAgLy8gVHJpZ2dlcmluZyByZWZsb3cgdG8gYXBwbHkgaW5pdGlhbCBvcGFjaXR5XG4gICAgc2xpZGVyRGl2Lm9mZnNldEhlaWdodDtcblxuICAgIC8vIFNldCBvcGFjaXR5IHRvIDEgZm9yIGZhZGUtaW4gZWZmZWN0XG4gICAgc2xpZGVyRGl2LnN0eWxlLm9wYWNpdHkgPSAxO1xuICB9XG5cbiAgLy8gRnVuY3Rpb24gdG8gY2hhbmdlIHNsaWRlIHdpdGggZmFkZS1vdXQgYW5kIGZhZGUtaW4gZWZmZWN0XG4gIGZ1bmN0aW9uIGNoYW5nZVNsaWRlKGJ0blJpZ2h0KSB7XG4gICAgY29uc3QgY3VycmVudFNsaWRlID0gc2xpZGVyRGlzcGxheURpdi5sYXN0RWxlbWVudENoaWxkO1xuXG4gICAgLy8gU2V0IG9wYWNpdHkgdG8gMCBmb3IgZmFkZS1vdXQgZWZmZWN0XG4gICAgY3VycmVudFNsaWRlLnN0eWxlLm9wYWNpdHkgPSAwO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBSZW1vdmUgdGhlIGN1cnJlbnQgc2xpZGUgYWZ0ZXIgZmFkZS1vdXRcbiAgICAgIHNsaWRlckRpc3BsYXlEaXYucmVtb3ZlQ2hpbGQoY3VycmVudFNsaWRlKTtcblxuICAgICAgLy8gQWRkIHRoZSBuZXcgc2xpZGUgd2l0aCBmYWRlLWluIGVmZmVjdFxuICAgICAgaWYgKGJ0blJpZ2h0KSB7XG4gICAgICAgIGlmIChuICE9PSAyKSB7XG4gICAgICAgICAgbiArPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG4gPSAwO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG4gIT09IDApIHtcbiAgICAgICAgbiAtPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbiA9IDI7XG4gICAgICB9XG4gICAgICBzbGlkZXJQYWdlKG4pO1xuICAgICAgZG90SWQobik7XG4gICAgfSwgNTAwKTsgLy8gNTAwbXMgaXMgdGhlIGR1cmF0aW9uIG9mIHRoZSBmYWRlLW91dCB0cmFuc2l0aW9uXG4gIH1cblxuICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgZG90IGluZGljYXRvcnNcbiAgZnVuY3Rpb24gZG90SWQobikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDI7ICsraSkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWREb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2xpZGVyLWRvdC0ke2l9YCk7XG4gICAgICBzZWxlY3RlZERvdC5pZCA9IGkgPT09IG4gPyBcImRvdC1zZWxlY3RlZFwiIDogXCJcIjtcbiAgICB9XG4gIH1cblxuICAvLyBGdW5jdGlvbiB0byBzdGFydCBhdXRvIGNoYW5nZVxuICBmdW5jdGlvbiBzdGFydEF1dG9DaGFuZ2UoKSB7XG4gICAgcmV0dXJuIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNoYW5nZVNsaWRlKHRydWUpOyAvLyBBdXRvIGNoYW5nZSB0byB0aGUgbmV4dCBzbGlkZVxuICAgIH0sIGF1dG9DaGFuZ2VJbnRlcnZhbCk7XG4gIH1cblxuICBsZXQgYXV0b0NoYW5nZVRpbWVyID0gc3RhcnRBdXRvQ2hhbmdlKCk7IC8vIFN0YXJ0IGF1dG8gY2hhbmdlXG5cbiAgLy8gRXZlbnQgbGlzdGVuZXJzIGZvciBtYW51YWwgbmF2aWdhdGlvblxuICBzbGlkZXJCdG5SaWdodC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsZWFySW50ZXJ2YWwoYXV0b0NoYW5nZVRpbWVyKTsgLy8gU3RvcCBhdXRvIGNoYW5nZSB3aGVuIG1hbnVhbGx5IG5hdmlnYXRpbmdcbiAgICBjaGFuZ2VTbGlkZSh0cnVlKTtcbiAgICBhdXRvQ2hhbmdlVGltZXIgPSBzdGFydEF1dG9DaGFuZ2UoKTsgLy8gUmVzdW1lIGF1dG8gY2hhbmdlIGFmdGVyIG1hbnVhbCBuYXZpZ2F0aW9uXG4gIH0pO1xuXG4gIHNsaWRlckJ0bkxlZnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhckludGVydmFsKGF1dG9DaGFuZ2VUaW1lcik7XG4gICAgY2hhbmdlU2xpZGUoZmFsc2UpO1xuICAgIGF1dG9DaGFuZ2VUaW1lciA9IHN0YXJ0QXV0b0NoYW5nZSgpO1xuICB9KTtcblxuICAvLyBEb3Qgc2VjdGlvblxuICBjb25zdCBkb3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkb3REaXYuY2xhc3NMaXN0LmFkZChcImRvdC1EaXZcIik7XG4gIGNvbnRhaW5lckRpc3BsYXkuYXBwZW5kQ2hpbGQoZG90RGl2KTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8PSAyOyBpKyspIHtcbiAgICBjb25zdCBzbGlkZXJEb3QgPSBuZXcgSW1hZ2UoKTtcbiAgICBzbGlkZXJEb3Quc3JjID0gZG90O1xuICAgIHNsaWRlckRvdC5jbGFzc0xpc3QuYWRkKGBzbGlkZXItZG90LSR7aX1gKTtcbiAgICBkb3REaXYuYXBwZW5kQ2hpbGQoc2xpZGVyRG90KTtcbiAgfVxuXG4gIGRvdElkKG4pO1xufVxuXG5leHBvcnQgeyBzbGlkZXIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IERvbUNvbnRlbnQgfSBmcm9tIFwiLi9kb21Db250ZW50XCI7XG5cbkRvbUNvbnRlbnQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==