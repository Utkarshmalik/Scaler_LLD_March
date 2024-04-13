const fs = require("fs")


 const promise1 = fs.promises.readFile("./f1.txt");
 const promise2 = fs.promises.readFile("./f2.txt");
 const promise3 = fs.promises.readFile("./f3.txt");

 promise1.then((function(data1){
    console.log("Content "+data1);
 }))
 .catch(function(err){
    console.log("Something went wrong while reading file 1");
 })



 promise2.then((function(data2){
    console.log("Content "+data2);
 }))
 .catch(function(err){
    console.log("Something went wrong while reading file 2");
 })



 promise3.then((function(data3){
    console.log("Content "+data3);
 }))
 .catch(function(err){
    console.log("Something went wrong while reading file 3");
 })

