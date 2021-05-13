"use strict";

///////// Spread Operator ///////

// with Primitive data types it works wih VALUES
let a = 5,
  b = a;

b = b + 5;

console.log(b); // 10
console.log(a); // 5

// Non primitive data types it works by LINKS/REFERENCES

const obj = {
  a: 5,
  b: 1,
};
// it only makes the link to obj not copying it value
const copy = obj;

copy.a = 10;
console.log(copy); // {a: 10, b: 1};
console.log(obj); // {a:10, b: 1};

// surface copy only copies the first level object
function copyObj(mainObject) {
  let objCopy = {};

  let key;
  for (key in mainObject) {
    objCopy[key] = mainObject[key];
  }
  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
};

const newNumbers = copyObj(numbers);
newNumbers.a = 10;
console.log(newNumbers); // { a: 10, b: 5, c: { x: 7, y: 4 } }
console.log(numbers); // { a: 2, b: 5, c: { x: 7, y: 4 } }

//// Object Assign///

const add = {
  d: 17,
  e: 20,
};

const combined = Object.assign(numbers, add);
console.log(combined);
// { a: 2, b: 5, c: { x: 7, y: 4 }, d: 17, e: 20 }

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add); // { d: 17, e: 20 }
console.log(clone); // { d: 20, e: 20 }

//// Array Copy ////

const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice();

newArray[1] = "fsfsdf";
console.log(oldArray); // [ 'a', 'b', 'c' ]
console.log(newArray); // [ 'a', 'fsfsdf', 'c' ]

// ES 6 ES 8 spread operator

const video = ["youtube", "vimeo", "rutube"],
  blogs = ["wordpress", "livejournal", "blogger"],
  internet = [...video, ...blogs, "vk", "facebook"];
console.log(internet);
// ['youtube','vimeo','rutube','wordpress','livejournal','blogger','vk','facebook']

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 7];
log(...num);

// will make surface copy using spread operator
const array = ["a", "b"];
const newAaray = [...array];

//  ES9 standart but will work in ES8
const q = {
  one: 1,
  two: 2,
};

const w = { ...q };
