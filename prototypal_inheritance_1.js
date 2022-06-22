function Person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}

const person1 = new Person('Bruce', 'Wayne'); // constructor function
const person2 = new Person('Clark', 'Kent'); // constructor function

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

function SuperHero(fName, lName) {
  // this = {}
  Person.call(this, fName, lName);
  this.isSuperHero = true;
}
SuperHero.prototype.fightCrime = function () {
  console.log('Fighting Crime');
};
SuperHero.prototype = Object.create(Person.prototype);

const goodman = new SuperHero('Bruce', 'Wayne');
console.log(goodman.getFullName());
SuperHero.prototype.constructor = SuperHero;
