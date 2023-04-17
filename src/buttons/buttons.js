import * as onClick from "./onclickHelpers";
import { resetUI } from "../main";
import { List } from "../utils";

export const buttons = {
  start: document.querySelector("#start-button"),
  todo: document.querySelector("#todo-button"),
  newDay: document.querySelector("#newDay-button"),
  clearInput: document.querySelector("#clear-input-button"),

  todoList: {
    morning: document.querySelector("#morning-button"),
    afternoon: document.querySelector("#afternoon-button"),
    night: document.querySelector("#night-button"),
  },

  deleteAll: {
    morning: document.querySelector("#delete-all-morning-button"),
    afternoon: document.querySelector("#delete-all-afternoon-button"),
    night: document.querySelector("#delete-all-night-button"),
  },
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

function initListButtons(list, index) {
  if (index !== 3) {
    Object.values(buttons.deleteAll)[index].addEventListener("click", (e) => {
      onClick.deleteAll(list);
    });

    Object.values(buttons.todoList)[index].addEventListener("click", (e) => {
      onClick.addtoTodo(list);
    });
  }
}

export function initButton() {
  Object.values(List).forEach((l, index) => {
    initListButtons(l, index);
  });

  buttons.clearInput.addEventListener("click", resetUI);
  buttons.newDay.addEventListener("click", onClick.clearTask);
  buttons.todo.addEventListener("click", (e) => {
    document.querySelector(".todo-wrapper").classList.remove("hidden");
  });
}
