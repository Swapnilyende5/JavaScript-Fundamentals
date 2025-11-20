function greet(city, state) {
  console.log(`Hi, I am ${this.name}, from ${city}, ${state}.`);
}

const user = { name: "Swapnil" };

// call() method
// calls function immidiatly and pass arguments separately
// greet.call(user, "Nagpur", "Maharashtra");

// apply() method
// calls function immidiatly but pass arguments in an array
// greet.apply(user, ["Nagpur", "Maharashtra"]);

// bind() method
// store function and for calling later
const greetUser = greet.bind(user, "Nagpur", "Maharashtra");
greetUser();
// ------ can be called like in an array
// const args = ["Nagpur", "Maharashtra"];
// const greetUser = greet.bind(user, ...args);
