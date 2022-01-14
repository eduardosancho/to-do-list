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
                <div><p class="task-description">${task.description}</p></div>
                <i id="options-task-${task.index}" class="fas fa-ellipsis-v options"></i>
                `;

            taskRow.innerHTML = taskMarkup(task);
            taskRow.classList.add('task-row');
            taskRow.setAttribute('id', `task-row-${task.index}`)

            taskRow.querySelector('div').addEventListener('click', () => {
                this.editTask(taskRow, task.description, task.index);
            });

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

    editTask(row, oldDescription, index) {
        row.classList.toggle('yellow');
        row.querySelector('div').innerHTML = `
        <form id="update-task-form">
        <input type="text" class="yellow" id="update-task-description" value="${oldDescription}" autofocus>
        </form>
        `;
        
        const updateTaskForm = row.querySelector('form');
        updateTaskForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.tasks[index].description = document.getElementById('update-task-description').value;
            this.storeData();
            this.displayList();
        });
    }

}


/* export function go(){
    console.log('Hi Im here');
    
} */