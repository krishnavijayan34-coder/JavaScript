
function setCookie(name, value, days) {
    let expires = "";

    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }

    document.cookie = name + "=" + value + expires + "; path=/";
}


function getCookie(name) {
    let cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();

        if (c.indexOf(name + "=") == 0) {
            return c.substring(name.length + 1);
        }
    }
    return null;
}


function login() {
    let user = document.getElementById("username").value;

    setCookie("user", user, 1);
    document.getElementById("message").innerText = "Logged in successfully!";
}


window.onload = function () {
    let user = getCookie("user");

    if (user) {
        document.getElementById("message").innerText =
            "You are already logged in as " + user;
    }
};