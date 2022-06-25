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
