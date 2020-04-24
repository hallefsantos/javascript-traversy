// Object.prototype
// Person.prototype
function Person(firstName, LastName, dob) {
   this.firstName = firstName;
   this.lastName = LastName;
   this.birthday = new Date(dob);
   // this.calculateAge = function(){
   //    const diff = Date.now() - this.birthday.getTime();
   //    const ageDate = new Date(diff);
   //    return Math.abs(ageDate.getUTCFullYear() - 1970);
   // }
}

// Calculate Age
Person.prototype.calculateAge = function(){
   const diff = Date.now() - this.birthday.getTime();
   const ageDate = new Date(diff);
   return Math.abs(ageDate.getUTCFullYear() - 1970);
}


// Ger full name
Person.prototype.getFullName = function(){
   return `${this.firstName} ${this.lastName}`;
}

// Gets married
Person.prototype.getsMarried = function(newLastName){
   this.lastName = newLastName;
}

const mary = new Person('Mary', 'Jonhson', '10/05/1990');
const john = new Person('John', 'Doe', '11/05/1994');

console.log(mary);
console.log(mary.calculateAge());
console.log(john.calculateAge());
console.log(john.getFullName());
console.log(mary.getFullName());

mary.getsMarried('Smith');
console.log(mary.getFullName());
console.log(mary);

