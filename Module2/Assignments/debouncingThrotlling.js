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

// Question 2: Basic Throttling
// Problem Description:

// Implement a basic throttling function in JavaScript. Write a function throttle(func, delay) that ensures func is called at most once every delay milliseconds.


// function throatle(fnToMakeNetworkCall, interval=500){

//     let intervalInProgess = false;
    
//     return function(e){

//         console.log("Button is clicked");

//         if(intervalInProgess){
//             console.log("Return , as interval is still in progress");
//             return;
//         }


//         fnToMakeNetworkCall(e);
//         intervalInProgress = true;

//             setTimeout(()=>{
//             intervalInProgress = false
//         },interval)

//     }


// }


// Question 3: Basic Throttling with Trailing Edge
// Problem Description:

// Implement a throttling function with a trailing edge. Write a function throttleTrailing(func, delay) that ensures func is called at most once in the specified time interval with the trailing edge.
