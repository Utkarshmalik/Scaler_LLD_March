const fs = require("fs")

// chaining the next then with the previous then,
//  so in this case promise returned by the previous then will be treated as an input promise for the next then.


// , if any of the promises are rejected, the execution jumps directly to the .catch() method, skipping any remaining .then() methods. 


console.log("Before");

const p1 = fs.promises.readFile("./f6.txt");

p1.then((data1)=>{
    console.log("Content "+ data1);
    const p2 = fs.promises.readFile("./f2.txt");
    return p2;
})
.then((data2)=>{
    console.log("Content "+ data2);
    const p3 = fs.promises.readFile("./f3.txt");
    return p3;
})
.then((data3)=>{
    console.log("Content "+ data3);
})
.catch((err)=>{
    console.log("Error"  + err);
})

console.log("After");




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
.then(function(result){
    return removeGarbage(result);
})
.then(function(result){
    return winIcecream(result)
})
.then(function(result){
    console.log("finished ",result);
})