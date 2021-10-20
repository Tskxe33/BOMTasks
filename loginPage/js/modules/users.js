function fetchUsers() {
  const usersURL = "/loginPage/users.json";
  return fetch(usersURL).then((response) => response.json());
}

export function getUser() {
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
