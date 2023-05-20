const searcher = document.querySelector(".header-searcher__btn");
const block = document.querySelector(".header-searcher__wrap");
const cross = document.querySelector(".header-searcher__cross");
const header = document.querySelector(".header__top-container");

searcher.addEventListener("click", function() {
  searcher.classList.add("header-searcher__btn--active");
  block.classList.add("header-searcher__wrap--active");
  header.classList.add("header__top-container--move");
});

cross.addEventListener("click", function() {
  searcher.classList.remove("header-searcher__btn--active");
  block.classList.remove("header-searcher__wrap--active");
  header.classList.remove("header__top-container--move");
})
