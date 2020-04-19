// document.getElementById()


// console.log(document.getElementById('task-title'));

// // get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // Change styling
// taskTitle.style.background = 'red';
// taskTitle.style.color = '#FFF';
// taskTitle.style.padding = '5px';
// // taskTitle.style.display = 'none';

// // Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color: blue">My Tasks</span>'

// document.querySelector();
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('.collection li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'green';
document.querySelector('li:nth-child(2)').style.color = 'orange';
document.querySelector('li:nth-child(3)').style.color = 'brown';
document.querySelector('li:nth-child(odd)').style.backgrond = '#CCC';
document.querySelector('li:nth-child(even)').style.backgrond = '#F4F4F4';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';