"use strict";

// const rememberMe = document.getElementById("rememberMe");
const loginForm = document.querySelector(".form__login");

let origin = window.location.origin;
const homePathName = "/loginPage/home.html";
const loginPathName = "/loginPage/index.html";
const resetPasswordPathName = "/loginPage/resetPassword.html";

function displayErrorMessage() {
  const message = document.querySelector(".error-message");
  message.classList.add("animate__fadeInLeft");
  message.style.display = "block";
}

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  getUser().then((res) =>
    res ? location.replace(`${origin}${homePathName}`) : displayErrorMessage()
  );
});

function fetchUsers() {
  const usersURL = "/loginPage/users.json";
  return fetch(usersURL).then((response) => response.json());
}

function getUser() {
  const password = document.getElementById("password");
  const username = document.getElementById("username");
  return fetchUsers().then((res) => {
    return res.users.find((user) => {
      if (
        user.username === username.value.trim() &&
        user.password === password.value
      ) {
        document.querySelector(".error-message").style.display = "none";
        return user;
      }
    });
  });
}

document
  .getElementById("forgotPassword")
  .addEventListener("click", function () {
    location.replace(`${origin}${resetPasswordPathName}`);
  });
