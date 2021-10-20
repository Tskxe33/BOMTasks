import { getUser } from "./modules/users.js";
import * as pathNames from "./modules/pathNames.js";

// const rememberMe = document.getElementById("rememberMe");
const loginForm = document.querySelector(".form__login");

function displayErrorMessage() {
  const message = document.querySelector(".error-message");
  message.classList.add("animate__fadeInLeft");
  message.style.display = "block";
}

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  getUser().then((res) =>
    res
      ? location.replace(`${pathNames.origin}${pathNames.homePathName}`)
      : displayErrorMessage()
  );
});

document
  .getElementById("forgotPassword")
  .addEventListener("click", function () {
    location.replace(`${pathNames.origin}${pathNames.resetPasswordPathName}`);
  });
