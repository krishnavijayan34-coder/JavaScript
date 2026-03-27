const prompt = require('prompt-sync')();
let n = Number(prompt("Enter a number: "));
let isPrime = true;
if (n < 2) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            isPrime = false;
            break;           
        }
    }
}

if (isPrime) {
    console.log(n + " is a Prime number.");
} else {
    console.log(n + " is NOT a Prime number.");
}
