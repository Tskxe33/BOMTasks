"use strict";

const btnStart = document.querySelector(".btn-start");
const btnStop = document.querySelector(".btn-stop");
const btnReset = document.querySelector(".btn-reset");

let interval; // COMMENT: works only globally
let seconds, tens, minutes;

function init() {
  const secondsEl = document.querySelector(".stopWatch__seconds");
  const tensEl = document.querySelector(".stopWatch__tens");
  const minutesEl = document.querySelector(".stopWatch__minutes");

  clearInterval(interval);
  minutesEl.textContent = `00`;
  secondsEl.textContent = `00`;
  tensEl.textContent = `00`;
  seconds = 0;
  tens = 0;
  minutes = 0;
}

init();

function getInterval() { //promeniti naziv 
  clearInterval(interval);
  interval = setInterval(() => runTimer(), 10);
}

function stopInterval() {
  clearInterval(interval);
}

function runTimer() {
  const secondsEl = document.querySelector(".stopWatch__seconds");
  const tensEl = document.querySelector(".stopWatch__tens");
  const minutesEl = document.querySelector(".stopWatch__minutes");
  tens++; // stotinke
  if (tens > 99) {
    tens = 0;
    ++seconds;
    secondsEl.textContent = seconds < 10 ? `0${seconds}` : seconds;
  }

  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    minutesEl.textContent = minutes < 10 ? `0${minutes}` : minutes;
  }

  tensEl.textContent = tens < 10 ? `0${tens}` : tens;
}

btnStart.addEventListener("click", getInterval);

btnStop.addEventListener("click", stopInterval);

btnReset.addEventListener("click", init);
