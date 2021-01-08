"use strict";

const numberOfFilms = +prompt("How many films have you watched?", "");

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
if (personalMovieDB.count < 10) {
  alert("Watched to few movies!");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
  alert("You are typical movie lover!");
} else if (personalMovieDB.count > 30) {
  alert("You are movie fan!!!");
} else {
  alert("Error");
}
console.log(personalMovieDB);

// Calculation fuction
function calc(a, b) {
  return a + b;
  // Function breaks after return!
}

console.log(calc(2, 6));

// Takes text as argument to show in console log
function showFirstText(text) {
  console.log(text);
}
showFirstText("Hello world");

// example of scope and global variable

let num = 20;

function callNumber() {
  let num = 30;
  console.log(num);
}
callNumber();
