// 1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣🔟
let user = {
  address: {
    city: "Nagpur",
  },
  getFullName: function () {
    console.log(this.address.city);
  },
};
let users = [{ name: "Swapnil" }];

// ----------- 1️⃣. Optional Chaining ---------------
// Safe way to access object properties without throwing an error when values are undefined or null.
const city = user?.address?.city;

user?.address?.city;
user?.getFullName?.();
users?.[0]?.name;

// ----------- 2️⃣. Nullish Coalescing (??) -----------
// Returns the right-hand value only when left-hand is null or undefined.

// it will only print default if the first value is undefined or null
console.log(0 ?? "default");
console.log(null ?? "default");

// it will print default if the first value is falsy value
console.log(0 || "default");
console.log(1 || "default");

// ----------- 3️⃣. Set ------------------------
// A collection of unique values
const s = new Set();
s.add(5);
console.log(s);

console.log(s.has(5));

s.delete(5);
console.log(s);

function dups(arr) {
  return [...new Set(arr)];
}
console.log(dups([1, 2, 2, 3]));

// ------------ 4️⃣. Map ---------------------
// Key-value structure like Object but with superpowers
const newMap = new Map();
newMap.set("name", "Swapnil");
newMap.set(123, "Role Number");
newMap.set({ a: 1 }, "Obj key");

console.log(newMap.get(123));
console.log(newMap.has("name"));

newMap.delete(123);
console.log(newMap);

for (let [k, v] of newMap) {
  console.log(k);
  console.log(v);
}
// ------------ 5️⃣. IIFE (Immediately Invoked Function Expression) ---------------------
// Avoid global variable pollution
// Keeps variables private
// Execute code immediately
(function () {
  const newMap = "Map";
  console.log(newMap);
})();

// Arrow IIFE
((name) => {
  console.log(name);
})("Swapnil");

// ------------ 6️⃣. Higher Order Functions (HOF) ---------------------

// 1. Takes another function as an argument,
function greet(name) {
  return `Hello ${name}`;
}
function userInput(callback) {
  let username = "Swapnil";
  return callback(username);
}
console.log(userInput(greet));

// 2. Returns a function as its result.
function multiplier(value) {
  return function (number) {
    return number * value;
  };
}
const double = multiplier(2);
console.log(double(5));

// Examples: Built-in HOF's => map(), filter(), reduce(), forEach();

// ------------ 7️⃣. Higher Order Functions (HOF) ---------------------

// A callback function is a function passed as an argument to another function, which is then executed inside that function.
// It’s called a “callback” because it’s called back later — not immediately.
function greet1(name) {
  console.log(`Hello, ${name}!`);
}
function processUserInput(callback) {
  const userName = "Swapnil";
  callback(userName);
}
processUserInput(greet1); // greet1 is a callback function

// document.getElementById("btn").addEventListener("click", () => {
//   console.log("Button clicked!");
// });
// here, ()=> {} ia callback func, calls only when button is clicked
// we always calls

// ------------ 8️⃣ Pure and Impure  ---------------------

// 1. Pure function - is the function produces the same output for the same input
function add(a, b) {
  return a + b;
}
console.log(add(4, 5));

function calculateTax(amount, taxRate) {
  return amount * taxRate;
}
console.log(calculateTax(10000, 0.5));
// in above both functions, output is totally depends on the input arguments and receivables parameters.

// 2. Pure function is the function wherein we use the external values for operations and o/p can be changed.
let total = 0;
function addition(val) {
  return (total += val);
}
console.log(addition(5));
console.log(addition(5));

let tax = 0.5; // if someone change the external tax then function can return diff o/p.
function calcTax(amount) {
  return amount * tax;
}
console.log(calcTax(10000));

// to make the function Pure, we always have to use the params received. not the external val's
function calculateTax(amount, taxRate) {
  return amount * taxRate;
}
console.log(calculateTax(10000, 0.5));

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.time("Without Memoization");
console.log(fibonacci(40)); // Takes several seconds
console.timeEnd("Without Memoization");
