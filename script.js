const tasks = [
    { id: 1, title: 'Buy groceries', completed: false }, 
    { id: 2, title: 'Do workout', completed: true },
    { id: 3, title: 'Visit parents', completed: false },
    { id: 4, title: 'Read a book', completed: false },
    { id: 5, title: 'Go out for a walk', completed: false },
];

const inputBox = document.getElementById('input-box');
const taskContainer = document.getElementById('task-container');
let numberOfTasks = tasks.length;

// View tasks
const viewTasks = () => {
    for (let task of tasks) {
        let li = document.createElement('li');
        li.innerHTML = `
            <div style="display: flex; gap: 10px">
                <span>${task.id}</span>
                <h4>${task.title}</h4>
            </div>
            <i class="fa-solid fa-circle-xmark">
        `;
        taskContainer.appendChild(li);

        if (task.completed) {
            li.classList.add('checked');
        }
    }
}
viewTasks();

// Add new task
const addTask = () => {
    if (inputBox.value === '') {
        alert("Enter a task to add!");
    } else {
        numberOfTasks++;
        // Add new task 
        let li = document.createElement('li');
        li.innerHTML = `
            <div style="display: flex; gap: 10px">
                <span>${numberOfTasks}</span>
                <h4>${inputBox.value}</h4>
            </div>
            <i class="fa-solid fa-circle-xmark">
        `;
        taskContainer.appendChild(li);
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
