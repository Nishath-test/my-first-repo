let a;
a=2
function print(){
    console.log(a)
}

print()



function print(b,c){
    d=b+c
    console.log(d)
}

print(2,4)


//function with return type
//Default data type is var
function product(num1,num2){
let result=num1+num2
return result
}

console.log(product(2,3))//calling function 

let output = product(4,5) // calling function by declaring

console.log(output)

//default parameter
function printstring(str='Hello'){
    console.log('print ' + str)
}
printstring()
printstring('Nishath')

//function Expression => function stored inside the variable
let addition = function addnum(a,b){//stored in the variable
    console.log(a+b)
}
addition(4,6)

//anonymous function 
let additionfunc = function (a,b){//stored in the variable
    console.log(a+b)
}

additionfunc(6.7)

//arrow function
//let functionname = ()=>{}

let functioname = (a,b)=>{
        return a*b;
}
console.log(functioname(5,6))

// if single statement no need paranthesis and return also need not be used
let functioname = (a,b)=>
         a*b;
console.log(functioname(5,6))

// if only one parameter can skip paranthesis also
let functioname = a=> a*a
console.log(functioname(2))

//Immediately invoked function => If you want to run immediately
// Syntax => ()()

    (function(){
        console.log('connect to DB')
    })()

    //CALLBACL FUNCTION 

        function mainfunction(messsage, callback){// call back - it is a variable , any name can be given for call back
            callback(4,5)
        }
        
        
        function sum(n1,n2){
            console.log(n1+n2)
        }

        mainfunction('Addition', sum)

        /// If function is called return should be used to pass to the calling function

        function add(a, b) 
{ 
//console.log(a + b); 
return  a+b; //This statement returns value to the result where result is calling add function 
} 
let result = add(2, 3); 
console.log(result);