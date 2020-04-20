// set local storage item
// localStorage.setItem('name', 'Olivia');
// localStorage.setItem('age', '30');

// set session storage item
// sessionStorage.setItem('name', 'Beth');

// remove from storage
// localStorage.removeItem('name');

// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');


// // clear local storage
// localStorage.clear();
// console.log(name, age);

document.querySelector('form').addEventListener('submit',
function(e){
    e.preventDefault();
    const task = document.getElementById('task').value;

    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('Task saved');
    // console.log(task); 
});

let tasks = localStorage.getItem('tasks');
tasks = JSON.parse(tasks);
tasks.forEach(function(task){
    console.log(task);
});

console.log(tasks);
