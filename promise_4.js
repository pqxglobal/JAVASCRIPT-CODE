const startPumpOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Pump 1 running');
  }, 3000);
});
const startPumpTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Pump 2 running');
  }, 2000);
});
const startPumpThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Pump 3 running');
  }, 5000);
});

// only the first item solved will be executed, change timeouts above to experiment
Promise.race([startPumpOne, startPumpTwo, startPumpThree]).then((message) => {
  console.log(message);
});