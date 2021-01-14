"use strict";
// right way to inherit prototype
const soldier = {
  health: 400,
  armor: 160,
  sayHello: function () {
    console.log("Hello");
  },
};

const joe = Object.create(soldier);

joe.sayHello();

// const john = {
//   health: 100,
// };

// Object.setPrototypeOf(john, soldier);
// old style of codding absolente
// john.__proto__ = soldier;

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//   }

//   const num = [2, 5, 7];

//   log(...num);

// const array = ["a", "b"];

// const newAaray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};

// const oldArray = ["a", "b", "c"];
// const newArray = oldArray.slice();

// newArray[1] = "Demon";

// console.log(newArray);
// console.log(oldArray);

// const video = ["youtube", "vimeo", "rutube"],
//       blogs = ["wordpress", "livejournal", "blogger"],
//       internet = [...video, ...blogs, "vk", "facebook"];
// console.log(internet);

// const arr = [12, 3, 46, 8, 10];

// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//   return a - b;
// }

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// cycles trough array showing its id, value, array. Cant use break or continue
// arr.forEach(function (item, i, arr) {
//   console.log(`${i}: ${item} inside Array ${arr}`);
// });

// remove last
//arr.pop();

//add to last
//arr.push(10);
//console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

// "use strict";

// const options = {
//   name: "test",
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: "black",
//     background: "red",
//   },
//   makeTest: function () {
//     console.log("Test");
//   },
// };
// // Cycles trought the object and gets the values.
// let counter = 0;
// for (let key in options) {
//   if (typeof options[key] === "object") {
//     for (let i in options[key]) {
//       console.log(`This is propertie ${key} in ${options[key][i]}`);
//       counter++;
//     }
//   } else {
//     console.log(`This is propertie ${key} in ${options[key]}`);
//     counter++;
//   }
// }
// console.log("The number of keys in this object is", counter);

// //destructorisation
// const { border, background } = options.colors;
// console.log(border);

// creates array from users input if entered with ", "
// const str = prompt("","");
// const products = str.split(", ");
// console.log(products);

// creates array from users input if entered with ", "
//and then joins it in a string formated with ";"
// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join("; "));
