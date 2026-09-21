import Drink from "./Drink.js";

export default class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    return `Кафе: "${this.name}", Адрес: ${this.location}`;
  }

  orderDrink(drink) {
    if (!(drink instanceof Drink)) {
      console.log(
        "[Ошибка заказа] Вы укомплектовали заказ не являющимся напитком объектом.",
      );
      return;
    }

    console.log(
      `\n=== Новый заказ в кафе "${this.name}" (${this.location}) ===`,
    );
    console.log(`Заказан напиток: ${drink.name} по цене ${drink.price} руб.`);

    // Вызываем метод подать напиток (внутри которого вызывается приватное приготовление)
    drink.serve();

    console.log(`[Итог] Заказ выполнен! Приятного аппетита!\n`);
  }
}
