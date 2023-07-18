const HomeController = require('./controllers/homeController');
const ProductController = require('./controllers/productController');

// HomeController kullanımı
const homeController = new HomeController();
homeController.index();

// ProductController kullanımı
const productController = new ProductController();
productController.show('Bilgisayar', 5000);