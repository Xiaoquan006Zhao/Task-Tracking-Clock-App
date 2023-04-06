import "./css/main.css";

import { buttons, initButton } from "./buttons/buttons";
import { onInputTaskDecription, onInputGlobal, currentTask } from "./utils";
import { addTaskToTable, initTable } from "./taskTable";
import {
  removeFromListAndStorage,
  initStorage,
  updateStorage,
} from "./browserStorage";

import {
  timerProperty,
  startTimerProperty,
  stopTimerProperty,
} from "./timerProperty";

const taskInput = document.querySelector("#task-input");
const categorySelect = document.querySelector("#category-select");

export const memoryStorageList = {
  today_list: [],
  tomorrow_list: [],
  task_list: [],
};

buttons.start.addEventListener("click", (e) => {
  if (!timerProperty.timerRunning) {
    startTimer();
  } else {
    clearInterval(timerProperty.timerId);
    stopTimer();
  }
});

// start Timer by setting start button, count, and current task
function startTimer() {
  startTimerProperty();

  // adding current task
  const task = {
    description: taskInput.value,
    category: categorySelect.value,
    startTime: timerProperty.startTime,
  };
  memoryStorageList.task_list.push(task);

  resetUI();

  document.querySelector("#current-task").textContent = `Current Task: ${
    currentTask().description
  }`;
}

function stopTimer() {
  stopTimerProperty();

  resetUI();

  // add current task to table
  addTaskToTable();

  updateStorage("taskList", memoryStorageList.task_list);
}

function onClickTodo(e, whichlist) {
  const clicked = e.target;

  if (clicked.closest(".remove-item")) {
    const li = e.target.parentElement.parentElement;
    const taskText = li.textContent;

    if (whichlist === "today") {
      removeFromListAndStorage(
        "todayList",
        memoryStorageList.today_list,
        taskText
      );
    } else {
      removeFromListAndStorage(
        "tomorrowList",
        memoryStorageList.tomorrow_list,
        taskText
      );
    }
    li.remove();
  }
  if (clicked.nodeName === "LI") {
    resetUI();
    taskInput.value = clicked.textContent;
  }
}

function init() {
  taskInput.addEventListener("keydown", onInputTaskDecription);

  document.addEventListener("keydown", onInputGlobal);

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("todo-wrapper")) {
      document.querySelector(".todo-wrapper").classList.add("hidden");
    }
  });

  document.querySelector(".today-list").addEventListener("click", (e) => {
    onClickTodo(e, "today");
  });

  document.querySelector(".tomorrow-list").addEventListener("click", (e) => {
    onClickTodo(e, "tomorrow");
  });

  document.querySelector("tbody").addEventListener("click", (e) => {
    const taskTr = e.target.closest(".task-row");

    if (taskTr) {
      const columns = taskTr.querySelectorAll("td");
      taskInput.value = columns[0].textContent;
      categorySelect.value = columns[1].textContent;

      taskInput.focus();
    }
  });

  initButton();
  initTable();
  initStorage();
}

export function resetUI() {
  taskInput.value = "";
  taskInput.focus();
  buttons.clearInput.classList.add("hidden");
  document.querySelector(".todo-wrapper").classList.add("hidden");

  document.querySelector("#current-task").textContent = `Current Task:`;
  document.querySelector("#record-time").textContent = "00:00:00";
}

init();
