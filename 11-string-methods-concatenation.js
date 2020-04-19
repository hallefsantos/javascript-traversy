let firstName = 'Hallef';
const lastName = 'Santos';
const age = 25;
const str = "Hello there my name is Hallef";
const tags = 'front-end,back-end,javascript,php,react,react-native';

let val;

val = firstName + lastName;


// Concatenation
val = firstName + ' ' + lastName;

// append
val = 'Brad ';
val += 'Traversy';

val = "Hello, my name is " + firstName + " and I am " + age;

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];

// indexOf
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt
val = firstName.charAt(0);

// Get Last Char
val =  firstName.charAt(firstName.length-1);
// Get First Char
val =  firstName.charAt(0);

// Substring
val = firstName.substring(0, 4) + '...';

// Slice()
val = firstName.slice(0, 3);
val = firstName.slice(-3);

// Split
val = str.split(' ');
val = tags.split(',');

// Replace
val = str.replace('Hallef', 'Alex');

// Includes
val = str.includes('foo');

console.log(val);

// firstName = ['Rafael', 'Hallef', 'Celma'];

// firstName.forEach(name => console.log(`My name is ${name}`));

// firstName.forEach((name, index) => {
//     console.log(`${index} - My name is ${name}`);
// });

// firstName.reverse();

// firstName.forEach(name => console.log(`My name is ${name}`));

