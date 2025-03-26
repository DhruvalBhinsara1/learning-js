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