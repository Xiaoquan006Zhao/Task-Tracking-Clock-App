import { memoryStorageList } from "./inputControl";
import { createTodo, updateTotalTime } from "./utils";
import { addTaskToTable } from "./taskTable";

export function updateStorage(tag, list) {
  localStorage.setItem(tag, JSON.stringify(list));
}

export function removeFromListAndStorage(storageTag, list, item) {
  let index = list.indexOf(item);
  if (index !== -1) {
    list.splice(index, 1);
  }

  updateStorage(storageTag, list);
}

export function addToListAndStorage(storageTag, list, item) {
  list.push(item);

  updateStorage(storageTag, list);
}

export function initStorage() {
  if (localStorage.getItem("tomorrowList") === null) {
    memoryStorageList.tomorrow_list = [];
  } else {
    memoryStorageList.tomorrow_list = JSON.parse(
      localStorage.getItem("tomorrowList")
    );
  }

  if (localStorage.getItem("todayList") === null) {
    memoryStorageList.today_list = [];
  } else {
    memoryStorageList.today_list = JSON.parse(
      localStorage.getItem("todayList")
    );
  }

  // populate the DOM
  memoryStorageList.today_list.forEach((todo) => {
    createTodo(document.querySelector(".today-list"), todo);
  });

  memoryStorageList.tomorrow_list.forEach((tomorrow) => {
    createTodo(document.querySelector(".tomorrow-list"), tomorrow);
  });

  // restore task_list
  if (localStorage.getItem("taskList") === null) {
    memoryStorageList.task_list = [];
  } else {
    memoryStorageList.task_list = JSON.parse(localStorage.getItem("taskList"));
  }

  memoryStorageList.task_list.forEach((task) => {
    task.startTime = new Date(task.startTime);
    task.endTime = new Date(task.endTime);
    updateTotalTime(task.duration);
    addTaskToTable(task);
  });

  updateStorage("taskList", memoryStorageList.task_list);
}
