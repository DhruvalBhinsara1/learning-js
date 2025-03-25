
//Number

let a = 10;
console.log(typeof (a));

//String

let b = "Hello";
console.log(typeof (b));


//Still String

let c = "Dhruval" + "Vraj";
console.log(c);
console.log(c + "are good friends");

console.log(`${c} are good friends`);
;

//Boolean

let x = true;
console.log(typeof (x));

let y = false;
console.log(typeof (y));


//Undefined
let z;
console.log(z);

//Null

let p = null;
console.log(typeof (p));


null == undefined; //true
null === undefined; //false

let t = 5;
let f = 5;

let e = 6;

t == 5
f == e


let sym1 = Symbol('foo');
let sym2 = Symbol('foo');

console.log(sym1 === sym2); // false

let num = 212312312312312312321321312311n;
console.log(num);
console.log(typeof (num));