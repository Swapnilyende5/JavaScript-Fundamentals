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
