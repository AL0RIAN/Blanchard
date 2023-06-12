const btns = document.querySelectorAll(".gallery__img-block");
const infoBlock = document.querySelector(".gallery__img-info");
const infoBlockImg = document.querySelector(".img-info__picture");
const infoTitle = document.querySelector(".img-info__title");
const infoName = document.querySelector(".img-info__little-title");
const infoDate = document.querySelector(".img-info__date");
const infoText = document.querySelector(".img-info__text");
const exit = document.querySelector(".img-info__exit");

const title = ["none",
  "Казимир Малевич",
]

const imgName = ["none", "«Женщина с граблями»", ]

const text = [
  "Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930–1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.",
  "Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930–1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.",
];

const dates = ["none", "1931–1932", ]

for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    infoBlock.classList.add("gallery__img-info--active");

    for (j = 0; j < 6; j++) {
      if (infoBlockImg.classList[1] == `img-info__picture--${j + 1}`) {
        infoBlockImg.classList.remove(`img-info__picture--${j + 1}`);
      }
    }

    infoBlockImg.classList.add(`img-info__picture--${this.dataset.number}`)

    infoText.setAttribute("data-text", text[this.dataset.number - 1]);
    infoTitle.setAttribute("data-text", title[this.dataset.number - 1]);
    infoDate.setAttribute("data-text", dates[this.dataset.number - 1]);
    infoName.setAttribute("data-text", imgName[this.dataset.number - 1]);
  })
}

exit.addEventListener("click", function () {
  infoBlock.classList.remove("gallery__img-info--active");
});
