const prompt = require('prompt-sync')();
let n = Number(prompt("Enter n: "));
let s = 0;
for (let i = 1; i <= n; i++) {
    s = s + i; 
}
console.log("The sum is: " + s);