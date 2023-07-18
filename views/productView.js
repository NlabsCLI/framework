class ProductView {
    render(product) {
      const html = `
        <h2>${product.name}</h2>
        <p>Fiyatı: ${product.price} TL</p>
      `;
      console.log(html);
    }
  }
  
  module.exports = ProductView;