// ----------- setTimeout ------------

// let b = prompt("clear timeout? press yes or no");
// let a = setTimeout(() => {
//   console.log("hello");
// }, 5000);

// if (b === "yes") {
//   clearTimeout(a);
// }

// ----------- setTimeout - with Counter App in Plain JavaScript ------------

let count = 0;
let myCounter;
function startCounter() {
  if (!myCounter) {
    myCounter = setInterval(() => {
      count++;
      counter.textContent = count;
    }, 1000);
  }
}

function stopCounter() {
  clearInterval(myCounter);
  myCounter = null;
}

function resetCounter() {
  clearInterval(myCounter);
  myCounter = null;
  count = 0;
  counter.textContent = count;
}

let counter = document.getElementById("counter");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let resetBtn = document.getElementById("resetBtn");

startBtn.onclick = startCounter;
stopBtn.onclick = stopCounter;
resetBtn.onclick = resetCounter;
