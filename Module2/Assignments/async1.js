// // Problem 1: Delayed Sum
// // Problem Statement:
// // Write a function delayedSum that takes two integers, a and b, and a callback function callback. The function should use setTimeout to delay calling the callback for 1000 milliseconds and then pass the sum of a and b as an argument to the callback.



// // function delayedSum(a,b,callback){
// //     setTimeout(()=>{
// //         callback(a+b);
// //     },1000)
// // }



// // Problem 2: Periodic Printer
// // Problem Statement:
// // Write a function periodicPrinter that takes a string message and an interval timeInterval in milliseconds. The function should use setInterval to print the message every timeInterval milliseconds until explicitly stopped.


// // function periodicPrinter(message, timeInterval){

// //     const intervalId =  setInterval(()=>{
// //         console.log(message);
// //     },timeInterval)

// //     return intervalId;
// // }

// // const intervalId  = periodicPrinter("Hello World",2000);

// // //stop after 10 seconds 

// // setTimeout(()=>{
// //     clearInterval(intervalId);
// // },10000)


// // Problem 3: Callback Chain
// // Problem Statement:
// // Write a function callbackChain that takes an array of functions as callbacks. The functions should be executed one after another in the order they are provided, with a delay of 500 milliseconds between each execution.


// function callbackchain(callbacks){

//     let totalCallbacks = callbacks.length;


//     function executeCallback(callbackIndex){

//         if(callbackIndex >= totalCallbacks){
//             return;
//         }

//         callbacks[callbackIndex]();

//         setTimeout(()=>{
//             executeCallback(callbackIndex+1);
//         },500)

//     }

//     executeCallback(0);
// }


// callbackchain([
//     () => console.log("First callback"),
//     () => console.log("Second callback"),
//     () => console.log("Third callback")
// ]);