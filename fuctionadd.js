const prompt = require('prompt-sync')();

function addNumbers(a, b) {
    console.log("Sum is: " + (a + b));
}

let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));

addNumbers(num1, num2);