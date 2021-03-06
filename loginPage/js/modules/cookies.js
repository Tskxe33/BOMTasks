export function getCookieValue(cookieName) {
  let cookie = document.cookie
    .split("; ")
    .find((name) => name.startsWith(cookieName));

  return cookie;
}

export function expiryDate() {
  const date = new Date();
  date.setMonth(date.getMonth() + 1);

  return date;
}

export function rememberCookie(name, value, days) {
  document.cookie = `${name}=${value}; expires=${days}`;
}

function yesterday() {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return date;
}

export function removeCookie(name) {
  document.cookie = `${name}=; expires=${yesterday().toUTCString()}`;
}

export function deleteUserPassword(user) {
  const cookie = user;
  delete cookie.password;
  return JSON.stringify(cookie);
}
