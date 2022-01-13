import './style.css';
import { ToDoList } from './modules/ToDoList.js';

const toDoList = new ToDoList();
toDoList.addTask();


toDoList.displayList();