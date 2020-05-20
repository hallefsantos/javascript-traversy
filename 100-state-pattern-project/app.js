const PageState = function () {
   let currentState = new homeState(this);

   this.init = function () {
      this.change(new homeState);
   }

   this.change = function (state) {
      currentState = state;
   }
};

// Home State
const homeState = function (page) {
   document.querySelector('#heading').textContent = null;
   document.querySelector('#content').innerHTML = `
   <div class="jumbotron">
   <h1 class="display-4">Hello, world!</h1>
   <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
   <hr class="my-4">
   <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
   <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
 </div>
   `;
};

const aboutState = function (page) {
   document.querySelector('#heading').textContent = 'About Us';
   document.querySelector('#content').innerHTML = `
      <p>This is the about page</p>
   `;
};

const contactState = function (page) {
   document.querySelector('#heading').textContent = 'Contact Us';
   document.querySelector('#content').innerHTML = `
   <form>
   <div class="form-row">
     <div class="form-group col-md-6">
       <label for="inputEmail4">Email</label>
       <input type="email" class="form-control" id="inputEmail4">
     </div>
     <div class="form-group col-md-6">
       <label for="inputPassword4">Password</label>
       <input type="password" class="form-control" id="inputPassword4">
     </div>
   </div>
   <div class="form-group">
     <label for="inputAddress">Address</label>
     <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
   </div>
   <div class="form-group">
     <label for="inputAddress2">Address 2</label>
     <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
   </div>
   <div class="form-row">
     <div class="form-group col-md-6">
       <label for="inputCity">City</label>
       <input type="text" class="form-control" id="inputCity">
     </div>
     <div class="form-group col-md-4">
       <label for="inputState">State</label>
       <select id="inputState" class="form-control">
         <option selected>Choose...</option>
         <option>...</option>
       </select>
     </div>
     <div class="form-group col-md-2">
       <label for="inputZip">Zip</label>
       <input type="text" class="form-control" id="inputZip">
     </div>
   </div>
   <div class="form-group">
     <div class="form-check">
       <input class="form-check-input" type="checkbox" id="gridCheck">
       <label class="form-check-label" for="gridCheck">
         Check me out
       </label>
     </div>
   </div>
   <button type="submit" class="btn btn-primary">Sign in</button>
 </form>
   `;
};

// Initiate page state
const page = new PageState();

page.init();

// UI Vars
const home = document.getElementById('home'),
      about = document.getElementById('about'),
      contact = document.getElementById('contact');

// home
home.addEventListener('click', (e) => {
   page.change(new homeState);
   e.preventDefault();
});

// about
about.addEventListener('click', (e) => {
   page.change(new aboutState);
   e.preventDefault();
});

// contact
contact.addEventListener('click', (e) => {
   page.change(new contactState);
   e.preventDefault();
});
