// 1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣🔟

// ------------ 1️⃣ Call By Reference -------------
// works with Non-Primitive Data Types like (Objects and Arrays)

const person = { name: "Swapnil" };

// The actual object { name: "Swapnil" } is stored in heap
// The variable "person" in stack stores only a reference (a memory address)

// Stack memory:
// person: → 0xA12B  🚀 (reference)

// Heap memory:
// 0xA12B --> { name: "Swapnil" }

// So person doesn’t store the object —
// It stores a pointer to where the object lives.

const a = { value: 10 };
const b = a; // SAME reference

// a: → 0xB22C
// b: → 0xB22C (same address)

// Heap:
// 0xB22C --> { value: 10 }

const user = { name: "Swapnil" };
const employee = user;
employee.name = "Rahul";
console.log(user, employee);
// --------------------------------------------

// ------------ 1️⃣ Call By Value -------------
let c = 10;
let d = c;

// a stores actual value 10 in memory
// b receives a new separate copy
// Changing b doesn’t affect a

// Stack Memory
// a: 10
// b: 20  ← independent copy
c = 20;
console.log(c, d);
// --------------------------------------------------
