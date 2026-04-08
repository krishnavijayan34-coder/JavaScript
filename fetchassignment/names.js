function getUserNames() {
    fetch("https://jsonplaceholder.typicode.com/users")

    .then(response => response.json())

    .then(data => {
        let list = "";

        data.forEach(user => {
            list += "<li>" + user.name + "</li>";
        });

        document.getElementById("userList").innerHTML = list;
    })

    .catch(error => console.log(error));
}