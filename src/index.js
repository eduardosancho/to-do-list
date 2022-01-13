import './style.css';

const task0 = {
  description: 'wash the dishes',
  completed: false,
  index: 0,
};

const task1 = {
  description: 'complete To Do list project',
  completed: false,
  index: 1,
};

const toDoList = [task0, task1];

function displayList() {
  const listContainer = document.getElementById('to-do-list');

  const clearBtn = document.createElement('span');

  toDoList.forEach((task) => {
    const taskRow = document.createElement('div');

    const taskMarkup = (task) => `
        <input type="checkbox" id="accept-${task.index}">
        <p class="task-description">${task.description}</p>
        <i class="fas fa-ellipsis-v"></i>
        `;

    taskRow.innerHTML = taskMarkup(task);
    taskRow.classList.add('task-row');

    listContainer.appendChild(taskRow);
  });

  clearBtn.setAttribute('id', 'clear-completed');
  clearBtn.textContent = 'Clear all completed';
  listContainer.appendChild(clearBtn);

  return listContainer;
}

document.body.appendChild(displayList());