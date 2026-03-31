// 1. Change text (innerHTML + event)

document.getElementById("changeBtn").onclick = () => {
    let title = document.getElementById("title");

    title.innerHTML = "Text Changed!";
    title.style.color = "red";
};


// 2. Add element (createElement + appendChild)

document.getElementById("addBtn").onclick = () => {
    let p = document.createElement("p");

    p.innerHTML = "New Paragraph Added";

    document.body.appendChild(p);
};


// 3. Remove element (querySelector + remove)

document.getElementById("removeBtn").onclick = () => {
    let el = document.querySelector(".text");

    el.remove();
};


// 4. querySelectorAll example

let allPara = document.querySelectorAll(".text");

allPara.forEach((el) => {
    el.style.color = "blue";
});