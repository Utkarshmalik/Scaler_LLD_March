

array.map(function(currentValue, index, array) {
  // Return element for newArray, after executing something
});


// let arr=[1,2,3,4,5];


// let squareArr = [];

// for(let i=0;i<arr.length;i++){
//     squareArr.push(arr[i]*arr[i]);
// }

// console.log(squareArr);



// let arr = [1, 2, 3, 4, 5]

// function squareArrFn(arr){
//     let SquareArr = []
//     for(let i = 0 ; i < arr.length ; i ++ ){
//         SquareArr.push(arr[i] * arr[i])
//     }
//     return SquareArr;
// }

// let squareArrFinal = squareArrFn(arr)
// console.log(squareArrFinal)






// let arr=[1,2,3,4,5];



// let squaredValues = arr.map( function(element,index){
//     console.log(element,index);
//     return element * element;
// } );


// console.log(squaredValues);


//Doubling each number in an array:


// const numbers = [1, 2, 3, 4, 5];


// function operation(element,index){
// return element * 2;
// }

//  const doubledNumbers   = numbers.map(operation)

// console.log(doubledNumbers);


// Converting Fahrenheit temperatures to Celsius:

// const fahrenheitTemperatures = [32, 68, 86, 104, 122];


// const celsiusTemperatures = fahrenheitTemperatures.map(function(fahrenheit) {
//   return (fahrenheit - 32) * (5/9);
// });


// console.log(celsiusTemperatures);



//Extracting properties from objects


const people = [
  { name: 'John', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 }
];

const names = people.map(function(element){
    return element.name;
})

console.log(names);



// map() is commonly used in scenarios where you need to transform each element of an array in a consistent way and create a new array with the transformed elements. 