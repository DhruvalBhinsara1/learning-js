//splice 
//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

//Syntax
//array.splice(start)
//array.splice(start, deleteCount)
//array.splice(start, deleteCount, item1, item2, ...)

//example 1
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits); // ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]

//example 2
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits); // ["Banana", "Orange", "Lemon", "Kiwi"]

//example 3
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1);
console.log(fruits); // ["Banana", "Orange", "Mango"]


//example 4
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2);
console.log(fruits); // ["Banana", "Orange"]

//Slice 


//slice helps to create a new array from the existing array. It does not change the existing array.

let sli = [1, 2, 3, 4, 5, 6, 7];
console.log(sli);

let sli2 = sli.slice(2, 5);
console.log(sli2); // [3, 4, 5]