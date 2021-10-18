"use sctrict";

const redEl = document.querySelector(".red");
const yellowEl = document.querySelector(".yellow");
const greenEl = document.querySelector(".green");
let redInterval;
let yellowInterval;
let greenInterval;

function stopInterval(interval) {
  clearInterval(interval);
}

function activeRed() {
  redInterval = setInterval(function () {
    redEl.classList.add("active-red");
    greenEl.classList.remove("active-green");
  }, 3000);
}

activeRed();

function activeYellow() {
  yellowInterval = setInterval(() => {
    yellowEl.classList.add("active-yellow");
  }, 5000);
}

activeYellow();

function activeGreen() {
  greenInterval = setInterval(() => {
    greenEl.classList.add("active-green");
    redEl.classList.remove("active-red");
    yellowEl.classList.remove("active-yellow");
  }, 7500);
}

activeGreen();
