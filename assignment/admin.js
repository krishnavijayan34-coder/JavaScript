const users = [
  { id: 1, username: 'Alice', role: 'admin' },
  { id: 2, username: 'Bob', role: 'user' },
  { id: 3, username: 'Charlie', role: 'editor' }
];

function getUsers() {
  return new Promise((resolve, reject) => {

    if (users.length === 0) {
      reject("No users found");
    } else {
      resolve(users);
    }

  });
}

function countAdmins(userList) {
  return new Promise((resolve, reject) => {

    let count = 0;

    for (let user of userList) {
      if (user.role === "admin") {
        count++;
      }
    }

    resolve(count);

  });
}


getUsers()
  .then(data => {
    console.log("Users:", data);
    return countAdmins(data); 
  })
  .then(count => {
    console.log("Admin count:", count);
  })
  .catch(error => console.log(error));