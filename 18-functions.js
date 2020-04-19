// Function declarations

function greet(firstName = 'John', lastName = 'Doe'){
    // console.log('Hello World');
    // if(typeof firstName === 'undefined'){firstName = 'John'}
    // if(typeof lastName === 'undefined'){lastName = 'Doe'}
    return `Hello ${firstName} ${lastName}`;
}

// console.log(greet());

// Function expressions
const square = function(x = 3){
    return x * x;
};

// console.log(square);

// Immidiatley invokable function expressions - IIFEs
// (function(){
//     console.log('IIFE ran...');
// })();
(function(name){
    console.log(`Hello ${name}`);
})('Brad');

// Property methods
const todo = {
    add: function(){
        console.log('add todo...');
    },
    edit: function(id){
        console.log(`edit todo ${id}`);
    }
}

todo.delete = function(){
    console.log(`delete todo...`);
}

todo.add();
todo.edit(1);
todo.delete();