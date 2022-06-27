// The extends keyword is used in class declarations or class expressions to create a class that is a child of another class.

// The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor.

class Person {
  constructor(name) {
    console.log(name + ' Person constructor');
  }
  getID() {
    return 10;
  }
}

class Employee extends Person {
  constructor(name) {
    super(name);
    console.log(name + ' Employee constructor');
  }
  getID() {
    return super.getID();
  }
}

let e = new Employee('Chandler');
console.log(e.getID());
