function memberFactory(){
   this.createMember = function(name, type){
      let member;

      if(type === 'simple'){
         member = new SimpleMembership(name);
      } else if(type === 'standard'){
         member = new StandardMembership(name);
      } else if(type === 'super'){
         member = new SuperMembership(name);
      }

      member.type = type;

      member.define = function(){
         console.log(`${this.name} (${this.type}): ${this.cost}`);  
      }

      return member;
   }
}

const SimpleMembership = function(name){
   this.name = name;
   this.cost = '$5';
}
const StardardMembership = function(name){
   this.name = name;
   this.cost = '$15';
}
const SuperMembership = function(name){
   this.name = name;
   this.cost = '$25';
}

const members = [];
const factory = new memberFactory();

members.push(factory.createMember('John Doe', 'super'));
members.push(factory.createMember('Rafael Poe', 'simple'));

// console.log(members);

members.forEach(member => {
   member.define();
});


