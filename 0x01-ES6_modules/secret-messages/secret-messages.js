import { toggleHiddenElement } from "../modules/dom-functions";

// prompt("hello lukindo");
//lets grab the element
const buttonElement = document.querySelector("#secret-button");
const pElement = document.getElementById("secret-p");

//when the btn is clicked it should show the para
buttonElement.addEventListener("click", () => {
  //   prompt("Imebonyezwa");
  //   if (pElement.style.display === "none") {
  //     pElement.style.display = "block";
  //   } else {
  //     pElement.style.display = "none";
  //   }
  toggleHiddenElement(pElement);
});
