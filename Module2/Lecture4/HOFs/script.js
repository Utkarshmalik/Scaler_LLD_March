//  * HOF  -> are the function that accepts a fn as a parameter or returns a function

// function doubleNumbers(arr){

//   const result = [];

//   for(let i=0;i<arr.length;i++){
//     result.push(arr[i]*2);
//   }

//   return result;

// }

// function trippleNumbers(arr){

//   const result = [];

//   for(let i=0;i<arr.length;i++){
//     result.push(arr[i]*3);
//   }

//   return result;

// }
// const numbers = [1,2,3,4,5];
// const doubledNumbers = doubleNumbers(numbers);
// const trippledNumbers  = trippleNumbers(numbers);

// console.log(doubledNumbers);
// console.log(trippledNumbers);





// function operateOnArray(arr, operation){

//   const result = [];

//   for(let i=0;i<arr.length;i++){
//     result.push(operation(arr[i]));
//   }

//   return result;

// }

// function double(x){
//   return x*2;
// }

// function tripple(x){
//   return x*3;
// }


// const numbers = [1,2,3,4,5];
// const doubledNumbers = operateOnArray(numbers,double);
// const trippledNumbers  = operateOnArray(numbers,tripple);

// console.log(doubledNumbers);
// console.log(trippledNumbers);







// function multiplyBy5(x){
//   return x*5;
// }


// function multiplyBy10(x){
//   return x*10;
// }




// const x=1434;
// const num1 = multiplyBy5(x);
// const num2 = multiplyBy10(x);

// console.log(num1);
// console.log(num2);




// function createMultiplier(multiplier){

//   return function(x){
//     return x*multiplier;
//   }

// }

// const double = createMultiplier(2);

// console.log(double(5)); // Output: 10

// const triple = createMultiplier(3);


// console.log(triple(5)); // Output: 15





function compose(f,g){

  return function(x){
    return  f(g(x));
  }

}


function addOne(x) {
  return x + 1;
}

function double(x) {
  return x * 2;
}



const addThenDouble = compose(double, addOne);
console.log(addThenDouble(5));






// Higher-Order Functions provide a powerful tool for building modular, reusable, and expressive code in JavaScript by enabling functions to be manipulated and composed as first-class citizens. They facilitate functional programming techniques like map, filter, reduce, and function composition, which are foundational to many modern JavaScript libraries and frameworks.