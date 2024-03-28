
// Primitive Data Types:

// Number
// String
// Boolean
// Null
// Undefined

// New Primitive Types:
// BigInt
// Symbol


//Reference DataTypes

//Functions
//Objects 
// Arrays 


//Numbers

// let a = 20;
// let b= 1000000;
// let c = 2.57;
// let d=-10.12;


// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);

//Strings

// Problem : JS '' and "" doen't support multiple line strings;

// let str = 'JavaScript'
// let str2 = "Hello";

// var statement = ` 

// My name is Utkarsh 

// Malik

// `;




// console.log(typeof str);
// console.log(typeof str2);
// console.log( typeof statement);


//Booleans 

// let isEven = true
// let isOdd = false

// console.log(typeof isEven);
// console.log(typeof isOdd);





//null and undefined


// undefined: This value is automatically assigned to variables that have been declared but not yet initialized with a value. 
// It is also the default return value of functions that do not explicitly return a value. 

//For example:


// let x;
// console.log(x);
// console.log(typeof x);



// function foo() {

// }

// console.log(foo());





// null : This is a value that represents the intentional absence of any object value. It needs to be explicitly assigned to a variable. 
// It is often used to indicate that a variable is intentionally empty or has no value.



let y= null;
console.log(y);
console.log(typeof y);  //object 

// Backward Compatibility: Changing the behavior of typeof null would potentially break existing code that relies on it returning "object". To maintain backward compatibility and not introduce breaking changes, JavaScript engines have kept this behavior consistent over the years.


// null is still a primitive value, not an object. It's just that the typeof operator doesn't always reflect this accurately. 






// undefined typically represents the absence of a value due to unassigned variables or the default return value of functions.
// null specifically indicates that a variable intentionally holds no value, often used to represent the absence of an object where an object is expected.



//IMportnce of Semicolon 

// function fun(){

//     return;

//     "hello";

// }

// console.log(fun());