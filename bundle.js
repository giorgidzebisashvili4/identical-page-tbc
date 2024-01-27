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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/tbc-bold.woff2 */ "./src/fonts/tbc-bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/tbc-regular-bold.woff2 */ "./src/fonts/tbc-regular-bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/tbc-regular.woff2 */ "./src/fonts/tbc-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./photos/title-photo3.jpg */ "./src/photos/title-photo3.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "bold";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff2");
  font-weight: 900;
  font-style: bold;
}

@font-face {
  font-family: "regular-bold";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff2");
}
@font-face {
  font-family: "regular";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("woff2");
}

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
.header button {
  color: var(--white);
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
  background: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  background-size: cover;
  background-position: center;
  font-family: "bold";
  font-size: 25px;
}

.paragraph-section {
  background-color: var(--grey);
  color: var(--white);
  padding-top: 50px;
  padding-bottom: 50px;
  font-family: "regular";
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
}

button:hover {
  color: var(--blue);
}

.paragraph-section button {
  color: var(--blue);
  font-size: 20px;
  font-weight: bolder;
  font-family: "regular-bold";
}

.paragraph-section button:hover {
  color: rgb(117, 117, 117);
}
.courses-section {
  background-color: var(--black);
  color: var(--white);
  display: grid;
  justify-content: center;
  padding-top: 30px;
}
.courses-section > span,
.partner-title {
  font-family: "regular";
  font-size: 25px;
  padding-bottom: 50px;
}
.card-photo {
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
.card-title {
  font-family: "regular";
  font-size: 17px;
  margin-top: 30px;
  margin-bottom: 25px;
}
.card-status {
  font-family: "regular";
  font-size: 14px;
}
.card > div > p {
  margin-left: 20px;
}
.card-btn-section {
  padding: 20px;
  display: grid;
  grid-template-columns: 15px 190px;
  align-items: center;
}
.card-btn-section > button {
  color: var(--blue);
  transition-duration: 0.4s;
  border: none;
  text-decoration: none;
  font-family: "regular-bold";
  font-size: 16px;
}
.card-btn-section > button:hover {
  color: rgb(71, 125, 200);
}
.card-btn-section > img {
  height: 15px;
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
  padding-bottom: 40px;
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
  height: 34px;
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
  margin-top: 25px;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,4DAAkD;EAClD,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,2BAA2B;EAC3B,4DAA0D;AAC5D;AACA;EACE,sBAAsB;EACtB,4DAAqD;AACvD;;AAEA;EACE,cAAc;EACd,uBAAuB;EACvB,uBAAuB;EACvB,wBAAwB;EACxB,wBAAwB;EACxB,yBAAyB;AAC3B;AACA;;;;;;;EAOE,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,wCAAwC;EACxC,mBAAmB;EACnB,aAAa;EACb,gBAAgB;EAChB,QAAQ;AACV;;AAEA;EACE,YAAY;AACd;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,qBAAqB;EACrB,gBAAgB;EAChB,mDAA4C;EAC5C,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,iBAAiB;EACjB,oBAAoB;EACpB,sBAAsB;AACxB;AACA;EACE,eAAe;EACf,YAAY;EACZ,SAAS;EACT,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,qBAAqB;EACrB,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;AAC3B;AACA;EACE,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;EACb,uBAAuB;EACvB,iBAAiB;AACnB;AACA;;EAEE,sBAAsB;EACtB,eAAe;EACf,oBAAoB;AACtB;AACA;EACE,YAAY;EACZ,iDAAiD;EACjD,kDAAkD;AACpD;AACA;EACE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;EACpC,SAAS;AACX;;AAEA;EACE,gCAAgC;EAChC,wCAAwC;AAC1C;;AAEA;EACE,aAAa;EACb,oBAAoB;AACtB;AACA;EACE,sBAAsB;EACtB,eAAe;EACf,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,sBAAsB;EACtB,eAAe;AACjB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,aAAa;EACb,iCAAiC;EACjC,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;EACZ,qBAAqB;EACrB,2BAA2B;EAC3B,eAAe;AACjB;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,YAAY;AACd;;AAEA;EACE,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,qCAAqC;AACvC;AACA;;;;EAIE;mCACiC;AACnC;AACA;EACE,mBAAmB;EACnB,aAAa;EACb,sCAAsC;EACtC,8BAA8B;EAC9B,6BAA6B;EAC7B,mBAAmB;EACnB,aAAa;EACb,iBAAiB;EACjB,oBAAoB;AACtB;AACA;EACE,aAAa;AACf;;AAEA;EACE,yBAAyB;AAC3B;AACA;EACE,YAAY;AACd;;AAEA;EACE,0BAA0B;AAC5B;;AAEA,mBAAmB;AACnB;EACE,6BAA6B;EAC7B,aAAa;EACb,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,sCAAsC;EACtC,qBAAqB;EACrB,mBAAmB;AACrB;AACA;EACE,SAAS;EACT,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;AAC3B;AACA;EACE,uBAAuB;AACzB;;AAEA;;EAEE,YAAY;AACd;AACA;EACE,aAAa;EACb,uCAAuC;EACvC,wBAAwB;EACxB,mBAAmB;EACnB,SAAS;EACT,oCAAoC;AACtC;AACA;EACE,YAAY;AACd;AACA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sCAAsC;EACtC,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,YAAY;AACd;;AAEA;EACE;iBACe;AACjB","sourcesContent":["@font-face {\n  font-family: \"bold\";\n  src: url(\"./fonts/tbc-bold.woff2\") format(\"woff2\");\n  font-weight: 900;\n  font-style: bold;\n}\n\n@font-face {\n  font-family: \"regular-bold\";\n  src: url(\"./fonts/tbc-regular-bold.woff2\") format(\"woff2\");\n}\n@font-face {\n  font-family: \"regular\";\n  src: url(\"./fonts/tbc-regular.woff2\") format(\"woff2\");\n}\n\n:root {\n  --white: white;\n  --dark: rgb(26, 30, 31);\n  --grey: rgb(43, 43, 43);\n  --blue: rgb(0, 163, 224);\n  --black: rgb(22, 22, 22);\n  --course-card-corner: 5px;\n}\n.header,\n.title-section,\n.paragraph-section,\n.courses-section,\n.partners-section,\n.questions-section,\n.footer {\n  padding: 0 150px 0 150px;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: rgba(26, 30, 31, 0.98);\n  color: var(--white);\n  height: 100px;\n  position: sticky;\n  top: 0px;\n}\n\n.header img {\n  height: 40px;\n}\n.header button {\n  color: var(--white);\n}\n\n.header-links {\n  display: flex;\n  gap: 50px;\n}\n\n.title-section {\n  height: 352px;\n  color: var(--white);\n  display: grid;\n  align-content: center;\n  overflow: hidden;\n  background: url(\"./photos/title-photo3.jpg\");\n  background-size: cover;\n  background-position: center;\n  font-family: \"bold\";\n  font-size: 25px;\n}\n\n.paragraph-section {\n  background-color: var(--grey);\n  color: var(--white);\n  padding-top: 50px;\n  padding-bottom: 50px;\n  font-family: \"regular\";\n}\n.paragraph-section p {\n  font-size: 28px;\n  width: 900px;\n  margin: 0;\n  padding-bottom: 50px;\n}\n\nbutton {\n  transition-duration: 0.4s;\n  border: none;\n  text-decoration: none;\n  background-color: transparent;\n}\n\nbutton:hover {\n  color: var(--blue);\n}\n\n.paragraph-section button {\n  color: var(--blue);\n  font-size: 20px;\n  font-weight: bolder;\n  font-family: \"regular-bold\";\n}\n\n.paragraph-section button:hover {\n  color: rgb(117, 117, 117);\n}\n.courses-section {\n  background-color: var(--black);\n  color: var(--white);\n  display: grid;\n  justify-content: center;\n  padding-top: 30px;\n}\n.courses-section > span,\n.partner-title {\n  font-family: \"regular\";\n  font-size: 25px;\n  padding-bottom: 50px;\n}\n.card-photo {\n  width: 300px;\n  border-top-left-radius: var(--course-card-corner);\n  border-top-right-radius: var(--course-card-corner);\n}\n.course-cards {\n  display: grid;\n  grid-template-columns: repeat(3, 300px);\n  grid-template-rows: repeat(3, 414px);\n  gap: 50px;\n}\n\n.course-cards > div {\n  outline: 0.5px solid var(--grey);\n  border-radius: var(--course-card-corner);\n}\n\n.card {\n  display: grid;\n  justify-items: start;\n}\n.card-title {\n  font-family: \"regular\";\n  font-size: 17px;\n  margin-top: 30px;\n  margin-bottom: 25px;\n}\n.card-status {\n  font-family: \"regular\";\n  font-size: 14px;\n}\n.card > div > p {\n  margin-left: 20px;\n}\n.card-btn-section {\n  padding: 20px;\n  display: grid;\n  grid-template-columns: 15px 190px;\n  align-items: center;\n}\n.card-btn-section > button {\n  color: var(--blue);\n  transition-duration: 0.4s;\n  border: none;\n  text-decoration: none;\n  font-family: \"regular-bold\";\n  font-size: 16px;\n}\n.card-btn-section > button:hover {\n  color: rgb(71, 125, 200);\n}\n.card-btn-section > img {\n  height: 15px;\n}\n\n.questions-section {\n  background-color: var(--black);\n  color: var(--white);\n  padding-top: 50px;\n}\n\n.questions-section h1 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.question-title-div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.question-sub-div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.question-div {\n  border-bottom: 1px solid var(--white);\n}\n.question-div img,\n.slider-btn-left,\n.slider-btn-right,\n.dot-Div {\n  filter: invert(100%) sepia(0%) saturate(7439%) hue-rotate(105deg)\n    brightness(113%) contrast(115%);\n}\n.footer {\n  align-items: center;\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  justify-content: space-between;\n  background-color: var(--grey);\n  color: var(--white);\n  height: 128px;\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n.footer-links {\n  display: grid;\n}\n\n#opened {\n  transform: rotate(180deg);\n}\n.question-space {\n  height: 15px;\n}\n\n.answer-paragraph-div {\n  margin: 50px 0px 50px 20px;\n}\n\n/* slider section */\n.partners-section {\n  background-color: var(--grey);\n  height: 250px;\n  padding-bottom: 40px;\n}\n.partners-display {\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  justify-items: center;\n  align-items: center;\n}\n.partner-title {\n  margin: 0;\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n\n.slider-btn-right {\n  transform: rotate(180deg);\n}\n.slider-btn-left {\n  transform: rotate(0deg);\n}\n\n.slider-btn-left,\n.slider-btn-right {\n  height: 34px;\n}\n[class^=\"slider-div\"] {\n  display: grid;\n  grid-template-columns: repeat(3, 200px);\n  grid-template-rows: 70px;\n  align-items: center;\n  gap: 50px;\n  transition: opacity 0.5s ease-in-out;\n}\n[class^=\"slider-div\"] img {\n  width: 200px;\n}\n.slider-div-2 img {\n  grid-column: 2 / 3;\n}\n\n.dot-Div {\n  grid-column: 2 / 3;\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  gap: 15px;\n  margin-top: 25px;\n}\n\n.partner-title {\n  grid-column: 1 / 4;\n  color: var(--white);\n}\n.dot-Div > img {\n  height: 10px;\n}\n\n#dot-selected {\n  filter: invert(95%) sepia(2%) saturate(10%) hue-rotate(314deg) brightness(40%)\n    contrast(92%);\n}\n"],"sourceRoot":""}]);
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
function card(image, title, status, button, icon) {
  const coursesDiv = document.querySelector(".course-cards");
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  coursesDiv.appendChild(cardDiv);

  const cardContentDiv = document.createElement("div");

  const cardPhoto = new Image();
  cardPhoto.src = image;
  cardPhoto.classList.add("card-photo");

  const cardBtnIcon = new Image();
  cardBtnIcon.src = icon;

  const cardTitle = document.createElement("p");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = `${title}`;
  const cardStatus = document.createElement("p");
  cardStatus.classList.add("card-status");
  cardStatus.textContent = `${status}`;

  const cardButton = document.createElement("button");
  cardButton.textContent = `${button}`;

  const cardBtnDiv = document.createElement("div");
  cardBtnDiv.classList.add("card-btn-section");

  cardDiv.appendChild(cardContentDiv);
  cardContentDiv.appendChild(cardPhoto);
  cardContentDiv.appendChild(cardTitle);
  cardContentDiv.appendChild(cardStatus);

  cardDiv.appendChild(cardBtnDiv);
  cardBtnDiv.appendChild(cardBtnIcon);
  cardBtnDiv.appendChild(cardButton);
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
/* harmony import */ var _photos_card_btn_icon_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./photos/card-btn-icon.svg */ "./src/photos/card-btn-icon.svg");
/* harmony import */ var _cardFactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cardFactory */ "./src/cardFactory.js");
/* harmony import */ var _photos_footer_tbc_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./photos/footer/tbc.png */ "./src/photos/footer/tbc.png");
/* harmony import */ var _photos_footer_fb_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./photos/footer/fb.png */ "./src/photos/footer/fb.png");
/* harmony import */ var _photos_footer_youtube_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./photos/footer/youtube.png */ "./src/photos/footer/youtube.png");
/* harmony import */ var _photos_tbcAcdLogo_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./photos/tbcAcdLogo.svg */ "./src/photos/tbcAcdLogo.svg");
/* harmony import */ var _qaFactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./qaFactory */ "./src/qaFactory.js");
/* harmony import */ var _photos_question_expend_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./photos/question-expend.svg */ "./src/photos/question-expend.svg");
/* harmony import */ var _photos_sliderIcon_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./photos/sliderIcon.svg */ "./src/photos/sliderIcon.svg");
/* harmony import */ var _photos_slider_dot_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./photos/slider-dot.svg */ "./src/photos/slider-dot.svg");
/* harmony import */ var _sliderFunction__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sliderFunction */ "./src/sliderFunction.js");
/* harmony import */ var _photos_partners_slid1_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./photos/partners/slid1.png */ "./src/photos/partners/slid1.png");
/* harmony import */ var _photos_partners_slid2_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./photos/partners/slid2.png */ "./src/photos/partners/slid2.png");
/* harmony import */ var _photos_partners_slid3_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./photos/partners/slid3.png */ "./src/photos/partners/slid3.png");
/* harmony import */ var _photos_partners_slid4_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./photos/partners/slid4.png */ "./src/photos/partners/slid4.png");
/* harmony import */ var _photos_partners_slid5_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./photos/partners/slid5.png */ "./src/photos/partners/slid5.png");
/* harmony import */ var _photos_partners_slid6_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./photos/partners/slid6.png */ "./src/photos/partners/slid6.png");
/* harmony import */ var _photos_partners_slid7_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./photos/partners/slid7.png */ "./src/photos/partners/slid7.png");
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
  logo.src = _photos_tbcAcdLogo_svg__WEBPACK_IMPORTED_MODULE_14__;

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
  const courseTitleDiv = document.createElement("span");
  courseTitleDiv.classList.add("courses-title");
  courseTitleDiv.textContent = "სასწავლო კურსები";
  courses.appendChild(courseTitleDiv);
  ("./photos/partners/slid1.png");
  const courseCardDiv = document.createElement("div");
  courseCardDiv.classList.add("course-cards");
  courses.appendChild(courseCardDiv);

  const isoCard = (0,_cardFactory__WEBPACK_IMPORTED_MODULE_10__.card)(
    _photos_courses_iso_jpg__WEBPACK_IMPORTED_MODULE_0__,
    "iOS Development",
    "რეგისტრაცია დასრულებულია",
    "კურსის დეტალები",
    _photos_card_btn_icon_svg__WEBPACK_IMPORTED_MODULE_9__,
  );
  const reactCard = (0,_cardFactory__WEBPACK_IMPORTED_MODULE_10__.card)(
    _photos_courses_react_jpg__WEBPACK_IMPORTED_MODULE_1__,
    "Reacte",
    "რეგისტრაცია დასრულებულია",
    "კურსის დეტალები",
    _photos_card_btn_icon_svg__WEBPACK_IMPORTED_MODULE_9__,
  );
  const intrPythonCard = (0,_cardFactory__WEBPACK_IMPORTED_MODULE_10__.card)(
    _photos_courses_intro_python_jpg__WEBPACK_IMPORTED_MODULE_2__,
    "Intro to Python",
    "რეგისტრაცია დასრულებულია",
    "კურსის დეტალები",
    _photos_card_btn_icon_svg__WEBPACK_IMPORTED_MODULE_9__,
  );
  const advancedPythonCard = (0,_cardFactory__WEBPACK_IMPORTED_MODULE_10__.card)(
    _photos_courses_advan_python_jpg__WEBPACK_IMPORTED_MODULE_3__,
    "Advanced Python",
    "რეგისტრაცია დასრულებულია",
    "კურსის დეტალები",
    _photos_card_btn_icon_svg__WEBPACK_IMPORTED_MODULE_9__,
  );
  const cybersecurityCard = (0,_cardFactory__WEBPACK_IMPORTED_MODULE_10__.card)(
    _photos_courses_cybersecurity_jpg__WEBPACK_IMPORTED_MODULE_4__,
    "Advanced Cybersecurity Course",
    "რეგისტრაცია დასრულებულია",
    "კურსის დეტალები",
    _photos_card_btn_icon_svg__WEBPACK_IMPORTED_MODULE_9__,
  );
  const totCard = (0,_cardFactory__WEBPACK_IMPORTED_MODULE_10__.card)(
    _photos_courses_tot_jpg__WEBPACK_IMPORTED_MODULE_5__,
    "ToT - Training of Trainers",
    "რეგისტრაცია დასრულებულია",
    "კურსის დეტალები",
    _photos_card_btn_icon_svg__WEBPACK_IMPORTED_MODULE_9__,
  );
  const BlockchainCard = (0,_cardFactory__WEBPACK_IMPORTED_MODULE_10__.card)(
    _photos_courses_blockchain_jpg__WEBPACK_IMPORTED_MODULE_6__,
    "Blockchain",
    "რეგისტრაცია დასრულებულია",
    "კურსის დეტალები",
    _photos_card_btn_icon_svg__WEBPACK_IMPORTED_MODULE_9__,
  );
  const DevOpsCard = (0,_cardFactory__WEBPACK_IMPORTED_MODULE_10__.card)(
    _photos_courses_devops_jpg__WEBPACK_IMPORTED_MODULE_7__,
    "DevOps",
    "რეგისტრაცია დასრულებულია",
    "კურსის დეტალები",
    _photos_card_btn_icon_svg__WEBPACK_IMPORTED_MODULE_9__,
  );
  const SecurityCard = (0,_cardFactory__WEBPACK_IMPORTED_MODULE_10__.card)(
    _photos_courses_security_jpg__WEBPACK_IMPORTED_MODULE_8__,
    "Information Security Governance",
    "რეგისტრაცია დასრულებულია",
    "კურსის დეტალები",
    _photos_card_btn_icon_svg__WEBPACK_IMPORTED_MODULE_9__,
  );

  // slider section

  // Define image paths
  const slid1 = new Image();
  slid1.src = _photos_partners_slid1_png__WEBPACK_IMPORTED_MODULE_20__;

  const slid2 = new Image();
  slid2.src = _photos_partners_slid2_png__WEBPACK_IMPORTED_MODULE_21__;

  const slid3 = new Image();
  slid3.src = _photos_partners_slid3_png__WEBPACK_IMPORTED_MODULE_22__;

  const slid4 = new Image();
  slid4.src = _photos_partners_slid4_png__WEBPACK_IMPORTED_MODULE_23__;

  const slid5 = new Image();
  slid5.src = _photos_partners_slid5_png__WEBPACK_IMPORTED_MODULE_24__;

  const slid6 = new Image();
  slid6.src = _photos_partners_slid6_png__WEBPACK_IMPORTED_MODULE_25__;

  const slid7 = new Image();
  slid7.src = _photos_partners_slid7_png__WEBPACK_IMPORTED_MODULE_26__;

  const logos = [[slid1, slid2, slid3], [slid4, slid5, slid6], [slid7]];
  (0,_sliderFunction__WEBPACK_IMPORTED_MODULE_19__.slider)(logos, _photos_sliderIcon_svg__WEBPACK_IMPORTED_MODULE_17__, _photos_slider_dot_svg__WEBPACK_IMPORTED_MODULE_18__);

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

  const question1 = (0,_qaFactory__WEBPACK_IMPORTED_MODULE_15__.questionsAndAnswers)(
    "როგორ ხდება კურსებზე რეგისტრაცია და შერჩევა?",
    _photos_question_expend_svg__WEBPACK_IMPORTED_MODULE_16__,
    "answer I",
  );

  const question2 = (0,_qaFactory__WEBPACK_IMPORTED_MODULE_15__.questionsAndAnswers)(
    "შემიძლია თუ არა ერთზე მეტ კურსზე რეგისტრაცია?",
    _photos_question_expend_svg__WEBPACK_IMPORTED_MODULE_16__,
    "TBC X USAID ტექნოლოგიური განათლებისთვის პროგრამაში თითოეულ კანდიდატს აქვს მხოლოდ ერთი კურსის გავლის შესაძლებლობა. გარდა Information Security და Python კურსებისა, სადაც Basic დონის გავლის შემდეგ შესაძლებელია სწავლის გაგრძელება Advance დონეზე.",
  );
  const question3 = (0,_qaFactory__WEBPACK_IMPORTED_MODULE_15__.questionsAndAnswers)(
    "რა ღირს სწავლა პროგრამის ფარგლებში?",
    _photos_question_expend_svg__WEBPACK_IMPORTED_MODULE_16__,
    "პროგრამის ფარგლებში კურსებზე სწავლა სრულიად დაფინანსებულია თიბისი ბანკისა და USAID-ის მიერ.",
  );

  // footer section
  const footerTextDiv = document.createElement("div");
  footerTextDiv.classList.add("footer-text");

  const footerLogo = new Image();
  footerLogo.src = _photos_footer_tbc_png__WEBPACK_IMPORTED_MODULE_11__;

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
  fbLink.src = _photos_footer_fb_png__WEBPACK_IMPORTED_MODULE_12__;

  const youtubeLink = new Image();
  youtubeLink.src = _photos_footer_youtube_png__WEBPACK_IMPORTED_MODULE_13__;

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

  const title = document.createElement("p");
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

/***/ "./src/fonts/tbc-bold.woff2":
/*!**********************************!*\
  !*** ./src/fonts/tbc-bold.woff2 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d96b096c64788298038.woff2";

/***/ }),

/***/ "./src/fonts/tbc-regular-bold.woff2":
/*!******************************************!*\
  !*** ./src/fonts/tbc-regular-bold.woff2 ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ce5bb2926208d4c5703f.woff2";

/***/ }),

/***/ "./src/fonts/tbc-regular.woff2":
/*!*************************************!*\
  !*** ./src/fonts/tbc-regular.woff2 ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "56dd44c8a616a8d7b053.woff2";

/***/ }),

/***/ "./src/photos/card-btn-icon.svg":
/*!**************************************!*\
  !*** ./src/photos/card-btn-icon.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4180cfadb5b43b4f98ee.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUhBQXlDO0FBQ3JGLDRDQUE0Qyx5SUFBaUQ7QUFDN0YsNENBQTRDLCtIQUE0QztBQUN4Riw0Q0FBNEMsK0hBQTRDO0FBQ3hGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLFFBQVEsS0FBSyxPQUFPLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtB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Q3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNxQjs7QUFFMUMsdURBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvY2FyZEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvZG9tQ29udGVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9xYUZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc2xpZGVyRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy90YmMtYm9sZC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvdGJjLXJlZ3VsYXItYm9sZC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZm9udHMvdGJjLXJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL3Bob3Rvcy90aXRsZS1waG90bzMuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiYm9sZFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zdHlsZTogYm9sZDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcInJlZ3VsYXItYm9sZFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJyZWd1bGFyXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdChcIndvZmYyXCIpO1xufVxuXG46cm9vdCB7XG4gIC0td2hpdGU6IHdoaXRlO1xuICAtLWRhcms6IHJnYigyNiwgMzAsIDMxKTtcbiAgLS1ncmV5OiByZ2IoNDMsIDQzLCA0Myk7XG4gIC0tYmx1ZTogcmdiKDAsIDE2MywgMjI0KTtcbiAgLS1ibGFjazogcmdiKDIyLCAyMiwgMjIpO1xuICAtLWNvdXJzZS1jYXJkLWNvcm5lcjogNXB4O1xufVxuLmhlYWRlcixcbi50aXRsZS1zZWN0aW9uLFxuLnBhcmFncmFwaC1zZWN0aW9uLFxuLmNvdXJzZXMtc2VjdGlvbixcbi5wYXJ0bmVycy1zZWN0aW9uLFxuLnF1ZXN0aW9ucy1zZWN0aW9uLFxuLmZvb3RlciB7XG4gIHBhZGRpbmc6IDAgMTUwcHggMCAxNTBweDtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMzAsIDMxLCAwLjk4KTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwcHg7XG59XG5cbi5oZWFkZXIgaW1nIHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLmhlYWRlciBidXR0b24ge1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG4uaGVhZGVyLWxpbmtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA1MHB4O1xufVxuXG4udGl0bGUtc2VjdGlvbiB7XG4gIGhlaWdodDogMzUycHg7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcImJvbGRcIjtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4ucGFyYWdyYXBoLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICBmb250LWZhbWlseTogXCJyZWd1bGFyXCI7XG59XG4ucGFyYWdyYXBoLXNlY3Rpb24gcCB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgd2lkdGg6IDkwMHB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG5idXR0b24ge1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbn1cblxuLnBhcmFncmFwaC1zZWN0aW9uIGJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LWZhbWlseTogXCJyZWd1bGFyLWJvbGRcIjtcbn1cblxuLnBhcmFncmFwaC1zZWN0aW9uIGJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiByZ2IoMTE3LCAxMTcsIDExNyk7XG59XG4uY291cnNlcy1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG4uY291cnNlcy1zZWN0aW9uID4gc3Bhbixcbi5wYXJ0bmVyLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwicmVndWxhclwiO1xuICBmb250LXNpemU6IDI1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuLmNhcmQtcGhvdG8ge1xuICB3aWR0aDogMzAwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLWNvdXJzZS1jYXJkLWNvcm5lcik7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB2YXIoLS1jb3Vyc2UtY2FyZC1jb3JuZXIpO1xufVxuLmNvdXJzZS1jYXJkcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDMwMHB4KTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgNDE0cHgpO1xuICBnYXA6IDUwcHg7XG59XG5cbi5jb3Vyc2UtY2FyZHMgPiBkaXYge1xuICBvdXRsaW5lOiAwLjVweCBzb2xpZCB2YXIoLS1ncmV5KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tY291cnNlLWNhcmQtY29ybmVyKTtcbn1cblxuLmNhcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcbn1cbi5jYXJkLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwicmVndWxhclwiO1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4uY2FyZC1zdGF0dXMge1xuICBmb250LWZhbWlseTogXCJyZWd1bGFyXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jYXJkID4gZGl2ID4gcCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLmNhcmQtYnRuLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1cHggMTkwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY2FyZC1idG4tc2VjdGlvbiA+IGJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcInJlZ3VsYXItYm9sZFwiO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY2FyZC1idG4tc2VjdGlvbiA+IGJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiByZ2IoNzEsIDEyNSwgMjAwKTtcbn1cbi5jYXJkLWJ0bi1zZWN0aW9uID4gaW1nIHtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuXG4ucXVlc3Rpb25zLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4ucXVlc3Rpb25zLXNlY3Rpb24gaDEge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnF1ZXN0aW9uLXRpdGxlLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5xdWVzdGlvbi1zdWItZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnF1ZXN0aW9uLWRpdiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS13aGl0ZSk7XG59XG4ucXVlc3Rpb24tZGl2IGltZyxcbi5zbGlkZXItYnRuLWxlZnQsXG4uc2xpZGVyLWJ0bi1yaWdodCxcbi5kb3QtRGl2IHtcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0MzklKSBodWUtcm90YXRlKDEwNWRlZylcbiAgICBicmlnaHRuZXNzKDExMyUpIGNvbnRyYXN0KDExNSUpO1xufVxuLmZvb3RlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBoZWlnaHQ6IDEyOHB4O1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG4uZm9vdGVyLWxpbmtzIHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuI29wZW5lZCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG4ucXVlc3Rpb24tc3BhY2Uge1xuICBoZWlnaHQ6IDE1cHg7XG59XG5cbi5hbnN3ZXItcGFyYWdyYXBoLWRpdiB7XG4gIG1hcmdpbjogNTBweCAwcHggNTBweCAyMHB4O1xufVxuXG4vKiBzbGlkZXIgc2VjdGlvbiAqL1xuLnBhcnRuZXJzLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG4ucGFydG5lcnMtZGlzcGxheSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIGF1dG8pO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucGFydG5lci10aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4uc2xpZGVyLWJ0bi1yaWdodCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG4uc2xpZGVyLWJ0bi1sZWZ0IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG59XG5cbi5zbGlkZXItYnRuLWxlZnQsXG4uc2xpZGVyLWJ0bi1yaWdodCB7XG4gIGhlaWdodDogMzRweDtcbn1cbltjbGFzc149XCJzbGlkZXItZGl2XCJdIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMjAwcHgpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNTBweDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xufVxuW2NsYXNzXj1cInNsaWRlci1kaXZcIl0gaW1nIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuLnNsaWRlci1kaXYtMiBpbWcge1xuICBncmlkLWNvbHVtbjogMiAvIDM7XG59XG5cbi5kb3QtRGl2IHtcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBhdXRvKTtcbiAgZ2FwOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4ucGFydG5lci10aXRsZSB7XG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cbi5kb3QtRGl2ID4gaW1nIHtcbiAgaGVpZ2h0OiAxMHB4O1xufVxuXG4jZG90LXNlbGVjdGVkIHtcbiAgZmlsdGVyOiBpbnZlcnQoOTUlKSBzZXBpYSgyJSkgc2F0dXJhdGUoMTAlKSBodWUtcm90YXRlKDMxNGRlZykgYnJpZ2h0bmVzcyg0MCUpXG4gICAgY29udHJhc3QoOTIlKTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQiw0REFBa0Q7RUFDbEQsZ0JBQWdCO0VB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O0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBLG1CQUFtQjtBQUNuQjtFQUNFLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2Isb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0U7aUJBQ2U7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcImJvbGRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvdGJjLWJvbGQud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zdHlsZTogYm9sZDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcInJlZ3VsYXItYm9sZFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9mb250cy90YmMtcmVndWxhci1ib2xkLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9mb250cy90YmMtcmVndWxhci53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS13aGl0ZTogd2hpdGU7XFxuICAtLWRhcms6IHJnYigyNiwgMzAsIDMxKTtcXG4gIC0tZ3JleTogcmdiKDQzLCA0MywgNDMpO1xcbiAgLS1ibHVlOiByZ2IoMCwgMTYzLCAyMjQpO1xcbiAgLS1ibGFjazogcmdiKDIyLCAyMiwgMjIpO1xcbiAgLS1jb3Vyc2UtY2FyZC1jb3JuZXI6IDVweDtcXG59XFxuLmhlYWRlcixcXG4udGl0bGUtc2VjdGlvbixcXG4ucGFyYWdyYXBoLXNlY3Rpb24sXFxuLmNvdXJzZXMtc2VjdGlvbixcXG4ucGFydG5lcnMtc2VjdGlvbixcXG4ucXVlc3Rpb25zLXNlY3Rpb24sXFxuLmZvb3RlciB7XFxuICBwYWRkaW5nOiAwIDE1MHB4IDAgMTUwcHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI2LCAzMCwgMzEsIDAuOTgpO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwcHg7XFxufVxcblxcbi5oZWFkZXIgaW1nIHtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuLmhlYWRlciBidXR0b24ge1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLmhlYWRlci1saW5rcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4udGl0bGUtc2VjdGlvbiB7XFxuICBoZWlnaHQ6IDM1MnB4O1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuL3Bob3Rvcy90aXRsZS1waG90bzMuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJib2xkXFxcIjtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLnBhcmFncmFwaC1zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxuICBmb250LWZhbWlseTogXFxcInJlZ3VsYXJcXFwiO1xcbn1cXG4ucGFyYWdyYXBoLXNlY3Rpb24gcCB7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICB3aWR0aDogOTAwcHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLnBhcmFncmFwaC1zZWN0aW9uIGJ1dHRvbiB7XFxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJyZWd1bGFyLWJvbGRcXFwiO1xcbn1cXG5cXG4ucGFyYWdyYXBoLXNlY3Rpb24gYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoMTE3LCAxMTcsIDExNyk7XFxufVxcbi5jb3Vyc2VzLXNlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbn1cXG4uY291cnNlcy1zZWN0aW9uID4gc3BhbixcXG4ucGFydG5lci10aXRsZSB7XFxuICBmb250LWZhbWlseTogXFxcInJlZ3VsYXJcXFwiO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxufVxcbi5jYXJkLXBob3RvIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLWNvdXJzZS1jYXJkLWNvcm5lcik7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogdmFyKC0tY291cnNlLWNhcmQtY29ybmVyKTtcXG59XFxuLmNvdXJzZS1jYXJkcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMzAwcHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgNDE0cHgpO1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4uY291cnNlLWNhcmRzID4gZGl2IHtcXG4gIG91dGxpbmU6IDAuNXB4IHNvbGlkIHZhcigtLWdyZXkpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tY291cnNlLWNhcmQtY29ybmVyKTtcXG59XFxuXFxuLmNhcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbn1cXG4uY2FyZC10aXRsZSB7XFxuICBmb250LWZhbWlseTogXFxcInJlZ3VsYXJcXFwiO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XFxufVxcbi5jYXJkLXN0YXR1cyB7XFxuICBmb250LWZhbWlseTogXFxcInJlZ3VsYXJcXFwiO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uY2FyZCA+IGRpdiA+IHAge1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcbi5jYXJkLWJ0bi1zZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNXB4IDE5MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNhcmQtYnRuLXNlY3Rpb24gPiBidXR0b24ge1xcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicmVndWxhci1ib2xkXFxcIjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLmNhcmQtYnRuLXNlY3Rpb24gPiBidXR0b246aG92ZXIge1xcbiAgY29sb3I6IHJnYig3MSwgMTI1LCAyMDApO1xcbn1cXG4uY2FyZC1idG4tc2VjdGlvbiA+IGltZyB7XFxuICBoZWlnaHQ6IDE1cHg7XFxufVxcblxcbi5xdWVzdGlvbnMtc2VjdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgcGFkZGluZy10b3A6IDUwcHg7XFxufVxcblxcbi5xdWVzdGlvbnMtc2VjdGlvbiBoMSB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLnF1ZXN0aW9uLXRpdGxlLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnF1ZXN0aW9uLXN1Yi1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5xdWVzdGlvbi1kaXYge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG59XFxuLnF1ZXN0aW9uLWRpdiBpbWcsXFxuLnNsaWRlci1idG4tbGVmdCxcXG4uc2xpZGVyLWJ0bi1yaWdodCxcXG4uZG90LURpdiB7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQzOSUpIGh1ZS1yb3RhdGUoMTA1ZGVnKVxcbiAgICBicmlnaHRuZXNzKDExMyUpIGNvbnRyYXN0KDExNSUpO1xcbn1cXG4uZm9vdGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBoZWlnaHQ6IDEyOHB4O1xcbiAgcGFkZGluZy10b3A6IDUwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXG59XFxuLmZvb3Rlci1saW5rcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4jb3BlbmVkIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcbi5xdWVzdGlvbi1zcGFjZSB7XFxuICBoZWlnaHQ6IDE1cHg7XFxufVxcblxcbi5hbnN3ZXItcGFyYWdyYXBoLWRpdiB7XFxuICBtYXJnaW46IDUwcHggMHB4IDUwcHggMjBweDtcXG59XFxuXFxuLyogc2xpZGVyIHNlY3Rpb24gKi9cXG4ucGFydG5lcnMtc2VjdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gIGhlaWdodDogMjUwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcXG59XFxuLnBhcnRuZXJzLWRpc3BsYXkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIGF1dG8pO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnBhcnRuZXItdGl0bGUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZy10b3A6IDUwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLnNsaWRlci1idG4tcmlnaHQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuLnNsaWRlci1idG4tbGVmdCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG59XFxuXFxuLnNsaWRlci1idG4tbGVmdCxcXG4uc2xpZGVyLWJ0bi1yaWdodCB7XFxuICBoZWlnaHQ6IDM0cHg7XFxufVxcbltjbGFzc149XFxcInNsaWRlci1kaXZcXFwiXSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMjAwcHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNTBweDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLWluLW91dDtcXG59XFxuW2NsYXNzXj1cXFwic2xpZGVyLWRpdlxcXCJdIGltZyB7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcbi5zbGlkZXItZGl2LTIgaW1nIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG59XFxuXFxuLmRvdC1EaXYge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIGF1dG8pO1xcbiAgZ2FwOiAxNXB4O1xcbiAgbWFyZ2luLXRvcDogMjVweDtcXG59XFxuXFxuLnBhcnRuZXItdGl0bGUge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuLmRvdC1EaXYgPiBpbWcge1xcbiAgaGVpZ2h0OiAxMHB4O1xcbn1cXG5cXG4jZG90LXNlbGVjdGVkIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDk1JSkgc2VwaWEoMiUpIHNhdHVyYXRlKDEwJSkgaHVlLXJvdGF0ZSgzMTRkZWcpIGJyaWdodG5lc3MoNDAlKVxcbiAgICBjb250cmFzdCg5MiUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGNhcmQoaW1hZ2UsIHRpdGxlLCBzdGF0dXMsIGJ1dHRvbiwgaWNvbikge1xuICBjb25zdCBjb3Vyc2VzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3Vyc2UtY2FyZHNcIik7XG4gIGNvbnN0IGNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkRGl2LmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBjb3Vyc2VzRGl2LmFwcGVuZENoaWxkKGNhcmREaXYpO1xuXG4gIGNvbnN0IGNhcmRDb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdCBjYXJkUGhvdG8gPSBuZXcgSW1hZ2UoKTtcbiAgY2FyZFBob3RvLnNyYyA9IGltYWdlO1xuICBjYXJkUGhvdG8uY2xhc3NMaXN0LmFkZChcImNhcmQtcGhvdG9cIik7XG5cbiAgY29uc3QgY2FyZEJ0bkljb24gPSBuZXcgSW1hZ2UoKTtcbiAgY2FyZEJ0bkljb24uc3JjID0gaWNvbjtcblxuICBjb25zdCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY2FyZFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJjYXJkLXRpdGxlXCIpO1xuICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSBgJHt0aXRsZX1gO1xuICBjb25zdCBjYXJkU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNhcmRTdGF0dXMuY2xhc3NMaXN0LmFkZChcImNhcmQtc3RhdHVzXCIpO1xuICBjYXJkU3RhdHVzLnRleHRDb250ZW50ID0gYCR7c3RhdHVzfWA7XG5cbiAgY29uc3QgY2FyZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhcmRCdXR0b24udGV4dENvbnRlbnQgPSBgJHtidXR0b259YDtcblxuICBjb25zdCBjYXJkQnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FyZEJ0bkRpdi5jbGFzc0xpc3QuYWRkKFwiY2FyZC1idG4tc2VjdGlvblwiKTtcblxuICBjYXJkRGl2LmFwcGVuZENoaWxkKGNhcmRDb250ZW50RGl2KTtcbiAgY2FyZENvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY2FyZFBob3RvKTtcbiAgY2FyZENvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlKTtcbiAgY2FyZENvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY2FyZFN0YXR1cyk7XG5cbiAgY2FyZERpdi5hcHBlbmRDaGlsZChjYXJkQnRuRGl2KTtcbiAgY2FyZEJ0bkRpdi5hcHBlbmRDaGlsZChjYXJkQnRuSWNvbik7XG4gIGNhcmRCdG5EaXYuYXBwZW5kQ2hpbGQoY2FyZEJ1dHRvbik7XG59XG5cbmV4cG9ydCB7IGNhcmQgfTtcbiIsIi8vIGltcG9ydCB0aXRsZVBob3RvSW1wb3J0IGZyb20gXCIuL3Bob3Rvcy90aXRsZS1waG90by5qcGdcIjtcbmltcG9ydCBpb3MgZnJvbSBcIi4vcGhvdG9zL2NvdXJzZXMvaXNvLmpwZ1wiO1xuaW1wb3J0IHJlYWN0ZSBmcm9tIFwiLi9waG90b3MvY291cnNlcy9yZWFjdC5qcGdcIjtcbmltcG9ydCBpbnRQeXRob24gZnJvbSBcIi4vcGhvdG9zL2NvdXJzZXMvaW50cm8tcHl0aG9uLmpwZ1wiO1xuaW1wb3J0IGFkdlB5dGhvbiBmcm9tIFwiLi9waG90b3MvY291cnNlcy9hZHZhbi1weXRob24uanBnXCI7XG5pbXBvcnQgY3liZXJzZWN1cml0eSBmcm9tIFwiLi9waG90b3MvY291cnNlcy9jeWJlcnNlY3VyaXR5LmpwZ1wiO1xuaW1wb3J0IHRvdCBmcm9tIFwiLi9waG90b3MvY291cnNlcy90b3QuanBnXCI7XG5pbXBvcnQgYmxvY2tjaGFpbiBmcm9tIFwiLi9waG90b3MvY291cnNlcy9ibG9ja2NoYWluLmpwZ1wiO1xuaW1wb3J0IGRldm9wcyBmcm9tIFwiLi9waG90b3MvY291cnNlcy9kZXZvcHMuanBnXCI7XG5pbXBvcnQgc2VjdXJpdHkgZnJvbSBcIi4vcGhvdG9zL2NvdXJzZXMvc2VjdXJpdHkuanBnXCI7XG5pbXBvcnQgY2FyZEljb24gZnJvbSBcIi4vcGhvdG9zL2NhcmQtYnRuLWljb24uc3ZnXCI7XG5pbXBvcnQgeyBjYXJkIH0gZnJvbSBcIi4vY2FyZEZhY3RvcnlcIjtcbmltcG9ydCB0YmMgZnJvbSBcIi4vcGhvdG9zL2Zvb3Rlci90YmMucG5nXCI7XG5pbXBvcnQgZmIgZnJvbSBcIi4vcGhvdG9zL2Zvb3Rlci9mYi5wbmdcIjtcbmltcG9ydCB5b3V0dWJlIGZyb20gXCIuL3Bob3Rvcy9mb290ZXIveW91dHViZS5wbmdcIjtcbmltcG9ydCB0YmNBY2RMb2dvIGZyb20gXCIuL3Bob3Rvcy90YmNBY2RMb2dvLnN2Z1wiO1xuaW1wb3J0IHsgcXVlc3Rpb25zQW5kQW5zd2VycyB9IGZyb20gXCIuL3FhRmFjdG9yeVwiO1xuaW1wb3J0IHF1ZXN0aW9uSWNvbiBmcm9tIFwiLi9waG90b3MvcXVlc3Rpb24tZXhwZW5kLnN2Z1wiO1xuaW1wb3J0IHNsaWRlckljb24gZnJvbSBcIi4vcGhvdG9zL3NsaWRlckljb24uc3ZnXCI7XG5pbXBvcnQgc2xpZGVyRG90IGZyb20gXCIuL3Bob3Rvcy9zbGlkZXItZG90LnN2Z1wiO1xuaW1wb3J0IHsgc2xpZGVyIH0gZnJvbSBcIi4vc2xpZGVyRnVuY3Rpb25cIjtcbmltcG9ydCBzbGlkZTEgZnJvbSBcIi4vcGhvdG9zL3BhcnRuZXJzL3NsaWQxLnBuZ1wiO1xuaW1wb3J0IHNsaWRlMiBmcm9tIFwiLi9waG90b3MvcGFydG5lcnMvc2xpZDIucG5nXCI7XG5pbXBvcnQgc2xpZGUzIGZyb20gXCIuL3Bob3Rvcy9wYXJ0bmVycy9zbGlkMy5wbmdcIjtcbmltcG9ydCBzbGlkZTQgZnJvbSBcIi4vcGhvdG9zL3BhcnRuZXJzL3NsaWQ0LnBuZ1wiO1xuaW1wb3J0IHNsaWRlNSBmcm9tIFwiLi9waG90b3MvcGFydG5lcnMvc2xpZDUucG5nXCI7XG5pbXBvcnQgc2xpZGU2IGZyb20gXCIuL3Bob3Rvcy9wYXJ0bmVycy9zbGlkNi5wbmdcIjtcbmltcG9ydCBzbGlkZTcgZnJvbSBcIi4vcGhvdG9zL3BhcnRuZXJzL3NsaWQ3LnBuZ1wiO1xuXG5mdW5jdGlvbiBEb21Db250ZW50KCkge1xuICBjb25zdCBjb250YWluZXJTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpdGUtY29udGFpbmVyXCIpO1xuXG4gIC8vIG1ha2luZyBtYWluIGRpdnNcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGUtc2VjdGlvblwiKTtcblxuICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwYXJhZ3JhcGguY2xhc3NMaXN0LmFkZChcInBhcmFncmFwaC1zZWN0aW9uXCIpO1xuXG4gIGNvbnN0IGNvdXJzZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb3Vyc2VzLmNsYXNzTGlzdC5hZGQoXCJjb3Vyc2VzLXNlY3Rpb25cIik7XG5cbiAgY29uc3QgcGFydG5lcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwYXJ0bmVycy5jbGFzc0xpc3QuYWRkKFwicGFydG5lcnMtc2VjdGlvblwiKTtcblxuICBjb25zdCBxdWVzdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBxdWVzdGlvbnMuY2xhc3NMaXN0LmFkZChcInF1ZXN0aW9ucy1zZWN0aW9uXCIpO1xuXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuXG4gIGNvbnRhaW5lclNlbGVjdC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb250YWluZXJTZWxlY3QuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBjb250YWluZXJTZWxlY3QuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbiAgY29udGFpbmVyU2VsZWN0LmFwcGVuZENoaWxkKGNvdXJzZXMpO1xuICBjb250YWluZXJTZWxlY3QuYXBwZW5kQ2hpbGQocGFydG5lcnMpO1xuICBjb250YWluZXJTZWxlY3QuYXBwZW5kQ2hpbGQocXVlc3Rpb25zKTtcbiAgY29udGFpbmVyU2VsZWN0LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgLy8gZG9tIGhlYWRlciBjb250ZW50XG4gIGNvbnN0IGxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgbG9nby5zcmMgPSB0YmNBY2RMb2dvO1xuXG4gIGNvbnN0IGhlYWRlckxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyTGlua3MuY2xhc3NMaXN0LmFkZChcImhlYWRlci1saW5rc1wiKTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJMaW5rcyk7XG5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1haW4udGV4dENvbnRlbnQgPSBcIuGDm+GDl+GDkOGDleGDkOGDoOGDmFwiO1xuXG4gIGNvbnN0IHRiY0l0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdGJjSXQudGV4dENvbnRlbnQgPSBcIlRCQyBJVFwiO1xuXG4gIGNvbnN0IHRiY1h1c2FpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHRiY1h1c2FpZC50ZXh0Q29udGVudCA9IFwiVEJDIHggVVNBSURcIjtcblxuICBjb25zdCByaXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcmlzay50ZXh0Q29udGVudCA9IFwi4YOg4YOY4YOh4YOZ4YOU4YOR4YOYXCI7XG5cbiAgaGVhZGVyTGlua3MuYXBwZW5kQ2hpbGQobWFpbik7XG4gIGhlYWRlckxpbmtzLmFwcGVuZENoaWxkKHRiY0l0KTtcbiAgaGVhZGVyTGlua3MuYXBwZW5kQ2hpbGQodGJjWHVzYWlkKTtcbiAgaGVhZGVyTGlua3MuYXBwZW5kQ2hpbGQocmlzayk7XG5cbiAgLy8gdGl0bGUgc2VjdGlvbiBkb21cbiAgLy8gY29uc3QgdGl0bGVQaG90byA9IG5ldyBJbWFnZSgpO1xuICAvLyB0aXRsZVBob3RvLnNyYyA9IHRpdGxlUGhvdG9JbXBvcnQ7XG5cbiAgLy8gdGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVQaG90byk7XG4gIC8vIGltYWdlO1xuICBjb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRpdGxlVGV4dC50ZXh0Q29udGVudCA9IFwiVEJDIHggVVNBSURcIjtcblxuICBjb25zdCB0aXRsZVRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICB0aXRsZVRleHQyLnRleHRDb250ZW50ID0gXCLhg6Lhg5Thg6Xhg5zhg53hg5rhg53hg5Lhg5jhg6Phg6Dhg5gg4YOS4YOQ4YOc4YOQ4YOX4YOa4YOU4YOR4YOY4YOh4YOX4YOV4YOY4YOhXCI7XG5cbiAgdGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVUZXh0KTtcbiAgdGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVUZXh0Mik7XG5cbiAgLy8gcGFyYWdyYXBoIHNlY3Rpb24gZG9tXG4gIGNvbnN0IHBhcmFncmFwaFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGFyYWdyYXBoVGV4dC50ZXh0Q29udGVudCA9XG4gICAgXCLigJ4gVEJDIHggVVNBSUQgLSDhg6Lhg5Thg6Xhg5zhg53hg5rhg53hg5Lhg5jhg6Phg6Dhg5gg4YOS4YOQ4YOc4YOQ4YOX4YOa4YOU4YOR4YOY4YOh4YOX4YOV4YOY4YOhIOKAnCDhg57hg6Dhg53hg5Lhg6Dhg5Dhg5vhg5AgIOGDoeGDkOGDmOGDnOGDpOGDneGDoOGDm+GDkOGDquGDmOGDnSDhg6Lhg5Thg6Xhg5zhg53hg5rhg53hg5Lhg5jhg5Thg5Hhg5jhg5cg4YOT4YOQ4YOY4YOc4YOi4YOU4YOg4YOU4YOh4YOU4YOR4YOj4YOaIOGDkOGDk+GDkOGDm+GDmOGDkOGDnOGDlOGDkeGDoSDhg5Lhg5fhg5Dhg5Xhg5Dhg5bhg53hg5Hhg5cg4YOh4YOg4YOj4YOa4YOQ4YOTIOGDk+GDkOGDpOGDmOGDnOGDkOGDnOGDoeGDlOGDkeGDo+GDmiDhg53hg5zhg5rhg5Dhg5jhg5wg4YOh4YOQ4YOS4YOQ4YOc4YOb4YOQ4YOc4YOQ4YOX4YOa4YOU4YOR4YOa4YOdIOGDnuGDoOGDkOGDpeGDouGDmOGDmeGDo+GDmiDhg5nhg6Phg6Dhg6Hhg5Thg5Hhg6EgIOGDoeGDruGDleGDkOGDk+GDkOGDoeGDruGDleGDkCBJQ1Qg4YOb4YOY4YOb4YOQ4YOg4YOX4YOj4YOa4YOU4YOR4YOY4YOXLiDhg6zhg5Dhg6Dhg5vhg5Dhg6Lhg5Thg5Hhg6Phg5og4YOZ4YOj4YOg4YOh4YOT4YOQ4YOb4YOX4YOQ4YOV4YOg4YOU4YOR4YOj4YOa4YOU4YOR4YOhIOGDlOGDq+GDmuGDlOGDleGDkOGDlyDhg6jhg5Thg6Hhg5Dhg6vhg5rhg5Thg5Hhg5rhg53hg5Hhg5Ag4YOT4YOQ4YOh4YOQ4YOl4YOb4YOT4YOc4YOU4YOcIOGDl+GDmOGDkeGDmOGDoeGDmOGDoeGDkCDhg5Phg5Ag4YOb4YOY4YOhIOGDnuGDkOGDoOGDouGDnOGDmOGDneGDoCDhg5nhg53hg5vhg57hg5Dhg5zhg5jhg5Thg5Hhg6jhg5guXCI7XG5cbiAgY29uc3QgcGFyYWdyYXBoTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHBhcmFncmFwaExpbmsudGV4dENvbnRlbnQgPSBcIuGDkuGDkOGDmOGDkuGDlCDhg5vhg5Thg6Lhg5hcIjtcblxuICBwYXJhZ3JhcGguYXBwZW5kQ2hpbGQocGFyYWdyYXBoVGV4dCk7XG4gIHBhcmFncmFwaC5hcHBlbmRDaGlsZChwYXJhZ3JhcGhMaW5rKTtcblxuICAvLyBjYXJkcyBzZWN0aW9uXG4gIGNvbnN0IGNvdXJzZVRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvdXJzZVRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJjb3Vyc2VzLXRpdGxlXCIpO1xuICBjb3Vyc2VUaXRsZURpdi50ZXh0Q29udGVudCA9IFwi4YOh4YOQ4YOh4YOs4YOQ4YOV4YOa4YOdIOGDmeGDo+GDoOGDoeGDlOGDkeGDmFwiO1xuICBjb3Vyc2VzLmFwcGVuZENoaWxkKGNvdXJzZVRpdGxlRGl2KTtcbiAgKFwiLi9waG90b3MvcGFydG5lcnMvc2xpZDEucG5nXCIpO1xuICBjb25zdCBjb3Vyc2VDYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY291cnNlQ2FyZERpdi5jbGFzc0xpc3QuYWRkKFwiY291cnNlLWNhcmRzXCIpO1xuICBjb3Vyc2VzLmFwcGVuZENoaWxkKGNvdXJzZUNhcmREaXYpO1xuXG4gIGNvbnN0IGlzb0NhcmQgPSBjYXJkKFxuICAgIGlvcyxcbiAgICBcImlPUyBEZXZlbG9wbWVudFwiLFxuICAgIFwi4YOg4YOU4YOS4YOY4YOh4YOi4YOg4YOQ4YOq4YOY4YOQIOGDk+GDkOGDoeGDoOGDo+GDmuGDlOGDkeGDo+GDmuGDmOGDkFwiLFxuICAgIFwi4YOZ4YOj4YOg4YOh4YOY4YOhIOGDk+GDlOGDouGDkOGDmuGDlOGDkeGDmFwiLFxuICAgIGNhcmRJY29uLFxuICApO1xuICBjb25zdCByZWFjdENhcmQgPSBjYXJkKFxuICAgIHJlYWN0ZSxcbiAgICBcIlJlYWN0ZVwiLFxuICAgIFwi4YOg4YOU4YOS4YOY4YOh4YOi4YOg4YOQ4YOq4YOY4YOQIOGDk+GDkOGDoeGDoOGDo+GDmuGDlOGDkeGDo+GDmuGDmOGDkFwiLFxuICAgIFwi4YOZ4YOj4YOg4YOh4YOY4YOhIOGDk+GDlOGDouGDkOGDmuGDlOGDkeGDmFwiLFxuICAgIGNhcmRJY29uLFxuICApO1xuICBjb25zdCBpbnRyUHl0aG9uQ2FyZCA9IGNhcmQoXG4gICAgaW50UHl0aG9uLFxuICAgIFwiSW50cm8gdG8gUHl0aG9uXCIsXG4gICAgXCLhg6Dhg5Thg5Lhg5jhg6Hhg6Lhg6Dhg5Dhg6rhg5jhg5Ag4YOT4YOQ4YOh4YOg4YOj4YOa4YOU4YOR4YOj4YOa4YOY4YOQXCIsXG4gICAgXCLhg5nhg6Phg6Dhg6Hhg5jhg6Eg4YOT4YOU4YOi4YOQ4YOa4YOU4YOR4YOYXCIsXG4gICAgY2FyZEljb24sXG4gICk7XG4gIGNvbnN0IGFkdmFuY2VkUHl0aG9uQ2FyZCA9IGNhcmQoXG4gICAgYWR2UHl0aG9uLFxuICAgIFwiQWR2YW5jZWQgUHl0aG9uXCIsXG4gICAgXCLhg6Dhg5Thg5Lhg5jhg6Hhg6Lhg6Dhg5Dhg6rhg5jhg5Ag4YOT4YOQ4YOh4YOg4YOj4YOa4YOU4YOR4YOj4YOa4YOY4YOQXCIsXG4gICAgXCLhg5nhg6Phg6Dhg6Hhg5jhg6Eg4YOT4YOU4YOi4YOQ4YOa4YOU4YOR4YOYXCIsXG4gICAgY2FyZEljb24sXG4gICk7XG4gIGNvbnN0IGN5YmVyc2VjdXJpdHlDYXJkID0gY2FyZChcbiAgICBjeWJlcnNlY3VyaXR5LFxuICAgIFwiQWR2YW5jZWQgQ3liZXJzZWN1cml0eSBDb3Vyc2VcIixcbiAgICBcIuGDoOGDlOGDkuGDmOGDoeGDouGDoOGDkOGDquGDmOGDkCDhg5Phg5Dhg6Hhg6Dhg6Phg5rhg5Thg5Hhg6Phg5rhg5jhg5BcIixcbiAgICBcIuGDmeGDo+GDoOGDoeGDmOGDoSDhg5Phg5Thg6Lhg5Dhg5rhg5Thg5Hhg5hcIixcbiAgICBjYXJkSWNvbixcbiAgKTtcbiAgY29uc3QgdG90Q2FyZCA9IGNhcmQoXG4gICAgdG90LFxuICAgIFwiVG9UIC0gVHJhaW5pbmcgb2YgVHJhaW5lcnNcIixcbiAgICBcIuGDoOGDlOGDkuGDmOGDoeGDouGDoOGDkOGDquGDmOGDkCDhg5Phg5Dhg6Hhg6Dhg6Phg5rhg5Thg5Hhg6Phg5rhg5jhg5BcIixcbiAgICBcIuGDmeGDo+GDoOGDoeGDmOGDoSDhg5Phg5Thg6Lhg5Dhg5rhg5Thg5Hhg5hcIixcbiAgICBjYXJkSWNvbixcbiAgKTtcbiAgY29uc3QgQmxvY2tjaGFpbkNhcmQgPSBjYXJkKFxuICAgIGJsb2NrY2hhaW4sXG4gICAgXCJCbG9ja2NoYWluXCIsXG4gICAgXCLhg6Dhg5Thg5Lhg5jhg6Hhg6Lhg6Dhg5Dhg6rhg5jhg5Ag4YOT4YOQ4YOh4YOg4YOj4YOa4YOU4YOR4YOj4YOa4YOY4YOQXCIsXG4gICAgXCLhg5nhg6Phg6Dhg6Hhg5jhg6Eg4YOT4YOU4YOi4YOQ4YOa4YOU4YOR4YOYXCIsXG4gICAgY2FyZEljb24sXG4gICk7XG4gIGNvbnN0IERldk9wc0NhcmQgPSBjYXJkKFxuICAgIGRldm9wcyxcbiAgICBcIkRldk9wc1wiLFxuICAgIFwi4YOg4YOU4YOS4YOY4YOh4YOi4YOg4YOQ4YOq4YOY4YOQIOGDk+GDkOGDoeGDoOGDo+GDmuGDlOGDkeGDo+GDmuGDmOGDkFwiLFxuICAgIFwi4YOZ4YOj4YOg4YOh4YOY4YOhIOGDk+GDlOGDouGDkOGDmuGDlOGDkeGDmFwiLFxuICAgIGNhcmRJY29uLFxuICApO1xuICBjb25zdCBTZWN1cml0eUNhcmQgPSBjYXJkKFxuICAgIHNlY3VyaXR5LFxuICAgIFwiSW5mb3JtYXRpb24gU2VjdXJpdHkgR292ZXJuYW5jZVwiLFxuICAgIFwi4YOg4YOU4YOS4YOY4YOh4YOi4YOg4YOQ4YOq4YOY4YOQIOGDk+GDkOGDoeGDoOGDo+GDmuGDlOGDkeGDo+GDmuGDmOGDkFwiLFxuICAgIFwi4YOZ4YOj4YOg4YOh4YOY4YOhIOGDk+GDlOGDouGDkOGDmuGDlOGDkeGDmFwiLFxuICAgIGNhcmRJY29uLFxuICApO1xuXG4gIC8vIHNsaWRlciBzZWN0aW9uXG5cbiAgLy8gRGVmaW5lIGltYWdlIHBhdGhzXG4gIGNvbnN0IHNsaWQxID0gbmV3IEltYWdlKCk7XG4gIHNsaWQxLnNyYyA9IHNsaWRlMTtcblxuICBjb25zdCBzbGlkMiA9IG5ldyBJbWFnZSgpO1xuICBzbGlkMi5zcmMgPSBzbGlkZTI7XG5cbiAgY29uc3Qgc2xpZDMgPSBuZXcgSW1hZ2UoKTtcbiAgc2xpZDMuc3JjID0gc2xpZGUzO1xuXG4gIGNvbnN0IHNsaWQ0ID0gbmV3IEltYWdlKCk7XG4gIHNsaWQ0LnNyYyA9IHNsaWRlNDtcblxuICBjb25zdCBzbGlkNSA9IG5ldyBJbWFnZSgpO1xuICBzbGlkNS5zcmMgPSBzbGlkZTU7XG5cbiAgY29uc3Qgc2xpZDYgPSBuZXcgSW1hZ2UoKTtcbiAgc2xpZDYuc3JjID0gc2xpZGU2O1xuXG4gIGNvbnN0IHNsaWQ3ID0gbmV3IEltYWdlKCk7XG4gIHNsaWQ3LnNyYyA9IHNsaWRlNztcblxuICBjb25zdCBsb2dvcyA9IFtbc2xpZDEsIHNsaWQyLCBzbGlkM10sIFtzbGlkNCwgc2xpZDUsIHNsaWQ2XSwgW3NsaWQ3XV07XG4gIHNsaWRlcihsb2dvcywgc2xpZGVySWNvbiwgc2xpZGVyRG90KTtcblxuICAvLyBxdWVzdGlvbiBzZWN0aW9uXG5cbiAgY29uc3QgcXVlc3Rpb25UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHF1ZXN0aW9uVGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcInF1ZXN0aW9uLXRpdGxlLWRpdlwiKTtcbiAgY29uc3QgcXVlc3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgcXVlc3Rpb25UaXRsZS50ZXh0Q29udGVudCA9IFwi4YOu4YOo4YOY4YOg4YOQ4YOTIOGDk+GDkOGDoeGDm+GDo+GDmuGDmCDhg5nhg5jhg5fhg67hg5Xhg5Thg5Hhg5hcIjtcblxuICBjb25zdCBxdWVzdGlvblRpdGxlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcXVlc3Rpb25UaXRsZUJ0bi50ZXh0Q29udGVudCA9IFwi4YOn4YOV4YOU4YOa4YOQIOGDmeGDmOGDl+GDruGDleGDkFwiO1xuXG4gIHF1ZXN0aW9ucy5hcHBlbmRDaGlsZChxdWVzdGlvblRpdGxlRGl2KTtcbiAgcXVlc3Rpb25UaXRsZURpdi5hcHBlbmRDaGlsZChxdWVzdGlvblRpdGxlKTtcbiAgcXVlc3Rpb25UaXRsZURpdi5hcHBlbmRDaGlsZChxdWVzdGlvblRpdGxlQnRuKTtcblxuICBjb25zdCBxdWVzdGlvbjEgPSBxdWVzdGlvbnNBbmRBbnN3ZXJzKFxuICAgIFwi4YOg4YOd4YOS4YOd4YOgIOGDruGDk+GDlOGDkeGDkCDhg5nhg6Phg6Dhg6Hhg5Thg5Hhg5bhg5Qg4YOg4YOU4YOS4YOY4YOh4YOi4YOg4YOQ4YOq4YOY4YOQIOGDk+GDkCDhg6jhg5Thg6Dhg6nhg5Thg5Xhg5A/XCIsXG4gICAgcXVlc3Rpb25JY29uLFxuICAgIFwiYW5zd2VyIElcIixcbiAgKTtcblxuICBjb25zdCBxdWVzdGlvbjIgPSBxdWVzdGlvbnNBbmRBbnN3ZXJzKFxuICAgIFwi4YOo4YOU4YOb4YOY4YOr4YOa4YOY4YOQIOGDl+GDoyDhg5Dhg6Dhg5Ag4YOU4YOg4YOX4YOW4YOUIOGDm+GDlOGDoiDhg5nhg6Phg6Dhg6Hhg5bhg5Qg4YOg4YOU4YOS4YOY4YOh4YOi4YOg4YOQ4YOq4YOY4YOQP1wiLFxuICAgIHF1ZXN0aW9uSWNvbixcbiAgICBcIlRCQyBYIFVTQUlEIOGDouGDlOGDpeGDnOGDneGDmuGDneGDkuGDmOGDo+GDoOGDmCDhg5Lhg5Dhg5zhg5Dhg5fhg5rhg5Thg5Hhg5jhg6Hhg5fhg5Xhg5jhg6Eg4YOe4YOg4YOd4YOS4YOg4YOQ4YOb4YOQ4YOo4YOYIOGDl+GDmOGDl+GDneGDlOGDo+GDmiDhg5nhg5Dhg5zhg5Phg5jhg5Phg5Dhg6Lhg6Eg4YOQ4YOl4YOV4YOhIOGDm+GDruGDneGDmuGDneGDkyDhg5Thg6Dhg5fhg5gg4YOZ4YOj4YOg4YOh4YOY4YOhIOGDkuGDkOGDleGDmuGDmOGDoSDhg6jhg5Thg6Hhg5Dhg6vhg5rhg5Thg5Hhg5rhg53hg5Hhg5AuIOGDkuGDkOGDoOGDk+GDkCBJbmZvcm1hdGlvbiBTZWN1cml0eSDhg5Phg5AgUHl0aG9uIOGDmeGDo+GDoOGDoeGDlOGDkeGDmOGDoeGDkCwg4YOh4YOQ4YOT4YOQ4YOqIEJhc2ljIOGDk+GDneGDnOGDmOGDoSDhg5Lhg5Dhg5Xhg5rhg5jhg6Eg4YOo4YOU4YOb4YOT4YOU4YOSIOGDqOGDlOGDoeGDkOGDq+GDmuGDlOGDkeGDlOGDmuGDmOGDkCDhg6Hhg6zhg5Dhg5Xhg5rhg5jhg6Eg4YOS4YOQ4YOS4YOg4YOr4YOU4YOa4YOU4YOR4YOQIEFkdmFuY2Ug4YOT4YOd4YOc4YOU4YOW4YOULlwiLFxuICApO1xuICBjb25zdCBxdWVzdGlvbjMgPSBxdWVzdGlvbnNBbmRBbnN3ZXJzKFxuICAgIFwi4YOg4YOQIOGDpuGDmOGDoOGDoSDhg6Hhg6zhg5Dhg5Xhg5rhg5Ag4YOe4YOg4YOd4YOS4YOg4YOQ4YOb4YOY4YOhIOGDpOGDkOGDoOGDkuGDmuGDlOGDkeGDqOGDmD9cIixcbiAgICBxdWVzdGlvbkljb24sXG4gICAgXCLhg57hg6Dhg53hg5Lhg6Dhg5Dhg5vhg5jhg6Eg4YOk4YOQ4YOg4YOS4YOa4YOU4YOR4YOo4YOYIOGDmeGDo+GDoOGDoeGDlOGDkeGDluGDlCDhg6Hhg6zhg5Dhg5Xhg5rhg5Ag4YOh4YOg4YOj4YOa4YOY4YOQ4YOTIOGDk+GDkOGDpOGDmOGDnOGDkOGDnOGDoeGDlOGDkeGDo+GDmuGDmOGDkCDhg5fhg5jhg5Hhg5jhg6Hhg5gg4YOR4YOQ4YOc4YOZ4YOY4YOh4YOQIOGDk+GDkCBVU0FJRC3hg5jhg6Eg4YOb4YOY4YOU4YOgLlwiLFxuICApO1xuXG4gIC8vIGZvb3RlciBzZWN0aW9uXG4gIGNvbnN0IGZvb3RlclRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb290ZXJUZXh0RGl2LmNsYXNzTGlzdC5hZGQoXCJmb290ZXItdGV4dFwiKTtcblxuICBjb25zdCBmb290ZXJMb2dvID0gbmV3IEltYWdlKCk7XG4gIGZvb3RlckxvZ28uc3JjID0gdGJjO1xuXG4gIGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZm9vdGVyVGV4dC50ZXh0Q29udGVudCA9IFwiwqkgMjAyMyDhg6fhg5Xhg5Thg5rhg5Ag4YOj4YOk4YOa4YOU4YOR4YOQIOGDk+GDkOGDquGDo+GDmuGDmOGDkFwiO1xuXG4gIGNvbnN0IGZvb3RlclRleHRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBmb290ZXJUZXh0QnRuLnRleHRDb250ZW50ID0gXCLhg6zhg5Thg6Hhg5Thg5Hhg5gg4YOT4YOQIOGDnuGDmOGDoOGDneGDkeGDlOGDkeGDmFwiO1xuXG4gIGZvb3RlclRleHREaXYuYXBwZW5kQ2hpbGQoZm9vdGVyTG9nbyk7XG4gIGZvb3RlclRleHREaXYuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XG4gIGZvb3RlclRleHREaXYuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dEJ0bik7XG5cbiAgY29uc3QgZm9vdGVyTGlua3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb290ZXJMaW5rc0Rpdi5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyLWxpbmtzXCIpO1xuXG4gIGNvbnN0IGZvb3RlckxpbmtTb2NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnN0IGZiTGluayA9IG5ldyBJbWFnZSgpO1xuICBmYkxpbmsuc3JjID0gZmI7XG5cbiAgY29uc3QgeW91dHViZUxpbmsgPSBuZXcgSW1hZ2UoKTtcbiAgeW91dHViZUxpbmsuc3JjID0geW91dHViZTtcblxuICBjb25zdCB0ZXh0VXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB0ZXh0VXNCdG4udGV4dENvbnRlbnQgPSBcIuGDm+GDneGDkuGDleGDrOGDlOGDoOGDlOGDl1wiO1xuXG4gIGZvb3RlckxpbmtTb2NEaXYuYXBwZW5kQ2hpbGQoZmJMaW5rKTtcbiAgZm9vdGVyTGlua1NvY0Rpdi5hcHBlbmRDaGlsZCh5b3V0dWJlTGluayk7XG5cbiAgZm9vdGVyTGlua3NEaXYuYXBwZW5kQ2hpbGQoZm9vdGVyTGlua1NvY0Rpdik7XG4gIGZvb3RlckxpbmtzRGl2LmFwcGVuZENoaWxkKHRleHRVc0J0bik7XG5cbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHREaXYpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTGlua3NEaXYpO1xufVxuXG5leHBvcnQgeyBEb21Db250ZW50IH07XG4iLCJmdW5jdGlvbiBxdWVzdGlvbnNBbmRBbnN3ZXJzKHF1ZXN0aW9uLCBpY29uLCBhbnN3ZXIpIHtcbiAgY29uc3QgcXVlc3Rpb25TZWN0aW9uU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0aW9ucy1zZWN0aW9uXCIpO1xuXG4gIGNvbnN0IHF1ZXN0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcXVlc3Rpb25EaXYuY2xhc3NMaXN0LmFkZChcInF1ZXN0aW9uLWRpdlwiKTtcblxuICBjb25zdCBxdWVzdGlvblN1YkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHF1ZXN0aW9uU3ViRGl2LmNsYXNzTGlzdC5hZGQoXCJxdWVzdGlvbi1zdWItZGl2XCIpO1xuXG4gIGNvbnN0IHF1ZXN0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHF1ZXN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBgJHtxdWVzdGlvbn1gO1xuICBjb25zdCBxdWVzdGlvbkljb24gPSBuZXcgSW1hZ2UoKTtcbiAgcXVlc3Rpb25JY29uLnNyYyA9IGljb247XG5cbiAgcXVlc3Rpb25TdWJEaXYuYXBwZW5kQ2hpbGQocXVlc3Rpb25UaXRsZSk7XG4gIHF1ZXN0aW9uU3ViRGl2LmFwcGVuZENoaWxkKHF1ZXN0aW9uSWNvbik7XG4gIHF1ZXN0aW9uRGl2LmFwcGVuZENoaWxkKHF1ZXN0aW9uU3ViRGl2KTtcbiAgcXVlc3Rpb25TZWN0aW9uU2VsZWN0b3IuYXBwZW5kQ2hpbGQocXVlc3Rpb25EaXYpO1xuXG4gIC8vIGdpdmluZyBidXR0b24gZnVuY3Rpb24gdG8gb3BlbiBhbmQgY2xvc2UgYW5zd2Vyc1xuICBsZXQgYW5zd2VyT3BlbiA9IGZhbHNlOyAvLyBWYXJpYWJsZSB0byB0cmFjayBhbnN3ZXIgc3RhdGVcblxuICBxdWVzdGlvbkljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc3QgYW5zd2VyUGFyYWdyYXBoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbnN3ZXItcGFyYWdyYXBoXCIpO1xuXG4gICAgaWYgKCFhbnN3ZXJPcGVuKSB7XG4gICAgICAvLyBBbnN3ZXIgaXMgY2xvc2VkLCBjcmVhdGUgYW5kIGFwcGVuZCBpdFxuXG4gICAgICBpZiAoYW5zd2VyICE9PSBcImFuc3dlciBJXCIpIHtcbiAgICAgICAgY29uc3QgcXVlc3Rpb25BbnN3ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcXVlc3Rpb25BbnN3ZXIuY2xhc3NMaXN0LmFkZChcImFuc3dlci1wYXJhZ3JhcGhcIik7XG4gICAgICAgIHF1ZXN0aW9uQW5zd2VyLnRleHRDb250ZW50ID0gYCR7YW5zd2VyfWA7XG4gICAgICAgIHF1ZXN0aW9uRGl2LmFwcGVuZENoaWxkKHF1ZXN0aW9uQW5zd2VyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGFkZGluZyBmaXJ0cyBsb25nIHFlc3Rpb24gcGFyYWdyYXBoXG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uQW5zd2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcXVlc3Rpb25BbnN3ZXIuY2xhc3NMaXN0LmFkZChcImFuc3dlci1wYXJhZ3JhcGhcIik7XG4gICAgICAgIHF1ZXN0aW9uRGl2LmFwcGVuZENoaWxkKHF1ZXN0aW9uQW5zd2VyKTtcblxuICAgICAgICBjb25zdCBxdWVzdGlvbkFuc3dlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHF1ZXN0aW9uQW5zd2VyRGl2LmNsYXNzTGlzdC5hZGQoXCJhbnN3ZXItcGFyYWdyYXBoLWRpdlwiKTtcblxuICAgICAgICBjb25zdCBxdWVzdGlvbkFuc3dlcnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcXVlc3Rpb25BbnN3ZXJ0ZXh0LnRleHRDb250ZW50ID0gYOGDo+GDoOGDoeGDluGDlCDhg6Dhg5Thg5Lhg5jhg6Hhg6Lhg6Dhg5Dhg6rhg5jhg5jhg6Hhg5fhg5Xhg5jhg6Eg4YOj4YOc4YOT4YOQIOGDkuGDkOGDmOGDkOGDoOGDnSDhg6Dhg5Dhg5vhg5Phg5Thg5zhg5jhg5vhg5Qg4YOU4YOi4YOQ4YOe4YOYOmA7XG4gICAgICAgIHF1ZXN0aW9uQW5zd2VyLmFwcGVuZENoaWxkKHF1ZXN0aW9uQW5zd2VydGV4dCk7XG4gICAgICAgIHF1ZXN0aW9uQW5zd2VyLmFwcGVuZENoaWxkKHF1ZXN0aW9uQW5zd2VyRGl2KTtcblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVBbmRBcHBlbmQodGFnLCB0ZXh0LCBwYXJlbnQpIHtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdGFnZTEgPSBjcmVhdGVBbmRBcHBlbmQoXCJkaXZcIiwgXCJcIiwgcXVlc3Rpb25BbnN3ZXJEaXYpO1xuICAgICAgICBjcmVhdGVBbmRBcHBlbmQoXCJzdHJvbmdcIiwgXCJJIOGDlOGDouGDkOGDnuGDmFwiLCBzdGFnZTEpO1xuICAgICAgICBjcmVhdGVBbmRBcHBlbmQoXG4gICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgXCIgLSDhg57hg5jhg6Dhg5Xhg5Thg5og4YOU4YOi4YOQ4YOe4YOW4YOUIOGDoeGDkOGDreGDmOGDoOGDneGDkCwg4YOo4YOU4YOQ4YOV4YOh4YOdIOGDoeGDkOGDoeGDo+GDoOGDleGDlOGDmuGDmCDhg5nhg6Phg6Dhg6Hhg5jhg6Hhg5fhg5Xhg5jhg6Eg4YOS4YOQ4YOc4YOZ4YOj4YOX4YOV4YOc4YOY4YOa4YOYIOGDoeGDkOGDoOGDlOGDkuGDmOGDoeGDouGDoOGDkOGDquGDmOGDnSDhg6Thg53hg6Dhg5vhg5AsIOGDoOGDneGDm+GDlOGDmuGDmOGDqiDhg5Lhg5Dhg5zhg5fhg5Dhg5Xhg6Hhg5Thg5Hhg6Phg5rhg5jhg5Ag4YOZ4YOj4YOg4YOh4YOY4YOhIOGDqOGDmOGDk+GDkCDhg5Lhg5Xhg5Thg6Dhg5Phg5bhg5QuIOGDmeGDo+GDoOGDoeGDluGDlCDhg6Dhg5Thg5Lhg5jhg6Hhg6Lhg6Dhg5Dhg6rhg5jhg5jhg6Eg4YOT4YOQ4YOh4YOg4YOj4YOa4YOU4YOR4YOY4YOhIOGDqOGDlOGDm+GDk+GDlOGDkiDhg5Phg5Dhg5jhg6zhg6fhg5Thg5Hhg5Ag4YOo4YOU4YOb4YOd4YOh4YOj4YOa4YOYIOGDkuGDkOGDnOGDquGDruGDkOGDk+GDlOGDkeGDlOGDkeGDmOGDoSDhg5Lhg5Dhg5Phg5Dhg6Dhg6nhg5Thg5Xhg5AuXCIsXG4gICAgICAgICAgc3RhZ2UxLFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHN0YWdlMiA9IGNyZWF0ZUFuZEFwcGVuZChcImRpdlwiLCBcIlwiLCBxdWVzdGlvbkFuc3dlckRpdik7XG4gICAgICAgIGNyZWF0ZUFuZEFwcGVuZChcInN0cm9uZ1wiLCBcIklJIOGDlOGDouGDkOGDnuGDmFwiLCBzdGFnZTIpO1xuICAgICAgICBjcmVhdGVBbmRBcHBlbmQoXG4gICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgXCIgLSDhg6jhg5Thg6Dhg6nhg5Thg5Xhg5jhg6Eg4YOb4YOU4YOd4YOg4YOUIOGDlOGDouGDkOGDnuGDmCDhg5nhg6Phg6Dhg6Hhg5Thg5Hhg5jhg6Eg4YOb4YOY4YOu4YOU4YOT4YOV4YOY4YOXIOGDkuGDkOGDnOGDoeGDruGDleGDkOGDleGDlOGDkeGDo+GDmuGDmOGDkCwg4YOW4YOd4YOS4YOY4YOU4YOg4YOX4YOYIOGDmeGDo+GDoOGDoeGDmOGDoeGDl+GDleGDmOGDoSDhg5vhg53hg5jhg6rhg5Dhg5Xhg6Eg4YOe4YOg4YOULeGDouGDlOGDoeGDouGDoSwg4YOW4YOd4YOS4YOY4YOU4YOg4YOXIOGDmeGDo+GDoOGDoeGDluGDlCDhg5nhg5gg4YOj4YOc4YOQ4YOg4YOU4YOR4YOY4YOhIOGDouGDlOGDoeGDouGDoSwg4YOh4YOQ4YOT4YOQ4YOqIOGDm+GDmOGDnOGDmOGDm+GDkOGDmuGDo+GDoOGDmCDhg5bhg6bhg5Xhg5Dhg6Dhg5jhg6Eg4YOS4YOQ4YOT4YOQ4YOa4YOQ4YOu4YOV4YOY4YOhIOGDqOGDlOGDm+GDl+GDruGDleGDlOGDleGDkOGDqOGDmCDhg5Lhg5Dhg5Phg5Dhg67hg5Xhg5Dhg5og4YOo4YOU4YOg4YOp4YOU4YOV4YOY4YOhIOGDqOGDlOGDm+GDk+GDlOGDkiDhg5Thg6Lhg5Dhg57hg5bhg5QuXCIsXG4gICAgICAgICAgc3RhZ2UyLFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHN0YWdlMyA9IGNyZWF0ZUFuZEFwcGVuZChcImRpdlwiLCBcIlwiLCBxdWVzdGlvbkFuc3dlckRpdik7XG4gICAgICAgIGNyZWF0ZUFuZEFwcGVuZChcInN0cm9uZ1wiLCBcIklJSSDhg5Thg6Lhg5Dhg57hg5hcIiwgc3RhZ2UzKTtcbiAgICAgICAgY3JlYXRlQW5kQXBwZW5kKFxuICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgIFwiIC0g4YOb4YOU4YOh4YOQ4YOb4YOUIOGDlOGDouGDkOGDnuGDmCDhg5nhg6Phg6Dhg6Hhg5Thg5Hhg5jhg6Eg4YOb4YOY4YOu4YOU4YOT4YOV4YOY4YOXIOGDkuGDkOGDnOGDoeGDruGDleGDkOGDleGDk+GDlOGDkeGDkDogQWR2YW5jZSDhg5nhg6Phg6Dhg6Hhg5Thg5Hhg5bhg5QsIOGDoeGDkOGDk+GDkOGDqiDhg5vhg53hg5jhg5fhg67hg53hg5Xhg5Thg5Hhg5Ag4YOS4YOQ4YOg4YOZ4YOV4YOU4YOj4YOa4YOYIOGDouGDlOGDpeGDnOGDmOGDmeGDo+GDoOGDmCDhg6rhg53hg5Phg5zhg5AsIOGDm+GDneGDnOGDkOGDrOGDmOGDmuGDlOGDlOGDkeGDm+GDkCDhg6Phg5zhg5Phg5Ag4YOT4YOQ4YOs4YOU4YOg4YOd4YOcIOGDouGDlOGDpeGDnOGDmOGDmeGDo+GDoOGDmCDhg6Lhg5Thg6Hhg6Lhg5gg4YOq4YOd4YOT4YOc4YOY4YOhIOGDk+GDneGDnOGDmOGDoSDhg6jhg5Thg6Hhg5Dhg5vhg53hg6zhg5vhg5Thg5Hhg5rhg5Dhg5MsIOGDruGDneGDmuGDnSDhg5nhg6Phg6Dhg6Hhg5Thg5Hhg5bhg5QsIOGDoeGDkOGDk+GDkOGDqiDhg6Dhg5Dhg5jhg5vhg5Qg4YOi4YOY4YOe4YOY4YOhIOGDrOGDmOGDnOGDkOGDoeGDrOGDkOGDoOGDmCDhg6rhg53hg5Phg5zhg5Ag4YOb4YOd4YOX4YOu4YOd4YOV4YOc4YOY4YOa4YOYIOGDkOGDoCDhg5Dhg6Dhg5jhg6Eg4YOj4YOc4YOT4YOQIOGDqOGDlOGDkOGDoeGDoOGDo+GDmuGDneGDlyDhg6Lhg5Thg6Xhg5zhg5jhg5nhg6Phg6Dhg5gg4YOT4YOQ4YOV4YOQ4YOa4YOU4YOR4YOQLCDhg6Dhg5Dhg6pcIixcbiAgICAgICAgICBzdGFnZTMsXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3Qgc3RhZ2U0ID0gY3JlYXRlQW5kQXBwZW5kKFwiZGl2XCIsIFwiXCIsIHF1ZXN0aW9uQW5zd2VyRGl2KTtcbiAgICAgICAgY3JlYXRlQW5kQXBwZW5kKFwic3Ryb25nXCIsIFwiSVYg4YOU4YOi4YOQ4YOe4YOYXCIsIHN0YWdlNCk7XG4gICAgICAgIGNyZWF0ZUFuZEFwcGVuZChcbiAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICBcIiAtIOGDqOGDlOGDoOGDqeGDlOGDleGDmOGDoSDhg5Hhg53hg5rhg50g4YOb4YOU4YOd4YOX4YOu4YOUIOGDlOGDouGDkOGDnuGDmCDhg5vhg53hg5jhg6rhg5Dhg5Xhg6Eg4YOS4YOQ4YOh4YOQ4YOj4YOR4YOg4YOU4YOR4YOQ4YOhIOGDqOGDlOGDoeGDkOGDoOGDqeGDlOGDlSDhg5nhg53hg5vhg5jhg6Hhg5jhg5Dhg6Hhg5fhg5Dhg5wuIOGDkuGDkOGDoeGDkOGDo+GDkeGDoOGDlOGDkeGDmOGDoSDhg6zhg5Dhg6Dhg5vhg5Dhg6Lhg5Thg5Hhg5jhg5cg4YOS4YOQ4YOV4YOa4YOY4YOhIOGDqOGDlOGDm+GDl+GDruGDleGDlOGDleGDkOGDqOGDmCDhg6nhg5Dhg5jhg6Dhg5jhg6rhg67hg5Thg5Hhg5jhg5cg4YOZ4YOj4YOg4YOh4YOW4YOUIOGDk+GDkCDhg5Lhg5Dhg6Thg53hg6Dhg5vhg5Phg5Thg5Hhg5Ag4YOo4YOU4YOh4YOQ4YOR4YOQ4YOb4YOY4YOh4YOYIOGDruGDlOGDmuGDqOGDlOGDmeGDoOGDo+GDmuGDlOGDkeGDkC5cIixcbiAgICAgICAgICBzdGFnZTQsXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgcXVlc3Rpb25BbnN3ZXJ0ZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBxdWVzdGlvbkFuc3dlcnRleHQyLnRleHRDb250ZW50ID0gYCog4YOh4YOQ4YOc4YOQ4YObIOGDmeGDo+GDoOGDoeGDluGDlCDhg5Phg5Dhg6Dhg5Thg5Lhg5jhg6Hhg6Lhg6Dhg5jhg6Dhg5Phg5Thg5Hhg5gg4YOb4YOc4YOY4YOo4YOV4YOc4YOU4YOa4YOd4YOV4YOQ4YOc4YOY4YOQLCDhg6fhg6Phg6Dhg5Dhg5Phg6bhg5Thg5Hhg5jhg5cg4YOs4YOQ4YOY4YOZ4YOY4YOX4YOu4YOdIOGDmeGDo+GDoOGDoeGDmOGDoSDhg5Dhg6bhg6zhg5Thg6Dhg5AsIOGDnOGDkOGDruGDnSDhg6Dhg5Dhg6Eg4YOY4YOh4YOs4YOQ4YOV4YOa4YOYIOGDmeGDo+GDoOGDoeGDmOGDoSDhg5Lhg5Dhg5zhg5vhg5Dhg5Xhg5rhg53hg5Hhg5Dhg6jhg5gg4YOT4YOQIOGDkuGDkOGDmOGDkuGDnSDhg5Lhg5Dhg5Dhg6nhg5zhg5jhg5Ag4YOX4YOjIOGDkOGDoOGDkCDhg5nhg6Phg6Dhg6Hhg6Eg4YOT4YOQ4YOh4YOs4YOg4YOU4YOR4YOY4YOhIOGDrOGDmOGDnOGDkOGDnuGDmOGDoOGDneGDkeGDkC5gO1xuICAgICAgICBxdWVzdGlvbkFuc3dlci5hcHBlbmRDaGlsZChxdWVzdGlvbkFuc3dlcnRleHQyKTtcbiAgICAgIH1cblxuICAgICAgZS50YXJnZXQuaWQgPSBcIm9wZW5lZFwiO1xuICAgICAgYW5zd2VyT3BlbiA9IHRydWU7IC8vIFNldCBhbnN3ZXIgc3RhdGUgdG8gb3BlblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBBbnN3ZXIgaXMgb3BlbiwgcmVtb3ZlIGl0XG4gICAgICBlLnRhcmdldC5pZCA9IFwiXCI7XG4gICAgICBxdWVzdGlvbkRpdi5yZW1vdmVDaGlsZChhbnN3ZXJQYXJhZ3JhcGgpO1xuICAgICAgYW5zd2VyT3BlbiA9IGZhbHNlOyAvLyBTZXQgYW5zd2VyIHN0YXRlIHRvIGNsb3NlZFxuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCB7IHF1ZXN0aW9uc0FuZEFuc3dlcnMgfTtcbiIsImZ1bmN0aW9uIHNsaWRlcihsb2dvcywgaWNvbiwgZG90LCBhdXRvQ2hhbmdlSW50ZXJ2YWwgPSA4MDAwKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFydG5lcnMtc2VjdGlvblwiKTtcblxuICBjb25zdCBzbGlkZXJCdG5MZWZ0ID0gbmV3IEltYWdlKCk7XG4gIHNsaWRlckJ0bkxlZnQuc3JjID0gaWNvbjtcbiAgc2xpZGVyQnRuTGVmdC5jbGFzc0xpc3QuYWRkKFwic2xpZGVyLWJ0bi1sZWZ0XCIpO1xuXG4gIGNvbnN0IHNsaWRlckJ0blJpZ2h0ID0gbmV3IEltYWdlKCk7XG4gIHNsaWRlckJ0blJpZ2h0LnNyYyA9IGljb247XG4gIHNsaWRlckJ0blJpZ2h0LmNsYXNzTGlzdC5hZGQoXCJzbGlkZXItYnRuLXJpZ2h0XCIpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwYXJ0bmVyLXRpdGxlXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwi4YOe4YOg4YOd4YOU4YOl4YOi4YOY4YOhIOGDnuGDkOGDoOGDouGDnOGDmOGDneGDoOGDlOGDkeGDmFwiO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgY29udGFpbmVyRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lckRpc3BsYXkuY2xhc3NMaXN0LmFkZChcInBhcnRuZXJzLWRpc3BsYXlcIik7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lckRpc3BsYXkpO1xuICBjb250YWluZXJEaXNwbGF5LmFwcGVuZENoaWxkKHNsaWRlckJ0bkxlZnQpO1xuXG4gIGNvbnN0IHNsaWRlckRpc3BsYXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXJEaXNwbGF5LmFwcGVuZENoaWxkKHNsaWRlckRpc3BsYXlEaXYpO1xuICBsZXQgbiA9IDA7XG4gIHNsaWRlclBhZ2Uobik7XG5cbiAgY29udGFpbmVyRGlzcGxheS5hcHBlbmRDaGlsZChzbGlkZXJCdG5SaWdodCk7XG5cbiAgZnVuY3Rpb24gc2xpZGVyUGFnZShuKSB7XG4gICAgY29uc3Qgc2xpZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzbGlkZXJEaXYuY2xhc3NMaXN0LmFkZChgc2xpZGVyLWRpdi0ke259YCk7XG4gICAgc2xpZGVyRGl2LmNsYXNzTGlzdC5hZGQoXCJzbGlkZXItZGl2XCIpOyAvLyBBZGRpbmcgYSBjb21tb24gY2xhc3MgZm9yIHN0eWxpbmdcbiAgICBzbGlkZXJEaXNwbGF5RGl2LmFwcGVuZENoaWxkKHNsaWRlckRpdik7XG5cbiAgICAvLyBTZXQgaW5pdGlhbCBvcGFjaXR5IHRvIDAgZm9yIGZhZGUtaW4gZWZmZWN0XG4gICAgc2xpZGVyRGl2LnN0eWxlLm9wYWNpdHkgPSAwO1xuXG4gICAgaWYgKG4gIT09IDIpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDI7IGkrKykge1xuICAgICAgICBzbGlkZXJEaXYuYXBwZW5kQ2hpbGQobG9nb3Nbbl1baV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzbGlkZXJEaXYuYXBwZW5kQ2hpbGQobG9nb3NbMl1bMF0pO1xuICAgIH1cblxuICAgIC8vIFRyaWdnZXJpbmcgcmVmbG93IHRvIGFwcGx5IGluaXRpYWwgb3BhY2l0eVxuICAgIHNsaWRlckRpdi5vZmZzZXRIZWlnaHQ7XG5cbiAgICAvLyBTZXQgb3BhY2l0eSB0byAxIGZvciBmYWRlLWluIGVmZmVjdFxuICAgIHNsaWRlckRpdi5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgfVxuXG4gIC8vIEZ1bmN0aW9uIHRvIGNoYW5nZSBzbGlkZSB3aXRoIGZhZGUtb3V0IGFuZCBmYWRlLWluIGVmZmVjdFxuICBmdW5jdGlvbiBjaGFuZ2VTbGlkZShidG5SaWdodCkge1xuICAgIGNvbnN0IGN1cnJlbnRTbGlkZSA9IHNsaWRlckRpc3BsYXlEaXYubGFzdEVsZW1lbnRDaGlsZDtcblxuICAgIC8vIFNldCBvcGFjaXR5IHRvIDAgZm9yIGZhZGUtb3V0IGVmZmVjdFxuICAgIGN1cnJlbnRTbGlkZS5zdHlsZS5vcGFjaXR5ID0gMDtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gUmVtb3ZlIHRoZSBjdXJyZW50IHNsaWRlIGFmdGVyIGZhZGUtb3V0XG4gICAgICBzbGlkZXJEaXNwbGF5RGl2LnJlbW92ZUNoaWxkKGN1cnJlbnRTbGlkZSk7XG5cbiAgICAgIC8vIEFkZCB0aGUgbmV3IHNsaWRlIHdpdGggZmFkZS1pbiBlZmZlY3RcbiAgICAgIGlmIChidG5SaWdodCkge1xuICAgICAgICBpZiAobiAhPT0gMikge1xuICAgICAgICAgIG4gKz0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuID0gMDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChuICE9PSAwKSB7XG4gICAgICAgIG4gLT0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG4gPSAyO1xuICAgICAgfVxuICAgICAgc2xpZGVyUGFnZShuKTtcbiAgICAgIGRvdElkKG4pO1xuICAgIH0sIDUwMCk7IC8vIDUwMG1zIGlzIHRoZSBkdXJhdGlvbiBvZiB0aGUgZmFkZS1vdXQgdHJhbnNpdGlvblxuICB9XG5cbiAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIGRvdCBpbmRpY2F0b3JzXG4gIGZ1bmN0aW9uIGRvdElkKG4pIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAyOyArK2kpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRG90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNsaWRlci1kb3QtJHtpfWApO1xuICAgICAgc2VsZWN0ZWREb3QuaWQgPSBpID09PSBuID8gXCJkb3Qtc2VsZWN0ZWRcIiA6IFwiXCI7XG4gICAgfVxuICB9XG5cbiAgLy8gRnVuY3Rpb24gdG8gc3RhcnQgYXV0byBjaGFuZ2VcbiAgZnVuY3Rpb24gc3RhcnRBdXRvQ2hhbmdlKCkge1xuICAgIHJldHVybiBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjaGFuZ2VTbGlkZSh0cnVlKTsgLy8gQXV0byBjaGFuZ2UgdG8gdGhlIG5leHQgc2xpZGVcbiAgICB9LCBhdXRvQ2hhbmdlSW50ZXJ2YWwpO1xuICB9XG5cbiAgbGV0IGF1dG9DaGFuZ2VUaW1lciA9IHN0YXJ0QXV0b0NoYW5nZSgpOyAvLyBTdGFydCBhdXRvIGNoYW5nZVxuXG4gIC8vIEV2ZW50IGxpc3RlbmVycyBmb3IgbWFudWFsIG5hdmlnYXRpb25cbiAgc2xpZGVyQnRuUmlnaHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhckludGVydmFsKGF1dG9DaGFuZ2VUaW1lcik7IC8vIFN0b3AgYXV0byBjaGFuZ2Ugd2hlbiBtYW51YWxseSBuYXZpZ2F0aW5nXG4gICAgY2hhbmdlU2xpZGUodHJ1ZSk7XG4gICAgYXV0b0NoYW5nZVRpbWVyID0gc3RhcnRBdXRvQ2hhbmdlKCk7IC8vIFJlc3VtZSBhdXRvIGNoYW5nZSBhZnRlciBtYW51YWwgbmF2aWdhdGlvblxuICB9KTtcblxuICBzbGlkZXJCdG5MZWZ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xlYXJJbnRlcnZhbChhdXRvQ2hhbmdlVGltZXIpO1xuICAgIGNoYW5nZVNsaWRlKGZhbHNlKTtcbiAgICBhdXRvQ2hhbmdlVGltZXIgPSBzdGFydEF1dG9DaGFuZ2UoKTtcbiAgfSk7XG5cbiAgLy8gRG90IHNlY3Rpb25cbiAgY29uc3QgZG90RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZG90RGl2LmNsYXNzTGlzdC5hZGQoXCJkb3QtRGl2XCIpO1xuICBjb250YWluZXJEaXNwbGF5LmFwcGVuZENoaWxkKGRvdERpdik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMjsgaSsrKSB7XG4gICAgY29uc3Qgc2xpZGVyRG90ID0gbmV3IEltYWdlKCk7XG4gICAgc2xpZGVyRG90LnNyYyA9IGRvdDtcbiAgICBzbGlkZXJEb3QuY2xhc3NMaXN0LmFkZChgc2xpZGVyLWRvdC0ke2l9YCk7XG4gICAgZG90RGl2LmFwcGVuZENoaWxkKHNsaWRlckRvdCk7XG4gIH1cblxuICBkb3RJZChuKTtcbn1cblxuZXhwb3J0IHsgc2xpZGVyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBEb21Db250ZW50IH0gZnJvbSBcIi4vZG9tQ29udGVudFwiO1xuXG5Eb21Db250ZW50KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=