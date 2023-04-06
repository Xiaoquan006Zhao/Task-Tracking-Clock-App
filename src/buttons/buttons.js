import * as onClick from "./onclickHelpers";
import { memoryStorageList, resetUI } from "../inputControl";

export const buttons = {
  start: document.querySelector("#start-button"),
  today: document.querySelector("#today-button"),
  tomorrow: document.querySelector("#tomorrow-button"),
  todo: document.querySelector("#todo-button"),

  moveToToday: document.querySelector("#moveToToday-button"),
  newDay: document.querySelector("#newDay-button"),
  deleteAllToday: document.querySelector("#delete-all-today-button"),
  deleteAllTomorrow: document.querySelector("#delete-all-tomorrow-button"),

  clearInput: document.querySelector("#clear-input-button"),
};

export function startButton(start) {
  if (start) {
    buttons.start.textContent = "Stop";
    buttons.start.classList.add("timer-starts");
  } else {
    buttons.start.textContent = "Start";
    buttons.start.classList.remove("timer-starts");
  }
}

export function initButton() {
  buttons.deleteAllToday.addEventListener("click", (e) => {
    onClick.deleteAll("todayList", document.querySelector(".today-list"));
  });
  buttons.deleteAllTomorrow.addEventListener("click", (e) => {
    onClick.deleteAll("tomorrowList", document.querySelector(".tomorrow-list"));
  });

  buttons.clearInput.addEventListener("click", resetUI);

  buttons.newDay.addEventListener("click", onClick.clearTask);

  buttons.todo.addEventListener("click", (e) => {
    document.querySelector(".todo-wrapper").classList.remove("hidden");
  });

  buttons.moveToToday.addEventListener("click", onClick.moveToToday);

  buttons.today.addEventListener("click", (e) => {
    onClick.addtoTodo(
      "todayList",
      memoryStorageList.today_list,
      document.querySelector(".today-list")
    );
  });

  buttons.tomorrow.addEventListener("click", (e) => {
    onClick.addtoTodo(
      "tomorrowList",
      memoryStorageList.tomorrow_list,
      document.querySelector(".tomorrow-list")
    );
  });
}
