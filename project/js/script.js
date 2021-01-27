"use strict";
document.addEventListener("DOMContentLoaded", () => {
  // Database of films
  let movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };
  // getting var from dom
  const adv = document.querySelectorAll(".promo__adv img"),
    movieList = document.querySelector(".promo__interactive-list"),
    changeText = document.querySelector(".promo__genre"),
    poster = document.querySelector(".promo__bg"),
    remover = document.querySelectorAll(".promo__interactive-item"),
    addForm = document.querySelector("form.add"),
    addInput = addForm.querySelector(".adding__input"),
    buttonInput = document.querySelector(".submitFilm"),
    checkbox = document.querySelector("[type='checkbox']");

  // removing ads from right side
  const deleteAdv = (arr) => {
    arr.forEach((item) => {
      item.remove();
    });
  };

  // changing title
  // changing background
  const makeChanges = () => {
    changeText.textContent = "Drama";
    poster.style.backgroundImage = "url(img/bg.jpg)";
  };

  const sortArray = (arr) => {
    arr.sort();
  };

  addForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let newFilm = addInput.value;
    const favorite = checkbox.checked;

    if (newFilm) {
      // checks if length is more than 21 then slices after 21character and adds ...
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`;
      }
      movieDB.movies.push(newFilm);
      sortArray(movieDB.movies);
      createMovieList(movieDB.movies, movieList);
      if (favorite) {
        alert("Adding your favorite film!");
      }
    }
    event.target.reset();
  });

  function createMovieList(films, parent) {
    parent.innerHTML = "";
    films.forEach((film, i) => {
      parent.innerHTML += `<li class="promo__interactive-item">
        ${i + 1}, ${film}
        <div class="delete"></div>
        </li>`;
    });
  }
  deleteAdv(adv);
  makeChanges();
  sortArray(movieDB.movies);
  createMovieList(movieDB.movies, movieList);
});
