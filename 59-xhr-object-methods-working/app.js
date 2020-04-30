document.getElementById('button').addEventListener('click', loadData);

function loadData() {
   // Create an XHR Object
   const xhr = new XMLHttpRequest();
   // console.log('READY STATE', xhr.readyState);


   
   xhr.open('GET', 'data.txt', true);
   // console.log('READY STATE', xhr.readyState);

   // Optional - Used for spinners/loaders
   xhr.onprogress = function(){
      console.log('READY STATE', xhr.readyState);
   }

   xhr.onload = function () {

      if (this.status === 200) {
         document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
      }
   }

   // xhr.onreadystatechange = function(){
   //    console.log('READY STATE', xhr.readyState);
   //    if(this.status === 200 & this.readyState === 4) {
   //       let data = JSON.parse(this.response); 
   //       console.log(data);
         
   //    }
   // }

   xhr.onerror = function(){
      console.log('Request error...');
   }

   xhr.send();

   // readyState Values
   // 0: request not initialized
   // 1: server connection established
   // 2: requeste received
   // 3: processing request
   // 4: request finished and response is ready


   // HTTP Statuses
   // 200: 'OK'
   // 403: 'Forbidden'
   // 404: 'Not Found'

}