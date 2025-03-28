//Window Screen

//The window.screen object provides information about the user's screen.

//it can be written without any prefix.

//it can be used to display screen width, height, color depth, ,pixelDepth and more.

//Properties of window.screen:

//There are 6 properties of window.screen and they are as following:


//(1). screen.width
//(2). screen.height
//(3). screen.colorDepth
//(4). screen.pixelDepth
//(5). screen.availWidth
//(6). screen.availHeight


//screen.width 

//Returns the width of the screen in pixels.

//It does not include the taskbar or window borders.
//For example, a 1920x1080 screen has a screen.width of 1920 and a screen.height of 1080.

console.log(screen.width); // Output: 1920

//screen.height

//Returns the height of the screen in pixels.

//It does not include the taskbar or window borders.

console.log(screen.height); // Output: 1080


//screen.colorDepth

//Returns the color depth in bits per pixel.

console.log(screen.colorDepth); // Output: 24 // For a typical computer screen, this is 24 bits per pixel.

//On a high-resolution screen, this would be higher, such as 32 bits per pixel.


//screen.pixelDepth

//Returns the pixel depth in bits per pixel.

console.log(screen.pixelDepth); // Output: 32 // For a typical computer screen, this is 32 bits per pixel.

//On a high-resolution screen, this would be higher, such as 64 bits per pixel.

//screen.availWidth

//Returns the width of the available screen area in pixels.

console.log(screen.availWidth); // Output: 1536 // This is the width of the screen excluding the taskbar and window borders.

//screen.availHeight

//Returns the height of the available screen area in pixels.

console.log(screen.availHeight); // Output: 900 // This is the height of the screen excluding the taskbar and window borders.



//Note: screen.availWidth and screen.availHeight are not always the same as screen.width and screen.height. They are adjusted for the taskbar and window borders.



//note for modern computers with high-resolution screens:

//The actual screen resolution may be higher than the available screen area. For example, a high-resolution screen may have a higher pixel depth than the available screen area.