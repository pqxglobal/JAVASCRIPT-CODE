// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array

let displayColors = function (message, ...colors) {
  console.log(message);
  console.log(colors);
  console.log(arguments.length); // number of arguments

  for (let i in colors) {
    console.log(colors[i]);
  }
};

let message = 'List of colors';

displayColors(message, 'red');
displayColors(message, 'red', 'blue');
displayColors(message, 'red', 'blue', 'green');
