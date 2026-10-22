// splice (start,deletecount,item 1 ,item 2 )
let numchar=[1,2,3,3,4]
numchar.splice(2,2)// starting 2 (i.e) 3 number is in 2nd position and then delete 2 characters (i.e)
//3,3 - Output is [1,2'4]
console.log(numchar)


let numchar=[1,2,3,3,4]
numchar.splice(5,0,5)// added the element , here at the 5th position , 0-denotes no deletion , 5 at the end is the number to be added at thet mentioned position that is first number in the bracket 5 
console.log(numchar)

let arr1 = [1,2,3,4]

let newarr = arr1.map(Element=> Element +2)
console.log(newarr)
//filter

let arr1 = [1,2,3,4]

let newarr = arr1.filter(num => num%2===0)
console.log(newarr)

//reduce => reduce your output to single value
let arr2 = [20,30,40,50] //sum = 0  sum = sum +element
//array.reduce((accumulator,element,index,array)=> logic,initialvalue)
let sum = arr2.reduce((result,num)=>result+num,0) // result =3
console.log(sum)


let arr = [1, 2, 3];  
let result = arr.toReversed(); 
console.log(arr); 
console.log(result);

Which is the non-mutating counterpart of splice()?
A. toSpliced()
B. spliceNew()
C. newSplice()
D. copySplice()