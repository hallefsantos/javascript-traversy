const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);
// Doubleclick
// clearBtn.addEventListener('dblclick', runEvent);
// Mousedown
// clearBtn.addEventListener('mousedown', runEvent);
// Mousedown
// clearBtn.addEventListener('mouseup', runEvent);
// Mouseenter
// card.addEventListener('mouseenter', runEvent);
// Mouseenter
// card.addEventListener('mouseleave', runEvent);
// Mouseover
// card.addEventListener('mouseover', runEvent);
// Mouseleave
// card.addEventListener('mouseout', runEvent);
// Mousemove
card.addEventListener('mousemove', runEvent);


// Event handler
function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}