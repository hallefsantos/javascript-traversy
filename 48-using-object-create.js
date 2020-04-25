// Person Prototypes
const personPrototypes = {
   greeting: function(){
      return `Hello there ${this.firstName} ${this.lastName}`;
   },
   getsMarries: function(newLastName){
      this.lastName = newLastName;
   }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;


mary.getsMarries('Thompson');
console.log(mary.greeting());


const brad = Object.create(personPrototypes, {
   firstName: {value: 'Brad'},
   lastName: {value: 'Traversy'},
   age: {value: 36}
});

console.log(brad.greeting());