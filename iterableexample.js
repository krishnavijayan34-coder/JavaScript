// ===== ARRAY ITERABLE =====
const students = ['John', 'Sara', 'Jack'];

console.log("Array Iteration:");
for (let element of students) {
    console.log(element);
}


// ===== STRING ITERABLE =====
const str = "code";

console.log("\nString Iteration:");
for (let ch of str) {
    console.log(ch);
}


// ===== SET ITERABLE =====
const set = new Set([1, 2, 3]);

console.log("\nSet Iteration:");
for (let value of set) {
    console.log(value);
}


// ===== MAP ITERABLE =====
const map = new Map();

map.set("name", "Jack");
map.set("age", "27");

console.log("\nMap Iteration:");
for (let [key, value] of map) {
    console.log(key + " - " + value);
}