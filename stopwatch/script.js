"use strict";

const btnStart = document.querySelector(".btn-start");
const btnStop = document.querySelector(".btn-stop");
const btnReset = document.querySelector(".btn-reset");

let interval; // COMMENT: works only globally
let seconds, tens;

function init() {
  const secondsEl = document.querySelector(".stopWatch__seconds");
  const tensEl = document.querySelector(".stopWatch__tens");
  clearInterval(interval);
  secondsEl.textContent = `00`;
  tensEl.textContent = `00`;
  seconds = 0;
  tens = 0;
}

init();

function getInterval() {
  clearInterval(interval);
  interval = setInterval(() => runTimer(), 10);
}

function stopInterval() {
  clearInterval(interval);
}

function runTimer() {
  const secondsEl = document.querySelector(".stopWatch__seconds");
  const tensEl = document.querySelector(".stopWatch__tens");
  tens++;
  if (tens > 99) {
    tens = 0;
    ++seconds;
    secondsEl.textContent = seconds < 10 ? `0${seconds}` : seconds;
  }
  tensEl.textContent = tens < 10 ? `0${tens}` : tens;
}

btnStart.addEventListener("click", getInterval);

btnStop.addEventListener("click", stopInterval);

btnReset.addEventListener("click", init);
