//PARALLEL

// // Import the 'fs' module
// const fs = require("fs");


// console.log('Before');

// // Read file asynchronously (non-blocking)
// fs.readFile('f1.txt', (err, data) => {
//   if (err) {
//     console.error('An error occurred:', err);
//     return;
//   }
  
//   console.log('This is File 1 data -> ' + data); // This is printed when the file is read
// });

// fs.readFile('f2.txt', (err, data) => {
//   if (err) {
//     console.error('An error occurred:', err);
//     return;
//   }
  
//   console.log('This is File 2 data -> ' + data); // This is printed when the file is read
// })


// fs.readFile('f3.txt', (err, data) => {
//   if (err) {
//     console.error('An error occurred:', err);
//     return;
//   }
  
//   console.log('This is File 3 data -> ' + data); // This is printed when the file is read
// })


// console.log('After');




//SEREIAL : F1, F2, F3
// Import the 'fs' module
const fs = require("fs");


console.log('Before');

// Read file asynchronously (non-blocking)
fs.readFile('f1.txt', (err, data) => {

  if (err) {
    console.error('An error occurred:', err);
    return;
  }
  console.log('This is File 1 data -> ' + data); // This is printed when the file is read


    fs.readFile('f2.txt', (err, data) => {
      if (err) {
        console.error('An error occurred:', err);
        return;
      }
      
      console.log('This is File 2 data -> ' + data); // This is printed when the file is read

            fs.readFile('f3.txt', (err, data) => {
              if (err) {
                console.error('An error occurred:', err);
                return;
              }
              
              console.log('This is File 3 data -> ' + data); // This is printed when the file is read
            })
    })
});


console.log('After');