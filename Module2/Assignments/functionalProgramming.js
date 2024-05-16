//functional programming 

// Problem Description:
// Write a JavaScript function named sumArray that takes an array of numbers and returns the sum of all the numbers in the array using the reduce() method.

// Inputs:

// An array of numbers.
// Outputs:

// A number representing the sum of the array.



// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce(function(accumulator,element){

//     return accumulator + element;

// }, 0);

// console.log(sum);


// Question 2: Filtering Out Odd Numbers

// // Problem Description:
// // Write a JavaScript function named filterOutOdd that uses the filter() method to filter out odd numbers from an array.

// // Inputs:

// // An array of numbers.
// // Outputs:

// // An array of numbers without odd numbers.


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers =  numbers.filter(function(element){
//     return element % 2 === 0;

// })

// Question 3: Doubling Each Value

// Problem Description:
// Write a JavaScript function named doubleValues that takes an array of numbers and returns a new array where each number is doubled using the map() method.

// const numbers = [1, 2, 3, 4, 5];


// function operation(element,index){
// return element * 2;
// }

//  const doubledNumbers   = numbers.map(operation)

// console.log(doubledNumbers);



// Question 4: Checking for All Positive Values

// Problem Description:
// Write a JavaScript function named allPositive that checks whether all numbers in a given array are positive using the every() method.

// Inputs:

// An array of numbers.
// Outputs:

// A boolean value. Return true if all numbers are positive, otherwise false.


const isPositive = (currentValue) => currentValue > 0;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isPositive));


// Question 5: Find the First Negative Value

// Problem Description:
// Write a JavaScript function named findFirstNegative that finds and returns the first negative number in an array using the find() method.

// Inputs:

// An array of numbers.
// Outputs:

// A number representing the first negative number in the array or undefined if there are no negative numbers.

const firstNegative   = arr.find((number)=>{
    return number < 0;
})