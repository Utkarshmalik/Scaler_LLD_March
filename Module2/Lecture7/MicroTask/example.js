// console.log("Before");


// setTimeout(()=>{
//     console.log("Hello from set timeout");
// },0)



// setTimeout(()=>{
//     console.log("Another Hello from set timeout");
// },1000)


// console.log("After");



//Example 2 



// let fs = require("fs");


// console.log("Before");

// let promise = fs.promises.readFile("./f1.txt");

// promise.then(function(data){
//     console.log("content 1 " + data);
//      return fs.promises.readFile("./f2.txt");   
// })
// .then(function (data){
//     console.log("content 2 " + data);
//     return fs.promises.readFile("./f3.txt");   
// })
// .then(function(data){
//     console.log("content 3 "+ data);
// })
// .catch(function(err){
//     console.log("err ", err);
// })


// setTimeout(()=>{
//     console.log("Hello from set timeout");
// },5)

// console.log("After");



// Execution Contexts:

// When JavaScript code is executed, it runs within an execution context.
// Each function call or event handler creates a new execution context.



// Task Queues:
// JavaScript has two main types of task queues: the macro task queue and the micro task queue.
// Macro tasks include things like setTimeout, setInterval, and DOM events.
// Micro tasks are typically associated with promises and the queueMicrotask function.

// The microtask queue is where microtasks are queued for execution.

// Promises: When a promise is settled (resolved or rejected), its callbacks are added to the microtask queue.


// Microtask Queue:
// Higher Priority: Microtasks have a higher priority than macrotasks.
// Execution Order: Microtasks are executed before the next macrotask.
// Examples: Promises (resolved or rejected callbacks), queueMicrotask function.


// Macrotask Queue:
// Lower Priority: Macrotasks have a lower priority than microtasks.
// Execution Order: Macrotasks are executed after the microtask queue is empty.
// Examples: setTimeout, setInterval, DOM events.

console.log('Start');

// Microtask 1
Promise.resolve().then(() => {
  console.log('Microtask 1');
});

// Macrotask (setTimeout)
setTimeout(() => {
  console.log('Macrotask (setTimeout)');
}, 0);

// Microtask 2
queueMicrotask(() => {
  console.log('Microtask 2');
});


console.log('End');
