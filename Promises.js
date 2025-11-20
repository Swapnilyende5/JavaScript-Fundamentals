const cart = ["watch", "jeans", "shirts"];

//---------- Creating New Promise
function createOrder(cart) {
  const myPromise = new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    const orderId = "DB.getOrderID e.g. 12345";
    if (orderId) {
      resolve(orderId);
    }
  });
  return myPromise;
}

function validateCart(cart) {
  return false;
}
// Using created Promise
// createOrder(cart)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err.message));

// ====================================================================================

// ------ Promise.all, Promise.allSettled, Promise.race, Promise.all ---------

// Promise.all - All Api's Success
// const p1 = new Promise((res, rej) => {
//   setTimeout(() => res("p1 successed"), 5000);
// });
// const p2 = new Promise((res, rej) => {
//   setTimeout(() => res("p2 successed"), 3000);
// });
// const p3 = new Promise((res, rej) => {
//   setTimeout(() => res("p3 successed"), 1000);
// });
// Promise.all([p1, p2, p3]).then((res) => console.log(res)).catch((err) => console.log(err));;
// After 5 secs - output :  [ 'p1 successed', 'p2 successed', 'p3 successed' ]

// Promise.all - One API Fails
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p1 successed"), 5000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("p2 failed"), 3000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p3 successed"), 1000);
// });
// Promise.all([p1, p2, p3])
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));
// // After 3 sec - Output : p2 failed

// ====================================================================================

// Promise.allSettled - All Api's Success
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p1 successed"), 5000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p2 successed"), 3000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p3 successed"), 1000);
// });
// Promise.allSettled([p1, p2, p3])
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));
// After 5 sec Output =  [
//     {
//         "status": "fulfilled",
//         "value": "p1 successed"
//     },
//     {
//         "status": "fulfilled",
//         "value": "p2 successed"
//     },
//     {
//         "status": "fulfilled",
//         "value": "p3 successed"
//     }
// ]

// Promise.allSettled - One API Fails
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p1 successed"), 5000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p2 successed"), 3000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("p3 fails"), 1000);
// });
// Promise.allSettled([p1, p2, p3])
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));
// After 5 sec Output = waited for all apis to resolve
// [
//     {
//         "status": "fulfilled",
//         "value": "p1 successed"
//     },
//     {
//         "status": "fulfilled",
//         "value": "p2 successed"
//     },
//     {
//         "status": "rejected",
//         "reason": "p3 fails"
//     }
// ]

// ====================================================================================

// Promise.race - first API Fail
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p1 successed"), 5000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p2 successed"), 3000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("p3 fails"), 1000);
// });
// Promise.race([p1, p2, p3])
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));
// after 1 sec Output = error(p3 fails) // because it returns first api whether it is fails or succeed.

// Promise.race - first API Succeed
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p1 successed"), 5000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p2 successed"), 3000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("p3 fails"), 4000);
// });
// Promise.race([p1, p2, p3])
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));
// after 3 sec Output = p2 successed // because it returns first api whether it is fails or succeed.

// ====================================================================================

// Promise.any - second API Succeed - waits for anyone api to success
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p1 successed"), 5000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("p2 fails"), 3000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("p3 fails"), 1000);
// });
// Promise.any([p1, p2, p3])
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));
// after 5 sec Output = p1 successed // because it waits for API which will returns a success response.
// because it waits till it gets success response from any API

// Promise.any - second API Succeed - waits for anyone api to success
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("p1 fails"), 5000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("p2 fails"), 3000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("p3 fails"), 1000);
// });
// Promise.any([p1, p2, p3])
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.error(err);
//     console.log(err.errors);
//   });
// after 5 sec Output = AggregateError: All promises were rejected.
// [
//     "p1 fails",
//     "p2 fails",
//     "p3 fails"
// ]

// ====================================================================================

// Interview Que

console.log("Start");
setTimeout(() => {
  console.log("Timeout 1");
}, 0);
setImmediate(() => {
  console.log("Immediate");
});
setInterval(() => {
  console.log("Interval");
}, 1000);
Promise.resolve().then(() => {
  console.log("Promise");
});
console.log("End");
