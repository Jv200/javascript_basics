// variables
// variable name also called identifier
// variable naming
// 1) case sensitive 
fullname = "diya";   // f and F both are different
Fullname = "jahnavi";
console.log (fullname);
console.log (Fullname);

// 2) letter ,digits , $ ,underscores allowed , no sapces
fullname    ="diya";
fullname123 ="jiya";
fullname$   ="riya";
full_name   ="siya";
console.log(fullname);
console.log(fullname123);
console.log(fullname$);
console.log(full_name);

// 3) frst character should be letter,$,_ , no digits allowed
fullname  = "aman";
_fullname = "naman";
$fullname = "raman";
console.log(fullname);
console.log(_fullname);
console.log($fullname);

// reserved words or keywords are words in the dictionary of javascript , they are defined in js 
// no keywords can be used as variable name
// by convention we should write fullname as  fullName (camel case)

// IN ABOVE CODE WE HAVE WRITTEN DIRECTLY VARIABLE NAME , BUT WE SHOULD ALWAYS ADD A KEYWORD BEFORE VARIABLE NAME
// KEYWORDS - let ,const ,var

// var  // redeclared and updated
var age = 24;
var age = 52;
console.log(age);   

//let // not redeclared only updated
let height =24;
height     =56;
console.log(height);

// const // not redeclared not updated
const num =25;
console.log(num);

let a;  
const b =20;  // always needs to intialize  at the time of declaration