// Promise.allSettled is another method available in JavaScript for handling multiple promises. It allows you to execute a group of promises concurrently, but unlike Promise.all, it doesn't short-circuit if any promise is rejected. Instead, it waits for all promises to settle (either resolve or reject) and then returns a single promise that resolves with an array of objects representing the outcome of each promise.



const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('First'), 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject('Error occurred in the second promise'), 500);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Third'), 1500);
});


Promise.allSettled([promise1, promise2, promise3])
.then(data=>{
    console.log(data)
})
.catch(err=>{
    console.log(err);
})



// //UseCases
// Batch Processing with Error Handling:
// Imagine you have a scenario where you need to fetch data from multiple endpoints, and you want to handle each request's outcome, whether it succeeds or fails. With Promise.allSettled, you can fetch data from all endpoints concurrently and handle each result or error independently.

