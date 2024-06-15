# React To-Do List

This is a simple React application for managing a to-do list. It allows users to add, remove, and mark tasks as completed. The application features dynamic task display, input validation, and optional sorting and filtering. It also utilizes localStorage to persist tasks between sessions.

## Features

- **Add Tasks**: Enter a task in the input field and submit it to add to the list.
- **Remove Tasks**: Each task has a delete button for its removal from the list.
- **Mark as Completed**: Tasks can be toggled between completed and incomplete.
- **Sorting**: Tasks can be sorted by name or date.
- **Filtering**: View all tasks, only pending tasks, or only completed tasks.
- **Clear All**: Remove all tasks from the list.
- **LocalStorage Integration**: Tasks are saved in the browser's local storage to keep your data between sessions.

## Deployment

This application is deployed [here](https://my-todos-react-app.netlify.app/).

## Installation

```
git clone https://github.com/guddu69/To-DoList.git
cd To-DoList
npm install
npm start
```

## Testing Guidance

- Ensure that tasks can be added, marked as complete, and removed.
- Check the sorting functionality by sorting tasks by name and date.
- Filter tasks to show all, only pending, or only completed tasks.
- Refresh the page to test if the tasks persist due to localStorage integration.
