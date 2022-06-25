class Person {
  constructor(name) {
    this.name = name;
    console.log(this.name + ' Constructor Method');
  }
  static staticMethod() {
    console.log('Static Method');
  }
  greetPerson() {
    console.log('Hello ' + this.name + ' Prototype Method');
  }
}
let p = new Person('Chandler');
Person.staticMethod();
p.greetPerson();