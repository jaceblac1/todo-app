const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const filterButtons = document.querySelectorAll('.filters button')


let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

let currentFilter = 'all';


function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function renderTasks() {
  taskList.innerHTML = '';
  let filteredTasks = tasks;
  if (currentFilter === 'active') {
    filteredTasks = tasks.filter(task => !task.completed);
  } else if (currentFilter === 'completed') {
    filteredTasks = tasks.filter(task => task.completed);
  } 

  filteredTasks.forEach((task) => {
    const li = document.createElement('li');
    li.classList.add('task-item');
    if (task.completed) {
      li.classList.add('completed');
    }
    li.innerHTML = `
      <span>${task.title}</span>
      <div>
        <button onclick="toggleTask(${task.id})">
          ${task.completed ? 'Undo' : 'completed'}
        </button>

        <button onclick="deleteTask(${task.id})">
          Delete
        </button>
      </div>
    `;

    taskList.appendChild(li);
  });
}
