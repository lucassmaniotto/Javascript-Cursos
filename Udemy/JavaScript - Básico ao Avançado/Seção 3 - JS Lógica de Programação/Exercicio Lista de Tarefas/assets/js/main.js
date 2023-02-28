const form = document.querySelector('#form');

form.addEventListener('submit', handleSubmit);

loadTasks();

function handleSubmit(event) {
    event.preventDefault();

    const input = event.target.querySelector('input');
    const text = input.value;

    if (text === '') return;

    addTask(text);
}

function addTask(text) {
    const list = document.querySelector('#list');

    const task = document.createElement('li');
    const deleteButton = document.createElement('button');
    const taskText = document.createTextNode(text);

    deleteButton.setAttribute('class', 'delete');
    deleteButton.setAttribute('onclick', 'deleteTask(this)');
    deleteButton.innerHTML = 'Apagar';

    task.appendChild(taskText);
    task.appendChild(deleteButton);
    list.appendChild(task);

    localStorage.setItem('list', list.innerHTML);

    clearInput();
}

function clearInput() {
    const input = document.querySelector('#input');
    input.value = '';
    input.focus();
}

function deleteTask(task) {
    const list = document.querySelector('#list');
    list.removeChild(task.parentNode);

    localStorage.setItem('list', list.innerHTML);
}

function loadTasks() {
    const list = document.querySelector('#list');
    const listStorage = localStorage.getItem('list');

    if (listStorage) {
        list.innerHTML = listStorage;
    }
}