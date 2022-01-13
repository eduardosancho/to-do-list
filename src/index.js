const task0 = {
  description: 'wash the dishes',
  completed: false,
  index: 0,
};

const task1 = {
  description: 'Complete To Do list project',
  completed: false,
  index: 1,
};

const toDoList = [task0, task1];

function displayList() {
  const listContainer = document.getElementById('to-do-list');

  toDoList.forEach((task) => {
    const taskRow = document.createElement('div');

    const taskMarkup = (task) => `
        <input type="checkbox" id="accept-${task.index}">
        <p>${task.description}</p>
        `;

    taskRow.innerHTML = taskMarkup(task);

    listContainer.appendChild(taskRow);
  });


  return listContainer;
}

document.body.appendChild(displayList());