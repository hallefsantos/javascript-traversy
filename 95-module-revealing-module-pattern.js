// Basic structure

// (function(){
//    // Declare private vars and functions

//    return {
//       // Declare public var and functions
//    }
// })();

// Standard module pattern
const UICtrl = (function(){
   let text = 'Hello World';

   const changeText = function(){
      const element = document.querySelector('h1');
      element.textContent = text;
   }

   return {
      callChangeText: function(){
         changeText();
         console.log(text);
      }
   }
})();


// UICtrl.callChangeText();

// UICtrl.changeText();
// console.log(UICtrl.text);

// REVEALING MODULE PATTERN
const ItemCtrl = (function(){
   let data = [];

   function add(item){
      data.push(item);
      console.log('Item add....');
   }

   function get(id){ 
      return data.find(item => {
         return item.id === id;
      });
   }

   return {
      add,
      get
   }
})();

ItemCtrl.add({id: 1, name: 'John Doe'});
ItemCtrl.add({id: 2, name: 'Hallef Santos'});
ItemCtrl.add({id: 3, name: 'Alex Souza'});
ItemCtrl.add({id: 4, name: 'Allan Oliveira'});

console.log(ItemCtrl.get(4));