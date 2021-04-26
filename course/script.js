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
