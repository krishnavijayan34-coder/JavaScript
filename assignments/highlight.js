const highlight = () => {
    let para = document.getElementById("para");

    let newText = para.innerHTML.replace(
        "JavaScript",
        "<span style='color:blue'>JavaScript</span>"
    );

    para.innerHTML = newText;
};