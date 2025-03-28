// Browser Object Model (BOM)

//Browser Object Model (BOM) provides a standard interface for JavaScript to interact with the browser's window and document.

//All browsers split the different parts of the browser into objects, which BOM provides access to.


//BOM objects are children of the window object.

//Some of the BOM objects include:

//Navigator: Provides information about the browser and its environment.

//Screen: Provides information about the user's screen.

//History: Provides methods and properties to manipulate the browser's history.

//Location: Provides methods and properties to manipulate the URL of the document.

//Document: Provides methods and properties to manipulate the document.

//Window: Provides methods and properties to manipulate the browser's window.


//Window Size

//The window size is determined by the browser window's dimensions.

//You can get the current window size using the window.innerWidth and window.innerHeight properties.

//window.innerWidth returns the width of the browser window in pixels.

//window.innerHeight returns the height of the browser window in pixels.

//Example:

console.log();
console.log("Heights and Widths")
console.log("Window Inner width: " + window.innerWidth);
console.log("Window Inner height: " + window.innerHeight);
console.log("Window Screen Width: " + screen.availWidth);
console.log("Window Screen Height: " + screen.availHeight);
console.log("Window Screen Width: " + screen.screenWidth);
console.log("Window Screen Height " + screen.screenHeight);


//Window Location

//The location object provides methods and properties to manipulate the URL of the document.

//Location Methods:

//(1) assign()
//the window.location.assign() method replaces the current document with another document.

//example of assign()

//window.location.assign("https://github.com/DhruvalBhinsara1/learning-js/")

//(2) reload()
//the window.location.reload() method reloads the current document.

//window.location.reload();

//(3) replace()
//the window.location.replace() method replaces the current document with another document.

//window.location.replace("https://github.com/DhruvalBhinsara1/learning-js/")

//Example:

//Location Properties:

//(1) window.location.hostname returns the hostname of the current URL.

x = window.location.hostname;
console.log("Current Hostname: " + x);

//(2) window.location.href returns the current URL.

y = window.location.href;
console.log("Current URL: " + y);

//(3) window.location.pathname returns the path name of the current URL.

w = window.location.pathname;
console.log("Current Pathname: " + w);
//(4) window.location.protocol returns the protocol of the current URL.

z = window.location.protocol;
console.log("Current Protocol: " + z);


//Window History

//The history object provides methods and properties to manipulate the browser's history.

//it provides an array of URLs that the user has visited.

//it can be written without any prefix.


//History Methods:

//(1) window.history.back()

//the window.history.back() method loads the previous document in the history list.

//window.history.back();

//(2) window.history.forward()

//the window.history.forward() method loads the next document in the history list.

//window.history.forward();

//(3) window.history.go()

//the window.history.go() method loads a document at a specific position in the history list.

//window.history.go(-1); //load the previous document

//(4) window.history.length

//the window.history.length property returns the number of documents in the history list.

//window.history.length;
