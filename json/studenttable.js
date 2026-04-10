var students = [
  {
    roll_no: 101,
    name: "Ram",
    gender: "male",
    address: {
      "street-no": 20,
      "plot-no": 121,
      city: "pune",
      contact: {
        landline: 2292099,
        mobile: 8907632178
      }
    }
  },
  {
    roll_no: 102,
    name: "Shyam",
    gender: "male",
    address: {
      "street-no": 12,
      "plot-no": 221,
      city: "pune"
    }
  },
  {
    roll_no: 103,
    name: "Vivek",
    gender: "male",
    address: {
      "street-no": 11,
      "plot-no": 432,
      city: "pune"
    },
    contact: {
      landline: 2296799,
      mobile: 8977032178
    }
  },
  {
    roll_no: 104,
    name: "Sandhya",
    gender: "female",
    address: {
      "street-no": 21,
      "plot-no": 222,
      city: "pune"
    }
  }
];

let table = "";

for (let i = 0; i < students.length; i++) {

  let mobile =
    (students[i].address.contact && students[i].address.contact.mobile)
    ? students[i].address.contact.mobile
    : (students[i].contact ? students[i].contact.mobile : "N/A");

  table += `
    <tr>
      <td>${students[i].roll_no}</td>
      <td>${students[i].name}</td>
      <td>${students[i].gender}</td>
      <td>${students[i].address["street-no"]}</td>
      <td>${students[i].address["plot-no"]}</td>
      <td>${students[i].address.city}</td>
      <td>${mobile}</td>
    </tr>
  `;
}

document.getElementById("tableData").innerHTML = table;