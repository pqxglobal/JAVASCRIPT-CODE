let units = ['l/h', 'C', 'Bar'];

let [flow, ...elements] = units; // destructuring the units array

console.log(flow);
console.log(...elements);
