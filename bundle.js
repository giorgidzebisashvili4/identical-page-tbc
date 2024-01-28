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
  --white: rgb(224, 224, 224);
  --dark: rgb(26, 30, 31);
  --grey: rgb(43, 43, 43);
  --blue: rgb(0, 163, 224);
  --black: rgb(22, 22, 22);
  --course-card-corner: 5px;
  --width: 980px;
}
/* .header,
.title-section,
.paragraph-section,
.courses-section,
.partners-section,
.questions-section,
.footer {
  padding: 0 150px 0 150px;
} */

.header {
  display: grid;
  grid-template-columns: repeat(2, 490px);
  align-items: center;
  justify-content: center;
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
#selectid-menu {
  color: var(--blue);
}
.header-links {
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-items: end;
  gap: 30px;
}

.title-section {
  height: 352px;
  color: var(--white);
  display: grid;
  grid-template-columns: var(--width);
  align-content: center;
  justify-content: center;
  overflow: hidden;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  background-size: cover;
  background-position: center;
  font-family: "bold";
  font-size: 25px;
}

.paragraph-section {
  background-color: var(--grey);
  display: grid;
  grid-template-columns: var(--width);
  justify-content: center;
  justify-items: start;
  color: var(--white);
  padding-top: 50px;
  padding-bottom: 50px;
  font-family: "regular";
}
.paragraph-section p {
  font-size: 28px;
  margin: 0;
  padding-bottom: 50px;
}

button {
  transition-duration: 0.4s;
  border: none;
  text-decoration: none;
  background-color: transparent;
  padding: 0;
}

button:hover {
  color: var(--blue);
}

.paragraph-section button,
.question-title-div button {
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
  grid-template-columns: var(--width);
  padding-top: 30px;
  padding-bottom: 35px;
}
.courses-section > span,
.partner-title {
  font-family: "regular";
  font-size: 30px;
  padding-bottom: 70px;
}
.card-photo {
  width: 300px;
  border-top-left-radius: var(--course-card-corner);
  border-top-right-radius: var(--course-card-corner);
}
.course-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.course-cards > div {
  outline: 0.5px solid rgba(255, 255, 255, 0.362);
  border-radius: var(--course-card-corner);
  width: 300px;
  height: 414px;
  margin-bottom: 30px;
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
  padding-bottom: 70px;
}

.question-title-div {
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  align-items: center;
}
.question-sub-div {
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  align-items: center;
}
.question-title-div > p {
  font-family: "regular";
  font-size: 25px;
}
.question-title-div button:hover {
  color: gray;
}
.question-div {
  border-bottom: 1px solid rgba(255, 255, 255, 0.135);
}

.question-div img,
.slider-btn-left,
.slider-btn-right,
.dot-Div {
  filter: invert(100%) sepia(0%) saturate(7439%) hue-rotate(105deg)
    brightness(113%) contrast(115%);
}
.question-sub-div > p {
  font-family: "regular";
  font-size: 18px;
  padding-bottom: 20px;
}
.answer-paragraph {
  font-family: "regular";
  line-height: 1.7;
  max-height: auto;
  overflow: hidden;
  transition: max-height 1s ease-in-out;
}

/* footer section */
.footer {
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  background-color: rgb(33, 33, 33);
  color: var(--white);
  height: 128px;
  padding-top: 50px;
  padding-bottom: 50px;
}
.footer button {
  color: var(--white);
}
.footer button:hover {
  color: gray;
}
.footer-links {
  display: grid;
  justify-items: end;
  gap: 15px;
}
.footer-links > div {
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 15px;
}
.footer-links > button {
  padding: 7px 32px;
  background-color: var(--blue);
  border-radius: 4px;
  font-family: "regular";
  font-size: 17px;
  color: var(--white);
}
.footer-links > button:hover {
  background-color: rgb(187, 187, 187);
  color: rgb(46, 46, 46);
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
  padding-bottom: 100px;
  width: 100%;
}
.partner-title {
  display: grid;
  grid-template-columns: var(--width);
  justify-content: center;
  margin: 0;
  padding-top: 50px;
  padding-bottom: 70px;
  color: var(--white);
}
.partners-display {
  display: grid;
  grid-template-columns: var(--width);
  justify-content: center;
  grid-template-columns: 40px 900px 40px;
  justify-items: center;
  align-items: center;
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
.slider-div {
  display: grid;
  grid-template-columns: repeat(3, 227px);
  grid-template-rows: 70px;
  align-items: center;
  gap: 100px;
  transition: opacity 0.5s ease-in-out;
}
.slider-div img {
  width: 227px;
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

.dot-Div > img {
  height: 10px;
}

#dot-selected {
  filter: invert(95%) sepia(2%) saturate(10%) hue-rotate(314deg) brightness(40%)
    contrast(92%);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,4DAAkD;EAClD,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,2BAA2B;EAC3B,4DAA0D;AAC5D;AACA;EACE,sBAAsB;EACtB,4DAAqD;AACvD;;AAEA;EACE,2BAA2B;EAC3B,uBAAuB;EACvB,uBAAuB;EACvB,wBAAwB;EACxB,wBAAwB;EACxB,yBAAyB;EACzB,cAAc;AAChB;AACA;;;;;;;;GAQG;;AAEH;EACE,aAAa;EACb,uCAAuC;EACvC,mBAAmB;EACnB,uBAAuB;EACvB,wCAAwC;EACxC,mBAAmB;EACnB,aAAa;EACb,gBAAgB;EAChB,QAAQ;AACV;;AAEA;EACE,YAAY;AACd;AACA;EACE,mBAAmB;AACrB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,sCAAsC;EACtC,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,mCAAmC;EACnC,qBAAqB;EACrB,uBAAuB;EACvB,gBAAgB;EAChB,mDAA4C;EAC5C,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,aAAa;EACb,mCAAmC;EACnC,uBAAuB;EACvB,oBAAoB;EACpB,mBAAmB;EACnB,iBAAiB;EACjB,oBAAoB;EACpB,sBAAsB;AACxB;AACA;EACE,eAAe;EACf,SAAS;EACT,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,qBAAqB;EACrB,6BAA6B;EAC7B,UAAU;AACZ;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;AAC3B;AACA;EACE,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;EACb,uBAAuB;EACvB,mCAAmC;EACnC,iBAAiB;EACjB,oBAAoB;AACtB;AACA;;EAEE,sBAAsB;EACtB,eAAe;EACf,oBAAoB;AACtB;AACA;EACE,YAAY;EACZ,iDAAiD;EACjD,kDAAkD;AACpD;AACA;EACE,aAAa;EACb,eAAe;EACf,8BAA8B;AAChC;;AAEA;EACE,+CAA+C;EAC/C,wCAAwC;EACxC,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,oBAAoB;AACtB;AACA;EACE,sBAAsB;EACtB,eAAe;EACf,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,sBAAsB;EACtB,eAAe;AACjB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,aAAa;EACb,iCAAiC;EACjC,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;EACZ,qBAAqB;EACrB,2BAA2B;EAC3B,eAAe;AACjB;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,YAAY;AACd;;AAEA;EACE,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,sCAAsC;EACtC,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,sBAAsB;EACtB,eAAe;AACjB;AACA;EACE,WAAW;AACb;AACA;EACE,mDAAmD;AACrD;;AAEA;;;;EAIE;mCACiC;AACnC;AACA;EACE,sBAAsB;EACtB,eAAe;EACf,oBAAoB;AACtB;AACA;EACE,sBAAsB;EACtB,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;EAChB,qCAAqC;AACvC;;AAEA,mBAAmB;AACnB;EACE,mBAAmB;EACnB,aAAa;EACb,sCAAsC;EACtC,8BAA8B;EAC9B,iCAAiC;EACjC,mBAAmB;EACnB,aAAa;EACb,iBAAiB;EACjB,oBAAoB;AACtB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,WAAW;AACb;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,SAAS;AACX;AACA;EACE,aAAa;EACb,sCAAsC;EACtC,SAAS;AACX;AACA;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,kBAAkB;EAClB,sBAAsB;EACtB,eAAe;EACf,mBAAmB;AACrB;AACA;EACE,oCAAoC;EACpC,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;AAC3B;AACA;EACE,YAAY;AACd;;AAEA;EACE,0BAA0B;AAC5B;;AAEA,mBAAmB;AACnB;EACE,6BAA6B;EAC7B,aAAa;EACb,qBAAqB;EACrB,WAAW;AACb;AACA;EACE,aAAa;EACb,mCAAmC;EACnC,uBAAuB;EACvB,SAAS;EACT,iBAAiB;EACjB,oBAAoB;EACpB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,mCAAmC;EACnC,uBAAuB;EACvB,sCAAsC;EACtC,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;AACA;EACE,uBAAuB;AACzB;;AAEA;;EAEE,YAAY;AACd;AACA;EACE,aAAa;EACb,uCAAuC;EACvC,wBAAwB;EACxB,mBAAmB;EACnB,UAAU;EACV,oCAAoC;AACtC;AACA;EACE,YAAY;AACd;AACA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sCAAsC;EACtC,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE;iBACe;AACjB","sourcesContent":["@font-face {\n  font-family: \"bold\";\n  src: url(\"./fonts/tbc-bold.woff2\") format(\"woff2\");\n  font-weight: 900;\n  font-style: bold;\n}\n\n@font-face {\n  font-family: \"regular-bold\";\n  src: url(\"./fonts/tbc-regular-bold.woff2\") format(\"woff2\");\n}\n@font-face {\n  font-family: \"regular\";\n  src: url(\"./fonts/tbc-regular.woff2\") format(\"woff2\");\n}\n\n:root {\n  --white: rgb(224, 224, 224);\n  --dark: rgb(26, 30, 31);\n  --grey: rgb(43, 43, 43);\n  --blue: rgb(0, 163, 224);\n  --black: rgb(22, 22, 22);\n  --course-card-corner: 5px;\n  --width: 980px;\n}\n/* .header,\n.title-section,\n.paragraph-section,\n.courses-section,\n.partners-section,\n.questions-section,\n.footer {\n  padding: 0 150px 0 150px;\n} */\n\n.header {\n  display: grid;\n  grid-template-columns: repeat(2, 490px);\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(26, 30, 31, 0.98);\n  color: var(--white);\n  height: 100px;\n  position: sticky;\n  top: 0px;\n}\n\n.header img {\n  height: 40px;\n}\n.header button {\n  color: var(--white);\n}\n#selectid-menu {\n  color: var(--blue);\n}\n.header-links {\n  display: grid;\n  grid-template-columns: repeat(4, auto);\n  justify-items: end;\n  gap: 30px;\n}\n\n.title-section {\n  height: 352px;\n  color: var(--white);\n  display: grid;\n  grid-template-columns: var(--width);\n  align-content: center;\n  justify-content: center;\n  overflow: hidden;\n  background: url(\"./photos/title-photo3.jpg\");\n  background-size: cover;\n  background-position: center;\n  font-family: \"bold\";\n  font-size: 25px;\n}\n\n.paragraph-section {\n  background-color: var(--grey);\n  display: grid;\n  grid-template-columns: var(--width);\n  justify-content: center;\n  justify-items: start;\n  color: var(--white);\n  padding-top: 50px;\n  padding-bottom: 50px;\n  font-family: \"regular\";\n}\n.paragraph-section p {\n  font-size: 28px;\n  margin: 0;\n  padding-bottom: 50px;\n}\n\nbutton {\n  transition-duration: 0.4s;\n  border: none;\n  text-decoration: none;\n  background-color: transparent;\n  padding: 0;\n}\n\nbutton:hover {\n  color: var(--blue);\n}\n\n.paragraph-section button,\n.question-title-div button {\n  color: var(--blue);\n  font-size: 20px;\n  font-weight: bolder;\n  font-family: \"regular-bold\";\n}\n\n.paragraph-section button:hover {\n  color: rgb(117, 117, 117);\n}\n.courses-section {\n  background-color: var(--black);\n  color: var(--white);\n  display: grid;\n  justify-content: center;\n  grid-template-columns: var(--width);\n  padding-top: 30px;\n  padding-bottom: 35px;\n}\n.courses-section > span,\n.partner-title {\n  font-family: \"regular\";\n  font-size: 30px;\n  padding-bottom: 70px;\n}\n.card-photo {\n  width: 300px;\n  border-top-left-radius: var(--course-card-corner);\n  border-top-right-radius: var(--course-card-corner);\n}\n.course-cards {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.course-cards > div {\n  outline: 0.5px solid rgba(255, 255, 255, 0.362);\n  border-radius: var(--course-card-corner);\n  width: 300px;\n  height: 414px;\n  margin-bottom: 30px;\n}\n\n.card {\n  display: grid;\n  justify-items: start;\n}\n.card-title {\n  font-family: \"regular\";\n  font-size: 17px;\n  margin-top: 30px;\n  margin-bottom: 25px;\n}\n.card-status {\n  font-family: \"regular\";\n  font-size: 14px;\n}\n.card > div > p {\n  margin-left: 20px;\n}\n.card-btn-section {\n  padding: 20px;\n  display: grid;\n  grid-template-columns: 15px 190px;\n  align-items: center;\n}\n.card-btn-section > button {\n  color: var(--blue);\n  transition-duration: 0.4s;\n  border: none;\n  text-decoration: none;\n  font-family: \"regular-bold\";\n  font-size: 16px;\n}\n.card-btn-section > button:hover {\n  color: rgb(71, 125, 200);\n}\n.card-btn-section > img {\n  height: 15px;\n}\n\n.questions-section {\n  background-color: var(--black);\n  color: var(--white);\n  padding-top: 50px;\n  padding-bottom: 70px;\n}\n\n.question-title-div {\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  justify-content: space-between;\n  align-items: center;\n}\n.question-sub-div {\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  justify-content: space-between;\n  align-items: center;\n}\n.question-title-div > p {\n  font-family: \"regular\";\n  font-size: 25px;\n}\n.question-title-div button:hover {\n  color: gray;\n}\n.question-div {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.135);\n}\n\n.question-div img,\n.slider-btn-left,\n.slider-btn-right,\n.dot-Div {\n  filter: invert(100%) sepia(0%) saturate(7439%) hue-rotate(105deg)\n    brightness(113%) contrast(115%);\n}\n.question-sub-div > p {\n  font-family: \"regular\";\n  font-size: 18px;\n  padding-bottom: 20px;\n}\n.answer-paragraph {\n  font-family: \"regular\";\n  line-height: 1.7;\n  max-height: auto;\n  overflow: hidden;\n  transition: max-height 1s ease-in-out;\n}\n\n/* footer section */\n.footer {\n  align-items: center;\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  justify-content: space-between;\n  background-color: rgb(33, 33, 33);\n  color: var(--white);\n  height: 128px;\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n.footer button {\n  color: var(--white);\n}\n.footer button:hover {\n  color: gray;\n}\n.footer-links {\n  display: grid;\n  justify-items: end;\n  gap: 15px;\n}\n.footer-links > div {\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  gap: 15px;\n}\n.footer-links > button {\n  padding: 7px 32px;\n  background-color: var(--blue);\n  border-radius: 4px;\n  font-family: \"regular\";\n  font-size: 17px;\n  color: var(--white);\n}\n.footer-links > button:hover {\n  background-color: rgb(187, 187, 187);\n  color: rgb(46, 46, 46);\n}\n\n#opened {\n  transform: rotate(180deg);\n}\n.question-space {\n  height: 15px;\n}\n\n.answer-paragraph-div {\n  margin: 50px 0px 50px 20px;\n}\n\n/* slider section */\n.partners-section {\n  background-color: var(--grey);\n  height: 250px;\n  padding-bottom: 100px;\n  width: 100%;\n}\n.partner-title {\n  display: grid;\n  grid-template-columns: var(--width);\n  justify-content: center;\n  margin: 0;\n  padding-top: 50px;\n  padding-bottom: 70px;\n  color: var(--white);\n}\n.partners-display {\n  display: grid;\n  grid-template-columns: var(--width);\n  justify-content: center;\n  grid-template-columns: 40px 900px 40px;\n  justify-items: center;\n  align-items: center;\n}\n\n.slider-btn-right {\n  transform: rotate(180deg);\n}\n.slider-btn-left {\n  transform: rotate(0deg);\n}\n\n.slider-btn-left,\n.slider-btn-right {\n  height: 34px;\n}\n.slider-div {\n  display: grid;\n  grid-template-columns: repeat(3, 227px);\n  grid-template-rows: 70px;\n  align-items: center;\n  gap: 100px;\n  transition: opacity 0.5s ease-in-out;\n}\n.slider-div img {\n  width: 227px;\n}\n.slider-div-2 img {\n  grid-column: 2 / 3;\n}\n\n.dot-Div {\n  grid-column: 2 / 3;\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  gap: 15px;\n  margin-top: 25px;\n}\n\n.dot-Div > img {\n  height: 10px;\n}\n\n#dot-selected {\n  filter: invert(95%) sepia(2%) saturate(10%) hue-rotate(314deg) brightness(40%)\n    contrast(92%);\n}\n"],"sourceRoot":""}]);
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
  tbcXusaid.id = "selectid-menu";

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
  const questionTitle = document.createElement("p");
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

  const questionTitle = document.createElement("p");
  questionTitle.textContent = `${question}`;
  const questionIcon = new Image();
  questionIcon.src = icon;

  questionSubDiv.appendChild(questionTitle);
  questionSubDiv.appendChild(questionIcon);
  questionDiv.appendChild(questionSubDiv);
  questionSectionSelector.appendChild(questionDiv);

  // giving button function to open and close answers
  let answerOpen = false; // Variable to track answer state
  let answerRemoved = false;

  questionSubDiv.addEventListener("click", () => {
    // eslint-disable-next-line prefer-const
    let answerParagraph = document.querySelector(".answer-paragraph");
    if (answerParagraph !== null) {
      console.log(answerParagraph);
      answerParagraph.remove();
      answerRemoved = true;
    }
    console.log(answerOpen);
    console.log(answerParagraph);
    if (!answerOpen || answerParagraph === null) {
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
        questionAnswertext.textContent =
          "კურსზე რეგისტრაციისთვის უნდა გაიარო რამდენიმე ეტაპი:";
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
        questionAnswertext2.textContent =
          "* სანამ კურსზე დარეგისტრირდები მნიშვნელოვანია, ყურადღებით წაიკითხო კურსის აღწერა, ნახო რას ისწავლი კურსის განმავლობაში და გაიგო გააჩნია თუ არა კურსს დასწრების წინაპირობა.";
        questionAnswer.appendChild(questionAnswertext2);
      }

      questionIcon.id = "opened";
      answerOpen = true; // Set answer state to open
    } else {
      const answerParagraph = document.querySelector(".answer-paragraph");
      // Answer is open, remove it
      questionIcon.id = "";
      if (answerParagraph !== null) {
        answerParagraph.remove();
      }
      console.log(questionDiv);
      console.log(answerParagraph);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUhBQXlDO0FBQ3JGLDRDQUE0Qyx5SUFBaUQ7QUFDN0YsNENBQTRDLCtIQUE0QztBQUN4Riw0Q0FBNEMsK0hBQTRDO0FBQ3hGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUNBQW1DO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxPQUFPLFFBQVEsS0FBSyxPQUFPLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZ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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0hsQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3FCOztBQUUxQyx1REFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9jYXJkRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9kb21Db250ZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3FhRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zbGlkZXJGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL3RiYy1ib2xkLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy90YmMtcmVndWxhci1ib2xkLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9mb250cy90YmMtcmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vcGhvdG9zL3RpdGxlLXBob3RvMy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJib2xkXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcIndvZmYyXCIpO1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXN0eWxlOiBib2xkO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwicmVndWxhci1ib2xkXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcIndvZmYyXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcInJlZ3VsYXJcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgZm9ybWF0KFwid29mZjJcIik7XG59XG5cbjpyb290IHtcbiAgLS13aGl0ZTogcmdiKDIyNCwgMjI0LCAyMjQpO1xuICAtLWRhcms6IHJnYigyNiwgMzAsIDMxKTtcbiAgLS1ncmV5OiByZ2IoNDMsIDQzLCA0Myk7XG4gIC0tYmx1ZTogcmdiKDAsIDE2MywgMjI0KTtcbiAgLS1ibGFjazogcmdiKDIyLCAyMiwgMjIpO1xuICAtLWNvdXJzZS1jYXJkLWNvcm5lcjogNXB4O1xuICAtLXdpZHRoOiA5ODBweDtcbn1cbi8qIC5oZWFkZXIsXG4udGl0bGUtc2VjdGlvbixcbi5wYXJhZ3JhcGgtc2VjdGlvbixcbi5jb3Vyc2VzLXNlY3Rpb24sXG4ucGFydG5lcnMtc2VjdGlvbixcbi5xdWVzdGlvbnMtc2VjdGlvbixcbi5mb290ZXIge1xuICBwYWRkaW5nOiAwIDE1MHB4IDAgMTUwcHg7XG59ICovXG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA0OTBweCk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI2LCAzMCwgMzEsIDAuOTgpO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDBweDtcbn1cblxuLmhlYWRlciBpbWcge1xuICBoZWlnaHQ6IDQwcHg7XG59XG4uaGVhZGVyIGJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG4jc2VsZWN0aWQtbWVudSB7XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbn1cbi5oZWFkZXItbGlua3Mge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBhdXRvKTtcbiAganVzdGlmeS1pdGVtczogZW5kO1xuICBnYXA6IDMwcHg7XG59XG5cbi50aXRsZS1zZWN0aW9uIHtcbiAgaGVpZ2h0OiAzNTJweDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB2YXIoLS13aWR0aCk7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJib2xkXCI7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLnBhcmFncmFwaC1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0td2lkdGgpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogc3RhcnQ7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgZm9udC1mYW1pbHk6IFwicmVndWxhclwiO1xufVxuLnBhcmFncmFwaC1zZWN0aW9uIHAge1xuICBmb250LXNpemU6IDI4cHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMDtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xufVxuXG4ucGFyYWdyYXBoLXNlY3Rpb24gYnV0dG9uLFxuLnF1ZXN0aW9uLXRpdGxlLWRpdiBidXR0b24ge1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1mYW1pbHk6IFwicmVndWxhci1ib2xkXCI7XG59XG5cbi5wYXJhZ3JhcGgtc2VjdGlvbiBidXR0b246aG92ZXIge1xuICBjb2xvcjogcmdiKDExNywgMTE3LCAxMTcpO1xufVxuLmNvdXJzZXMtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0td2lkdGgpO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDM1cHg7XG59XG4uY291cnNlcy1zZWN0aW9uID4gc3Bhbixcbi5wYXJ0bmVyLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwicmVndWxhclwiO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA3MHB4O1xufVxuLmNhcmQtcGhvdG8ge1xuICB3aWR0aDogMzAwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLWNvdXJzZS1jYXJkLWNvcm5lcik7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB2YXIoLS1jb3Vyc2UtY2FyZC1jb3JuZXIpO1xufVxuLmNvdXJzZS1jYXJkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY291cnNlLWNhcmRzID4gZGl2IHtcbiAgb3V0bGluZTogMC41cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM2Mik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvdXJzZS1jYXJkLWNvcm5lcik7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA0MTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmNhcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcbn1cbi5jYXJkLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwicmVndWxhclwiO1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4uY2FyZC1zdGF0dXMge1xuICBmb250LWZhbWlseTogXCJyZWd1bGFyXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jYXJkID4gZGl2ID4gcCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLmNhcmQtYnRuLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1cHggMTkwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY2FyZC1idG4tc2VjdGlvbiA+IGJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcInJlZ3VsYXItYm9sZFwiO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY2FyZC1idG4tc2VjdGlvbiA+IGJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiByZ2IoNzEsIDEyNSwgMjAwKTtcbn1cbi5jYXJkLWJ0bi1zZWN0aW9uID4gaW1nIHtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuXG4ucXVlc3Rpb25zLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbn1cblxuLnF1ZXN0aW9uLXRpdGxlLWRpdiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucXVlc3Rpb24tc3ViLWRpdiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucXVlc3Rpb24tdGl0bGUtZGl2ID4gcCB7XG4gIGZvbnQtZmFtaWx5OiBcInJlZ3VsYXJcIjtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuLnF1ZXN0aW9uLXRpdGxlLWRpdiBidXR0b246aG92ZXIge1xuICBjb2xvcjogZ3JheTtcbn1cbi5xdWVzdGlvbi1kaXYge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEzNSk7XG59XG5cbi5xdWVzdGlvbi1kaXYgaW1nLFxuLnNsaWRlci1idG4tbGVmdCxcbi5zbGlkZXItYnRuLXJpZ2h0LFxuLmRvdC1EaXYge1xuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQzOSUpIGh1ZS1yb3RhdGUoMTA1ZGVnKVxuICAgIGJyaWdodG5lc3MoMTEzJSkgY29udHJhc3QoMTE1JSk7XG59XG4ucXVlc3Rpb24tc3ViLWRpdiA+IHAge1xuICBmb250LWZhbWlseTogXCJyZWd1bGFyXCI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4uYW5zd2VyLXBhcmFncmFwaCB7XG4gIGZvbnQtZmFtaWx5OiBcInJlZ3VsYXJcIjtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbiAgbWF4LWhlaWdodDogYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcyBlYXNlLWluLW91dDtcbn1cblxuLyogZm9vdGVyIHNlY3Rpb24gKi9cbi5mb290ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzMsIDMzLCAzMyk7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGhlaWdodDogMTI4cHg7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cbi5mb290ZXIgYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cbi5mb290ZXIgYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IGdyYXk7XG59XG4uZm9vdGVyLWxpbmtzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1pdGVtczogZW5kO1xuICBnYXA6IDE1cHg7XG59XG4uZm9vdGVyLWxpbmtzID4gZGl2IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XG4gIGdhcDogMTVweDtcbn1cbi5mb290ZXItbGlua3MgPiBidXR0b24ge1xuICBwYWRkaW5nOiA3cHggMzJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1mYW1pbHk6IFwicmVndWxhclwiO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG4uZm9vdGVyLWxpbmtzID4gYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NywgMTg3LCAxODcpO1xuICBjb2xvcjogcmdiKDQ2LCA0NiwgNDYpO1xufVxuXG4jb3BlbmVkIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cbi5xdWVzdGlvbi1zcGFjZSB7XG4gIGhlaWdodDogMTVweDtcbn1cblxuLmFuc3dlci1wYXJhZ3JhcGgtZGl2IHtcbiAgbWFyZ2luOiA1MHB4IDBweCA1MHB4IDIwcHg7XG59XG5cbi8qIHNsaWRlciBzZWN0aW9uICovXG4ucGFydG5lcnMtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xuICBoZWlnaHQ6IDI1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnBhcnRuZXItdGl0bGUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHZhcigtLXdpZHRoKTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA3MHB4O1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuLnBhcnRuZXJzLWRpc3BsYXkge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHZhcigtLXdpZHRoKTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCA5MDBweCA0MHB4O1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zbGlkZXItYnRuLXJpZ2h0IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cbi5zbGlkZXItYnRuLWxlZnQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbn1cblxuLnNsaWRlci1idG4tbGVmdCxcbi5zbGlkZXItYnRuLXJpZ2h0IHtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuLnNsaWRlci1kaXYge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAyMjdweCk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNzBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMDBweDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xufVxuLnNsaWRlci1kaXYgaW1nIHtcbiAgd2lkdGg6IDIyN3B4O1xufVxuLnNsaWRlci1kaXYtMiBpbWcge1xuICBncmlkLWNvbHVtbjogMiAvIDM7XG59XG5cbi5kb3QtRGl2IHtcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBhdXRvKTtcbiAgZ2FwOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4uZG90LURpdiA+IGltZyB7XG4gIGhlaWdodDogMTBweDtcbn1cblxuI2RvdC1zZWxlY3RlZCB7XG4gIGZpbHRlcjogaW52ZXJ0KDk1JSkgc2VwaWEoMiUpIHNhdHVyYXRlKDEwJSkgaHVlLXJvdGF0ZSgzMTRkZWcpIGJyaWdodG5lc3MoNDAlKVxuICAgIGNvbnRyYXN0KDkyJSk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQkFB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RUFDdEMscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVDQUF1QztFQUN2Qyx3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsU0FBUztFQUNULGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFO2lCQUNlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJib2xkXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL3RiYy1ib2xkLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtc3R5bGU6IGJvbGQ7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJyZWd1bGFyLWJvbGRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvdGJjLXJlZ3VsYXItYm9sZC53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcInJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvdGJjLXJlZ3VsYXIud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxufVxcblxcbjpyb290IHtcXG4gIC0td2hpdGU6IHJnYigyMjQsIDIyNCwgMjI0KTtcXG4gIC0tZGFyazogcmdiKDI2LCAzMCwgMzEpO1xcbiAgLS1ncmV5OiByZ2IoNDMsIDQzLCA0Myk7XFxuICAtLWJsdWU6IHJnYigwLCAxNjMsIDIyNCk7XFxuICAtLWJsYWNrOiByZ2IoMjIsIDIyLCAyMik7XFxuICAtLWNvdXJzZS1jYXJkLWNvcm5lcjogNXB4O1xcbiAgLS13aWR0aDogOTgwcHg7XFxufVxcbi8qIC5oZWFkZXIsXFxuLnRpdGxlLXNlY3Rpb24sXFxuLnBhcmFncmFwaC1zZWN0aW9uLFxcbi5jb3Vyc2VzLXNlY3Rpb24sXFxuLnBhcnRuZXJzLXNlY3Rpb24sXFxuLnF1ZXN0aW9ucy1zZWN0aW9uLFxcbi5mb290ZXIge1xcbiAgcGFkZGluZzogMCAxNTBweCAwIDE1MHB4O1xcbn0gKi9cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA0OTBweCk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI2LCAzMCwgMzEsIDAuOTgpO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwcHg7XFxufVxcblxcbi5oZWFkZXIgaW1nIHtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuLmhlYWRlciBidXR0b24ge1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuI3NlbGVjdGlkLW1lbnUge1xcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG4uaGVhZGVyLWxpbmtzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBhdXRvKTtcXG4gIGp1c3RpZnktaXRlbXM6IGVuZDtcXG4gIGdhcDogMzBweDtcXG59XFxuXFxuLnRpdGxlLXNlY3Rpb24ge1xcbiAgaGVpZ2h0OiAzNTJweDtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB2YXIoLS13aWR0aCk7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vcGhvdG9zL3RpdGxlLXBob3RvMy5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcImJvbGRcXFwiO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4ucGFyYWdyYXBoLXNlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB2YXIoLS13aWR0aCk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxuICBmb250LWZhbWlseTogXFxcInJlZ3VsYXJcXFwiO1xcbn1cXG4ucGFyYWdyYXBoLXNlY3Rpb24gcCB7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbi5wYXJhZ3JhcGgtc2VjdGlvbiBidXR0b24sXFxuLnF1ZXN0aW9uLXRpdGxlLWRpdiBidXR0b24ge1xcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicmVndWxhci1ib2xkXFxcIjtcXG59XFxuXFxuLnBhcmFncmFwaC1zZWN0aW9uIGJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogcmdiKDExNywgMTE3LCAxMTcpO1xcbn1cXG4uY291cnNlcy1zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHZhcigtLXdpZHRoKTtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDM1cHg7XFxufVxcbi5jb3Vyc2VzLXNlY3Rpb24gPiBzcGFuLFxcbi5wYXJ0bmVyLXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicmVndWxhclxcXCI7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNzBweDtcXG59XFxuLmNhcmQtcGhvdG8ge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tY291cnNlLWNhcmQtY29ybmVyKTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB2YXIoLS1jb3Vyc2UtY2FyZC1jb3JuZXIpO1xcbn1cXG4uY291cnNlLWNhcmRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jb3Vyc2UtY2FyZHMgPiBkaXYge1xcbiAgb3V0bGluZTogMC41cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM2Mik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1jb3Vyc2UtY2FyZC1jb3JuZXIpO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiA0MTRweDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi5jYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG59XFxuLmNhcmQtdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJyZWd1bGFyXFxcIjtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbn1cXG4uY2FyZC1zdGF0dXMge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJyZWd1bGFyXFxcIjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLmNhcmQgPiBkaXYgPiBwIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG4uY2FyZC1idG4tc2VjdGlvbiB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTVweCAxOTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jYXJkLWJ0bi1zZWN0aW9uID4gYnV0dG9uIHtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcInJlZ3VsYXItYm9sZFxcXCI7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5jYXJkLWJ0bi1zZWN0aW9uID4gYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoNzEsIDEyNSwgMjAwKTtcXG59XFxuLmNhcmQtYnRuLXNlY3Rpb24gPiBpbWcge1xcbiAgaGVpZ2h0OiAxNXB4O1xcbn1cXG5cXG4ucXVlc3Rpb25zLXNlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDcwcHg7XFxufVxcblxcbi5xdWVzdGlvbi10aXRsZS1kaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnF1ZXN0aW9uLXN1Yi1kaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnF1ZXN0aW9uLXRpdGxlLWRpdiA+IHAge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJyZWd1bGFyXFxcIjtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuLnF1ZXN0aW9uLXRpdGxlLWRpdiBidXR0b246aG92ZXIge1xcbiAgY29sb3I6IGdyYXk7XFxufVxcbi5xdWVzdGlvbi1kaXYge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMzUpO1xcbn1cXG5cXG4ucXVlc3Rpb24tZGl2IGltZyxcXG4uc2xpZGVyLWJ0bi1sZWZ0LFxcbi5zbGlkZXItYnRuLXJpZ2h0LFxcbi5kb3QtRGl2IHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NDM5JSkgaHVlLXJvdGF0ZSgxMDVkZWcpXFxuICAgIGJyaWdodG5lc3MoMTEzJSkgY29udHJhc3QoMTE1JSk7XFxufVxcbi5xdWVzdGlvbi1zdWItZGl2ID4gcCB7XFxuICBmb250LWZhbWlseTogXFxcInJlZ3VsYXJcXFwiO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcbi5hbnN3ZXItcGFyYWdyYXBoIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicmVndWxhclxcXCI7XFxuICBsaW5lLWhlaWdodDogMS43O1xcbiAgbWF4LWhlaWdodDogYXV0bztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4vKiBmb290ZXIgc2VjdGlvbiAqL1xcbi5mb290ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMywgMzMsIDMzKTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBoZWlnaHQ6IDEyOHB4O1xcbiAgcGFkZGluZy10b3A6IDUwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXG59XFxuLmZvb3RlciBidXR0b24ge1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuLmZvb3RlciBidXR0b246aG92ZXIge1xcbiAgY29sb3I6IGdyYXk7XFxufVxcbi5mb290ZXItbGlua3Mge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktaXRlbXM6IGVuZDtcXG4gIGdhcDogMTVweDtcXG59XFxuLmZvb3Rlci1saW5rcyA+IGRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XFxuICBnYXA6IDE1cHg7XFxufVxcbi5mb290ZXItbGlua3MgPiBidXR0b24ge1xcbiAgcGFkZGluZzogN3B4IDMycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicmVndWxhclxcXCI7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG4uZm9vdGVyLWxpbmtzID4gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODcsIDE4NywgMTg3KTtcXG4gIGNvbG9yOiByZ2IoNDYsIDQ2LCA0Nik7XFxufVxcblxcbiNvcGVuZWQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuLnF1ZXN0aW9uLXNwYWNlIHtcXG4gIGhlaWdodDogMTVweDtcXG59XFxuXFxuLmFuc3dlci1wYXJhZ3JhcGgtZGl2IHtcXG4gIG1hcmdpbjogNTBweCAwcHggNTBweCAyMHB4O1xcbn1cXG5cXG4vKiBzbGlkZXIgc2VjdGlvbiAqL1xcbi5wYXJ0bmVycy1zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgaGVpZ2h0OiAyNTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucGFydG5lci10aXRsZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB2YXIoLS13aWR0aCk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDcwcHg7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG4ucGFydG5lcnMtZGlzcGxheSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB2YXIoLS13aWR0aCk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCA5MDBweCA0MHB4O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNsaWRlci1idG4tcmlnaHQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuLnNsaWRlci1idG4tbGVmdCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG59XFxuXFxuLnNsaWRlci1idG4tbGVmdCxcXG4uc2xpZGVyLWJ0bi1yaWdodCB7XFxuICBoZWlnaHQ6IDM0cHg7XFxufVxcbi5zbGlkZXItZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAyMjdweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMDBweDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLWluLW91dDtcXG59XFxuLnNsaWRlci1kaXYgaW1nIHtcXG4gIHdpZHRoOiAyMjdweDtcXG59XFxuLnNsaWRlci1kaXYtMiBpbWcge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cXG5cXG4uZG90LURpdiB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgYXV0byk7XFxuICBnYXA6IDE1cHg7XFxuICBtYXJnaW4tdG9wOiAyNXB4O1xcbn1cXG5cXG4uZG90LURpdiA+IGltZyB7XFxuICBoZWlnaHQ6IDEwcHg7XFxufVxcblxcbiNkb3Qtc2VsZWN0ZWQge1xcbiAgZmlsdGVyOiBpbnZlcnQoOTUlKSBzZXBpYSgyJSkgc2F0dXJhdGUoMTAlKSBodWUtcm90YXRlKDMxNGRlZykgYnJpZ2h0bmVzcyg0MCUpXFxuICAgIGNvbnRyYXN0KDkyJSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gY2FyZChpbWFnZSwgdGl0bGUsIHN0YXR1cywgYnV0dG9uLCBpY29uKSB7XG4gIGNvbnN0IGNvdXJzZXNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdXJzZS1jYXJkc1wiKTtcbiAgY29uc3QgY2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmREaXYuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIGNvdXJzZXNEaXYuYXBwZW5kQ2hpbGQoY2FyZERpdik7XG5cbiAgY29uc3QgY2FyZENvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnN0IGNhcmRQaG90byA9IG5ldyBJbWFnZSgpO1xuICBjYXJkUGhvdG8uc3JjID0gaW1hZ2U7XG4gIGNhcmRQaG90by5jbGFzc0xpc3QuYWRkKFwiY2FyZC1waG90b1wiKTtcblxuICBjb25zdCBjYXJkQnRuSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBjYXJkQnRuSWNvbi5zcmMgPSBpY29uO1xuXG4gIGNvbnN0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjYXJkVGl0bGUuY2xhc3NMaXN0LmFkZChcImNhcmQtdGl0bGVcIik7XG4gIGNhcmRUaXRsZS50ZXh0Q29udGVudCA9IGAke3RpdGxlfWA7XG4gIGNvbnN0IGNhcmRTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY2FyZFN0YXR1cy5jbGFzc0xpc3QuYWRkKFwiY2FyZC1zdGF0dXNcIik7XG4gIGNhcmRTdGF0dXMudGV4dENvbnRlbnQgPSBgJHtzdGF0dXN9YDtcblxuICBjb25zdCBjYXJkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2FyZEJ1dHRvbi50ZXh0Q29udGVudCA9IGAke2J1dHRvbn1gO1xuXG4gIGNvbnN0IGNhcmRCdG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkQnRuRGl2LmNsYXNzTGlzdC5hZGQoXCJjYXJkLWJ0bi1zZWN0aW9uXCIpO1xuXG4gIGNhcmREaXYuYXBwZW5kQ2hpbGQoY2FyZENvbnRlbnREaXYpO1xuICBjYXJkQ29udGVudERpdi5hcHBlbmRDaGlsZChjYXJkUGhvdG8pO1xuICBjYXJkQ29udGVudERpdi5hcHBlbmRDaGlsZChjYXJkVGl0bGUpO1xuICBjYXJkQ29udGVudERpdi5hcHBlbmRDaGlsZChjYXJkU3RhdHVzKTtcblxuICBjYXJkRGl2LmFwcGVuZENoaWxkKGNhcmRCdG5EaXYpO1xuICBjYXJkQnRuRGl2LmFwcGVuZENoaWxkKGNhcmRCdG5JY29uKTtcbiAgY2FyZEJ0bkRpdi5hcHBlbmRDaGlsZChjYXJkQnV0dG9uKTtcbn1cblxuZXhwb3J0IHsgY2FyZCB9O1xuIiwiLy8gaW1wb3J0IHRpdGxlUGhvdG9JbXBvcnQgZnJvbSBcIi4vcGhvdG9zL3RpdGxlLXBob3RvLmpwZ1wiO1xuaW1wb3J0IGlvcyBmcm9tIFwiLi9waG90b3MvY291cnNlcy9pc28uanBnXCI7XG5pbXBvcnQgcmVhY3RlIGZyb20gXCIuL3Bob3Rvcy9jb3Vyc2VzL3JlYWN0LmpwZ1wiO1xuaW1wb3J0IGludFB5dGhvbiBmcm9tIFwiLi9waG90b3MvY291cnNlcy9pbnRyby1weXRob24uanBnXCI7XG5pbXBvcnQgYWR2UHl0aG9uIGZyb20gXCIuL3Bob3Rvcy9jb3Vyc2VzL2FkdmFuLXB5dGhvbi5qcGdcIjtcbmltcG9ydCBjeWJlcnNlY3VyaXR5IGZyb20gXCIuL3Bob3Rvcy9jb3Vyc2VzL2N5YmVyc2VjdXJpdHkuanBnXCI7XG5pbXBvcnQgdG90IGZyb20gXCIuL3Bob3Rvcy9jb3Vyc2VzL3RvdC5qcGdcIjtcbmltcG9ydCBibG9ja2NoYWluIGZyb20gXCIuL3Bob3Rvcy9jb3Vyc2VzL2Jsb2NrY2hhaW4uanBnXCI7XG5pbXBvcnQgZGV2b3BzIGZyb20gXCIuL3Bob3Rvcy9jb3Vyc2VzL2Rldm9wcy5qcGdcIjtcbmltcG9ydCBzZWN1cml0eSBmcm9tIFwiLi9waG90b3MvY291cnNlcy9zZWN1cml0eS5qcGdcIjtcbmltcG9ydCBjYXJkSWNvbiBmcm9tIFwiLi9waG90b3MvY2FyZC1idG4taWNvbi5zdmdcIjtcbmltcG9ydCB7IGNhcmQgfSBmcm9tIFwiLi9jYXJkRmFjdG9yeVwiO1xuaW1wb3J0IHRiYyBmcm9tIFwiLi9waG90b3MvZm9vdGVyL3RiYy5wbmdcIjtcbmltcG9ydCBmYiBmcm9tIFwiLi9waG90b3MvZm9vdGVyL2ZiLnBuZ1wiO1xuaW1wb3J0IHlvdXR1YmUgZnJvbSBcIi4vcGhvdG9zL2Zvb3Rlci95b3V0dWJlLnBuZ1wiO1xuaW1wb3J0IHRiY0FjZExvZ28gZnJvbSBcIi4vcGhvdG9zL3RiY0FjZExvZ28uc3ZnXCI7XG5pbXBvcnQgeyBxdWVzdGlvbnNBbmRBbnN3ZXJzIH0gZnJvbSBcIi4vcWFGYWN0b3J5XCI7XG5pbXBvcnQgcXVlc3Rpb25JY29uIGZyb20gXCIuL3Bob3Rvcy9xdWVzdGlvbi1leHBlbmQuc3ZnXCI7XG5pbXBvcnQgc2xpZGVySWNvbiBmcm9tIFwiLi9waG90b3Mvc2xpZGVySWNvbi5zdmdcIjtcbmltcG9ydCBzbGlkZXJEb3QgZnJvbSBcIi4vcGhvdG9zL3NsaWRlci1kb3Quc3ZnXCI7XG5pbXBvcnQgeyBzbGlkZXIgfSBmcm9tIFwiLi9zbGlkZXJGdW5jdGlvblwiO1xuaW1wb3J0IHNsaWRlMSBmcm9tIFwiLi9waG90b3MvcGFydG5lcnMvc2xpZDEucG5nXCI7XG5pbXBvcnQgc2xpZGUyIGZyb20gXCIuL3Bob3Rvcy9wYXJ0bmVycy9zbGlkMi5wbmdcIjtcbmltcG9ydCBzbGlkZTMgZnJvbSBcIi4vcGhvdG9zL3BhcnRuZXJzL3NsaWQzLnBuZ1wiO1xuaW1wb3J0IHNsaWRlNCBmcm9tIFwiLi9waG90b3MvcGFydG5lcnMvc2xpZDQucG5nXCI7XG5pbXBvcnQgc2xpZGU1IGZyb20gXCIuL3Bob3Rvcy9wYXJ0bmVycy9zbGlkNS5wbmdcIjtcbmltcG9ydCBzbGlkZTYgZnJvbSBcIi4vcGhvdG9zL3BhcnRuZXJzL3NsaWQ2LnBuZ1wiO1xuaW1wb3J0IHNsaWRlNyBmcm9tIFwiLi9waG90b3MvcGFydG5lcnMvc2xpZDcucG5nXCI7XG5cbmZ1bmN0aW9uIERvbUNvbnRlbnQoKSB7XG4gIGNvbnN0IGNvbnRhaW5lclNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2l0ZS1jb250YWluZXJcIik7XG5cbiAgLy8gbWFraW5nIG1haW4gZGl2c1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1zZWN0aW9uXCIpO1xuXG4gIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKFwicGFyYWdyYXBoLXNlY3Rpb25cIik7XG5cbiAgY29uc3QgY291cnNlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvdXJzZXMuY2xhc3NMaXN0LmFkZChcImNvdXJzZXMtc2VjdGlvblwiKTtcblxuICBjb25zdCBwYXJ0bmVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBhcnRuZXJzLmNsYXNzTGlzdC5hZGQoXCJwYXJ0bmVycy1zZWN0aW9uXCIpO1xuXG4gIGNvbnN0IHF1ZXN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHF1ZXN0aW9ucy5jbGFzc0xpc3QuYWRkKFwicXVlc3Rpb25zLXNlY3Rpb25cIik7XG5cbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG5cbiAgY29udGFpbmVyU2VsZWN0LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnRhaW5lclNlbGVjdC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGNvbnRhaW5lclNlbGVjdC5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuICBjb250YWluZXJTZWxlY3QuYXBwZW5kQ2hpbGQoY291cnNlcyk7XG4gIGNvbnRhaW5lclNlbGVjdC5hcHBlbmRDaGlsZChwYXJ0bmVycyk7XG4gIGNvbnRhaW5lclNlbGVjdC5hcHBlbmRDaGlsZChxdWVzdGlvbnMpO1xuICBjb250YWluZXJTZWxlY3QuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICAvLyBkb20gaGVhZGVyIGNvbnRlbnRcbiAgY29uc3QgbG9nbyA9IG5ldyBJbWFnZSgpO1xuICBsb2dvLnNyYyA9IHRiY0FjZExvZ287XG5cbiAgY29uc3QgaGVhZGVyTGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXJMaW5rcy5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWxpbmtzXCIpO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckxpbmtzKTtcblxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbWFpbi50ZXh0Q29udGVudCA9IFwi4YOb4YOX4YOQ4YOV4YOQ4YOg4YOYXCI7XG5cbiAgY29uc3QgdGJjSXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB0YmNJdC50ZXh0Q29udGVudCA9IFwiVEJDIElUXCI7XG5cbiAgY29uc3QgdGJjWHVzYWlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdGJjWHVzYWlkLnRleHRDb250ZW50ID0gXCJUQkMgeCBVU0FJRFwiO1xuICB0YmNYdXNhaWQuaWQgPSBcInNlbGVjdGlkLW1lbnVcIjtcblxuICBjb25zdCByaXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcmlzay50ZXh0Q29udGVudCA9IFwi4YOg4YOY4YOh4YOZ4YOU4YOR4YOYXCI7XG5cbiAgaGVhZGVyTGlua3MuYXBwZW5kQ2hpbGQobWFpbik7XG4gIGhlYWRlckxpbmtzLmFwcGVuZENoaWxkKHRiY0l0KTtcbiAgaGVhZGVyTGlua3MuYXBwZW5kQ2hpbGQodGJjWHVzYWlkKTtcbiAgaGVhZGVyTGlua3MuYXBwZW5kQ2hpbGQocmlzayk7XG5cbiAgLy8gdGl0bGUgc2VjdGlvbiBkb21cbiAgLy8gY29uc3QgdGl0bGVQaG90byA9IG5ldyBJbWFnZSgpO1xuICAvLyB0aXRsZVBob3RvLnNyYyA9IHRpdGxlUGhvdG9JbXBvcnQ7XG5cbiAgLy8gdGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVQaG90byk7XG4gIC8vIGltYWdlO1xuICBjb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRpdGxlVGV4dC50ZXh0Q29udGVudCA9IFwiVEJDIHggVVNBSURcIjtcblxuICBjb25zdCB0aXRsZVRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICB0aXRsZVRleHQyLnRleHRDb250ZW50ID0gXCLhg6Lhg5Thg6Xhg5zhg53hg5rhg53hg5Lhg5jhg6Phg6Dhg5gg4YOS4YOQ4YOc4YOQ4YOX4YOa4YOU4YOR4YOY4YOh4YOX4YOV4YOY4YOhXCI7XG5cbiAgdGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVUZXh0KTtcbiAgdGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVUZXh0Mik7XG5cbiAgLy8gcGFyYWdyYXBoIHNlY3Rpb24gZG9tXG4gIGNvbnN0IHBhcmFncmFwaFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGFyYWdyYXBoVGV4dC50ZXh0Q29udGVudCA9XG4gICAgXCLigJ4gVEJDIHggVVNBSUQgLSDhg6Lhg5Thg6Xhg5zhg53hg5rhg53hg5Lhg5jhg6Phg6Dhg5gg4YOS4YOQ4YOc4YOQ4YOX4YOa4YOU4YOR4YOY4YOh4YOX4YOV4YOY4YOhIOKAnCDhg57hg6Dhg53hg5Lhg6Dhg5Dhg5vhg5AgIOGDoeGDkOGDmOGDnOGDpOGDneGDoOGDm+GDkOGDquGDmOGDnSDhg6Lhg5Thg6Xhg5zhg53hg5rhg53hg5Lhg5jhg5Thg5Hhg5jhg5cg4YOT4YOQ4YOY4YOc4YOi4YOU4YOg4YOU4YOh4YOU4YOR4YOj4YOaIOGDkOGDk+GDkOGDm+GDmOGDkOGDnOGDlOGDkeGDoSDhg5Lhg5fhg5Dhg5Xhg5Dhg5bhg53hg5Hhg5cg4YOh4YOg4YOj4YOa4YOQ4YOTIOGDk+GDkOGDpOGDmOGDnOGDkOGDnOGDoeGDlOGDkeGDo+GDmiDhg53hg5zhg5rhg5Dhg5jhg5wg4YOh4YOQ4YOS4YOQ4YOc4YOb4YOQ4YOc4YOQ4YOX4YOa4YOU4YOR4YOa4YOdIOGDnuGDoOGDkOGDpeGDouGDmOGDmeGDo+GDmiDhg5nhg6Phg6Dhg6Hhg5Thg5Hhg6EgIOGDoeGDruGDleGDkOGDk+GDkOGDoeGDruGDleGDkCBJQ1Qg4YOb4YOY4YOb4YOQ4YOg4YOX4YOj4YOa4YOU4YOR4YOY4YOXLiDhg6zhg5Dhg6Dhg5vhg5Dhg6Lhg5Thg5Hhg6Phg5og4YOZ4YOj4YOg4YOh4YOT4YOQ4YOb4YOX4YOQ4YOV4YOg4YOU4YOR4YOj4YOa4YOU4YOR4YOhIOGDlOGDq+GDmuGDlOGDleGDkOGDlyDhg6jhg5Thg6Hhg5Dhg6vhg5rhg5Thg5Hhg5rhg53hg5Hhg5Ag4YOT4YOQ4YOh4YOQ4YOl4YOb4YOT4YOc4YOU4YOcIOGDl+GDmOGDkeGDmOGDoeGDmOGDoeGDkCDhg5Phg5Ag4YOb4YOY4YOhIOGDnuGDkOGDoOGDouGDnOGDmOGDneGDoCDhg5nhg53hg5vhg57hg5Dhg5zhg5jhg5Thg5Hhg6jhg5guXCI7XG5cbiAgY29uc3QgcGFyYWdyYXBoTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHBhcmFncmFwaExpbmsudGV4dENvbnRlbnQgPSBcIuGDkuGDkOGDmOGDkuGDlCDhg5vhg5Thg6Lhg5hcIjtcblxuICBwYXJhZ3JhcGguYXBwZW5kQ2hpbGQocGFyYWdyYXBoVGV4dCk7XG4gIHBhcmFncmFwaC5hcHBlbmRDaGlsZChwYXJhZ3JhcGhMaW5rKTtcblxuICAvLyBjYXJkcyBzZWN0aW9uXG4gIGNvbnN0IGNvdXJzZVRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvdXJzZVRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJjb3Vyc2VzLXRpdGxlXCIpO1xuICBjb3Vyc2VUaXRsZURpdi50ZXh0Q29udGVudCA9IFwi4YOh4YOQ4YOh4YOs4YOQ4YOV4YOa4YOdIOGDmeGDo+GDoOGDoeGDlOGDkeGDmFwiO1xuICBjb3Vyc2VzLmFwcGVuZENoaWxkKGNvdXJzZVRpdGxlRGl2KTtcbiAgKFwiLi9waG90b3MvcGFydG5lcnMvc2xpZDEucG5nXCIpO1xuICBjb25zdCBjb3Vyc2VDYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY291cnNlQ2FyZERpdi5jbGFzc0xpc3QuYWRkKFwiY291cnNlLWNhcmRzXCIpO1xuICBjb3Vyc2VzLmFwcGVuZENoaWxkKGNvdXJzZUNhcmREaXYpO1xuXG4gIGNvbnN0IGlzb0NhcmQgPSBjYXJkKFxuICAgIGlvcyxcbiAgICBcImlPUyBEZXZlbG9wbWVudFwiLFxuICAgIFwi4YOg4YOU4YOS4YOY4YOh4YOi4YOg4YOQ4YOq4YOY4YOQIOGDk+GDkOGDoeGDoOGDo+GDmuGDlOGDkeGDo+GDmuGDmOGDkFwiLFxuICAgIFwi4YOZ4YOj4YOg4YOh4YOY4YOhIOGDk+GDlOGDouGDkOGDmuGDlOGDkeGDmFwiLFxuICAgIGNhcmRJY29uLFxuICApO1xuICBjb25zdCByZWFjdENhcmQgPSBjYXJkKFxuICAgIHJlYWN0ZSxcbiAgICBcIlJlYWN0ZVwiLFxuICAgIFwi4YOg4YOU4YOS4YOY4YOh4YOi4YOg4YOQ4YOq4YOY4YOQIOGDk+GDkOGDoeGDoOGDo+GDmuGDlOGDkeGDo+GDmuGDmOGDkFwiLFxuICAgIFwi4YOZ4YOj4YOg4YOh4YOY4YOhIOGDk+GDlOGDouGDkOGDmuGDlOGDkeGDmFwiLFxuICAgIGNhcmRJY29uLFxuICApO1xuICBjb25zdCBpbnRyUHl0aG9uQ2FyZCA9IGNhcmQoXG4gICAgaW50UHl0aG9uLFxuICAgIFwiSW50cm8gdG8gUHl0aG9uXCIsXG4gICAgXCLhg6Dhg5Thg5Lhg5jhg6Hhg6Lhg6Dhg5Dhg6rhg5jhg5Ag4YOT4YOQ4YOh4YOg4YOj4YOa4YOU4YOR4YOj4YOa4YOY4YOQXCIsXG4gICAgXCLhg5nhg6Phg6Dhg6Hhg5jhg6Eg4YOT4YOU4YOi4YOQ4YOa4YOU4YOR4YOYXCIsXG4gICAgY2FyZEljb24sXG4gICk7XG4gIGNvbnN0IGFkdmFuY2VkUHl0aG9uQ2FyZCA9IGNhcmQoXG4gICAgYWR2UHl0aG9uLFxuICAgIFwiQWR2YW5jZWQgUHl0aG9uXCIsXG4gICAgXCLhg6Dhg5Thg5Lhg5jhg6Hhg6Lhg6Dhg5Dhg6rhg5jhg5Ag4YOT4YOQ4YOh4YOg4YOj4YOa4YOU4YOR4YOj4YOa4YOY4YOQXCIsXG4gICAgXCLhg5nhg6Phg6Dhg6Hhg5jhg6Eg4YOT4YOU4YOi4YOQ4YOa4YOU4YOR4YOYXCIsXG4gICAgY2FyZEljb24sXG4gICk7XG4gIGNvbnN0IGN5YmVyc2VjdXJpdHlDYXJkID0gY2FyZChcbiAgICBjeWJlcnNlY3VyaXR5LFxuICAgIFwiQWR2YW5jZWQgQ3liZXJzZWN1cml0eSBDb3Vyc2VcIixcbiAgICBcIuGDoOGDlOGDkuGDmOGDoeGDouGDoOGDkOGDquGDmOGDkCDhg5Phg5Dhg6Hhg6Dhg6Phg5rhg5Thg5Hhg6Phg5rhg5jhg5BcIixcbiAgICBcIuGDmeGDo+GDoOGDoeGDmOGDoSDhg5Phg5Thg6Lhg5Dhg5rhg5Thg5Hhg5hcIixcbiAgICBjYXJkSWNvbixcbiAgKTtcbiAgY29uc3QgdG90Q2FyZCA9IGNhcmQoXG4gICAgdG90LFxuICAgIFwiVG9UIC0gVHJhaW5pbmcgb2YgVHJhaW5lcnNcIixcbiAgICBcIuGDoOGDlOGDkuGDmOGDoeGDouGDoOGDkOGDquGDmOGDkCDhg5Phg5Dhg6Hhg6Dhg6Phg5rhg5Thg5Hhg6Phg5rhg5jhg5BcIixcbiAgICBcIuGDmeGDo+GDoOGDoeGDmOGDoSDhg5Phg5Thg6Lhg5Dhg5rhg5Thg5Hhg5hcIixcbiAgICBjYXJkSWNvbixcbiAgKTtcbiAgY29uc3QgQmxvY2tjaGFpbkNhcmQgPSBjYXJkKFxuICAgIGJsb2NrY2hhaW4sXG4gICAgXCJCbG9ja2NoYWluXCIsXG4gICAgXCLhg6Dhg5Thg5Lhg5jhg6Hhg6Lhg6Dhg5Dhg6rhg5jhg5Ag4YOT4YOQ4YOh4YOg4YOj4YOa4YOU4YOR4YOj4YOa4YOY4YOQXCIsXG4gICAgXCLhg5nhg6Phg6Dhg6Hhg5jhg6Eg4YOT4YOU4YOi4YOQ4YOa4YOU4YOR4YOYXCIsXG4gICAgY2FyZEljb24sXG4gICk7XG4gIGNvbnN0IERldk9wc0NhcmQgPSBjYXJkKFxuICAgIGRldm9wcyxcbiAgICBcIkRldk9wc1wiLFxuICAgIFwi4YOg4YOU4YOS4YOY4YOh4YOi4YOg4YOQ4YOq4YOY4YOQIOGDk+GDkOGDoeGDoOGDo+GDmuGDlOGDkeGDo+GDmuGDmOGDkFwiLFxuICAgIFwi4YOZ4YOj4YOg4YOh4YOY4YOhIOGDk+GDlOGDouGDkOGDmuGDlOGDkeGDmFwiLFxuICAgIGNhcmRJY29uLFxuICApO1xuICBjb25zdCBTZWN1cml0eUNhcmQgPSBjYXJkKFxuICAgIHNlY3VyaXR5LFxuICAgIFwiSW5mb3JtYXRpb24gU2VjdXJpdHkgR292ZXJuYW5jZVwiLFxuICAgIFwi4YOg4YOU4YOS4YOY4YOh4YOi4YOg4YOQ4YOq4YOY4YOQIOGDk+GDkOGDoeGDoOGDo+GDmuGDlOGDkeGDo+GDmuGDmOGDkFwiLFxuICAgIFwi4YOZ4YOj4YOg4YOh4YOY4YOhIOGDk+GDlOGDouGDkOGDmuGDlOGDkeGDmFwiLFxuICAgIGNhcmRJY29uLFxuICApO1xuXG4gIC8vIHNsaWRlciBzZWN0aW9uXG5cbiAgLy8gRGVmaW5lIGltYWdlIHBhdGhzXG4gIGNvbnN0IHNsaWQxID0gbmV3IEltYWdlKCk7XG4gIHNsaWQxLnNyYyA9IHNsaWRlMTtcblxuICBjb25zdCBzbGlkMiA9IG5ldyBJbWFnZSgpO1xuICBzbGlkMi5zcmMgPSBzbGlkZTI7XG5cbiAgY29uc3Qgc2xpZDMgPSBuZXcgSW1hZ2UoKTtcbiAgc2xpZDMuc3JjID0gc2xpZGUzO1xuXG4gIGNvbnN0IHNsaWQ0ID0gbmV3IEltYWdlKCk7XG4gIHNsaWQ0LnNyYyA9IHNsaWRlNDtcblxuICBjb25zdCBzbGlkNSA9IG5ldyBJbWFnZSgpO1xuICBzbGlkNS5zcmMgPSBzbGlkZTU7XG5cbiAgY29uc3Qgc2xpZDYgPSBuZXcgSW1hZ2UoKTtcbiAgc2xpZDYuc3JjID0gc2xpZGU2O1xuXG4gIGNvbnN0IHNsaWQ3ID0gbmV3IEltYWdlKCk7XG4gIHNsaWQ3LnNyYyA9IHNsaWRlNztcblxuICBjb25zdCBsb2dvcyA9IFtbc2xpZDEsIHNsaWQyLCBzbGlkM10sIFtzbGlkNCwgc2xpZDUsIHNsaWQ2XSwgW3NsaWQ3XV07XG4gIHNsaWRlcihsb2dvcywgc2xpZGVySWNvbiwgc2xpZGVyRG90KTtcblxuICAvLyBxdWVzdGlvbiBzZWN0aW9uXG5cbiAgY29uc3QgcXVlc3Rpb25UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHF1ZXN0aW9uVGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcInF1ZXN0aW9uLXRpdGxlLWRpdlwiKTtcbiAgY29uc3QgcXVlc3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBxdWVzdGlvblRpdGxlLnRleHRDb250ZW50ID0gXCLhg67hg6jhg5jhg6Dhg5Dhg5Mg4YOT4YOQ4YOh4YOb4YOj4YOa4YOYIOGDmeGDmOGDl+GDruGDleGDlOGDkeGDmFwiO1xuXG4gIGNvbnN0IHF1ZXN0aW9uVGl0bGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBxdWVzdGlvblRpdGxlQnRuLnRleHRDb250ZW50ID0gXCLhg6fhg5Xhg5Thg5rhg5Ag4YOZ4YOY4YOX4YOu4YOV4YOQXCI7XG5cbiAgcXVlc3Rpb25zLmFwcGVuZENoaWxkKHF1ZXN0aW9uVGl0bGVEaXYpO1xuICBxdWVzdGlvblRpdGxlRGl2LmFwcGVuZENoaWxkKHF1ZXN0aW9uVGl0bGUpO1xuICBxdWVzdGlvblRpdGxlRGl2LmFwcGVuZENoaWxkKHF1ZXN0aW9uVGl0bGVCdG4pO1xuXG4gIGNvbnN0IHF1ZXN0aW9uMSA9IHF1ZXN0aW9uc0FuZEFuc3dlcnMoXG4gICAgXCLhg6Dhg53hg5Lhg53hg6Ag4YOu4YOT4YOU4YOR4YOQIOGDmeGDo+GDoOGDoeGDlOGDkeGDluGDlCDhg6Dhg5Thg5Lhg5jhg6Hhg6Lhg6Dhg5Dhg6rhg5jhg5Ag4YOT4YOQIOGDqOGDlOGDoOGDqeGDlOGDleGDkD9cIixcbiAgICBxdWVzdGlvbkljb24sXG4gICAgXCJhbnN3ZXIgSVwiLFxuICApO1xuXG4gIGNvbnN0IHF1ZXN0aW9uMiA9IHF1ZXN0aW9uc0FuZEFuc3dlcnMoXG4gICAgXCLhg6jhg5Thg5vhg5jhg6vhg5rhg5jhg5Ag4YOX4YOjIOGDkOGDoOGDkCDhg5Thg6Dhg5fhg5bhg5Qg4YOb4YOU4YOiIOGDmeGDo+GDoOGDoeGDluGDlCDhg6Dhg5Thg5Lhg5jhg6Hhg6Lhg6Dhg5Dhg6rhg5jhg5A/XCIsXG4gICAgcXVlc3Rpb25JY29uLFxuICAgIFwiVEJDIFggVVNBSUQg4YOi4YOU4YOl4YOc4YOd4YOa4YOd4YOS4YOY4YOj4YOg4YOYIOGDkuGDkOGDnOGDkOGDl+GDmuGDlOGDkeGDmOGDoeGDl+GDleGDmOGDoSDhg57hg6Dhg53hg5Lhg6Dhg5Dhg5vhg5Dhg6jhg5gg4YOX4YOY4YOX4YOd4YOU4YOj4YOaIOGDmeGDkOGDnOGDk+GDmOGDk+GDkOGDouGDoSDhg5Dhg6Xhg5Xhg6Eg4YOb4YOu4YOd4YOa4YOd4YOTIOGDlOGDoOGDl+GDmCDhg5nhg6Phg6Dhg6Hhg5jhg6Eg4YOS4YOQ4YOV4YOa4YOY4YOhIOGDqOGDlOGDoeGDkOGDq+GDmuGDlOGDkeGDmuGDneGDkeGDkC4g4YOS4YOQ4YOg4YOT4YOQIEluZm9ybWF0aW9uIFNlY3VyaXR5IOGDk+GDkCBQeXRob24g4YOZ4YOj4YOg4YOh4YOU4YOR4YOY4YOh4YOQLCDhg6Hhg5Dhg5Phg5Dhg6ogQmFzaWMg4YOT4YOd4YOc4YOY4YOhIOGDkuGDkOGDleGDmuGDmOGDoSDhg6jhg5Thg5vhg5Phg5Thg5Ig4YOo4YOU4YOh4YOQ4YOr4YOa4YOU4YOR4YOU4YOa4YOY4YOQIOGDoeGDrOGDkOGDleGDmuGDmOGDoSDhg5Lhg5Dhg5Lhg6Dhg6vhg5Thg5rhg5Thg5Hhg5AgQWR2YW5jZSDhg5Phg53hg5zhg5Thg5bhg5QuXCIsXG4gICk7XG4gIGNvbnN0IHF1ZXN0aW9uMyA9IHF1ZXN0aW9uc0FuZEFuc3dlcnMoXG4gICAgXCLhg6Dhg5Ag4YOm4YOY4YOg4YOhIOGDoeGDrOGDkOGDleGDmuGDkCDhg57hg6Dhg53hg5Lhg6Dhg5Dhg5vhg5jhg6Eg4YOk4YOQ4YOg4YOS4YOa4YOU4YOR4YOo4YOYP1wiLFxuICAgIHF1ZXN0aW9uSWNvbixcbiAgICBcIuGDnuGDoOGDneGDkuGDoOGDkOGDm+GDmOGDoSDhg6Thg5Dhg6Dhg5Lhg5rhg5Thg5Hhg6jhg5gg4YOZ4YOj4YOg4YOh4YOU4YOR4YOW4YOUIOGDoeGDrOGDkOGDleGDmuGDkCDhg6Hhg6Dhg6Phg5rhg5jhg5Dhg5Mg4YOT4YOQ4YOk4YOY4YOc4YOQ4YOc4YOh4YOU4YOR4YOj4YOa4YOY4YOQIOGDl+GDmOGDkeGDmOGDoeGDmCDhg5Hhg5Dhg5zhg5nhg5jhg6Hhg5Ag4YOT4YOQIFVTQUlELeGDmOGDoSDhg5vhg5jhg5Thg6AuXCIsXG4gICk7XG5cbiAgLy8gZm9vdGVyIHNlY3Rpb25cbiAgY29uc3QgZm9vdGVyVGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb3RlclRleHREaXYuY2xhc3NMaXN0LmFkZChcImZvb3Rlci10ZXh0XCIpO1xuXG4gIGNvbnN0IGZvb3RlckxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgZm9vdGVyTG9nby5zcmMgPSB0YmM7XG5cbiAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBmb290ZXJUZXh0LnRleHRDb250ZW50ID0gXCLCqSAyMDIzIOGDp+GDleGDlOGDmuGDkCDhg6Phg6Thg5rhg5Thg5Hhg5Ag4YOT4YOQ4YOq4YOj4YOa4YOY4YOQXCI7XG5cbiAgY29uc3QgZm9vdGVyVGV4dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGZvb3RlclRleHRCdG4udGV4dENvbnRlbnQgPSBcIuGDrOGDlOGDoeGDlOGDkeGDmCDhg5Phg5Ag4YOe4YOY4YOg4YOd4YOR4YOU4YOR4YOYXCI7XG5cbiAgZm9vdGVyVGV4dERpdi5hcHBlbmRDaGlsZChmb290ZXJMb2dvKTtcbiAgZm9vdGVyVGV4dERpdi5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcbiAgZm9vdGVyVGV4dERpdi5hcHBlbmRDaGlsZChmb290ZXJUZXh0QnRuKTtcblxuICBjb25zdCBmb290ZXJMaW5rc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb3RlckxpbmtzRGl2LmNsYXNzTGlzdC5hZGQoXCJmb290ZXItbGlua3NcIik7XG5cbiAgY29uc3QgZm9vdGVyTGlua1NvY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29uc3QgZmJMaW5rID0gbmV3IEltYWdlKCk7XG4gIGZiTGluay5zcmMgPSBmYjtcblxuICBjb25zdCB5b3V0dWJlTGluayA9IG5ldyBJbWFnZSgpO1xuICB5b3V0dWJlTGluay5zcmMgPSB5b3V0dWJlO1xuXG4gIGNvbnN0IHRleHRVc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHRleHRVc0J0bi50ZXh0Q29udGVudCA9IFwi4YOb4YOd4YOS4YOV4YOs4YOU4YOg4YOU4YOXXCI7XG5cbiAgZm9vdGVyTGlua1NvY0Rpdi5hcHBlbmRDaGlsZChmYkxpbmspO1xuICBmb290ZXJMaW5rU29jRGl2LmFwcGVuZENoaWxkKHlvdXR1YmVMaW5rKTtcblxuICBmb290ZXJMaW5rc0Rpdi5hcHBlbmRDaGlsZChmb290ZXJMaW5rU29jRGl2KTtcbiAgZm9vdGVyTGlua3NEaXYuYXBwZW5kQ2hpbGQodGV4dFVzQnRuKTtcblxuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dERpdik7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJMaW5rc0Rpdik7XG59XG5cbmV4cG9ydCB7IERvbUNvbnRlbnQgfTtcbiIsImZ1bmN0aW9uIHF1ZXN0aW9uc0FuZEFuc3dlcnMocXVlc3Rpb24sIGljb24sIGFuc3dlcikge1xuICBjb25zdCBxdWVzdGlvblNlY3Rpb25TZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3Rpb25zLXNlY3Rpb25cIik7XG5cbiAgY29uc3QgcXVlc3Rpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBxdWVzdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwicXVlc3Rpb24tZGl2XCIpO1xuXG4gIGNvbnN0IHF1ZXN0aW9uU3ViRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcXVlc3Rpb25TdWJEaXYuY2xhc3NMaXN0LmFkZChcInF1ZXN0aW9uLXN1Yi1kaXZcIik7XG5cbiAgY29uc3QgcXVlc3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBxdWVzdGlvblRpdGxlLnRleHRDb250ZW50ID0gYCR7cXVlc3Rpb259YDtcbiAgY29uc3QgcXVlc3Rpb25JY29uID0gbmV3IEltYWdlKCk7XG4gIHF1ZXN0aW9uSWNvbi5zcmMgPSBpY29uO1xuXG4gIHF1ZXN0aW9uU3ViRGl2LmFwcGVuZENoaWxkKHF1ZXN0aW9uVGl0bGUpO1xuICBxdWVzdGlvblN1YkRpdi5hcHBlbmRDaGlsZChxdWVzdGlvbkljb24pO1xuICBxdWVzdGlvbkRpdi5hcHBlbmRDaGlsZChxdWVzdGlvblN1YkRpdik7XG4gIHF1ZXN0aW9uU2VjdGlvblNlbGVjdG9yLmFwcGVuZENoaWxkKHF1ZXN0aW9uRGl2KTtcblxuICAvLyBnaXZpbmcgYnV0dG9uIGZ1bmN0aW9uIHRvIG9wZW4gYW5kIGNsb3NlIGFuc3dlcnNcbiAgbGV0IGFuc3dlck9wZW4gPSBmYWxzZTsgLy8gVmFyaWFibGUgdG8gdHJhY2sgYW5zd2VyIHN0YXRlXG4gIGxldCBhbnN3ZXJSZW1vdmVkID0gZmFsc2U7XG5cbiAgcXVlc3Rpb25TdWJEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0XG4gICAgbGV0IGFuc3dlclBhcmFncmFwaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYW5zd2VyLXBhcmFncmFwaFwiKTtcbiAgICBpZiAoYW5zd2VyUGFyYWdyYXBoICE9PSBudWxsKSB7XG4gICAgICBjb25zb2xlLmxvZyhhbnN3ZXJQYXJhZ3JhcGgpO1xuICAgICAgYW5zd2VyUGFyYWdyYXBoLnJlbW92ZSgpO1xuICAgICAgYW5zd2VyUmVtb3ZlZCA9IHRydWU7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGFuc3dlck9wZW4pO1xuICAgIGNvbnNvbGUubG9nKGFuc3dlclBhcmFncmFwaCk7XG4gICAgaWYgKCFhbnN3ZXJPcGVuIHx8IGFuc3dlclBhcmFncmFwaCA9PT0gbnVsbCkge1xuICAgICAgLy8gQW5zd2VyIGlzIGNsb3NlZCwgY3JlYXRlIGFuZCBhcHBlbmQgaXRcblxuICAgICAgaWYgKGFuc3dlciAhPT0gXCJhbnN3ZXIgSVwiKSB7XG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uQW5zd2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHF1ZXN0aW9uQW5zd2VyLmNsYXNzTGlzdC5hZGQoXCJhbnN3ZXItcGFyYWdyYXBoXCIpO1xuICAgICAgICBxdWVzdGlvbkFuc3dlci50ZXh0Q29udGVudCA9IGAke2Fuc3dlcn1gO1xuICAgICAgICBxdWVzdGlvbkRpdi5hcHBlbmRDaGlsZChxdWVzdGlvbkFuc3dlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBhZGRpbmcgZmlydHMgbG9uZyBxZXN0aW9uIHBhcmFncmFwaFxuICAgICAgICBjb25zdCBxdWVzdGlvbkFuc3dlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHF1ZXN0aW9uQW5zd2VyLmNsYXNzTGlzdC5hZGQoXCJhbnN3ZXItcGFyYWdyYXBoXCIpO1xuICAgICAgICBxdWVzdGlvbkRpdi5hcHBlbmRDaGlsZChxdWVzdGlvbkFuc3dlcik7XG5cbiAgICAgICAgY29uc3QgcXVlc3Rpb25BbnN3ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBxdWVzdGlvbkFuc3dlckRpdi5jbGFzc0xpc3QuYWRkKFwiYW5zd2VyLXBhcmFncmFwaC1kaXZcIik7XG5cbiAgICAgICAgY29uc3QgcXVlc3Rpb25BbnN3ZXJ0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHF1ZXN0aW9uQW5zd2VydGV4dC50ZXh0Q29udGVudCA9XG4gICAgICAgICAgXCLhg5nhg6Phg6Dhg6Hhg5bhg5Qg4YOg4YOU4YOS4YOY4YOh4YOi4YOg4YOQ4YOq4YOY4YOY4YOh4YOX4YOV4YOY4YOhIOGDo+GDnOGDk+GDkCDhg5Lhg5Dhg5jhg5Dhg6Dhg50g4YOg4YOQ4YOb4YOT4YOU4YOc4YOY4YOb4YOUIOGDlOGDouGDkOGDnuGDmDpcIjtcbiAgICAgICAgcXVlc3Rpb25BbnN3ZXIuYXBwZW5kQ2hpbGQocXVlc3Rpb25BbnN3ZXJ0ZXh0KTtcbiAgICAgICAgcXVlc3Rpb25BbnN3ZXIuYXBwZW5kQ2hpbGQocXVlc3Rpb25BbnN3ZXJEaXYpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUFuZEFwcGVuZCh0YWcsIHRleHQsIHBhcmVudCkge1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0YWdlMSA9IGNyZWF0ZUFuZEFwcGVuZChcImRpdlwiLCBcIlwiLCBxdWVzdGlvbkFuc3dlckRpdik7XG4gICAgICAgIGNyZWF0ZUFuZEFwcGVuZChcInN0cm9uZ1wiLCBcIkkg4YOU4YOi4YOQ4YOe4YOYXCIsIHN0YWdlMSk7XG4gICAgICAgIGNyZWF0ZUFuZEFwcGVuZChcbiAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICBcIiAtIOGDnuGDmOGDoOGDleGDlOGDmiDhg5Thg6Lhg5Dhg57hg5bhg5Qg4YOh4YOQ4YOt4YOY4YOg4YOd4YOQLCDhg6jhg5Thg5Dhg5Xhg6Hhg50g4YOh4YOQ4YOh4YOj4YOg4YOV4YOU4YOa4YOYIOGDmeGDo+GDoOGDoeGDmOGDoeGDl+GDleGDmOGDoSDhg5Lhg5Dhg5zhg5nhg6Phg5fhg5Xhg5zhg5jhg5rhg5gg4YOh4YOQ4YOg4YOU4YOS4YOY4YOh4YOi4YOg4YOQ4YOq4YOY4YOdIOGDpOGDneGDoOGDm+GDkCwg4YOg4YOd4YOb4YOU4YOa4YOY4YOqIOGDkuGDkOGDnOGDl+GDkOGDleGDoeGDlOGDkeGDo+GDmuGDmOGDkCDhg5nhg6Phg6Dhg6Hhg5jhg6Eg4YOo4YOY4YOT4YOQIOGDkuGDleGDlOGDoOGDk+GDluGDlC4g4YOZ4YOj4YOg4YOh4YOW4YOUIOGDoOGDlOGDkuGDmOGDoeGDouGDoOGDkOGDquGDmOGDmOGDoSDhg5Phg5Dhg6Hhg6Dhg6Phg5rhg5Thg5Hhg5jhg6Eg4YOo4YOU4YOb4YOT4YOU4YOSIOGDk+GDkOGDmOGDrOGDp+GDlOGDkeGDkCDhg6jhg5Thg5vhg53hg6Hhg6Phg5rhg5gg4YOS4YOQ4YOc4YOq4YOu4YOQ4YOT4YOU4YOR4YOU4YOR4YOY4YOhIOGDkuGDkOGDk+GDkOGDoOGDqeGDlOGDleGDkC5cIixcbiAgICAgICAgICBzdGFnZTEsXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3Qgc3RhZ2UyID0gY3JlYXRlQW5kQXBwZW5kKFwiZGl2XCIsIFwiXCIsIHF1ZXN0aW9uQW5zd2VyRGl2KTtcbiAgICAgICAgY3JlYXRlQW5kQXBwZW5kKFwic3Ryb25nXCIsIFwiSUkg4YOU4YOi4YOQ4YOe4YOYXCIsIHN0YWdlMik7XG4gICAgICAgIGNyZWF0ZUFuZEFwcGVuZChcbiAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICBcIiAtIOGDqOGDlOGDoOGDqeGDlOGDleGDmOGDoSDhg5vhg5Thg53hg6Dhg5Qg4YOU4YOi4YOQ4YOe4YOYIOGDmeGDo+GDoOGDoeGDlOGDkeGDmOGDoSDhg5vhg5jhg67hg5Thg5Phg5Xhg5jhg5cg4YOS4YOQ4YOc4YOh4YOu4YOV4YOQ4YOV4YOU4YOR4YOj4YOa4YOY4YOQLCDhg5bhg53hg5Lhg5jhg5Thg6Dhg5fhg5gg4YOZ4YOj4YOg4YOh4YOY4YOh4YOX4YOV4YOY4YOhIOGDm+GDneGDmOGDquGDkOGDleGDoSDhg57hg6Dhg5Qt4YOi4YOU4YOh4YOi4YOhLCDhg5bhg53hg5Lhg5jhg5Thg6Dhg5cg4YOZ4YOj4YOg4YOh4YOW4YOUIOGDmeGDmCDhg6Phg5zhg5Dhg6Dhg5Thg5Hhg5jhg6Eg4YOi4YOU4YOh4YOi4YOhLCDhg6Hhg5Dhg5Phg5Dhg6og4YOb4YOY4YOc4YOY4YOb4YOQ4YOa4YOj4YOg4YOYIOGDluGDpuGDleGDkOGDoOGDmOGDoSDhg5Lhg5Dhg5Phg5Dhg5rhg5Dhg67hg5Xhg5jhg6Eg4YOo4YOU4YOb4YOX4YOu4YOV4YOU4YOV4YOQ4YOo4YOYIOGDkuGDkOGDk+GDkOGDruGDleGDkOGDmiDhg6jhg5Thg6Dhg6nhg5Thg5Xhg5jhg6Eg4YOo4YOU4YOb4YOT4YOU4YOSIOGDlOGDouGDkOGDnuGDluGDlC5cIixcbiAgICAgICAgICBzdGFnZTIsXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3Qgc3RhZ2UzID0gY3JlYXRlQW5kQXBwZW5kKFwiZGl2XCIsIFwiXCIsIHF1ZXN0aW9uQW5zd2VyRGl2KTtcbiAgICAgICAgY3JlYXRlQW5kQXBwZW5kKFwic3Ryb25nXCIsIFwiSUlJIOGDlOGDouGDkOGDnuGDmFwiLCBzdGFnZTMpO1xuICAgICAgICBjcmVhdGVBbmRBcHBlbmQoXG4gICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgXCIgLSDhg5vhg5Thg6Hhg5Dhg5vhg5Qg4YOU4YOi4YOQ4YOe4YOYIOGDmeGDo+GDoOGDoeGDlOGDkeGDmOGDoSDhg5vhg5jhg67hg5Thg5Phg5Xhg5jhg5cg4YOS4YOQ4YOc4YOh4YOu4YOV4YOQ4YOV4YOT4YOU4YOR4YOQOiBBZHZhbmNlIOGDmeGDo+GDoOGDoeGDlOGDkeGDluGDlCwg4YOh4YOQ4YOT4YOQ4YOqIOGDm+GDneGDmOGDl+GDruGDneGDleGDlOGDkeGDkCDhg5Lhg5Dhg6Dhg5nhg5Xhg5Thg6Phg5rhg5gg4YOi4YOU4YOl4YOc4YOY4YOZ4YOj4YOg4YOYIOGDquGDneGDk+GDnOGDkCwg4YOb4YOd4YOc4YOQ4YOs4YOY4YOa4YOU4YOU4YOR4YOb4YOQIOGDo+GDnOGDk+GDkCDhg5Phg5Dhg6zhg5Thg6Dhg53hg5wg4YOi4YOU4YOl4YOc4YOY4YOZ4YOj4YOg4YOYIOGDouGDlOGDoeGDouGDmCDhg6rhg53hg5Phg5zhg5jhg6Eg4YOT4YOd4YOc4YOY4YOhIOGDqOGDlOGDoeGDkOGDm+GDneGDrOGDm+GDlOGDkeGDmuGDkOGDkywg4YOu4YOd4YOa4YOdIOGDmeGDo+GDoOGDoeGDlOGDkeGDluGDlCwg4YOh4YOQ4YOT4YOQ4YOqIOGDoOGDkOGDmOGDm+GDlCDhg6Lhg5jhg57hg5jhg6Eg4YOs4YOY4YOc4YOQ4YOh4YOs4YOQ4YOg4YOYIOGDquGDneGDk+GDnOGDkCDhg5vhg53hg5fhg67hg53hg5Xhg5zhg5jhg5rhg5gg4YOQ4YOgIOGDkOGDoOGDmOGDoSDhg6Phg5zhg5Phg5Ag4YOo4YOU4YOQ4YOh4YOg4YOj4YOa4YOd4YOXIOGDouGDlOGDpeGDnOGDmOGDmeGDo+GDoOGDmCDhg5Phg5Dhg5Xhg5Dhg5rhg5Thg5Hhg5AsIOGDoOGDkOGDqlwiLFxuICAgICAgICAgIHN0YWdlMyxcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBzdGFnZTQgPSBjcmVhdGVBbmRBcHBlbmQoXCJkaXZcIiwgXCJcIiwgcXVlc3Rpb25BbnN3ZXJEaXYpO1xuICAgICAgICBjcmVhdGVBbmRBcHBlbmQoXCJzdHJvbmdcIiwgXCJJViDhg5Thg6Lhg5Dhg57hg5hcIiwgc3RhZ2U0KTtcbiAgICAgICAgY3JlYXRlQW5kQXBwZW5kKFxuICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgIFwiIC0g4YOo4YOU4YOg4YOp4YOU4YOV4YOY4YOhIOGDkeGDneGDmuGDnSDhg5vhg5Thg53hg5fhg67hg5Qg4YOU4YOi4YOQ4YOe4YOYIOGDm+GDneGDmOGDquGDkOGDleGDoSDhg5Lhg5Dhg6Hhg5Dhg6Phg5Hhg6Dhg5Thg5Hhg5Dhg6Eg4YOo4YOU4YOh4YOQ4YOg4YOp4YOU4YOVIOGDmeGDneGDm+GDmOGDoeGDmOGDkOGDoeGDl+GDkOGDnC4g4YOS4YOQ4YOh4YOQ4YOj4YOR4YOg4YOU4YOR4YOY4YOhIOGDrOGDkOGDoOGDm+GDkOGDouGDlOGDkeGDmOGDlyDhg5Lhg5Dhg5Xhg5rhg5jhg6Eg4YOo4YOU4YOb4YOX4YOu4YOV4YOU4YOV4YOQ4YOo4YOYIOGDqeGDkOGDmOGDoOGDmOGDquGDruGDlOGDkeGDmOGDlyDhg5nhg6Phg6Dhg6Hhg5bhg5Qg4YOT4YOQIOGDkuGDkOGDpOGDneGDoOGDm+GDk+GDlOGDkeGDkCDhg6jhg5Thg6Hhg5Dhg5Hhg5Dhg5vhg5jhg6Hhg5gg4YOu4YOU4YOa4YOo4YOU4YOZ4YOg4YOj4YOa4YOU4YOR4YOQLlwiLFxuICAgICAgICAgIHN0YWdlNCxcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBxdWVzdGlvbkFuc3dlcnRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHF1ZXN0aW9uQW5zd2VydGV4dDIudGV4dENvbnRlbnQgPVxuICAgICAgICAgIFwiKiDhg6Hhg5Dhg5zhg5Dhg5sg4YOZ4YOj4YOg4YOh4YOW4YOUIOGDk+GDkOGDoOGDlOGDkuGDmOGDoeGDouGDoOGDmOGDoOGDk+GDlOGDkeGDmCDhg5vhg5zhg5jhg6jhg5Xhg5zhg5Thg5rhg53hg5Xhg5Dhg5zhg5jhg5AsIOGDp+GDo+GDoOGDkOGDk+GDpuGDlOGDkeGDmOGDlyDhg6zhg5Dhg5jhg5nhg5jhg5fhg67hg50g4YOZ4YOj4YOg4YOh4YOY4YOhIOGDkOGDpuGDrOGDlOGDoOGDkCwg4YOc4YOQ4YOu4YOdIOGDoOGDkOGDoSDhg5jhg6Hhg6zhg5Dhg5Xhg5rhg5gg4YOZ4YOj4YOg4YOh4YOY4YOhIOGDkuGDkOGDnOGDm+GDkOGDleGDmuGDneGDkeGDkOGDqOGDmCDhg5Phg5Ag4YOS4YOQ4YOY4YOS4YOdIOGDkuGDkOGDkOGDqeGDnOGDmOGDkCDhg5fhg6Mg4YOQ4YOg4YOQIOGDmeGDo+GDoOGDoeGDoSDhg5Phg5Dhg6Hhg6zhg6Dhg5Thg5Hhg5jhg6Eg4YOs4YOY4YOc4YOQ4YOe4YOY4YOg4YOd4YOR4YOQLlwiO1xuICAgICAgICBxdWVzdGlvbkFuc3dlci5hcHBlbmRDaGlsZChxdWVzdGlvbkFuc3dlcnRleHQyKTtcbiAgICAgIH1cblxuICAgICAgcXVlc3Rpb25JY29uLmlkID0gXCJvcGVuZWRcIjtcbiAgICAgIGFuc3dlck9wZW4gPSB0cnVlOyAvLyBTZXQgYW5zd2VyIHN0YXRlIHRvIG9wZW5cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYW5zd2VyUGFyYWdyYXBoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbnN3ZXItcGFyYWdyYXBoXCIpO1xuICAgICAgLy8gQW5zd2VyIGlzIG9wZW4sIHJlbW92ZSBpdFxuICAgICAgcXVlc3Rpb25JY29uLmlkID0gXCJcIjtcbiAgICAgIGlmIChhbnN3ZXJQYXJhZ3JhcGggIT09IG51bGwpIHtcbiAgICAgICAgYW5zd2VyUGFyYWdyYXBoLnJlbW92ZSgpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2cocXVlc3Rpb25EaXYpO1xuICAgICAgY29uc29sZS5sb2coYW5zd2VyUGFyYWdyYXBoKTtcbiAgICAgIGFuc3dlck9wZW4gPSBmYWxzZTsgLy8gU2V0IGFuc3dlciBzdGF0ZSB0byBjbG9zZWRcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgeyBxdWVzdGlvbnNBbmRBbnN3ZXJzIH07XG4iLCJmdW5jdGlvbiBzbGlkZXIobG9nb3MsIGljb24sIGRvdCwgYXV0b0NoYW5nZUludGVydmFsID0gODAwMCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhcnRuZXJzLXNlY3Rpb25cIik7XG5cbiAgY29uc3Qgc2xpZGVyQnRuTGVmdCA9IG5ldyBJbWFnZSgpO1xuICBzbGlkZXJCdG5MZWZ0LnNyYyA9IGljb247XG4gIHNsaWRlckJ0bkxlZnQuY2xhc3NMaXN0LmFkZChcInNsaWRlci1idG4tbGVmdFwiKTtcblxuICBjb25zdCBzbGlkZXJCdG5SaWdodCA9IG5ldyBJbWFnZSgpO1xuICBzbGlkZXJCdG5SaWdodC5zcmMgPSBpY29uO1xuICBzbGlkZXJCdG5SaWdodC5jbGFzc0xpc3QuYWRkKFwic2xpZGVyLWJ0bi1yaWdodFwiKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwicGFydG5lci10aXRsZVwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIuGDnuGDoOGDneGDlOGDpeGDouGDmOGDoSDhg57hg5Dhg6Dhg6Lhg5zhg5jhg53hg6Dhg5Thg5Hhg5hcIjtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGNvbnN0IGNvbnRhaW5lckRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXJEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJwYXJ0bmVycy1kaXNwbGF5XCIpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXJEaXNwbGF5KTtcbiAgY29udGFpbmVyRGlzcGxheS5hcHBlbmRDaGlsZChzbGlkZXJCdG5MZWZ0KTtcblxuICBjb25zdCBzbGlkZXJEaXNwbGF5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyRGlzcGxheS5hcHBlbmRDaGlsZChzbGlkZXJEaXNwbGF5RGl2KTtcbiAgbGV0IG4gPSAwO1xuICBzbGlkZXJQYWdlKG4pO1xuXG4gIGNvbnRhaW5lckRpc3BsYXkuYXBwZW5kQ2hpbGQoc2xpZGVyQnRuUmlnaHQpO1xuXG4gIGZ1bmN0aW9uIHNsaWRlclBhZ2Uobikge1xuICAgIGNvbnN0IHNsaWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2xpZGVyRGl2LmNsYXNzTGlzdC5hZGQoYHNsaWRlci1kaXYtJHtufWApO1xuICAgIHNsaWRlckRpdi5jbGFzc0xpc3QuYWRkKFwic2xpZGVyLWRpdlwiKTsgLy8gQWRkaW5nIGEgY29tbW9uIGNsYXNzIGZvciBzdHlsaW5nXG4gICAgc2xpZGVyRGlzcGxheURpdi5hcHBlbmRDaGlsZChzbGlkZXJEaXYpO1xuXG4gICAgLy8gU2V0IGluaXRpYWwgb3BhY2l0eSB0byAwIGZvciBmYWRlLWluIGVmZmVjdFxuICAgIHNsaWRlckRpdi5zdHlsZS5vcGFjaXR5ID0gMDtcblxuICAgIGlmIChuICE9PSAyKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAyOyBpKyspIHtcbiAgICAgICAgc2xpZGVyRGl2LmFwcGVuZENoaWxkKGxvZ29zW25dW2ldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2xpZGVyRGl2LmFwcGVuZENoaWxkKGxvZ29zWzJdWzBdKTtcbiAgICB9XG5cbiAgICAvLyBUcmlnZ2VyaW5nIHJlZmxvdyB0byBhcHBseSBpbml0aWFsIG9wYWNpdHlcbiAgICBzbGlkZXJEaXYub2Zmc2V0SGVpZ2h0O1xuXG4gICAgLy8gU2V0IG9wYWNpdHkgdG8gMSBmb3IgZmFkZS1pbiBlZmZlY3RcbiAgICBzbGlkZXJEaXYuc3R5bGUub3BhY2l0eSA9IDE7XG4gIH1cblxuICAvLyBGdW5jdGlvbiB0byBjaGFuZ2Ugc2xpZGUgd2l0aCBmYWRlLW91dCBhbmQgZmFkZS1pbiBlZmZlY3RcbiAgZnVuY3Rpb24gY2hhbmdlU2xpZGUoYnRuUmlnaHQpIHtcbiAgICBjb25zdCBjdXJyZW50U2xpZGUgPSBzbGlkZXJEaXNwbGF5RGl2Lmxhc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICAvLyBTZXQgb3BhY2l0eSB0byAwIGZvciBmYWRlLW91dCBlZmZlY3RcbiAgICBjdXJyZW50U2xpZGUuc3R5bGUub3BhY2l0eSA9IDA7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIFJlbW92ZSB0aGUgY3VycmVudCBzbGlkZSBhZnRlciBmYWRlLW91dFxuICAgICAgc2xpZGVyRGlzcGxheURpdi5yZW1vdmVDaGlsZChjdXJyZW50U2xpZGUpO1xuXG4gICAgICAvLyBBZGQgdGhlIG5ldyBzbGlkZSB3aXRoIGZhZGUtaW4gZWZmZWN0XG4gICAgICBpZiAoYnRuUmlnaHQpIHtcbiAgICAgICAgaWYgKG4gIT09IDIpIHtcbiAgICAgICAgICBuICs9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbiA9IDA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobiAhPT0gMCkge1xuICAgICAgICBuIC09IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuID0gMjtcbiAgICAgIH1cbiAgICAgIHNsaWRlclBhZ2Uobik7XG4gICAgICBkb3RJZChuKTtcbiAgICB9LCA1MDApOyAvLyA1MDBtcyBpcyB0aGUgZHVyYXRpb24gb2YgdGhlIGZhZGUtb3V0IHRyYW5zaXRpb25cbiAgfVxuXG4gIC8vIEZ1bmN0aW9uIHRvIGhhbmRsZSBkb3QgaW5kaWNhdG9yc1xuICBmdW5jdGlvbiBkb3RJZChuKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMjsgKytpKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZERvdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zbGlkZXItZG90LSR7aX1gKTtcbiAgICAgIHNlbGVjdGVkRG90LmlkID0gaSA9PT0gbiA/IFwiZG90LXNlbGVjdGVkXCIgOiBcIlwiO1xuICAgIH1cbiAgfVxuXG4gIC8vIEZ1bmN0aW9uIHRvIHN0YXJ0IGF1dG8gY2hhbmdlXG4gIGZ1bmN0aW9uIHN0YXJ0QXV0b0NoYW5nZSgpIHtcbiAgICByZXR1cm4gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY2hhbmdlU2xpZGUodHJ1ZSk7IC8vIEF1dG8gY2hhbmdlIHRvIHRoZSBuZXh0IHNsaWRlXG4gICAgfSwgYXV0b0NoYW5nZUludGVydmFsKTtcbiAgfVxuXG4gIGxldCBhdXRvQ2hhbmdlVGltZXIgPSBzdGFydEF1dG9DaGFuZ2UoKTsgLy8gU3RhcnQgYXV0byBjaGFuZ2VcblxuICAvLyBFdmVudCBsaXN0ZW5lcnMgZm9yIG1hbnVhbCBuYXZpZ2F0aW9uXG4gIHNsaWRlckJ0blJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xlYXJJbnRlcnZhbChhdXRvQ2hhbmdlVGltZXIpOyAvLyBTdG9wIGF1dG8gY2hhbmdlIHdoZW4gbWFudWFsbHkgbmF2aWdhdGluZ1xuICAgIGNoYW5nZVNsaWRlKHRydWUpO1xuICAgIGF1dG9DaGFuZ2VUaW1lciA9IHN0YXJ0QXV0b0NoYW5nZSgpOyAvLyBSZXN1bWUgYXV0byBjaGFuZ2UgYWZ0ZXIgbWFudWFsIG5hdmlnYXRpb25cbiAgfSk7XG5cbiAgc2xpZGVyQnRuTGVmdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsZWFySW50ZXJ2YWwoYXV0b0NoYW5nZVRpbWVyKTtcbiAgICBjaGFuZ2VTbGlkZShmYWxzZSk7XG4gICAgYXV0b0NoYW5nZVRpbWVyID0gc3RhcnRBdXRvQ2hhbmdlKCk7XG4gIH0pO1xuXG4gIC8vIERvdCBzZWN0aW9uXG4gIGNvbnN0IGRvdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRvdERpdi5jbGFzc0xpc3QuYWRkKFwiZG90LURpdlwiKTtcbiAgY29udGFpbmVyRGlzcGxheS5hcHBlbmRDaGlsZChkb3REaXYpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IDI7IGkrKykge1xuICAgIGNvbnN0IHNsaWRlckRvdCA9IG5ldyBJbWFnZSgpO1xuICAgIHNsaWRlckRvdC5zcmMgPSBkb3Q7XG4gICAgc2xpZGVyRG90LmNsYXNzTGlzdC5hZGQoYHNsaWRlci1kb3QtJHtpfWApO1xuICAgIGRvdERpdi5hcHBlbmRDaGlsZChzbGlkZXJEb3QpO1xuICB9XG5cbiAgZG90SWQobik7XG59XG5cbmV4cG9ydCB7IHNsaWRlciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgRG9tQ29udGVudCB9IGZyb20gXCIuL2RvbUNvbnRlbnRcIjtcblxuRG9tQ29udGVudCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9