"use strict";

const numberOfFilms = +prompt("How many films have you watched?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

for (let i = 0; i < 2; i++) {
  const film = prompt("Last watched film?", ""),
    rating = +prompt("How will you rate it?", "");
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
