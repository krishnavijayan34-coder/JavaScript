const prompt = require('prompt-sync')();
function areaOfTriangle(base, height){
    return (base * height) / 2;
}
let b = Number(prompt("Enter base: "));
let h = Number(prompt("Enter height: "));
let area = areaOfTriangle(b, h);
console.log("Area of triangle is:", area);