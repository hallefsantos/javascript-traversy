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

// Brackets [] -Character Sets
re = /gr[ae]y/i; // Must be an a or e.
re = /[GF]ray/; // Must be an G or F.
re = /[^GF]ray/; // Match anything except a G or F
re = /[a-z]ray/; // Match any uppercase letter
re = /[A-Z]ray/; // Match any lowercase letter
re = /[A-Za-z]ray/; // Match any letter
re = /[0-9]ray/; // Match any digit


// Braces {} - Quantifiers
re = /Hel{2}o/; // Musc occur exactly {m} ammount of times
re = /Hel{2,4}o/; // Musc occur exactly {m} ammount of times
re = /Hel{2,}o/; // Musc occur at least {m} times

// Paretheses () - Grouping
re = /^([0-9]x){3}$/; // Musc occur at least {m} times

// Shorthand Character Classes
re = /\w/; //Word character - alphanumeric or _
re = /\w+/; // + = one or more
re = /\W+/; // Non-word character
re = /\d/; // Match any digits
re = /\d+/; // Match any digit 0 or more times
re = /\D/; // Match any Non-digit
re = /\s/; // MAtch whitespace char
re = /\S/; // MAtch Non-whitespace char
re = /Hell\b/i; // Word boundary

// Assertions
re = /x(?=y)/; //Match x only if followed by y
re = /x(?!y)/; //Match x only if NOT followed by y

// string to match
const str = 'awerrettrex';


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