import * as cookies from "../modules/cookies.js";
import * as pathNames from "../modules/pathNames.js";

function fetchUsers() {
  const usersURL = "/loginPage/users.json";
  return fetch(usersURL).then((response) => response.json());
}

export function getUser(password, username) {
  return fetchUsers().then((res) => {
    return res.users.find((user) => {
      if (
        user.username === username.value.trim() &&
        user.password === password.value
      )
        return user;
    });
  });
}

export function userToHome() {
  document.cookie
    ? (location.href = `${pathNames.origin}${pathNames.homePathName}`)
    : "";
}

export const checkIfUserLoggedIn = function () {
  return !cookies.getCookieValue("userID");
};
