/* 
Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more   arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected 
*/

// rest is to combine individual components into an array
// spread is to split an array into individual components

let displayColors = function (message, ...colors) {
  console.log(message);

  for (let i in colors) {
    console.log(colors[i]);
  }
};

let message = 'List of colors';

let colorArray = ['Orange', 'Yellow', 'Indigo'];
displayColors(message, ...colorArray); // spread
