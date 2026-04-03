let bookstore = new Map();


bookstore.set("Book1", true);
bookstore.set("Book2", false);
bookstore.set("Book3", true);


for (let [book, status] of bookstore) {
    console.log(book, status);
}


console.log("Book1 available:", bookstore.get("Book1"));


let count = 0;
for (let status of bookstore.values()) {
    if (status) count++;
}
console.log("Available books:", count);


bookstore.delete("Book2");

console.log("After deletion:", bookstore);