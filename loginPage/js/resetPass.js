import * as cookies from "./modules/cookies.js";
import * as pathNames from "./modules/pathNames.js";

document.getElementById("goBack").addEventListener("click", function (e) {
  e.preventDefault();
  location.replace(`${pathNames.origin}${pathNames.loginPathName}`);
});
