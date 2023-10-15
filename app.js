function logger() {
    alert('ce vrea pula mea')
}
function addToDo() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    if (taskText.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.appendChild(document.createTextNode(taskText));
    taskList.appendChild(taskItem);

    taskInput.value = '';
}