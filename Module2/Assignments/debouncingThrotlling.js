// Class-17 (debouncing Throttling)
// Question 1: Simple Debouncing
// Problem Description:

// Create a simple debouncing function in JavaScript. Write a function debounce(func, delay) that takes a function func and a time delay in milliseconds. Ensure that func is only called after the specified delay has passed since the last invocation.

// Hints:

// Use setTimeout to delay the execution of the function.
// Clear the timeout on subsequent calls to reset the timer.
// Ensure that the function is executed after the delay has passed.



// function debounce(fnToMakeANetworkCall, delay=1000){

//     let timerId   = null;

//     return function(e){

//     console.log("User has entered ",e.target.value);


//         if(timerId!=null){
//         console.log("clearing thre previous timer");
//           clearTimeout(timerId);
//         }


//         timerId = setTimeout(()=>{
//             fnToMakeANetworkCall(e);
//             timerId=null;
//             },delay)
//     }
// }