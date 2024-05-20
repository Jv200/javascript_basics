// template string/string template/template literals
//No, using template literals in JavaScript does not change the data type of other variables. 
//Template literals allow you to embed variables and expressions within strings in a more convenient and readable way, but they do not alter the underlying data types of the variables involved.

var numberVar = 42;
var stringVar = "world";

// Using template literals
var result = `${numberVar} ${stringVar}`;

console.log(result);
console.log(typeof result);   // data type will always be a string.
// Output: 42 world
//In this example, numberVar is a number, and stringVar is a string.
// The template literal ${numberVar} ${stringVar} allows you to create a new string that incorporates the values of these variables. However, it doesn't change the original data types of numberVar or stringVar. 
//They remain a number and a string, respectively.
