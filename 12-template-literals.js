// TEMPLATE LITERALS
const name = "John";
const age = 30;
const job = "Web Developer";
const city = "Miami";
let html;

// Without Template String (es5)
html = '<ul><li>Name: ' + name +'</li><li>Age: '+ age + '</li><li>Job: '+ job +'</li><li>City: '+ city +'</li></ul>';


html = 
`<ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
</ul>`;

// With template strings (es6)


document.body.innerHTML = html;