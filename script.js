let numberOfFilms = +prompt("How many films have you watched?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

personalMovieDB.movies[0] = prompt("Last watched film?", "");
personalMovieDB.movies[1] = +prompt("How will you rate it?", "");

console.log(personalMovieDB.count);
console.log(personalMovieDB.movies);
