import { memoryStorageList } from "./inputControl";
import { formatTime, createButton, currentTask } from "./utils";
import { updateStorage } from "./browserStorage";

function deleteTaskFromTable(e) {
  e.stopPropagation();
  const tr = e.target.closest("tr");

  const trs = document.querySelector("tbody").querySelectorAll("tr");

  const index = Array.from(trs).indexOf(tr);

  if (index !== -1) {
    memoryStorageList.task_list.splice(index, 1);
  }

  updateStorage("taskList", memoryStorageList.task_list);
  tr.remove();
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
  let divTasks = document.querySelector("tbody").querySelectorAll("tr");
  divTasks = Array.from(divTasks);
  divTasks = divTasks.slice(0, -1);

  divTasks.forEach((div) => {
    const taskDescription = div.firstElementChild.textContent;

    div.style.display = taskDescription.includes(filterValue) ? "" : "none";
  });
}

function filterCategory(filterValue) {
  let divTasks = document.querySelector("tbody").querySelectorAll("tr");
  divTasks = Array.from(divTasks);
  divTasks = divTasks.slice(0, -1);

  divTasks.forEach((div) => {
    const taskCategory = div.querySelector(":nth-child(2)").textContent;

    div.style.display =
      filterValue === "----" || taskCategory.includes(filterValue)
        ? ""
        : "none";
  });
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
