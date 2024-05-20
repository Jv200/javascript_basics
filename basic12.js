//logical operator // give output in boolean
//&&(AND)
let a = 6;
let b = 5;

let condition1 = a > b ; //true
let condition2 = a === 6; //true
let condition3 = a === 5; // data type same h but value diff so false
let condition4 = a <b; // false
console.log(condition1 && condition2);  // dono true tbhi output true
console.log(condition1 && condition3);   // ek bhi false to output false

//||(OR)
console.log(condition1 || condition3);  // koi ek  bhi true hone se output true hoga
console.log(condition4 || condition3);   // dono false hone se false output hoga

// !(NOT)
console.log(!(condition4));  //false ---> true
console.log(!(condition1));  // true ---> false



