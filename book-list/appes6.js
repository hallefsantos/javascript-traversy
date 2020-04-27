class Book {
   constructor(title, author, isbn){
      this.title = title;
      this.author = author;
      this.isbn = isbn;
   }
}

class UI{
   addBookToList(book){
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
   }

   deleteBook(target){
      if(target.className === 'delete'){
         target.parentElement.parentElement.remove();
      }
   }

   clearFields(){
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
      document.getElementById('isbn').value = '';
   }

   showAlert(message, className){
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
   }
}

// Local Storage Class
class Store{
   static getBooks(){
      let books;
      if(localStorage.getItem('books') === null) {
         books = [];
      } else {
         books = JSON.parse(localStorage.getItem('books'));
      }

      return books;
   }

   static displayBooks(){
      const books = Store.getBooks();

      books.forEach(book => {
         const ui = new UI;
         console.log(book);
         ui.addBookToList(book);
      });
   }

   static addBook(book){
      const books = Store.getBooks();

      books.push(book);

      localStorage.setItem('books', JSON.stringify(books));
   }

   static removeBook(isbn){
      const books = Store.getBooks();

      books.forEach((book, index) => {
         if(book.isbn === isbn) {
            books.splice(index);
         }
      });

      localStorage.setItem('books', JSON.stringify(books));
   }
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

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

      // Add to local storage
      Store.addBook(book);

      ui.showAlert('Book added!', 'green');

      // Clear fields
      ui.clearFields();
   }
});

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){

   // Instantiate UI
   const ui = new UI();
   
   // Delete book
   ui.deleteBook(e.target);

   // Remove from LS
   Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

   // Show message
   ui.showAlert('Book removed!', 'green');

   e.preventDefault(e);
});