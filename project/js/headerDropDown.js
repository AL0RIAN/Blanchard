function myFunction(id, arrowIndex) {
  document.getElementById(id).classList.toggle("header-menu__wrapper--active");
  var arrows = document.querySelectorAll(".header-menu__arrow");

  for (i = 0; i < arrows[arrowIndex].classList.length; i++) {
    if (arrows[arrowIndex].classList[i] == "header-menu__arrow--active") {
      arrows[arrowIndex].classList.remove("header-menu__arrow--active");
      return;
    }
  }
  arrows[arrowIndex].classList.add("header-menu__arrow--active");
}

window.onclick = function (event) {
  var arrows = document.querySelectorAll(".header-menu__arrow");
  if (!event.target.matches('.header-menu__btn')) {

    for (i = 0; i < arrows.length; i++) {
      arrows[i].classList.remove("header-menu__arrow--active");
    }

    var dropdowns = document.getElementsByClassName("header-menu__wrapper");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('header-menu__wrapper--active')) {
        openDropdown.classList.remove('header-menu__wrapper--active');
      }
    }
  }
}
