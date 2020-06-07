class UI {
   constructor(){
      this.post = document.getElementById('posts');
      this.titleInput = document.getElementById('title');
      this.bodyInput = document.getElementById('body');
      this.idInput = document.getElementById('id');
      this.postSubmit = document.querySelector('.post-submit');
      this.forState = 'add';
      this.container = document.querySelector('.postsContainer');
      this.posts = document.querySelector('#posts');
   }

   showPosts(posts){

      let output = '';
      posts.forEach(post => {
         output += `
            <div class="card mb-3">
               <div class="card-body">
                  <h4 class="post-title">${post.title}</h4>
                  <p class="card-text">${post.body}</p>
                  <a href="#" class="edit card-link" data-id="${post.id}">
                     <i class="fas fa-pencil-alt"></i>
                  </a>
                  <a href="#" class="delete card-link" data-id="${post.id}">
                     <i class="fas fa-trash-alt"></i>
                  </a>
               </div>
            </div>
         `;
      });

      this.post.innerHTML = output;
   }

   showAlert(message, className){
      this.clearAlert();
      
      // Create div
      const div = document.createElement('div');
      // Add classes
      div.className = className;
      // add text
      div.appendChild(document.createTextNode(message));

      // Add to html
      this.container.insertBefore(div, this.posts);

      setTimeout(() => {
         this.clearAlert();
      }, 3000);

   }
   clearAlert(){
      const currentAlert = document.querySelector('.alert');
      if(currentAlert){
         currentAlert.remove();
      }
   }

   clearFields(){
      this.titleInput.value = '';
      this.bodyInput.value = '';
   }

   // Fill form to edit
   fillForm(data){
      this.titleInput.value = data.title;
      this.bodyInput.value = data.body;
      this.idInput.value = data.id;

      this.changeFormState('edit');
   }

   changeFormState(type) {
      if(type === 'edit'){
         this.postSubmit.textContent = "Update Post";
         this.postSubmit.className = 'post-submit btn btn-warning btn-block';

         let button = document.createElement('button');

         // get parent
         const cardForm = document.querySelector('.card-form');
         // get the element to insert before
         const formEnd = document.querySelector('.form-form');

         if(!document.querySelector('.post-cancel')){
            // create cancel button
            button.className = 'post-cancel btn btn-light btn-block';
            button.appendChild(document.createTextNode('Cancel Edit'));
            cardForm.insertBefore(button, formEnd);
         }
         
      } else {
         this.postSubmit.textContent = "Post It";
         this.postSubmit.className = 'post-submit btn btn-primary btn-block';

         // remove cancel btn if is there
         if(document.querySelector('.post-cancel')){
            document.querySelector('.post-cancel').remove();
         }
         // Clear ID fromm hidden field
         this.clearIdInput();
         // Clear fields
         this.clearFields();
      }
   }

   clearIdInput(){
      this.idInput.value ='';
   }
}

export const ui = new UI();