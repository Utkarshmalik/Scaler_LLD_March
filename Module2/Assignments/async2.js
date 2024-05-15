// Problem Statement:
// Write a function promiseSum that takes two integers, a and b, and returns a Promise. The Promise should resolve with the sum of a and b if both are positive; otherwise, it should reject with an error message.


// function promiseSum(a,b){

//     return new Promise((resolve, reject)=>{

//         if(a>0 && b>0){
//             resolve(a+b);
//         }else{
//             reject("Both numbers must be positive");
//         }

//     })

// }


// promiseSum(3, -5)
//     .then(result => console.log(result)) 
//         .catch(error => console.error(error));



// Problem 3: Timeout Promise
// Problem Statement:
// Write a function timeoutPromise that takes a delay time in milliseconds and returns a Promise. The Promise should resolve after the specified delay.


function timeoutPromise(delay){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve(`Promise resolved after ${delay} milliseconds`);
        },delay)

    })
}

timeoutPromise(2000)
    .then(result => console.log(result))
        .catch(error => console.error(error));
