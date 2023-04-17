import { List } from "./utils";
import { createTodo, updateTotalTime } from "./utils";
import { addTaskToTable } from "./taskTable";

export function updateStorage(list) {
  localStorage.setItem(list.tag, JSON.stringify(list.listMemory));
}

export function removeFromListAndStorage(list, item) {
  let index = list.listMemory.indexOf(item);
  if (index !== -1) {
    list.listMemory.splice(index, 1);
  }

  updateStorage(list);
}

export function addToListAndStorage(list, item) {
  list.listMemory.push(item);

  updateStorage(list);
}

function initList(tag, list) {
  if (localStorage.getItem(tag) === null) {
    list.listMemory = [];
  } else {
    list.listMemory = JSON.parse(localStorage.getItem(tag));
  }

  if (list.tag !== "taskList") {
    list.listMemory.forEach((todo) => {
      createTodo(list.listElement, todo);
    });
  } else {
    list.listMemory.forEach((task) => {
      task.startTime = new Date(task.startTime);
      task.endTime = new Date(task.endTime);
      updateTotalTime(task.duration);
      addTaskToTable(task);
    });
  }
}

export function initStorage() {
  Object.values(List).forEach((l) => {
    initList(l.tag, l);
  });
}
