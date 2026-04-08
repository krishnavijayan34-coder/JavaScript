function postData() {
    fetch("https://jsonplaceholder.typicode.com/posts", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            title: "My Post",
            body: "This is my content",
            userId: 1
        })
    })

    .then(response => response.json())

    .then(data => {
        document.getElementById("postResponse").innerHTML =
            "Post Created! ID: " + data.id;
    })

    .catch(error => console.log(error));
}