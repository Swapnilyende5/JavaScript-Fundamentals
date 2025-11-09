// --------- Array ------------

// ------- Define Array
let array = [1, 2, 3, 4, 5];
let array1 = new Array(1, 2, 3, 4, 5);
let array2 = Array(1, 2, 3, 4, 5);
console.log(array, array1, array2);

let newArray = Array.of(1, 2, 3, 4, 5);
console.log(newArray);

let myName = "Swapnil";
console.log(Array.from(myName));

// ----------- ✨ Array Manipulation (Mutating) Methods ----------------
// 1. Array.push();
console.log(array);
array.push(6);
console.log(array);

// 2. Array.pop();
console.log(array);
array.pop();
console.log(array);

// 2. Array.unshift();
console.log(array);
array.unshift(6);
console.log(array);

// 4. Array.shift();
console.log(array);
array.shift();
console.log(array);

// 5. Array.splice();
console.log(array);
// array.splice(1, 3); // removed from 1-3 index
array.splice(1, 0, 8); // added 8 at 1st index
console.log(array);

// 6. Array.sort();
console.log(array);
array.sort((a, b) => a - b); // sort in increasing order
// array.sort((a, b) => b - a); // sort in decreasing order
console.log(array);

// 6. Array.reverse();
console.log(array);
array.reverse();
console.log(array);

// 6. Array.fill();
console.log(array);
array.fill(0); // fill all with 0's
array.fill(0, 1); // fill all with 0's from 1st index
console.log(array);

// ----------- ✨ Array Manipulation (Immutable) Methods ----------------
let arrayImm = [1, 2, 3, 4, 5, 6];

// 7. Array.map();
let mapArray = arrayImm.map((i) => i * 2);
console.log(mapArray);

// 8. Array.flatMap();
let flatMapArray = arrayImm.flatMap((i) => [i + 5, i * 2]);
console.log(flatMapArray);

// 9. Array.filter();
let filterArray = arrayImm.filter((i) => i >= 4);
console.log(filterArray);

// 10. Array.slice();
let sliceArray = arrayImm.slice(0, 4); // from 0th to 3rd index
// let sliceArray = arrayImm.slice(4); // from 4th to end
console.log(sliceArray);

// 11. Array.concat();
let addArr = [0, 0, 7];
// let concatArray = arrayImm.concat(addArr); // concat array
let concatArray = arrayImm.concat(1, 2, 3); // concat values
console.log(concatArray);

// 12. Array.flat();
let nestedArr = [1, 2, [3, 4, [5, 6]]];
// let flatArray = nestedArr.flat(1); // flatted array till 1st level
let flatArray = nestedArr.flat(2); // flatted array till 2nd level
console.log(flatArray);

// ----------- 🔍 Searching & Finding Methods ----------------
let arr = [10, 20, 30, 30, 40, 50];
console.log(arr.forEach((v) => console.log(v)));
// 13. indexOf
console.log(arr.indexOf(30));

// 14. lastIndexOf()
console.log(arr.lastIndexOf(30));

// 15. includes()
console.log(arr.includes(20));

// 16. find() // returns the first value which passed condition
console.log(arr.find((i) => i > 25));

// 18. some() // true when anyone matches the condition
console.log(arr.some((n) => n == 50));

// 19. every() // true when every item matches the condition
console.log(arr.every((n) => n >= 10));

// 17. findIndex()
console.log(arr.findIndex((n) => n > 25));

// ----------- ✨ ➕ Convert & Reduce Methods ----------------
// 18. join()
console.log(arr.join());
console.log(arr.join(""));
console.log(arr.join("-"));

// 19. toString() = similar to arr.join()
console.log(arr.toString());

// 20. reduce()
console.log(arr.reduce((sum, n) => sum + n, 0));
// reduce is like below for loop function where sum = 0 which is getting +
function reduce(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(reduce(arr));

// 21. Checking Array Type
console.log(Array.isArray(arr));

// ----------- ✨ 🔁 Iteration Methods ----------------
// 22. forEach()
arr.forEach((v) => {
  console.log(v);
});

// 23. Array.values(): print indexes = keys
for (let k of arr.keys()) {
  console.log(k);
}
// 24. Array.values(): print values
for (let k of arr.values()) console.log(k);

// 25. Array.entries(): print index with values in array
for (let [i, v] of arr.entries()) console.log(i, v);
