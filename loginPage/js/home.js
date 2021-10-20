"use strict";

let origin = window.location.origin;
const loginPathName = "/loginPage/index.html";

const logout = document.getElementById("logout");

logout.addEventListener("click", function () {
  location.replace(`${origin}${loginPathName}`);
});
