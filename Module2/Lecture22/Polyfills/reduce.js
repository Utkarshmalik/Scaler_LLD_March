Array.prototype.customReduce = function(callback,initialValue){

        // Step 1: Throw a TypeError if 'callback' is not a function
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // Step 2: Set the startIndex  and accumulator
    let accumulator = arguments.length>=2 ? initialValue : this[0];
    let startIndex = arguments.length>=2 ? 0 : 1;

    // Step 3: Iterate over the array
    for(let i=startIndex;i<this.length;i++){

          // Step 4: Update the accumulator
         accumulator  = callback(accumulator, this[i],i,this);
    }

    // Step 5: Return the accumulated value
    return accumulator;
}

// Summing up numbers in an array:

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.customReduce(function(accumulator,element,index,arr){

    return accumulator + element;

},0);

console.log(sum);



//first iteration  (accumulator = 0 , element = 1)  => 1
//second iteration (accumulator = 1 , element = 2 )  => 3
//third iteration (accumulator = 3 , element = 3 )  => 6
//fourth iteration (accumulator = 6 , element = 4 )  => 10
//fifth iteration (accumulator = 10 , element = 5 )  => 15

