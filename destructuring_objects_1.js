let units = {
  flow: 'l/h',
  temperature: 'C',
  pressure: 'Bar',
};

let { flow: f, temperature: t, pressure: p } = units; // destructuring the units object and create aliases

console.log(f);
console.log(t);
console.log(p);
