// for loop

// for (let i = 0; i < 10; i++) {
//     // console.log('Number: '+ (i+1));
//     if(i === 2) {
//         console.log(`${i} is my favorite number`);
//         continue;
//     }

//     if(i === 5) {
//         console.log('Stop the loop');
        
//         break;
//     }

//     console.log('Number: '+ (i));
// } 

// WHILE LOOP
// let i = 0;
// while(i < 10) {
//     console.log(i);
//     i++;
// }

// Do While
// let i = 5;
// do {
//     console.log('Number: ' + i);
//     i++;
// }
// while(i < 10);

// const cars = ['Ford', 'Chevy', 'Honda','Toyota'];

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

// let i = 0;
// while (i < cars.length){
//     console.log(cars[i]);
//     i++; 
// }

// console.log(cars.length);

// FOREACH
// const carsId = [];
// cars.forEach(function(car, index){
//     console.log(car);
//     carsId.push(index);
// });

// MAP

// const users = [
//     {id:1, name:'John'},
//     {id:2, name:'Sara'},
//     {id:3, name:'Karen'}
// ];

// const ids = users.map(function(user){
//     return user.id;
// });

// console.log(carsId);

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
}

for(let x in user){
    // console.log(`${x} : ${user[x]}`);
}
