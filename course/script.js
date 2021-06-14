"use strict";
{
  /* <body>
    <div class="box" id="box"></div>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <button>5</button>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="wrapper">...</div>
    <script src="script.js"></script>
    <script src="project.js"></script>
  </body> */
}

const box = document.getElementById("box");

console.log(box); //    <div class="box" id="box"></div>

const btns = document.getElementsByTagName("button"); // get pseydoarray class="buttons"
// doesnt have any methods no properties apart from lenght
// even if there is only one element it still will be pseydoarray
const btn2 = document.getElementsByTagName("button")[1]; // will get second button only
const btn3 = btns[2];
console.log(btn3); // will get button 3

const circles = document.getElementsByClassName("circle"); // get pseydoarray class="circle"

///////////// Modern style//////////

const hearts = document.querySelectorAll(".hearts"); // using css selectors and has forEach method
hearts.forEach((item) => {
  console.log(item);
});

const oneHeart = document.querySelector(".hearts");
console.log(oneHeart); // will give first element with css selector "hearts"
