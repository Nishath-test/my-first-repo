
//console.log(numarr[2]) //retrieving 
let numarr=[10,20,30]

//console.log(numarr.length) //retrieving legth
console.log(numarr[numarr.length-1])
console
//push - add to thde last
//pop - remoes last  element from array and returns it
let numarr=[10,20,30]
console.log(numarr.pop())
console.log(numarr)

//shift - removes and rerun the array
let numarr=[10,20,30]
console.log(numarr.shift())
console.log(numarr)
//unshift - adds in the front 
let numarr1=[10,20,30]
console.log(numarr1.unshift(60,70))
console.log(numarr1)

//includes - number available in array for not 

let numarr2=[10,20,30]
if (numarr2.includes(10)){
    console.log('number is present in an array')
}
    else {
        console.log('number is not present in an array') 

    } 
    // index of
    let numarr2=[10,20,30,40,50,60]
console.log(numarr2.indexOf(40))

// slice
    let numarr2=[10,20,30,40,50,60]
    let result
    result = console.log(numarr2.slice(2,4))

    //concat
    let numarr4=[2,4,6,8,10]
  let numarr5=[12,14]
  console.log(numarr4.concat(numarr5))
  console.log(numarr4)
   
//reverse
let numarr6=[5,6,7,8]
numarr6.reverse()
console.log(numarr6)

//sort -mutate
//comparator is used only for numbers (a,b)=>(a-b)

let numarr7 =[89,25,1,-1,70]
numarr7.sort((a,b)=>(a-b))
console.log(numarr7)


// even strings can be aorted strings=[bmw,anc,ferrai]
let strings=['bmw','anc','ferrai']
strings.sort()
console.log(strings)

//iteration
let numarr8=[2,4,6,8,10]
for(let i=0;i<=numarr8.length;numarr8++)
{
    console.log(numarr8[i])
}
let (num of numarr8)
{
    console.log(num)
}

let numarr8=[2,4,6,8,10]
numarr8.forEach((a)=>{
    console.log(a)
}
)
