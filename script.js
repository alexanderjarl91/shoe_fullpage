//import function from module
import { toggleInvert } from "./invert.js";

//click listener that uses that imported function
document.querySelector("#button").addEventListener("click", function () {
  toggleInvert();
});
