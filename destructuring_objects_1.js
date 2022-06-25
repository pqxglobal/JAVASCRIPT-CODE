let units = {
  flow: 'l/h',
  temperature: 'C',
  pressure: 'Bar',
};

let { flow: F, temperature: T, pressure: P } = units; // destructuring the units object and create aliases

console.log(F);
console.log(T);
console.log(P);
