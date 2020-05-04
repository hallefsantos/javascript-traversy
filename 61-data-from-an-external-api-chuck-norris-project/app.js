document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){

   const number = document.querySelector('#number').value;

   const xhr = new XMLHttpRequest();

   xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

   const progress = document.getElementById('progress');

   xhr.onprogress = function (e) {
      // document.getElementById('loading').innerText = 'Loading';
      progress.max = e.total;
      progress.value = e.loaded;

   };

   xhr.onload = function(){
      if(this.status === 200) {
         const response = JSON.parse(this.responseText);
         
         let output = '';

         if(response.type === 'success'){

            response.value.forEach(joke => {
               output += `
                  <li>
                     <strong>ID:</strong> ${joke.id} || 
                     <strong>Joke:</strong> ${joke.joke}
                  </li>
               `;

               // console.log(joke.categories);
            });
         } else {
            output += '<li>Something went wrong</li>'
         }

         document.querySelector('.jokes').innerHTML = output;
         
      }
   }
   xhr.send();

   e.preventDefault();

  
}