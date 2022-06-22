let count = 1;

let time = new Date();
let now = time.getTime();

const intId = setInterval(function run() {
  console.log(now);
  let timer = new Date();
  console.log(`Hello #${count}`);
  console.log(`years=${Math.floor((timer.getTime() - now) / 31449600000)}`);
  console.log(`weeks=${Math.floor((timer.getTime() - now) / 604800000)}`);
  console.log(`days=${Math.floor((timer.getTime() - now) / 86400000)}`);
  console.log(`hours=${Math.floor((timer.getTime() - now) / 3600000)}`);
  console.log(`minutes=${Math.floor((timer.getTime() - now) / 60000)}`);
  console.log(`seconds=${Math.floor((timer.getTime() - now) / 1000)}`);
  console.log(`milliseconds=${timer.getTime() - now}`);
  let stopTime = Math.floor((timer.getTime() - now) / 1000)
  count++;
  if (stopTime === 3) {
    clearInterval(intId);
  }
}, 1);
