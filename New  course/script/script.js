////////////Java Script Operators///////////
///////////////////////////////////////////

console.log("arr" + "- object"); // concatination = arr-object
console.log(4 + "5"); // =  45
console.log(4 + +"5"); // unary plus will convert string to number = 9

// Prefix and postfix notation

let incr = 10,
  decr = 10;
// incr is 10 and then ++ adds one same with decr
incr++;
decr--;
// then console prints the result = 11/9
console.log(incr);
console.log(decr);

// when postfix used right away  it will print incr value = 10 then will add one
console.log(incr++); // incr = 10 + incr++ then log then increment++
console.log(--decr); // will show 8

// Remainder operator
console.log(5 % 2); // = 1 which is remainder of 5/2

//Equality operator

console.log(2 * 4 == 8); // will result true
console.log(2 * 4 == "8"); // number 8  compared to string "8" = true
console.log(2 * 4 === "8"); // Strict comparason will result false
console.log(2 + 2 * 2 != "6"); //  6 "not equal" 6 = false. because they are equal
console.log(2 + 2 * 2 !== "6"); // strict compareson = true, because number compared with string

const isChecked = true,
  isClose = true,
  isNotChecked = false;

console.log(isChecked && isClose); // will check if BOTH of them are true then = true.
console.log(isChecked && isNotChecked); // = false

console.log(isChecked || isNotChecked); // will = true as at least one of the arguments true
console.log(isNotChecked || isNotChecked); // = false, as neather are true

console.log(isNotChecked || !isNotChecked); // using !"not" operator we changing false to true
// will result true. we have false or  !not false

/////////////String Interpolation////////////
////////////////////////////////////////////

// Old style was using concateonation to add additional variables
const category = "toys";
console.log("http://someurl.com/" + category + "/", +"4");

//modern style must use  " `` "
console.log(`http://somerl.com/${category}/5`);

const user = "Ivan";
alert(`Hello, ${user}`);

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

//////// Basic User interaction ////////
////////////////////////////////////////
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
