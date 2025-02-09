var contactsTel = document.querySelector("input[type='tel']");
var im = new Inputmask("+7(999) 999-99-99");
im.mask(contactsTel);

new JustValidate(".contacts__form", {
  colorWrong: "#D11616",
  rules: {
    name: {
      required: true,
      minLenggth: 2,
      maxLength: 10,
      function: alphaValidate,
    },
    tel: {
      required: true,
      function: telValidate,
    }
  },
  messages: {
    name: "Недопустимый формат",
    tel: "Недопустимый формат"
  }
});

function telValidate() {
  const phone = contactsTel.inputmask.unmaskedvalue();
  return Number(phone) && phone.length === 10;
}

function alphaValidate() {
  const string = document.querySelector("#contacts-name");
  var rus = /^[а-я]*$/i;
  var eng = /^[a-z]*$/i;
  return (string.value.match(rus) || string.value.match(eng))
}
