// Synchronous and asynchronous programing 

// Asynchronous programming is a programming paradigm that allows tasks to be executed independently of the main program flow and at the end we call the tasks get the results and Voila!



// In synchronous JavaScript, operations that take time to complete (like reading from a file or querying a database) block further execution of the code until they are finished. 

// This can lead to a situation where the browser or the code appears frozen or unresponsive because it's waiting for each task to complete in turn before moving on to the next task


// In asynchronous JavaScript, functions that take some time to complete (like fetching data from a server) don't stop the browser from doing other things. Instead, you provide a function that will be called back once the task is done,


//  This makes for a more efficient and better user experience because the web page or the code doesn't freeze while waiting for tasks to complete






// function syncFunction() {
//   console.log("Hello");
// }


// console.log("Start");

// syncFunction();

// console.log("End");





// console.log("Checkpoint: 1");


// function sayHii(){
//     console.log("Checkpoint: 2 , say Hii");
//     console.log("");
// }


// setTimeout(sayHii , 3000);


// console.log("Checkpoint: 3");


console.log(1);


setTimeout(()=>{
    console.log(2);
},0)

console.log(3);