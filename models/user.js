class User {
    constructor(name) {
      this.name = name;
    }
  
    sayHello() {
      console.log(`Merhaba, ben ${this.name}!`);
    }
  }
  
  module.exports = User;