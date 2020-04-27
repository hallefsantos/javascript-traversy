// Book Constructor
function Book(title, author, isbn){
   this.title = title;
   this.author = author;
   this.isbn = isbn;
}

// UI Constructor
function UI() {}

UI.prototype.addBookToList = function(book) {
   // console.log(book);

   const list = document.getElementById('book-list');
   // create tr element
   const row = document.createElement('tr');
   // Insert Cols...
   row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X</td>
   `;

   list.appendChild(row);
   // console.log(row);
}

// Delete Book
UI.prototype.deleteBook = function(target){
   if(target.className === 'delete'){
      target.parentElement.parentElement.remove();
   }
}

// Clear Fields
UI.prototype.clearFields = function(){
   document.getElementById('title').value = '';
   author = document.getElementById('author').value = '';
   isbn = document.getElementById('isbn').value = '';
}

// Show Alert
UI.prototype.showAlert = function(message, className){
   // Create div
   const div = document.createElement('div');
   // Add classes
   div.className = `alert card-panel ${className}`;
   // Add Text
   // div.textContent = message;
   div.appendChild(document.createTextNode(message));

   // Get parent
   const cardContent = document.querySelector('.card-content');

   // Get form
   const form = document.getElementById('book-form');

   // Insert alert
   cardContent.insertBefore(div, form);

   // Timeout after 3 sec
   setTimeout(() => {
      document.querySelector('.alert').remove();
   }, 4000);

   // console.log(div);
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit',
function(e){

   e.preventDefault();

   // get form values
   const title = document.getElementById('title').value,
         author = document.getElementById('author').value,
         isbn = document.getElementById('isbn').value;

   // Instantiate book
   const book = new Book(title, author, isbn);

   // Instantiate UI
   const ui = new UI();

   // Validate
   if(title === '' || author === '' || isbn === '') {
      // Error Alert 
      ui.showAlert('Please fill in all fiels', 'red');
   
   } else {
      // Add book to list
      ui.addBookToList(book);

      ui.showAlert('Book added!', 'green');

      // Clear fields
      ui.clearFields();
   }
});

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){

   const ui = new UI();
   ui.deleteBook(e.target);
   ui.showAlert('Book removed!', 'green');

   e.preventDefault(e);
});