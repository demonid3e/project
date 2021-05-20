"use strict";
////// Dynamic Data Types ///////

// To String
console.log(String(null)); // typeof String
console.log(String(4)); // typeof String
console.log(5 + ""); // typeof String when adding string always string

const num = 5;
console.log("https://vk.com/catalog/" + num); // https://vk.com/catalog/5

const fontSize = 26 + "px";

// To Number

console.log(Number("4")); // string to number Typeof number
console.log(+"5"); // unary + typeof number
console.log(parseInt("15px", 10)); // 15 typeof number

// let answ = +prompt("Hello", ""); // string to number

// To Boolean

// always false:  0, "", null, undefined, NaN;

let switcher = null;

if (switcher) {
  console.log("Working...");
}
