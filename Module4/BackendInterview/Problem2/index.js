


const { fork } = require("child_process");
const express = require("express");
const fs= require("fs");
const path = require("path");


const app  = express();



app.get("/fib",(req,res)=>{

    const {number} = req.query;

    const fibChildProcess= fork(path.join(__dirname,'fibWorker.js'));
    
    fibChildProcess.send({number:number});

    fibChildProcess.on("message",(result)=>{
    return res.status(200).send({
        status:"success",
        answer:result
    })
    })

    console.log("Hello");

})




app.listen(3000,()=>{
    console.log(`Server is running on port 3000`);
})


// Child Process: A child process is a separate instance of the Node.js runtime. It runs independently of the parent process and does not share memory with it. Communication between the parent and child processes happens through inter-process communication (IPC) mechanisms, such as messages or pipes.

// Thread: A thread, on the other hand, is a smaller unit of execution within a process. Threads share the same memory space and can directly communicate with each other. Node.js is single-threaded by nature, meaning it has a single main event loop and handles tasks asynchronously using non-blocking I/O.
