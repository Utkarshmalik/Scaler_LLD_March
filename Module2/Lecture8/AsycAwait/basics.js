
// important things to note

// Await can only be used inside an async function
// You write the await keyword infornt of a Promise and it handles it


// Why Asnyc Await ? 


// Asynchronous operations are fundamental in JavaScript for non-blocking operations, such as fetching data from a server or reading files. While promises significantly improved asynchronous code readability, async/await further simplifies the syntax, allowing developers to write code that looks synchronous while executing asynchronously.


//Aync await is a syntax suagar ?

// . Under the hood, async/await still uses promises or similar asynchronous mechanisms, but it abstracts away the complexities of dealing with them directly, leading to cleaner and more readable code.









//Async Keyword 

// The async keyword allows you to define a function that handles asynchronous operations

// An asynchronous function returns a promise implicitly

// async function fetchData(){
//     return "Data fetched Aynchcronously";
// }

// const fetchDataPromise = fetchData();

// fetchDataPromise
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err);
// })



// 2. await Keyword:


// The await keyword is used inside an async function to pause execution until a promise is settled // (either fulfilled or rejected)





// let p = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("data from server");
//     },2000)
// });


// async function getData(){
//     let data = await p;
//     console.log(data);
// }

// getData();







let p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Something went wrong ");
    },2000)
});


async function getData(){
    try  {
    let data = await p;
    console.log(data);
    }
    catch(err){
        console.log(err);
    }
}

getData();










// p
// .then(data=>{
//     console.log(data)
// })
// .catch(err=>{
//     console.log(data);
// })


