// Destructuring Assignment 

let a, b;
[a, b] = [100, 200];

// rest pattern
[a, b, c, ...z] = [100, 200, 300, 400, 500];

({a,b} = {a:100, b:200, c: 300, d: 400, e:500});
({a,b, ...rest} = {a:100, b:200, c: 300, d: 400, e:500});

// Array Destructuring

// const people = ['John', 'Beth', 'Mike'];

// const [person1, person2, person3] = people;

// console.log(person1, person2, person3);

// Parse array returned from function
// function getPeople(){
//    const filhos = ['Jaquei', 'João', 'Félix'];
//    return filhos;
// }

// let person1, person2, person3;
// [person1, person2, person3] = getPeople();

// console.log(person1, person2, person3);

// Object Destructuring
const person = {
   name: 'Hallef',
   age: 25,
   city: 'São Paulo',
   gender: 'Male',
   sayHello: () => {
      console.log('Hello');
      
   }
}

// Old ES5 
// const name = person.name,
//       age = person.age,
//       city = person.city,
//       gender = person.gender;

// New ES6
const {name, age, gender, sayHello} = person;
console.log(name, age, gender);

sayHello();

