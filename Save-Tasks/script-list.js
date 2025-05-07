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

//Edit a Task
function editTask(id) {
  const index = tasks.findIndex((t) => t.id === id);
  if (index !== -1) {
    const newText = prompt("Edit task:", tasks[index].text);
    if (newText !== null) {
      tasks[index].text = newText.trim();
      saveTasks();
      displayTasks();
    }
  }
}

//Deleta a Task
function removeTask(id) {
  if (confirm("Are you sure you want to delete this task?")) {
    tasks = tasks.filter((t) => t.id !== id);
    saveTasks();
    displayTasks();
  }
}

//Update Status
function updateTaskStatus(id, status) {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.status = status;
    saveTasks();
    displayTasks();
  }
}
//Display
function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const div = document.createElement("div");
    div.className = "task";

    div.innerHTML = `
      <strong>${task.text}</strong>
      <small>Status: ${task.status}</small>
      <small>Created: ${task.time}</small>
      <div class="task-controls">
        <select onchange="updateTaskStatus(${task.id}, this.value)">
          <option ${task.status === "None" ? "selected" : ""}>None</option>
          <option ${
            task.status === "In Progress" ? "selected" : ""
          }>In Progress</option>
          <option ${
            task.status === "Completed" ? "selected" : ""
          }>Completed</option>
      </select>
      <button onclick="editTask(${task.id})">Edit</button>
      <button onclick="removeTask(${task.id})">Remove</button>
    </div>
  `;

    taskList.appendChild(div);
  });
}

displayTasks();

window.onload = renderTasks;
