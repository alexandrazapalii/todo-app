function addToDo() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value;

    if (taskText.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    var taskList = document.getElementById('taskList');
    var taskItem = document.createElement('li');
    taskItem.appendChild(document.createTextNode(taskText));
    taskList.appendChild(taskItem);

    taskInput.value = '';
}