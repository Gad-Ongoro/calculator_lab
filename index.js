// Function to append values to the output
function appendToOutput(value) {
    document.getElementById('output').value += value;
}

// Function to clear the output
function clearOutput() {
    document.getElementById('output').value = '';
}

// Function to calculate the result
function calculate() {
    let result = eval(document.getElementById('output').value);
    document.getElementById('output').value = result;
}
