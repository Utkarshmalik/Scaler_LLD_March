// Following are the types of programming paradigms:

// Procedural Programming Paradigm(eg:- C )
// Object Oriented Paradigms(eg:- Java, C++)
// Functional Programming Paradigm(eg:- javascript)

// Callback Functions
// These are the functions that can be passed to another function as an argument.

// function printName(cb){
//     console.log("Utkarsh");
//     cb();
// }


// function printLastName(){
//     console.log('Malik')
// }

// function printAge(){
//     console.log(29)
// }

// printName(printLastName);
// printName(printAge);




// function printName(cb1, cb2, cb3){
//     console.log("Utkarsh");
//     cb1();
//     cb2();
//     cb3();
// }


// function printLastName(){
//     console.log('Malik')
// }

// function printAge(){
//     console.log(29)
// }

// function printAddress(){
//     console.log("Gurgaon")
// }

// printName(printLastName, printAge, printAddress);









function doSomethingAfter2Sec(){
    console.log("I am learning JS in the best possible manner");
}


setTimeout(doSomethingAfter2Sec,2000);