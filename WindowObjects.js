//The Window Object

//The window object represents the global JavaScript environment. It provides access to all global variables, functions, and objects.

//Window is a global object, which means you don't need to use its name to access its properties or methods.

//Example:

//alert() is a method of browser's window object.

//you can call alert() with 2 ways:

//1. Using the window object:

window.alert("Hello, World!");

//2. Using the alert() function:

alert("Hello, World!");

//Window Size

//The window size is determined by the browser window's dimensions.

//You can get the current window size using the window.innerWidth and window.innerHeight properties.

//window.innerWidth returns the width of the browser window in pixels.

//window.innerHeight returns the height of the browser window in pixels.

//Example:

console.log("Window width: " + window.innerWidth);
console.log("Window height: " + window.innerHeight);

//Window Methods

//The Different type of Window Methods are:

//1) open()
//2) close()
//3) moveTo()
//4) resizeTo()
//5) alert()
//6) confirm()
//7) prompt()
//8) setTimeout()


//open()

//open() method opens a new browser window and returns a reference to the new window.

//Syntax:

//window.open(url, name, features, replace)

//example:

var newWindow = window.open("https://www.youtube.com/@DhruvalFilms/", "width=800,height=600");

//url: The URL of the page to open.

//close()

//close() method closes the current window.

//Syntax:

//window.close()

//Example:

window.close();

//moveTo()

//moveTo() method moves the current window to the specified coordinates.

//Syntax:

//window.moveTo(x, y)

//example:

window.moveTo(100, 100);

//resizeTo()

//resizeTo() method resizes the current window to the specified width and height.

//Syntax:

//window.resizeTo(width, height)

//example:

window.resizeTo(800, 600);

//alert()

//alert() method displays an alert box with a specified message and an OK button.

//Syntax:

//window.alert(message)

//example:

window.alert("Hello, World!");

//confirm()

//confirm() method displays a dialog box with a specified message and two buttons: OK and Cancel.

//Syntax:

//window.confirm(message)

//example:

var result = window.confirm("Are you sure you want to continue?");

//prompt()

//prompt() method displays a dialog box with a specified message and an input field.

//Syntax:

//window.prompt(message, defaultText)

//example:

var userName = window.prompt("Enter your name:", "John Doe");

//setTimeout()

//setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.

//Syntax:

//window.setTimeout(function, milliseconds)

//example:

window.setTimeout(function () { alert("Hello, World!"); }, 3000);