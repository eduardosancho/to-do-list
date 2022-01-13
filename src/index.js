import './style.css';
import { ToDoList, go } from './modules/ToDoList.js';

const toDoList = new ToDoList();

const addTaskForm = document.getElementById('add-task-form');
addTaskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  toDoList.addTask();
});

const addTaskButton = document.getElementById('add-task');
addTaskButton.addEventListener('click', (e) => {
  e.preventDefault();
  toDoList.addTask();
});



toDoList.displayList();


//go();