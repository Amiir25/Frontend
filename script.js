const tasks = [
    { id: 1, title: 'Buy groceries', completed: false }, 
    { id: 2, title: 'Read a book', completed: true } 
];

const inputBox = document.getElementById('input-box');
const taskContainer = document.getElementById('task-container');
let numberOfTasks = tasks.length;

// Add tasks
for (let task of tasks) {
    // Add task
    let li = document.createElement('li');
    li.innerHTML = `${task.id}. ${task.title}`;
    taskContainer.appendChild(li);

    // Add x icon
    let icon = document.createElement('i');
    icon.setAttribute('class', 'fa-solid fa-circle-xmark');
    li.appendChild(icon);
}

// Add new task
const addTask = () => {
    if (inputBox.value === '') {
        alert("Enter a task to add!");
    } else {
        numberOfTasks++;

        // Add new task
        let li = document.createElement('li');
        li.innerHTML = `${numberOfTasks}. ${inputBox.value}`;
        taskContainer.appendChild(li);

        // Add X icon
        let icon = document.createElement('i');
        icon.setAttribute('class', 'fa-solid fa-circle-xmark');
        li.appendChild(icon);
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
    numberOfTasks--;
})
