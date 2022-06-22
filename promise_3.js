const startPumpOne = new Promise((resolve, reject) => {
  resolve('Pump 1 running');
});
const startPumpTwo = new Promise((resolve, reject) => {
  resolve('\nPump 2 running');
});
const startPumpThree = new Promise((resolve, reject) => {
  resolve('\nPump 3 running');
});

Promise.all([startPumpOne, startPumpTwo, startPumpThree]).then((messages) => {
  console.log(...messages);  // ... spread operator
});
