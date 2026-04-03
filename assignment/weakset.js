let person1 = { name: "krishna", age: 23, email: "krishna@gmail.com" };

let ws = new WeakSet();

ws.add(person1);

console.log(ws.has(person1));

ws.delete(person1);

console.log(ws.has(person1));