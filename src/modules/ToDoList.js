import Task from './Task.js';
import { isCompleted, storeCompleted } from './Completed.js';

export default class ToDoList {
  constructor() {
    this.tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    this.taskList = document.getElementById('task-list');
  }

  removeTask(index) {
    this.tasks = this.tasks.filter((task) => this.tasks.indexOf(task) !== index);
    this.storeData();
  }

  displayList() {
    this.taskList.innerHTML = '';
    this.tasks.forEach((task) => {
      task.index = this.tasks.indexOf(task);
      const taskRow = document.createElement('div');

      const taskMarkup = (task) => `
                <input type="checkbox" id="accept-${task.index}">
                <div><p class="task-description">${task.description}</p></div>
                <i id="options-task-${task.index}" class="fas fa-ellipsis-v options"></i>
                `;

      taskRow.innerHTML = taskMarkup(task);
      taskRow.classList.add('task-row');
      taskRow.setAttribute('id', `task-row-${task.index}`);

      taskRow.querySelector('div').addEventListener('click', () => {
        this.editTask(taskRow, task.description, task.index);
      });

      const box = taskRow.querySelector('input[type=checkbox]');
      box.addEventListener('change', () => {
        isCompleted();
        storeCompleted();
      });

      this.taskList.appendChild(taskRow);
    });
  }

  storeData() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  addTask() {
    const task = new Task(this.tasks.length);
    if ((this.tasks.length === 0 && task.description !== '')
            || (JSON.stringify(this.tasks[this.tasks.length - 1].description)
                !== JSON.stringify(task.description)
                && task.description !== '')) {
      this.tasks.push(task);
      this.storeData();
      this.displayList();
      document.getElementById('new-task-description').value = '';
    }
  }

  editTask(row, oldDescription, index) {
    row.querySelector('i').classList.remove('fas', 'fa-ellipsis-vfas', 'options');
    row.querySelector('i').classList.add('far', 'fa-trash-alt', 'remove');

    row.querySelector('i').addEventListener('click', () => {
      this.removeTask(index);
      this.displayList();
    });

    const oldRows = document.querySelectorAll('.yellow');
    oldRows.forEach((notSelected) => {
      notSelected.classList.remove('yellow');
    });

    row.classList.toggle('yellow');
    row.querySelector('div').innerHTML = `
        <form id="update-task-form-${index}">
        <input type="text" class="update-task-description" id="update-task-description-${index}" value="${oldDescription}" autofocus>
        </form>
        `;

    const updateTaskForm = document.querySelector(`#update-task-form-${index}`);
    updateTaskForm.addEventListener('submit', () => {
      this.tasks[index].description = document.getElementById(`update-task-description-${index}`).value;
      this.storeData();
    });

    const otherTasks = document.querySelectorAll('.task-row');
    otherTasks.forEach((other) => {
      if (!other.classList.contains('yellow')) {
        other.addEventListener('mouseover', () => {
          this.tasks[index].description = document.getElementById(`update-task-description-${index}`).value;
          this.storeData();
          updateTaskForm.submit();
        });
      }
    });
  }
}
