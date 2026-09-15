import Modal from "./modal.js";
import Form from "./form.js";

import "./homework-7.js";
import "./homework-8.js";
import "./homework-9.js";
import "./homework-10.js";
import "./homework-11.js";

const registrationModal = new Modal("registration_modal");

const registrationForm = new Form("registration_form");

const registrationButton = document.getElementById("registration_button");

registrationButton.addEventListener("click", () => {
  registrationModal.open();
});

registrationForm.form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!registrationForm.checkValidity()) {
    return;
  }

  const values = registrationForm.getValues();

  console.log(values);

  registrationForm.reset();

  registrationModal.close();
});

// Покраска всех карточек

const productCards = document.querySelectorAll(".products__item");
const changeColorCardButton = document.querySelector(
  "#change__color__card__button",
);

changeColorCardButton.addEventListener("click", () => {
  productCards.forEach((card) => {
    card.style.backgroundColor = "blue";
  });
});
// Покраска первой карточки

const firstProductCard = document.querySelector(".products__item");
const changeColorFirstCardButton = document.querySelector(
  "#cnange__color__first__card__button",
);

changeColorFirstCardButton.addEventListener("click", () => {
  firstProductCard.style.backgroundColor = "red";
});

//Открыть google

const openGoogleButton = document.querySelector("#open__google");

openGoogleButton.addEventListener("click", openGoogle);

function openGoogle() {
  const answer = confirm("Вы действительно хотите открыть Google?");

  if (answer === true) {
    window.open("https://google.com");
    return;
  }
}

// Вывод консоль лог

const outputLogButton = document.querySelector("#out__put__console__log");

outputLogButton.addEventListener("click", () => outputConsoleLog("ДЗ №4"));

function outputConsoleLog(message) {
  alert(message);
  console.log(message);
}

outputConsoleLog("ДЗ №4");
