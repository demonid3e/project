////////////////////////////////////
//////////// Data Types/////////////
////////////////////////////////////
////Primitive data types
// numbers
let number = 4.6; //decimals must be presented with dot

console.log(4 / 0); // will show Infinity
console.log(-4 / 0); // will show -Infinity

console.log("string" / 9); // will result NaN

// strings
const persone = "Alex";
// boolean
const bool = true;

// null
console.log(something); // will result null as there is no such variable.

// undefined
let und;
console.log(und); // variable is not defined
// Symbol
// BigInt

////Non-Primitive
//Objects
const obj = {
  // can hold data (object properties) and actions (methods of object)
  // stored in key/value style
  name: "Dema",
  age: 25,
  isMarried: false,
};
console.log(obj["name"]);
console.log(obj.isMarried);
// Arrays is object with data that is kept in strict order

let arr = ["plum.png", "orange.jpg", "apple.bmp", 6, {}, []]; // can all data types

console.log(arr[1]); // will show orange.jpg  as it starts from 0,1,2

// functions
// data objects
// regular expressions
// errors

////////////////////////////////////////
//////// Basic User interaction /////////
///////////////////////////////////////////////
alert("hello");

// Will popup the ok/cancel window with result being stored as boolean in "result"
{
  const result = confirm("Are you here?");
  console.log(result);
}
// Will prompt user for the answer. Need to have 2 double quotes for answer.
// Can enter default message in second quotes.
const answer = prompt("Are you 18?", "18");
// answer will always be string
console.log(typeof answer);

// writing answer into array
const answers = [];
answers[0] = prompt("Whats your name?", "");
answers[1] = prompt("Whats your surname?", "");
answers[2] = +prompt("Whats your age?", "");

// document.write(answers);

//////////////////////////////////////////
/////////////////Variables////////////////
//////////////////////////////////////////
// Cant start with number or special characters or use reserved words
// apart from $ or _ ///  are case sensitive
{
  let number = 5;
  const leftBorderWidth = 1;

  number = 10;
  console.log(number); //will show 10
}
// there is no true constants in JS
{
  const obj = {
    a: 50,
  };
  obj.a = 10;
  console.log(obj);
}
// will show undefined as variable is used before it`s been declare. Wrong!!
{
  console.log(name);
  var name = "Ivan";
}

// result showing as not define due to variable exist in scope
{
  let result = 50;
}
console.log(result);

// modern derective, helps prevent errors in JS code
("use strict");
