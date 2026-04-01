const fruits = new Map();

fruits.set("apple", 100);
fruits.set("banana", 200);

for (let key of fruits.keys()) {
    console.log(key);
}