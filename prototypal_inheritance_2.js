// Prototypal inheritance and the Prototype chain

// ES6 introduced classes which is the modern way to construcy objects

// object literals
const person = {
  alive: true,
};

const musician = {
  plays: true,
};

// old way
// musician.__proto__ = person; // person is the proto or parent of musician
// console.log(musician.plays);
// console.log(musician.alive);

// new way
// JS now has getPrototypeOf and setPrototypeOf methods instead of using __proto__
Object.setPrototypeOf(musician, person);
console.log(Object.getPrototypeOf(musician));
console.log(musician.__proto__);
console.log(Object.getPrototypeOf(musician) === musician.__proto__);
