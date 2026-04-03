const wm = new WeakMap();

let obj1 = {};
let obj2 = {};

wm.set(obj1, "Hello");
wm.set(obj2, "World");

console.log(wm.get(obj1));