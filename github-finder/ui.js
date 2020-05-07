class UI{
   constructor(){
      this.profile = document.getElementById('profile');
   }

   // Display profile
   showProfile(user){
      this.profile.innerHTML = `
      <div class="card card-body mb-3">
         <div class="row">
            <div class="col-md-3">
               <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
               <a href="${user.html_url}" class="btn btn-block btn-primary mb-3" target="_blank">View Profile</a>
            </div>
            <div class="col-md-9">
               <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
               <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
               <span class="badge badge-success">Folowers: ${user.followers}</span>
               <span class="badge badge-info">Following: ${user.following}</span>
               <br><br>
               <ul class="list-group">
                  <li class="list-group-item">Company: ${user.company}</li>
                  <li class="list-group-item">Website/Blog: <a href="http://${user.blog}" target="_blank">${user.blog}</a></li>
                  <li class="list-group-item">Location: ${user.location}</li>
                  <li class="list-group-item">Member Since: ${user.created_at}</li>
               </ul>
            </div>
         </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>`;
   }

   // Show alert message
   showAlert(message, className){
      this.clearAlert();
      // Creat div
      const div = document.createElement('div');
      // Add classes
      div.className = className;
      // Add text
      div.appendChild(document.createTextNode(message));
      // Get parent
      const container = document.querySelector('.searchContainer');

      // Get search
      const search = document.querySelector('.search');
      // insert alert
      container.insertBefore(div, search);

      // Timeout after 3 seconds
      setTimeout(() => {
         this.clearAlert();
      }, 2000);
   }

   

   clearAlert(){
      const currentAlert = document.querySelector('.alert');

      if(currentAlert ) {
         currentAlert.remove();
      }
   }

   // Clear profile
   clearProfile(){
      this.profile.innerHTML = '';
   }

   showRepos(repos){
      let output = '';

      repos.forEach(repo => {
         output += `
            <div class="card card-body mb-2">
               <div class="row">
                  <div class="col-md-6">
                     <a href="${repo.html_url} target="_blank">${repo.name}</a>
                  </div>
                  <div class="col-md-6">
                  <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                  <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                  <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                  </div>
               </div>
            </div>
         `;
      });

      document.getElementById('repos').innerHTML = output;

   }
}