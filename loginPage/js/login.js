import { getUser } from "./modules/users.js";
import * as pathNames from "./modules/pathNames.js";
import * as cookies from "./modules/cookies.js";

document.cookie
  ? (location.href = `${pathNames.origin}${pathNames.homePathName}`)
  : "";

const loginForm = document.querySelector(".form__login");
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  getUser().then((user) => {
    const rememberMe = document.getElementById("rememberMe").checked;
    if (user) {
      rememberMe
        ? cookies.rememberCookie(
            "userID",
            cookies.deleteUserPassword(user),
            cookies.expiryDate().toUTCString()
          )
        : cookies.rememberCookie(
            "userID",
            cookies.deleteUserPassword(user),
            ""
          );
      location.replace(`${pathNames.origin}${pathNames.homePathName}`);
    } else {
      displayErrorMessage();
    }
  });
});

function displayErrorMessage() {
  const message = document.querySelector(".error-message");
  message.classList.add("animate__fadeInLeft");
  message.style.display = "block";
}

document
  .getElementById("forgotPassword")
  .addEventListener("click", function () {
    location.replace(`${pathNames.origin}${pathNames.resetPasswordPathName}`);
  });
