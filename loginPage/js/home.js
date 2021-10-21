import * as pathNames from "./modules/pathNames.js";
import * as cookies from "./modules/cookies.js";

const logout = document.getElementById("logout");
if (
  !cookies.getCookieValue("userID") &&
  location.href == `${pathNames.origin}${pathNames.homePathName}`
) {
  location.href = `${pathNames.origin}${pathNames.loginPathName}`;
}

logout.addEventListener("click", function () {
  location.replace(`${pathNames.origin}${pathNames.loginPathName}`);
  cookies.removeCookie("userID");
});
