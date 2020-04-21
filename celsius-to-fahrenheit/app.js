// Define UI Vars
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const btnClear = document.getElementById('btn-clear');
const linkModal = document.getElementById('link-modal');
const modalDialog = document.querySelector('.nes-dialog');
const btnDialog = document.querySelector('.btn-dialog');

// Defalut values
defaultInputs();

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners(){
   celsiusInput.addEventListener('keyup', calcToFahrenheit);
   fahrenheitInput.addEventListener('keyup', calcToCelsius);
   btnClear.addEventListener('click', defaultInputs);
   linkModal.addEventListener('click', modal);
   btnDialog.addEventListener('click', modal);
}

function calcToFahrenheit(e){

   var keycode = e.which;
   const result = parseFloat(((e.target.value * 1.8) + 32).toFixed(2));
   fahrenheitInput.value = result;

   if (!(e.shiftKey == false && (keycode == 46 || keycode == 8 || keycode == 37 || keycode == 39 || (keycode >= 48 && keycode <= 57)))) {
      showError('Please put into only numbers!');
  } else {
     const errorMessage = document.querySelector('.is-error');
      if (errorMessage !== null) {
         errorMessage.remove();
      } else {
         return;
      }
  }
}

function calcToCelsius(e){
   // const result = parseFloat(((e.target.value * 1.8) + 32).toFixed(2));
   console.log(e.target.value);
   const result = parseFloat(((e.target.value-32) / 1.8).toFixed(2));
   celsiusInput.value = result;
}

function showError(error){
   const errorMessage = document.querySelector('.is-error');

   if (errorMessage === null) {
      const errorMessage = document.createElement('span');

      // add Class
      errorMessage.className = 'nes-text is-error';
      errorMessage.appendChild(document.createTextNode(error));
   
      // get elements
      const nesContainer = document.querySelector('.nes-container');
   
      // Append error to container
   
      nesContainer.appendChild(errorMessage);
      
      // Clear error after 3 seconds
      setTimeout(clearError, 2000);
   }
}

function clearError(){
   document.querySelector('.is-error').remove();
 }

 function defaultInputs(){
   celsiusInput.value = 0;
   fahrenheitInput.value = 32;
 }

 function modal(){

   if(modalDialog.classList.contains('active')){
      document.body.classList.remove('dialog-active');
      modalDialog.classList.remove('active');
      console.log(true);
   } else {
      document.body.classList.add('dialog-active');
      modalDialog.classList.add('active');
      console.log(modalDialog);
   }

 }