function hi() {
    document.getElementById("p1").style.backgroundColor = colors[i];

    document.body.style.backgroundColor = colors[i + 2];

    i = (i + 3) % colors.length;
}


let colors = ['red', 'green', 'blue', 'yellow', 'orange'];
let i = 0;