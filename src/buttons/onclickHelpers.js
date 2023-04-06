import {
  updateStorage,
  removeFromListAndStorage,
  addToListAndStorage,
} from "../browserStorage";

import { resetUI, memoryStorageList } from "../inputControl";

import { createTodo } from "../utils";

// on click function for moveToDay
export function moveToToday() {
  const tomorrowLis = document
    .querySelector(".tomorrow-list")
    .querySelectorAll("li");
  const tomorrowLisText = Array.from(tomorrowLis).map((li) => li.textContent);

  const todayLis = document.querySelector(".today-list").querySelectorAll("li");
  const todayLisText = Array.from(todayLis).map((li) => li.textContent);

  tomorrowLisText.forEach((tomorrowTodo, index) => {
    if (!todayLisText.includes(tomorrowTodo)) {
      addToListAndStorage(
        "todayList",
        memoryStorageList.today_list,
        tomorrowTodo
      );
      createTodo(document.querySelector(".today-list"), tomorrowTodo);
    }
    tomorrowLis[index].remove();
    removeFromListAndStorage(
      "tomorrowList",
      memoryStorageList.tomorrow_list,
      tomorrowTodo
    );
  });
}

// on click function for deleteAll today/tomorrow
export function deleteAll(storageTag, list) {
  while (list.firstElementChild) {
    const task = list.firstElementChild.textContent;
    removeFromListAndStorage(storageTag, memoryStorageList.today_list, task);
    list.removeChild(list.firstElementChild);
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

  taskList = [];
  updateStorage("taskList", memoryStorageList.task_list);
}

// on click function for today/tomorrow add
export function addtoTodo(e, storageTag, listMemoryStorage, listElement) {
  const lis = listElement.querySelectorAll("li");
  const lisText = Array.from(lis).map((li) => li.textContent);

  const taskDescription = document.querySelector("#task-input").value.trim();

  if (taskDescription && !lisText.includes(taskDescription)) {
    createTodo(listElement, taskDescription);
  } else {
    alert("tasks empty or already existed");
    return;
  }

  addToListAndStorage(storageTag, listMemoryStorage, taskDescription);

  resetUI();
}
