const addItem = () => {
    let select = document.getElementById("dropdown");

    let option = document.createElement("option");
    option.text = "New Item";

    select.add(option);
};

const removeItem = () => {
    let select = document.getElementById("dropdown");

    if (select.length > 0) {
        select.remove(select.selectedIndex);
    }
};