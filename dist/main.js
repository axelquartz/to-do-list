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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    background-color: #e5e5e5;\n}\n\n@media (max-width: 900px) {\n    \n\n.initial-container{\n    margin-top: 50px;\n    margin-bottom: 20px;\n}\n.important-container{\n    margin-top: 50px;\n    margin-bottom: 20px;\n}\n\n.display-prompt{\n    display: flex;\n    justify-content: center;\n\n}\n.button-prompt{\n    display: grid;\n    margin: 50px auto;\n    border: solid 2px black;\n    border-radius: 5px;\n    height: 40px;\n    padding: 10px;\n    width: 200px;\n\n}\n.main-container{\n    margin: 10px 100px;\n}\n.task-prompt{\n    display: none;\n    background-color: rgb(255, 255, 255);\n    border-radius: 10px;\n    padding: 10px;\n    margin: 0px 100px;\n    text-align: center;\n    justify-content: center;\n}\ninput{\n    margin: 0px 0;\n    border: solid 2px;\n    border-radius: 5px;\n    font-family: helvetica;\n    width: 250px;\n    height: 20px;\n}\ntextarea{\n    border: solid 2px;\n    border-radius: 5px;\n    font-family: helvetica;\n    width: 250px;\n}\nlabel{\n    margin: 0px 0;\n}\n#entry{\n    margin: 20px 0;\n    display: grid;\n    margin: 50px auto;\n    border: solid 2px black;\n    border-radius: 5px;\n    background-color: rgb(0, 0, 0);\n    color: white;\n    height: 40px;\n    width: 200px;\n    padding: 10px;\n}\nh1{\n    font-family:'helvetica';\n    font-size: larger;\n    text-align: center;\n}\nh2{\n    font-family:'helvetica';\n    font-size: medium;\n    text-align: center;\n}\np{\n    font-family:'helvetica';\n    font-size: 14px;\n    color: #787878;\n}\n.new-title{\n    grid-area: title;\n    text-align: left;\n}\n.new-description{\n    grid-area: description;\n    text-align: left;\n    margin: auto;\n}\n.new-due-date{\n    grid-area: duedate;\n}\n.check-box{\n    grid-area: checkbox;\n    border: solid 2px black;\n    font: inherit;\n    width: 1.20em;\n    height: 1.20em;\n\n    margin: auto;\n}\n.new-task{\n    /* display: none; */\n    display: grid;\n    justify-content: space-between;\n    grid-template-columns: 30px auto auto auto minmax(100px, auto);\n    grid-template-areas: 'checkbox title title duedate expand-new'\n                        'description description description description .'\n                        'description description description description switch-group';\n    padding: 10px;\n    gap: 10px;\n    background-color: rgb(255, 255, 255);\n    border-radius: 10px;\n    margin: 10px 0;\n    text-align: center;\n    border-bottom: solid 4px #5d15e2;\n}\n.new-task-shrinked{\n    display: grid;\n    justify-content: space-between;\n    grid-template-columns: 30px auto auto auto minmax(100px, auto);\n    grid-template-areas: 'checkbox title title duedate expand-new';\n    padding: 10px;\n    gap: 10px;\n    background-color: rgb(255, 255, 255);\n    border-radius: 10px;\n    margin: 10px 0;\n    text-align: center;\n    border-bottom: solid 4px #5d15e2;\n}\n\n\n.unchecked-task{\n    background-color: rgb(255, 255, 255);\n}\n.important-task{\n    display: grid;\n    justify-content: space-between;\n    grid-template-columns: 30px auto auto auto minmax(100px, auto);\n    grid-template-areas: 'checkbox title title duedate expand-important'\n                        'description description description description .'\n                        'description description description description switch-group';\n    padding: 10px;\n    gap: 10px;\n    background-color: rgb(255, 255, 255);\n    border-radius: 10px;\n    margin: 10px 0;\n    text-align: center;\n    border-bottom: solid 4px #97e454;\n}\n.important-task-shrinked{\n    display: grid;\n    justify-content: space-between;\n    grid-template-columns: 30px auto auto auto minmax(100px, auto);\n    grid-template-areas: 'checkbox title title duedate expand-important';\n    padding: 10px;\n    gap: 10px;\n    background-color: rgb(255, 255, 255);\n    border-radius: 10px;\n    margin: 10px 0;\n    text-align: center;\n    border-bottom: solid 4px #97e454;\n}\n.removed-task{\n    display: none;\n}\n.visible-element{\n    display: block;\n}\n.removed-element{\n    display: none;\n}\n.checked-task{\n    display: grid;\n    justify-content: space-between;\n    grid-template-columns: 80px auto auto auto auto;\n    grid-template-areas: 'checkbox title title duedate .';\n    padding: 10px;\n    gap: 10px;\n    background-color: rgb(111, 111, 111);\n    color: white;\n    border-radius: 10px;\n    margin: 10px 0;\n    text-align: center;\n    border-bottom: solid 4px #bfbfbf;\n}\n\n.expand-new{\n    width: 30px;\n    height: 30px;\n    justify-content: end;\n    margin: auto 0 auto auto;\n    border: solid 2px black;\n    border-radius: 5px;\n    background-color: #ffffff;\n    grid-area: expand-new;\n}\n.expand-important{\n    width: 30px;\n    height: 30px;\n    justify-content: end;\n    margin: auto 0 auto auto;\n    border: solid 2px black;\n    border-radius: 5px;\n    background-color: #ffffff;\n    grid-area: expand-important;\n}\n.expand-new-image{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: auto;\n}\n.expand-new-image>img{\n    height: 15px;\n    justify-content: center;\n    align-items: center;\n    margin: auto;\n}\n.expand-important-image{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: auto;\n}\n.expand-important-image>img{\n    height: 15px;\n    justify-content: center;\n    align-items: center;\n    margin: auto;\n}\n#switch-group{\n    justify-self: start;\n    font-weight: bold;\n    border: solid 2px black;\n    grid-area: switch-group;\n    height: 30px;\n    width: 110px;\n    margin: auto 0 auto auto;\n}\n/* Task elements values */\n}\n\n\n@media (min-width: 900px) {\n    .main-container{\n        display: grid;\n        grid-template-columns: minmax(400px, 600px) minmax(400px, 600px);\n        margin: 10px;\n        gap: 30px;\n        justify-content: center;\n    }\n    .initial-container{\n        margin-top: 50px;\n        margin-bottom: 20px;\n    }\n    .important-container{\n        margin-top: 50px;\n        margin-bottom: 20px;\n    }\n    \n    .display-prompt{\n        display: flex;\n        justify-content: center;\n    \n    }\n    .button-prompt{\n        display: grid;\n        margin: 50px auto;\n        border: solid 2px black;\n        border-radius: 5px;\n        height: 40px;\n        padding: 10px;\n        width: 200px;\n    \n    }\n\n    .task-prompt{\n        display: none;\n        background-color: rgb(255, 255, 255);\n        border-radius: 10px;\n        padding: 10px;\n        margin: 0px 100px;\n        text-align: center;\n        justify-content: center;\n    }\n    input{\n        margin: 0px 0;\n        border: solid 2px;\n        border-radius: 5px;\n        font-family: helvetica;\n        width: 250px;\n        height: 20px;\n    }\n    textarea{\n        border: solid 2px;\n        border-radius: 5px;\n        font-family: helvetica;\n        width: 250px;\n    }\n    label{\n        margin: 0px 0;\n    }\n    #entry{\n        margin: 20px 0;\n        display: grid;\n        margin: 50px auto;\n        border: solid 2px black;\n        border-radius: 5px;\n        background-color: rgb(0, 0, 0);\n        color: white;\n        height: 40px;\n        width: 200px;\n        padding: 10px;\n    }\n    h1{\n        font-family:'helvetica';\n        font-size: larger;\n        text-align: center;\n    }\n    h2{\n        font-family:'helvetica';\n        font-size: medium;\n        text-align: center;\n    }\n    p{\n        font-family:'helvetica';\n        font-size: 14px;\n        color: #787878;\n    }\n    .new-title{\n        grid-area: title;\n        text-align: left;\n    }\n    .new-description{\n        grid-area: description;\n        text-align: left;\n        margin: auto;\n    }\n    .new-due-date{\n        grid-area: duedate;\n    }\n    .check-box{\n        grid-area: checkbox;\n        border: solid 2px black;\n        font: inherit;\n        width: 1.20em;\n        height: 1.20em;\n    \n        margin: auto;\n    }\n    .new-task{\n        /* display: none; */\n        display: grid;\n        justify-content: space-between;\n        grid-template-columns: 30px auto auto auto minmax(100px, auto);\n        grid-template-areas: 'checkbox title title duedate expand-new'\n                            'description description description description .'\n                            'description description description description switch-group';\n        padding: 10px;\n        gap: 10px;\n        background-color: rgb(255, 255, 255);\n        border-radius: 10px;\n        margin: 10px 0;\n        text-align: center;\n        border-bottom: solid 4px #5d15e2;\n    }\n    .new-task-shrinked{\n        display: grid;\n        justify-content: space-between;\n        grid-template-columns: 30px auto auto auto minmax(100px, auto);\n        grid-template-areas: 'checkbox title title duedate expand-new';\n        padding: 10px;\n        gap: 10px;\n        background-color: rgb(255, 255, 255);\n        border-radius: 10px;\n        margin: 10px 0;\n        text-align: center;\n        border-bottom: solid 4px #5d15e2;\n    }\n    \n    \n    .unchecked-task{\n        background-color: rgb(255, 255, 255);\n    }\n    .important-task{\n        display: grid;\n        justify-content: space-between;\n        grid-template-columns: 30px auto auto auto minmax(100px, auto);\n        grid-template-areas: 'checkbox title title duedate expand-important'\n                            'description description description description .'\n                            'description description description description switch-group';\n        padding: 10px;\n        gap: 10px;\n        background-color: rgb(255, 255, 255);\n        border-radius: 10px;\n        margin: 10px 0;\n        text-align: center;\n        border-bottom: solid 4px #97e454;\n    }\n    .important-task-shrinked{\n        display: grid;\n        justify-content: space-between;\n        grid-template-columns: 30px auto auto auto minmax(100px, auto);\n        grid-template-areas: 'checkbox title title duedate expand-important';\n        padding: 10px;\n        gap: 10px;\n        background-color: rgb(255, 255, 255);\n        border-radius: 10px;\n        margin: 10px 0;\n        text-align: center;\n        border-bottom: solid 4px #97e454;\n    }\n    .removed-task{\n        display: none;\n    }\n    .visible-element{\n        display: block;\n    }\n    .removed-element{\n        display: none;\n    }\n    .checked-task{\n        display: grid;\n        justify-content: space-between;\n        grid-template-columns: 80px auto auto auto auto;\n        grid-template-areas: 'checkbox title title duedate .';\n        padding: 10px;\n        gap: 10px;\n        background-color: rgb(111, 111, 111);\n        color: white;\n        border-radius: 10px;\n        margin: 10px 0;\n        text-align: center;\n        border-bottom: solid 4px #bfbfbf;\n    }\n    \n    .expand-new{\n        width: 30px;\n        height: 30px;\n        justify-content: end;\n        margin: auto 0 auto auto;\n        border: solid 2px black;\n        border-radius: 5px;\n        background-color: #ffffff;\n        grid-area: expand-new;\n    }\n    .expand-important{\n        width: 30px;\n        height: 30px;\n        justify-content: end;\n        margin: auto 0 auto auto;\n        border: solid 2px black;\n        border-radius: 5px;\n        background-color: #ffffff;\n        grid-area: expand-important;\n    }\n    .expand-new-image{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        margin: auto;\n    }\n    .expand-new-image>img{\n        height: 15px;\n        justify-content: center;\n        align-items: center;\n        margin: auto;\n    }\n    .expand-important-image{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        margin: auto;\n    }\n    .expand-important-image>img{\n        height: 15px;\n        justify-content: center;\n        align-items: center;\n        margin: auto;\n    }\n    #switch-group{\n        justify-self: start;\n        font-weight: bold;\n        border: solid 2px black;\n        border-radius: 5px;\n        grid-area: switch-group;\n        height: 30px;\n        width: 110px;\n        margin: auto 0 auto auto;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n    background-color: #e5e5e5;\n}\n\n@media (max-width: 900px) {\n    \n\n.initial-container{\n    margin-top: 50px;\n    margin-bottom: 20px;\n}\n.important-container{\n    margin-top: 50px;\n    margin-bottom: 20px;\n}\n\n.display-prompt{\n    display: flex;\n    justify-content: center;\n\n}\n.button-prompt{\n    display: grid;\n    margin: 50px auto;\n    border: solid 2px black;\n    border-radius: 5px;\n    height: 40px;\n    padding: 10px;\n    width: 200px;\n\n}\n.main-container{\n    margin: 10px 100px;\n}\n.task-prompt{\n    display: none;\n    background-color: rgb(255, 255, 255);\n    border-radius: 10px;\n    padding: 10px;\n    margin: 0px 100px;\n    text-align: center;\n    justify-content: center;\n}\ninput{\n    margin: 0px 0;\n    border: solid 2px;\n    border-radius: 5px;\n    font-family: helvetica;\n    width: 250px;\n    height: 20px;\n}\ntextarea{\n    border: solid 2px;\n    border-radius: 5px;\n    font-family: helvetica;\n    width: 250px;\n}\nlabel{\n    margin: 0px 0;\n}\n#entry{\n    margin: 20px 0;\n    display: grid;\n    margin: 50px auto;\n    border: solid 2px black;\n    border-radius: 5px;\n    background-color: rgb(0, 0, 0);\n    color: white;\n    height: 40px;\n    width: 200px;\n    padding: 10px;\n}\nh1{\n    font-family:'helvetica';\n    font-size: larger;\n    text-align: center;\n}\nh2{\n    font-family:'helvetica';\n    font-size: medium;\n    text-align: center;\n}\np{\n    font-family:'helvetica';\n    font-size: 14px;\n    color: #787878;\n}\n.new-title{\n    grid-area: title;\n    text-align: left;\n}\n.new-description{\n    grid-area: description;\n    text-align: left;\n    margin: auto;\n}\n.new-due-date{\n    grid-area: duedate;\n}\n.check-box{\n    grid-area: checkbox;\n    border: solid 2px black;\n    font: inherit;\n    width: 1.20em;\n    height: 1.20em;\n\n    margin: auto;\n}\n.new-task{\n    /* display: none; */\n    display: grid;\n    justify-content: space-between;\n    grid-template-columns: 30px auto auto auto minmax(100px, auto);\n    grid-template-areas: 'checkbox title title duedate expand-new'\n                        'description description description description .'\n                        'description description description description switch-group';\n    padding: 10px;\n    gap: 10px;\n    background-color: rgb(255, 255, 255);\n    border-radius: 10px;\n    margin: 10px 0;\n    text-align: center;\n    border-bottom: solid 4px #5d15e2;\n}\n.new-task-shrinked{\n    display: grid;\n    justify-content: space-between;\n    grid-template-columns: 30px auto auto auto minmax(100px, auto);\n    grid-template-areas: 'checkbox title title duedate expand-new';\n    padding: 10px;\n    gap: 10px;\n    background-color: rgb(255, 255, 255);\n    border-radius: 10px;\n    margin: 10px 0;\n    text-align: center;\n    border-bottom: solid 4px #5d15e2;\n}\n\n\n.unchecked-task{\n    background-color: rgb(255, 255, 255);\n}\n.important-task{\n    display: grid;\n    justify-content: space-between;\n    grid-template-columns: 30px auto auto auto minmax(100px, auto);\n    grid-template-areas: 'checkbox title title duedate expand-important'\n                        'description description description description .'\n                        'description description description description switch-group';\n    padding: 10px;\n    gap: 10px;\n    background-color: rgb(255, 255, 255);\n    border-radius: 10px;\n    margin: 10px 0;\n    text-align: center;\n    border-bottom: solid 4px #97e454;\n}\n.important-task-shrinked{\n    display: grid;\n    justify-content: space-between;\n    grid-template-columns: 30px auto auto auto minmax(100px, auto);\n    grid-template-areas: 'checkbox title title duedate expand-important';\n    padding: 10px;\n    gap: 10px;\n    background-color: rgb(255, 255, 255);\n    border-radius: 10px;\n    margin: 10px 0;\n    text-align: center;\n    border-bottom: solid 4px #97e454;\n}\n.removed-task{\n    display: none;\n}\n.visible-element{\n    display: block;\n}\n.removed-element{\n    display: none;\n}\n.checked-task{\n    display: grid;\n    justify-content: space-between;\n    grid-template-columns: 80px auto auto auto auto;\n    grid-template-areas: 'checkbox title title duedate .';\n    padding: 10px;\n    gap: 10px;\n    background-color: rgb(111, 111, 111);\n    color: white;\n    border-radius: 10px;\n    margin: 10px 0;\n    text-align: center;\n    border-bottom: solid 4px #bfbfbf;\n}\n\n.expand-new{\n    width: 30px;\n    height: 30px;\n    justify-content: end;\n    margin: auto 0 auto auto;\n    border: solid 2px black;\n    border-radius: 5px;\n    background-color: #ffffff;\n    grid-area: expand-new;\n}\n.expand-important{\n    width: 30px;\n    height: 30px;\n    justify-content: end;\n    margin: auto 0 auto auto;\n    border: solid 2px black;\n    border-radius: 5px;\n    background-color: #ffffff;\n    grid-area: expand-important;\n}\n.expand-new-image{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: auto;\n}\n.expand-new-image>img{\n    height: 15px;\n    justify-content: center;\n    align-items: center;\n    margin: auto;\n}\n.expand-important-image{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: auto;\n}\n.expand-important-image>img{\n    height: 15px;\n    justify-content: center;\n    align-items: center;\n    margin: auto;\n}\n#switch-group{\n    justify-self: start;\n    font-weight: bold;\n    border: solid 2px black;\n    grid-area: switch-group;\n    height: 30px;\n    width: 110px;\n    margin: auto 0 auto auto;\n}\n/* Task elements values */\n}\n\n\n@media (min-width: 900px) {\n    .main-container{\n        display: grid;\n        grid-template-columns: minmax(400px, 600px) minmax(400px, 600px);\n        margin: 10px;\n        gap: 30px;\n        justify-content: center;\n    }\n    .initial-container{\n        margin-top: 50px;\n        margin-bottom: 20px;\n    }\n    .important-container{\n        margin-top: 50px;\n        margin-bottom: 20px;\n    }\n    \n    .display-prompt{\n        display: flex;\n        justify-content: center;\n    \n    }\n    .button-prompt{\n        display: grid;\n        margin: 50px auto;\n        border: solid 2px black;\n        border-radius: 5px;\n        height: 40px;\n        padding: 10px;\n        width: 200px;\n    \n    }\n\n    .task-prompt{\n        display: none;\n        background-color: rgb(255, 255, 255);\n        border-radius: 10px;\n        padding: 10px;\n        margin: 0px 100px;\n        text-align: center;\n        justify-content: center;\n    }\n    input{\n        margin: 0px 0;\n        border: solid 2px;\n        border-radius: 5px;\n        font-family: helvetica;\n        width: 250px;\n        height: 20px;\n    }\n    textarea{\n        border: solid 2px;\n        border-radius: 5px;\n        font-family: helvetica;\n        width: 250px;\n    }\n    label{\n        margin: 0px 0;\n    }\n    #entry{\n        margin: 20px 0;\n        display: grid;\n        margin: 50px auto;\n        border: solid 2px black;\n        border-radius: 5px;\n        background-color: rgb(0, 0, 0);\n        color: white;\n        height: 40px;\n        width: 200px;\n        padding: 10px;\n    }\n    h1{\n        font-family:'helvetica';\n        font-size: larger;\n        text-align: center;\n    }\n    h2{\n        font-family:'helvetica';\n        font-size: medium;\n        text-align: center;\n    }\n    p{\n        font-family:'helvetica';\n        font-size: 14px;\n        color: #787878;\n    }\n    .new-title{\n        grid-area: title;\n        text-align: left;\n    }\n    .new-description{\n        grid-area: description;\n        text-align: left;\n        margin: auto;\n    }\n    .new-due-date{\n        grid-area: duedate;\n    }\n    .check-box{\n        grid-area: checkbox;\n        border: solid 2px black;\n        font: inherit;\n        width: 1.20em;\n        height: 1.20em;\n    \n        margin: auto;\n    }\n    .new-task{\n        /* display: none; */\n        display: grid;\n        justify-content: space-between;\n        grid-template-columns: 30px auto auto auto minmax(100px, auto);\n        grid-template-areas: 'checkbox title title duedate expand-new'\n                            'description description description description .'\n                            'description description description description switch-group';\n        padding: 10px;\n        gap: 10px;\n        background-color: rgb(255, 255, 255);\n        border-radius: 10px;\n        margin: 10px 0;\n        text-align: center;\n        border-bottom: solid 4px #5d15e2;\n    }\n    .new-task-shrinked{\n        display: grid;\n        justify-content: space-between;\n        grid-template-columns: 30px auto auto auto minmax(100px, auto);\n        grid-template-areas: 'checkbox title title duedate expand-new';\n        padding: 10px;\n        gap: 10px;\n        background-color: rgb(255, 255, 255);\n        border-radius: 10px;\n        margin: 10px 0;\n        text-align: center;\n        border-bottom: solid 4px #5d15e2;\n    }\n    \n    \n    .unchecked-task{\n        background-color: rgb(255, 255, 255);\n    }\n    .important-task{\n        display: grid;\n        justify-content: space-between;\n        grid-template-columns: 30px auto auto auto minmax(100px, auto);\n        grid-template-areas: 'checkbox title title duedate expand-important'\n                            'description description description description .'\n                            'description description description description switch-group';\n        padding: 10px;\n        gap: 10px;\n        background-color: rgb(255, 255, 255);\n        border-radius: 10px;\n        margin: 10px 0;\n        text-align: center;\n        border-bottom: solid 4px #97e454;\n    }\n    .important-task-shrinked{\n        display: grid;\n        justify-content: space-between;\n        grid-template-columns: 30px auto auto auto minmax(100px, auto);\n        grid-template-areas: 'checkbox title title duedate expand-important';\n        padding: 10px;\n        gap: 10px;\n        background-color: rgb(255, 255, 255);\n        border-radius: 10px;\n        margin: 10px 0;\n        text-align: center;\n        border-bottom: solid 4px #97e454;\n    }\n    .removed-task{\n        display: none;\n    }\n    .visible-element{\n        display: block;\n    }\n    .removed-element{\n        display: none;\n    }\n    .checked-task{\n        display: grid;\n        justify-content: space-between;\n        grid-template-columns: 80px auto auto auto auto;\n        grid-template-areas: 'checkbox title title duedate .';\n        padding: 10px;\n        gap: 10px;\n        background-color: rgb(111, 111, 111);\n        color: white;\n        border-radius: 10px;\n        margin: 10px 0;\n        text-align: center;\n        border-bottom: solid 4px #bfbfbf;\n    }\n    \n    .expand-new{\n        width: 30px;\n        height: 30px;\n        justify-content: end;\n        margin: auto 0 auto auto;\n        border: solid 2px black;\n        border-radius: 5px;\n        background-color: #ffffff;\n        grid-area: expand-new;\n    }\n    .expand-important{\n        width: 30px;\n        height: 30px;\n        justify-content: end;\n        margin: auto 0 auto auto;\n        border: solid 2px black;\n        border-radius: 5px;\n        background-color: #ffffff;\n        grid-area: expand-important;\n    }\n    .expand-new-image{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        margin: auto;\n    }\n    .expand-new-image>img{\n        height: 15px;\n        justify-content: center;\n        align-items: center;\n        margin: auto;\n    }\n    .expand-important-image{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        margin: auto;\n    }\n    .expand-important-image>img{\n        height: 15px;\n        justify-content: center;\n        align-items: center;\n        margin: auto;\n    }\n    #switch-group{\n        justify-self: start;\n        font-weight: bold;\n        border: solid 2px black;\n        border-radius: 5px;\n        grid-area: switch-group;\n        height: 30px;\n        width: 110px;\n        margin: auto 0 auto auto;\n    }\n}"],"sourceRoot":""}]);
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
importantTitle.innerText='Important Tasks'
importantContainer.appendChild(importantTitle)

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
                let expanNewImage = document.createElement('div')
                expanNewImage.innerHTML = '<img src="../src/expand-image.svg" alt="expand-task">'
                expanNewImage.classList.add('expand-new-image')
                expandNew.appendChild(expanNewImage)
                
                expandNew.classList.add('expand-new')

                // Create expand button for Important Task
                let expandImportant = document.createElement('button')
                expandImportant.classList.add('expand-important')         
                let expandImportantImage = document.createElement('div')
                expandImportantImage.innerHTML = '<img src="../src/expand-image.svg" alt="expand-task">'
                expandImportantImage.classList.add('expand-important-image')
                expandImportant.appendChild(expandImportantImage)
                
                // Call task DOM elements
                let importantTask = document.createElement('div') // Stays
                importantTask.classList.add('important-task') // Stays
                mainContainer.appendChild(importantContainer)

                importantContainer.appendChild(importantTask) // Stays

                // Switch Group Button
                let switchGroup = document.createElement('button')
                switchGroup.setAttribute('id', 'switch-group')
                switchGroup.innerText = 'Change Group'
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

                            // newTask.style.backgroundColor = 'red'

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

                if(checkBox.checked && newTask.classList.contains('new-task') || newTask.classList.contains('new-task-shrinked')){
                    newTask.classList.remove('new-task')
                    newTask.classList.remove('new-task-shrinked')
                    newDescription.classList.remove('visible-element')
                    newDescription.classList.add('removed-element')
                    expandNew.classList.remove('expand-new')
                    expandNew.classList.add('removed-element')
                    newTask.classList.add('checked-task')
                    switchGroup.classList.remove('visible-element')
                    switchGroup.classList.add('removed-element')

                    console.log(`this is i ${i}`);
                    // console.log(tasks);
                    console.log(deletedTasks.length);
                    console.log(deletedTasks);
                    
                }else if(checkBox.checked && importantTask.classList.contains('important-task') || importantTask.classList.contains('important-task-shrinked')){

                    importantTask.classList.remove('important-task')
                    importantTask.classList.remove('important-task-shrinked')
                    newDescription.classList.remove('visible-element')
                    newDescription.classList.add('removed-element')
                    expandImportant.classList.remove('expand-important')
                    expandImportant.classList.add('removed-element')
                    importantTask.classList.add('checked-task')
                    switchGroup.classList.remove('visible-element')
                    switchGroup.classList.add('removed-element')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sT0FBTyxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sT0FBTyxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLFlBQVksUUFBUSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxPQUFPLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUss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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5Qjs7QUFFekI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7O0FBRXpCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZDQUE2QyxFQUFFO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsRUFBRTtBQUMvQztBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gICAgXFxuXFxuLmluaXRpYWwtY29udGFpbmVye1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4uaW1wb3J0YW50LWNvbnRhaW5lcntcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmRpc3BsYXktcHJvbXB0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG59XFxuLmJ1dHRvbi1wcm9tcHR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG5cXG59XFxuLm1haW4tY29udGFpbmVye1xcbiAgICBtYXJnaW46IDEwcHggMTAwcHg7XFxufVxcbi50YXNrLXByb21wdHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDBweCAxMDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuaW5wdXR7XFxuICAgIG1hcmdpbjogMHB4IDA7XFxuICAgIGJvcmRlcjogc29saWQgMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG50ZXh0YXJlYXtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1mYW1pbHk6IGhlbHZldGljYTtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbn1cXG5sYWJlbHtcXG4gICAgbWFyZ2luOiAwcHggMDtcXG59XFxuI2VudHJ5e1xcbiAgICBtYXJnaW46IDIwcHggMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XFxuICAgIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuaDF7XFxuICAgIGZvbnQtZmFtaWx5OidoZWx2ZXRpY2EnO1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5oMntcXG4gICAgZm9udC1mYW1pbHk6J2hlbHZldGljYSc7XFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbnB7XFxuICAgIGZvbnQtZmFtaWx5OidoZWx2ZXRpY2EnO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiAjNzg3ODc4O1xcbn1cXG4ubmV3LXRpdGxle1xcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4ubmV3LWRlc2NyaXB0aW9ue1xcbiAgICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcbi5uZXctZHVlLWRhdGV7XFxuICAgIGdyaWQtYXJlYTogZHVlZGF0ZTtcXG59XFxuLmNoZWNrLWJveHtcXG4gICAgZ3JpZC1hcmVhOiBjaGVja2JveDtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggYmxhY2s7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIHdpZHRoOiAxLjIwZW07XFxuICAgIGhlaWdodDogMS4yMGVtO1xcblxcbiAgICBtYXJnaW46IGF1dG87XFxufVxcbi5uZXctdGFza3tcXG4gICAgLyogZGlzcGxheTogbm9uZTsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggYXV0byBhdXRvIGF1dG8gbWlubWF4KDEwMHB4LCBhdXRvKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2NoZWNrYm94IHRpdGxlIHRpdGxlIGR1ZWRhdGUgZXhwYW5kLW5ldydcXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gLidcXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gc3dpdGNoLWdyb3VwJztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDRweCAjNWQxNWUyO1xcbn1cXG4ubmV3LXRhc2stc2hyaW5rZWR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IGF1dG8gYXV0byBhdXRvIG1pbm1heCgxMDBweCwgYXV0byk7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdjaGVja2JveCB0aXRsZSB0aXRsZSBkdWVkYXRlIGV4cGFuZC1uZXcnO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgNHB4ICM1ZDE1ZTI7XFxufVxcblxcblxcbi51bmNoZWNrZWQtdGFza3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG4uaW1wb3J0YW50LXRhc2t7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IGF1dG8gYXV0byBhdXRvIG1pbm1heCgxMDBweCwgYXV0byk7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdjaGVja2JveCB0aXRsZSB0aXRsZSBkdWVkYXRlIGV4cGFuZC1pbXBvcnRhbnQnXFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIC4nXFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIHN3aXRjaC1ncm91cCc7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCA0cHggIzk3ZTQ1NDtcXG59XFxuLmltcG9ydGFudC10YXNrLXNocmlua2Vke1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCBhdXRvIGF1dG8gYXV0byBtaW5tYXgoMTAwcHgsIGF1dG8pO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnY2hlY2tib3ggdGl0bGUgdGl0bGUgZHVlZGF0ZSBleHBhbmQtaW1wb3J0YW50JztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDRweCAjOTdlNDU0O1xcbn1cXG4ucmVtb3ZlZC10YXNre1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4udmlzaWJsZS1lbGVtZW50e1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnJlbW92ZWQtZWxlbWVudHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLmNoZWNrZWQtdGFza3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggYXV0byBhdXRvIGF1dG8gYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2NoZWNrYm94IHRpdGxlIHRpdGxlIGR1ZWRhdGUgLic7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMSwgMTExLCAxMTEpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDRweCAjYmZiZmJmO1xcbn1cXG5cXG4uZXhwYW5kLW5ld3tcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIG1hcmdpbjogYXV0byAwIGF1dG8gYXV0bztcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgZ3JpZC1hcmVhOiBleHBhbmQtbmV3O1xcbn1cXG4uZXhwYW5kLWltcG9ydGFudHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIG1hcmdpbjogYXV0byAwIGF1dG8gYXV0bztcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgZ3JpZC1hcmVhOiBleHBhbmQtaW1wb3J0YW50O1xcbn1cXG4uZXhwYW5kLW5ldy1pbWFnZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuLmV4cGFuZC1uZXctaW1hZ2U+aW1ne1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcbi5leHBhbmQtaW1wb3J0YW50LWltYWdle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG4uZXhwYW5kLWltcG9ydGFudC1pbWFnZT5pbWd7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuI3N3aXRjaC1ncm91cHtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xcbiAgICBncmlkLWFyZWE6IHN3aXRjaC1ncm91cDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMTEwcHg7XFxuICAgIG1hcmdpbjogYXV0byAwIGF1dG8gYXV0bztcXG59XFxuLyogVGFzayBlbGVtZW50cyB2YWx1ZXMgKi9cXG59XFxuXFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XFxuICAgIC5tYWluLWNvbnRhaW5lcntcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCg0MDBweCwgNjAwcHgpIG1pbm1heCg0MDBweCwgNjAwcHgpO1xcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xcbiAgICAgICAgZ2FwOiAzMHB4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLmluaXRpYWwtY29udGFpbmVye1xcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIH1cXG4gICAgLmltcG9ydGFudC1jb250YWluZXJ7XFxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLmRpc3BsYXktcHJvbXB0e1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBcXG4gICAgfVxcbiAgICAuYnV0dG9uLXByb21wdHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBtYXJnaW46IDUwcHggYXV0bztcXG4gICAgICAgIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgXFxuICAgIH1cXG5cXG4gICAgLnRhc2stcHJvbXB0e1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgbWFyZ2luOiAwcHggMTAwcHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcbiAgICBpbnB1dHtcXG4gICAgICAgIG1hcmdpbjogMHB4IDA7XFxuICAgICAgICBib3JkZXI6IHNvbGlkIDJweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7XFxuICAgICAgICB3aWR0aDogMjUwcHg7XFxuICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIH1cXG4gICAgdGV4dGFyZWF7XFxuICAgICAgICBib3JkZXI6IHNvbGlkIDJweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7XFxuICAgICAgICB3aWR0aDogMjUwcHg7XFxuICAgIH1cXG4gICAgbGFiZWx7XFxuICAgICAgICBtYXJnaW46IDBweCAwO1xcbiAgICB9XFxuICAgICNlbnRyeXtcXG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIG1hcmdpbjogNTBweCBhdXRvO1xcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggYmxhY2s7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB9XFxuICAgIGgxe1xcbiAgICAgICAgZm9udC1mYW1pbHk6J2hlbHZldGljYSc7XFxuICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICBoMntcXG4gICAgICAgIGZvbnQtZmFtaWx5OidoZWx2ZXRpY2EnO1xcbiAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgcHtcXG4gICAgICAgIGZvbnQtZmFtaWx5OidoZWx2ZXRpY2EnO1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgY29sb3I6ICM3ODc4Nzg7XFxuICAgIH1cXG4gICAgLm5ldy10aXRsZXtcXG4gICAgICAgIGdyaWQtYXJlYTogdGl0bGU7XFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB9XFxuICAgIC5uZXctZGVzY3JpcHRpb257XFxuICAgICAgICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgfVxcbiAgICAubmV3LWR1ZS1kYXRle1xcbiAgICAgICAgZ3JpZC1hcmVhOiBkdWVkYXRlO1xcbiAgICB9XFxuICAgIC5jaGVjay1ib3h7XFxuICAgICAgICBncmlkLWFyZWE6IGNoZWNrYm94O1xcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggYmxhY2s7XFxuICAgICAgICBmb250OiBpbmhlcml0O1xcbiAgICAgICAgd2lkdGg6IDEuMjBlbTtcXG4gICAgICAgIGhlaWdodDogMS4yMGVtO1xcbiAgICBcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgfVxcbiAgICAubmV3LXRhc2t7XFxuICAgICAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCBhdXRvIGF1dG8gYXV0byBtaW5tYXgoMTAwcHgsIGF1dG8pO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2NoZWNrYm94IHRpdGxlIHRpdGxlIGR1ZWRhdGUgZXhwYW5kLW5ldydcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIC4nXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBzd2l0Y2gtZ3JvdXAnO1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDRweCAjNWQxNWUyO1xcbiAgICB9XFxuICAgIC5uZXctdGFzay1zaHJpbmtlZHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggYXV0byBhdXRvIGF1dG8gbWlubWF4KDEwMHB4LCBhdXRvKTtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdjaGVja2JveCB0aXRsZSB0aXRsZSBkdWVkYXRlIGV4cGFuZC1uZXcnO1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDRweCAjNWQxNWUyO1xcbiAgICB9XFxuICAgIFxcbiAgICBcXG4gICAgLnVuY2hlY2tlZC10YXNre1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICB9XFxuICAgIC5pbXBvcnRhbnQtdGFza3tcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggYXV0byBhdXRvIGF1dG8gbWlubWF4KDEwMHB4LCBhdXRvKTtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdjaGVja2JveCB0aXRsZSB0aXRsZSBkdWVkYXRlIGV4cGFuZC1pbXBvcnRhbnQnXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiAuJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gc3dpdGNoLWdyb3VwJztcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCA0cHggIzk3ZTQ1NDtcXG4gICAgfVxcbiAgICAuaW1wb3J0YW50LXRhc2stc2hyaW5rZWR7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IGF1dG8gYXV0byBhdXRvIG1pbm1heCgxMDBweCwgYXV0byk7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnY2hlY2tib3ggdGl0bGUgdGl0bGUgZHVlZGF0ZSBleHBhbmQtaW1wb3J0YW50JztcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCA0cHggIzk3ZTQ1NDtcXG4gICAgfVxcbiAgICAucmVtb3ZlZC10YXNre1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICAudmlzaWJsZS1lbGVtZW50e1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gICAgLnJlbW92ZWQtZWxlbWVudHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gICAgLmNoZWNrZWQtdGFza3tcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggYXV0byBhdXRvIGF1dG8gYXV0bztcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdjaGVja2JveCB0aXRsZSB0aXRsZSBkdWVkYXRlIC4nO1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTEsIDExMSwgMTExKTtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDRweCAjYmZiZmJmO1xcbiAgICB9XFxuICAgIFxcbiAgICAuZXhwYW5kLW5ld3tcXG4gICAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgICAgICBtYXJnaW46IGF1dG8gMCBhdXRvIGF1dG87XFxuICAgICAgICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgICAgICBncmlkLWFyZWE6IGV4cGFuZC1uZXc7XFxuICAgIH1cXG4gICAgLmV4cGFuZC1pbXBvcnRhbnR7XFxuICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICAgICAgbWFyZ2luOiBhdXRvIDAgYXV0byBhdXRvO1xcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggYmxhY2s7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICAgICAgZ3JpZC1hcmVhOiBleHBhbmQtaW1wb3J0YW50O1xcbiAgICB9XFxuICAgIC5leHBhbmQtbmV3LWltYWdle1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgfVxcbiAgICAuZXhwYW5kLW5ldy1pbWFnZT5pbWd7XFxuICAgICAgICBoZWlnaHQ6IDE1cHg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgIH1cXG4gICAgLmV4cGFuZC1pbXBvcnRhbnQtaW1hZ2V7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICB9XFxuICAgIC5leHBhbmQtaW1wb3J0YW50LWltYWdlPmltZ3tcXG4gICAgICAgIGhlaWdodDogMTVweDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgfVxcbiAgICAjc3dpdGNoLWdyb3Vwe1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggYmxhY2s7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBncmlkLWFyZWE6IHN3aXRjaC1ncm91cDtcXG4gICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgIHdpZHRoOiAxMTBweDtcXG4gICAgICAgIG1hcmdpbjogYXV0byAwIGF1dG8gYXV0bztcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBOzs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCOztBQUUzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTs7QUFFaEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixzQkFB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OEJBQThCO1FBQzlCLCtDQUErQztRQUMvQyxxREFBcUQ7UUFDckQsYUFBYTtRQUNiLFNBQVM7UUFDVCxvQ0FBb0M7UUFDcEMsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGdDQUFnQztJQUNwQzs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osb0JBQW9CO1FBQ3BCLHdCQUF3QjtRQUN4Qix1QkFBdUI7UUFDdkIsa0JBQWtCO1FBQ2xCLHlCQUF5QjtRQUN6QixxQkFBcUI7SUFDekI7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osb0JBQW9CO1FBQ3BCLHdCQUF3QjtRQUN4Qix1QkFBdUI7UUFDdkIsa0JBQWtCO1FBQ2xCLHlCQUF5QjtRQUN6QiwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7UUFDWix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7UUFDWix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLFlBQVk7SUFDaEI7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsdUJBQXVCO1FBQ3ZCLGtCQUFrQjtRQUNsQix1QkFBdUI7UUFDdkIsWUFBWTtRQUNaLFlBQVk7UUFDWix3QkFBd0I7SUFDNUI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAgIFxcblxcbi5pbml0aWFsLWNvbnRhaW5lcntcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmltcG9ydGFudC1jb250YWluZXJ7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5kaXNwbGF5LXByb21wdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxufVxcbi5idXR0b24tcHJvbXB0e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBtYXJnaW46IDUwcHggYXV0bztcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuXFxufVxcbi5tYWluLWNvbnRhaW5lcntcXG4gICAgbWFyZ2luOiAxMHB4IDEwMHB4O1xcbn1cXG4udGFzay1wcm9tcHR7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAwcHggMTAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbmlucHV0e1xcbiAgICBtYXJnaW46IDBweCAwO1xcbiAgICBib3JkZXI6IHNvbGlkIDJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LWZhbWlseTogaGVsdmV0aWNhO1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxudGV4dGFyZWF7XFxuICAgIGJvcmRlcjogc29saWQgMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7XFxuICAgIHdpZHRoOiAyNTBweDtcXG59XFxubGFiZWx7XFxuICAgIG1hcmdpbjogMHB4IDA7XFxufVxcbiNlbnRyeXtcXG4gICAgbWFyZ2luOiAyMHB4IDA7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcbmgxe1xcbiAgICBmb250LWZhbWlseTonaGVsdmV0aWNhJztcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuaDJ7XFxuICAgIGZvbnQtZmFtaWx5OidoZWx2ZXRpY2EnO1xcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5we1xcbiAgICBmb250LWZhbWlseTonaGVsdmV0aWNhJztcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogIzc4Nzg3ODtcXG59XFxuLm5ldy10aXRsZXtcXG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLm5ldy1kZXNjcmlwdGlvbntcXG4gICAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG4ubmV3LWR1ZS1kYXRle1xcbiAgICBncmlkLWFyZWE6IGR1ZWRhdGU7XFxufVxcbi5jaGVjay1ib3h7XFxuICAgIGdyaWQtYXJlYTogY2hlY2tib3g7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICB3aWR0aDogMS4yMGVtO1xcbiAgICBoZWlnaHQ6IDEuMjBlbTtcXG5cXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG4ubmV3LXRhc2t7XFxuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IGF1dG8gYXV0byBhdXRvIG1pbm1heCgxMDBweCwgYXV0byk7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdjaGVja2JveCB0aXRsZSB0aXRsZSBkdWVkYXRlIGV4cGFuZC1uZXcnXFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIC4nXFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIHN3aXRjaC1ncm91cCc7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCA0cHggIzVkMTVlMjtcXG59XFxuLm5ldy10YXNrLXNocmlua2Vke1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCBhdXRvIGF1dG8gYXV0byBtaW5tYXgoMTAwcHgsIGF1dG8pO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnY2hlY2tib3ggdGl0bGUgdGl0bGUgZHVlZGF0ZSBleHBhbmQtbmV3JztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDRweCAjNWQxNWUyO1xcbn1cXG5cXG5cXG4udW5jaGVja2VkLXRhc2t7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuLmltcG9ydGFudC10YXNre1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCBhdXRvIGF1dG8gYXV0byBtaW5tYXgoMTAwcHgsIGF1dG8pO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnY2hlY2tib3ggdGl0bGUgdGl0bGUgZHVlZGF0ZSBleHBhbmQtaW1wb3J0YW50J1xcbiAgICAgICAgICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiAuJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBzd2l0Y2gtZ3JvdXAnO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgNHB4ICM5N2U0NTQ7XFxufVxcbi5pbXBvcnRhbnQtdGFzay1zaHJpbmtlZHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggYXV0byBhdXRvIGF1dG8gbWlubWF4KDEwMHB4LCBhdXRvKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2NoZWNrYm94IHRpdGxlIHRpdGxlIGR1ZWRhdGUgZXhwYW5kLWltcG9ydGFudCc7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCA0cHggIzk3ZTQ1NDtcXG59XFxuLnJlbW92ZWQtdGFza3tcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLnZpc2libGUtZWxlbWVudHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5yZW1vdmVkLWVsZW1lbnR7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5jaGVja2VkLXRhc2t7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MHB4IGF1dG8gYXV0byBhdXRvIGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdjaGVja2JveCB0aXRsZSB0aXRsZSBkdWVkYXRlIC4nO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTEsIDExMSwgMTExKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCA0cHggI2JmYmZiZjtcXG59XFxuXFxuLmV4cGFuZC1uZXd7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBtYXJnaW46IGF1dG8gMCBhdXRvIGF1dG87XFxuICAgIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIGdyaWQtYXJlYTogZXhwYW5kLW5ldztcXG59XFxuLmV4cGFuZC1pbXBvcnRhbnR7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBtYXJnaW46IGF1dG8gMCBhdXRvIGF1dG87XFxuICAgIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIGdyaWQtYXJlYTogZXhwYW5kLWltcG9ydGFudDtcXG59XFxuLmV4cGFuZC1uZXctaW1hZ2V7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcbi5leHBhbmQtbmV3LWltYWdlPmltZ3tcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG4uZXhwYW5kLWltcG9ydGFudC1pbWFnZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuLmV4cGFuZC1pbXBvcnRhbnQtaW1hZ2U+aW1ne1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcbiNzd2l0Y2gtZ3JvdXB7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcXG4gICAgZ3JpZC1hcmVhOiBzd2l0Y2gtZ3JvdXA7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDExMHB4O1xcbiAgICBtYXJnaW46IGF1dG8gMCBhdXRvIGF1dG87XFxufVxcbi8qIFRhc2sgZWxlbWVudHMgdmFsdWVzICovXFxufVxcblxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xcbiAgICAubWFpbi1jb250YWluZXJ7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoNDAwcHgsIDYwMHB4KSBtaW5tYXgoNDAwcHgsIDYwMHB4KTtcXG4gICAgICAgIG1hcmdpbjogMTBweDtcXG4gICAgICAgIGdhcDogMzBweDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuICAgIC5pbml0aWFsLWNvbnRhaW5lcntcXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICB9XFxuICAgIC5pbXBvcnRhbnQtY29udGFpbmVye1xcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIH1cXG4gICAgXFxuICAgIC5kaXNwbGF5LXByb21wdHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgXFxuICAgIH1cXG4gICAgLmJ1dHRvbi1wcm9tcHR7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgbWFyZ2luOiA1MHB4IGF1dG87XFxuICAgICAgICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgIFxcbiAgICB9XFxuXFxuICAgIC50YXNrLXByb21wdHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIG1hcmdpbjogMHB4IDEwMHB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG4gICAgaW5wdXR7XFxuICAgICAgICBtYXJnaW46IDBweCAwO1xcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAycHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBmb250LWZhbWlseTogaGVsdmV0aWNhO1xcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB9XFxuICAgIHRleHRhcmVhe1xcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAycHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBmb250LWZhbWlseTogaGVsdmV0aWNhO1xcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xcbiAgICB9XFxuICAgIGxhYmVse1xcbiAgICAgICAgbWFyZ2luOiAwcHggMDtcXG4gICAgfVxcbiAgICAjZW50cnl7XFxuICAgICAgICBtYXJnaW46IDIwcHggMDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBtYXJnaW46IDUwcHggYXV0bztcXG4gICAgICAgIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgfVxcbiAgICBoMXtcXG4gICAgICAgIGZvbnQtZmFtaWx5OidoZWx2ZXRpY2EnO1xcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgaDJ7XFxuICAgICAgICBmb250LWZhbWlseTonaGVsdmV0aWNhJztcXG4gICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICAgIHB7XFxuICAgICAgICBmb250LWZhbWlseTonaGVsdmV0aWNhJztcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgIGNvbG9yOiAjNzg3ODc4O1xcbiAgICB9XFxuICAgIC5uZXctdGl0bGV7XFxuICAgICAgICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgfVxcbiAgICAubmV3LWRlc2NyaXB0aW9ue1xcbiAgICAgICAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgIH1cXG4gICAgLm5ldy1kdWUtZGF0ZXtcXG4gICAgICAgIGdyaWQtYXJlYTogZHVlZGF0ZTtcXG4gICAgfVxcbiAgICAuY2hlY2stYm94e1xcbiAgICAgICAgZ3JpZC1hcmVhOiBjaGVja2JveDtcXG4gICAgICAgIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xcbiAgICAgICAgZm9udDogaW5oZXJpdDtcXG4gICAgICAgIHdpZHRoOiAxLjIwZW07XFxuICAgICAgICBoZWlnaHQ6IDEuMjBlbTtcXG4gICAgXFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgIH1cXG4gICAgLm5ldy10YXNre1xcbiAgICAgICAgLyogZGlzcGxheTogbm9uZTsgKi9cXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggYXV0byBhdXRvIGF1dG8gbWlubWF4KDEwMHB4LCBhdXRvKTtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdjaGVja2JveCB0aXRsZSB0aXRsZSBkdWVkYXRlIGV4cGFuZC1uZXcnXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiAuJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gc3dpdGNoLWdyb3VwJztcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCA0cHggIzVkMTVlMjtcXG4gICAgfVxcbiAgICAubmV3LXRhc2stc2hyaW5rZWR7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IGF1dG8gYXV0byBhdXRvIG1pbm1heCgxMDBweCwgYXV0byk7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnY2hlY2tib3ggdGl0bGUgdGl0bGUgZHVlZGF0ZSBleHBhbmQtbmV3JztcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCA0cHggIzVkMTVlMjtcXG4gICAgfVxcbiAgICBcXG4gICAgXFxuICAgIC51bmNoZWNrZWQtdGFza3tcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgfVxcbiAgICAuaW1wb3J0YW50LXRhc2t7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IGF1dG8gYXV0byBhdXRvIG1pbm1heCgxMDBweCwgYXV0byk7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnY2hlY2tib3ggdGl0bGUgdGl0bGUgZHVlZGF0ZSBleHBhbmQtaW1wb3J0YW50J1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gLidcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIHN3aXRjaC1ncm91cCc7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgNHB4ICM5N2U0NTQ7XFxuICAgIH1cXG4gICAgLmltcG9ydGFudC10YXNrLXNocmlua2Vke1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCBhdXRvIGF1dG8gYXV0byBtaW5tYXgoMTAwcHgsIGF1dG8pO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2NoZWNrYm94IHRpdGxlIHRpdGxlIGR1ZWRhdGUgZXhwYW5kLWltcG9ydGFudCc7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgNHB4ICM5N2U0NTQ7XFxuICAgIH1cXG4gICAgLnJlbW92ZWQtdGFza3tcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gICAgLnZpc2libGUtZWxlbWVudHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuICAgIC5yZW1vdmVkLWVsZW1lbnR7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgIC5jaGVja2VkLXRhc2t7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MHB4IGF1dG8gYXV0byBhdXRvIGF1dG87XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnY2hlY2tib3ggdGl0bGUgdGl0bGUgZHVlZGF0ZSAuJztcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTExLCAxMTEsIDExMSk7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCA0cHggI2JmYmZiZjtcXG4gICAgfVxcbiAgICBcXG4gICAgLmV4cGFuZC1uZXd7XFxuICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICAgICAgbWFyZ2luOiBhdXRvIDAgYXV0byBhdXRvO1xcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggYmxhY2s7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICAgICAgZ3JpZC1hcmVhOiBleHBhbmQtbmV3O1xcbiAgICB9XFxuICAgIC5leHBhbmQtaW1wb3J0YW50e1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgICAgIG1hcmdpbjogYXV0byAwIGF1dG8gYXV0bztcXG4gICAgICAgIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgICAgIGdyaWQtYXJlYTogZXhwYW5kLWltcG9ydGFudDtcXG4gICAgfVxcbiAgICAuZXhwYW5kLW5ldy1pbWFnZXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgIH1cXG4gICAgLmV4cGFuZC1uZXctaW1hZ2U+aW1ne1xcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICB9XFxuICAgIC5leHBhbmQtaW1wb3J0YW50LWltYWdle1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgfVxcbiAgICAuZXhwYW5kLWltcG9ydGFudC1pbWFnZT5pbWd7XFxuICAgICAgICBoZWlnaHQ6IDE1cHg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgIH1cXG4gICAgI3N3aXRjaC1ncm91cHtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgZ3JpZC1hcmVhOiBzd2l0Y2gtZ3JvdXA7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICB3aWR0aDogMTEwcHg7XFxuICAgICAgICBtYXJnaW46IGF1dG8gMCBhdXRvIGF1dG87XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBjb21wYXJlQXNjLCBmb3JtYXQgfSBmcm9tICdkYXRlLWZucydcblxuXG5cbi8vIEluaXRpYWwgYXJyYXlzXG5sZXQgdGFza3MgPSBbXTtcbmxldCBkZWxldGVkVGFza3MgPSBbXTtcbmxldCBpbXBvcnRhbnQgPSBuZXcgQXJyYXkoKTtcbmltcG9ydGFudC5uYW1lID0gJ2ltcG9ydGFudCdcblxuLy8gQXJyYXkgbmFtZXNcbnRhc2tzLm5hbWUgPSAndGFza3MnXG5kZWxldGVkVGFza3MubmFtZSA9ICdkZWxldGVkVGFza3MnXG5cbi8vIExvYWQgYWxsIGNvbnRhaW5lcnNcbmxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7IC8vIFN0YXlzXG5sZXQgaW5pdGlhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbml0aWFsLWNvbnRhaW5lcicpOyAvLyBTdGF5c1xubGV0IGltcG9ydGFudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbXBvcnRhbnQtY29udGFpbmVyJyk7IC8vIFN0YXlzXG5sZXQgaW1wb3J0YW50VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1wb3J0YW50LWNvbnRhaW5lcj5oMicpXG5sZXQgc2Vjb25kYXJ5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY29uZGFyeS1jb250YWluZXInKTsgLy8gU3RheXNcbmxldCBuZXdUYXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5pdGlhbC1jb250YWluZXI+aDInKVxuaW1wb3J0YW50VGl0bGUuaW5uZXJUZXh0PSdJbXBvcnRhbnQgVGFza3MnXG5pbXBvcnRhbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1wb3J0YW50VGl0bGUpXG5cbi8vIEluaXRpYWwgY2xhc3NcbmNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIH1cbiAgICBjcmVhdGVUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSl7XG5cbiAgICAgICAgLy8gRGVmaW5lIHZhbHVlc1xuICAgICAgICB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZS12YWx1ZScpLnZhbHVlO1xuICAgICAgICBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbi12YWx1ZScpLnZhbHVlO1xuICAgICAgICBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUtdmFsdWUnKS52YWx1ZTtcbiAgICAgICAgXG4gICAgICAgIC8vIFB1c2ggdXNlciB2YWx1ZXMgdG8gYXJyYXlcbiAgICAgICAgbGV0IGN1cnJlbnRUYXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKVxuICAgICAgICB0YXNrcy5wdXNoKGN1cnJlbnRUYXNrKVxuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2codGFza3MpO1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrcy5sZW5ndGgpO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IHRhc2tzLmxlbmd0aCAtIDE7IGkgIT0gdGFza3MubGVuZ3RoOyBpKyspe1xuXG4gICAgICAgICAgICAgICAgaW1wb3J0YW50LnB1c2godGFza3NbaV0pXG4gICAgICAgICAgICAgICAgZGVsZXRlZFRhc2tzLnB1c2godGFza3NbaV0pXG5cbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgbmV3IHRha3MgZnJvbSBET01cbiAgICAgICAgICAgICAgICBsZXQgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIC8vIFN0YXlzXG4gICAgICAgICAgICAgICAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1zaHJpbmtlZCcpIC8vIFN0YXlzXG4gICAgICAgICAgICAgICAgaW5pdGlhbENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrKSAvLyBTdGF5c1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgbmV3IHZhbHVlcyBvZiBlYWNoIGZpZWxkXG4gICAgICAgICAgICAgICAgbGV0IG5ld1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgICAgICAgICAgICAgIG5ld1RpdGxlLmNsYXNzTGlzdC5hZGQoJ25ldy10aXRsZScpXG4gICAgICAgICAgICAgICAgbGV0IG5ld0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgICAgICAgICAgbmV3RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnbmV3LWRlc2NyaXB0aW9uJylcbiAgICAgICAgICAgICAgICBsZXQgbmV3RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAgICAgICAgIG5ld0R1ZURhdGUuY2xhc3NMaXN0LmFkZCgnbmV3LWR1ZS1kYXRlJylcblxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBjaGVja2JveFxuICAgICAgICAgICAgICAgIGxldCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgICAgICAgICAgY2hlY2tCb3guY2xhc3NMaXN0LmFkZCgnY2hlY2stYm94JykgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBleHBhbmQgYnV0dG9uIGZvciBOZXcgVGFza1xuICAgICAgICAgICAgICAgIGxldCBleHBhbmROZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgICAgIGxldCBleHBhbk5ld0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICBleHBhbk5ld0ltYWdlLmlubmVySFRNTCA9ICc8aW1nIHNyYz1cIi4uL3NyYy9leHBhbmQtaW1hZ2Uuc3ZnXCIgYWx0PVwiZXhwYW5kLXRhc2tcIj4nXG4gICAgICAgICAgICAgICAgZXhwYW5OZXdJbWFnZS5jbGFzc0xpc3QuYWRkKCdleHBhbmQtbmV3LWltYWdlJylcbiAgICAgICAgICAgICAgICBleHBhbmROZXcuYXBwZW5kQ2hpbGQoZXhwYW5OZXdJbWFnZSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBleHBhbmROZXcuY2xhc3NMaXN0LmFkZCgnZXhwYW5kLW5ldycpXG5cbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgZXhwYW5kIGJ1dHRvbiBmb3IgSW1wb3J0YW50IFRhc2tcbiAgICAgICAgICAgICAgICBsZXQgZXhwYW5kSW1wb3J0YW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgICAgICBleHBhbmRJbXBvcnRhbnQuY2xhc3NMaXN0LmFkZCgnZXhwYW5kLWltcG9ydGFudCcpICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IGV4cGFuZEltcG9ydGFudEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICBleHBhbmRJbXBvcnRhbnRJbWFnZS5pbm5lckhUTUwgPSAnPGltZyBzcmM9XCIuLi9zcmMvZXhwYW5kLWltYWdlLnN2Z1wiIGFsdD1cImV4cGFuZC10YXNrXCI+J1xuICAgICAgICAgICAgICAgIGV4cGFuZEltcG9ydGFudEltYWdlLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC1pbXBvcnRhbnQtaW1hZ2UnKVxuICAgICAgICAgICAgICAgIGV4cGFuZEltcG9ydGFudC5hcHBlbmRDaGlsZChleHBhbmRJbXBvcnRhbnRJbWFnZSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBDYWxsIHRhc2sgRE9NIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgbGV0IGltcG9ydGFudFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSAvLyBTdGF5c1xuICAgICAgICAgICAgICAgIGltcG9ydGFudFRhc2suY2xhc3NMaXN0LmFkZCgnaW1wb3J0YW50LXRhc2snKSAvLyBTdGF5c1xuICAgICAgICAgICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaW1wb3J0YW50Q29udGFpbmVyKVxuXG4gICAgICAgICAgICAgICAgaW1wb3J0YW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGltcG9ydGFudFRhc2spIC8vIFN0YXlzXG5cbiAgICAgICAgICAgICAgICAvLyBTd2l0Y2ggR3JvdXAgQnV0dG9uXG4gICAgICAgICAgICAgICAgbGV0IHN3aXRjaEdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgICAgICBzd2l0Y2hHcm91cC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N3aXRjaC1ncm91cCcpXG4gICAgICAgICAgICAgICAgc3dpdGNoR3JvdXAuaW5uZXJUZXh0ID0gJ0NoYW5nZSBHcm91cCdcbiAgICAgICAgICAgICAgICBzd2l0Y2hHcm91cC5jbGFzc0xpc3QuYWRkKCdpbml0aWFsJylcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gQXNzaWduIGlucHV0IHZhbHVlcyB0byBlYWNoIGVsZW1lbnRcbiAgICAgICAgICAgICAgICBuZXdUaXRsZS5pbm5lclRleHQgPSB0aXRsZTtcbiAgICAgICAgICAgICAgICBuZXdEZXNjcmlwdGlvbi5pbm5lclRleHQgPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICBuZXdEdWVEYXRlLmlubmVyVGV4dCA9IGR1ZURhdGU7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIEFwcGVuZCBuZXcgdmFsdWVzIHRvIG5ldyB0YXNrIGJsb2NrXG4gICAgICAgICAgICAgICAgbmV3VGFzay5hcHBlbmRDaGlsZChjaGVja0JveClcbiAgICAgICAgICAgICAgICBuZXdUYXNrLmFwcGVuZENoaWxkKG5ld1RpdGxlKVxuICAgICAgICAgICAgICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQobmV3RHVlRGF0ZSlcbiAgICAgICAgICAgICAgICBuZXdUYXNrLmFwcGVuZENoaWxkKG5ld0Rlc2NyaXB0aW9uKVxuICAgICAgICAgICAgICAgIG5ld1Rhc2suYXBwZW5kKHN3aXRjaEdyb3VwKVxuICAgICAgICAgICAgICAgIG5ld1Rhc2suYXBwZW5kKGV4cGFuZE5ldylcblxuICAgICAgICAgICAgICAgIC8vU2hvdyBJbml0aWFsIHRhc2t0IHRpdGxlXG4gICAgICAgICAgICAgICAgLy8gbmV3VGFza1RpdGxlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgICAgICAgICAgbmV3VGFza1RpdGxlLmNsYXNzTGlzdC5yZW1vdmUoJ3JlbW92ZWQtZWxlbWVudCcpXG4gICAgICAgICAgICAgICAgbmV3VGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUtZWxlbWVudCcpXG5cbiAgICAgICAgICAgICAgICAvLyBIaWRlIGV4dGVuZGVkIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgLy8gbmV3RGVzY3JpcHRpb24uc3R5bGUuZGlzcGxheT0nbm9uZScgLy8gSGlkZSBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIG5ld0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUtZWxlbWVudCcpXG4gICAgICAgICAgICAgICAgbmV3RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgncmVtb3ZlZC1lbGVtZW50JylcbiAgICAgICAgICAgICAgICAvLyBzd2l0Y2hHcm91cC5zdHlsZS5kaXNwbGF5PSdub25lJ1xuICAgICAgICAgICAgICAgIHN3aXRjaEdyb3VwLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUtZWxlbWVudCcpXG4gICAgICAgICAgICAgICAgc3dpdGNoR3JvdXAuY2xhc3NMaXN0LmFkZCgncmVtb3ZlZC1lbGVtZW50JylcblxuICAgICAgICAgICAgICAgIC8vIEhpZGUgSW1wb3J0YW50IFRhc2tcbiAgICAgICAgICAgICAgICAvLyBpbXBvcnRhbnRUYXNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICAgICAgICBpbXBvcnRhbnRUYXNrLmNsYXNzTGlzdC5yZW1vdmUoJ2ltcG9ydGFudC10YXNrJylcbiAgICAgICAgICAgICAgICBpbXBvcnRhbnRUYXNrLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZWQtdGFzaycpXG5cbiAgICAgICAgICAgICAgICAvLyBFeHRlbmQgYW5kIGhpZGUgbmV3IHRhc2sgRE9ORVxuICAgICAgICAgICAgICAgIGV4cGFuZE5ldy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXMgY2xvc2VkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VGFzay5jbGFzc0xpc3QuY29udGFpbnMoJ25ldy10YXNrLXNocmlua2VkJykpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2V4cGFuZCBuZXcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEV4cGFuZCBuZXcgYXNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGFzay5jbGFzc0xpc3QucmVtb3ZlKCduZXctdGFzay1zaHJpbmtlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKCduZXctdGFzaycpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaG93IHRhc2sgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEZXNjcmlwdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdyZW1vdmVkLWVsZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUtZWxlbWVudCcpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaG93IHN3aXRjaCBidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hHcm91cC5jbGFzc0xpc3QucmVtb3ZlKCdyZW1vdmVkLWVsZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaEdyb3VwLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUtZWxlbWVudCcpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGlzIG9wZW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYobmV3VGFzay5jbGFzc0xpc3QuY29udGFpbnMoJ25ldy10YXNrJykpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nsb3NlIG5ldycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2hyaW5rIG5ldyB0YXNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGFzay5jbGFzc0xpc3QucmVtb3ZlKCduZXctdGFzaycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1zaHJpbmtlZCcpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBIaWRlIHRhc2sgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEZXNjcmlwdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlLWVsZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZWQtZWxlbWVudCcpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBIaWRlIFN3aXRjaCBidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hHcm91cC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlLWVsZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaEdyb3VwLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZWQtZWxlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEV4dGVuZCBhbmQgaGlkZSBJbXBvcnRhbnQgVGFzayBlbGVtZW50c1xuICAgICAgICAgICAgICAgICAgICBleHBhbmRJbXBvcnRhbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXhwYW5kIGltcG9ydGFudCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpbXBvcnRhbnQgaXMgY2xvc2VkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1wb3J0YW50VGFzay5jbGFzc0xpc3QuY29udGFpbnMoJ2ltcG9ydGFudC10YXNrLXNocmlua2VkJykpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3BlbiBpbXBvcnRhbnQgdGFza1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudFRhc2suY2xhc3NMaXN0LnJlbW92ZSgnaW1wb3J0YW50LXRhc2stc2hyaW5rZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudFRhc2suY2xhc3NMaXN0LmFkZCgnaW1wb3J0YW50LXRhc2snKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2hvdyBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3JlbW92ZWQtZWxlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndmlzaWJsZS1lbGVtZW50JylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNob3cgc3dpdGNoIGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaEdyb3VwLmNsYXNzTGlzdC5yZW1vdmUoJ3JlbW92ZWQtZWxlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoR3JvdXAuY2xhc3NMaXN0LmFkZCgndmlzaWJsZS1lbGVtZW50JylcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaW1wb3J0YW50IGlzIE9wZW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYoaW1wb3J0YW50VGFzay5jbGFzc0xpc3QuY29udGFpbnMoJ2ltcG9ydGFudC10YXNrJykpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nsb3NlIGltcG9ydGFudCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2hyaW5rIGltcG9ydGFudCB0YXNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50VGFzay5jbGFzc0xpc3QucmVtb3ZlKCdpbXBvcnRhbnQtdGFzaycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50VGFzay5jbGFzc0xpc3QuYWRkKCdpbXBvcnRhbnQtdGFzay1zaHJpbmtlZCcpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBuZXdUYXNrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBIaWRlIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGVzY3JpcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZS1lbGVtZW50JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdyZW1vdmVkLWVsZW1lbnQnKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGlkZSBzd2l0Y2ggYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoR3JvdXAuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZS1lbGVtZW50JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hHcm91cC5jbGFzc0xpc3QuYWRkKCdyZW1vdmVkLWVsZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIFN3aXRjaCBncm91cCBcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoR3JvdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKXsgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3dpdGNoIHRvIE5ldyBUYXNrXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzd2l0Y2hHcm91cC5jbGFzc0xpc3QuY29udGFpbnMoJ2ltcG9ydGFudCcpKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTd2l0Y2ggdG8gTmV3IFRhc2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZEltcG9ydGFudC5jbGFzc0xpc3QucmVtb3ZlKCdleHBhbmQtaW1wb3J0YW50JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRJbXBvcnRhbnQuY2xhc3NMaXN0LmFkZCgncmVtb3ZlZC1lbGVtZW50JylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZE5ldy5jbGFzc0xpc3QucmVtb3ZlKCdyZW1vdmVkLWVsZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZE5ldy5jbGFzc0xpc3QuYWRkKCdleHBhbmQtbmV3JylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaEdyb3VwLmNsYXNzTGlzdC5yZW1vdmUoJ2ltcG9ydGFudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoR3JvdXAuY2xhc3NMaXN0LmFkZCgnaW5pdGlhbCcpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hHcm91cC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlLWVsZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaEdyb3VwLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZWQtZWxlbWVudCcpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnRUYXNrLmNsYXNzTGlzdC5yZW1vdmUoJ2ltcG9ydGFudC10YXNrJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnRUYXNrLmNsYXNzTGlzdC5yZW1vdmUoJ2ltcG9ydGFudC10YXNrLXNocmlua2VkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnRUYXNrLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZWQtdGFzaycpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUYXNrLmNsYXNzTGlzdC5yZW1vdmUoJ3JlbW92ZWQtdGFzaycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGFzay5jbGFzc0xpc3QucmVtb3ZlKCduZXctdGFzaycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1zaHJpbmtlZCcpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUYXNrLmFwcGVuZENoaWxkKG5ld1RpdGxlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQobmV3RGVzY3JpcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGFzay5hcHBlbmRDaGlsZChuZXdEdWVEYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQoY2hlY2tCb3gpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGFzay5hcHBlbmQoc3dpdGNoR3JvdXApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGFzay5hcHBlbmQoZXhwYW5kSW1wb3J0YW50KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGVzY3JpcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZS1lbGVtZW50JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdyZW1vdmVkLWVsZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vU3dpdGNoIHRvIEltcG9ydGFudCBUYXNrXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihzd2l0Y2hHcm91cC5jbGFzc0xpc3QuY29udGFpbnMoJ2luaXRpYWwnKSl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU3dpdGNoZWQgdG8gSW1wb3J0YW50IFRhc2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbXBvcnRhbnQubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbXBvcnRhbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kSW1wb3J0YW50LmNsYXNzTGlzdC5yZW1vdmUoJ3JlbW92ZWQtZWxlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kSW1wb3J0YW50LmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC1pbXBvcnRhbnQnKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kTmV3LmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZC1uZXcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZE5ldy5jbGFzc0xpc3QuYWRkKCdyZW1vdmVkLWVsZW1lbnQnKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoR3JvdXAuY2xhc3NMaXN0LnJlbW92ZSgnaW5pdGlhbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoR3JvdXAuY2xhc3NMaXN0LmFkZCgnaW1wb3J0YW50JylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaEdyb3VwLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUtZWxlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoR3JvdXAuY2xhc3NMaXN0LmFkZCgncmVtb3ZlZC1lbGVtZW50JylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Rhc2suY2xhc3NMaXN0LnJlbW92ZSgnbmV3LXRhc2snKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Rhc2suY2xhc3NMaXN0LnJlbW92ZSgnbmV3LXRhc2stc2hyaW5rZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Rhc2suY2xhc3NMaXN0LmFkZCgncmVtb3ZlZC10YXNrJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudFRhc2suY2xhc3NMaXN0LnJlbW92ZSgncmVtb3ZlZC10YXNrJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnRUYXNrLmNsYXNzTGlzdC5yZW1vdmUoJ2ltcG9ydGFudC10YXNrJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnRUYXNrLmNsYXNzTGlzdC5hZGQoJ2ltcG9ydGFudC10YXNrLXNocmlua2VkJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudFRhc2suYXBwZW5kQ2hpbGQobmV3VGl0bGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50VGFzay5hcHBlbmRDaGlsZChuZXdEZXNjcmlwdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnRUYXNrLmFwcGVuZENoaWxkKG5ld0R1ZURhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50VGFzay5hcHBlbmRDaGlsZChjaGVja0JveClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnRUYXNrLmFwcGVuZChzd2l0Y2hHcm91cClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnRUYXNrLmFwcGVuZChleHBhbmRJbXBvcnRhbnQpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEZXNjcmlwdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlLWVsZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZWQtZWxlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0YXNrIGZ1bmN0aW9uYWxpdHkgKGNoZWNrYm94KVxuICAgICAgICAgICAgICAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgaWYoY2hlY2tCb3guY2hlY2tlZCAmJiBuZXdUYXNrLmNsYXNzTGlzdC5jb250YWlucygnbmV3LXRhc2snKSB8fCBuZXdUYXNrLmNsYXNzTGlzdC5jb250YWlucygnbmV3LXRhc2stc2hyaW5rZWQnKSl7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Rhc2suY2xhc3NMaXN0LnJlbW92ZSgnbmV3LXRhc2snKVxuICAgICAgICAgICAgICAgICAgICBuZXdUYXNrLmNsYXNzTGlzdC5yZW1vdmUoJ25ldy10YXNrLXNocmlua2VkJylcbiAgICAgICAgICAgICAgICAgICAgbmV3RGVzY3JpcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZS1lbGVtZW50JylcbiAgICAgICAgICAgICAgICAgICAgbmV3RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgncmVtb3ZlZC1lbGVtZW50JylcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kTmV3LmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZC1uZXcnKVxuICAgICAgICAgICAgICAgICAgICBleHBhbmROZXcuY2xhc3NMaXN0LmFkZCgncmVtb3ZlZC1lbGVtZW50JylcbiAgICAgICAgICAgICAgICAgICAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKCdjaGVja2VkLXRhc2snKVxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hHcm91cC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlLWVsZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hHcm91cC5jbGFzc0xpc3QuYWRkKCdyZW1vdmVkLWVsZW1lbnQnKVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGB0aGlzIGlzIGkgJHtpfWApO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXNrcyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRlbGV0ZWRUYXNrcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkZWxldGVkVGFza3MpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihjaGVja0JveC5jaGVja2VkICYmIGltcG9ydGFudFRhc2suY2xhc3NMaXN0LmNvbnRhaW5zKCdpbXBvcnRhbnQtdGFzaycpIHx8IGltcG9ydGFudFRhc2suY2xhc3NMaXN0LmNvbnRhaW5zKCdpbXBvcnRhbnQtdGFzay1zaHJpbmtlZCcpKXtcblxuICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnRUYXNrLmNsYXNzTGlzdC5yZW1vdmUoJ2ltcG9ydGFudC10YXNrJylcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50VGFzay5jbGFzc0xpc3QucmVtb3ZlKCdpbXBvcnRhbnQtdGFzay1zaHJpbmtlZCcpXG4gICAgICAgICAgICAgICAgICAgIG5ld0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUtZWxlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgIG5ld0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZWQtZWxlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZEltcG9ydGFudC5jbGFzc0xpc3QucmVtb3ZlKCdleHBhbmQtaW1wb3J0YW50JylcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kSW1wb3J0YW50LmNsYXNzTGlzdC5hZGQoJ3JlbW92ZWQtZWxlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydGFudFRhc2suY2xhc3NMaXN0LmFkZCgnY2hlY2tlZC10YXNrJylcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoR3JvdXAuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZS1lbGVtZW50JylcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoR3JvdXAuY2xhc3NMaXN0LmFkZCgncmVtb3ZlZC1lbGVtZW50JylcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHRoaXMgaXMgaSAke2l9YCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRhc2tzKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGVsZXRlZFRhc2tzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRlbGV0ZWRUYXNrcyk7XG5cbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vdCBjaGVja2VkIGJpdGNoJyk7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Rhc2suY2xhc3NMaXN0LmFkZCgndW5jaGVja2VkLXRhc2snKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAvLyBDbGVhbiBpbnB1dCBmaWVsZHNcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUtdmFsdWUnKS52YWx1ZSA9ICcnXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uLXZhbHVlJykudmFsdWUgPSAnJ1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlLXZhbHVlJykudmFsdWUgPSAnJ1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSGlkZSB0YXNrIHByb21wdFxuICAgICAgICBsZXQgdGFza1Byb21wdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXByb21wdCcpXG4gICAgICAgIHRhc2tQcm9tcHQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIH1cbn1cblxuLy8gRGlzcGxheSB0YXNrIHByb21wdFxuZnVuY3Rpb24gZGlzcGxheVByb21wdCgpe1xuICAgIGxldCB0YXNrUHJvbXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stcHJvbXB0JylcbiAgICB0YXNrUHJvbXB0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG59XG5cbmxldCBidXR0b25EaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1wcm9tcHQnKTtcblxuYnV0dG9uRGlzcGxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlQcm9tcHQpXG5cbi8vIEVudGVyIHRhc2sgcHJvbXB0XG5sZXQgdGVzdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRyeScpO1xuXG50ZXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBuZXcgVGFzaygpLmNyZWF0ZVRhc2soKVxufSk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==