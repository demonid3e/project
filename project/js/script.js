/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

"use strict";
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
