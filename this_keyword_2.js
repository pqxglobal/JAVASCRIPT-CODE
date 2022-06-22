// explicit binding
const person = {
  name: 'Vishwas',
};

function sayMyName() {
  console.log(`My name is ${this.name}`);
}

sayMyName.call(person)