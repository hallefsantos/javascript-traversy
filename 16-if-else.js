// IF / ELSE

// if(something){
//     do something;
// } else {
//     do something else
// }

const id = 100;

// // EQUAL TO
// if(id == 101) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // NOT EQUAL TO
// if(id != 101) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // EQUAL TO VALUE & TYPE
// if(id === 101) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // NOT EQUAL TO VALUE & TYPE
// if(id !== 101) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// Test if undefined
// if(typeof id !== 'undefined') {
//     console.log(`The id is ${id}`);
// } else {
//     console.log('The ID doesnt exist');
// }

// GREATER or LESS THAN
// if(id > 200) {
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// }

// IF ELSE
const color = 'yellow';


// if(color === 'red'){
//     console.log('Color is red');
// } else if(color === 'blue'){
//     console.log('Color is blue');
// } else {
//     console.log('Color is not red or blue');
// }

// Logical operators
const name = 'Steve';
const age = 20 ;

// AND &&
if (age > 0 && age < 12) {
    console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age > 65) {
    console.log(`${name} can not run in race`);
} else {
    console.log(`${name} is registed for the race`); 
}

// Ternary operator
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');
