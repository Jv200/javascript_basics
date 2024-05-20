//string concatenation
//1) using + operator       

let name1  = 'jahnavi';
let name2  = 'verma';
let result =  name1 +name2;
console.log (result);           
console.log (result + 'is fine');                     // string + string
console.log (name1 + " " + name2 + 'is fine' ) ;      // string + string+string 
console.log ('JAHNAVI'+ 'VERMA');                     // string + string

let num    = 30;
let string = "javascript";
console.log (num + string);

let num1    =  40;
let string1 = "javascript";
console.log (string + num);

console.log ( string + num+ num1);   // num and num1 string me convert ho jyega
console.log (num+ num1+ string);     //left to right execution k karan pehle num add hoga fir string se concatenation k pehle string me convert ho jyega    

//2)using concat()                                    // data type conversion ny hota
//3) template literal (in next file)                  // data type conversion ny hota implicitly


// In JavaScript, when you concatenate  a string with any other data type (such as a number or boolean) using + operator, the result will be a string. 
// JavaScript will  AUTOMATICALLY convert the non-string data types into strings before performing the concatenation.(implicitly converted)

// kisi bhi variable ko string k sath concatenate krne k lie string bnna pdta 
//The + operator is used for string concatenation when one or both of the operands are strings.
// If one of the operands is not a string, JavaScript will implicitly convert it to a string for the concatenation operation. 
//However, this conversion does not change the original variable's data type.