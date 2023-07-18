const Product = require('../models/product.js');
const ProductView = require('../views/productView');

class ProductController {
  constructor() {
    this.view = new ProductView();
  }

  show(name, price) {
    const product = new Product(name, price);
    console.log('Ürün iş mantığı çalışıyor...');
    this.view.render(product);
  }
}

module.exports = ProductController;