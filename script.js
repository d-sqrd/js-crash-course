// console.log(window);
// const curryingFun0 = (a) => {
//   return (curryingFun1 = (b) => {
//     return (curryingFun2 = (c) => {
//       return a + b + c;
//     });
//   });
// };
// console.log(curryingFun0(1));
// console.log(curryingFun0(1)(2));
// console.log(curryingFun0(1)(2)(3));

// const URL = "https://api.restful-api.dev/objects";
// const data = fetch(URL);
// data.then((res) => console.log(res));
// console.log(`data`);

// const isValidCart = (cart) => {
//   return false;
// };

// const createOrder = (cart) => {
//   const pr = new Promise((resolve, reject) => {
//     if (!isValidCart(cart)) {
//       const err = new Error("Cart is invalid!");
//       reject(err);
//     }
//     resolve(`Order Successful!!!`);
//   });
//   return pr;
// };

// console.log(createOrder("cart"));

// let var1 = 10;
// console.log("before and outside IIF" + var1);
// (function () {
//   var1 = 1000;
//   console.log("inside IIF" + var1);
// })();
// console.log("after and outside IIF" + var1);

// function memoizedFunction() {
//   let cache = {};
//   function performCalculation(arg0) {
//     console.log(cache);
//     if (arg0 in cache) {
//       console.log(`retrieving data from cache...${cache[arg0]}`);
//       return cache[arg0];
//     } else {
//       cache[arg0] = 1000 + arg0;
//       console.log(`calculating and then storing inside cache...${cache[arg0]}`);
//       return cache[arg0];
//     }
//   }
//   return performCalculation;
// }
// const addOne = memoizedFunction();
// addOne(1); // prints: calculating and then storing inside cache...1001
// addOne(1); // prints: retrieving data from cache...1001

// Promise chaining
new Promise((resolve, reject) => {
  console.log(`Level = 1`);
  reject("Promise broken :(");
  resolve(1);
})
  .catch((err) => {
    console.log(`Error = ${err}`);
  })
  .then((res) => {
    console.log(`Level = 2`);
    return res * 2;
  })
  .then((res) => {
    console.log(`Level = 3`);
    return res * 3;
  })
  .finally(console.log(`Inside finally!`));
