

// Arrays


// The array is a data structure to store multiple values of multiple data types. The elements are stored in an indexed manner.

// let arr = [];

// let arr1= [1,2,3,4,5,6,7,8];

// let arr2 = [1,'Scaler',true,undefined,null,[5,6,7]];

// //Accessing array element

// console.log(arr2[0]);
// console.log(arr2[1]);
// console.log(arr2[2]);
// console.log(arr2[3]);
// console.log(arr2[4]);
// console.log(arr2[5]);
// console.log(arr2[6]);
// console.log(arr2[7]);


// console.log(typeof arr1);


let cars = ['swift', 'BMW', 'Audi'];


// Push Method: Inserting an element into an array at the end

cars.push("Mercedes");
console.log(cars);

//Pop Method: Delete the element from the end of the array

cars.pop();
console.log(cars);

// Unshift Method Insert an element at the start of an array(0th index).

cars.unshift("Urus");
console.log(cars);



// Shift Method Remove the 0th index element of an array.

cars.shift();
console.log(cars);

console.log(cars);
cars[2] = 'Mercedes';
console.log(cars);

// instead of cars.push['Mercedes']


cars[20] = 'Mercedes';
console.log(cars);
