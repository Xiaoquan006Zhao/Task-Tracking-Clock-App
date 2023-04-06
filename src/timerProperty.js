import { formatTime, currentTask } from "./utils";
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
  timerProperty.timerRunning = false;

  const endTime = new Date();
  currentTask().endTime = endTime;
  currentTask().duration = endTime - currentTask().startTime;

  timerProperty.totalTime += currentTask().duration;
  document.querySelector("#total-time").textContent = formatTime(
    timerProperty.totalTime
  );
}
