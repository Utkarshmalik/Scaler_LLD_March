// FS Module 


const fs = require("fs");


//Reading a File Async manner 

// console.log("Hello 1 ");

// fs.readFile("example.txt",'utf-8',(err,data)=>{
    
//     if(err){
//         console.error(err);
//         return;
//     }

//     console.log(data);
// })

// console.log("Hello 2");


//Reading a File in a sync manner 

// console.log("Hello1");

// const data = fs.readFileSync('example.txt','utf8');

// console.log(data);

// console.log("Hello2");



//Write a file in a async manner 


// console.log("Hello1");


// fs.writeFile('example1.txt','Hello , World How are you. We are learning NodeJS today','utf8',  (err)=>{

//     if(err){
//         console.error(err);
//         return;
//     }

//     console.log("File has been written successfully");

// }
// )

// console.log("Hello 2");


//Write a file in a sync manner 



// console.log("Hello1");


// try{
// fs.writeFileSync('newExample.txt','Hello , World How are you. We are learning NodeJS today','utf8');
// console.log("File has been written successfully");

// }
// catch(err){
//     console.error(err);
// }

// console.log("Hello 2");


// fs.mkdir();
// fs.mkdirSync();

// fs.rmdirSync();
// fs.rmdir();


// console.log("Hello1");
// fs.rename('example2.txt','example1.txt',(err)=>{

//     if(err){
//         console.error(err);
//         return;
//     }

//     console.log("File has been renamed");

// })
// console.log("Hello2");




// console.log("Hello1");

// const directoryName = "my-directory";

// fs.mkdir(directoryName,(err)=>{

//     if(err){
//             console.error(`Error creating directory: ${err}`);
//     }else{
//         console.log(`Directory "${directoryName}" created successfully.`);
//     }
// })
// console.log("Hello2");





//delete a fiile async 


// fs.unlink('example1.txt',(err)=>{

//     if(err){
//         console.error(err);
//         return;
//     }
    
//     console.log("File has been deleted successfully");
// })


//remove  a directory 

// console.log("Hello1");

// const directoryName = "my-directory";

// fs.rmdir(directoryName,{recursive:true},(err)=>{

//     if(err){
//             console.error(`Error deleting directory: ${err}`);
//     }else{
//         console.log(`Directory "${directoryName}" delelted  successfully.`);
//     }
// })
// console.log("Hello2");



// const directoryPath = '/Users/utmalik/Scaler_LLD_March/Module4/Lecture2/my-dir2';


// if(fs.existsSync(directoryPath)){
//       console.log(`The directory "${directoryPath}" exists.`);
// }else {
//   console.log(`The directory "${directoryPath}" does not exist.`);
// }