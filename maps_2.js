// The Map object holds key-value pairs and remembers the original insertion order of the keys.
// Any value (both objects and primitive values) may be used as either a key or a value.

const myMap = new Map();

myMap.set('fname', 'Chandler');
myMap.set('age', 30);

console.log(myMap.get('fname'));

let ob1 = {};
let ob2 = {};
let ob3 = 'date';

myMap.set(ob1, 10);

myMap.set(ob2, 20);

myMap.set(ob3, '19-5-2020');

console.log(myMap.get(ob1));
myMap.delete('fname'); // deletes key value pair with key fname
// myMap.clear(); // removes all key value pairs from a map

console.log('map size = ' + myMap.size);
console.log('map has key fname = ' + myMap.has('fname'));

for (const element of myMap) {
  console.log(element);
}
