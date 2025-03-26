//Unshift method adds one or more elements to the beginning of an array and returns the new length of the array.


let arr = [1, 2, 3, 4, 5];
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3, 4, 5]

//unshift with strings
let arr2 = ["a", "b", "c"];
arr2.unshift("x", "y");
console.log(arr2); // ["x", "y", "a", "b", "c"]

//shift method removes the first element from an array and returns that removed element. This method changes the length of the array.

let arr1 = [1, 2, 3, 4, 5];
arr1.shift();
console.log(arr1); // [2, 3, 4, 5]

//shift with strings

let arr3 = ["a", "b", "c"];
arr3.shift();
console.log(arr3); // ["b", "c"]

