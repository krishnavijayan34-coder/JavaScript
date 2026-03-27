const prompt = require('prompt-sync')();

function add(a, b) {
    return a + b;
}

let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));

let result = add(num1, num2);

console.log("Sum is: " + result);