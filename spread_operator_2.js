// Copy an array
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(`1. copy an array:`);
console.log(arr2);
console.log(...arr2);
console.log();

// result = [ 1, 2, 3 ]

// Combine arrays
const arr11 = [1, 2, 3];
const arr12 = [4, 5, 6];
const arr13 = [...arr11, ...arr12];
console.log(`2. combine arrays:`);
console.log(arr13);
console.log(...arr13);
console.log();
// result = [ 1, 2, 3, 4, 5, 6 ]

// Add an item to an array
let arr21 = ['this', 'is', 'an'];
arr21 = [...arr21, 'array'];
console.log(`3. Add an item to an array:`);
console.log(arr21);
console.log(...arr21);
console.log();
// result = [ 'this', 'is', 'an', 'array' ]

// Adding a property to an object
const user = {
  firstname: 'Chris',
  lastname: 'Bongers',
};
const output = { ...user, age: 31 };
console.log("4. Adding a property to an object");
console.log(output);
console.log();
// result = { firstname: 'Chris', lastname: 'Bongers', age: 31 }

// Use Math() functions
// To get the lowest number
const arr31 = [1, -1, 0, 5, 3];
const min = Math.min(...arr31);
console.log("5a. Get the lowest number");
console.log(min);
console.log();
// result = -1

// To get the highest number
const arr41 = [1, -1, 0, 5, 3];
const max = Math.max(...arr41);
console.log("5b. Get the highest number");
console.log(max);
console.log();
// result = 5

// Spread array as function arguments
const myFunc = (x1, x2, x3) => {
  console.log(x1);
  console.log(x2);
  console.log(x3);
};
const arr51 = [1, 2, 3];
console.log("6. Spread array as function arguments");
myFunc(...arr51);
console.log();
// results:
// 1
// 2
// 3

// Pass unlimited arguments to a function
const myFunc2 = (...args) => {
  console.log(args);
};
console.log("7. Pass unlimited arguments to a function");
myFunc(1, 'a', new Date());
console.log();
// result:
// 1
// a
// 2022-06-19T01:39:17.122Z

// Converting a nodeList into an array
// const el = [...document.querySelectorAll('div')];
// console.log("8. Converting a nodeList into an array");
// console.log(el);
// console.log();
// result:
// (3) [div, div, div]

// looping over it
// const el2 = [...document.querySelectorAll('div')];
// el.forEach((item) => {
//   console.log(item);
// });
// console.log();
// results:
// <div></div>
// <div></div>
// <div></div>

// Destructuring an object
const user2 = {
  firstname: 'Chris',
  lastname: 'Bongers',
  age: 31,
};
const { firstname, ...rest } = user2;
console.log("9. Destructuring an object");
console.log(firstname);
console.log(rest);
console.log();
// result:
// 'Chris'
// { lastname: 'Bongers', age: 31 }

// Exploding a string
const str = 'Hello';
const arr = [...str];
console.log("10. Exploding a string");
console.log(arr);
// result:
// [ 'H', 'e', 'l', 'l', 'o' ]
