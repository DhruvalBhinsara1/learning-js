//object comparison

let animal = new Object();
let cat = animal;
let dog = animal;

console.log(cat == dog); //true

let horse = new Object();
console.log(cat == horse); //false

console.log(cat === horse); //false

console.log(Object.is(cat, horse));
//true



JSON.stringify(cat) === JSON.stringify(dog); //true
console.log(+0 === -0); //true
console.log(+0 == -0); //true
console.log(Object.is(+0, -0)); //false