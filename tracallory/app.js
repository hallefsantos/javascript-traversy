// Storage Controller
const StorageCtrl = (function(){

   // Public methods
   return {
      storeItem: function(item){

         let items;
         
         // check if any items in LS
         if(localStorage.getItem('items') === null){
            items = [];
            // Push new item
            items.push(item);
            // set ls
            localStorage.setItem('items', JSON.stringify(items));
         } else {
            // Get what is already in ls
            items = JSON.parse(localStorage.getItem('items'));

            // Push new item
            items.push(item);

            // Re set local storage
            localStorage.setItem('items', JSON.stringify(items));
         }
      },
      getItemsFromStorage: function(){
         let items;
         if(localStorage.getItem('items') === null){
            items = [];
         } else {
            items = JSON.parse(localStorage.getItem('items'));
         }

         return items;
      },
      updateItemStorage: function(updatedItem){
         let items = JSON.parse(localStorage.getItem('items'));

         items.forEach((item, index) => {
            if(updatedItem.id === item.id){
               items.splice(index, 1, updatedItem);
            }
         });

         localStorage.setItem('items', JSON.stringify(items));
         
      },
      deleteItemFromStorage: function(id){
         let items = JSON.parse(localStorage.getItem('items'));

         items.forEach((item, index) => {
            if(id === item.id){
               items.splice(index, 1);
            }
         });

         localStorage.setItem('items', JSON.stringify(items));
      },
      clearItemsFromStorage: function(){
         localStorage.removeItem('items');
      }
   }
})();
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
      // items: [
      //    // {id: 0,name: "Steak Dinner",calories: 1200},
      //    // {id: 1,name: "Cookie",calories: 200},
      //    // {id: 2,name: "Eggs",calories: 600},
      // ],
      items: StorageCtrl.getItemsFromStorage(),
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
      getItemById: function(id){
         let found = null;

         // loop throug items
         data.items.forEach(item => {
            if(item.id === id){
               found = item;
            }
         });

         return found;
      },
      updateItem: function(name, calories){
         // Calories to number
         calories = parseInt(calories);

         let found = null;

         data.items.forEach(item => {
            if(item.id === data.currentItem.id) {
               item.name = name;
               item.calories = calories;
               found = item;
            }
         });

         return found;

      },
      deleteItem: function(id){
         // get ids
         const ids = data.items.map(function(item){
            return item.id;
         });

         const index = ids.indexOf(id);

         // remove item
         data.items.splice(index, 1);
         
      },
      clearAllItems: function(){
         data.items = [];
      },
      setCurrentItem: function(item){
         data.currentItem = item;
      },
      getCurrentItem: function(){
         return data.currentItem;
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
      listItems: '#item-list li',
      addBtn: ".add-btn",
      updateBtn: ".update-btn",
      deleteBtn: ".delete-btn",
      backBtn: ".back-btn",
      clearBtn: ".clear-btn",
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
      updateListItem: function(item){
         let listItems = document.querySelectorAll(UISelectors.listItems);

         // listItems = Array.from(listItems);

         listItems.forEach(listItem => {
            const itemId = listItem.getAttribute('id');

            if(itemId === `item-${item.id}`){
               document.querySelector(`#${itemId}`).innerHTML = `
                  <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                  <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
               `;
            }
            
         });
      },
      deleteListItem: function(id){
         const itemID = `#item-${id}`;
         const item = document.querySelector(itemID);
         item.remove();
      },
      clearInput: function(){
         document.querySelector(UISelectors.itemNameInput).value = '';
         document.querySelector(UISelectors.itemCaloriesInput).value = '';
      },
      showList: function(){
         // Show the list
         document.querySelector(UISelectors.itemList).style.display = 'block';
      },
      removeItems: function(){
         let listItems = document.querySelectorAll(UISelectors.listItems);

         listItems = Array.from(listItems);
         
         listItems.forEach((item) => {
            item.remove();
         });

      },
      hideList: function(){
         document.querySelector(UISelectors.itemList).style.display = 'none';
      },
      showTotalCalories: function(total){
         document.querySelector(UISelectors.totalCalories).textContent = total;
      },
      addItemToForm: function(){
         document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
         document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;

         UICtrl.showEditState();
      },
      clearEditState: function(){
         UICtrl.clearInput();
         document.querySelector(UISelectors.updateBtn).style.display = 'none';
         document.querySelector(UISelectors.deleteBtn).style.display = 'none';
         document.querySelector(UISelectors.backBtn).style.display = 'none';
         document.querySelector(UISelectors.addBtn).style.display = 'inline';
      },
      showEditState: function(){
         document.querySelector(UISelectors.updateBtn).style.display = 'inline';
         document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
         document.querySelector(UISelectors.backBtn).style.display = 'inline';
         document.querySelector(UISelectors.addBtn).style.display = 'none';
      },
      getSelectors: function () {
         return UISelectors;
      },
   };
})();

// App Controller
const App = (function (ItemCtrl, UICtrl, StorageCtrl) {
   // Load event listeners
   const loadEventListeners = function () {
      // Get UI Selectors
      const UISelectors = UICtrl.getSelectors();

      // Add item event
      document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

      // disable submit on enter
      document.addEventListener('keypress', function(e){
         if(e.keyCode === 13 || e.which === 13){
            e.preventDefault();
            return false;
         }
      });

      // Edit icon click event 
      document.querySelector(UISelectors.itemList).addEventListener('click', editItemClick);

      // update item event
      document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

      // delete item event
      document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

      // clear items event
      document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);

      // clear button event
      document.querySelector(UISelectors.backBtn).addEventListener('click', (e) => {
         e.preventDefault();
         UICtrl.clearEditState();
      });


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
         
         // Store in local storage
         StorageCtrl.storeItem(newItem);

         // Clear fiels
         UICtrl.clearInput();
         
      }

      e.preventDefault();
   }

   const editItemClick = function(e){
      if(e.target.classList.contains('edit-item')){
         // get list id
         const listId = e.target.parentNode.parentNode.id;

         // Break into an array
         const listIdArr = listId.split('-');

         // get the actual id
         const id = parseInt(listIdArr[1]);

         // get item
         const itemToEdit = ItemCtrl.getItemById(id);

         // Set current item
         ItemCtrl.setCurrentItem(itemToEdit);

         // Add item to form
         UICtrl.addItemToForm();
         
         
      }

      e.preventDefault();
   }

   const itemUpdateSubmit = function(e){
      // Get item input
      const input = UICtrl.getItemInput();

      // Update item 
      const updatedItem = ItemCtrl.updateItem(input.name, input.calories);

      UICtrl.updateListItem(updatedItem);

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();

      // add totalCalories to UI
      UICtrl.showTotalCalories(totalCalories);

      // Update local storage
      StorageCtrl.updateItemStorage(updatedItem);

      UICtrl.clearEditState();

      e.preventDefault();
   }

   const itemDeleteSubmit = function(e){
      // Get current item
      const currentItem = ItemCtrl.getCurrentItem();

      // console.log(currentItem);
      
      // Delete from data structure
      ItemCtrl.deleteItem(currentItem.id);

      // Delete from UI
      UICtrl.deleteListItem(currentItem.id);

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();

      // add totalCalories to UI
      UICtrl.showTotalCalories(totalCalories);

      // Delete from local storage
      StorageCtrl.deleteItemFromStorage(currentItem.id);

      UICtrl.clearEditState();

      e.preventDefault();
   }

   // Clear Items Event
   const clearAllItemsClick = function(){
      //Delete all items from data structure
      ItemCtrl.clearAllItems();

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();

      // add totalCalories to UI
      UICtrl.showTotalCalories(totalCalories);

      // Clear from local storage
      StorageCtrl.clearItemsFromStorage();

      UICtrl.hideList();

      // Remove from UI
      UICtrl.removeItems();
   }

   // Public methods
   return {
      init: function () {
         // console.log('Initializing App...');

         // clear edit state / set initial state
         UICtrl.clearEditState();

         // Fetch items from data structure
         const items = ItemCtrl.getItems();

         // Get total calories
         const totalCalories = ItemCtrl.getTotalCalories();

         // add totalCalories to UI
         UICtrl.showTotalCalories(totalCalories);

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
})(ItemCtrl, UICtrl, StorageCtrl);

App.init();

