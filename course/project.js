"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("How many films have you watched?", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("How many films have you watched?", "");
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
    console.log(i);

    if (
      film != null &&
      rating != null &&
      film.length < 50 &&
      film != "" &&
      rating != ""
    ) {
      personalMovieDB.movies[film] = rating;
      console.log("Film added");
    } else {
      console.log("Error");
      i--;
    }
  }
}

rememberMyfilms();

function detectPersonalLevel() {
  if (personalMovieDB.count >= 30) {
    alert("Your are Kinoman");
  } else if (personalMovieDB.count < 10) {
    alert("You watch too few films");
  } else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
    alert("Your are classic viewer");
  } else {
    console.log("Error numberoffilms");
  }
}
detectPersonalLevel();

function showMyDB() {
  if (personalMovieDB.private == false) {
    console.log(personalMovieDB);
  }
}
showMyDB();

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    const askGenres = prompt(`Your Favorit genre number ${i + 1}?`, "");
    personalMovieDB.genres[i] = askGenres;
  }
}

writeYourGenres();
