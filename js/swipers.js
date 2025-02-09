const swiper = new Swiper(".hh-swiper", {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 6500,
  },
});

const swiperGallery1 = new Swiper(".gallery__swiper--1 ", {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  allowTouchMove: false,
});

const swiperGallery2 = new Swiper(".gallery__swiper--2 ", {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  allowTouchMove: false,
});

const swiperGallery3 = new Swiper(".gallery__swiper--3 ", {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  allowTouchMove: false,
});

const swiperEvents1 = new Swiper(".events-swiper-1", {
  direction: 'horizontal',
  loop: true,
  allowTouchMove: false,
  slidesPerView: 3,
  spaceBetween: 50,
  navigation: {
    nextEl: ".events__btn",
  },
});

const swiperEvents2 = new Swiper(".events-swiper-2", {
  allowTouchMove: true,
  autoplay: {
    disableOnInteraction: true,
  },
  pagination: {
    el: '.events__dot-list',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    577: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 34,
    },
    993: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,
    },
  }
});

const swiperProjects = new Swiper(".projects-swiper-1", {
  direction: 'horizontal',
  navigation: {
    nextEl: '.projects__arrow--2',
    prevEl: '.projects__arrow--1',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 34,
    },
    697: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 34,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 50,
    },
    1201: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 50,
    }
  }

})

var nextBtns = document.querySelectorAll('[aria-label="Next slide"]');
var prevBtns = document.querySelectorAll('[aria-label="Previous slide"]');

function ariaChagne(elementList, newAria) {
  for (i = 0; i < elementList.length; i++) {
    elementList[i].ariaLabel = newAria;
  }
}

ariaChagne(nextBtns, "вперёд");
ariaChagne(prevBtns, "назад");
