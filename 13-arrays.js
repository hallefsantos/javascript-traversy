// Create some arrays
const numbers = [100, 1,3,5,6,78,6,90];
const numbers2 = new Array(1, 5,6,8,1,7,8);

const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mix = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];

let val;

const numbers3 = 3;

// get array lenght
val = numbers.length;

// check if is array
val = Array.isArray(numbers3);

// get single value
val = numbers[3];

// insert into array
// numbers[2] = 100;

// Find index of value
val = numbers.indexOf(6);

// Mutating Arrays
// add on the end
// numbers.push(250);

// add on the front
// numbers.unshift(0);

// take off from end
// numbers.pop();

// take off from front
// numbers.shift();

// Splice Values
numbers.splice(0,0);

// Reverse
// numbers.reverse();

// Concatnate array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
val = numbers.sort();

// use the "compare" function
val = numbers.sort(function(x,y){
    return x-y;
});

// reverse sort
val = numbers.sort(function(x,y){
    return y-x;
});


// find
function over50(num) {
    return num > 50;
}

val = numbers.find(over50);

console.log(numbers);
console.log(val);