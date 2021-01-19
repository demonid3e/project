"use strict";

const box = document.getElementById("box"),
  btns = document.getElementsByTagName("button"),
  circles = document.getElementsByClassName("circle"),
  wrapper = document.querySelector(".wrapper"),
  hearts = wrapper.qerySelectorAll(".heart"),
  oneHeart = wrapper.querySelector(".heart");

// box.style.backgroundColor = "blue";
// box.style.width = "500px";

// passing cssstyle inline as text
let num = "500px";
box.style.cssText = `background-color: green; width: ${num} `;

btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "green";
//cant circles.style.backgroundColor = "green";  because "circles" Pseudo object"

// old style method
for (let i = 0; i < hearts.length; i++) {
  hearts[i].style.backgroundColor = "blue";
}

// colors each heart blue in loop
hearts.forEach((item) => {
  item.style.backgroundColor = "blue";
});

// creates a new element "div in this case" it exists only in JS
const div = document.createElement("div");
// styled it with .black from css
div.classList.add("black");
//now added created element to end of <body>
//  document.body.append(div);

// creates just text
const text = document.createTextNode("This is text");

// puts element to the beginning
wrapper.append(div);
// wrapper.appendChild(div);

// old style
// wrapper.insertBefore(div, hearts[0]);
// wrapper.removeChild(hearts[1]);
// wrapper.replaceChild(circles[0], hearts[0]);

// hearts[0].after(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[0]);

// inserting HTML text into created object"div"
div.innerHTML = "<h1>Hello World</h1>";

// inserting ONlY text
// div.textContent = "Hello";

div.insertAdjacentHTML("beforeend", "<h2>Hello</h2>");
