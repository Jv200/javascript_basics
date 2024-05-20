// datatypes

//1)strings
let string  = "coding2000#@4";
let string1 = "3000";   // this is a string
console.log (string);
console.log (string1);

//2) numbers
let number  = 25;
let number1 = 3000;    // this is a number
console.log (number);
console.log (number1);

//3) boolean
let boolean =true;
let boolean1=false
console.log(boolean1);
console.log(boolean);
console.log(typeof boolean);

//typeof operator (unary operator)
 let fullname = 'ayushi';
 let data     =  50;
 console.log (typeof fullname);   // operand is variable name //fullname me knsa type ka data h
 console.log (typeof data);                                   // data me kis type ka data h
 console.log (typeof 'ayushi');   //operand is actual data  // data ka type ky h
 console.log (typeof 50);          // 50 kis type ka data h

 //typeof as a function
 let num = 30;
 typeof(num);     
 console.log(typeof(num));

 //4)undefined
 let x;    // variaable me no value
 console.log(x);
 console.log(typeof x);

 //5) null
 let y= null;
 console.log(y);
 console.log(typeof null);         // data type is object that means there's an absence of object
 console.log(typeof y);

 // object 
 let student ={
    fullName : 'jahnavi',    //fullName is key and jahnavi is value
    age : 22,                // age is key and 22 is value
    marks : 60,
    pass:true
 };
 console.log(student);
 console.log(typeof student);
 // object with const keyword cannot make a new object(no full updation) but the keys of that particular object can be updated

 // how to access object's keys?
 //1) student.key;
 //2)student["key"];