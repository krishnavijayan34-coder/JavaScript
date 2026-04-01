const addRow = () => {
    let table = document.getElementById("myTable");
    let row = table.insertRow();

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);

    cell1.innerHTML = "Krishna";
    cell2.innerHTML = "23";
};

const deleteRow = () => {
    let table = document.getElementById("myTable");

    if (table.rows.length > 1) {
        table.deleteRow(1);
    }
};