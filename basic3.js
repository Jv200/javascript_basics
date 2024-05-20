//strings
// how to create strings?
 let string1 =  "rohit"; // declaring 
 let string  =  'Jahnavi';   // declaring
 let string3 =  ' diya 2001$ ';   // string count spaces too 
 let string4 =  "";     // empty string with no character
 let string5 =  " ";      // not an empty string as spaces are also a character in js
 console.log (string1);
 console.log (string);
 console.log (string3);
 console.log (string4);
 console.log (string5);



 //length of string
 //string1.length  // displaying length of string
 //string.length
 console.log (string.length);
 console.log (string1.length);     // printing length of string
 console.log (string3.length);
 console.log (string4.length);
 console.log (string5.length);

 //string indexing
 //(singular form)/ indices (plural form)

 let string_ = "jahnavi2001";   //declaring string
 //  j a h n a v i 2 0 0 1
 //  0 1 2 3 4 5 6 7 8 9 10       the indexing starts from 0

string_[4];    // finding character at a particular index method

console.log(string_[4]); //a
console.log(string_[10]); 
console.log(string_[6]);


// STRING LENGTH GIVES VALUE BUT STRING METHODS DO SOME WORK 

//STRING WORKS WITH QUOTES INSIDE QUOTES BUT THEY SHOULD BE DIFFERENT
let ans = "He is called 'Johnny'";
let ans1= 'He is called "Johnny"';
console.log(ans);
console.log(ans1);