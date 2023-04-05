const taskInput = document.querySelector("#task-input");
const categorySelect = document.querySelector("#category-select");

const startBtn = document.querySelector("#start-button");
const laterBtn = document.querySelector("#later-button");
const tomorrowBtn = document.querySelector("#tomorrow-button");
const clearInputBtn = document.getElementById("clear-input");
const todoBtn = document.getElementById("todo-button");
const moveToTodayBtn = document.getElementById("moveToToday-button");
const newDayBtn = document.getElementById("newDay-button");
const deleteAllToday = document.getElementById("delete-all-today");
const deleteAllTomorrow = document.getElementById("delete-all-tomorrow");

const taskTableBody = document.querySelector("tbody");
const totalTimeElement = taskTableBody.querySelector("#total-time");
const tableAggreatedData = taskTableBody.querySelector("#aggreated-data");
const currentTaskElement = document.querySelector("#current-task");
const recordTimeElement = document.querySelector("#record-time");

const todoWrapper = document.querySelector(".todo-wrapper");

const todoList = document.querySelector(".todo-list");
const tomorrowList = document.querySelector(".tomorrow-list");

let todo_list = [];
let tomorrow_list = [];

let taskList = [];
let startTime = 0;
let delta = 0;
let timerId = 0;
let timerRunning = false;
let currentTask;
let totalTime = 0;

// start
function startTimer() {
  timerRunning = true;
  startBtn.textContent = "Stop";
  startBtn.classList.add("timer-starts");

  startTime = new Date();
  timerId = setInterval(function () {
    delta = Date.now() - startTime; // milliseconds elapsed since start
    recordTimeElement.textContent = formatTime(delta);
  }, 1000); // update about every second

  currentTask = {
    description: taskInput.value,
    category: categorySelect.value,
    startTime: startTime,
  };
  taskList.push(currentTask);
  resetUI();

  currentTaskElement.textContent = `Current Task: ${currentTask.description}`;
}

function stopTimer() {
  timerRunning = false;
  startBtn.classList.remove("timer-starts");

  startBtn.textContent = "Start";
  const endTime = new Date();
  currentTask.endTime = endTime;
  currentTask.duration = endTime - currentTask.startTime;

  totalTime += currentTask.duration;
  totalTimeElement.textContent = formatTime(totalTime);

  currentTaskElement.textContent = `Current Task:`;
  recordTimeElement.textContent = "00:00:00";

  updateTaskList();
}

function filterDescription(filterValue) {
  let divTasks = taskTableBody.querySelectorAll("tr");
  divTasks = Array.from(divTasks);
  divTasks = divTasks.slice(0, -1);

  divTasks.forEach((div) => {
    const taskDescription = div.firstElementChild.textContent;

    div.style.display = taskDescription.includes(filterValue) ? "" : "none";
  });
}

function filterCategory(filterValue) {
  let divTasks = taskTableBody.querySelectorAll("tr");
  divTasks = Array.from(divTasks);
  divTasks = divTasks.slice(0, -1);

  console.log(divTasks);
  console.log(filterValue);

  divTasks.forEach((div) => {
    const taskCategory = div.querySelector(":nth-child(2)").textContent;

    div.style.display =
      filterValue === "----" || taskCategory.includes(filterValue)
        ? ""
        : "none";
  });
}

function removeFromListAndStorage(list, item) {
  const whichList = list === todo_list ? "todoList" : "tomorrowList";

  let index = list.indexOf(item);
  if (index !== -1) {
    list.splice(index, 1);
  }
  localStorage.setItem(whichList, JSON.stringify(list));
}

function addToListAndStorage(list, item) {
  const whichList = list === todo_list ? "todoList" : "tomorrowList";

  list.push(item);
  localStorage.setItem(whichList, JSON.stringify(list));
}

function handleTodo(e, whichlist) {
  const clicked = e.target;

  if (clicked.closest(".remove-item")) {
    const li = e.target.parentElement.parentElement;
    const taskText = li.textContent;

    if (whichlist === "today") {
      removeFromListAndStorage(todo_list, taskText);
    } else {
      removeFromListAndStorage(tomorrow_list, taskText);
    }
    li.remove();
  }
  if (clicked.nodeName === "LI") {
    resetUI();
    taskInput.value = clicked.textContent;
  }
}

function moveToToday() {
  const tomorrowLis = tomorrowList.querySelectorAll("li");
  const tomorrowLisText = Array.from(tomorrowLis).map((li) => li.textContent);

  const todayLis = todoList.querySelectorAll("li");
  const todayLisText = Array.from(todayLis).map((li) => li.textContent);

  tomorrowLisText.forEach((tomorrowTodo, index) => {
    if (!todayLisText.includes(tomorrowTodo)) {
      addToListAndStorage(todo_list, tomorrowTodo);
      createTodo(todoList, tomorrowTodo);
    }
    tomorrowLis[index].remove();
    removeFromListAndStorage(tomorrow_list, tomorrowTodo);
  });
}

function init() {
  taskInput.addEventListener("keydown", (e) => {
    if (timerRunning) {
      clearInputBtn.classList.add("hidden");
    } else if (e.key === "Enter") {
      if (taskInput.value === "") {
        alert("Empty task");
        return;
      }
      startTimer();
    }

    if (taskInput.value !== "") {
      clearInputBtn.classList.remove("hidden");
    }

    if (e.key === "-") {
      e.preventDefault();
      laterBtn.click();
    } else if (e.key === "=") {
      e.preventDefault();
      tomorrowBtn.click();
    } else if (e.key === "Backspace") {
      e.preventDefault();
      resetUI();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && timerRunning) {
      e.preventDefault();
      startBtn.click();
    } else if (e.key === "`") {
      e.preventDefault();
      todoWrapper.classList.toggle("hidden");
    } else if (e.key === "Tab") {
      e.preventDefault();
      taskInput.focus();
    } else if (e.key === "m") {
      e.preventDefault();
      moveToTodayBtn.click();
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("todo-wrapper")) {
      todoWrapper.classList.add("hidden");
    }
  });

  todoList.addEventListener("click", (e) => {
    handleTodo(e, "today");
  });
  tomorrowList.addEventListener("click", (e) => {
    handleTodo(e, "tomorrow");
  });

  taskTableBody.addEventListener("click", (e) => {
    const taskTr = e.target.closest(".task-row");

    if (taskTr) {
      const columns = taskTr.querySelectorAll("td");
      taskInput.value = columns[0].textContent;
      categorySelect.value = columns[1].textContent;

      taskInput.focus();
    }
  });

  initButton();
  filterTable();
  loadStorage();
}

function deleteAll(list) {
  const whichlist = list === todoList ? "today" : "tomorrow";

  while (list.firstElementChild) {
    const task = list.firstElementChild.textContent;
    if (whichlist === "today") {
      removeFromListAndStorage(todo_list, task);
    } else {
      removeFromListAndStorage(tomorrow_list, task);
    }
    list.removeChild(list.firstElementChild);
  }
}

function initButton() {
  deleteAllToday.addEventListener("click", deleteAll.bind(null, todoList));
  deleteAllTomorrow.addEventListener(
    "click",
    deleteAll.bind(null, tomorrowList)
  );

  clearInputBtn.addEventListener("click", resetUI);

  newDayBtn.addEventListener("click", clearTask);

  todoBtn.addEventListener("click", (e) => {
    todoWrapper.classList.remove("hidden");
  });

  moveToTodayBtn.addEventListener("click", moveToToday);

  startBtn.addEventListener("click", (e) => {
    if (!timerRunning) {
      startTimer();
    } else {
      clearInterval(timerId);
      stopTimer();
    }
  });

  laterBtn.addEventListener("click", addtoTodo.bind(null, todoList));
  tomorrowBtn.addEventListener("click", addtoTodo.bind(null, tomorrowList));
}

function clearTask() {
  const trs = taskTableBody.querySelectorAll("tr");

  Array.from(trs).forEach((tr) => {
    console.log(tr);
    if (tr.classList.contains("task-row")) {
      tr.remove();
    }
  });

  taskList = [];
  localStorage.setItem("taskList", JSON.stringify(taskList));
}

function loadStorage() {
  if (localStorage.getItem("tomorrowList") === null) {
    tomorrow_list = [];
  } else {
    tomorrow_list = JSON.parse(localStorage.getItem("tomorrowList"));
  }

  if (localStorage.getItem("todoList") === null) {
    todo_list = [];
  } else {
    todo_list = JSON.parse(localStorage.getItem("todoList"));
  }

  todo_list.forEach((todo) => {
    createTodo(todoList, todo);
  });

  tomorrow_list.forEach((tomorrow) => {
    createTodo(tomorrowList, tomorrow);
  });

  if (localStorage.getItem("taskList") === null) {
    taskList = [];
  } else {
    taskList = JSON.parse(localStorage.getItem("taskList"));
  }

  taskList.forEach((task) => {
    task.startTime = new Date(task.startTime);
    task.endTime = new Date(task.endTime);

    currentTask = task;
    updateTaskList();
  });
}

function addtoTodo(list) {
  const lis = list.querySelectorAll("li");
  const lisText = Array.from(lis).map((li) => li.textContent);

  if (taskInput.value && !lisText.includes(taskInput.value)) {
    createTodo(list, taskInput.value);
  } else {
    alert("tasks empty or already existed");
    return;
  }

  if (list === todoList) {
    addToListAndStorage(todo_list, taskInput.value);
  } else if (list === tomorrowList) {
    addToListAndStorage(tomorrow_list, taskInput.value);
  }

  resetUI();
}

function createTodo(list, item) {
  // Create list item
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));

  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);

  // Add li to the DOM
  list.appendChild(li);
}

function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  icon.style.marginRight = "3px";
  return icon;
}

function resetUI() {
  taskInput.value = "";
  taskInput.focus();
  clearInputBtn.classList.add("hidden");
  todoWrapper.classList.add("hidden");
}

function updateTaskList() {
  const tr = document.createElement("tr");
  tr.classList.add("task-row");

  const tdTask = document.createElement("td");
  const tdCategory = document.createElement("td");
  const tdDuration = document.createElement("td");
  const tdStart = document.createElement("td");
  const tdEnd = document.createElement("td");

  tr.append(tdTask, tdCategory, tdDuration, tdStart, tdEnd);
  tdTask.appendChild(document.createTextNode(currentTask.description));
  tdCategory.appendChild(document.createTextNode(currentTask.category));
  tdDuration.appendChild(
    document.createTextNode(formatTime(currentTask.duration))
  );

  tdStart.appendChild(
    document.createTextNode(currentTask.startTime.toLocaleTimeString("en-US"))
  );
  tdEnd.appendChild(
    document.createTextNode(currentTask.endTime.toLocaleTimeString("en-US"))
  );

  tr.addEventListener("mouseenter", (e) => {
    const button = createButton("remove-item btn-link text-red");
    button.classList.add("remove-task");

    button.addEventListener("click", deleteTaskFromTable);
    tr.firstChild.appendChild(button);
  });

  tr.addEventListener("mouseout", (e) => {
    const tr = e.currentTarget;
    const relatedTarget = e.relatedTarget;

    // Check if the relatedTarget is a child of BodyTr
    if (!tr.contains(relatedTarget)) {
      const firstTd = e.currentTarget.firstChild;
      firstTd.removeChild(firstTd.lastChild);
    }
  });

  localStorage.setItem("taskList", JSON.stringify(taskList));
  taskTableBody.insertBefore(tr, tableAggreatedData);
}

function deleteTaskFromTable(e) {
  e.stopPropagation();
  const tr = e.target.closest("tr");

  const trs = taskTableBody.querySelectorAll("tr");

  const index = Array.from(trs).indexOf(tr);

  if (index !== -1) {
    taskList.splice(index, 1);
  }
  localStorage.setItem("taskList", JSON.stringify(taskList));
  tr.remove();
}

function formatTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const paddedHours = hours.toString().padStart(2, "0");
  const paddedMinutes = minutes.toString().padStart(2, "0");
  const paddedSeconds = seconds.toString().padStart(2, "0");

  return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
}

function filterTable() {
  const descriptionFilter = document.querySelector("#description-filter");
  descriptionFilter.addEventListener("input", (e) => {
    filterDescription(e.target.value);
  });

  const categoryFilter = document.querySelector("#category-filter");
  categoryFilter.addEventListener("input", (e) => {
    filterCategory(e.target.value);
  });
}

init();
