const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 25,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function(){
        return 2020 - this.age;
    },


}

let val;

val = person;
// get specific value
val = person.firstName;
val = person['firstName'];

val = person.age;
val = person.email;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [
    {name: 'John', age: 30},
    {name: 'Juliana', age: 25},
    {name: 'Nancy', age: 20}
];

for (let i = 0; i < people.length; i++) {
    console.log(`O nome das pessoas são ${people[i].name}`);
    
    
}
