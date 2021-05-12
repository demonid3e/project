"use strict";

// old style of creating
const abj = new Object();

const options = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    background: "red",
  },
  // creating a new method of an object
  makeTest: function () {
    console.log("This is test");
  },
};

console.log(options.name);

// delete options.name;

console.log(options);

// cycle trought the object/keys

let counter = 0;
for (let key in options) {
  if (typeof options[key] === "object") {
    for (let i in options[key]) {
      console.log(`Property ${i}, has Value: ${options[key][i]} `);
      counter++;
    }
  } else {
    console.log(`Property ${key}, has Value: ${options[key]} `);
    counter++;
  }
}

console.log(counter);

// iterates trought options.keys and then gets the lenght of the result
console.log(Object.keys(options).length);

options.makeTest();

/////Object destructarisation//////

const { border, background } = options.colors;
console.log(border);
