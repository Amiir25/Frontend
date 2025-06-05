const tasks = [
    { id: 1, title: 'Buy groceries', completed: false }, 
    { id: 2, title: 'Read a book', completed: true } 
];

const inputBox = document.getElementById('input-box');
const taskContainer = document.getElementById('task-container');

// Add new task
const addTask = () => {
    if (inputBox.value === '') {
        alert("Enter a task to add!");
    } else {
        // Add task
        let task = document.createElement('li');
        task.innerHTML = inputBox.value;
        taskContainer.appendChild(task);

        // Add X arrow
        let icon = document.createElement('i');
        icon.setAttribute('class', 'fa-solid fa-circle-xmark');
        task.appendChild(icon);
    }
    // Clear the input box after add
    inputBox.value = '';
    saveData();
}

// Finished tasks
taskContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'I') {
        e.target.parentElement.remove();
        saveData();
    }
})

// Delete task
document.querySelector('.fa-circle-xmark').addEventListener('click', (e) => {
    e.target.parentElement.remove();
})
