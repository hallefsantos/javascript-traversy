const data = [
   {
      name: 'John Doe',
      age: 32,
      gender: 'male',
      lookingfor: 'female',
      location: 'Boston MA',
      image: 'https://randomuser.me/api/portraits/men/17.jpg'
   },
   {
      name: 'Alissa Santos',
      age: 26,
      gender: 'female',
      lookingfor: 'male',
      location: 'Miami FL',
      image: 'https://randomuser.me/api/portraits/women/12.jpg'
   },
   {
      name: 'Renato Russo',
      age: 29,
      gender: 'male',
      lookingfor: 'female',
      location: 'Chelsea MA',
      image: 'https://randomuser.me/api/portraits/men/30.jpg'
   }
]

const profiles = profileIterator(data);

// Call First profile
document.addEventListener('DOMContentLoaded', nextProfile);

// Next event
document.getElementById('next').addEventListener('click', nextProfile);

// Next profile Display
function nextProfile(){
   const currentProfile =  profiles.next().value;

   if(currentProfile !== undefined){
      document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
         <li class="list-group-item">Name: ${currentProfile.name}</li>
         <li class="list-group-item">Age: ${currentProfile.age}</li>
         <li class="list-group-item">Location: ${currentProfile.location}</li>
         <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>
   `;
   } else {
      // No more profiles
      window.location.reload();
   }
   

   document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
}

// Profile Iterator
function profileIterator(profiles){
   let nextIndex = 0;

   return {
      next: function(){
         return nextIndex < profiles.length ? 
         { value: profiles[nextIndex++], done: false } : 
         {done: true};
      }
   };
}
