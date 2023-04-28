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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/ \\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\n\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed, \\nfigure, figcaption, footer, header, hgroup, \\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n\\tmargin: 0;\\n\\tpadding: 0;\\n\\tborder: 0;\\n\\tfont-size: 100%;\\n\\tfont: inherit;\\n\\tvertical-align: baseline;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure, \\nfooter, header, hgroup, menu, nav, section {\\n\\tdisplay: block;\\n}\\nbody {\\n\\tline-height: 1;\\n}\\nol, ul {\\n\\tlist-style: none;\\n}\\nblockquote, q {\\n\\tquotes: none;\\n}\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n\\tcontent: '';\\n\\tcontent: none;\\n}\\ntable {\\n\\tborder-collapse: collapse;\\n\\tborder-spacing: 0;\\n}\\n\\n:root {\\n    --slight-grey: color: rgb(56, 56, 56);\\n    font-family:Lato;\\n}\\n\\n#content{\\n    display:flex;\\n    padding: 10px 10px 10px 10px;\\n}\\n\\n.left-bar{\\n    background-color: #ebebeb;\\n    height: calc(100vh - 60px);\\n    border-radius: 25px;\\n    width: max(15vw, 200px);\\n    padding: 20px 20px 20px 20px;\\n}\\n\\n.menu-title{\\n    font-size: 30px;\\n    display:flex;\\n    justify-content:space-between;\\n    font-weight: bold;\\n    color: var(--slight-grey);\\n    width:100%;\\n    margin-bottom: 20px;\\n}\\n\\n.menu-title div, .menu-title span, .in-menu-title, .add-task, .first, .task-name, .project-title, .deletel{\\n    cursor:pointer;\\n}\\n\\n.menu-title .material-symbols-outlined{\\n    font-size: 40px;\\n    text-align:vertical;\\n}\\n\\n.in-menu-title{\\n    margin-left: 10px;\\n    margin-bottom: 20px;\\n    font-size: 20px;\\n    font-weight: bold;\\n    color: var(--slight-grey);\\n}\\n\\n.projects-list{\\n    font-size: 18px;\\n}\\n\\n.projects-list ul li{\\n    display:flex;\\n    justify-content: space-between;\\n    margin-top: 10px;\\n    padding: 5px 10px 5px 20px;\\n    cursor:pointer;\\n}\\n\\n.projects-list ul li .material-symbols-outlined{\\n    font-size: 20px;\\n    opacity:50%;\\n}\\n\\n.active-project{\\n    background-color:rgb(208, 208, 208);\\n}\\n\\n.add-project-btn{\\n    cursor:pointer;\\n    margin-top: 20px;\\n    font-size: 20px;\\n    font-weight: bold;\\n    display: flex;\\n    justify-content: space-between;\\n    padding: 5px 10px 5px 5px;\\n}\\n\\n.right-bar{\\n    padding:50px 50px 50px 50px;\\n}\\n\\n.project-title{\\n    font-size: 42px;\\n    font-weight:bold;\\n}\\n\\n.project-tasks{\\n    margin-top: 50px;\\n    margin-left:30px;\\n    font-size: 24px;\\n}\\n\\n.add-task, .task{\\n    padding-left: 20px;\\n    display:flex;\\n    align-items:center;\\n    width: 600px;\\n    height: 70px;\\n}\\n\\n.task{\\n    border-bottom: 1px solid rgb(172, 171, 171);\\n}\\n\\n.add-task{\\n    color:grey;\\n    border: 1px solid rgb(172, 171, 171);\\n    border-radius:10px;\\n}\\n\\n.first{\\n    margin-right: 25px;\\n    height: 20px;\\n    width: 20px;\\n}\\n\\n.due-date{\\n    position:relative;\\n    color:rgb(172, 171, 171);\\n    margin-left:auto;\\n    font-size: 20px;\\n}\\n\\n.delete{\\n    opacity:50%;\\n    margin-left: 20px;\\n}\\n\\n.hidden{\\n    display:none;\\n}\\n\\n\\n.project-name-input{\\n    width: 100%;\\n    margin-top: 14px;\\n    height: 22px;\\n    font-size: 20px;\\n}\\n\\n.add-project-btns{\\n    display:flex;\\n    margin-top: 20px;\\n    justify-content:space-evenly;\\n}\\n\\n.add-project-btns button{\\n    color:white;\\n    font-size: 22px;\\n    font-weight:bold;\\n    display:flex;\\n    justify-content:center;\\n    align-items:center;\\n    width: 40%;\\n    height: 32px;\\n    border-radius: 8px;\\n    cursor:pointer;\\n}\\n\\n.add-project-btns button:nth-child(1){\\n    background-color:rgb(1, 124, 1);\\n}\\n\\n.add-project-btns button:nth-child(2){\\n    background-color:rgb(191, 17, 17);\\n}\\n\\n.project-list-titles{\\n    width:100%;\\n}\\n\\n.edit-project-form{\\n    justify-content:center;\\n    align-items:center;\\n}\\n\\n.project-title input{\\n    height:50px;\\n    width: 500px;\\n    font-size: 42px;\\n}\\n\\n.edit-project-form button{\\n    color:white;\\n    font-size: 22px;\\n    font-weight:bold;\\n    display:flex;\\n    justify-content:center;\\n    align-items:center;\\n    margin-left: 10px;\\n    border-radius: 6px;\\n    height:50px;\\n    width: 100px;\\n}\\n\\n.edit-project-form button:nth-child(2){\\n    background-color:rgb(1, 124, 1);\\n}\\n\\n.edit-project-form button:nth-child(3){\\n    background-color:rgb(191, 17, 17);\\n}\\n\\n /* The Modal (background) */\\n .modal {\\n    display: none; /* Hidden by default */\\n    position: fixed; /* Stay in place */\\n    z-index: 1; /* Sit on top */\\n    left: 0;\\n    top: 0;\\n    width: 100%; /* Full width */\\n    height: 100%; /* Full height */\\n    overflow: auto; /* Enable scroll if needed */\\n    background-color: rgb(0,0,0); /* Fallback color */\\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\\n  }\\n  \\n  /* Modal Content/Box */\\n  .modal-content {\\n    background-color: #fefefe;\\n    margin: 8% auto; /* 15% from the top and centered */\\n    padding: 20px;\\n    border: 1px solid #888;\\n    width: min(60%, 800px); /* Could be more or less, depending on screen size */\\n    height: 450px;\\n  }\\n  \\n  /* The Close Button */\\n  .close {\\n    color: #aaa;\\n    float: right;\\n    font-size: 28px;\\n    font-weight: bold;\\n  }\\n  \\n  .close:hover,\\n  .close:focus {\\n    color: black;\\n    text-decoration: none;\\n    cursor: pointer;\\n  } \\n\\n  .modal-form{\\n    display:flex;\\n    flex-direction: column;\\n    align-items: center;\\n  }\\n\\n  .modal-form input {\\n    font-size: 22px;\\n\\tbackground: white;\\n\\tborder: 0 none;\\n\\tborder-radius: 3px;\\n\\tbox-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);\\n\\tpadding: 20px 30px;\\n\\tbox-sizing: border-box;\\n\\twidth: 80%;\\n\\tmargin-bottom: 20px;\\n}\\n\\n#addTaskDescription{\\n    height: 100px;\\n}\\n\\n.add-task-headline{\\n    margin-left: 20px;\\n    margin-bottom: 50px;\\n}\\n\\n.add-task-btns{\\n    display:flex;\\n    justify-content:space-evenly;\\n}\\n\\n.add-task-btns button{\\n    color:white;\\n    font-size: 22px;\\n    font-weight:bold;\\n    display:flex;\\n    justify-content:center;\\n    align-items:center;\\n    width: 200px;\\n    height: 32px;\\n    border-radius: 8px;\\n    cursor:pointer;\\n}\\n\\n.add-task-btns button:nth-child(1){\\n    background-color:rgb(1, 124, 1);\\n}\\n\\n.add-task-btns button:nth-child(2){\\n    background-color:rgb(191, 17, 17);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/clickables.js":
/*!***************************!*\
  !*** ./src/clickables.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addListenersForActiveProject\": () => (/* binding */ addListenersForActiveProject),\n/* harmony export */   \"giveDeleteProjectBtnsFunctionality\": () => (/* binding */ giveDeleteProjectBtnsFunctionality),\n/* harmony export */   \"makeActiveProject\": () => (/* binding */ makeActiveProject),\n/* harmony export */   \"makeProjectTitleEditable\": () => (/* binding */ makeProjectTitleEditable),\n/* harmony export */   \"toggleAddProjectClickableEvent\": () => (/* binding */ toggleAddProjectClickableEvent)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _loaders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loaders */ \"./src/loaders.js\");\n\n\n\n\n\nlet currActive = 0;\n\nfunction removeActiveProjectIndicator(){\n    let unorderedList = document.querySelector(\".projects-list\").children[0];\n    for(let i = 0; i < unorderedList.children.length; i++){\n        unorderedList.children[i].classList.remove(\"active-project\");\n    }\n}\n\n\nfunction giveDeleteProjectBtnsFunctionality(){\n    let btns = document.querySelectorAll(\".delete-project-btn\");\n    for(let i = 0; i < btns.length; i++){\n        let projects = (0,_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)();\n        btns[i].onclick = function(){\n            projects.splice(i+1, 1);\n            (0,_project__WEBPACK_IMPORTED_MODULE_1__.setProjects)(projects);\n            if(currActive == i+1){\n                (0,_loaders__WEBPACK_IMPORTED_MODULE_2__.loadProjects)((0,_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)(), i);\n            }\n            else{\n                (0,_loaders__WEBPACK_IMPORTED_MODULE_2__.loadProjects)((0,_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)(), currActive);\n            }\n        }\n    }\n}\n\nfunction addListenersForActiveProject(){\n    let projects = (0,_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)();\n    let items = document.querySelectorAll(\".project-list-titles\")\n        for(let i = 0; i < projects.length; i++){\n        let thisItem = items[i];\n        thisItem.onclick = function(){\n            removeActiveProjectIndicator();\n            makeActiveProject(i);\n        }\n    }\n}\n\nfunction makeActiveProject(index){\n    let unorderedList = document.querySelector(\".projects-list\").children[0];\n    unorderedList.children[index].classList.add(\"active-project\");\n    (0,_loaders__WEBPACK_IMPORTED_MODULE_2__.loadProject)(index);\n    currActive = index;\n}\n\nfunction toggleAddProjectClickableEvent(){\n    let addProjectBtns = document.querySelector(\".add-project-btns\");\n    let addProjectBtn = document.querySelector(\".add-project-btn\");\n    let addProjectForm = document.querySelector(\".add-project-form\");\n    addProjectBtn.onclick = function(){\n        addProjectForm.children[0].value = \"\";\n        addProjectForm.classList.toggle(\"hidden\");\n    }\n    let cancelBtn = addProjectBtns.children[1];\n    cancelBtn.onclick = function(){\n        addProjectForm.children[0].value = \"\";\n        addProjectForm.classList.toggle(\"hidden\");\n    }\n    let acceptBtn = addProjectBtns.children[0];\n    acceptBtn.onclick = function(){\n        let projects = (0,_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)();\n        let name = addProjectForm.children[0].value;\n        for(let i = 0; i < projects.length; i++){\n            let project = projects[i];\n            if(project.name == name || !name){\n                alert(\"Name is empty or already taken!\");\n                return;\n            }\n        }\n        addProjectForm.children[0].value = \"\";\n        projects.push(new _project__WEBPACK_IMPORTED_MODULE_1__.Project(name));\n        (0,_project__WEBPACK_IMPORTED_MODULE_1__.setProjects)(projects);\n        (0,_loaders__WEBPACK_IMPORTED_MODULE_2__.loadProjects)(projects, projects.length - 1);\n    }\n}\n\n\nfunction makeProjectTitleEditable(){\n    let titleBar = document.querySelector('.project-title');\n    let projectTitleForm = document.querySelector(\".edit-project-form\");\n    titleBar.onclick = function(){\n        let id = titleBar.dataset.id;\n        let oldText = (0,_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)()[id].name;\n        titleBar.classList.add(\"hidden\");\n        projectTitleForm.children[0].value = oldText;\n        projectTitleForm.style.display = \"flex\";\n        let cancelBtn = projectTitleForm.children[2];\n        let editBtn = projectTitleForm.children[1];\n        cancelBtn.onclick = () =>{\n            makeActiveProject(id);\n        }\n        editBtn.onclick = () => {\n            let flag = 1;\n            let val = projectTitleForm.children[0].value;\n            if(!val){\n                alert(\"Empty value!\");\n                flag = 0;\n            }\n            else{\n                for(let project of (0,_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)()){\n                    if(val == project.name){\n                        alert(\"Project of this name already exists!\");\n                        flag = 0;\n                    }\n                }\n            }\n            if(flag == 1){\n                let projects = (0,_project__WEBPACK_IMPORTED_MODULE_1__.getProjects)();\n                projects[id].name = val;\n                (0,_project__WEBPACK_IMPORTED_MODULE_1__.setProjects)(projects);\n                (0,_loaders__WEBPACK_IMPORTED_MODULE_2__.loadProjects)(projects, id);\n            }\n        }\n    }\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/clickables.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _loaders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loaders */ \"./src/loaders.js\");\n\n\n\n\n\n\nlet projects = (0,_project__WEBPACK_IMPORTED_MODULE_0__.getProjects)();\n\n(0,_loaders__WEBPACK_IMPORTED_MODULE_3__.loadProjects)(projects, 0);\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/loaders.js":
/*!************************!*\
  !*** ./src/loaders.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadProject\": () => (/* binding */ loadProject),\n/* harmony export */   \"loadProjects\": () => (/* binding */ loadProjects),\n/* harmony export */   \"loadTasks\": () => (/* binding */ loadTasks)\n/* harmony export */ });\n/* harmony import */ var _clickables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickables */ \"./src/clickables.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\n\nfunction loadProjects(projects, index){\n    let unorderedList = document.querySelector(\".projects\");\n    unorderedList.innerHTML = \"\";\n    for(let i = 0; i < projects.length; i++){\n        let listItem = document.createElement(\"li\");\n        listItem.dataset.id = i;\n        let div = document.createElement(\"div\");\n        div.classList.add(\"project-list-titles\");\n        div.textContent = projects[i].name;\n        listItem.append(div);\n        if(i != 0){\n            let span = document.createElement(\"span\");\n            span.classList.add(\"material-symbols-outlined\", \"delete-project-btn\");\n            span.textContent = \"delete\";\n            span.dataset.id = i;\n            listItem.append(span);\n        }\n        unorderedList.appendChild(listItem);\n    }\n    (0,_clickables__WEBPACK_IMPORTED_MODULE_0__.makeActiveProject)(index);\n    (0,_clickables__WEBPACK_IMPORTED_MODULE_0__.addListenersForActiveProject)();\n    (0,_clickables__WEBPACK_IMPORTED_MODULE_0__.giveDeleteProjectBtnsFunctionality)();\n    (0,_clickables__WEBPACK_IMPORTED_MODULE_0__.toggleAddProjectClickableEvent)();\n    (0,_clickables__WEBPACK_IMPORTED_MODULE_0__.makeProjectTitleEditable)();\n    \n}\n\nfunction loadProject(index){\n    let projects = (0,_project__WEBPACK_IMPORTED_MODULE_2__.getProjects)();\n    let titleBar = document.querySelector('.project-title');\n    titleBar.classList.remove(\"hidden\");\n    let projectTitleForm = document.querySelector(\".edit-project-form\");\n    projectTitleForm.style.display = \"none\";\n    projectTitleForm.classList.add(\"hidden\");\n    titleBar.dataset.id = index;\n    titleBar.textContent = projects[index].name;\n    loadTasks(index);\n}\n\nfunction loadTasks(index){\n    let addTaskBtn = document.querySelector(\".add-task\");\n    var span = document.getElementsByClassName(\"close\")[0];\n    var modal = document.getElementById(\"myModal\");\n    window.onclick = function(event) {\n        if (event.target == modal) {\n          modal.style.display = \"none\";\n        }\n      }\n      span.onclick = function() {\n        modal.style.display = \"none\";\n      }\n    addTaskBtn.onclick = function(){\n        modal.style.display = \"block\";\n    }\n    let thisProject = (0,_project__WEBPACK_IMPORTED_MODULE_2__.getProjects)()[index];\n    let toDos = thisProject.todos;;\n    let unorderedList = document.querySelector('.task-list');\n    unorderedList.innerHTML = \"\";\n    for(let i = 0; i < toDos.length; i++){\n        let curr = toDos[i];\n        let listItem = document.createElement(\"li\");\n        listItem.dataset.id = i;\n        listItem.classList.add(\"task\");\n        let checkbox = document.createElement(\"input\");\n        checkbox.type = \"checkbox\";\n        checkbox.classList.add(\"first\");\n        let taskName = document.createElement(\"div\");\n        taskName.classList.add(\"task-name\");\n        taskName.textContent = curr.name;\n        let dueDate = document.createElement(\"div\");\n        dueDate.classList.add(\"due-date\");\n        dueDate.textContent = curr.dueDate;\n        let span = document.createElement(\"span\");\n        span.classList.add(\"material-symbols-outlined\" , \"delete\");\n        span.textContent = \"delete\";\n        listItem.append(checkbox, taskName, dueDate, span);\n        unorderedList.append(listItem);\n    }\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/loaders.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"getProjects\": () => (/* binding */ getProjects),\n/* harmony export */   \"setProjects\": () => (/* binding */ setProjects)\n/* harmony export */ });\nfunction Project(name){\n    this.name = name;\n    this.todos = [];\n    this.addToDo = (todo) => {\n        this.todos.push(todo);\n    }\n}\n\nfunction getProjects(){\n    return JSON.parse(localStorage.getItem('projects'));\n}\n\nfunction setProjects(projects){\n    localStorage.setItem('projects', JSON.stringify(projects));\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/project.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToDo\": () => (/* binding */ ToDo)\n/* harmony export */ });\nfunction ToDo(name, dueDate, description){\n    this.name = name;\n    this.dueDate = dueDate;\n    this.description = description;\n}\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/todo.js?");

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