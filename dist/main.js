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

/***/ "./src/browserStorage.js":
/*!*******************************!*\
  !*** ./src/browserStorage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToListAndStorage\": () => (/* binding */ addToListAndStorage),\n/* harmony export */   \"initStorage\": () => (/* binding */ initStorage),\n/* harmony export */   \"removeFromListAndStorage\": () => (/* binding */ removeFromListAndStorage),\n/* harmony export */   \"updateStorage\": () => (/* binding */ updateStorage)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _taskTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskTable */ \"./src/taskTable.js\");\n\n\n\nfunction updateStorage(list) {\n  localStorage.setItem(list.tag, JSON.stringify(list.listMemory));\n}\nfunction removeFromListAndStorage(list, item) {\n  var index = list.listMemory.indexOf(item);\n  if (index !== -1) {\n    list.listMemory.splice(index, 1);\n  }\n  updateStorage(list);\n}\nfunction addToListAndStorage(list, item) {\n  list.listMemory.push(item);\n  updateStorage(list);\n}\nfunction initList(tag, list) {\n  if (localStorage.getItem(tag) === null) {\n    list.listMemory = [];\n  } else {\n    list.listMemory = JSON.parse(localStorage.getItem(tag));\n  }\n  if (list.tag !== \"taskList\") {\n    list.listMemory.forEach(function (todo) {\n      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createTodo)(list.listElement, todo);\n    });\n  } else {\n    list.listMemory.forEach(function (task) {\n      task.startTime = new Date(task.startTime);\n      task.endTime = new Date(task.endTime);\n      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.updateTotalTime)(task.duration);\n      (0,_taskTable__WEBPACK_IMPORTED_MODULE_1__.addTaskToTable)(task);\n    });\n  }\n}\nfunction initStorage() {\n  Object.values(_utils__WEBPACK_IMPORTED_MODULE_0__.List).forEach(function (l) {\n    initList(l.tag, l);\n  });\n}\n\n//# sourceURL=webpack://task-tracking-clock-app/./src/browserStorage.js?");

/***/ }),

/***/ "./src/buttons/buttons.js":
/*!********************************!*\
  !*** ./src/buttons/buttons.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buttons\": () => (/* binding */ buttons),\n/* harmony export */   \"initButton\": () => (/* binding */ initButton),\n/* harmony export */   \"startButton\": () => (/* binding */ startButton)\n/* harmony export */ });\n/* harmony import */ var _onclickHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onclickHelpers */ \"./src/buttons/onclickHelpers.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main */ \"./src/main.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\n\n\nvar buttons = {\n  start: document.querySelector(\"#start-button\"),\n  todo: document.querySelector(\"#todo-button\"),\n  newDay: document.querySelector(\"#newDay-button\"),\n  clearInput: document.querySelector(\"#clear-input-button\"),\n  todoList: {\n    morning: document.querySelector(\"#morning-button\"),\n    afternoon: document.querySelector(\"#afternoon-button\"),\n    night: document.querySelector(\"#night-button\")\n  },\n  deleteAll: {\n    morning: document.querySelector(\"#delete-all-morning-button\"),\n    afternoon: document.querySelector(\"#delete-all-afternoon-button\"),\n    night: document.querySelector(\"#delete-all-night-button\")\n  }\n};\nfunction startButton(start) {\n  if (start) {\n    buttons.start.textContent = \"Stop\";\n    buttons.start.classList.add(\"timer-starts\");\n  } else {\n    buttons.start.textContent = \"Start\";\n    buttons.start.classList.remove(\"timer-starts\");\n  }\n}\nfunction initListButtons(list, index) {\n  if (index !== 3) {\n    Object.values(buttons.deleteAll)[index].addEventListener(\"click\", function (e) {\n      _onclickHelpers__WEBPACK_IMPORTED_MODULE_0__.deleteAll(list);\n    });\n    Object.values(buttons.todoList)[index].addEventListener(\"click\", function (e) {\n      _onclickHelpers__WEBPACK_IMPORTED_MODULE_0__.addtoTodo(list);\n    });\n  }\n}\nfunction initButton() {\n  Object.values(_utils__WEBPACK_IMPORTED_MODULE_2__.List).forEach(function (l, index) {\n    initListButtons(l, index);\n  });\n  buttons.clearInput.addEventListener(\"click\", _main__WEBPACK_IMPORTED_MODULE_1__.resetUI);\n  buttons.newDay.addEventListener(\"click\", _onclickHelpers__WEBPACK_IMPORTED_MODULE_0__.clearTask);\n  buttons.todo.addEventListener(\"click\", function (e) {\n    document.querySelector(\".todo-wrapper\").classList.remove(\"hidden\");\n  });\n}\n\n//# sourceURL=webpack://task-tracking-clock-app/./src/buttons/buttons.js?");

/***/ }),

/***/ "./src/buttons/onclickHelpers.js":
/*!***************************************!*\
  !*** ./src/buttons/onclickHelpers.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addtoTodo\": () => (/* binding */ addtoTodo),\n/* harmony export */   \"clearTask\": () => (/* binding */ clearTask),\n/* harmony export */   \"deleteAll\": () => (/* binding */ deleteAll)\n/* harmony export */ });\n/* harmony import */ var _browserStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../browserStorage */ \"./src/browserStorage.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main */ \"./src/main.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\n\n\n\n\n// on click function for deleteAll today/tomorrow\nfunction deleteAll(list) {\n  while (list.listElement.firstElementChild) {\n    var task = list.listElement.firstElementChild.textContent;\n    (0,_browserStorage__WEBPACK_IMPORTED_MODULE_0__.removeFromListAndStorage)(list, task);\n    list.listElement.removeChild(list.listElement.firstElementChild);\n  }\n}\n\n// on click function for newDay\nfunction clearTask() {\n  var trs = document.querySelector(\"tbody\").querySelectorAll(\"tr\");\n  Array.from(trs).forEach(function (tr) {\n    if (tr.classList.contains(\"task-row\")) {\n      tr.remove();\n    }\n  });\n  _utils__WEBPACK_IMPORTED_MODULE_2__.List.task.listMemory = [];\n  (0,_browserStorage__WEBPACK_IMPORTED_MODULE_0__.updateStorage)(_utils__WEBPACK_IMPORTED_MODULE_2__.List.task);\n  (0,_utils__WEBPACK_IMPORTED_MODULE_2__.clearTotalTime)();\n}\n\n// on click function for today/tomorrow add\nfunction addtoTodo(list) {\n  var lis = list.listElement.querySelectorAll(\"li\");\n  var lisText = Array.from(lis).map(function (li) {\n    return li.textContent;\n  });\n  var taskDescription = _utils__WEBPACK_IMPORTED_MODULE_2__.Input.task.value.trim();\n  if (taskDescription && !lisText.includes(taskDescription)) {\n    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.createTodo)(list.listElement, taskDescription);\n  } else {\n    alert(\"tasks empty or already existed\");\n    return;\n  }\n  (0,_browserStorage__WEBPACK_IMPORTED_MODULE_0__.addToListAndStorage)(list, taskDescription);\n  (0,_main__WEBPACK_IMPORTED_MODULE_1__.resetUI)();\n}\n\n//# sourceURL=webpack://task-tracking-clock-app/./src/buttons/onclickHelpers.js?");

/***/ }),

/***/ "./src/inputControl.js":
/*!*****************************!*\
  !*** ./src/inputControl.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initInputControl\": () => (/* binding */ initInputControl)\n/* harmony export */ });\n/* harmony import */ var _buttons_buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons/buttons */ \"./src/buttons/buttons.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _timerProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timerProperty */ \"./src/timerProperty.js\");\n\n\n\n\n// on keyDown event for input\nfunction onInputTaskDecription(e) {\n  var key = e.key;\n  var taskDescription = e.target.value;\n  if (taskDescription !== \"\") {\n    _buttons_buttons__WEBPACK_IMPORTED_MODULE_0__.buttons.clearInput.classList.remove(\"hidden\");\n  }\n  if (taskDescription === \"\") {\n    _buttons_buttons__WEBPACK_IMPORTED_MODULE_0__.buttons.clearInput.classList.add(\"hidden\");\n  }\n  if (key === \"Enter\") {\n    e.preventDefault();\n    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.validateInputText)(taskDescription, _utils__WEBPACK_IMPORTED_MODULE_1__.Input.task)) {\n      return;\n    }\n    _buttons_buttons__WEBPACK_IMPORTED_MODULE_0__.buttons.start.click();\n  } else if (e.ctrlKey && key === \"8\") {\n    e.preventDefault();\n    _buttons_buttons__WEBPACK_IMPORTED_MODULE_0__.buttons.todoList.morning.click();\n  } else if (e.ctrlKey && key === \"9\") {\n    e.preventDefault();\n    _buttons_buttons__WEBPACK_IMPORTED_MODULE_0__.buttons.todoList.afternoon.click();\n  } else if (e.ctrlKey && key === \"0\") {\n    e.preventDefault();\n    _buttons_buttons__WEBPACK_IMPORTED_MODULE_0__.buttons.todoList.night.click();\n  } else if (key === \"Escape\") {\n    e.preventDefault();\n    _utils__WEBPACK_IMPORTED_MODULE_1__.Input.task.value = \"\";\n    _utils__WEBPACK_IMPORTED_MODULE_1__.Input.task.focus();\n    _buttons_buttons__WEBPACK_IMPORTED_MODULE_0__.buttons.clearInput.classList.add(\"hidden\");\n  }\n}\nfunction onInputGlobal(e) {\n  var key = e.key;\n  switch (key) {\n    case \"Shift\":\n      if (_timerProperty__WEBPACK_IMPORTED_MODULE_2__.timerProperty.timerRunning) {\n        e.preventDefault();\n        _buttons_buttons__WEBPACK_IMPORTED_MODULE_0__.buttons.start.click();\n      }\n      break;\n    case \"`\":\n      e.preventDefault();\n      document.querySelector(\".todo-wrapper\").classList.toggle(\"hidden\");\n      break;\n    case \"Tab\":\n      e.preventDefault();\n      document.querySelector(\"#task-input\").focus();\n      break;\n    case \"m\":\n      if (e.ctrlKey) {\n        e.preventDefault();\n        _buttons_buttons__WEBPACK_IMPORTED_MODULE_0__.buttons.moveToToday.click();\n      }\n  }\n}\nfunction initInputControl() {\n  document.querySelector(\"#task-input\").addEventListener(\"keyup\", onInputTaskDecription);\n  document.addEventListener(\"keydown\", onInputGlobal);\n}\n\n//# sourceURL=webpack://task-tracking-clock-app/./src/inputControl.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resetUI\": () => (/* binding */ resetUI)\n/* harmony export */ });\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _buttons_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons/buttons */ \"./src/buttons/buttons.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _taskTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskTable */ \"./src/taskTable.js\");\n/* harmony import */ var _inputControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inputControl */ \"./src/inputControl.js\");\n/* harmony import */ var _browserStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./browserStorage */ \"./src/browserStorage.js\");\n/* harmony import */ var _timerProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timerProperty */ \"./src/timerProperty.js\");\n\n\n\n\n\n\n\n_buttons_buttons__WEBPACK_IMPORTED_MODULE_1__.buttons.start.addEventListener(\"click\", function (e) {\n  if (!_timerProperty__WEBPACK_IMPORTED_MODULE_6__.timerProperty.timerRunning) {\n    startTimer();\n  } else {\n    clearInterval(_timerProperty__WEBPACK_IMPORTED_MODULE_6__.timerProperty.timerId);\n    stopTimer();\n  }\n});\n\n// start Timer by setting start button, count, and current task\nfunction startTimer() {\n  (0,_timerProperty__WEBPACK_IMPORTED_MODULE_6__.startTimerProperty)();\n\n  // adding current task\n  var task = {\n    description: _utils__WEBPACK_IMPORTED_MODULE_2__.Input.task.value,\n    category: _utils__WEBPACK_IMPORTED_MODULE_2__.Input.category.value,\n    startTime: _timerProperty__WEBPACK_IMPORTED_MODULE_6__.timerProperty.startTime\n  };\n  _utils__WEBPACK_IMPORTED_MODULE_2__.List.task.listMemory.push(task);\n  resetUI();\n  document.querySelector(\"#current-task\").textContent = \"Current Task: \".concat((0,_utils__WEBPACK_IMPORTED_MODULE_2__.currentTask)().description);\n}\nfunction stopTimer() {\n  (0,_timerProperty__WEBPACK_IMPORTED_MODULE_6__.stopTimerProperty)();\n  resetUI();\n\n  // add current task to table\n  (0,_taskTable__WEBPACK_IMPORTED_MODULE_3__.addTaskToTable)();\n  (0,_browserStorage__WEBPACK_IMPORTED_MODULE_5__.updateStorage)(_utils__WEBPACK_IMPORTED_MODULE_2__.List.task);\n}\nfunction deleteTodo(e, list) {\n  var clicked = e.target;\n  if (clicked.closest(\".remove-item\")) {\n    var li = e.target.parentElement.parentElement;\n    var taskText = li.textContent;\n    (0,_browserStorage__WEBPACK_IMPORTED_MODULE_5__.removeFromListAndStorage)(list, taskText);\n    li.remove();\n  }\n  if (clicked.nodeName === \"LI\") {\n    resetUI();\n    _utils__WEBPACK_IMPORTED_MODULE_2__.Input.task.value = clicked.textContent;\n  }\n}\nfunction init() {\n  // click out todo wrapper\n  document.addEventListener(\"click\", function (e) {\n    if (e.target.classList.contains(\"todo-wrapper\")) {\n      document.querySelector(\".todo-wrapper\").classList.add(\"hidden\");\n    }\n  });\n\n  // initalize event listener for todo lists\n  _utils__WEBPACK_IMPORTED_MODULE_2__.List.morning.listElement.addEventListener(\"click\", function (e) {\n    deleteTodo(e, _utils__WEBPACK_IMPORTED_MODULE_2__.List.morning);\n  });\n  _utils__WEBPACK_IMPORTED_MODULE_2__.List.afternoon.listElement.addEventListener(\"click\", function (e) {\n    deleteTodo(e, _utils__WEBPACK_IMPORTED_MODULE_2__.List.afternoon);\n  });\n  _utils__WEBPACK_IMPORTED_MODULE_2__.List.night.listElement.addEventListener(\"click\", function (e) {\n    deleteTodo(e, _utils__WEBPACK_IMPORTED_MODULE_2__.List.night);\n  });\n  document.querySelector(\"tbody\").addEventListener(\"click\", function (e) {\n    var taskTr = e.target.closest(\".task-row\");\n    if (taskTr) {\n      var columns = taskTr.querySelectorAll(\"td\");\n      _utils__WEBPACK_IMPORTED_MODULE_2__.Input.task.value = columns[0].textContent;\n      _utils__WEBPACK_IMPORTED_MODULE_2__.Input.category.value = columns[1].textContent;\n      _utils__WEBPACK_IMPORTED_MODULE_2__.Input.task.focus();\n    }\n  });\n  (0,_buttons_buttons__WEBPACK_IMPORTED_MODULE_1__.initButton)();\n  (0,_taskTable__WEBPACK_IMPORTED_MODULE_3__.initTable)();\n  (0,_browserStorage__WEBPACK_IMPORTED_MODULE_5__.initStorage)();\n  (0,_inputControl__WEBPACK_IMPORTED_MODULE_4__.initInputControl)();\n}\nfunction resetUI() {\n  _utils__WEBPACK_IMPORTED_MODULE_2__.Input.task.value = \"\";\n  _utils__WEBPACK_IMPORTED_MODULE_2__.Input.task.focus();\n  _buttons_buttons__WEBPACK_IMPORTED_MODULE_1__.buttons.clearInput.classList.add(\"hidden\");\n  document.querySelector(\".todo-wrapper\").classList.add(\"hidden\");\n  document.querySelector(\"#current-task\").textContent = \"Current Task:\";\n  document.querySelector(\"#record-time\").textContent = \"00:00:00\";\n}\ninit();\n\n//# sourceURL=webpack://task-tracking-clock-app/./src/main.js?");

/***/ }),

/***/ "./src/taskTable.js":
/*!**************************!*\
  !*** ./src/taskTable.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTaskToTable\": () => (/* binding */ addTaskToTable),\n/* harmony export */   \"initTable\": () => (/* binding */ initTable)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _browserStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browserStorage */ \"./src/browserStorage.js\");\n\n\n\nfunction deleteTaskFromTable(e) {\n  e.stopPropagation();\n  var tr = e.target.closest(\"tr\");\n  var trs = document.querySelector(\"tbody\").querySelectorAll(\"tr\");\n  var index = Array.from(trs).indexOf(tr);\n  if (index !== -1) {\n    // second boolean is for plus or minus\n    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.updateTotalTime)(_utils__WEBPACK_IMPORTED_MODULE_0__.List.task.listMemory[index].duration, true);\n    _utils__WEBPACK_IMPORTED_MODULE_0__.List.task.listMemory.splice(index, 1);\n    (0,_browserStorage__WEBPACK_IMPORTED_MODULE_1__.updateStorage)(_utils__WEBPACK_IMPORTED_MODULE_0__.List.task);\n    tr.remove();\n  }\n}\nfunction addTaskToTable(taskToAdd) {\n  var task = taskToAdd ? taskToAdd : (0,_utils__WEBPACK_IMPORTED_MODULE_0__.currentTask)();\n  var tr = document.createElement(\"tr\");\n  tr.classList.add(\"task-row\");\n  var tdTask = document.createElement(\"td\");\n  var tdCategory = document.createElement(\"td\");\n  var tdDuration = document.createElement(\"td\");\n  var tdStart = document.createElement(\"td\");\n  var tdEnd = document.createElement(\"td\");\n  tr.append(tdTask, tdCategory, tdDuration, tdStart, tdEnd);\n  tdTask.appendChild(document.createTextNode(task.description));\n  tdCategory.appendChild(document.createTextNode(task.category));\n  tdDuration.appendChild(document.createTextNode((0,_utils__WEBPACK_IMPORTED_MODULE_0__.formatTime)(task.duration)));\n  tdStart.appendChild(document.createTextNode(task.startTime.toLocaleTimeString(\"en-US\")));\n  tdEnd.appendChild(document.createTextNode(task.endTime.toLocaleTimeString(\"en-US\")));\n  tr.addEventListener(\"mouseenter\", function (e) {\n    var button = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createButton)(\"remove-item btn-link text-red\");\n    button.classList.add(\"remove-task\");\n    button.addEventListener(\"click\", deleteTaskFromTable);\n    tr.firstChild.appendChild(button);\n  });\n  tr.addEventListener(\"mouseout\", function (e) {\n    var tr = e.currentTarget;\n    var relatedTarget = e.relatedTarget;\n\n    // Check if the relatedTarget is a child of BodyTr\n    if (!tr.contains(relatedTarget)) {\n      var firstTd = e.currentTarget.firstChild;\n      firstTd.removeChild(firstTd.lastChild);\n    }\n  });\n  document.querySelector(\"tbody\").insertBefore(tr, document.querySelector(\"#aggreated-data\"));\n}\n\n// ------------------------------  Filter Starts -----------------------------------------------\n\nfunction filterDescription(filterValue) {\n  var trTasks = document.querySelector(\"tbody\").querySelectorAll(\"tr\");\n  trTasks = Array.from(trTasks);\n  trTasks = trTasks.slice(0, -1);\n  var filteredTotalTime = \"00:00:00\";\n  trTasks.forEach(function (task) {\n    var taskDescription = task.firstElementChild.textContent;\n    var taskDuration = task.querySelector(\":nth-child(3)\").textContent;\n    if (taskDescription.includes(filterValue)) {\n      task.style.display = \"\";\n      filteredTotalTime = addTimes(filteredTotalTime, taskDuration);\n    } else {\n      task.style.display = \"none\";\n    }\n  });\n  document.querySelector(\"#total-time\").textContent = filteredTotalTime;\n}\nfunction filterCategory(filterValue) {\n  var trTasks = document.querySelector(\"tbody\").querySelectorAll(\"tr\");\n  trTasks = Array.from(trTasks);\n  trTasks = trTasks.slice(0, -1);\n  var filteredTotalTime = \"00:00:00\";\n  trTasks.forEach(function (task) {\n    var taskCategory = task.querySelector(\":nth-child(2)\").textContent;\n    var taskDuration = task.querySelector(\":nth-child(3)\").textContent;\n    if (filterValue === \"----\" || taskCategory.includes(filterValue)) {\n      task.style.display = \"\";\n      filteredTotalTime = addTimes(filteredTotalTime, taskDuration);\n    } else {\n      task.style.display = \"none\";\n    }\n  });\n  document.querySelector(\"#total-time\").textContent = filteredTotalTime;\n}\nfunction addTimes(timeString1, timeString2) {\n  var timeParts1 = timeString1.split(\":\");\n  var hours1 = parseInt(timeParts1[0]);\n  var minutes1 = parseInt(timeParts1[1]);\n  var seconds1 = parseInt(timeParts1[2]);\n  var timeParts2 = timeString2.split(\":\");\n  var hours2 = parseInt(timeParts2[0]);\n  var minutes2 = parseInt(timeParts2[1]);\n  var seconds2 = parseInt(timeParts2[2]);\n  var totalSeconds = (hours1 + hours2) * 3600 + (minutes1 + minutes2) * 60 + seconds1 + seconds2;\n  var hours = Math.floor(totalSeconds / 3600);\n  totalSeconds %= 3600;\n  var minutes = Math.floor(totalSeconds / 60);\n  var seconds = totalSeconds % 60;\n  return pad(hours) + \":\" + pad(minutes) + \":\" + pad(seconds);\n}\nfunction pad(number) {\n  if (number < 10) {\n    return \"0\" + number;\n  }\n  return number;\n}\nfunction initTable() {\n  var descriptionFilter = document.querySelector(\"#description-filter\");\n  descriptionFilter.addEventListener(\"input\", function (e) {\n    filterDescription(e.target.value);\n  });\n  var categoryFilter = document.querySelector(\"#category-filter\");\n  categoryFilter.addEventListener(\"input\", function (e) {\n    filterCategory(e.target.value);\n  });\n}\n\n//# sourceURL=webpack://task-tracking-clock-app/./src/taskTable.js?");

/***/ }),

/***/ "./src/timerProperty.js":
/*!******************************!*\
  !*** ./src/timerProperty.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startTimerProperty\": () => (/* binding */ startTimerProperty),\n/* harmony export */   \"stopTimerProperty\": () => (/* binding */ stopTimerProperty),\n/* harmony export */   \"timerProperty\": () => (/* binding */ timerProperty)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _buttons_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons/buttons */ \"./src/buttons/buttons.js\");\n\n\nvar timerProperty = {\n  timerRunning: false,\n  startTime: 0,\n  timerId: 0,\n  delta: 0,\n  totalTime: 0\n};\n\n// helper method to initialize timer property in startTimer()\nfunction startTimerProperty() {\n  (0,_buttons_buttons__WEBPACK_IMPORTED_MODULE_1__.startButton)(true);\n  document.querySelector(\".current-task-dislay\").classList.remove(\"bg-light\");\n  document.querySelector(\".current-task-dislay\").classList.add(\"bg-nice\");\n\n  // start counting\n  timerProperty.timerRunning = true;\n  timerProperty.startTime = new Date();\n  timerProperty.timerId = setInterval(function () {\n    timerProperty.delta = Date.now() - timerProperty.startTime; // milliseconds elapsed since start\n    document.querySelector(\"#record-time\").textContent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.formatTime)(timerProperty.delta);\n  }, 1000); // update about every second\n}\n\n// helper method to calculate/update timer property in startTimer()\nfunction stopTimerProperty() {\n  (0,_buttons_buttons__WEBPACK_IMPORTED_MODULE_1__.startButton)(false);\n  document.querySelector(\".current-task-dislay\").classList.add(\"bg-light\");\n  document.querySelector(\".current-task-dislay\").classList.remove(\"bg-nice\");\n\n  // stop the timer\n  timerProperty.timerRunning = false;\n  var endTime = new Date();\n  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.currentTask)().endTime = endTime;\n  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.currentTask)().duration = endTime - (0,_utils__WEBPACK_IMPORTED_MODULE_0__.currentTask)().startTime;\n  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.updateTotalTime)((0,_utils__WEBPACK_IMPORTED_MODULE_0__.currentTask)().duration);\n}\n\n//# sourceURL=webpack://task-tracking-clock-app/./src/timerProperty.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Input\": () => (/* binding */ Input),\n/* harmony export */   \"List\": () => (/* binding */ List),\n/* harmony export */   \"clearTotalTime\": () => (/* binding */ clearTotalTime),\n/* harmony export */   \"createButton\": () => (/* binding */ createButton),\n/* harmony export */   \"createTodo\": () => (/* binding */ createTodo),\n/* harmony export */   \"currentTask\": () => (/* binding */ currentTask),\n/* harmony export */   \"formatTime\": () => (/* binding */ formatTime),\n/* harmony export */   \"updateTotalTime\": () => (/* binding */ updateTotalTime),\n/* harmony export */   \"validateInputText\": () => (/* binding */ validateInputText)\n/* harmony export */ });\n/* harmony import */ var _timerProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timerProperty */ \"./src/timerProperty.js\");\n\nvar Input = {\n  task: document.querySelector(\"#task-input\"),\n  category: document.querySelector(\"#category-select\")\n};\nvar List = {\n  morning: {\n    tag: \"morningList\",\n    listMemory: [],\n    listElement: document.querySelector(\".morning-list\")\n  },\n  afternoon: {\n    tag: \"afternoonList\",\n    listMemory: [],\n    listElement: document.querySelector(\".afternoon-list\")\n  },\n  night: {\n    tag: \"nightList\",\n    listMemory: [],\n    listElement: document.querySelector(\".night-list\")\n  },\n  task: {\n    tag: \"taskList\",\n    listMemory: []\n  }\n};\nfunction formatTime(milliseconds) {\n  var totalSeconds = Math.floor(milliseconds / 1000);\n  var hours = Math.floor(totalSeconds / 3600);\n  var minutes = Math.floor(totalSeconds % 3600 / 60);\n  var seconds = totalSeconds % 60;\n  var paddedHours = hours.toString().padStart(2, \"0\");\n  var paddedMinutes = minutes.toString().padStart(2, \"0\");\n  var paddedSeconds = seconds.toString().padStart(2, \"0\");\n  return \"\".concat(paddedHours, \":\").concat(paddedMinutes, \":\").concat(paddedSeconds);\n}\nfunction createTodo(listElement, item) {\n  // Create list item\n  var li = document.createElement(\"li\");\n  li.appendChild(document.createTextNode(item));\n  var button = createButton(\"remove-item btn-link text-red\");\n  li.appendChild(button);\n\n  // Add li to the DOM\n  listElement.appendChild(li);\n}\nfunction createButton(classes) {\n  var button = document.createElement(\"button\");\n  button.className = classes;\n  var icon = createIcon(\"fa-solid fa-xmark\");\n  button.appendChild(icon);\n  return button;\n}\nfunction createIcon(classes) {\n  var icon = document.createElement(\"i\");\n  icon.className = classes;\n  icon.style.marginRight = \"3px\";\n  return icon;\n}\nfunction validateInputText(inputText, inputElement) {\n  if (inputText === \"\") {\n    inputElement.value = \"\";\n    alert(\"Please add an item\");\n    return false;\n  }\n  return true;\n}\nfunction currentTask() {\n  return List.task.listMemory[List.task.listMemory.length - 1];\n}\nfunction updateTotalTime(duration, minus) {\n  if (minus) {\n    _timerProperty__WEBPACK_IMPORTED_MODULE_0__.timerProperty.totalTime -= duration;\n  } else {\n    _timerProperty__WEBPACK_IMPORTED_MODULE_0__.timerProperty.totalTime += duration;\n  }\n  document.querySelector(\"#total-time\").textContent = formatTime(_timerProperty__WEBPACK_IMPORTED_MODULE_0__.timerProperty.totalTime);\n}\nfunction clearTotalTime() {\n  _timerProperty__WEBPACK_IMPORTED_MODULE_0__.timerProperty.totalTime = 0;\n  document.querySelector(\"#total-time\").textContent = formatTime(_timerProperty__WEBPACK_IMPORTED_MODULE_0__.timerProperty.totalTime);\n}\n\n//# sourceURL=webpack://task-tracking-clock-app/./src/utils.js?");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://task-tracking-clock-app/./src/css/main.css?");

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
/******/ 			// no module.id needed
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;