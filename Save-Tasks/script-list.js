// save local storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add a Task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const text = taskInput.value.trim();
  if (!text) return alert("Please enter a task");

  const now = new Date();
  const task = {
    id: Date.now(),
    text,
    status: "None",
    time: `${now.toLocaleDateString()} - ${now.getHours()}:${now.getMinutes()}`,
  };

  tasks.push(task);
  saveTasks();
  displayTasks();
  taskInput.value = "";
}

//Deleta a Task
function removeTask(id) {
  if (confirm('Are you sure you want to delete this task?')) {
    tasks = tasks.filter(t => t.id !== id);
    saveTasks();
    display();
  }
}




