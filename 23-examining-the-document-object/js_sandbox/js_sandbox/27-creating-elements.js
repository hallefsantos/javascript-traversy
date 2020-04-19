// create element
const li = document.createElement('li');

// add class
li.className = 'collection-item';
// li.classList.add('teste2');

// add id
li.id = 'new-item';

// add attribute
li.setAttribute('title', 'New Item');

li.innerText = 'Some text';

// li.appendChild(document.createTextNode('Hello World'));

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

// Create new link element
const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>';

// remove class
// li.classList.remove('teste');

li.appendChild(link);

console.log(link);