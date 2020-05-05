document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file (USING FUNCTION)
// function getText(){
//    fetch('text.txt')
//    .then(function(res){
//       return res.text();
//    })
//    .then(function(data){
//       // console.log(data);
//       document.getElementById('output').innerHTML = data;
//    })
//    .catch(function(err){
//       console.log(err);
//    });
// }

// Get local text file (USING ARROW FUNCTION)
function getText(){
   fetch('text.txt')
      .then( res => res.text())
      .then(data => {
         // console.log(data);
         document.getElementById('output').innerHTML = data;
      })
      .catch(err => console.log(err));
}

// Getr local json data
// function getJson(){
//    fetch('post.json')
//    .then(function(res){
//       return res.json();
//    })
//    .then(function(data){
//       console.log(data);
//       let output = '';
//       data.forEach(post => {
//          output += `<li><strong>${post.title}</strong><br>${post.body}</li>`;
//       });

//       document.getElementById('output').innerHTML = output;

//    })
//    .catch(function(err){
//       console.log(err);
//    });
// }
function getJson(){
   fetch('post.json')
   .then(res => res.json())
   .then(data => {
      console.log(data);
      let output = '';
      data.forEach(post => {
         output += `<li><strong>${post.title}</strong><br>${post.body}</li>`;
      });

      document.getElementById('output').innerHTML = output;

   })
   .catch(err => console.log(err));
}

// Get from external API
function getExternal(){
   fetch('https://api.github.com/users')
   .then(res => res.json())
   .then(data => {
      console.log(data);
      let output = '';
      data.forEach(user => {
         output += `<li><strong>${user.login}</strong>: ${user.id}</li>`;
      });

      document.getElementById('output').innerHTML = output;

   })
   .catch(err => console.log(err));
}