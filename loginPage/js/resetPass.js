"use strict";

let origin = window.location.origin;
const loginPathName = "/loginPage/index.html";

document.getElementById("goBack").addEventListener("click", function (e) {
  e.preventDefault();
  location.replace(`${origin}${loginPathName}`);
});
