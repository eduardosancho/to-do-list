import './style.css';
import ToDoList from './modules/ToDoList.js';

const toDoList = new ToDoList();

const addTaskForm = document.getElementById('add-task-form');
addTaskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  toDoList.addTask();
});

const addTaskButton = document.getElementById('add-task');
addTaskButton.addEventListener('click', (e) => {
  toDoList.addTask();
});

const removeCompletedBtn = document.getElementById('clear-completed');
removeCompletedBtn.addEventListener('click', () => {
  toDoList.removeCompleted();
});

toDoList.displayList();


