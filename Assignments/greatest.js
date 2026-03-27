const prompt = require('prompt-sync')();
let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));
let num3 = Number(prompt("Enter third number: "));

let greatest;

if (num1 >= num2 && num1 >= num3) {
    greatest = num1;
} else if (num2 >= num1 && num2 >= num3) {
    greatest = num2;
} else {
    greatest = num3;
}
console.log("The greatest number is: " + greatest);