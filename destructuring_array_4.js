let units = ['l/h', 'C', 'Bar'];

let [flow, temperature, pressure = 'PSI'] = units; // destructuring the units array

console.log(flow);
console.log(temperature);
console.log(pressure);
