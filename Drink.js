export default class Drink {
  #temperature;

  constructor(name, volume, price, temperature = 80) {
    if (new.target === Drink) {
      throw new Error(
        "Абстрактный класс Drink не может быть вызван напрямую через new",
      );
    }

    this.name = name;
    this.volume = volume;
    this.price = price;
    this.#temperature = temperature;
  }

  // Приватный метод приготовления напитка
  #prepare() {
    console.log(`[Приготовка] Готовим напиток "${this.name}"...`);
  }

  // Публичный метод получения температуры
  getTemperature() {
    return this.#temperature;
  }

  // Публичный метод установки температуры
  setTemperature(temperature) {
    if (
      typeof temperature !== "number" ||
      temperature < 0 ||
      temperature > 100
    ) {
      console.log("Укажите корректную температуру от 0 до 100 градусов.");
      return;
    }
    this.#temperature = temperature;
    console.log(
      `[Температура] Температура напитка "${this.name}" изменена на ${this.#temperature}°C`,
    );
  }

  // Получить информацию о напитке
  getInfo() {
    return `Напиток: "${this.name}", Объём: ${this.volume}мл, Цена: ${this.price} руб., Температура: ${this.#temperature}°C`;
  }

  // Подать напиток
  serve() {
    this.#prepare();
    console.log(`[Подача] Напиток "${this.name}" подаётся клиенту!`);
  }
}
