// Init GitHub
const github = new GitHub;
// Init UI
const ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser');

// Search Input event listener
searchUser.addEventListener('keyup', (e) => {
   // get input text
   const userText = e.target.value;

   if(userText !== '') {
      // console.log(usetText);
      // Make http call
      github.getUser(userText)
         .then(data => {
            if(data.profile.message === 'Not Found'){
               //show alert
               ui.showAlert('User not found', 'alert alert-danger');

            }else {
               // Show profile 
               // console.log(data.profile);
               ui.showProfile(data.profile);
               ui.showRepos(data.repos);
            }
         });
   } else {
      // Clear the profile
      ui.clearProfile();
   }
});