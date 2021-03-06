import * as pathNames from "./modules/pathNames.js";
import * as cookies from "./modules/cookies.js";
import { checkIfUserLoggedIn } from "./modules/users.js";

const logout = document.getElementById("logout");

function userToLogin() {
  if (
    checkIfUserLoggedIn() &&
    location.href == `${pathNames.origin}${pathNames.homePathName}`
  )
    location.href = `${pathNames.origin}${pathNames.loginPathName}`;
}
userToLogin();

function displayUserName() {
  const message = document.querySelector(".home__heading ");

  const cookieValue = cookies.getCookieValue("userID");
  let user = cookieValue.split("=");
  const cookieName = JSON.parse(user[1]);
  message.textContent = `Greetings ${cookieName.name} `;
}

displayUserName();

logout.addEventListener("click", function () {
  location.replace(`${pathNames.origin}${pathNames.loginPathName}`);
  cookies.removeCookie("userID");
});
