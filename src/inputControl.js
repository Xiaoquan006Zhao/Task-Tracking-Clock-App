const taskInput = document.querySelector("#task-input");
const categorySelect = document.querySelector("#category-select");
const startBtn = document.querySelector("#start-button");
const taskTableBody = document.querySelector("tbody");
const totalTimeElement = taskTableBody.querySelector("#total-time");
const tableAggreatedData = taskTableBody.querySelector("#aggreated-data");
const currentTaskElement = document.querySelector("#current-task");
const recordTimeElement = document.querySelector("#record-time");

const taskList = [];
let startTime = 0;
let delta = 0;
let timerId = 0;
let timerRunning = false;
let currentTask;
let totalTime = 0;

// start
function startTimer() {
  timerRunning = true;
  startBtn.textContent = "Stop";
  startBtn.classList.add("timer-starts");

  startTime = new Date();
  timerId = setInterval(function () {
    delta = Date.now() - startTime; // milliseconds elapsed since start
    recordTimeElement.textContent = formatTime(delta);
  }, 1000); // update about every second

  currentTask = {
    description: taskInput.value,
    category: categorySelect.value,
    startTime: startTime,
  };
  taskList.push(currentTask);
  taskInput.value = "";

  currentTaskElement.textContent = `Current Task: ${currentTask.description}`;
}

function stopTimer() {
  timerRunning = false;
  startBtn.classList.remove("timer-starts");

  startBtn.textContent = "Start";
  const endTime = new Date();
  currentTask.endTime = endTime;
  currentTask.duration = endTime - currentTask.startTime;

  totalTime += currentTask.duration;
  totalTimeElement.textContent = formatTime(totalTime);

  currentTaskElement.textContent = `Current Task:`;
  recordTimeElement.textContent = "00:00:00";

  updateTaskList();
}

function init() {
  taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      startTimer();
    }
  });
  startBtn.addEventListener("click", (e) => {
    if (!timerRunning) {
      startTimer();
    } else {
      clearInterval(timerId);
      stopTimer();
    }
  });
}

function updateTaskList() {
  const tr = document.createElement("tr");
  const tdTask = document.createElement("td");
  const tdCategory = document.createElement("td");
  const tdDuration = document.createElement("td");
  const tdStart = document.createElement("td");
  const tdEnd = document.createElement("td");

  tr.append(tdTask, tdCategory, tdDuration, tdStart, tdEnd);
  tdTask.appendChild(document.createTextNode(currentTask.description));
  tdCategory.appendChild(document.createTextNode(currentTask.category));
  tdDuration.appendChild(
    document.createTextNode(formatTime(currentTask.duration))
  );

  tdStart.appendChild(
    document.createTextNode(currentTask.startTime.toLocaleTimeString("en-US"))
  );
  tdEnd.appendChild(
    document.createTextNode(currentTask.endTime.toLocaleTimeString("en-US"))
  );

  taskTableBody.insertBefore(tr, tableAggreatedData);
}

function formatTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const paddedHours = hours.toString().padStart(2, "0");
  const paddedMinutes = minutes.toString().padStart(2, "0");
  const paddedSeconds = seconds.toString().padStart(2, "0");

  return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
}

init();
