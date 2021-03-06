// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');
const modalErro = document.querySelector('#modalerro');


// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners(){
    // Dom Load Event
    document.addEventListener('DOMContentLoaded', getTasks);
    // add task event
    form.addEventListener('submit', addTask);
    // remove task event
    taskList.addEventListener('click', removeTask);
    // clear task event
    clearBtn.addEventListener('click', clearTasks);
    // Filter tasks event
    filter.addEventListener('keyup', filterTasks);

    // Modal
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems, {});
    });
}

function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
        // Create LI Element
        const li = document.createElement('li');
        // add class
        li.className = 'collection-item';
        // Create text node and append to LI
        li.appendChild(document.createTextNode(task));
        // Create Link
        const link = document.createElement('a');
        // add class
        link.className = 'delete-item secondary-content';
        // Add icon html
        link.innerHTML = '<i class="fas fa-trash"></i>';
        // Append the link to li
        li.appendChild(link);

        // Append to UL
        taskList.appendChild(li);
    });
}

// Add Task
function addTask(e) {
    e.preventDefault();
    
    if(taskInput.value === ''){
        const instance = M.Modal.getInstance(modalErro);
        instance.open();
        return;
    }
    // Create LI Element
    const li = document.createElement('li');
    // add class
    li.className = 'collection-item';
    // Create text node and append to LI
    li.appendChild(document.createTextNode(taskInput.value));
    // Create Link
    const link = document.createElement('a');
    // add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fas fa-trash"></i>';
    // Append the link to li
    li.appendChild(link);

    // Append to UL
    taskList.appendChild(li);

    // Store in LS
    storeTaskInLocalStorage(taskInput.value);

    // Clear input
    taskInput.value = '';
}

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')) {

        if(confirm('Are you Sure?')){
            e.target.parentElement.parentElement.remove();

            // Remove from LS
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }   
}

// Remove from LS
function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear Tasks
function clearTasks(){
    // taskList.innerHTML='';

    // Faster
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    // Clear from LS
    clearTasksFromLocalStorage();

}

// Clear from LS
function clearTasksFromLocalStorage(){
    localStorage.clear();
}

// Store Task
function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}


// Filter Tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLocaleLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })
}

