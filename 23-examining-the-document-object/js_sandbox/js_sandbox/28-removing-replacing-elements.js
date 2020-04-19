// REPLACE ELEMENT

// Create Element
const newHeading = document.createElement('h2');

// Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');
// Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// oldHeading.replaceWith(newHeading);

// Remove Element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child
list.removeChild(lis[3]);

// Classes & ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val; 

// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');

val = link;
// console.log(val);
link.classList.remove('test');
// console.log(val);

val = link.getAttribute('href');
val = link.setAttribute('href', 'https://google.com');
val = link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
val = link.removeAttribute('title');

val = link;

console.log(val);




