// Storage Controller

// Item Controller
const ItemCtrl = (function () {
   // Item contructor
   const Item = function (id, name, calories) {
      this.id = id;
      this.name = name;
      this.calories = calories;
   };

   // Data Structure / State
   const data = {
      items: [
         // {id: 0,name: "Steak Dinner",calories: 1200},
         // {id: 1,name: "Cookie",calories: 200},
         // {id: 2,name: "Eggs",calories: 600},
      ],
      currentItem: null,
      totalCalories: 0,
   };

   // Public methods
   return {
      getItems: function () {
         return data.items;
      },
      addItem: function (name, calories) {
         let ID;
         // Creat ID
         if(data.items.length > 0){
            ID = (data.items.length - 1) + 1;
         }else {
            ID = 0;
         }

         // Calories to Number
         calories = parseInt(calories);
         
         // Create new Item
         newItem = new Item(ID, name, calories);

         // Add to items array
         data.items.push(newItem);

         return newItem;
         
         
      },
      getTotalCalories: function(){
         let total = 0;

         // loop through items and add cals
         data.items.forEach(item => {
            total += item.calories;
         });
         
         //set total cal in data structure
         data.totalCalories = total;

         // return total
         return data.totalCalories;
      },
      logData: function () {
         return data;
      },
   };
})();

// UI Controller
const UICtrl = (function () {
   const UISelectors = {
      itemList: "#item-list",
      addBtn: ".add-btn",
      itemNameInput: '#item-name',
      itemCaloriesInput: '#item-calories',
      totalCalories: '.total-calories'
   };

   // Public methods
   return {
      populateItemsList: function (items) {
         let html = "";

         items.forEach((item) => {
            html += `
            <li class="collection-item" id="item-${item.id}">
               <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
               <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
            </li>
            `;
         });

         // Insert list items
         document.querySelector(UISelectors.itemList).innerHTML = html;
      },
      getItemInput: function () {
         return {
            name: document.querySelector(UISelectors.itemNameInput).value,
            calories: document.querySelector(UISelectors.itemCaloriesInput).value
         }
      },
      addListItem: function(item){
         // Show list
         UICtrl.showList();
         // Create li element
         const li = document.createElement('li');
         // add class
         li.className = 'collection-item';
         // Add ID
         li.id = `item-${item.id}`;
         // Add HTML
         li.innerHTML = `
            <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
         `;
         // Insert Item
         document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
      },
      clearInput: function(){
         document.querySelector(UISelectors.itemNameInput).value = '';
         document.querySelector(UISelectors.itemCaloriesInput).value = '';
      },
      showList: function(){
         // Show the list
         document.querySelector(UISelectors.itemList).style.display = 'block';
      },
      hideList: function(){
         document.querySelector(UISelectors.itemList).style.display = 'none';
      },
      showTotalCalories: function(total){
         document.querySelector(UISelectors.totalCalories).textContent = total;
      },
      getSelectors: function () {
         return UISelectors;
      },
   };
})();

// App Controller
const App = (function (ItemCtrl, UICtrl) {
   // Load event listeners
   const loadEventListeners = function () {
      // Get UI Selectors
      const UISelectors = UICtrl.getSelectors();

      // Add item event
      document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);


   };

   // Add item submit
   const itemAddSubmit = function (e) {
      // Get form input from UI Controller
      const input = UICtrl.getItemInput();

      // Check for name and calorie input
      if (input.name !== '' && input.calories !== '') {
         // add item
         const newItem = ItemCtrl.addItem(input.name, input.calories);
         // Add to UI List
         UICtrl.addListItem(newItem);

         // Get total calories
         const totalCalories = ItemCtrl.getTotalCalories();

         // add totalCalories to UI
         UICtrl.showTotalCalories(totalCalories);
         
         // Clear fiels
         UICtrl.clearInput();
      }

      e.preventDefault();
   }

   // Public methods
   return {
      init: function () {
         // console.log('Initializing App...');

         // Fetch items from data structure
         const items = ItemCtrl.getItems();

         // Check if any items
         if(items.length === 0){
            UICtrl.hideList();
         } else {
            // Populate list with Items
            UICtrl.populateItemsList(items);
         } 

         // Load all event listeners
         loadEventListeners();
      },
   };
})(ItemCtrl, UICtrl);

App.init();