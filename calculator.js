// Listen for keyboard input and update the calculator
document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (key >= '0' && key <= '9') { // Numbers 0-9
        appendValue(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') { // Operators
        appendValue(key);
    } else if (key === 'Enter') { // Equals button
        calculate();
    } else if (key === 'Backspace') { // Clear last character
        document.getElementById("result").value = document.getElementById("result").value.slice(0, -1);
    } else if (key === 'c' || key === 'C') { // Clear all input (C key)
        clearResult();
    }
});
