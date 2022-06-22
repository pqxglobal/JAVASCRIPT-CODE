// new binding
function Person(name) {
  // this = {}, an empty object
  this.name = name;
}

const p1 = new Person('Vishwas');
const p2 = new Person('Goodman');

console.log(p1.name, p2.name);