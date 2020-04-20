const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
// const select = document.querySelector('select');
// let random;



// Clear Input
taskInput.value = '';

// form.addEventListener('submit', runEvent);
// Keydown
// taskInput.addEventListener('keydown', runEvent);
// Keyup
// taskInput.addEventListener('keyup', runEvent);
// Keypress
// taskInput.addEventListener('keypress', runEvent);
// Focus
// taskInput.addEventListener('focus', runEvent);
// Focus
// taskInput.addEventListener('blur', runEvent);
// Cut
// taskInput.addEventListener('cut', runEvent);
// Paste
// taskInput.addEventListener('paste', runEvent);
// Input
// taskInput.addEventListener('input', runEvent);
// Change Event
// select.addEventListener('change', runEvent);

function runEvent(e){
    
    console.log(`EVENT TYPE: ${e.type}`);
    
    console.log(e.target.value);

    heading.innerText = e.target.value;

    // Get input value
    // console.log(taskInput.value);

    // e.preventDefault();
    // random = Math.round(Math.random() * 999999);
    // console.log(`random: #${random}`);
    // document.body.style.backgroundColor = `#${random}`;
}