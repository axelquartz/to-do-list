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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    background-color: #e5e5e5;\n}\n.initial-container>h2{\n    display: none;\n}\n.display-prompt{\n    display: flex;\n    justify-content: center;\n\n}\n.button-prompt{\n    display: grid;\n    margin: 50px auto;\n    border: solid 2px black;\n    height: 40px;\n    padding: 10px;\n    width: 200px;\n\n}\n.main-container{\n    margin: 10px 100px;\n}\n.task-prompt{\n    display: none;\n    background-color: rgb(255, 255, 255);\n    border-radius: 10px;\n    padding: 10px;\n    margin: 0px 100px;\n    text-align: center;\n    justify-content: center;\n}\ninput{\n    margin: 0px 0;\n    border: solid 2px;\n    width: 250px;\n    height: 20px;\n\n}\ntextarea{\n    border: solid 2px;\n\n}\nlabel{\n    margin: 0px 0;\n}\n#entry{\n    margin: 20px 0;\n    display: grid;\n    margin: 50px auto;\n    border: solid 2px black;\n    background-color: rgb(0, 0, 0);\n    color: white;\n    height: 40px;\n    width: 200px;\n    padding: 10px;\n}\nh1{\n    font-family:'helvetica';\n    font-size: larger;\n    text-align: center;\n}\nh2{\n    font-family:'helvetica';\n    font-size: medium;\n    text-align: center;\n}\np{\n    font-family:'helvetica';\n    font-size: medium;\n}\n.new-task{\n    /* display: none; */\n    display: grid;\n    justify-content: space-around;\n    grid-template-columns: 80px auto auto auto 80px;\n    grid-template-areas: 'checkbox title title duedate expand-new'\n                        'description description description description .'\n                        'description description description description switch-group';\n    padding: 10px;\n    gap: 10px;\n    background-color: rgb(255, 255, 255);\n    border-radius: 10px;\n    padding: 10px;\n    margin: 5px 0;\n    border-radius: 5px;\n    text-align: center;\n    border-bottom: solid 8px #bfbfbf;\n}\n.new-task-shrinked{\n    display: grid;\n    justify-content: space-around;\n    grid-template-columns: 80px auto auto auto 80px;\n    grid-template-areas: 'checkbox title title duedate expand-new';\n    padding: 10px;\n    gap: 10px;\n    background-color: rgb(255, 255, 255);\n    border-radius: 10px;\n    padding: 10px;\n    margin: 5px 0;\n    border-radius: 5px;\n    text-align: center;\n    border-bottom: solid 4px #bfbfbf;\n}\n.new-title{\n    grid-area: title;\n    text-align: left;\n}\n.new-description{\n    grid-area: description;\n    text-align: center;\n    margin: auto;\n}\n.new-due-date{\n    grid-area: duedate;\n}\n.check-box{\n    grid-area: checkbox;\n    border: solid 2px black;\n    font: inherit;\n    width: 1.20em;\n    height: 1.20em;\n\n    margin: auto;\n}\n\n.unchecked-task{\n    background-color: gray;\n}\n.important-task{\n    /* display: block; */\n    display: grid;\n    justify-content: space-around;\n    grid-template-columns: 80px auto auto auto 80px;\n    grid-template-areas: 'checkbox title title duedate expand-important'\n                        'description description description description .'\n                        'description description description description switch-group';\n    padding: 10px;\n    gap: 10px;\n    background-color: rgb(255, 255, 255);\n    border-radius: 10px;\n    padding: 10px;\n    margin: 5px 0;\n    border-radius: 5px;\n    text-align: center;\n    border-bottom: solid 8px #7df552;\n}\n.important-task-shrinked{\n    /* display: block; */\n    display: grid;\n    justify-content: space-around;\n    grid-template-columns: 80px auto auto auto 80px;\n    grid-template-areas: 'checkbox title title duedate expand-important';\n    padding: 10px;\n    gap: 10px;\n    background-color: rgb(255, 255, 255);\n    border-radius: 10px;\n    margin: 5px 0;\n    text-align: center;\n    border-radius: 5px;\n    border-bottom: solid 8px #3e830a;\n}\n.removed-task{\n    display: none;\n}\n.visible-element{\n    display: block;\n}\n.removed-element{\n    display: none;\n}\n.checked-task{\n    display: grid;\n    justify-content: space-around;\n    grid-template-columns: 80px auto auto;\n    grid-template-areas: 'checkbox title title duedate expand-important'\n                        'description description description description .'\n                        'description description description description switch-group';\n    padding: 10px;\n    gap: 10px;\n    background-color: rgb(111, 111, 111);\n    border-radius: 10px;\n    padding: 10px;\n    margin: 5px 0;\n    border-radius: 5px;\n    text-align: center;\n    border-bottom: solid 8px #bfbfbf;\n}\n.important-container>h2{\n    display: none;\n    color: #3e830a;\n}\n.expand-new{\n    padding: 20px;\n    background-color: rgb(48, 48, 48);\n    grid-area: expand-new;\n}\n.expand-important{\n    padding: 20px;\n    background-color: rgb(139, 255, 51);\n    grid-area: expand-important;\n}\n#switch-group{\n    justify-self: end;\n    font-weight: bold;\n    border: solid 2px black;\n    grid-area: switch-group;\n    height: 30px;\n    width: 200px;\n    margin: auto 0 auto auto;\n}\n/* Task elements values */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;AAC7B;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,uBAAuB;;AAE3B;AACA;IACI,aAAa;IACb,iBAAiB;IACjB,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,YAAY;;AAEhB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,oCAAoC;IACpC,mBAAmB;IACnB,aAAa;IACb,iBAAiB;IACjB,kBAAkB;IAClB,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,iBAAiB;IACjB,YAAY;IACZ,YAAY;;AAEhB;AACA;IACI,iBAAiB;;AAErB;AACA;IACI,aAAa;AACjB;AACA;IACI,cAAc;IACd,aAAa;IACb,iBAAiB;IACjB,uBAAuB;IACvB,8BAA8B;IAC9B,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,aAAa;AACjB;AACA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,uBAAuB;IACvB,iBAAiB;AACrB;AACA;IACI,mBAAmB;IACnB,aAAa;IACb,6BAA6B;IAC7B,+CAA+C;IAC/C;;sFAEkF;IAClF,aAAa;IACb,SAAS;IACT,oCAAoC;IACpC,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,gCAAgC;AACpC;AACA;IACI,aAAa;IACb,6BAA6B;IAC7B,+CAA+C;IAC/C,8DAA8D;IAC9D,aAAa;IACb,SAAS;IACT,oCAAoC;IACpC,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,gCAAgC;AACpC;AACA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;AACA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;AAChB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,aAAa;IACb,cAAc;;IAEd,YAAY;AAChB;;AAEA;IACI,sBAAsB;AAC1B;AACA;IACI,oBAAoB;IACpB,aAAa;IACb,6BAA6B;IAC7B,+CAA+C;IAC/C;;sFAEkF;IAClF,aAAa;IACb,SAAS;IACT,oCAAoC;IACpC,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,gCAAgC;AACpC;AACA;IACI,oBAAoB;IACpB,aAAa;IACb,6BAA6B;IAC7B,+CAA+C;IAC/C,oEAAoE;IACpE,aAAa;IACb,SAAS;IACT,oCAAoC;IACpC,mBAAmB;IACnB,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,gCAAgC;AACpC;AACA;IACI,aAAa;AACjB;AACA;IACI,cAAc;AAClB;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,6BAA6B;IAC7B,qCAAqC;IACrC;;sFAEkF;IAClF,aAAa;IACb,SAAS;IACT,oCAAoC;IACpC,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,gCAAgC;AACpC;AACA;IACI,aAAa;IACb,cAAc;AAClB;AACA;IACI,aAAa;IACb,iCAAiC;IACjC,qBAAqB;AACzB;AACA;IACI,aAAa;IACb,mCAAmC;IACnC,2BAA2B;AAC/B;AACA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,uBAAuB;IACvB,uBAAuB;IACvB,YAAY;IACZ,YAAY;IACZ,wBAAwB;AAC5B;AACA,yBAAyB","sourcesContent":[":root{\n    background-color: #e5e5e5;\n}\n.initial-container>h2{\n    display: none;\n}\n.display-prompt{\n    display: flex;\n    justify-content: center;\n\n}\n.button-prompt{\n    display: grid;\n    margin: 50px auto;\n    border: solid 2px black;\n    height: 40px;\n    padding: 10px;\n    width: 200px;\n\n}\n.main-container{\n    margin: 10px 100px;\n}\n.task-prompt{\n    display: none;\n    background-color: rgb(255, 255, 255);\n    border-radius: 10px;\n    padding: 10px;\n    margin: 0px 100px;\n    text-align: center;\n    justify-content: center;\n}\ninput{\n    margin: 0px 0;\n    border: solid 2px;\n    width: 250px;\n    height: 20px;\n\n}\ntextarea{\n    border: solid 2px;\n\n}\nlabel{\n    margin: 0px 0;\n}\n#entry{\n    margin: 20px 0;\n    display: grid;\n    margin: 50px auto;\n    border: solid 2px black;\n    background-color: rgb(0, 0, 0);\n    color: white;\n    height: 40px;\n    width: 200px;\n    padding: 10px;\n}\nh1{\n    font-family:'helvetica';\n    font-size: larger;\n    text-align: center;\n}\nh2{\n    font-family:'helvetica';\n    font-size: medium;\n    text-align: center;\n}\np{\n    font-family:'helvetica';\n    font-size: medium;\n}\n.new-task{\n    /* display: none; */\n    display: grid;\n    justify-content: space-around;\n    grid-template-columns: 80px auto auto auto 80px;\n    grid-template-areas: 'checkbox title title duedate expand-new'\n                        'description description description description .'\n                        'description description description description switch-group';\n    padding: 10px;\n    gap: 10px;\n    background-color: rgb(255, 255, 255);\n    border-radius: 10px;\n    padding: 10px;\n    margin: 5px 0;\n    border-radius: 5px;\n    text-align: center;\n    border-bottom: solid 8px #bfbfbf;\n}\n.new-task-shrinked{\n    display: grid;\n    justify-content: space-around;\n    grid-template-columns: 80px auto auto auto 80px;\n    grid-template-areas: 'checkbox title title duedate expand-new';\n    padding: 10px;\n    gap: 10px;\n    background-color: rgb(255, 255, 255);\n    border-radius: 10px;\n    padding: 10px;\n    margin: 5px 0;\n    border-radius: 5px;\n    text-align: center;\n    border-bottom: solid 4px #bfbfbf;\n}\n.new-title{\n    grid-area: title;\n    text-align: left;\n}\n.new-description{\n    grid-area: description;\n    text-align: center;\n    margin: auto;\n}\n.new-due-date{\n    grid-area: duedate;\n}\n.check-box{\n    grid-area: checkbox;\n    border: solid 2px black;\n    font: inherit;\n    width: 1.20em;\n    height: 1.20em;\n\n    margin: auto;\n}\n\n.unchecked-task{\n    background-color: gray;\n}\n.important-task{\n    /* display: block; */\n    display: grid;\n    justify-content: space-around;\n    grid-template-columns: 80px auto auto auto 80px;\n    grid-template-areas: 'checkbox title title duedate expand-important'\n                        'description description description description .'\n                        'description description description description switch-group';\n    padding: 10px;\n    gap: 10px;\n    background-color: rgb(255, 255, 255);\n    border-radius: 10px;\n    padding: 10px;\n    margin: 5px 0;\n    border-radius: 5px;\n    text-align: center;\n    border-bottom: solid 8px #7df552;\n}\n.important-task-shrinked{\n    /* display: block; */\n    display: grid;\n    justify-content: space-around;\n    grid-template-columns: 80px auto auto auto 80px;\n    grid-template-areas: 'checkbox title title duedate expand-important';\n    padding: 10px;\n    gap: 10px;\n    background-color: rgb(255, 255, 255);\n    border-radius: 10px;\n    margin: 5px 0;\n    text-align: center;\n    border-radius: 5px;\n    border-bottom: solid 8px #3e830a;\n}\n.removed-task{\n    display: none;\n}\n.visible-element{\n    display: block;\n}\n.removed-element{\n    display: none;\n}\n.checked-task{\n    display: grid;\n    justify-content: space-around;\n    grid-template-columns: 80px auto auto;\n    grid-template-areas: 'checkbox title title duedate expand-important'\n                        'description description description description .'\n                        'description description description description switch-group';\n    padding: 10px;\n    gap: 10px;\n    background-color: rgb(111, 111, 111);\n    border-radius: 10px;\n    padding: 10px;\n    margin: 5px 0;\n    border-radius: 5px;\n    text-align: center;\n    border-bottom: solid 8px #bfbfbf;\n}\n.important-container>h2{\n    display: none;\n    color: #3e830a;\n}\n.expand-new{\n    padding: 20px;\n    background-color: rgb(48, 48, 48);\n    grid-area: expand-new;\n}\n.expand-important{\n    padding: 20px;\n    background-color: rgb(139, 255, 51);\n    grid-area: expand-important;\n}\n#switch-group{\n    justify-self: end;\n    font-weight: bold;\n    border: solid 2px black;\n    grid-area: switch-group;\n    height: 30px;\n    width: 200px;\n    margin: auto 0 auto auto;\n}\n/* Task elements values */"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


// Initial arrays
let tasks = [];
let deletedTasks = [];
let important = new Array();
important.name = 'important'

// Array names
tasks.name = 'tasks'
deletedTasks.name = 'deletedTasks'

// Load all containers
let mainContainer = document.querySelector('.main-container'); // Stays
let initialContainer = document.querySelector('.initial-container'); // Stays
let importantContainer = document.querySelector('.important-container'); // Stays
let importantTitle = document.querySelector('.important-container>h2')
let secondaryContainer = document.querySelector('.secondary-container'); // Stays
let newTaskTitle = document.querySelector('.initial-container>h2')

// Initial class
class Task {
    constructor(title, description, dueDate){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }
    createTask(title, description, dueDate){

        // Define values
        title = document.getElementById('title-value').value;
        description = document.getElementById('description-value').value;
        dueDate = document.getElementById('date-value').value;
        
        // Push user values to array
        let currentTask = new Task(title, description, dueDate)
        tasks.push(currentTask)
        
        console.log(tasks);
        console.log(tasks.length);

        for(let i = tasks.length - 1; i != tasks.length; i++){

                important.push(tasks[i])
                deletedTasks.push(tasks[i])


                // Create new taks from DOM
                let newTask = document.createElement('div') // Stays
                newTask.classList.add('new-task-shrinked') // Stays
                initialContainer.appendChild(newTask) // Stays
        
                // Create new values of each field
               let newTitle = document.createElement('h2')
               newTitle.classList.add('new-title')
               let newDescription = document.createElement('p')
               newDescription.classList.add('new-description')
               let newDueDate = document.createElement('p')
               newDueDate.classList.add('new-due-date')

               // Create checkbox
               let checkBox = document.createElement('input');
               checkBox.setAttribute('type', 'checkbox');
               checkBox.classList.add('check-box')     
               
               // Create expand button for New Task
               let expandNew = document.createElement('button')
               expandNew.classList.add('expand-new')

               // Create expand button for Important Task
               let expandImportant = document.createElement('button')
               expandImportant.classList.add('expand-important')               

               // Call task DOM elements
               let importantTask = document.createElement('div') // Stays
               importantTask.classList.add('important-task') // Stays
               mainContainer.appendChild(importantContainer)
               importantContainer.appendChild(importantTask) // Stays

                // Switch Group Button
                let switchGroup = document.createElement('button')
                switchGroup.setAttribute('id', 'switch-group')
                switchGroup.innerText = 'Switch Group'
                switchGroup.classList.add('initial')

        
                // Assign input values to each element
                newTitle.innerText = title;
                newDescription.innerText = description;
                newDueDate.innerText = dueDate;
        
                // Append new values to new task block
                newTask.appendChild(checkBox)
                newTask.appendChild(newTitle)
                newTask.appendChild(newDueDate)
                newTask.appendChild(newDescription)
                newTask.append(switchGroup)
                newTask.append(expandNew)


                //Show Initial taskt title
                // newTaskTitle.style.display = 'block'
                newTaskTitle.classList.remove('removed-element')
                newTaskTitle.classList.add('visible-element')

                // Hide extended elements
                // newDescription.style.display='none' // Hide description
                newDescription.classList.remove('visible-element')
                newDescription.classList.add('removed-element')
                // switchGroup.style.display='none'
                switchGroup.classList.remove('visible-element')
                switchGroup.classList.add('removed-element')


                // Hide Important Task
                // importantTask.style.display = 'none'
                importantTask.classList.remove('important-task')
                importantTask.classList.add('removed-task')




                // Extend and hide new task DONE
                expandNew.addEventListener('click', function (){
                        // If is closed
                        if (newTask.classList.contains('new-task-shrinked')){

                            console.log('expand new');

                            // Expand new ask
                            newTask.classList.remove('new-task-shrinked')
                            newTask.classList.add('new-task')

                            // Show task description
                            newDescription.classList.remove('removed-element')
                            newDescription.classList.add('visible-element')

                            // Show switch button
                            switchGroup.classList.remove('removed-element')
                            switchGroup.classList.add('visible-element')

                            

                        // If is opened
                        }else if(newTask.classList.contains('new-task')){

                            console.log('close new');

                            // Shrink new task
                            newTask.classList.remove('new-task')
                            newTask.classList.add('new-task-shrinked')

                            // Hide task description
                            newDescription.classList.remove('visible-element')
                            newDescription.classList.add('removed-element')

                            // Hide Switch button
                            switchGroup.classList.remove('visible-element')
                            switchGroup.classList.add('removed-element')

                        };
                       
                        });


                    // Extend and hide Important Task elements
                    expandImportant.addEventListener('click', function(){

                        console.log('expand important');

                        // If important is closed
                        if (importantTask.classList.contains('important-task-shrinked')){

                            // Open important task
                            importantTask.classList.remove('important-task-shrinked')
                            importantTask.classList.add('important-task')

                            // Show description
                            newDescription.classList.remove('removed-element')
                            newDescription.classList.add('visible-element')

                            // Show switch button
                            switchGroup.classList.remove('removed-element')
                            switchGroup.classList.add('visible-element')

                        // If important is Opened
                        }else if(importantTask.classList.contains('important-task')){

                            console.log('close important');

                            // Shrink important task
                            importantTask.classList.remove('important-task')
                            importantTask.classList.add('important-task-shrinked')

                            newTask.style.backgroundColor = 'red'

                            // Hide description
                            newDescription.classList.remove('visible-element')
                            newDescription.classList.add('removed-element')

                            // Hide switch button
                            switchGroup.classList.remove('visible-element')
                            switchGroup.classList.add('removed-element')
                        };
        
                });
                

                    // Switch group 
                    switchGroup.addEventListener('click', function (){   

                        // Switch to New Task
                        if(switchGroup.classList.contains('important')){

                            console.log('Switch to New Task');
                            console.log(tasks.length);
                            console.log(tasks);

                            expandImportant.classList.remove('expand-important')
                            expandImportant.classList.add('removed-element')

                            expandNew.classList.remove('removed-element')
                            expandNew.classList.add('expand-new')

                            switchGroup.classList.remove('important')
                            switchGroup.classList.add('initial')

                            switchGroup.classList.remove('visible-element')
                            switchGroup.classList.add('removed-element')

                            importantTask.classList.remove('important-task')
                            importantTask.classList.remove('important-task-shrinked')
                            importantTask.classList.add('removed-task')

                            newTask.classList.remove('removed-task')
                            newTask.classList.remove('new-task')
                            newTask.classList.add('new-task-shrinked')

                            newTask.appendChild(newTitle)
                            newTask.appendChild(newDescription)
                            newTask.appendChild(newDueDate)
                            newTask.appendChild(checkBox)
                            newTask.append(switchGroup)
                            newTask.append(expandImportant)

                            newDescription.classList.remove('visible-element')
                            newDescription.classList.add('removed-element')
                            
                            //Switch to Important Task
                        }else if(switchGroup.classList.contains('initial')){


                            console.log('Switched to Important Task');
                            console.log(important.length);
                            console.log(important);

                            expandImportant.classList.remove('removed-element')
                            expandImportant.classList.add('expand-important')

                            expandNew.classList.remove('expand-new')
                            expandNew.classList.add('removed-element')

                            switchGroup.classList.remove('initial')
                            switchGroup.classList.add('important')

                            switchGroup.classList.remove('visible-element')
                            switchGroup.classList.add('removed-element')

                            newTask.classList.remove('new-task')
                            newTask.classList.remove('new-task-shrinked')
                            newTask.classList.add('removed-task')

                            importantTask.classList.remove('removed-task')
                            importantTask.classList.remove('important-task')
                            importantTask.classList.add('important-task-shrinked')

                            importantTask.appendChild(newTitle)
                            importantTask.appendChild(newDescription)
                            importantTask.appendChild(newDueDate)
                            importantTask.appendChild(checkBox)
                            importantTask.append(switchGroup)
                            importantTask.append(expandImportant)

                            newDescription.classList.remove('visible-element')
                            newDescription.classList.add('removed-element')

                        }
                               
        
                    })

               // Remove task functionality (checkbox)
               checkBox.addEventListener('click', function(){
                if(checkBox.checked){
                    newTask.classList.add('checked-task')
                    importantTask.classList.add('checked-task')
                    // deletedTasks.push(tasks[i])
                    // newTask.remove()
                    // importantTask.remove()
                    console.log(`this is i ${i}`);
                    // console.log(tasks);
                    console.log(deletedTasks.length);
                    console.log(deletedTasks);


                    
                }else{
                    console.log('Not checked bitch');
                    newTask.classList.add('unchecked-task')

                }
               })

                // Clean input fields
                document.getElementById('title-value').value = ''
                document.getElementById('description-value').value = ''
                document.getElementById('date-value').value = ''

        }

        // Hide task prompt
        let taskPrompt = document.querySelector('.task-prompt')
        taskPrompt.style.display = 'none'
    }
}

// Display task prompt
function displayPrompt(){
    let taskPrompt = document.querySelector('.task-prompt')
    taskPrompt.style.display = 'block'
}

let buttonDisplay = document.querySelector('.button-prompt');

buttonDisplay.addEventListener('click', displayPrompt)

// Enter task prompt
let testButton = document.getElementById('entry');

testButton.addEventListener('click', function(){
    new Task().createTask()
});



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCOztBQUV6Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCOzs7QUFHekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsRUFBRTtBQUMvQztBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3R7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XFxufVxcbi5pbml0aWFsLWNvbnRhaW5lcj5oMntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLmRpc3BsYXktcHJvbXB0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG59XFxuLmJ1dHRvbi1wcm9tcHR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuXFxufVxcbi5tYWluLWNvbnRhaW5lcntcXG4gICAgbWFyZ2luOiAxMHB4IDEwMHB4O1xcbn1cXG4udGFzay1wcm9tcHR7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAwcHggMTAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbmlucHV0e1xcbiAgICBtYXJnaW46IDBweCAwO1xcbiAgICBib3JkZXI6IHNvbGlkIDJweDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuXFxufVxcbnRleHRhcmVhe1xcbiAgICBib3JkZXI6IHNvbGlkIDJweDtcXG5cXG59XFxubGFiZWx7XFxuICAgIG1hcmdpbjogMHB4IDA7XFxufVxcbiNlbnRyeXtcXG4gICAgbWFyZ2luOiAyMHB4IDA7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5oMXtcXG4gICAgZm9udC1mYW1pbHk6J2hlbHZldGljYSc7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmgye1xcbiAgICBmb250LWZhbWlseTonaGVsdmV0aWNhJztcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxucHtcXG4gICAgZm9udC1mYW1pbHk6J2hlbHZldGljYSc7XFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcbn1cXG4ubmV3LXRhc2t7XFxuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggYXV0byBhdXRvIGF1dG8gODBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2NoZWNrYm94IHRpdGxlIHRpdGxlIGR1ZWRhdGUgZXhwYW5kLW5ldydcXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gLidcXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gc3dpdGNoLWdyb3VwJztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogNXB4IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCA4cHggI2JmYmZiZjtcXG59XFxuLm5ldy10YXNrLXNocmlua2Vke1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MHB4IGF1dG8gYXV0byBhdXRvIDgwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdjaGVja2JveCB0aXRsZSB0aXRsZSBkdWVkYXRlIGV4cGFuZC1uZXcnO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiA1cHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDRweCAjYmZiZmJmO1xcbn1cXG4ubmV3LXRpdGxle1xcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4ubmV3LWRlc2NyaXB0aW9ue1xcbiAgICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuLm5ldy1kdWUtZGF0ZXtcXG4gICAgZ3JpZC1hcmVhOiBkdWVkYXRlO1xcbn1cXG4uY2hlY2stYm94e1xcbiAgICBncmlkLWFyZWE6IGNoZWNrYm94O1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgd2lkdGg6IDEuMjBlbTtcXG4gICAgaGVpZ2h0OiAxLjIwZW07XFxuXFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLnVuY2hlY2tlZC10YXNre1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG4uaW1wb3J0YW50LXRhc2t7XFxuICAgIC8qIGRpc3BsYXk6IGJsb2NrOyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MHB4IGF1dG8gYXV0byBhdXRvIDgwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdjaGVja2JveCB0aXRsZSB0aXRsZSBkdWVkYXRlIGV4cGFuZC1pbXBvcnRhbnQnXFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIC4nXFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIHN3aXRjaC1ncm91cCc7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDVweCAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgOHB4ICM3ZGY1NTI7XFxufVxcbi5pbXBvcnRhbnQtdGFzay1zaHJpbmtlZHtcXG4gICAgLyogZGlzcGxheTogYmxvY2s7ICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggYXV0byBhdXRvIGF1dG8gODBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2NoZWNrYm94IHRpdGxlIHRpdGxlIGR1ZWRhdGUgZXhwYW5kLWltcG9ydGFudCc7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtYXJnaW46IDVweCAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgOHB4ICMzZTgzMGE7XFxufVxcbi5yZW1vdmVkLXRhc2t7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi52aXNpYmxlLWVsZW1lbnR7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4ucmVtb3ZlZC1lbGVtZW50e1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4uY2hlY2tlZC10YXNre1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MHB4IGF1dG8gYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2NoZWNrYm94IHRpdGxlIHRpdGxlIGR1ZWRhdGUgZXhwYW5kLWltcG9ydGFudCdcXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gLidcXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gc3dpdGNoLWdyb3VwJztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTExLCAxMTEsIDExMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogNXB4IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCA4cHggI2JmYmZiZjtcXG59XFxuLmltcG9ydGFudC1jb250YWluZXI+aDJ7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGNvbG9yOiAjM2U4MzBhO1xcbn1cXG4uZXhwYW5kLW5ld3tcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LCA0OCwgNDgpO1xcbiAgICBncmlkLWFyZWE6IGV4cGFuZC1uZXc7XFxufVxcbi5leHBhbmQtaW1wb3J0YW50e1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM5LCAyNTUsIDUxKTtcXG4gICAgZ3JpZC1hcmVhOiBleHBhbmQtaW1wb3J0YW50O1xcbn1cXG4jc3dpdGNoLWdyb3Vwe1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xcbiAgICBncmlkLWFyZWE6IHN3aXRjaC1ncm91cDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIG1hcmdpbjogYXV0byAwIGF1dG8gYXV0bztcXG59XFxuLyogVGFzayBlbGVtZW50cyB2YWx1ZXMgKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCOztBQUUzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZOztBQUVoQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7O0FBRWhCO0FBQ0E7SUFDSSxpQkFBaUI7O0FBRXJCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsK0NBQStDO0lBQy9DOztzRkFFa0Y7SUFDbEYsYUFBYTtJQUNiLFNBQVM7SUFDVCxvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsK0NBQStDO0lBQy9DLDhEQUE4RDtJQUM5RCxhQUFhO0lBQ2IsU0FBUztJQUNULG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGFBQWE7SUFDYixjQUFjOztJQUVkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLCtDQUErQztJQUMvQzs7c0ZBRWtGO0lBQ2xGLGFBQWE7SUFDYixTQUFTO0lBQ1Qsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QiwrQ0FBK0M7SUFDL0Msb0VBQW9FO0lBQ3BFLGFBQWE7SUFDYixTQUFTO0lBQ1Qsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IscUNBQXFDO0lBQ3JDOztzRkFFa0Y7SUFDbEYsYUFBYTtJQUNiLFNBQVM7SUFDVCxvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGFBQWE7SUFDYixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQywyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osWUFBWTtJQUNaLHdCQUF3QjtBQUM1QjtBQUNBLHlCQUF5QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcXG59XFxuLmluaXRpYWwtY29udGFpbmVyPmgye1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4uZGlzcGxheS1wcm9tcHR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbn1cXG4uYnV0dG9uLXByb21wdHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XFxuICAgIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG5cXG59XFxuLm1haW4tY29udGFpbmVye1xcbiAgICBtYXJnaW46IDEwcHggMTAwcHg7XFxufVxcbi50YXNrLXByb21wdHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDBweCAxMDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuaW5wdXR7XFxuICAgIG1hcmdpbjogMHB4IDA7XFxuICAgIGJvcmRlcjogc29saWQgMnB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG5cXG59XFxudGV4dGFyZWF7XFxuICAgIGJvcmRlcjogc29saWQgMnB4O1xcblxcbn1cXG5sYWJlbHtcXG4gICAgbWFyZ2luOiAwcHggMDtcXG59XFxuI2VudHJ5e1xcbiAgICBtYXJnaW46IDIwcHggMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XFxuICAgIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcbmgxe1xcbiAgICBmb250LWZhbWlseTonaGVsdmV0aWNhJztcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuaDJ7XFxuICAgIGZvbnQtZmFtaWx5OidoZWx2ZXRpY2EnO1xcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5we1xcbiAgICBmb250LWZhbWlseTonaGVsdmV0aWNhJztcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxufVxcbi5uZXctdGFza3tcXG4gICAgLyogZGlzcGxheTogbm9uZTsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODBweCBhdXRvIGF1dG8gYXV0byA4MHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnY2hlY2tib3ggdGl0bGUgdGl0bGUgZHVlZGF0ZSBleHBhbmQtbmV3J1xcbiAgICAgICAgICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiAuJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBzd2l0Y2gtZ3JvdXAnO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiA1cHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDhweCAjYmZiZmJmO1xcbn1cXG4ubmV3LXRhc2stc2hyaW5rZWR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggYXV0byBhdXRvIGF1dG8gODBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2NoZWNrYm94IHRpdGxlIHRpdGxlIGR1ZWRhdGUgZXhwYW5kLW5ldyc7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDVweCAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgNHB4ICNiZmJmYmY7XFxufVxcbi5uZXctdGl0bGV7XFxuICAgIGdyaWQtYXJlYTogdGl0bGU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi5uZXctZGVzY3JpcHRpb257XFxuICAgIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG4ubmV3LWR1ZS1kYXRle1xcbiAgICBncmlkLWFyZWE6IGR1ZWRhdGU7XFxufVxcbi5jaGVjay1ib3h7XFxuICAgIGdyaWQtYXJlYTogY2hlY2tib3g7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICB3aWR0aDogMS4yMGVtO1xcbiAgICBoZWlnaHQ6IDEuMjBlbTtcXG5cXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4udW5jaGVja2VkLXRhc2t7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcbi5pbXBvcnRhbnQtdGFza3tcXG4gICAgLyogZGlzcGxheTogYmxvY2s7ICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggYXV0byBhdXRvIGF1dG8gODBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2NoZWNrYm94IHRpdGxlIHRpdGxlIGR1ZWRhdGUgZXhwYW5kLWltcG9ydGFudCdcXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gLidcXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gc3dpdGNoLWdyb3VwJztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogNXB4IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCA4cHggIzdkZjU1MjtcXG59XFxuLmltcG9ydGFudC10YXNrLXNocmlua2Vke1xcbiAgICAvKiBkaXNwbGF5OiBibG9jazsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODBweCBhdXRvIGF1dG8gYXV0byA4MHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnY2hlY2tib3ggdGl0bGUgdGl0bGUgZHVlZGF0ZSBleHBhbmQtaW1wb3J0YW50JztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbjogNXB4IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCA4cHggIzNlODMwYTtcXG59XFxuLnJlbW92ZWQtdGFza3tcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLnZpc2libGUtZWxlbWVudHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5yZW1vdmVkLWVsZW1lbnR7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5jaGVja2VkLXRhc2t7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggYXV0byBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnY2hlY2tib3ggdGl0bGUgdGl0bGUgZHVlZGF0ZSBleHBhbmQtaW1wb3J0YW50J1xcbiAgICAgICAgICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiAuJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBzd2l0Y2gtZ3JvdXAnO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTEsIDExMSwgMTExKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiA1cHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDhweCAjYmZiZmJmO1xcbn1cXG4uaW1wb3J0YW50LWNvbnRhaW5lcj5oMntcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgY29sb3I6ICMzZTgzMGE7XFxufVxcbi5leHBhbmQtbmV3e1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDQ4LCA0OCk7XFxuICAgIGdyaWQtYXJlYTogZXhwYW5kLW5ldztcXG59XFxuLmV4cGFuZC1pbXBvcnRhbnR7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzksIDI1NSwgNTEpO1xcbiAgICBncmlkLWFyZWE6IGV4cGFuZC1pbXBvcnRhbnQ7XFxufVxcbiNzd2l0Y2gtZ3JvdXB7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggYmxhY2s7XFxuICAgIGdyaWQtYXJlYTogc3dpdGNoLWdyb3VwO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgbWFyZ2luOiBhdXRvIDAgYXV0byBhdXRvO1xcbn1cXG4vKiBUYXNrIGVsZW1lbnRzIHZhbHVlcyAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vLyBJbml0aWFsIGFycmF5c1xubGV0IHRhc2tzID0gW107XG5sZXQgZGVsZXRlZFRhc2tzID0gW107XG5sZXQgaW1wb3J0YW50ID0gbmV3IEFycmF5KCk7XG5pbXBvcnRhbnQubmFtZSA9ICdpbXBvcnRhbnQnXG5cbi8vIEFycmF5IG5hbWVzXG50YXNrcy5uYW1lID0gJ3Rhc2tzJ1xuZGVsZXRlZFRhc2tzLm5hbWUgPSAnZGVsZXRlZFRhc2tzJ1xuXG4vLyBMb2FkIGFsbCBjb250YWluZXJzXG5sZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpOyAvLyBTdGF5c1xubGV0IGluaXRpYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5pdGlhbC1jb250YWluZXInKTsgLy8gU3RheXNcbmxldCBpbXBvcnRhbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1wb3J0YW50LWNvbnRhaW5lcicpOyAvLyBTdGF5c1xubGV0IGltcG9ydGFudFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltcG9ydGFudC1jb250YWluZXI+aDInKVxubGV0IHNlY29uZGFyeUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmRhcnktY29udGFpbmVyJyk7IC8vIFN0YXlzXG5sZXQgbmV3VGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluaXRpYWwtY29udGFpbmVyPmgyJylcblxuLy8gSW5pdGlhbCBjbGFzc1xuY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgfVxuICAgIGNyZWF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKXtcblxuICAgICAgICAvLyBEZWZpbmUgdmFsdWVzXG4gICAgICAgIHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlLXZhbHVlJykudmFsdWU7XG4gICAgICAgIGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uLXZhbHVlJykudmFsdWU7XG4gICAgICAgIGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS12YWx1ZScpLnZhbHVlO1xuICAgICAgICBcbiAgICAgICAgLy8gUHVzaCB1c2VyIHZhbHVlcyB0byBhcnJheVxuICAgICAgICBsZXQgY3VycmVudFRhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpXG4gICAgICAgIHRhc2tzLnB1c2goY3VycmVudFRhc2spXG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tzLmxlbmd0aCk7XG5cbiAgICAgICAgZm9yKGxldCBpID0gdGFza3MubGVuZ3RoIC0gMTsgaSAhPSB0YXNrcy5sZW5ndGg7IGkrKyl7XG5cbiAgICAgICAgICAgICAgICBpbXBvcnRhbnQucHVzaCh0YXNrc1tpXSlcbiAgICAgICAgICAgICAgICBkZWxldGVkVGFza3MucHVzaCh0YXNrc1tpXSlcblxuXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyB0YWtzIGZyb20gRE9NXG4gICAgICAgICAgICAgICAgbGV0IG5ld1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSAvLyBTdGF5c1xuICAgICAgICAgICAgICAgIG5ld1Rhc2suY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2stc2hyaW5rZWQnKSAvLyBTdGF5c1xuICAgICAgICAgICAgICAgIGluaXRpYWxDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFzaykgLy8gU3RheXNcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyB2YWx1ZXMgb2YgZWFjaCBmaWVsZFxuICAgICAgICAgICAgICAgbGV0IG5ld1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgICAgICAgICAgICAgbmV3VGl0bGUuY2xhc3NMaXN0LmFkZCgnbmV3LXRpdGxlJylcbiAgICAgICAgICAgICAgIGxldCBuZXdEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAgICAgICAgbmV3RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnbmV3LWRlc2NyaXB0aW9uJylcbiAgICAgICAgICAgICAgIGxldCBuZXdEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgICAgICAgICBuZXdEdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ25ldy1kdWUtZGF0ZScpXG5cbiAgICAgICAgICAgICAgIC8vIENyZWF0ZSBjaGVja2JveFxuICAgICAgICAgICAgICAgbGV0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgICAgICAgICAgICAgY2hlY2tCb3guY2xhc3NMaXN0LmFkZCgnY2hlY2stYm94JykgICAgIFxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAvLyBDcmVhdGUgZXhwYW5kIGJ1dHRvbiBmb3IgTmV3IFRhc2tcbiAgICAgICAgICAgICAgIGxldCBleHBhbmROZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgICAgZXhwYW5kTmV3LmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC1uZXcnKVxuXG4gICAgICAgICAgICAgICAvLyBDcmVhdGUgZXhwYW5kIGJ1dHRvbiBmb3IgSW1wb3J0YW50IFRhc2tcbiAgICAgICAgICAgICAgIGxldCBleHBhbmRJbXBvcnRhbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgICAgZXhwYW5kSW1wb3J0YW50LmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC1pbXBvcnRhbnQnKSAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAvLyBDYWxsIHRhc2sgRE9NIGVsZW1lbnRzXG4gICAgICAgICAgICAgICBsZXQgaW1wb3J0YW50VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIC8vIFN0YXlzXG4gICAgICAgICAgICAgICBpbXBvcnRhbnRUYXNrLmNsYXNzTGlzdC5hZGQoJ2ltcG9ydGFudC10YXNrJykgLy8gU3RheXNcbiAgICAgICAgICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaW1wb3J0YW50Q29udGFpbmVyKVxuICAgICAgICAgICAgICAgaW1wb3J0YW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGltcG9ydGFudFRhc2spIC8vIFN0YXlzXG5cbiAgICAgICAgICAgICAgICAvLyBTd2l0Y2ggR3JvdXAgQnV0dG9uXG4gICAgICAgICAgICAgICAgbGV0IHN3aXRjaEdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgICAgICBzd2l0Y2hHcm91cC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N3aXRjaC1ncm91cCcpXG4gICAgICAgICAgICAgICAgc3dpdGNoR3JvdXAuaW5uZXJUZXh0ID0gJ1N3aXRjaCBHcm91cCdcbiAgICAgICAgICAgICAgICBzd2l0Y2hHcm91cC5jbGFzc0xpc3QuYWRkKCdpbml0aWFsJylcblxuICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBBc3NpZ24gaW5wdXQgdmFsdWVzIHRvIGVhY2ggZWxlbWVudFxuICAgICAgICAgICAgICAgIG5ld1RpdGxlLmlubmVyVGV4dCA9IHRpdGxlO1xuICAgICAgICAgICAgICAgIG5ld0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIG5ld0R1ZURhdGUuaW5uZXJUZXh0ID0gZHVlRGF0ZTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gQXBwZW5kIG5ldyB2YWx1ZXMgdG8gbmV3IHRhc2sgYmxvY2tcbiAgICAgICAgICAgICAgICBuZXdUYXNrLmFwcGVuZENoaWxkKGNoZWNrQm94KVxuICAgICAgICAgICAgICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQobmV3VGl0bGUpXG4gICAgICAgICAgICAgICAgbmV3VGFzay5hcHBlbmRDaGlsZChuZXdEdWVEYXRlKVxuICAgICAgICAgICAgICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQobmV3RGVzY3JpcHRpb24pXG4gICAgICAgICAgICAgICAgbmV3VGFzay5hcHBlbmQoc3dpdGNoR3JvdXApXG4gICAgICAgICAgICAgICAgbmV3VGFzay5hcHBlbmQoZXhwYW5kTmV3KVxuXG5cbiAgICAgICAgICAgICAgICAvL1Nob3cgSW5pdGlhbCB0YXNrdCB0aXRsZVxuICAgICAgICAgICAgICAgIC8vIG5ld1Rhc2tUaXRsZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tUaXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdyZW1vdmVkLWVsZW1lbnQnKVxuICAgICAgICAgICAgICAgIG5ld1Rhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlLWVsZW1lbnQnKVxuXG4gICAgICAgICAgICAgICAgLy8gSGlkZSBleHRlbmRlZCBlbGVtZW50c1xuICAgICAgICAgICAgICAgIC8vIG5ld0Rlc2NyaXB0aW9uLnN0eWxlLmRpc3BsYXk9J25vbmUnIC8vIEhpZGUgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICBuZXdEZXNjcmlwdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlLWVsZW1lbnQnKVxuICAgICAgICAgICAgICAgIG5ld0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZWQtZWxlbWVudCcpXG4gICAgICAgICAgICAgICAgLy8gc3dpdGNoR3JvdXAuc3R5bGUuZGlzcGxheT0nbm9uZSdcbiAgICAgICAgICAgICAgICBzd2l0Y2hHcm91cC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlLWVsZW1lbnQnKVxuICAgICAgICAgICAgICAgIHN3aXRjaEdyb3VwLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZWQtZWxlbWVudCcpXG5cblxuICAgICAgICAgICAgICAgIC8vIEhpZGUgSW1wb3J0YW50IFRhc2tcbiAgICAgICAgICAgICAgICAvLyBpbXBvcnRhbnRUYXNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICAgICAgICBpbXBvcnRhbnRUYXNrLmNsYXNzTGlzdC5yZW1vdmUoJ2ltcG9ydGFudC10YXNrJylcbiAgICAgICAgICAgICAgICBpbXBvcnRhbnRUYXNrLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZWQtdGFzaycpXG5cblxuXG5cbiAgICAgICAgICAgICAgICAvLyBFeHRlbmQgYW5kIGhpZGUgbmV3IHRhc2sgRE9ORVxuICAgICAgICAgICAgICAgIGV4cGFuZE5ldy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXMgY2xvc2VkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VGFzay5jbGFzc0xpc3QuY29udGFpbnMoJ25ldy10YXNrLXNocmlua2VkJykpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2V4cGFuZCBuZXcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEV4cGFuZCBuZXcgYXNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGFzay5jbGFzc0xpc3QucmVtb3ZlKCduZXctdGFzay1zaHJpbmtlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKCduZXctdGFzaycpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaG93IHRhc2sgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEZXNjcmlwdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdyZW1vdmVkLWVsZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUtZWxlbWVudCcpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaG93IHN3aXRjaCBidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hHcm91cC5jbGFzc0xpc3QucmVtb3ZlKCdyZW1vdmVkLWVsZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaEdyb3VwLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUtZWxlbWVudCcpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXMgb3BlbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihuZXdUYXNrLmNsYXNzTGlzdC5jb250YWlucygnbmV3LXRhc2snKSl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2xvc2UgbmV3Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaHJpbmsgbmV3IHRhc2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUYXNrLmNsYXNzTGlzdC5yZW1vdmUoJ25ldy10YXNrJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLXNocmlua2VkJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhpZGUgdGFzayBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUtZWxlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgncmVtb3ZlZC1lbGVtZW50JylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhpZGUgU3dpdGNoIGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaEdyb3VwLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUtZWxlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoR3JvdXAuY2xhc3NMaXN0LmFkZCgncmVtb3ZlZC1lbGVtZW50JylcblxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEV4dGVuZCBhbmQgaGlkZSBJbXBvcnRhbnQgVGFzayBlbGVtZW50c1xuICAgICAgICAgICAgICAgICAgICBleHBhbmRJbXBvcnRhbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXhwYW5kIGltcG9ydGFudCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpbXBvcnRhbnQgaXMgY2xvc2VkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1wb3J0YW50VGFzay5jbGFzc0xpc3QuY29udGFpbnMoJ2ltcG9ydGFudC10YXNrLXNocmlua2VkJykpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3BlbiBpbXBvcnRhbnQgdGFza1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudFRhc2suY2xhc3NMaXN0LnJlbW92ZSgnaW1wb3J0YW50LXRhc2stc2hyaW5rZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudFRhc2suY2xhc3NMaXN0LmFkZCgnaW1wb3J0YW50LXRhc2snKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2hvdyBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3JlbW92ZWQtZWxlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndmlzaWJsZS1lbGVtZW50JylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNob3cgc3dpdGNoIGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaEdyb3VwLmNsYXNzTGlzdC5yZW1vdmUoJ3JlbW92ZWQtZWxlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoR3JvdXAuY2xhc3NMaXN0LmFkZCgndmlzaWJsZS1lbGVtZW50JylcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaW1wb3J0YW50IGlzIE9wZW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYoaW1wb3J0YW50VGFzay5jbGFzc0xpc3QuY29udGFpbnMoJ2ltcG9ydGFudC10YXNrJykpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nsb3NlIGltcG9ydGFudCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2hyaW5rIGltcG9ydGFudCB0YXNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50VGFzay5jbGFzc0xpc3QucmVtb3ZlKCdpbXBvcnRhbnQtdGFzaycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50VGFzay5jbGFzc0xpc3QuYWRkKCdpbXBvcnRhbnQtdGFzay1zaHJpbmtlZCcpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUYXNrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBIaWRlIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGVzY3JpcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZS1lbGVtZW50JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdyZW1vdmVkLWVsZW1lbnQnKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGlkZSBzd2l0Y2ggYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoR3JvdXAuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZS1lbGVtZW50JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hHcm91cC5jbGFzc0xpc3QuYWRkKCdyZW1vdmVkLWVsZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gU3dpdGNoIGdyb3VwIFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hHcm91cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpeyAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTd2l0Y2ggdG8gTmV3IFRhc2tcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHN3aXRjaEdyb3VwLmNsYXNzTGlzdC5jb250YWlucygnaW1wb3J0YW50Jykpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1N3aXRjaCB0byBOZXcgVGFzaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFza3MpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kSW1wb3J0YW50LmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZC1pbXBvcnRhbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZEltcG9ydGFudC5jbGFzc0xpc3QuYWRkKCdyZW1vdmVkLWVsZW1lbnQnKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kTmV3LmNsYXNzTGlzdC5yZW1vdmUoJ3JlbW92ZWQtZWxlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kTmV3LmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC1uZXcnKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoR3JvdXAuY2xhc3NMaXN0LnJlbW92ZSgnaW1wb3J0YW50JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hHcm91cC5jbGFzc0xpc3QuYWRkKCdpbml0aWFsJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaEdyb3VwLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUtZWxlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoR3JvdXAuY2xhc3NMaXN0LmFkZCgncmVtb3ZlZC1lbGVtZW50JylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudFRhc2suY2xhc3NMaXN0LnJlbW92ZSgnaW1wb3J0YW50LXRhc2snKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudFRhc2suY2xhc3NMaXN0LnJlbW92ZSgnaW1wb3J0YW50LXRhc2stc2hyaW5rZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudFRhc2suY2xhc3NMaXN0LmFkZCgncmVtb3ZlZC10YXNrJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Rhc2suY2xhc3NMaXN0LnJlbW92ZSgncmVtb3ZlZC10YXNrJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUYXNrLmNsYXNzTGlzdC5yZW1vdmUoJ25ldy10YXNrJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLXNocmlua2VkJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQobmV3VGl0bGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGFzay5hcHBlbmRDaGlsZChuZXdEZXNjcmlwdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUYXNrLmFwcGVuZENoaWxkKG5ld0R1ZURhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGFzay5hcHBlbmRDaGlsZChjaGVja0JveClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUYXNrLmFwcGVuZChzd2l0Y2hHcm91cClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUYXNrLmFwcGVuZChleHBhbmRJbXBvcnRhbnQpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEZXNjcmlwdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlLWVsZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZWQtZWxlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9Td2l0Y2ggdG8gSW1wb3J0YW50IFRhc2tcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHN3aXRjaEdyb3VwLmNsYXNzTGlzdC5jb250YWlucygnaW5pdGlhbCcpKXtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1N3aXRjaGVkIHRvIEltcG9ydGFudCBUYXNrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW1wb3J0YW50Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW1wb3J0YW50KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZEltcG9ydGFudC5jbGFzc0xpc3QucmVtb3ZlKCdyZW1vdmVkLWVsZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZEltcG9ydGFudC5jbGFzc0xpc3QuYWRkKCdleHBhbmQtaW1wb3J0YW50JylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZE5ldy5jbGFzc0xpc3QucmVtb3ZlKCdleHBhbmQtbmV3JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmROZXcuY2xhc3NMaXN0LmFkZCgncmVtb3ZlZC1lbGVtZW50JylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaEdyb3VwLmNsYXNzTGlzdC5yZW1vdmUoJ2luaXRpYWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaEdyb3VwLmNsYXNzTGlzdC5hZGQoJ2ltcG9ydGFudCcpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hHcm91cC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlLWVsZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaEdyb3VwLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZWQtZWxlbWVudCcpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUYXNrLmNsYXNzTGlzdC5yZW1vdmUoJ25ldy10YXNrJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUYXNrLmNsYXNzTGlzdC5yZW1vdmUoJ25ldy10YXNrLXNocmlua2VkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZWQtdGFzaycpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnRUYXNrLmNsYXNzTGlzdC5yZW1vdmUoJ3JlbW92ZWQtdGFzaycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50VGFzay5jbGFzc0xpc3QucmVtb3ZlKCdpbXBvcnRhbnQtdGFzaycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50VGFzay5jbGFzc0xpc3QuYWRkKCdpbXBvcnRhbnQtdGFzay1zaHJpbmtlZCcpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnRUYXNrLmFwcGVuZENoaWxkKG5ld1RpdGxlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudFRhc2suYXBwZW5kQ2hpbGQobmV3RGVzY3JpcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50VGFzay5hcHBlbmRDaGlsZChuZXdEdWVEYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudFRhc2suYXBwZW5kQ2hpbGQoY2hlY2tCb3gpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50VGFzay5hcHBlbmQoc3dpdGNoR3JvdXApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50VGFzay5hcHBlbmQoZXhwYW5kSW1wb3J0YW50KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGVzY3JpcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZS1lbGVtZW50JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdyZW1vdmVkLWVsZW1lbnQnKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAvLyBSZW1vdmUgdGFzayBmdW5jdGlvbmFsaXR5IChjaGVja2JveClcbiAgICAgICAgICAgICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBpZihjaGVja0JveC5jaGVja2VkKXtcbiAgICAgICAgICAgICAgICAgICAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKCdjaGVja2VkLXRhc2snKVxuICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnRUYXNrLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQtdGFzaycpXG4gICAgICAgICAgICAgICAgICAgIC8vIGRlbGV0ZWRUYXNrcy5wdXNoKHRhc2tzW2ldKVxuICAgICAgICAgICAgICAgICAgICAvLyBuZXdUYXNrLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgICAgIC8vIGltcG9ydGFudFRhc2sucmVtb3ZlKClcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHRoaXMgaXMgaSAke2l9YCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRhc2tzKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGVsZXRlZFRhc2tzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRlbGV0ZWRUYXNrcyk7XG5cblxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vdCBjaGVja2VkIGJpdGNoJyk7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Rhc2suY2xhc3NMaXN0LmFkZCgndW5jaGVja2VkLXRhc2snKVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIC8vIENsZWFuIGlucHV0IGZpZWxkc1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZS12YWx1ZScpLnZhbHVlID0gJydcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24tdmFsdWUnKS52YWx1ZSA9ICcnXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUtdmFsdWUnKS52YWx1ZSA9ICcnXG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhpZGUgdGFzayBwcm9tcHRcbiAgICAgICAgbGV0IHRhc2tQcm9tcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1wcm9tcHQnKVxuICAgICAgICB0YXNrUHJvbXB0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB9XG59XG5cbi8vIERpc3BsYXkgdGFzayBwcm9tcHRcbmZ1bmN0aW9uIGRpc3BsYXlQcm9tcHQoKXtcbiAgICBsZXQgdGFza1Byb21wdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXByb21wdCcpXG4gICAgdGFza1Byb21wdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xufVxuXG5sZXQgYnV0dG9uRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tcHJvbXB0Jyk7XG5cbmJ1dHRvbkRpc3BsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5UHJvbXB0KVxuXG4vLyBFbnRlciB0YXNrIHByb21wdFxubGV0IHRlc3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50cnknKTtcblxudGVzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgbmV3IFRhc2soKS5jcmVhdGVUYXNrKClcbn0pO1xuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==