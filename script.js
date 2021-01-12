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
// checks the argument for true or false
function showMyDB(hrenova) {
  if (!hrenova) console.log(personalMovieDB);
}

showMyDB(personalMovieDB.private);
