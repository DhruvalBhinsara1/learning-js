//Loops 

//there are total 6 types of loops in JavaScript:
//1. for loop
//2. while loop
//3. do-while loop
//4. forEach loop
//5. for-in loop
//6. for-of loop


//for loop 
//for loop is used to iterate over a block of code a certain number of times.

console.log();
console.log('for loop:');

let i;
for (i = 0; i < 5; i++) {
    console.log(i);
}

//while loop
//while loop is used to iterate over a block of code as long as a specified condition is true.

console.log();
console.log('while loop:');

let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}


//do-while loop
//do-while loop is used to iterate over a block of code once, and then continues to iterate as long as a specified condition is true.
console.log();
console.log('do-while loop:');

let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);


//foreach loop
//foreach loop is used to iterate over each item in an array. 
//it is nothing but giving each direction to another variable.

console.log();
console.log('forEach loop:');

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(numbers => console.log(numbers));


//forint loop
//forint loop is used to iterate over each key-value pair in an object. 

console.log();
console.log('for-in loop:');

let person = {
    name: 'Dhruval',
    age: 19,
    city: 'Surat'
};

for (let key in person) {
    console.log(key + ': ' + person[key]);
}

//for-of loop
//forof loop is used to iterate over each key in an object.

console.log();
console.log('for-of loop:');
let colors = ['red', 'green', 'blue'];

for (let color of colors) {
    console.log(color);
}
