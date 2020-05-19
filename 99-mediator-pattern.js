const User = function(name){
   this.name = name;
   this.chatroom = null;
}

User.prototype = {
   send: function(message, to){
      this.chatroom.send(message, this, to);
   },
   receive: function(message, from){
      console.log(`${from.name} to ${this.name}: ${message}`)
   }
}

const Chatroom = function(){
   let users = {}; //List of users

   return {
      register: function(user){
         users[user.name] = user;
         user.chatroom = this;
      },
      send: function(message, from, to){
         if(to){
            // Single user message
            to.receive(message, from);
         } else {
            // Mass message
            for(key in users) {
               if(users[key] !== from){
                  users[key].receive(message, from);
               }
            }
         }
      }
   }
}

const hallef = new User('Hallef');
const brad = new User('Brad');
const sara = new User('Sara');

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(hallef);
chatroom.register(sara);

brad.send('Hello Sara', sara);
sara.send('Hello Brad you are the best dev ever!', brad);
hallef.send('Helo everyone');