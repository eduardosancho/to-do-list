import { Task } from './Task.js'

export class ToDoList {
    constructor() {
        this.tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
        this.taskList = document.getElementById('task-list');
    }

    displayList() {
        this.taskList.innerHTML = '';
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
        const task = new Task(this.tasks.length);
        if ((this.tasks.length === 0 && task.description !== '') ||
            (JSON.stringify(this.tasks[this.tasks.length - 1].description) !== JSON.stringify(task.description)
                && task.description !== '')) {
            this.tasks.push(task);
            this.storeData();
            this.displayList();
            document.getElementById('new-task-description').value = '';
        }
    }

}


/* export function go(){
    console.log('Hi Im here');
    
} */