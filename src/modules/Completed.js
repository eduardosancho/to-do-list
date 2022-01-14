const completedList = [];

function getCompleted() {
    return completedList;
};

function isCompleted(task) {
    if (task) {
        console.log('add to complete');
        // completedList.push(task);
    } else {
        console.log('remove from complete');
        // completedList = completedList.filter((task) => this.tasks.indexOf(task) !== index);
    }
};

export { isCompleted, getCompleted }