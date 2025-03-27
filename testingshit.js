console.log(parseInt("42"));       // 42
console.log(parseInt("101", 2));   // 5 (binary to decimal)
console.log(parseInt("7.8"));      // 7 (truncates decimal part)


console.log(parseFloat("42.231floating"));      // 42.231


let b = "floating500floating";
console.log(parseFloat(b));   // 500 (since it's a string, it tries to convert it to a number)

let c = "101";
console.log(parseInt(c, 2));   // 5 (binary to decimal)


//how could I extract the integer or float part middle of a string?

let str = "This is a number 42.345 and another 78.901";
let number = parseFloat(str.match(/\d+(?:\.\d+)?/g)[0]);
console.log(number); // 42.345

let str2 = "This is a number 101 and another 78";

let number2 = parseInt(str2.match(/\d+/g)[0], 2);

console.log(number2); // 5 (binary to decimal)
