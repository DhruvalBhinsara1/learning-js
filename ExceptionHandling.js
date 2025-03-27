//Errors and Exception Handling

//Errors are the problems that cause the program to crash or behave unexpectedly.

//type of errors

//1. Syntax errors
//2. Logical errors
//3. Runtime errors
//4. Type errors
//5. Reference errors

//exception handling

//exception is an unexpected event that occurs during the execution of a program.

//exception handling is a mechanism used to handle and recover from exceptions.

//you cannot control the exception so we use alternative methods to handle exceptions.

//Example we are going to Surat To Mumbai and the tire gets punctured. we either replace the tire or take another transport to each Mumbai.

//there are two types of exceptions in JavaScript:

//1. built-in exceptions
//2. user-defined exceptions

//The Built in Exceptions are:

// Try
// Cathch
// Finally

//Try does not guarantee that an exception will be thrown. If an exception is thrown, the program execution will stop and the program will go to the catch block.

//Catch block is used to handle the exceptions. It can handle multiple exceptions.

//Finally block is used to execute a block of code, regardless of whether an exception occurred or not.

//example:

try {
    let a = 10;
    let b = 0;
    let result = a / b;
    console.log(result);
} catch (error) {
    console.log("An error occurred: ", error);
} finally {

    console.log("This code will always run.");
}
