const http = new easyHTTP();


// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
//    if (err){
//       console.log(err);
//    } else {
//       console.log(posts);
//    }
// });


// Get single post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, posts){
//    if (err){
//       console.log(err);
//    } else {
//       console.log(posts);
//    }
// });


// Create DATA
// const data = {
//    title: 'Custom Post',
//    body: 'This is a custo post'
// }

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
//    if (err){
//       console.log(err);
//    } else {
//       console.log(post);
//    }
// });

// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(err, post){
//    if (err){
//       console.log(err);
//    } else {
//       console.log(post);
//    }
// });

// Delete Posts
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, posts){
   if (err){
      console.log(err);
   } else {
      console.log(posts);
   }
});