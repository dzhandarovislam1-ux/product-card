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
const CnangeColorFirstCardButton = document.querySelector(
  "#cnange__color__first__card__button",
);

CnangeColorFirstCardButton.addEventListener("click", () => {
  firstProductCard.style.backgroundColor = "red";
});

//Открыть google

const openGoogleButton = document.querySelector("#open__google");

openGoogleButton.addEventListener("click", openGoogle);

function openGoogle() {
  const answer = confirm("Вы действительно хотите открыть Google?");

  if (answer === true) {
    window.open("https://google.com");
  } else {
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
