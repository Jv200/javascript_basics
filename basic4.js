// string methods 
// Camel case is a way of writing phrases without spaces, where the first letter of each word is capitalized, except for the first letter of the entire compound word, which may be either upper or lower case.

// Upper Camel Case (Pascal Case):
// FirstName, LastName, MasterCard, InterCity.

// Lower Camel Case:
// firstName, lastName, masterCard, interCity.

// all methods name are written in camel case

//1) toUpperCase()
let string ="jahnavi";
string.toUpperCase();
console.log (string);               // no changes to the orignal string // if that were the case then this line would have printed JAHNAVI
console.log (string.toUpperCase()); // a new string is created

// why new string is created ---> because in javascript the string is immutable ---> no changes 
// even for smallest changes a new string is created

//2) toLowerCase()
let string1="SHamBHAVi";
string.toLowerCase();
console.log (string1.toLowerCase());
console.log (string1); 

//3) trim()
let string2 ="     jahnavi  is  20  now  ";
string2.trim();
console.log (string2.trim());
console.log (string2);

//4)slice(starting index,ending index)
let string3 ="01234567";
console.log (string3.slice(1,6));   // last index is not inclusive
let string4 ='hello';
console.log (string4.slice(1));    //last index is optional
console.log (string4.slice());    // atleast starting index pass krna hi chaiye 

//5)1st string name .concat( 2nd string name)
let stringpart1  = "jahnavi";
let stringpart2  = "verma";

let concatenated_string = stringpart1.concat(stringpart2);    // variable me store kr lo
console.log (concatenated_string);

let concatenated_string2 = stringpart2.concat(stringpart1);     //part 2 pehle ,part 1 bad me
console.log (concatenated_string2);

// above method me 2 se zada strings ka concatenation POSSIBLE hai

//6) charAt(position)
//7) chatCodeAt(position)  all three methods used for accessing character of a particular index in a string
//8) at(position)

let text = "HELLO WORLD";
console.log(text.charAt(4));         // it returns character

let text1 = "HELLO WORLD";
console.log(text1.charCodeAt(4));   // it return code of character 

let num = "jahnavi";
console.log(num.at(6));              // it returns character,latest feature