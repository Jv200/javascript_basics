//1)
let string = 'jahnavi';
let num = 2;
let add = string + num;
console.log(add);

// we can also do this by only making string variable
let string1= 'jahnavi';
let add1 = string1 +2;
console.log(add1);

//by not making any variable 
console.log('diya' +2);

//2)
console.log(typeof add);               //string
console.log(typeof add1);              //string
console.log(typeof ('diya'+2));        //string
console.log(typeof (2+'diya'));        //string
console.log(typeof (2+3+'diya'));      //string

//3)
let object =
{
    fullName :'jahnavi',
    num :20,
}; 
object =20;               //updation from object to number 
console.log(object);      //20
console.log(typeof object);

const object1 = 
{
    fullname : 'diya',
    num : 21,
};
//object1 = 'object to string';   //updation of varible cant be done as const keyword was used
console.log(object1);
console.log(typeof object1);

//4
//5

