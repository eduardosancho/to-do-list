export default class Task {
  constructor(index) {
    this.description = document.getElementById('new-task-description').value;
    this.completed = 'unchecked';
    this.index = index;
  }
}
