import { formatTime, currentTask, updateTotalTime } from "./utils";
import { startButton } from "./buttons/buttons";

export const timerProperty = {
  timerRunning: false,
  startTime: 0,
  timerId: 0,
  delta: 0,
  totalTime: 0,
};

// helper method to initialize timer property in startTimer()
export function startTimerProperty() {
  startButton(true);

  document.querySelector(".current-task-dislay").classList.remove("bg-light");
  document.querySelector(".current-task-dislay").classList.add("bg-nice");

  // start counting
  timerProperty.timerRunning = true;
  timerProperty.startTime = new Date();
  timerProperty.timerId = setInterval(function () {
    timerProperty.delta = Date.now() - timerProperty.startTime; // milliseconds elapsed since start
    document.querySelector("#record-time").textContent = formatTime(
      timerProperty.delta
    );
  }, 1000); // update about every second
}

// helper method to calculate/update timer property in startTimer()
export function stopTimerProperty() {
  startButton(false);

  document.querySelector(".current-task-dislay").classList.add("bg-light");
  document.querySelector(".current-task-dislay").classList.remove("bg-nice");

  // stop the timer
  timerProperty.timerRunning = false;
  const endTime = new Date();
  currentTask().endTime = endTime;
  currentTask().duration = endTime - currentTask().startTime;

  updateTotalTime(currentTask().duration);
}
