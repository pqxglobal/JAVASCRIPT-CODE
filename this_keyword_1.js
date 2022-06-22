// implicit binding
const person = {
  name: 'Vishwas',
  sayMyName: function () {
    console.log(`My name is ${this.name}`);
  },
};

person.sayMyName();