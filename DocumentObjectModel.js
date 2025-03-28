//Document Object Model (DOM)

//DOM allows JavaScript to manipulate HTML elements.

//DOM consists of nodes and properties. Nodes can be elements, text nodes, comments, and attributes.

//Example:

function changeHeadingText() {

    let heading = document.getElementById("heading");
    heading.textContent = "It might be dangerous!";
}

function changeParagraphText() {

    let paragraph = document.getElementsByClassName("paragraph")[0];
    paragraph.textContent = "It is a demigorgan!";
    document.body.style.backgroundColor = "darkred";
}

//The above code will change the text content of the heading element with id "heading" to "Boooo!".