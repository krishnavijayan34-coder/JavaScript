const prompt = require('prompt-sync')();
let a = Number(prompt("Enter first number: "));
let b = Number(prompt("Enter second number: "));
let op = prompt("Enter operator (+, -, *, /): ");
let outputvalue;

switch (op) {
    case "+": outputvalue = a + b; break;
    case "-": outputvalue = a - b; break;
    case "*": outputvalue = a * b; break;
    case "/": outputvalue = (b !== 0) ? (a / b) : "Cannot divide by zero"; break;
    default: outputvalue = "Invalid Operator";
}
console.log("Result is: " + outputvalue);