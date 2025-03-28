//Functions

//what kind of functions are there?

//1. built-in functions
console.log("Built-in Functions:")
console.log(Math.random()); // Output: a random number between 0 and 1

//2. user-defined functions

console.log();
console.log("User-defined Functions:")
function greet(name) {
    console.log("Hello, " + name);
}

greet("John"); // Output: Hello, John

//3. anonymous functions

console.log();
console.log("Anonymous Functions:");
let greetAnon = function (name) {
    console.log("Hello, " + name);
};

greetAnon("Jane"); // Output: Hello, Jane

//4. closures

console.log();
console.log("Closures:");
function outer() {
    let x = 10;

    function inner() {
        console.log(x); // Output: 10
    }

    inner();
}


//use strict
"use strict";

//we use strict mode to catch common coding mistakes and errors like using undeclared variables and trying to change a constant variable.

//example 1

y = 20;

console.log(y); // Output: 20

//example 2

function strictExample() {
    "use strict";
    x = 20; // throws a ReferenceError
}

//example 3

function strictExample2() {
    "use strict";
    const z = 30;
    z = 40; // throws a TypeError
}




