// Init Storage
const storage = new Storage();
// Get stored Location data
const weatherLocation = storage.getLocationData();

console.log(weatherLocation);

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
const ui = new UI;

// weather.changeLocation('Quixadá', 'Ceará');

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location Event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
   let city = document.getElementById('city').value;
   let state = document.getElementById('state').value;

   // Change location
   weather.changeLocation(city, state);

   // Set location in LS
   storage.setLocationData(city, state);

   // Get and display weather
   getWeather();

   // Close modal
   $('#locModal').modal('hide');

});


function getWeather(){
   weather.getWeather()
   .then(results => {
      ui.paint(results);
      console.log(results);
   })
   .catch(err => console.log(err));
}


