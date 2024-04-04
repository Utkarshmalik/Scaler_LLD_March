// filter



// array.filter(function(currentValue, index, array) {
//   // Return true to keep the element, false to discard it
// });

// currentValue: The current element being processed in the array.
// index (Optional): The index of the current element being processed in the array.
// array (Optional): The array map() was called upon.


// Filtering even numbers from an array:

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// const evenNumbers =  numbers.filter(function(element){


//     //return  a boolean 

//     //true : that element will be added to the output array 
//     //false : that element wont be added to the output array 

//     return element % 2 === 0;

// })


// console.log(evenNumbers);



// Filtering out null or undefined values from an array:

// const mixedValues = [1, null, 'hello', undefined, 42, 'world', null, 100];


// const requriedValues = mixedValues.filter(function(element){
//     return element!=null && element!=undefined;
// })

// console.log(requriedValues);


// Filtering people above a certain age from an array of objects:

// const people = [
//   { name: 'John', age: 30 },
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 35 }
// ];

// const adults = people.filter(function(person){
//     return person.age>=30;
// })

// console.log(adults);



// Give me the name of all the products whose price is <= 100$ s 

// const products = [
//   { name: 'Laptop', price: 1200 },
//   { name: 'Headphones', price: 80 },
//   { name: 'Smartphone', price: 600 },
//   { name: 'Tablet', price: 300 },
//   { name: 'Smartwatch', price: 150 },
// ];


// const filteredProducts = products.filter(function(product){
//     return product.price<=200;
// })

// const filteredProductNames = filteredProducts.map((product)=>{
//     return product.name;
// })

// console.log(filteredProductNames);










const products = [
  { name: 'Laptop', price: 1200 },
  { name: 'Headphones', price: 80 },
  { name: 'Smartphone', price: 600 },
  { name: 'Tablet', price: 300 },
  { name: 'Smartwatch', price: 150 },
];


const filteredProducts = products.filter((product) => product.price<=200);
const filteredProductNames = filteredProducts.map((product)=> product.name)

console.log(filteredProductNames);
