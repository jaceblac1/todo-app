const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const filterButtons = document.querySelectorAll('.filters button')


let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

let currentFilter = 'all';


function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

