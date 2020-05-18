// $(document).ready(function() {

//    const $valueSpan = $('.valueSpan2');
//    const $value = $('#customRange11');
//    $valueSpan.html($value.val());
//    $value.on('input change', () => {
 
//      $valueSpan.html($value.val());
//    });
//  });

//  A PARTIR DAQUI
const range =document.getElementById('customRange11');
range.addEventListener('input', verificaRange);
range.addEventListener('input', e => {
	range.style.setProperty('--val', + range.value);
}, false);



function verificaRange(e){
   let valor = e.target.value;

   if(valor < 12.5) {
      mudaCor('red');
      mudaJuros('1%')
   } else if(valor < 25){
      mudaCor('green');
      mudaJuros('0.875%')
   } else if(valor < 37.5){
      mudaCor('blue');
      mudaJuros('0.75%')
   } else if(valor < 50){
      mudaCor('pink');
      mudaJuros('0.625%')
   } else if(valor < 100){
      mudaCor('orange');
      mudaJuros('0.5%')
   } else {
      mudaCor('black');
      mudaJuros('0.375%')
   }
}

function mudaCor(cor){
   document.documentElement.className = '';
   document.documentElement.classList.add('color-'+cor);
}

function mudaJuros(juros){
   document.querySelector('.box-juros').textContent = juros;
}

