"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("How many films you watched?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("How many films you watched?", "");
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};
let film;
let rating;

const getFilm = function () {
  film = prompt("Last watched film?", "");
  return film;
};

const getRating = function () {
  rating = +prompt("How will you rate it?", "");
  return rating;
};

function rememberMyfilms() {
  for (let i = 0; i < 2; i++) {
    getFilm();
    getRating();

    if (
      film != null &&
      rating != null &&
      film != "" &&
      rating != "" &&
      film.length < 50
    ) {
      personalMovieDB.movies[film] = rating;
      console.log("Done");
    } else {
      i--;
      console.log("Error");
    }
  }
}
rememberMyfilms();

function detectPersonalLevel() {
  if (personalMovieDB.count <= 10) {
    alert("Watched to few movies!");
  } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
    alert("You are typical movie lover!");
  } else if (personalMovieDB.count > 30) {
    alert("You are movie fan!!!");
  } else {
    alert("Error");
  }
}
detectPersonalLevel();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Your favorite genre? ${i}`, "");
  }
}
writeYourGenres();

function showMyDB(hrenova) {
  if (!hrenova) console.log(personalMovieDB);
}

showMyDB(personalMovieDB.private);

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
