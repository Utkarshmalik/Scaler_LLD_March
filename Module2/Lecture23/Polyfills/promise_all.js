
Promise.myPromiseAll = function(arrayOfPromises){

    
    return new Promise((resolve,reject)=>{

        let totalResolvedPromise  = 0;
        const countPromises = arrayOfPromises.length;
        const resolvePromiseArr= [];
        
        arrayOfPromises.forEach(((promise,index)=>{

            //wait for this complete to complete 

            promise
            .then((value)=>{
                //ith promise is resolved 
                totalResolvedPromise++;
                resolvePromiseArr[index]= value;

                if(totalResolvedPromise === countPromises){
                    resolve(resolvePromiseArr);
                }
            })
            .catch((error)=>{
                //ith promise got rejected
                reject(error);
            })
        }))
    })

}

const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
         resolve("First");
    },1000);
});


const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
         resolve("Second");
    },500);
});


const promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
         resolve("Third");
    },2500);
});


Promise.myPromiseAll([promise1, promise2, promise3])
.then(values => {
    console.log(values)
})
.catch(err=>{
    console.log(err);
})