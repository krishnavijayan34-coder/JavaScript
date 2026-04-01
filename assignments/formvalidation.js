const validateForm = (event) => {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "") {
        alert("Name required");
        return false;
    }

    if (!email.includes("@")) {
        alert("Invalid email");
        return false;
    }

    alert("Form submitted successfully");
    return true;
};