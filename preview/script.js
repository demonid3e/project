"use strict";
const btn = document.querySelectorAll("button"),
  overlay = document.querySelector(".overlay");

// // bad way of doing it
// btn.onclick = function () {
//   alert("Test alert");
// };

// btn.onclick = function () {
//   alert("second alert");
// };

// btn.addEventListener("click", () => {
//   alert("Clicked");
// });

const deleteElement = (element) => {
  // element.target.remove();
  console.log(element.target);
};

// adding event listener to all psyodo array
btn.forEach((item) => {
  item.addEventListener("click", deleteElement, { once: true });
});

// change browser`s default responce
const link = document.querySelector("a");
link.addEventListener("click", (event) => {
  event.preventDefault();

  console.log(event.target);
});
