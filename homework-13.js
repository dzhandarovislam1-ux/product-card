import Cafe from "./Cafe.js";
import Coffee from "./Coffee.js";
import Tea from "./Tea.js";
import Lemonade from "./Lemonade.js";

console.log(
  "\n================ ДЗ №13: КАФЕ С НАПИТКАМИ (ООП) ================\n",
);

// 1. Создание экземпляра Кафе
const myCafe = new Cafe("Invisible Coffee", "ул. Лумумбы 31, д. 15");

console.log("--- Информация о кафе ---");
console.log(myCafe.getInfo());
console.log("-------------------------\n");

// 2. Создание различных напитков (наследников Drink)
const cappuccino = new Coffee(
  "Капучино",
  300,
  280,
  75,
  "100% Арабика",
  "Овсяное",
);
const greenTea = new Tea("Зелёный чай ", 400, 190, 85, "Зелёный", false);
const berryLemonade = new Lemonade(
  "Клубничный лимонад",
  500,
  250,
  4,
  "Клубника-Мята",
  true,
);

// 3. Вывод информации о напитках (Полиморфизм)
console.log("--- Информация о напитках ---");
console.log(cappuccino.getInfo());
console.log(greenTea.getInfo());
console.log(berryLemonade.getInfo());
console.log("-----------------------------\n");

// 4. Демонстрация инкапсуляции и работы с температурой
console.log("--- Изменение температуры ---");
console.log(`Текущая температура чая: ${greenTea.getTemperature()}°C`);
greenTea.setTemperature(60); // Изменяем температуру через сеттер
console.log(greenTea.getInfo());
console.log("-----------------------------\n");

// 5. Оформление заказов в Кафе
myCafe.orderDrink(cappuccino);
myCafe.orderDrink(greenTea);
myCafe.orderDrink(berryLemonade);

console.log("================================================================");
