//Date Object

//Date object can be used to get the current date and time.

//Constructor

//The Date() constructor creates a new Date object representing the current date and time.

//Example:

var now = new Date();
console.log(now); // Output: Wed Dec 15 2022 15:18:37 GMT+0530 (India Standard Time)

//Methods

//The Date object has various methods that can be used to get different information about the current date and time.

//different methods of Date are:

//(1) getFullYear() - returns the year as a four-digit number.

//example:

console.log(now.getFullYear()); // Output: 2022

//(2) getMonth() - returns the month as a zero-based number (0 for January, 11 for December).

//example:

console.log(now.getMonth()); // Output: 11

//(3) getDate() - returns the day of the month as a number (1 to 31).

//example:

console.log(now.getDate()); // Output: 15

//(4) getDay() - returns the day of the week as a number (0 for Sunday, 1 for Monday, etc.).

//example:
console.log(now.getDay()); // Output: 5

//(5) getHours() - returns the hour as a number (0 to 23).

//example:

console.log(now.getHours()); // Output: 15

//(6) getMinutes() - returns the minute as a number (0 to 59).

//example:

console.log(now.getMinutes()); // Output: 18

//(7) getSeconds() - returns the second as a number (0 to 59).

//example:

console.log(now.getSeconds()); // Output: 37

//(8) getMilliseconds() - returns the milliseconds as a number (0 to 999).

//example:

console.log(now.getMilliseconds()); // Output: 574

//(9) getTime() - returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.

console.log(now.getTime()); // Output: 1671243917574

//(10) getDay() - returns the day of the week as a number (0 for Sunday, 1 for Monday, etc.).

//example:

console.log(now.getDay()); // Output: 5

//(10) Date.now()

//example:

console.log(Date.now()); // Output: 1671243944653
