"use strict";

const options = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    background: "red",
  },
  makeTest: function () {
    console.log("Test");
  },
};
// Cycles trought the object and gets the values.
let counter = 0;
for (let key in options) {
  if (typeof options[key] === "object") {
    for (let i in options[key]) {
      console.log(`This is propertie ${key} in ${options[key][i]}`);
      counter++;
    }
  } else {
    console.log(`This is propertie ${key} in ${options[key]}`);
    counter++;
  }
}
console.log("The number of keys in this object is", counter);

//destructorisation
const { border, background } = options.colors;
console.log(border);
