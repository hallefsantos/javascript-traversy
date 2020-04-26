const lamps = document.getElementById('lamp');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
   btn.addEventListener('click', switchLamp);
});

function switchLamp(e){
   if(e.target.id === 'btn-on') {
      lamps.classList.add('active');
   } else {
      lamps.classList.remove('active');
   }
}