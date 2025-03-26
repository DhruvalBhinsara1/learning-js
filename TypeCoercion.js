//type coercion

//when we are comparing two different data types, JavaScript will try to convert the types to a common type. This process is called type coercion.

//example

console.log(8 == "8"); //true

//if (1){} will be converted to true

//Object.is(par1,par2) is similar to === but it does not perform type coercion.

//example
console.log(+0 === -0); //true

console.log(Object.is(+0, -0)); //false

console.log(NaN == NaN); //false

console.log(Object.is(NaN, NaN)); //true

//more exmple
console.log('2=="2" : ' + (2 == "2")); //true
console.log('2==="2" : ' + (2 === "2")); //false
console.log('2!="2" : ' + (2 != "2")); //false
console.log('2!=="2" : ' + (2 !== "2")); //true
console.log('2>"2" : ' + (2 > "2")); //false
console.log('2>="2" : ' + (2 >= "2")); //true
console.log('2<"2" : ' + (2 < "2")); //false
console.log('2<="2" : ' + (2 <= "2")); //true

