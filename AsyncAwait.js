// ------  Topics will be covered  -----------
// What is Async and Await ?
// How Async Await works behind the scenes ?
// Examples of using async/await
// Error handling
// Interviews
// Async await vs. Promise .then/.catch

// Async functions Always returns a promise

// // Sending just string "swapnil"
// async function getdata() {
//   return "swapnil";
// }
// const data = getdata();
// data.then((data) => console.log(data));
// // but getting Promise as a output

// // creating and sending Promise to async function
// const newPromise = new Promise((res, rej) => res("Promise resolved"));
// async function getPromiseData() {
//   return newPromise;
// }
// const newPromiseData = getPromiseData();
// newPromiseData.then((data) => console.log(data));
// // getting Promise as a output

// ---------------------------------------------------------------------

// Promises - 1) Scenario one
// const p = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Promise resolved ");
//   }, 5000);
// });

// async function getPromise() {
//   console.log("hello world"); // will immediately print
//   const pData = await p; //  will wait till promise resolved
//   console.log("namaste JS "); // then "namaste JS" will print
//   console.log(pData); // then "Promise resolved" will print
// }
// getPromise();

// ---------------------------

// Promises - 2) Scenario Two
// const p1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Promise resolved 1");
//   }, 10000);
// });
// const p2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Promise resolved 2");
//   }, 5000);
// });

// async function getPromise() {
//   console.log("hello world"); // will immediately print
//   const pData1 = await p1; //  will wait till promise resolved
//   console.log("namaste JS 1"); // then "namaste JS" will print
//   console.log(pData1); // then "Promise resolved" will print

//   const pData2 = await p2; // Even though it resolved in 5 secs JS didn't reach here to ptint in 5 sec, because the above promise wil take 10 sec
//   // once above 10 sec promise resolved all consoles will be printed
//   console.log("namaste JS 2");
//   console.log(pData2);
// }
// getPromise();

// ---------------------------------------------------------------------

// Fetch Github User API data Example.
// and Error Handling with Try Catch
const USER_API = "https://api.github.com/users/akshaymarch7";

async function getUSer() {
  try {
    const userData = await fetch(USER_API);
    const jsonUserData = await userData.json();
    console.log(jsonUserData, "Response");
  } catch (err) {
    console.log("Error", err);
  }
}
// getUSer();
// getUSer().catch((err) => console.log(err)); // also this is the way to handle error instead of try catch
