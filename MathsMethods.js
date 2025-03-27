//Built-in Math Functions

//Math Properties (constants)

//syntax

//Math.property

//Methods

//number to integer

//1.round (it returns the number to the nearest integer)

//2.ceil (it reuturns rounded up to the nearest integer)

//3.floor (it reuturns rounded down to the nearest integer)

//4.trunc (returns the integer part of a number)

//example

//round 
console.log()
console.log("round")
console.log(Math.round(4.7)); // Output: 5
console.log(Math.round(5.2)) // Output : 5
console.log(Math.round(5.5)); // Output : 6

//ceil
console.log()
console.log("ceil")
console.log(Math.ceil(4.7)); // Output: 5
console.log(Math.ceil(5.2)); // Output : 6
console.log(Math.ceil(5.5)); // Output : 6

//floor
console.log()
console.log("floor")
console.log(Math.floor(4.7)); // Output: 4
console.log(Math.floor(5.2)); // Output : 5
console.log(Math.floor(5.5)); // Output : 5

//trunc
console.log()
console.log("trunc")
console.log(Math.trunc(4.7)); // Output: 4
console.log(Math.trunc(5.2)); // Output : 5
console.log(Math.trunc(5.5)); // Output : 5



//Math.sign()

//example

console.log()
console.log("Math.sign")
console.log(Math.sign(0)); // Output: 0
console.log(Math.sign(-0)); // Output: -0
console.log(Math.sign(15)); // Output: 1

//Math pow()

//example

console.log()
console.log("Math.pow")
console.log(Math.pow(2, 3)); // Output: 8
console.log(Math.pow(4, 0.5)); // Output: 2
console.log(Math.pow(8, -2)); // Output: 0.0625

//Math sqrt()

//example

console.log()
console.log("Math.sqrt")
console.log(Math.sqrt(16)); // Output: 4
console.log(Math.sqrt(2)); // Output: 1.4142135623730951

//math abs()

//example

console.log()
console.log("Math.abs")
console.log(Math.abs(-15)); // Output: 15
console.log(Math.abs(15)); // Output: 15

//Math.min()

//example

console.log()
console.log("Math.min")
console.log(Math.min(2, 3, 4, 5)); // Output: 2
console.log(Math.min(2, -3, 4, 5)); // Output: -3

//Math.max()

//example

console.log()
console.log("Math.max")
console.log(Math.max(2, 3, 4, 5)); // Output: 5
console.log(Math.max(2, -3, 4, 5)); // Output: 5

//Math.random()

//example 

console.log()
console.log("Math.random")
console.log(Math.random()); // Output: a random number between 0 and 1
console.log(Math.random() * 10); // Output: a random number between 0 and 10
console.log((Math.floor(Math.random() * 10000 + 1)));
// Output: a rand
//OTP generation 

let otp = Math.floor(Math.random() * 10000, 100000);

console.log(otp); // Output: a random 4-digit number
