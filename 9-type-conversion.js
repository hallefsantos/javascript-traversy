let val;

// Number to string
val = String(2222);
val = String(4+4);

// Bool to string
val = String(true);

// Date to string
val = String(new Date());

// Array to String
val = String([1,2,3,4]);

// toString
val = (5).toString();
val = (true).toString();


// String to number
val = Number('5.123121212');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('Hello');
val = Number([1,2,3,4,5]);

val = parseInt('100.30');
val = parseFloat('100.30')

// Output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed());
