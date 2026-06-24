# Simple Task Manager

A clean, modern task management web application built with HTML, CSS, and JavaScript using Material Design principles.

## 🎯 Features

- ✅ **Add Tasks** - Create new tasks using the input field
- 📝 **View Tasks** - Display all tasks in a clean list format
- ✔️ **Complete Tasks** - Mark tasks as done with visual feedback (strikethrough)
- 🗑️ **Delete Tasks** - Remove tasks with confirmation
- 💾 **Persistent Storage** - Tasks are saved in browser localStorage
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🎨 **Material Design** - Modern, minimalist UI with smooth interactions

## 🚀 Quick Start

1. Open `index.html` in your web browser
2. Type a task name in the input field
3. Click "ADD TASK" or press Enter
4. Use the buttons to complete or delete tasks

## 📋 How to Use

### Adding a Task
- Type your task in the input field
- Click the "ADD TASK" button or press Enter
- The task will appear in the list below

### Marking a Task Complete
- Click the checkbox next to a task, OR
- Click the "COMPLETE" button
- Completed tasks will show with a strikethrough effect

### Deleting a Task
- Click the "DELETE" button next to a task
- Confirm the deletion when prompted

## 📁 Project Structure

```
mern-course-asmt-task-mgr/
├── index.html      # HTML structure
├── style.css       # Material Design styling
├── script.js       # JavaScript functionality
└── README.md       # Documentation
```

## 🛠️ Technical Details

### HTML
- Semantic structure with input, buttons, and list elements
- Accessible form elements

### CSS
- Material Design principles with clean, minimal aesthetic
- Responsive layout for mobile and desktop
- Subtle shadows and smooth transitions
- Professional color scheme

### JavaScript
- DOM manipulation for dynamic task creation
- Event handling for user interactions
- localStorage for data persistence
- Task management with unique IDs

## 💾 Data Storage

Tasks are stored in the browser's localStorage under the key `tasks`. This means:
- ✅ Tasks persist between browser sessions
- ✅ No backend server required
- ✅ Data stored locally on your device

## 🎨 Design Features

- **Material Design** - Follows Google's Material Design guidelines
- **Clean Layout** - Minimal, distraction-free interface
- **Smooth Interactions** - Subtle animations and transitions
- **Color Scheme** - Professional blue (#1976d2) with accent colors
- **Typography** - Roboto font family for readability

## 📱 Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🔧 Customization

You can easily customize:
- Colors in `style.css` (change `#1976d2` to your preferred color)
- Button text in `script.js` or `index.html`
- Font family in `style.css`
- Container width and padding

## 📝 Notes

- No external dependencies or libraries required
- Pure vanilla JavaScript - no frameworks
- Lightweight and fast
- Works offline