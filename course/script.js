"use strict";

/////// Array and pseudo Array ////////

const arr = [1, 2, 3, 6, 8];

// property length last id of array +1
console.log(arr.length);

arr.pop(); // removes last element

arr.push(10); // add element to the end

arr.shift(); // deletes first element from array and returns new array

arr.unshift("a"); // adds element to the beggining of array

delete arr[1]; // deletes second element in array

// will create array from string if entered with ","

const str = prompt("", ""); // java,ggg,hhh,jjj
const products = str.split("", "");

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
//
const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

const months1 = ["March", "Jan", "Feb", "Dec"];
months1.sort();
console.log(months1);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]

function compareNumbers(a, b) {
  return a - b;
}

arr.reverse(); // will reverse the order of elements

arr.concat("item1"); // creates new array in which copies all elements and adds "item1"

const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(""));
// expected output: "FireAirWater"

console.log(elements.join("-"));
// expected output: "Fire-Air-Water"

/////////////////////////////////////
// use of "for" loop in array
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// use of  "for of" loop // can use break and continue
for (let value of arr) {
  console.log(value);
}

// takes 3 arguments: Item, number in array, and The array forEach() was called upon
arr.forEach((item, numberInorder, arr) => {
  console.log(`${item}: ${numberInorder} in array ${arr}`);
});
