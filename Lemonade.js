import Drink from "./Drink.js";

export default class Lemonade extends Drink {
  constructor(name, volume, price, temperature = 5, flavor, withIce = true) {
    super(name, volume, price, temperature);
    this.flavor = flavor;
    this.withIce = withIce;
  }

  getInfo() {
    const iceText = this.withIce ? "Со льдом" : "Без льда";
    return `${super.getInfo()}, Вкус: ${this.flavor}, Лёд: ${iceText}`;
  }
}
