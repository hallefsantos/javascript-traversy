let re;

// Literal Characteres
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i; //Must start with
re = /world$/i; //Must ends with
re = /^hello$/i; // Must begin and end with
re = /^h...o$/i; // matches any one caracter
re = /h*llo/i; // matches any character 0 or more times
re = /gra?e?y/i; // Optinal character
re = /gra?e?y\?/i; // Escape Character


// string to match
const str = 'grey?';


// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str){
   if(re.test(str)){
      console.log(`${str} matches ${re.source}`);
   } else {
      console.log(`${str} does NOT matches ${re.source}`);
   }
}

reTest(re, str);