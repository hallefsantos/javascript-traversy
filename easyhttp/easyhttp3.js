/** 
 * EasyHTTP Library
 * Library for making http requests
 * 
 * @version 3.0.0
 * @author Hallef Santos
 * @licene MIT
 * 
 **/

class EasyHTTP {

   // make an http get request
   async get(url){
      const response = await fetch(url);
      const resData = await response.json();
      return resData;
   }

   // Make an HTTP POST Request
   async post(url, data) {
      const response = await fetch(url, {
         method: 'POST',
         headers: {
            'Content-type': 'application/json; charset=UTF-8'
         },
         body: JSON.stringify(data)
      });
      const resData = await response.json();
      return resData;
   }

   // Make an HTTP PUT Request
   async put(url, data) {
      const response = await fetch(url, {
         method: 'PUT',
         headers: {
            'Content-type': 'application/json; charset=UTF-8'
         },
         body: JSON.stringify(data)
      });

      const resData = await response.json();
      return resData;
   }


   // Make an HTTP DELETE Request
   async delete(url) {
      const response = await fetch(url, {
         method: 'DELETE',
         headers: {
            'Content-type': 'application/json; charset=UTF-8'
         }
      });
      const resData = await 'Response Deleted';
      return resData;
   }
}