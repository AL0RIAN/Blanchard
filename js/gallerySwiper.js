// Спаны с номерами страниц
const spans = document.querySelectorAll(".gallery__btn-text");
const next = document.querySelectorAll(".gallery .swiper-button-next, .swiper-rtl .swiper-button-prev");
const prev = document.querySelectorAll(".gallery .swiper-button-prev, .swiper-rtl .swiper-button-next");
var curPages = [0, 0, 0];

for (i = 0; i < next.length; i++) {
  next[i].addEventListener("click", function() {
    // Максимальное кол-во страниц у текущего слайдера
    var maxPage = parseInt(this.dataset.pages);
    // Текущая страница у текущего слайдера
    var curPage = Math.abs(parseInt(curPages[this.dataset.index]));

    spans[this.dataset.index].children[curPage % maxPage].classList.remove("gallery__btn-span--active");
    curPages[this.dataset.index]++;
    curPage = Math.abs(curPages[this.dataset.index]);
    spans[this.dataset.index].children[curPage % maxPage].classList.add("gallery__btn-span--active");
  });
}

for (i = 0; i < prev.length; i++) {
  prev[i].addEventListener("click", function() {
    // Максимальное кол-во страниц у текущего слайдера
    var maxPage = parseInt(this.dataset.pages);
    // Текущая страница у текущего слайдера
    var curPage = Math.abs(parseInt(curPages[this.dataset.index]));

    spans[this.dataset.index].children[curPage % maxPage].classList.remove("gallery__btn-span--active");
    curPages[this.dataset.index]--;
    curPage = Math.abs(curPages[this.dataset.index]);
    spans[this.dataset.index].children[curPage % maxPage].classList.add("gallery__btn-span--active");
  });
}

const wrapper = document.querySelector(".gallery__swiper .swiper-wrapper");
wrapper.removeAttribute("style");
