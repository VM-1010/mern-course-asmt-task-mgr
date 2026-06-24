// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Initialize tasks array from localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Render tasks on page load
document.addEventListener('DOMContentLoaded', () => {
    renderTasks();
});

// Add task on button click
addBtn.addEventListener('click', addTask);

// Add task on Enter key press
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();

    // Validate input
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create task object
    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    // Add to tasks array
    tasks.push(task);

    // Save to localStorage
    saveTasks();

    // Clear input field
    taskInput.value = '';

    // Focus back on input
    taskInput.focus();

    // Render tasks
    renderTasks();
}

// Function to render all tasks
function renderTasks() {
    // Clear the list
    taskList.innerHTML = '';

    // Show empty message if no tasks
    if (tasks.length === 0) {
        taskList.innerHTML = '<li class="empty-message">No tasks yet. Add one to get started!</li>';
        return;
    }

    // Loop through tasks and create list items
    tasks.forEach((task) => {
        const listItem = document.createElement('li');
        listItem.className = 'task-item';

        // Add completed class if task is completed
        if (task.completed) {
            listItem.classList.add('completed');
        }

        // Create task content
        const taskContent = document.createElement('div');
        taskContent.className = 'task-content';

        // Create checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => toggleTask(task.id));

        // Create task text
        const taskTextSpan = document.createElement('span');
        taskTextSpan.className = 'task-text';
        taskTextSpan.textContent = task.text;

        // Append checkbox and text to content
        taskContent.appendChild(checkbox);
        taskContent.appendChild(taskTextSpan);

        // Create task buttons container
        const taskButtons = document.createElement('div');
        taskButtons.className = 'task-buttons';

        // Create complete button
        const completeBtn = document.createElement('button');
        completeBtn.className = 'complete-btn';
        completeBtn.textContent = task.completed ? 'Undo' : 'Complete';
        completeBtn.addEventListener('click', () => toggleTask(task.id));

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteTask(task.id));

        // Append buttons to container
        taskButtons.appendChild(completeBtn);
        taskButtons.appendChild(deleteBtn);

        // Append content and buttons to list item
        listItem.appendChild(taskContent);
        listItem.appendChild(taskButtons);

        // Append list item to list
        taskList.appendChild(listItem);
    });
}

// Function to toggle task completion status
function toggleTask(id) {
    // Find task and toggle completed status
    const task = tasks.find((t) => t.id === id);
    if (task) {
        task.completed = !task.completed;
        saveTasks();
        renderTasks();
    }
}

// Function to delete a task
function deleteTask(id) {
    // Confirm deletion
    if (confirm('Are you sure you want to delete this task?')) {
        // Remove task from array
        tasks = tasks.filter((t) => t.id !== id);

        // Save to localStorage
        saveTasks();

        // Render tasks
        renderTasks();
    }
}

// Function to save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
