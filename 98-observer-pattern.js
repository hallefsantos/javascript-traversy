function EventObserver(){
   this.observers = [];
}

EventObserver.prototype = {
   subscribe: function(fn){
      this.observers.push(fn);
      console.log(`You are now subscribed to ${fn.name}`);
   },
   unsubscribe: function(fn){
      this.observers = this.observers.filter(function(item){
         if(item!== fn){
            return item;
         }
      });
      console.log(`You are now unsubscribed from ${fn.name}`);
   },
   fire: function(){
      this.observers.forEach(item => {
         item.call();
      });
   }
}

const click = new EventObserver();

// Event Listeners
document.querySelector('.sub-ms').addEventListener('click', 
() => {
   click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', 
() => {
   click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.fire').addEventListener('click', 
() => {
   click.fire();
});

// Seconds
document.querySelector('.sub-s').addEventListener('click', 
() => {
   click.subscribe(getCurSeconds);
   console.log(click.observers);
});

document.querySelector('.unsub-s').addEventListener('click', 
() => {
   click.unsubscribe(getCurSeconds);
   console.log(click.observers);
});

// Click Handler
const getCurMilliseconds = function(){
   console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurSeconds = function(){
   console.log(`Current Milliseconds: ${new Date().getSeconds()}`);
}
