export default class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}. I am ${this.age} years old`)
  }
}
