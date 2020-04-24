// Person constructor
function Person(name, dob) {
   this.name = name;
   // this.age = age;
   this.birthday = new Date(dob);
   this.calculateAge = function(){
      const diff = Date.now() - this.birthday.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
   }
}

// const john  = new Person('John', 36);
// const hallef  = new Person('Hallef');
// console.log(hallef);
// console.log(john.age);

const brad = new Person('Brad', '05/11/1994');
console.log(brad.calculateAge());