const searcher = document.querySelector(".header__searcher-btn");
const block = document.querySelector(".header__searcher-wrap");
const cross = document.querySelector(".header__searcher-cross");
const header = document.querySelector(".header__top-container");

searcher.addEventListener("click", function() {
  searcher.classList.add("header__searcher-btn--active");
  block.classList.add("header__searcher-wrap--active");
  header.classList.add("header__top-container--move");
});

cross.addEventListener("click", function() {
  searcher.classList.remove("header__searcher-btn--active");
  block.classList.remove("header__searcher-wrap--active");
  header.classList.remove("header__top-container--move");
})
