const blocksTop = document.querySelectorAll(".catalog__left-panel");
const blocksBottom = document.querySelectorAll(".catalog__bottom-panel");
const names = document.querySelectorAll(".ac-panel__link");

var current = "Доменико Гирландайо";

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

names.forEach(element => element.addEventListener("click", function () {
    var width = window.innerWidth;

    console.log(width);

    if (element.dataset.catalogbtn == current) {
        return;
    } else {
        for (i = 0; i < blocksTop.length; i++) {
            if (blocksTop[i].dataset.catalog == element.dataset.catalogbtn ||
                blocksBottom[i].dataset.catalog == element.dataset.catalogbtn) {

                if (width > 992) {
                    blocksTop[i].classList.add("catalog__left-panel--active");
                    disableBlock(blocksTop, current, width);
                } else {
                    blocksBottom[i].classList.add("catalog__bottom-panel--active");
                    disableBlock(blocksBottom, current, width);
                }
                current = element.dataset.catalogbtn;
                break;
            }
        }
    }
}))