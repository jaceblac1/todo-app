const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const filterButtons = document.querySelectorAll(".filters button");
const message = document.getElementById('message')

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let currentFilter = "all";

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";
  let filteredTasks = tasks;
  if (currentFilter === "active") {
    filteredTasks = tasks.filter((task) => {
      return !task.completed;
    });
  } else if (currentFilter === "completed") {
    filteredTasks = tasks.filter((task) => {
      return task.completed;
    });
  }

  filteredTasks.forEach((task) => {
    const li = document.createElement("li");
    li.classList.add("task-item");
    if (task.completed) {
      li.classList.add("completed");
    }
    li.innerHTML = `
      <div>
        <h3>${task.title}</h3>
        <small>
          Created: ${task.createdAt}
        </small>
      </div>

      <div>
        <button onclick="toggleTask(${task.id})">
          ${task.completed ? "Undo" : "completed"}
        </button>

        <button onclick="deleteTask(${task.id})">
          Delete
        </button>
      </div>
    `;

    taskList.appendChild(li);
  });
}

function addTask() {
  const title = taskInput.value.trim();

  if (title === "") {
    message.textContent = 'Task cannot be empty';
    setTimeout(() => {
      message.textContent = '';
    }, 2000);

    return;
  } 

  const newTask = {
    id: Date.now(),
    title: title,
    completed: false,
    createdAt: new Date().toLocaleString(),
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();
  taskInput.value = "";
}

function toggleTask(id) {
  tasks.forEach((task) => {
    if (task.id === id) {
      task.completed = !task.completed;
    }
  });

  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter((task) => {
    return task.id !== id;
  });
  saveTasks();
  renderTasks();
}

addBtn.addEventListener("click", () => {
  addTask();
});

taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;

    renderTasks();
  });
});

renderTasks();