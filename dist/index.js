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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Poppins:wght@400;500;600&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nbody {\\n  font-family: 'Lato', sans-serif;\\n  font-style: normal;\\n  box-sizing: border-box;\\n  font-weight: 600;\\n  font-size: 1.2rem;\\n}\\n\\nfooter {\\n  border: 4px solid black;\\n  padding: 20px 20px;\\n  bottom: 0;\\n}\\n\\nfooter h3 {\\n  font-weight: normal;\\n}\\n\\nnav {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 1em 3rem;\\n}\\n\\nnav div.nav-logo {\\n  border: 1px solid #000;\\n  padding: 1rem;\\n  border-radius: 50%;\\n}\\n\\nul.nav-links {\\n  display: flex;\\n}\\n\\n.overlay-content li {\\n  list-style-type: none;\\n}\\n\\nul.nav-links li {\\n  list-style: none;\\n  margin-left: 2rem;\\n}\\n\\nul.nav-links li a {\\n  color: #000;\\n  text-decoration: none;\\n}\\n\\nul.nav-links a.active {\\n  text-decoration: underline;\\n  font-weight: 600;\\n}\\n\\n#events {\\n  display: grid;\\n  grid-template-columns: 6fr 6fr;\\n  grid-column-gap: 5%;\\n  grid-row-gap: 20px;\\n  justify-items: stretch;\\n  align-items: stretch;\\n  padding: 0 20px;\\n}\\n\\n#events .movie-list {\\n  list-style: none;\\n  margin: 20px 0;\\n}\\n\\n.movie-actions {\\n  display: flex;\\n  justify-content: space-between;\\n  margin-top: 5px;\\n}\\n\\n.movie-actions button {\\n  background: #fff;\\n}\\n\\n.overlay {\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n  top: 0;\\n  right: 0;\\n  height: 100%;\\n  width: 100%;\\n  background: black;\\n  opacity: 0.9;\\n  transition: opacity 200ms;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  z-index: 10;\\n}\\n\\n.overlay div.overlay-image {\\n  max-width: 25%;\\n}\\n\\n.overlay img {\\n  width: 100%;\\n}\\n\\n.overlay-content {\\n  background: #fff;\\n  width: 80%;\\n  height: 95%;\\n  padding: 0.5rem 2rem;\\n  box-sizing: border-box;\\n}\\n\\n.overlay-content form {\\n  display: flex;\\n  flex-direction: column;\\n  text-align: center;\\n  margin-top: 1rem;\\n  justify-content: center;\\n}\\n\\n.overlay-content form input {\\n  margin: 0 auto;\\n  margin-bottom: 1em;\\n  padding: 10px;\\n  width: 60%;\\n}\\n\\n.overlay-content form button {\\n  width: 100px;\\n  margin: 0 auto;\\n}\\n\\n.overlay-content .flex {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.overlay-content div:nth-child(2) {\\n  margin-left: 20px;\\n}\\n\\n.overlay h2 {\\n  margin-bottom: 5rem;\\n}\\n\\n.overlay h3,\\n.overlay h5 {\\n  margin-bottom: 10px;\\n}\\n\\n.close-container {\\n  display: flex;\\n  justify-content: end;\\n}\\n\\n.close-container span {\\n  cursor: pointer;\\n  font-weight: 800;\\n  font-size: 1.5rem;\\n}\\n\\n.movie-header {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin: 1rem 0;\\n}\\n\\n.movie-header i {\\n  cursor: pointer;\\n  color: red;\\n}\\n\\n.movie-header h3 {\\n  font-size: 22px;\\n}\\n\\n.comment {\\n  font-weight: 400;\\n}\\n\\n.span-likes {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n@media only screen and (min-width: 577px) {\\n  #events {\\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\\n    padding: 0 100px;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://js-capstone-/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/utils.js */ \"./src/modules/utils.js\");\n/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/display.js */ \"./src/modules/display.js\");\n/* harmony import */ var _modules_API_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/API.js */ \"./src/modules/API.js\");\n\n\n\n\n\nconst displayAllMovies = async () => {\n  const movies = await (0,_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__.getAllMovies)();\n  const likesArray = await (0,_modules_API_js__WEBPACK_IMPORTED_MODULE_3__.getAllLikes)();\n  (0,_modules_display_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(movies);\n  (0,_modules_display_js__WEBPACK_IMPORTED_MODULE_2__.displayLikes)(likesArray);\n  const icons = document.querySelectorAll('.like-icon');\n  icons.forEach((icon) => {\n    const itemId = icon.getAttribute('id');\n    icon.addEventListener('click', () => (0,_modules_utils_js__WEBPACK_IMPORTED_MODULE_1__.likeMovie)(itemId));\n  });\n};\n\ndisplayAllMovies();\n\n//# sourceURL=webpack://js-capstone-/./src/index.js?");

/***/ }),

/***/ "./src/modules/API.js":
/*!****************************!*\
  !*** ./src/modules/API.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BASE_URL\": () => (/* binding */ BASE_URL),\n/* harmony export */   \"INV_URL\": () => (/* binding */ INV_URL),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getAllComments\": () => (/* binding */ getAllComments),\n/* harmony export */   \"getAllLikes\": () => (/* binding */ getAllLikes),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment)\n/* harmony export */ });\nconst BASE_URL = 'https://api.tvmaze.com/search/shows?q=girls';\nconst INV_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HhwngfSk0BVbaLtkUNy0';\n\nconst getAllComments = async (id) => {\n  const response = await fetch(`${INV_URL}/comments?item_id=${id}`, {\n    method: 'GET',\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  });\n  const data = await response.json();\n  return data;\n};\nconst postComment = async (id, name, comment) => {\n  const response = await fetch(`${INV_URL}/comments`, {\n    method: 'POST',\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n    body: JSON.stringify({\n      item_id: id,\n      username: name,\n      comment,\n    }),\n  });\n  const data = await response.json();\n  return data;\n};\n\nconst getAllLikes = async () => {\n  const response = await fetch(`${INV_URL}/likes`, {\n    method: 'GET',\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  });\n  const data = await response.json();\n  return data;\n};\n\nconst getData = async () => {\n  const response = await fetch('GET', BASE_URL);\n  const data = await response.json();\n  return data;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://js-capstone-/./src/modules/API.js?");

/***/ }),

/***/ "./src/modules/counter.js":
/*!********************************!*\
  !*** ./src/modules/counter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentsCounter = () => {\n  const comments = document.querySelectorAll('.comment');\n  return comments.length;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsCounter);\n\n//# sourceURL=webpack://js-capstone-/./src/modules/counter.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"displayLikes\": () => (/* binding */ displayLikes)\n/* harmony export */ });\n/* harmony import */ var _selectors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors.js */ \"./src/modules/selectors.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./src/modules/utils.js\");\n/* harmony import */ var _movieCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movieCounter.js */ \"./src/modules/movieCounter.js\");\n\n\n\n\nconst displayMovies = (movies) => {\n  movies.forEach((movie) => {\n    const { image, name } = movie.show;\n    const list = document.createElement('li');\n    list.setAttribute('class', 'movie-list');\n    const arrayElements = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.createMovieElements)(image, name, movie.show);\n    arrayElements.forEach((elem) => {\n      list.appendChild(elem);\n    });\n    _selectors_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appendChild(list);\n  });\n  //\n  const numberOfMovies = (0,_movieCounter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  const movieHolderCount = document.querySelector('#movie_count');\n  movieHolderCount.innerHTML = `Number of movies  (${numberOfMovies})`;\n};\nconst displayLikes = (array) => {\n  const movieElements = document.querySelectorAll('.span-likes');\n  movieElements.forEach((element) => {\n    const index = element.getAttribute('data-index');\n    const ind = array.find((arr) => arr.item_id === index);\n    const par = document.createElement('p');\n    par.textContent = `${ind ? ind.likes : '0'} likes`;\n    element.appendChild(par);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMovies);\n\n\n//# sourceURL=webpack://js-capstone-/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/fetch.js":
/*!******************************!*\
  !*** ./src/modules/fetch.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apiHandlerInv\": () => (/* binding */ apiHandlerInv),\n/* harmony export */   \"apiHandlerMovie\": () => (/* binding */ apiHandlerMovie),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst apiHandlerMovie = (method, url) => fetch(url)\n  .then((response) => response.json())\n  .then((json) => json);\n\nconst apiHandlerInv = (method, url, payload) => {\n  if (payload) {\n    return fetch(`${url}/likes`, {\n      method,\n      body: JSON.stringify(payload),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    })\n      .then((response) => response.json())\n      .then((json) => json);\n  }\n  return fetch(`${url}`, {\n    method,\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  })\n    .then((response) => response.json())\n    .then((json) => json);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiHandlerMovie);\n\n//# sourceURL=webpack://js-capstone-/./src/modules/fetch.js?");

/***/ }),

/***/ "./src/modules/movieCounter.js":
/*!*************************************!*\
  !*** ./src/modules/movieCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst movieCounter = () => {\n  const movies = document.querySelectorAll('.movie-list');\n  return movies.length;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (movieCounter);\n\n//# sourceURL=webpack://js-capstone-/./src/modules/movieCounter.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commentPopUp\": () => (/* binding */ commentPopUp),\n/* harmony export */   \"displayReserve\": () => (/* binding */ displayReserve)\n/* harmony export */ });\n/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counter.js */ \"./src/modules/counter.js\");\n/* harmony import */ var _API_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./API.js */ \"./src/modules/API.js\");\n\n\n\nconst displayReserve = (data, closeModal) => {\n  const overlay = document.createElement('div');\n  const body = document.querySelector('body');\n  overlay.classList.add('overlay');\n  overlay.innerHTML = ` <div class=\"overlay-content\">\n                          <div class=\"close-container\"><span class=\"close-modal\"><i class=\"fa-sharp fa-solid fa-xmark\"></i><span></div>\n                          <div class=\"flex\">\n                            <div class=\"overlay-image\">\n                              <img src=${data.image.original} alt=\"\">\n                            </div>\n                            <div>\n                              <h2>${data.name}</h2>\n                              <p></p>\n                              <h5>Reservations</h5>\n                              <ul>\n                                <li>2023-02-09 --2023-02-14 by daniel</li>\n                                <li>2023-02-10 --2023-02-25 by david</li>\n                              </ul>\n                            </div>\n                          </div>\n                          <form action=\"#\">\n                            <h3>Add a reservation</h3>\n                            <input class=\"form_item\" id=\"name\" type=\"text\" name=\"name\" placeholder=\"Yeremias\" maxlength=\"30\" required>\n                            <input class=\"form_item\" id=\"start-date\" type=\"email\" name=\"start-date\" placeholder=\"natajayanj14@gmail.com\" required>\n                            <input class=\"form_item\" id=\"end-date\" type=\"email\" name=\"end-date\" placeholder=\"natajayanj14@gmail.com\" required>\n                            <div id=\"error-message\"></div>\n                            <button type=\"submit\" class=\"form_button\" >Reserve</button>\n                          </form>\n                        </div>`;\n  body.appendChild(overlay);\n  const closeBtn = document.querySelector('.close-modal');\n  closeBtn.addEventListener('click', closeModal);\n};\n\nconst commentPopUp = async (data, closeModal, getArrayComments) => {\n  const comments = await getArrayComments(data.id);\n  const commentsList = [];\n  comments.forEach((com) => {\n    commentsList.push(`<li class=\"comment\">${com}</li>`);\n  });\n  const overlay = document.createElement('div');\n  const body = document.querySelector('body');\n  overlay.classList.add('overlay');\n  overlay.innerHTML = ` <div class=\"overlay-content\">\n                          <div class=\"close-container\"><span class=\"close-modal\"><i class=\"fa-sharp fa-solid fa-xmark\"></i><span></div>\n                          <div class=\"flex\">\n                            <div class=\"overlay-image\">\n                              <img src=${data.image.original} alt=\"\">\n                            </div>\n                            <div>\n                              <h2>${data.name}</h2>\n                              <p></p>\n                              <h3></h3>\n                              <ul class=\"comments-list\">\n                                ${commentsList.join('')}\n                              </ul>\n                            </div>\n                          </div>\n                          <form action=\"#\">\n                            <h3>Write your comment here </h3>\n                            <input class=\"form_item\" id=\"name\" type=\"text\" name=\"name\" placeholder=\"your name\" maxlength=\"30\" required>\n                            <input class=\"form_item\" id=\"start-date\" type=\"text\" name=\"start-date\" placeholder=\"your insights\" required>\n                            <div id=\"error-message\"></div>\n                            <button type=\"submit\" class=\"form_button\" >Comment</button>\n                          </form>\n                        </div>`;\n  body.appendChild(overlay);\n  const commentForm = overlay.querySelector('form');\n  commentForm.addEventListener('submit', async (event) => {\n    event.preventDefault();\n    const name = commentForm.querySelector('#name').value;\n    const comment = commentForm.querySelector('#start-date').value;\n    const itemId = data.id;\n    try {\n      await (0,_API_js__WEBPACK_IMPORTED_MODULE_1__.postComment)(itemId, name, comment);\n      const comments = await getArrayComments(itemId);\n      const commentsList = comments.map((com) => `<li class=\"comment\">${com}</li>`);\n      const numberOfComments = (0,_counter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n      const commentHeader = overlay.querySelector('h3');\n      commentHeader.innerHTML = `Comments (${numberOfComments})`;\n      const commentsListElement = overlay.querySelector('.comments-list');\n      commentsListElement.innerHTML = commentsList.join('');\n    } catch (error) {\n      throw new Error(error.message);\n    }\n  });\n\n  const numberOfComments = (0,_counter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const commentHeader = overlay.querySelector('h3');\n  commentHeader.innerHTML = `Comments (${numberOfComments})`;\n  const closeBtn = document.querySelector('.close-modal');\n  closeBtn.addEventListener('click', closeModal);\n};\n\n//# sourceURL=webpack://js-capstone-/./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/selectors.js":
/*!**********************************!*\
  !*** ./src/modules/selectors.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst events = document.querySelector('#events');\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events);\n\n\n//# sourceURL=webpack://js-capstone-/./src/modules/selectors.js?");

/***/ }),

/***/ "./src/modules/utils.js":
/*!******************************!*\
  !*** ./src/modules/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMovieElements\": () => (/* binding */ createMovieElements),\n/* harmony export */   \"getAllMovies\": () => (/* binding */ getAllMovies),\n/* harmony export */   \"likeMovie\": () => (/* binding */ likeMovie)\n/* harmony export */ });\n/* harmony import */ var _API_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API.js */ \"./src/modules/API.js\");\n/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch.js */ \"./src/modules/fetch.js\");\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup.js */ \"./src/modules/popup.js\");\n\n\n\n\nconst closeModal = () => {\n  const overlay = document.querySelector('.overlay');\n  const body = document.querySelector('body');\n  body.removeChild(overlay);\n};\n\nconst getArrayComments = async (id) => {\n  const commentsArray = [];\n  const comments = await (0,_API_js__WEBPACK_IMPORTED_MODULE_0__.getAllComments)(id);\n  if (comments) {\n    comments.forEach((com) => {\n      const { comment, username } = com;\n      const createdDate = com.creation_date;\n      const li = document.createElement('li');\n      li.innerHTML = `${createdDate} ${comment} by ${username}`;\n      commentsArray.push(li.innerHTML);\n    });\n  }\n  return commentsArray;\n};\n\nconst createMovieElements = (image, name, movie) => {\n  const btnContainer = document.createElement('div');\n  const commentBtn = document.createElement('button');\n  const reserveBtn = document.createElement('button');\n  const header = document.createElement('div');\n  const span = document.createElement('span');\n  span.setAttribute('class', 'span-likes');\n  span.setAttribute('data-index', movie.id);\n  header.classList.add('movie-header');\n  const movieName = document.createElement('h3');\n  const likeIcon = document.createElement('i');\n  likeIcon.classList.add('fa-solid');\n  likeIcon.classList.add('like-icon');\n  likeIcon.setAttribute('id', movie.id);\n  likeIcon.classList.add('fa-heart');\n  span.appendChild(likeIcon);\n  header.appendChild(movieName);\n  header.appendChild(span);\n  movieName.textContent = name;\n  const img = document.createElement('img');\n  commentBtn.setAttribute('class', 'comment-btn');\n  reserveBtn.setAttribute('class', 'reserve-btn');\n  reserveBtn.addEventListener('click', () => (0,_popup_js__WEBPACK_IMPORTED_MODULE_2__.displayReserve)(movie, closeModal));\n  commentBtn.addEventListener('click', () => (0,_popup_js__WEBPACK_IMPORTED_MODULE_2__.commentPopUp)(movie, closeModal, getArrayComments));\n  commentBtn.textContent = 'Comments';\n  reserveBtn.textContent = 'Reservations';\n  btnContainer.setAttribute('class', 'movie-actions');\n  img.setAttribute('src', image.medium);\n  btnContainer.appendChild(reserveBtn);\n  btnContainer.appendChild(commentBtn);\n  return [img, header, btnContainer];\n};\n\nconst getAllMovies = async () => {\n  const response = await (0,_fetch_js__WEBPACK_IMPORTED_MODULE_1__.apiHandlerMovie)('GET', _API_js__WEBPACK_IMPORTED_MODULE_0__.BASE_URL);\n  return response;\n};\n\nconst likeMovie = async (id) => {\n  const payload = { item_id: id };\n  const response = await (0,_fetch_js__WEBPACK_IMPORTED_MODULE_1__.apiHandlerInv)('POST', _API_js__WEBPACK_IMPORTED_MODULE_0__.INV_URL, payload);\n};\n\n\n//# sourceURL=webpack://js-capstone-/./src/modules/utils.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;