const books = [
    {
        title: "Two States",
        author: "Chetan Bhagat",
        alreadyRead: true
    },
    {
        title: "Grandma's Bag of Stories",
        author: "Sudha Murthy",
        alreadyRead: false
    }
];

// Loop through books
for (let book of books) {

    console.log(`${book.title} by ${book.author}`);

    if (book.alreadyRead) {
        console.log(`You already read "${book.title}" by "${book.author}"`);
    } else {
        console.log(`You still need to read "${book.title}" by "${book.author}"`);
    }
}