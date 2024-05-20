//Ternary operator also called conditional operator
 console.log(20>0?true:false);
 console.log(20>0?1:0);
 console.log(20>0?0:1);
 console.log(20>0?20:11);
 console.log(20>0?'diya':'jiya');
// so ? iske bad true(agr condition true h to ye print hoga)  and : iske bad false (agr condition false h to is place pe jo bhi h vo print hoga)

console.log(15-15? 'left' :'right'); // right execute hoga kyuki condition false h
//false kaise h?
//falsy values in js are 0,null,false,etc
//example
console.log(null ?true :false);
console.log(false?true :false);
console.log(0 ?true :false);
console.log( 1 ?true :false);
console.log(2 ?true :false); // all non falsy values are true values
console.log(20-5?true :false);
console.log(NaN ?true :false);
console.log(1000 ?true :false);


