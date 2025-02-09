var dropdowns = document.querySelectorAll('.header-menu__dropdown');


for (i = 0; i < dropdowns.length; i++) {
  new SimpleBar(dropdowns[i]);
}

var scrollContent = document.querySelectorAll(".simplebar-content-wrapper");


for (i = 0; i < scrollContent.length; i++) {
  scrollContent[i].ariaLabel = "Прокручиваемый контент"
}
