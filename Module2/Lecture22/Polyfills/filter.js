// filter

Array.prototype.customFilter = function(callback){

    // Step 1: Throw a TypeError if 'callback' is not a function
    if(typeof callback !== 'function'){
          throw new TypeError(callback + ' is not a function');
    }

   // Step 2: Create a new empty array for the output
    let output=[];

        // Step 3: Iterate over the array
    for(let i=0;i<this.length;i++){
        
      // Step 4: Execute 'callback' for each element
        // If 'callback' returns true, push the current element to 'output'
        let shouldInclude  = callback(this[i],i,this);

        if(shouldInclude){
            output.push(this[i]);
        }
    }

    
        // Step 5: Return the new array
    return output;
}












const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const evenNumbers =  numbers.customFilter(function(element,index,arr){


    //return  a boolean 

    //true : that element will be added to the output array 
    //false : that element wont be added to the output array 

    return element % 2 === 0;
})


console.log(evenNumbers);






// Filtering people above a certain age from an array of objects:

const people = [
  { name: 'John', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 }
];

const adults = people.customFilter(function(person){
    return person.age>=30;
})

console.log(adults);




const products = [
  { name: 'Laptop', price: 1200 },
  { name: 'Headphones', price: 80 },
  { name: 'Smartphone', price: 600 },
  { name: 'Tablet', price: 300 },
  { name: 'Smartwatch', price: 150 },
];


const filteredProducts = products.customFilter(function(product){
    return product.price<=200;
})



console.log(filteredProducts);










