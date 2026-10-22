//Loops = until some condition is true

/*1)For loop 
for(initialization;condition;increment/decrement /update)
initialization  - Executes only once 
condition - checks every time
increment/decrement/update  -- i++ 
2)while loop
3)do while loop
 
//print 10 numbers*/
let i;
 for (i=1;i<=10;i++){
    console.log(i)
 }
 
 //prime numbers from 1 to 10

 let j;
 for (j=1;j<=10;j++){
    if(j%2===0){
        console.log(j)
    }
    
 }
 
//print even numbers 
 let k;
 for (k=2;k<=10;k+=2){// for (k=2;k<=10;k=k+2)
    console.log(k)
 }
 

 //sum of first 10 numbers
 let n=10;
 let l;
 let result = 0;
 for (l=1;l<=n;l++){
    result = result + l

    }
    console.log(result)
    
 
 //  trying by giving result inside for loop

 let n=10;
 let l;
 let result =0;
 
 for (l=1;l<=n;l++){
  
    result = result + l
     console.log(result)
    }
    

    //while 
    /*
    initialization
    while(condition)
    {
    increment and decrement inside of while}
    */

    let i=0;
    while(i<=10)
{
    i= i +2 ;
    
    console.log(i)
}

//do while
/*
do
{
while(condition)}
*/

let num =20 ;
do
{
    console.log(num)
} while(num<10)

    // To break the loop - use break 

    let i=0;
    while(i<=10)
{
    i= i +2 ;
   
    if(i==4){
        break
    }
}
 console.log(i)

 // To skip any number in middle
/*let i
 for (i=1;i<=10;i++){
    if(i===6){
        continue;// continue is used here to skip the particular iteration 
    }
    console.log(i)
    console.log('inside loop')
 }
    */
   