//Converting variable to numbers

//There are 3 JavaScript methods that can be used to convert variable to numbers:

//1. Number()
//2. parseInt()
//3. parseFloat()

//Number()
//Number can be used to convert JavaScript variables to numbers:
console.log(Number(true)); 		//1
console.log(Number(false));		//0
console.log(Number("10"));		//10
console.log(Number("  10"));		//10
console.log(Number("10  "));		//10
console.log(Number(" 10  "));		//10
console.log(Number("10.33"));		//10.33
console.log(Number("10,33"));	 	//NaN
console.log(Number("10 33"));	 //	NaN
console.log(Number("John"));	 	//NaN


//parsentInt()
//parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
console.log(parseInt("10"));
console.log(parseInt("-10.33"));

console.log(parseInt("10 20 30 40"));

console.log(parseInt("10", 16));


//parseFloat()
//parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:

console.log(parseFloat("10")); //10
console.log(parseFloat("10.33")); //10.33
console.log(parseFloat("10 20 30 40")); //10
console.log(parseFloat("10 years")); //10 
console.log(parseFloat("years 10")); //NaN
console.log(parseFloat("10.33 years")); //10.33
console.log(parseFloat("years 10.33")); //NaN 
console.log(parseFloat("10.33 10.33")); //10.33
console.log(parseFloat("10.33 10")); //10.33

let x = +"10";
console.log(typeof (x)); //10

let f = + "Parul";
console.log(typeof (f)); //NaN
console.log(f); //NaN

let j = null;
console.log(+j); //0

let ja = null;
console.log(typeof (ja)); //0

console.log(+"10" + 10 - 20);//0
