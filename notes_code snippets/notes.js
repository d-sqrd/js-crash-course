/*
***************************************************************************************************************************
Diffrence between == and ===
== : no type checking(non-strict)
=== : type will be checked(strict)

0 == false   // true
0 === false  // false
1 == "1"     // true
1 === "1"    // false
null == undefined // true
null === undefined // false
[]==[] or []===[] //false, refer different objects in memory
{}=={} or {}==={} //false, refer different objects in memory


const obj1 = {"key1": 1}
const obj2 = obj1;
const obj3 = {"key1": 1}

obj2 == obj1 OR  obj2 === obj1  // returns true
obj3 == obj1 OR obj3 === obj1   // returns false

const arr1 = [1, 'a', obj1]
const arr2 = arr1;
const arr3 = [1, 'a', obj1]

arr1 == arr2 OR arr1 === arr2   // return true
arr1 == arr3 OR arr1 === arr3   // returns false
****************************************************************************************************************************
*/

/*
****************************************************************************************************************************
First class functions:
    * functions which are treated just like normal variables
    * these functions can be passed as an argument to another function, returned by other functions and can be assigned to variables
    * first class functions enable closures
****************************************************************************************************************************
*/

/*
****************************************************************************************************************************
First order functions:
    * First-order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value.
****************************************************************************************************************************
*/

/*
****************************************************************************************************************************
Higher order functions:
    * function that accepts another function as an argument OR returns another function OR both
    * The main difference between first-class functions and higher-order functions is that first-class functions are treated like other variables, while higher-order functions can take other functions as arguments or return functions as results

example:

function firstOrderFun() {
    console.log('Hello! I am a first order function!')
}

function higherOrderFun(argFun) {
    return argFun()
}

higherOrderFun(firstOrderFun)   // prints "Hello! I am a first order function!"
****************************************************************************************************************************
*/

/*
****************************************************************************************************************************
Unary function:
* function that accepts only one variable as argument

example:
const unaryFun = (soleArg) => soleArg;
****************************************************************************************************************************
*/

/*
****************************************************************************************************************************
Function currying:
* function currying is the process of converting a function accepting multiple variables as arguments to a sequence of functions accepting only one argument

example:

// normal function
const nAryFun = (a, b, c) => a + b + c;

// curryied functions
const curryingFun0 = (a) => {
    return (curryingFun1 = (b) => {
        return (curryingFun2 = (c) => {
            return a + b + c;
        });
    });
};
console.log(curryingFun0(1));           // returns curryingFun1
console.log(curryingFun0(1)(2));        // returns curryingFun2
console.log(curryingFun0(1)(2)(3));     // returns 6
****************************************************************************************************************************
*/

/*
****************************************************************************************************************************
Usage of "let" variables inside switch case
let counter = 1;
switch(x){
    case 0:
        let counter;
        break;
    case 1:
        let counter;    //syntax error due to re-declaration of block scoped "let" variable
        break;
}
Proper way to write above code:

let counter = 1;
switch(x){
    case 0: {
        let counter;
        break;
    }
    case 1: {
        let counter;    //no error since now "let" variable is declared within blocks
        break;
    }
}

****************************************************************************************************************************
*/

/*
****************************************************************************************************************************
Temporal dead zone
* applicable only for let and const variables
* if we try to access a let/const variable before its initialization then reference error is thrown
* temporal dead zone is the time between a let or const variable's usage in code and their initialization
example:

function myFun() {
    console.log(myVarTypeVariable);     // undefined
    console.log(myLetVar);              // reference error
    console.log(myConstVar);            // reference error
    .....temporal dead zone
    .....temporal dead zone
    .....temporal dead zone
    .....temporal dead zone
    .....temporal dead zone
    .....temporal dead zone
    var myVarTypeVariable = 2;
    let myLetVar = 1;
    const myConstVar = 12;
}
****************************************************************************************************************************
*/

/*
Pure functions
****************************************************************************************************************************
* a pure function is a block of code that will always return the same value for a given input
* return value has no external dependency(meaning all the dependencies are with the block scoped variables of that function)

example-1:

const calculateSum = (a, b) => a + b // here for given values of a & b, we will always get the same result -> so this is a pure function

example-2:

let offSet = 100;
const calculateSum = (a, b) => offSet + a + b;    // here since we are using offSet which is present outside the block scope of the calculateSum method, so if offset variables's value changes then the return value of calculateSum method will also change -> so this is not a pure function
****************************************************************************************************************************
*/

/*
****************************************************************************************************************************
Difference between let and var keywords

function myFun(arg0) {
    if(arg0) {
        console.log(myVar1);    // prints undefined since during memory allocation phase that is what var variables are initialized with
        console.log(myLet1);    // reference error: cannot access let variable before initialization
        var myVar1 = 100;
        let myLet1 = 200;
    }
    console.log(myVar1);    // prints 100 since var variables are function scoped
    console.log(myLet1);    // error since let is block scoped
}

****************************************************************************************************************************
*/

/*
****************************************************************************************************************************
Immediately invoked function

let var1 = 10;
console.log(var1);   // prints 10
(function () {
  var1 = 1000;
  console.log(var1);             // prints 1000
})();
console.log(var1);    // prints 1000
****************************************************************************************************************************
*/

/*
****************************************************************************************************************************
Function memoization
* memoization is a technique of caching previously calculated values so that when those values are required in the future then we can return them from the cache without re-performing the operations
* function memoization is a good example to understand and appreciate closures

example:
function memoizedFunction() {
  let cache = {};
  function performCalculation(arg0) {
    console.log(cache);
    if (arg0 in cache) {
      console.log(`retrieving data from cache...${cache[arg0]}`);
      return cache[arg0];
    } else {
      cache[arg0] = 1000 + arg0;
      console.log(`calculating and then storing inside cache...${cache[arg0]}`);
      return cache[arg0];
    }
  }
  return performCalculation;
}
const addOne = memoizedFunction();
addOne(1); // prints: calculating and then storing inside cache...1001
addOne(1); // prints: retrieving data from cache...1001
****************************************************************************************************************************
*/

/*
****************************************************************************************************************************
Cookie:
    * A cookie is a piece of data that is stored on your computer to be accessed by your browser. Cookies are saved as key/value pairs.
****************************************************************************************************************************
*/

/*
 ****************************************************************************************************************************
 Web storage
 * Web storage is an API that provides a mechanism by which browsers can store key/value pairs locally within the user's browser, in a much more intuitive fashion than using cookies. The web storage provides two mechanisms for storing data on the client.
 * Local storage: It stores data for current origin with no expiration date.
 * Session storage: It stores data for one session and the data is lost when the browser tab is closed.
 ****************************************************************************************************************************
 */

/*
****************************************************************************************************************************
3 states of a promise:
    * Pending: promise is not yet rejected or fulfilled
    * Fulfilled: async op was successful
    * Rejected: async op was unsuccessful
****************************************************************************************************************************
*/
/*
****************************************************************************************************************************
const a = "hello";
const b = 10;
const c = {z: "zee"};
const obj1 = {a, b, c};
console.log(obj1);  // { a: "hello", b: 10, c: { z: "zee" } }
console.log(obj1.a === { a }.a);    // true
****************************************************************************************************************************
*/
/*
****************************************************************************************************************************
const foo = (a, b) => {
  console.log(a);
  console.log(b);
};
const str1 = "ab";
foo(...str1);   // a b

const arr1 = [1, 2, 3];
const obj1 = { ...arr1 };   // { 0: 1, 1: 2, 2: 3 }

const obj2 = { ...true, ..."abc", ...10};
console.log(obj2);  // { 0: "a", 1: "b", 2: "c" }

const obj3 = { foo: "bar", x: 42 };
const obj4 = { foo: "baz", y: 13 };
const mergedObj = { x: 41, ...obj3, ...obj4, y: 9 }; // { x: 42, foo: "baz", y: 9 }
****************************************************************************************************************************
*/
