import {
  updateStorage,
  removeFromListAndStorage,
  addToListAndStorage,
} from "../browserStorage";

import { resetUI } from "../main";

import { List, Input } from "../utils";

import { createTodo, clearTotalTime } from "../utils";

// on click function for deleteAll today/tomorrow
export function deleteAll(list) {
  while (list.listElement.firstElementChild) {
    const task = list.listElement.firstElementChild.textContent;
    removeFromListAndStorage(list, task);
    list.listElement.removeChild(list.listElement.firstElementChild);
  }
}

// on click function for newDay
export function clearTask() {
  const trs = document.querySelector("tbody").querySelectorAll("tr");

  Array.from(trs).forEach((tr) => {
    if (tr.classList.contains("task-row")) {
      tr.remove();
    }
  });

  List.task.listMemory = [];
  updateStorage(List.task);

  clearTotalTime();
}

// on click function for today/tomorrow add
export function addtoTodo(list) {
  const lis = list.listElement.querySelectorAll("li");
  const lisText = Array.from(lis).map((li) => li.textContent);

  const taskDescription = Input.task.value.trim();

  if (taskDescription && !lisText.includes(taskDescription)) {
    createTodo(list.listElement, taskDescription);
  } else {
    alert("tasks empty or already existed");
    return;
  }

  addToListAndStorage(list, taskDescription);

  resetUI();
}
