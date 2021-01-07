"use strict";

const numberOfFilms = +prompt("How many films have you watched?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

const a = prompt("Last watched film?", ""),
  b = +prompt("How will you rate it?", ""),
  c = prompt("Last watched film?", ""),
  d = +prompt("How will you rate it?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
