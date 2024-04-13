const fs = require("fs")


 const promise1 = fs.promises.readFile("./f1.txt");

 promise1.then((function(data1){
    console.log("Content "+data1);

      const promise2 = fs.promises.readFile("./f2.txt");

      promise2.then((function(data2){
         console.log("Content "+data2);

             const promise3 = fs.promises.readFile("./f3.txt");

            promise3.then((function(data3){
            console.log("Content "+data3);
           }))
            .catch(function(err){
               console.log("Something went wrong while reading file 3");
            })
      }))
      .catch(function(err){
         console.log("Something went wrong while reading file 2");
      })
 }))
 .catch(function(err){
    console.log("Something went wrong while reading file 1");
 })






let cleanRoom = function() {
  return new Promise(function(resolve, reject) {
    resolve('Cleaned The Room');
  });
};

let removeGarbage = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + ' then removed Garbage');
  });
};

let winIcecream = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + ' then won Icecream');
  });
};


cleanRoom()
.then(function(result1){
         console.log(result1);

   removeGarbage("Utkarsh")
   .then(function(result2){
         console.log(result2);


      winIcecream("Utkarsh")
      .then(function(result3){

         console.log(result3);

      })

   })

})