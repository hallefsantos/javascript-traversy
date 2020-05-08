class Weather{
   constructor(city, state){
      this.apiKey = 'af0c3de7a083b6a00826ee7242130ee1';
      this.city = city;
      this.state = state;
   }

   // Fetch weather from API
   async getWeather(){
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.city}&APPID=${this.apiKey}&lang=pt_br&units=metric`);

      const responseData = await response.json();

      return responseData;
   }

   // change weather location
   changeLocation(city, state){
      this.city = city;
      this.state = state;
   }
}