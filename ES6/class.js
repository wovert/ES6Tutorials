class App {
  constructor() {
    this.name = 'wovert';
  }
  hello() {
    console.log(`hello ${this.name}!`)
  }
}
let app = new App();
app.hello();