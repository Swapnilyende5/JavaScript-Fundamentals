const getData = async () => {
  return new Error("This is error");
};

try {
  const data = await getData();
  console.log(data.message);
} catch (err) {
  console.log(err.message, "error");
}

const newPromise = new Promise((res, rej) => res("Promise Resolved!"));

async function myPromise() {
  return newPromise;
}
const getPromise = myPromise();
getPromise.then((data) => console.log(data));

const p = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise resolved now");
  }, 1000);
});

p.then((data) => console.log(data));

function fibonacci(n) {
  if (n <= 1) return n;
  //   return fibonacci(n - 1) + fibonacci(n - 2);

  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    let sum = a + b;
    a = b;
    b = sum;
  }
  return b;
}
console.log(fibonacci(4));
// 0 1 1 2 3 5 8
function outer() {
  let age = 20;
  function inner() {
    console.log(age);
  }
  inner();
}
outer();

function outerFunc() {
  let age = 25;
  return function innerFunc() {
    return age;
  };
}
const myFunc = outerFunc()();
console.log(myFunc);

const arr = [1, 2, [5, 2, [1]]];
console.log(arr.flat(2));
