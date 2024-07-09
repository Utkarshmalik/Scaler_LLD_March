// The `http` module in Node.js is used to create HTTP servers and clients, enabling communication over the Hypertext Transfer Protocol (HTTP). This module is essential for building web applications, APIs, and services. It provides a simple way to create a server that listens for requests and responds to them.


const http = require("http");

//create a HTTP server


// const server =  http.createServer((req, res)=>{

//   // Set response header
//   res.setHeader('Content-Type','text/plain');
    
//   // Write response content
//   res.write('Hello World');

//     // End the response
//     res.end();

// });





const server =  http.createServer((req, res)=>{

  // Set response header with Content-Type as text/html
  res.setHeader('Content-Type','text/html');
    
  // Write response content
  res.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1> We are learning nodejs today</h1>
        </body>
        </html>`);

    // End the response
    res.end();
    
});


const port = 3000;

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

