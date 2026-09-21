import Drink from "./Drink.js";

export default class Coffee extends Drink {
  constructor(
    name,
    volume,
    price,
    temperature,
    beansType,
    milkType = "Без молока",
  ) {
    super(name, volume, price, temperature);
    this.beansType = beansType;
    this.milkType = milkType;
  }

  getInfo() {
    return `${super.getInfo()}, Зёрна: ${this.beansType}, Молоко: ${this.milkType}`;
  }
}
