const logo = document.querySelector(".header-logo");
const burgerLine = document.querySelector(".header-burger");
const searcher = document.querySelector(".header__searcher-btn");
const block = document.querySelector(".header__searcher-wrap");
const cross = document.querySelector(".header__searcher-cross");
const header = document.querySelector(".header__top-container");


searcher.addEventListener("click", function () {
  var width = window.innerWidth;
  searcher.classList.add("header__searcher-btn--active");
  burgerLine.classList.add("header__top-container--move");
  logo.classList.add("header__top-container--move");
  block.classList.add("header__searcher-wrap--active");
})

cross.addEventListener("click", function () {
  searcher.classList.remove("header__searcher-btn--active");
  block.classList.remove("header__searcher-wrap--active");
  burgerLine.classList.remove("header__top-container--move");
  logo.classList.remove("header__top-container--move")
})

