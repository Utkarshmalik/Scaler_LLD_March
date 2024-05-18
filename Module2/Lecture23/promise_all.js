
// Promise.all is a method in JavaScript that allows you to execute multiple promises concurrently and then perform a single action after all of them have resolved. It's particularly useful when you need to execute multiple asynchronous operations and handle the result when all of them are complete.


// Input: It takes an array (or any iterable) of promises as its input. These promises represent the asynchronous tasks that you want to execute concurrently.

// Execution: Promise.all starts executing all the promises in parallel. Each promise begins its asynchronous operation.

// Waiting for Completion: The main thread waits until all promises in the array have resolved or one of them has been rejected.

    // If all the promises in the array resolve successfully, the returned promise resolves with an array containing the resolved values of each promise, in the same order as the input array.
    // If any of the promises are rejected, the returned promise is immediately rejected with the reason of the first promise that was rejected.



// const promise1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         //  resolve("First");
//         reject("Error");
//     },1000);
// });


// const promise2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//          resolve("Second");
//     },500);
// });


// const promise3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//          resolve("Third");
//     },2500);
// });


// Promise.all([promise1, promise2, promise3])
// .then(values => {
//     console.log(values)
// })
// .catch(err=>{
//     console.log(err);
// })









//Example 2 

// function fetchUserData() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve({ userId: 1, username: "JohnDoe" }), 1000);
//     });
// }


// function fetchUserPosts() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(["Post 1", "Post 2", "Post 3"]), 1000);
//     });
// }


// Promise.all([fetchUserData(), fetchUserPosts()])
// .then(results=>{
//     console.log("User data: ",results[0]);
//     console.log("User Posts:", results[1]);
// })



//Example 3 

// const urls = ['https://jsonplaceholder.typicode.com/posts/1', 'https://jsonplaceholder.typicode.com/posts/2'];

// const promises = urls.map(url => fetch(url).then(response => response.json()));

// Promise.all(promises)
// .then(data=>{
//     console.log(data)
// })
// .catch(err=>{
//     console.log(err);
// })