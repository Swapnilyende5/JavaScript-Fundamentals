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
