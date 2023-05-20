const burger = document.querySelector(".header-burger");
const menu = document.querySelector(".header__burger-menu");

function classCheck(classList) {
  for (i = 0; i < classList.length; i++) {

    if (classList[i] == "header-burger--active") {
      return 1;
    }
  }
  return 0;
}

burger.addEventListener("click", function () {
  var burgerClassList = burger.classList;

  if (classCheck(burgerClassList)) {
    burger.classList.remove("header-burger--active");
    menu.classList.remove("header__burger-menu--active");
  } else {
    burger.classList.add("header-burger--active")
    menu.classList.add("header__burger-menu--active");
  }
});

