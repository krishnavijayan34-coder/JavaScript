const fruits = new Map();

fruits.set("apple", 100);
fruits.set("banana", 200);

for (let [key, value] of fruits.entries()) {
    console.log(key, value);
}