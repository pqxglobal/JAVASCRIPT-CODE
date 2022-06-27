let myMap = new Map([
  ['fname', 'Chandler'],
  ['lname', 'Bing'],
]);

for (let key of myMap.keys()) {
  console.log(key);
}

for (let value of myMap.values()) {
  console.log(value);
}

for (let entry of myMap.entries()) {
  console.log(`${entry[0]}: ${entry[1]}`);
}

for (let [key,value] of myMap.entries()) {
  console.log(`${key}: ${value}`);
}
