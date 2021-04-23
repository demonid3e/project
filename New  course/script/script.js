"use strict";
/////////////// Basic User interaction /////////
alert("hello");

// Will popup the ok/cancel window with result being stored as boolean in "result"
const result = confirm("Are you here?");
console.log(result);

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

document.write(answers);
//////////////////////////////////////////
/////////////////Variables////////////////
//////////////////////////////////////////
let number = 5;
const leftBorderWidth = 1;
