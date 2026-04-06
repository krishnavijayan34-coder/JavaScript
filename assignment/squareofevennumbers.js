let numbers = [11, 22, 33, 44, 55, 66];


let evenNumbers = numbers.filter(num => num % 2 === 0);


let squareNumbers = evenNumbers.map(num => num * num);

console.log(squareNumbers);