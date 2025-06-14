class TodoApp {
    constructor() {
        this.todos = [];
    }
    addTodo(todo) {
        this.todos.push(todo);
    }
    getTodos() {
        return this.todos;
    }
    deleteTodo(taskName) {
        const index = this.todos.findIndex(todo => todo.title === taskName);
        if (index === -1) {
            return false;
        }
        this.todos.splice(index, 1);
        return true;
    }
    
    markAsCompleted(taskName) {
        const index = this.todos.findIndex(todo => todo.title === taskName);
        if (index === -1) {
            return false;
        }
        this.todos[index].completed = true;
        return true;
    }
    hoursWorked() {
        return this.todos
            .filter(todo => todo.completed)
            .reduce((total, todo) => total + todo.duration, 0);
    }
    timeNeed() {
        return this.todos
            .filter(todo => !todo.completed)
            .reduce((total, todo) => total + todo.duration, 0);
    }
    updateToDo(taskName, updates) {
        const index = this.todos.findIndex(todo => todo.title === taskName);
        if (index === -1) {
            return false;
        }
        this.todos[index] = { ...this.todos[index], ...updates };
        return true;
    }
    largestDuration() {
        const incompleteTodos = this.todos.filter(todo => !todo.completed);
        if (incompleteTodos.length === 0) {
            return null;
        }
        return incompleteTodos.reduce((max, todo) => todo.duration > max.duration ? todo : max, incompleteTodos[0]);
    }
    smallestDuration() {
        const incompleteTodos = this.todos.filter(todo => !todo.completed);
        if (incompleteTodos.length === 0) {
            return null;
        }
        return incompleteTodos.reduce((min, todo) => todo.duration < min.duration ? todo : min, incompleteTodos[0]);
    }
    sortTodosByDuration() {
        return this.todos
        .filter(todo => !todo.completed)    
        .sort((a, b) => b.duration - a.duration);
    }
    completePercentage() {
        const totalTodos = this.todos.length;
        const completedTodos = this.todos.filter(todo => todo.completed).length;
        return (completedTodos / totalTodos) * 100;
    }
    importTodos(...tasks) {
        this.todos.push(...tasks);
    }
    cleartodos() {
        this.todos = [];
    }
}

const todoApp = new TodoApp();
todoApp.addTodo({ title: 'Task 1',duration: 30,category: 'Work', completed: false });
todoApp.addTodo({ title: 'Task 2',duration: 60,category: 'Personal', completed: false });
todoApp.addTodo({ title: 'Task 3',duration: 45,category: 'Work', completed: false });
todoApp.addTodo({ title: 'Task 4',duration: 20,category: 'Personal', completed: false });
todoApp.addTodo({ title: 'Task 5',duration: 40,category: 'Work', completed: false });
todoApp.addTodo({ title: 'Task 6',duration: 50,category: 'Personal', completed: false });
todoApp.markAsCompleted('Task 1');
todoApp.deleteTodo('Task 2');
todoApp.markAsCompleted('Task 3');
todoApp.updateToDo('Task 4', { duration : 100 });
console.log(`Hours worked: ${todoApp.hoursWorked()}`);
console.log(`Time need: ${todoApp.timeNeed()}`);
console.log(JSON.stringify(todoApp.getTodos(), null, 2));
console.log(`Largest duration: ${JSON.stringify(todoApp.largestDuration())}`);
console.log(`Smallest duration: ${JSON.stringify(todoApp.smallestDuration())}`);
console.log(`Sorted todos by duration: ${JSON.stringify(todoApp.sortTodosByDuration())}`);
console.log(`Complete percentage: ${todoApp.completePercentage()}%`);
const jsonTasks = '[{"title":"Task 7","duration":60,"category":"Work","completed":false},{"title":"Task 8","duration":90,"category":"Personal","completed":false}]';
todoApp.importTodos(...JSON.parse(jsonTasks));
console.log('After importing tasks:');
console.log(JSON.stringify(todoApp.getTodos(), null, 2));
todoApp.cleartodos();
console.log('After clearing todos:');
console.log(JSON.stringify(todoApp.getTodos(), null, 2));

