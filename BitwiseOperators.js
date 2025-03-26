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

//Example1

var a = 8, b = 2;
console.log('a & b : ' + (a & b));  // “ a & b : 0”
console.log('a|b : ' + (a | b));        // “a | b : 10”
console.log('a^b : ' + (a ^ b));     // “ a^ b : 10”
console.log('~a : ' + (~a));        //”~a : -9”

var c = -50, d = 5;

console.log('~a : ' + (~c));

/*


  Bitwise Operator Truth Table

  X   Y   X&Y   X|Y   X^Y   ~X
  --------------------------------
  0   0    0     0     0     1
  0   1    0     1     1     1
  1   0    0     1     1     0
  1   1    1     1     0     0


  */

//Example2
var x1 = -48; z1 = 2

console.log('x1 & z1 : ' + (x1 & z1));  // “ x1 & z1 : -32”

console.log('x1 | z1 : ' + (x1 | z1));        // “x1 | z1 : -16”

console.log('x1 ^ z1 : ' + (x1 ^ z1));     // “x1 ^ z1 : -80”

console.log('~x1 : ' + (~x1));        //”~x1 : 47”


//Example3

var x2 = 0; z2 = 1;

console.log('x2 & z2 :' + (x2 & z2));  // “ x2 & z2 : 0”

console.log('x2 | z2 :' + (x2 | z2));        // “x2 | z2 : 1”

console.log('x2 ^ z2 :' + (x2 ^ z2));     // “x2 ^ z2 : 1”

console.log('~x2 :' + (~x2));        //”~x2 : -1”




