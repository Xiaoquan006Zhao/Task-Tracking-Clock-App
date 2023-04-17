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

/***/ "./src/inputControl.js":
/*!*****************************!*\
  !*** ./src/inputControl.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initInputControl\": () => (/* binding */ initInputControl)\n/* harmony export */ });\n// on keyDown event for input\nfunction onInputTaskDecription(e) {\n  var key = e.key;\n  var taskInput = e.target;\n  var taskDescription = e.target.value;\n  if (taskDescription !== \"\") {\n    buttons.clearInput.classList.remove(\"hidden\");\n  }\n  if (taskDescription === \"\") {\n    buttons.clearInput.classList.add(\"hidden\");\n  }\n  if (key === \"Enter\") {\n    e.preventDefault();\n    if (!validateInputText(taskDescription, taskInput)) {\n      return;\n    }\n    buttons.start.click();\n  } else if (e.ctrlKey && key === \"-\") {\n    e.preventDefault();\n    buttons.today.click();\n  } else if (e.ctrlKey && key === \"=\") {\n    e.preventDefault();\n    buttons.tomorrow.click();\n  } else if (key === \"Escape\") {\n    e.preventDefault();\n    taskInput.value = \"\";\n    taskInput.focus();\n    buttons.clearInput.classList.add(\"hidden\");\n  }\n}\nfunction onInputGlobal(e) {\n  var key = e.key;\n  switch (key) {\n    case \"Shift\":\n      if (timerProperty.timerRunning) {\n        e.preventDefault();\n        buttons.start.click();\n      }\n      break;\n    case \"`\":\n      e.preventDefault();\n      document.querySelector(\".todo-wrapper\").classList.toggle(\"hidden\");\n      break;\n    case \"Tab\":\n      e.preventDefault();\n      document.querySelector(\"#task-input\").focus();\n      break;\n    case \"m\":\n      if (e.ctrlKey) {\n        e.preventDefault();\n        buttons.moveToToday.click();\n      }\n  }\n}\nfunction initInputControl() {\n  document.querySelector(\"#task-input\").addEventListener(\"keyup\", onInputTaskDecription);\n  document.addEventListener(\"keydown\", onInputGlobal);\n}\n\n//# sourceURL=webpack://task-tracking-clock-app/./src/inputControl.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/inputControl.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;