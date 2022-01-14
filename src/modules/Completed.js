
function getCompleted() {
  const storageList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
  const completedList = [];
  storageList.forEach((task) => {
    if (task.completed === 'checked') {
      completedList.push(task.index);
    }
  });
    return completedList;
};

export { getCompleted };