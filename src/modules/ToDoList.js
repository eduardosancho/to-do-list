import { Task, go } from './Task.js'

const task0 = {
    description: 'wash the dishes',
    completed: false,
    index: 0,
};

const task1 = {
    description: 'complete To Do list project',
    completed: false,
    index: 1,
};


export class ToDoList {
    constructor() {
        this.tasks = [];
        // this.tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('books')) : [];
        this.taskList = document.getElementById('task-list');
    }

    displayList() {
        this.tasks.forEach((task) => {
            const taskRow = document.createElement('div');

            const taskMarkup = (task) => `
                <input type="checkbox" id="accept-${task.index}">
                <p class="task-description">${task.description}</p>
                <i id="remove-task-${task.index}" class="fas fa-ellipsis-v"></i>
                `;

            taskRow.innerHTML = taskMarkup(task);
            taskRow.classList.add('task-row');

            this.taskList.appendChild(taskRow);
        });
    }

    storeData() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    addTask() {
        this.tasks.push(task0, task1);
        this.storeData();
    }

    getListSize = () => { this.tasks.length(); }



}