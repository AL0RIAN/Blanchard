const headerSelectors = document.querySelectorAll(".header-menu__select");
const gallerySelectors = document.querySelectorAll(".gallery__select");


headerSelectors.forEach(element => {
  new Choices(element, {
    shouldSort: false,
  });
});

gallerySelectors.forEach(element => {
  new Choices(element, {
    shouldSort: false,
  });
});
