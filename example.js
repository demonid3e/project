//when calling a function speakingLanguages first argument is passed as text to be inserted in ${lang}
// second argument is function done which is passed as is.

function speakingLanguages(lang, callback) {
  alert(`I speak ${lang}`);
  callback();
}

function done() {
  alert("Done");
}

speakingLanguages(`Javascript`, done);

// function showMyDB(hidden) {
//   if (personalMovieDB.private == false) {
//     console.log(personalMovieDB);
//   }
// }

// // Calculation fuction
// function calc(a, b) {
//   return a + b;
//   // Function breaks after return!
// }

// console.log(calc(2, 6));

// // Takes text as argument to show in console log
// function showFirstText(text) {
//   console.log(text);
// }
// showFirstText("Hello world");

// // example of scope and global variable

// let num = 20;
// // Type of: function declaration, can be called before it is read.

// function callNumber() {
//   let num = 30;
//   console.log(num);
// }
// callNumber();

// // Type of: function expression, only called when its read.

// const calculus = function (a, b) {
//   return a + b;
// };
// console.log(calculus(5, 3));

// // Type of: arrow function, doesnt have contects "THIS???"

// const calCulus = (a, b) => {
//   return a + b;
// };
// //or if its only 1 line can write like this
// const balCulus = (a, b) => a + b;
// //or if only 1 argument
// const galCulus = (a) => a + 7;

// console.log(galCulus(4));
