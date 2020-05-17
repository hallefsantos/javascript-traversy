// Form blur Event listeners
document.getElementById('name').addEventListener('blur', validadeName);
document.getElementById('zip').addEventListener('blur', validadeZip);
document.getElementById('email').addEventListener('blur', validadeEmail);
document.getElementById('phone').addEventListener('blur', validadePhone);


function validadeName(){
   const name = document.getElementById('name');
   const re = /^[a-zA-Z]{2,10}$/;
   test(name, re);
}

function validadeZip(){
   const zip = document.getElementById('zip');
   const re = /^[0-9]{5}-[0-9]{3}$/; //BR
   test(zip, re);
}
function validadeEmail(){
   const email = document.getElementById('email');
   const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/; //BR
   test(email, re);
}
function validadePhone(){
   const phone = document.getElementById('phone');
   const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
   test(phone, re);
}

function test(input, re){
   if(!re.test(input.value)){
      input.classList.add('is-invalid');
   } else {
      input.classList.remove('is-invalid');
   }
}

// Estava com 51 
