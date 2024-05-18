


Promise.myPromiseAny = function(arrayOfPromises){

    
    return new Promise((resolve,reject)=>{

        let totalRejectedPromsies   = 0;
        const countPromises = arrayOfPromises.length;
        const rejectedReasonPromiseArr= [];
        
        arrayOfPromises.forEach(((promise,index)=>{

            //wait for this complete to complete 

            promise
            .then((value)=>{
                //ith promise is resolved 
                resolve(value);
            })
            .catch((error)=>{
                //ith promise got rejected
                totalRejectedPromsies++;
                rejectedReasonPromiseArr[index] = error;

                if(totalRejectedPromsies === countPromises){
                    reject(new AggregateError(rejectedReasonPromiseArr,"All promises were rejected"));
                }
            })
        }))
    })

}

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => reject('Promise 1 rejected'), 2000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('Promise 2 resolved'), 1000);
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => reject('Promise 3 rejected'), 1500);
// });

// Promise.myPromiseAny([promise1, promise2, promise3])
//   .then(result => {
//     console.log(result); // Output: Promise 2 resolved
//   })
//   .catch(error => {
//     console.error(error); // This block won't execute in this example
//   });




const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => reject('Error 1 '), 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject('Error 2'), 1000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => reject('Error 3'), 1500);
});


Promise.myPromiseAny([promise1, promise2, promise3])
.then(result => {
    console.log(result)
})
.catch(err => {
    console.log(err.message);
        console.log(err.errors);
})