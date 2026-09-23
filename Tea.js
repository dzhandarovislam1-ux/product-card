import Drink from "./Drink.js";

export default class Tea extends Drink {
  constructor(name, volume, price, temperature, teaType, hasSugar = false) {
    super(name, volume, price, temperature);
    this.teaType = teaType;
    this.hasSugar = hasSugar;
  }

  getInfo() {
    const sugarText = this.hasSugar ? "С сахаром" : "Без сахара";
    return `${super.getInfo()}, Сорт чая: ${this.teaType}, Сахар: ${sugarText}`;
  }
}
