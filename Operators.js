/*
=
+=
-=
*=
/=
%=
*/

let a = 2 ;
a+=4
console.log(a)

let b = 3 ;
b-=2
console.log(b)

let c = 3 ;
c*=3
console.log(c)

let d = 10 ;
d%=5//gives reminder
console.log(d)

let e = 10 ;
e/=5//gives quotient
console.log(e)

//---------------------------------------------------------------
/*
***Comparison operators ***
== - Compares only content 
=== - Compares data type + content 
*/
/*let sal1 = 100 // integer
let sal2 = '100' // String
console.log(sal1==sal2)*/

let sal1 = 100
let sal2 = '100'
console.log(sal1===sal2)

console.log(5>10)
console.log(5<10)
console.log('567'!== 567)

console.log(null == undefined) //true

console.log(null === undefined) //false

//logical operators  && - and condition checks ,True on both sides ,   || - OR condition ,either one is true 

console.log(10>5 && 20>10)

console.log(10>20 || 20>10)

console.log(!(10>5)) // condition is true  but ! operator changes to false 

//string operator
console.log('Ram'+2)
console.log('10'-2)//returns 8 ,by converting string '10' to number and subtracting 2

console.log('Ram' -2)//returns Nan

//Increment or decrement operator
//++ => by 1
//-- => by -1

let number =8
console.log(number++)
console.log(number)

let number2 =10
console.log(++number2)
console.log(number2)

//Ternery operator 
let marks = 30
let result
result = marks>40 ? "Pass" : "Fail"
console.log(result)