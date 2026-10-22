//1)Declaration
// let city = "Eunos"; /***Let is the declaration and city is the variable name  */
// // city = "singapore";
// let country = "chennai";
// console.log(city);

// var city //** var declaration is not used in the program , as it allows the same variable to be used again in the program example city 

// city = "singapore";
// var city  = "chennai";
// console.log(city);

const city = "singapore"//**constant needs to intialised and assigned at the first line itself 
//city = "singapore";
// // let country = "chennai";
console.log(city);

console.log(Number.MAX_VALUE) //**to know max decimal number allowed
console.log(Number.MAX_SAFE_INTEGER) //** */ to know max number allowed 
let a = 9007199254740992n // **If greater than max integer to be declared should declare as n at the end 
console.log(typeof a)// **If need to check data type can use typeof

let object = null
console.log(object)
console.log(typeof (object))

/* Two type of data types
1. Primitive - store single value
2.Non primitive - store multiple value

Types of Primitive data type - will be stored in stat
1)Integer
2)Bigint
3)Boolean
4)Null
5)String

Types of Non Primitive data type - will be stored in heap   
1)Object
2)Array
3)function
*/