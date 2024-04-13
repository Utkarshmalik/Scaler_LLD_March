const fs = require("fs");


async function displayFileContent(){

    try{
const data1 =  await fs.promises.readFile("./f1.txt");
console.log("Content "+ data1);
const data2  = await fs.promises.readFile("./f5.txt");
console.log("Content "+ data2);
const data3  = await fs.promises.readFile("./f3.txt");
console.log("Content "+ data3);
    }
    catch(err){
        console.log(err);
    }

}

displayFileContent();









// console.log("Before");

// const p1 = fs.promises.readFile("./f6.txt");

// p1.then((data1)=>{
//     console.log("Content "+ data1);
//     const p2 = fs.promises.readFile("./f2.txt");
//     return p2;
// })
// .then((data2)=>{
//     console.log("Content "+ data2);
//     const p3 = fs.promises.readFile("./f3.txt");
//     return p3;
// })
// .then((data3)=>{
//     console.log("Content "+ data3);
// })
// .catch((err)=>{
//     console.log("Error"  + err);
// })

// console.log("After");
