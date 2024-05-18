//reduce 


// reduce() is used to perform some kind of aggregation or computation on the elements of an array, such as summing them up, finding the maximum value, or concatenating strings. It iterates over each element of the array and accumulates a single result by applying a callback function on each iteration.





array.reduce(function(accumulator, currentValue, index, array) {
  // Return the updated accumulator value
}, initialValue);


// function(accumulator, currentValue, index, array): This is a function to be called for each element in the array. It takes four arguments:


// accumulator: The accumulated value so far. It starts with the initialValue if provided, otherwise, it starts with the first element of the array.
// currentValue: The current element being processed in the array.
// index (Optional): The index of the current element being processed in the array.
// array (Optional): The array reduce() was called upon.

// initialValue (Optional): A value to use as the initial value of the accumulator.
//  If not provided, the first element of the array will be used as the initial accumulator value and reduce() will start iterating from the second element.


// Summing up numbers in an array:

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce(function(accumulator,element){

//     return accumulator + element;

// }, 0);

// console.log(sum);



//first iteration  (accumulator = 0 , element = 1)  => 1
//second iteration (accumulator = 1 , element = 2 )  => 3
//third iteration (accumulator = 3 , element = 3 )  => 6
//fourth iteration (accumulator = 6 , element = 4 )  => 10
//fifth iteration (accumulator = 10 , element = 5 )  => 15


//dont pass an intial value


// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce(function(accumulator,element){

//     return accumulator + element;

// });

// console.log(sum);


//first iteration  (accumulator = 1 , element = 2)  => 3
//second iteration (accumulator = 3 , element = 3 )  => 6
//third iteration (accumulator = 4 , element = 4)  => 10
//fourth iteration (accumulator = 10 , element = 5 )  => 15



// Finding the maximum value in an array:


// const numbers = [10, 5, 20, 8, 15];


// const maxValue = numbers.reduce(function(accumulator,element){
//     return Math.max(accumulator, element);
// })

//first iteration  (accumulator = 10 , element = 5)  => 10
//second iteration (accumulator = 10 , element = 20 )  => 20
//third iteration (accumulator = 20 , element = 8)  => 20
//fourth iteration (accumulator = 20 , element = 15 )  => 20




// Counting occurrences of elements in an array:


const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const wordCount = words.reduce(function(accumulator, currentValue){
    
    if(accumulator[currentValue]!=undefined){
        accumulator[currentValue]= accumulator[currentValue]+1;
    }else{
        accumulator[currentValue]=1;
    }

    return accumulator;

},{})

console.log(wordCount);




//first iteration  (accumulator = {} , currentValue = apple )  => {apple:1}
//second iteration (accumulator = {apple:1} , currentValue = banana )  => {apple:1, banana:1} 
//third iteration (accumulator = {apple:1, banana:1}  , currentValue = apple)  => {apple:2, banana:1}
//fourth iteration (accumulator = 20 , currentValue = 15 )  => 20
// .
// .
// {apple: 3, banana: 2, orange: 1}