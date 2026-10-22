function add(a, b) 
{ 
return a + b;
} 
let result = add(5, 3); 
console.log(result);

function greet(name = "Guest") 
{ 
console.log("Hello " + name); 
} greet();

const add = (a, b) => a + b; 
console.log(add(10, 5));

function greet(name, callback) 
{ 
console.log("Hello " + name); 
callback(); 
} 
function sayBye() 
{ 
console.log("Goodbye"); 
} 
greet("QA", sayBye);


function test() 
{ 
return; console.log("Hello"); 
} 
console.log(test());

function test() {
    console.log("Hello");
    return;
    console.log("World");
}

test();


function add(a, b) 
{ 
//console.log(a + b); 
return  a+b; 
} 
let result = add(2, 3); 
console.log(result);