import { ToDoList } from "./ToDoList.js";

export class Task {
    constructor() {
        this.description = document.getElementById('new-task-description');
        this.completed = false;
        this.index = ToDoList.getListSize();
    }
}

export function go(){
    console.log('Hi Im here');
    
}
