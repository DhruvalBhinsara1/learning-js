//Synchronous Function and Asynchronous Function

//what are synchronous and asynchronous functions?

//Synchronous function: In synchronous programming, a function will wait for a task to complete before moving on to the next line of code. If a task takes a long time to complete, the entire program will be blocked until the task is done.

//Asynchronous function: In asynchronous programming, a function will start a task and continue executing the rest of the program without waiting for the task to complete. Once the task is done, the function will receive a notification and continue executing the code.


//example of synchronous function:

function synchronousFunction() {
    console.log("Synchronous function started");
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log("Synchronous function completed");
}
; // Output: Synchronous function started, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, Synchronous function completed

//example of asynchronous function using setTimeout:

function asynchronousFunction() {
    console.log("Asynchronous function started");
    setTimeout(function () {
        console.log("Asynchronous function completed");
    }, 2000); // delay of 2 seconds
}

asynchronousFunction()