// Step : Create a class with the classname Ex : Class Student 

class student{// step1 : Step : Create a class with the classname Ex : Class Student
    //variables
   
    name; // step 2 : creating variables 
    address;
    constructor(studentname,studentaddress){// step 5 : creating the constructor to initialise the variables mentioned inside the class 
        this.name= studentname;
        this.address= studentaddress;
    }
   

//methods
gotoschool(schoolname){ // step 3 : Creating methods -In class we call it as methods ,outside class we call it as function 
    console.log('goes to school:'+schoolname)
}
}

// create an object for classname () 
let student1 = new student('Nishath','123')// Step 4 : Creating an object for the class - new student -will have the same name as class name 
console.log(student1.name) // step 5 : calling the variables 
console.log(student1.address)
student1.gotoschool('WO')
