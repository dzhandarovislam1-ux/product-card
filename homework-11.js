const registrationButton = document.querySelector(".registration-button");

const modal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay");

const closeButton = document.querySelector(".modal__close");

const registrationForm = document.querySelector(".registration-form");

const password = document.querySelector("#password");

const repeatPassword = document.querySelector("#repeat-password");

registrationButton.addEventListener("click", () => {
  modal.classList.add("modal-showed");
  overlay.classList.add("modal-showed");
});

closeButton.addEventListener("click", () => {
  modal.classList.remove("modal-showed");
  overlay.classList.remove("modal-showed");
});

overlay.addEventListener("click", () => {
  modal.classList.remove("modal-showed");
  overlay.classList.remove("modal-showed");
});

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!registrationForm.checkValidity()) {
    return;
  }

  if (password.value !== repeatPassword.value) {
    alert("Пароли не совпадают");
    return;
  }

  const user = {
    name: document.querySelector("#name").value,
    surname: document.querySelector("#surname").value,
    birth: document.querySelector("#birth").value,
    login: document.querySelector("#login").value,
    createdOn: new Date(),
  };

  console.log(user);

  modal.classList.remove("modal-showed");
  overlay.classList.remove("modal-showed");
});
