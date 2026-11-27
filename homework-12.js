export class Clothing {
  constructor(brand, size, price) {
    this.brand = brand;
    this.size = size;
    this.price = price;
  }
  getInfo() {
    console.log(`&{this.brand}, &{this.size}, &{this.price}`);
  }
}

class Dress extends Clothing {
  constructor(brand, size, price, color) {
    super(brand, size, price);
    this.color = color;
  }
  showStyle() {
    console.log(`&{this.brand}, &{this.size}, &{this.price}, &{this.color}`);
  }
}
class Shoes extends Clothing {
  constructor(brand, size, price, material) {
    super(brand, size, price);
    this.material = material;
  }
  showMaterial() {
    console.log(`&{this.brand}, &{this.size}, &{this.price}, &{this.material}`);
  }
}
const dress = new Dress("Dom", "M", 50000, "Black");
const choes = new Shoes("Cross", 41, 8200, "Leather");
dress.showStyle();
Shoes.showMaterial();
