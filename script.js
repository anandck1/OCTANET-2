// script.js
function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskList = document.getElementById('task-list');

    const taskItem = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.className = 'task';
    taskSpan.textContent = taskText;

    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.className = 'edit';
    editInput.value = taskText;

    const completeButton = document.createElement('button');
    completeButton.textContent = '✔️';
    completeButton.onclick = () => {
        taskItem.classList.toggle('completed');
    };

    const editButton = document.createElement('button');
    editButton.className = 'edit';
    editButton.textContent = '✏️';
    editButton.onclick = () => {
        taskItem.classList.toggle('editing');
    };

    const saveButton = document.createElement('button');
    saveButton.className = 'save';
    saveButton.textContent = '💾';
    saveButton.onclick = () => {
        const editedText = editInput.value.trim();
        if (editedText !== '') {
            taskSpan.textContent = editedText;
            taskItem.classList.toggle('editing');
        }
    };

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.textContent = '🗑️';
    deleteButton.onclick = () => {
        taskList.removeChild(taskItem);
    };

    taskItem.appendChild(taskSpan);
    taskItem.appendChild(editInput);
    taskItem.appendChild(completeButton);
    taskItem.appendChild(editButton);
    taskItem.appendChild(saveButton);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
    taskInput.value = '';
}
