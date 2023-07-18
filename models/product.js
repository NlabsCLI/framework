class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  
    showPrice() {
      console.log(`${this.name} ürününün fiyatı: ${this.price} TL`);
    }
  }
  
  module.exports = Product;