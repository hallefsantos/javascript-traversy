const name1 = 'Jeff';
// console.log(name1);
// console.log(typeof name1);

// console.log('-');

const name2 = new String('Hallef');
// console.log(name2);
// console.log(typeof name2);

// if(name1 == 'Jeff'){
//    console.log('YES');
// } else {
//    console.log('NO');
// }
// name1 === 'Jeff' ? console.log('Sim') : console.log('Não');

// Number
const num1 = 5;
const num2 = new Number(5);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

console.log(typeof num1);
console.log(typeof num2);
console.log(typeof bool1);
console.log(typeof bool2);

const getSum1 = function(x, y){
   return x+y;
}

const getSum2 = new Function('x', 'y', 'return x + y');

console.log(getSum2(1,3));

// Object
const john = {name: 'John'};
const john2 = new Object ({name: 'John'});

console.log(john2);

// Array
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

console.log(arr1);
console.log(arr2);

// Relugar expressions
const re1 = /\w+/;
const re2 = new RegExp('\w+');

console.log(re1);
console.log(re2);






