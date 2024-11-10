/* this substitution */

"use strict";

function x1() {
  /* In non-strict mode, below code will print the global object when x1 is invoked as x1() -> 
            in case of browsers: global object = window
            in case of node.js: global object = Global

    In strict mode, below code will print "undefined" when x is invoked as x1()
    */
  console.log(this);
}

x1();

/* Nuances of this keyword based on how a function is called */

/*
 * If y is called as y(), then in strict mode, it will print "undefined"
 * if y is called as this.y() OR window.y(), then in strict mode, it will print the global object(window or Global)
 */

function y() {
  console.log(this);
}

y(); // undefined if strict mode is enabled
this.y(); // window if strict mode is enabled
window.y(); // window if strict mode is enabled

// a direct consequence of above behaviour

const obj = {
  name: "Debarshi",
  printName: function () {
    console.log(this);
    console.log(this.printName()); // stack overflow!!!
  },
};

obj.printName(); // since we are calling printName by attaching "obj" to it, so "this" will refer to the entire "obj" object inside printName()

// another small example to reinforce the concept

function x2() {
  console.log(`inside x...this = ${this}`); // global object
  function y() {
    console.log(`inside y...this = ${this}`); // global object
  }
  y();
}
x2();

/* call(), apply() and bind() methods */

/* call(): this is used to borrow methods defined in another object(like printDetails() written inside obj1 OR printDetailsGlobal() written inside global object) */

const obj1 = {
  firstName: "Debarshi",
  lastName: "Dutta",
  printDetails: function (hometown) {
    console.log(`Hello, ${this.firstName} ${this.lastName} from ${hometown}`);
  },
};

const obj2 = {
  firstName: "Ram",
  lastName: "Sen",
};

/* obj2 is borrowing and then invoking printDetails() method defined inside obj1 */
obj1.printDetails.call(obj2, "Kolkata"); // Hello, Ram Sen from Kolkata

let printDetailsGlobal = function (hometown) {
  console.log(`Hello, ${this.firstName} ${this.lastName} from ${hometown}`);
};

/* obj1 is borrowing and then invoking printDetailsGlobal() method defined inside global object */
printDetailsGlobal.call(obj1, "Kolkata"); // Hello, Debarshi Dutta from Kolkata
/* obj1 is borrowing and then invoking printDetailsGlobal() method defined inside global object */
printDetailsGlobal.call(obj2, "Kolkata"); // Hello, Ram Sen from Kolkata

/* apply(): similar to call() but accepts a list for additional params */

printDetailsGlobal.apply(obj1, ["Kolkata"]); // Hello, Debarshi Dutta from Kolkata

/* bind(): similar to call() but instead of immediately invoking the borrowed function, bind() returns a copy of the borrowed function so that it can be invoked later */
let borrowedPrintDetailsGlobal = printDetailsGlobal.bind(obj1, "Kolkata");
borrowedPrintDetailsGlobal(); // Hello, Debarshi Dutta from Kolkata

/* "this" keyword in the context of arrow functions */

let obj3 = {
  firstName: "Debarshi",
  printFirstNameArrow: () => {
    console.log(this);
  },
  printFirstName: function () {
    console.log(this);
  },
};
obj3.printFirstNameArrow(); // prints global object sicne printFirstName() is an arrow function
obj3.printFirstName(); // prints obj3 object

let myLetVariable = 10;
let obj4 = {
  firstName: "Debarshi",
  printFirstName: function () {
    console.log(`myLetVariable = ${myLetVariable}`); // prints 10
    console.log(`Inside normal function...this = ${this}`); // obj4 object
    const nestedPrintFirstNameArrow = () => {
      console.log(`nested arrow function...this = ${this}`); // obj4 object
    };
    nestedPrintFirstNameArrow();
  },
  printFirstNameArrow: () => {
    console.log(`Inside arrow function...this = ${this}`); // global object
  },
};

obj4.printFirstName();
obj4.printFirstNameArrow();

// another small nuance due to "let" and "const" being block scoped(being defined in a space other than the global scope) and "var" being global scoped

var myVarVariable = 1;
let myLetVariable2 = 100;
const myConstVariable = 1000;

const obj5 = {
  printVariables: function () {
    console.log(
      `Inside normal printVariables()...myVarVariable = ${myVarVariable}` // prints 1 without any error
    );
    console.log(
      `Inside normal printVariables()...myLetVariable = ${myLetVariable}` // throws error since "let" variables are not global scoped
    );
    console.log(
      `Inside normal printVariables()...myConstVariable = ${myConstVariable}` // prints 1000 without any error
    );
    const nestedArrowPrintVariables = () => {
      console.log(
        `Inside nestedArrowPrintVariables()...myVarVariable = ${myVarVariable}` // prints 1 without any error
      );
      console.log(
        `Inside nestedArrowPrintVariables()...myLetVariable = ${myLetVariable}` // throws error since "let" variables are not global scoped
      );
      console.log(
        `Inside nestedArrowPrintVariables()...myConstVariable = ${myConstVariable}` // prints 1000 without any error
      );
    };
    nestedArrowPrintVariables();
  },
  arrowPrintVariables: () => {
    console.log(
      `Inside arrowPrintVariables()...myVarVariable = ${myVarVariable}` // prints 1 without any error
    );
    console.log(
      `Inside arrowPrintVariables()...myLetVariable = ${myLetVariable}` // throws error since "let" variables are not global scoped
    );
    console.log(
      `Inside arrowPrintVariables()...myConstVariable = ${myConstVariable}` // prints 1000 without any error
    );
  },
};
