/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Poppins:wght@400;500;600&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: 'Lato', sans-serif;\\r\\n  font-style: normal;\\r\\n  box-sizing: border-box;\\r\\n  font-weight: 600;\\r\\n  font-size: 1.2rem;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  border: 4px solid black;\\r\\n  padding: 20px 20px;\\r\\n  bottom: 0;\\r\\n}\\r\\n\\r\\nfooter h3 {\\r\\n  font-weight: normal;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 1em 3rem;\\r\\n}\\r\\n\\r\\nnav div.nav-logo {\\r\\n  border: 1px solid #000;\\r\\n  padding: 1rem;\\r\\n  border-radius: 50%;\\r\\n}\\r\\n\\r\\nul.nav-links {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.overlay-content li {\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\nul.nav-links li {\\r\\n  list-style: none;\\r\\n  margin-left: 2rem;\\r\\n}\\r\\n\\r\\nul.nav-links li a {\\r\\n  color: #000;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nul.nav-links a.active {\\r\\n  text-decoration: underline;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n#events {\\r\\n  display: grid;\\r\\n  grid-template-columns: 6fr 6fr;\\r\\n  grid-column-gap: 5%;\\r\\n  grid-row-gap: 20px;\\r\\n  justify-items: stretch;\\r\\n  align-items: stretch;\\r\\n  padding: 0 20px;\\r\\n}\\r\\n\\r\\n#events .movie-list {\\r\\n  list-style: none;\\r\\n  margin: 20px 0;\\r\\n}\\r\\n\\r\\n.movie-actions {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  margin-top: 5px;\\r\\n}\\r\\n\\r\\n.movie-actions button {\\r\\n  background: #fff;\\r\\n}\\r\\n\\r\\n.overlay {\\r\\n  position: fixed;\\r\\n  bottom: 0;\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n  right: 0;\\r\\n  height: 100%;\\r\\n  width: 100%;\\r\\n  background: black;\\r\\n  opacity: 0.9;\\r\\n  transition: opacity 200ms;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  z-index: 10;\\r\\n}\\r\\n\\r\\n.overlay div.overlay-image {\\r\\n  max-width: 25%;\\r\\n}\\r\\n\\r\\n.overlay img {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.overlay-content {\\r\\n  background: #fff;\\r\\n  width: 80%;\\r\\n  height: 95%;\\r\\n  padding: 0.5rem 2rem;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n.overlay-content form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  text-align: center;\\r\\n  margin-top: 1rem;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.overlay-content form input {\\r\\n  margin: 0 auto;\\r\\n  margin-bottom: 1em;\\r\\n  padding: 10px;\\r\\n  width: 60%;\\r\\n}\\r\\n\\r\\n.overlay-content form button {\\r\\n  width: 100px;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.overlay-content .flex {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.overlay-content div:nth-child(2) {\\r\\n  margin-left: 20px;\\r\\n}\\r\\n\\r\\n.overlay h2 {\\r\\n  margin-bottom: 5rem;\\r\\n}\\r\\n\\r\\n.overlay h3,\\r\\n.overlay h5 {\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n.close-container {\\r\\n  display: flex;\\r\\n  justify-content: end;\\r\\n}\\r\\n\\r\\n.close-container span {\\r\\n  cursor: pointer;\\r\\n  font-weight: 800;\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\n.movie-header {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  margin: 1rem 0;\\r\\n}\\r\\n\\r\\n.movie-header i {\\r\\n  cursor: pointer;\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n.movie-header h3 {\\r\\n  font-size: 22px;\\r\\n}\\r\\n\\r\\n.comment {\\r\\n  font-weight: 400;\\r\\n}\\r\\n\\r\\n.span-likes {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n@media only screen and (min-width: 577px) {\\r\\n  #events {\\r\\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\\r\\n    padding: 0 100px;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://js-capstone-/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://js-capstone-/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://js-capstone-/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://js-capstone-/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://js-capstone-/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://js-capstone-/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://js-capstone-/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://js-capstone-/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://js-capstone-/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://js-capstone-/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayAllMovies\": () => (/* binding */ displayAllMovies)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/utils.js */ \"./src/modules/utils.js\");\n/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/display.js */ \"./src/modules/display.js\");\n/* harmony import */ var _modules_API_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/API.js */ \"./src/modules/API.js\");\n\r\n\r\n\r\n\r\n\r\nconst displayAllMovies = async () => {\r\n  const movies = await (0,_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__.getAllMovies)();\r\n  const likesArray = await (0,_modules_API_js__WEBPACK_IMPORTED_MODULE_3__.getAllLikes)();\r\n  (0,_modules_display_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(movies);\r\n  (0,_modules_display_js__WEBPACK_IMPORTED_MODULE_2__.displayLikes)(likesArray);\r\n  const icons = document.querySelectorAll('.like-icon');\r\n  icons.forEach((icon) => {\r\n    const itemId = icon.getAttribute('id');\r\n    icon.addEventListener('click', () => (0,_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__.likeMovie)(itemId));\r\n  });\r\n};\r\n\r\ndisplayAllMovies();\n\n//# sourceURL=webpack://js-capstone-/./src/index.js?");

/***/ }),

/***/ "./src/modules/API.js":
/*!****************************!*\
  !*** ./src/modules/API.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BASE_URL\": () => (/* binding */ BASE_URL),\n/* harmony export */   \"INV_URL\": () => (/* binding */ INV_URL),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getAllComments\": () => (/* binding */ getAllComments),\n/* harmony export */   \"getAllLikes\": () => (/* binding */ getAllLikes),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment)\n/* harmony export */ });\nconst BASE_URL = 'https://api.tvmaze.com/search/shows?q=girls';\r\nconst INV_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HhwngfSk0BVbaLtkUNy0';\r\n\r\nconst getAllComments = async (id) => {\r\n  const response = await fetch(`${INV_URL}/comments?item_id=${id}`, {\r\n    method: 'GET',\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  });\r\n  const data = await response.json();\r\n  return data;\r\n};\r\nconst postComment = async (id, name, comment) => {\r\n  const response = await fetch(`${INV_URL}/comments`, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n    body: JSON.stringify({\r\n      item_id: id,\r\n      username: name,\r\n      comment,\r\n    }),\r\n  });\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\r\nconst getAllLikes = async () => {\r\n  const response = await fetch(`${INV_URL}/likes`, {\r\n    method: 'GET',\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  });\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\r\nconst getData = async () => {\r\n  const response = await fetch('GET', BASE_URL);\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://js-capstone-/./src/modules/API.js?");

/***/ }),

/***/ "./src/modules/commentsCounter.js":
/*!****************************************!*\
  !*** ./src/modules/commentsCounter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentsCounter = () => {\r\n  const comments = document.querySelectorAll('.comment');\r\n  return comments.length;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsCounter);\n\n//# sourceURL=webpack://js-capstone-/./src/modules/commentsCounter.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"displayLikes\": () => (/* binding */ displayLikes)\n/* harmony export */ });\n/* harmony import */ var _selectors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors.js */ \"./src/modules/selectors.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./src/modules/utils.js\");\n/* harmony import */ var _movieCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movieCounter.js */ \"./src/modules/movieCounter.js\");\n\n\n\n\nconst displayMovies = (movies) => {\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.clearPreviousDOM)()\n  movies.forEach((movie) => {\n    const { image, name } = movie.show;\n    const list = document.createElement('li');\n    list.setAttribute('class', 'movie-list');\n    const arrayElements = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.createMovieElements)(image, name, movie.show);\n    arrayElements.forEach((elem) => {\n      list.appendChild(elem);\n    });\n    _selectors_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appendChild(list);\n  });\n  const numberOfMovies = (0,_movieCounter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  const movieHolderCount = document.querySelector('#movie_count');\n  movieHolderCount.innerHTML = `Number of movies  (${numberOfMovies})`;\n};\nconst displayLikes = (array) => {\n  const movieElements = document.querySelectorAll('.span-likes');\n  movieElements.forEach((element) => {\n    const index = element.getAttribute('data-index');\n    const ind = array.find((arr) => arr.item_id === index);\n    const par = document.createElement('p');\n    par.textContent = `${ind ? ind.likes : '0'} likes`;\n    element.appendChild(par);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMovies);\n\n\n//# sourceURL=webpack://js-capstone-/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/fetch.js":
/*!******************************!*\
  !*** ./src/modules/fetch.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apiHandlerInv\": () => (/* binding */ apiHandlerInv),\n/* harmony export */   \"apiHandlerMovie\": () => (/* binding */ apiHandlerMovie),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst apiHandlerMovie = (method, url) => fetch(url)\r\n  .then((response) => response.json())\r\n  .then((json) => json);\r\n\r\nconst apiHandlerInv = async(method, url, payload) => {\r\n  if (payload) {\r\n    const response = await fetch(`${url}/likes`,\r\n     {\r\n      method,\r\n      body: JSON.stringify(payload),\r\n      headers: {\r\n        'Content-type': 'application/json; charset=UTF-8',\r\n      },\r\n    }\r\n    )\r\n    return response\r\n  }\r\n  return fetch(`${url}`, {\r\n    method,\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  })\r\n    .then((response) => response.json())\r\n    .then((json) => json);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiHandlerMovie);\n\n//# sourceURL=webpack://js-capstone-/./src/modules/fetch.js?");

/***/ }),

/***/ "./src/modules/movieCounter.js":
/*!*************************************!*\
  !*** ./src/modules/movieCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst movieCounter = () => {\r\n  const movies = document.querySelectorAll('.movie-list');\r\n  return movies.length;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (movieCounter);\n\n//# sourceURL=webpack://js-capstone-/./src/modules/movieCounter.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commentPopUp\": () => (/* binding */ commentPopUp),\n/* harmony export */   \"displayReserve\": () => (/* binding */ displayReserve)\n/* harmony export */ });\n/* harmony import */ var _commentsCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentsCounter.js */ \"./src/modules/commentsCounter.js\");\n/* harmony import */ var _API_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./API.js */ \"./src/modules/API.js\");\n\r\n\r\n\r\nconst displayReserve = (data, closeModal) => {\r\n  const overlay = document.createElement('div');\r\n  const body = document.querySelector('body');\r\n  overlay.classList.add('overlay');\r\n  overlay.innerHTML = ` <div class=\"overlay-content\">\r\n                          <div class=\"close-container\"><span class=\"close-modal\"><i class=\"fa-sharp fa-solid fa-xmark\"></i><span></div>\r\n                          <div class=\"flex\">\r\n                            <div class=\"overlay-image\">\r\n                              <img src=${data.image.original} alt=\"\">\r\n                            </div>\r\n                            <div>\r\n                              <h2>${data.name}</h2>\r\n                              <p></p>\r\n                              <h5>Reservations</h5>\r\n                              <ul>\r\n                                <li>2023-02-09 --2023-02-14 by daniel</li>\r\n                                <li>2023-02-10 --2023-02-25 by david</li>\r\n                              </ul>\r\n                            </div>\r\n                          </div>\r\n                          <form action=\"#\">\r\n                            <h3>Add a reservation</h3>\r\n                            <input class=\"form_item\" id=\"name\" type=\"text\" name=\"name\" placeholder=\"Yeremias\" maxlength=\"30\" required>\r\n                            <input class=\"form_item\" id=\"start-date\" type=\"email\" name=\"start-date\" placeholder=\"natajayanj14@gmail.com\" required>\r\n                            <input class=\"form_item\" id=\"end-date\" type=\"email\" name=\"end-date\" placeholder=\"natajayanj14@gmail.com\" required>\r\n                            <div id=\"error-message\"></div>\r\n                            <button type=\"submit\" class=\"form_button\" >Reserve</button>\r\n                          </form>\r\n                        </div>`;\r\n  body.appendChild(overlay);\r\n  const closeBtn = document.querySelector('.close-modal');\r\n  closeBtn.addEventListener('click', closeModal);\r\n};\r\n\r\nconst commentPopUp = async (data, closeModal, getArrayComments) => {\r\n  const comments = await getArrayComments(data.id);\r\n  const commentsList = [];\r\n  comments.forEach((com) => {\r\n    commentsList.push(`<li class=\"comment\">${com}</li>`);\r\n  });\r\n  const overlay = document.createElement('div');\r\n  const body = document.querySelector('body');\r\n  overlay.classList.add('overlay');\r\n  overlay.innerHTML = ` <div class=\"overlay-content\">\r\n                          <div class=\"close-container\"><span class=\"close-modal\"><i class=\"fa-sharp fa-solid fa-xmark\"></i><span></div>\r\n                          <div class=\"flex\">\r\n                            <div class=\"overlay-image\">\r\n                              <img src=${data.image.original} alt=\"\">\r\n                            </div>\r\n                            <div>\r\n                              <h2>${data.name}</h2>\r\n                              <p></p>\r\n                              <h3></h3>\r\n                              <ul class=\"comments-list\">\r\n                                ${commentsList.join('')}\r\n                              </ul>\r\n                            </div>\r\n                          </div>\r\n                          <form action=\"#\">\r\n                            <h3>Write your comment here </h3>\r\n                            <input class=\"form_item\" id=\"name\" type=\"text\" name=\"name\" placeholder=\"your name\" maxlength=\"30\" required>\r\n                            <input class=\"form_item\" id=\"start-date\" type=\"text\" name=\"start-date\" placeholder=\"your insights\" required>\r\n                            <div id=\"error-message\"></div>\r\n                            <button type=\"submit\" class=\"form_button\" >Comment</button>\r\n                          </form>\r\n                        </div>`;\r\n  body.appendChild(overlay);\r\n  const commentForm = overlay.querySelector('form');\r\n  commentForm.addEventListener('submit', async (event) => {\r\n    event.preventDefault();\r\n    const name = commentForm.querySelector('#name').value;\r\n    const comment = commentForm.querySelector('#start-date').value;\r\n    const itemId = data.id;\r\n    try {\r\n      await (0,_API_js__WEBPACK_IMPORTED_MODULE_1__.postComment)(itemId, name, comment);\r\n      const comments = await getArrayComments(itemId);\r\n      const commentsList = comments.map((com) => `<li class=\"comment\">${com}</li>`);\r\n      const numberOfComments = (0,_commentsCounter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n      const commentHeader = overlay.querySelector('h3');\r\n      commentHeader.innerHTML = `Comments (${numberOfComments})`;\r\n      const commentsListElement = overlay.querySelector('.comments-list');\r\n      commentsListElement.innerHTML = commentsList.join('');\r\n    } catch (error) {\r\n      throw new Error(error.message);\r\n    }\r\n  });\r\n\r\n  const numberOfComments = (0,_commentsCounter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  const commentHeader = overlay.querySelector('h3');\r\n  commentHeader.innerHTML = `Comments (${numberOfComments})`;\r\n  const closeBtn = document.querySelector('.close-modal');\r\n  closeBtn.addEventListener('click', closeModal);\r\n};\n\n//# sourceURL=webpack://js-capstone-/./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/selectors.js":
/*!**********************************!*\
  !*** ./src/modules/selectors.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst events = document.querySelector('#events');\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events);\r\n\n\n//# sourceURL=webpack://js-capstone-/./src/modules/selectors.js?");

/***/ }),

/***/ "./src/modules/utils.js":
/*!******************************!*\
  !*** ./src/modules/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearPreviousDOM\": () => (/* binding */ clearPreviousDOM),\n/* harmony export */   \"createMovieElements\": () => (/* binding */ createMovieElements),\n/* harmony export */   \"getAllMovies\": () => (/* binding */ getAllMovies),\n/* harmony export */   \"likeMovie\": () => (/* binding */ likeMovie)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n/* harmony import */ var _API_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./API.js */ \"./src/modules/API.js\");\n/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetch.js */ \"./src/modules/fetch.js\");\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup.js */ \"./src/modules/popup.js\");\n\r\n\r\n\r\n\r\n\r\nconst closeModal = () => {\r\n  const overlay = document.querySelector('.overlay');\r\n  const body = document.querySelector('body');\r\n  body.removeChild(overlay);\r\n};\r\n\r\nconst getArrayComments = async (id) => {\r\n  const commentsArray = [];\r\n  const comments = await (0,_API_js__WEBPACK_IMPORTED_MODULE_1__.getAllComments)(id);\r\n  if (comments) {\r\n    comments.forEach((com) => {\r\n      const { comment, username } = com;\r\n      const createdDate = com.creation_date;\r\n      const li = document.createElement('li');\r\n      li.innerHTML = `${createdDate} ${comment} by ${username}`;\r\n      commentsArray.push(li.innerHTML);\r\n    });\r\n  }\r\n  return commentsArray;\r\n};\r\n\r\nconst createMovieElements = (image, name, movie) => {\r\n  const btnContainer = document.createElement('div');\r\n  const commentBtn = document.createElement('button');\r\n  const reserveBtn = document.createElement('button');\r\n  const header = document.createElement('div');\r\n  const span = document.createElement('span');\r\n  span.setAttribute('class', 'span-likes');\r\n  span.setAttribute('data-index', movie.id);\r\n  header.classList.add('movie-header');\r\n  const movieName = document.createElement('h3');\r\n  const likeIcon = document.createElement('i');\r\n  likeIcon.classList.add('fa-solid');\r\n  likeIcon.classList.add('like-icon');\r\n  likeIcon.setAttribute('id', movie.id);\r\n  likeIcon.classList.add('fa-heart');\r\n  span.appendChild(likeIcon);\r\n  header.appendChild(movieName);\r\n  header.appendChild(span);\r\n  movieName.textContent = name;\r\n  const img = document.createElement('img');\r\n  commentBtn.setAttribute('class', 'comment-btn');\r\n  reserveBtn.setAttribute('class', 'reserve-btn');\r\n  reserveBtn.addEventListener('click', () => (0,_popup_js__WEBPACK_IMPORTED_MODULE_3__.displayReserve)(movie, closeModal));\r\n  commentBtn.addEventListener('click', () => (0,_popup_js__WEBPACK_IMPORTED_MODULE_3__.commentPopUp)(movie, closeModal, getArrayComments));\r\n  commentBtn.textContent = 'Comments';\r\n  reserveBtn.textContent = 'Reservations';\r\n  btnContainer.setAttribute('class', 'movie-actions');\r\n  img.setAttribute('src', image.medium);\r\n  btnContainer.appendChild(reserveBtn);\r\n  btnContainer.appendChild(commentBtn);\r\n  return [img, header, btnContainer];\r\n};\r\n\r\nconst getAllMovies = async () => {\r\n  const response = await (0,_fetch_js__WEBPACK_IMPORTED_MODULE_2__.apiHandlerMovie)('GET', _API_js__WEBPACK_IMPORTED_MODULE_1__.BASE_URL);\r\n  return response;\r\n};\r\n\r\nconst likeMovie = async (id) => {\r\n  const payload = { item_id: id };\r\n  const response = await (0,_fetch_js__WEBPACK_IMPORTED_MODULE_2__.apiHandlerInv)('POST', _API_js__WEBPACK_IMPORTED_MODULE_1__.INV_URL, payload);\r\n  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.displayAllMovies)()\r\n  return response\r\n};\r\n\r\nconst clearPreviousDOM = () => {\r\n  const list = document.querySelectorAll('.movie-list')\r\n  list.forEach(ls => {\r\n    events.removeChild(ls)\r\n  })\r\n}\r\n\r\n  \r\n\n\n//# sourceURL=webpack://js-capstone-/./src/modules/utils.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;