import { timerProperty } from "./timerProperty";

export const Input = {
  task: document.querySelector("#task-input"),
  category: document.querySelector("#category-select"),
};

export const List = {
  morning: {
    tag: "morningList",
    listMemory: [],
    listElement: document.querySelector(".morning-list"),
  },
  afternoon: {
    tag: "afternoonList",
    listMemory: [],
    listElement: document.querySelector(".afternoon-list"),
  },
  night: {
    tag: "nightList",
    listMemory: [],
    listElement: document.querySelector(".night-list"),
  },
  task: {
    tag: "taskList",
    listMemory: [],
  },
};

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

export function validateInputText(inputText, inputElement) {
  if (inputText === "") {
    inputElement.value = "";
    alert("Please add an item");
    return false;
  }
  return true;
}

export function currentTask() {
  return List.task.listMemory[List.task.listMemory.length - 1];
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
