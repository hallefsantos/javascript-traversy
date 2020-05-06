/** 
 * EasyHTTP Library
 * Library for making http requests
 * 
 * @version 2.0.0
 * @author Hallef Santos
 * @licene MIT
 * 
 **/

class EasyHTTP {

   // make an http get request
   get(url) {
      return new Promise((resolve, reject) => {
         fetch(url)
         .then(res => res.json())
         .then(data => resolve(data))
         .catch(err => reject(err));
      });
   }

   // Make an HTTP POST Request
   post(url, data) {
      return new Promise((resolve, reject) => {
         fetch(url, {
            method: 'POST',
            headers: {
               'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(data)
         })
         .then(res => res.json())
         .then(data => resolve(data))
         .catch(err => reject(err));
      });
   }

   // Make an HTTP PUT Request
   put(url, data) {
      return new Promise((resolve, reject) => {
         fetch(url, {
            method: 'PUT',
            headers: {
               'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(data)
         })
         .then(res => res.json())
         .then(data => resolve(data))
         .catch(err => reject(err));
      });
   }


   // Make an HTTP DELETE Request
   delete(url) {
      return new Promise((resolve, reject) => {
         fetch(url, {
            method: 'DELETE',
            headers: {
               'Content-type': 'application/json; charset=UTF-8'
            }
         })
         .then(res => res.json())
         .then(() => resolve('Resource deleted'))
         .catch(err => reject(err));
      });
   }
}