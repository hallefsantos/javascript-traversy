// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
  // Hide results
  document.getElementById('results').style.display = 'none';

  // show loader
  document.getElementById('loading').style.display = 'block';
  setTimeout(calculateResults, 1500);


  e.preventDefault();
});

// Calculate Results

function calculateResults(){

  // UI VARS
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const montlyPayment = document.getElementById('montly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculateInterest = parseFloat(interest.value) / 100 / 12;
  const calculatePayments = parseFloat(years.value) * 12;

  // Compute montly payment
  const x = Math.pow(1 + calculateInterest, calculatePayments);
  const monthly = (principal*x*calculateInterest)/(x-1);

  if(isFinite(monthly)){
    montlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly*calculatePayments).toFixed(2);
    totalInterest.value = ((monthly * calculatePayments) - principal).toFixed(2);

    // Show Results
    document.getElementById('results').style.display = 'block';

    // Hide loading
    document.getElementById('loading').style.display = 'none';

  }else {
    showError('Please check your numbers');
  }
}

function showError(error){
  // Hide loading
  document.getElementById('loading').style.display = 'none';

  // Create a div
  const errorDiv = document.createElement('div');

  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // add Class
  errorDiv.className = 'alert alert-danger';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds
  setTimeout(clearError, 3000);
  
}

function clearError(){
  document.querySelector('.alert').remove();
}