const fetch = require('node-fetch');

const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3"
];

Promise.all(urls.map(url => fetch(url)))
  .then(responses => Promise.all(responses.map(res => res.json())))
  .then(data => console.log(data))
  .catch(error => console.log("Error:", error));