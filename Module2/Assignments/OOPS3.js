
// Question 1: Basics of Prototypal Inheritance
// Problem Statement:
// Create a simple JavaScript program to demonstrate prototypal inheritance. Define a constructor function Person that takes a name as a parameter and sets it as an instance property. Then, create two instances of Person and add a method to the prototype that allows each person to introduce themselves.


 
// function Person(name) {
//     this.name = name;
//  }

//  Person.prototype.introduce = function () {
//     return `Hi, I'm ${this.name}.`;
// };

//  let person1 = new Person('Jane')
// let person2 = new Person('James')



// Question 2: Using call for Simple Function Invocation with an Object
// Problem Statement:
// Create a function greet that takes a parameter and returns a greeting message. Define an object contextObject with a name property. Use the call method to invoke the greet function with contextObject as the context and generate a personalized greeting.




// function greet(){
//     return `Hello ${this.name}!`
// }

// const contextObject = {
//     name:"Utkarsh"
// }


//   greet.call(contextObject);



// function greet(name){
//     return `Hello ${name}!`
// }

// const contextObject = {
//     name:"Utkarsh"
// }


//   greet.call(contextObject, contextObject.name);




// Question 2: Grasping the Basics of "Bind"
// Problem Statement:
// You've just started learning about JavaScript functions and want to practice using the bind method. Create a function, basicBind, that takes an object and a string. Your goal is to use the bind method to create a new function with the provided object as the context and the string as a pre-set argument.


// function basicBind(obj, str){

//     function simpleFunction(args1,args2){
//         return this.value+args1+args2;
//     }

//     const boundFn=   simpleFunction.bind(obj, str);

//     return boundFn("is fun! ");

// }

// const testObject = {
//     value:"Learning Javascript "
// }


// const output = basicBind(testObject, "Programming ");

// console.log(output);