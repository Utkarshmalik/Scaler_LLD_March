
// Import the 'fs' module
// const fs = require("fs");


// console.log('Before');

// // Read file synchronously (blocking)
// let data1= fs.readFileSync('f1.txt'); 


// console.log('This is File 1 data -> ' + data1);


// console.log('After');










// Import the 'fs' module
const fs = require("fs");


console.log('Before');

// Read file asynchronously (non-blocking)
let data1= fs.readFile('f1.txt', function (err,data){

      if(err){
        console.log("An errror occured: ",err);
        return;
      }

  console.log('This is File 1 data -> ' + data); // This is printed when the file is read
} ); 


console.log('After');

