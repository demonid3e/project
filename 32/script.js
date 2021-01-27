"use strict";
// console.log(document.head);
// console.log(document.documentElement);

// console.log(document.body.childNodes);
// const body = document.querySelectorAll("body");

for (let node of document.body.childNodes) {
  if (node.nodeName == "#text") {
    continue;
  }
  console.log(node);
}

// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);

// will get element of child current 2 levels up
//console.log(document.querySelector("#current").parentNode.parentNode);
//console.log(document.querySelector("#current").parentElement);

// console.log(
//   document.querySelector("[data-current='3']").nextSibling.nextSibling
// );
// console.log(document.querySelector("[data-current='3']").nextElementSibling);
