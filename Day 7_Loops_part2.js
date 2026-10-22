
///Loops with array
let arr =[1,2,3]
for(i=0;i<=arr.length;i++){
    console.log(arr[i])
}

for(let num of arr){
    console.log(num)
}


let arr = [1,2,3,4,6]
for(let num of arr){
    if(num%2==0){
        console.log(num+'Is even number')}
        else{
            console.log(num+'Is even number')}
        }
    
//printing count of even numbers and odd
let countofevennumbers = 0
let countofoddnumbers = 0
let arr = [1,2,3,4,6]
for(let num of arr){
    if(num%2==0){
        console.log(num+ 'Is even number')
        countofevennumbers++
        
    }
        else
            {
            console.log(num+ 'Is odd number')
            countofoddnumbers++
            
        }
}
console.log(countofevennumbers+' Even numbers')
console.log(countofoddnumbers+' Odd Numbers')


let empname = 'Nisha'
for(let char of empname){
    console.log(char)
}


let empname = 'Nisha'
let i
for(i=0;i<empname.length;i++)
{
    
    console.log(empname[i])
}


//printing only vowels

let empname = 'Nisha'
for(let char of empname){// returns values
    if(char =='a' || char == 'e' || char == 'i' || char =='o' || char =='u')
    console.log(char)
    
}   
//for in - returns  indexes
let empdetail={
    name : 'Nisha',
    address : 'Singapore'
}
for (let key in empdetail)
{
    console.log(key + ' value is ' +empdetail[key])
    //console.log(empdetail[key])

}