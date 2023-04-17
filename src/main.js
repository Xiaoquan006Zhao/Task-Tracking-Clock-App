import "./css/main.css";
import { buttons, initButton } from "./buttons/buttons";
import { currentTask, List, Input } from "./utils";
import { addTaskToTable, initTable } from "./taskTable";
import { initInputControl } from "./inputControl";
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
    description: Input.task.value,
    category: Input.category.value,
    startTime: timerProperty.startTime,
  };
  List.task.listMemory.push(task);

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

  updateStorage(List.task);
}

function deleteTodo(e, list) {
  const clicked = e.target;

  if (clicked.closest(".remove-item")) {
    const li = e.target.parentElement.parentElement;
    const taskText = li.textContent;

    removeFromListAndStorage(list, taskText);
    li.remove();
  }
  if (clicked.nodeName === "LI") {
    resetUI();
    Input.task.value = clicked.textContent;
  }
}

function init() {
  // click out todo wrapper
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("todo-wrapper")) {
      document.querySelector(".todo-wrapper").classList.add("hidden");
    }
  });

  // initalize event listener for todo lists
  List.morning.listElement.addEventListener("click", (e) => {
    deleteTodo(e, List.morning);
  });
  List.afternoon.listElement.addEventListener("click", (e) => {
    deleteTodo(e, List.afternoon);
  });
  List.night.listElement.addEventListener("click", (e) => {
    deleteTodo(e, List.night);
  });

  document.querySelector("tbody").addEventListener("click", (e) => {
    const taskTr = e.target.closest(".task-row");

    if (taskTr) {
      const columns = taskTr.querySelectorAll("td");
      Input.task.value = columns[0].textContent;
      Input.category.value = columns[1].textContent;
      Input.task.focus();
    }
  });

  initButton();
  initTable();
  initStorage();
  initInputControl();
}

export function resetUI() {
  Input.task.value = "";
  Input.task.focus();
  buttons.clearInput.classList.add("hidden");
  document.querySelector(".todo-wrapper").classList.add("hidden");
  document.querySelector("#current-task").textContent = `Current Task:`;
  document.querySelector("#record-time").textContent = "00:00:00";
}

init();
