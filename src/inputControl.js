import { buttons } from "./buttons/buttons";
import { validateInputText, Input } from "./utils";
import { timerProperty } from "./timerProperty";

// on keyDown event for input
function onInputTaskDecription(e) {
  const key = e.key;
  const taskDescription = e.target.value;

  if (taskDescription !== "") {
    buttons.clearInput.classList.remove("hidden");
  }

  if (taskDescription === "") {
    buttons.clearInput.classList.add("hidden");
  }

  if (key === "Enter") {
    e.preventDefault();
    if (!validateInputText(taskDescription, Input.task)) {
      return;
    }
    buttons.start.click();
  } else if (e.ctrlKey && key === "8") {
    e.preventDefault();
    buttons.todoList.morning.click();
  } else if (e.ctrlKey && key === "9") {
    e.preventDefault();
    buttons.todoList.afternoon.click();
  } else if (e.ctrlKey && key === "0") {
    e.preventDefault();
    buttons.todoList.night.click();
  } else if (key === "Escape") {
    e.preventDefault();
    Input.task.value = "";
    Input.task.focus();
    buttons.clearInput.classList.add("hidden");
  }
}

function onInputGlobal(e) {
  const key = e.key;

  switch (key) {
    case "Shift":
      if (timerProperty.timerRunning) {
        e.preventDefault();
        buttons.start.click();
      }
      break;
    case "`":
      e.preventDefault();
      document.querySelector(".todo-wrapper").classList.toggle("hidden");
      break;
    case "Tab":
      e.preventDefault();
      document.querySelector("#task-input").focus();
      break;
    case "m":
      if (e.ctrlKey) {
        e.preventDefault();
        buttons.moveToToday.click();
      }
  }
}

export function initInputControl() {
  document
    .querySelector("#task-input")
    .addEventListener("keyup", onInputTaskDecription);

  document.addEventListener("keydown", onInputGlobal);
}
