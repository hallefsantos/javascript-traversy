// Botão enviar
const btnEnvia = document.getElementById('btnEnvia');
const erro = document.querySelector('.erro');

// Submit do botão chama qualquer função
btnEnvia.addEventListener('click', enviaForm);

function enviaForm() {

   /*
      faz toda sua verificação e add um if verificando se o style do botão ta block, deixei como 'none' via css e qndo clica no botão muda para block;
   */
   erro.style.display = "block";


   if (erro.style.display === 'block') {
      // quando o erro aparece chama alguma função que vc quer executar.
      // console.log('dsdsd');
      algumaCoisa();
   }
}

function algumaCoisa(){
   const texto = document.createElement('h2');
   texto.innerText = "Função faz alguma coisa blablabla"
   document.querySelector('.container').appendChild(texto);
}