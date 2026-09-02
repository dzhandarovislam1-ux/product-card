import { products, IMAGE_PATH } from "./product.js";

const productsList = document.querySelector(".products");

const createProductCard = (product) => {
  return `
 <li class="products__item card">
 <img
 src="${IMAGE_PATH}${product.image}"
 alt="${product.name}"
 class="card__image"
 >

 <span class="card__category">${product.category}</span>

 <h2 class="card__name">${product.name}</h2>

 <p class="card__description">${product.description}</p>

 <div class="card__compound compound">
 <span class="compound__name">СОСТАВ:</span>

 <ul class="compound__list">
 ${product.compound.map((item) => `<li>${item}</li>`).join("")}
 </ul>
 </div>

 <div class="card__price">
 <b>Цена</b>
 <span>${product.price}</span>
 <button class="button ${product.buttonColor}">
 Купить
 </button>
 </div>
 </li>
 `;
};

const renderCards = (products) => {
  productsList.innerHTML = products.map(createProductCard).join("");
};

const productsDescription = products.reduce((acc, product) => {
  acc[product.name] = product.description;

  return acc;
}, {});

console.log(productsDescription);

const getCardsCount = () => {
  let count;

  do {
    count = Number(prompt("Сколько карточек отобразить? От 1 до 5"));

    if (count < 1 || count > 5 || !Number.isInteger(count)) {
      alert("Введите число от 1 до 5");
    }
  } while (count < 1 || count > 5 || !Number.isInteger(count));

  return count;
};

const cardsCount = getCardsCount();

renderCards(products.slice(0, cardsCount));
