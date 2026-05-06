-Todo List Application

A responsive Todo List application built with Vanilla JavaScript that allows users to efficiently manage daily tasks with filtering and persistent storage.

Features
-Add new tasks
-Mark tasks as completed
-Delete tasks
-Filter tasks:
 -All
 -Active
 -Completed
-Task persistence using localStorage
-Task creation timestamp
-Input validation for empty tasks
-Responsive design for mobile and desktop.

Tech Stack Used
-HTML
-CSS
-Vanilla JavaScript

Setup Instructions

Clone the repository:
-git clone <https://github.com/jaceblac1/todo-app.git>
-Open the project folder:
 -cd todo-list-app
 -Run the project:
 -Open index.html in your browser

OR

Use VS Code Live Server extension for a better development experience.

Project Structure

todo-list-app/
│
├── index.html
├── style.css
├── script.js
└── README.md


Application Decisions & Approach

1. Vanilla JavaScript 
Vanilla JavaScript was chosen to demonstrate strong understanding of:
-DOM manipulation
-Event handling
-State management without frameworks
-Clean functional structure
This keeps the project lightweight and dependency-free.

2. State Management
State updates are handled through dedicated functions:
-addTask()
-deleteTask()
-toggleTask()
-renderTasks()
This avoids unnecessary global state pollution and keeps logic organized.

3. Persistence with localStorage
Tasks are stored using localStorage so data remains available after page refresh.

4. Filtering Logic
Filtering is handled dynamically using:
-Array.filter()
This allows the UI to update instantly without modifying the original task data.

5. UI / UX Decisions
-Completed tasks are visually distinguished using strikethrough styling
-Empty task submissions are prevented with validation
-Responsive layout ensures usability across devices
-Simple and clean interface improves readability

Edge Cases Handled
-Prevent adding empty tasks
-Proper handling of task deletion
-Filtering works correctly after updates
-Tasks persist after refresh
-Unique IDs generated using:
 -Date.now()