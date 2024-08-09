// Problem Statement: How can a Node.js application effectively serve large files, such as a 400MB video, without exhausting the server's RAM and cache resources?



const express = require("express");
const fs= require("fs");
const path = require("path");


const app  = express();


app.get("/download-full",(req,res)=>{

    const filePath = path.join(__dirname, 'LargeFile.txt');

    fs.readFile(filePath,(err,data)=>{

        if(err){
             console.error('File reading error:', err);
           res.status(500).json({ error: 'Internal Server Error' });
           return;
        }

      res.setHeader('Content-Type', 'text/plain');

      res.send(data);
    })


})


app.get("/download-via-stream",(req,res)=>{

    const filePath = path.join(__dirname, 'LargeFile.txt');

    const readableStream = fs.createReadStream(filePath,{
        highWaterMark:80000
    });
    // const writableStream = fs.createWriteStream('copyFileNew');

    // The pipe() function is a method on Readable streams and is used to connect a readable stream to a writable stream. It automatically handles the data transfer from the readable stream to the writable stream. To simplify your code using the pipe method, you can replace the manual read and write operations with a single pipe() call.

    // readableStream.pipe(res);


    readableStream.on('data',(chunk)=>{
          console.log(`Received ${chunk.length} bytes of data.`);

        //   writableStream.write(chunk);

    })

    // readableStream.on("end",()=>{
    //     writableStream.end();
    //     console.log("Finished reading file");
    // })


})


//stream 

// Readable: Stream to read the data (fs.createReadStream), HTTP request object.
// Writable: Stream for writing the data (createWriteStream).




app.listen(3000,()=>{
    console.log(`Server is running on port 3000`);
})


// Inbuilt Modules

// http: For creating HTTP servers.
// fs: For handling file system operations.
// path: For working with file and directory paths.

// Third Party Modules

// Third-party modules are libraries or packages developed by the community, available through npm (Node Package Manager).

// Usage: They are installed using npm install <package_name> and included in your project using require().




// What is NodeJS

// JavaScript on the Server: Traditionally, JavaScript was used only in web browsers. Node.js allows you to use JavaScript to write server-side code, meaning you can write the logic that runs on your server using JavaScript.
// Runtime Environment: It's not a programming language or a framework, but a runtime environment that allows JavaScript to be run on the server side.
// Built on Chrome's V8 Engine: Node.js runs on the V8 JavaScript engine, which powers Google Chrome. This means it's incredibly fast and efficient at running JavaScript code.


// Main Features 

// Non-Blocking
// Event-Driven Architecture
// Single-Threaded

Browsers and Node.js


APIs and Global Objects 

// Browsers: Provide a runtime environment for client-side JavaScript, enabling interaction with web pages (DOM manipulation), handling user events, and rendering content.
// Node.js: Provides a server-side runtime environment. It extends JavaScript capabilities to interact with the filesystem, perform network operations, and run applications outside of a browser context.


// Browser Environment and APIs: In a web browser, APIs like the DOM, fetch, and others are directly available as part of the browser's global environment. You don't need to import them using require or any other import mechanism.

// Node.js Environment and APIs: Node.js uses a module system (CommonJS, specifically). Most of its core functionality, like file system (fs), networking (http), path operations (path), etc., are organized as modules. To use these modules, you need to import them into your script using the require function.
