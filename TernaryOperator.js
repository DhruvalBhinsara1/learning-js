//Tranary Operator

//In JavaScript, the ternary operator is a shorthand for if-else statements. It is used to replace multiple if-else statements.

//Syntax:

// condition ? expression1 : expression2

//Example:

var x = 5;
var result = (x > 5) ? "Greater than 5" : "Less than or equal to 5";
console.log(result); // Output: "Less than or equal to 5"

//In this example, if /;othe condition (x > 5) is true, the result is "Greater than 5". Otherwise, the result is "Less than or equal to 5".    

//Note: The ternary operator is generally used for simple if-else conditions. If you need more complex logic, you may want to use an if-else statement instead.

//Example:

var y = 10;
var z = (y > 5) ? (y > 10) ? "Greater than 10" : "Greater than 5" : "Less than or equal to 5";
console.log(z); // Output: "Greater than 10"

//In this example, the ternary operator is used to check if y is greater than 5 and then to check if it is greater than 10. If both conditions are true, the result is "Greater than 10". Otherwise, the result is "Greater than 5". If y is not greater than 5, the result is "Less than or equal to 5".

let a = typeof (NaN);

console.log(a); // Output: "number".