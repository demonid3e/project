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
    addForm = document.querySelector("form.add"),
    addInput = addForm.querySelector(".adding__input"),
    checkbox = document.querySelector("[type='checkbox']"),
    remover = document.querySelectorAll(".delete");

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
    sortArray(films);

    films.forEach((film, i) => {
      parent.innerHTML += `<li class="promo__interactive-item">
        ${i + 1}, ${film}
        <div class="delete"></div>
        </li>`;
    });

    document.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);
        createMovieList(parent, films);
      });
    });
  }

  deleteAdv(adv);
  makeChanges();
  createMovieList(movieDB.movies, movieList);
});
