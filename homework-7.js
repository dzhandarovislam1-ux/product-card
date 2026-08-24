function showWeather(city, temperature) {
  console.log(
    `Сейчас в ${city} температура - ${temperature} градусов по Цельсию`,
  );
}

showWeather("Каир", 32);

const speedOfLight = 299792458;

function checkSpeed(speed) {
  if (speed > speedOfLight) {
    console.log("Сверхсветовая скорость");
  } else if (speed < speedOfLight) {
    console.log("Досветовая скорость");
  } else {
    console.log("Скорость света");
  }
}

checkSpeed(300000000);

const productName = "Наушники";
const productPrice = 100;

function buyProduct(budget) {
  if (budget >= productPrice) {
    console.log(`${productName} приобретён. Спасибо за покупку!`);
  } else {
    const difference = productPrice - budget;
    console.log(`Вам не хватает ${difference}$, пополните баланс`);
  }
}

buyProduct(150);