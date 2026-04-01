const fruits = new Map();

fruits.set("apple", 100);
fruits.set("banana", 200);

for (let value of fruits.values()) {
    console.log(value);
}