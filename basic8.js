//type conversion

//string to number
// Number() and + operator used to convert a variable/value into number(many more methods too )
//Number()  ---> it converts string into numeric value

let string  = 'jahnavi';  //  not a number (NaN)
let string1 = '1234';     // number
let string2 =  "";        //empty string as 0
let string3 =  "  ";      // ignore whitespace and consider it o
let string4 =  "$#%%^";   // not a number
let string5 =  "007";     // ignore leading zeros

Number(string);
Number(string1);
Number(string2);
Number(string3);
Number(string4);
Number(string5);

console.log(Number(string));
console.log(Number(string1));
console.log(Number(string2));
console.log(Number(string3));
console.log(Number(string4));
console.log(Number(string5));
console.log(Number('jahnavi'));    // directly

//using + operator ----> it converts string into numeric value
console.log(+'2345');
console.log(+'jahnavi');
let string6= 'diya';
console.log(+ string6);
//  can make variables and print them

// numbers to string
// String() ----> converts numeric value to string
console.log(String(123));
console.log(String( ));  
console.log(String(100+ 23));
console.log(String(0));
