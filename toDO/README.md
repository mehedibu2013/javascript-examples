# TodoApp

A simple command-line to-do list application built with Node.js.

## Description

This application provides a `TodoApp` class that allows you to manage a list of to-do items. You can add, delete, update, and mark tasks as complete. It also includes methods for analyzing your to-do list, such as calculating the total time worked, the time needed for incomplete tasks, and the percentage of tasks completed.

## Features

- Add new to-do items
- Delete existing to-do items
- Mark to-do items as complete
- Update existing to-do items
- Get a list of all to-do items
- Calculate the total duration of completed tasks
- Calculate the total duration of incomplete tasks
- Find the incomplete task with the largest duration
- Find the incomplete task with the smallest duration
- Sort incomplete tasks by duration in descending order
- Calculate the percentage of completed tasks
- Import tasks from a JSON string
- Clear all tasks

## Methods

The `TodoApp` class has the following methods:

- `addTodo(todo)`: Adds a new to-do item.
- `getTodos()`: Returns all to-do items.
- `deleteTodo(taskName)`: Deletes a to-do item by its title.
- `markAsCompleted(taskName)`: Marks a to-do item as complete.
- `hoursWorked()`: Returns the total duration of completed tasks.
- `timeNeed()`: Returns the total duration of incomplete tasks.
- `updateToDo(taskName, updates)`: Updates a to-do item with new properties.
- `largestDuration()`: Returns the incomplete task with the largest duration.
- `smallestDuration()`: Returns the incomplete task with the smallest duration.
- `sortTodosByDuration()`: Returns a list of incomplete tasks sorted by duration.
- `completePercentage()`: Returns the percentage of completed tasks.
- `importTodos(...tasks)`: Imports one or more tasks.
- `cleartodos()`: Clears all to-do items.

## Usage

To use the `TodoApp`, you can run the `toDo.js` file with Node.js:

```bash
node toDo.js
```

The script includes an example of how to use the `TodoApp` class.