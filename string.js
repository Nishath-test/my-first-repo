let str = 'Nishath'
console.log(typeof(str))

let a  = 'Nishath'
let b = 'Fathima'
let c = `This is ${b}`//template literal - mentioned in back tick 

//strings are immutable - means allocated memory will not allow to change memory allocated 
let str  = 'Nishath'
str  = 'Fathima'
console.log(str)

let empname ='Nishath'
empname[0]='K'
console.log(empname)

//ESCAPE CHARACTERS   n t '
let  strname = "hi \"Nishath\""//This is how escape character is declared giving \"m\"
console.log(strname)


let  strname = "hi \n\"Nishath\""
console.log(strname)


//uppercase
strname ='Nishath'
console.log(strname.toUpperCase(strname))

console.log("NISHATH".toLowerCase())


console.log("NISHATH".length)
console.log("NISHATH".charAt(2))
console.log("NISHATHS".indexOf('s'))// when not available shows result as -1

//includes
console.log('I am Nishath'.includes('am',2))///searching starts 


let str  = 'Nishath'
console.log('aeiouAEIOU'.includes(str[1]))

//starts with
let messsage = "error : provide aadhar "

if(messsage.startsWith('warning')){
    console.log('It is a warning message')
}else if(messsage.startsWith('error')){
    console.log('It is a error message')
}

// substring -will fetch part of the string
console.log('Hello'.substring(0))
//console.log('Hello'.slice(0))
console.log('Hello'.substring(1,4))
//console.log('Hello'.slice(1,4))

//replace -replace its forst occurance
console.log('Nishath'.replace('th',''))
//replace all
console.log('Nisaath'.replaceAll('a','h'))

// slice
let str1 = 'Nishath Fathima'

console.log(str1.slice(5))

console.log(str1.slice(0,5))
// split it will take a  delimiter and split the string into array of strings
let split ='I am Nishath'
let split1=split.split('')
console.log(split1)


    let split ='Nishath'
    let split1=split.split('a')
    console.log(split1)

    //repeat will repeat the string n times
    let repeat ='*'
    console.log(repeat.repeat(4))

    //trim
    //trimstart
    //trimend

    let name ='                 Nisha        '
    console.log(name.trim())

    //padding
    //padding start
    //padding end

    console.log("5".padStart(3,'0'))

    console.log("5".padEnd(3,'0'))

    //concatinate

    console.log('Nishath'+' '+'Fathima')

    console.log('Nishath'.concat(' ','Fathima'))

    //index or char at -can found particular character - "Nishath"[1]=>i or "Nishath".charat(1)=a

    // trim
    //substring 

    
     let arrayofwords ='  Nishath is good     '.trim().split(' ')
     console.log(arrayofwords.length)

     let arrayofwords ='  Nishath is good     '.trim().split(' ')
     console.log(arrayofwords[arrayofwords.length-1])

     //rever 

     let str = 'Nishath'
     let rev =''
     
     for (let i = str.length - 1; i >= 0; i--){

        rev=rev + str[i] ;
}
console.log(rev)


let str = 'Nishath'
     let rev =''
     for( let char of str){ //a
        rev= char+rev//a+' ' --second lood va 
     }



javascript
let str = 'Nishath';
let rev = '';

for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
}

console.log(rev);


console.log('playwright'.split('').reverse().joi())


//palindrome
//count of vowels



//occurance 