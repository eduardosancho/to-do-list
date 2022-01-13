import { Task } from './Task.js'

const task0 = {
    description: 'wash the dishes',
    completed: false,
    index: 0,
};


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
        this.tasks.push(task0);
        this.storeData();
        this.displayList();
    }

    getListSize = () => { this.tasks.length(); }

}


/* export function go(){
    console.log('Hi Im here');
    
} */