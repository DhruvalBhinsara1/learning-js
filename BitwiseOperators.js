//Bitwise Operators

// Bitwise operators perform operations on individual bits of binary numbers.

//it computes by going bit by bit

//bits of both operands are checked irrespective of what first operand is.

//there are 4 major operators:

/* (1) &-bitwise and : returns 1 if both bits are 1 else 0

(2) | - bitwise or : returns 1 if either bit is 1 else 0

(3) ^ -bitwise xor, returns 1 if both bits are different else 0.


(4) ~ -bitwise not, changes 1 to 0 and vice versa.

*/


var a = 8, b = 2;
console.log('a & b : ' + (a & b));  // “ a & b : 0”
console.log('a|b : ' + (a | b));        // “a | b : 10”
console.log('a^b : ' + (a ^ b));     // “ a^ b : 10”
console.log('~a : ' + (~a));        //”~a : -9”
