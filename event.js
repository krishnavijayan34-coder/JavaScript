// Page load event
window.onload = function () {
    alert("Page Loaded");
};

// Button click event
document.getElementById("btn").onclick = function () {
    document.getElementById("demo").innerHTML = "Text Changed!";
};

// Key press event
document.getElementById("inputBox").onkeydown = function () {
    console.log("Key pressed");
};