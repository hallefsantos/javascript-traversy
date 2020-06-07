// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function (e) {
  // Hide results
  document.getElementById('results').style.display = 'none';

  // show loader
  document.getElementById('loading').style.display = 'block';
  setTimeout(calculateResults, 1500);


  e.preventDefault();
});

// Calculate Results

function calculateResults() {

  // UI VARS
  const valorFinanciar = document.getElementById('valor-financiar');
  const primeiraParcela = document.getElementById('primeira-parcela');
  const inputAmortizacao = document.getElementById('amortizacao');
  const rendaMinima = document.getElementById('renda-minima');

  // const principal = parseFloat(amount.value);
  // const calculateInterest = parseFloat(interest.value) / 100 / 12;
  // const calculatePayments = parseFloat(years.value) * 12;

  // const amortizacao = parseFloat(valorFinanciar.value / 360);
  // const juros = parseFloat(((7 / 100) / 12) * valorFinanciar.value);

  // const parcela = amortizacao + juros;
  // const logrendaMinima = (parcela * 100) / 30;

  // garantia de imóvel
  // let resultado = ;

  // const jurosParcela = parseFloat(valorFinanciar.value *(8/100));
  // const resultado = (valorFinanciar.value / 5) + jurosParcela;

  const juros = 1;
  const meses = 360;

  let jurosCen = juros/100;
  const cf = jurosCen / (1-(1/(Math.pow((1 + jurosCen), meses))));

  let resultado = 200000 * cf;

  console.log(resultado.toFixed(2));
  
  



  // const x = Math.pow(1+ calculateInterest, 360);

  // console.log(resultado.toFixed(2));

  


  // primeiraParcela.value = parcela;
  // inputAmortizacao.value = amortizacao;
  // rendaMinima.value = logrendaMinima;

  // Show Results
  document.getElementById('results').style.display = 'block';

  // Hide loading
  document.getElementById('loading').style.display = 'none';

}