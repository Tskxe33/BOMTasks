"use strict";

import * as pathNames from "./modules/pathNames.js";

const logout = document.getElementById("logout");

logout.addEventListener("click", function () {
  location.replace(`${pathNames.origin}${pathNames.loginPathName}`);
});
