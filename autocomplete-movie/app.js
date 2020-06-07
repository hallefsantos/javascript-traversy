const search = document.getElementById('search'),
      matchList = document.getElementById('match-list'),
      modal = document.getElementById('filme');

// Event listener
matchList.addEventListener('click', moreInfos);

// Search movies.json and filter it
const searchStates = async searchText => {
   const apiKey = 'ab872c8346e93a873401a241a30f8c44'; 
   const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchText}&include_adult=false`);

   const movies = await res.json();

   // Get Matches to current text input
   let matches;

   if (searchText.length >= 1) {
      matches = movies.results.filter(movie => {
         const regex = new RegExp(`^${searchText}`, 'gi');
         return movie.title.match(regex);
      });
   } else {
      matches = [];
      matchList.innerHTML = '';
   }
   outputHtml(matches);
};

const outputHtml = matches => {
   if (matches.length > 0) {
      const poster = './movie.jpg';
      const html = matches.map(match => `
         <div class="card mb-3 px-md-2 px-0" id="${match.id}">
            <div class="row no-gutters align-items-center">
               <div class="col-lg-2 col-md-4 col-4">
                  
                  <img src="${(match.backdrop_path) ? "https://image.tmdb.org/t/p/w200/"+match.backdrop_path : poster}" class="card-img" alt="${match.title}">
               </div>
               <div class="col-lg-10 col-md-8 col-8">
                  <div class="card-body">
                  <h5 class="card-title">${match.title}</h5>
                  <button type="button" class="btn btn-primary mt-2" data-toggle="modal" data-target="#filme">Details</button>
                  </div>
               </div>
            </div>
         </div>
      `).join('');
      matchList.innerHTML = html
   }
}

function moreInfos(e){
   const seeMoreBtn = e.target;

   if(seeMoreBtn.classList.contains('btn')){
      const card = seeMoreBtn.parentElement.parentElement.parentElement.parentElement;
      const movieId = card.id;

      searchMovie(movieId)
         .then(data => fillModal(data));
      
   }
}


async function searchMovie(movieId) {
   const res2 = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=ab872c8346e93a873401a241a30f8c44`);
   const movie = await res2.json();
   return (movie);
}

function fillModal(data){

   let genres = '';
   data.genres.forEach(genre => {
      genres += `<span class="badge badge-pill badge-warning mx-1">${genre.name}</span>`;
   });


   let html = `

      <div class="modal-content">
         <div class="modal-header">
         <h5 class="modal-title" id="filmeLabel">${data.original_title}</h5>
         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
         </button>
         </div>
         <div class="modal-body">
            <div class="row">
               <div class="col-md-4">
                  <img class="img-fluid mb-3 md-0" src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="">
               </div>
               <div class="col-md-8">
                  <p class="text-justify">${data.overview}</p>

                  <div class="mb-3">${genres}</div>

                  <ul class="list-group">
                     <li class="list-group-item"><i class="fas fa-globe-europe"></i> Website: <a href="${data.homepage}" target="_blank">${data.homepage}</a></li>
                     <li class="list-group-item"><i class="far fa-calendar-alt"></i> Release Data: ${data.release_date}</li>
                     <li class="list-group-item"><i class="far fa-file-alt"></i> Tagline: ${data.tagline}</li>
                     <li class="list-group-item"><i class="fas fa-poll"></i> Vote Average: ${data.vote_average}</li>
                  </ul>
                  
               </>
            </div>
         </div>
         <div class="modal-footer">
         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
         </div>
      </div>
   `;

   modal.querySelector('.modal-dialog').innerHTML = html;  
}

search.addEventListener('input', () => searchStates(search.value));