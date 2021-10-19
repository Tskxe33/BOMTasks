"use sctrict";

const redEl = document.querySelector(".red");
const yellowEl = document.querySelector(".yellow");
const greenEl = document.querySelector(".green");
let redInterval;
let yellowInterval;
let greenInterval;

function startTrafficLight() {
  redInterval = setTimeout(() => {
    activeRed();
  }, 3800);

  yellowInterval = setTimeout(() => {
    activeYellow();
  }, 6000);

  greenInterval = setTimeout(() => {
    activeGreen();
  }, 7500);
}

let interval = setInterval(() => {
  startTrafficLight();
}, 8000);

function activeRed() {
  // redInterval = setInterval(function () {
  //   redEl.classList.add("active-red");
  //   greenEl.classList.remove("active-green");
  // }, 3800);
  redEl.classList.add("active-red");
  greenEl.classList.remove("active-green");
}

// activeRed();

function activeYellow() {
  // yellowInterval = setInterval(() => {
  //   yellowEl.classList.add("active-yellow");
  // }, 5300);

  yellowEl.classList.add("active-yellow");
}

// activeYellow();

function activeGreen() {
  // greenInterval = setInterval(() => {
  //   greenEl.classList.add("active-green");
  //   redEl.classList.remove("active-red");
  //   yellowEl.classList.remove("active-yellow");
  //   clearInterval(redInterval);
  //   clearInterval(yellowInterval);
  //   activeRed();
  //   activeYellow();
  // }, 7500);

  greenEl.classList.add("active-green");
  redEl.classList.remove("active-red");
  yellowEl.classList.remove("active-yellow");

  // activeRed();
  // activeYellow();
}

// activeGreen();
