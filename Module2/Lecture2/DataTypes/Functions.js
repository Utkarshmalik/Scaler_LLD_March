// Functions are abstract bodies defined to do a particular task. The function is defined using the function keyword in JavaScript followed by the function name with parentheses.

// //Function Declaration
// function serveBeverage(drink){
//     console.log(drink);
// }

// //Function Invocation 
// serveBeverage("tea");

// console.log(typeof serveBeverage);



//functions are first class citizens in JS 


// In JavaScript, functions are considered first-class citizens, which means they can be treated like any other data type.

// Ways of defining function in javascript




// function sayHi(){
//     console.log('utkarsh says hi')
// }
// // calling function
// sayHi()



// let x=5;



//Function expressions 

// let sayMyName = function(){
//     console.log("My name is SuperMan");
// }

// // calling function
// sayMyName();


// function add(a,b){

//     return a+b;
// }

// console.log(add(3,5));



//you can return functions from functions 

// function parent(){

//     return function(){
//         console.log("I am being returned from parent function");
//     }
// }


// let x=parent();
// x();



// you can even pass functions as arguents to functions 


// function add(a,b){
//     return a+b;
// }

// function average(a,b,f){

//     return f(a,b)/2;
// }

// const answer= average(5,9,add);
// console.log(answer);






var sayHi = function(){
    console.log('utkarsh says hi')
}

var anotherSayHi = sayHi;



console.log(sayHi === anotherSayHi);





