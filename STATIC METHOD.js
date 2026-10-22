class mathoperation{
    static add(a,b){// static method ,uses the word statuc
        return a+b;
    }
    multiply(a,b){// instance variable , does not have any word
        return a*b
    }
}
let result = mathoperation.add(3,1) // static - object is not required to declare
console.log(result)

let calobj = new mathoperation()//to call instance method multiply  - Object(calobj) is created for class(mathoperation)
calobj.multiply(2,2)// operation multiply is called using an object


///////Promise static methods

//promise.resolve(value)
let resolvedpromise = Promise.resolve("validation is successful")//Promise declaration

resolvedpromise.then(result => {console.log(result)}) //consumption of promise

//second static method -error promise

//promise.reject(error)
let rejectpromise = Promise.reject("error in login")

resolvedpromise.then(result => {console.log(result)})
.catch(error=>{console.log(error)};
)