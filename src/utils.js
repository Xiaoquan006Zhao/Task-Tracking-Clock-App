import { buttons } from "./buttons/buttons";
import { memoryStorageList, resetUI } from "./inputControl";
import { timerProperty } from "./timerProperty";

export function formatTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const paddedHours = hours.toString().padStart(2, "0");
  const paddedMinutes = minutes.toString().padStart(2, "0");
  const paddedSeconds = seconds.toString().padStart(2, "0");

  return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
}

export function createTodo(listElement, item) {
  // Create list item
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));

  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);

  // Add li to the DOM
  listElement.appendChild(li);
}

export function createButton(classes) {
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

// on keyDown event for input
export function onInputTaskDecription(e) {
  const key = e.key;
  const taskInput = document.querySelector("#task-input");
  const taskDescription = taskInput.value.trim();

  if (taskDescription !== "") {
    buttons.clearInput.classList.remove("hidden");
  }

  if (key === "Enter") {
    e.preventDefault();
    if (!validateInputText(taskDescription, taskInput)) {
      return;
    }
    buttons.start.click();
  } else if (e.metaKey && key === "-") {
    e.preventDefault();
    buttons.today.click();
  } else if (e.metaKey && key === "=") {
    e.preventDefault();
    buttons.tomorrow.click();
  } else if (key === "Escape") {
    e.preventDefault();
    taskInput.value = "";
    taskInput.focus();
    buttons.clearInput.classList.add("hidden");
  }
}

export function onInputGlobal(e) {
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
      if (e.metaKey) {
        e.preventDefault();
        buttons.moveToToday.click();
      }
  }
}

export function validateInputText(inputText, inputElement) {
  if (inputText === "") {
    inputElement.value = "";
    alert("Please add an item");
    return false;
  }
  return true;
}

export function currentTask() {
  return memoryStorageList.task_list[memoryStorageList.task_list.length - 1];
}

export function updateTotalTime(duration, minus) {
  if (minus) {
    timerProperty.totalTime -= duration;
  } else {
    timerProperty.totalTime += duration;
  }

  document.querySelector("#total-time").textContent = formatTime(
    timerProperty.totalTime
  );
}

export function clearTotalTime() {
  timerProperty.totalTime = 0;
  document.querySelector("#total-time").textContent = formatTime(
    timerProperty.totalTime
  );
}
