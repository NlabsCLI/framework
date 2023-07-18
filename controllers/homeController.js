const HomeView = require('../views/homeView');

class HomeController {
  constructor() {
    this.view = new HomeView();
  }

  index() {
    console.log('Ana sayfa iş mantığı çalışıyor...');
    this.view.render();
  }
}

module.exports = HomeController;