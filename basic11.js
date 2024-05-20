//comparison operator // always give boolean value
// ==
let a = 5;
let b = 2;

console.log('5==2',  a == b);
b= 5;
console.log('5==5', a==b); 

// !=
let x= 3;
let y = 2;
console.log('3 != 2', x != y);
y= 3 ;
console.log( '3 != 3', x != y);

//===
let num =5;   //number
let string ='5';   //string

console.log( num == string);  // true because javascript implicitly convert string to number before comparison

// but at times we dont want to compare number with a string for that we use
// ===
let num1= 3;
let string1 = '3';
console.log(num1 === string1);  // === checks for data type also
console.log(3 === '3');    
console.log(3 !== '3');   

//>,<,<=,>=
a= 5;
b= 2;
console.log('5>2', a>b);
console.log('5<2', a<b);
console.log('5>=2', a>=b);
console.log('5<=2', a<=b);

