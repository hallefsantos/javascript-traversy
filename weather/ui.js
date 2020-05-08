class UI{
   constructor(){
      this.location = document.getElementById('w-location');
      this.desc = document.getElementById('w-desc');
      this.string = document.getElementById('w-string');
      this.details = document.getElementById('w-details');
      this.icon = document.getElementById('w-icon');
      this.humidity = document.getElementById('w-humidity');
      this.min = document.getElementById('w-min');
      this.max = document.getElementById('w-max');
      this.feelsLike = document.getElementById('w-feels-like');
      this.wind = document.getElementById('w-wind');
   }

   paint (weather){
      this.location.textContent = `${weather.name} / ${weather.sys.country}`
      this.desc.textContent = weather.weather[0].description;
      this.string.textContent = `${weather.main.temp}°`;
      this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
      this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
      this.min.textContent = `Min: ${weather.main.temp_min}°`;
      this.max.textContent = `Max: ${weather.main.temp_max}°`;
      this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}°`;
      this.wind.textContent = `Wind: ${weather.wind.speed}`;
   }
}