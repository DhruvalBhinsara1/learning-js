//Arrays

//it is used to store data together.
//it is defined by square brackets [].
//it can store any type of data.
//it is a common practice to delcare arrays with consts names.
//it is a zero based index.
//it is a mutable data type.
//Example1
//array is an object


const a = [1, true, "hello"]
console.log(a[2]); //output : "hello" 
console.log("\n", typeof (a));
console.log(a.length)

//Example2

var b = [1, 2, , 4, 5]
console.log("\n", b[2]);  //output : undefined


//Example3

const cars = []
cars[0] = "Ford";
cars[1] = "BMW";
cars[2] = "Fiat";
cars[3] = "Audi";

console.log(cars);

const cars1 = new Array("saab", "volvo", "bmw");
console.log(cars1);

//arrays as object


const person1 = { first_Name: "Dhruval", last_Name: "Bhinsara", age: 19 };

console.log(person1.first_Name);
console.log(person1.age);
console.log(person1.lenght); //output : undefined

