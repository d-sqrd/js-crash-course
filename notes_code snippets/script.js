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
*/
