let employee = ['Chandler', 'Bing', 'Male'];

let [fname, ...elements] = employee; // destructuring the employee array

console.log(fname);
console.log(...elements);
