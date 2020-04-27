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

      Storage.deleteBook(target.parentElement.previousElementSibling.textContent);
      const ui = new UI();
      // console.log(target.parentElement.previousElementSibling.textContent);
      ui.showAlert('Book removed!', 'green');
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

// Store Class
function Storage() {}

Storage.getBooks = function (){
   let books;
   if(localStorage.getItem('books') === null) {
      books = [];
   } else {
      books = JSON.parse(localStorage.getItem('books'));
   }

   return books;
}
Storage.displayBooks = function (){
   const books = Storage.getBooks();
   const ui = new UI();

   books.forEach(book => {
      ui.addBookToList(book);
   });

}

Storage.addBook = function (book){
   const books = Storage.getBooks();
   books.push(book);
   localStorage.setItem('books', JSON.stringify(books));
   // console.log(book);
}

Storage.deleteBook = function (isbn){
   const books = Storage.getBooks();
   // console.log(isbn);
   books.forEach((book, index) => {
      if(book.isbn === isbn) {
         books.splice(index, 1);
      };
      // console.log(books);
   });

   localStorage.setItem('books', JSON.stringify(books));
}



// Event Listeners
document.addEventListener('DOMContentLoaded', Storage.displayBooks);
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

      Storage.addBook(book);

      ui.showAlert('Book added!', 'green');

      // Clear fields
      ui.clearFields();
   }
});

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){

   const ui = new UI();
   ui.deleteBook(e.target);

   e.preventDefault(e);

});