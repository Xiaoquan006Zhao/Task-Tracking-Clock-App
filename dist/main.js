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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToListAndStorage\": () => (/* binding */ addToListAndStorage),\n/* harmony export */   \"initStorage\": () => (/* binding */ initStorage),\n/* harmony export */   \"removeFromListAndStorage\": () => (/* binding */ removeFromListAndStorage),\n/* harmony export */   \"updateStorage\": () => (/* binding */ updateStorage)\n/* harmony export */ });\n/* harmony import */ var _inputControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputControl */ \"./src/inputControl.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _taskTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskTable */ \"./src/taskTable.js\");\n\n\n\nfunction updateStorage(tag, list) {\n  console.log(2);\n  localStorage.setItem(tag, JSON.stringify(list));\n}\nfunction removeFromListAndStorage(storageTag, list, item) {\n  var index = list.indexOf(item);\n  if (index !== -1) {\n    list.splice(index, 1);\n  }\n  updateStorage(storageTag, list);\n}\nfunction addToListAndStorage(storageTag, list, item) {\n  list.push(item);\n  updateStorage(storageTag, list);\n}\nfunction initStorage() {\n  if (localStorage.getItem(\"tomorrowList\") === null) {\n    _inputControl__WEBPACK_IMPORTED_MODULE_0__.memoryStorageList.tomorrow_list = [];\n  } else {\n    _inputControl__WEBPACK_IMPORTED_MODULE_0__.memoryStorageList.tomorrow_list = JSON.parse(localStorage.getItem(\"tomorrowList\"));\n  }\n  if (localStorage.getItem(\"todayList\") === null) {\n    _inputControl__WEBPACK_IMPORTED_MODULE_0__.memoryStorageList.today_list = [];\n  } else {\n    _inputControl__WEBPACK_IMPORTED_MODULE_0__.memoryStorageList.today_list = JSON.parse(localStorage.getItem(\"todayList\"));\n  }\n\n  // populate the DOM\n  _inputControl__WEBPACK_IMPORTED_MODULE_0__.memoryStorageList.today_list.forEach(function (todo) {\n    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createTodo)(document.querySelector(\".today-list\"), todo);\n  });\n  _inputControl__WEBPACK_IMPORTED_MODULE_0__.memoryStorageList.tomorrow_list.forEach(function (tomorrow) {\n    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createTodo)(document.querySelector(\".tomorrow-list\"), tomorrow);\n  });\n\n  // restore task_list\n  if (localStorage.getItem(\"taskList\") === null) {\n    _inputControl__WEBPACK_IMPORTED_MODULE_0__.memoryStorageList.task_list = [];\n  } else {\n    _inputControl__WEBPACK_IMPORTED_MODULE_0__.memoryStorageList.task_list = JSON.parse(localStorage.getItem(\"taskList\"));\n  }\n  _inputControl__WEBPACK_IMPORTED_MODULE_0__.memoryStorageList.task_list.forEach(function (task) {\n    task.startTime = new Date(task.startTime);\n    task.endTime = new Date(task.endTime);\n    _inputControl__WEBPACK_IMPORTED_MODULE_0__.currentTask = task;\n    (0,_taskTable__WEBPACK_IMPORTED_MODULE_2__.addTaskToTable)();\n  });\n  updateStorage(\"taskList\", _inputControl__WEBPACK_IMPORTED_MODULE_0__.memoryStorageList.task_list);\n}\n\n//# sourceURL=webpack://task-tracking-clock-app/./src/browserStorage.js?");

/***/ }),

/***/ "./src/buttons/buttons.js":
/*!********************************!*\
  !*** ./src/buttons/buttons.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buttons\": () => (/* binding */ buttons),\n/* harmony export */   \"initButton\": () => (/* binding */ initButton),\n/* harmony export */   \"startButton\": () => (/* binding */ startButton)\n/* harmony export */ });\n/* harmony import */ var _onclickHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onclickHelpers */ \"./src/buttons/onclickHelpers.js\");\n/* harmony import */ var _inputControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inputControl */ \"./src/inputControl.js\");\n\n\nvar buttons = {\n  start: document.querySelector(\"#start-button\"),\n  today: document.querySelector(\"#today-button\"),\n  tomorrow: document.querySelector(\"#tomorrow-button\"),\n  todo: document.querySelector(\"#todo-button\"),\n  moveToToday: document.querySelector(\"#moveToToday-button\"),\n  newDay: document.querySelector(\"#newDay-button\"),\n  deleteAllToday: document.querySelector(\"#delete-all-today-button\"),\n  deleteAllTomorrow: document.querySelector(\"#delete-all-tomorrow-button\"),\n  clearInput: document.querySelector(\"#clear-input-button\")\n};\nfunction startButton(start) {\n  if (start) {\n    buttons.start.textContent = \"Stop\";\n    buttons.start.classList.add(\"timer-starts\");\n  } else {\n    buttons.start.textContent = \"Start\";\n    buttons.start.classList.remove(\"timer-starts\");\n  }\n}\nfunction initButton() {\n  buttons.deleteAllToday.addEventListener(\"click\", function (e) {\n    _onclickHelpers__WEBPACK_IMPORTED_MODULE_0__.deleteAll(\"todayList\", document.querySelector(\".today-list\"));\n  });\n  buttons.deleteAllTomorrow.addEventListener(\"click\", function (e) {\n    _onclickHelpers__WEBPACK_IMPORTED_MODULE_0__.deleteAll(\"tomorrowList\", document.querySelector(\".tomorrow-list\"));\n  });\n  buttons.clearInput.addEventListener(\"click\", _inputControl__WEBPACK_IMPORTED_MODULE_1__.resetUI);\n  buttons.newDay.addEventListener(\"click\", _onclickHelpers__WEBPACK_IMPORTED_MODULE_0__.clearTask);\n  buttons.todo.addEventListener(\"click\", function (e) {\n    document.querySelector(\".todo-wrapper\").classList.remove(\"hidden\");\n  });\n  buttons.moveToToday.addEventListener(\"click\", _onclickHelpers__WEBPACK_IMPORTED_MODULE_0__.moveToToday);\n  buttons.today.addEventListener(\"click\", function (e) {\n    _onclickHelpers__WEBPACK_IMPORTED_MODULE_0__.addtoTodo(e, \"todayList\", _inputControl__WEBPACK_IMPORTED_MODULE_1__.memoryStorageList.today_list, document.querySelector(\".today-list\"));\n  });\n  buttons.tomorrow.addEventListener(\"click\", function (e) {\n    _onclickHelpers__WEBPACK_IMPORTED_MODULE_0__.addtoTodo(e, \"tomorrowList\", _inputControl__WEBPACK_IMPORTED_MODULE_1__.memoryStorageList.tomorrow_list, document.querySelector(\".tomorrow-list\"));\n  });\n}\n\n//# sourceURL=webpack://task-tracking-clock-app/./src/buttons/buttons.js?");

/***/ }),

/***/ "./src/buttons/onclickHelpers.js":
/*!***************************************!*\
  !*** ./src/buttons/onclickHelpers.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addtoTodo\": () => (/* binding */ addtoTodo),\n/* harmony export */   \"clearTask\": () => (/* binding */ clearTask),\n/* harmony export */   \"deleteAll\": () => (/* binding */ deleteAll),\n/* harmony export */   \"moveToToday\": () => (/* binding */ moveToToday)\n/* harmony export */ });\n/* harmony import */ var _browserStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../browserStorage */ \"./src/browserStorage.js\");\n/* harmony import */ var _inputControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inputControl */ \"./src/inputControl.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\n\n\n\n// on click function for moveToDay\nfunction moveToToday() {\n  var tomorrowLis = document.querySelector(\".tomorrow-list\").querySelectorAll(\"li\");\n  var tomorrowLisText = Array.from(tomorrowLis).map(function (li) {\n    return li.textContent;\n  });\n  var todayLis = document.querySelector(\".today-list\").querySelectorAll(\"li\");\n  var todayLisText = Array.from(todayLis).map(function (li) {\n    return li.textContent;\n  });\n  tomorrowLisText.forEach(function (tomorrowTodo, index) {\n    if (!todayLisText.includes(tomorrowTodo)) {\n      (0,_browserStorage__WEBPACK_IMPORTED_MODULE_0__.addToListAndStorage)(\"todayList\", _inputControl__WEBPACK_IMPORTED_MODULE_1__.memoryStorageList.today_list, tomorrowTodo);\n      (0,_utils__WEBPACK_IMPORTED_MODULE_2__.createTodo)(document.querySelector(\".todayList\"), tomorrowTodo);\n    }\n    tomorrowLis[index].remove();\n  });\n  (0,_browserStorage__WEBPACK_IMPORTED_MODULE_0__.removeFromListAndStorage)(\"tomorrowList\", _inputControl__WEBPACK_IMPORTED_MODULE_1__.memoryStorageList.tomorrow_list, tomorrowTodo);\n}\n\n// on click function for deleteAll today/tomorrow\nfunction deleteAll(storageTag, list) {\n  while (list.firstElementChild) {\n    var task = list.firstElementChild.textContent;\n    (0,_browserStorage__WEBPACK_IMPORTED_MODULE_0__.removeFromListAndStorage)(storageTag, _inputControl__WEBPACK_IMPORTED_MODULE_1__.memoryStorageList.today_list, task);\n    list.removeChild(list.firstElementChild);\n  }\n}\n\n// on click function for newDay\nfunction clearTask() {\n  var trs = document.querySelector(\"tbody\").querySelectorAll(\"tr\");\n  Array.from(trs).forEach(function (tr) {\n    if (tr.classList.contains(\"task-row\")) {\n      tr.remove();\n    }\n  });\n  taskList = [];\n  (0,_browserStorage__WEBPACK_IMPORTED_MODULE_0__.updateStorage)(\"taskList\", _inputControl__WEBPACK_IMPORTED_MODULE_1__.memoryStorageList.task_list);\n}\n\n// on click function for today/tomorrow add\nfunction addtoTodo(e, storageTag, listMemoryStorage, listElement) {\n  var lis = listElement.querySelectorAll(\"li\");\n  var lisText = Array.from(lis).map(function (li) {\n    return li.textContent;\n  });\n  var taskDescription = document.querySelector(\"#task-input\").value.trim();\n  if (taskDescription && !lisText.includes(taskDescription)) {\n    console.log(\"fuck\");\n    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.createTodo)(listElement, taskDescription);\n  } else {\n    alert(\"tasks empty or already existed\");\n    return;\n  }\n  (0,_browserStorage__WEBPACK_IMPORTED_MODULE_0__.addToListAndStorage)(storageTag, listMemoryStorage, taskDescription);\n  (0,_inputControl__WEBPACK_IMPORTED_MODULE_1__.resetUI)();\n}\n\n//# sourceURL=webpack://task-tracking-clock-app/./src/buttons/onclickHelpers.js?");

/***/ }),

/***/ "./src/inputControl.js":
/*!*****************************!*\
  !*** ./src/inputControl.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"currentTask\": () => (/* binding */ currentTask),\n/* harmony export */   \"memoryStorageList\": () => (/* binding */ memoryStorageList),\n/* harmony export */   \"resetUI\": () => (/* binding */ resetUI)\n/* harmony export */ });\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _buttons_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons/buttons */ \"./src/buttons/buttons.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _taskTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskTable */ \"./src/taskTable.js\");\n/* harmony import */ var _browserStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./browserStorage */ \"./src/browserStorage.js\");\n/* harmony import */ var _timerProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timerProperty */ \"./src/timerProperty.js\");\n\n\n\n\n\n\nvar taskInput = document.querySelector(\"#task-input\");\nvar categorySelect = document.querySelector(\"#category-select\");\nvar currentTask = {};\nvar memoryStorageList = {\n  today_list: [],\n  tomorrow_list: [],\n  task_list: []\n};\n_buttons_buttons__WEBPACK_IMPORTED_MODULE_1__.buttons.start.addEventListener(\"click\", function (e) {\n  if (!_timerProperty__WEBPACK_IMPORTED_MODULE_5__.timerProperty.timerRunning) {\n    startTimer();\n  } else {\n    clearInterval(_timerProperty__WEBPACK_IMPORTED_MODULE_5__.timerProperty.timerId);\n    stopTimer();\n  }\n});\n\n// start Timer by setting start button, count, and current task\nfunction startTimer() {\n  (0,_timerProperty__WEBPACK_IMPORTED_MODULE_5__.startTimerProperty)();\n\n  // adding current task\n  currentTask = {\n    description: taskInput.value,\n    category: categorySelect.value,\n    startTime: _timerProperty__WEBPACK_IMPORTED_MODULE_5__.timerProperty.startTime\n  };\n  memoryStorageList.task_list.push(currentTask);\n  resetUI();\n  document.querySelector(\"#current-task\").textContent = \"Current Task: \".concat(currentTask.description);\n}\nfunction stopTimer() {\n  (0,_timerProperty__WEBPACK_IMPORTED_MODULE_5__.stopTimerProperty)();\n  resetUI();\n\n  // add current task to table\n  (0,_taskTable__WEBPACK_IMPORTED_MODULE_3__.addTaskToTable)();\n  (0,_browserStorage__WEBPACK_IMPORTED_MODULE_4__.updateStorage)(\"taskList\", memoryStorageList.task_list);\n}\nfunction onClickTodo(e, whichlist) {\n  var clicked = e.target;\n  if (clicked.closest(\".remove-item\")) {\n    var li = e.target.parentElement.parentElement;\n    var taskText = li.textContent;\n    if (whichlist === \"today\") {\n      (0,_browserStorage__WEBPACK_IMPORTED_MODULE_4__.removeFromListAndStorage)(\"todayList\", memoryStorageList.today_list, taskText);\n    } else {\n      (0,_browserStorage__WEBPACK_IMPORTED_MODULE_4__.removeFromListAndStorage)(\"tomorrowList\", memoryStorageList.tomorrow_list, taskText);\n    }\n    li.remove();\n  }\n  if (clicked.nodeName === \"LI\") {\n    resetUI();\n    taskInput.value = clicked.textContent;\n  }\n}\nfunction init() {\n  taskInput.addEventListener(\"keydown\", _utils__WEBPACK_IMPORTED_MODULE_2__.onInputTaskDecription);\n  document.addEventListener(\"keydown\", _utils__WEBPACK_IMPORTED_MODULE_2__.onInputGlobal);\n  document.addEventListener(\"click\", function (e) {\n    if (e.target.classList.contains(\"todo-wrapper\")) {\n      document.querySelector(\".todo-wrapper\").classList.add(\"hidden\");\n    }\n  });\n  document.querySelector(\".today-list\").addEventListener(\"click\", function (e) {\n    onClickTodo(e, \"today\");\n  });\n  document.querySelector(\".tomorrow-list\").addEventListener(\"click\", function (e) {\n    onClickTodo(e, \"tomorrow\");\n  });\n  document.querySelector(\"tbody\").addEventListener(\"click\", function (e) {\n    var taskTr = e.target.closest(\".task-row\");\n    if (taskTr) {\n      var columns = taskTr.querySelectorAll(\"td\");\n      taskInput.value = columns[0].textContent;\n      categorySelect.value = columns[1].textContent;\n      taskInput.focus();\n    }\n  });\n  (0,_buttons_buttons__WEBPACK_IMPORTED_MODULE_1__.initButton)();\n  (0,_taskTable__WEBPACK_IMPORTED_MODULE_3__.initTable)();\n  (0,_browserStorage__WEBPACK_IMPORTED_MODULE_4__.initStorage)();\n}\nfunction resetUI() {\n  taskInput.value = \"\";\n  taskInput.focus();\n  _buttons_buttons__WEBPACK_IMPORTED_MODULE_1__.buttons.clearInput.classList.add(\"hidden\");\n  document.querySelector(\".todo-wrapper\").classList.add(\"hidden\");\n  document.querySelector(\"#current-task\").textContent = \"Current Task:\";\n  document.querySelector(\"#record-time\").textContent = \"00:00:00\";\n}\ninit();\n\n//# sourceURL=webpack://task-tracking-clock-app/./src/inputControl.js?");

/***/ }),

/***/ "./src/taskTable.js":
/*!**************************!*\
  !*** ./src/taskTable.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTaskToTable\": () => (/* binding */ addTaskToTable),\n/* harmony export */   \"initTable\": () => (/* binding */ initTable)\n/* harmony export */ });\n/* harmony import */ var _inputControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputControl */ \"./src/inputControl.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\nfunction deleteTaskFromTable(e) {\n  e.stopPropagation();\n  var tr = e.target.closest(\"tr\");\n  var trs = document.querySelector(\"tbody\").querySelectorAll(\"tr\");\n  var index = Array.from(trs).indexOf(tr);\n  if (index !== -1) {\n    _inputControl__WEBPACK_IMPORTED_MODULE_0__.memoryStorageList.task_list.splice(index, 1);\n  }\n  updateStorge(\"taskList\", _inputControl__WEBPACK_IMPORTED_MODULE_0__.memoryStorageList.task_list);\n  tr.remove();\n}\nfunction addTaskToTable() {\n  var tr = document.createElement(\"tr\");\n  tr.classList.add(\"task-row\");\n  var tdTask = document.createElement(\"td\");\n  var tdCategory = document.createElement(\"td\");\n  var tdDuration = document.createElement(\"td\");\n  var tdStart = document.createElement(\"td\");\n  var tdEnd = document.createElement(\"td\");\n  tr.append(tdTask, tdCategory, tdDuration, tdStart, tdEnd);\n  tdTask.appendChild(document.createTextNode(_inputControl__WEBPACK_IMPORTED_MODULE_0__.currentTask.description));\n  tdCategory.appendChild(document.createTextNode(_inputControl__WEBPACK_IMPORTED_MODULE_0__.currentTask.category));\n  tdDuration.appendChild(document.createTextNode((0,_utils__WEBPACK_IMPORTED_MODULE_1__.formatTime)(_inputControl__WEBPACK_IMPORTED_MODULE_0__.currentTask.duration)));\n  tdStart.appendChild(document.createTextNode(_inputControl__WEBPACK_IMPORTED_MODULE_0__.currentTask.startTime.toLocaleTimeString(\"en-US\")));\n  tdEnd.appendChild(document.createTextNode(_inputControl__WEBPACK_IMPORTED_MODULE_0__.currentTask.endTime.toLocaleTimeString(\"en-US\")));\n  tr.addEventListener(\"mouseenter\", function (e) {\n    var button = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createButton)(\"remove-item btn-link text-red\");\n    button.classList.add(\"remove-task\");\n    button.addEventListener(\"click\", deleteTaskFromTable);\n    tr.firstChild.appendChild(button);\n  });\n  tr.addEventListener(\"mouseout\", function (e) {\n    var tr = e.currentTarget;\n    var relatedTarget = e.relatedTarget;\n\n    // Check if the relatedTarget is a child of BodyTr\n    if (!tr.contains(relatedTarget)) {\n      var firstTd = e.currentTarget.firstChild;\n      firstTd.removeChild(firstTd.lastChild);\n    }\n  });\n  document.querySelector(\"tbody\").insertBefore(tr, document.querySelector(\"#aggreated-data\"));\n}\n\n// ------------------------------  Filter Starts -----------------------------------------------\n\nfunction filterDescription(filterValue) {\n  var divTasks = document.querySelector(\"tbody\").querySelectorAll(\"tr\");\n  divTasks = Array.from(divTasks);\n  divTasks = divTasks.slice(0, -1);\n  divTasks.forEach(function (div) {\n    var taskDescription = div.firstElementChild.textContent;\n    div.style.display = taskDescription.includes(filterValue) ? \"\" : \"none\";\n  });\n}\nfunction filterCategory(filterValue) {\n  var divTasks = document.querySelector(\"tbody\").querySelectorAll(\"tr\");\n  divTasks = Array.from(divTasks);\n  divTasks = divTasks.slice(0, -1);\n  divTasks.forEach(function (div) {\n    var taskCategory = div.querySelector(\":nth-child(2)\").textContent;\n    div.style.display = filterValue === \"----\" || taskCategory.includes(filterValue) ? \"\" : \"none\";\n  });\n}\nfunction initTable() {\n  var descriptionFilter = document.querySelector(\"#description-filter\");\n  descriptionFilter.addEventListener(\"input\", function (e) {\n    filterDescription(e.target.value);\n  });\n  var categoryFilter = document.querySelector(\"#category-filter\");\n  categoryFilter.addEventListener(\"input\", function (e) {\n    filterCategory(e.target.value);\n  });\n}\n\n//# sourceURL=webpack://task-tracking-clock-app/./src/taskTable.js?");

/***/ }),

/***/ "./src/timerProperty.js":
/*!******************************!*\
  !*** ./src/timerProperty.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startTimerProperty\": () => (/* binding */ startTimerProperty),\n/* harmony export */   \"stopTimerProperty\": () => (/* binding */ stopTimerProperty),\n/* harmony export */   \"timerProperty\": () => (/* binding */ timerProperty)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _inputControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputControl */ \"./src/inputControl.js\");\n/* harmony import */ var _buttons_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons/buttons */ \"./src/buttons/buttons.js\");\n\n\n\nvar timerProperty = {\n  timerRunning: false,\n  startTime: 0,\n  timerId: 0,\n  delta: 0,\n  totalTime: 0\n};\n\n// helper method to initialize timer property in startTimer()\nfunction startTimerProperty() {\n  (0,_buttons_buttons__WEBPACK_IMPORTED_MODULE_2__.startButton)(true);\n\n  // start counting\n  timerProperty.timerRunning = true;\n  timerProperty.startTime = new Date();\n  timerProperty.timerId = setInterval(function () {\n    timerProperty.delta = Date.now() - timerProperty.startTime; // milliseconds elapsed since start\n    document.querySelector(\"#record-time\").textContent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.formatTime)(timerProperty.delta);\n  }, 1000); // update about every second\n}\n\n// helper method to calculate/update timer property in startTimer()\nfunction stopTimerProperty() {\n  (0,_buttons_buttons__WEBPACK_IMPORTED_MODULE_2__.startButton)(false);\n  timerProperty.timerRunning = false;\n  var endTime = new Date();\n  _inputControl__WEBPACK_IMPORTED_MODULE_1__.currentTask.endTime = endTime;\n  _inputControl__WEBPACK_IMPORTED_MODULE_1__.currentTask.duration = endTime - _inputControl__WEBPACK_IMPORTED_MODULE_1__.currentTask.startTime;\n  timerProperty.totalTime += _inputControl__WEBPACK_IMPORTED_MODULE_1__.currentTask.duration;\n  document.querySelector(\"#total-time\").textContent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.formatTime)(timerProperty.totalTime);\n}\n\n//# sourceURL=webpack://task-tracking-clock-app/./src/timerProperty.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createButton\": () => (/* binding */ createButton),\n/* harmony export */   \"createTodo\": () => (/* binding */ createTodo),\n/* harmony export */   \"formatTime\": () => (/* binding */ formatTime),\n/* harmony export */   \"onInputGlobal\": () => (/* binding */ onInputGlobal),\n/* harmony export */   \"onInputTaskDecription\": () => (/* binding */ onInputTaskDecription),\n/* harmony export */   \"validateInputText\": () => (/* binding */ validateInputText)\n/* harmony export */ });\n/* harmony import */ var _buttons_buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons/buttons */ \"./src/buttons/buttons.js\");\n/* harmony import */ var _timerProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timerProperty */ \"./src/timerProperty.js\");\n\n\nfunction formatTime(milliseconds) {\n  var totalSeconds = Math.floor(milliseconds / 1000);\n  var hours = Math.floor(totalSeconds / 3600);\n  var minutes = Math.floor(totalSeconds % 3600 / 60);\n  var seconds = totalSeconds % 60;\n  var paddedHours = hours.toString().padStart(2, \"0\");\n  var paddedMinutes = minutes.toString().padStart(2, \"0\");\n  var paddedSeconds = seconds.toString().padStart(2, \"0\");\n  return \"\".concat(paddedHours, \":\").concat(paddedMinutes, \":\").concat(paddedSeconds);\n}\nfunction createTodo(listElement, item) {\n  // Create list item\n  var li = document.createElement(\"li\");\n  li.appendChild(document.createTextNode(item));\n  var button = createButton(\"remove-item btn-link text-red\");\n  li.appendChild(button);\n\n  // Add li to the DOM\n  listElement.appendChild(li);\n}\nfunction createButton(classes) {\n  var button = document.createElement(\"button\");\n  button.className = classes;\n  var icon = createIcon(\"fa-solid fa-xmark\");\n  button.appendChild(icon);\n  return button;\n}\nfunction createIcon(classes) {\n  var icon = document.createElement(\"i\");\n  icon.className = classes;\n  icon.style.marginRight = \"3px\";\n  return icon;\n}\nfunction onInputTaskDecription(e) {\n  var key = e.key;\n  var taskInput = document.querySelector(\"#task-input\");\n  var taskDescription = taskInput.value.trim();\n  if (taskDescription !== \"\") {\n    _buttons_buttons__WEBPACK_IMPORTED_MODULE_0__.buttons.clearInput.classList.remove(\"hidden\");\n  }\n  if (key === \"Enter\") {\n    e.preventDefault();\n    if (!validateInputText(taskDescription, taskInput)) {\n      return;\n    }\n    _buttons_buttons__WEBPACK_IMPORTED_MODULE_0__.buttons.start.click();\n  } else if (e.ctrlKey && key === \"-\") {\n    e.preventDefault();\n    _buttons_buttons__WEBPACK_IMPORTED_MODULE_0__.buttons.today.click();\n  } else if (e.ctrlKey && key === \"=\") {\n    e.preventDefault();\n    _buttons_buttons__WEBPACK_IMPORTED_MODULE_0__.buttons.tomorrow.click();\n  } else if (key === \"Escape\") {\n    e.preventDefault();\n    resetUI();\n  }\n}\nfunction onInputGlobal(e) {\n  var key = e.key;\n  switch (key) {\n    case \"Shift\":\n      if (_timerProperty__WEBPACK_IMPORTED_MODULE_1__.timerProperty.timerRunning) {\n        e.preventDefault();\n        _buttons_buttons__WEBPACK_IMPORTED_MODULE_0__.buttons.start.click();\n      }\n      break;\n    case \"`\":\n      e.preventDefault();\n      document.querySelector(\".todo-wrapper\").classList.toggle(\"hidden\");\n      break;\n    case \"Tab\":\n      e.preventDefault();\n      document.querySelector(\"#task-input\").focus();\n      break;\n    case \"m\":\n      if (e.ctrlKey) {\n        e.preventDefault();\n        _buttons_buttons__WEBPACK_IMPORTED_MODULE_0__.buttons.moveToToday.click();\n      }\n  }\n}\nfunction validateInputText(inputText, inputElement) {\n  if (inputText === \"\") {\n    inputElement.value = \"\";\n    alert(\"Please add an item\");\n    return false;\n  }\n  return true;\n}\n\n//# sourceURL=webpack://task-tracking-clock-app/./src/utils.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/inputControl.js");
/******/ 	
/******/ })()
;