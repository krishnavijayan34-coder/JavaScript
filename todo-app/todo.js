const prompt = require("prompt-sync")();

let todos = [];


function addTask() {
  let task = prompt("Enter task: ");

  if (task.trim() === "") {
    console.log("Task cannot be empty");
    return;
  }

  todos.push({
    id: todos.length + 1,
    text: task,
    completed: false
  });

  console.log("Task Added");
}


function viewTasks() {
  console.log("\n--- TODO LIST ---");

  if (todos.length === 0) {
    console.log("No tasks available");
    return;
  }

  todos.forEach(t => {
    console.log(`${t.id}. ${t.text} [${t.completed ? "Done" : "Pending"}]`);
  });
}


function completeTask() {
  let id = prompt("Enter task id to complete: ");

  const todo = todos.find(t => t.id == id);

  if (todo) {
    todo.completed = true;
    console.log("Task Completed");
  } else {
    console.log("Task not found");
  }
}


function editTask() {
  let id = prompt("Enter task id to edit: ");

  const todo = todos.find(t => t.id == id);

  if (todo) {
    let newText = prompt("Enter new task: ");
    todo.text = newText;
    console.log("Task Updated");
  } else {
    console.log("Task not found");
  }
}


function deleteTask() {
  let id = prompt("Enter task id to delete: ");

  const index = todos.findIndex(t => t.id == id);

  if (index !== -1) {
    todos.splice(index, 1);
    console.log("Task Deleted");
  } else {
    console.log("Task not found");
  }
}


function showMenu() {
  console.log("\n--- TODO APP ---");
  console.log("1. Add Task");
  console.log("2. View Tasks");
  console.log("3. Complete Task");
  console.log("4. Edit Task");
  console.log("5. Delete Task");
  console.log("6. Exit");
}


while (true) {
  showMenu();

  let choice = prompt("Enter your choice: ");

  if (choice === "1") {
    addTask();
  } 
  else if (choice === "2") {
    viewTasks();
  } 
  else if (choice === "3") {
    completeTask();
  } 
  else if (choice === "4") {
    editTask();
  } 
  else if (choice === "5") {
    deleteTask();
  } 
  else if (choice === "6") {
    console.log("Exiting...");
    break;
  } 
  else {
    console.log("Invalid choice");
  }
}