//Creating a map
let student = new Map();//Map is predefined
console.log(student)

//adding key value pairs to map=> setmethod

student.set('Id',123)
student.set('name','Nisha')
console.log(student)

student.set('name','Nishath')
console.log(student)

// fetching the values =>get
console.log(student.get('name'))

// checking key is present or not => has
console.log(student.has('Ids'))

//deleting the entry
let student1 = new Map()
student1.set('Id',123)
student1.set('name','Nisha')
console.log(student1)
student1.delete('Id')
console.log(student1)
//size
console.log(student1.size)
console.log(student1.keys())

//

let student1 = new Map()
student1.set('Id',123)
student1.set('name','Nisha')
console.log(student1)

for (let key of student1.keys()){
    console.log(key + " its value is " + student1.get(key))
}

//set - main usage -avoiding duplicates while storing the value
//to check value there or not 

let student4 = new Set()
//adding elements
student4.add(1)
student4.add(2)
student4.add(1)
student4.add(2)
console.log(student4)

//size
console.log(student4.size)
console.log(student4.has(1))

student4.forEach()

let arr = [1,2,2,3,4,5,5]
let uniquenumber = new Set()
for (let num of arr)
{
    uniquenumber.add(num)
}
console.log(uniquenumber)



let arr = [1, 2, 2, 3, 4, 5, 5];

let seen = new Set();
let duplicates = new Set();

for (let num of arr) {
    if (seen.has(num)) {
        duplicates.add(num);
    } else {
        seen.add(num);
    }
}

console.log([...duplicates]);