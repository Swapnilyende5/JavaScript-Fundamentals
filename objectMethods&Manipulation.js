// ------------ 1️⃣. Object Creation Methods ----------------
let obj1 = Object.create({ name: "Swapnil" });
let obj2 = new Object({ city: "Nagpur" });
let obj3 = Object({ age: 30 });
let obj = {
  name: "jhon",
  age: 30,
  city: "Nyc",
  isUser: true,
};

console.log(obj, obj1, obj2, obj3);

// ------------ 2️⃣. Check Exists Properties ----------------
console.log(obj.hasOwnProperty("name"));
console.log(obj.hasOwnProperty("state"));

// ------------ 3️⃣ Get Keys / Values / Entries -------------
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

// reverese to object again
let createArr = Object.entries(obj);
console.log(Object.fromEntries(createArr));

// ------------ 4️⃣ Access Properties -------------
console.log(obj.name);
console.log(obj["name"]);

// ------------ 5️⃣ Add / Update Properties -----------
obj.email = "swapnil@gmail.com";
obj["mobile"] = 98765432;
console.log(obj);

// ------------ 6️⃣ Delete Properties -----------
delete obj.isUser;
console.log(obj);

// ------------ 7️⃣ Merge Object -----------
let a = { isStudent: true };
let b = { isEmployee: false };
console.log({ ...a, ...b });

// ------------ 8️⃣ Iterate over an Object -----------
for (let key in obj) {
  console.log(key, obj[key]);
}

// ------------ 9️⃣ Iterate over an Object -----------
const objs1 = { a: 1, b: 2 };
const objs2 = { a: 1, b: 2 };
console.log(objs1 === objs2);
// They are stored in two different memory locations, So JS considers them not equal.

const ob1 = { a: 1, b: 2 };
const ob2 = ob1;
console.log(ob1 === ob2);
// compare with memory

// Compare Objects with Values
console.log(JSON.stringify(objs1) === JSON.stringify(objs2));

// ---------------------------------------------------
