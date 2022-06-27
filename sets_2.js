// A set can only contain unique values

let mySet = new Set();

let ob1 = {};
let ob2 = {};

mySet.add('Hello');
mySet.add(1);
mySet.add(1); // duplicates will be ignored
mySet.add(ob1);
mySet.add(ob2);
console.log(mySet.size);
console.log(...mySet);

let newSet = new Set([1, 2, 3, 4, 4, 4]);
console.log(newSet.size);

let chainSet = new Set().add("Hello").add(" world");
console.log(chainSet.size);

console.log(newSet.has(5));
console.log(newSet.delete(1));
console.log(newSet.size);