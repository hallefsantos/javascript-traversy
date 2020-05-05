// const sayHello = function(){
//    console.log('hello');
// }

// // Arrow function
// const sayHello = () =>{
//    console.log('hello');
// }

// one line functions does not need braces
// const sayHello = () => console.log('hello');

// one line returns
// const sayHello = () => 'Hello';

// Same as above
// const sayHello = function(){
//    return 'Hello';
// }

// Return object
// const sayHello = () => ({msg: 'Hello'});

// Single param does not need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

// Multiple params need parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);



// sayHello('Hallef', 'Oliveira');

const users = ['Hallef', 'Rebeca', 'Jô Soares'];

// const nameLenghts = users.map(function(name){
//    return {name: name, lenght: name.length};
// });

// Shorter 
const nameLenghts2 = users.map(name => {
   return {name: name, lenght: name.length};
});

// Shortest
const nameLenghts = users.map(name => name.length);

console.log(nameLenghts2);


