const validateForm = (event) => {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let password = document.getElementById("password").value;
    let address = document.getElementById("address").value.trim();
    let games = document.querySelectorAll(".game");
    let gender = document.querySelector('input[name="gender"]:checked');
    let age = document.getElementById("age").value;
    let file = document.getElementById("file").value;

    if (name === "") {
        alert("Name required");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }

    if (address === "") {
        alert("Address required");
        return false;
    }

    let checkedGame = [...games].some(g => g.checked);
    if (!checkedGame) {
        alert("Select at least one game");
        return false;
    }

    if (!gender) {
        alert("Select gender");
        return false;
    }

    if (age === "") {
        alert("Select age");
        return false;
    }

    if (file === "") {
        alert("Upload file");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
};