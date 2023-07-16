const btns = document.querySelectorAll(".gallery__img-block");
const infoBlock = document.querySelector(".gallery__img-info");
const infoBlockImg = document.querySelector(".gallery__img-picture");
const infoTitle = document.querySelector(".gallery__info-title");
const infoName = document.querySelector(".gallery__little-title");
const infoDate = document.querySelector(".gallery__info-date");
const infoText = document.querySelector(".gallery__text-info");
const exit = document.querySelector(".gallery__img-exit");

const title = ["Казимир Малевич", "Казимир Малевич", "Казимир Малевич", "Казимир Малевич", "Казимир Малевич", "Казимир Малевич"]

const imgName = ["«Торс»", "«Женщина с граблями»", "«Уборка ржи»", "«Супрематическая композиция»", "«Женщина с вёдрами»", "«Супрематизм»"]

const text = [
  "У образа нет лица – только закрашенный темно-розовым цветом овал. Он не имеет рук – только скругленный торс, разные половины которого окрашены в разные цвета – желтый и белый. Фон, на котором изображен торс, тоже неоднороден: он состоит из кусков зеленого, розоватого и синеватого цветов.",
  "Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930–1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.",
  "«Уборка ржи» – это образчик российского кубофутуризма, взявшего начало у французских мастеров. Работа относится к крестьянской серии картин, запечатлевшей рутинный уклад сельской жизни. В этот период у Малевича произошел перелом в направлении художественного стиля.",
  "В 1927 году Малевич выставлял картину на выставках в Варшаве, а позже в Берлине. После срочного отъезда Казимира Малевича в СССР в июне 1927 года картина была им передана на хранение немецкому архитектору Гуго Герингу. В целом, после выставки Малевич оставил в Берлине в 1927 году более ста своих полотен. Позднее Геринг вывез эти полотна из нацистской Германии, где они подлежали уничтожению как «дегенеративное искусство».",
  "Женщина с вёдрами Казимира Малевича – яркое произведение авангардного искусства, написанное в 1912 году. Ныне картина хранится в коллекции нью-йоркского Музея современного искусства. Стиль, известный как русский авангард характерен для искусства Российской Империи, а затем и Советского Союза в период с 1890 по 1930 год.",
  "«Супрематическая композиция» — признанный шедевр русского искусства, написанный Казимиром Малевичем в 1916 году, одна из самых известных и загадочных картин в мире, ставшая предметом длительных судебных тяжб и рекордно дорогим лотом аукциона Sotheby’s. На произведении, выполненном в стиле абстракционизма, изображены геометрические фигуры правильной формы в основных цветах спектра.",
];

const dates = ["1928-1929", "1931–1932", "1912",  "1916", "1912", "1916"]

for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    infoBlock.classList.add("gallery__img-info--active");

    for (j = 0; j < 6; j++) {
      if (infoBlockImg.classList[1] == `gallery__img-picture--${j + 1}`) {
        infoBlockImg.classList.remove(`gallery__img-picture--${j + 1}`);
      }
    }

    infoBlockImg.classList.add(`gallery__img-picture--${this.dataset.number}`)

    infoText.setAttribute("data-text", text[this.dataset.number - 1]);
    infoTitle.setAttribute("data-text", title[this.dataset.number - 1]);
    infoDate.setAttribute("data-text", dates[this.dataset.number - 1]);
    infoName.setAttribute("data-text", imgName[this.dataset.number - 1]);
  })
}

exit.addEventListener("click", function () {
  infoBlock.classList.remove("gallery__img-info--active");
});
