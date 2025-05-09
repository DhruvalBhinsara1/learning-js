//Formatting Numbers

//toString() Method

let d = 369;

var b = d.toString()


console.log(b);

console.log(typeof (b));


//toExponential() Method

//toExponential() method returns a string representing the number in exponential notation.

let c = 4.123;

console.log(c.toExponential(2));
console.log(c.toExponential(3));
console.log(c.toExponential(4));
console.log(c.toExponential(5));


//toFixed() Method

//tofixed returns a string, with the number written with a specificed number of decimals

console.log();

let m = 5.21;

console.log(m.toFixed(0));
console.log(m.toFixed(2));
console.log(m.toFixed(4));


//toPrecision() Method
//toPrecision returns a string with a number written with a specified length 

console.log();

let n = 5.123456;

console.log(n.toPrecision());
console.log(n.toPrecision(2));
console.log(n.toPrecision(4));
console.log(n.toPrecision(6));

//valueOf() Method

//valueof returns a number as a number;
//valueof is used to convert Number objects to primitive values

console.log();

let xxx = 666;
console.log(xxx.valueOf());
console.log((666).valueOf());


//Number() Method
console.log();
console.log(Number(true));
console.log(Number(false));
let a = (Number("100"));
console.log(typeof (a), a);
let g = (Number("Dhruval"));
console.log(typeof (g), g);
console.log(Number("10.321"));
