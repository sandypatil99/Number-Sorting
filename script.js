function resetInput() {
    document.getElementById('inputNumbers').value = "";
    document.getElementById('output').innerText = "";
}

function filterEven() {
    const numbers = document.getElementById('inputNumbers').value.split(",").map(Number);
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    displayResult("Even Number: " + evenNumbers.join(", "));
}

function filterOdd() {
    const numbers = document.getElementById('inputNumbers').value.split(",").map(Number);
    const oddNumbers = numbers.filter(num => num % 2 !== 0);
    displayResult("Odd Numbers: " + oddNumbers.join(", "));
}

function findSmallest() {
    const numbers = document.getElementById('inputNumbers').value.split(",").map(Number);
    const smallestNumber = Math.min(...numbers);
    displayResult("Smallest Number: " + smallestNumber);
}

function findGreatest() {
    const numbers = document.getElementById('inputNumbers').value.split(",").map(Number);
    const greatestNumber = Math.max(...numbers);
    displayResult("Greatest Number: " + greatestNumber);
}


function displayResult(message) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerText = message;
}
