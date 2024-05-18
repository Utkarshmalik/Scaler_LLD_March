

Promise.myPromiseRace = function(arrayOfPromises){

    return new Promise((resolve,reject)=>{
        
        arrayOfPromises.forEach(((promise,index)=>{

            //wait for this complete to complete 

            promise
            .then((value)=>{
                //ith promise is resolved
                resolve(value);
            })
            .catch((error)=>{
                //ith promise got rejected
                reject(error);
            })
        }))
    })

}

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Task 1 completed'), 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Task 2 completed'), 1000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Task 3 completed'), 1500);
});


Promise.myPromiseRace([promise1, promise2, promise3])
.then(result => {
    console.log(result)
})
.catch(err => {
    console.log(err);
})

