const blocksTop = document.querySelectorAll(".catalog__left-panel");
const blocksBottom = document.querySelectorAll(".catalog__bottom-panel");
const names = document.querySelectorAll(".ac-panel__link");

var currentArtist = "Доменико Гирландайо";
var currentName = document.querySelector(".ac-panel__link--active");

function disableBlock(array, number, media) {
  for (i = 0; i < array.length; i++) {
    if (array[i].dataset.catalog == number) {
      if (media > 992) {
        array[i].classList.remove("catalog__left-panel--active");
      } else {
        array[i].classList.remove("catalog__bottom-panel--active");
      }
      return;
    }
  }
}

function disableNameLines() {
  var nameLines = document.querySelectorAll(".ac-panel__link--active");
  for (i = 0; i < nameLines.length; i++) {
    nameLines[i].classList.remove("ac-panel__link--active");
  }
}

names.forEach(element => element.addEventListener("click", function () {
  var width = window.innerWidth;

  if (element.dataset.catalogbtn == "none" && currentArtist == "none") {
    disableNameLines();
    element.classList.add("ac-panel__link--active");
  }

  if (element.dataset.catalogbtn == currentArtist) {
    return;
  } else {
    for (i = 0; i < blocksTop.length; i++) {

      if (blocksTop[i].dataset.catalog == element.dataset.catalogbtn ||
        blocksBottom[i].dataset.catalog == element.dataset.catalogbtn) {

        if (width > 992) {
          blocksTop[i].classList.add("catalog__left-panel--active");
          disableBlock(blocksTop, currentArtist, width);
          disableNameLines();
          element.classList.add("ac-panel__link--active");
          // currentName.classList.remove("ac-panel__link--active")
        } else {
          blocksBottom[i].classList.add("catalog__bottom-panel--active");
          disableBlock(blocksBottom, currentArtist, width);
          disableNameLines();
          element.classList.add("ac-panel__link--active");
          // currentName.classList.remove("ac-panel__link--active")
        }
        currentArtist = element.dataset.catalogbtn;
        currentName = element;
        break;
      }
    }
  }
}))
