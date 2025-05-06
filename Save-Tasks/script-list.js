// save local storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  if (!text) return alert("Please enter a task");

  const now = new Date();
  const task = {
    text,
    status: "none",
    time: `${now.toLocaleDateString()} - ${now.getHours()}:${now.getMinutes()}`,
  };

  tasks.push(task);
  saveTasks();
  displayTasks();
  taskInput.value = "";
}
