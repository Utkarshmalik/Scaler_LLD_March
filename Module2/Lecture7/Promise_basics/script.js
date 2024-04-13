//Definition 

// Promises provide a structured way to manage asynchronous tasks
// making it easier to handle and coordinate complex operations without getting lost in callback hell.

// Majorly Promise has two properties.
// Value: Represents current value inside that object
//     Undefined, initially value is undefined
//     Value that was supposed to be here
// State: There can be two states
//     Pending, initially state is pending
//     Fulfilled , Rejected 


//then 
// The then method is used to attach success callbacks to promises. 
// It allows you to specify what should happen when the promise is resolved successfully.

let fs = require("fs");



// Promise Consuming

// let promise = fs.promises.readFile("f1.txt");

// console.log(promise);

// //success callback , //failure callback 

// function onPromiseFulfilled(value){
//     console.log("Promise is fulfilled");
//     console.log(value);
// }

// function onPromiseRejected(err){
//     console.log("Promise is rejected");
//     console.log(err);
// }

// promise.then(onPromiseFulfilled,  onPromiseRejected);

// then: Promise gives us a method named then which is an event listener over promise and it triggers when the promise is resolved(the task is done).
// catch: catch is also an event listener over promise and it triggers when the promise is rejected(you get an error).

// promise
// .then(onPromiseFulfilled)
// .catch(onPromiseRejected);




// Promise creation



function orderBurger(){

    const promise = new Promise( (resolve,reject) =>{
        //async operation , depnding upon the operation , you either call resolve with value or you rejecct with some error

        //create a burger , it will take some time 

        setTimeout(()=>{
    

            resolve("BURGER-CHEESE");
      
            // reject("Cheese is not avaialble");

        },3000)

    } );

  
    return promise;
}


const promise = orderBurger();

console.log(promise);

promise.then((function(value){
    console.log("Promise is resolved");
    console.log("I have got the burger "+ value);
}))
.catch((err)=>{

    console.log("Promise is rejected");
    console.log(err);
})