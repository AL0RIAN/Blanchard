const burger = document.querySelector(".header-burger");
const menu = document.querySelector(".header__burger-menu");
const body = document.getElementById("body");
const burgerLink = document.querySelectorAll(".header__burger-link");
const burgerLines = document.querySelectorAll(".header-burger__line");

function classCheck(classList) {
  for (i = 0; i < classList.length; i++) {

    if (classList[i] == "header-burger--active") {
      return 1;
    }
  }
  return 0;
}

function lineActive(lineList) {
  for (i = 0; i < lineList.length; i++) {
    lineList[i].classList.add("header-burger__line--active");
  }
}

function lineNotActive(lineList) {
  for (i = 0; i < lineList.length; i++) {
    lineList[i].classList.remove("header-burger__line--active");
  }
}

burger.addEventListener("click", function () {
  var burgerClassList = burger.classList;

  if (classCheck(burgerClassList)) {
    burger.classList.remove("header-burger--active");
    menu.classList.remove("header__burger-menu--active");
    body.classList.remove("page-scroll--disable");
    lineNotActive(burgerLines);
  } else {
    burger.classList.add("header-burger--active")
    menu.classList.add("header__burger-menu--active");
    body.classList.add("page-scroll--disable");
    lineActive(burgerLines);
  }
});

burgerLink.forEach(element => element.addEventListener("click", function () {
  burger.classList.remove("header-burger--active");
  menu.classList.remove("header__burger-menu--active");
  body.classList.remove("page-scroll--disable");
  lineNotActive(burgerLines);
}));

