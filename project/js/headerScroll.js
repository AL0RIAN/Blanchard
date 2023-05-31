const headerMenuItem = document.querySelectorAll(".header-menu__item");

headerMenuItem.forEach(element => element.addEventListener("click", function () {
  const selects = document.querySelectorAll(".header-menu__list .choices__list--dropdown .choices__list, .header-menu__list .choices__list[aria-expanded] .choices__list");
  const selectsCount = document.querySelectorAll(".header-menu__list .choices__list--dropdown .choices__list, .header-menu__list .choices__list[aria-expanded] .choices__list").length;

  for (i = 0; i < selectsCount; i++) {
    // Если в селекте отсутствует обертка от SimpleBar, то добавить её
    if (!selects[i].children[0].classList.contains("simplebar-wrapper")) {
      new SimpleBar(selects[i]);
    }
  };
  //   Array.prototype.forEach.call(document.querySelectorAll(".choices__list--dropdown .choices__list, .choices__list[aria-expanded] .choices__list"), (el) => new SimpleBar(el));
}));

