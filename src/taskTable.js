import { List } from "./utils";
import {
  formatTime,
  createButton,
  currentTask,
  updateTotalTime,
} from "./utils";
import { updateStorage } from "./browserStorage";

function deleteTaskFromTable(e) {
  e.stopPropagation();
  const tr = e.target.closest("tr");

  const trs = document.querySelector("tbody").querySelectorAll("tr");

  const index = Array.from(trs).indexOf(tr);

  if (index !== -1) {
    // second boolean is for plus or minus
    updateTotalTime(List.task.listMemory[index].duration, true);

    List.task.listMemory.splice(index, 1);

    updateStorage(List.task);
    tr.remove();
  }
}

export function addTaskToTable(taskToAdd) {
  const task = taskToAdd ? taskToAdd : currentTask();

  const tr = document.createElement("tr");
  tr.classList.add("task-row");

  const tdTask = document.createElement("td");
  const tdCategory = document.createElement("td");
  const tdDuration = document.createElement("td");
  const tdStart = document.createElement("td");
  const tdEnd = document.createElement("td");

  tr.append(tdTask, tdCategory, tdDuration, tdStart, tdEnd);

  tdTask.appendChild(document.createTextNode(task.description));
  tdCategory.appendChild(document.createTextNode(task.category));
  tdDuration.appendChild(document.createTextNode(formatTime(task.duration)));

  tdStart.appendChild(
    document.createTextNode(task.startTime.toLocaleTimeString("en-US"))
  );
  tdEnd.appendChild(
    document.createTextNode(task.endTime.toLocaleTimeString("en-US"))
  );

  tr.addEventListener("mouseenter", (e) => {
    const button = createButton("remove-item btn-link text-red");
    button.classList.add("remove-task");

    button.addEventListener("click", deleteTaskFromTable);
    tr.firstChild.appendChild(button);
  });

  tr.addEventListener("mouseout", (e) => {
    const tr = e.currentTarget;
    const relatedTarget = e.relatedTarget;

    // Check if the relatedTarget is a child of BodyTr
    if (!tr.contains(relatedTarget)) {
      const firstTd = e.currentTarget.firstChild;
      firstTd.removeChild(firstTd.lastChild);
    }
  });

  document
    .querySelector("tbody")
    .insertBefore(tr, document.querySelector("#aggreated-data"));
}

// ------------------------------  Filter Starts -----------------------------------------------

function filterDescription(filterValue) {
  let trTasks = document.querySelector("tbody").querySelectorAll("tr");
  trTasks = Array.from(trTasks);
  trTasks = trTasks.slice(0, -1);

  let filteredTotalTime = "00:00:00";

  trTasks.forEach((task) => {
    const taskDescription = task.firstElementChild.textContent;
    const taskDuration = task.querySelector(":nth-child(3)").textContent;

    if (taskDescription.includes(filterValue)) {
      task.style.display = "";
      filteredTotalTime = addTimes(filteredTotalTime, taskDuration);
    } else {
      task.style.display = "none";
    }
  });

  document.querySelector("#total-time").textContent = filteredTotalTime;
}

function filterCategory(filterValue) {
  let trTasks = document.querySelector("tbody").querySelectorAll("tr");
  trTasks = Array.from(trTasks);
  trTasks = trTasks.slice(0, -1);

  let filteredTotalTime = "00:00:00";

  trTasks.forEach((task) => {
    const taskCategory = task.querySelector(":nth-child(2)").textContent;
    const taskDuration = task.querySelector(":nth-child(3)").textContent;

    if (filterValue === "----" || taskCategory.includes(filterValue)) {
      task.style.display = "";
      filteredTotalTime = addTimes(filteredTotalTime, taskDuration);
    } else {
      task.style.display = "none";
    }
  });

  document.querySelector("#total-time").textContent = filteredTotalTime;
}

function addTimes(timeString1, timeString2) {
  var timeParts1 = timeString1.split(":");
  var hours1 = parseInt(timeParts1[0]);
  var minutes1 = parseInt(timeParts1[1]);
  var seconds1 = parseInt(timeParts1[2]);

  var timeParts2 = timeString2.split(":");
  var hours2 = parseInt(timeParts2[0]);
  var minutes2 = parseInt(timeParts2[1]);
  var seconds2 = parseInt(timeParts2[2]);

  var totalSeconds =
    (hours1 + hours2) * 3600 + (minutes1 + minutes2) * 60 + seconds1 + seconds2;

  var hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  var minutes = Math.floor(totalSeconds / 60);
  var seconds = totalSeconds % 60;

  return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
}

function pad(number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
}

export function initTable() {
  const descriptionFilter = document.querySelector("#description-filter");
  descriptionFilter.addEventListener("input", (e) => {
    filterDescription(e.target.value);
  });

  const categoryFilter = document.querySelector("#category-filter");
  categoryFilter.addEventListener("input", (e) => {
    filterCategory(e.target.value);
  });
}
